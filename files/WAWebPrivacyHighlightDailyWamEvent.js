__d(
  "WAWebPrivacyHighlightDailyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPrivacyHighlightCategoryEnum",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PrivacyHighlightDaily: [
            3522,
            {
              dialogAppearCount: [1, e.TYPES.INTEGER],
              dialogSelectCount: [2, e.TYPES.INTEGER],
              narrativeAppearCount: [3, e.TYPES.INTEGER],
              privacyHighlightCategory: [
                4,
                o("WAWebWamEnumPrivacyHighlightCategoryEnum")
                  .PRIVACY_HIGHLIGHT_CATEGORY_ENUM,
              ],
              privacyHighlightSurface: [
                5,
                o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
                  .PRIVACY_HIGHLIGHT_SURFACE_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PrivacyHighlightDaily: [] },
      );
    l.PrivacyHighlightDailyWamEvent = s;
  },
  98,
);
