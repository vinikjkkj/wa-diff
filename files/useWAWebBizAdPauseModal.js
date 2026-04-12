__d(
  "useWAWebBizAdPauseModal",
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
    "useWAWebBizAdPauseMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.boostId,
        a = e.onComplete,
        i = r("useWAWebBizAdPauseMutation")(),
        l = i[0],
        c = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebModalManager").ModalManager.close();
            var e = yield l(t),
              n = o("WAWebToast.react").genId();
            e.success
              ? (o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: n,
                    msg: s._(/*BTDS*/ "Ad paused"),
                  }),
                ),
                a == null || a())
              : o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: n,
                    msg: s._(/*BTDS*/ "Failed to pause ad. Please try again."),
                  }),
                );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Pause ad?"),
        onOK: c,
        okText: s._(/*BTDS*/ "Pause"),
        okSpinner: !1,
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        cancelDisabled: !1,
        buttonWidth: "hug",
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDefault",
          children: s._(
            /*BTDS*/ "This ad will stop running. You can resume at any time.",
          ),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = o("CometRelay").useRelayEnvironment(),
        r = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                environment: n,
                children: u.jsx(d, { boostId: e, onComplete: t }),
              }),
            );
          },
          [e, t, n],
        );
      return r;
    }
    l.default = m;
  },
  226,
);
