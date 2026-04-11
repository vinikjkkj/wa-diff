__d(
  "BaseTooltipImpl.react",
  [
    "BaseAnchorPositioningUtils",
    "BaseTooltipContainer.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometPlaceholder.react",
    "cr:20267",
    "cr:20391",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useCometDisplayTimingTrackerForInteraction",
    "useFadeEffect",
    "useTooltipDelayedContent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "alignOffsetXstyle",
        "loadingState",
        "offset",
        "contentKey",
        "delayContentMs",
        "headline",
        "id",
        "isVisible",
        "themeWrapper",
        "contentColor",
        "contentType",
        "shouldShowCarat",
        "tooltip",
        "tooltipTheme",
        "xstyle",
        "contextualLayerXstyle",
        "position",
        "stopClickPropagation",
        "align",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useLayoutEffect,
      m = c.useRef,
      p = {
        loadingState: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.contextualLayerRef,
        r,
        a;
      return (
        t[0] !== n
          ? ((r = function () {
              var e = n.current;
              e && e.reposition({ autoflip: !0 });
            }),
            (a = [n]),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : ((r = t[1]), (a = t[2])),
        d(r, a),
        null
      );
    }
    function f(t) {
      "use no forget";
      var a,
        l = t.alignOffsetXstyle,
        s = t.loadingState,
        c = t.offset,
        d = t.contentKey,
        f = t.delayContentMs,
        g = f === void 0 ? 0 : f,
        h = t.headline,
        y = t.id,
        C = t.isVisible,
        b = t.themeWrapper,
        v = b === void 0 ? u.Fragment : b,
        S = t.contentColor,
        R = t.contentType,
        L = t.shouldShowCarat,
        E = t.tooltip,
        k = t.tooltipTheme,
        I = t.xstyle,
        T = t.contextualLayerXstyle,
        D = t.position,
        x = t.stopClickPropagation,
        $ = t.align,
        P = $ === void 0 ? "middle" : $,
        N = babelHelpers.objectWithoutPropertiesLoose(t, e),
        M = m(null),
        w = r("useFadeEffect")(C),
        A = w[0],
        F = w[1],
        O = w[2],
        B = r("useCometDisplayTimingTrackerForInteraction")("ToolTip"),
        W = r("useTooltipDelayedContent")({ delayContentMs: g, isVisible: C }),
        q = W.isPending,
        U = m(null),
        V = N.anchorPosName,
        H = (a = N.anchorPosRef) != null ? a : U,
        G = o(
          "BaseAnchorPositioningUtils",
        ).contextualLayerToAnchorPositionAreaCompat(D, P),
        z = G[0],
        j = G[1],
        K = n("cr:20267")(V, H, {
          blockPositionArea: z,
          inlinePositionArea: j,
          tryFallbacks: "flip-block",
        }),
        Q,
        X;
      K != null && ((Q = K[0]), (X = K[1]));
      var Y = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment(),
        J = Y
          ? { anchorRef: H, anchorTargetRef: X, anchorTargetXstyle: Q }
          : {},
        Z = babelHelpers.extends({ align: P }, N, {
          imperativeRef: M,
          offset: c,
          ownerDocument: N.ownerDocument,
          position: D,
          ref: B,
          stopClickPropagation: x,
          vrPassTouchesThrough: !0,
          xstyle: T,
        });
      if (E == null || !A) return null;
      var ee = u.jsx(v, {
        children: u.jsx(
          r("BaseTooltipContainer.react"),
          babelHelpers.extends({}, J, {
            align: P,
            alignOffsetXstyle: l,
            closeButton: null,
            id: y,
            position: D,
            ref: O,
            shouldFadeIn: F,
            shouldShowCarat: L,
            withCloseButton: !1,
            xstyle: I,
            children: q
              ? u.jsx(o("react-strict-dom").html.div, {
                  style: p.loadingState,
                  children: s,
                })
              : u.jsxs(
                  r("CometPlaceholder.react"),
                  {
                    fallback: s,
                    name: i.id,
                    children: [
                      u.jsx(_, { contextualLayerRef: M }),
                      typeof E == "string"
                        ? u.jsx(o("react-strict-dom").html.span, {
                            children: E,
                          })
                        : E,
                    ],
                  },
                  d,
                ),
          }),
        ),
      });
      return u.jsx(r("CometHeroInteractionContextPassthrough.react"), {
        clear: !0,
        children: u.jsx(
          n("cr:20391"),
          babelHelpers.extends({}, Z, { children: ee }),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
