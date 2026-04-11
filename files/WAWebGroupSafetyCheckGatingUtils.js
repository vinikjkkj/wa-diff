__d(
  "WAWebGroupSafetyCheckGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_group_chat_open_logging_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_part_of_gsc_experiment",
      );
    }
    ((l.groupSafetyCheckLoggingEnabled = e),
      (l.groupSafetyCheckIsPartOfExperiment = s));
  },
  98,
);
