__d(
  "useWAWebBizAdDeleteDraftModal",
  [
    "fbt",
    "CometRelay",
    "FBLogger",
    "WAWebBizAdManagementLogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdDeleteDraftMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.draftId,
        a = e.manageAdsFlowID,
        i = e.onComplete,
        l = r("useWAWebBizAdDeleteDraftMutation")(),
        c = l[0],
        d = l[1],
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield c(t);
              o("WAWebModalManager").ModalManager.close();
              var n = o("WAWebToast.react").genId();
              if (e.success) {
                var l;
                (r("FBLogger")("wa_ctwa_web").info("draft_deleted_by_user"),
                  (l = o(
                    "WAWebBizAdManagementLogger",
                  )).logManageAdsScreenAction(
                    l.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                    l.LWI_SCREEN_ACTION
                      .LWI_ACTION_MANAGE_AD_DRAFT_AD_OPTIONS_DELETE_CLICK,
                    l.LWI_ADS_IDENTITY_TYPE.PAGE,
                    a,
                  ),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      id: n,
                      msg: s._(/*BTDS*/ "Draft deleted"),
                    }),
                  ),
                  i == null || i());
              } else
                (r("FBLogger")("wa_ctwa_web").warn(
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
        onOK: m,
        okText: s._(/*BTDS*/ "Delete"),
        okSpinner: d,
        onCancel: d ? void 0 : o("WAWebModalManager").closeModalManager,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        cancelDisabled: d,
        buttonWidth: "hug",
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDefault",
          children: s._(/*BTDS*/ "Your progress will be lost."),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a = o("CometRelay").useRelayEnvironment(),
        i;
      r[0] !== e || r[1] !== n || r[2] !== t || r[3] !== a
        ? ((i = function () {
            e != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: a,
                  children: u.jsx(d, {
                    draftId: e,
                    manageAdsFlowID: n != null ? n : "",
                    onComplete: t,
                  }),
                }),
              );
          }),
          (r[0] = e),
          (r[1] = n),
          (r[2] = t),
          (r[3] = a),
          (r[4] = i))
        : (i = r[4]);
      var l = i;
      return l;
    }
    l.default = m;
  },
  226,
);
