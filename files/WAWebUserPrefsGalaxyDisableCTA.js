__d(
  "WAWebUserPrefsGalaxyDisableCTA",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_COLLECTION,
      );
      return Array.isArray(e)
        ? new Set(
            e.filter(function (e) {
              return typeof e == "string";
            }),
          )
        : new Set();
    }
    function s(e) {
      var t = Array.from(e);
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_COLLECTION,
        t,
      );
    }
    function u(t) {
      var n = e();
      (n.add(t), s(n));
    }
    function c(t) {
      var n = e();
      (n.delete(t), s(n));
    }
    function d() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_COLLECTION,
        [],
      );
    }
    function m() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION,
      );
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e)
        n != null &&
          typeof n == "object" &&
          typeof n.agmId == "string" &&
          typeof n.chatId == "string" &&
          t.push({ agmId: n.agmId, chatId: n.chatId });
      return t;
    }
    function p(e, t) {
      var n = m(),
        a = [].concat(n, [{ agmId: e, chatId: t }]);
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION,
        a,
      );
    }
    function _(e) {
      var t = m(),
        n = t.filter(function (t) {
          return t.agmId !== e;
        });
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION,
        n,
      );
    }
    ((l.getGalaxyDisableCTAMessageIds = e),
      (l.setGalaxyDisableCTAMessageIds = s),
      (l.addGalaxyDisableCTAMessageId = u),
      (l.removeGalaxyDisableCTAMessageId = c),
      (l.clearGalaxyDisableCTAMessageIds = d),
      (l.getGalaxyDisableCTAAgmEntries = m),
      (l.addGalaxyDisableCTAAgmEntry = p),
      (l.removeGalaxyDisableCTAAgmEntry = _));
  },
  98,
);
