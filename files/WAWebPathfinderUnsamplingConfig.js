__d(
  "WAWebPathfinderUnsamplingConfig",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = { rules: [] };
    function u(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return s;
      }
      if (n == null || typeof n != "object") return s;
      var r = n;
      if (r.schema_version !== e) return s;
      var o = r.session_flag_rules;
      if (!Array.isArray(o)) return s;
      var a = [];
      for (var i of o)
        if (!(i == null || typeof i != "object")) {
          var l = i,
            u = l.rule_id,
            c = l.trigger_screen_keys;
          if (!(typeof u != "string" || !Array.isArray(c))) {
            var d = new Set();
            for (var m of c) typeof m == "string" && m !== "" && d.add(m);
            d.size > 0 && a.push({ ruleId: u, triggerScreenKeys: d });
          }
        }
      return { rules: a };
    }
    var c = null;
    function d() {
      return (
        c == null &&
          (c = u(
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_pathfinder_unsampling_config",
            ),
          )),
        c
      );
    }
    function m(e) {
      if (e == null) return null;
      for (var t of d().rules) if (t.triggerScreenKeys.has(e)) return t.ruleId;
      return null;
    }
    ((l.parseUnsamplingConfig = u),
      (l.getUnsamplingConfig = d),
      (l.getUnsamplingRuleIdForScreen = m));
  },
  98,
);
