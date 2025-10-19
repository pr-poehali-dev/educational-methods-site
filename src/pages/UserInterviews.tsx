import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const UserInterviews = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState('preparation');

  const steps = [
    {
      id: 'preparation',
      title: 'Подготовка',
      icon: 'ClipboardList',
      color: 'bg-blue-500',
      duration: '1-2 дня',
      description: 'Планирование и подготовка к интервью',
      tasks: [
        {
          name: 'Определите цели исследования',
          description: 'Четко сформулируйте, что вы хотите узнать от пользователей',
          checklist: [
            'Какую проблему вы исследуете?',
            'Какие гипотезы хотите проверить?',
            'Какие решения нужно принять на основе результатов?'
          ]
        },
        {
          name: 'Составьте портрет респондента',
          description: 'Опишите целевую аудиторию для интервью',
          checklist: [
            'Демография (возраст, пол, локация)',
            'Профессия и уровень дохода',
            'Опыт использования аналогичных продуктов',
            'Уровень технической грамотности'
          ]
        },
        {
          name: 'Разработайте гайд интервью',
          description: 'Подготовьте структуру и ключевые вопросы',
          checklist: [
            'Приветствие и объяснение цели (3-5 мин)',
            'Разогревающие вопросы (5-10 мин)',
            'Основные блоки вопросов (30-40 мин)',
            'Завершение и благодарность (5 мин)'
          ]
        },
        {
          name: 'Рекрутинг респондентов',
          description: 'Найдите и пригласите участников',
          checklist: [
            'Используйте скринер для отбора',
            'Запланируйте 5-8 интервью',
            'Предложите компенсацию за время',
            'Подтвердите встречи за день'
          ]
        }
      ]
    },
    {
      id: 'structure',
      title: 'Структура интервью',
      icon: 'ListTree',
      color: 'bg-purple-500',
      duration: '45-60 мин',
      description: 'Оптимальная структура глубинного интервью',
      sections: [
        {
          name: 'Введение',
          time: '3-5 минут',
          icon: 'HandShake',
          content: [
            'Поблагодарите за участие',
            'Представьтесь и объясните цель исследования',
            'Объясните формат: нет правильных ответов, все мнения важны',
            'Попросите разрешение на запись',
            'Гарантируйте конфиденциальность'
          ]
        },
        {
          name: 'Разогрев',
          time: '5-10 минут',
          icon: 'Coffee',
          content: [
            'Расскажите о себе и вашей работе',
            'Как выглядит ваш обычный день?',
            'Какие задачи решаете чаще всего?',
            'Какими инструментами пользуетесь?'
          ]
        },
        {
          name: 'Основная часть',
          time: '30-40 минут',
          icon: 'MessageSquare',
          content: [
            'Исследование контекста и проблем',
            'Глубокое погружение в опыт пользователя',
            'Обсуждение потребностей и целей',
            'Выявление болевых точек',
            'Обсуждение существующих решений'
          ]
        },
        {
          name: 'Завершение',
          time: '5 минут',
          icon: 'CheckCircle2',
          content: [
            'Есть ли что-то, что мы не обсудили?',
            'Какие вопросы у вас ко мне?',
            'Поблагодарите за время и честность',
            'Объясните следующие шаги',
            'Договоритесь о компенсации'
          ]
        }
      ]
    },
    {
      id: 'techniques',
      title: 'Техники и вопросы',
      icon: 'MessageCircle',
      color: 'bg-green-500',
      duration: 'Постоянно',
      description: 'Эффективные приемы проведения интервью',
      techniques: [
        {
          name: 'Открытые вопросы',
          icon: 'CircleDot',
          good: [
            'Расскажите, как вы решаете эту задачу?',
            'Что вы чувствовали, когда столкнулись с этим?',
            'Как выглядит идеальное решение для вас?'
          ],
          bad: [
            'Вам нравится этот продукт?',
            'Это удобно?',
            'Вы бы купили это?'
          ]
        },
        {
          name: 'Метод "5 почему"',
          icon: 'HelpCircle',
          description: 'Углубляйтесь в причины, задавая "Почему?" 5 раз подряд',
          example: [
            'Я не использую эту функцию',
            'Почему? - Она слишком сложная',
            'Почему она сложная? - Много шагов',
            'Почему много шагов проблема? - Нет времени',
            'Почему нет времени? - Делаю это часто',
            'Почему делаете часто? - Это часть рабочего процесса'
          ]
        },
        {
          name: 'Конкретные примеры',
          icon: 'Target',
          description: 'Просите описывать реальные ситуации, а не теории',
          good: [
            'Расскажите о последнем разе, когда...',
            'Покажите, как вы это делаете обычно',
            'Опишите конкретный случай'
          ],
          bad: [
            'Как вы обычно это делаете?',
            'Что бы вы сделали, если...?',
            'Представьте, что...'
          ]
        },
        {
          name: 'Активное слушание',
          icon: 'Ear',
          tips: [
            'Делайте паузы - дайте человеку время подумать',
            'Перефразируйте: "Правильно ли я понял, что..."',
            'Используйте минимальные поддержки: "Угу", "Понятно"',
            'Не перебивайте и не заканчивайте фразы за респондента',
            'Следите за невербальными сигналами'
          ]
        },
        {
          name: 'Избегайте наводящих вопросов',
          icon: 'AlertCircle',
          bad: [
            'Разве вам не кажется, что это неудобно?',
            'Наверное, вы хотели бы, чтобы это было быстрее?',
            'Большинству людей это нравится, а вам?'
          ],
          good: [
            'Что вы думаете об этом?',
            'Какие у вас впечатления?',
            'Расскажите о вашем опыте'
          ]
        }
      ]
    },
    {
      id: 'analysis',
      title: 'Анализ результатов',
      icon: 'BarChart3',
      color: 'bg-orange-500',
      duration: '2-3 дня',
      description: 'Обработка и систематизация данных',
      methods: [
        {
          name: 'Транскрибация',
          icon: 'FileText',
          description: 'Переведите аудио в текст',
          steps: [
            'Используйте автоматические сервисы (Otter.ai, Trint)',
            'Вычитайте и исправьте ошибки',
            'Выделите ключевые цитаты',
            'Анонимизируйте персональные данные'
          ]
        },
        {
          name: 'Affinity Mapping',
          icon: 'StickyNote',
          description: 'Группировка инсайтов по темам',
          steps: [
            'Выпишите каждый инсайт на отдельную стикер',
            'Разместите стикеры на доске',
            'Группируйте похожие наблюдения',
            'Дайте названия группам',
            'Выявите паттерны и темы'
          ]
        },
        {
          name: 'User Journey Map',
          icon: 'Route',
          description: 'Визуализация пути пользователя',
          steps: [
            'Определите этапы взаимодействия',
            'Опишите действия на каждом этапе',
            'Добавьте эмоции и мысли',
            'Выделите болевые точки',
            'Найдите возможности для улучшения'
          ]
        },
        {
          name: 'Персоны',
          icon: 'UserCircle',
          description: 'Создание образов типичных пользователей',
          steps: [
            'Выявите общие характеристики респондентов',
            'Создайте 2-4 основных персоны',
            'Опишите цели, потребности, боли',
            'Добавьте контекст и мотивацию',
            'Используйте реальные цитаты'
          ]
        }
      ]
    }
  ];

  const tips = [
    {
      icon: 'Mic',
      title: 'Записывайте интервью',
      description: 'Всегда просите разрешение на запись - это позволит сосредоточиться на разговоре'
    },
    {
      icon: 'Users2',
      title: 'Проводите вдвоем',
      description: 'Один ведет беседу, второй делает заметки и следит за временем'
    },
    {
      icon: 'Timer',
      title: 'Соблюдайте тайминг',
      description: 'Оптимальная длительность - 45-60 минут. Не затягивайте интервью'
    },
    {
      icon: 'MapPin',
      title: 'Выбирайте нейтральное место',
      description: 'Встречайтесь там, где респонденту комфортно, желательно в привычной среде'
    },
    {
      icon: 'Volume2',
      title: 'Меньше говорите',
      description: 'Правило 80/20: 80% времени говорит респондент, 20% - вы'
    },
    {
      icon: 'Shield',
      title: 'Гарантируйте конфиденциальность',
      description: 'Объясните, как будут использованы данные, и получите согласие'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>
            <Badge variant="outline" className="gap-2">
              <Icon name="Users" size={16} />
              Исследования
            </Badge>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Методика исследования
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Глубинные интервью с пользователями
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Пошаговое руководство по проведению качественных исследований для понимания потребностей, проблем и мотивации ваших пользователей
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map((step, index) => (
              <Card
                key={step.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  activeStep === step.id ? 'border-2 border-primary' : 'border-2'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    Шаг {index + 1}
                  </Badge>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-8">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {step.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="preparation">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-600/10">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Icon name="ClipboardList" size={32} className="text-blue-500" />
                    Подготовка к интервью
                  </CardTitle>
                  <CardDescription className="text-base">
                    Качественная подготовка - залог успешного интервью
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {steps[0].tasks.map((task, idx) => (
                      <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Icon name="CheckSquare" size={20} className="text-primary" />
                            {task.name}
                          </CardTitle>
                          <CardDescription>{task.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {task.checklist.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Icon name="Circle" size={8} className="text-primary mt-2" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-purple-600/10">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Icon name="ListTree" size={32} className="text-purple-500" />
                    Структура интервью
                  </CardTitle>
                  <CardDescription className="text-base">
                    Оптимальная длительность: 45-60 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-primary to-purple-500"></div>
                    
                    <div className="space-y-12">
                      {steps[1].sections.map((section, idx) => {
                        const totalMinutes = idx === 0 ? 0 : 
                          idx === 1 ? 5 : 
                          idx === 2 ? 15 : 50;
                        
                        return (
                          <div key={idx} className="relative pl-20">
                            <div className="absolute left-0 top-0 flex flex-col items-center">
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg ${
                                idx === 0 ? 'bg-blue-500' :
                                idx === 1 ? 'bg-green-500' :
                                idx === 2 ? 'bg-purple-500' :
                                'bg-orange-500'
                              }`}>
                                <Icon name={section.icon} size={28} className="text-white" />
                              </div>
                              <div className="mt-2 text-xs font-semibold text-muted-foreground text-center">
                                {totalMinutes} мин
                              </div>
                            </div>

                            <Card className="border-2 hover:shadow-xl transition-all hover:border-purple-500/50">
                              <CardHeader>
                                <div className="flex items-center justify-between">
                                  <CardTitle className="text-2xl">{section.name}</CardTitle>
                                  <Badge variant="secondary" className="text-sm px-3 py-1">
                                    {section.time}
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3">
                                  {section.content.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                        <Icon name="Check" size={14} className="text-primary" />
                                      </div>
                                      <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 p-4 bg-muted/30 rounded-lg border-2 border-dashed ml-20">
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={24} className="text-primary" />
                        <div>
                          <p className="font-semibold">Общая длительность: 45-60 минут</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Гибко управляйте временем в зависимости от ответов респондента
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="techniques">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/10">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Icon name="MessageCircle" size={32} className="text-green-500" />
                    Техники и вопросы
                  </CardTitle>
                  <CardDescription className="text-base">
                    Эффективные приемы для получения глубинных инсайтов
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {steps[2].techniques.map((technique, idx) => (
                      <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Icon name={technique.icon} size={24} className="text-primary" />
                            {technique.name}
                          </CardTitle>
                          {technique.description && (
                            <CardDescription>{technique.description}</CardDescription>
                          )}
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {technique.good && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Icon name="CheckCircle2" size={16} className="text-green-500" />
                                <span className="font-semibold text-sm">Хорошо:</span>
                              </div>
                              <ul className="space-y-1 ml-6">
                                {technique.good.map((item, i) => (
                                  <li key={i} className="text-sm text-muted-foreground">"{item}"</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {technique.bad && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Icon name="XCircle" size={16} className="text-red-500" />
                                <span className="font-semibold text-sm">Плохо:</span>
                              </div>
                              <ul className="space-y-1 ml-6">
                                {technique.bad.map((item, i) => (
                                  <li key={i} className="text-sm text-muted-foreground line-through">"{item}"</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {technique.tips && (
                            <ul className="space-y-2">
                              {technique.tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Icon name="Lightbulb" size={16} className="text-yellow-500 mt-1 shrink-0" />
                                  <span className="text-sm">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {technique.example && (
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <p className="font-semibold text-sm mb-2">Пример:</p>
                              {technique.example.map((line, i) => (
                                <p key={i} className="text-sm text-muted-foreground mb-1">
                                  {i > 0 && '→ '}{line}
                                </p>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-orange-500/10 to-orange-600/10">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Icon name="BarChart3" size={32} className="text-orange-500" />
                    Анализ результатов
                  </CardTitle>
                  <CardDescription className="text-base">
                    Превратите данные в действенные инсайты
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    {steps[3].methods.map((method, idx) => (
                      <Card key={idx} className="border-2 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Icon name={method.icon} size={24} className="text-primary" />
                            {method.name}
                          </CardTitle>
                          <CardDescription>{method.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ol className="space-y-2 mb-6">
                            {method.steps.map((step, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Badge variant="outline" className="shrink-0 mt-1">{i + 1}</Badge>
                                <span className="text-sm">{step}</span>
                              </li>
                            ))}
                          </ol>

                          {/* Визуальный пример Affinity Map */}
                          {method.name === 'Affinity Mapping' && (
                            <div className="mt-6 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg border-2 border-dashed border-yellow-300 dark:border-yellow-700">
                              <div className="flex items-center gap-2 mb-4">
                                <Icon name="Lightbulb" size={20} className="text-yellow-600" />
                                <h4 className="font-semibold text-sm">Визуальный пример</h4>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                {/* Группа 1 */}
                                <div className="space-y-2">
                                  <div className="bg-pink-200 dark:bg-pink-900/50 p-3 rounded shadow-sm text-xs font-medium border-l-4 border-pink-500">
                                    🎯 Болевые точки
                                  </div>
                                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded text-xs">"Слишком долго ищу нужную функцию"</div>
                                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded text-xs">"Не понимаю, где мои файлы"</div>
                                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded text-xs">"Часто делаю ошибки"</div>
                                </div>

                                {/* Группа 2 */}
                                <div className="space-y-2">
                                  <div className="bg-blue-200 dark:bg-blue-900/50 p-3 rounded shadow-sm text-xs font-medium border-l-4 border-blue-500">
                                    💡 Потребности
                                  </div>
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs">"Хочу быстрый доступ"</div>
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs">"Нужны подсказки"</div>
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs">"Автосохранение важно"</div>
                                </div>

                                {/* Группа 3 */}
                                <div className="space-y-2">
                                  <div className="bg-green-200 dark:bg-green-900/50 p-3 rounded shadow-sm text-xs font-medium border-l-4 border-green-500">
                                    ✅ Что работает
                                  </div>
                                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs">"Нравится простой дизайн"</div>
                                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs">"Удобная навигация"</div>
                                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs">"Быстро загружается"</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Визуальный пример User Journey Map */}
                          {method.name === 'User Journey Map' && (
                            <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700">
                              <div className="flex items-center gap-2 mb-4">
                                <Icon name="Map" size={20} className="text-purple-600" />
                                <h4 className="font-semibold text-sm">Визуальный пример</h4>
                              </div>
                              <div className="overflow-x-auto">
                                <div className="min-w-[600px]">
                                  {/* Этапы */}
                                  <div className="grid grid-cols-4 gap-3 mb-3">
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded text-center text-xs font-semibold">
                                      1. Обнаружение
                                    </div>
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded text-center text-xs font-semibold">
                                      2. Регистрация
                                    </div>
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded text-center text-xs font-semibold">
                                      3. Первый опыт
                                    </div>
                                    <div className="bg-purple-200 dark:bg-purple-900/50 p-2 rounded text-center text-xs font-semibold">
                                      4. Использование
                                    </div>
                                  </div>

                                  {/* Действия */}
                                  <div className="grid grid-cols-4 gap-3 mb-2">
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded border text-xs">
                                      Увидел рекламу в соцсетях
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded border text-xs">
                                      Заполнил форму регистрации
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded border text-xs">
                                      Прошел онбординг
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded border text-xs">
                                      Создал первый проект
                                    </div>
                                  </div>

                                  {/* Эмоции */}
                                  <div className="grid grid-cols-4 gap-3 mb-2">
                                    <div className="flex items-center justify-center text-2xl">
                                      🤔
                                    </div>
                                    <div className="flex items-center justify-center text-2xl">
                                      😊
                                    </div>
                                    <div className="flex items-center justify-center text-2xl">
                                      😕
                                    </div>
                                    <div className="flex items-center justify-center text-2xl">
                                      😃
                                    </div>
                                  </div>

                                  {/* Болевые точки */}
                                  <div className="grid grid-cols-4 gap-3">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs border-l-2 border-green-500">
                                      ✓ Яркий дизайн
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs border-l-2 border-green-500">
                                      ✓ Быстрая форма
                                    </div>
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded text-xs border-l-2 border-red-500">
                                      ✗ Непонятные инструкции
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs border-l-2 border-green-500">
                                      ✓ Интуитивно понятно
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Важные советы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={tip.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8 text-center">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Готовы провести первое интервью?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Скачайте шаблон гайда интервью и чек-лист подготовки, чтобы начать исследование прямо сейчас
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="gap-2">
                  <Icon name="Download" size={20} />
                  Скачать шаблон гайда
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="FileCheck" size={20} />
                  Скачать чек-лист
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UserInterviews;