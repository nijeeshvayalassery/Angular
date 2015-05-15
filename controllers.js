var app=angular.module("MyApp", ['ngRoute']);
 app.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/Home', {
                  templateUrl: 'Home.html',
                  controller: 'HomeController'
               }).
               when('/Gallary', {
                  templateUrl: 'Gallary.html',
                  controller: 'GallaryController'
               }).
               when('/About', {
                  templateUrl: 'About.html',
                  controller: 'AboutController'
               }).
               otherwise({
                  redirectTo: '/Home'
               });
         }]);
app.controller("NavCtrl",function($scope){
    $scope.tvar="its working";
    $scope.NavList=[{
        "Name":"Home",
        "Id":1
    },{
        "Name":"Gallary",
        "Id":2
    },{
        "Name":"About",
        "Id":3
    }
    ]
    $scope.tab=1;
});
app.controller("HomeController",function($scope){
     $scope.timer=0;
    var countUp = function() {
        $scope.timer+= 1;
        $timeout(countUp, 100);
    }
    
    countUp();
});
app.controller("GallaryController",function($scope){
     $scope.timer="its Gallery";
    var ServPth='Gallery/'
    $scope.images=[{
        'url':ServPth+'waterfall_scenery-wallpaper-.jpg',
        'name':'Waterfall'
    },{
        'url':ServPth+'wallpaper7.jpg',
        'name':'Fantasy Art'
    },{
        'url':ServPth+'flowers sceneries wallpapers.jpg',
        'name':'flowers sceneries'
    },{
        'url':ServPth+'china.jpg',
        'name':'Great Wall of China'
    },{
        'url':ServPth+'waterfall_scenery-wallpaper-.jpg',
        'name':'Green grass '
    },{
        'url':ServPth+'waterfall_scenery-wallpaper-.jpg',
        'name':'Green Grass'
    },{
        'url':ServPth+'waterfall_scenery-wallpaper-.jpg',
        'name':'Green Grass'
    }];
    $scope.PopUp=function(img){
       $scope.PopUpUrl=img.url
    }
});
app.controller("AboutController",function($scope){
    $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
});