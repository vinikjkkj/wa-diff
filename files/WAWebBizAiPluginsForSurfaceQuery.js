__d(
  "WAWebBizAiPluginsForSurfaceQuery",
  ["WAWebBizAiPluginsForSurfaceQuery.graphql"],
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
      if (n == null) return [];
      var r = [];
      for (var o of n) {
        var a = o == null ? void 0 : o.plugin;
        (a == null ? void 0 : a.id) == null ||
          a.display_name == null ||
          r.push({
            display_name: a.display_name,
            id: a.id,
            is_connected: o.is_connected === !0,
          });
      }
      return r;
    }
    ((l.PLUGINS_QUERY = s), (l.normalizePlugins = u));
  },
  98,
);
