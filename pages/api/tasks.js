import fs from 'fs';
import path from 'path';

const tasksFilePath = path.join(process.cwd(), 'data', 'tasks.json');

const getTasksData = () => {
  const tasksData = fs.readFileSync(tasksFilePath);
  return JSON.parse(tasksData);
};

const writeTasksData = (data) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(data, null, 2));
};

const generateNewId = (tasks) => {
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
};

export default function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      if (id) {
        const tasks = getTasksData();
        const task = tasks.find((t) => t.id === parseInt(id));
        if (task) {
          res.status(200).json(task);
        } else {
          res.status(404).json({ message: 'Task not found' });
        }
      } else {
        const tasks = getTasksData();
        res.status(200).json(tasks);
      }
      break;

    case 'POST':
      const newTask = req.body;
      const tasks = getTasksData();
      newTask.id = generateNewId(tasks);
      tasks.push(newTask);
      writeTasksData(tasks);
      res.status(201).json({ message: 'Task added successfully', task: newTask });
      break;

    case 'PUT':
      if (!id) {
        res.status(400).json({ message: 'Task ID is required' });
        return;
      }
      try {
      const updatedTaskData = req.body;
      let tasksToUpdate = getTasksData();
      console.log('here', tasksToUpdate )
      tasksToUpdate = tasksToUpdate.map(task => task.id === updatedTaskData.id ? updatedTaskData : task);
      writeTasksData(tasksToUpdate);
      res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
      } catch (error) {
        res.status(500).json({ message: 'Failed to update task' });
      }

      // const taskIndex = tasksToUpdate.findIndex((t) => t.id === parseInt(id));

      // if (taskIndex > -1) {
      //   tasksToUpdate[taskIndex] = { ...tasksToUpdate[taskIndex], ...updatedTaskData };
      //   writeTasksData(tasksToUpdate);
      //   res.status(200).json({ message: 'Task updated successfully', task: tasksToUpdate[taskIndex] });
      // } else {
      //   res.status(404).json({ message: 'Task not found' });
      // }
      break;

    case 'DELETE':
      if (!id) {
        res.status(400).json({ message: 'Task ID is required' });
        return;
      }
      const tasksToDelete = getTasksData();
      const filteredTasks = tasksToDelete.filter((t) => t.id !== parseInt(id));

      if (filteredTasks.length !== tasksToDelete.length) {
        writeTasksData(filteredTasks);
        res.status(200).json({ message: 'Task deleted successfully' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
