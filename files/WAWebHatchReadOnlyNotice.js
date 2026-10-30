__d(
  "WAWebHatchReadOnlyNotice",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebFrontendContactGetters",
    "WAWebHatchCvmPinComposerNotice.react",
    "WAWebHatchCvmReadOnlyState",
    "WAWebHatchCvmTransferringMsgBar.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (
        !o("WAWebBotUtils").isHatchBot(e.id) ||
        !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      )
        return null;
      var t = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
      return r("WAWebHatchLinkedStatusManager").isUnlinked()
        ? s._(
            /*BTDS*/ "You can't send or receive messages. To reconnect to {bot_name} in WhatsApp, use your primary phone.",
            [s._param("bot_name", t)],
          )
        : (function (e) {
            if (e === "transferring")
              return u.jsx(r("WAWebHatchCvmTransferringMsgBar.react"), {});
            if (e === "pin_required")
              return u.jsx(r("WAWebHatchCvmPinComposerNotice.react"), {
                botName: t,
              });
            if (e == null) return null;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(o("WAWebHatchCvmReadOnlyState").getHatchCvmReadOnlyReason());
    }
    function d(e) {
      return o("WAWebHatchCvmReadOnlyState").subscribeToHatchCvmReadOnly(e);
    }
    ((l.getHatchReadOnlyNotice = c), (l.subscribeToHatchReadOnly = d));
  },
  226,
);
