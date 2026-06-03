__d(
  "WAWebNewsletterTabFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebNewsletterTabFlow.react",
          )
            .__setRef("WAWebNewsletterTabFlowLoadable")
            .load();
          return e.NewsletterTabFlow;
        }),
        "NewsletterTabFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            description: "NewsletterTabFlowLoadable",
            cancellable: !1,
          });
        },
      });
    l.NewsletterTabFlowLoadable = c;
  },
  98,
);
