__d(
  "BaseMultiPageViewContainer.react",
  [
    "BaseMultiPageViewContext",
    "FocusInertRegion.react",
    "FocusRegionStrictMode.react",
    "HiddenSubtreeContextProvider.react",
    "Locale",
    "emptyFunction",
    "focusScopeQueries",
    "getPrefersReducedMotion",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useMemo,
      f = c.useRef,
      g = {
        page: {
          borderStartStartRadius: "x1fmog5m",
          borderStartEndRadius: "xu25z0z",
          borderEndEndRadius: "x140muxe",
          borderEndStartRadius: "xo1y3bh",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
        pageInactive: {
          display: "x1s85apg",
          left: "xu96u03",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          clipPath: "x7sf2oe",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          position: "x1n2onr6",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
      },
      h = o("Locale").isRTL(),
      y = r("gkx")("22885") ? 200 : 300,
      C = r("getPrefersReducedMotion")() || !r("gkx")("22877");
    function b(e) {
      return Math.cos((e + 1) * Math.PI) / 2 + 0.5;
    }
    function v(t) {
      var n = t.onAddPage,
        a = t.onClearRemovedPages,
        i = t.onPopPage,
        l = t.pageHistory,
        s = t.ref,
        c = t.children,
        v = t.disableAnimations,
        S = v === void 0 ? !1 : v,
        R = t.disableAutoFocus,
        L = R === void 0 ? !1 : R,
        E = t.disableAutoRestoreFocus,
        k = E === void 0 ? !1 : E,
        I = t.disableFocusContainment,
        T = I === void 0 ? !1 : I,
        D = t.disableInitialAutoFocus,
        x = D === void 0 ? !1 : D,
        $ = t.fallback,
        P = t.imperativeRef,
        N = t.onPageChange,
        M = N === void 0 ? r("emptyFunction") : N,
        w = t.pageXStyle,
        A = t.placeholderComponent,
        F = t.xstyle,
        O = f(null),
        B = f(null),
        W = f(null),
        q = f(!1),
        U = x && !q.current,
        V = S || C,
        H = d(function () {
          var e = O.current,
            t = B.current;
          t != null
            ? (W.current = t.getBoundingClientRect())
            : e != null && (W.current = e.getBoundingClientRect());
        }, []),
        G = d(
          function (e, t, r) {
            (H(), (q.current = !0), n(e, t, r));
          },
          [n, H],
        ),
        z = d(
          function (e) {
            (H(), i(e));
          },
          [i, H],
        ),
        j = d(
          function (e, t) {
            return G("end", e, t);
          },
          [G],
        ),
        K = _(
          function () {
            for (var e = l.length - 1; e >= 0; e--) {
              var t = l[e];
              if (t.type !== "pushed_page" || !t.removed) return e;
            }
            return 0;
          },
          [l],
        ),
        Q = f(K);
      m(
        function () {
          (K !== Q.current && M && M(K), (Q.current = K));
        },
        [M, K],
      );
      var X = d(
        function (e) {
          var t = B.current,
            n = O.current;
          if (e != null) {
            var r = l[K],
              o = r.type === "pushed_page" ? r.direction : "end";
            Q.current > K && (o = o === "start" ? "end" : "start");
            var i = W.current,
              s = e.getBoundingClientRect();
            if (!V && t != null && t !== e && i != null && n != null) {
              var u = (o === "start" ? -1 : 1) * (h ? -1 : 1);
              ((t.style.cssText = ""),
                (e.style.cssText = ""),
                t.style.setProperty("display", "flex"),
                t.style.setProperty("width", i.width + "px"),
                t.style.setProperty("height", i.height + "px"),
                e.style.removeProperty("display"),
                e.style.removeProperty("width"),
                e.style.removeProperty("height"));
              for (
                var c = Math.round(60 * (y / 1e3)),
                  d = [],
                  m = [],
                  p = [],
                  _ = 0;
                _ <= c;
                _++
              ) {
                var f = _ / c,
                  g = b(f),
                  C = i.width / s.width,
                  v = i.height / s.height,
                  S = C + (1 - C) * g,
                  R = v + (1 - v) * g,
                  L = i.left - s.left,
                  E = i.top - s.top,
                  k = L * (1 - g),
                  I = E * (1 - g),
                  T = Math.min(i.width, s.width),
                  D = T * -u * g,
                  x = T * u * (1 - g),
                  $ = E - I,
                  P = -I;
                (d.push({
                  easing: "step-end",
                  offset: f,
                  transform:
                    "translateX(" +
                    k +
                    "px) translateY(" +
                    I +
                    "px) scaleX(" +
                    S +
                    ") scaleY(" +
                    R +
                    ")",
                }),
                  m.push({
                    easing: "step-end",
                    offset: f,
                    transform:
                      "scaleX(" +
                      1 / S +
                      ") scaleY(" +
                      1 / R +
                      ") translateX(" +
                      D +
                      "px) translateY(" +
                      $ +
                      "px)",
                  }),
                  p.push({
                    easing: "step-end",
                    offset: f,
                    transform:
                      "scaleX(" +
                      1 / S +
                      ") scaleY(" +
                      1 / R +
                      ") translateX(" +
                      x +
                      "px) translateY(" +
                      P +
                      "px)",
                  }));
              }
              (e.animate(p, y),
                n.animate(d, y),
                t.animate(m, y),
                e.animate([{ opacity: 0 }, { opacity: 1 }], y),
                (t.animate([{ opacity: 1 }, { opacity: 0 }], y).onfinish =
                  function () {
                    ((t.style.cssText = ""), a && a());
                  }));
            }
            B.current = e;
          }
        },
        [K, V, a, l],
      );
      p(
        P,
        function () {
          return { addPage: G, popPage: z };
        },
        [z, G],
      );
      var Y = _(
          function () {
            return {
              currentPageIndex: K,
              fallback: $,
              placeholderComponent: A,
              popPage: z,
              pushPage: j,
            };
          },
          [K, $, A, z, j],
        ),
        J = _(
          function () {
            return r("mergeRefs")(O, s);
          },
          [s],
        );
      return u.jsx(
        "div",
        babelHelpers.extends(
          { className: (e || (e = r("stylex")))(g.root, F), ref: J },
          r("testID")("BaseMultiStepContainer"),
          {
            children: l.map(function (t, n) {
              return u.jsx(
                "div",
                babelHelpers.extends(
                  {
                    "aria-hidden": n !== K,
                    className: (e || (e = r("stylex")))(
                      g.page,
                      n !== K && g.pageInactive,
                      w,
                    ),
                    ref: n === K ? X : null,
                  },
                  r("testID")(
                    n === 0
                      ? "base-multistep-container-first-step"
                      : "base-multistep-container-step-" + n,
                  ),
                  {
                    children: u.jsx(
                      o("FocusRegionStrictMode.react").FocusRegion,
                      {
                        autoFocusQuery:
                          !L && !U && n === K
                            ? o("focusScopeQueries").headerOrTabbableScopeQuery
                            : null,
                        autoRestoreFocus: !k,
                        containFocusQuery: T
                          ? null
                          : o("focusScopeQueries").tabbableScopeQuery,
                        recoverFocusQuery:
                          o("focusScopeQueries").headerOrTabbableScopeQuery,
                        children: u.jsx(r("FocusInertRegion.react"), {
                          disabled: n === K,
                          children: u.jsx(
                            r("HiddenSubtreeContextProvider.react"),
                            {
                              isHidden: n !== K,
                              children: u.jsx(
                                r("BaseMultiPageViewContext").Provider,
                                {
                                  value: Y,
                                  children:
                                    t.type === "initial_page"
                                      ? typeof c == "function"
                                        ? c(j)
                                        : c
                                      : t.type === "pushed_page"
                                        ? u.jsx(t.component, { onReturn: z })
                                        : null,
                                },
                              ),
                            },
                          ),
                        }),
                      },
                    ),
                  },
                ),
                t.key,
              );
            }),
          },
        ),
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
