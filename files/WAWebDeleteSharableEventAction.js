__d(
  "WAWebDeleteSharableEventAction",
  [
    "fbt",
    "WAWebOpenSharableEventPageAction",
    "WAWebSharableEventDeleteJob",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventHostUserJourneyLogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ ""),
          description: s._(/*BTDS*/ ""),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), d(e, t));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          testid: "sharable-event-delete-dialog",
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    async function d(e, t) {
      o(
        "WAWebSharableEventHostUserJourneyLogger",
      ).logSharableEventHostDeleteTapped(e);
      try {
        await o("WAWebSharableEventDeleteJob").deleteSharableEvent(e);
      } catch (t) {
        (o("WAWebSharableEventFailureLogger").logSharableEventFailure(
          "delete",
          t,
        ),
          o(
            "WAWebSharableEventHostUserJourneyLogger",
          ).logSharableEventHostDeleteFailed(e, t),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
        return;
      }
      (o("WAWebSharableEventHostUserJourneyLogger").logSharableEventHostDeleted(
        e,
      ),
        t != null
          ? t()
          : o(
              "WAWebOpenSharableEventPageAction",
            ).getSelectedSharableEventId() === e &&
            o("WAWebOpenSharableEventPageAction").closeSharableEventPage());
    }
    l.confirmDeleteSharableEvent = c;
  },
  226,
);
