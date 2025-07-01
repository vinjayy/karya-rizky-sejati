"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Shield,
  Building2,
  Truck,
  WashingMachineIcon as CleaningServices,
  Calculator,
  CheckCircle,
  Award,
  Target,
  Eye,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language content
const content = {
  id: {
    // Header
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      clients: "Klien",
      contact: "Kontak",
    },
    hero: {
      title: "Solusi Outsourcing",
      titleHighlight: "Terpercaya",
      titleEnd: "untuk Bisnis Anda",
      subtitle: "Lebih dari 15 tahun pengalaman menyediakan tenaga kerja profesional.",
      cta: "Hubungi Kami di WhatsApp",
    },
    about: {
      title: "Profil Perusahaan",
      description1:
        "PT Karya Rizky Sejati adalah perusahaan outsourcing profesional yang berkomitmen untuk menyediakan solusi tenaga kerja terbaik bagi perusahaan-perusahaan di berbagai sektor industri yang telah berpengalaman lebih dari 15 tahun. Berdiri dengan semangat untuk mendukung pertumbuhan bisnis mitra, kami mengutamakan kualitas, integritas, dan pelayanan prima dalam setiap aspek kerja kami.",
      description2:
        "Kami menghadirkan layanan outsourcing yang meliputi penyediaan tenaga kerja untuk posisi operasional, administrasi, keamanan, kebersihan, hingga tenaga ahli sesuai kebutuhan klien. Dengan sistem rekrutmen yang selektif, pelatihan yang berkelanjutan, serta manajemen SDM yang efisien, kami membantu klien fokus pada bisnis inti mereka tanpa harus terbebani urusan sumber daya manusia. Kami percaya bahwa sumber daya manusia adalah aset utama dalam kesuksesan bisnis. Oleh karena itu, PT Karya Rizky Sejati hadir sebagai mitra strategis yang siap mendukung produktivitas dan efisiensi operasional perusahaan Anda.",
    },
    vision: {
      title: "Visi & Misi",
      visionTitle: "Visi",
      visionText: "Menjadi perusahaan outsourcing terdepan di Indonesia.",
      missionTitle: "Misi",
      mission1: "Memberikan solusi tenaga kerja efektif dan efisien",
      mission2: "Meningkatkan produktivitas klien",
      mission3: "Menciptakan lapangan kerja berkualitas",
      valuesTitle: "Nilai-Nilai Kami",
      values: ["Integritas", "Profesionalisme", "Kualitas", "Inovasi", "Kolaborasi"],
    },
    services: {
      title: "Layanan Outsourcing Kami",
      subtitle: "Solusi komprehensif untuk kebutuhan tenaga kerja Anda",
      admin: "Administrasi & Keuangan",
      adminDesc: "Dukungan ahli untuk operasional bisnis",
      manufacturing: "Manufacturing",
      manufacturingDesc: "Tenaga produksi terampil",
      security: "Keamanan (BUJP)",
      securityDesc: "Sesuai Perkap No 24 Tahun 2007",
      housekeeping: "Housekeeping",
      housekeepingDesc: "Kebersihan dan kenyamanan tamu",
      logistics: "Logistik & Operasional",
      logisticsDesc: "Efisiensi rantai pasok",
      others: "Layanan Lainnya",
      othersDesc: "Konsultasi kebutuhan khusus",
    },
    advantages: {
      title: "Keunggulan Kompetitif",
      subtitle: "Mengapa memilih PT. Karya Rizky Sejati",
      experience: "Tahun Pengalaman",
      candidates: "Kandidat Berkualitas",
      recruitment: "Hari Proses Rekrutmen",
      retention: "Retensi Karyawan",
    },
    process: {
      title: "Proses Outsourcing",
      subtitle: "Langkah sistematis untuk solusi terbaik",
      step1: "Konsultasi Kebutuhan",
      step1Desc: "Analisis mendalam kebutuhan SDM Anda",
      step2: "Pengembangan Solusi",
      step2Desc: "Merancang strategi outsourcing optimal",
      step3: "Rekrutmen & Seleksi",
      step3Desc: "Proses seleksi ketat dan profesional",
      step4: "Penempatan & Pelatihan",
      step4Desc: "Orientasi dan pelatihan berkelanjutan",
      step5: "Monitoring & Evaluasi",
      step5Desc: "Pemantauan kinerja berkelanjutan",
    },
    clients: {
      title: "Dipercaya oleh Berbagai Industri",
      subtitle: "Klien-klien yang telah mempercayai layanan kami",
    },
    quality: {
      title: "Komitmen Kualitas",
      subtitle: "Standar tinggi dalam setiap layanan",
      iso: "ISO 9001:2015",
      isoDesc: "Standar mutu internasional",
      compliance: "Kepatuhan Hukum",
      complianceDesc: "Sesuai regulasi ketenagakerjaan",
      training: "Pelatihan Berkelanjutan",
      trainingDesc: "Pengembangan SDM terus-menerus",
      audit: "Audit Berkala",
      auditDesc: "Internal dan eksternal audit",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Temukan jawaban atas pertanyaan umum tentang layanan outsourcing kami",
    },
    cta: {
      title: "Bergabung Bersama Kami",
      subtitle:
        "PT. Karya Rizky Sejati adalah mitra outsourcing tepat untuk bisnis Anda. Fokus pada kompetensi inti Anda dan biarkan kami tangani SDM Anda.",
      button: "Konsultasi Gratis via WhatsApp",
    },
    footer: {
      description: "Solusi outsourcing terpercaya untuk bisnis Anda.",
      contact: "Kontak",
      contactUs: "Hubungi Kami",
      copyright: "Hak cipta © {year} PT. Karya Rizky Sejati. Semua hak dilindungi.",
    },
    floating: {
      contact: "Hubungi Kami",
    },
  },
  en: {
    // Header
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      clients: "Clients",
      contact: "Contact",
    },
    hero: {
      title: "Trusted Outsourcing",
      titleHighlight: "Solutions",
      titleEnd: "for Your Business",
      subtitle: "Over 15 years of experience providing professional workforce solutions.",
      cta: "Contact Us on WhatsApp",
    },
    about: {
      title: "Company Profile",
      description1:
        "PT Karya Rizky Sejati is a professional outsourcing company committed to providing the best workforce solutions for companies across various industry sectors with over 15 years of experience. Founded with the spirit to support business partner growth, we prioritize quality, integrity, and excellent service in every aspect of our work.",
      description2:
        "We provide outsourcing services that include workforce provision for operational, administrative, security, cleaning positions, and skilled professionals according to client needs. With selective recruitment systems, continuous training, and efficient HR management, we help clients focus on their core business without being burdened by human resource matters. We believe that human resources are the main asset in business success. Therefore, PT Karya Rizky Sejati is present as a strategic partner ready to support the productivity and operational efficiency of your company.",
    },
    vision: {
      title: "Vision & Mission",
      visionTitle: "Vision",
      visionText: "To become the leading outsourcing company in Indonesia.",
      missionTitle: "Mission",
      mission1: "Provide effective and efficient workforce solutions",
      mission2: "Increase client productivity",
      mission3: "Create quality employment opportunities",
      valuesTitle: "Our Values",
      values: ["Integrity", "Professionalism", "Quality", "Innovation", "Collaboration"],
    },
    services: {
      title: "Our Outsourcing Services",
      subtitle: "Comprehensive solutions for your workforce needs",
      admin: "Administration & Finance",
      adminDesc: "Expert support for business operations",
      manufacturing: "Manufacturing",
      manufacturingDesc: "Skilled production workforce",
      security: "Security (BUJP)",
      securityDesc: "According to Perkap No 24 Year 2007",
      housekeeping: "Housekeeping",
      housekeepingDesc: "Cleanliness and guest comfort",
      logistics: "Logistics & Operations",
      logisticsDesc: "Supply chain efficiency",
      others: "Other Services",
      othersDesc: "Custom needs consultation",
    },
    advantages: {
      title: "Competitive Advantages",
      subtitle: "Why choose PT. Karya Rizky Sejati",
      experience: "Years of Experience",
      candidates: "Quality Candidates",
      recruitment: "Days Recruitment Process",
      retention: "Employee Retention",
    },
    process: {
      title: "Outsourcing Process",
      subtitle: "Systematic steps for the best solutions",
      step1: "Needs Consultation",
      step1Desc: "In-depth analysis of your HR needs",
      step2: "Solution Development",
      step2Desc: "Designing optimal outsourcing strategy",
      step3: "Recruitment & Selection",
      step3Desc: "Strict and professional selection process",
      step4: "Placement & Training",
      step4Desc: "Orientation and continuous training",
      step5: "Monitoring & Evaluation",
      step5Desc: "Continuous performance monitoring",
    },
    clients: {
      title: "Trusted by Various Industries",
      subtitle: "Clients who have trusted our services",
    },
    quality: {
      title: "Quality Commitment",
      subtitle: "High standards in every service",
      iso: "ISO 9001:2015",
      isoDesc: "International quality standards",
      compliance: "Legal Compliance",
      complianceDesc: "According to labor regulations",
      training: "Continuous Training",
      trainingDesc: "Ongoing HR development",
      audit: "Regular Audits",
      auditDesc: "Internal and external audits",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our outsourcing services",
    },
    cta: {
      title: "Join Us",
      subtitle:
        "PT. Karya Rizky Sejati is the right outsourcing partner for your business. Focus on your core competencies and let us handle your HR.",
      button: "Free Consultation via WhatsApp",
    },
    footer: {
      description: "Trusted outsourcing solutions for your business.",
      contact: "Contact",
      contactUs: "Contact Us",
      copyright: "Copyright © {year} PT. Karya Rizky Sejati. All rights reserved.",
    },
    floating: {
      contact: "Contact Us",
    },
  },
  zh: {
    // Header
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      clients: "客户",
      contact: "联系",
    },
    hero: {
      title: "值得信赖的外包",
      titleHighlight: "解决方案",
      titleEnd: "为您的企业",
      subtitle: "超过15年的专业劳动力解决方案经验。",
      cta: "通过WhatsApp联系我们",
    },
    about: {
      title: "公司简介",
      description1:
        "PT Karya Rizky Sejati是一家专业的外包公司，致力于为各行业的企业提供最佳的劳动力解决方案，拥有超过15年的经验。我们以支持合作伙伴业务增长的精神成立，在工作的各个方面都优先考虑质量、诚信和卓越服务。",
      description2:
        "我们提供外包服务，包括为运营、行政、安全、清洁职位以及根据客户需求提供熟练专业人员。通过选择性招聘系统、持续培训和高效的人力资源管理，我们帮助客户专注于核心业务，而不必为人力资源事务而烦恼。我们相信人力资源是企业成功的主要资产。因此，PT Karya Rizky Sejati作为战略合作伙伴，随时准备支持您公司的生产力和运营效率。",
    },
    vision: {
      title: "愿景与使命",
      visionTitle: "愿景",
      visionText: "成为印度尼西亚领先的外包公司。",
      missionTitle: "使命",
      mission1: "提供有效和高效的劳动力解决方案",
      mission2: "提高客户生产力",
      mission3: "创造优质就业机会",
      valuesTitle: "我们的价值观",
      values: ["诚信", "专业", "质量", "创新", "合作"],
    },
    services: {
      title: "我们的外包服务",
      subtitle: "满足您劳动力需求的综合解决方案",
      admin: "行政与财务",
      adminDesc: "业务运营专家支持",
      manufacturing: "制造业",
      manufacturingDesc: "熟练的生产劳动力",
      security: "安保 (BUJP)",
      securityDesc: "符合2007年第24号法规",
      housekeeping: "客房服务",
      housekeepingDesc: "清洁和客人舒适",
      logistics: "物流与运营",
      logisticsDesc: "供应链效率",
      others: "其他服务",
      othersDesc: "定制需求咨询",
    },
    advantages: {
      title: "竞争优势",
      subtitle: "为什么选择PT. Karya Rizky Sejati",
      experience: "年经验",
      candidates: "优质候选人",
      recruitment: "天招聘流程",
      retention: "员工保留率",
    },
    process: {
      title: "外包流程",
      subtitle: "最佳解决方案的系统化步骤",
      step1: "需求咨询",
      step1Desc: "深入分析您的人力资源需求",
      step2: "解决方案开发",
      step2Desc: "设计最优外包策略",
      step3: "招聘与选拔",
      step3Desc: "严格专业的选拔流程",
      step4: "安置与培训",
      step4Desc: "入职培训和持续培训",
      step5: "监控与评估",
      step5Desc: "持续绩效监控",
    },
    clients: {
      title: "受到各行业信赖",
      subtitle: "信任我们服务的客户",
    },
    quality: {
      title: "质量承诺",
      subtitle: "每项服务的高标准",
      iso: "ISO 9001:2015",
      isoDesc: "国际质量标准",
      compliance: "法律合规",
      complianceDesc: "符合劳动法规",
      training: "持续培训",
      trainingDesc: "持续的人力资源发展",
      audit: "定期审计",
      auditDesc: "内部和外部审计",
    },
    faq: {
      title: "常见问题",
      subtitle: "找到关于我们外包服务的常见问题答案",
    },
    cta: {
      title: "加入我们",
      subtitle: "PT. Karya Rizky Sejati是您企业的正确外包合作伙伴。专注于您的核心竞争力，让我们处理您的人力资源。",
      button: "通过WhatsApp免费咨询",
    },
    footer: {
      description: "为您的企业提供值得信赖的外包解决方案。",
      contact: "联系",
      contactUs: "联系我们",
      copyright: "版权所有 © {year} PT. Karya Rizky Sejati。保留所有权利。",
    },
    floating: {
      contact: "联系我们",
    },
  },
}

