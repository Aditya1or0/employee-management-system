const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Complete project report",
        description: "Finish the project report by the end of the week.",
        date: "2024-10-25",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team meeting.",
        date: "2024-10-23",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client presentation",
        description: "Prepare slides for the client presentation.",
        date: "2024-10-30",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "emp2@two.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Update project documentation",
        description:
          "Revise the project documentation with the latest updates.",
        date: "2024-10-22",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Submit expense report",
        description: "Submit the monthly expense report to HR.",
        date: "2024-10-24",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix bug in software",
        description: "Resolve the critical bug in the new software version.",
        date: "2024-10-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Organize team outing",
        description: "Plan the team's monthly outing activities.",
        date: "2024-11-01",
        category: "Team",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare annual budget",
        description:
          "Prepare the department's annual budget for the upcoming year.",
        date: "2024-11-10",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Onboard new employees",
        description: "Conduct onboarding sessions for the new hires.",
        date: "2024-10-28",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Complete training module",
        description: "Finish the mandatory cybersecurity training.",
        date: "2024-10-24",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Sita",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Check server logs",
        description: "Analyze the server logs for any anomalies.",
        date: "2024-10-22",
        category: "IT",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Conduct interview",
        description:
          "Interview the candidate for the senior developer position.",
        date: "2024-10-25",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create API documentation",
        description: "Write detailed API documentation for the new system.",
        date: "2024-10-29",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix database error",
        description: "Investigate and resolve the database connection issue.",
        date: "2024-10-28",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Rajesh",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Order office supplies",
        description: "Restock office supplies for the next quarter.",
        date: "2024-10-24",
        category: "Admin",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Organize client meeting",
        description: "Schedule and organize a meeting with the client.",
        date: "2024-10-27",
        category: "Client",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Submit feedback",
        description: "Provide feedback on the new employee handbook.",
        date: "2024-10-23",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Finalize team goals",
        description:
          "Collaborate with the team to finalize next quarter's goals.",
        date: "2024-10-30",
        category: "Team",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
