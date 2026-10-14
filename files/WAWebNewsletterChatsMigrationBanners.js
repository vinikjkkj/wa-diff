__d(
  "WAWebNewsletterChatsMigrationBanners",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebEventEmitter",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
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
      m = { dismissed: !1, firstImpressionAtMs: null },
      p = new (r("WAWebEventEmitter"))();
    function _(e) {
      var t = o(
        "WAWebNewsletterChatsMigrationCapability",
      ).savePrimaryNewsletterChatsMigration(e);
      (E(t, e),
        t.effectiveMigrated === !1 && e.effectiveMigrated === !0
          ? I("day0", m)
          : e.effectiveMigrated === !1 && k("day0"),
        t.rolledBack === !1 && e.rolledBack === !0 && e.effectiveMigrated !== !0
          ? I("rollback", m)
          : (e.rolledBack === !1 || e.effectiveMigrated === !0) &&
            k("rollback"));
    }
    function f(e) {
      if (
        (e === void 0 && (e = o("WATimeUtils").unixTimeMs()),
        !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
      )
        return {
          channelsTabCountdownDays: null,
          chatList: null,
          nextChangeAtMs: null,
        };
      var t = C(e),
        n = S("day0", e),
        r = S("rollback", e);
      return {
        channelsTabCountdownDays:
          t != null && t > o("WATimeUtils").DAY_MILLISECONDS
            ? Math.ceil(t / o("WATimeUtils").DAY_MILLISECONDS)
            : null,
        chatList: b({ countdownRemainingMs: t, day0: n, rollback: r }),
        nextChangeAtMs: v({
          countdownRemainingMs: t,
          day0: n,
          nowMs: e,
          rollback: r,
        }),
      };
    }
    function g(e, t) {
      if (
        (t === void 0 && (t = o("WATimeUtils").unixTimeMs()),
        e !== "countdown_last_day")
      ) {
        var n = L(e);
        n == null ||
          n.firstImpressionAtMs != null ||
          I(e, babelHelpers.extends({}, n, { firstImpressionAtMs: t }));
      }
    }
    function h(e) {
      if (e === "day0" || e === "rollback") {
        var t = L(e);
        t != null && I(e, babelHelpers.extends({}, t, { dismissed: !0 }));
        return;
      }
      (r("WAWebUserPrefsStore").setUser(c, !0, { shouldWriteToIdb: !0 }),
        p.trigger("change"));
    }
    function y(e) {
      var t = null,
        n = function () {
          (r("WAWebAlarm").clearTimeout(t), (t = null));
          var e = f(),
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
        p.on("change", a),
        n(),
        function () {
          (o(
            "WAWebNewsletterChatsMigrationCapability",
          ).newsletterChatsMigrationEmitter.off("change", a),
            p.off("change", a),
            r("WAWebAlarm").clearTimeout(t));
        }
      );
    }
    function C(e) {
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
    function b(e) {
      var t = e.countdownRemainingMs,
        n = e.day0,
        r = e.rollback;
      return r != null
        ? "rollback"
        : n != null &&
            o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
          ? "day0"
          : t != null && t <= o("WATimeUtils").DAY_MILLISECONDS
            ? "countdown_last_day"
            : null;
    }
    function v(e) {
      var t = e.countdownRemainingMs,
        n = e.day0,
        r = e.nowMs,
        a = e.rollback,
        i = [];
      for (var l of [n, a]) {
        var s = R(l);
        s != null && i.push(s);
      }
      if (t != null) {
        var u = Math.ceil(t / o("WATimeUtils").DAY_MILLISECONDS) - 1;
        i.push(r + t - u * o("WATimeUtils").DAY_MILLISECONDS);
      }
      return i.length > 0 ? Math.min.apply(Math, i) : null;
    }
    function S(e, t) {
      var n = L(e);
      if (n == null || n.dismissed) return null;
      var r = R(n);
      return r == null || t < r ? n : null;
    }
    function R(e) {
      var t = e == null ? void 0 : e.firstImpressionAtMs;
      return t != null ? t + u : null;
    }
    function L(e) {
      var t = r("WAWebUserPrefsStore").getUser(d[e]);
      if (t == null || typeof t != "object") return null;
      var n = t.dismissed,
        o = t.firstImpressionAtMs;
      return {
        dismissed: n === !0,
        firstImpressionAtMs: typeof o == "number" ? o : null,
      };
    }
    function E(e, t) {
      t.countdownEndsAt == null ||
        t.countdownEndsAt === e.countdownEndsAt ||
        r("WAWebUserPrefsStore").getUser(c) !== !0 ||
        (r("WAWebUserPrefsStore").setUser(c, null, { shouldWriteToIdb: !0 }),
        p.trigger("change"));
    }
    function k(e) {
      L(e) != null && I(e, null);
    }
    function I(e, t) {
      (r("WAWebUserPrefsStore").setUser(d[e], t, { shouldWriteToIdb: !0 }),
        p.trigger("change"));
    }
    ((l.NewsletterChatsMigrationBannerUserPrefs = e),
      (l.PENDING_BANNER_LIFETIME_MS = u),
      (l.applyPrimaryNewsletterChatsMigration = _),
      (l.getNewsletterChatsMigrationBanners = f),
      (l.recordNewsletterChatsMigrationBannerImpression = g),
      (l.dismissNewsletterChatsMigrationBanner = h),
      (l.subscribeToNewsletterChatsMigrationBanners = y));
  },
  98,
);
