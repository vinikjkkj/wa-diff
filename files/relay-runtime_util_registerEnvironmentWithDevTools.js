__d(
  "relay-runtime/util/registerEnvironmentWithDevTools",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var n =
          typeof t != "undefined"
            ? t
            : typeof window != "undefined"
              ? window
              : void 0,
        r = n && n.__RELAY_DEVTOOLS_HOOK__;
      r && r.registerEnvironment(e);
    }
    a.exports = e;
  },
  null,
);
