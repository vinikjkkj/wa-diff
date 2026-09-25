__d(
  "WAWebGroupCallPickerSubSurface",
  ["WAWebCallUserJourneyGating", "WAWebWamEnumSubSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        ? o("WAWebWamEnumSubSurface").SUB_SURFACE
            .CALL_CONFIRMATION_SELECTION_SHEET
        : o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER;
    }
    l.getGroupCallPickerSubSurface = e;
  },
  98,
);
