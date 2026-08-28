__d(
  "FXReauthenticationLogger",
  ["promiseDone", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("FxReauthenticationFalcoEvent").__setRef(
      "FXReauthenticationLogger",
    );
    function s(t) {
      r("promiseDone")(e.load(), function (e) {
        e.log(function () {
          return t;
        });
      });
    }
    l.default = s;
  },
  98,
);
