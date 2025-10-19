import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);

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