__d(
  "makeStringifier",
  ["LRUKeyedCache"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = "ZdIw9v+v9/4lbv6A",
      u = s + "-1",
      c = s + "-2",
      d = s + "-3",
      m = s + "-4",
      p = s + "-5",
      _ = 6;
    function f(t) {
      var n =
          t != null
            ? t
            : function (e) {
                return e;
              },
        o = _,
        a = new (r("LRUKeyedCache"))(function (e) {
          return e;
        });
      function i(e, t) {
        switch (e) {
          case void 0:
            return u;
          case null:
            return c;
          case NaN:
            return d;
          case 1 / 0:
            return m;
          case -1 / 0:
            return p;
          default:
            switch (typeof e) {
              case "boolean":
              case "string":
              case "number":
                return e.toString();
              default:
                var n = a.get(e);
                return (
                  n == null &&
                    (typeof e == "object" &&
                      t > 0 &&
                      Array.isArray(e) &&
                      (n = JSON.stringify(
                        e.map(function (e) {
                          return i(e, t - 1);
                        }),
                      )),
                    n == null && (n = s + "-" + o++),
                    a.set(e, n)),
                  n
                );
            }
        }
      }
      function l(t) {
        return i(n(t), e);
      }
      return l;
    }
    l.default = f;
  },
  98,
);
