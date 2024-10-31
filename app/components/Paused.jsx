const ToDo = ({ tasks, onStatusChange }) => {
    return (
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
          </li>
        ))}
      </ul>
    );
  };
  
  export default ToDo;
  