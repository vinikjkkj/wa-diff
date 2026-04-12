__d(
  "WAWebSupportAIInfoNux.react",
  [
    "WAWebModalManager",
    "WAWebSupportAINux.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(r("WAWebSupportAINux.react"), {
        onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebModalManager").ModalManager.close(),
            new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
              supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                .SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_OK_CLICKED,
            }).commit());
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
