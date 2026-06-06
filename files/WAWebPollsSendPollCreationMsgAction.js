__d(
  "WAWebPollsSendPollCreationMsgAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebSendMsgChatAction",
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
      };
    }
    async function c(t) {
      var n = t.chat,
        a = t.isWamoSub,
        i = t.poll,
        l = t.quotedMsg,
        s = await d({ poll: i, chat: n, quotedMsg: l, isWamoSub: a });
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
        m = c
          ? await o(
              "WAWebNewsletterSendMsgAction",
            ).sendNewsletterPollCreationMsg({ msgData: s, chat: n })
          : await Promise.all(
              o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, s),
            ),
        p = m[0];
      o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
        action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CREATE_POLL,
        chat: n,
        creationDateInSeconds: p.t,
        pollOptionsCount: i.options.length,
      });
    }
    async function d(e) {
      var t,
        n = e.chat,
        a = e.isWamoSub,
        i = e.poll,
        l = e.quotedMsg,
        s = await u(i),
        c = s.correctOptionIndex,
        d = s.pollContentType,
        m = s.pollName,
        p = s.pollOptions,
        _ = s.pollSelectableOptionsCount,
        f = s.pollType,
        g = r("WAWebWid").isNewsletter(n.id),
        h = n.id,
        y = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        C = (t = l == null ? void 0 : l.msgContextInfo(n.id)) != null ? t : {};
      return babelHelpers.extends(
        {
          id: new (r("WAWebMsgKey"))({
            from: y,
            to: h,
            id: r("WAWebMsgKey").newId_DEPRECATED(),
            participant: o("WAWebChatGetters").getIsGroup(n)
              ? o("WAWebWidFactory").asUserWidOrThrow(y)
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
          from: y,
          to: h,
          isNewMsg: !0,
          local: !0,
          ack: o("WAWebAck").ACK.CLOCK,
          pollName: m,
          pollOptions: p,
          messageSecret: g
            ? void 0
            : self.crypto.getRandomValues(new Uint8Array(32)),
          pollSelectableOptionsCount: _,
          isWamoSub: a,
          pollContentType: d,
        },
        C,
        o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
        { pollType: f, correctOptionIndex: c },
      );
    }
    ((l.sendPollCreation = c), (l.createPollCreationMsgData = d));
  },
  98,
);
