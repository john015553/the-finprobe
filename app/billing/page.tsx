"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Check, Zap, Crown, ArrowRight } from "lucide-react"

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState("basic") // or "pro"

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 9,
      description: "Perfect for casual analysis",
      features: ["10 video analyses per month", "Basic fact-checking", "Standard veracity ratings", "Email support"],
      icon: Zap,
      popular: false,
    },
    {
      id: "pro",
      name: "PRO",
      price: 29,
      description: "For serious financial researchers",
      features: [
        "Unlimited video analyses",
        "Advanced fact-checking with sources",
        "Detailed veracity breakdowns",
        "Priority support",
        "Export reports (PDF/CSV)",
        "API access",
        "Custom credibility filters",
      ],
      icon: Crown,
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Billing & Subscription
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your financial content analysis needs
          </p>
        </div>

        {/* Current Plan Status */}
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-400" />
              <span>Current Subscription</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-900/30">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  {currentPlan === "pro" ? (
                    <Crown className="h-6 w-6 text-yellow-400" />
                  ) : (
                    <Zap className="h-6 w-6 text-blue-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{currentPlan === "pro" ? "PRO Plan" : "Basic Plan"}</h3>
                  <p className="text-sm text-gray-400">
                    {currentPlan === "pro" ? "Unlimited video analysis" : "10 analyses per month"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-400">${currentPlan === "pro" ? "29" : "9"}/mo</p>
                <p className="text-sm text-gray-400">Next billing: Jan 15, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upgrade Plans */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Upgrade Your Plan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon
              const isCurrentPlan = currentPlan === plan.id
              const isUpgrade = plan.id === "pro" && currentPlan === "basic"

              return (
                <Card
                  key={plan.id}
                  className={`relative bg-gray-900/50 border transition-all duration-300 hover:scale-105 ${
                    plan.popular ? "border-blue-400/50 shadow-lg shadow-blue-400/20" : "border-blue-900/30"
                  } ${isCurrentPlan ? "ring-2 ring-green-400/50" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-3 py-1">Most Popular</Badge>
                    </div>
                  )}

                  {isCurrentPlan && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-green-600 text-white px-3 py-1">Current Plan</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full ${plan.popular ? "bg-blue-600/20" : "bg-gray-800/50"}`}>
                        <Icon className={`h-8 w-8 ${plan.id === "pro" ? "text-yellow-400" : "text-blue-400"}`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      {isCurrentPlan ? (
                        <Button className="w-full bg-gray-700 text-gray-300 cursor-not-allowed" disabled>
                          Current Plan
                        </Button>
                      ) : isUpgrade ? (
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                          onClick={() => setCurrentPlan("pro")}
                        >
                          Upgrade to PRO
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 bg-transparent"
                          onClick={() => setCurrentPlan("basic")}
                        >
                          Downgrade to Basic
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Billing History */}
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Dec 15, 2024", amount: "$29.00", plan: "PRO Plan", status: "Paid" },
                { date: "Nov 15, 2024", amount: "$29.00", plan: "PRO Plan", status: "Paid" },
                { date: "Oct 15, 2024", amount: "$9.00", plan: "Basic Plan", status: "Paid" },
              ].map((invoice, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">
                      <p className="text-white font-medium">{invoice.date}</p>
                      <p className="text-gray-400">{invoice.plan}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-medium">{invoice.amount}</span>
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="bg-gray-900/50 border-blue-900/30">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-400">Expires 12/27</p>
                </div>
              </div>
              <Button variant="outline" className="border-blue-400/50 text-blue-400 bg-transparent">
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
