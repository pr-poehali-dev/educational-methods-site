import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const sections = [
    {
      id: 'methodology',
      title: 'Методологии',
      icon: 'Lightbulb',
      description: 'Современные подходы к управлению проектами',
      color: 'bg-primary',
      methods: [
        { name: 'Design Thinking', path: '/design-thinking', description: 'Человеко-ориентированный подход к инновациям' },
        { name: 'Agile & Scrum', path: '/agile', description: 'Гибкое управление проектами' },
        { name: 'Lean Startup', path: '/lean', description: 'Быстрое тестирование гипотез' },
        { name: 'Kanban', path: '/kanban', description: 'Визуализация рабочего процесса' }
      ]
    },
    {
      id: 'research',
      title: 'Исследования',
      icon: 'Search',
      description: 'Методы сбора и анализа данных',
      color: 'bg-secondary',
      methods: [
        { name: 'Интервью', description: 'Глубинные беседы с пользователями' },
        { name: 'Опросы', description: 'Количественный сбор данных' },
        { name: 'Наблюдение', description: 'Изучение поведения пользователей' },
        { name: 'Анализ конкурентов', description: 'Исследование рынка и конкурентов' }
      ]
    },
    {
      id: 'planning',
      title: 'Планирование',
      icon: 'Calendar',
      description: 'Инструменты планирования и организации',
      color: 'bg-accent',
      methods: [
        { name: 'User Story Mapping', description: 'Визуализация пользовательского пути' },
        { name: 'OKR', description: 'Постановка целей и ключевых результатов' },
        { name: 'Backlog Management', description: 'Управление задачами проекта' },
        { name: 'Sprint Planning', description: 'Планирование итераций' }
      ]
    },
    {
      id: 'prototype',
      title: 'Прототипирование',
      icon: 'Box',
      description: 'Создание и тестирование прототипов',
      color: 'bg-purple-500',
      methods: [
        { name: 'Wireframes', description: 'Каркасные модели интерфейсов' },
        { name: 'Mockups', description: 'Визуальные макеты дизайна' },
        { name: 'Interactive Prototypes', description: 'Кликабельные прототипы' },
        { name: 'MVP', description: 'Минимально жизнеспособный продукт' }
      ]
    },
    {
      id: 'testing',
      title: 'Тестирование',
      icon: 'FlaskConical',
      description: 'Методы проверки решений',
      color: 'bg-green-500',
      methods: [
        { name: 'Usability Testing', description: 'Тестирование удобства использования' },
        { name: 'A/B Testing', description: 'Сравнительное тестирование вариантов' },
        { name: 'Focus Groups', description: 'Групповые обсуждения' },
        { name: 'Beta Testing', description: 'Тестирование с реальными пользователями' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Командная работа',
      icon: 'Users',
      description: 'Инструменты для совместной работы',
      color: 'bg-orange-500',
      methods: [
        { name: 'Brainstorming', description: 'Генерация идей в команде' },
        { name: 'Retrospectives', description: 'Анализ работы команды' },
        { name: 'Daily Standup', description: 'Ежедневные синхронизации' },
        { name: 'Workshop Facilitation', description: 'Проведение воркшопов' }
      ]
    }
  ];

  const designThinkingBenefits = [
    {
      icon: 'Users',
      title: 'Фокус на пользователе',
      description: 'Решения создаются с учетом реальных потребностей людей'
    },
    {
      icon: 'Lightbulb',
      title: 'Креативное мышление',
      description: 'Поощрение новых идей и нестандартных подходов'
    },
    {
      icon: 'Repeat',
      title: 'Итеративный процесс',
      description: 'Постоянное улучшение через прототипирование и тестирование'
    },
    {
      icon: 'Users2',
      title: 'Командная синергия',
      description: 'Объединение разных точек зрения для лучших решений'
    }
  ];

  const designThinkingPhases = [
    {
      number: 1,
      name: 'Эмпатия',
      icon: 'Heart',
      color: 'from-red-500 to-pink-500',
      solidColor: '#ef4444',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-800',
      description: 'Глубокое понимание пользователей и их потребностей',
      activities: ['Интервью', 'Наблюдение', 'Погружение в контекст'],
      x: 50,
      label: 'Старт'
    },
    {
      number: 2,
      name: 'Фокусировка',
      icon: 'Target',
      color: 'from-orange-500 to-yellow-500',
      solidColor: '#f97316',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      description: 'Определение ключевой проблемы для решения',
      activities: ['Синтез данных', 'Проблемные зоны', 'Инсайты'],
      x: 250,
      label: 'Проблема'
    },
    {
      number: 3,
      name: 'Генерация идей',
      icon: 'Lightbulb',
      color: 'from-yellow-500 to-green-500',
      solidColor: '#eab308',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      description: 'Создание множества вариантов решений',
      activities: ['Брейнсторминг', 'Crazy 8', 'Майнд-карты'],
      x: 450,
      label: 'Идеи'
    },
    {
      number: 4,
      name: 'Прототипирование',
      icon: 'Box',
      color: 'from-green-500 to-blue-500',
      solidColor: '#22c55e',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      description: 'Быстрое создание материальных версий идей',
      activities: ['Скетчи', 'Макеты', 'MVP'],
      x: 650,
      label: 'Прототип'
    },
    {
      number: 5,
      name: 'Тестирование',
      icon: 'FlaskConical',
      color: 'from-blue-500 to-purple-500',
      solidColor: '#3b82f6',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      description: 'Проверка решений с реальными пользователями',
      activities: ['Юзабилити-тесты', 'Обратная связь', 'Итерации'],
      x: 850,
      label: 'Решение'
    }
  ];

  // Автоматическая анимация прохождения по этапам
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setActivePhase(0);
    setTimeout(() => setIsAnimating(false), 15000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ProjectEdu
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {sections.slice(0, 4).map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Образовательная платформа
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Освойте методы проектной работы
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современная платформа для обучения студентов эффективным методологиям, инструментам и практикам управления проектами
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={() => navigate('/design-thinking')}>
              <Icon name="Lightbulb" size={20} />
              Узнать о Design Thinking
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => {
              const element = document.getElementById('methodology');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Icon name="BookOpen" size={20} />
              Методы и инструменты
            </Button>
          </div>
        </div>
      </section>

      {/* Design Thinking Block */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Методология инноваций
            </Badge>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Что такое Design Thinking?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Design Thinking — это человеко-ориентированный подход к инновациям, который объединяет потребности людей, 
              технологические возможности и бизнес-требования для создания жизнеспособных решений.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">В чём суть?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Design Thinking — это структурированный процесс решения сложных проблем через глубокое понимание 
                  пользователей и их потребностей. Вместо того чтобы предполагать, что нужно людям, вы узнаете это 
                  через исследования и тестирование.
                </p>
                <div className="flex items-start gap-3 pt-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Эмпатия к пользователю</p>
                    <p className="text-sm text-muted-foreground">Глубокое понимание проблем и контекста</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Быстрое прототипирование</p>
                    <p className="text-sm text-muted-foreground">Создание решений для быстрого тестирования</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Итеративный подход</p>
                    <p className="text-sm text-muted-foreground">Непрерывное улучшение на основе обратной связи</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl">В чём ценность?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Применение Design Thinking позволяет командам создавать по-настоящему востребованные решения, 
                  снижает риски провала продукта и повышает удовлетворённость пользователей.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <Icon name="TrendingUp" size={20} className="text-green-600 shrink-0" />
                    <p className="text-sm"><strong>80%</strong> компаний отмечают рост инноваций</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <Icon name="Target" size={20} className="text-blue-600 shrink-0" />
                    <p className="text-sm"><strong>70%</strong> снижение времени на разработку</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <Icon name="Heart" size={20} className="text-purple-600 shrink-0" />
                    <p className="text-sm"><strong>2x</strong> выше удовлетворённость клиентов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Double Diamond - интерактивная визуализация */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-4">Модель двойного алмаза</h4>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Процесс Design Thinking состоит из двух фаз: исследование проблемы и разработка решения
            </p>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Двойной алмаз SVG визуализация */}
              <div className="mb-8 px-4 relative">
                <svg viewBox="0 0 1000 450" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="diamond1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.2 }} />
                    </linearGradient>
                    <linearGradient id="diamond2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
                    </linearGradient>
                    
                    {/* Анимированный градиент для пути */}
                    <linearGradient id="pathGradient">
                      <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                    </linearGradient>

                    {/* Пульсация для активной точки */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Первый алмаз (Проблема) */}
                  <path d="M 50 200 L 250 50 L 450 200 L 250 350 Z" 
                    fill="url(#diamond1)" 
                    stroke="#ef4444" 
                    strokeWidth="3"
                    className={`transition-all duration-500 ${activePhase >= 0 && activePhase <= 1 ? 'opacity-100' : 'opacity-40'}`}
                  />
                  
                  {/* Второй алмаз (Решение) */}
                  <path d="M 450 200 L 650 50 L 850 200 L 650 350 Z" 
                    fill="url(#diamond2)" 
                    stroke="#22c55e" 
                    strokeWidth="3"
                    className={`transition-all duration-500 ${activePhase >= 2 ? 'opacity-100' : 'opacity-40'}`}
                  />
                  
                  {/* Анимированная линия прогресса */}
                  <line 
                    x1="50" 
                    y1="200" 
                    x2={designThinkingPhases[activePhase]?.x || 50}
                    y2="200" 
                    stroke="url(#pathGradient)" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-in-out"
                  />
                  
                  {/* Центральная пунктирная линия */}
                  <line x1="50" y1="200" x2="950" y2="200" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" 
                    opacity="0.2"
                  />
                  
                  {/* Интерактивные точки этапов */}
                  {designThinkingPhases.map((phase, idx) => (
                    <g key={idx}>
                      {/* Точка */}
                      <circle 
                        cx={phase.x} 
                        cy="200" 
                        r={activePhase === idx ? 14 : hoveredPoint === idx ? 12 : 8}
                        fill={phase.solidColor}
                        className={`cursor-pointer transition-all duration-300 ${activePhase === idx ? 'animate-pulse' : ''}`}
                        filter={activePhase === idx ? 'url(#glow)' : ''}
                        onMouseEnter={() => setHoveredPoint(idx)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        onClick={() => setActivePhase(idx)}
                      />
                      
                      {/* Номер внутри точки */}
                      <text 
                        x={phase.x} 
                        y="206" 
                        textAnchor="middle" 
                        className="fill-white font-bold text-xs pointer-events-none select-none"
                      >
                        {phase.number}
                      </text>
                      
                      {/* Подпись под точкой */}
                      <text 
                        x={phase.x} 
                        y="230" 
                        textAnchor="middle" 
                        className={`font-semibold text-sm transition-all duration-300 ${
                          activePhase === idx || hoveredPoint === idx
                            ? 'opacity-100 fill-current' 
                            : 'opacity-60 fill-current'
                        }`}
                      >
                        {phase.label}
                      </text>
                    </g>
                  ))}
                  
                  {/* Подписи фаз */}
                  <text x="250" y="30" textAnchor="middle" className="fill-red-500 font-bold text-2xl">
                    Открытие проблемы
                  </text>
                  <text x="650" y="30" textAnchor="middle" className="fill-green-500 font-bold text-2xl">
                    Создание решения
                  </text>
                  
                  {/* Стрелки расширения/сужения */}
                  <g opacity="0.5">
                    <text x="150" y="110" textAnchor="middle" className="fill-current text-sm">
                      Дивергенция
                    </text>
                    <text x="150" y="290" textAnchor="middle" className="fill-current text-sm">
                      (Расширение)
                    </text>
                    
                    <text x="350" y="110" textAnchor="middle" className="fill-current text-sm">
                      Конвергенция
                    </text>
                    <text x="350" y="290" textAnchor="middle" className="fill-current text-sm">
                      (Сужение)
                    </text>
                    
                    <text x="550" y="110" textAnchor="middle" className="fill-current text-sm">
                      Дивергенция
                    </text>
                    <text x="550" y="290" textAnchor="middle" className="fill-current text-sm">
                      (Расширение)
                    </text>
                    
                    <text x="750" y="110" textAnchor="middle" className="fill-current text-sm">
                      Конвергенция
                    </text>
                    <text x="750" y="290" textAnchor="middle" className="fill-current text-sm">
                      (Сужение)
                    </text>
                  </g>

                  {/* Иконки в углах алмазов */}
                  <g opacity="0.3">
                    {/* Эмпатия - верх первого алмаза */}
                    <circle cx="250" cy="50" r="20" fill="#ef4444" opacity="0.2" />
                    {/* Фокус - низ первого алмаза */}
                    <circle cx="250" cy="350" r="20" fill="#f97316" opacity="0.2" />
                    {/* Идеи - верх второго алмаза */}
                    <circle cx="650" cy="50" r="20" fill="#22c55e" opacity="0.2" />
                    {/* Тест - низ второго алмаза */}
                    <circle cx="650" cy="350" r="20" fill="#3b82f6" opacity="0.2" />
                  </g>
                </svg>

                {/* Кнопка управления анимацией */}
                <div className="absolute top-0 right-4 z-10">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={startAnimation}
                    className="gap-2"
                  >
                    <Icon name={isAnimating ? "Pause" : "Play"} size={16} />
                    {isAnimating ? "Пауза" : "Запустить анимацию"}
                  </Button>
                </div>
              </div>

              {/* Информационная карточка активного этапа */}
              <div className="mb-6">
                <Card className={`border-2 ${designThinkingPhases[activePhase].borderColor} shadow-xl transition-all duration-500`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${designThinkingPhases[activePhase].color} flex items-center justify-center shadow-lg animate-pulse`}>
                        <Icon name={designThinkingPhases[activePhase].icon} size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary">Этап {activePhase + 1} из 5</Badge>
                          <CardTitle className="text-2xl">{designThinkingPhases[activePhase].name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {designThinkingPhases[activePhase].description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`p-4 ${designThinkingPhases[activePhase].bgColor} rounded-lg border-2 ${designThinkingPhases[activePhase].borderColor}`}>
                      <p className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Sparkles" size={18} />
                        Ключевые активности:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {designThinkingPhases[activePhase].activities.map((activity, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-2 p-2 bg-background/60 rounded border"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <Icon name="CheckCircle2" size={16} className="text-primary shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Карточки-превью всех этапов */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {designThinkingPhases.map((phase, index) => (
                  <Card
                    key={index}
                    className={`border-2 cursor-pointer transition-all duration-300 ${
                      activePhase === index 
                        ? `${phase.borderColor} shadow-lg scale-105 ring-2 ring-offset-2` 
                        : 'border-border hover:shadow-md hover:-translate-y-1'
                    }`}
                    onClick={() => setActivePhase(index)}
                    onMouseEnter={() => setHoveredPoint(index)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-2 shadow-lg ${
                        activePhase === index ? 'animate-bounce' : ''
                      }`}>
                        <Icon name={phase.icon} size={20} className="text-white" />
                      </div>
                      <p className="font-semibold text-xs mb-1">{phase.name}</p>
                      <Badge variant="outline" className="text-xs">
                        {phase.label}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  💡 Кликните на этап или точку на диаграмме, чтобы узнать больше. Анимация меняет этапы автоматически каждые 3 секунды.
                </p>
              </div>

              {/* Описание модели */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <Icon name="Diamond" size={24} />
                      Первый алмаз: Правильная проблема
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      <strong>Эмпатия (расширение)</strong>: Изучаем пользователей, собираем максимум данных о их потребностях, контексте и поведении.
                    </p>
                    <p className="text-sm">
                      <strong>Фокусировка (сужение)</strong>: Анализируем данные, выявляем паттерны и формулируем конкретную проблему для решения.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Icon name="Diamond" size={24} />
                      Второй алмаз: Правильное решение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      <strong>Генерация идей (расширение)</strong>: Создаём множество вариантов решений, используем креативные техники, не ограничиваем фантазию.
                    </p>
                    <p className="text-sm">
                      <strong>Прототип + Тест (сужение)</strong>: Выбираем лучшие идеи, создаём прототипы и тестируем с пользователями для итераций.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designThinkingBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => navigate('/design-thinking')}
            >
              <Icon name="ArrowRight" size={20} />
              Изучить методологию подробнее
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Методы и инструменты
            </h3>
            <p className="text-muted-foreground text-lg">
              Полный набор методологий для успешной проектной работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                id={section.id}
                className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  activeSection === section.id ? 'border-primary shadow-lg scale-105' : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={section.icon} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center justify-between">
                        {section.title}
                        <Icon 
                          name="ChevronDown" 
                          size={20} 
                          className={`transition-transform duration-300 ${
                            activeSection === section.id ? 'rotate-180' : ''
                          }`}
                        />
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {activeSection === section.id && (
                  <CardContent className="animate-accordion-down">
                    <div className="space-y-3 pt-4 border-t">
                      {section.methods.map((method, idx) => (
                        <div 
                          key={idx}
                          onClick={(e) => {
                            if (method.path) {
                              e.stopPropagation();
                              navigate(method.path);
                            }
                          }}
                          className={`p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all ${
                            method.path ? 'cursor-pointer' : ''
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={16} className="text-primary mt-1 shrink-0" />
                            <div>
                              <div className="font-medium text-sm flex items-center gap-2">
                                {method.name}
                                {method.path && (
                                  <Icon name="ExternalLink" size={12} className="text-muted-foreground" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl my-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать обучение?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Присоединяйтесь к тысячам студентов, которые уже освоили современные методы проектной работы
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Icon name="Rocket" size={20} />
              Создать аккаунт
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Mail" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ProjectEdu
              </h1>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Образовательная платформа для освоения методов и инструментов проектной работы
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#methodology" className="hover:text-foreground transition-colors">Методологии</a></li>
              <li><a href="#research" className="hover:text-foreground transition-colors">Исследования</a></li>
              <li><a href="#planning" className="hover:text-foreground transition-colors">Планирование</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Библиотека</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Шаблоны</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Поддержка</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 ProjectEdu. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;