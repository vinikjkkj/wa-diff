__d(
  "WAWebDebugInAppSignupConfirmation",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = window.chat;
          if (!n) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[receiveInAppSignupConfirmation] no active chat",
                ])),
            );
            return;
          }
          var a = o("WAWebUserPrefsMeUser").getMeUser(),
            i = "1885845738738391",
            l = String(Math.floor(Date.now() / 1e3)),
            c = [
              {
                name: "inapp_signup",
                buttonParamsJson: JSON.stringify(
                  babelHelpers.extends(
                    { signup_id: i, subscription_timestamp: l },
                    t != null ? { promo_code: t } : void 0,
                  ),
                ),
              },
            ],
            d =
              t != null
                ? "Thank you for signing up! Please use the code:\n" + t
                : "Thank you for signing up! Your subscription is now active.",
            m = {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              kind: "interactive",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              ack: o("WAWebAck").ACK.READ,
              from: n.id,
              id: new (r("WAWebMsgKey"))({
                fromMe: !1,
                remote: n.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              local: !1,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: a,
              caption: d,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .INAPP_SIGNUP,
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              nativeFlowInteractiveMsg: !0,
              interactivePayload: { buttons: c, messageVersion: 1 },
            };
          try {
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, m)[1],
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[receiveInAppSignupConfirmation] confirmation injected",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "receiveInAppSignupConfirmation: error ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Receive an inapp_signup confirmation NFM in the active chat (optional promo code string)";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield c();
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc = "Receive a signup confirmation without promo code"),
      (m.paramsToExecute = []));
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield c("10345ERPCYOP22");
        })),
        f.apply(this, arguments)
      );
    }
    ((_.doc = "Receive a signup confirmation with promo code"),
      (_.paramsToExecute = []));
    var g = {
      receiveInAppSignupConfirmation: c,
      receiveSignupConfirmationExample: m,
      receiveSignupConfirmationWithPromoExample: _,
    };
    l.default = g;
  },
  98,
);
