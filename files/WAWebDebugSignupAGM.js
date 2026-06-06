__d(
  "WAWebDebugSignupAGM",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSignupMetadataFetcher",
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
              "[receiveSignupAGM] no active chat",
            ])),
        );
        return;
      }
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = {
          type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
          kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: o("WAWebAck").ACK.READ,
          from: n.id,
          author: n.id,
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
          body:
            t != null
              ? t
              : `Welcome to Coatpaints \u{1F389}
Sign up today and get *20% OFF* your first order!`,
          signupContext: {
            signupId: "1885845738738391",
            privacyPolicyUrl: "https://www.example.com/privacy",
          },
        };
      try {
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, i)[1],
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[receiveSignupAGM] signup AGM injected \u2713",
              ])),
          ));
      } catch (e) {
        throw (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[receiveSignupAGM] error ",
                "",
              ])),
            e,
          ),
          e
        );
      }
    }
    c.doc =
      "Receive a signup AGM in the active chat with optional custom body text";
    async function d() {
      await c(`Welcome to Coatpaints \u{1F389}
Sign up today and get *20% OFF* your first order!`);
    }
    ((d.doc =
      "Receive an example signup AGM with realistic business greeting text in the active chat"),
      (d.paramsToExecute = []));
    function m(e) {
      o("WAWebSignupMetadataFetcher").setSignupMetadataOverride(e);
    }
    m.doc =
      "Override signup metadata GraphQL response for E2E testing (DEV only)";
    var p = {
      receiveSignupAGM: c,
      receiveSignupAGMExample: d,
      setSignupMetadataOverride: m,
    };
    l.default = p;
  },
  98,
);
