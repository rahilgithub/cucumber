$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RahilAkram/Documents/eclipse-workspace/cucumber-works/src/main/resources/com/training/features/telecom.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login functionality for a social networking site.",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to gurusite",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;1"
    },
    {
      "cells": [
        "User1",
        "password1"
      ],
      "line": 13,
      "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;2"
    },
    {
      "cells": [
        "User2",
        "password2"
      ],
      "line": 14,
      "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;3"
    },
    {
      "cells": [
        "User3",
        "password3"
      ],
      "line": 15,
      "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality for a social networking site.",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to gurusite",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"User1\" and Password as \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberTag.user_navigates_to_gurusite()"
});
formatter.result({
  "duration": 67156117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 21
    },
    {
      "val": "password1",
      "offset": 45
    }
  ],
  "location": "cucumberTag.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 2005921000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTag.login_should_be_unsuccessful()"
});
formatter.result({
  "duration": 19577892900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login functionality for a social networking site.",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to gurusite",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"User2\" and Password as \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberTag.user_navigates_to_gurusite()"
});
formatter.result({
  "duration": 26504612500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User2",
      "offset": 21
    },
    {
      "val": "password2",
      "offset": 45
    }
  ],
  "location": "cucumberTag.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1213291600,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTag.login_should_be_unsuccessful()"
});
formatter.result({
  "duration": 2178468800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login functionality for a social networking site.",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;login-functionality-for-a-social-networking-site.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to gurusite",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"User3\" and Password as \"password3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberTag.user_navigates_to_gurusite()"
});
formatter.result({
  "duration": 59227146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User3",
      "offset": 21
    },
    {
      "val": "password3",
      "offset": 45
    }
  ],
  "location": "cucumberTag.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1178318600,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTag.login_should_be_unsuccessful()"
});
formatter.result({
  "duration": 2052828100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user navigates to gurusite",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter Username as \"\u003c\u003e\" and Password as \"\u003c\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the user should be redirected to login retry",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberTag.user_navigates_to_gurusite()"
});
formatter.result({
  "duration": 24486348000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c\u003e",
      "offset": 21
    },
    {
      "val": "\u003c\u003e",
      "offset": 42
    }
  ],
  "location": "cucumberTag.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1191813300,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTag.the_user_should_be_redirected_to_login_retry()"
});
formatter.result({
  "duration": 2476800400,
  "status": "passed"
});
});