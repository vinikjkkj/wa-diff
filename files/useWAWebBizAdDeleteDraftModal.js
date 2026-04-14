__d(
  "useWAWebBizAdDeleteDraftModal",
  [
    "fbt",
    "CometRelay",
    "FBLogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebBizAdDeleteDraftMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.draftId,
        a = e.onComplete,
        i = r("useWAWebBizAdDeleteDraftMutation")(),
        l = i[0],
        c = i[1],
        d = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield l(t);
              o("WAWebModalManager").ModalManager.close();
              var n = o("WAWebToast.react").genId();
              e.success
                ? (r("FBLogger")("wa_ctwa_web").info("draft_deleted_by_user"),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      id: n,
                      msg: s._(/*BTDS*/ "Draft deleted"),
                    }),
                  ),
                  a == null || a())
                : (r("FBLogger")("wa_ctwa_web").warn(
                    "delete draft mutation returned non-success",
                  ),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      id: n,
                      msg: s._(
                        /*BTDS*/ "Failed to delete draft. Please try again.",
                      ),
                    }),
                  ));
            } catch (e) {
              (r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("delete draft failed"),
                o("WAWebModalManager").ModalManager.close(),
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: o("WAWebToast.react").genId(),
                    msg: s._(
                      /*BTDS*/ "Failed to delete draft. Please try again.",
                    ),
                  }),
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Delete draft?"),
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
          children: s._(/*BTDS*/ "Your progress will be lost."),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = o("CometRelay").useRelayEnvironment(),
        r = c(
          function () {
            e != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: n,
                  children: u.jsx(d, { draftId: e, onComplete: t }),
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
