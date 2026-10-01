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
          var n = e.allMediaCollection,
            a = e.currentTime,
            i = e.getZoomNode,
            l = e.highlightedMsgIds,
            u = e.msg,
            c = e.shouldShowAllMedia,
            d = e.shouldShowNumberText;
          o("WAWebMsgCollection").MsgCollection.get(u.id)
            ? o("WAWebModalManager").ModalManager.openMedia(
                s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "media-viewer-flow",
                  children: s.jsx(
                    o("WAWebMediaViewerFlow.react").MediaViewerFlow,
                    {
                      msg: u,
                      startTime: a,
                      getZoomNode: i,
                      highlightedMsgIds: l,
                      shouldShowNumberText: d,
                      shouldShowAllMedia: c,
                      allMediaCollection: n,
                    },
                  ),
                }),
                { transition: "media-viewer", uim: r("nullthrows")(t) },
              )
            : o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebMediaMissingModal.react"), { msg: u }),
              );
        };
      };
    l.handleMediaViewer = u;
  },
  98,
);
