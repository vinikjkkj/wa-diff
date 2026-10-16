__d(
  "WAWebBizBroadcastProContextCardIllustrationLoadable",
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
              "WAWebWdsIllClipMessagesIcon.react",
            )
              .__setRef("WAWebBizBroadcastProContextCardIllustrationLoadable")
              .load(),
            t = e.WdsIllClipMessagesIcon;
          return t;
        }),
        "WAWebWdsIllClipMessagesIcon",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
