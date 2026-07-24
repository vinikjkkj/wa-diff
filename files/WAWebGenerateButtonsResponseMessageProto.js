__d(
  "WAWebGenerateButtonsResponseMessageProto",
  ["WAWebHsmGatingUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = o("WAWebHsmGatingUtils").shouldUseLegacyButtonsResponse()
          ? n.buttonsResponse
          : {
              selectedButtonId: n.selectedButtonId,
              selectedDisplayText: n.body,
              type: o("WAWebProtobufsE2E.pb")
                .Message$ButtonsResponseMessage$Type.DISPLAY_TEXT,
            };
      return {
        buttonsResponseMessage: babelHelpers.extends({}, r, { contextInfo: t }),
      };
    }
    l.default = e;
  },
  98,
);
