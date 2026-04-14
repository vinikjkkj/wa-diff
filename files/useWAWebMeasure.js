__d(
  "useWAWebMeasure",
  [
    "WAWebPREGatingUtils",
    "WAWebResizeObserver",
    "react",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useState,
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      };
    function m() {
      var e = c(null),
        t = e[0],
        n = e[1],
        a = c(d),
        i = a[0],
        l = a[1],
        s = r("useWAWebDebouncedCallback")(l, 100);
      return (
        u(
          function () {
            if (t)
              return o("WAWebResizeObserver").observe(
                t,
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? s : l,
              );
          },
          [t, s],
        ),
        [n, i]
      );
    }
    l.default = m;
  },
  98,
);
