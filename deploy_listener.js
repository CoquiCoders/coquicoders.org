var hookshot = require('hookshot');
hookshot('refs/heads/master', 'git fetch origin && git checkout origin/master && service ghost-coqui restart').listen(9732)
