__d(
  "BusinessCometCreatorMarketplaceLoggingHooks",
  [
    "BcpMarketplaceFalcoEvent",
    "BusinessCometCreatorMarketplaceCreatorsRouteParamsUtils.react",
    "BusinessCometCreatorMarketplaceRootContext",
    "BusinessCometCreatorsRouteParamsUtils.entrypoint",
    "CreatorMarketplaceEntrypoint",
    "SiteData",
    "getRequestConstUri",
    "mixedToString",
    "react",
    "useBizWebGetRouteParams",
    "useCreatorMarketplaceRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d(e) {
      var t = e.event,
        n = [
          "ads_manager_discovery_page",
          "mbs_home_module",
          "mbs_inbox",
          "partnership_ads_hub",
        ];
      e.entrypoint != null &&
        n.includes(e.entrypoint) &&
        (t === "creator_card_clicked" &&
          (t = "creator_card_clicked_outside_cm"),
        e.event === "creator_card_impression" &&
          (t = "creator_card_impression_outside_cm"));
      var o = babelHelpers.extends({}, e, { event: t });
      r("BcpMarketplaceFalcoEvent").log(function () {
        return babelHelpers.extends({ product_flow: "FBS" }, o);
      });
    }
    function m() {
      var e = c(r("BusinessCometCreatorMarketplaceRootContext")),
        t = e.igAssetID,
        n = r("useCreatorMarketplaceRoute")(),
        a = e.searchKey,
        i = o(
          "BusinessCometCreatorMarketplaceCreatorsRouteParamsUtils.react",
        ).useQueryParamsFromRouteForSearch(),
        l = i.audience_params,
        s = i.creator_params,
        m = i.sorting_method;
      return u(
        function (e) {
          var o = { audience: l, creator: s },
            i = babelHelpers.extends(
              {
                current_url: r("getRequestConstUri")().toString(),
                route_name: n,
                screen_height: String(screen.height),
                screen_width: String(screen.width),
                search_key: a,
                selected_filters: JSON.stringify(o),
                selected_sorting_method: String(m),
                viewport_height: String(window.innerHeight),
                viewport_width: String(window.innerWidth),
              },
              e,
            );
          (t !== "" && (i.ig_business_asset_id = t), d(i));
        },
        [l, s, n, m, t, a],
      );
    }
    function p(e, t, n, a) {
      var i = r("mixedToString")(
        r("useBizWebGetRouteParams")()[
          o("BusinessCometCreatorsRouteParamsUtils.entrypoint").CM_ENTRYPOINT
        ],
      );
      return u(
        function (r) {
          e(
            babelHelpers.extends({}, r, n != null ? { campaign_id: n } : {}, {
              entrypoint: t,
              extra_fields: JSON.stringify(
                babelHelpers.extends(
                  {},
                  r.extra_fields != null ? JSON.parse(r.extra_fields) : null,
                  g({
                    cm_entrypoint: i,
                    is_invite_messaging_flow: a === !0 ? a : null,
                  }),
                ),
              ),
            }),
          );
        },
        [e, t, a, n, i],
      );
    }
    function _(e) {
      var t = r("useBizWebGetRouteParams")(),
        n = t.cm_entrypoint;
      return p(e, r("CreatorMarketplaceEntrypoint").cast(String(n)));
    }
    function f() {
      var e = c(r("BusinessCometCreatorMarketplaceRootContext")),
        t = e.igAssetID,
        n = e.route;
      return u(
        function (e) {
          var o = JSON.stringify(h(e));
          d({
            current_url: r("getRequestConstUri")().toString(),
            event: "generic_rendering_error",
            event_type: "error",
            extra_fields: o,
            ig_business_asset_id: t,
            route_name: n,
          });
        },
        [t, n],
      );
    }
    function g(e) {
      var t = {};
      for (var n in e) e[n] != null && (t[n] = e[n]);
      return t;
    }
    function h(e) {
      return {
        error_client_revision: r("SiteData").client_revision,
        error_code: e.number,
        error_message: e.message,
        error_stack: e.stack,
        error_stack_components: e.componentStack,
      };
    }
    ((l.logBCPEvent = d),
      (l.useMBSEventLogging = m),
      (l.useCreatorMarketplaceEntrypointWrapper = p),
      (l.useCreatorMarketplaceRouteEntrypointWrapper = _),
      (l.useCreatorMarketplaceErrorLogging = f));
  },
  98,
);
