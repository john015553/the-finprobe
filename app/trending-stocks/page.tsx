"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, ExternalLink, Users, Calendar, BarChart3 } from "lucide-react"

export default function TrendingStocksPage() {
  const trendingStocks = [
    {
      rank: 1,
      ticker: "TSLA",
      name: "Tesla Inc.",
      price: 248.5,
      change: +12.3,
      changePercent: +5.2,
      mentions: 47,
      channels: ["TechInvestor", "ElonWatch", "EVAnalysis", "MarketGuru"],
      sentiment: "bullish",
      volume: "2.1M",
    },
    {
      rank: 2,
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.2,
      change: -8.45,
      changePercent: -0.95,
      mentions: 38,
      channels: ["AIStocks", "TechTrends", "ChipAnalyst"],
      sentiment: "neutral",
      volume: "1.8M",
    },
    {
      rank: 3,
      ticker: "AAPL",
      name: "Apple Inc.",
      price: 189.75,
      change: +2.15,
      changePercent: +1.15,
      mentions: 31,
      channels: ["AppleInsider", "TechReview", "MarketWatch"],
      sentiment: "bullish",
      volume: "1.5M",
    },
    {
      rank: 4,
      ticker: "AMZN",
      name: "Amazon.com Inc.",
      price: 142.8,
      change: -1.2,
      changePercent: -0.83,
      mentions: 24,
      channels: ["EcommerceNews", "CloudStocks"],
      sentiment: "neutral",
      volume: "980K",
    },
    {
      rank: 5,
      ticker: "MSFT",
      name: "Microsoft Corporation",
      price: 378.9,
      change: +4.5,
      changePercent: +1.2,
      mentions: 19,
      channels: ["TechGiant", "CloudAnalysis"],
      sentiment: "bullish",
      volume: "750K",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-400">Total Mentions</span>
            </div>
            <div className="text-2xl font-bold text-white mt-1">159</div>
            <div className="text-xs text-green-400">+23% from yesterday</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-400">Active Channels</span>
            </div>
            <div className="text-2xl font-bold text-white mt-1">47</div>
            <div className="text-xs text-blue-400">Across platforms</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-400">Last Updated</span>
            </div>
            <div className="text-2xl font-bold text-white mt-1">2h</div>
            <div className="text-xs text-gray-400">ago</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-400">Avg Sentiment</span>
            </div>
            <div className="text-2xl font-bold text-white mt-1">7.2</div>
            <div className="text-xs text-green-400">Bullish overall</div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Stocks List */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <span>Most Mentioned Stocks (24h)</span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Ranked by mentions from financial content creators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trendingStocks.map((stock) => (
              <div
                key={stock.ticker}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-600/20 rounded-full border border-blue-600/30">
                    <span className="text-sm font-bold text-blue-400">#{stock.rank}</span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white text-lg">{stock.ticker}</span>
                      <Badge
                        className={`text-xs ${
                          stock.sentiment === "bullish"
                            ? "bg-green-600/20 text-green-400 border-green-600/30"
                            : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                        }`}
                      >
                        {stock.sentiment}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400">{stock.name}</p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-gray-500">{stock.mentions} mentions</span>
                      <span className="text-xs text-gray-500">Vol: {stock.volume}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-white">${stock.price}</div>
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      stock.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    <span>
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change} ({stock.changePercent >= 0 ? "+" : ""}
                      {stock.changePercent}%)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">Mentioned by:</p>
                  <div className="space-y-1">
                    {stock.channels.slice(0, 2).map((channel, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <ExternalLink className="h-3 w-3 text-blue-400" />
                        <span className="text-xs text-blue-400">{channel}</span>
                      </div>
                    ))}
                    {stock.channels.length > 2 && (
                      <span className="text-xs text-gray-500">+{stock.channels.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
