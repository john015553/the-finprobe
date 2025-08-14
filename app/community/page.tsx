"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Play, MessageCircle, ThumbsUp, Star, ExternalLink, TrendingUp, Clock, Users, Eye } from "lucide-react"

export default function CommunityPage() {
  const [newComment, setNewComment] = useState("")

  const communityVideos = [
    {
      id: 1,
      title: "Tesla Q3 Earnings Deep Dive - What Investors Need to Know",
      channel: "TechInvestor Pro",
      thumbnail: "/tesla-earnings-thumbnail.png",
      url: "https://youtube.com/watch?v=example1",
      rating: "excellent",
      views: "125K",
      duration: "18:42",
      publishedAt: "2 hours ago",
      comments: 23,
      likes: 89,
      tags: ["TSLA", "Earnings", "Analysis"],
    },
    {
      id: 2,
      title: "NVIDIA's AI Dominance: Is the Stock Still a Buy?",
      channel: "AI Stock Analysis",
      thumbnail: "/nvidia-ai-analysis.png",
      url: "https://youtube.com/watch?v=example2",
      rating: "good",
      views: "87K",
      duration: "12:15",
      publishedAt: "5 hours ago",
      comments: 31,
      likes: 156,
      tags: ["NVDA", "AI", "Tech"],
    },
    {
      id: 3,
      title: "Federal Reserve Decision Impact on Market",
      channel: "Market Insights",
      thumbnail: "/federal-reserve-preview.png",
      url: "https://youtube.com/watch?v=example3",
      rating: "good",
      views: "203K",
      duration: "25:30",
      publishedAt: "1 day ago",
      comments: 67,
      likes: 234,
      tags: ["Fed", "Interest Rates", "Market"],
    },
  ]

  const marketNews = [
    {
      title: "S&P 500 Reaches New All-Time High",
      source: "MarketWatch",
      time: "1 hour ago",
      category: "Markets",
    },
    {
      title: "Tech Stocks Rally on AI Optimism",
      source: "Bloomberg",
      time: "3 hours ago",
      category: "Technology",
    },
    {
      title: "Federal Reserve Hints at Rate Cuts",
      source: "Reuters",
      time: "6 hours ago",
      category: "Policy",
    },
  ]

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "bg-green-600/20 text-green-400 border-green-600/30"
      case "good":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
      case "average":
        return "bg-red-600/20 text-red-400 border-red-600/30"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-600/30"
    }
  }

  const getRatingStars = (rating: string) => {
    switch (rating) {
      case "excellent":
        return 5
      case "good":
        return 4
      case "average":
        return 3
      default:
        return 2
    }
  }

  return (
    <div className="space-y-6">
      {/* Market News Section */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <span>Latest Market News</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {marketNews.map((news, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm">{news.title}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-400">{news.source}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{news.time}</span>
                  </div>
                </div>
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">{news.category}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Community Videos */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-400" />
            <span>Community Videos</span>
          </CardTitle>
          <CardDescription className="text-gray-400">Latest financial content from trusted creators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {communityVideos.map((video) => (
              <div key={video.id} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-32 h-20 object-cover rounded-lg bg-gray-700"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-white font-medium text-sm leading-tight">{video.title}</h3>
                      <Badge className={`ml-2 text-xs ${getRatingColor(video.rating)}`}>{video.rating}</Badge>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-sm">{video.channel}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(getRatingStars(video.rating))].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{video.publishedAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{video.comments} comments</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{video.likes}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {video.tags.map((tag, index) => (
                        <Badge key={index} className="bg-gray-700/50 text-gray-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Analyze
                    </Button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <h4 className="text-white font-medium text-sm mb-3">Community Discussion</h4>

                  <div className="space-y-3 mb-4">
                    <div className="bg-gray-700/30 rounded p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-blue-400 text-sm font-medium">@InvestorMike</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Great analysis! The P/E ratio comparison was particularly insightful.
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span className="text-xs">5</span>
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          <span className="text-xs">Reply</span>
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-700/30 rounded p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-blue-400 text-sm font-medium">@TradingQueen</span>
                        <span className="text-xs text-gray-500">4 hours ago</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        I disagree with the bullish sentiment. The debt levels are concerning.
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span className="text-xs">2</span>
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          <span className="text-xs">Reply</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Share your thoughts on this video..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 text-sm"
                      rows={2}
                    />
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white self-end"
                      disabled={!newComment.trim()}
                    >
                      Post
                    </Button>
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
