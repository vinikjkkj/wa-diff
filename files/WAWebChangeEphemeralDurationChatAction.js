__d(
  "WAWebChangeEphemeralDurationChatAction",
  [
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
    "WAWebWamEnumPreviousEphemeralityType",
    "WAWebWamNumberToPreciseSizeBucket",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a) {
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
      var i = t.contact;
      if (o("WAWebContactGetters").getIsUser(i) && i.isContactBlocked)
        return Promise.reject(
          new (r("WAWebContactBlockedErrorAction"))(
            "changing ephemeral setting for contact is blocked",
            i,
          ),
        );
      var l =
          o("WAWebAfterReadUtils").isAfterReadDuration(n) &&
          o("WAWebAfterReadUtils").isAfterReadEnabled(),
        u,
        c;
      l
        ? ((u = o("WAWebAfterReadUtils").getAfterReadFallbackDuration()),
          (c = n))
        : ((u = n), (c = null));
      var d = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: t.id,
          fromMe: !0,
        }),
        m = { disappearingModeTrigger: a, disappearingModeInitiatedByMe: !0 },
        p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        _ = p,
        f = babelHelpers.extends(
          {
            id: d,
            from: _,
            to: t.id,
            t: o("WATimeUtils").unixTime(),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            subtype: "ephemeral_setting",
            ephemeralDuration: u,
            afterReadDuration: c,
            ephemeralSettingUser: _,
            local: !0,
            isNewMsg: !0,
            messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
          },
          m,
        ),
        g =
          t.ephemeralSettingTimestamp == null
            ? 1
            : t.ephemeralSettingTimestamp + 1;
      r("WAWebUpdateEphemeralSettingTimestampChatAction")(t, g);
      var h = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, f)[1];
      h.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK &&
        h.t != null &&
        r("WAWebUpdateEphemeralSettingTimestampChatAction")(t, h.t);
      var y = { disappearingModeTrigger: a, disappearingModeInitiatedByMe: !0 };
      (await o("WAWebDBUpdateChatTable").updateChatTable(
        t.id,
        babelHelpers.extends(
          {
            ephemeralDuration: u,
            afterReadDuration: c,
            disappearingModeInitiator: o("WAWebEphemeralityTypes")
              .DisappearingModeInitiator.ChangedInChat,
          },
          y,
        ),
      ),
        (t.ephemeralDuration = u),
        (t.afterReadDuration = c),
        (t.disappearingModeInitiator = o(
          "WAWebEphemeralityTypes",
        ).DisappearingModeInitiator.ChangedInChat),
        (t.disappearingModeTrigger = a),
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
          u,
          l && c != null ? "afterReadDuration=" + c : "",
        ));
    }
    async function c(e, t, n) {
      if (!o("WAWebChatGetters").getIsGroup(e))
        throw r("err")(
          "changeGroupEphemeralDuration should not be called for 1-1 chats. Use changeEphemeralDuration which handles both 1-1 and group cases",
        );
      o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups")
        ? await o("WAWebGroupModifyInfoJob").setEphemeralGroupProperty({
            ephemeralExpiration: t,
            groupWid: e.id,
            trigger: n,
          })
        : await o("WAWebGroupModifyInfoJob").setGroupProperty(
            e.id,
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL,
            t,
          );
    }
    async function d(e, t, n, a) {
      if (!o("WAWebChatEphemerality").shouldShowEphemeralSetting(e))
        throw r("err")(
          "user cannot change group ephemeral duration for chat " +
            e.id.toString(),
        );
      var i = o("WAWebChatEphemerality").calculateEphemeralDurationForChat(e);
      i !== t &&
        (o("WAWebChatGetters").getIsGroup(e)
          ? await c(e, t, a)
          : await u(e, t, a));
      var l =
          o("WAWebAfterReadUtils").isAfterReadDuration(t) &&
          o("WAWebAfterReadUtils").isAfterReadEnabled(),
        s = {
          chatEphemeralityDuration: l ? void 0 : t,
          threadId: await o("WAWebChatThreadLogging").getChatThreadID(
            e.id.toJid(),
          ),
          ephemeralSettingEntryPoint: n,
          isAfterRead: l,
          afterReadDuration: l ? t : void 0,
        };
      if (
        (i != null &&
          ((s.previousEphemeralityDuration = i),
          i > 0 &&
            (s.previousEphemeralityType = o(
              "WAWebAfterReadUtils",
            ).isAfterReadDuration(i)
              ? o("WAWebWamEnumPreviousEphemeralityType")
                  .PREVIOUS_EPHEMERALITY_TYPE.AFTER_READ
              : o("WAWebWamEnumPreviousEphemeralityType")
                  .PREVIOUS_EPHEMERALITY_TYPE.DISAPPEARING_MESSAGE)),
        o("WAWebChatGetters").getIsGroup(e))
      ) {
        var d, m;
        s.ephemeralSettingGroupSize = o(
          "WAWebWamNumberToPreciseSizeBucket",
        ).numberToPreciseSizeBucket(
          (d =
            (m = e.groupMetadata) == null ? void 0 : m.participants.length) !=
            null
            ? d
            : 0,
        );
      }
      new (o(
        "WAWebEphemeralSettingChangeWamEvent",
      ).EphemeralSettingChangeWamEvent)(s).commit();
    }
    function m(e, t, n) {
      var r = e.map(function (e) {
        return d(
          e,
          t,
          n,
          o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange,
        );
      });
      return Promise.allSettled(r);
    }
    ((l.changeEphemeralDuration = d), (l.bulkChangeEphemeralDuration = m));
  },
  98,
);
