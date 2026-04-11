__d(
  "WAWebWefrClientExposureWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WefrClientExposure: [
            5504,
            {
              canonicalEntLastValidationTsMs: [8, e.TYPES.INTEGER],
              deviceExpId: [5, e.TYPES.STRING],
              exposureKey: [1, e.TYPES.STRING],
              fromMetaconfig: [9, e.TYPES.BOOLEAN],
              guestId: [7, e.TYPES.STRING],
              isCanonicalEntPresent: [6, e.TYPES.BOOLEAN],
              sentWithDaily: [3, e.TYPES.BOOLEAN],
              userLid: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "realtime",
          ],
        },
        { WefrClientExposure: [] },
      );
    l.WefrClientExposureWamEvent = s;
  },
  98,
);
