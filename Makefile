install: #установка зависимостей
	npm ci
brain-games: #запуск игры brain-games
	node bin/brain-games.js
publish: #публикация версии пакета
	npm publish --dry-run
lint: #проверка строк
	npx eslint .
brain-even: #запуск игры brain-even
	node bin/brain-even.js
brain-calc: #запуск игры brain-calc
	node bin/brain-calc.js
brain-gcd: # запуск игры brain-gcd
	node bin/brain-gcd.js
brain-progression: # запуск игры brain-progression
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
