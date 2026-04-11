__d(
  "WAWebSupportChatUtils",
  [
    "WALogger",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportChatConfirmationModal.react",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                children: c.jsx(
                  r("WAWebSupportChatConfirmationModal.react"),
                  {},
                ),
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
        })),
        p.apply(this, arguments)
      );
    }
    ((l.openSupportAINux = d), (l.openSupportChat = m));
  },
  98,
);
