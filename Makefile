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
