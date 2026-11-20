__d(
  "WAWebContactsAndGroupsSampleStatus",
  [
    "WAWebContactCollection",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsSampleData",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { totalCount: 1, viewedCount: 0 },
      s = { totalCount: 1, viewedCount: 1 },
      u = [null, e, null, e, s],
      c = new Map(),
      d = null;
    function m(e) {
      if (!o("WAWebContactsAndGroupsSampleData").isSampleDataOn()) return null;
      var t =
        o("WAWebContactsAndGroupsSampleData").getSampleDataSession() +
        ":" +
        o("WAWebContactCollection").ContactCollection.length;
      return (
        d !== t &&
          ((c = new Map(
            o("WAWebContactsAndGroupsSampleData")
              .getSampleContacts()
              .flatMap(function (e, t) {
                var n = u[t % u.length];
                return n == null ? [] : [[p(e), n]];
              }),
          )),
          (d = t)),
        c.get(p(e))
      );
    }
    function p(e) {
      var t;
      return (t = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(
        e.id,
      )) != null
        ? t
        : e.id.toString();
    }
    l.getSampleStatusRing = m;
  },
  98,
);
