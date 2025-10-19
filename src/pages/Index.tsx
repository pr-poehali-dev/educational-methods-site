import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'methodology',
      title: 'Методология',
      icon: 'Lightbulb',
      description: 'Современные подходы к управлению проектами',
      color: 'bg-primary',
      items: ['Agile', 'Scrum', 'Kanban', 'Lean', 'Design Thinking']
    },
    {
      id: 'tools',
      title: 'Инструменты',
      icon: 'Wrench',
      description: 'Практические инструменты для работы',
      color: 'bg-secondary',
      items: ['Jira', 'Trello', 'Miro', 'Figma', 'Notion']
    },
    {
      id: 'practice',
      title: 'Практика',
      icon: 'Target',
      description: 'Реальные кейсы и задачи',
      color: 'bg-accent',
      items: ['Кейсы', 'Воркшопы', 'Симуляции', 'Проекты', 'Хакатоны']
    },
    {
      id: 'resources',
      title: 'Ресурсы',
      icon: 'BookOpen',
      description: 'Библиотека материалов',
      color: 'bg-muted',
      items: ['Статьи', 'Видео', 'Шаблоны', 'Чек-листы', 'Книги']
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Быстрое обучение',
      description: 'Интенсивные программы с практическим фокусом'
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Развитие навыков совместной работы'
    },
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Официальное подтверждение компетенций'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Развитие профессиональных навыков'
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
              {sections.map(section => (
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
            <Button size="lg" className="gap-2">
              <Icon name="Rocket" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="PlayCircle" size={20} />
              Посмотреть демо
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Разделы обучения
            </h3>
            <p className="text-muted-foreground text-lg">
              Выберите направление для изучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                id={section.id}
                className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  activeSection === section.id ? 'border-primary shadow-lg' : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={section.icon} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center justify-between">
                        {section.title}
                        <Icon 
                          name="ChevronDown" 
                          size={24} 
                          className={`transition-transform duration-300 ${
                            activeSection === section.id ? 'rotate-180' : ''
                          }`}
                        />
                      </CardTitle>
                      <CardDescription className="text-base">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {activeSection === section.id && (
                  <CardContent className="animate-accordion-down">
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      {section.items.map((item, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="px-3 py-1 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-6 gap-2">
                      Перейти к материалам
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl my-20">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-primary" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать обучение?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к тысячам студентов, которые уже освоили современные методы проектной работы
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Icon name="UserPlus" size={20} />
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Mail" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={18} className="text-white" />
                </div>
                <h4 className="font-bold">ProjectEdu</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для изучения проектных методологий
              </p>
            </div>
            {sections.map(section => (
              <div key={section.id}>
                <h5 className="font-semibold mb-4">{section.title}</h5>
                <ul className="space-y-2">
                  {section.items.slice(0, 3).map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ProjectEdu. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
