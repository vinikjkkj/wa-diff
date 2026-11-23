__d(
  "MAIBAIndiaFinServLaunchpadModalEntryPoint.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBAIndiaFinServLaunchpadModalQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              queryRef: {
                parameters: r(
                  "MAIBAIndiaFinServLaunchpadModalQuery$Parameters",
                ),
                variables: t,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "MAIBAIndiaFinServLaunchpadModal.react",
        ).__setRef("MAIBAIndiaFinServLaunchpadModalEntryPoint.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
