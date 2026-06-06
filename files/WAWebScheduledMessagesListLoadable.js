__d(
  "WAWebScheduledMessagesListLoadable",
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
          "WAWebScheduledMessagesList.react",
        )
          .__setRef("WAWebScheduledMessagesListLoadable")
          .load();
        return e;
      }, "WAWebScheduledMessagesListLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebScheduledMessagesListLoadable = c;
  },
  98,
);
