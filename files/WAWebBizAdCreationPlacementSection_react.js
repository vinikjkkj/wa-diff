__d(
  "WAWebBizAdCreationPlacementSection.react",
  [
    "fbt",
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPlacementInfoModal.react",
    "WAWebBizAdCreationPlacementListCell.react",
    "WAWebBizAdCreationPlacementSection_boostedComponentWrapper.graphql",
    "WAWebBizAdCreationSectionNotices.react",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "isArrayNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationSAFRContext",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useRef;
    function g(t) {
      var a,
        i = o("react-compiler-runtime").c(23),
        l = t.fragmentRef,
        u = t.selectedPublisherPlatforms,
        d = p(r("WAWebBizAdCreationLoggerContext")),
        m = f(!1),
        g = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationPlacementSection_boostedComponentWrapper.graphql",
              )),
          l,
        ),
        y = r("useWAWebBizAdCreationSAFRContext")(),
        C = y.placementBlocklistConfig,
        b;
      if (
        i[0] !==
          (g == null || (a = g.options) == null
            ? void 0
            : a.eligible_publisher_platforms) ||
        i[1] !== C
      ) {
        var v, S;
        ((b =
          g == null ||
          (v = g.options) == null ||
          (v = v.eligible_publisher_platforms) == null
            ? void 0
            : v.filter(function (e) {
                var t = e.type;
                return t != null && !(C != null && C.has(t));
              })),
          (i[0] =
            g == null || (S = g.options) == null
              ? void 0
              : S.eligible_publisher_platforms),
          (i[1] = C),
          (i[2] = b));
      } else b = i[2];
      var R = b,
        L;
      i[3] !== d
        ? ((L = function () {
            (d != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "placements_info_click",
                loggerContext: d,
              }),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizAdCreationPlacementInfoModal.react"), {}),
              ));
          }),
          (i[3] = d),
          (i[4] = L))
        : (L = i[4]);
      var E = L,
        k;
      i[5] !== E
        ? ((k = c.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcInfo.react"),
            onPress: E,
            size: "small",
            variant: "borderless",
          })),
          (i[5] = E),
          (i[6] = k))
        : (k = i[6]);
      var I = k,
        T,
        D;
      if (
        (i[7] !== R || i[8] !== d || i[9] !== u
          ? ((T = function () {
              if (d != null && !m.current && !r("isArrayNullOrEmpty")(R)) {
                var e;
                ((m.current = !0),
                  r("WAWebBizAdLogger").logCritical({
                    event: "placements_section_impression",
                    loggerContext: d,
                    extra: {
                      selected_platforms: u.join(", "),
                      eligible_platforms:
                        (e = R == null ? void 0 : R.map(h).join(", ")) != null
                          ? e
                          : "",
                    },
                  }));
              }
            }),
            (D = [R, d, u]),
            (i[7] = R),
            (i[8] = d),
            (i[9] = u),
            (i[10] = T),
            (i[11] = D))
          : ((T = i[10]), (D = i[11])),
        _(T, D),
        r("isArrayNullOrEmpty")(R))
      )
        return (
          r("FBLogger")("wa_ctwa_web").mustfix(
            "Placement section has no eligible publisher platforms",
          ),
          null
        );
      var x, $;
      i[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Placements")),
          ($ = s._(
            /*BTDS*/ "Choose where you want to show your ad. The more placements you select, the more opportunities you'll have to reach your target audience.",
          )),
          (i[12] = x),
          (i[13] = $))
        : ((x = i[12]), ($ = i[13]));
      var P;
      i[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(r("WAWebBizAdCreationSectionNotices.react"), {
            specElement: "PLACEMENT",
          })),
          (i[14] = P))
        : (P = i[14]);
      var N;
      i[15] !== R || i[16] !== u
        ? ((N =
            R == null
              ? void 0
              : R.map(function (e) {
                  var t = e.type;
                  if (!t) return null;
                  var n = u.includes(t);
                  return c.jsx(
                    r("WAWebBizAdCreationPlacementListCell.react"),
                    {
                      isSelected: n,
                      label: e.label,
                      platformType: t,
                      selectedPublisherPlatforms: u,
                    },
                    e.label,
                  );
                })),
          (i[15] = R),
          (i[16] = u),
          (i[17] = N))
        : (N = i[17]);
      var M;
      i[18] !== N
        ? ((M = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 24,
            children: [P, N],
          })),
          (i[18] = N),
          (i[19] = M))
        : (M = i[19]);
      var w;
      return (
        i[20] !== I || i[21] !== M
          ? ((w = c.jsx(r("WAWebBizAdCard.react"), {
              header: x,
              subtitle: $,
              titleAccessory: I,
              children: M,
            })),
            (i[20] = I),
            (i[21] = M),
            (i[22] = w))
          : (w = i[22]),
        w
      );
    }
    function h(e) {
      return e.type;
    }
    var y = r("withWAWebBizAdCreationSpecContext")(g, function (e) {
      return {
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
      };
    });
    l.default = y;
  },
  226,
);
