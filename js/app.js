// JavaScript Document
var pixoloapp = angular.module('pixoloapp', [
    'ngRoute',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

var navs = [{
        appname: "home",
        name: "Home",
        classis: "active",
        subnav: [],
        sp: false
    },
    {
        appname: "about",
        name: "About",
        classis: "",
        subnav: [],
        sp: false
    },
    {
        appname: "fixtures",
        name: "Fixtures",
        classis: "",
        subnav: [],
        sp: false
    },
    {
        appname: "players",
        name: "Players",
        classis: "",
        subnav: [
            {
                appname: "mainteam",
                name: "Main Team",
                classis: "",
                subnav: [],
                sp: false
    }, {
                appname: "academy",
                name: "Academy",
                classis: "",
                subnav: [],
                sp: false
    }
        ],
        sp: false
    },
    {
        appname: "achievement",
        name: "Achievement",
        classis: "",
        subnav: [],
        sp: false
    },
    {
        appname: "gallery",
        name: "Gallery",
        classis: "",
        subnav: [],
        sp: false
    },
    {
        appname: "contact",
        name: "Contact",
        classis: "",
        subnav: [],
        sp: false
    }];

pixoloapp.config(['$routeProvider',
    function ($routeProvider) {
        for (var i = 0; i < navs.length; i++) {
            if (navs[i].sp) {
                $routeProvider.
                when('/' + navs[i].appname, {
                    templateUrl: 'views/template.html',
                    controller: navs[i].appname + 'Ctrl'
                });
            } else {
                $routeProvider.
                when('/' + navs[i].appname, {
                    templateUrl: 'views/template.html',
                    controller: navs[i].appname + 'Ctrl'
                });
            };
            if (navs[i].subnav.length > 0) {
                for (var j=0; j<navs[i].subnav.length; j++) {
                    $routeProvider.
                    when('/' + navs[i].subnav[j].appname, {
                        templateUrl: 'views/template.html',
                        controller: navs[i].subnav[j].appname + 'Ctrl'
                    });
                };
            };
        };
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }
]);