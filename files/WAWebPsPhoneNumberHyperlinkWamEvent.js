__d(
  "WAWebPsPhoneNumberHyperlinkWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPhoneNumHyperlinkActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsPhoneNumberHyperlink: [
            3266,
            {
              isPhoneNumHyperlinkOwner: [1, e.TYPES.BOOLEAN],
              phoneNumHyperlinkAction: [
                2,
                o("WAWebWamEnumPhoneNumHyperlinkActionType")
                  .PHONE_NUM_HYPERLINK_ACTION_TYPE,
              ],
              phoneNumberStatusOnWa: [3, e.TYPES.BOOLEAN],
              sequenceNumber: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PsPhoneNumberHyperlink: [] },
      );
    l.PsPhoneNumberHyperlinkWamEvent = s;
  },
  98,
);
