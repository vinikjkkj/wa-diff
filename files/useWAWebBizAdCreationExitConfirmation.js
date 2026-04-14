__d(
  "useWAWebBizAdCreationExitConfirmation",
  [
    "fbt",
    "FBLogger",
    "Promise",
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
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ = d.useState;
    function f(e, t) {
      var a = p(!1),
        i = m(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (a.current) return !1;
            a.current = !0;
            try {
              var e = t.saveCallbackRef.current,
                n = r("justknobx")._("5520");
              return e != null && n
                ? yield y(e)
                : yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                    title: s._(/*BTDS*/ "Continue without saving?"),
                    children: c.jsx(r("WDSText.react"), {
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
          m(
            function () {
              return { showConfirmationDialog: e };
            },
            [e],
          ),
        ),
        { showExitConfirmation: i }
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Failed to save draft. Please try again."),
          id: o("WAWebToast.react").genId(),
        }),
      );
    }
    function h(e) {
      var t = e.onResult,
        a = e.saveDraft,
        i = _(!1),
        l = i[0],
        u = i[1],
        d = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            u(!0);
            try {
              var e = yield a();
              e.success ||
                (r("FBLogger")("wa_ctwa_web").mustfix(
                  "Draft save on exit returned failure",
                ),
                g());
            } catch (e) {
              (r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("Draft save on exit failed"),
                g());
            }
            t(!0);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = function () {
          t(!0);
        },
        p = function () {
          t(!1);
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Save as draft?"),
        okText: s._(/*BTDS*/ "Save"),
        okSpinner: l,
        okDisabled: l,
        onOK: d,
        onCancel: p,
        cancelText: s._(/*BTDS*/ "Cancel"),
        cancelDisabled: l,
        extraButtonProps: {
          text: s._(/*BTDS*/ "Discard"),
          onClick: m,
          disabled: l,
        },
        splitLayout: !0,
        children: c.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: s._(/*BTDS*/ "You can continue editing later."),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return new (e || (e = n("Promise")))(function (e) {
            var n = function () {
              (o("WAWebModalManager").ModalManager.off("close_modal", n),
                e(!1));
            };
            (o("WAWebModalManager").ModalManager.on("close_modal", n),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(h, {
                  saveDraft: t,
                  onResult: function (r) {
                    (o("WAWebModalManager").ModalManager.off("close_modal", n),
                      o("WAWebModalManager").ModalManager.close(),
                      e(r));
                  },
                }),
                { blockClose: !0 },
              ));
          });
        })),
        C.apply(this, arguments)
      );
    }
    l.default = f;
  },
  226,
);
