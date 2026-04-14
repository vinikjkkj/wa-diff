__d(
  "WAWebVoipScreenShareBanner.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebVoipStackInterface",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcStopScreenShare.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        bannerContainer: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xat24cr",
          alignSelf: "xkh2ocl",
          $$css: !0,
        },
        titleText: {
          fontWeight: "xk50ysn",
          fontSize: "x1jchvi3",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
        stopButton: { columnGap: "x1s70e7g", $$css: !0 },
      };
    function m() {
      var e = c(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.stopScreenShare());
        }),
        [],
      );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        padding: 12,
        xstyle: [
          d.bannerContainer,
          o("WDSColorStyles.stylex").WDSBackgroundColorStyles
            .surfaceElevatedEmphasized,
        ],
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: d.titleText,
            children: s._(/*BTDS*/ "You're sharing your tab"),
          }),
          u.jsx(r("WDSButton.react"), {
            type: "destructive",
            variant: "filled",
            onPress: function () {
              e();
            },
            Icon: r("WDSIconIcStopScreenShare.react"),
            size: "small",
            xstyle: d.stopButton,
            label: s._(/*BTDS*/ "Stop sharing"),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
