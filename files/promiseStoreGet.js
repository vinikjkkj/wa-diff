__d(
  "promiseStoreGet",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if (l()) return;
        var a = Array.isArray(t) ? t : [t],
          i = a.map(function (e) {
            return e.addListener(function () {
              l();
            });
          });
        function l() {
          var t = r();
          if (t.isDone() && t.hasError())
            return (
              n(t.error || t.value),
              i == null ||
                i.forEach(function (e) {
                  return e.remove();
                }),
              !0
            );
          if (t.isDone() && t.hasValue()) {
            var a = t.getValueEnforcing();
            if (!o || o(a))
              return (
                e(a),
                i == null ||
                  i.forEach(function (e) {
                    return e.remove();
                  }),
                !0
              );
          }
          return !1;
        }
      });
    }
    ((l.all = function (t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if (l()) return;
        var a = Array.isArray(t) ? t : [t],
          i = a.map(function (e) {
            return e.addListener(function () {
              l();
            });
          });
        function l() {
          var t = r(),
            a = new Map();
          for (var l of t) {
            var s = l[0],
              u = l[1];
            if (!u.isDone()) return !1;
            if (u.hasError())
              return (
                n(u.error || u.value),
                i == null ||
                  i.forEach(function (e) {
                    return e.remove();
                  }),
                !0
              );
            if (!u.hasValue()) return !1;
            var c = u.getValueEnforcing();
            if (o && !o(c)) return !1;
            a.set(s, c);
          }
          return (
            e(a),
            i == null ||
              i.forEach(function (e) {
                return e.remove();
              }),
            !0
          );
        }
      });
    }),
      (i.default = l));
  },
  66,
);
