__d(
  "WAWebHatchWorkspaceMediaTabLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchWorkspaceMediaTab.react",
          )
            .__setRef("WAWebHatchWorkspaceMediaTabLoadable")
            .load();
          return e;
        }),
        "WAWebHatchWorkspaceMediaTab",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {
            "data-testid": "hatch_workspace_media_tab_loading",
            className: "x78zum5 xl56j7k x1sk1jro x1ci70gm",
            children: s.jsx(r("WDSSpinner.react"), { size: 24 }),
          });
        },
      });
    l.WAWebHatchWorkspaceMediaTabLoadable = c;
  },
  98,
);
