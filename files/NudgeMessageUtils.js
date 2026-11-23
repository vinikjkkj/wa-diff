__d(
  "NudgeMessageUtils",
  [
    "AdsUEditorMessagingDestinationUtils",
    "BmxItxNudgeWelcomeMessageEditFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      o("AdsUEditorMessagingDestinationUtils").destinationIncludesMessenger(
        e,
      ) &&
        r("BmxItxNudgeWelcomeMessageEditFalcoEvent").log(function () {
          return {
            event_location: "ads_manager",
            page_id: t,
            event_data: {
              event: "save",
              extra_data: JSON.stringify({
                purpose: "new and existing template analysis",
                is_edit_template: String(n),
              }),
            },
          };
        });
    }
    l.logSavingEventForNudge = e;
  },
  98,
);
