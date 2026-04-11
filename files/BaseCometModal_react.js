__d(
  "BaseCometModal.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BaseDocumentScrollView.react",
    "BaseHeadingContext",
    "BasePortal.react",
    "BaseThemeProvider.react",
    "CometDialogTransitionTypes",
    "CometHeroInteractionContextPassthrough.react",
    "CometHeroInteractionWithDiv.react",
    "CometLayerKeyCommandWrapper.react",
    "CometVisualCompletionAttributes",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "cr:1024",
    "cr:1829844",
    "focusScopeQueries",
    "getGeoAndCometModalCompatible",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometVisualChangeTracker",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.unstable_ViewTransition,
      m = c.useContext,
      p = {
        content: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          minHeight: "xg6iff7 xippug5",
          position: "x1n2onr6",
          $$css: !0,
        },
        hidden: { visibility: "xlshs6z", $$css: !0 },
        mask: {
          bottom: "x1ey2m1c",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          position: "xixxii4",
          top: "x13vifvy",
          $$css: !0,
        },
        maskOverlay: { backgroundColor: "x1h0vfkc", $$css: !0 },
        root: { position: "x1n2onr6", $$css: !0 },
        rootStatic: { position: "x1uhb9sk", $$css: !0 },
      },
      _ = {
        "above-everything": { zIndex: "x1vjfegm", $$css: !0 },
        "above-nav": { zIndex: "xzkaem6", $$css: !0 },
        normal: { zIndex: "x1ja2u2z", $$css: !0 },
      };
    function f(t) {
      var a = o("react-compiler-runtime").c(40),
        i = t.backdropXStyle,
        l = t.blockKeyCommands,
        s = t.children,
        c = t.contextKey,
        f = t.disableGeoToCometModalsCompatibility_DO_NOT_USE,
        g = t.hidden,
        h = t.ignoreVC,
        y = t.interactionDesc,
        C = t.interactionUUID,
        b = t.isHiddenSubtreeContextHidden,
        v = t.isOverlayTransparent,
        S = t.noPortal,
        R = t.stackingBehavior,
        L = t.unstable_animateEnter,
        E = t.unstable_animateExit,
        k = l === void 0 ? !1 : l,
        I = f === void 0 ? !1 : f,
        T = g === void 0 ? !1 : g,
        D = h === void 0 ? !1 : h,
        x = b === void 0 ? !1 : b,
        $ = v === void 0 ? !1 : v,
        P = S === void 0 ? !1 : S,
        N = R === void 0 ? "auto" : R,
        M = L === void 0 ? !1 : L,
        w = E === void 0 ? !1 : E,
        A = m(r("HiddenSubtreeContext")),
        F = A.hidden,
        O;
      a[0] !== C
        ? ((O = function () {
            return C !== void 0;
          }),
          (a[0] = C),
          (a[1] = O))
        : (O = a[1]);
      var B = r("useStable")(O),
        W = r("useCometVisualChangeTracker")(),
        q;
      a[2] !== i || a[3] !== $
        ? ((q = (e || (e = r("stylex"))).props(p.mask, !$ && p.maskOverlay, i)),
          (a[2] = i),
          (a[3] = $),
          (a[4] = q))
        : (q = a[4]);
      var U;
      a[5] !== q
        ? ((U = u.jsx("div", babelHelpers.extends({}, q))),
          (a[5] = q),
          (a[6] = U))
        : (U = a[6]);
      var V;
      a[7] !== k || a[8] !== s
        ? ((V = k
            ? s
            : u.jsx(r("CometLayerKeyCommandWrapper.react"), {
                debugName: "modal layer",
                children: s,
              })),
          (a[7] = k),
          (a[8] = s),
          (a[9] = V))
        : (V = a[9]);
      var H;
      a[10] !== V
        ? ((H = u.jsx(r("BaseContextualLayerAnchorRoot.react"), {
            children: u.jsx(o("FocusRegion.react").FocusRegion, {
              autoFocusQuery:
                o("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: o("focusScopeQueries").tabbableScopeQuery,
              recoverFocusQuery:
                o("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              children: V,
            }),
          })),
          (a[10] = V),
          (a[11] = H))
        : (H = a[11]);
      var G;
      a[12] !== U || a[13] !== H
        ? ((G = u.jsxs(u.Fragment, { children: [U, H] })),
          (a[12] = U),
          (a[13] = H),
          (a[14] = G))
        : (G = a[14]);
      var z = G;
      if (n("cr:1829844") != null) {
        var j;
        (a[15] !== z
          ? ((j = u.jsx(n("cr:1829844"), { name: "modal", children: z })),
            (a[15] = z),
            (a[16] = j))
          : (j = a[16]),
          (z = j));
      }
      var K = F ? "normal" : N,
        Q = K === "auto" ? p.rootStatic : p.root,
        X = T && p.hidden,
        Y =
          K !== "auto" &&
          (n("cr:1024") != null && !I && r("getGeoAndCometModalCompatible")()
            ? n("cr:1024")[K]
            : _[K]),
        J;
      a[17] !== Q || a[18] !== X || a[19] !== Y
        ? ((J = [Q, X, Y]), (a[17] = Q), (a[18] = X), (a[19] = Y), (a[20] = J))
        : (J = a[20]);
      var Z = J,
        ee;
      a[21] !== z || a[22] !== y || a[23] !== C || a[24] !== W || a[25] !== B
        ? ((ee = u.jsx(r("BaseHeadingContext").Provider, {
            value: 1,
            children: B
              ? u.jsx(r("CometHeroInteractionContextPassthrough.react"), {
                  clear: !0,
                  children: u.jsx(r("CometHeroInteractionWithDiv.react"), {
                    interactionDesc: y,
                    interactionUUID: C,
                    ref: W,
                    xstyle: p.content,
                    children: z,
                  }),
                })
              : u.jsx("div", {
                  className: "x78zum5 xdt5ytf xg6iff7 xippug5 x1n2onr6",
                  ref: W,
                  children: z,
                }),
          })),
          (a[21] = z),
          (a[22] = y),
          (a[23] = C),
          (a[24] = W),
          (a[25] = B),
          (a[26] = ee))
        : (ee = a[26]);
      var te;
      a[27] !== c || a[28] !== T || a[29] !== x || a[30] !== ee
        ? ((te = u.jsx(r("BaseDocumentScrollView.react"), {
            contextKey: c,
            hiddenWhenDetached: T,
            isHiddenSubtreeContextHidden: x,
            children: ee,
          })),
          (a[27] = c),
          (a[28] = T),
          (a[29] = x),
          (a[30] = ee),
          (a[31] = te))
        : (te = a[31]);
      var ne = te,
        re;
      if (
        a[32] !== F ||
        a[33] !== D ||
        a[34] !== P ||
        a[35] !== Z ||
        a[36] !== ne ||
        a[37] !== M ||
        a[38] !== w
      ) {
        var oe, ae;
        ((re = P
          ? u.jsx(r("BaseThemeProvider.react"), {
              children: function (n, o) {
                return u.jsx("div", {
                  className: (e || (e = r("stylex")))(n, Z),
                  style: o,
                  children: ne,
                });
              },
            })
          : M || w
            ? u.jsx(d, {
                enter: "none",
                exit:
                  ((oe = {}),
                  (oe[r("CometDialogTransitionTypes").Exit] = "root"),
                  (oe.default = "none"),
                  oe),
                update:
                  ((ae = {}),
                  (ae[r("CometDialogTransitionTypes").Enter] = "root"),
                  (ae.default = "none"),
                  ae),
                children: u.jsx(
                  r("BasePortal.react"),
                  babelHelpers.extends(
                    { hidden: F, xstyle: Z },
                    D ? r("CometVisualCompletionAttributes").IGNORE : {},
                    { children: ne },
                  ),
                ),
              })
            : u.jsx(
                r("BasePortal.react"),
                babelHelpers.extends(
                  { hidden: F, xstyle: Z },
                  D ? r("CometVisualCompletionAttributes").IGNORE : {},
                  { children: ne },
                ),
              )),
          (a[32] = F),
          (a[33] = D),
          (a[34] = P),
          (a[35] = Z),
          (a[36] = ne),
          (a[37] = M),
          (a[38] = w),
          (a[39] = re));
      } else re = a[39];
      return re;
    }
    l.default = f;
  },
  98,
);
