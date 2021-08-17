pipeline {
  agent any

  tools {nodejs "node"}

  stages {

    stage('Git') {
      steps {
        git 'https://github.com/kiranmulmi/jenkins-test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }


    stage('Test') {
      steps {
        sh './node_modules/.bin/mocha ./test/test.js'
      }
    }
  }
}