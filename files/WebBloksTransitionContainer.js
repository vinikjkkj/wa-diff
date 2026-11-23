__d(
  "WebBloksTransitionContainer",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksStyle",
    "WebBloksTransitionContainerMinificationKeys",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState;
    function g(e) {
      var t,
        n = e.externalStyle,
        r = e.node,
        a = r.get(
          o("WebBloksTransitionContainerMinificationKeys")
            .TRANSITION_CONTAINER_CROSSFADE,
        ),
        i = r.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        l = i[0],
        u = i[1],
        d =
          (t = r.get(
            o("WebBloksTransitionContainerMinificationKeys")
              .TRANSITION_CONTAINER_PROGRESS,
          )) != null
            ? t
            : 0,
        g = o("WebBloksStyle").useStyle(r, n),
        b = g.style,
        v = g.wrapper,
        S = g.wrapperProps,
        R = o("WebBloksComponentContext").useWebBloksContext(),
        L = R.renderChildren,
        E = f([0, 0, !1]),
        k = E[0],
        I = k[0],
        T = k[1],
        D = k[2],
        x = E[1],
        $ = f([0, 0]),
        P = $[0],
        N = P[0],
        M = P[1],
        w = $[1],
        A = _(null),
        F = _(null),
        O = _(null),
        B = c(function () {
          var e = F.current;
          e != null &&
            x([
              e.getBoundingClientRect().width,
              e.getBoundingClientRect().height,
              !0,
            ]);
          var t = O.current,
            n = t == null ? void 0 : t.children,
            r = (n == null ? void 0 : n.length) === 1 ? n[0] : t;
          r != null &&
            w([
              r.getBoundingClientRect().width,
              r.getBoundingClientRect().height,
            ]);
        }, []);
      (m(B, [B]), y(A, B));
      var W = p(
          function () {
            return L([l]);
          },
          [l, L],
        ),
        q = p(
          function () {
            return L([u]);
          },
          [L, u],
        ),
        U = Number(d.toFixed(2)),
        V = h(U, T, M),
        H = h(U, I, N),
        G = h(U, 0, 1),
        z = a === !0;
      return v(
        s.jsxs(
          "div",
          babelHelpers.extends({}, S, {
            ref: A,
            style: b,
            children: [
              s.jsxs("div", {
                className: C.container,
                style: D ? { height: V, width: H } : {},
                children: [
                  s.jsx("div", {
                    className: C.startElem,
                    style:
                      z && U > 0 ? { opacity: 1 - (G != null ? G : 0) } : {},
                    ref: F,
                    children: W,
                  }),
                  U > 0
                    ? s.jsx("div", {
                        className: C.endElem,
                        style: babelHelpers.extends(
                          {},
                          z ? { opacity: G } : {},
                          { height: M, width: N },
                        ),
                        children: q,
                      })
                    : null,
                ],
              }),
              N > 0 || M > 0
                ? null
                : s.jsx("div", {
                    className: C.endPreviewElem,
                    ref: O,
                    children: q,
                  }),
            ],
          }),
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t, n) {
      if (!(t == null || n == null)) return t + e * (n - t);
    }
    function y(e, t) {
      d(
        function () {
          var n = new IntersectionObserver(
            function (e) {
              var n = e[0],
                r = n.isIntersecting;
              (r === !0 ||
                n.intersectionRatio > 0 ||
                (n.intersectionRect &&
                  (n.intersectionRect.height > 0 ||
                    n.intersectionRect.width > 0))) &&
                t();
            },
            { root: null, threshold: 0 },
          );
          return (
            (e == null ? void 0 : e.current) != null && n.observe(e.current),
            function () {
              return n.disconnect();
            }
          );
        },
        [t, e],
      );
    }
    var C = o("WebBloksStyle").createStyles({
      container: { position: "relative", overflow: "hidden" },
      startElem: { display: "inline-block" },
      endElem: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 },
      endPreviewElem: { visibility: "hidden" },
    });
    l.default = g;
  },
  98,
);
