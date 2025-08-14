"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, TrendingUp, TrendingDown, Clock, ExternalLink, Filter, Search } from "lucide-react"

export default function MarketNewsPage() {
  const marketNews = [
    {
      id: 1,
      title: "S&P 500 Hits Record High as Tech Stocks Rally",
      summary:
        "The S&P 500 closed at a new all-time high, driven by strong performance in technology stocks. NVIDIA and Microsoft led the gains.",
      source: "MarketWatch",
      category: "Markets",
      time: "2 hours ago",
      impact: "positive",
      tickers: ["SPY", "NVDA", "MSFT"],
    },
    {
      id: 2,
      title: "Federal Reserve Signals Potential Rate Cuts in 2024",
      summary:
        "Fed Chair Jerome Powell hinted at possible interest rate reductions if inflation continues to moderate, boosting market sentiment.",
      source: "Reuters",
      category: "Policy",
      time: "4 hours ago",
      impact: "positive",
      tickers: ["TLT", "XLF"],
    },
    {
      id: 3,
      title: "Tesla Reports Strong Q3 Delivery Numbers",
      summary:
        "Tesla delivered 435,000 vehicles in Q3, beating analyst expectations and sending the stock up 8% in after-hours trading.",
      source: "Bloomberg",
      category: "Earnings",
      time: "6 hours ago",
      impact: "positive",
      tickers: ["TSLA"],
    },
    {
      id: 4,
      title: "Oil Prices Surge on Middle East Tensions",
      summary:
        "Crude oil prices jumped 5% following escalating tensions in the Middle East, raising concerns about supply disruptions.",
      source: "CNBC",
      category: "Commodities",
      time: "8 hours ago",
      impact: "negative",
      tickers: ["USO", "XLE"],
    },
    {
      id: 5,
      title: "Amazon Announces Major AI Investment",
      summary:
        "Amazon revealed plans to invest $15 billion in AI infrastructure over the next three years, competing with Microsoft and Google.",
      source: "Wall Street Journal",
      category: "Technology",
      time: "12 hours ago",
      impact: "positive",
      tickers: ["AMZN", "GOOGL", "MSFT"],
    },
    {
      id: 6,
      title: "Banking Sector Under Pressure from Rising Defaults",
      summary:
        "Regional banks face headwinds as commercial real estate defaults increase, with several institutions reporting higher provisions.",
      source: "Financial Times",
      category: "Banking",
      time: "1 day ago",
      impact: "negative",
      tickers: ["XLF", "KRE", "JPM"],
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "text-green-400"
      case "negative":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="h-4 w-4" />
      case "negative":
        return <TrendingDown className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Markets: "bg-blue-600/20 text-blue-400 border-blue-600/30",
      Policy: "bg-purple-600/20 text-purple-400 border-purple-600/30",
      Earnings: "bg-green-600/20 text-green-400 border-green-600/30",
      Technology: "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
      Commodities: "bg-orange-600/20 text-orange-400 border-orange-600/30",
      Banking: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
    }
    return colors[category] || "bg-gray-600/20 text-gray-400 border-gray-600/30"
  }

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center space-x-2">
                <Newspaper className="h-5 w-5 text-blue-400" />
                <span>Market News</span>
              </CardTitle>
              <CardDescription className="text-gray-400">Latest financial news and market updates</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">S&P 500</p>
                <p className="text-lg font-bold text-white">4,567.89</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+1.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">NASDAQ</p>
                <p className="text-lg font-bold text-white">14,234.56</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2.1%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">DOW</p>
                <p className="text-lg font-bold text-white">35,678.90</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-red-400">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-0.3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">VIX</p>
                <p className="text-lg font-bold text-white">18.45</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-red-400">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-5.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white">Latest Headlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketNews.map((news) => (
              <div key={news.id} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={`text-xs ${getCategoryColor(news.category)}`}>{news.category}</Badge>
                      <div className={`flex items-center space-x-1 ${getImpactColor(news.impact)}`}>
                        {getImpactIcon(news.impact)}
                      </div>
                    </div>
                    <h3 className="text-white font-medium text-lg mb-2">{news.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{news.summary}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{news.source}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{news.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {news.tickers.map((ticker, index) => (
                          <Badge key={index} className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">
                            {ticker}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-4 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
