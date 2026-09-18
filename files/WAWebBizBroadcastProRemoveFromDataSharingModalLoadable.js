__d(
  "WAWebBizBroadcastProRemoveFromDataSharingModalLoadable",
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
          "WAWebBizBroadcastProRemoveFromDataSharingModalContainer.react",
        ).__setRef("WAWebBizBroadcastProRemoveFromDataSharingModalLoadable"),
        "BizBroadcastProRemoveFromDataSharingModal",
        function (e) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            error: !!e.error,
            theme:
              o("WAWebModal.react").ModalTheme
                .BizBroadcastProDownloadRecipients,
          });
        },
      );
    l.WAWebBizBroadcastProRemoveFromDataSharingModalLoadable = u;
  },
  98,
);
