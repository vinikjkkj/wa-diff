__d(
  "useWAWebConversationPanelFiller.react",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebVelocityAnimate",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(t) {
      var a = t.canCompose,
        i = t.getScrollBottom,
        l = t.onComposeHeightChange,
        s = t.selectable,
        c = t.setScrollBottom,
        p = m(null),
        _ = m(0),
        f = m(null),
        g = m(),
        h = m(!1);
      d(
        function () {
          a || (_.current = 0);
        },
        [a],
      );
      var y = function (t) {
          return Math.max(0, _.current);
        },
        C = function () {
          var e = y();
          p.current && (p.current.style.height = e + "px");
        },
        b = function (a, s) {
          var t,
            u = a.input,
            d = a.overlay,
            m = d === void 0 ? 0 : d,
            p = f.current,
            y = i();
          if (!(!p || y == null)) {
            if (u !== void 0) {
              l(u);
              return;
            }
            if (s) {
              ((_.current = m), C(), c(y));
              return;
            }
            if (((_.current += m), m < 0 && (C(), c(y)), g.current)) {
              var b;
              ((h.current = !0),
                (b = g.current) == null || b.controller.abort());
            }
            var v = new AbortController(),
              S = v.signal,
              R = (
                ((t = g.current) == null ? void 0 : t.promise) ||
                (e || (e = n("Promise"))).resolve()
              ).then(function () {
                return r("WAWebVelocityAnimate")(
                  p,
                  { translateY: m > 0 ? [-m, 0] : [0, m] },
                  { duration: 300, easing: [0.1, 0.82, 0.25, 1] },
                );
              }),
              L = r("WAPromiseRaceAbort")(R, S)
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").Unmount,
                    r("WAWebNoop"),
                  ),
                )
                .then(function () {
                  if (S.aborted) throw new (o("WAAbortError").AbortError)();
                  (m > 0 && C(), (p.style.transform = ""), m > 0 && c(y));
                })
                .catch(
                  o("WAAbortError").catchAbort(function () {
                    r("WAWebVelocityAnimate")(p, "finish", !0);
                  }),
                )
                .then(function () {
                  h.current ? (h.current = !1) : (g.current = void 0);
                });
            g.current = { promise: L, controller: v };
          }
        },
        v;
      return (
        s
          ? (v = u.jsx("div", {
              ref: p,
              className: "x1c4vz4f x2lah0s xdl72j9 x14yy4lh",
            }))
          : a &&
            (v = u.jsx("div", {
              ref: p,
              style: { height: y() + "px" },
              className: "x1c4vz4f x2lah0s xdl72j9 x14yy4lh",
            })),
        { msgPanelRef: f, filler: v, handleComposeHeightChange: b }
      );
    }
    l.default = p;
  },
  98,
);
