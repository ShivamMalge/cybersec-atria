import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomShieldLogo from "@/components/custom-shield-logo"

interface FeatureCardProps {
  icon: LucideIcon | typeof CustomShieldLogo
  title: string
  description: string
  isCustomIcon?: boolean
}

export default function FeatureCard({ icon: Icon, title, description, isCustomIcon = false }: FeatureCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          {isCustomIcon ? (
            <CustomShieldLogo size={31} className="text-green-400" />
          ) : (
            <Icon className="h-6 w-6 text-green-400" />
          )}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

