'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Dumbbell, Utensils, TrendingUp, Calculator, Target, Flame, Heart, Trophy } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin neon-glow" />
      </div>
    );
  }

  if (!user) return null;

  const quickActions = [
    { icon: Dumbbell, label: 'Start Workout', path: '/workouts', gradient: 'from-orange-600 to-orange-500', iconColor: 'icon-orange' },
    { icon: Utensils, label: 'Plan Meal', path: '/meals', gradient: 'from-green-600 to-green-500', iconColor: 'icon-green' },
    { icon: TrendingUp, label: 'View Progress', path: '/progress', gradient: 'from-blue-600 to-blue-500', iconColor: 'icon-blue' },
    { icon: Calculator, label: 'BMI Calculator', path: '/bmi', gradient: 'from-purple-600 to-purple-500', iconColor: 'icon-purple' },
  ];

  const stats = [
    { icon: Target, label: 'Workouts This Week', value: '5', color: 'icon-orange', gradient: 'from-orange-500 to-orange-600' },
    { icon: Flame, label: 'Calories Today', value: '2,340', color: 'icon-pink', gradient: 'from-pink-500 to-pink-600' },
    { icon: Trophy, label: 'Streak Days', value: '12', color: 'icon-cyan', gradient: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <div className="container py-6 animate-fadeIn max-w-6xl">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text-neon mb-2 neon-text">
          Welcome Back! 🏀
        </h1>
        <p className="text-neutral-400 text-lg">
          Ready to crush your training goals today?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} hoverable={false} className="neon-border-animated">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} flex-shrink-0 ${stat.color} icon-glow`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-3xl md:text-4xl font-bold gradient-text-neon">{stat.value}</div>
                  <div className="text-sm text-neutral-400 truncate">{stat.label}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
          <span className="neon-text">Quick Actions</span>
          <Heart size={24} className="icon-pink icon-glow animate-pulse" />
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.label}
                onClick={() => router.push(action.path)}
                className="text-center cursor-pointer hover:scale-105 transition-transform"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg`}
                  style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}
                >
                  <Icon size={28} className={`text-white ${action.iconColor} icon-glow`} />
                </div>
                <div className="font-semibold text-sm md:text-base">{action.label}</div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text">Recent Activity</h2>
        <Card hoverable={false} className="neon-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3 md:gap-4 pb-4 border-b border-neutral-800">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Dumbbell size={24} className="icon-orange icon-glow" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base md:text-lg">Upper Body Workout</div>
                <div className="text-sm text-neutral-400">Completed 2 hours ago</div>
              </div>
              <div className="text-lg md:text-xl font-bold icon-orange">45 min</div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Utensils size={24} className="icon-green icon-glow" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base md:text-lg">Logged Breakfast</div>
                <div className="text-sm text-neutral-400">Today at 8:30 AM</div>
              </div>
              <div className="text-lg md:text-xl font-bold icon-green">520 cal</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
