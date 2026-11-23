__d(
  "MAIBAAdDraftEditorMultifetch",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t == null || t === "") return null;
      for (var n of e) if (n.node_id === t) return n.node;
      return null;
    }
    function l(e, t) {
      if (t == null || t === "") return null;
      for (var n of e) if (n.node_id === t) return n.node;
      return null;
    }
    ((i.findCampaignByID = e), (i.findAdgroupByID = l));
  },
  66,
);
