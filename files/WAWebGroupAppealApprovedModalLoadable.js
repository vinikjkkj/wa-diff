__d(
  "WAWebGroupAppealApprovedModalLoadable",
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
            "WAWebGroupAppealApprovedModal.react",
          )
            .__setRef("WAWebGroupAppealApprovedModalLoadable")
            .load();
          return e;
        }),
        "GroupAppealApprovedModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.GroupAppealApprovedModalLoadable = c;
  },
  98,
);
