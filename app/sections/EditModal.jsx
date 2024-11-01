import { useState, useEffect } from 'react';

const EditTaskDialog = ({ isOpen, onClose, task, onSave }) => {
  const [title, setName] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  useEffect(() => {
    if (task) {
      setName(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, title, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h3 className="text-xs font-semibold text-gray-900">Edit Task</h3>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setName(e.target.value)}
            className="text-xs mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
