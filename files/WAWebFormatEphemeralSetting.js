__d(
  "WAWebFormatEphemeralSetting",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebChatEphemerality",
    "WAWebContactCollection",
    "WAWebEphemeralConstants",
    "WAWebEphemeralFbtKic",
    "WAWebEphemeralityTypes",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e) {
      var t,
        n = h(e),
        a = n.initiatingUser,
        i = n.newDuration,
        l = o("WAWebUserPrefsMeUser").isMeAccount(r("WANullthrows")(a));
      if (
        o("WAWebAfterReadUtils").isAfterReadDuration(i) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
      ) {
        var s = null;
        if (!l) {
          var u = o("WAWebContactCollection").ContactCollection.gadd(
            r("WANullthrows")(a),
          );
          s = o("WAWebFrontendContactGetters").getFormattedName(u);
        }
        return d({ initiatorIsMe: l, initiatorUsername: s, newDuration: i });
      }
      if (l) t = o("WAWebEphemeralFbtKic").getDisappearingModeYouStringKic(i);
      else {
        var c = o("WAWebContactCollection").ContactCollection.gadd(
          r("WANullthrows")(a),
        );
        t = o("WAWebEphemeralFbtKic").getDisappearingModeOtherStringKic(
          i,
          o("WAWebFrontendContactGetters").getFormattedName(c),
        );
      }
      return t;
    }
    function d(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername,
        r = e.newDuration,
        o = m({ initiatorIsMe: t, initiatorUsername: n }),
        a = v(r),
        i = p({ initiatorIsMe: t });
      return s._(/*BTDS*/ "{ddm-event} {ddm-explanation} {ddm-action}", [
        s._param("ddm-event", o),
        s._param("ddm-explanation", a),
        s._param("ddm-action", i),
      ]);
    }
    function m(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername;
      return t
        ? s._(
            /*BTDS*/ "You use a default timer for disappearing messages in new chats.",
          )
        : n != null
          ? s._(
              /*BTDS*/ "{name} uses a default timer for disappearing messages in new chats.",
              [s._param("name", n)],
            )
          : s._(
              /*BTDS*/ "A default timer for disappearing messages is used in new chats.",
            );
    }
    function p(e) {
      var t = e.initiatorIsMe;
      return t
        ? s._(/*BTDS*/ "Click to change your default timer.")
        : s._(/*BTDS*/ "Click to set your own default timer.");
    }
    function _(e) {
      return S(o("WAWebStateUtils").unproxy(e.unsafe()));
    }
    function f(e) {
      if (o("WAWebFrontendMsgGetters").getChat(e) != null)
        for (
          var t = o("WAWebFrontendMsgGetters").getChat(e).msgs,
            n = t.indexOf(e),
            r = n - 1;
          r >= 0;
          r--
        ) {
          var a = t.at(r);
          if (
            a != null &&
            a.type !== "debug" &&
            (a.type !== "gp2" || a.subtype === "ephemeral")
          )
            return a;
        }
    }
    function g(e) {
      var t = f(e);
      return (
        t != null &&
        ((t.ephemeralDuration != null && t.ephemeralDuration > 0) ||
          ((t.subtype === "ephemeral" || t.subtype === "disappearing_mode") &&
            t.templateParams[0] != null &&
            t.templateParams[0] !== "0"))
      );
    }
    function h(e) {
      var t, n;
      if (
        (e.templateParams.length
          ? ((n = parseInt(e.templateParams[0], 10)),
            e.templateParams[1] instanceof r("WAWebWid") &&
              (t = e.templateParams[1]))
          : ((t = e.ephemeralSettingUser), (n = e.ephemeralDuration)),
        e.afterReadDuration != null &&
          e.afterReadDuration > 0 &&
          (n = e.afterReadDuration),
        n == null)
      )
        throw r("err")("Duration cannot be null for DM notification");
      return {
        newDuration: n != null ? n : 0,
        disappearingModeTrigger: null,
        initiatingUser: t,
      };
    }
    function y(e) {
      var t;
      e.ephemeralSettingUser !== void 0
        ? (t = e.ephemeralSettingUser)
        : (t = e.from);
      var n = e.ephemeralDuration;
      return (
        e.afterReadDuration != null &&
          e.afterReadDuration > 0 &&
          (n = e.afterReadDuration),
        {
          newDuration: n != null ? n : 0,
          disappearingModeTrigger: e.disappearingModeTrigger,
          initiatingUser: t,
        }
      );
    }
    function C(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername,
        r = e.state;
      return t
        ? r === "update"
          ? s._(/*BTDS*/ "You updated the message timer.")
          : r === "on"
            ? s._(/*BTDS*/ "You turned on disappearing messages.")
            : s._(/*BTDS*/ "You turned off disappearing messages.")
        : n != null
          ? r === "update"
            ? s._(/*BTDS*/ "{name} updated the message timer.", [
                s._param("name", n),
              ])
            : r === "on"
              ? s._(/*BTDS*/ "{name} turned on disappearing messages.", [
                  s._param("name", n),
                ])
              : s._(/*BTDS*/ "{name} turned off disappearing messages.", [
                  s._param("name", n),
                ])
          : r === "update"
            ? s._(/*BTDS*/ "The message timer was updated.")
            : r === "on"
              ? s._(/*BTDS*/ "Disappearing messages was turned on.")
              : s._(/*BTDS*/ "Disappearing messages was turned off.");
    }
    function b(t) {
      var n = o("WAWebEphemeralConstants").getDurationForString(t),
        r = n.duration,
        a = n.unit;
      switch (a) {
        case o("WAWebEphemeralConstants").DurationUnit.Seconds:
          return s._(/*BTDS*/ '_j{"*":"{duration} seconds","_1":"1 second"}', [
            s._plural(r, "duration"),
          ]);
        case o("WAWebEphemeralConstants").DurationUnit.Minutes:
          return s._(/*BTDS*/ '_j{"*":"{duration} minutes","_1":"1 minute"}', [
            s._plural(r, "duration"),
          ]);
        case o("WAWebEphemeralConstants").DurationUnit.Hours:
          return s._(/*BTDS*/ '_j{"*":"{duration} hours","_1":"1 hour"}', [
            s._plural(r, "duration"),
          ]);
        case o("WAWebEphemeralConstants").DurationUnit.Days:
          return s._(/*BTDS*/ '_j{"*":"{duration} days","_1":"1 day"}', [
            s._plural(r, "duration"),
          ]);
        case o("WAWebEphemeralConstants").DurationUnit.Weeks:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getDisappearingMessageDurationString] weeks unsupported",
                ])),
            ),
            s._(/*BTDS*/ '_j{"*":"{duration} weeks","_1":"1 week"}', [
              s._plural(r, "duration"),
            ])
          );
      }
    }
    function v(e) {
      var t = b(e);
      return o("WAWebAfterReadUtils").isAfterReadDuration(e) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? s._(
            /*BTDS*/ "New messages will disappear from this chat {dm-duration} after they're sent or read.",
            [s._param("dm-duration", t)],
          )
        : s._(
            /*BTDS*/ "New messages will disappear from this chat {dm-duration} after they're sent, except when kept.",
            [s._param("dm-duration", t)],
          );
    }
    function S(e) {
      var t,
        n = null;
      switch (e.type) {
        case "gp2":
        case "notification_template":
          n = h(e);
          break;
        case "protocol":
          n = y(e);
          break;
        default:
          break;
      }
      if (n == null)
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Cannot parse msg to build DM system message",
                ])),
            )
            .tags("DM", "DDM"),
          r("err")("Cannot parse msg to build DM system message")
        );
      var a = null,
        i = o("WAWebUserPrefsMeUser").isMePrimary(n.initiatingUser);
      if (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        n.disappearingModeTrigger ===
          o("WAWebEphemeralityTypes").DisappearingModeTrigger
            .BizSupportFbHosting
      )
        return R(i);
      var l = null;
      if (
        (n.newDuration ? (g(e) ? (l = "update") : (l = "on")) : (l = "off"),
        l === "update" &&
          !o("WAWebABProps").getABPropConfigValue(
            "dm_updated_system_message",
          ) &&
          (l = "on"),
        n.initiatingUser != null && !i)
      ) {
        var s = o("WAWebContactCollection").ContactCollection.gadd(
          n.initiatingUser,
        );
        a = o("WAWebFrontendContactGetters").getIsMyContact(s)
          ? o("WAWebFrontendContactGetters").getFormattedName(s)
          : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(s);
      }
      var c = o("WAWebFrontendMsgGetters").getMaybeChat(e),
        d =
          c &&
          o("WAWebChatEphemerality").shouldShowEphemeralSetting(c) &&
          (r("WAWebWid").isUser(c.id) ||
            ((t = c.groupMetadata) == null
              ? void 0
              : t.canSetEphemeralSetting()));
      return L({
        newDuration: n.newDuration,
        state: l,
        initiatorUsername: a,
        initiatorIsMe: i,
        userCanChange: d === !0,
      });
    }
    function R(e) {
      var t = s._(
          /*BTDS*/ "Disappearing messages are no longer supported with this business.",
        ),
        n = s._(
          /*BTDS*/ "Disappearing messages are no longer supported with your business.",
        );
      return e ? n : t;
    }
    function L(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername,
        r = e.newDuration,
        o = e.state,
        a = e.userCanChange,
        i = C({ initiatorUsername: n, initiatorIsMe: t, state: o }),
        l = s._(/*BTDS*/ "Click to change.");
      if (!r)
        return a !== !0
          ? i
          : s._(/*BTDS*/ "{dm-sm-event} {dm-sm-action}", [
              s._param("dm-sm-event", i),
              s._param("dm-sm-action", l),
            ]);
      var u = v(r);
      return a !== !0
        ? s._(/*BTDS*/ "{dm-sm-event} {dm-sm-explanation}", [
            s._param("dm-sm-event", i),
            s._param("dm-sm-explanation", u),
          ])
        : s._(/*BTDS*/ "{dm-sm-event} {dm-sm-explanation} {dm-sm-action}", [
            s._param("dm-sm-event", i),
            s._param("dm-sm-explanation", u),
            s._param("dm-sm-action", l),
          ]);
    }
    function E() {
      return s._(
        /*BTDS*/ "Disappearing messages are not supported in this chat. Your messages will not disappear.",
      );
    }
    ((l.getDefaultDisappearingModeSystemMessageText = c),
      (l.buildDefaultDisappearingModeARSystemMessage = d),
      (l.getDisappearingModeUpdateSystemMessageText = _),
      (l.getDisappearingMessageDurationString = b),
      (l.formatEphemeralSetting = S),
      (l.buildEphemeralSystemMessage = L),
      (l.getDMUnsupportedSystemMessageText = E));
  },
  226,
);
