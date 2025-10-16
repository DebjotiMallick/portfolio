export const navLinks = [];

export const experience = [
  {
    role: "SRE/DevOps Engineer",
    company: "IBM",
    period: "2021 - Present",
    description:
      "Lead reliability and automation across Kubernetes & OpenShift environments. Architect CI/CD pipelines for scalable and secure deployments. Manage KrakenD API gateway and TLS automation. Automate infrastructure with Helm and custom tooling. Enhance monitoring with Prometheus, Grafana & Alertmanager. Implement log aggregation with EFK stack. Optimize database backups to S3-compatible storage.",
  },
];

export const skills = [
  {
    category: "Cloud & DevOps",
    technologies: [
      "Red Hat OpenShift",
      "Kubernetes",
      "Docker",
      "Helm",
      "KrakenD",
      "IBM Cloud",
      "AWS",
      "Jenkins",
      "Argo CD",
      "Github Actions",
    ],
  },
  {
    category: "Languages & Scripting",
    technologies: ["Python", "Go", "Bash", "YAML", "TOML", "JSON"],
  },
  {
    category: "Monitoring & Observability",
    technologies: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Alertmanager",
      "Filebeat",
    ],
  },
  {
    category: "Databases & Storage",
    technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "AWS S3"],
  },
];

export const projects = [
  {
    title: "Automated K8s Cluster Provisioner",
    description:
      "A tool to automate the creation and configuration of Kubernetes clusters on AWS using Terraform and Ansible. It reduces setup time from hours to minutes.",
    technologies: ["Terraform", "Ansible", "AWS", "Kubernetes", "Python"],
    repo_url: "https://github.com",
    live_url: null,
    image_id: "project-1",
  },
  {
    title: "Kubernetes Database Backup to S3",
    description:
      "A tool to automate database backups and restores in Kubernetes/OpenShift to S3-compatible storage. It ensures data reliability and reduces manual backup effort.",
    technologies: [
      "Shell Scripting",
      "Kubernetes/OpenShift",
      "Docker",
      "Helm",
      "GitHub Actions",
      "S3",
    ],
    repo_url: "https://github.com/DebjotiMallick/kubernetes-database-backup",
    live_url: null,
    image_id: "project-2",
  },
  {
    title: "Real-time Log Analytics Platform",
    description:
      "A centralized logging solution built with the ELK Stack to aggregate, process, and visualize logs from distributed microservices, improving debugging and monitoring capabilities.",
    technologies: ["ELK Stack", "Filebeat", "Logstash", "Kubernetes", "GCP"],
    repo_url: "https://github.com",
    live_url: null,
    image_id: "project-3",
  },
];
