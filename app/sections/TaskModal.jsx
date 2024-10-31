import { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskRole, setTaskRole] = useState('');

  const handleAddTask = () => {
    if (taskName && taskRole) {
      onAddTask({ name: taskName, role: taskRole });
      setTaskName('');
      setTaskRole('');
      onClose(); // Close the modal after adding the task
    }
  };

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xs font-semibold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="text-xs border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Task Role"
          value={taskRole}
          onChange={(e) => setTaskRole(e.target.value)}
          className="text-xs border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddTask}
            className="text-xs bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
          <button
            onClick={onClose}
            className="text-xs ml-2 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
