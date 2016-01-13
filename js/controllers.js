var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('homeCtrl',
    function ($scope, TemplateService, NavigationService, $http) {
        /* BASIC PAGE CONFIGURATIONS */
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = "views/content.html";
        TemplateService.slider = "views/slider.html";
        /*===========================================*/


    }
);
phonecatControllers.controller('aboutCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        /*BASIC CONFIGURATIONS*/
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("about");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = "views/aboutusview.html";
        TemplateService.slider = "";
        /*===========================================*/
    }
]);
phonecatControllers.controller('fixturesCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("fixtures");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('playersCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("players");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('achievementCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("achievement");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('galleryCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('contactCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);

phonecatControllers.controller('newCtrl', ['$scope', 'TemplateService', 'NavigationService',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("new");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function ($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);