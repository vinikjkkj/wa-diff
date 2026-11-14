__d(
  "WAWebLeadStageChatCounts",
  [
    "WAWebChatCollection",
    "WAWebLeadStage",
    "WAWebLeadStageMembership",
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
    function s(e) {
      var t = new Map(
        o("WAWebLeadStage").ALL_LEAD_STAGES.map(function (e) {
          return [e, 0];
        }),
      );
      for (var n of u(e)) {
        var r,
          a = o("WAWebLeadStage").getLeadStageForGrouping(
            o("WAWebLeadStageStore").getLeadStageFromStore(n),
          );
        t.set(a, ((r = t.get(a)) != null ? r : 0) + 1);
      }
      return t;
    }
    function u(t) {
      var n = [],
        r = new Set(),
        a = function (t) {
          if (!r.has(t)) {
            var e = o("WAWebLeadStageMembership").alternateSpelling(t);
            (e != null && r.has(e)) ||
              (r.add(t), e != null && r.add(e), n.push(t));
          }
        };
      for (var i of e(t)) a(i.id.toString());
      return (
        t.labelItemCollection.forEach(function (e) {
          e != null && a(e.parentId);
        }),
        n
      );
    }
    function c(t) {
      var n = new Set();
      for (var r of e(t)) n.add(r.id.toString());
      return (
        t.labelItemCollection.forEach(function (e) {
          e != null && n.add(e.parentId);
        }),
        Array.from(n)
      );
    }
    function d(t, n) {
      return e(t).filter(function (e) {
        return (
          o("WAWebLeadStage").getLeadStageForGrouping(
            o("WAWebLeadStageStore").getLeadStageFromStore(e.id.toString()),
          ) === n
        );
      });
    }
    ((l.getLeadStageChatCounts = s),
      (l.getLeadListMemberJids = c),
      (l.getLeadListChatsAtStage = d));
  },
  98,
);
