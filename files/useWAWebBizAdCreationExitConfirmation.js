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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        a = e.onResult,
        i = e.saveDraft,
        l = _(!1),
        u = l[0],
        d = l[1],
        m;
      t[0] !== a || t[1] !== i
        ? ((m = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              d(!0);
              try {
                var e = yield i();
                e.success ||
                  (r("FBLogger")("wa_ctwa_web").mustfix(
                    "Draft save on exit returned failure",
                  ),
                  g());
              } catch (e) {
                var t = e;
                (r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(t))
                  .mustfix("Draft save on exit failed"),
                  g());
              }
              a(!0);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        f;
      t[3] !== a
        ? ((f = function () {
            a(!0);
          }),
          (t[3] = a),
          (t[4] = f))
        : (f = t[4]);
      var h = f,
        y;
      t[5] !== a
        ? ((y = function () {
            a(!1);
          }),
          (t[5] = a),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b,
        v;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Save as draft?")),
          (v = s._(/*BTDS*/ "Save")),
          (t[7] = b),
          (t[8] = v))
        : ((b = t[7]), (v = t[8]));
      var S;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Cancel")), (t[9] = S))
        : (S = t[9]);
      var R;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Discard")), (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] !== h || t[12] !== u
        ? ((L = { text: R, onClick: h, disabled: u }),
          (t[11] = h),
          (t[12] = u),
          (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "You can continue editing later."),
          })),
          (t[14] = E))
        : (E = t[14]);
      var k;
      return (
        t[15] !== C || t[16] !== p || t[17] !== u || t[18] !== L
          ? ((k = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: b,
              okText: v,
              okSpinner: u,
              okDisabled: u,
              onOK: p,
              onCancel: C,
              cancelText: S,
              cancelDisabled: u,
              extraButtonProps: L,
              splitLayout: !0,
              children: E,
            })),
            (t[15] = C),
            (t[16] = p),
            (t[17] = u),
            (t[18] = L),
            (t[19] = k))
          : (k = t[19]),
        k
      );
    }
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
