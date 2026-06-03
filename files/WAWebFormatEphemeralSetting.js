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
        n = b(e),
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
        o = m({ initiatorIsMe: t, initiatorUsername: n, newDuration: r }),
        a = o.ctaText,
        i = o.text;
      return a == null
        ? i
        : s._(/*BTDS*/ "{ddm-body} {ddm-action}", [
            s._param("ddm-body", i),
            s._param("ddm-action", a),
          ]);
    }
    function m(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername,
        r = e.newDuration,
        o = p({ initiatorIsMe: t, initiatorUsername: n }),
        a = L(r),
        i = _({ initiatorIsMe: t });
      return {
        text: s._(/*BTDS*/ "{ddm-event} {ddm-explanation}", [
          s._param("ddm-event", o),
          s._param("ddm-explanation", a),
        ]),
        ctaText: i,
      };
    }
    function p(e) {
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
    function _(e) {
      var t = e.initiatorIsMe;
      return o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? t
          ? s._(/*BTDS*/ "Change timer.")
          : s._(/*BTDS*/ "Set your own default timer.")
        : t
          ? s._(/*BTDS*/ "Click to change your default timer.")
          : s._(/*BTDS*/ "Click to set your own default timer.");
    }
    function f(e) {
      return k(o("WAWebStateUtils").unproxy(e.unsafe()));
    }
    function g(e) {
      var t = b(e),
        n = t.initiatingUser,
        a = t.newDuration,
        i = o("WAWebUserPrefsMeUser").isMeAccount(r("WANullthrows")(n)),
        l = null;
      if (!i) {
        var u = o("WAWebContactCollection").ContactCollection.gadd(
          r("WANullthrows")(n),
        );
        l = o("WAWebFrontendContactGetters").getFormattedName(u);
      }
      if (
        o("WAWebAfterReadUtils").isAfterReadDuration(a) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
      )
        return m({ initiatorIsMe: i, initiatorUsername: l, newDuration: a });
      var c = p({ initiatorIsMe: i, initiatorUsername: l }),
        d = o(
          "WAWebEphemeralFbtKic",
        ).getDisappearingMessageExplanationStringKic(a),
        f = _({ initiatorIsMe: i });
      return {
        text: s._(/*BTDS*/ "{ddm-event} {ddm-explanation}", [
          s._param("ddm-event", c),
          s._param("ddm-explanation", d),
        ]),
        ctaText: f,
      };
    }
    function h(e) {
      return I(o("WAWebStateUtils").unproxy(e.unsafe()));
    }
    function y(e) {
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
    function C(e) {
      var t = y(e);
      return (
        t != null &&
        ((t.ephemeralDuration != null && t.ephemeralDuration > 0) ||
          ((t.subtype === "ephemeral" || t.subtype === "disappearing_mode") &&
            t.templateParams[0] != null &&
            t.templateParams[0] !== "0"))
      );
    }
    function b(e) {
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
    function v(e) {
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
    function S(e) {
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
              ? s._(/*BTDS*/ "Disappearing messages were turned on.")
              : s._(/*BTDS*/ "Disappearing messages were turned off.");
    }
    function R(t) {
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
    function L(e) {
      var t = R(e);
      return s._(
        /*BTDS*/ "New messages will disappear from this chat {dm-duration} after they're read, except when kept.",
        [s._param("dm-duration", t)],
      );
    }
    function E(e) {
      var t = R(e);
      return o("WAWebAfterReadUtils").isAfterReadDuration(e) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? s._(
            /*BTDS*/ "New messages in this chat will disappear {dm-duration} after they're read, except when kept.",
            [s._param("dm-duration", t)],
          )
        : s._(
            /*BTDS*/ "New messages will disappear from this chat {dm-duration} after they're sent, except when kept.",
            [s._param("dm-duration", t)],
          );
    }
    function k(e) {
      var t = I(e),
        n = t.ctaText,
        r = t.text;
      return n == null
        ? r
        : s._(/*BTDS*/ "{dm-sm-body} {dm-sm-action}", [
            s._param("dm-sm-body", r),
            s._param("dm-sm-action", n),
          ]);
    }
    function I(e) {
      var t,
        n = null;
      switch (e.type) {
        case "gp2":
        case "notification_template":
          n = b(e);
          break;
        case "protocol":
          n = v(e);
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
        return { text: T(i), ctaText: null };
      var l = null;
      if (
        (n.newDuration ? (C(e) ? (l = "update") : (l = "on")) : (l = "off"),
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
      return D({
        newDuration: n.newDuration,
        state: l,
        initiatorUsername: a,
        initiatorIsMe: i,
        userCanChange: d === !0,
      });
    }
    function T(e) {
      var t = s._(
          /*BTDS*/ "Disappearing messages are no longer supported with this business.",
        ),
        n = s._(
          /*BTDS*/ "Disappearing messages are no longer supported with your business.",
        );
      return e ? n : t;
    }
    function D(e) {
      var t = e.initiatorIsMe,
        n = e.initiatorUsername,
        r = e.newDuration,
        a = e.state,
        i = e.userCanChange,
        l = S({ initiatorUsername: n, initiatorIsMe: t, state: a }),
        u = o("WAWebAfterReadUtils").isAfterReadEnabled()
          ? s._(/*BTDS*/ "Change timer.")
          : s._(/*BTDS*/ "Click to change.");
      if (!r)
        return i !== !0 ? { text: l, ctaText: null } : { text: l, ctaText: u };
      var c = E(r);
      return i !== !0
        ? {
            text: s._(/*BTDS*/ "{dm-sm-event} {dm-sm-explanation}", [
              s._param("dm-sm-event", l),
              s._param("dm-sm-explanation", c),
            ]),
            ctaText: null,
          }
        : {
            text: s._(/*BTDS*/ "{dm-sm-event} {dm-sm-explanation}", [
              s._param("dm-sm-event", l),
              s._param("dm-sm-explanation", c),
            ]),
            ctaText: u,
          };
    }
    function x(e) {
      var t = D(e),
        n = t.ctaText,
        r = t.text;
      return n == null
        ? r
        : s._(/*BTDS*/ "{dm-sm-body} {dm-sm-action}", [
            s._param("dm-sm-body", r),
            s._param("dm-sm-action", n),
          ]);
    }
    function $() {
      return s._(
        /*BTDS*/ "Disappearing messages are not supported in this chat. Your messages will not disappear.",
      );
    }
    ((l.getDefaultDisappearingModeSystemMessageText = c),
      (l.buildDefaultDisappearingModeARSystemMessage = d),
      (l.buildDefaultDisappearingModeARSystemMessageParts = m),
      (l.getDisappearingModeUpdateSystemMessageText = f),
      (l.getDefaultDisappearingModeParts = g),
      (l.getDisappearingModeUpdateParts = h),
      (l.getDisappearingMessageDurationString = R),
      (l.formatEphemeralSetting = k),
      (l.buildEphemeralSystemMessageParts = D),
      (l.buildEphemeralSystemMessage = x),
      (l.getDMUnsupportedSystemMessageText = $));
  },
  226,
);
