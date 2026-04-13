__d(
  "WAWebStatusMediaMsgUtils",
  ["WAWebStatusCollection"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["image", "video", "ptv"]);
    function s(t, n) {
      var r,
        a,
        i =
          t != null
            ? o("WAWebStatusCollection").StatusCollection.getStatusModel(t, !0)
            : null,
        l =
          (r =
            i == null || (a = i.msgs) == null ? void 0 : a.getModelsArray()) !=
          null
            ? r
            : [];
      return l.find(function (t) {
        return e.has(t.type) && t.id.id === n;
      });
    }
    l.findStatusMediaMsg = s;
  },
  98,
);
