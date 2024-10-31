import { useState, useEffect } from 'react';

const EditTaskDialog = ({ isOpen, onClose, task, onSave }) => {
  const [name, setName] = useState(task?.name || '');
  const [role, setRole] = useState(task?.role || '');

  // Update local state when `task` changes
  useEffect(() => {
    if (task) {
      setName(task.name);
      setRole(task.role);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, name, role });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h3 className="text-xs font-semibold text-gray-900">Edit Task</h3>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-xs mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="text-xs mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="text-xs text-gray-500 hover:text-gray-700">Cancel</button>
          <button onClick={handleSave} className="text-xs bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskDialog;
