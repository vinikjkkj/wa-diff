__d(
  "WAWebContactUsSessionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumContactUsExitState"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ContactUsSession: [
            470,
            {
              contactUsAutomaticEmail: [3, e.TYPES.BOOLEAN],
              contactUsExitState: [
                1,
                o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE,
              ],
              contactUsFaq: [2, e.TYPES.BOOLEAN],
              contactUsLogs: [4, e.TYPES.BOOLEAN],
              contactUsMenuFaqT: [12, e.TYPES.TIMER],
              contactUsOutage: [5, e.TYPES.BOOLEAN],
              contactUsOutageEmail: [6, e.TYPES.BOOLEAN],
              contactUsScreenshotC: [19, e.TYPES.NUMBER],
              contactUsT: [11, e.TYPES.TIMER],
              languageCode: [21, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ContactUsSession: [] },
      );
    l.ContactUsSessionWamEvent = s;
  },
  98,
);
