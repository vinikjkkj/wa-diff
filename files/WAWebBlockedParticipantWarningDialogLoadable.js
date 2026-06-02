__d(
  "WAWebBlockedParticipantWarningDialogLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBlockedParticipantWarningDialog.react",
        )
          .__setRef("WAWebBlockedParticipantWarningDialogLoadable")
          .load();
        return e;
      }, "BlockedParticipantWarningDialog"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
            error: !!t.error,
          });
        },
      });
    l.BlockedParticipantWarningDialogLoadable = c;
  },
  98,
);
