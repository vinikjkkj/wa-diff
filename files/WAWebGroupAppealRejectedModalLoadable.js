__d(
  "WAWebGroupAppealRejectedModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupAppealRejectedModal.react",
          )
            .__setRef("WAWebGroupAppealRejectedModalLoadable")
            .load();
          return e;
        }),
        "GroupAppealRejectedModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.GroupAppealRejectedModalLoadable = c;
  },
  98,
);
