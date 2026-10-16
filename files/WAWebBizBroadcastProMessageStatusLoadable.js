__d(
  "WAWebBizBroadcastProMessageStatusLoadable",
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
          return r("JSResourceForInteraction")(
            "WAWebBizBroadcastProMessageStatus.react",
          )
            .__setRef("WAWebBizBroadcastProMessageStatusLoadable")
            .load();
        }),
        "BizBroadcastProMessageStatus",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebBizBroadcastProMessageStatusLoadable = c;
  },
  98,
);
