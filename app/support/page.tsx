"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      question: "How accurate is the AI fact-checking?",
      answer:
        "Our AI fact-checking system has an accuracy rate of 94% and cross-references multiple financial data sources including SEC filings, earnings reports, and market data APIs.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "We support all YouTube videos with available captions or clear audio for transcript generation. Private or restricted videos cannot be analyzed.",
    },
    {
      question: "How many analyses can I perform per day?",
      answer:
        "Basic plan allows 10 analyses per day, PRO plan allows 30 analyses per day, and Enterprise has unlimited analyses.",
    },
    {
      question: "Can I export analysis reports?",
      answer:
        "PRO and Enterprise users can export reports in PDF, CSV, and JSON formats. Basic users can view reports online only.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4 text-center">
            <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-medium mb-1">Live Chat</h3>
            <p className="text-gray-400 text-sm mb-3">Get instant help from our team</p>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4 text-center">
            <Mail className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-medium mb-1">Email Support</h3>
            <p className="text-gray-400 text-sm mb-3">Response within 24 hours</p>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardContent className="p-4 text-center">
            <Phone className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-medium mb-1">Phone Support</h3>
            <p className="text-gray-400 text-sm mb-3">PRO & Enterprise only</p>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              Schedule Call
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Hours */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-400" />
            <span>Support Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-medium mb-2">Live Chat & Email</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Phone Support</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>Monday - Friday: 10:00 AM - 5:00 PM EST</p>
                <p>PRO & Enterprise plans only</p>
                <p>Scheduled appointments required</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-blue-400" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white">Submit a Support Request</CardTitle>
          <CardDescription className="text-gray-400">
            Can't find what you're looking for? Send us a message and we'll get back to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Subject</label>
              <Input
                placeholder="Brief description of your issue"
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Message</label>
              <Textarea
                placeholder="Please describe your issue in detail..."
                rows={5}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit Request</Button>
          </form>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card className="bg-gray-900/50 border-blue-900/30">
        <CardHeader>
          <CardTitle className="text-white">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">API Services</span>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">Operational</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Video Analysis</span>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">Operational</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Database</span>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-400" />
                <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 text-xs">Maintenance</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
