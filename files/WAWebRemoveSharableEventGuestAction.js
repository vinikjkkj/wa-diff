__d(
  "WAWebRemoveSharableEventGuestAction",
  [
    "fbt",
    "WALogger",
    "WAWebSharableEventRemoveInvitationsJob",
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
    function d(e, t, n) {
      o("WDSDialogBridge").openWDSDialog(
        c.jsx(r("WDSConfirmDialog.react"), {
          description: s._(
            /*BTDS*/ "{guest name} will be removed from the guest list and won't be able to access the event details. Removing a guest who responded via link won't stop others with the link from responding.",
            [s._param("guest name", n)],
          ),
          cancelLabel: s._(/*BTDS*/ "Cancel"),
          confirmLabel: s._(/*BTDS*/ "Remove guest"),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), m(e, t, n));
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          testid: "sharable-event-remove-guest-dialog",
          title: s._(/*BTDS*/ "Remove guest"),
        }),
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            yield o(
              "WAWebSharableEventRemoveInvitationsJob",
            ).removeSharableEventInvitations(t, [n]);
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event] removing a guest failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-remove-guest-failed"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Couldn't remove from event. Please try again.",
                  ),
                }),
              ));
            return;
          }
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Removed {guest name} from this event", [
                s._param("guest name", a),
              ]),
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.removeSharableEventGuest = d;
  },
  226,
);
