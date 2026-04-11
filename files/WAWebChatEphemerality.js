__d(
  "WAWebChatEphemerality",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebChatGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebEphemeralityTypes",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        r = o("WAWebStateUtils").unproxy(t),
        a = o("WAWebChatGetters").getIsGroup(r)
          ? (n = r.groupMetadata) == null
            ? void 0
            : n.ephemeralDuration
          : r.ephemeralDuration;
      return a == null || a === 0
        ? null
        : a < 0
          ? (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ephemeral] invalid duration of ",
                  " for chat ",
                  "",
                ])),
              a,
              r.id.toLogString(),
            ),
            null)
          : a;
    }
    function c(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n,
        r = b(t);
      if (r == null) {
        var a;
        n = o("WAWebChatGetters").getIsGroup(t)
          ? (a = t.groupMetadata) == null
            ? void 0
            : a.ephemeralDuration
          : t.ephemeralDuration;
      } else n = r;
      return n == null || n === 0
        ? null
        : n < 0
          ? (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ephemeral] invalid duration of ",
                  " for chat ",
                  "",
                ])),
              n,
              t.id.toLogString(),
            ),
            null)
          : n;
    }
    function d(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t) ||
        t.ephemeralSettingTimestamp === 0
        ? null
        : t.ephemeralSettingTimestamp;
    }
    function m(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = u(t);
      return n != null && n !== 0;
    }
    function p(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      if (
        (o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() &&
          !o("WAWebChatGetters").getIsGroup(t)) ||
        o("WAWebChatGetters").getIsPSA(t) ||
        t.id.isBot()
      )
        return !1;
      if (o("WAWebChatGetters").getIsGroup(t)) {
        var n,
          r,
          a =
            (n = t.groupMetadata) == null
              ? void 0
              : n.participants.getSuperAdmin();
        if (
          (a != null && a.contact.isEnterprise) ||
          (!((r = t.groupMetadata) != null && r.canSetEphemeralSetting()) &&
            !m(t))
        )
          return !1;
      }
      return !(
        o("WAWebChatGetters").getIsBroadcast(t) ||
        t.contact.isEnterprise ||
        o(
          "WAWebEphemeralityFrontendUtils",
        ).isEphemeralityDisabledInUIForContact(t.contact)
      );
    }
    function _(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.disappearingModeInitiator != null
        ? t.disappearingModeInitiator
        : m(t)
          ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat
          : null;
    }
    function f(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t)
        ? h(t)
        : t.disappearingModeTrigger != null
          ? t.disappearingModeTrigger
          : m(t)
            ? o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings
            : null;
    }
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t)
        ? y(t)
        : t.disappearingModeInitiatedByMe != null
          ? t.disappearingModeInitiatedByMe
          : null;
    }
    function h(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r = (t = n.groupMetadata) == null ? void 0 : t.disappearingModeTrigger;
      return r == null ? null : r;
    }
    function y(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r =
          (t = n.groupMetadata) == null
            ? void 0
            : t.disappearingModeInitiatedByMe;
      return r == null ? null : r;
    }
    function C(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return n.ephemeralDuration == null &&
        n.ephemeralSettingTimestamp == null &&
        n.disappearingModeInitiator == null
        ? null
        : {
            duration: (t = n.ephemeralDuration) != null ? t : 0,
            settingTimestamp: n.ephemeralSettingTimestamp,
            initiator: n.disappearingModeInitiator,
            disappearingModeTrigger: n.disappearingModeTrigger,
            initiatedByMe: n.disappearingModeInitiatedByMe,
            afterReadDuration: n.afterReadDuration,
          };
    }
    function b(e) {
      if (!o("WAWebAfterReadUtils").isAfterReadEnabled()) return null;
      var t = o("WAWebStateUtils").unproxy(e),
        n;
      if (o("WAWebChatGetters").getIsGroup(t)) {
        var r;
        n = (r = t.groupMetadata) == null ? void 0 : r.afterReadDuration;
      } else n = t.afterReadDuration;
      return n == null || n <= 0 ? null : n;
    }
    ((l.getEphemeralSetting = u),
      (l.calculateEphemeralDurationForChat = c),
      (l.getEphemeralSettingTimestamp = d),
      (l.isEphemeralSettingOn = m),
      (l.shouldShowEphemeralSetting = p),
      (l.getDisappearingModeInitiator = _),
      (l.getDisappearingModeTrigger = f),
      (l.getDisappearingModeInitiatedByMe = g),
      (l.getDisappearingModeTriggerGroups = h),
      (l.getDisappearingModeInitiatedByMeGroups = y),
      (l.getChatEphemeralityFields = C),
      (l.getAfterReadDurationForChat = b));
  },
  98,
);
