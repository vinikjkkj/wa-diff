__d(
  "A2UILeakedFenceRewrite",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /\"(?:type|component)\"\s*:/;
    function l(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object" || t.type !== "handoff")
        return null;
      var n = t.message;
      return typeof n == "string" ? n.trim() : "";
    }
    var s = /^```(?:a2ui|json)\b/i;
    function u(t) {
      var n = t.toLowerCase();
      if (!n.includes("```a2ui") && !n.includes("```json")) return t;
      for (var r = t.split("\n"), o = [], a = !1, i = 0; i < r.length; ) {
        var u = r[i];
        if (s.test(u)) {
          var c = u;
          i++;
          for (var d = []; i < r.length && !r[i].startsWith("```"); )
            (d.push(r[i]), i++);
          var m = null;
          i < r.length && /^```\s*$/.test(r[i]) && ((m = r[i]), i++);
          var p = d.join("\n");
          if (e.test(p)) {
            a = !0;
            var _ = l(p);
            _ != null && _ !== "" && o.push(_);
            continue;
          }
          (o.push.apply(o, [c].concat(d)),
            m != null ? o.push(m) : (o.push("```"), (a = !0)));
          continue;
        }
        (o.push(u), i++);
      }
      return a
        ? o
            .join("\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim()
        : t;
    }
    ((i.LEAKED_COMPONENT_KEY = e),
      (i.extractHandoffMessage = l),
      (i.rewriteLeakedA2UIFences = u));
  },
  66,
);
