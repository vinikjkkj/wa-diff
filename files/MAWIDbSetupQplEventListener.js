__d(
  "MAWIDbSetupQplEventListener",
  ["MAWDexieError", "MAWQplProxy", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(t) {
      var n = new Set(Object.keys(o("MAWDexieError").DEXIE_ERROR));
      n.has(t.reason) &&
        e != null &&
        (e.endFail(t.reason),
        o("MAWQplProxy").sendQplPointThroughBridge(
          r("qpl")._(25310776, "6155"),
          "database_setup_failed",
        ),
        s != null && (s(), (s = null)));
    }
    var c = function (r, o) {
      return (
        (e = r),
        (s = o),
        t.addEventListener("unhandledrejection", u),
        function () {
          return t.removeEventListener("unhandledrejection", u);
        }
      );
    };
    l.trackDbSetupFailure = c;
  },
  98,
);
