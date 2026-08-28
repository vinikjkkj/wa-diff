__d(
  "MAIBAL4AccountSwitcherModal.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBAL4AccountSwitcherModalLWIQuery$Parameters",
    "MAIBAL4AccountSwitcherModalQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return t.isFBAdCenter
          ? {
              extraProps: { isFBAdCenter: !0 },
              queries: {
                lwiQueryRef: {
                  parameters: r(
                    "MAIBAL4AccountSwitcherModalLWIQuery$Parameters",
                  ),
                  variables: { startTime: t.startTime },
                },
              },
            }
          : {
              extraProps: { isFBAdCenter: !1 },
              queries: {
                viewerQueryRef: {
                  parameters: r("MAIBAL4AccountSwitcherModalQuery$Parameters"),
                  variables: { startTime: t.startTime },
                },
              },
            };
      },
      root: r("JSResourceForInteraction")(
        "MAIBAL4AccountSwitcherModal.react",
      ).__setRef("MAIBAL4AccountSwitcherModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
