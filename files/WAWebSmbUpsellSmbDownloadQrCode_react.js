__d(
  "WAWebSmbUpsellSmbDownloadQrCode.react",
  [
    "WAWebFlex.react",
    "WAWebFrontendConstants",
    "WAWebQRCode.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        code: { position: "x1n2onr6", $$css: !0 },
        codeDarkMode: {
          backgroundColor: "x83z2og",
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          $$css: !0,
        },
      },
      m = "https://www.whatsapp.com/business/download",
      p = "#122e31";
    function _() {
      var t = c(o("WAWebThemeContext").ThemeContext),
        n = t.theme;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: o("WAWebUISpacing").uiMargin.vert15,
        children: u.jsx(r("WAWebQRCode.react"), {
          data: m,
          colorDark: p,
          size: o("WAWebFrontendConstants").QR_EDGE / 2,
          children: function (a) {
            return u.jsx(
              "div",
              babelHelpers.extends(
                { ref: a },
                (e || (e = r("stylex"))).props(
                  n === "dark" && d.codeDarkMode,
                  d.code,
                  o("WAWebUISpacing").uiPadding.all12,
                ),
                { children: u.jsx(f, { theme: n }) },
              ),
            );
          },
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return u.jsx("div", {
        className:
          "xs2sona x90ne7k xbudbmw x10l6tqk xwa60dl x11lhmoz x87ps6o x1691je0 xhtitgo",
        children: u.jsxs("svg", {
          width: "100%",
          viewBox: "0 0 64 64",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            u.jsx("path", {
              fill: "#FFF",
              d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z",
            }),
            u.jsx("g", {
              transform: "translate(8 6)",
              children: u.jsx("path", {
                d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                fill: "#123033",
              }),
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
