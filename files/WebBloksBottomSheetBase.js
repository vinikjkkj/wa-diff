__d(
  "WebBloksBottomSheetBase",
  [
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.closeDialog,
        r = e.content,
        a = e.height,
        i = e.name,
        l = e.navbar,
        u = o("WebBloksEnvironmentContext").useDataBloksName(),
        c = f(n),
        d = c.draggableRef,
        m = c.touchEvents,
        p;
      t[0] !== u || t[1] !== i
        ? ((p = u(i)), (t[0] = u), (t[1] = i), (t[2] = p))
        : (p = t[2]);
      var g;
      t[3] !== a ? ((g = { height: a }), (t[3] = a), (t[4] = g)) : (g = t[4]);
      var h;
      t[5] !== n
        ? ((h = s.jsx("div", {
            className: y.top,
            children: s.jsx("button", { className: y.swipe, onClick: n }),
          })),
          (t[5] = n),
          (t[6] = h))
        : (h = t[6]);
      var C;
      t[7] !== r || t[8] !== d || t[9] !== l || t[10] !== g || t[11] !== h
        ? ((C = s.jsxs("div", {
            className: y.container,
            style: g,
            ref: d,
            onClick: _,
            role: "presentation",
            children: [h, l, r],
          })),
          (t[7] = r),
          (t[8] = d),
          (t[9] = l),
          (t[10] = g),
          (t[11] = h),
          (t[12] = C))
        : (C = t[12]);
      var b;
      return (
        t[13] !== n || t[14] !== p || t[15] !== C || t[16] !== m
          ? ((b = s.jsx(
              "div",
              babelHelpers.extends(
                {},
                p,
                { className: y.background, onClick: n, role: "presentation" },
                m,
                { children: C },
              ),
            )),
            (t[13] = n),
            (t[14] = p),
            (t[15] = C),
            (t[16] = m),
            (t[17] = b))
          : (b = t[17]),
        b
      );
    }
    function _(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = m(null),
        r = m(null),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            (t.stopPropagation(), (r.current = { startY: h(t), endY: h(t) }));
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            t.stopPropagation();
            var e = r.current;
            if (e) {
              e.endY = h(t);
              var o = e.endY - e.startY;
              o > 20 &&
                n.current &&
                (n.current.style.transform = "translateY(" + o + "px)");
            }
          }),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        u;
      t[2] !== e
        ? ((u = function (o) {
            (o.stopPropagation(),
              n.current && (n.current.style.transform = ""),
              r.current &&
                n.current &&
                r.current.endY - r.current.startY >
                  n.current.clientHeight / 2 &&
                e(),
              (r.current = null));
          }),
          (t[2] = e),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (t) {
            (t.stopPropagation(),
              (r.current = null),
              n.current && (n.current.style.transform = ""));
          }),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = []), (t[5] = f))
        : (f = t[5]),
        d(g, f));
      var y;
      return (
        t[6] !== c
          ? ((y = {
              draggableRef: n,
              touchEvents: {
                onTouchStart: i,
                onMouseDown: i,
                onTouchMove: s,
                onMouseMove: s,
                onTouchEnd: c,
                onMouseUp: c,
                onTouchCancel: _,
              },
            }),
            (t[6] = c),
            (t[7] = y))
          : (y = t[7]),
        y
      );
    }
    function g() {
      if (document.body) {
        var e = document.body.style.overscrollBehaviorY,
          t = document.body.style.touchAction;
        return (
          (document.body.style.overscrollBehaviorY = "none"),
          (document.body.style.touchAction = "none"),
          function () {
            ((document.body.style.overscrollBehaviorY = e),
              (document.body.style.touchAction = t));
          }
        );
      }
    }
    function h(e) {
      return e.touches != null ? e.touches[0].pageY : e.clientY;
    }
    var y = o("WebBloksStyle").createStyles({
      background: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 1e3,
      },
      container: {
        backgroundColor: "white",
        borderRadius: "16px 16px 0px 0px",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        left: 0,
        position: "absolute",
        right: 0,
        maxHeight: "calc(100% - 44px)",
      },
      top: { alignItems: "center", display: "flex", justifyContent: "center" },
      swipe: {
        backgroundColor: "#dbdbdb",
        border: "none",
        borderRadius: 2.5,
        height: 4,
        width: 36,
        marginTop: 12,
      },
    });
    l.default = p;
  },
  98,
);
