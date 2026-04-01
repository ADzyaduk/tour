import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | AquaVista",
  description:
    "Политика обработки персональных данных AquaVista в соответствии с Федеральным законом № 152-ФЗ.",
}

const sections = [
  {
    num: "01",
    title: "Общие положения",
    body: "Настоящая Политика определяет порядок обработки персональных данных пользователей сайта aquavista.ru (далее — Сайт), осуществляемой AquaVista (далее — Оператор). Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».",
    list: null as string[] | null,
    extra: null as string | null,
  },
  {
    num: "02",
    title: "Какие данные мы собираем",
    body: "При использовании форм на Сайте мы можем собирать:",
    list: ["Имя и фамилию", "Номер телефона", "Адрес электронной почты", "Текст сообщения или отзыва"],
    extra: "IP-адреса и технические данные браузера могут обрабатываться автоматически при использовании файлов cookie.",
  },
  {
    num: "03",
    title: "Цели обработки данных",
    body: "Персональные данные обрабатываются в следующих целях:",
    list: [
      "Обработка заявок на бронирование экскурсий и аренду яхт",
      "Ответы на обращения через форму обратной связи",
      "Публикация отзывов (с согласия пользователя)",
      "Обеспечение корректной работы Сайта",
    ],
    extra: null,
  },
  {
    num: "04",
    title: "Основания обработки",
    body: "Обработка персональных данных осуществляется на основании согласия субъекта, которое выражается путём проставления отметки в соответствующем поле формы на Сайте. Согласие предоставляется отдельно для каждой цели обработки в соответствии с требованиями закона.",
    list: null,
    extra: null,
  },
  {
    num: "05",
    title: "Передача данных третьим лицам",
    body: "Мы не передаём персональные данные третьим лицам, за исключением случаев, необходимых для обработки заявок: уведомления доставляются через Telegram Bot API. Telegram обрабатывает данные согласно собственной политике конфиденциальности. Иная передача данных третьим лицам не осуществляется.",
    list: null,
    extra: null,
  },
  {
    num: "06",
    title: "Файлы cookie",
    body: "Сайт использует файлы cookie для корректной работы и улучшения пользовательского опыта. Технические (необходимые) cookie устанавливаются автоматически. Аналитические cookie устанавливаются только с вашего явного согласия. Вы можете отозвать согласие в любое время, воспользовавшись баннером на Сайте или изменив настройки браузера.",
    list: null,
    extra: null,
  },
  {
    num: "07",
    title: "Сроки хранения данных",
    body: "Персональные данные хранятся до достижения целей обработки или до отзыва согласия субъектом персональных данных. После этого данные уничтожаются в соответствии с требованиями законодательства.",
    list: null,
    extra: null,
  },
  {
    num: "08",
    title: "Ваши права",
    body: "Вы вправе:",
    list: [
      "Запросить информацию об обрабатываемых данных",
      "Потребовать исправления неточных данных",
      "Отозвать согласие на обработку",
      "Потребовать удаления персональных данных",
    ],
    extra: "Для реализации своих прав обратитесь: hello@aquavista.com",
  },
  {
    num: "09",
    title: "Контакты Оператора",
    body: null,
    list: ["Email: hello@aquavista.com", "Телефон: +7 988 123-45-67", "Россия, Сочи"],
    extra: null,
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-navy pt-28 pb-16 px-4 text-center">
        <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-4">
          Юридическая информация
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
          Политика конфиденциальности
        </h1>
        <p className="font-display text-lg text-gold italic">
          Последнее обновление: январь 2026 г.
        </p>
      </div>

      {/* Body */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {sections.map((section, i) => (
            <div key={section.num}>
              <div className="relative mb-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 font-display text-7xl font-light leading-none select-none pointer-events-none"
                  style={{ color: "rgba(201,168,76,0.12)" }}
                >
                  {section.num}
                </span>
                <h2 className="relative font-display text-xl font-medium text-navy pt-2">
                  {section.title}
                </h2>
              </div>

              <div className="text-navy/70 text-base leading-relaxed space-y-3">
                {section.body && <p>{section.body}</p>}

                {section.list && (
                  <ul className="space-y-2 pl-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                        {item.includes("@") ? (
                          <span>
                            {item.includes("Email:") ? "Email: " : ""}
                            <a
                              href={`mailto:${item.replace("Email: ", "")}`}
                              className="text-teal underline hover:opacity-80"
                            >
                              {item.replace("Email: ", "")}
                            </a>
                          </span>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {section.extra && (
                  <p>
                    {section.extra.includes("hello@aquavista.com") ? (
                      <>
                        Для реализации своих прав обратитесь:{" "}
                        <a href="mailto:hello@aquavista.com" className="text-teal underline hover:opacity-80">
                          hello@aquavista.com
                        </a>
                      </>
                    ) : (
                      section.extra
                    )}
                  </p>
                )}
              </div>

              {i < sections.length - 1 && (
                <div className="border-t border-navy/8 my-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
