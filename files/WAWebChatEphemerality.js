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
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["contact"],
      s,
      u;
    function c(e) {
      return d(y(e));
    }
    function d(e) {
      var t = e.chatId,
        n = e.ephemeralDuration,
        r = e.groupMetadata,
        a = t.isGroup() ? (r == null ? void 0 : r.ephemeralDuration) : n;
      return a == null || a === 0
        ? null
        : a < 0
          ? (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ephemeral] invalid duration of ",
                  " for chat ",
                  "",
                ])),
              a,
              t.toLogString(),
            ),
            null)
          : a;
    }
    function m(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n,
        r = E(t);
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function p(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t) ||
        t.ephemeralSettingTimestamp === 0
        ? null
        : t.ephemeralSettingTimestamp;
    }
    function _(e) {
      return f(y(e));
    }
    function f(e) {
      var t = d(e);
      return t != null && t !== 0;
    }
    function g(e) {
      return h(
        babelHelpers.extends({}, y(e), {
          contact: o("WAWebStateUtils").unproxy(e).contact,
        }),
      );
    }
    function h(t) {
      var n = t.contact,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chatId,
        l = a.groupMetadata,
        s = i.isGroup();
      if (
        (o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() &&
          !s) ||
        r("WAWebWid").isPSA(i) ||
        i.isBot() ||
        i.isAiHub()
      )
        return !1;
      if (s) {
        var u = l == null ? void 0 : l.participants.getSuperAdmin();
        if (
          (u != null && u.contact.isEnterprise) ||
          (!(l != null && l.canSetEphemeralSetting()) && !f(a))
        )
          return !1;
      }
      return !(
        r("WAWebWid").isBroadcast(i) ||
        n.isEnterprise ||
        o(
          "WAWebEphemeralityFrontendUtils",
        ).isEphemeralityDisabledInUIForContact(n)
      );
    }
    function y(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return {
        chatId: t.id,
        ephemeralDuration: t.ephemeralDuration,
        groupMetadata: t.groupMetadata,
      };
    }
    function C(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.disappearingModeInitiator != null
        ? t.disappearingModeInitiator
        : _(t)
          ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat
          : null;
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t)
        ? S(t)
        : t.disappearingModeTrigger != null
          ? t.disappearingModeTrigger
          : _(t)
            ? o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings
            : null;
    }
    function v(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(t)
        ? R(t)
        : t.disappearingModeInitiatedByMe != null
          ? t.disappearingModeInitiatedByMe
          : null;
    }
    function S(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r = (t = n.groupMetadata) == null ? void 0 : t.disappearingModeTrigger;
      return r == null ? null : r;
    }
    function R(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r =
          (t = n.groupMetadata) == null
            ? void 0
            : t.disappearingModeInitiatedByMe;
      return r == null ? null : r;
    }
    function L(e) {
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
    function E(e) {
      if (!o("WAWebAfterReadUtils").isAfterReadEnabled()) return null;
      var t = o("WAWebStateUtils").unproxy(e),
        n;
      if (o("WAWebChatGetters").getIsGroup(t)) {
        var r;
        n = (r = t.groupMetadata) == null ? void 0 : r.afterReadDuration;
      } else n = t.afterReadDuration;
      return n == null || n <= 0 ? null : n;
    }
    function k(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = I(t);
      return {
        ephemeralDuration:
          n != null
            ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
            : c(t),
        afterReadDuration: n,
      };
    }
    function I(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = E(t);
      if (n != null) return n;
      var r = c(t);
      return r == null
        ? null
        : o("WAWebAfterReadUtils").isAfterReadDuration(r) &&
            o("WAWebAfterReadUtils").isAfterReadEnabled()
          ? r
          : null;
    }
    ((l.getEphemeralSetting = c),
      (l.getEphemeralSettingFor = d),
      (l.calculateEphemeralDurationForChat = m),
      (l.getEphemeralSettingTimestamp = p),
      (l.isEphemeralSettingOn = _),
      (l.isEphemeralSettingOnFor = f),
      (l.shouldShowEphemeralSetting = g),
      (l.shouldShowEphemeralSettingFor = h),
      (l.getDisappearingModeInitiator = C),
      (l.getDisappearingModeTrigger = b),
      (l.getDisappearingModeInitiatedByMe = v),
      (l.getDisappearingModeTriggerGroups = S),
      (l.getDisappearingModeInitiatedByMeGroups = R),
      (l.getChatEphemeralityFields = L),
      (l.getAfterReadDurationForChat = E),
      (l.getAfterReadEnvelopeForChat = k),
      (l.getInferredAfterReadDurationForChat = I));
  },
  98,
);
