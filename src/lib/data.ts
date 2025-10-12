export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'AI Optimizer', href: '/resume-optimizer' },
];

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

export const blogPosts = [
  {
    slug: 'mastering-kubernetes-probes',
    title: 'Mastering Kubernetes Liveness and Readiness Probes',
    description: 'A deep dive into how to configure liveness and readiness probes in Kubernetes to build more resilient applications. Learn the best practices and common pitfalls.',
    author: 'John Doe',
    date: '2024-05-15',
    image_id: 'blog-1',
    content: `
      <p>In the world of container orchestration, Kubernetes has become the de-facto standard. But deploying your application is just the first step. Ensuring it runs reliably and can handle traffic gracefully is where the real challenge begins. This is where Kubernetes probes come into play.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">What are Probes?</h3>
      <p>Probes are diagnostic checks performed periodically by the kubelet on a container. They are crucial for the self-healing capabilities of Kubernetes. There are three types of probes:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Liveness Probes:</strong> These check if your container is running. If a liveness probe fails, the kubelet kills the container, and the container is subject to its restart policy.</li>
        <li><strong>Readiness Probes:</strong> These check if your container is ready to accept traffic. If a readiness probe fails, the container's IP address is removed from the endpoints of all Services that match the Pod.</li>
        <li><strong>Startup Probes:</strong> These check if an application within a container is started. If a startup probe is provided, all other probes are disabled until it succeeds.</li>
      </ul>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">Configuring Probes: An Example</h3>
      <p>Let's look at a simple example of how to configure liveness and readiness probes for a web server:</p>
      <pre class="bg-card p-4 rounded-md my-4 text-sm font-code"><code>
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
  - name: my-app-container
    image: my-app-image
    ports:
    - containerPort: 8080
    livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 3
      periodSeconds: 3
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
      </code></pre>
      <p>By effectively using probes, you can significantly increase the availability and resilience of your applications running on Kubernetes.</p>
    `,
  },
  {
    slug: 'terraform-best-practices',
    title: 'Terraform Best Practices for Scalable Infrastructure',
    description: 'Discover essential best practices for writing clean, modular, and scalable Terraform code. From project structure to state management, level up your IaC game.',
    author: 'John Doe',
    date: '2024-04-22',
    image_id: 'blog-2',
    content: `
      <p>Terraform has revolutionized the way we manage infrastructure, but as your infrastructure grows, so does the complexity of your code. Adopting best practices from the start is key to long-term success.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">1. Use a Standard Project Structure</h3>
      <p>A well-organized project is easier to navigate and maintain. A common approach is to separate environments and modules.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">2. Keep State Files Remote and Locked</h3>
      <p>Never store state files in version control. Use a remote backend like AWS S3 or Terraform Cloud, which provides state locking to prevent conflicts in team environments.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">3. Write Reusable Modules</h3>
      <p>Modules are the key to reusability and abstraction in Terraform. Encapsulate related resources into modules to create building blocks for your infrastructure.</p>
    `,
  },
  {
    slug: 'gitops-with-argocd',
    title: 'Introduction to GitOps with Argo CD',
    description: 'An introductory guide to GitOps and how Argo CD can be used to implement declarative continuous delivery for Kubernetes.',
    author: 'John Doe',
    date: '2024-03-10',
    image_id: 'blog-3',
    content: `
      <p>GitOps is a modern paradigm for continuous delivery that uses Git as the single source of truth for declarative infrastructure and applications.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">What is Argo CD?</h3>
      <p>Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It continuously monitors running applications and compares the live state against the desired state specified in the Git repository.</p>
      <h3 class="font-headline text-2xl font-semibold mt-6 mb-4">Core Concepts</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Application:</strong> A group of Kubernetes resources defined by a Git repository.</li>
        <li><strong>Desired State:</strong> The state of the application as defined in Git.</li>
        <li><strong>Live State:</strong> The actual state of the application running in the cluster.</li>
        <li><strong>Sync:</strong> The process of making the live state match the desired state.</li>
      </ul>
      <p>By adopting GitOps with Argo CD, teams can achieve faster, more reliable, and more secure application deployments.</p>
    `,
  },
];
