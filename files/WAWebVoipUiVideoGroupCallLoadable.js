__d(
  "WAWebVoipUiVideoGroupCallLoadable",
  [
    "JSResourceForInteraction",
    "WAWebFlex.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebSpinner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        loading: {
          backgroundColor: "x1e6sl3u",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
      },
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebVoipUiVideoGroupCall.react",
        )
          .__setRef("WAWebVoipUiVideoGroupCallLoadable")
          .load();
        return e;
      }, "WAWebVoipUiVideoGroupCallLoadable"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return s.jsx(o("WAWebFlex.react").FlexRow, {
            testid: "voip_group_call_ui_loading",
            align: "center",
            justify: "center",
            xstyle: u.loading,
            children: s.jsx(o("WAWebSpinner.react").Spinner, {
              color: "accent",
              size: 40,
              stroke: 3,
            }),
          });
        },
      });
    ((l.requireBundle = c), (l.WAWebVoipUiVideoGroupCallLoadable = d));
  },
  98,
);
