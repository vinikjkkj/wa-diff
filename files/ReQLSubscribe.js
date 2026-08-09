__d(
  "ReQLSubscribe",
  ["ErrorGuard", "ReQL", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a = t.take(1),
        i = (e || (e = r("ErrorGuard"))).guard(n),
        l = !1,
        s = null,
        u = a.subscribe(function (e, t) {
          var n;
          if (!l)
            switch (t.operation) {
              case "delete":
                (s == null || s.current !== void 0) &&
                  ((s = { current: void 0 }), i(s.current));
                return;
              case "add":
              case "put":
                ((n = s) == null ? void 0 : n.current) !== t.value &&
                  ((s = { current: t.value }), i(s.current));
            }
        });
      return (
        r("promiseDone")(o("ReQL").firstAsync(a), function (e) {
          !l && s == null && ((s = { current: e }), i(e));
        }),
        function () {
          l || ((l = !0), u == null || u());
        }
      );
    }
    l.subscribeToFirst = s;
  },
  98,
);
