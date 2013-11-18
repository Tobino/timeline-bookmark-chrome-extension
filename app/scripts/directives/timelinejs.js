angular.module('bookmarkApp')
.directive('timelineJs',  function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            postpone = $timeout(function() {
                createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '300',
                    source:     'https://docs.google.com/spreadsheet/pub?key=0AlE_-Eidx1s6dDVtbGo0M2l5b3hSQWNmZUdqM1lsbEE&single=true&gid=0&output=html',
                    embed_id:   'my-timeline',
                    css:        'lib/timelinejs/css/timeline.css',
                    js:         'lib/timelinejs/js/timeline.js'
                });
            }, 0);
            console.log("Running timelineJS");
        }
    }
});