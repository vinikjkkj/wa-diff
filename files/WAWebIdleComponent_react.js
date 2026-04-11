__d(
  "WAWebIdleComponent.react",
  [
    "WAWebIdleTaskRunner",
    "WAWebWid",
    "react",
    "useLazyRef",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = e.children,
        n = e.id,
        a = e.onComplex,
        i = e.waitIdle,
        l = i === void 0 ? !1 : i,
        u = d(function () {
          return o("WAWebIdleTaskRunner").UIBusyTasks.isBusy();
        }),
        m = u[0],
        p = u[1],
        _ = function () {
          p(!1);
        },
        f = r("useLazyRef")(function () {
          return l ? o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(_) : null;
        }),
        g = r("useWAWebPrevious")(n);
      return (
        c(function () {
          return function () {
            l &&
              f.current != null &&
              o("WAWebIdleTaskRunner").UIBusyTasks.dequeue(f.current);
          };
        }, []),
        c(
          function () {
            if (!r("WAWebWid").equals(g, n) || !l) {
              m &&
                f.current != null &&
                o("WAWebIdleTaskRunner").UIBusyTasks.dequeue(f.current);
              var e = o("WAWebIdleTaskRunner").UIBusyTasks.isBusy();
              (e &&
                l &&
                (f.current = o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(_)),
                p(e));
            }
          },
          [n, f, m, g, l],
        ),
        m && l ? s.jsx(s.Fragment, { children: t }) : a()
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
