run:
	jekyll serve

deploy:
	@jekyll build
	@rsync -ahvc _site/* static@ssh.kbl.io:public/production/blopker
