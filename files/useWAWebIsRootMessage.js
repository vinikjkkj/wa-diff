__d(
  "useWAWebIsRootMessage",
  ["react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = s(function () {
          var n;
          return (n = t == null ? void 0 : t.hasThreadForMsgKey(e.id)) != null
            ? n
            : null;
        }),
        r = n[0],
        a = n[1];
      return (
        o("useWAWebListener").useListener(t, ["add", "reset"], function () {
          var n;
          a(
            (n = t == null ? void 0 : t.hasThreadForMsgKey(e.id)) != null
              ? n
              : null,
          );
        }),
        r
      );
    }
    l.default = u;
  },
  98,
);
