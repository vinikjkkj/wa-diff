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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
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
            ? `Thank you for signing up! Please use the code:
` + t
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
            id: await r("WAWebMsgKey").newId(),
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
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, m)[1],
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
    }
    c.doc =
      "Receive an inapp_signup confirmation NFM in the active chat (optional promo code string)";
    async function d() {
      await c();
    }
    ((d.doc = "Receive a signup confirmation without promo code"),
      (d.paramsToExecute = []));
    async function m() {
      await c("10345ERPCYOP22");
    }
    ((m.doc = "Receive a signup confirmation with promo code"),
      (m.paramsToExecute = []));
    var p = {
      receiveInAppSignupConfirmation: c,
      receiveSignupConfirmationExample: d,
      receiveSignupConfirmationWithPromoExample: m,
    };
    l.default = p;
  },
  98,
);
