import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import TournamentMap from "@/components/TournamentMap";

const CS2HomePage = () => {
  const topPlayers = [
    { name: "s1mple", rating: 8.9, team: "NAVI", rank: 1 },
    { name: "ZywOo", rating: 8.7, team: "G2", rank: 2 },
    { name: "sh1ro", rating: 8.5, team: "Cloud9", rank: 3 },
    { name: "device", rating: 8.3, team: "Astralis", rank: 4 },
    { name: "NiKo", rating: 8.1, team: "FaZe", rank: 5 },
  ];

  const tournaments = [
    { name: "IEM Katowice 2024", prize: "$1,000,000", status: "Live" },
    { name: "BLAST Premier", prize: "$425,000", status: "Upcoming" },
    { name: "ESL Pro League", prize: "$835,000", status: "Finished" },
  ];

  const teams = [
    { name: "NAVI", players: 5, rating: 95, logo: "🏆" },
    { name: "FaZe Clan", players: 5, rating: 92, logo: "⚡" },
    { name: "G2 Esports", players: 5, rating: 89, logo: "🎯" },
    { name: "Astralis", players: 5, rating: 87, logo: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-cs2-dark dark text-white">
      {/* Header */}
      <header className="border-b border-cs2-gray bg-cs2-dark/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="h-8 w-8 text-cs2-orange" />
              <h1 className="text-2xl font-bold text-cs2-orange">CS2 Pro</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-cs2-orange transition-colors">Главная</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Команды</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Турниры</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Статистика</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Стримы</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Магазин</a>
              <a href="#" className="hover:text-cs2-orange transition-colors">Контакты</a>
            </div>

            <Button variant="outline" className="border-cs2-orange text-cs2-orange hover:bg-cs2-orange hover:text-black">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cs2-orange to-cs2-green bg-clip-text text-transparent">
              COUNTER-STRIKE 2
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Киберспортивный портал с рейтингами игроков, статистикой команд и онлайн-трансляциями турниров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cs2-orange hover:bg-cs2-orange/90 text-black font-semibold">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Смотреть стримы
              </Button>
              <Button size="lg" variant="outline" className="border-cs2-green text-cs2-green hover:bg-cs2-green hover:text-black">
                <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
                Рейтинги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-cs2-gray">
            <TabsTrigger value="players" className="data-[state=active]:bg-cs2-orange data-[state=active]:text-black">
              Игроки
            </TabsTrigger>
            <TabsTrigger value="teams" className="data-[state=active]:bg-cs2-orange data-[state=active]:text-black">
              Команды
            </TabsTrigger>
            <TabsTrigger value="tournaments" className="data-[state=active]:bg-cs2-orange data-[state=active]:text-black">
              Турниры
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-cs2-orange data-[state=active]:text-black">
              Статистика
            </TabsTrigger>
          </TabsList>

          {/* Players Tab */}
          <TabsContent value="players" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-cs2-gray border-cs2-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cs2-orange">
                    <Icon name="Trophy" className="h-6 w-6" />
                    Топ-5 игроков
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPlayers.map((player, index) => (
                    <div key={player.name} className="flex items-center justify-between p-4 bg-cs2-dark rounded-lg hover:bg-cs2-dark/70 transition-colors">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-cs2-orange text-black font-bold">
                          #{player.rank}
                        </Badge>
                        <div>
                          <p className="font-semibold text-white">{player.name}</p>
                          <p className="text-sm text-gray-400">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-cs2-green font-bold">{player.rating}</p>
                        <p className="text-xs text-gray-400">Рейтинг</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-cs2-gray border-cs2-gray">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cs2-orange">
                    <Icon name="BarChart3" className="h-6 w-6" />
                    Статистика матчей
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Процент побед</span>
                      <span className="text-cs2-green">78%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-cs2-dark" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>K/D соотношение</span>
                      <span className="text-cs2-green">1.34</span>
                    </div>
                    <Progress value={67} className="h-2 bg-cs2-dark" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Точность</span>
                      <span className="text-cs2-green">64%</span>
                    </div>
                    <Progress value={64} className="h-2 bg-cs2-dark" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {teams.map((team) => (
                <Card key={team.name} className="bg-cs2-gray border-cs2-gray hover:border-cs2-orange transition-colors group">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{team.logo}</div>
                    <CardTitle className="text-white group-hover:text-cs2-orange transition-colors">
                      {team.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-cs2-green">{team.rating}</p>
                      <p className="text-xs text-gray-400">Рейтинг команды</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">{team.players} игроков</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-cs2-orange text-cs2-orange hover:bg-cs2-orange hover:text-black">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tournaments Tab */}
          <TabsContent value="tournaments" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <Card key={tournament.name} className="bg-cs2-gray border-cs2-gray">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white">{tournament.name}</CardTitle>
                      <Badge 
                        variant={tournament.status === 'Live' ? 'destructive' : tournament.status === 'Upcoming' ? 'secondary' : 'outline'}
                        className={
                          tournament.status === 'Live' ? 'bg-red-600 animate-glow' :
                          tournament.status === 'Upcoming' ? 'bg-cs2-orange text-black' :
                          'border-gray-500 text-gray-400'
                        }
                      >
                        {tournament.status === 'Live' ? '🔴 Live' : 
                         tournament.status === 'Upcoming' ? '⏰ Скоро' : '✅ Завершен'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-cs2-green text-xl font-bold">{tournament.prize}</p>
                        <p className="text-sm text-gray-400">Призовой фонд</p>
                      </div>
                      <Button 
                        className={
                          tournament.status === 'Live' ? 'bg-red-600 hover:bg-red-700' :
                          tournament.status === 'Upcoming' ? 'bg-cs2-orange hover:bg-cs2-orange/90 text-black' :
                          'bg-cs2-gray border border-gray-500 hover:bg-gray-700'
                        }
                        disabled={tournament.status === 'Finished'}
                      >
                        <Icon name={tournament.status === 'Live' ? 'Play' : tournament.status === 'Upcoming' ? 'Calendar' : 'Archive'} className="mr-2 h-4 w-4" />
                        {tournament.status === 'Live' ? 'Смотреть' : tournament.status === 'Upcoming' ? 'Уведомить' : 'Результаты'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <Card className="bg-cs2-gray border-cs2-gray">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" className="h-12 w-12 text-cs2-orange mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">2,847</p>
                  <p className="text-sm text-gray-400">Активных игроков</p>
                </CardContent>
              </Card>
              
              <Card className="bg-cs2-gray border-cs2-gray">
                <CardContent className="p-6 text-center">
                  <Icon name="Gamepad2" className="h-12 w-12 text-cs2-green mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">156</p>
                  <p className="text-sm text-gray-400">Матчей сегодня</p>
                </CardContent>
              </Card>
              
              <Card className="bg-cs2-gray border-cs2-gray">
                <CardContent className="p-6 text-center">
                  <Icon name="Trophy" className="h-12 w-12 text-cs2-orange mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">24</p>
                  <p className="text-sm text-gray-400">Активных турниров</p>
                </CardContent>
              </Card>
              
              <Card className="bg-cs2-gray border-cs2-gray">
                <CardContent className="p-6 text-center">
                  <Icon name="DollarSign" className="h-12 w-12 text-cs2-green mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">$4.2M</p>
                  <p className="text-sm text-gray-400">Призовых в этом месяце</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tournament Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-cs2-orange">Карта турниров мира</h2>
          <TournamentMap />
        </div>
      </section>

      {/* News Section */}
      <section className="bg-cs2-gray py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-cs2-orange">Последние новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-cs2-dark border-cs2-dark hover:border-cs2-orange transition-colors group">
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-cs2-orange to-cs2-green rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Image" className="h-16 w-16 text-white/50" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-cs2-orange transition-colors mb-2">
                    Крупное обновление CS2 изменило мету игры
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Valve выпустила обновление, которое значительно изменило баланс оружия...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">2 часа назад</span>
                    <Button variant="ghost" size="sm" className="text-cs2-orange hover:text-black hover:bg-cs2-orange">
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cs2-dark border-t border-cs2-gray py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Target" className="h-6 w-6 text-cs2-orange" />
                <span className="text-xl font-bold text-cs2-orange">CS2 Pro</span>
              </div>
              <p className="text-gray-400">Профессиональный киберспортивный портал для Counter-Strike 2</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cs2-orange">Команды</a></li>
                <li><a href="#" className="hover:text-cs2-orange">Турниры</a></li>
                <li><a href="#" className="hover:text-cs2-orange">Статистика</a></li>
                <li><a href="#" className="hover:text-cs2-orange">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Сервисы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cs2-orange">Стримы</a></li>
                <li><a href="#" className="hover:text-cs2-orange">Магазин</a></li>
                <li><a href="#" className="hover:text-cs2-orange">Рейтинги</a></li>
                <li><a href="#" className="hover:text-cs2-orange">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cs2-orange">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cs2-orange">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cs2-orange">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cs2-gray mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CS2 Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CS2HomePage;