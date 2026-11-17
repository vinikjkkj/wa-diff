__d(
  "WAWebOpenSharableEventInviteNotSupportedModalAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("JSResourceForInteraction")(
        "WAWebSharableEventInviteNotSupportedModal.react",
      ).__setRef("WAWebOpenSharableEventInviteNotSupportedModalAction");
    function d() {
      m();
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield c.load(),
              n = t.SharableEventInviteNotSupportedModal;
            o("WDSDialogBridge").openWDSDialog(u.jsx(n, {}));
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable-event] invite not supported notice failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-invite-not-supported-load-failed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.openSharableEventInviteNotSupportedModal = d;
  },
  98,
);
