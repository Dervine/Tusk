import React from 'react';

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [newTask, setNewTask] = React.useState({ name: "", email: "", role: "" });

  const handleAdd = () => {
    onAddTask(newTask);
    setNewTask({ name: "", email: "", role: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xs mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Name"
          className="text-xs w-full p-2 mb-4 border rounded"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="text-xs w-full p-2 mb-4 border rounded"
          value={newTask.email}
          onChange={(e) => setNewTask({ ...newTask, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="text-xs w-full p-2 mb-4 border rounded"
          value={newTask.role}
          onChange={(e) => setNewTask({ ...newTask, role: e.target.value })}
        />
        <button 
          onClick={handleAdd} 
          className="text-xs w-full py-2 text-white bg-green-500 hover:bg-green-600 rounded"
        >
          Add Task
        </button>
        <button 
          onClick={onClose} 
          className="text-xs w-full py-2 mt-2 text-white bg-red-500 hover:bg-red-600 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
