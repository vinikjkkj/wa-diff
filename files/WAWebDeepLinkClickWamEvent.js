__d(
  "WAWebDeepLinkClickWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DeepLinkClick: [
            1156,
            {
              deepLinkHasPhoneNumber: [2, e.TYPES.BOOLEAN],
              deepLinkHasText: [1, e.TYPES.BOOLEAN],
              deepLinkHasUsername: [4, e.TYPES.BOOLEAN],
              deepLinkHasUsernamePin: [5, e.TYPES.BOOLEAN],
              deepLinkRequirePinEntry: [6, e.TYPES.BOOLEAN],
              deepLinkSessionId: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DeepLinkClick: [] },
      );
    l.DeepLinkClickWamEvent = s;
  },
  98,
);
