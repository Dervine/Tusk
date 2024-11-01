const Paused = ({ tasks, onStatusChange, onDelete }) => {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-gray-900">{task.title}</p>
                <p className="text-xs text-gray-500">{task.description}</p>
              </div>
            </div>
            <button
              onClick={() => onStatusChange(task.id, "In Progress")}
              className="text-xs text-blue-500 hover:text-blue-700"
            >
              Start
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Paused;
  