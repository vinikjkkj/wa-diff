__d(
  "WAWebODSImpl",
  ["ODS", "WAWebODSObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "whatsapp_web",
      u = {
        addListener: function (t) {
          r("WAWebODSObserver").addListener("event", t);
        },
        incr: function (n, a) {
          (a === void 0 && (a = 1),
            (e || (e = o("ODS"))).bumpEntityKey(2363, s, n, a),
            r("WAWebODSObserver").emit("event", { count: a, key: n }));
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
