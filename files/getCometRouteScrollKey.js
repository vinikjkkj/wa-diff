__d(
  "getCometRouteScrollKey",
  ["getCometEntityKey", "stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = typeof WeakMap == "function" ? new WeakMap() : new Map();
    function s(t) {
      var n,
        o,
        a = t.route,
        i = t.timeSpentMetaData;
      if (
        ((n = a.timeSpentConfig) == null || (n = n.session_ids) == null
          ? void 0
          : n.search_sid) != null &&
        (i == null || (o = i.session_ids) == null ? void 0 : o.search_sid) !=
          null
      )
        return i.session_ids.search_sid;
      var l = e.get(a);
      if (l != null) return l;
      if (a.scrollKey != null) return a.scrollKey;
      var s = r("getCometEntityKey")(a);
      if (s != null && s.entity_type != null && s.entity_id != null) {
        var u = s.entity_type + "||" + s.entity_id;
        return (e.set(a, u), u);
      }
      var c = a.hostableView || a.rootView,
        d = c.allResources[0] || c.resource,
        m = d.getModuleId(),
        p = Object.keys(babelHelpers.extends({}, c.props)).filter(function (e) {
          return e.endsWith("ID");
        }),
        _ = m + "||" + r("stableStringify")(p);
      return (e.set(a, _), _);
    }
    l.default = s;
  },
  98,
);
