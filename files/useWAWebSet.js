__d(
  "useWAWebSet",
  ["Promise", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useState;
    function m(t) {
      var r = d(
          t
            ? t()
            : function () {
                return new Set();
              },
        ),
        o = r[0],
        a = r[1],
        i = c(function (t) {
          return new (e || (e = n("Promise")))(function (e) {
            a(function (n) {
              var r = new Set(n);
              return (r.add(t), e(r), r);
            });
          });
        }, []),
        l = c(function (t) {
          return new (e || (e = n("Promise")))(function (e) {
            a(function (n) {
              var r = new Set(n);
              return (r.delete(t), e(r), r);
            });
          });
        }, []),
        s = c(function (t) {
          return new (e || (e = n("Promise")))(function (e) {
            a(function (n) {
              var r = new Set(n);
              return (r.has(t) ? r.delete(t) : r.add(t), e(r), r);
            });
          });
        }, []),
        u = c(function (t) {
          return (
            t === void 0 && (t = []),
            new (e || (e = n("Promise")))(function (e) {
              a(function () {
                var n = new Set(t);
                return (e(n), n);
              });
            })
          );
        }, []);
      return [o, { add: i, remove: l, toggle: s, clear: u }];
    }
    l.useSet = m;
  },
  98,
);
