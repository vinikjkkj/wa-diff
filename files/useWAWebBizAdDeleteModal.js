__d(
  "useWAWebBizAdDeleteModal",
  [
    "fbt",
    "CometRelay",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdDeleteMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.boostId,
        a = e.onComplete,
        i = r("useWAWebBizAdDeleteMutation")(),
        l = i[0],
        c = i[1],
        d = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield l(t);
            o("WAWebModalManager").ModalManager.close();
            var n = o("WAWebToast.react").genId();
            e.success
              ? (o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: n,
                    msg: s._(/*BTDS*/ "Ad deleted"),
                  }),
                ),
                a == null || a())
              : o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: n,
                    msg: s._(/*BTDS*/ "Failed to delete ad. Please try again."),
                  }),
                );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Delete ad?"),
        onOK: d,
        okText: s._(/*BTDS*/ "Delete"),
        okSpinner: c,
        onCancel: c ? void 0 : o("WAWebModalManager").closeModalManager,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        cancelDisabled: c,
        buttonWidth: "hug",
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDefault",
          children: s._(
            /*BTDS*/ "Deleting the ad will remove it permanently. This can't be undone.",
          ),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = o("CometRelay").useRelayEnvironment(),
        a;
      n[0] !== e || n[1] !== t || n[2] !== r
        ? ((a = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                environment: r,
                children: u.jsx(d, { boostId: e, onComplete: t }),
              }),
            );
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : (a = n[3]);
      var i = a;
      return i;
    }
    l.default = m;
  },
  226,
);
