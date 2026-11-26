__d(
  "WAWebHatchComposerNoticeSubscriptions",
  [
    "WAWebBotUtils",
    "WAWebHatchApprovalManager",
    "WAWebHatchFrontendGating",
    "WAWebHatchReadOnlyNotice",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chat,
        n = e.onChange;
      if (
        !(
          !o("WAWebBotUtils").isHatchBot(t.id) ||
          !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
        )
      ) {
        var a = r("WAWebHatchApprovalManager").subscribe(n),
          i = o("WAWebHatchReadOnlyNotice").subscribeToHatchReadOnly(n);
        return function () {
          (a(), i());
        };
      }
    }
    l.subscribeToHatchComposerNotice = e;
  },
  98,
);
