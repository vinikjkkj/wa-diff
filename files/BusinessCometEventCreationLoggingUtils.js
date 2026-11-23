__d(
  "BusinessCometEventCreationLoggingUtils",
  [
    "BusinessComposerEventCreationClickFalcoEvent",
    "BusinessComposerEventCreationExitFlowFalcoEvent",
    "BusinessComposerEventCreationImpressionFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("BusinessComposerEventCreationImpressionFalcoEvent").log(function () {
        return {
          event_data: { entry_point: e },
          event_location: "bizweb_composer",
        };
      });
    }
    function s(e) {
      r("BusinessComposerEventCreationClickFalcoEvent").log(function () {
        return {
          event_data: { entry_point: e },
          event_location: "bizweb_composer",
        };
      });
    }
    function u(e) {
      r("BusinessComposerEventCreationExitFlowFalcoEvent").log(function () {
        return {
          event_data: { entry_point: e },
          event_location: "bizweb_composer",
        };
      });
    }
    ((l.logEventCreationButtonImpression = e),
      (l.logEventCreationButtonClick = s),
      (l.logEventCreationSuccess = u));
  },
  98,
);
