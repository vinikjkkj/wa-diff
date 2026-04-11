__d(
  "WorkerBootstrap",
  ["HasteSupportData", "ServerJSDefine"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      Object.keys(e).forEach(function (t) {
        r("ServerJSDefine").handleDefine(t, [], e[t], -1, null);
      });
    }
    function s(t, r) {
      var i, l;
      t.hsdp && o("HasteSupportData").handle(t.hsdp);
      var s =
        (i = (l = t.jsmods) != null ? l : t.dynamicModules) != null ? i : {};
      e(s);
      var u = n.call(null, r);
      if (
        (t.rds != null &&
          t.rds.length > 0 &&
          a.call(null, t.rds, function () {}),
        typeof u == "function" || u !== null)
      )
        try {
          for (
            var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), m = 2;
            m < c;
            m++
          )
            d[m - 2] = arguments[m];
          u.apply(void 0, d);
        } catch (e) {}
    }
    function u(e) {
      var t = e;
      if (typeof t == "function" || t !== null)
        try {
          t();
        } catch (e) {}
    }
    ((l.initDynamicModules = e), (l.start = s), (l.startServerJS = u));
  },
  98,
);
