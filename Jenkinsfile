node {
    stage('Preparation') {
        git 'https://github.com/kiranmulmi/jenkins-test.git'
      
    }
    stage('Build') {
       sh 'npm install'
    }
    stage('Testing') {
       sh './node_modules/.bin/mocha ./test/test.js'
    }
    stage('Deploy') {
       sh '''
            ssh -tt root@codewiggle.tk <<EOF
            cd /var/www/codewiggle.tk/jenkins-test
            git pull
            npm install
            pm2 restart all
            exit
            EOF
        '''
    }
}