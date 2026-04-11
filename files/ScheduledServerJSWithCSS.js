__d(
  "ScheduledServerJSWithCSS",
  ["Bootloader", "JSScheduler", "ScheduledServerJS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, a) {
      return function () {
        r("Bootloader").loadResources(a, {
          onAll: function () {
            o("ScheduledServerJS").handle(e, t, n);
          },
        });
      };
    }
    function u(t, n, o, a) {
      var i = s(t, n, o, a);
      a.length > 0 &&
        (e || (e = r("JSScheduler"))).scheduleImmediatePriCallback(i);
    }
    l.handle = u;
  },
  98,
);