const faqData = {
  id: [
    {
      question: "Apa itu layanan outsourcing dan bagaimana cara kerjanya?",
      answer:
        "Outsourcing adalah praktik menyerahkan fungsi bisnis tertentu kepada pihak ketiga yang spesialis. PT. Karya Rizky Sejati menyediakan tenaga kerja terlatih untuk berbagai posisi sesuai kebutuhan perusahaan Anda. Kami menangani rekrutmen, pelatihan, administrasi kepegawaian, dan manajemen kinerja, sehingga Anda dapat fokus pada bisnis inti.",
    },
    {
      question: "Berapa lama proses rekrutmen dan penempatan karyawan?",
      answer:
        "Proses rekrutmen kami biasanya memakan waktu 7-14 hari kerja, tergantung pada kompleksitas posisi dan jumlah karyawan yang dibutuhkan. Tahapan meliputi analisis kebutuhan, seleksi kandidat, interview, tes kompetensi, dan orientasi. Untuk kebutuhan mendesak, kami dapat mempercepat proses dengan tetap menjaga kualitas seleksi.",
    },
    {
      question: "Apa saja keuntungan menggunakan jasa outsourcing?",
      answer:
        "Keuntungan utama meliputi: penghematan biaya operasional hingga 30%, mengurangi beban administrasi HR, akses ke talent pool yang luas, fleksibilitas dalam penyesuaian jumlah karyawan, mengurangi risiko ketenagakerjaan, dan memungkinkan fokus pada core business. Anda juga mendapat dukungan penuh dalam hal compliance dan regulasi ketenagakerjaan.",
    },
    {
      question: "Bagaimana sistem kontrak dan pembayaran?",
      answer:
        "Kami menawarkan fleksibilitas kontrak mulai dari 3 bulan hingga kontrak jangka panjang. Sistem pembayaran dapat dilakukan bulanan dengan invoice yang detail dan transparan. Biaya sudah termasuk gaji karyawan, tunjangan, asuransi, dan fee manajemen. Tidak ada biaya tersembunyi, dan kami memberikan breakdown biaya yang jelas.",
    },
    {
      question: "Bagaimana jaminan kualitas karyawan yang ditempatkan?",
      answer:
        "Kami memberikan garansi replacement selama 3 bulan pertama jika karyawan tidak sesuai ekspektasi. Semua karyawan telah melalui proses seleksi ketat, background check, dan pelatihan sesuai standar. Kami juga melakukan monitoring berkala dan evaluasi kinerja untuk memastikan kualitas layanan tetap optimal.",
    },
  ],
  en: [
    {
      question: "What is outsourcing service and how does it work?",
      answer:
        "Outsourcing is the practice of delegating certain business functions to specialized third parties. PT. Karya Rizky Sejati provides trained workforce for various positions according to your company's needs. We handle recruitment, training, personnel administration, and performance management, so you can focus on your core business.",
    },
    {
      question: "How long is the recruitment and employee placement process?",
      answer:
        "Our recruitment process usually takes 7-14 working days, depending on the complexity of the position and the number of employees needed. Stages include needs analysis, candidate selection, interviews, competency tests, and orientation. For urgent needs, we can accelerate the process while maintaining selection quality.",
    },
    {
      question: "What are the benefits of using outsourcing services?",
      answer:
        "Main benefits include: operational cost savings up to 30%, reducing HR administrative burden, access to a wide talent pool, flexibility in adjusting employee numbers, reducing employment risks, and enabling focus on core business. You also get full support in terms of compliance and labor regulations.",
    },
    {
      question: "How does the contract and payment system work?",
      answer:
        "We offer contract flexibility from 3 months to long-term contracts. Payment system can be done monthly with detailed and transparent invoices. Costs include employee salaries, benefits, insurance, and management fees. There are no hidden costs, and we provide clear cost breakdowns.",
    },
    {
      question: "How is the quality guarantee of placed employees?",
      answer:
        "We provide replacement guarantee for the first 3 months if employees do not meet expectations. All employees have gone through strict selection processes, background checks, and standard training. We also conduct regular monitoring and performance evaluations to ensure service quality remains optimal.",
    },
  ],
  zh: [
    {
      question: "什么是外包服务，它是如何运作的？",
      answer:
        "外包是将某些业务功能委托给专业第三方的做法。PT. Karya Rizky Sejati根据您公司的需求为各种职位提供训练有素的劳动力。我们处理招聘、培训、人事管理和绩效管理，让您可以专注于核心业务。",
    },
    {
      question: "招聘和员工安置流程需要多长时间？",
      answer:
        "我们的招聘流程通常需要7-14个工作日，具体取决于职位的复杂性和所需员工数量。阶段包括需求分析、候选人选择、面试、能力测试和入职培训。对于紧急需求，我们可以在保持选择质量的同时加快流程。",
    },
    {
      question: "使用外包服务有什么好处？",
      answer:
        "主要好处包括：运营成本节省高达30%，减少人力资源管理负担，获得广泛的人才库，灵活调整员工数量，降低就业风险，并能够专注于核心业务。您还可以在合规性和劳动法规方面获得全面支持。",
    },
    {
      question: "合同和付款系统如何运作？",
      answer:
        "我们提供从3个月到长期合同的灵活性。付款系统可以按月进行，发票详细透明。费用包括员工工资、福利、保险和管理费。没有隐藏费用，我们提供清晰的费用明细。",
    },
    {
      question: "安置员工的质量保证如何？",
      answer:
        "如果员工不符合期望，我们在前3个月提供替换保证。所有员工都经过严格的选拔流程、背景调查和标准培训。我们还进行定期监控和绩效评估，以确保服务质量保持最佳。",
    },
  ],
}

