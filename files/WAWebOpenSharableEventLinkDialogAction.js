__d(
  "WAWebOpenSharableEventLinkDialogAction",
  [
    "fbt",
    "WAWebSharableEventInviteLinkAction",
    "WAWebSharableEventLinkDialog.react",
    "WAWebSharableEventQRCodeDialog.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "WDSDialogDismissRegistry",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WAWebSharableEventLinkDialog.react"), {
          eventId: e,
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onReset: function () {
            return m(e, function () {
              return d(e);
            });
          },
          onShowQRCode: function (n) {
            return _(e, n);
          },
        }),
      );
    }
    function m(e, t) {
      f(e, "link", !1, t);
    }
    function p(e, t) {
      f(e, "qrCode", !1, t);
    }
    function _(e, t) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WAWebSharableEventQRCodeDialog.react"), {
          eventId: e,
          link: t,
          onBack: function () {
            return d(e);
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onReset: function () {
            return p(e, function (n) {
              return _(e, n != null ? n : t);
            });
          },
        }),
      );
    }
    function f(e, t, n, r) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(g, { eventId: e, isResetting: n, onDone: r, target: t }),
      );
    }
    function g(e) {
      var t = e.eventId,
        n = e.isResetting,
        a = e.onDone,
        i = e.target;
      c(
        function () {
          return o("WDSDialogDismissRegistry").registerDialogDismissBlocker(
            function () {
              return n;
            },
          );
        },
        void 0,
      );
      var l = y(i);
      return u.jsx(r("WDSConfirmDialog.react"), {
        confirmLabel: n ? l.resettingLabel : l.confirmLabel,
        confirmLoading: n,
        description: l.description,
        destructive: !0,
        onConfirm: function () {
          n || h(t, i, a);
        },
        onDismiss: function () {
          n || a(null);
        },
        open: !0,
        testid: l.testid,
        title: l.title,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    async function h(e, t, n) {
      f(e, t, !0, n);
      var r = y(t),
        a = null;
      try {
        a = await o(
          "WAWebSharableEventInviteLinkAction",
        ).resetSharableEventInviteLink(e);
      } catch (e) {
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: r.failureToast }),
        );
      }
      (a != null &&
        r.successToast != null &&
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: r.successToast }),
        ),
        n(a));
    }
    function y(e) {
      return e === "link"
        ? {
            confirmLabel: s._(/*BTDS*/ ""),
            description: s._(/*BTDS*/ ""),
            failureToast: s._(/*BTDS*/ ""),
            resettingLabel: s._(/*BTDS*/ ""),
            successToast: null,
            testid: "sharable-event-link-reset-dialog",
            title: s._(/*BTDS*/ ""),
          }
        : e === "qrCode"
          ? {
              confirmLabel: s._(/*BTDS*/ ""),
              description: s._(/*BTDS*/ ""),
              failureToast: s._(/*BTDS*/ ""),
              resettingLabel: s._(/*BTDS*/ ""),
              successToast: s._(/*BTDS*/ ""),
              testid: "sharable-event-qr-code-reset-dialog",
              title: s._(/*BTDS*/ ""),
            }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.openSharableEventLinkDialog = d),
      (l.confirmResetSharableEventLink = m),
      (l.confirmResetSharableEventQRCode = p));
  },
  226,
);
