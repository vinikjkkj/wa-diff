__d(
  "WAWebHatchPairingUnavailableDialogLoadable",
  [
    "JSResourceForInteraction",
    "WAWebFbtCommon",
    "WAWebHatchPairingUnavailableDialogStrings",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WDSDialogBridge",
    "WDSTextLayout.react",
    "nullthrows",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        return r("nullthrows")(
          await r("JSResourceForInteraction")(
            "WAWebHatchPairingUnavailableDialog.react",
          )
            .__setRef("WAWebHatchPairingUnavailableDialogLoadable")
            .load(),
        );
      }, "HatchPairingUnavailableDialog"),
      c = r("react-loadable")({ loader: u, delay: 0, loading: m }),
      d = c;
    function m(e) {
      var t = e.error,
        n = e.retry,
        a = o(
          "WAWebHatchPairingUnavailableDialogStrings",
        ).getHatchPairingUnavailableTitle();
      return s.jsx("div", {
        "aria-label": a,
        "aria-modal": !0,
        "data-testid": "hatch-pairing-unavailable-loading",
        role: "dialog",
        className:
          "x16w0wmm x9f619 x1rpy74y x16xn7b0 x1odjw0f x1p57kb1 xvtqlqk xvpt6g3 xdx6fka xdzyupr",
        children: s.jsx(r("WDSTextLayout.react"), {
          headline: a,
          body: o(
            "WAWebHatchPairingUnavailableDialogStrings",
          ).getHatchPairingUnavailableDescription(),
          illustration:
            t == null
              ? s.jsx("div", {
                  "data-testid": "hatch-pairing-unavailable-spinner",
                  className: "x1k4vi1 x1n2onr6 xh8yej3",
                  children: s.jsx(r("WAWebLazyLoadLoading.react"), {
                    error: !1,
                  }),
                })
              : void 0,
          primaryAction:
            t != null
              ? {
                  label: p("Try again"),
                  onPress: n,
                  testid: "hatch-pairing-unavailable-retry",
                }
              : void 0,
          secondaryAction:
            t != null
              ? {
                  label: p("OK"),
                  onPress: o("WDSDialogBridge").closeWDSDialog,
                  testid: "hatch-pairing-unavailable-dismiss",
                }
              : void 0,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return r("WAWebFbtCommon")(e);
    }
    l.default = d;
  },
  98,
);
