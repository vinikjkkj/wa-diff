__d(
  "WAWebNewsletterChatsMigrationCapability",
  ["$InternalEnum", "WALongInt", "WAWebEventEmitter", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "PrimaryNewsletterChatsCountdownEndsAt",
        "PrimaryNewsletterChatsMigrated",
        "PrimaryNewsletterChatsRolledBack",
      ]),
      s = new (r("WAWebEventEmitter"))(),
      u = e.PrimaryNewsletterChatsMigrated,
      c = e.PrimaryNewsletterChatsCountdownEndsAt,
      d = e.PrimaryNewsletterChatsRolledBack;
    function m(e) {
      var t,
        n,
        r = e == null ? void 0 : e.newsletterChatsMigration;
      return {
        countdownEndsAt: o("WALongInt").maybeNumber(
          r == null ? void 0 : r.countdownEndsAt,
        ),
        effectiveMigrated:
          (t = r == null ? void 0 : r.effectiveMigrated) != null ? t : null,
        rolledBack: (n = r == null ? void 0 : r.rolledBack) != null ? n : null,
      };
    }
    function p() {
      var e = r("WAWebUserPrefsStore").getUser(c);
      return {
        countdownEndsAt: typeof e == "number" ? e : null,
        effectiveMigrated: g(u),
        rolledBack: g(d),
      };
    }
    function _() {
      return p().effectiveMigrated === !0;
    }
    function f(e) {
      var t = p(),
        n = [
          h(u, t.effectiveMigrated, e.effectiveMigrated),
          h(c, t.countdownEndsAt, e.countdownEndsAt),
          h(d, t.rolledBack, e.rolledBack),
        ].includes(!0);
      return (n && s.trigger("change"), t);
    }
    function g(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "boolean" ? t : null;
    }
    function h(e, t, n) {
      return t === n
        ? !1
        : (r("WAWebUserPrefsStore").setUser(e, n, { shouldWriteToIdb: !0 }),
          !0);
    }
    ((l.NewsletterChatsMigrationUserPrefs = e),
      (l.newsletterChatsMigrationEmitter = s),
      (l.getNewsletterChatsMigrationFromCapabilities = m),
      (l.getPrimaryNewsletterChatsMigration = p),
      (l.getPrimaryHasMigratedNewsletterChats = _),
      (l.savePrimaryNewsletterChatsMigration = f));
  },
  98,
);
