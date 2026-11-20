__d(
  "WAWebContactsAndGroupsBirthdays",
  ["WAWebContactsAndGroupsSampleData"],
  function (t, n, r, o, a, i, l) {
    var e = /^--(\d{2})-(\d{2})$/,
      s = 2e3,
      u = 2,
      c = 1440 * 60 * 1e3,
      d = new Set(),
      m = null;
    function p(e, t) {
      return _(e, t) === 0;
    }
    function _(t, n) {
      var r = t == null ? null : e.exec(t);
      if (r == null) return null;
      var o = Number(r[1]) - 1,
        a = Number(r[2]);
      if (new Date(s, o, a).getMonth() !== o) return null;
      var i = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
        l = new Date(n.getFullYear(), o, a);
      return (
        l < i && (l = new Date(n.getFullYear() + 1, o, a)),
        Math.round((l.getTime() - i.getTime()) / c)
      );
    }
    function f(e) {
      if (!o("WAWebContactsAndGroupsSampleData").isSampleDataOn()) return !1;
      var t = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      return (
        (d.size === 0 || m !== t) &&
          ((d = new Set(
            o("WAWebContactsAndGroupsSampleData")
              .getSampleContacts()
              .slice(0, u)
              .map(function (e) {
                return e.id.toString();
              }),
          )),
          (m = t)),
        d.has(e.id.toString())
      );
    }
    ((l.isBirthdayToday = p),
      (l.getDaysUntilBirthday = _),
      (l.isSampleBirthday = f));
  },
  98,
);
