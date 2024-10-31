import { useState } from 'react';
import EditTask from "../sections/EditModal";

const ToDo = ({ tasks, onStatusChange, onDelete, onEdit }) => {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = (updatedTask) => {
    onEdit(updatedTask);
    setEditDialogOpen(false);
  };
    return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <li key={task.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-gray-900">{task.name}</p>
                <p className="text-xs text-gray-500">{task.role}</p>
              </div>
            </div>
            <button
              onClick={() => onStatusChange(task.email, "In Progress")}
              className="text-xs text-blue-500 hover:text-blue-700"
            >
              Start
            </button>
            <button
              onClick={() => handleEditClick(task)}
              className="text-xs text-yellow-500 hover:text-yellow-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.email)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
       <EditTask
       isOpen={isEditDialogOpen}
       onClose={() => setEditDialogOpen(false)}
       task={selectedTask}
       onSave={handleSaveEdit}
     />
     </div>
    );
  };
  
  export default ToDo;
  