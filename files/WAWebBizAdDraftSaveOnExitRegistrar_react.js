__d(
  "WAWebBizAdDraftSaveOnExitRegistrar.react",
  [
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationDraftIDContext",
    "WAWebBizAdDraftSaveCallbackContext",
    "asyncToGeneratorRuntime",
    "convertWAWebSpecToLWIVariables",
    "react",
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
      var t = e.spec,
        o = u(r("WAWebBizAdDraftSaveCallbackContext")),
        a = o.saveCallbackRef,
        i = u(r("WAWebBizAdCreationDraftIDContext")),
        l = u(r("WAWebBizAdCreationConfigContext")),
        s = r("useWAWebBizAdCreateDraftMutation")(),
        d = s[0],
        m = r("useWAWebBizAdEditDraftMutation")(),
        p = m[0];
      return (
        c(
          function () {
            return (
              (a.current = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (l == null)
                    return (
                      r("FBLogger")("wa_ctwa_web").warn(
                        "Draft save failed: configContext is null",
                      ),
                      { success: !1 }
                    );
                  var e = l.flowID,
                    n = l.pageID,
                    o = l.product,
                    a = r("convertWAWebSpecToLWIVariables")(t, e, n, o),
                    s = a.input.creation_spec,
                    u = i.draftID;
                  if (u != null) {
                    var c = yield p({ draft_id: u, flow_id: e, spec: s });
                    return c.success
                      ? { success: !0, draftID: u }
                      : (r("FBLogger")("wa_ctwa_web").warn(
                          "Draft edit mutation failed",
                        ),
                        { success: !1 });
                  }
                  var m = yield d({
                    flow_id: e,
                    page_id: n,
                    product: o,
                    spec: s,
                    use_case: "WA_WEB",
                  });
                  return m.success
                    ? (i.setDraftID(m.draftID),
                      { success: !0, draftID: m.draftID })
                    : (r("FBLogger")("wa_ctwa_web").warn(
                        "Draft create mutation failed",
                      ),
                      { success: !1 });
                },
              )),
              function () {
                a.current = null;
              }
            );
          },
          [a, i, l, t, d, p],
        ),
        null
      );
    }
    l.default = d;
  },
  98,
);
