__d(
  "MAIBAOrgmanCommittedChanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 500,
      l = new Set(),
      s = new Set();
    function u(e) {
      if (e == null || e === "") return !1;
      try {
        var t = JSON.parse(e);
        if (t == null || typeof t != "object" || Array.isArray(t)) return !1;
        var n = t.confirmation_token;
        return typeof n == "string" && n !== "";
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return (
        e.is_completed === !0 &&
        e.tool_name != null &&
        e.tool_name.startsWith("orgman_") &&
        u(e.tool_call_args)
      );
    }
    function d(t) {
      var n = !1;
      for (var r of t != null ? t : []) {
        var o = r.tool_call_id;
        o != null && !s.has(o) && c(r) && (s.add(o), (n = !0));
      }
      if (s.size > e) {
        var a = s.values().next().value;
        a != null && s.delete(a);
      }
      n &&
        l.forEach(function (e) {
          return e();
        });
    }
    function m(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    function p() {
      (l.clear(), s.clear());
    }
    ((i.isOrgmanCommittedToolCall = c),
      (i.announceOrgmanCommittedChanges = d),
      (i.subscribeToOrgmanCommittedChanges = m),
      (i.resetOrgmanCommittedChangesForTest = p));
  },
  66,
);
