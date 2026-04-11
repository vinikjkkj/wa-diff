__d(
  "useWAWebBizAdCreationExitConfirmation",
  [
    "fbt",
    "FBLogger",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "react",
    "useWAWebBeforeUnload",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef;
    function p(e, t) {
      var a = m(!1),
        i = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (a.current) return !1;
            a.current = !0;
            try {
              var e = t.saveCallbackRef.current,
                n = r("justknobx")._("5520");
              return e != null && n
                ? yield _(e)
                : yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                    title: s._(/*BTDS*/ "Continue without saving?"),
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: s._(/*BTDS*/ "Your progress will be lost."),
                    }),
                    okText: s._(/*BTDS*/ "Continue"),
                  });
            } finally {
              a.current = !1;
            }
          }),
          [t],
        );
      return (
        r("useWAWebBeforeUnload")(
          d(
            function () {
              return { showConfirmationDialog: e };
            },
            [e],
          ),
        ),
        { showExitConfirmation: i }
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !1,
            n = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
              title: s._(/*BTDS*/ "Save as draft?"),
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "You can continue editing later."),
              }),
              okText: s._(/*BTDS*/ "Save"),
              cancelText: s._(/*BTDS*/ "Cancel"),
              extraButtonProps: {
                text: s._(/*BTDS*/ "Discard"),
                onClick: function () {
                  ((t = !0), o("WAWebModalManager").ModalManager.close());
                },
              },
              splitLayout: !0,
            });
          return n
            ? (e()
                .then(function (e) {
                  e.success ||
                    (r("FBLogger")("wa_ctwa_web").warn(
                      "Draft save on exit returned failure",
                    ),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Failed to save draft. Please try again.",
                        ),
                        id: o("WAWebToast.react").genId(),
                      }),
                    ));
                })
                .catch(function (e) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .warn("Draft save on exit failed"),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Failed to save draft. Please try again.",
                        ),
                        id: o("WAWebToast.react").genId(),
                      }),
                    ));
                }),
              !0)
            : !!t;
        })),
        f.apply(this, arguments)
      );
    }
    l.default = p;
  },
  226,
);
