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
        n,
        r,
        a,
        i = [].concat(
          (t =
            e == null || (n = e.appointment_plugins) == null
              ? void 0
              : n.plugins) != null
            ? t
            : [],
          (r =
            e == null ||
            (a = e.meta_ai_biz_agent_wa_plugins_for_surface) == null
              ? void 0
              : a.plugins) != null
            ? r
            : [],
        );
      return o(
        "WAWebBizAiAppointmentConnectorsQuery",
      ).normalizeAppointmentConnectorEntries(
        i.map(function (e) {
          return o("CometRelay").readInlineData(
            o("WAWebBizAiAppointmentConnectorsQuery").CONNECTOR_ENTRY_FRAGMENT,
            e,
          );
        }),
      );
    }
    ((l.PLUGINS_QUERY = s), (l.normalizePlugins = u));
  },
  98,
);
