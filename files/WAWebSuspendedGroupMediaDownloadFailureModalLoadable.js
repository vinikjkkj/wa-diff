__d(
  "WAWebSuspendedGroupMediaDownloadFailureModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebFbtCommon",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WDSButton.react",
    "WDSFlex.stylex",
    "nullthrows",
    "react",
    "react-loadable",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        loading: {
          height: "x1vd4hg5",
          maxWidth: "x16xn7b0",
          position: "x1n2onr6",
          width: "xdzyupr",
          $$css: !0,
        },
      },
      d = r("WAWebLazyLoadedRetriable")(async function () {
        return r("nullthrows")(
          await r("JSResourceForInteraction")(
            "WAWebSuspendedGroupMediaDownloadFailureModal.react",
          )
            .__setRef("WAWebSuspendedGroupMediaDownloadFailureModalLoadable")
            .load(),
        );
      }, "SuspendedGroupMediaDownloadFailureModal"),
      m = r("react-loadable")({
        loader: d,
        delay: 0,
        loading: function (n) {
          var t = n.error,
            a = n.retry;
          return u.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": "suspended-group-download-alert-loading" },
              (e || (e = r("stylex"))).props(
                c.loading,
                t != null && o("WDSFlex.stylex").wdsFlex.flexCenter,
              ),
              {
                children:
                  t != null
                    ? u.jsx(r("WDSButton.react"), {
                        label: r("WAWebFbtCommon")("Try again"),
                        onPress: a,
                        testid: "suspended-group-download-alert-retry",
                      })
                    : u.jsx(r("WAWebLazyLoadLoading.react"), { error: !1 }),
              },
            ),
          );
        },
      });
    l.SuspendedGroupMediaDownloadFailureModalLoadable = m;
  },
  98,
);
