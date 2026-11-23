__d(
  "AdsMessengerVideoCreationPerfScenariosLoggerPlugins",
  ["AdsPerfInteractionsController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      log: function (t) {
        r("AdsPerfInteractionsController").startInteraction(
          "am.edit_ads.upload_messenger_video",
          i.id,
          { isVeryLongInteraction: !0 },
        );
      },
    };
    l.AdsMessengerVideoCreationStartLoggerPlugin = e;
  },
  98,
);
