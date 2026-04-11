__d(
  "BaseHScroll.react",
  [
    "BaseGrid.react",
    "BaseGridRow.react",
    "BaseGridRowScrollableArea.react",
    "BaseHScrollChild",
    "BaseHScrollConstants",
    "BaseHScrollContext",
    "BaseHScrollPeek.react",
    "BaseHScrollScrollableArea.react",
    "BaseView.react",
    "HiddenSubtreePassiveContext",
    "Locale",
    "UserAgent",
    "getBaseHScrollAccessibilityAlert",
    "react",
    "setBaseHscrollChildrenAriaHidden",
    "smoothScrollTo",
    "stylex",
    "useBaseHScrollFakeCards",
    "useContainerBreakpoints",
    "useEventHandler",
    "useMergeRefs",
    "useTriggerAccessibilityAlert",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibilityLabel",
        "buttonWrapperStyle",
        "cardWidth",
        "containerXStyle",
        "disableScrolling",
        "gap",
        "hideArrows",
        "initialScrollSmoothing",
        "initialScrollToIndex",
        "isButtonInward",
        "maxContentWindowWidth",
        "nextButton",
        "onPressNext",
        "onPressPrev",
        "outerContainerXStyle",
        "peek",
        "peekPaddingEnd",
        "peekPaddingStart",
        "peekWidth",
        "prevButton",
        "role",
        "scrollContainerXStyle",
        "scrollRef",
        "scrollViewXStyle",
        "testid",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useLayoutEffect,
      f = d.useMemo,
      g = d.useRef,
      h = d.useState,
      y = o("Locale").isRTL(),
      C =
        r("UserAgent").isBrowser("Safari < 14") ||
        r("UserAgent").isBrowser("Mobile Safari < 14"),
      b = r("UserAgent").isBrowser("Chrome"),
      v = r("UserAgent").isBrowser("IE") || r("UserAgent").isBrowser("Edge"),
      S = y && C;
    function R(t) {
      var n,
        a = t.accessibilityLabel,
        i = t.buttonWrapperStyle,
        l = t.cardWidth,
        u = t.containerXStyle,
        d = u === void 0 ? I.containerPaddingDefault : u,
        C = t.disableScrolling,
        b = C === void 0 ? !1 : C,
        R = t.gap,
        L = R === void 0 ? 0 : R,
        k = t.hideArrows,
        T = k === void 0 ? !1 : k,
        D = t.initialScrollSmoothing,
        x = D === void 0 ? !1 : D,
        $ = t.initialScrollToIndex,
        P = t.isButtonInward,
        N = P === void 0 ? !1 : P,
        M = t.maxContentWindowWidth,
        w = t.nextButton,
        A = t.onPressNext,
        F = t.onPressPrev,
        O = t.outerContainerXStyle,
        B = t.peek,
        W = B === void 0 ? !1 : B,
        q = t.peekPaddingEnd,
        U = t.peekPaddingStart,
        V = t.peekWidth,
        H = t.prevButton,
        G = t.role,
        z = t.scrollContainerXStyle,
        j = t.scrollRef,
        K = t.scrollViewXStyle,
        Q = t.testid,
        X = babelHelpers.objectWithoutPropertiesLoose(t, e),
        Y = M != null && W && q != null && U != null,
        J = l.type === "responsive" ? l.minWidth : l.width,
        Z = f(
          function () {
            var e = [];
            if (l.type === "fixed")
              e.push({ maxContainerWidth: 1 / 0, width: J + "px" });
            else if (W && M != null) {
              for (var t = V * 2, n = 2 * J + L + t, r = 1; n < M + t; ) {
                var a = r <= 1 || L === 0 ? 0 : (r - 1) * L,
                  i = a + t,
                  s = i === 0 ? "100%" : "(100% - " + i + "px)";
                (e.push({
                  maxContainerWidth: n,
                  width: "calc(" + s + " / " + r + ")",
                }),
                  (n += L + J),
                  r++);
              }
              var u = r <= 1 || L === 0 ? 0 : (r - 1) * L,
                c = u + t,
                d = c === 0 ? "100%" : "(100% - " + c + "px)";
              (e.push({
                maxContainerWidth: M + t,
                width: "calc(" + d + " / " + r + ")",
              }),
                e.push({ maxContainerWidth: 1 / 0, width: (M - u) / r }));
            } else {
              for (
                var m = W ? V * 2 : 0, p = 2 * J + L + m, _ = 1;
                p < o("BaseHScrollConstants").MAX_CONTAINER_WIDTH;
              ) {
                var f = _ <= 1 || L === 0 ? 0 : (_ - 1) * L,
                  g = f + m,
                  h = g === 0 ? "100%" : "(100% - " + g + "px)";
                (e.push({
                  maxContainerWidth: p,
                  width: "calc(" + h + " / " + _ + ")",
                }),
                  (p += L + J),
                  _++);
              }
              var y = _ <= 1 || L === 0 ? 0 : (_ - 1) * L,
                C = y + m,
                b = C === 0 ? "100%" : "(100% - " + C + "px)";
              e.push({
                maxContainerWidth: 1 / 0,
                width: "calc(" + b + " / " + _ + ")",
              });
            }
            return e;
          },
          [l.type, W, M, J, V, L],
        ),
        ee = r("useTriggerAccessibilityAlert")(),
        te = o("useContainerBreakpoints").useContainerBreakpoints(
          Z,
          o("useContainerBreakpoints").BreakpointRelationship
            .BiggerContainerSmallerChild,
        ),
        ne = te[0],
        re = te[1],
        oe = f(
          function () {
            return W && M != null
              ? [
                  { maxContainerWidth: M + V * 2, width: V },
                  {
                    maxContainerWidth: 1 / 0,
                    width: "calc((100% - " + M + "px) / 2)",
                  },
                ]
              : W
                ? [{ maxContainerWidth: 1 / 0, width: V }]
                : [{ maxContainerWidth: 1 / 0, width: 0 }];
          },
          [M, W, V],
        ),
        ae = o("useContainerBreakpoints").useContainerBreakpoints(
          oe,
          o("useContainerBreakpoints").BreakpointRelationship
            .BiggerContainerBiggerChild,
        ),
        ie = ae[0],
        le = ae[1],
        se =
          M != null && typeof le == "string" && le.includes("min(")
            ? "max(" + V + "px, (100% - " + M + "px) / 2)"
            : le,
        ue = g(null),
        ce = c.Children.count(X.children),
        de = h(X.isCircular ? !1 : !y),
        me = de[0],
        pe = de[1],
        _e = h(X.isCircular ? !1 : y),
        fe = _e[0],
        ge = _e[1],
        he = g(!1);
      _(function () {
        var e,
          t = (e = ue.current) == null ? void 0 : e.getDOMNode();
        if (t != null && y) {
          var n = t.clientWidth,
            r = t.scrollLeft,
            o = t.scrollWidth;
          r > 50 && r > o - n - 50 && (he.current = !0);
        }
      }, []);
      var ye = r("useEventHandler")(function () {
          var e,
            t = (e = ue.current) == null ? void 0 : e.getDOMNode();
          if (t != null) {
            var n = t.getBoundingClientRect(),
              r = n.width,
              o = t.scrollLeft,
              a = t.scrollWidth;
            if (!X.isCircular)
              y && !v
                ? he.current
                  ? (pe(o > a - r - L), ge(o <= L))
                  : (pe(o >= -L), ge(o < -a + r + L))
                : (pe(o <= L), ge(o > a - r - L));
            else {
              var i = Te.current(t),
                l = i.childCards;
              if (l == null || l[0] == null) return;
              Re({ isRTL: y, isRTLScrollFromMaxScroll: he, scrollRef: ue });
            }
          }
        }),
        Ce = r("useBaseHScrollFakeCards")({
          children: X.isCircular ? X.children : [],
          fakeCardXStyle: X.isCircular ? X.fakeCardXStyle : null,
          gap: L,
          isCircular: (n = X.isCircular) != null ? n : !1,
          minWidth: J,
          onResize: function () {
            var e;
            ye();
            var t = (e = ue.current) == null ? void 0 : e.getDOMNode();
            t != null && r("setBaseHscrollChildrenAriaHidden")(t);
          },
          peek: W,
          peekWidth: V,
        }),
        be = Ce[0],
        ve = Ce[1],
        Se = Ce[2],
        Re = Ce[3],
        Le = r("useMergeRefs")(ne, ie, Se),
        Ee = p(r("HiddenSubtreePassiveContext"));
      (_(
        function () {
          var e = Ee.subscribeToChanges(function (e) {
            e.hidden || ye();
          });
          return function () {
            return e.remove();
          };
        },
        [Ee, ye],
      ),
        _(
          function () {
            ye();
          },
          [ce, ye],
        ));
      var ke = g(L);
      _(
        function () {
          ke.current = L;
        },
        [L],
      );
      var Ie = m(
          function (e) {
            var t = e.getBoundingClientRect(),
              n =
                M != null
                  ? Math.min(t.width - (W ? 2 * V : 0), M)
                  : W
                    ? t.width - 2 * V
                    : t.width,
              r = (t.width - n) / 2,
              o = t.left + r,
              a = t.right - r,
              i = Array.from(e.querySelectorAll('[data-type="hscroll-child"]'));
            return {
              childCards: i,
              containerLeft: o,
              containerRight: a,
              containerWidth: n,
            };
          },
          [M, W, V],
        ),
        Te = g(Ie);
      _(
        function () {
          Te.current = Ie;
        },
        [Ie],
      );
      var De = (be != null ? be : []).length;
      _(
        function () {
          var e,
            t = (e = ue.current) == null ? void 0 : e.getDOMNode();
          if (t != null) {
            if ($ == null && De === 0) {
              r("setBaseHscrollChildrenAriaHidden")(t);
              return;
            }
            var n = Te.current(t),
              o = n.childCards,
              a = 0;
            if ($ != null)
              for (var i = 0; i < Math.min($, o.length); i++)
                a += o[i].getBoundingClientRect().width + ke.current;
            if (De !== 0)
              for (
                var l = $ == null ? 0 : $, s = l;
                s < Math.min(l + De, o.length);
                s++
              )
                a += o[s].getBoundingClientRect().width + ke.current;
            var u = function (n) {
              x
                ? r("smoothScrollTo")(t, { left: n }, function () {
                    r("setBaseHscrollChildrenAriaHidden")(t);
                  })
                : (t.scrollTo(n, 0), r("setBaseHscrollChildrenAriaHidden")(t));
            };
            if (y && !v)
              if (he.current) {
                var c = t.scrollWidth - t.getBoundingClientRect().width;
                u(c - a);
              } else u(-a);
            else u(a);
          }
        },
        [$, x, De],
      );
      var xe = function () {
          var e,
            t = (e = ue.current) == null ? void 0 : e.getDOMNode();
          if (t != null) {
            r("setBaseHscrollChildrenAriaHidden")(t);
            for (
              var n = Ie(t),
                a = n.childCards,
                i = n.containerLeft,
                l = n.containerRight,
                s,
                u = y ? 0 : a.length - 1;
              y ? u < a.length : u >= 0;
              y ? u++ : u--
            ) {
              var c = a[u].getBoundingClientRect();
              if (c.left <= i - o("BaseHScrollConstants").WIGGLE_ROOM) {
                s = c;
                break;
              }
            }
            if (s != null) {
              var d = s.right - l;
              if (d !== 0) {
                var m = y && v ? t.scrollLeft - d : t.scrollLeft + d;
                (r("smoothScrollTo")(t, { left: m }, function () {
                  r("setBaseHscrollChildrenAriaHidden")(t);
                }),
                  F == null || F(),
                  ee(
                    r("getBaseHScrollAccessibilityAlert")(
                      m < 0 ? -t.scrollLeft : d,
                      t,
                      a,
                      i,
                      L,
                    ),
                  ));
              }
            }
          }
        },
        $e = function () {
          var e,
            t = (e = ue.current) == null ? void 0 : e.getDOMNode();
          if (t != null) {
            r("setBaseHscrollChildrenAriaHidden")(t);
            for (
              var n = Ie(t),
                a = n.childCards,
                i = n.containerLeft,
                l = n.containerRight,
                s,
                u = y ? a.length - 1 : 0;
              y ? u >= 0 : u < a.length;
              y ? u-- : u++
            ) {
              var c = a[u].getBoundingClientRect();
              if (c.right >= l + o("BaseHScrollConstants").WIGGLE_ROOM) {
                s = c;
                break;
              }
            }
            if (s != null) {
              var d = s.left - i;
              if (d !== 0) {
                var m = y && v ? t.scrollLeft - d : t.scrollLeft + d;
                (r("smoothScrollTo")(t, { left: m }, function () {
                  r("setBaseHscrollChildrenAriaHidden")(t);
                }),
                  A == null || A(),
                  ee(
                    r("getBaseHScrollAccessibilityAlert")(
                      m + t.clientWidth > t.scrollWidth
                        ? t.scrollWidth - t.scrollLeft - t.clientWidth
                        : d,
                      t,
                      a,
                      i,
                      L,
                    ),
                  ));
              }
            }
          }
        },
        Pe = function () {
          var e,
            t = (e = ue.current) == null ? void 0 : e.getDOMNode();
          t != null && r("setBaseHscrollChildrenAriaHidden")(t);
        },
        Ne = f(
          function () {
            return {
              role: G,
              spacing: re != null ? { gap: L, width: re } : null,
            };
          },
          [G, re, L],
        );
      E(ue, ce);
      var Me = W
          ? c.jsx(r("BaseHScrollPeek.react"), {
              maxContentWindowWidth: M,
              padding: U,
              width: V,
            })
          : void 0,
        we = W
          ? c.jsx(r("BaseHScrollPeek.react"), {
              maxContentWindowWidth: M,
              padding: q,
              width: V,
            })
          : void 0,
        Ae = G === "grid",
        Fe = r(
          Ae
            ? "BaseGridRowScrollableArea.react"
            : "BaseHScrollScrollableArea.react",
        ),
        Oe = r("useMergeRefs")(ue, j),
        Be = c.jsx(Fe, {
          addonEnd: c.jsxs(c.Fragment, { children: [ve, we] }),
          addonStart: c.jsxs(c.Fragment, { children: [Me, be] }),
          hideScrollbar: !0,
          horizontal: !0,
          onScroll: ye,
          onScrollEnd: Pe,
          ref: Oe,
          style: { scrollPadding: se },
          vertical: !1,
          xstyle: [
            I.scrollView,
            !S && I.scrollViewSnap,
            b && I.scrollViewNoScroll,
            K,
          ],
          children: X.children,
        }),
        We;
      switch (G) {
        case "grid":
          We = void 0;
          break;
        case "list":
          We = "list";
          break;
        default:
          We = a ? "region" : void 0;
          break;
      }
      var qe = We ? a : void 0;
      return c.jsxs(r("BaseView.react"), {
        ref: Le,
        testid: void 0,
        xstyle: O,
        children: [
          c.jsx("div", {
            "aria-hidden": T || !!me,
            className: (s || (s = r("stylex")))(
              I.buttonWrapper,
              (T || !!me) && I.hidden,
              i,
            ),
            style: y
              ? {
                  right: se != null && !Y ? se : W ? V : 0,
                  transform:
                    "translate(calc(" +
                    (!W && N ? 0 : 50) +
                    "% + " +
                    (W ? L / 2 : 0) +
                    "px), -50%)",
                }
              : {
                  left: se != null && !Y ? se : W ? V : 0,
                  transform:
                    "translate(calc(-" +
                    (!W && N ? 0 : 50) +
                    "% - " +
                    (W ? L / 2 : 0) +
                    "px), -50%)",
                },
            suppressHydrationWarning: !X.isCircular,
            children: H == null ? void 0 : H(y ? $e : xe, !!me),
          }),
          c.jsx(r("BaseView.react"), {
            "aria-label": qe,
            role: We,
            xstyle: [I.scrollContainer, d, z],
            children: c.jsx(r("BaseHScrollContext").Provider, {
              value: Ne,
              children: Ae
                ? c.jsx(r("BaseGrid.react"), {
                    "aria-label": a,
                    children: c.jsx(r("BaseGridRow.react"), { children: Be }),
                  })
                : Be,
            }),
          }),
          c.jsx("div", {
            "aria-hidden": T || !!fe,
            className: s(I.buttonWrapper, (T || !!fe) && I.hidden, i),
            style: y
              ? {
                  left: se != null && !Y ? se : W ? V : 0,
                  transform:
                    "translate(calc(-" +
                    (!W && N ? 0 : 50) +
                    "% - " +
                    (W ? L / 2 : 0) +
                    "px), -50%)",
                }
              : {
                  right: se != null && !Y ? se : W ? V : 0,
                  transform:
                    "translate(calc(" +
                    (!W && N ? 0 : 50) +
                    "% + " +
                    (W ? L / 2 : 0) +
                    "px), -50%)",
                },
            suppressHydrationWarning: !X.isCircular,
            children: w == null ? void 0 : w(y ? xe : $e, !!fe),
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t) {}
    var E = L;
    if (b) {
      var k = function (t, n) {
        var e,
          r = g(null);
        _(
          function () {
            var e,
              n = r.current,
              o = (e = t.current) == null ? void 0 : e.getDOMNode();
            n != null && o != null && (o.scrollLeft = n);
          },
          [n, t],
        );
        var o = (e = t.current) == null ? void 0 : e.getDOMNode();
        o != null && (r.current = o.scrollLeft);
      };
      E = k;
    }
    var I = {
      buttonWrapper: {
        opacity: "x1hc1fzr",
        position: "x10l6tqk",
        top: "xwa60dl",
        transitionDuration: "x1d8287x",
        transitionProperty: "x19991ni",
        transitionTimingFunction: "xwji4o3",
        zIndex: "x1vjfegm",
        $$css: !0,
      },
      containerPaddingDefault: {
        paddingBottom: "xwib8y2",
        paddingTop: "x1y1aw1k",
        $$css: !0,
      },
      hidden: { opacity: "xg01cxk", pointerEvents: "x47corl", $$css: !0 },
      scrollContainer: {
        marginBottom: "x1wsgfga",
        marginTop: "x9otpla",
        $$css: !0,
      },
      scrollView: {
        boxSizing: "x9f619",
        marginBottom: "xat24cr",
        paddingBottom: "xwib8y2",
        paddingTop: "x1y1aw1k",
        scrollbarWidth: "x1rohswg",
        $$css: !0,
      },
      scrollViewNoScroll: {
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0,
      },
      scrollViewSnap: { scrollSnapType: "xhfbhpw", $$css: !0 },
    };
    ((l.HScrollContainer = R), (l.HScrollChild = r("BaseHScrollChild")));
  },
  98,
);
