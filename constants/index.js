export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/activity.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Create Thread",
    },
    {
      imgURL: "/assets/group.svg",
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL: "/assets/profile.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/assets/needle.svg" },
    { value: "replies", label: "Replies", icon: "/assets/comment.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/profile.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/group.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];