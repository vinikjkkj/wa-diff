__d(
  "WAWebNewsletterChatsMigrationBanners",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebEventEmitter",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "NewsletterChatsMigrationCountdownBannerDismissed",
        "NewsletterChatsMigrationDay0Banner",
        "NewsletterChatsMigrationRollbackBanner",
      ]),
      s = 3,
      u = s * o("WATimeUtils").DAY_MILLISECONDS,
      c = e.NewsletterChatsMigrationCountdownBannerDismissed,
      d = {
        day0: e.NewsletterChatsMigrationDay0Banner,
        rollback: e.NewsletterChatsMigrationRollbackBanner,
      },
      m = "add remove reset",
      p = "add remove reset change:membershipType",
      _ = { dismissed: !1, firstImpressionAtMs: null },
      f = new (r("WAWebEventEmitter"))();
    function g(e, t) {
      var n = o(
        "WAWebNewsletterChatsMigrationCapability",
      ).savePrimaryNewsletterChatsMigration(e);
      (T(n, e),
        D(n, e, t),
        n.rolledBack === !1 && e.rolledBack === !0 && e.effectiveMigrated !== !0
          ? $("rollback", _)
          : (e.rolledBack === !1 || e.effectiveMigrated === !0) &&
            x("rollback"));
    }
    function h(e) {
      if (
        (e === void 0 && (e = o("WATimeUtils").unixTimeMs()),
        !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
      )
        return {
          channelsTabCountdownDays: null,
          chatList: null,
          nextChangeAtMs: null,
        };
      var t = v(e),
        n = E("day0", e),
        r = E("rollback", e);
      return {
        channelsTabCountdownDays:
          t != null && t > o("WATimeUtils").DAY_MILLISECONDS
            ? Math.ceil(t / o("WATimeUtils").DAY_MILLISECONDS)
            : null,
        chatList: S({ countdownRemainingMs: t, day0: n, rollback: r }),
        nextChangeAtMs: L({
          countdownRemainingMs: t,
          day0: n,
          nowMs: e,
          rollback: r,
        }),
      };
    }
    function y(e, t) {
      if (
        (t === void 0 && (t = o("WATimeUtils").unixTimeMs()),
        e !== "countdown_last_day")
      ) {
        var n = I(e);
        n == null ||
          n.firstImpressionAtMs != null ||
          $(e, babelHelpers.extends({}, n, { firstImpressionAtMs: t }));
      }
    }
    function C(e) {
      if (e === "day0" || e === "rollback") {
        var t = I(e);
        t != null && $(e, babelHelpers.extends({}, t, { dismissed: !0 }));
        return;
      }
      (r("WAWebUserPrefsStore").setUser(c, !0, { shouldWriteToIdb: !0 }),
        f.trigger("change"));
    }
    function b(e) {
      var t = null,
        n = function () {
          (r("WAWebAlarm").clearTimeout(t), (t = null));
          var e = h(),
            n = e.nextChangeAtMs;
          n != null && (t = r("WAWebAlarm").setGlobalTimeout(a, n));
        },
        a = function () {
          (n(), e());
        };
      return (
        o(
          "WAWebNewsletterChatsMigrationCapability",
        ).newsletterChatsMigrationEmitter.on("change", a),
        f.on("change", a),
        r("WAWebNewsletterCollection").on(m, e),
        r("WAWebNewsletterMetadataCollection").on(p, e),
        n(),
        function () {
          (o(
            "WAWebNewsletterChatsMigrationCapability",
          ).newsletterChatsMigrationEmitter.off("change", a),
            f.off("change", a),
            r("WAWebNewsletterCollection").off(m, e),
            r("WAWebNewsletterMetadataCollection").off(p, e),
            r("WAWebAlarm").clearTimeout(t));
        }
      );
    }
    function v(e) {
      var t = o(
          "WAWebNewsletterChatsMigrationCapability",
        ).getPrimaryNewsletterChatsMigration(),
        n = t.countdownEndsAt,
        a = t.effectiveMigrated;
      if (n == null || a === !0 || r("WAWebUserPrefsStore").getUser(c) === !0)
        return null;
      var i =
        o("WATimeUtils").castUnixTimeToMillisTime(
          o("WATimeUtils").castToUnixTime(n),
        ) - e;
      return i > 0 ? i : null;
    }
    function S(e) {
      var t = e.countdownRemainingMs,
        n = e.day0,
        r = e.rollback,
        a = R(n, r);
      return a != null
        ? a
        : t != null && t <= o("WATimeUtils").DAY_MILLISECONDS
          ? "countdown_last_day"
          : null;
    }
    function R(e, t) {
      return (t == null && e == null) ||
        !r("WAWebNewsletterCollection").some(
          o("WAWebNewsletterChatListUtils").isUnlockedSubscribedOrOwnedChannel,
        )
        ? null
        : t != null
          ? "rollback"
          : o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? "day0"
            : null;
    }
    function L(e) {
      var t = e.countdownRemainingMs,
        n = e.day0,
        r = e.nowMs,
        a = e.rollback,
        i = [];
      for (var l of [n, a]) {
        var s = k(l);
        s != null && i.push(s);
      }
      if (t != null) {
        var u = Math.ceil(t / o("WATimeUtils").DAY_MILLISECONDS) - 1;
        i.push(r + t - u * o("WATimeUtils").DAY_MILLISECONDS);
      }
      return i.length > 0 ? Math.min.apply(Math, i) : null;
    }
    function E(e, t) {
      var n = I(e);
      if (n == null || n.dismissed) return null;
      var r = k(n);
      return r == null || t < r ? n : null;
    }
    function k(e) {
      var t = e == null ? void 0 : e.firstImpressionAtMs;
      return t != null ? t + u : null;
    }
    function I(e) {
      var t = r("WAWebUserPrefsStore").getUser(d[e]);
      if (t == null || typeof t != "object") return null;
      var n = t.dismissed,
        o = t.firstImpressionAtMs;
      return {
        dismissed: n === !0,
        firstImpressionAtMs: typeof o == "number" ? o : null,
      };
    }
    function T(e, t) {
      t.countdownEndsAt == null ||
        t.countdownEndsAt === e.countdownEndsAt ||
        r("WAWebUserPrefsStore").getUser(c) !== !0 ||
        (r("WAWebUserPrefsStore").setUser(c, null, { shouldWriteToIdb: !0 }),
        f.trigger("change"));
    }
    function D(e, t, n) {
      e.effectiveMigrated === !1 && t.effectiveMigrated === !0 && n
        ? $("day0", _)
        : t.effectiveMigrated === !1 && x("day0");
    }
    function x(e) {
      I(e) != null && $(e, null);
    }
    function $(e, t) {
      (r("WAWebUserPrefsStore").setUser(d[e], t, { shouldWriteToIdb: !0 }),
        f.trigger("change"));
    }
    ((l.NewsletterChatsMigrationBannerUserPrefs = e),
      (l.PENDING_BANNER_LIFETIME_MS = u),
      (l.applyPrimaryNewsletterChatsMigration = g),
      (l.getNewsletterChatsMigrationBanners = h),
      (l.recordNewsletterChatsMigrationBannerImpression = y),
      (l.dismissNewsletterChatsMigrationBanner = C),
      (l.subscribeToNewsletterChatsMigrationBanners = b));
  },
  98,
);
