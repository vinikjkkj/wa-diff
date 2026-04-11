__d(
  "WAWebEphemeralityResolver",
  ["WALogger", "WATimeUtils", "WAWebAfterReadUtils", "WAWebEphemeralityTypes"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
      if (!t)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForUser: empty contact",
              ])),
          ),
          null
        );
      var n = t.disappearingModeDuration,
        r = t.disappearingModeSettingTimestamp;
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForUser ",
                " dur=",
                " ts=",
                "",
              ])),
            t.id.toString(),
            n,
            r,
          )
          .tags("DM", "DDM"),
        n == null || n === 0
          ? null
          : { duration: n, settingTimestamp: r != null ? r : 0 }
      );
    }
    function m(e) {
      var t = d(e);
      return t != null ? t.duration : null;
    }
    function p(e) {
      return e != null ? e : 0;
    }
    function _(e) {
      return e != null
        ? e
        : o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
    }
    function f(e) {
      return e != null ? e : o("WATimeUtils").unixTime();
    }
    function g(e) {
      return e != null
        ? e
        : o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings;
    }
    function h(e, t) {
      var n =
        t ===
        o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe;
      return e != null ? e : n;
    }
    function y(e) {
      return e == null ||
        (e.duration == null &&
          e.settingTimestamp == null &&
          e.initiator == null)
        ? null
        : {
            duration: p(e.duration),
            settingTimestamp: f(e.settingTimestamp),
            initiator: _(e.initiator),
            disappearingModeTrigger: g(e.disappearingModeTrigger),
            initiatedByMe: h(e.initiatedByMe, e.initiator),
            afterReadDuration: e.afterReadDuration,
          };
    }
    function C(e, t) {
      return (
        (e == null ? void 0 : e.duration) ===
          (t == null ? void 0 : t.duration) &&
        (e == null ? void 0 : e.settingTimestamp) ===
          (t == null ? void 0 : t.settingTimestamp) &&
        (e == null ? void 0 : e.initiator) ===
          (t == null ? void 0 : t.initiator)
      );
    }
    function b(e) {
      return o("WAWebAfterReadUtils").isAfterReadDuration(e.duration) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? babelHelpers.extends({}, e, {
            duration: o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
            afterReadDuration: e.duration,
          })
        : e;
    }
    function v(e, t) {
      var n = m(e),
        r = m(t);
      if (n == null && r == null)
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM setting for chat is null",
                ])),
            )
            .tags("DM", "DDM"),
          null
        );
      var a;
      n != null &&
        (a = {
          duration: n,
          settingTimestamp: o("WATimeUtils").unixTime(),
          initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator
            .InitiatedByMe,
          disappearingModeTrigger: o("WAWebEphemeralityTypes")
            .DisappearingModeTrigger.AccountSettings,
          initiatedByMe: !0,
        });
      var i;
      r != null &&
        (i = {
          duration: r,
          settingTimestamp: o("WATimeUtils").unixTime(),
          initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator
            .InitiatedByOther,
          disappearingModeTrigger: o("WAWebEphemeralityTypes")
            .DisappearingModeTrigger.AccountSettings,
          initiatedByMe: !1,
        });
      var l;
      return (
        a != null && i != null
          ? i.duration < a.duration
            ? (l = i)
            : (l = a)
          : (l = a != null ? a : i),
        l == null ? null : b(l)
      );
    }
    function S(e, t) {
      var n = y(e);
      if (n == null && t == null) return null;
      if (n != null && t == null)
        return {
          duration: n.duration,
          settingTimestamp: n.settingTimestamp,
          initiator:
            n.initiator ===
            o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe
              ? o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .ChangedInChat
              : n.initiator,
          disappearingModeTrigger: o("WAWebEphemeralityTypes")
            .DisappearingModeTrigger.ChatSettings,
          initiatedByMe:
            n.initiator ===
            o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe,
          afterReadDuration: n.afterReadDuration,
        };
      if (n == null && t != null)
        return {
          duration: t.duration,
          settingTimestamp: f(t.settingTimestamp),
          initiator: _(t.initiator),
          disappearingModeTrigger: g(t.disappearingModeTrigger),
          initiatedByMe: t.initiatedByMe,
          afterReadDuration: t.afterReadDuration,
        };
      if (n != null && t != null) {
        var r, a;
        return n.settingTimestamp > ((r = t.settingTimestamp) != null ? r : 0)
          ? babelHelpers.extends({}, n)
          : n.settingTimestamp < ((a = t.settingTimestamp) != null ? a : 0)
            ? {
                duration: t.duration,
                settingTimestamp: f(t.settingTimestamp),
                initiator: _(t.initiator),
                disappearingModeTrigger: g(t.disappearingModeTrigger),
                initiatedByMe: t.initiatedByMe,
                afterReadDuration: t.afterReadDuration,
              }
            : babelHelpers.extends({}, n, {
                initiator:
                  t.initiator ===
                  o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .ChangedInChat
                    ? o("WAWebEphemeralityTypes").DisappearingModeInitiator
                        .ChangedInChat
                    : n.initiator,
              });
      }
    }
    function R(e, t) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[DMResolve] resolving new incoming chat DM settings",
          ])),
      );
      var n = y(e),
        r = p(t);
      if (n == null && r === 0) return null;
      if (n != null && r === 0)
        return {
          duration: n.duration,
          settingTimestamp: n.settingTimestamp,
          initiator:
            n.initiator ===
            o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe
              ? o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .ChangedInChat
              : n.initiator,
          disappearingModeTrigger: n.disappearingModeTrigger,
          initiatedByMe: n.initiatedByMe,
          afterReadDuration: n.afterReadDuration,
        };
      if (n == null && r > 0)
        return b({
          duration: r,
          settingTimestamp: o("WATimeUtils").unixTime(),
          initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator
            .InitiatedByMe,
          disappearingModeTrigger: o("WAWebEphemeralityTypes")
            .DisappearingModeTrigger.AccountSettings,
          initiatedByMe: !0,
        });
      if (n != null && r > 0) {
        if (
          n.initiator ===
            o("WAWebEphemeralityTypes").DisappearingModeInitiator
              .ChangedInChat ||
          (n.duration > 0 && n.duration < r)
        ) {
          var a = n.initiator,
            i = n.initiatedByMe;
          return (
            a ===
              o("WAWebEphemeralityTypes").DisappearingModeInitiator
                .InitiatedByMe &&
              ((a = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                .ChangedInChat),
              (i = !0)),
            {
              initiator: a,
              settingTimestamp: n.settingTimestamp,
              duration: n.duration,
              disappearingModeTrigger: n.disappearingModeTrigger,
              initiatedByMe: i,
              afterReadDuration: n.afterReadDuration,
            }
          );
        }
        return r < n.duration
          ? b({
              duration: r,
              settingTimestamp: o("WATimeUtils").unixTime(),
              initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator
                .InitiatedByMe,
              disappearingModeTrigger: o("WAWebEphemeralityTypes")
                .DisappearingModeTrigger.AccountSettings,
              initiatedByMe: !0,
            })
          : babelHelpers.extends({}, n);
      }
    }
    ((l.getDisappearingModeSettingForUser = d),
      (l.getEphemeralDurationForUser = m),
      (l.resolveEphermalityDuration = p),
      (l.resolveDisappearingModeInitiator = _),
      (l.resolveSettingTimestamp = f),
      (l.resolveDisappearingModeTrigger = g),
      (l.resolveDisappearingModeInitiatedByMe = h),
      (l.compareEphemeralityFields = C),
      (l.resolveNewChatDMSettings = v),
      (l.resolveExistingChatDMSettings = S),
      (l.resolveNewIncomingChatDMSettings = R));
  },
  98,
);
