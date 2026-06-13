# Домашнє завдання — Тема 4. Породжувальні патерни: Одинак, Будівельник та Прототип

Реалізація трьох породжувальних патернів проєктування у TypeScript на окремих прикладах.

## Патерни

### Singleton (Одинак) — `AppConfigService`
Гарантує, що клас має лише один екземпляр. Приватний конструктор та статичний метод `getInstance()` забезпечують єдину точку доступу до конфігурації застосунку.

### Builder (Будівельник) — `DocumentBuilder`
Дозволяє будувати складний текстовий документ покроково через ланцюжок методів `addHeader()`, `addBody()`, `addFooter()`. Метод `build()` повертає готовий рядок.

### Prototype (Прототип) — `UserProfile`
Реалізує метод `clone()`, який створює глибоку копію профілю користувача (включно з об'єктом `permissions`), без прив'язки до конкретного класу.

## Структура проєкту

```
src/
├── singleton/
│   ├── AppConfigService.ts
│   └── main.ts
├── builder/
│   ├── DocumentBuilder.ts
│   └── main.ts
└── prototype/
    ├── UserProfile.ts
    ├── UserProfilePrototype.ts
    └── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/singleton/main.ts
npx ts-node src/builder/main.ts
npx ts-node src/prototype/main.ts
```
