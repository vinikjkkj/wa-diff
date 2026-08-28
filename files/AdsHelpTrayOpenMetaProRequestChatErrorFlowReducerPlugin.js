__d(
  "AdsHelpTrayOpenMetaProRequestChatErrorFlowReducerPlugin",
  ["AdsHelpTrayNavigationHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
            t.navigationStack,
            {
              contentType: "META_PRO_REQUEST_CHAT_ERROR",
              osmipExtraData: {
                isInvalidPhoneNumberError: n.data.isInvalidPhoneNumberError,
                surface: n.data.sourceTracking.surface,
                entryPoint: n.data.sourceTracking.entryPoint,
                leadSource: n.data.sourceTracking.leadSource,
              },
            },
          );
          return babelHelpers.extends({}, t, {
            isTrayOpen: !0,
            navigationStack: e,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
