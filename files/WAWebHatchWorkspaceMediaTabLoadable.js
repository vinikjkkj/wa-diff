__d(
  "WAWebHatchWorkspaceMediaTabLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchWorkspaceMediaTab.react",
        )
          .__setRef("WAWebHatchWorkspaceMediaTabLoadable")
          .load();
        return e;
      }, "WAWebHatchWorkspaceMediaTab"),
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
