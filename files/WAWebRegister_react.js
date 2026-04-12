__d(
  "WAWebRegister.react",
  ["WAWebEventEmitter", "err", "react", "useWAWebListener", "useWAWebPrevious"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useImperativeHandle,
      f = u.useMemo,
      g = u.useRef;
    function h(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e, n) {
            return e === t[n];
          });
    }
    function y() {
      var e = c();
      function t(t) {
        return s.jsx(e.Provider, {
          value: t.registerRef,
          children: t.children,
        });
      }
      t.displayName = t.name + " [from " + i.id + "]";
      function n(e) {
        var t,
          n = f(function () {
            return new (r("WAWebEventEmitter"))();
          }, []),
          a = new Map(),
          i = g({ items: a, events: n });
        i.current != null && (i.current.items = new Map());
        var l = r("useWAWebPrevious")(
          (t = i.current) == null ? void 0 : t.items,
        );
        (p(
          function () {
            var t = i.current;
            if (t != null) {
              var n = Array.from((l == null ? void 0 : l.keys()) || []),
                r = Array.from(t == null ? void 0 : t.items.keys()),
                o = !h(n, r);
              o &&
                (e == null ||
                  e.onOrderChange == null ||
                  e.onOrderChange(t == null ? void 0 : t.items));
            }
          },
          void 0,
        ),
          p(
            function () {
              i.current != null &&
                (e == null ||
                  e.onRegister == null ||
                  e.onRegister(i.current.items));
            },
            void 0,
          ));
        var s = e == null ? void 0 : e.onChange;
        return (
          o("useWAWebListener").useListener(
            n,
            "change",
            d(
              function () {
                i.current != null && (s == null || s(i.current.items));
              },
              [s],
            ),
          ),
          i
        );
      }
      function a(t, n) {
        var o,
          a = m(e),
          i = a;
        if (a == null || i == null)
          throw r("err")(
            "[Register] `useRegisterItem` must be used in a `Register` tree",
          );
        var l = g(null);
        (_(l, function () {
          return n;
        }),
          (o = i.current) == null || o.items.set(t, l),
          p(
            function () {
              var e = i.current;
              return (
                e == null || e.items.set(t, l),
                e == null || e.events.trigger("change"),
                function () {
                  (e == null || e.items.delete(t),
                    e == null || e.events.trigger("change"));
                }
              );
            },
            [t],
          ));
      }
      return { Register: t, useRegister: n, useRegisterItem: a };
    }
    l.createRegister = y;
  },
  98,
);
