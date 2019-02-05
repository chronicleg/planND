var mealplaND = angular.module('mealplaND', ['ngParse']);

angular.module('mealplaND')
  .config(['ParseProvider', function(ParseProvider) {
      var MY_PARSE_APP_ID = 'Y5SVSIlce78gzRrm2D59XGVC64r8ILT0FNU2hj38';
      var MY_PARSE_JS_KEY = 'TP08thawFDAbDa6pTiveKJRYzZADFp27OQK3qCCL';
      
    
      
    ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
      
      ParseProvider.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
      
  }]);

mealplaND.controller('mainController', ['$scope', '$http', 'MealModel', function ($scope, $http, MealModel) {
    
MealModel.getById('aKHBUo6wGi').then(function(result){
    console.log('meal result: ', result)
    
})
        
MealModel.getAllMeals().then(function(result){
    console.log('all meals result: ', result)
})
    
    
$http({
  method: 'GET',
  url: 'http://localhost:3000/all'
}).then(function successCallback(response) {
    
    console.log('api_response: ', response)
    
    $scope.items = response.data
    
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
}])

/**
 * @ngdoc service
 * @name common.service:AgencyModel
 *
 * @description Model and helper methods for Agency parse object.
 */


var MealModel = function(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Meal';
        this.fields = [
            'name',
            'protein',
            'carbs',
            'calories',
            'tags',
            'fat',
            'allergies'
        ];
    
        this.New = New;
        this.getById = getById;
        this.getAllMeals = getAllMeals;

    function New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }
    function getById(id) {
        return new this.Parse.Query(this.New()).get(id)
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            }).catch(error => Promise.reject(error));
    }
//    function getByName(name) {
//        console.log('name', name)
//        return new this.Parse.Query(this.New())
//            .equalTo('name', name)
//            .first()
//            .then(result => {
//                this.Parse.defineAttributes(result, this.fields);
//                this.data = result;
//                console.log('result', result)
//                return result
//            })
//    }
    function getAllMeals() {
        return new this.Parse.Query(this.New()).find(meals => {
            meals.forEach(meal =>
                this.Parse.defineAttributes(meal, this.fields)
            );
            this.collection = meals;
            return Promise.resolve(meals);
        }).catch(error => Promise.reject(error));
    }
    
    
}

MealModel.$inject = ['Parse']

angular
    .module('mealplaND')
    .service('MealModel', MealModel);