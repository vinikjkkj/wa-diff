__d(
  "WAWebMediaEditPdfModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebMediaPdfSharerIframe.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSpinner.react",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPSharerPreference",
    "WDSButtonGroup.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebPdfSharerConnection",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = {
        browserCompatContainer: { backgroundColor: "x1od0jb8", $$css: !0 },
        buttonContainer: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = o("WAWebTPPdfViewerGatingUtils").getWebTPBrowserCompatibility(),
        a = c(null),
        i = e.mediaData,
        l = e.msg,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebTPSharerPreference").getSharerSkipPreference()),
          (t[0] = d))
        : (d = t[0]);
      var m = d,
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            showSavePreferenceCheckbox: o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPSharerSavePreferenceEnabled(),
            savedPreference: m,
          }),
          (t[1] = g))
        : (g = t[1]);
      var h;
      t[2] !== e
        ? ((h = {
            appConfigOverrides: g,
            onShareSuccess: function (n) {
              (n.savePreference != null &&
                (o("WAWebTPSharerPreference").setSharerSkipPreference(
                  n.savePreference,
                ),
                e.onPreferenceSaved == null || e.onPreferenceSaved()),
                o("WAWebModalManager").ModalManager.closeSupportOrModal());
            },
            onCancel: _,
          }),
          (t[2] = e),
          (t[3] = h))
        : (h = t[3]);
      var y = r("useWAWebPdfSharerConnection")(l, i, a, h),
        C = y.hasError,
        b = y.loading,
        v = p;
      if (n === "upgrade_browser") {
        var S;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = u.jsx(f, {
                title: s._(/*BTDS*/ "Update your browser"),
                description: s._(
                  /*BTDS*/ "Update your browser to use this feature, or try a different one.",
                ),
              })),
              (t[4] = S))
            : (S = t[4]),
          S
        );
      }
      if (n === "unsupported") {
        var R;
        return (
          t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = u.jsx(f, {
                title: s._(/*BTDS*/ "Browser not supported"),
                description: s._(
                  /*BTDS*/ "Try a different browser to use this feature.",
                ),
              })),
              (t[5] = R))
            : (R = t[5]),
          R
        );
      }
      if (C) {
        var L;
        return (
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = u.jsx(f, {
                title: s._(/*BTDS*/ "Something went wrong"),
                description: s._(
                  /*BTDS*/ "Unable to connect. Please try again.",
                ),
              })),
              (t[6] = L))
            : (L = t[6]),
          L
        );
      }
      var E;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { surface: "unknown", viewName: "edit-pdf" }), (t[7] = E))
        : (E = t[7]);
      var k;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = "x14luw17"), (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== b
        ? ((I =
            b &&
            u.jsx("div", {
              className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
              children: u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4",
                children: u.jsx(o("WAWebSpinner.react").Spinner, {
                  stroke: 6,
                  size: 40,
                }),
              }),
            })),
          (t[9] = b),
          (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== b
        ? ((T = {
            0: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod",
            1: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr",
          }[!b << 0]),
          (t[11] = b),
          (t[12] = T))
        : (T = t[12]);
      var D;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(r("WAWebMediaPdfSharerIframe.react"), { iframeRef: a })),
          (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] !== T
        ? ((x = u.jsx("div", { className: T, children: D })),
          (t[14] = T),
          (t[15] = x))
        : (x = t[15]);
      var $;
      return (
        t[16] !== I || t[17] !== x
          ? (($ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: E,
              type: o("WAWebModal.react").ModalTheme.PdfEdit,
              testid: void 0,
              onOverlayClick: v,
              children: u.jsxs("div", { className: k, children: [I, x] }),
            })),
            (t[16] = I),
            (t[17] = x),
            (t[18] = $))
          : ($ = t[18]),
        $
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    function _() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.description,
        a = e.title,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "edit-pdf" }), (t[0] = i))
        : (i = t[0]);
      var l, c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSIconIcWarning.react"), { height: 24, width: 24 })),
          (c = "x2b8uid"),
          (t[1] = l),
          (t[2] = c))
        : ((l = t[1]), (c = t[2]));
      var m;
      t[3] !== a
        ? ((m = u.jsx("div", {
            className: c,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: a,
            }),
          })),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = "x1yc453h xh8yej3"), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== n
        ? ((_ = u.jsx("div", {
            className: p,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: n,
            }),
          })),
          (t[6] = n),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            xstyle: d.buttonContainer,
            children: u.jsx(r("WDSButtonGroup.react"), {
              orientation: "horizontal",
              width: "hug",
              primaryButtonProps: {
                label: s._(/*BTDS*/ "Okay"),
                variant: "filled",
                onPress: g,
              },
            }),
          })),
          (t[8] = f))
        : (f = t[8]);
      var y;
      return (
        t[9] !== m || t[10] !== _
          ? ((y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: i,
              type: o("WAWebModal.react").ModalTheme.PdfEditError,
              testid: void 0,
              onOverlayClick: h,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "start",
                xstyle: d.browserCompatContainer,
                gap: 16,
                padding: 24,
                children: [l, m, _, f],
              }),
            })),
            (t[9] = m),
            (t[10] = _),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    function g() {
      return o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    function h() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = m;
  },
  226,
);
