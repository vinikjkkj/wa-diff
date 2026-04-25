__d(
  "WAWebCallLogParticipantSelectorPopoverLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
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
            "WAWebCallLogParticipantSelectorPopover.react",
          )
            .__setRef("WAWebCallLogParticipantSelectorPopoverLoadable")
            .load();
          return e;
        }),
        "WAWebCallLogParticipantSelectorPopoverLoadable",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebCallLogParticipantSelectorPopoverLoadable = c;
  },
  98,
);
