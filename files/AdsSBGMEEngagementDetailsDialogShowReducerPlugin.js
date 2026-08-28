__d(
  "AdsSBGMEEngagementDetailsDialogShowReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set("sbgMEEngagementDetailsDialogState", {
            conversationId: n.conversationId,
            dialogShown: !0,
            displayMode: n.displayMode,
            entryPoint: n.entryPoint,
            experimentData: n.experimentData,
            leadSource: n.leadSource,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
