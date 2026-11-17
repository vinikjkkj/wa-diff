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
    "asyncToGeneratorRuntime",
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
          description: s._(
            /*BTDS*/ "{guest name} will be removed from the guest list and won't be able to access the event details. Removing a guest who responded via link won't stop others with the link from responding.",
            [s._param("guest name", n)],
          ),
          footer: u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
              label: s._(/*BTDS*/ "Remove guest"),
              onPress: function () {
                return a(!1);
              },
              testid: "sharable-event-remove-guest-dialog-remove",
              type: "destructive",
              variant: "outline",
            },
            secondaryButtonProps: {
              label: s._(/*BTDS*/ "Remove guest and reset event link"),
              onPress: function () {
                return a(!0);
              },
              testid: "sharable-event-remove-guest-dialog-remove-reset-link",
              type: "destructive",
              variant: "outline",
            },
            tertiaryButtonProps: {
              label: s._(/*BTDS*/ "Cancel"),
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
          title: s._(/*BTDS*/ "Remove guest"),
        }),
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o(
              "WAWebSharableEventHostUserJourneyLogger",
            ).logSharableEventHostGuestRemoveTapped(e);
            try {
              yield o(
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
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Couldn't remove from event. Please try again.",
                    ),
                  }),
                ));
              return;
            }
            (o(
              "WAWebSharableEventHostUserJourneyLogger",
            ).logSharableEventHostGuestRemoved(e),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Removed {guest name} from this event", [
                    s._param("guest name", n),
                  ]),
                }),
              ));
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.removeSharableEventGuest = c;
  },
  226,
);
