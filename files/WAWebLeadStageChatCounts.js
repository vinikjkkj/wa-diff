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
        [[o("WAWebLeadStage").LeadStage.LEAD, 0]].concat(
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
              : o("WAWebLeadStage").LeadStage.LEAD;
        n.set(l, ((i = n.get(l)) != null ? i : 0) + 1);
      }
      return n;
    }
    function u(t) {
      var n = new Set();
      for (var r of e(t)) n.add(r.id.toString());
      return (
        t.labelItemCollection.forEach(function (e) {
          e != null && n.add(e.parentId);
        }),
        Array.from(n)
      );
    }
    function c(t, n) {
      return e(t).filter(function (e) {
        var t;
        return (
          ((t = o("WAWebLeadStageStore").getLeadStageFromStore(
            e.id.toString(),
          )) != null
            ? t
            : o("WAWebLeadStage").LeadStage.LEAD) === n
        );
      });
    }
    ((l.getLeadStageChatCounts = s),
      (l.getLeadListMemberJids = u),
      (l.getLeadListChatsAtStage = c));
  },
  98,
);
