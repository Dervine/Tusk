const ToDo = ({ tasks }) => {
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
          </li>
        ))}
      </ul>
    );
  };
  
  export default ToDo;
  