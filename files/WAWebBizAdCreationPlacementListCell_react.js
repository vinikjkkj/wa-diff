__d(
  "WAWebBizAdCreationPlacementListCell.react",
  [
    "FBLogger",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WAWebBizCheckbox.react",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationPlacementReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext;
    function m(e) {
      var t = e.isSelected,
        n = e.label,
        o = e.platformType,
        a = e.selectedPublisherPlatforms,
        i = e.adAccountID,
        l = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationPlacementReducer"),
        ]),
        u = d(r("WAWebBizAdCreationLoggerContext")),
        m = c(
          function () {
            try {
              if (
                (l({
                  type: "placement_reducer.toggle_publisher_platform",
                  publisherPlatform: o,
                }),
                u != null)
              ) {
                var e = a.includes(o)
                  ? a.filter(function (e) {
                      return e !== o;
                    })
                  : [].concat(a, [o]);
                (r("WAWebBizAdLogger").logCritical({
                  event: "placements_options_change",
                  loggerContext: u,
                  adAccountID: i,
                  extra: { selected_platforms: e.join(", ") },
                }),
                  r("WAWebBizAdLogger").log({
                    event: "toggle_publisher_platform",
                    loggerContext: u,
                    adAccountID: i,
                    extra: { value: o },
                  }));
              }
            } catch (e) {
              u != null &&
                r("WAWebBizAdLogger").logCritical({
                  event: "placements_flow_action_error",
                  loggerContext: u,
                  adAccountID: i,
                  extra: {
                    platform_type: o,
                    error_message:
                      e instanceof Error ? e.message : "Unknown error",
                  },
                });
            }
          },
          [i, l, u, o, a],
        );
      return n == null
        ? (r("FBLogger")("wa_ctwa_web").mustfix(
            "PlacementListCell rendered with null label for platform: " + o,
          ),
          null)
        : s.jsx(r("WAWebBizCheckbox.react"), {
            label: n,
            onChange: m,
            value: t,
            isDisabled: a.length < 2 && t,
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = r("withWAWebBizAdCreationSpecContext")(m, function (e) {
      var t;
      return {
        adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID,
      };
    });
    l.default = p;
  },
  98,
);
