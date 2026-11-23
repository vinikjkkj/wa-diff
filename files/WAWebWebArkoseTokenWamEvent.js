__d(
  "WAWebWebArkoseTokenWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebArkoseToken: [
            7028,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              mdClientSessionId: [3, e.TYPES.STRING],
              mdSessionId: [2, e.TYPES.STRING],
              token: [1, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebArkoseToken: [] },
      );
    l.WebArkoseTokenWamEvent = s;
  },
  98,
);
