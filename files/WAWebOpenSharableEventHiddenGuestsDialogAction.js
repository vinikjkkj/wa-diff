__d(
  "WAWebOpenSharableEventHiddenGuestsDialogAction",
  [
    "WAWebSharableEventHiddenGuestsDialog.react",
    "WAWebSharableEventInviteeUserJourneyLogger",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (o(
        "WAWebSharableEventInviteeUserJourneyLogger",
      ).logSharableEventInviteeHiddenGuestsShown(e),
        o("WDSDialogBridge").openWDSDialog(
          s.jsx(r("WAWebSharableEventHiddenGuestsDialog.react"), {
            onDismiss: function () {
              (o(
                "WAWebSharableEventInviteeUserJourneyLogger",
              ).logSharableEventInviteeHiddenGuestsDismissed(e),
                o("WDSDialogBridge").closeWDSDialog());
            },
          }),
        ));
    }
    l.openSharableEventHiddenGuestsDialog = u;
  },
  98,
);
