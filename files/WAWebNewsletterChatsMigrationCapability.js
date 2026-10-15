__d(
  "WAWebNewsletterChatsMigrationCapability",
  ["WALongInt", "WAWebEventEmitter", "WAWebUserPrefsDeviceCapabilities"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))(),
      s = { countdownEndsAt: null, effectiveMigrated: null, rolledBack: null };
    function u(e) {
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
    function c() {
      var e;
      return (e = o(
        "WAWebUserPrefsDeviceCapabilities",
      ).getPrimaryDeviceCapabilitiesFromLocalStorage()
        .newsletterChatsMigration) != null
        ? e
        : s;
    }
    function d() {
      return c().effectiveMigrated === !0;
    }
    function m(t) {
      var n = c();
      return (
        p(n, t) ||
          (o(
            "WAWebUserPrefsDeviceCapabilities",
          ).mergeDeviceCapabilitiesToStorage(
            { newsletterChatsMigration: t },
            "primary",
          ),
          e.trigger("change")),
        n
      );
    }
    function p(e, t) {
      return (
        e.countdownEndsAt === t.countdownEndsAt &&
        e.effectiveMigrated === t.effectiveMigrated &&
        e.rolledBack === t.rolledBack
      );
    }
    ((l.newsletterChatsMigrationEmitter = e),
      (l.getNewsletterChatsMigrationFromCapabilities = u),
      (l.getPrimaryNewsletterChatsMigration = c),
      (l.getPrimaryHasMigratedNewsletterChats = d),
      (l.savePrimaryNewsletterChatsMigration = m));
  },
  98,
);
