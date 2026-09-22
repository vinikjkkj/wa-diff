__d(
  "WAWebBizAiPluginsForSurfaceQuery",
  [
    "CometRelay",
    "WAWebBizAiAppointmentConnectorsQuery",
    "WAWebBizAiPluginsForSurfaceQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebBizAiPluginsForSurfaceQuery.graphql"));
    function u(e) {
      var t,
        n =
          e == null || (t = e.meta_ai_biz_agent_wa_plugins_for_surface) == null
            ? void 0
            : t.plugins;
      return n == null
        ? []
        : d(
            o(
              "WAWebBizAiAppointmentConnectorsQuery",
            ).normalizeAppointmentConnectorEntries(
              n.map(function (e) {
                return o("CometRelay").readInlineData(
                  o("WAWebBizAiAppointmentConnectorsQuery")
                    .CONNECTOR_ENTRY_FRAGMENT,
                  e,
                );
              }),
            ),
          );
    }
    function c(e) {
      return d(
        o(
          "WAWebBizAiAppointmentConnectorsQuery",
        ).normalizeAppointmentConnectorEntries(e),
      );
    }
    function d(e) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          display_name: e.displayName,
          is_connected: e.isConnected,
        });
      });
    }
    ((l.PLUGINS_QUERY = s),
      (l.normalizePlugins = u),
      (l.normalizePluginEntries = c));
  },
  98,
);
