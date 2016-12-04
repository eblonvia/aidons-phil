var app = angular.module('app', ['ngResource']);

//TODO a décommenter après passage à SPRING - REST
// app.factory("usersService", function($resource){
//     return
//         $resource("/users/:id",{id:"@id"});
//
// });

app.factory('notifyerService', function (toastr) {
    return {
        notifyVote: function (meal) {
            toastr.success("Votre Vote pour : " + meal.name +" a été enregistré !");
            console.log("mise a jour de la vue avec : " + meal.name)
        },
        notifyLoginSucessful: function (user) {
            toastr.success("Bien venu " + user +" !");
            toastr.success("Vous allez pouvoir aider Philippe !ss");
        },
        notifyBadCredentials: function () {
            toastr.error("Mauvais mot de passe !");

        }
    }
});

app.factory('userService', function (users) {
    return {
        addUser: function (user) {
          users.push(user);
        }
    }
});

app.factory('loginService', function (toastr, userService) {
    return {
        login: function (user, password) {
            if(user===password) {
                userService.addUser({"login":user,"password":password});
                return true;
            }
            else {
                return false;
            }


        }
    }
});

app.controller('apLoginController', function ($scope, loginService,notifyerService) {

        $scope.login= function (user, password) {
           var loggedin =  loginService.login(user, password);
            if(loggedin)
                notifyerService.notifyLoginSucessful(user);
            else {
                notifyerService.notifyBadCredentials();
            }
        }

});



app.controller('scVoteCtrl', function ($scope, mealList,notifyerService) {
    $scope.voteFor = function (meal) {
        meal.votes += 1;
        notifyerService.notifyVote(meal);
        console.log('Voting for :  ' + meal.name);
    }
    $scope.mealList = mealList;

});

app.controller('scDescriptionCtrl', function ($scope) {
    //$scope.meal = schedule;

});

app.controller('scAidonsPhilippeCtrl', function ($scope, mealList/*,descriptionUpdater*/) {
    $scope.mealList = mealList;

    $scope.updateDescriptionView = function (meal) {
        $scope.currentMeal = meal;
        //descriptionUpdater.updateDescriptionView(meal);
    }
});




