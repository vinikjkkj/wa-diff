__d(
  "WAWebDebugSmartHydrationCopyCode",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDebugUtils",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebParseInteractiveMessageProto",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map([
        ["none", void 0],
        [
          "nested",
          '{"smart_hydration_configuration":{"use_case":"br_text_offer_code"}}',
        ],
        ["flat", '{"smart_hydration_use_case":"br_text_offer_code"}'],
      ]),
      d = "SAVE20";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if ((t === void 0 && (t = "nested"), !c.has(t))) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectSmartHydrationCopyCodeMessage] unknown variant ",
                  "; use none, nested or flat",
                ])),
              t,
            );
            return;
          }
          var n = o("WAWebDebugUtils").getSelectedChat(),
            a = r("WAWebParseInteractiveMessageProto")({
              baseMessage: {
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: n.id,
                  id: yield r("WAWebMsgKey").newId(),
                }),
                from: n.id,
                to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                t: o("WATimeUtils").unixTime(),
                type: "chat",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                count: null,
                ack: o("WAWebAck").ACK.RECEIVED,
                isNewMsg: !0,
              },
              messageProtobuf: { interactiveMessage: f(c.get(t)) },
              bizInfo: _,
              msgContext: "relay",
            });
          if (a == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectSmartHydrationCopyCodeMessage] parser returned nothing for variant ",
                  "",
                ])),
              t,
            );
            return;
          }
          (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: n.id,
            newMsg: a.msgData,
            handleSingleMsgOrigin: "debugMsgUtils",
          }),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectSmartHydrationCopyCodeMessage] variant=",
                  " parsedType=",
                  "",
                ])),
              t,
              a.msgData.type,
            ));
        })),
        p.apply(this, arguments)
      );
    }
    m.doc =
      'Receive a single cta_copy message whose NFM messageParamsJson carries a Smart Hydration marker, through the real interactive parser and handleSingleMsg, in the active chat. Arg: variant "none" | "nested" (default) | "flat"';
    var _ = {
      nativeFlowName: "mixed",
      verifiedNameSerial: null,
      verifiedLevel: null,
      verifiedNameCert: null,
      privacyMode: null,
      campaignId: null,
    };
    function f(e) {
      return {
        body: { text: "Use " + d + " for 20% off" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "Copy code",
                copy_code: d,
              }),
            },
          ],
          messageParamsJson: e,
          messageVersion: 1,
        },
      };
    }
    l.injectSmartHydrationCopyCodeMessage = m;
  },
  98,
);
