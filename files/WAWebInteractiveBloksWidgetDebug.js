__d(
  "WAWebInteractiveBloksWidgetDebug",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDebugUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "im_a2ui",
      m = JSON.stringify({
        version: "v0.9",
        createSurface: {
          surfaceId: "welcome",
          root: "main_column",
          components: [
            {
              id: "main_column",
              component: "Column",
              children: ["greeting", "cta_btn"],
            },
            {
              id: "greeting",
              component: "Text",
              text: "Welcome to A2UI!",
              variant: "h2",
            },
            {
              id: "cta_btn",
              component: "Button",
              child: "cta_btn_text",
              variant: "primary",
            },
            { id: "cta_btn_text", component: "Text", text: "Get Started" },
          ],
        },
      });
    function p(t, n) {
      var a = o("WAWebDebugUtils").getSelectedChat(),
        i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (i == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "injectRichResponseTestMessage: cannot determine current user",
            ])),
        );
        return;
      }
      var l = m,
        u = t != null ? t : l,
        c = n != null ? n : d,
        p = "debug-bloks-" + Date.now().toString(36),
        _ = "DEBUG_BLOKS_" + Date.now().toString(36),
        f = new (r("WAWebMsgKey"))({ fromMe: !1, remote: a.id, id: _ }),
        g = new (o("WAWebMsgModel").Msg)({
          id: f,
          t: o("WATimeUtils").unixTime(),
          from: a.id,
          to: i,
          type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
          body: "This is a test message for im_a2ui",
          richResponse: {
            parseState: "Parsed",
            type: "Standard",
            fragments: [{ type: "Text", text: "[Bloks debug message]" }],
          },
          unifiedResponse: {
            __typename: "XMSGGenAIUnifiedResponse",
            response_id: p,
            sections: [
              {
                __typename: "GenAIUnifiedResponseSection",
                view_model: {
                  __typename: "GenAISingleLayoutViewModel",
                  primitive: {
                    __typename: "FOABloksPrimitive",
                    type: c,
                    data: u,
                    uuid: p,
                  },
                },
              },
            ],
          },
        });
      (a.msgs.add(g),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[injectRichResponseTestMessage] injected type=",
              " chat=",
              "",
            ])),
          c,
          a.id,
        ));
    }
    p.doc =
      "Inject a test Bloks/RichResponse interactive message into the active chat. Args: (richResponseJsonStr?, componentType?)";
    function _(e, t) {
      var n = o("WAWebDebugUtils").getSelectedChat(),
        a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[injectInteractiveMessageWithBloksWidget] no current user",
            ])),
        );
        return;
      }
      var i = e != null ? e : m,
        l = t != null ? t : d,
        s = "debug-interactive-bloks-" + Date.now().toString(36),
        p = "DEBUG_INTERACTIVE_BLOKS_" + Date.now().toString(36),
        _ = new (r("WAWebMsgKey"))({ fromMe: !1, remote: n.id, id: p }),
        f = new (o("WAWebMsgModel").Msg)({
          id: _,
          t: o("WATimeUtils").unixTime(),
          from: n.id,
          to: a,
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          body: "This is a test interactive message with bloksWidget",
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_URL,
          nativeFlowInteractiveMsg: !0,
          interactiveHeader: {
            title: "Bloks Widget Debug",
            subtitle: void 0,
            thumbnail: void 0,
            hasMediaAttachment: !1,
            mediaType: void 0,
          },
          interactivePayload: {
            messageVersion: 1,
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Book appointment",
                  url: "https://www.google.com",
                }),
              },
            ],
          },
          bloksWidget: { uuid: s, data: i, type: l },
        });
      (n.msgs.add(f),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[injectInteractiveMessageWithBloksWidget] type=",
              " chat=",
              "",
            ])),
          l,
          n.id,
        ));
    }
    ((_.doc =
      "Inject a test MSG_TYPE.INTERACTIVE message with bloksWidget into the active chat. Args: (a2uiJsonStr?, componentType?)"),
      (l.injectRichResponseTestMessage = p),
      (l.injectInteractiveMessageWithBloksWidget = _));
  },
  98,
);
