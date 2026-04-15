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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(10),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["senderObj", "mediaData"]), (a[0] = i))
        : (i = a[0]);
      var l = o("useWAWebModelValues").useModelValues(e, i),
        u = l.mediaData,
        m = l.senderObj,
        p;
      if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
        var _;
        ((p = [
          (_ = o("WAWebMsgGetters")).getT,
          _.getAck,
          _.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          _.getIsEdited,
          _.getType,
          _.getSubtype,
          _.getSender,
          _.getIsFromTemplate,
          _.getIsDynamicReplyButtonsMsg,
          _.getCaption,
          _.getHasReaction,
        ]),
          (a[1] = p));
      } else p = a[1];
      var f = o("useWAWebMsgValues").useMsgValues(e.id, p),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v = f[5],
        S = f[6],
        R = f[7],
        L = f[8],
        E = f[9],
        k = f[10],
        I = f[11],
        T = o("useWAWebMessageAriaDescription").useMessageAriaDescription(
          e,
          t,
          n,
        ),
        D = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe()),
        x = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(D),
        $;
      a[2] !== e.id
        ? (($ = e.id.toString()), (a[2] = e.id), (a[3] = $))
        : ($ = a[3]);
      var P;
      a[4] !== t || a[5] !== $
        ? ((P = [$].concat(t.map(d))), (a[4] = t), (a[5] = $), (a[6] = P))
        : (P = a[6]);
      var N = P,
        M;
      a[7] !== t || a[8] !== I
        ? ((M = I || t.some(c)), (a[7] = t), (a[8] = I), (a[9] = M))
        : (M = a[9]);
      var w = r("useWAWebReactions")(N, r("WAWebNoop"), M),
        A = w.numberOfSenderReactions,
        F = {
          isDynamicReplyButtonsMsg: E,
          isFromTemplate: L,
          caption: k,
          mediaStage: u == null ? void 0 : u.mediaStage,
        };
      if (
        !o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() ||
        !s(v, F) ||
        !n.atLeastOnceKeyboardUser
      )
        return null;
      var O = null;
      e.quotedMsg && (O = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e));
      var B = {
        type: v,
        subtype: S,
        isGif: u == null ? void 0 : u.isGif,
        quotedMsg: O,
        senderWid: R,
      };
      return o("WAWebMessageUiUtils").getMessageAriaLabel({
        t: g,
        ack: h,
        asRevoked: C,
        isEdited: b,
        isSentByMe: y,
        numberReactions: A,
        ariaLabelMessageType: B,
        senderWid: R,
        senderContact: m,
        isElevatedPushNamesEnabled: x,
        messageDescription: T,
      });
    }
    function c(e) {
      return o("WAWebMsgGetters").getHasReaction(e);
    }
    function d(e) {
      return e.id.toString();
    }
    l.useMessageAriaLabel = u;
  },
  98,
);
