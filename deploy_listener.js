var hookshot = require('hookshot');
hookshot('refs/heads/master', 'git fetch origin && git checkout origin/master').listen(9732)
