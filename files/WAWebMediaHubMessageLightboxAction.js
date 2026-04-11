__d(
  "WAWebMediaHubMessageLightboxAction",
  [
    "WAWebErrorBoundary.react",
    "WAWebMediaMissingModal.react",
    "WAWebMediaViewerFlow.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        return function (e) {
          var n = e.currentTime,
            a = e.getZoomNode,
            i = e.highlightedMsgIds,
            l = e.msg,
            u = e.shouldShowAllMedia,
            c = e.shouldShowNumberText;
          o("WAWebMsgCollection").MsgCollection.get(l.id)
            ? o("WAWebModalManager").ModalManager.openMedia(
                s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "media-viewer-flow",
                  children: s.jsx(
                    o("WAWebMediaViewerFlow.react").MediaViewerFlow,
                    {
                      msg: l,
                      startTime: n,
                      getZoomNode: a,
                      highlightedMsgIds: i,
                      shouldShowNumberText: c,
                      shouldShowAllMedia: u,
                    },
                  ),
                }),
                { transition: "media-viewer", uim: r("nullthrows")(t) },
              )
            : o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebMediaMissingModal.react"), { msg: l }),
              );
        };
      };
    l.handleMediaViewer = u;
  },
  98,
);
