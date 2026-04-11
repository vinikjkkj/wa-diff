__d(
  "WAWebWebcResourceLoadWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcResourceLoad: [
            688,
            {
              webcResourceCached: [3, e.TYPES.BOOLEAN],
              webcResourceDuration: [2, e.TYPES.TIMER],
              webcResourceName: [1, e.TYPES.STRING],
            },
            [1, 1e3, 2e3],
            "regular",
          ],
        },
        { WebcResourceLoad: [] },
      );
    l.WebcResourceLoadWamEvent = s;
  },
  98,
);
