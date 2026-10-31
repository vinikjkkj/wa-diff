__d(
  "WAWebOrgAdminInviteMembersUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 100,
      l = 64,
      s = 255,
      u = 63,
      c =
        /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(?:\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function d(e, t) {
      var n = p(t);
      return e.flatMap(function (e) {
        var t = n.get(e.toLowerCase());
        return t == null ? [] : [t];
      });
    }
    function m(e) {
      return _(e) && !f(e);
    }
    function p(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.emailAddress,
          o = n.id;
        r != null && t.set(r.toLowerCase(), o);
      }
      return t;
    }
    function _(e) {
      return (
        c.test(e) &&
        e
          .split("@")[0]
          .split(".")
          .every(function (e) {
            return e.replace(/\+/g, "") !== "";
          })
      );
    }
    function f(e) {
      var t = e.split("@"),
        n = t[0],
        r = t[1];
      return (
        n.length > l ||
        r.length > s ||
        r.split(".").some(function (e) {
          return e.length > u;
        })
      );
    }
    ((i.MAX_ORG_INVITE_EMAILS = e),
      (i.getRosterEntryIDs = d),
      (i.isWellFormedOrgEmail = m));
  },
  66,
);
