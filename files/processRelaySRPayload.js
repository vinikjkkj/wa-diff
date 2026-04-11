__d(
  "processRelaySRPayload",
  ["HasteResponse", "ifRequireable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = e.ddd;
      if (!i) {
        n && n();
        return;
      }
      var l = function () {
        return o("HasteResponse").handle(i, {
          source: "relay_3d",
          sourceDetail: t,
          onBlocking: n,
          onLog: a,
        });
      };
      r("ifRequireable")(
        "ReactDOM",
        function (e) {
          return e.flushSync(l);
        },
        l,
      );
    }
    l.default = e;
  },
  98,
);
