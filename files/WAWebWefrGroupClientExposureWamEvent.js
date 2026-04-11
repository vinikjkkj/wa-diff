__d(
  "WAWebWefrGroupClientExposureWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WefrGroupClientExposure: [
            6640,
            {
              exposureKey: [1, e.TYPES.STRING],
              groupJid: [2, e.TYPES.STRING],
              sentWithDaily: [3, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "realtime",
          ],
        },
        { WefrGroupClientExposure: [] },
      );
    l.WefrGroupClientExposureWamEvent = s;
  },
  98,
);
