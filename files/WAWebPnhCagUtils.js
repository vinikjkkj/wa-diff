__d(
  "WAWebPnhCagUtils",
  ["WAWebLidMigrationUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participants.iAmAdmin(),
        n = e.participants.toArray(),
        r = [],
        a = [];
      if (t)
        for (var i of n)
          (r.push(i.id),
            a.push(
              o("WAWebLidMigrationUtils").toLid(
                o("WAWebWidFactory").asUserWidOrThrow(i.id),
              ),
            ));
      else
        for (var l of n)
          l.id.isLid()
            ? r.push(l.id)
            : a.push(
                o("WAWebLidMigrationUtils").toLid(
                  o("WAWebWidFactory").asUserWidOrThrow(l.id),
                ),
              );
      return [].concat(r, a).filter(Boolean);
    }
    function s(e, t) {
      var n = [];
      if (e) {
        for (var r of t) (n.push(r.id), r.lid && n.push(r.lid));
        return n;
      }
      for (var o of t) o.id.isLid() ? n.push(o.id) : o.lid && n.push(o.lid);
      return n;
    }
    ((l.augmentedCagGroupMetadataParticipantList = e),
      (l.augmentedCagGroupParticipantList = s));
  },
  98,
);
