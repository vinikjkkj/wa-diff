__d(
  "WAWebOrgAdminInviteMembersUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 100,
      l = 320,
      s = 20,
      u = 1e3,
      c = new Set(["fb.com", "meta.com"]),
      d =
        /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(?:\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function m(t) {
      var n = t
        .split(/[\s,;]+/)
        .map(function (e) {
          return e.trim();
        })
        .filter(Boolean);
      if (n.length === 0) return { type: "empty" };
      var r = new Set(),
        o = n.filter(function (e) {
          var t = e.toLowerCase();
          return r.has(t) ? !1 : (r.add(t), !0);
        });
      if (o.length > u) return { type: "too_many_entries" };
      var a = [],
        i = [],
        l = 0;
      for (var c of o) {
        var d = f(c);
        d == null
          ? a.push(c)
          : ((l += 1), i.length < s && i.push({ email: c, reason: d }));
      }
      return a.length > e
        ? { type: "too_many" }
        : {
            type: "review",
            duplicateCount: n.length - o.length,
            emails: a,
            invalidEmailCount: l,
            invalidEmails: i,
          };
    }
    function p(e) {
      return f(e) == null;
    }
    function _(e) {
      return d.test(e) && e.length <= l;
    }
    function f(e) {
      if (!d.test(e)) return "invalid_format";
      if (e.length > l) return "too_long";
      var t = e.slice(e.lastIndexOf("@") + 1).toLowerCase();
      return c.has(t) ? null : "not_meta_employee";
    }
    ((i.MAX_ORG_INVITE_EMAILS = e),
      (i.MAX_ORG_INVITE_EMAIL_LENGTH = l),
      (i.parseInviteEmails = m),
      (i.isValidInviteEmail = p),
      (i.isWellFormedOrgEmail = _));
  },
  66,
);
