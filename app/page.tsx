import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
              Beranda
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-blue-900 font-medium">
              Tentang Kami
            </Link>
            <Link href="#layanan" className="text-gray-700 hover:text-blue-900 font-medium">
              Layanan
            </Link>
            <Link href="#klien" className="text-gray-700 hover:text-blue-900 font-medium">
              Klien
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-blue-900 font-medium">
              Kontak
            </Link>
          </nav>

          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link href="https://wa.me/6282131848863" target="_blank">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Solusi Outsourcing <span className="text-blue-900">Terpercaya</span> untuk Bisnis Anda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Lebih dari 8 tahun pengalaman menyediakan tenaga kerja profesional.
                </p>
              </div>

              <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6">
                <Link href="https://wa.me/6282131848863" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi Kami di WhatsApp
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

      {/* Tentang Kami */}
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
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Profil Perusahaan</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  PT. Karya Rizky Sejati adalah perusahaan outsourcing terpercaya yang berpusat di Gresik, Jawa Timur.
                  Kami fokus pada penyediaan tenaga kerja terampil dan profesional untuk mendukung bisnis Anda.
                </p>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Jl. Sidojangkung 001/001, Kec Menganti, Kab Gresik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Eye className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-2xl text-blue-900">Visi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600">Menjadi perusahaan outsourcing terdepan di Indonesia.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Target className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-2xl text-blue-900">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Memberikan solusi tenaga kerja efektif dan efisien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan produktivitas klien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Menciptakan lapangan kerja berkualitas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nilai-Nilai Kami</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                Integritas
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                Profesionalisme
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                Kualitas
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                Inovasi
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-900">
                Kolaborasi
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Outsourcing Kami</h2>
            <p className="text-xl text-gray-600">Solusi komprehensif untuk kebutuhan tenaga kerja Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/akuntansi.jpeg?height=200&width=400"
                  alt="Administrasi & Keuangan"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Calculator className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">Administrasi & Keuangan</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Dukungan ahli untuk operasional bisnis</p>
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
                <CardTitle className="text-xl">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Tenaga produksi terampil</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/bujp.jpeg?height=200&width=400"
                  alt="Keamanan BUJP"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">Keamanan (BUJP)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Sesuai Perkap No 24 Tahun 2007</p>
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
                <CardTitle className="text-xl">Housekeeping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Kebersihan dan kenyamanan tamu</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/logistik.jpeg?height=200&width=400"
                  alt="Logistik & Operasional"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Truck className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">Logistik & Operasional</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Efisiensi rantai pasok</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/lainnya.jpeg?height=200&width=400"
                  alt="Layanan Lainnya"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">Layanan Lainnya</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Konsultasi kebutuhan khusus</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Keunggulan Kompetitif</h2>
            <p className="text-xl text-blue-100">Mengapa memilih PT. Karya Rizky Sejati</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Kandidat Berkualitas</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-blue-100">Hari Proses Rekrutmen</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%+</div>
              <div className="text-blue-100">Retensi Karyawan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Outsourcing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proses Outsourcing</h2>
            <p className="text-xl text-gray-600">Langkah sistematis untuk solusi terbaik</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Konsultasi Kebutuhan</h3>
              <p className="text-gray-600 text-sm">Analisis mendalam kebutuhan SDM Anda</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Pengembangan Solusi</h3>
              <p className="text-gray-600 text-sm">Merancang strategi outsourcing optimal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Rekrutmen & Seleksi</h3>
              <p className="text-gray-600 text-sm">Proses seleksi ketat dan profesional</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Penempatan & Pelatihan</h3>
              <p className="text-gray-600 text-sm">Orientasi dan pelatihan berkelanjutan</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Monitoring & Evaluasi</h3>
              <p className="text-gray-600 text-sm">Pemantauan kinerja berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Klien */}
      <section id="klien" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dipercaya oleh Berbagai Industri</h2>
            <p className="text-xl text-gray-600">Klien-klien yang telah mempercayai layanan kami</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Kemasindo Teguh</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Surindo Teguh Gumilang</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Selera Boga Group</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Tiga Rasa Indonesia</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Jawa Lily Furniture</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Shanseng Indonesia</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="font-medium text-gray-900">PT. Mega Marine Pride</p>
            </div>
          </div>
        </div>
      </section>

      {/* Komitmen Kualitas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Komitmen Kualitas</h2>
            <p className="text-xl text-gray-600">Standar tinggi dalam setiap layanan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Standar mutu internasional</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">Kepatuhan Hukum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Sesuai regulasi ketenagakerjaan</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">Pelatihan Berkelanjutan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Pengembangan SDM terus-menerus</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg">Audit Berkala</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Internal dan eksternal audit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bergabung Bersama Kami</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              PT. Karya Rizky Sejati adalah mitra outsourcing tepat untuk bisnis Anda. Fokus pada kompetensi inti Anda
              dan biarkan kami tangani SDM Anda.
            </p>

            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="https://wa.me/6282131848863" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis via WhatsApp
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
              <p className="text-gray-400">Solusi outsourcing terpercaya untuk bisnis Anda.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
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
              <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
              <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                <Link href="https://wa.me/6282131848863" target="_blank">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              Hak cipta © {new Date().getFullYear()} PT. Karya Rizky Sejati. Semua hak dilindungi.
            </p>
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
          <span className="text-sm font-medium">Hubungi Kami</span>
        </Link>
      </div>
    
  

    </div>


  )
}
