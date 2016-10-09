angular.module('twilio', ['mcwebb.twilio'])
    .config(function(TwilioProvider) {
        TwilioProvider.setCredentials({
            accountSid: 'AC22f2a7b4bd38d88ed3c196a7e8b29b85',
            authToken: 'e38445dfc0ae60cae15cc44b3734b9f2'
        });
    })
