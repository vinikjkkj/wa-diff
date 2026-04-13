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
      var t = o("react-compiler-runtime").c(8),
        a = e.spec,
        i = u(r("WAWebBizAdDraftSaveCallbackContext")),
        l = i.saveCallbackRef,
        s = u(r("WAWebBizAdCreationDraftIDContext")),
        d = u(r("WAWebBizAdCreationConfigContext")),
        m = r("useWAWebBizAdCreateDraftMutation")(),
        p = m[0],
        _ = r("useWAWebBizAdEditDraftMutation")(),
        f = _[0],
        g,
        h;
      return (
        t[0] !== d ||
        t[1] !== p ||
        t[2] !== s ||
        t[3] !== f ||
        t[4] !== l ||
        t[5] !== a
          ? ((g = function () {
              return (
                (l.current = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (d == null)
                      return (
                        r("FBLogger")("wa_ctwa_web").warn(
                          "Draft save failed: configContext is null",
                        ),
                        { success: !1 }
                      );
                    var e = d.flowID,
                      t = d.pageID,
                      n = d.product,
                      o = r("convertWAWebSpecToLWIVariables")(a, e, t, n),
                      i = o.input.creation_spec,
                      l = s.draftID;
                    if (l != null) {
                      var u = yield f({ draft_id: l, flow_id: e, spec: i });
                      return u.success
                        ? { success: !0, draftID: l }
                        : (r("FBLogger")("wa_ctwa_web").warn(
                            "Draft edit mutation failed",
                          ),
                          { success: !1 });
                    }
                    var c = yield p({
                      flow_id: e,
                      page_id: t,
                      product: n,
                      spec: i,
                      use_case: "WA_WEB",
                    });
                    return c.success
                      ? (s.setDraftID(c.draftID),
                        { success: !0, draftID: c.draftID })
                      : (r("FBLogger")("wa_ctwa_web").warn(
                          "Draft create mutation failed",
                        ),
                        { success: !1 });
                  },
                )),
                function () {
                  l.current = null;
                }
              );
            }),
            (h = [l, s, d, a, p, f]),
            (t[0] = d),
            (t[1] = p),
            (t[2] = s),
            (t[3] = f),
            (t[4] = l),
            (t[5] = a),
            (t[6] = g),
            (t[7] = h))
          : ((g = t[6]), (h = t[7])),
        c(g, h),
        null
      );
    }
    l.default = d;
  },
  98,
);
