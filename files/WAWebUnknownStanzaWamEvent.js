__d(
  "WAWebUnknownStanzaWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UnknownStanza: [
            3448,
            {
              unknownStanzaDropReason: [3, e.TYPES.INTEGER],
              unknownStanzaTag: [1, e.TYPES.STRING],
              unknownStanzaType: [2, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UnknownStanza: [] },
      );
    l.UnknownStanzaWamEvent = s;
  },
  98,
);
