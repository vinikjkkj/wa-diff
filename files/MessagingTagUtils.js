__d(
  "MessagingTagUtils",
  ["MercurySourceType", "MessagingTagConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(Object.values(r("MercurySourceType")));
    function s(t) {
      for (var n of t) if (e.has(n)) return n;
      return "source:unknown";
    }
    function u(e) {
      for (var t of e) {
        var n = t.split(r("MessagingTagConstants").app_id_root);
        if (n.length > 1) return n[1].trim();
      }
      return null;
    }
    function c(e, t) {
      var n = [],
        o = u(e);
      return (
        o != null &&
          o !== "" &&
          r("MessagingTagConstants").orca_app_ids.indexOf(o) !== -1 &&
          n.push("source:messenger"),
        r("MessagingTagConstants").chat_sources.indexOf(t) !== -1 &&
          n.push("source:chat"),
        r("MessagingTagConstants").email_source === t && n.push("source:email"),
        r("MessagingTagConstants").mobile_sources.indexOf(t) !== -1 &&
          n.push("source:mobile"),
        e.indexOf("source:workchat:desktop") !== -1 &&
          n.push("source:workchat:desktop"),
        n
      );
    }
    ((l.getSourceFromTags = s), (l.getSourceTags = c));
  },
  98,
);
