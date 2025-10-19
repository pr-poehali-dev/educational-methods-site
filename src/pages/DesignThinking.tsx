import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const DesignThinking = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState<string>('empathize');

  const phases = [
    {
      id: 'empathize',
      title: 'Эмпатия',
      icon: 'Heart',
      color: 'bg-primary',
      image: 'https://cdn.poehali.dev/projects/9a6b7cf2-329c-454d-80b5-2c0b54fa41fa/files/46154edd-4ece-43fc-a9ef-041c33be7b75.jpg',
      description: 'Глубокое понимание потребностей пользователей',
      methods: [
        {
          name: 'Интервью с пользователями',
          description: 'Глубинные беседы для выявления скрытых потребностей и болей',
          tools: ['Гайд интервью', 'Диктофон', 'Заметки']
        },
        {
          name: 'Наблюдение',
          description: 'Изучение поведения пользователей в естественной среде',
          tools: ['Видеозапись', 'Фотофиксация', 'Полевые заметки']
        },
        {
          name: 'Карта эмпатии',
          description: 'Визуализация чувств, мыслей и действий пользователя',
          tools: ['Miro', 'Стикеры', 'Шаблон карты']
        }
      ]
    },
    {
      id: 'define',
      title: 'Фокусировка',
      icon: 'Target',
      color: 'bg-secondary',
      image: 'https://cdn.poehali.dev/projects/9a6b7cf2-329c-454d-80b5-2c0b54fa41fa/files/b1e14149-f2b3-40c6-bb29-51bc3199883f.jpg',
      description: 'Формулирование проблемы на основе инсайтов',
      methods: [
        {
          name: 'Customer Journey Map',
          description: 'Карта пути клиента с выявлением болевых точек',
          tools: ['Miro', 'Figma', 'UXPressia']
        },
        {
          name: 'Point of View',
          description: 'Формулирование проблемы от лица пользователя',
          tools: ['Шаблон POV', 'Инсайты', 'Персоны']
        },
        {
          name: 'How Might We',
          description: 'Переформулирование проблемы в возможности',
          tools: ['Стикеры', 'Brainstorming', 'Miro']
        }
      ]
    },
    {
      id: 'ideate',
      title: 'Генерация идей',
      icon: 'Lightbulb',
      color: 'bg-accent',
      image: 'https://cdn.poehali.dev/projects/9a6b7cf2-329c-454d-80b5-2c0b54fa41fa/files/0d120a52-23fb-4314-bfb9-5c67647917a8.jpg',
      description: 'Создание множества решений проблемы',
      methods: [
        {
          name: 'Brainstorming',
          description: 'Командная генерация максимального количества идей',
          tools: ['Miro', 'Стикеры', 'Таймер']
        },
        {
          name: 'SCAMPER',
          description: 'Техника модификации идей через вопросы',
          tools: ['Чек-лист SCAMPER', 'Mind map', 'Notion']
        },
        {
          name: 'Worst Possible Idea',
          description: 'Генерация худших идей для поиска неожиданных решений',
          tools: ['Стикеры', 'Доска', 'Креативность']
        }
      ]
    },
    {
      id: 'prototype',
      title: 'Прототипирование',
      icon: 'Box',
      color: 'bg-primary',
      image: 'https://cdn.poehali.dev/projects/9a6b7cf2-329c-454d-80b5-2c0b54fa41fa/files/07f5e808-e095-4543-b121-f7ed589b84ec.jpg',
      description: 'Быстрое создание осязаемых версий решений',
      methods: [
        {
          name: 'Бумажное прототипирование',
          description: 'Быстрые скетчи и макеты из бумаги',
          tools: ['Бумага', 'Маркеры', 'Ножницы']
        },
        {
          name: 'Цифровые прототипы',
          description: 'Интерактивные макеты интерфейсов',
          tools: ['Figma', 'Adobe XD', 'Sketch']
        },
        {
          name: 'Ролевые игры',
          description: 'Проигрывание сценариев использования решения',
          tools: ['Сценарий', 'Реквизит', 'Видео']
        }
      ]
    },
    {
      id: 'test',
      title: 'Тестирование',
      icon: 'FlaskConical',
      color: 'bg-secondary',
      image: 'https://cdn.poehali.dev/projects/9a6b7cf2-329c-454d-80b5-2c0b54fa41fa/files/7f05b02d-4297-4a1a-baff-d467f336b0ac.jpg',
      description: 'Проверка решений с реальными пользователями',
      methods: [
        {
          name: 'Юзабилити-тестирование',
          description: 'Проверка удобства использования прототипа',
          tools: ['Figma', 'Сценарий', 'Видеозапись']
        },
        {
          name: 'A/B тестирование',
          description: 'Сравнение двух вариантов решения',
          tools: ['Google Optimize', 'Яндекс.Метрика', 'Analytics']
        },
        {
          name: 'Feedback сессии',
          description: 'Сбор обратной связи от пользователей',
          tools: ['Форма', 'Интервью', 'Анкета']
        }
      ]
    }
  ];

  const resources = [
    {
      icon: 'BookOpen',
      title: 'Книги',
      items: ['Change by Design - Tim Brown', 'The Design of Everyday Things - Don Norman', 'Sprint - Jake Knapp']
    },
    {
      icon: 'Video',
      title: 'Видео-курсы',
      items: ['Design Thinking Bootcamp', 'IDEO U', 'Coursera: Design Thinking']
    },
    {
      icon: 'FileText',
      title: 'Шаблоны',
      items: ['Empathy Map Canvas', 'Value Proposition Canvas', 'Business Model Canvas']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="gap-2"
              >
                <Icon name="ArrowLeft" size={18} />
                Назад
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Design Thinking
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Методология
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Design Thinking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Человеко-ориентированный подход к инновациям, который помогает находить 
            креативные решения сложных проблем через понимание потребностей пользователей
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Этапы Design Thinking</h3>
          
          <Tabs defaultValue="empathize" className="w-full" onValueChange={setActivePhase}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2 bg-transparent">
              {phases.map((phase, index) => (
                <TabsTrigger
                  key={phase.id}
                  value={phase.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={phase.icon} size={24} className="text-white" />
                  </div>
                  <span className="font-semibold text-sm">{phase.title}</span>
                  <Badge variant="secondary" className="text-xs">
                    {index + 1}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {phases.map((phase) => (
              <TabsContent key={phase.id} value={phase.id} className="mt-8">
                <Card className="border-2 overflow-hidden">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={phase.image} 
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <CardHeader className="-mt-20 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon name={phase.icon} size={32} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {phase.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-lg mb-4">Методы и инструменты</h4>
                    <div className="grid gap-6">
                      {phase.methods.map((method, idx) => (
                        <Card key={idx} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Icon name="CheckCircle2" size={20} className="text-primary" />
                              {method.name}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {method.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              <span className="text-sm font-medium text-muted-foreground">Инструменты:</span>
                              {method.tools.map((tool, toolIdx) => (
                                <Badge key={toolIdx} variant="outline" className="gap-1">
                                  <Icon name="Wrench" size={12} />
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Полезные ресурсы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={resource.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="ChevronRight" size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-2">
            <CardContent className="pt-8 text-center">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4">
                Готовы применить Design Thinking?
              </h3>
              <p className="text-muted-foreground mb-6">
                Начните с простого проекта и пройдите все 5 этапов
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Icon name="Play" size={20} />
                  Начать практику
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Download" size={20} />
                  Скачать материалы
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DesignThinking;