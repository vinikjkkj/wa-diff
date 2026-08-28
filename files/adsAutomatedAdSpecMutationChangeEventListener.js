__d(
  "adsAutomatedAdSpecMutationChangeEventListener",
  ["AdsALChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = {
        executedEventsCount: 0,
        listener: o("AdsALChannel").AdsALChannel.addListener(
          "al_ad_object_spec_change_event",
          function () {
            e.executedEventsCount += 1;
          },
        ),
      };
      return function () {
        return (
          o("AdsALChannel").AdsALChannel.removeListener(
            "al_ad_object_spec_change_event",
            e.listener,
          ),
          e.executedEventsCount
        );
      };
    }
    l.startCapturingChangeEvents = e;
  },
  98,
);
