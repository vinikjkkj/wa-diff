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
        a = o.existingDraftIDRef,
        i = o.saveCallbackRef,
        l = u(r("WAWebBizAdCreationDraftIDContext")),
        s = u(r("WAWebBizAdCreationConfigContext")),
        d = r("useWAWebBizAdCreateDraftMutation")(),
        m = d[0],
        p = r("useWAWebBizAdEditDraftMutation")(),
        _ = p[0];
      return (
        c(
          function () {
            return (
              (i.current = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  if (s == null)
                    return (
                      r("FBLogger")("wa_ctwa_web").warn(
                        "Draft save failed: configContext is null",
                      ),
                      { success: !1 }
                    );
                  var n = s.flowID,
                    o = s.pageID,
                    i = s.product,
                    u = r("convertWAWebSpecToLWIVariables")(t, n, o, i),
                    c = u.input.creation_spec,
                    d = (e = l.draftID) != null ? e : a.current;
                  if (d != null) {
                    var p = yield _({
                      draft_id: d,
                      flow_id: n,
                      spec: c,
                      use_case: "WA_WEB",
                    });
                    return p.success
                      ? { success: !0, draftID: d }
                      : (r("FBLogger")("wa_ctwa_web").warn(
                          "Draft edit mutation failed",
                        ),
                        { success: !1 });
                  }
                  var f = yield m({
                    flow_id: n,
                    page_id: o,
                    product: i,
                    spec: c,
                    use_case: "WA_WEB",
                  });
                  return f.success
                    ? (l.setDraftID(f.draftID),
                      { success: !0, draftID: f.draftID })
                    : (r("FBLogger")("wa_ctwa_web").warn(
                        "Draft create mutation failed",
                      ),
                      { success: !1 });
                },
              )),
              function () {
                i.current = null;
              }
            );
          },
          [i, a, l, s, t, m, _],
        ),
        null
      );
    }
    l.default = d;
  },
  98,
);
