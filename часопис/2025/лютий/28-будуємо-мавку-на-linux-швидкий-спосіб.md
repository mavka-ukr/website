# Будуємо Мавку на GNU/Linux (швидкий спосіб)

> УВАГА: ця інструкція більше не актуальна починаючи з версії Мавки 0.122.3.

Як просто і швидко збудувати Мавку на Linux? Читайте далі.

## Встановлення залежностей

Вам будуть потрібні **Ціль**, **Clang**, **Git** та деякі _C libs_.

Встановлення залежностей на **Ubuntu Linux**:

```shell
sudo apt install git clang libreadline-dev liburing-dev libidn2-dev
```

Встановлення залежностей на **Arch Linux**:

```shell
sudo pacman -S git clang readline liburing libidn2
```

## Будування

Клонуємо репозиторій з підготовленими файлами:

```shell
git clone https://github.com/mavka-ukr-static/mavka-linux-x86_64 --depth=1
```

Відкриваємо клоновану теку:

```shell
cd mavka-linux-x86_64
```

Будуємо:

```shell
sh build.sh
```

Пробуємо:

```
./out/мавка
```

Для зручності, Мавку можна встановити глобально:

```shell
sudo cp ./out/мавка /usr/local/bin
```

---

Читайте також:

- [Як збудувати Мавку на Linux з джерельних файлів?](./2025-02-28-будуємо-мавку-на-linux.html)

---

_Написав [Давид](https://кдб.укр). Опубліковано 28.02.2025. Оновлено 27.05.2025_
