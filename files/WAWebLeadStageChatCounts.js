__d(
  "WAWebLeadStageChatCounts",
  [
    "WAWebChatCollection",
    "WAWebLeadStage",
    "WAWebLeadStageStore",
    "WAWebListsUtil",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Map();
      for (var n of o("WAWebListsUtil").getAllChatsInList(e))
        t.set(n.id.toString(), n);
      for (var r of o("WAWebChatCollection").ChatCollection.getModelsArray()) {
        var a;
        ((a = r.labels) == null ? void 0 : a.includes(e.id)) === !0 &&
          t.set(r.id.toString(), r);
      }
      return Array.from(t.values());
    }
    function s(t) {
      var n = new Map(
        [[o("WAWebLeadStage").LeadStage.NONE, 0]].concat(
          o("WAWebLeadStage").LEAD_SUBSTAGE_ORDER.map(function (e) {
            return [e, 0];
          }),
        ),
      );
      for (var r of e(t)) {
        var a,
          i,
          l =
            (a = o("WAWebLeadStageStore").getLeadStageFromStore(
              r.id.toString(),
            )) != null
              ? a
              : o("WAWebLeadStage").LeadStage.NONE;
        n.set(l, ((i = n.get(l)) != null ? i : 0) + 1);
      }
      return n;
    }
    l.getLeadStageChatCounts = s;
  },
  98,
);
