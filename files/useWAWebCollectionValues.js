__d(
  "useWAWebCollectionValues",
  ["invariant", "WANullthrows", "react", "useWAWebListener", "useWAWebValues"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState;
    function p(e, t, n, o) {
      var a = _(e, t, n, o),
        i = m(function () {
          return r("WANullthrows")(
            a,
            "[useCollectionValues] Expected model to be present in collection",
          );
        }),
        l = i[0],
        s = i[1];
      return (a != null && a !== l && s(a), l);
    }
    function _(e, t, n, r) {
      var a = d(
          function () {
            return Array.isArray(e) ? e : [e];
          },
          [e],
        ),
        i,
        l;
      typeof n == "function" && Array.isArray(r)
        ? ((i = n), (l = r))
        : (Array.isArray(n) || s(0, 72179),
          (i = function (t) {
            return t;
          }),
          (l = n));
      var u = m(function () {
          return t == null ? null : h(a, t);
        }),
        c = u[0],
        p = u[1],
        _ = function () {
          var e = t == null ? null : h(a, t);
          (e !== c ||
            (e == null ? void 0 : e.id.toString()) !==
              (c == null ? void 0 : c.id.toString())) &&
            p(e);
        };
      (_(),
        o("useWAWebListener").useListeners(
          a.map(function (e) {
            return {
              source: e,
              eventOrEvents: "add",
              callback: function () {
                _();
              },
            };
          }),
        ));
      var f = c == null ? null : i(c);
      return o("useWAWebValues").useOptionalValues(f, l, { subscribe: g(c) });
    }
    function f(e, t) {
      return o("useWAWebValues").useValues(e, t, { subscribe: g(e) });
    }
    function g(e) {
      return c(
        function (t) {
          if (e != null)
            return (
              e.on("change", t),
              e.incObservers(!0),
              function () {
                (e.decObservers(), e.off("change", t));
              }
            );
        },
        [e],
      );
    }
    function h(e, t) {
      for (var n of e) {
        var r = n.get(t);
        if (r != null) return r;
      }
      return null;
    }
    ((l.useCollectionValues = p),
      (l.useOptionalCollectionValues = _),
      (l.useModelGetterValues = f));
  },
  98,
);
