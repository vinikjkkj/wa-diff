__d(
  "useAttributionSourceForClick",
  [
    "XCometPrivacySandboxRegisterSourceControllerRouteBuilder",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a,
        i;
      if (n[0] !== e || n[1] !== t) {
        i = Symbol.for("react.early_return_sentinel");
        e: {
          var l = {};
          if (e != null && e.length > 0) l.eid = e;
          else if (t != null && t.length > 0) l.xt = t;
          else {
            i = null;
            break e;
          }
          var s = r(
            "XCometPrivacySandboxRegisterSourceControllerRouteBuilder",
          ).buildUri(l);
          a = s.toString();
        }
        ((n[0] = e), (n[1] = t), (n[2] = a), (n[3] = i));
      } else ((a = n[2]), (i = n[3]));
      return i !== Symbol.for("react.early_return_sentinel") ? i : a;
    }
    l.default = e;
  },
  98,
);
