__d(
  "MAIBAComposerButtonGroup",
  [
    "GeoFlexbox.react",
    "Laminar",
    "MAIBAChatAppStore",
    "MAIBAChatAppUIProvider",
    "MAIBAChatNavigationContext",
    "MAIBAComposerAddAttachmentMenu.react",
    "MAIBAComposerAssetManager.react",
    "MAIBAComposerAssetSelectorButton.react",
    "MAIBAComposerTemplateSelectorButton.react",
    "MAIBAComposerThinkingToggle.react",
    "MAIBAGKUtils",
    "MAIBAR23ExperimentUtils",
    "react",
    "useMAIBAChatAssetSelectionContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["isAssetSelectorDisabled", "isMobileWebview"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        overflowConstraint: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.isAssetSelectorDisabled,
        a = n === void 0 ? !1 : n,
        i = t.isMobileWebview,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = m(null),
        c = p(!1),
        f = c[0],
        g = c[1],
        h = p(0),
        y = h[0],
        C = h[1],
        b = o(
          "useMAIBAChatAssetSelectionContext",
        ).useMAIBAChatAssetSelectionContext(),
        v = b.selectedAssets,
        S = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        R = S.isMobileWebview,
        L = R === void 0 ? !1 : R,
        E = i != null ? i : L,
        k = v.length > 0,
        I = o("MAIBAChatAppStore").useMAIBAChatAppState(),
        T = I.chatWindowWidth,
        D = o("MAIBAChatAppStore").shouldUseLaminarForMAIBA(),
        x = o("Laminar").useProvider(
          r("MAIBAChatAppUIProvider"),
        ).chatWindowWidth,
        $ = D ? x : T,
        P = $ - 90;
      return (
        d(
          function () {
            var e = s.current;
            if (e) {
              var t = new ResizeObserver(function (e) {
                for (var t of e) {
                  var n = t.target.scrollWidth;
                  n > y && !k && C(n);
                  var r = y > P;
                  g(k || r);
                }
              });
              return (
                t.observe(e),
                function () {
                  return t.disconnect();
                }
              );
            }
          },
          [k, y, P],
        ),
        u.jsxs(r("GeoFlexbox.react"), {
          alignItems: "center",
          containerRef: s,
          gap: 8,
          xstyle:
            o("MAIBAGKUtils").isMAIBADesignFixathonEnabled() &&
            _.overflowConstraint,
          children: [
            u.jsx(
              r("MAIBAComposerAddAttachmentMenu.react"),
              babelHelpers.extends(
                {
                  impressionSource: "organic_chat",
                  isCompact: f,
                  isMediaLibraryEligible: o(
                    "MAIBAR23ExperimentUtils",
                  ).isE2EOrganicEligible(),
                  mode: "in_conversation",
                },
                l,
              ),
            ),
            u.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              gap: 4,
              xstyle:
                o("MAIBAGKUtils").isMAIBADesignFixathonEnabled() &&
                _.overflowConstraint,
              children: [
                !E &&
                  u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(r("MAIBAComposerAssetSelectorButton.react"), {
                        hasBorder: !0,
                        isCompact: f,
                        isDisabled: a,
                        popoverAnchorRef: s,
                      }),
                      u.jsx(r("MAIBAComposerThinkingToggle.react"), {}),
                      u.jsx(r("MAIBAComposerTemplateSelectorButton.react"), {
                        hasBorder: !0,
                        isCompact: f,
                        popoverAnchorRef: s,
                      }),
                    ],
                  }),
                k &&
                  u.jsx(r("MAIBAComposerAssetManager.react"), {
                    popoverAnchorRef: s,
                    selectedAssets: v,
                  }),
              ],
            }),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
