__d(
  "WAWebRemoveSharableEventGuestAction",
  [
    "fbt",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventHostUserJourneyLogger",
    "WAWebSharableEventRemoveInvitationsJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          description: s._(
            /*BTDS*/ "{guest name} will be removed from the guest list and won't be able to access the event details. Removing a guest who responded via link won't stop others with the link from responding.",
            [s._param("guest name", n)],
          ),
          cancelLabel: s._(/*BTDS*/ "Cancel"),
          confirmLabel: s._(/*BTDS*/ "Remove guest"),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), d(e, t, n));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          testid: "sharable-event-remove-guest-dialog",
          title: s._(/*BTDS*/ "Remove guest"),
        }),
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o(
            "WAWebSharableEventHostUserJourneyLogger",
          ).logSharableEventHostGuestRemoveTapped(e);
          try {
            yield o(
              "WAWebSharableEventRemoveInvitationsJob",
            ).removeSharableEventInvitations(e, [t]);
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
        })),
        m.apply(this, arguments)
      );
    }
    l.removeSharableEventGuest = c;
  },
  226,
);
