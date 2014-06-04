'use strict';

angular.module('cometaApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
