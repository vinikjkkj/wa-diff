__d(
  "WAWebBizAdDraftSaveOnExitRegistrar.react",
  [
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationDraftIDContext",
    "WAWebBizAdDraftSaveCallbackContext",
    "WAWebBizAdManagementLogger",
    "asyncToGeneratorRuntime",
    "convertWAWebSpecToLWIVariables",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreateDraftMutation",
    "useWAWebBizAdEditDraftMutation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        a = e.spec,
        i = u(r("WAWebBizAdDraftSaveCallbackContext")),
        l = i.existingDraftIDRef,
        s = i.saveCallbackRef,
        d = u(r("WAWebBizAdCreationDraftIDContext")),
        m = u(r("WAWebBizAdCreationConfigContext")),
        p = r("useWAWebBizAdCreateDraftMutation")(),
        _ = p[0],
        f = r("useWAWebBizAdEditDraftMutation")(),
        g = f[0],
        h,
        y;
      return (
        t[0] !== m ||
        t[1] !== _ ||
        t[2] !== d ||
        t[3] !== g ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== a
          ? ((h = function () {
              return (
                (s.current = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e;
                    if (m == null)
                      return (
                        r("FBLogger")("wa_ctwa_web").warn(
                          "Draft save failed: configContext is null",
                        ),
                        { success: !1 }
                      );
                    var t = m.flowID,
                      n = m.pageID,
                      i = m.product,
                      s = r("convertWAWebSpecToLWIVariables")(a, t, n, i),
                      u = s.input.creation_spec,
                      c = (e = d.draftID) != null ? e : l.current;
                    if (c != null) {
                      var p = yield g({
                        draft_id: c,
                        flow_id: t,
                        spec: u,
                        use_case: "WA_SMB",
                      });
                      if (p.success) {
                        var f;
                        return (
                          (f = o(
                            "WAWebBizAdManagementLogger",
                          )).logManageAdsScreenAction(
                            f.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                            f.LWI_SCREEN_ACTION
                              .LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED,
                            f.LWI_ADS_IDENTITY_TYPE.PAGE,
                            t,
                            null,
                            JSON.stringify({
                              draft_action: "edit",
                              draft_id: c,
                            }),
                          ),
                          { success: !0, draftID: c }
                        );
                      }
                      return (
                        r("FBLogger")("wa_ctwa_web").warn(
                          "Draft edit mutation failed",
                        ),
                        { success: !1 }
                      );
                    }
                    var h = yield _({
                      flow_id: t,
                      page_id: n,
                      product: i,
                      spec: u,
                      use_case: "WA_SMB",
                    });
                    if (h.success) {
                      var f;
                      return (
                        d.setDraftID(h.draftID),
                        (f = o(
                          "WAWebBizAdManagementLogger",
                        )).logManageAdsScreenAction(
                          f.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                          f.LWI_SCREEN_ACTION
                            .LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED,
                          f.LWI_ADS_IDENTITY_TYPE.PAGE,
                          t,
                          null,
                          JSON.stringify({
                            draft_action: "create",
                            draft_id: h.draftID,
                          }),
                        ),
                        { success: !0, draftID: h.draftID }
                      );
                    }
                    return (
                      r("FBLogger")("wa_ctwa_web").warn(
                        "Draft create mutation failed",
                      ),
                      { success: !1 }
                    );
                  },
                )),
                function () {
                  s.current = null;
                }
              );
            }),
            (y = [s, l, d, m, a, _, g]),
            (t[0] = m),
            (t[1] = _),
            (t[2] = d),
            (t[3] = g),
            (t[4] = l),
            (t[5] = s),
            (t[6] = a),
            (t[7] = h),
            (t[8] = y))
          : ((h = t[7]), (y = t[8])),
        c(h, y),
        null
      );
    }
    l.default = d;
  },
  98,
);
