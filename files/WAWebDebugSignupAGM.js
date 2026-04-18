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
                  "[receiveSignupAGM] no active chat",
                ])),
            );
            return;
          }
          var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
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
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              local: !1,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: a,
              body:
                t != null
                  ? t
                  : "Welcome to Coatpaints \uD83C\uDF89\nSign up today and get *20% OFF* your first order!",
              signupContext: {
                signupId: "1885845738738391",
                privacyPolicyUrl: "https://www.example.com/privacy",
              },
            };
          try {
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, i)[1],
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
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Receive a signup AGM in the active chat with optional custom body text";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield c(
            "Welcome to Coatpaints \uD83C\uDF89\nSign up today and get *20% OFF* your first order!",
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc =
      "Receive an example signup AGM with realistic business greeting text in the active chat"),
      (m.paramsToExecute = []));
    function _(e) {
      o("WAWebSignupMetadataFetcher").setSignupMetadataOverride(e);
    }
    _.doc =
      "Override signup metadata GraphQL response for E2E testing (DEV only)";
    var f = {
      receiveSignupAGM: c,
      receiveSignupAGMExample: m,
      setSignupMetadataOverride: _,
    };
    l.default = f;
  },
  98,
);
