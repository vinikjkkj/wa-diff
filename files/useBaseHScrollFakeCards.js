__d(
  "useBaseHScrollFakeCards",
  [
    "BaseHScroll.react",
    "BaseHScrollConstants",
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "UserAgent",
    "react",
    "react-compiler-runtime",
    "setBaseHscrollChildrenAriaHidden",
    "useEventHandler",
    "useResizeObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.children,
        a = e.fakeCardXStyle,
        i = e.gap,
        l = e.isCircular,
        c = e.minWidth,
        d = e.onResize,
        m = e.peek,
        p = e.peekWidth,
        _ = u(0),
        f = _[0],
        g = _[1],
        h;
      t[0] !== n.length ||
      t[1] !== i ||
      t[2] !== l ||
      t[3] !== c ||
      t[4] !== d ||
      t[5] !== m ||
      t[6] !== p
        ? ((h = function (t, r, a) {
            var e = t.width,
              s = Math.min(e, o("BaseHScrollConstants").MAX_CONTAINER_WIDTH),
              u = m ? p * 2 : 0;
            if (l) {
              var _ = Math.floor((s - u + i) / (c + i));
              n.length < _ ? g(0) : g(_);
            }
            d();
          }),
          (t[0] = n.length),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d),
          (t[5] = m),
          (t[6] = p),
          (t[7] = h))
        : (h = t[7]);
      var y = r("useEventHandler")(h),
        C = r("useResizeObserver")(y),
        b,
        v;
      if (t[8] !== n || t[9] !== a || t[10] !== l || t[11] !== f) {
        var S = f !== 0 ? n.slice(-f) : [],
          R = n.slice(0, f);
        ((b = l
          ? S.map(function (e, t) {
              return s.createElement(
                o("BaseHScroll.react").HScrollChild,
                babelHelpers.extends(
                  {},
                  r(
                    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                  )(e).props,
                  {
                    "aria-hidden": !0,
                    key: "head-" + t,
                    xstyle: [
                      r(
                        "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                      )(e).props.xstyle,
                      a,
                    ],
                  },
                ),
              );
            })
          : null),
          (v = l
            ? R.map(function (e, t) {
                return s.createElement(
                  o("BaseHScroll.react").HScrollChild,
                  babelHelpers.extends(
                    {},
                    r(
                      "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                    )(e).props,
                    {
                      "aria-hidden": !0,
                      key: "tail-" + t,
                      xstyle: [
                        r(
                          "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                        )(e).props.xstyle,
                        a,
                      ],
                    },
                  ),
                );
              })
            : null),
          (t[8] = n),
          (t[9] = a),
          (t[10] = l),
          (t[11] = f),
          (t[12] = b),
          (t[13] = v));
      } else ((b = t[12]), (v = t[13]));
      var L = v,
        E;
      t[14] !== i || t[15] !== m || t[16] !== p
        ? ((E = function (t) {
            var e,
              n = t.isRTL,
              a = t.isRTLScrollFromMaxScroll,
              l = t.scrollRef,
              s = (e = l.current) == null ? void 0 : e.getDOMNode();
            if (s != null) {
              var u =
                  r("UserAgent").isBrowser("IE") ||
                  r("UserAgent").isBrowser("Edge"),
                c = s.offsetWidth,
                d = s.scrollLeft,
                _ = s.scrollWidth,
                f = n ? -(_ - c) : _ - c,
                g = function (t) {
                  var e = function (t) {
                    (s.scrollTo == null || s.scrollTo(t, 0),
                      "onscrollend" in s &&
                        s.addEventListener(
                          "scrollend",
                          function () {
                            r("setBaseHscrollChildrenAriaHidden")(s);
                          },
                          { once: !0 },
                        ));
                  };
                  if (n && !u)
                    if (a.current) {
                      var o = s.scrollWidth - s.getBoundingClientRect().width;
                      e(o - t);
                    } else e(-t);
                  else e(t);
                },
                h = m ? p * 2 : 0,
                y = o("BaseHScrollConstants").WIGGLE_ROOM / 2;
              if (d >= 0 - y && d <= 0 + y) {
                var C = _ - 2 * c + h - i;
                g(C);
              }
              if (d >= f - y && d <= f + y) {
                var b = c - h + i;
                g(b);
              }
            }
          }),
          (t[14] = i),
          (t[15] = m),
          (t[16] = p),
          (t[17] = E))
        : (E = t[17]);
      var k = E,
        I;
      return (
        t[18] !== b || t[19] !== k || t[20] !== C || t[21] !== L
          ? ((I = [b, L, C, k]),
            (t[18] = b),
            (t[19] = k),
            (t[20] = C),
            (t[21] = L),
            (t[22] = I))
          : (I = t[22]),
        I
      );
    }
    l.default = c;
  },
  98,
);
