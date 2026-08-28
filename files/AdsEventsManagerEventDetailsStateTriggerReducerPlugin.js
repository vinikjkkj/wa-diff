__d(
  "AdsEventsManagerEventDetailsStateTriggerReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            dataSourceId: n.params.dataSourceID,
            eventName: n.params.eventName,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
