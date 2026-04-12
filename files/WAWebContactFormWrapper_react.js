__d(
  "WAWebContactFormWrapper.react",
  [
    "WAWebABPropsSaga",
    "WAWebContactUsModalLoadable",
    "WAWebEnvironment",
    "WAWebModalManager",
    "WAWebSendLogsPopupLoadable",
    "WAWebSupportAIStartChatNuxLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebWamEnumSupportAiEventType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.entityId,
        n = e.onCancel,
        a = e.onSend,
        i = e.supportTag,
        l = r("WAWebEnvironment").isWindows ? "win-hybrid" : i,
        c = u(
          function (e) {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable, {
                onCancel: n,
                onSend: a,
                description: e == null ? void 0 : e.description,
                supportTag: l,
                entityId: t,
              }),
            );
          },
          [n, a, l, t],
        );
      return o("WAWebABPropsSaga").getIsSagaV1Enabled()
        ? (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType")
              .SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_SHOWN,
          }).commit(),
          s.jsx(
            o("WAWebSupportAIStartChatNuxLoadable")
              .SupportAIStartChatNuxLoadable,
            { onEmail: c, supportTag: l, entityId: t },
          ))
        : s.jsx(o("WAWebContactUsModalLoadable").ContactUsModalLoadable, {
            onEmail: c,
            onCancel: n,
            onFailure: c,
            supportTag: l,
            entityId: t,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
