__d(
  "BaseContextualLayer.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BaseContextualLayerAnchorRootContext",
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerDefaultContainer.react",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BaseLinkNestedPressableContext",
    "BasePortal.react",
    "BaseScrollableAreaContext",
    "BaseViewportMarginsContext",
    "FDSTextContext",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "LayoutAnimationBoundaryContext",
    "LayoutAnimationEvents",
    "Locale",
    "calculateBaseContextualLayerPosition",
    "focusScopeQueries",
    "getComputedStyle",
    "gkx",
    "isElementFixedOrSticky",
    "justknobx",
    "mergeRefs",
    "react",
    "useLayoutAnimationEvents",
    "useResizeObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "align",
        "anchorRef",
        "disableAutoAlign",
        "children",
        "containFocus",
        "customContainer",
        "disableAutoFlip",
        "hidden",
        "imperativeRef",
        "onEscapeFocusRegion",
        "onIndeterminatePosition",
        "ownerDocument",
        "presencePayload",
        "reflowToPosition",
        "position",
        "restoreFocus",
        "stopClickPropagation",
        "xstyle",
        "disablePositioning_DO_NOT_USE",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useImperativeHandle,
      g = d.useLayoutEffect,
      h = d.useMemo,
      y = d.useReducer,
      C = d.useRef,
      b = d.useState;
    function v(e) {
      var t = e.getBoundingClientRect();
      return { bottom: t.bottom, left: t.left, right: t.right, top: t.top };
    }
    function S() {
      var e,
        t,
        n =
          (e =
            (t = document.documentElement) == null ? void 0 : t.scrollHeight) !=
          null
            ? e
            : 0,
        r = window.innerHeight,
        o = n - r;
      return Math.max(0, o - window.pageYOffset);
    }
    function R(e) {
      var t, n;
      return (t =
        (n = e[e.length - 1]) == null || (n = n.getDOMNode()) == null
          ? void 0
          : n.scrollTop) != null
        ? t
        : window.pageYOffset;
    }
    function L(e) {
      var t = (s || (s = r("getComputedStyle")))(e);
      return t != null && t.getPropertyValue("position") !== "static"
        ? e
        : (e instanceof HTMLElement && e.offsetParent) ||
            e.ownerDocument.documentElement;
    }
    var E = 8,
      k = 40,
      I = 145;
    function T(e, t) {
      return e.bottom < t.top ||
        t.bottom < e.top ||
        e.right < t.left ||
        t.right < t.left
        ? null
        : {
            bottom: Math.min(e.bottom, t.bottom),
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
          };
    }
    var D = o("Locale").isRTL(),
      x = {
        root: {
          left: "xu96u03",
          insetInlineStart: null,
          insetInlineEnd: null,
          marginRight: "xm80bdy",
          marginInlineStart: null,
          marginInlineEnd: null,
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        rootReflowToPosition: {
          marginRight: "x1yf7rl7",
          marginInlineStart: null,
          marginInlineEnd: null,
          top: "x80663w",
          $$css: !0,
        },
      };
    function $(e) {
      return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: !1,
        position: e,
      };
    }
    function P(e, t) {
      var n, r, o, a;
      switch (t.type) {
        case "determine_direction":
          if (
            e.position !== t.position ||
            e.availableHeight !== t.availableHeight
          )
            return babelHelpers.extends({}, e, {
              availableHeight: t.availableHeight,
              position: t.position,
            });
          break;
        case "reposition":
          if (
            e.adjustment !== t.adjustment ||
            ((n = e.contextSize) == null ? void 0 : n.height) !==
              ((r = t.contextSize) == null ? void 0 : r.height) ||
            ((o = e.contextSize) == null ? void 0 : o.width) !==
              ((a = t.contextSize) == null ? void 0 : a.width)
          )
            return babelHelpers.extends({}, e, {
              adjustment: t.adjustment,
              contextSize: t.contextSize,
              isPositionIndeterminate: !1,
            });
          break;
        case "position_indeterminate":
          return babelHelpers.extends({}, e, { isPositionIndeterminate: !0 });
        case "position_changed":
          if (e.position !== t.position)
            return babelHelpers.extends({}, e, { position: t.position });
          break;
      }
      return e;
    }
    function N(t) {
      "use no forget";
      var n,
        a = t.ref,
        i = t.align,
        l = i === void 0 ? "start" : i,
        s = t.anchorRef,
        u = t.disableAutoAlign,
        d = u === void 0 ? !1 : u,
        N = t.children,
        M = t.containFocus,
        w = M === void 0 ? !1 : M,
        A = t.customContainer,
        F = A === void 0 ? r("BaseContextualLayerDefaultContainer.react") : A,
        O = t.disableAutoFlip,
        B = O === void 0 ? !1 : O,
        W = t.hidden,
        q = W === void 0 ? !1 : W,
        U = t.imperativeRef,
        V = t.onEscapeFocusRegion,
        H = t.onIndeterminatePosition,
        G = t.ownerDocument,
        z = t.presencePayload,
        j = t.reflowToPosition,
        K = j === void 0 ? !1 : j,
        Q = t.position,
        X = Q === void 0 ? "below" : Q,
        Y = t.restoreFocus,
        J = Y === void 0 ? !0 : Y,
        Z = t.stopClickPropagation,
        ee = Z === void 0 ? !1 : Z,
        te = t.xstyle,
        ne = t.disablePositioning_DO_NOT_USE,
        re = ne === void 0 ? !1 : ne,
        oe = babelHelpers.objectWithoutPropertiesLoose(t, e),
        ae = X === "auto" ? "below" : X,
        ie = y(P, ae, $),
        le = ie[0],
        se = le.adjustment,
        ue = le.availableHeight,
        ce = le.contextSize,
        de = le.isPositionIndeterminate,
        me = le.position,
        pe = ie[1],
        _e = p(r("BaseContextualLayerAnchorRootContext")),
        fe = p(r("BaseScrollableAreaContext")),
        ge = K ? !0 : B,
        he = K ? !0 : d,
        ye = p(r("BaseViewportMarginsContext")),
        Ce = p(r("LayoutAnimationBoundaryContext")),
        be = b(!1),
        ve = be[0],
        Se = be[1],
        Re = p(r("HiddenSubtreeContext")),
        Le = Re.hidden,
        Ee = Le || q,
        ke = C(null),
        Ie = C(null),
        Te = m(
          function () {
            return oe.context_DEPRECATED == null && oe.contextRef != null
              ? oe.contextRef.current
              : oe.context_DEPRECATED;
          },
          [oe.contextRef, oe.context_DEPRECATED],
        ),
        De = m(
          function () {
            var e = G != null ? G : document,
              t = e.documentElement;
            if (t != null)
              return {
                bottom: t.clientHeight - ye.bottom - E,
                left: ye.left + E,
                right: t.clientWidth - ye.right - E,
                top: ye.top + E,
              };
          },
          [G, ye.bottom, ye.left, ye.right, ye.top],
        ),
        xe = null;
      K && (xe = S());
      var $e = m(
          function () {
            var e = ke.current,
              t = Te(),
              n = De();
            if (!(e == null || t == null || n == null)) {
              var o = v(t),
                a = v(e),
                i = a.bottom - a.top,
                l = a.right - a.left,
                u = D ? "start" : "end",
                c = D ? "end" : "start",
                d = me,
                m = null;
              if (!ge)
                if (me === "above" || me === "below") {
                  var p = o.top - i < n.top && o.bottom + i < n.bottom,
                    _ = o.bottom + i > n.bottom && o.top - i > n.top;
                  (me === "above" && R(fe) + o.top < i && p) ||
                  (me === "above" && p)
                    ? (d = "below")
                    : me === "below" && _ && (d = "above");
                } else
                  (me === "start" || me === "end") &&
                    (me === c && o.left - l < n.left && o.right + l < n.right
                      ? (d = u)
                      : me === u &&
                        o.right + l > n.right &&
                        o.left - l > n.left &&
                        (d = c));
              if (
                (d === "above" || d === "below"
                  ? (m = d === "above" ? o.top - n.top : n.bottom - o.bottom)
                  : (d === "start" || d === "end") &&
                    (m = Math.max(n.bottom, o.bottom) - Math.min(o.top, n.top)),
                K && xe !== null)
              ) {
                var f,
                  g,
                  h,
                  y =
                    (f = s == null ? void 0 : s.current) != null
                      ? f
                      : _e.current,
                  C = y ? r("isElementFixedOrSticky")(y) : !1,
                  b = !C && t.nodeType === 1 && r("isElementFixedOrSticky")(t),
                  S =
                    ((g = n == null ? void 0 : n.bottom) != null ? g : 0) -
                    ((h = n == null ? void 0 : n.top) != null ? h : 0),
                  L = b ? 0 : xe,
                  E = L + S - k,
                  T = L + n.bottom - o.bottom;
                m = Math.max(Math.min(E, T), I);
              }
              ((Ie.current = { height: i, width: l }),
                pe({
                  availableHeight: m,
                  position: d,
                  type: "determine_direction",
                }));
            }
          },
          [Te, De, me, ge, K, fe, _e, xe, s],
        ),
        Pe = null;
      K && (Pe = ue);
      var Ne = m(
          function () {
            var e,
              t = document.documentElement,
              n = (e = s == null ? void 0 : s.current) != null ? e : _e.current,
              o = De(),
              a = Te(),
              i = ke.current;
            if (
              !(t == null || n == null || o == null || a == null || i == null)
            ) {
              var u = v(i),
                c = L(n);
              if (c != null) {
                var d = r("isElementFixedOrSticky")(n),
                  m = !d && a.nodeType === 1 && r("isElementFixedOrSticky")(a),
                  p = fe
                    .map(function (e) {
                      return e.getDOMNode();
                    })
                    .filter(Boolean)
                    .filter(function (e) {
                      return c.contains(e);
                    })
                    .reduce(function (e, t) {
                      return e != null ? T(e, v(t)) : null;
                    }, v(a));
                if (p == null || (p.left === 0 && p.right === 0)) {
                  (pe({ type: "position_indeterminate" }), H && H());
                  return;
                }
                var _ = m
                    ? {
                        bottom: t.clientHeight,
                        left: 0,
                        right: t.clientWidth,
                        top: 0,
                      }
                    : v(c),
                  f = r("calculateBaseContextualLayerPosition")({
                    align: l,
                    contextRect: p,
                    contextualLayerSize: he ? null : Ie.current,
                    fixed: m,
                    offsetRect: _,
                    position: me,
                    screenRect: o,
                  }),
                  g = f.adjustment,
                  h = f.style,
                  y = h;
                if (
                  r("justknobx")._("432") &&
                  ((y = babelHelpers.extends(
                    {
                      left: null,
                      "max-height": null,
                      position: null,
                      right: null,
                      top: null,
                      "z-index": null,
                    },
                    h,
                  )),
                  K === !0)
                ) {
                  var C = u.bottom - u.top,
                    b = o.bottom - p.bottom,
                    R = C - b,
                    E = m ? 0 : S(),
                    k = p.bottom - _.top;
                  R - E > 0 && (k -= R);
                  var I = o.left - _.left,
                    D = o.right - o.left;
                  y = {
                    left: I + "px",
                    "max-height": (Pe != null ? Pe : 0) + "px",
                    position: m ? "fixed" : "absolute",
                    top: k + "px",
                    width: D + "px",
                    "z-index": r("gkx")("7742") ? "299" : "3",
                  };
                }
                if (i != null)
                  for (var x = Object.keys(y), $ = 0; $ < x.length; $++) {
                    var P = x[$],
                      N = y[P];
                    N != null
                      ? i.style.setProperty(P, N)
                      : i.style.removeProperty(P);
                  }
                pe({
                  adjustment: g,
                  contextSize: {
                    height: p.bottom - p.top,
                    width: p.right - p.left,
                  },
                  type: "reposition",
                });
              }
            }
          },
          [_e, De, Te, fe, he, l, me, H, Pe, K],
        ),
        Me = m(
          function (e) {
            (e === o("LayoutAnimationEvents").LayoutAnimationEventType.Start &&
              Se(!0),
              e === o("LayoutAnimationEvents").LayoutAnimationEventType.Stop &&
                (Se(!1), Ne()));
          },
          [Ne, Se],
        );
      (g(
        function () {
          re ||
            (Ce != null &&
              Ce.getIsAnimating() &&
              Me(o("LayoutAnimationEvents").LayoutAnimationEventType.Start));
        },
        [Ce, Me],
      ),
        r("useLayoutAnimationEvents")(Me),
        f(
          U,
          function () {
            return {
              reposition: function (t) {
                if (!Ee) {
                  var e = t || {},
                    n = e.autoflip,
                    r = n === void 0 ? !1 : n;
                  (r && $e(), Ne());
                }
              },
            };
          },
          [Ee, Ne, $e],
        ));
      var we = r("useResizeObserver")(function (e) {
          var t = e.height,
            n = e.width;
          ((Ie.current = { height: t, width: n }), Ne());
        }),
        Ae = C(ae);
      g(
        function () {
          re ||
            (ae !== Ae.current &&
              (pe({ position: ae, type: "position_changed" }),
              Ee || ($e(), Ne()),
              (Ae.current = ae)));
        },
        void 0,
      );
      var Fe = m(
        function (e) {
          ((ke.current = e), e != null && !Ee && ($e(), Ne()));
        },
        [Ee, Ne, $e],
      );
      (_(
        function () {
          if (!re && !Ee) {
            var e = Te(),
              t = new ResizeObserver(function () {
                ($e(), Ne());
              });
            if (!(e == null || !(e instanceof HTMLElement)))
              return (
                t.observe(e),
                function () {
                  t.disconnect();
                }
              );
          }
        },
        [Te, $e, Ne, Ee],
      ),
        _(
          function () {
            if (!re && !Ee) {
              var e = function () {
                ($e(), Ne());
              };
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }
          },
          [Ee, Ne, $e],
        ),
        _(
          function () {
            if (!re && !Ee) {
              var e = fe
                .map(function (e) {
                  return e.getDOMNode();
                })
                .filter(Boolean);
              if (e.length > 0)
                return (
                  e.forEach(function (e) {
                    return e.addEventListener("scroll", Ne, { passive: !0 });
                  }),
                  function () {
                    e.forEach(function (e) {
                      return e.removeEventListener("scroll", Ne);
                    });
                  }
                );
            }
          },
          [Ee, Ne, fe],
        ),
        _(
          function () {
            if (!re && !(window.addEventListener == null || Ee))
              return (
                window.addEventListener("scroll", Ne, { passive: !0 }),
                function () {
                  window.removeEventListener("scroll", Ne);
                }
              );
          },
          [Ee, Ne],
        ));
      var Oe = h(
          function () {
            return r("mergeRefs")(Fe, we, a);
          },
          [Fe, we, a],
        ),
        Be = h(
          function () {
            return { align: l, position: me === "auto" ? "below" : me };
          },
          [l, me],
        ),
        We = q || de;
      if (re) {
        var qe;
        return c.jsx(r("BasePortal.react"), {
          target:
            (qe = s == null ? void 0 : s.current) != null ? qe : _e.current,
          children: c.jsx(F, {
            hidden: q || de || ve,
            presencePayload: z,
            stopClickPropagation: ee,
            testid: void 0,
            xstyle: [x.root, K === !0 ? x.rootReflowToPosition : null, te],
            children: c.jsx(o("FocusRegion.react").FocusRegion, {
              autoFocusQuery:
                !We && w
                  ? o("focusScopeQueries").headerFirstTabbableSecondScopeQuery
                  : null,
              autoRestoreFocus: !We && J,
              containFocusQuery:
                !We && w ? o("focusScopeQueries").tabbableScopeQuery : null,
              onEscapeFocusRegion: V,
              recoverFocusQuery: We
                ? null
                : o("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              children: c.jsx(r("BaseLinkNestedPressableContext").Provider, {
                value: !1,
                children: c.jsx(o("FDSTextContext").FDSTextContextProvider, {
                  color: null,
                  type: null,
                  children: N,
                }),
              }),
            }),
          }),
        });
      }
      return c.jsx(r("BasePortal.react"), {
        target: (n = s == null ? void 0 : s.current) != null ? n : _e.current,
        children: c.jsx(F, {
          hidden: q || de || ve,
          presencePayload: z,
          ref: Oe,
          stopClickPropagation: ee,
          testid: void 0,
          xstyle: [x.root, K === !0 ? x.rootReflowToPosition : null, te],
          children: c.jsx(o("FocusRegion.react").FocusRegion, {
            autoFocusQuery:
              !We && w
                ? o("focusScopeQueries").headerFirstTabbableSecondScopeQuery
                : null,
            autoRestoreFocus: !We && J,
            containFocusQuery:
              !We && w ? o("focusScopeQueries").tabbableScopeQuery : null,
            onEscapeFocusRegion: V,
            recoverFocusQuery: We
              ? null
              : o("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            children: c.jsx(r("BaseContextualLayerAnchorRoot.react"), {
              children: c.jsx(
                r("BaseContextualLayerContextSizeContext").Provider,
                {
                  value: ce,
                  children: c.jsx(
                    r("BaseContextualLayerLayerAdjustmentContext").Provider,
                    {
                      value: se,
                      children: c.jsx(
                        r("BaseContextualLayerAvailableHeightContext").Provider,
                        {
                          value: ue,
                          children: c.jsx(
                            r("BaseContextualLayerOrientationContext").Provider,
                            {
                              value: Be,
                              children: c.jsx(
                                r("BaseLinkNestedPressableContext").Provider,
                                {
                                  value: !1,
                                  children: c.jsx(
                                    o("FDSTextContext").FDSTextContextProvider,
                                    { color: null, type: null, children: N },
                                  ),
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            }),
          }),
        }),
      });
    }
    ((N.displayName = N.name + " [from " + i.id + "]"), (l.default = N));
  },
  98,
);
