__d(
  "WAWebStatusMsgLookup",
  ["WAWebStatusCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a = o("WAWebStatusCollection").StatusCollection.getStatusModel(e, !0);
      if (a == null) return null;
      var i =
          (n = (r = a.msgs) == null ? void 0 : r.getModelsArray()) != null
            ? n
            : [],
        l = i.find(function (e) {
          return e.id.id === t;
        });
      return l == null ? null : { statusModel: a, msg: l };
    }
    l.findStatusMsgByStanzaId = e;
  },
  98,
);
