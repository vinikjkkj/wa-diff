__d(
  "initCometErrorDialog",
  ["ErrorPubSub", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("CometErrorDialog").__setRef(
        "initCometErrorDialog",
      );
    function u() {
      s.onReady(function (t) {
        return (e || (e = r("ErrorPubSub"))).addListener(t.errorListener);
      });
    }
    l.default = u;
  },
  98,
);
