__d(
  "WAWebNotificationsOptInModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebNotificationsOptInModal.react",
          )
            .__setRef("WAWebNotificationsOptInModalLoadable")
            .load();
          return e;
        }),
        "NotificationsOptInModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), { error: !0 })
            : s.jsx(s.Fragment, {});
        },
      });
    l.NotificationsOptInModalLoadable = c;
  },
  98,
);
