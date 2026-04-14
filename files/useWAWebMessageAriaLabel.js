__d(
  "useWAWebMessageAriaLabel",
  [
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebQuotedMsgModelUtils",
    "useWAWebMessageAriaDescription",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = !!((e || t) && n);
      return !(a || o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(r));
    }
    function s(t, n) {
      switch (t) {
        case o("WAWebMsgType").MSG_TYPE.CHAT:
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
        case o("WAWebMsgType").MSG_TYPE.STICKER:
        case o("WAWebMsgType").MSG_TYPE.PTT:
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
        case o("WAWebMsgType").MSG_TYPE.PTV:
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
          return !0;
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e(
            n.isFromTemplate,
            n.isDynamicReplyButtonsMsg,
            n.caption,
            n.mediaStage,
          );
        default:
          return !1;
      }
    }
    function u(e, t, n) {
      var a,
        i = o("useWAWebModelValues").useModelValues(e, [
          "senderObj",
          "mediaData",
        ]),
        l = i.mediaData,
        u = i.senderObj,
        c = o("useWAWebMsgValues").useMsgValues(e.id, [
          (a = o("WAWebMsgGetters")).getT,
          a.getAck,
          a.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          a.getIsEdited,
          a.getType,
          a.getSubtype,
          a.getSender,
          a.getIsFromTemplate,
          a.getIsDynamicReplyButtonsMsg,
          a.getCaption,
          a.getHasReaction,
        ]),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g = c[5],
        h = c[6],
        y = c[7],
        C = c[8],
        b = c[9],
        v = c[10],
        S = c[11],
        R = o("useWAWebMessageAriaDescription").useMessageAriaDescription(
          e,
          t,
          n,
        ),
        L = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe()),
        E = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(L),
        k = [e.id.toString()].concat(
          t.map(function (e) {
            return e.id.toString();
          }),
        ),
        I = r("useWAWebReactions")(
          k,
          r("WAWebNoop"),
          S ||
            t.some(function (e) {
              return o("WAWebMsgGetters").getHasReaction(e);
            }),
        ),
        T = I.numberOfSenderReactions,
        D = {
          isDynamicReplyButtonsMsg: b,
          isFromTemplate: C,
          caption: v,
          mediaStage: l == null ? void 0 : l.mediaStage,
        };
      if (
        !o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() ||
        !s(g, D) ||
        !n.atLeastOnceKeyboardUser
      )
        return null;
      var x = null;
      e.quotedMsg && (x = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e));
      var $ = {
        type: g,
        subtype: h,
        isGif: l == null ? void 0 : l.isGif,
        quotedMsg: x,
        senderWid: y,
      };
      return o("WAWebMessageUiUtils").getMessageAriaLabel({
        t: d,
        ack: m,
        asRevoked: _,
        isEdited: f,
        isSentByMe: p,
        numberReactions: T,
        ariaLabelMessageType: $,
        senderWid: y,
        senderContact: u,
        isElevatedPushNamesEnabled: E,
        messageDescription: R,
      });
    }
    l.useMessageAriaLabel = u;
  },
  98,
);
