__d(
  "WAWebLinkify",
  ["WAJids", "WALinkify", "WASuspiciousLinks", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      t === void 0 && (t = !1);
      var r = o("WALinkify").findLinks(e, t);
      return r.map(function (e) {
        return c(e, n);
      });
    }
    function s(e, t, n) {
      t === void 0 && (t = !1);
      var r = o("WALinkify").findLink(e, t);
      if (r != null) return c(r, n);
    }
    function u(e) {
      return e.body != null && s(e.body, !0) != null;
    }
    function c(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        r = null;
      if (t && n) {
        var a = t.isLid()
          ? o("WAJids").toLidUserJid(t.user)
          : o("WAJids").toPhoneUserJid(t.user);
        r = o("WASuspiciousLinks").findSuspiciousCharacters(
          e.domain,
          a,
          o("WAJids").toPhoneUserJid(n.user),
          [],
        );
      }
      return babelHelpers.extends({}, e, {
        suspiciousCharacters: r != null ? r : void 0,
      });
    }
    ((l.findLinks = e), (l.findLink = s), (l.hasHttpLink = u));
  },
  98,
);
