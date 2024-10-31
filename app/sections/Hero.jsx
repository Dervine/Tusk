"use client";

import { useState } from 'react';
import ToDo from "../components/ToDo";
import InProgress from "../components/InProgress";
import Paused from "../components/Paused";
import Done from "../components/Done";

const initialTasks = [
  { name: 'Leslie Alexander', email: 'leslie.alexander@example.com', role: 'Co-Founder / CEO', status: 'Not Started' },
  { name: 'Michael Foster', email: 'michael.foster@example.com', role: 'Co-Founder / CTO', status: 'Not Started' },
  { name: 'Dries Vincent', email: 'dries.vincent@example.com', role: 'Business Relations', status: 'Not Started' },
  { name: 'Leslie Alexander', email: 'leslie2.alexander@example.com', role: 'Co-Founder / CEO', status: 'In Progress' },
  { name: 'Michael Foster', email: 'michael2.foster@example.com', role: 'Co-Founder / CTO', status: 'In Progress' },
  { name: 'Dries Vincent', email: 'dries2.vincent@example.com', role: 'Business Relations', status: 'Paused' },
  { name: 'Leslie Alexander', email: 'leslie3.alexander@example.com', role: 'Co-Founder / CEO', status: 'Paused' },
  { name: 'Michael Foster', email: 'michael3.foster@example.com', role: 'Co-Founder / CTO', status: 'Done' },
  { name: 'Dries Vincent', email: 'dries3.vincent@example.com', role: 'Business Relations', status: 'Done' },
];

const Hero = () => {
  const [allTasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", email: "", role: "" });

  const handleStatusChange = (email, newStatus) => {
    const updatedTasks = allTasks.map(task => 
      task.email === email ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasksByStatus = (status) => {
    return allTasks.filter(task => task.status === status);
  };

  const handleAddTask = () => {
    setTasks([...allTasks, { ...newTask, status: "Not Started" }]);
    setNewTask({ name: "", email: "", role: "" });
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Let's get things Done!
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  To Do
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden">
                  <ToDo tasks={filterTasksByStatus("Not Started")} onStatusChange={handleStatusChange} />
                  <button 
                    onClick={() => setModalOpen(true)} 
                    className="mt-4 w-full py-2 text-white text-xs bg-blue-500 hover:bg-blue-600 rounded"
                >
                    Add New Task
                </button>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">In Progress</p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <InProgress tasks={filterTasksByStatus("In Progress")} onStatusChange={handleStatusChange} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Paused</p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Paused tasks={filterTasksByStatus("Paused")} onStatusChange={handleStatusChange} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Done
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-blue-50 shadow-2xl">
                  <div className="px-6 pb-14 pt-6 text-white"><Done tasks={filterTasksByStatus("Done")} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
