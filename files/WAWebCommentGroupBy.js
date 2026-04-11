__d(
  "WAWebCommentGroupBy",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = new Map();
      for (var r of e) {
        var o,
          a = r.parentMsgKey.toString(),
          i = (o = n.get(a)) != null ? o : 0;
        n.set(a, i + 1);
      }
      for (var l of t) {
        var s,
          u = l.parentMsgKey.toString(),
          c = (s = n.get(u)) != null ? s : 0;
        n.set(u, c - 1);
      }
      return n;
    }
    i.commentCountByParents = e;
  },
  66,
);
