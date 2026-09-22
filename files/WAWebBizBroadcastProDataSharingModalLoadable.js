__d(
  "WAWebBizBroadcastProDataSharingModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "WAWebModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")(
          "WAWebBizBroadcastProDataSharingModalContainer.react",
        ).__setRef("WAWebBizBroadcastProDataSharingModalLoadable"),
        "BizBroadcastProDataSharingModal",
        function (e) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            error: !!e.error,
            theme:
              o("WAWebModal.react").ModalTheme
                .BizBroadcastProDownloadRecipients,
          });
        },
      );
    l.WAWebBizBroadcastProDataSharingModalLoadable = u;
  },
  98,
);
