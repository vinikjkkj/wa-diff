__d(
  "WAWebMetaAiThreadBadge",
  ["WAWebABProps", "WAWebMetaAiThreadChat"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return !e.isBot() ||
        !o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e) ||
        (!t && !n)
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_meta_ai_thread_profile_pic_badge_enabled",
          );
    }
    l.shouldShowMetaAiThreadBadge = e;
  },
  98,
);
