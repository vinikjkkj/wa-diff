__d(
  "EBDeps",
  ["FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      if (e == null) throw r("err")("EBDeps is not initialized");
      return e;
    }
    function u(t, n) {
      if (e == null) {
        var o = {},
          a = function (a) {
            var e = t[a];
            if (e == null) return 1;
            e instanceof Function
              ? (o[a] = function () {
                  r("FBLogger")("wmi_eb").info(
                    "EBDeps: function %s, reason %s",
                    a,
                    n,
                  );
                  for (
                    var o = arguments.length, i = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    i[l] = arguments[l];
                  return e.apply(t, i);
                })
              : (r("FBLogger")("wmi_eb").info("EBDeps: %s is not function", a),
                (o[a] = e));
          };
        for (var i of Object.keys(t)) a(i);
        e = o;
      }
    }
    ((l.getDeps = s), (l.setDeps = u));
  },
  98,
);
