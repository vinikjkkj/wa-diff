__d(
  "WAWebGroupCallPickerJourney",
  [
    "WAWebCallUserJourneyGating",
    "WAWebGroupCallPickerSubSurface",
    "WAWebWamEnumSubSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
        n
          ? e.clickVideoCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER,
              r,
            )
          : e.clickAudioCall(
              o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER,
              r,
            );
        return;
      }
      e: {
        if (t === "chat") {
          e.clickCallConfirmButton(
            o("WAWebWamEnumSubSurface").SUB_SURFACE
              .CALL_CONFIRMATION_SELECTION_SHEET,
            n,
            r,
          );
          break e;
        }
        if (t === "calls_tab") {
          n
            ? e.clickVideoCallFromCallsTab(
                o("WAWebWamEnumSubSurface").SUB_SURFACE
                  .CALL_CONFIRMATION_SELECTION_SHEET,
              )
            : e.clickAudioCallFromCallsTab(
                o("WAWebWamEnumSubSurface").SUB_SURFACE
                  .CALL_CONFIRMATION_SELECTION_SHEET,
              );
          break e;
        }
        if (t === "call_info") break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function s(e, t, n) {
      (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        t !== "chat") ||
        (n
          ? e.selectParticipant(
              o(
                "WAWebGroupCallPickerSubSurface",
              ).getGroupCallPickerSubSurface(),
            )
          : e.deselectParticipant(
              o(
                "WAWebGroupCallPickerSubSurface",
              ).getGroupCallPickerSubSurface(),
            ));
    }
    function u(e, t) {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
        e.dismissChatThread(
          o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER,
        );
        return;
      }
      e: {
        if (t === "chat") {
          e.dismissChatThread(
            o("WAWebWamEnumSubSurface").SUB_SURFACE
              .CALL_CONFIRMATION_SELECTION_SHEET,
          );
          break e;
        }
        if (t === "calls_tab") {
          e.dismiss(
            o("WAWebWamEnumSubSurface").SUB_SURFACE
              .CALL_CONFIRMATION_SELECTION_SHEET,
          );
          break e;
        }
        if (t === "call_info") break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    ((l.logGroupCallPickerConfirm = e),
      (l.logGroupCallPickerSelection = s),
      (l.logGroupCallPickerDismiss = u));
  },
  98,
);
