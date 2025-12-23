export type Service = {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    applications: string[];
  };
  
  export const services: Service[] = [
    {
      slug: "lt-electrical-panels",
      title: "LT Electrical Panels",
      shortDescription:
        "Low tension panels for safe and efficient power distribution.",
      longDescription:
        "We design and manufacture LT electrical panels for industrial and commercial applications. Our panels ensure reliable power distribution, safety compliance, and ease of maintenance. All panels are tested for performance and durability before dispatch.",
      applications: [
        "Industrial plants",
        "Commercial buildings",
        "Infrastructure projects",
        "Utilities",
      ],
    },
    {
      slug: "apfc-panels",
      title: "APFC Panels",
      shortDescription:
        "Automatic Power Factor Correction panels for energy efficiency.",
      longDescription:
        "Our APFC panels are designed to automatically maintain optimal power factor, reducing penalties and improving system efficiency. Panels are engineered based on load conditions and capacitor selection standards.",
      applications: [
        "Manufacturing units",
        "Textile industries",
        "Commercial complexes",
        "Process industries",
      ],
    },
    {
      slug: "mcc-pcc-panels",
      title: "MCC & PCC Panels",
      shortDescription:
        "Motor and power control panels for industrial operations.",
      longDescription:
        "We manufacture MCC and PCC panels for controlling and distributing power to motors and heavy electrical loads. These panels are built with proper protection, interlocking, and clear documentation.",
      applications: [
        "Process plants",
        "Pump stations",
        "Heavy industries",
      ],
    },
    {
      slug: "plc-scada-automation",
      title: "PLC & SCADA Automation",
      shortDescription:
        "Automation solutions using PLC and SCADA systems.",
      longDescription:
        "We provide PLC and SCADA based automation solutions for monitoring, control, and optimization of industrial processes. Our solutions are scalable, reliable, and designed for long-term operation.",
      applications: [
        "Process automation",
        "Water treatment plants",
        "Manufacturing automation",
      ],
    },
    {
      slug: "vfd-drive-panels",
      title: "VFD & Drive Panels",
      shortDescription:
        "Variable frequency drive panels for motor speed control.",
      longDescription:
        "Our VFD panels help achieve precise motor control, energy savings, and smooth operation. Panels are designed considering motor ratings, load profiles, and site conditions.",
      applications: [
        "HVAC systems",
        "Pumping systems",
        "Conveyors",
      ],
    },
    {
      slug: "amf-dg-panels",
      title: "AMF & DG Synchronization Panels",
      shortDescription:
        "Automatic mains failure and generator synchronization panels.",
      longDescription:
        "We design AMF and DG synchronization panels to ensure uninterrupted power supply during mains failure. Systems are configured for safety, reliability, and seamless changeover.",
      applications: [
        "Hospitals",
        "Data centers",
        "Commercial buildings",
      ],
    },
  ];
  