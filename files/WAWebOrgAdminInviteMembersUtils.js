__d(
  "WAWebOrgAdminInviteMembersUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 100,
      l = 320,
      s = 20,
      u = 1e3,
      c = 64,
      d = 255,
      m = 63,
      p =
        /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(?:\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function _(t) {
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
        var d = y(c);
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
    function f(e, t) {
      var n = C(t),
        r = e.emails.filter(function (e) {
          return !n.has(e.toLowerCase());
        });
      return babelHelpers.extends({}, e, {
        emails: e.emails.filter(function (e) {
          return n.has(e.toLowerCase());
        }),
        invalidEmailCount: e.invalidEmailCount + r.length,
        invalidEmails: []
          .concat(
            e.invalidEmails,
            r.map(function (e) {
              return { email: e, reason: "not_on_roster" };
            }),
          )
          .slice(0, s),
      });
    }
    function g(e, t) {
      var n = C(t);
      return e.flatMap(function (e) {
        var t = n.get(e.toLowerCase());
        return t == null ? [] : [t];
      });
    }
    function h(e) {
      return y(e) == null;
    }
    function y(e) {
      return b(e) ? (v(e) ? "too_long" : null) : "invalid_format";
    }
    function C(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.emailAddress,
          o = n.id;
        r != null && t.set(r.toLowerCase(), o);
      }
      return t;
    }
    function b(e) {
      return (
        p.test(e) &&
        e
          .split("@")[0]
          .split(".")
          .every(function (e) {
            return e.replace(/\+/g, "") !== "";
          })
      );
    }
    function v(e) {
      var t = e.split("@"),
        n = t[0],
        r = t[1];
      return (
        n.length > c ||
        r.length > d ||
        r.split(".").some(function (e) {
          return e.length > m;
        })
      );
    }
    ((i.MAX_ORG_INVITE_EMAILS = e),
      (i.MAX_ORG_INVITE_EMAIL_LENGTH = l),
      (i.parseInviteEmails = _),
      (i.skipEmailsNotOnRoster = f),
      (i.getRosterEntryIDs = g),
      (i.isWellFormedOrgEmail = h));
  },
  66,
);
