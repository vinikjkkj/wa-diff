__d(
  "WAWebBizEnterFlowClickLogger",
  ["FBLogger", "WAWebBizAdLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.entryPoint,
        n = e.flowID,
        o = e.pageID,
        a = e.recreateBoostId;
      if (o == null) {
        r("FBLogger")("wa_ctwa_web").mustfix(
          "logEnterFlowClick: pageID is null, ENTER_FLOW_CLICK not logged",
        );
        return;
      }
      r("WAWebBizAdLogger").logCritical(
        babelHelpers.extends(
          {
            event: "enter_flow_click",
            loggerContext: {
              codebase: "whatsapp_smb",
              entryPoint: t,
              flow: "create",
              flowID: n,
              pageID: o,
              platform: "whatsapp_smb_web",
              product: "boosted_message",
            },
          },
          a != null ? { extra: { recreate_ad_boost_id: a } } : {},
        ),
      );
    }
    l.logEnterFlowClick = e;
  },
  98,
);
