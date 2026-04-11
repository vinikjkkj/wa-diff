__d(
  "WAWebSyncdGetActionHandler",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null;
    function c(e) {
      u = e;
    }
    function d(t) {
      if (u == null) throw r("err")("Action handlers not initialized");
      return (
        e == null &&
          (e = new Map(
            u.map(function (e) {
              return [e.getAction(), e];
            }),
          )),
        e.get(t)
      );
    }
    function m() {
      if (u == null) throw r("err")("Action handlers not initialized");
      return (
        s == null &&
          (s = Math.max.apply(
            Math,
            u.map(function (e) {
              return e.getVersion();
            }),
          )),
        s
      );
    }
    ((l.setActionHandlers = c),
      (l.getActionHandler = d),
      (l.maxSupportedVersion = m));
  },
  98,
);
