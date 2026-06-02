__d(
  "WAWebScheduleTimePickerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebScheduleTimePicker.react",
        )
          .__setRef("WAWebScheduleTimePickerLoadable")
          .load();
        return e;
      }, "WAWebScheduleTimePickerLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {});
        },
      });
    l.WAWebScheduleTimePickerLoadable = c;
  },
  98,
);
