__d(
  "WAWebAboutCreationDailyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAboutEntrypointType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AboutCreationDaily: [
            6820,
            {
              aboutCreationStarted: [1, e.TYPES.INTEGER],
              aboutCreationVisit: [2, e.TYPES.INTEGER],
              aboutEntrypoint: [
                3,
                o("WAWebWamEnumAboutEntrypointType").ABOUT_ENTRYPOINT_TYPE,
              ],
              aboutFailureCount: [4, e.TYPES.INTEGER],
              aboutLocale: [5, e.TYPES.STRING],
              aboutSuccessCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        {
          AboutCreationDaily: [
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutCreationStarted") >= 0;
                  },
                  "about_creation_started >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutCreationVisit") >= 0;
                  },
                  "about_creation_visit >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutFailureCount") >= 0;
                  },
                  "about_failure_count >= 0",
                ],
              ],
            ],
            [
              [],
              [],
              [
                [
                  function (e) {
                    return e.getValue("aboutSuccessCount") >= 0;
                  },
                  "about_success_count >= 0",
                ],
              ],
            ],
          ],
        },
      );
    l.AboutCreationDailyWamEvent = s;
  },
  98,
);
