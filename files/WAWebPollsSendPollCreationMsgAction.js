__d(
  "WAWebPollsSendPollCreationMsgAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMeUserForChat",
    "WAWebMessageAssociation.flow",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebPollCreationUtils",
    "WAWebPollNameHashSeed",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsLoggingIdUtils",
    "WAWebSendMsgChatAction",
    "WAWebSpoilerFormatRegex",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = [];
      return (
        e.contentType === o("WAWebPollCreationUtils").PollContentType.IMAGE &&
          (t = await Promise.all(
            e.options.map(async function (e) {
              var t = e.image,
                n = await t.mediaPrep.waitForPrep();
              return o("WAWebPollOptionHashUtils").generatePollOptionHash(
                e.name,
                n.filehash,
              );
            }),
          )),
        e.options.map(function (e, n) {
          var r = e.name,
            a = n,
            i = t[n];
          return { name: o("WAXplatTrim").trim(r), localId: a, hash: i };
        })
      );
    }
    async function u(e) {
      return {
        pollName: o("WAXplatTrim").trim(e.name),
        pollOptions: await s(e),
        pollSelectableOptionsCount: e.selectableOptionsCount,
        pollContentType: e.contentType,
        pollType: e.pollType,
        correctOptionIndex: e.correctOptionIndex,
        pollEndTime: e.endTime,
        pollHideVoterNames: e.hideVoterNames,
      };
    }
    function c(e) {
      var t = e.pollName,
        n = e.pollOptions;
      return (
        o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(t) ||
        n.some(function (e) {
          return o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(e.name);
        })
      );
    }
    async function d(t) {
      var n = t.chat,
        a = t.isWamoSub,
        i = t.poll,
        l = t.quotedMsg,
        s = await m({ poll: i, chat: n, quotedMsg: l, isWamoSub: a });
      if (i.contentType === o("WAWebPollCreationUtils").PollContentType.IMAGE) {
        var u = {
          associationType: o("WAWebMessageAssociation.flow")
            .MessageAssociationType.MEDIA_POLL,
          parentMsgKey: s.id,
          viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA,
          isWamoSub: a,
        };
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendPollCreation: sending ",
              " poll options to chat",
            ])),
          i.options.length,
        ),
          i.options.forEach(function (e) {
            var t = e.image,
              r = babelHelpers.extends({}, u, {
                type: t.type,
                caption: e.name,
              });
            t.sendToChat({ chat: n, options: r });
          }));
      }
      var c = r("WAWebWid").isNewsletter(n.id),
        d = c
          ? await o(
              "WAWebNewsletterSendMsgAction",
            ).sendNewsletterPollCreationMsg({ msgData: s, chat: n })
          : await Promise.all(
              o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, s),
            ),
        p = d[0];
      o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
        action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CREATE_POLL,
        chat: n,
        creationDateInSeconds: p.t,
        hideVoterName: i.hideVoterNames,
        pollDurationMs: i.endTime == null ? void 0 : i.endTime - p.t * 1e3,
        pollOptionsCount: i.options.length,
      });
    }
    async function m(e) {
      var t,
        n = e.chat,
        a = e.isWamoSub,
        i = e.poll,
        l = e.quotedMsg,
        s = await u(i),
        d = s.correctOptionIndex,
        m = s.pollContentType,
        p = s.pollEndTime,
        _ = s.pollHideVoterNames,
        f = s.pollName,
        g = s.pollOptions,
        h = s.pollSelectableOptionsCount,
        y = s.pollType,
        C = r("WAWebWid").isNewsletter(n.id),
        b = n.id,
        v = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        S = (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null ? t : {},
        R = babelHelpers.extends(
          {
            id: new (r("WAWebMsgKey"))({
              from: v,
              to: b,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(n)
                ? o("WAWebWidFactory").asUserWidOrThrow(v)
                : void 0,
              selfDir: "out",
            }),
            type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
            kind: o("WAWebMsgType").MsgKind.PollCreation,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            isSentCagPollCreation: o("WAWebFrontendChatGetters").getIsCAG(n)
              ? !0
              : void 0,
            t: o("WATimeUtils").unixTime(),
            from: v,
            to: b,
            isNewMsg: !0,
            local: !0,
            ack: o("WAWebAck").ACK.CLOCK,
            pollName: f,
            pollLoggingId: o(
              "WAWebPollsLoggingIdUtils",
            ).generatePollLoggingId(),
            pollOptions: g,
            messageSecret: C
              ? void 0
              : self.crypto.getRandomValues(new Uint8Array(32)),
            isSpoiler:
              c({ pollName: f, pollOptions: g }) &&
              o("WAWebABProps").getABPropConfigValue(
                "is_spoiler_rich_format_sender_enabled",
              ),
            pollSelectableOptionsCount: h,
            isWamoSub: a,
            pollContentType: m,
          },
          S,
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
          {
            pollType: y,
            correctOptionIndex: d,
            pollEndTime: p,
            pollHideVoterNames: _,
          },
        );
      return o("WAWebPollNameHashSeed").maybeSeedInitialPollNameHashForOutgoing(
        R,
      );
    }
    ((l.sendPollCreation = d), (l.createPollCreationMsgData = m));
  },
  98,
);
