__d(
  "WAWebMusicJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMusicAction",
    "WAWebWamEnumMusicCategory",
    "WAWebWamEnumMusicProduct",
    "WAWebWamEnumMusicPromoBannerSwipeDirection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MusicJourney: [
            6102,
            {
              cid: [9, e.TYPES.STRING],
              dedupKey: [13, e.TYPES.INTEGER],
              maxMusicIndexViewed: [7, e.TYPES.INTEGER],
              musicAction: [1, o("WAWebWamEnumMusicAction").MUSIC_ACTION],
              musicCategory: [2, o("WAWebWamEnumMusicCategory").MUSIC_CATEGORY],
              musicIndex: [3, e.TYPES.INTEGER],
              musicProduct: [10, o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT],
              musicPromoBannerSwipeDirection: [
                11,
                o("WAWebWamEnumMusicPromoBannerSwipeDirection")
                  .MUSIC_PROMO_BANNER_SWIPE_DIRECTION,
              ],
              musicSegmentEdited: [4, e.TYPES.BOOLEAN],
              musicSessionId: [5, e.TYPES.INTEGER],
              musicStatusPostingSessionId: [8, e.TYPES.INTEGER],
              selectedDurationSeconds: [12, e.TYPES.INTEGER],
              sequenceNum: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MusicJourney: [] },
      );
    l.MusicJourneyWamEvent = s;
  },
  98,
);
