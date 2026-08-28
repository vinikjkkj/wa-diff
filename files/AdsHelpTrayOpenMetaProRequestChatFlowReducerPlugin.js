__d(
  "AdsHelpTrayOpenMetaProRequestChatFlowReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t),
            a = r.contentType !== "META_PRO_REQUEST_CHAT";
          return (
            a &&
              (e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
                t.navigationStack,
                {
                  contentType: "META_PRO_REQUEST_CHAT",
                  osmipExtraData: {
                    program: n.data.program,
                    sbgProgramName: n.data.sbgProgramName,
                    whatsappConsentData: n.data.whatsappConsentData,
                    surface: n.data.sourceTracking.surface,
                    entryPoint: n.data.sourceTracking.entryPoint,
                    leadSource: n.data.sourceTracking.leadSource,
                    subLeadSource: n.data.subLeadSource,
                  },
                },
              )),
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, t, { isTrayOpen: !0, navigationStack: e })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
