__d(
  "SYDAYMTAlertsResolutionFlowReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            sydAlertsResolutionFlowState: {
              billingNotificationID: n.billingNotificationID,
              resolutionFlowType: n.resolutionFlowType,
            },
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
