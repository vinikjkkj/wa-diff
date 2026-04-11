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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.entityId,
        a = e.onCancel,
        i = e.onSend,
        l = e.supportTag,
        u = r("WAWebEnvironment").isWindows ? "win-hybrid" : l,
        c;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== u
        ? ((c = function (t) {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebSendLogsPopupLoadable").SendLogsPopupLoadable, {
                onCancel: a,
                onSend: i,
                description: t == null ? void 0 : t.description,
                supportTag: u,
                entityId: n,
              }),
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = u),
          (t[4] = c))
        : (c = t[4]);
      var d = c;
      if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
        new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
          supportAiEventType: o("WAWebWamEnumSupportAiEventType")
            .SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_SHOWN,
        }).commit();
        var m;
        return (
          t[5] !== n || t[6] !== d || t[7] !== u
            ? ((m = s.jsx(
                o("WAWebSupportAIStartChatNuxLoadable")
                  .SupportAIStartChatNuxLoadable,
                { onEmail: d, supportTag: u, entityId: n },
              )),
              (t[5] = n),
              (t[6] = d),
              (t[7] = u),
              (t[8] = m))
            : (m = t[8]),
          m
        );
      }
      var p;
      return (
        t[9] !== n || t[10] !== a || t[11] !== d || t[12] !== u
          ? ((p = s.jsx(
              o("WAWebContactUsModalLoadable").ContactUsModalLoadable,
              {
                onEmail: d,
                onCancel: a,
                onFailure: d,
                supportTag: u,
                entityId: n,
              },
            )),
            (t[9] = n),
            (t[10] = a),
            (t[11] = d),
            (t[12] = u),
            (t[13] = p))
          : (p = t[13]),
        p
      );
    }
    l.default = c;
  },
  98,
);