export default function HomePage() {
  const [language, setLanguage] = useState<"id" | "en" | "zh">("id")
  const t = content[language]
  const faqs = faqData[language]

  const languageOptions = [
    { value: "id", label: "🇮🇩 Bahasa Indonesia", flag: "🇮🇩" },
    { value: "en", label: "🇺🇸 English", flag: "🇺🇸" },
    { value: "zh", label: "🇨🇳 中文", flag: "🇨🇳" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src="/logo.jpeg?height=40&width=40"
                alt="PT. Karya Rizky Sejati Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-900">PT. Karya Rizky Sejati</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#beranda" className="text-gray-700 hover:text-blue-900 font-medium">
              {t.nav.home}
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-blue-900 font-medium">
              {t.nav.about}
            </Link>
            <Link href="#layanan" className="text-gray-700 hover:text-blue-900 font-medium">
              {t.nav.services}
            </Link>
            <Link href="#klien" className="text-gray-700 hover:text-blue-900 font-medium">
              {t.nav.clients}
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-blue-900 font-medium">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <Select value={language} onValueChange={(value: "id" | "en" | "zh") => setLanguage(value)}>
              <SelectTrigger className="w-[140px]">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center">
                      <span className="mr-2">{option.flag}</span>
                      {option.value === "id" ? "ID" : option.value === "en" ? "EN" : "ZH"}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="https://wa.me/6282131848863" target="_blank">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t.hero.title} <span className="text-blue-900">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">{t.hero.subtitle}</p>
              </div>

              <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6">
                <Link href="https://wa.me/6282131848863" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.hero.cta}
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/foto2.jpeg?height=500&width=600"
                alt="Professional Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/foto3.jpeg?height=400&width=500"
                alt="Office Building"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{t.about.description1}</p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{t.about.description2}</p>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Jl. Sidojangkung 001/001, Kec Menganti, Kab Gresik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.vision.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Eye className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-2xl text-blue-900">{t.vision.visionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600">{t.vision.visionText}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Target className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-2xl text-blue-900">{t.vision.missionTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t.vision.mission1}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t.vision.mission2}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t.vision.mission3}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.vision.valuesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {t.vision.values.map((value, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/akuntansi.jpeg?height=200&width=400"
                  alt="Administration & Finance"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Calculator className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.admin}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.adminDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/manufaktur.jpeg?height=200&width=400"
                  alt="Manufacturing"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Building2 className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.manufacturing}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.manufacturingDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/bujp.jpeg?height=200&width=400"
                  alt="Security BUJP"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.security}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.securityDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/housekeeping2.jpeg?height=200&width=400"
                  alt="Housekeeping"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <CleaningServices className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.housekeeping}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.housekeepingDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/logistik.jpeg?height=200&width=400"
                  alt="Logistics & Operations"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Truck className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.logistics}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.logisticsDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/lainnya.jpeg?height=200&width=400"
                  alt="Other Services"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{t.services.others}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t.services.othersDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.advantages.title}</h2>
            <p className="text-xl text-blue-100">{t.advantages.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">{t.advantages.experience}</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">{t.advantages.candidates}</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-blue-100">{t.advantages.recruitment}</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%+</div>
              <div className="text-blue-100">{t.advantages.retention}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600">{t.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.process.step1}</h3>
              <p className="text-gray-600 text-sm">{t.process.step1Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.process.step2}</h3>
              <p className="text-gray-600 text-sm">{t.process.step2Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.process.step3}</h3>
              <p className="text-gray-600 text-sm">{t.process.step3Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.process.step4}</h3>
              <p className="text-gray-600 text-sm">{t.process.step4Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.process.step5}</h3>
              <p className="text-gray-600 text-sm">{t.process.step5Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="klien" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.clients.title}</h2>
            <p className="text-xl text-gray-600">{t.clients.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[
              "PT. Kemasindo Teguh",
              "PT. Surindo Teguh Gumilang",
              "PT. Selera Boga Group",
              "PT. Tiga Rasa Indonesia",
              "PT. Jawa Lily Furniture",
              "PT. Shanseng Indonesia",
              "PT. Mega Marine Pride",
              "PT. Indofood CBP",
            ].map((client, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-600" />
                </div>
                <p className="font-medium text-gray-900">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.quality.title}</h2>
            <p className="text-xl text-gray-600">{t.quality.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">{t.quality.iso}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{t.quality.isoDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">{t.quality.compliance}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{t.quality.complianceDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">{t.quality.training}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{t.quality.trainingDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">{t.quality.audit}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{t.quality.auditDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">{t.cta.subtitle}</p>

            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="https://wa.me/6282131848863" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PT. Karya Rizky Sejati</h3>
                </div>
              </div>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.contact}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">0821-3184-8863</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">karyarizkysejati@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Jl. Sidojangkung 001/001, Kec Menganti, Kab Gresik</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.contactUs}</h4>
              <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                <Link href="https://wa.me/6282131848863" target="_blank">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">{t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/6282131848863"
          target="_blank"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          <span className="text-sm font-medium">{t.floating.contact}</span>
        </Link>
      </div>
    </div>
  )
}
