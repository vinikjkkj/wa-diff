__d(
  "WAWebChangeEphemeralDurationChatAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebContactBlockedErrorAction",
    "WAWebContactGetters",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralSettingChangeWamEvent",
    "WAWebEphemeralityTypes",
    "WAWebGroupConstants",
    "WAWebGroupModifyInfoJob",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUpdateEphemeralSettingTimestampChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamNumberToPreciseSizeBucket",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (o("WAWebChatGetters").getIsGroup(t))
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "changeChatEphemeralDuration: not for groups ",
                      "",
                    ])),
                  t.id.toLogString(),
                )
                .sendLogs("change-ephemeral-duration"),
              r("err")(
                "changeChatEphemeralDuration should not be called for group. Use changeEphemeralDuration which handles both 1-1 and group cases",
              )
            );
          var l = t.contact;
          if (o("WAWebContactGetters").getIsUser(l) && l.isContactBlocked)
            return (u || (u = n("Promise"))).reject(
              new (r("WAWebContactBlockedErrorAction"))(
                "changing ephemeral setting for contact is blocked",
                l,
              ),
            );
          var c =
              o("WAWebAfterReadUtils").isAfterReadDuration(a) &&
              o("WAWebAfterReadUtils").isAfterReadEnabled(),
            d,
            m;
          c
            ? ((d = o("WAWebAfterReadUtils").getAfterReadFallbackDuration()),
              (m = a))
            : ((d = a), (m = null));
          var p = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: t.id,
              fromMe: !0,
            }),
            _ = {
              disappearingModeTrigger: i,
              disappearingModeInitiatedByMe: !0,
            },
            f = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            g = f,
            h = babelHelpers.extends(
              {
                id: p,
                from: g,
                to: t.id,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "ephemeral_setting",
                ephemeralDuration: d,
                afterReadDuration: m,
                ephemeralSettingUser: g,
                local: !0,
                isNewMsg: !0,
                messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
              },
              _,
            ),
            y =
              t.ephemeralSettingTimestamp == null
                ? 1
                : t.ephemeralSettingTimestamp + 1;
          r("WAWebUpdateEphemeralSettingTimestampChatAction")(t, y);
          var C = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
            t,
            h,
          )[1];
          C.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            C.t != null &&
            r("WAWebUpdateEphemeralSettingTimestampChatAction")(t, C.t);
          var b = {
            disappearingModeTrigger: i,
            disappearingModeInitiatedByMe: !0,
          };
          (yield o("WAWebDBUpdateChatTable").updateChatTable(
            t.id,
            babelHelpers.extends(
              {
                ephemeralDuration: d,
                afterReadDuration: m,
                disappearingModeInitiator: o("WAWebEphemeralityTypes")
                  .DisappearingModeInitiator.ChangedInChat,
              },
              b,
            ),
          ),
            (t.ephemeralDuration = d),
            (t.afterReadDuration = m),
            (t.disappearingModeInitiator = o(
              "WAWebEphemeralityTypes",
            ).DisappearingModeInitiator.ChangedInChat),
            (t.disappearingModeTrigger = i),
            (t.disappearingModeInitiatedByMe = !0),
            o("WAWebDBChatEphemeralExemptionData").updateEphemeralDurationCache(
              t.id,
              t.ephemeralDuration,
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "chat.changeEphemeralDuration chatId=",
                  " ephemeralDuration=",
                  " ",
                  "",
                ])),
              t.id.toLogString(),
              d,
              c && m != null ? "afterReadDuration=" + m : "",
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebChatGetters").getIsGroup(e))
            throw r("err")(
              "changeGroupEphemeralDuration should not be called for 1-1 chats. Use changeEphemeralDuration which handles both 1-1 and group cases",
            );
          o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups")
            ? yield o("WAWebGroupModifyInfoJob").setEphemeralGroupProperty(
                e.id,
                t,
                n,
              )
            : yield o("WAWebGroupModifyInfoJob").setGroupProperty(
                e.id,
                o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL,
                t,
              );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (!o("WAWebChatEphemerality").shouldShowEphemeralSetting(e))
              throw r("err")(
                "user cannot change group ephemeral duration for chat " +
                  e.id.toString(),
              );
            var i = o("WAWebChatEphemerality").getEphemeralSetting(e);
            i !== t &&
              (o("WAWebChatGetters").getIsGroup(e)
                ? yield m(e, t, a)
                : yield c(e, t, a));
            var l = {
              chatEphemeralityDuration: t,
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                e.id.toJid(),
              ),
              ephemeralSettingEntryPoint: n,
            };
            if (
              (i != null && (l.previousEphemeralityDuration = i),
              o("WAWebChatGetters").getIsGroup(e))
            ) {
              var s, u;
              l.ephemeralSettingGroupSize = o(
                "WAWebWamNumberToPreciseSizeBucket",
              ).numberToPreciseSizeBucket(
                (s =
                  (u = e.groupMetadata) == null
                    ? void 0
                    : u.participants.length) != null
                  ? s
                  : 0,
              );
            }
            new (o(
              "WAWebEphemeralSettingChangeWamEvent",
            ).EphemeralSettingChangeWamEvent)(l).commit();
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, r) {
      var a = e.map(function (e) {
        return _(
          e,
          t,
          r,
          o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange,
        );
      });
      return (u || (u = n("Promise"))).allSettled(a);
    }
    ((l.changeEphemeralDuration = _), (l.bulkChangeEphemeralDuration = g));
  },
  98,
);
