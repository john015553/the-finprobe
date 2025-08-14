"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Play, CheckCircle, AlertTriangle, ExternalLink, FileText, Shield } from "lucide-react"

export default function DashboardPage() {
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = async () => {
    if (!youtubeUrl.trim()) return

    setIsAnalyzing(true)
    setShowResults(false)
    setAnalysisProgress(0)

    const steps = [
      "Extracting video metadata...",
      "Generating transcript...",
      "Analyzing financial content...",
      "Fact-checking claims...",
      "Generating summary...",
    ]

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(steps[i])
      setAnalysisProgress((i + 1) * 20)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    setIsAnalyzing(false)
    setShowResults(true)
  }

  return (
    <div className="space-y-6">
      {/* URL Input Section */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Play className="h-5 w-5 text-blue-400" />
            <span>Analyze YouTube Video</span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Paste a YouTube URL to get AI-powered fact-checking and financial analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
            />
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !youtubeUrl.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze"}
            </Button>
          </div>

          {isAnalyzing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{currentStep}</span>
                <span className="text-blue-400">{analysisProgress}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {showResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video Summary */}
          <Card className="bg-gray-900/50 border-blue-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-400" />
                <span>Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed">
                This video discusses Tesla's Q3 earnings, highlighting a 15% revenue increase and strong Model Y sales.
                The presenter analyzes production targets and compares them to previous quarters, suggesting bullish
                sentiment for the stock based on delivery numbers and upcoming Cybertruck production.
              </p>
            </CardContent>
          </Card>

          {/* Veracity Rating */}
          <Card className="bg-gray-900/50 border-blue-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Veracity Rating</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <div className="text-3xl font-bold text-green-400">8.2</div>
                <div>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Highly Credible</Badge>
                  <p className="text-xs text-gray-400 mt-1">Based on 12 verified sources</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fact-Check Analysis */}
          <Card className="bg-gray-900/50 border-blue-900/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span>AI Fact-Check Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value="CORRECT INFORMATION: Tesla's Q3 2024 revenue did increase by approximately 15% year-over-year, reaching $25.18 billion according to official earnings reports. Model Y production and delivery numbers cited are accurate based on Tesla's investor relations data.

PARTIALLY CORRECT: The presenter's production target estimates for Q4 are reasonable but speculative, as Tesla hasn't officially confirmed these specific numbers. Historical trends support the optimistic outlook.

INCORRECT INFORMATION: No significant factual errors detected in the financial data presented. All stock price references and market cap calculations were verified against real-time market data."
                readOnly
                className="min-h-[120px] bg-gray-800/50 border-gray-700 text-gray-300 text-sm resize-none"
              />
            </CardContent>
          </Card>

          {/* Fact-Check Items */}
          <Card className="bg-gray-900/50 border-blue-900/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Fact-Check Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-600/10 border border-green-600/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Tesla Q3 Revenue: $25.18B</p>
                    <p className="text-xs text-gray-400">Verified against official Tesla earnings report</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-600/10 border border-yellow-600/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Q4 Production Targets</p>
                    <p className="text-xs text-gray-400">Estimates are reasonable but not officially confirmed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-green-600/10 border border-green-600/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Model Y Delivery Numbers</p>
                    <p className="text-xs text-gray-400">Accurate based on Tesla's delivery reports</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sources */}
          <Card className="bg-gray-900/50 border-blue-900/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Verified Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { name: "Tesla Q3 2024 Earnings Report", url: "investor.tesla.com", verified: true },
                  { name: "SEC Filing 10-Q", url: "sec.gov", verified: true },
                  { name: "Yahoo Finance - TSLA", url: "finance.yahoo.com", verified: true },
                  { name: "Tesla Delivery Reports", url: "tesla.com", verified: true },
                ].map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-white">{source.name}</span>
                      <span className="text-xs text-gray-400">({source.url})</span>
                    </div>
                    {source.verified && (
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">Verified</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
