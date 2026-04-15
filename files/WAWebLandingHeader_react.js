__d(
  "WAWebLandingHeader.react",
  [
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebNativeAppDownloadButton.react",
    "WAWebUISpacing",
    "WAWebWaLogoIcon.react",
    "WAWebWaWordmarkIcon.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        brandColor: { color: "x1knego9", $$css: !0 },
        headerIcon: { marginTop: "x1rdy4ex", $$css: !0 },
        headerText: { marginInlineStart: "xe9ewy2", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 0,
            xstyle: [o("WAWebUISpacing").uiPadding.end6, u.headerIcon],
            children: s.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
              height: 30,
              iconXstyle: u.brandColor,
            }),
          })),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: u.headerText,
            children: s.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
              height: 20,
              iconXstyle: u.brandColor,
            }),
          })),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [r, a, n],
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function d(e) {
      var t = e.showAppDownloadButton,
        n = e.surface;
      if (r("WAWebEnvironment").isWindows)
        return s.jsx("div", { className: "landing-header" });
      switch (n) {
        case "link-device-screen":
          return s.jsx(c, {
            children: s.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 0,
              children:
                t &&
                s.jsx(r("WAWebNativeAppDownloadButton.react"), {
                  sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                    .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_DOWNLOAD_BUTTON,
                }),
            }),
          });
        case "lock-screen":
          return s.jsx(c, {});
        case "default":
        default:
          return s.jsxs("div", {
            className: "landing-header",
            children: [
              s.jsx(m, {}),
              s.jsx("div", {
                className: "landing-headerTitle",
                children: r("WAWebFbtCommon")("WhatsApp Web"),
              }),
            ],
          });
      }
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      var e = o("react-compiler-runtime").c(2);
      r("vulture")("4unUArpa9LS3oEUPfJKGi3m6dLE=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "x1rg5ohu x16dsc37" }), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(
              "span",
              babelHelpers.extends({}, t, {
                children: s.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "39",
                  height: "39",
                  viewBox: "0 0 39 39",
                  children: [
                    s.jsx("path", {
                      fill: "#00E676",
                      d: "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z",
                    }),
                    s.jsx("path", {
                      fill: "#FFF",
                      d: "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z",
                    }),
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = d;
  },
  98,
);
