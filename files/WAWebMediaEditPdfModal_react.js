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
      var t = o("WAWebTPPdfViewerGatingUtils").getWebTPBrowserCompatibility(),
        n = c(null),
        a = e.mediaData,
        i = e.msg,
        l = o("WAWebTPSharerPreference").getSharerSkipPreference(),
        d = r("useWAWebPdfSharerConnection")(i, a, n, {
          appConfigOverrides: {
            showSavePreferenceCheckbox: o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPSharerSavePreferenceEnabled(),
            savedPreference: l,
          },
          onShareSuccess: function (n) {
            (n.savePreference != null &&
              (o("WAWebTPSharerPreference").setSharerSkipPreference(
                n.savePreference,
              ),
              e.onPreferenceSaved == null || e.onPreferenceSaved()),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          },
          onCancel: function () {
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
          },
        }),
        m = d.hasError,
        _ = d.loading,
        f = function () {
          o("WAWebModalManager").ModalManager.closeSupportOrModal();
        };
      return t === "upgrade_browser"
        ? u.jsx(p, {
            title: s._(/*BTDS*/ "Update your browser"),
            description: s._(
              /*BTDS*/ "Update your browser to use this feature, or try a different one.",
            ),
          })
        : t === "unsupported"
          ? u.jsx(p, {
              title: s._(/*BTDS*/ "Browser not supported"),
              description: s._(
                /*BTDS*/ "Try a different browser to use this feature.",
              ),
            })
          : m
            ? u.jsx(p, {
                title: s._(/*BTDS*/ "Something went wrong"),
                description: s._(
                  /*BTDS*/ "Unable to connect. Please try again.",
                ),
              })
            : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: { surface: "unknown", viewName: "edit-pdf" },
                type: o("WAWebModal.react").ModalTheme.PdfEdit,
                testid: void 0,
                onOverlayClick: f,
                children: u.jsxs("div", {
                  className: "x14luw17",
                  children: [
                    _ &&
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
                      }),
                    u.jsx("div", {
                      className: {
                        0: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod",
                        1: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr",
                      }[!_ << 0],
                      children: u.jsx(r("WAWebMediaPdfSharerIframe.react"), {
                        iframeRef: n,
                      }),
                    }),
                  ],
                }),
              });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.description,
        n = e.title;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "edit-pdf" },
        type: o("WAWebModal.react").ModalTheme.PdfEditError,
        testid: void 0,
        onOverlayClick: _,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          justify: "start",
          xstyle: d.browserCompatContainer,
          gap: 16,
          padding: 24,
          children: [
            u.jsx(r("WDSIconIcWarning.react"), { height: 24, width: 24 }),
            u.jsx("div", {
              className: "x2b8uid",
              children: u.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                children: n,
              }),
            }),
            u.jsx("div", {
              className: "x1yc453h xh8yej3",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: t,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: d.buttonContainer,
              children: u.jsx(r("WDSButtonGroup.react"), {
                orientation: "horizontal",
                width: "hug",
                primaryButtonProps: {
                  label: s._(/*BTDS*/ "Okay"),
                  variant: "filled",
                  onPress: function () {
                    return o(
                      "WAWebModalManager",
                    ).ModalManager.closeSupportOrModal();
                  },
                },
              }),
            }),
          ],
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = m;
  },
  226,
);
