__d(
  "waWebBizAdCreationDurationReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "duration_reducer.update_duration":
            e.durationData.durationInDays = t.durationData.durationInDays;
            break;
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
