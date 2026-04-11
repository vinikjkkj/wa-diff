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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
          n != null || s(0, 107072, e);
          var a = new (r("WAWebMsgKey"))({
            from: n,
            to: t,
            id: yield r("WAWebMsgKey").newId(),
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
              new Uint8Array(
                o("WAWebBroadcastConsts").MESSAGE_SECRET_BYTE_LENGTH,
              ),
            ),
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield e(t);
          return babelHelpers.extends({}, r, {
            body: n,
            type: "chat",
            kind: o("WAWebMsgType").MsgKind.Chat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield e(t);
          return babelHelpers.extends({}, r, n);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var o = yield e(t);
          return babelHelpers.extends({}, o, _(r), {
            caption: n,
            subtype: void 0,
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
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
          var u = yield e(t),
            c = babelHelpers.extends({}, _(r), {
              interactiveHeader: {
                hasMediaAttachment: !0,
                mediaType: l,
                subtitle: void 0,
                thumbnail: void 0,
                title: void 0,
              },
            });
          return babelHelpers.extends({}, u, n, c);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.createBroadcastTextMsgData = c),
      (l.addBroadcastFieldsToMediaMsg = m),
      (l.createBroadcastInteractiveMsgData = f),
      (l.addBroadcastInteractiveFieldsToMediaMsg = h));
  },
  98,
);
