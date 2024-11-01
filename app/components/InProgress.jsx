const InProgress = ({ tasks, onStatusChange }) => {
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
            <div className="flex gap-4">
              <button
                onClick={() => onStatusChange(task.id, "Paused")}
                className="text-xs text-yellow-500 hover:text-yellow-700"
              >
                Pause
              </button>
              <button
                onClick={() => onStatusChange(task.id, "Done")}
                className="text-xs text-green-500 hover:text-green-700"
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default InProgress;
  