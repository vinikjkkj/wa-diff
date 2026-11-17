__d(
  "WAWebOpenSharableEventLinkDialogAction",
  [
    "fbt",
    "WAWebSharableEventInviteLinkAction",
    "WAWebSharableEventLinkDialog.react",
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
            return m(e, !1);
          },
        }),
      );
    }
    function m(e, t) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(p, { eventId: e, isResetting: t }),
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.eventId,
        a = e.isResetting,
        i;
      (t[0] !== a
        ? ((i = function () {
            return o("WDSDialogDismissRegistry").registerDialogDismissBlocker(
              function () {
                return a;
              },
            );
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]),
        c(i, void 0));
      var l;
      t[2] !== a
        ? ((l = a
            ? s._(/*BTDS*/ "Resetting\u2026")
            : s._(/*BTDS*/ "Reset link")),
          (t[2] = a),
          (t[3] = l))
        : (l = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "Anyone with the current link will no longer be able to use it. A new link will be generated.",
          )),
          (t[4] = m))
        : (m = t[4]);
      var p, f;
      t[5] !== n || t[6] !== a
        ? ((p = function () {
            a || _(n);
          }),
          (f = function () {
            a || d(n);
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = p),
          (t[8] = f))
        : ((p = t[7]), (f = t[8]));
      var g;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Reset link?")), (t[9] = g))
        : (g = t[9]);
      var h;
      return (
        t[10] !== a || t[11] !== l || t[12] !== p || t[13] !== f
          ? ((h = u.jsx(r("WDSConfirmDialog.react"), {
              confirmLabel: l,
              confirmLoading: a,
              description: m,
              destructive: !0,
              onConfirm: p,
              onDismiss: f,
              open: !0,
              testid: "sharable-event-link-reset-dialog",
              title: g,
            })),
            (t[10] = a),
            (t[11] = l),
            (t[12] = p),
            (t[13] = f),
            (t[14] = h))
          : (h = t[14]),
        h
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          m(e, !0);
          try {
            yield o(
              "WAWebSharableEventInviteLinkAction",
            ).resetSharableEventInviteLink(e);
          } catch (e) {
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't reset link. Please try again."),
              }),
            );
          }
          d(e);
        })),
        f.apply(this, arguments)
      );
    }
    l.openSharableEventLinkDialog = d;
  },
  226,
);
