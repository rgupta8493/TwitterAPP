var app = angular.module('chirpApp',[]);

app.controller('mainController',function($scope){
     $scope.posts=[];    //defining array to carry posts
     $scope.newPost = {
      created_by:'',
      text:'',
      created_at:''
    };
  $scope.post = function(){
    $scope.newPost.created_at =Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost= {created_by:'',text:'',created_at: ''};
  };
  
    
               });