__d(
  "WAWebEphemeralL10N",
  ["fbt", "$InternalEnum", "WALogger", "WAWebL10N", "WAWebMiscGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = n("$InternalEnum").Mirrored([
        "SettingChangeByOthers",
        "SettingChangeByYou",
        "SettingChangeByUnknown",
        "SettingChangeByOthersAsAdmin",
        "SettingChangeByYouAsAdmin",
        "SettingChangeByUnknownAsAdmin",
        "Duration",
        "OutOfSyncInfo",
        "Explanation",
        "ModeChangeByOthers",
        "ModeChangeByYou",
      ]);
    function f(e, t) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByOthers, e, t));
    }
    function g(e) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByYou, e));
    }
    function h(e) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByUnknown, e));
    }
    function y(e, t) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByOthersAsAdmin, e, t));
    }
    function C(e) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByYouAsAdmin, e));
    }
    function b(e) {
      return (e === void 0 && (e = 0), k(_.SettingChangeByUnknownAsAdmin, e));
    }
    function v(e) {
      return (e === void 0 && (e = 0), k(_.Duration, e));
    }
    function S(e) {
      return (e === void 0 && (e = 0), k(_.OutOfSyncInfo, e));
    }
    function R(e) {
      return (e === void 0 && (e = 0), k(_.Explanation, e));
    }
    function L(e, t) {
      return (e === void 0 && (e = 0), k(_.ModeChangeByOthers, e, t));
    }
    function E(e) {
      return (e === void 0 && (e = 0), k(_.ModeChangeByYou, e));
    }
    function k(t, n, r) {
      if ((n === void 0 && (n = 0), n < 0))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getEphemeralString ",
                  " is given invalid duration ",
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("invalid-duration"),
          ""
        );
      if (n === 0) return I(t, r);
      if (n <= 60) return T(t, n, r);
      if (n < 3600) {
        var a = Math.floor(n / 60);
        return D(t, a, r);
      } else if (n <= 1440 * 60) {
        var i = Math.floor(n / 60 / 60);
        return x(t, i, r);
      }
      var l = Math.floor(n / 24 / 60 / 60);
      return $(t, l, r);
    }
    function I(e, t) {
      return e === _.SettingChangeByOthers && t != null
        ? s._(/*BTDS*/ "{name} turned off disappearing messages.", [
            s._param("name", t),
          ])
        : e === _.SettingChangeByYou
          ? s._(/*BTDS*/ "You turned off disappearing messages.")
          : e === _.SettingChangeByUnknown
            ? s._(/*BTDS*/ "Disappearing messages were turned off.")
            : e === _.SettingChangeByOthersAsAdmin && t != null
              ? s._(
                  /*BTDS*/ "{name} turned off disappearing messages. Click to change.",
                  [s._param("name", t)],
                )
              : e === _.SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ "You turned off disappearing messages. Click to change.",
                  )
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ "Disappearing messages were turned off. Click to change.",
                    )
                  : e === _.Duration
                    ? s._(/*BTDS*/ "Off")
                    : e === _.OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ "This message will not disappear from the chat. The sender may be on an old version of WhatsApp.",
                        )
                      : (o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "getEphemeralOffString is given invalid type ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("invalid-ephemeral-string-type"),
                        "");
    }
    function T(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they\'re sent.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 second after they\'re sent."}',
            [s._plural(t, "number"), s._param("name", n)],
          )
        : e === _.SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they\'re sent.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 second after they\'re sent."}',
              [s._plural(t, "number")],
            )
          : e === _.SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} seconds after they\'re sent.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 second after they\'re sent."}',
                [s._plural(t, "number")],
              )
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to change.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 second after they\'re sent. Click to change."}',
                  [s._plural(t, "number"), s._param("name", n)],
                )
              : e === _.SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to change.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 second after they\'re sent. Click to change."}',
                    [s._plural(t, "number")],
                  )
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to change.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 second after they\'re sent. Click to change."}',
                      [s._plural(t, "number")],
                    )
                  : e === _.Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number} seconds","_1":"1 second"}',
                        [s._plural(t, "number")],
                      )
                    : e === _.OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number} seconds after it\'s sent.","_1":"This message will disappear from this chat 1 second after it\'s sent."}',
                          [s._plural(t, "number")],
                        )
                      : e === _.Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"All new messages will disappear from this chat {number} seconds after they\'re sent.","_1":"All new messages will disappear from this chat 1 second after they\'re sent."}',
                            [s._plural(t, "number")],
                          )
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to set your own default timer.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 second after they\'re sent. Click to set your own default timer."}',
                                [s._plural(t, "number"), s._param("name", n)],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to learn more.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} second after they\'re sent. Click to learn more."}',
                                [
                                  s._plural(t),
                                  s._param("name", n),
                                  s._param("number", i),
                                ],
                              )
                          : e === _.ModeChangeByYou && a
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they\'re sent. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 second after they\'re sent. Click to change your default timer."}',
                                [s._plural(t, "number")],
                              )
                            : (o("WALogger")
                                .ERROR(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnSecondsString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function D(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they\'re sent.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 minute after they\'re sent."}',
            [s._plural(t, "number"), s._param("name", n)],
          )
        : e === _.SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they\'re sent.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 minute after they\'re sent."}',
              [s._plural(t, "number")],
            )
          : e === _.SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} minutes after they\'re sent.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 minute after they\'re sent."}',
                [s._plural(t, "number")],
              )
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to change.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 minute after they\'re sent. Click to change."}',
                  [s._plural(t, "number"), s._param("name", n)],
                )
              : e === _.SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to change.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 minute after they\'re sent. Click to change."}',
                    [s._plural(t, "number")],
                  )
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to change.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 minute after they\'re sent. Click to change."}',
                      [s._plural(t, "number")],
                    )
                  : e === _.Duration
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number} minutes","_1":"1 minute"}',
                        [s._plural(t, "number")],
                      )
                    : e === _.OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number} minutes after it\'s sent.","_1":"This message will disappear from this chat 1 minute after it\'s sent."}',
                          [s._plural(t, "number")],
                        )
                      : e === _.Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"All new messages will disappear from this chat {number} minutes after they\'re sent.","_1":"All new messages will disappear from this chat 1 minute after they\'re sent."}',
                            [s._plural(t, "number")],
                          )
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to set your own default timer.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 minute after they\'re sent. Click to set your own default timer."}',
                                [s._plural(t, "number"), s._param("name", n)],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to learn more.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minute after they\'re sent. Click to learn more."}',
                                [
                                  s._plural(t),
                                  s._param("name", n),
                                  s._param("number", i),
                                ],
                              )
                          : e === _.ModeChangeByYou && a
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they\'re sent. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 minute after they\'re sent. Click to change your default timer."}',
                                [s._plural(t, "number")],
                              )
                            : (o("WALogger")
                                .ERROR(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnMinutesString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function x(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} hours after they\'re sent.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 hour after they\'re sent."}',
            [s._plural(t, "number"), s._param("name", n)],
          )
        : e === _.SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} hours after they\'re sent.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 hour after they\'re sent."}',
              [s._plural(t, "number")],
            )
          : e === _.SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} hours after they\'re sent.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 hour after they\'re sent."}',
                [s._plural(t, "number")],
              )
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} hours after they\'re sent. Click to change.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 hour after they\'re sent. Click to change."}',
                  [s._plural(t, "number"), s._param("name", n)],
                )
              : e === _.SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} hours after they\'re sent. Click to change.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 hour after they\'re sent. Click to change."}',
                    [s._plural(t, "number")],
                  )
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} hours after they\'re sent. Click to change.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 hour after they\'re sent. Click to change."}',
                      [s._plural(t, "number")],
                    )
                  : e === _.Duration
                    ? s._(/*BTDS*/ '_j{"*":"{number} hours","_1":"1 hour"}', [
                        s._plural(t, "number"),
                      ])
                    : e === _.OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number} hours after it\'s sent.","_1":"This message will disappear from this chat 1 hour after it\'s sent."}',
                          [s._plural(t, "number")],
                        )
                      : e === _.Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"All new messages will disappear from this chat {number} hours after they\'re sent.","_1":"All new messages will disappear from this chat 1 hour after they\'re sent."}',
                            [s._plural(t, "number")],
                          )
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they\'re sent. Click to set your own default timer.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 hour after they\'re sent. Click to set your own default timer."}',
                                [s._plural(t, "number"), s._param("name", n)],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they\'re sent. Click to learn more.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hour after they\'re sent. Click to learn more."}',
                                [
                                  s._plural(t),
                                  s._param("name", n),
                                  s._param("number", i),
                                ],
                              )
                          : e === _.ModeChangeByYou && a
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they\'re sent. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 hour after they\'re sent. Click to change your default timer."}',
                                [s._plural(t, "number")],
                              )
                            : (o("WALogger")
                                .ERROR(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnHoursString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    function $(e, t, n) {
      var a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        i = r("WAWebL10N").n(t);
      return e === _.SettingChangeByOthers && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} days after they\'re sent.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 day after they\'re sent."}',
            [s._plural(t, "number"), s._param("name", n)],
          )
        : e === _.SettingChangeByYou
          ? s._(
              /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} days after they\'re sent.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 day after they\'re sent."}',
              [s._plural(t, "number")],
            )
          : e === _.SettingChangeByUnknown
            ? s._(
                /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} days after they\'re sent.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 day after they\'re sent."}',
                [s._plural(t, "number")],
              )
            : e === _.SettingChangeByOthersAsAdmin && n != null
              ? s._(
                  /*BTDS*/ '_j{"*":"{name} turned on disappearing messages. All new messages will disappear from this chat {number} days after they\'re sent. Click to change.","_1":"{name} turned on disappearing messages. All new messages will disappear from this chat 1 day after they\'re sent. Click to change."}',
                  [s._plural(t, "number"), s._param("name", n)],
                )
              : e === _.SettingChangeByYouAsAdmin
                ? s._(
                    /*BTDS*/ '_j{"*":"You turned on disappearing messages. All new messages will disappear from this chat {number} days after they\'re sent. Click to change.","_1":"You turned on disappearing messages. All new messages will disappear from this chat 1 day after they\'re sent. Click to change."}',
                    [s._plural(t, "number")],
                  )
                : e === _.SettingChangeByUnknownAsAdmin
                  ? s._(
                      /*BTDS*/ '_j{"*":"Disappearing messages were turned on. All new messages will disappear from this chat {number} days after they\'re sent. Click to change.","_1":"Disappearing messages were turned on. All new messages will disappear from this chat 1 day after they\'re sent. Click to change."}',
                      [s._plural(t, "number")],
                    )
                  : e === _.Duration
                    ? s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
                        s._plural(t, "number"),
                      ])
                    : e === _.OutOfSyncInfo
                      ? s._(
                          /*BTDS*/ '_j{"*":"This message will disappear from this chat {number} days after it\'s sent.","_1":"This message will disappear from this chat 1 day after it\'s sent."}',
                          [s._plural(t, "number")],
                        )
                      : e === _.Explanation
                        ? s._(
                            /*BTDS*/ '_j{"*":"All new messages will disappear from this chat {number} days after they\'re sent.","_1":"All new messages will disappear from this chat 1 day after they\'re sent."}',
                            [s._plural(t, "number")],
                          )
                        : e === _.ModeChangeByOthers
                          ? a
                            ? s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they\'re sent. Click to set your own default timer.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 day after they\'re sent. Click to set your own default timer."}',
                                [s._plural(t, "number"), s._param("name", n)],
                              )
                            : s._(
                                /*BTDS*/ '_j{"*":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they\'re sent. Click to learn more.","_1":"{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} day after they\'re sent. Click to learn more."}',
                                [
                                  s._plural(t),
                                  s._param("name", n),
                                  s._param("number", i),
                                ],
                              )
                          : e === _.ModeChangeByYou && a
                            ? s._(
                                /*BTDS*/ '_j{"*":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they\'re sent. Click to change your default timer.","_1":"You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 day after they\'re sent. Click to change your default timer."}',
                                [s._plural(t, "number")],
                              )
                            : (o("WALogger")
                                .ERROR(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "getEphemeralOnDaysString is given type ",
                                        " and name ",
                                        "",
                                      ])),
                                  e,
                                  n,
                                )
                                .sendLogs("invalid-ephemeral-string-type"),
                              "");
    }
    ((l.getDisappearingMessageSettingOthersString = f),
      (l.getDisappearingMessageSettingYouString = g),
      (l.getDisappearingMessageSettingUnknownString = h),
      (l.getDisappearingMessageSettingOthersAsAdminString = y),
      (l.getDisappearingMessageSettingYouAsAdminString = C),
      (l.getDisappearingMessageSettingUnknownAsAdminString = b),
      (l.getDisappearingMessageDurationString = v),
      (l.getDisappearingMessageOutOfSyncInfoString = S),
      (l.getDisappearingMessageExplanationString = R),
      (l.getDisappearingModeOtherString = L),
      (l.getDisappearingModeYouString = E));
  },
  226,
);
