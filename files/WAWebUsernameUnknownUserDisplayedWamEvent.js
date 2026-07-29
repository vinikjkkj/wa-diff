__d(
  "WAWebUsernameUnknownUserDisplayedWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UsernameUnknownUserDisplayed: [
            8524,
            {
              clientTsMs: [2, e.TYPES.INTEGER],
              durationInSecs: [3, e.TYPES.INTEGER],
              hasPn: [4, e.TYPES.BOOLEAN],
              hasPush: [5, e.TYPES.BOOLEAN],
              hasUn: [6, e.TYPES.BOOLEAN],
              isFirstDisplay: [7, e.TYPES.BOOLEAN],
              jidType: [8, e.TYPES.STRING],
              unknownUserDisplayContext: [1, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UsernameUnknownUserDisplayed: [] },
      );
    l.UsernameUnknownUserDisplayedWamEvent = s;
  },
  98,
);
