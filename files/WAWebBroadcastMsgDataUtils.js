__d(
  "WAWebBroadcastMsgDataUtils",
  [
    "invariant",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBroadcastConsts",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      n != null || s(0, 107072, e);
      var a = new (r("WAWebMsgKey"))({
        from: n,
        to: t,
        id: await r("WAWebMsgKey").newId(),
        participant: n,
      });
      return {
        id: a,
        from: n,
        to: t,
        author: n,
        ack: o("WAWebAck").ACK.CLOCK,
        isNewMsg: !0,
        local: !0,
        t: o("WATimeUtils").unixTime(),
        messageSecret: self.crypto.getRandomValues(
          new Uint8Array(o("WAWebBroadcastConsts").MESSAGE_SECRET_BYTE_LENGTH),
        ),
      };
    }
    async function u(t, n) {
      var r = await e(t);
      return babelHelpers.extends({}, r, {
        body: n,
        type: "chat",
        kind: o("WAWebMsgType").MsgKind.Chat,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      });
    }
    async function c(t, n) {
      var r = await e(t);
      return babelHelpers.extends({}, r, n);
    }
    function d(e) {
      var t,
        n = (t = e.buttons) == null || (t = t[0]) == null ? void 0 : t.name,
        a = o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).getNativeFlowNameByButtonName(n);
      return {
        type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        kind: o("WAWebMsgType").MsgKind.Interactive,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
        interactivePayload: e,
        nativeFlowName: a,
      };
    }
    async function m(t, n, r) {
      var o = await e(t);
      return babelHelpers.extends({}, o, d(r), { caption: n, subtype: void 0 });
    }
    async function p(t, n, r) {
      var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      a != null || s(0, 107072, t);
      var i = n.type,
        l;
      i === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? (l = o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE)
        : i === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? (l = o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.VIDEO)
          : (l = o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT);
      var u = await e(t),
        c = babelHelpers.extends({}, d(r), {
          interactiveHeader: {
            hasMediaAttachment: !0,
            mediaType: l,
            subtitle: void 0,
            thumbnail: void 0,
            title: void 0,
          },
        });
      return babelHelpers.extends({}, u, n, c);
    }
    function _(e, t) {
      return babelHelpers.extends({}, e, t, {
        kind: o("WAWebMsgType").MsgKind.Product,
        type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
      });
    }
    ((l.createBroadcastTextMsgData = u),
      (l.addBroadcastFieldsToMediaMsg = c),
      (l.createBroadcastInteractiveMsgData = m),
      (l.addBroadcastInteractiveFieldsToMediaMsg = p),
      (l.createBroadcastProductMsgData = _));
  },
  98,
);
