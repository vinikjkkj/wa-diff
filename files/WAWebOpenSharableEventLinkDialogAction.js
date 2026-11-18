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
            return m(e, function () {
              return d(e);
            });
          },
        }),
      );
    }
    function m(e, t) {
      p(e, !1, t);
    }
    function p(e, t, n) {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(_, { eventId: e, isResetting: t, onDone: n }),
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.eventId,
        a = e.isResetting,
        i = e.onDone,
        l;
      (t[0] !== a
        ? ((l = function () {
            return o("WDSDialogDismissRegistry").registerDialogDismissBlocker(
              function () {
                return a;
              },
            );
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]),
        c(l, void 0));
      var d;
      t[2] !== a
        ? ((d = a
            ? s._(/*BTDS*/ "Resetting\u2026")
            : s._(/*BTDS*/ "Reset link")),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "Anyone with the current link will no longer be able to use it. A new link will be generated.",
          )),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== n || t[6] !== a || t[7] !== i
        ? ((p = function () {
            a || f(n, i);
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = i),
          (t[8] = p))
        : (p = t[8]);
      var _;
      t[9] !== a || t[10] !== i
        ? ((_ = function () {
            a || i();
          }),
          (t[9] = a),
          (t[10] = i),
          (t[11] = _))
        : (_ = t[11]);
      var g;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Reset link?")), (t[12] = g))
        : (g = t[12]);
      var h;
      return (
        t[13] !== a || t[14] !== d || t[15] !== p || t[16] !== _
          ? ((h = u.jsx(r("WDSConfirmDialog.react"), {
              confirmLabel: d,
              confirmLoading: a,
              description: m,
              destructive: !0,
              onConfirm: p,
              onDismiss: _,
              open: !0,
              testid: "sharable-event-link-reset-dialog",
              title: g,
            })),
            (t[13] = a),
            (t[14] = d),
            (t[15] = p),
            (t[16] = _),
            (t[17] = h))
          : (h = t[17]),
        h
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          p(e, !0, t);
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
          t();
        })),
        g.apply(this, arguments)
      );
    }
    ((l.openSharableEventLinkDialog = d),
      (l.confirmResetSharableEventLink = m));
  },
  226,
);
