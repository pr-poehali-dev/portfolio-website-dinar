import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "resume", label: "Резюме", icon: "FileText" },
    { id: "education", label: "Обучение", icon: "GraduationCap" },
    { id: "achievements", label: "Достижения", icon: "Award" },
    { id: "about", label: "Обо мне", icon: "User" },
    { id: "career", label: "Карьера", icon: "Briefcase" },
    { id: "contacts", label: "Контакты", icon: "Mail" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-primary">Динар Закиров</span>
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
          <div id="mobile-menu" className="hidden md:hidden pb-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="w-full justify-start mb-1"
              >
                <Icon name={item.icon as any} size={18} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="section pt-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl flex-shrink-0 bg-muted flex items-center justify-center">
              <Icon name="User" size={120} className="text-muted-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
                Динар Закиров
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Студент Южно-Уральского государственного технического колледжа
              </p>
              <Card className="p-6 bg-white shadow-lg">
                <p className="text-lg font-medium text-secondary mb-2">
                  Архитектурно-строительное отделение
                </p>
                <p className="text-base text-muted-foreground">
                  <span className="font-semibold text-primary">08.02.01</span> — Строительство и
                  эксплуатация зданий и сооружений
                </p>
              </Card>
              <div className="flex gap-4 justify-center md:justify-start mt-6">
                <Button onClick={() => scrollToSection("resume")} size="lg">
                  Резюме
                  <Icon name="ChevronRight" size={18} className="ml-2" />
                </Button>
                <Button onClick={() => scrollToSection("contacts")} variant="outline" size="lg">
                  Контакты
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="section bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Резюме</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="User" size={24} className="text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Личные данные</h3>
              </div>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-medium">ФИО:</span> Закиров Динар Альбертович
                </p>
                <p className="text-lg">
                  <span className="font-medium">Дата рождения:</span> 11.06.2008
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="GraduationCap" size={24} className="text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Образование</h3>
              </div>
              <p className="text-base leading-relaxed">
                Южно-Уральский государственный технический колледж, Архитектурно-строительное
                отделение
              </p>
              <p className="text-base mt-2">
                <span className="font-semibold text-secondary">Специальность:</span> 08.02.01
                Строительство и эксплуатация зданий и сооружений
              </p>
            </Card>

            <Card className="p-6 shadow-lg md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Target" size={24} className="text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Гибкие навыки</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Коммуникации",
                  "Креативность",
                  "Уверенность в себе",
                  "Управление конфликтами",
                  "Открытость новому",
                  "Работа в команде",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20"
                  >
                    <Icon name="CheckCircle" size={18} className="text-accent" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Heart" size={24} className="text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Интересы</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Спортивная деятельность", "Общение", "Музыка"].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Обучение</h2>
          <Card className="p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="BookOpen" size={32} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  08.02.01 Строительство и эксплуатация зданий и сооружений
                </h3>
                <p className="text-lg text-muted-foreground">
                  Южно-Уральский государственный технический колледж
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Icon name="Clock" size={20} className="text-secondary" />
                <div>
                  <p className="font-medium text-primary">Срок обучения</p>
                  <p className="text-muted-foreground">3 года 6 месяцев</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Icon name="Award" size={20} className="text-secondary" />
                <div>
                  <p className="font-medium text-primary">Квалификация</p>
                  <p className="text-muted-foreground">Техник</p>
                </div>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                <p className="font-medium text-primary mb-2">
                  Область профессиональной деятельности выпускников:
                </p>
                <p className="text-base leading-relaxed">
                  Организация и обеспечение работ по строительству и эксплуатации зданий и
                  сооружений
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="achievements" className="section bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Мои достижения</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="TrendingUp" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">
                  Профессиональное развитие
                </h3>
              </div>
              <p className="text-base leading-relaxed">
                Я стремлюсь развиваться как профессионал в строительной отрасли, изучая новые
                технологии и методы работы. Мне интересны все аспекты строительства — от
                проектирования до финальной реализации объектов.
              </p>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Target" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">Подход к работе</h3>
              </div>
              <p className="text-base leading-relaxed">
                Я ответственно подхожу к учёбе и практике, понимая важность качества в строительном
                деле. Каждый проект — это возможность узнать что-то новое и улучшить свои навыки.
              </p>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Lightbulb" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">Инновационный подход</h3>
              </div>
              <p className="text-base leading-relaxed">
                Интересуюсь современными строительными технологиями, энергоэффективными решениями и
                умными системами зданий. Слежу за развитием отрасли и внедрением новых материалов.
              </p>
            </Card>

            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Users" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">Командная работа</h3>
              </div>
              <p className="text-base leading-relaxed">
                Понимаю важность слаженной работы в команде при реализации строительных проектов.
                Активно участвую в групповых проектах и практических заданиях в колледже.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Обо мне</h2>
          <Card className="p-8 shadow-xl">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Здравствуйте! Меня зовут <span className="font-semibold text-primary">Динар Закиров</span>, 
                я студент Южно-Уральского государственного технического колледжа. В 2024 году я поступил 
                на специальность "Строительство и эксплуатация зданий и сооружений", и сейчас активно 
                осваиваю профессию, которая позволит мне создавать надёжные и современные здания.
              </p>
              
              <p>
                Выбор строительной специальности был осознанным решением. Меня всегда впечатляла 
                способность человека создавать масштабные сооружения, которые служат людям десятилетиями. 
                Строительство — это не просто возведение стен, это искусство создания пространств, 
                где люди живут, работают и отдыхают.
              </p>

              <p>
                В процессе обучения я погружаюсь в изучение конструктивных решений, технологий 
                строительства, норм и стандартов безопасности. Особенно интересны мне современные 
                подходы к проектированию, использование BIM-технологий и энергоэффективные решения.
              </p>

              <p>
                Помимо учёбы, я активно занимаюсь спортом, что помогает мне поддерживать физическую 
                форму и дисциплину. Музыка и общение с друзьями дают возможность отдохнуть и получить 
                новые впечатления. Считаю, что разностороннее развитие делает человека более 
                интересным профессионалом.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="career" className="section bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Карьера</h2>
          <div className="space-y-6">
            <Card className="p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Rocket" size={28} className="text-accent" />
                <h3 className="text-2xl font-bold text-primary">Карьерные цели</h3>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Моя главная цель — стать квалифицированным специалистом в области строительства 
                  и получить практический опыт работы на реальных объектах. После окончания колледжа 
                  планирую начать карьеру техника на строительной площадке, чтобы изучить все процессы 
                  изнутри.
                </p>
                <p>
                  В перспективе 5-7 лет вижу себя инженером-строителем, способным руководить проектами 
                  и принимать технические решения. Интересует работа как в жилищном строительстве, 
                  так и в промышленном секторе.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-3">
                    <Icon name="Calendar" size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">2024-2027</h4>
                </div>
                <p className="text-center text-muted-foreground">
                  Обучение в колледже, получение диплома техника, участие в производственной практике
                </p>
              </Card>

              <Card className="p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-3">
                    <Icon name="Hammer" size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">2027-2030</h4>
                </div>
                <p className="text-center text-muted-foreground">
                  Работа техником на стройке, накопление опыта, возможно заочное получение высшего образования
                </p>
              </Card>

              <Card className="p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-3">
                    <Icon name="Building" size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">2030+</h4>
                </div>
                <p className="text-center text-muted-foreground">
                  Должность инженера-строителя, участие в крупных проектах, руководство бригадами
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Контакты</h2>
          <Card className="p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:dinar.zakirov@example.com"
                className="flex items-center gap-4 p-6 bg-muted hover:bg-accent/10 rounded-lg transition-colors group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" size={28} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-lg font-medium text-primary">dinar.zakirov@example.com</p>
                </div>
              </a>

              <a
                href="tel:+79821103282"
                className="flex items-center gap-4 p-6 bg-muted hover:bg-accent/10 rounded-lg transition-colors group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" size={28} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                  <p className="text-lg font-medium text-primary">+7 982 110-32-82</p>
                </div>
              </a>

              <a
                href="https://t.me/Kdoebg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-muted hover:bg-accent/10 rounded-lg transition-colors group md:col-span-2"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon name="Send" size={28} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telegram</p>
                  <p className="text-lg font-medium text-primary">@Kdoebg</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium mb-2">© 2024 Динар Закиров</p>
          <p className="text-sm opacity-90">
            Студент Южно-Уральского государственного технического колледжа
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
