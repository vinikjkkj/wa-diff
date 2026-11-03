__d(
  "WAWebDeleteSharableEventAction",
  [
    "fbt",
    "WAWebOpenSharableEventPageAction",
    "WAWebSharableEventDeleteJob",
    "WAWebSharableEventFailureLogger",
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
    function c(e) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ "Delete event"),
          description: s._(
            /*BTDS*/ "This will delete the event for other members but the invitations in chats will remain visible. People on the guest list will see the event has been deleted.",
          ),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), d(e));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          testid: "sharable-event-delete-dialog",
          title: s._(/*BTDS*/ "Delete event?"),
        }),
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebSharableEventDeleteJob").deleteSharableEvent(e);
          } catch (e) {
            (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
              "delete",
              e,
            ),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't delete event. Please try again."),
                }),
              ));
            return;
          }
          o("WAWebOpenSharableEventPageAction").getSelectedSharableEventId() ===
            e && o("WAWebOpenSharableEventPageAction").closeSharableEventPage();
        })),
        m.apply(this, arguments)
      );
    }
    l.confirmDeleteSharableEvent = c;
  },
  226,
);
