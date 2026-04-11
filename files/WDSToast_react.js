__d(
  "WDSToast.react",
  ["ReactDOM", "WDSToastElements.react", "emptyFunction", "err", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = s.createContext({ showToast: r("emptyFunction") });
    function g(e) {
      var t = e.children,
        n = e.target,
        a = e.targetWindow,
        i = a === void 0 ? window : a,
        l = _(null),
        u = l[0],
        c = l[1];
      d(
        function () {
          if (u == null) {
            var e = (function (e) {
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                "nodeName" in e
              ) {
                var t = e.nodeName;
                return n instanceof HTMLElement || n instanceof i.HTMLElement
                  ? n
                  : null;
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                "current" in e
              ) {
                var r = e.current;
                return r;
              }
              {
                var o = e;
                return i.document.querySelector(o);
              }
            })(n);
            if (e == null) {
              r("err")(
                "[WDSToast] Unable to find target element or invalid target is provided",
              );
              return;
            }
            c(e);
          }
        },
        [n, u, i],
      );
      var g = p(null),
        h = m(function () {
          return {
            showToast: function (t) {
              var e;
              return (e = g.current) == null ? void 0 : e.showToast(t);
            },
          };
        }, []);
      return s.jsxs(f.Provider, {
        value: h,
        children: [
          t,
          u &&
            o("ReactDOM").createPortal(
              s.jsx(o("WDSToastElements.react").WDSToastList, {
                ref: g,
                targetWindow: i,
              }),
              u,
            ),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return c(f);
    }
    ((l.useWDSToast = h), (l.WDSToastProvider = g));
  },
  98,
);
