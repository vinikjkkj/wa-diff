__d(
  "useWAWebBizBroadcastExitConfirmation",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebConfirmPopup.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef;
    function m() {
      var e = d(!1),
        t = c(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (e.current) return !1;
            e.current = !0;
            try {
              return yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                children: s.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getExitConfirmationBody(),
                }),
                okText: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getExitConfirmationContinueButton(),
                title: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getExitConfirmationTitle(),
              });
            } finally {
              e.current = !1;
            }
          }),
          [],
        );
      return { showExitConfirmation: t };
    }
    l.default = m;
  },
  98,
);
