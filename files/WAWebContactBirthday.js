__d(
  "WAWebContactBirthday",
  ["WAWebContactBirthdayGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = /^(\d{4})-(\d{2})-(\d{2})$/,
      s = /^--(\d{2})-(\d{2})$/,
      u = 2e3,
      c = 12;
    function d(e) {
      if (e === "") return { birthday: null };
      if (
        e == null ||
        !o("WAWebContactBirthdayGatingUtils").contactBirthdaySyncEnabled()
      )
        return {};
      var t = p(e);
      return t != null ? { birthday: t } : {};
    }
    function m(e) {
      return "birthday" in e ? { birthday: e.birthday } : {};
    }
    function p(e) {
      var t = _(e);
      return t == null || !f(t) ? null : "--" + t.month + "-" + t.day;
    }
    function _(t) {
      var n = e.exec(t);
      if (n != null) return { year: Number(n[1]), month: n[2], day: n[3] };
      var r = s.exec(t);
      return r != null ? { year: u, month: r[1], day: r[2] } : null;
    }
    function f(e) {
      var t = e.day,
        n = e.month,
        r = e.year,
        o = Number(n),
        a = Number(t);
      return o >= 1 && o <= c && a >= 1 && a <= g(r, o);
    }
    function g(e, t) {
      var n = new Date(0);
      return (n.setUTCFullYear(e, t, 0), n.getUTCDate());
    }
    ((l.getContactSyncBirthdayFields = d), (l.pickContactBirthdayFields = m));
  },
  98,
);
