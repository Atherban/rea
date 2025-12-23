export type Project = {
    id: string;
    title: string;
    client: string;
    location: string;
    scope: string;
  };
  
  export const projects: Project[] = [
    {
      id: "p1",
      title: "LT Panel Supply & Installation",
      client: "Manufacturing Plant",
      location: "Karnataka, India",
      scope: "Design, manufacturing, testing, and site installation of LT panels.",
    },
    {
      id: "p2",
      title: "APFC Panel Implementation",
      client: "Commercial Complex",
      location: "Telangana, India",
      scope: "Supply and commissioning of APFC panels to improve power factor.",
    },
    {
      id: "p3",
      title: "PLC Automation for Process Line",
      client: "Process Industry",
      location: "Tamil Nadu, India",
      scope: "PLC programming, panel integration, and SCADA monitoring.",
    },
    {
      id: "p4",
      title: "DG Synchronization System",
      client: "Hospital Facility",
      location: "Andhra Pradesh, India",
      scope: "AMF and DG synchronization panels for uninterrupted power supply.",
    },
  ];
  