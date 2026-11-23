__d(
  "getMAIBANotificationSnippetFromResponse",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "MAIBAContentComponentSuggestedPrompts",
      "MAIBAContentComponentToolCall",
    ]);
    function l(t, n) {
      if (Array.isArray(t)) {
        for (var r of t) l(r, n);
        return;
      }
      if (
        !(t == null || typeof t != "object") &&
        !(typeof t.type == "string" && e.has(t.type))
      ) {
        var o = t.$t;
        if (typeof o == "number" && Number.isInteger(o)) {
          n.push(o);
          return;
        }
        for (var a of Object.keys(t)) l(t[a], n);
      }
    }
    function s(e, t) {
      if (e == null || e === "") return null;
      var n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (n == null || typeof n != "object") return null;
      var r = n.layout;
      if (r == null || typeof r != "object") return null;
      var o = r.sections;
      if (!Array.isArray(o)) return null;
      var a = [];
      for (var i of o)
        if (!(i == null || typeof i != "object")) {
          var s = i.blocks;
          Array.isArray(s) && l(s, a);
        }
      var u = [];
      for (var c of a) {
        var d = t[c];
        d != null && d !== "" && u.push(d);
      }
      return u.length > 0 ? u.join("") : null;
    }
    i.default = s;
  },
  66,
);
