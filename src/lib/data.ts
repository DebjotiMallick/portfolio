export const navLinks = [];

export const experience = [
  {
    role: 'Senior SRE/DevOps Engineer',
    company: 'IBM',
    period: '2020 - Present',
    description: 'Leading initiatives to enhance system reliability and performance across cloud-native applications. Responsible for architecting and implementing CI/CD pipelines, automating infrastructure provisioning with IaC, and managing large-scale Kubernetes clusters.',
  },
  {
    role: 'DevOps Engineer',
    company: 'IBM',
    period: '2018 - 2020',
    description: 'Focused on automating build, test, and deployment processes. Developed monitoring and logging solutions to provide real-time insights into application performance and health. Contributed to the migration of legacy systems to microservices architecture.',
  },
  {
    role: 'Junior Systems Engineer',
    company: 'IBM',
    period: '2016 - 2018',
    description: 'Provided support for production systems, managed server infrastructure, and developed scripting for task automation. Gained foundational knowledge in Linux systems administration, networking, and cloud computing principles.',
  },
];

export const skills = [
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI'],
  },
  {
    category: 'Languages & Runtimes',
    technologies: ['Python', 'Go', 'Bash', 'Node.js', 'Groovy'],
  },
  {
    category: 'Monitoring & Observability',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Splunk'],
  },
  {
    category: 'Databases & Storage',
    technologies: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'AWS S3'],
  },
];

export const projects = [
  {
    title: 'Automated K8s Cluster Provisioner',
    description: 'A tool to automate the creation and configuration of Kubernetes clusters on AWS using Terraform and Ansible. It reduces setup time from hours to minutes.',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Kubernetes', 'Python'],
    repo_url: 'https://github.com',
    live_url: null,
    image_id: 'project-1',
  },
  {
    title: 'CI/CD Pipeline as Code',
    description: 'A scalable CI/CD framework using Jenkins Pipeline as Code and Docker, enabling developers to self-manage their build and deployment workflows securely.',
    technologies: ['Jenkins', 'Docker', 'Groovy', 'Python', 'Git'],
    repo_url: 'https://github.com',
    live_url: null,
    image_id: 'project-2',
  },
  {
    title: 'Real-time Log Analytics Platform',
    description: 'A centralized logging solution built with the ELK Stack to aggregate, process, and visualize logs from distributed microservices, improving debugging and monitoring capabilities.',
    technologies: ['ELK Stack', 'Filebeat', 'Logstash', 'Kubernetes', 'GCP'],
    repo_url: 'https://github.com',
    live_url: null,
    image_id: 'project-3',
  },
];
