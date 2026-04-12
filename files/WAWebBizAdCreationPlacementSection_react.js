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
        i = t.fragmentRef,
        l = t.selectedPublisherPlatforms,
        u = p(r("WAWebBizAdCreationLoggerContext")),
        d = f(!1),
        g = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationPlacementSection_boostedComponentWrapper.graphql",
              )),
          i,
        ),
        h = r("useWAWebBizAdCreationSAFRContext")(),
        y = h.placementBlocklistConfig,
        C =
          g == null ||
          (a = g.options) == null ||
          (a = a.eligible_publisher_platforms) == null
            ? void 0
            : a.filter(function (e) {
                var t = e.type;
                return t != null && !(y != null && y.has(t));
              }),
        b = m(
          function () {
            (u != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "placements_info_click",
                loggerContext: u,
              }),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizAdCreationPlacementInfoModal.react"), {}),
              ));
          },
          [u],
        ),
        v = c.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcInfo.react"),
          onPress: b,
          size: "small",
          variant: "borderless",
        });
      return (
        _(
          function () {
            if (u != null && !d.current && !r("isArrayNullOrEmpty")(C)) {
              var e;
              ((d.current = !0),
                r("WAWebBizAdLogger").logCritical({
                  event: "placements_section_impression",
                  loggerContext: u,
                  extra: {
                    selected_platforms: l.join(", "),
                    eligible_platforms:
                      (e =
                        C == null
                          ? void 0
                          : C.map(function (e) {
                              return e.type;
                            }).join(", ")) != null
                        ? e
                        : "",
                  },
                }));
            }
          },
          [C, u, l],
        ),
        r("isArrayNullOrEmpty")(C)
          ? (r("FBLogger")("wa_ctwa_web").mustfix(
              "Placement section has no eligible publisher platforms",
            ),
            null)
          : c.jsx(r("WAWebBizAdCard.react"), {
              header: s._(/*BTDS*/ "Placements"),
              subtitle: s._(
                /*BTDS*/ "Choose where you want to show your ad. The more placements you select, the more opportunities you'll have to reach your target audience.",
              ),
              titleAccessory: v,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 24,
                children: [
                  c.jsx(r("WAWebBizAdCreationSectionNotices.react"), {
                    specElement: "PLACEMENT",
                  }),
                  C == null
                    ? void 0
                    : C.map(function (e) {
                        var t = e.type;
                        if (!t) return null;
                        var n = l.includes(t);
                        return c.jsx(
                          r("WAWebBizAdCreationPlacementListCell.react"),
                          {
                            isSelected: n,
                            label: e.label,
                            platformType: t,
                            selectedPublisherPlatforms: l,
                          },
                          e.label,
                        );
                      }),
                ],
              }),
            })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = r("withWAWebBizAdCreationSpecContext")(g, function (e) {
      return {
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
      };
    });
    l.default = h;
  },
  226,
);
