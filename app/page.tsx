"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  Play,
  BarChart3,
  Menu,
  X,
  Home,
  Activity,
  CreditCard,
  FileText,
  HelpCircle,
  Newspaper,
  LogOut,
} from "lucide-react"

// Import page components
import DashboardPage from "./dashboard/page"
import TrendingStocksPage from "./trending-stocks/page"
import CommunityPage from "./community/page"
import SupportPage from "./support/page"
import MarketNewsPage from "./market-news/page"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("landing")

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "trending-stocks", label: "Trending Stocks", icon: Activity },
    { id: "community", label: "Community", icon: Users },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "disclaimer", label: "Disclaimer", icon: FileText },
    { id: "support", label: "Support", icon: HelpCircle },
    { id: "market-news", label: "Market News", icon: Newspaper },
  ]

  const renderLandingPage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FinProbe</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Pricing
            </a>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
              onClick={() => setCurrentPage("dashboard")}
            >
              Sign In
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Financial Video Analysis
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Get instant fact-checking, credibility scores, and detailed analysis of YouTube finance content with
                advanced AI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => setCurrentPage("dashboard")}
              >
                Start Analyzing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">See FinProbe in Action</h2>
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Demo Video: Analyzing Tesla Earnings Video</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">94%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">15s</div>
                  <div className="text-sm text-gray-400">Average Analysis Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">12+</div>
                  <div className="text-sm text-gray-400">Data Sources Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Powerful AI Analysis Features</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced technology to verify financial claims and assess content credibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <Shield className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">AI Fact-Checking</CardTitle>
                  <CardDescription className="text-gray-400">
                    Cross-reference claims with verified financial data sources and SEC filings
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <BarChart3 className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Credibility Scoring</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get numerical credibility ratings based on accuracy and source verification
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <Zap className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Instant Analysis</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get comprehensive reports in seconds, not hours of manual research
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Trending Stocks</CardTitle>
                  <CardDescription className="text-gray-400">
                    Track which stocks are most mentioned by financial content creators
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <Users className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Community Insights</CardTitle>
                  <CardDescription className="text-gray-400">
                    Join discussions and share analysis with other finance enthusiasts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30 hover:border-blue-700/50 transition-colors">
                <CardHeader>
                  <FileText className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Export Reports</CardTitle>
                  <CardDescription className="text-gray-400">
                    Save and export detailed analysis reports in multiple formats
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Finance Professionals</h2>
              <p className="text-xl text-gray-400">See what our users say about FinProbe</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-blue-900/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "FinProbe has revolutionized how I verify financial claims in YouTube videos. The AI fact-checking
                    is incredibly accurate and saves me hours of research."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">MJ</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Michael Johnson</p>
                      <p className="text-gray-400 text-sm">Portfolio Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The trending stocks feature is brilliant. I can quickly see which stocks are gaining attention and
                    verify the claims being made about them."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SC</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Sarah Chen</p>
                      <p className="text-gray-400 text-sm">Financial Analyst</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-900/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "As a content creator myself, FinProbe helps me ensure my analysis is accurate before publishing.
                    The credibility scoring is a game-changer."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DR</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">David Rodriguez</p>
                      <p className="text-gray-400 text-sm">YouTube Creator</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Choose Your Plan</h2>
              <p className="text-xl text-gray-400">Start free, upgrade when you need more power</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <Card className="bg-gray-900/50 border-blue-900/30 relative">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Basic</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">
                      $9<span className="text-lg text-gray-400">/month</span>
                    </div>
                    <CardDescription className="text-gray-400">Perfect for individual investors</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">10 AI analyses per day</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Access to Community</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Basic fact-checking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Email support</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setCurrentPage("dashboard")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* PRO Plan */}
              <Card className="bg-gray-900/50 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">PRO</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">
                      $29<span className="text-lg text-gray-400">/month</span>
                    </div>
                    <CardDescription className="text-gray-400">For serious traders and analysts</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">30 AI analyses per day</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Access to Community & Trending Stocks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Advanced fact-checking with sources</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Export reports (PDF, CSV, JSON)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setCurrentPage("dashboard")}
                  >
                    Upgrade to PRO
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="bg-gray-900/50 border-blue-900/30 relative">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Enterprise</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">Contact Sales</div>
                    <CardDescription className="text-gray-400">For teams and institutions</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Unlimited AI analyses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Full platform access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">API access for integrations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom reporting & analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Dedicated account manager</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FinProbe</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 FinProbe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )

  const renderBilling = () => (
    <div className="space-y-6">
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white">Current Plan</CardTitle>
          <CardDescription className="text-gray-400">Manage your subscription and billing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
            <div>
              <h3 className="text-white font-semibold">Basic Plan</h3>
              <p className="text-gray-400 text-sm">10 analyses per day • Community access</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">$9</div>
              <div className="text-sm text-gray-400">per month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardHeader>
            <CardTitle className="text-white">PRO Plan</CardTitle>
            <CardDescription className="text-gray-400">Perfect for serious traders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-white">
              $29<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">30 AI analyses per day</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Trending Stocks access</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Export reports in multiple formats</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Priority support</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Upgrade to PRO</Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardHeader>
            <CardTitle className="text-white">Enterprise</CardTitle>
            <CardDescription className="text-gray-400">For teams and institutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold text-white">Contact Sales</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Unlimited analyses</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">API access</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Dedicated support</span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              Contact Sales
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderDisclaimer = () => (
    <Card className="bg-gray-900/50 border-blue-900/30">
      <CardHeader>
        <CardTitle className="text-white">Legal Disclaimer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-300 text-sm leading-relaxed">
        <p>
          <strong>Investment Risk Warning:</strong> All financial analysis provided by FinProbe is for informational
          purposes only and should not be considered as investment advice. Past performance does not guarantee future
          results.
        </p>
        <p>
          <strong>AI Analysis Limitations:</strong> While our AI system strives for accuracy, it may not catch all
          inaccuracies or provide complete analysis. Users should conduct their own research and consult with qualified
          financial advisors.
        </p>
        <p>
          <strong>Data Sources:</strong> Our analysis is based on publicly available information and may not reflect the
          most current market conditions or company developments.
        </p>
        <p>
          <strong>No Liability:</strong> FinProbe and its affiliates are not liable for any investment decisions made
          based on the analysis provided through our platform.
        </p>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-black text-white flex">
      {currentPage === "landing" ? (
        renderLandingPage()
      ) : (
        <>
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/95 border-r border-blue-900/30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0`}
          >
            <div className="flex items-center justify-between p-4 border-b border-blue-900/30">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <h2 className="text-lg font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  FinProbe
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="p-4 flex flex-col h-full">
              <div className="space-y-2 flex-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setSidebarOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        currentPage === item.id
                          ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="border-t border-blue-900/30 pt-4 space-y-3">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Upgrade to PRO</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Get 30 daily analyses, trending stocks access, and export reports
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs"
                    onClick={() => setCurrentPage("billing")}
                  >
                    Upgrade Now
                  </Button>
                </div>

                <button
                  onClick={() => setCurrentPage("landing")}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-gray-400 hover:text-white hover:bg-gray-800/50"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </nav>
          </div>

          {sidebarOpen && (
            <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-gray-900/50 border-b border-blue-900/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden text-gray-400 hover:text-white"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                  <h1 className="text-xl font-semibold text-white capitalize">{currentPage.replace("-", " ")}</h1>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-auto p-6">
              {currentPage === "dashboard" && <DashboardPage />}
              {currentPage === "trending-stocks" && <TrendingStocksPage />}
              {currentPage === "community" && <CommunityPage />}
              {currentPage === "billing" && renderBilling()}
              {currentPage === "disclaimer" && renderDisclaimer()}
              {currentPage === "support" && <SupportPage />}
              {currentPage === "market-news" && <MarketNewsPage />}
            </main>
          </div>
        </>
      )}
    </div>
  )
}
