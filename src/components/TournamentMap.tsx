import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Tournament {
  id: string;
  name: string;
  city: string;
  country: string;
  date: string;
  prize: string;
  status: 'live' | 'upcoming' | 'finished';
  teams: number;
  position: { x: number; y: number };
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'IEM Katowice 2024',
    city: 'Katowice',
    country: 'Poland',
    date: '15-25 Mar 2024',
    prize: '$1,000,000',
    status: 'live',
    teams: 24,
    position: { x: 52, y: 38 }
  },
  {
    id: '2', 
    name: 'BLAST Premier',
    city: 'Copenhagen',
    country: 'Denmark',
    date: '10-20 Apr 2024',
    prize: '$425,000',
    status: 'upcoming',
    teams: 16,
    position: { x: 50, y: 32 }
  },
  {
    id: '3',
    name: 'ESL Pro League',
    city: 'Malta',
    country: 'Malta',
    date: '1-10 Feb 2024',
    prize: '$835,000',
    status: 'finished',
    teams: 32,
    position: { x: 51, y: 45 }
  },
  {
    id: '4',
    name: 'PGL Major',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    date: '5-15 May 2024',
    prize: '$2,000,000',
    status: 'upcoming',
    teams: 24,
    position: { x: 25, y: 68 }
  },
  {
    id: '5',
    name: 'FACEIT Major',
    city: 'London',
    country: 'UK',
    date: '20-30 Jun 2024',
    prize: '$1,500,000',
    status: 'upcoming',
    teams: 24,
    position: { x: 48, y: 28 }
  },
  {
    id: '6',
    name: 'Intel Extreme Masters',
    city: 'Los Angeles',
    country: 'USA',
    date: '15-25 Jul 2024',
    prize: '$750,000',
    status: 'upcoming',
    teams: 16,
    position: { x: 15, y: 40 }
  }
];

const TournamentMap = () => {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [hoveredTournament, setHoveredTournament] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-600 animate-glow';
      case 'upcoming': return 'bg-cs2-orange';
      case 'finished': return 'bg-gray-600';
      default: return 'bg-cs2-orange';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live': return '🔴';
      case 'upcoming': return '⏰';
      case 'finished': return '✅';
      default: return '⏰';
    }
  };

  return (
    <div className="w-full">
      <Card className="bg-cs2-gray border-cs2-gray">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cs2-orange">
            <Icon name="MapPin" className="h-6 w-6" />
            Мировые турниры CS2
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* World Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-cs2-dark to-cs2-gray rounded-lg overflow-hidden border border-cs2-orange/20">
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simplified world continents */}
                <path d="M10 25 L30 20 L35 30 L25 35 Z" fill="#333" opacity="0.3" />
                <path d="M35 15 L65 12 L70 25 L68 35 L40 38 Z" fill="#333" opacity="0.3" />
                <path d="M70 20 L85 18 L90 30 L88 40 L75 42 Z" fill="#333" opacity="0.3" />
                <path d="M15 40 L35 45 L30 55 L20 52 Z" fill="#333" opacity="0.3" />
                <path d="M65 45 L85 48 L82 55 L70 52 Z" fill="#333" opacity="0.3" />
              </svg>
            </div>

            {/* Tournament Markers */}
            {tournaments.map((tournament) => (
              <Dialog key={tournament.id}>
                <DialogTrigger asChild>
                  <button
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
                      hoveredTournament === tournament.id ? 'scale-125' : ''
                    }`}
                    style={{
                      left: `${tournament.position.x}%`,
                      top: `${tournament.position.y}%`
                    }}
                    onMouseEnter={() => setHoveredTournament(tournament.id)}
                    onMouseLeave={() => setHoveredTournament(null)}
                    onClick={() => setSelectedTournament(tournament)}
                  >
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(tournament.status)} border-2 border-white shadow-lg`}>
                      <div className="w-full h-full rounded-full animate-ping opacity-75"></div>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredTournament === tournament.id && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-cs2-dark border border-cs2-orange rounded-lg p-3 min-w-48 z-10 animate-fade-in">
                        <h4 className="font-semibold text-white text-sm">{tournament.name}</h4>
                        <p className="text-xs text-gray-300">{tournament.city}, {tournament.country}</p>
                        <p className="text-xs text-cs2-green">{tournament.prize}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs">{getStatusIcon(tournament.status)}</span>
                          <span className="text-xs text-gray-400">{tournament.date}</span>
                        </div>
                      </div>
                    )}
                  </button>
                </DialogTrigger>

                <DialogContent className="bg-cs2-dark border-cs2-orange text-white">
                  <DialogHeader>
                    <DialogTitle className="text-cs2-orange">{tournament.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Место</p>
                        <p className="font-semibold">{tournament.city}, {tournament.country}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Даты</p>
                        <p className="font-semibold">{tournament.date}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Призовой фонд</p>
                        <p className="font-semibold text-cs2-green text-xl">{tournament.prize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Команды</p>
                        <p className="font-semibold">{tournament.teams}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-2">Статус</p>
                      <Badge className={getStatusColor(tournament.status)}>
                        {getStatusIcon(tournament.status)} {
                          tournament.status === 'live' ? 'Проходит сейчас' :
                          tournament.status === 'upcoming' ? 'Скоро' : 'Завершен'
                        }
                      </Badge>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button 
                        className={
                          tournament.status === 'live' ? 'bg-red-600 hover:bg-red-700' :
                          tournament.status === 'upcoming' ? 'bg-cs2-orange hover:bg-cs2-orange/90 text-black' :
                          'bg-cs2-gray border border-gray-500 hover:bg-gray-700'
                        }
                        disabled={tournament.status === 'finished'}
                      >
                        <Icon name={tournament.status === 'live' ? 'Play' : tournament.status === 'upcoming' ? 'Calendar' : 'Archive'} className="mr-2 h-4 w-4" />
                        {tournament.status === 'live' ? 'Смотреть' : tournament.status === 'upcoming' ? 'Уведомить' : 'Результаты'}
                      </Button>
                      <Button variant="outline" className="border-cs2-orange text-cs2-orange hover:bg-cs2-orange hover:text-black">
                        <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600 animate-glow"></div>
              <span className="text-gray-300">Live турниры</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cs2-orange"></div>
              <span className="text-gray-300">Предстоящие</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <span className="text-gray-300">Завершенные</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tournament Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-cs2-gray border-cs2-gray">
          <CardContent className="p-6 text-center">
            <Icon name="Trophy" className="h-10 w-10 text-cs2-orange mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">{tournaments.filter(t => t.status === 'live').length}</p>
            <p className="text-sm text-gray-400">Активных турниров</p>
          </CardContent>
        </Card>
        
        <Card className="bg-cs2-gray border-cs2-gray">
          <CardContent className="p-6 text-center">
            <Icon name="Calendar" className="h-10 w-10 text-cs2-green mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">{tournaments.filter(t => t.status === 'upcoming').length}</p>
            <p className="text-sm text-gray-400">Предстоящих</p>
          </CardContent>
        </Card>
        
        <Card className="bg-cs2-gray border-cs2-gray">
          <CardContent className="p-6 text-center">
            <Icon name="DollarSign" className="h-10 w-10 text-cs2-orange mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">$6.5M</p>
            <p className="text-sm text-gray-400">Общий призовой фонд</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TournamentMap;