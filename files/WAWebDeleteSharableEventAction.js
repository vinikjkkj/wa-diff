__d(
  "WAWebDeleteSharableEventAction",
  [
    "fbt",
    "WALogger",
    "WAWebOpenSharableEventPageAction",
    "WAWebSharableEventDeleteJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      o("WDSDialogBridge").openWDSDialog(
        c.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ "Delete event"),
          description: s._(
            /*BTDS*/ "This will delete the event for other members but the invitations in chats will remain visible. People on the guest list will see the event has been deleted.",
          ),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), m(e));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          testid: "sharable-event-delete-dialog",
          title: s._(/*BTDS*/ "Delete event?"),
        }),
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o("WAWebSharableEventDeleteJob").deleteSharableEvent(t);
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event] deleting the event failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-delete-failed"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't delete event. Please try again."),
                }),
              ));
            return;
          }
          o("WAWebOpenSharableEventPageAction").getSelectedSharableEventId() ===
            t && o("WAWebOpenSharableEventPageAction").closeSharableEventPage();
        })),
        p.apply(this, arguments)
      );
    }
    l.confirmDeleteSharableEvent = d;
  },
  226,
);
