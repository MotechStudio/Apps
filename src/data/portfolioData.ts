// ==========================================
// 📝 ملف البيانات الخاص بالبورتفوليو
// يمكنك تعديل كل شيء في الموقع من هنا فقط!
// ==========================================

export const portfolioData = {
  // 1. إعدادات الموقع الأساسية
  site: {
    logoText: "MoTechStudio",
  },

  // 2. القسم الرئيسي (Hero Section)
  hero: {
    greeting: "Hello, I'm",
    name: "MoTechStudio",
    role: "Android App Developer",
    description: "Crafting high-performance, beautiful, and user-centric Android applications. I turn complex ideas into elegant mobile experiences.",
    primaryCta: "View My Work",
    secondaryCta: "Contact Me",
  },

  // 3. قسم عني والمهارات (About & Skills)
  about: {
    title: "About Me",
    description: "I am a passionate Android developer with a strong focus on building scalable, robust, and beautifully designed mobile applications. I specialize in modern Android development using Kotlin and Jetpack Compose.",
    skills: [
      "Kotlin", 
      "Java", 
      "Jetpack Compose", 
      "Android SDK", 
      "Firebase", 
      "Room Database", 
      "Coroutines & Flow", 
      "MVVM Architecture", 
      "REST APIs",
      "Git & GitHub"
    ]
  },

  // 4. قسم المشاريع (Projects) - أضف أو احذف المشاريع من هنا
  projects: [
    {
      id: 1,
      title: "E-Commerce Android App",
      description: "A full-featured e-commerce application with real-time inventory, secure payment gateway integration, and a clean Material Design 3 UI.",
      image: "https://picsum.photos/seed/ecommerceapp/800/600", // ضع رابط صورة مشروعك هنا
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
      playStoreUrl: "#", // رابط جوجل بلاي
      githubUrl: "#"     // رابط جيت هب
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description: "A health and fitness tracking app that monitors daily steps, calories burned, and workout routines with interactive charts.",
      image: "https://picsum.photos/seed/fitnessapp/800/600",
      tags: ["Kotlin", "Room DB", "Coroutines", "Charts"],
      playStoreUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management Pro",
      description: "A productivity app helping users organize their daily tasks, set reminders, and collaborate with team members in real-time.",
      image: "https://picsum.photos/seed/taskapp/800/600",
      tags: ["Java", "Android SDK", "REST API", "Push Notifications"],
      playStoreUrl: "#",
      githubUrl: "#"
    }
  ],

  // 5. قسم التواصل (Contact & Social Links)
  contact: {
    title: "Let's Build Something Amazing",
    description: "Currently open for new opportunities, freelance projects, or just a tech chat. Feel free to reach out!",
    email: "hello@motechstudio.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      playStore: "https://play.google.com/store/apps/developer?id=MoTechStudio"
    }
  }
};
