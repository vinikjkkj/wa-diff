__d(
  "WAWebRemoveSharableEventGuestAction",
  [
    "fbt",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventHostUserJourneyLogger",
    "WAWebSharableEventRemoveInvitationsJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var a = function (a) {
        (o("WDSDialogBridge").closeWDSDialog(), d(e, t, n, a));
      };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: s._(/*BTDS*/ "", [s._param("guest name", n)]),
          footer: u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
              label: s._(/*BTDS*/ ""),
              onPress: function () {
                return a(!1);
              },
              testid: "sharable-event-remove-guest-dialog-remove",
              type: "destructive",
              variant: "outline",
            },
            secondaryButtonProps: {
              label: s._(/*BTDS*/ ""),
              onPress: function () {
                return a(!0);
              },
              testid: "sharable-event-remove-guest-dialog-remove-reset-link",
              type: "destructive",
              variant: "outline",
            },
            tertiaryButtonProps: {
              label: s._(/*BTDS*/ ""),
              onPress: o("WDSDialogBridge").closeWDSDialog,
              testid: "sharable-event-remove-guest-dialog-cancel",
              variant: "borderless",
            },
          }),
          headerType: "expressive",
          layoutType: "expressive",
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          size: "sm",
          testid: "sharable-event-remove-guest-dialog",
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    async function d(e, t, n, r) {
      o(
        "WAWebSharableEventHostUserJourneyLogger",
      ).logSharableEventHostGuestRemoveTapped(e);
      try {
        await o(
          "WAWebSharableEventRemoveInvitationsJob",
        ).removeSharableEventInvitations(e, [t], { resetLink: r });
      } catch (t) {
        (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
          "remove-guest",
          t,
        ),
          o(
            "WAWebSharableEventHostUserJourneyLogger",
          ).logSharableEventHostGuestRemoveFailed(e, t),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
        return;
      }
      (o(
        "WAWebSharableEventHostUserJourneyLogger",
      ).logSharableEventHostGuestRemoved(e),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "", [s._param("guest name", n)]),
          }),
        ));
    }
    l.removeSharableEventGuest = c;
  },
  226,
);
