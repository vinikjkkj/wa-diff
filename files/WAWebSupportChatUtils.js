__d(
  "WAWebSupportChatUtils",
  [
    "WALogger",
    "WAWebABPropsSupportLid",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportChatConfirmationModal.react",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWidFactory",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
        supportAiEventType: o("WAWebWamEnumSupportAiEventType")
          .SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_SHOWN_ON_THE_CHAT,
      }).commit(),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(
            o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable,
            {},
          ),
          { transition: "modal-flow" },
        ));
    }
    async function m(t) {
      var n = o("WAWebWidFactory").createWid(t);
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: n },
          onSuccess: function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "openSupportChat: successfully opened support chat",
                ])),
            ),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
          },
          msgText: null,
          customError: c.jsx("div", {
            children: c.jsx(r("WAWebSupportChatConfirmationModal.react"), {}),
          }),
          onError: function (t) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "InAppSupport: Error opening support chat: ",
                  "",
                ])),
              t,
            );
          },
        }),
        { transition: "modal-flow" },
      );
    }
    function p() {
      var e = o("WAWebABPropsSupportLid").getWaSupportAgentFbid();
      return e == null ? null : o("WAWebWidFactory").createWid(e + "@bot");
    }
    async function _(e, t) {
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e,
          "openSupportAgentChat",
          { signal: t },
        ),
        a = n.chat;
      if ((t == null ? void 0 : t.aborted) !== !0) {
        var i = await o("WAWebCmd").Cmd.openChatFromUnread({
          chat: a,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SupportAgent,
        });
        if (!i) throw r("err")("support agent chat did not open");
        (o("WAWebComposeBoxActions").ComposeBoxActions.focus(a),
          o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
      }
    }
    ((l.openSupportAINux = d),
      (l.openSupportChat = m),
      (l.getSupportAgentChatWid = p),
      (l.openSupportAgentChat = _));
  },
  98,
);
