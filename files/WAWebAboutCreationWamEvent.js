__d(
  "WAWebAboutCreationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAboutEntrypointType",
    "WAWebWamEnumAboutPromptType",
    "WAWebWamEnumAboutRequestType",
    "WAWebWamEnumPresetType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AboutCreation: [
            6818,
            {
              aboutDuration: [1, e.TYPES.INTEGER],
              aboutEntrypoint: [
                2,
                o("WAWebWamEnumAboutEntrypointType").ABOUT_ENTRYPOINT_TYPE,
              ],
              aboutLength: [3, e.TYPES.INTEGER],
              aboutLocale: [4, e.TYPES.STRING],
              aboutOverallT: [5, e.TYPES.TIMER],
              aboutPresetSelected: [6, e.TYPES.BOOLEAN],
              aboutPrompt: [
                9,
                o("WAWebWamEnumAboutPromptType").ABOUT_PROMPT_TYPE,
              ],
              aboutRequestType: [
                7,
                o("WAWebWamEnumAboutRequestType").ABOUT_REQUEST_TYPE,
              ],
              preset: [8, o("WAWebWamEnumPresetType").PRESET_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        {
          AboutCreation: [
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutDuration") >= 0;
                  },
                  "about_duration >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutLength") >= 0;
                  },
                  "about_length >= 0",
                ],
              ],
            ],
            [
              [
                function (e) {
                  return (
                    e.getValue("aboutRequestType") ===
                    o("WAWebWamEnumAboutRequestType").ABOUT_REQUEST_TYPE
                      .CREATE_NEW
                  );
                },
              ],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutLength") > 0;
                  },
                  "about_length > 0",
                ],
              ],
            ],
            [
              [
                function (e) {
                  return (
                    e.getValue("aboutRequestType") ===
                    o("WAWebWamEnumAboutRequestType").ABOUT_REQUEST_TYPE
                      .CLEAR_EXISTING
                  );
                },
              ],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutLength") === 0;
                  },
                  "about_length == 0",
                ],
              ],
            ],
          ],
        },
      );
    l.AboutCreationWamEvent = s;
  },
  98,
);
