__d(
  "WAWebDebugPins",
  [
    "invariant",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WAWebChatCollection",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebProtobufsE2E.pb",
    "WAWebSendPinMessageAction",
    "WAWebSendTextMsgChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react"));
    function g(e) {
      o("WAWebToastManager").ToastManager.open(
        f.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n &&
            t.forEach(function (e) {
              e.parentMsgKey = n.id.toString();
            });
          try {
            var r = yield o(
              "WAWebDBCRUDOperationsPinInChat",
            ).createOrUpdatePinInChat(n.id.remote, t);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrUpdatePinInChatDebug: ",
                  "",
                ])),
              String(r),
            );
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrUpdatePinInChatDebug: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    h.doc =
      "Store in database pinned-messages, use msg key from param if available";
    function C() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!e) throw r("err")("You must open a chat first.");
      return e;
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = o(
              "WAWebProtobufsE2E.pb",
            ).Message$PinInChatMessage$Type.cast(t);
            if (n == null) {
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendPinMsg: error: invalid pinType",
                  ])),
              );
              return;
            }
            var r;
            if (typeof e == "string") {
              var a = yield o(
                  "WAWebMsgCollection",
                ).MsgCollection.getMessagesById([e]),
                i = a.messages;
              r = o("WAWebSendPinMessageAction").sendPinInChatMsg(i[0], n);
            } else r = o("WAWebSendPinMessageAction").sendPinInChatMsg(e, n);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendPinMsg: ",
                  "",
                ])),
              String(r),
            );
          } catch (e) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendPinMsg: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "Hey, this is the parent message",
            t = C(),
            n = r("WANullthrows")(
              yield o("WAWebSendTextMsgChatAction").createTextMsgData(t, e),
            ),
            a = new (o("WAWebMsgModel").Msg)(n);
          g("Sending orphan pin message. Will pause for 10s after this.");
          var i = yield o("WAWebSendPinMessageAction").sendPinInChatMsg(
            a,
            o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL,
          );
          (yield o("WAPromiseDelays").delayMs(1e4),
            g("Sending parent message"),
            yield o("WAWebSendTextMsgChatAction").addAndSendTextMsg(t, n),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "testOrphanPinMsg: ",
                  "",
                ])),
              String(i),
            ),
            g("Done. Check the receiver client"));
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PINS_DEBUG_MODE,
        !E(),
      );
    }
    ((L.doc = "Toggle pins debug mode"), (L.paramsToExecute = []));
    function E() {
      var e,
        t =
          (e = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.PINS_DEBUG_MODE,
          )) != null
            ? e
            : !1;
      return (typeof t == "boolean" || s(0, 71308), t);
    }
    ((E.doc = "Get pins debug mode"), (E.paramsToExecute = []));
    var k = {
      sendPinMsg: b,
      createOrUpdatePinInChatDebug: h,
      testOrphanPinMsg: S,
      togglePinsDebugMode: L,
      getPinsDebugMode: E,
    };
    l.default = k;
  },
  98,
);
