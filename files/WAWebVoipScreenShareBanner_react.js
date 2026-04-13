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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(4),
        t = p,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            d.bannerContainer,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .surfaceElevatedEmphasized,
          ]),
          (e[0] = n))
        : (n = e[0]);
      var a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: d.titleText,
            children: s._(/*BTDS*/ "You're sharing your tab"),
          })),
          (e[1] = a))
        : (a = e[1]);
      var i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            t();
          }),
          (e[2] = i))
        : (i = e[2]);
      var l;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              padding: 12,
              xstyle: n,
              children: [
                a,
                u.jsx(r("WDSButton.react"), {
                  type: "destructive",
                  variant: "filled",
                  onPress: i,
                  Icon: r("WDSIconIcStopScreenShare.react"),
                  size: "small",
                  xstyle: d.stopButton,
                  label: s._(/*BTDS*/ "Stop sharing"),
                }),
              ],
            })),
            (e[3] = l))
          : (l = e[3]),
        l
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.stopScreenShare());
        })),
        _.apply(this, arguments)
      );
    }
    l.default = m;
  },
  226,
);
