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
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.eventId,
        a = e.isResetting,
        i = e.onDone,
        l = e.target,
        s;
      (t[0] !== a
        ? ((s = function () {
            return o("WDSDialogDismissRegistry").registerDialogDismissBlocker(
              function () {
                return a;
              },
            );
          }),
          (t[0] = a),
          (t[1] = s))
        : (s = t[1]),
        c(s, void 0));
      var d;
      t[2] !== l ? ((d = C(l)), (t[2] = l), (t[3] = d)) : (d = t[3]);
      var m = d,
        p = a ? m.resettingLabel : m.confirmLabel,
        _;
      t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== l
        ? ((_ = function () {
            a || h(n, l, i);
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = l),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== a || t[10] !== i
        ? ((f = function () {
            a || i(null);
          }),
          (t[9] = a),
          (t[10] = i),
          (t[11] = f))
        : (f = t[11]);
      var g;
      return (
        t[12] !== m.description ||
        t[13] !== m.testid ||
        t[14] !== m.title ||
        t[15] !== a ||
        t[16] !== p ||
        t[17] !== _ ||
        t[18] !== f
          ? ((g = u.jsx(r("WDSConfirmDialog.react"), {
              confirmLabel: p,
              confirmLoading: a,
              description: m.description,
              destructive: !0,
              onConfirm: _,
              onDismiss: f,
              open: !0,
              testid: m.testid,
              title: m.title,
            })),
            (t[12] = m.description),
            (t[13] = m.testid),
            (t[14] = m.title),
            (t[15] = a),
            (t[16] = p),
            (t[17] = _),
            (t[18] = f),
            (t[19] = g))
          : (g = t[19]),
        g
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          f(e, t, !0, n);
          var r = C(t),
            a = null;
          try {
            a = yield o(
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e === "link"
        ? {
            confirmLabel: s._(/*BTDS*/ "Reset link"),
            description: s._(
              /*BTDS*/ "Anyone with the current link will no longer be able to use it. A new link will be generated.",
            ),
            failureToast: s._(
              /*BTDS*/ "Couldn't reset link. Please try again.",
            ),
            resettingLabel: s._(/*BTDS*/ "Resetting\u2026"),
            successToast: null,
            testid: "sharable-event-link-reset-dialog",
            title: s._(/*BTDS*/ "Reset link?"),
          }
        : e === "qrCode"
          ? {
              confirmLabel: s._(/*BTDS*/ "Reset"),
              description: s._(
                /*BTDS*/ "If you reset, the current QR code and invite link will no longer work. A new QR code and link will be created.",
              ),
              failureToast: s._(
                /*BTDS*/ "Couldn't reset QR code. Please try again.",
              ),
              resettingLabel: s._(/*BTDS*/ "Resetting\u2026"),
              successToast: s._(
                /*BTDS*/ "The previous QR code has been reset and a new QR code has been created.",
              ),
              testid: "sharable-event-qr-code-reset-dialog",
              title: s._(/*BTDS*/ "Reset QR code?"),
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
