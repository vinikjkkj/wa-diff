__d(
  "CometChromeDome",
  ["JSScheduler", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("Chromedome").__setRef("CometChromeDome");
    function u() {
      s.onReady(function (t) {
        (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(function () {
          t.start({});
        });
      });
    }
    l.init = u;
  },
  98,
);
