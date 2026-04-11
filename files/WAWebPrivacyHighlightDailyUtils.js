__d(
  "WAWebPrivacyHighlightDailyUtils",
  [
    "WAWebDailyAggregatedStats",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(t, n) {
      var r = o(
          "WAWebDailyAggregatedStatsCollection",
        ).DailyAggregatedStatsCollection.gaddForToday(),
        a = Date.now();
      if (!(a - r.prinaLastEvent < e)) {
        if (
          ((r.prinaLastEvent = a),
          t ===
            o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
              .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT)
        ) {
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.goldenBoxContactNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.goldenBoxContactDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.goldenBoxContactDialogSelectCount++;
              break;
          }
          return;
        }
        if (
          t ===
          o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP
        ) {
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.goldenBoxGroupNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.goldenBoxGroupDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.goldenBoxGroupDialogSelectCount++;
              break;
          }
          return;
        }
        if (
          t ===
          o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP
        ) {
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.infoScreenGroupNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.infoScreenGroupDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.infoScreenGroupDialogSelectCount++;
              break;
          }
          return;
        }
        if (
          t ===
          o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST
        ) {
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.chatsListNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.chatsListDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.chatsListDialogSelectCount++;
              break;
          }
          return;
        }
        if (
          t ===
          o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST
        ) {
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.statusListNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.statusListDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.statusListDialogSelectCount++;
              break;
          }
          return;
        }
        if (
          t ===
          o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLING_SCREEN_AUDIO
        )
          switch (n) {
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR:
              r.callingScreenAudioNarrativeAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_APPEAR:
              r.callingScreenAudioDialogAppearCount++;
              break;
            case o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .DIALOG_SELECT:
              r.callingScreenAudioDialogSelectCount++;
              break;
          }
      }
    }
    l.incrementPrinaDailyCount = s;
  },
  98,
);
