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
        var a,
          i,
          l = o == null ? void 0 : o.plugin;
        if (!((l == null ? void 0 : l.id) == null || l.display_name == null)) {
          var s = l.apixfn_plugin;
          r.push({
            apixfnPlugin: s == null ? null : s,
            display_name: l.display_name,
            id: l.id,
            is_connected: o.is_connected === !0,
            logoUri:
              (a = (i = l.logo) == null ? void 0 : i.uri) != null ? a : null,
          });
        }
      }
      return r;
    }
    ((l.PLUGINS_QUERY = s), (l.normalizePlugins = u));
  },
  98,
);
