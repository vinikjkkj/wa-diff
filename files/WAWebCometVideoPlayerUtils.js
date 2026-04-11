__d(
  "WAWebCometVideoPlayerUtils",
  [
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumMessageType",
    "WAWebWamMsgUtils",
    "videoPlayerUniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
          return "status_viewer";
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
          return "whatsapp_channels";
        default:
          return "";
      }
    }
    function s(e) {
      var t = { height: e.clientHeight, width: e.clientWidth };
      return {
        accessToken: null,
        dimensions: t,
        productAttribution: null,
        downstreamShareSignalTracking: null,
        trackingNodes: "",
        trackingDataEncrypted: "",
        playerImplementationInstanceCountRef: { current: 1 },
        instanceKey: r("videoPlayerUniqueID")(),
      };
    }
    function u(e) {
      if (
        o("WAWebWamMsgUtils").getWamMessageType(e) ===
        o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL
      ) {
        var t,
          n = e.interactiveAnnotations,
          r =
            n == null
              ? void 0
              : n.filter(function (e) {
                  var t;
                  return (
                    ((t = e.embeddedContent) == null
                      ? void 0
                      : t.embeddedMusic) != null
                  );
                });
        if (r != null && r.length > 0) {
          var a,
            i =
              (a = r[0].embeddedContent) == null ||
              (a = a.embeddedMusic) == null
                ? void 0
                : a.musicContentMediaId;
          return { mediaId: i, mediaIdString: null };
        }
        var l = e.id.remote.user,
          s = (t = e.serverId) != null ? t : "",
          u = l + "_" + s;
        return {
          mediaId: o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterLoggingMediaID(),
          mediaIdString: u,
        };
      }
      return { mediaId: null, mediaIdString: null };
    }
    ((l.getCurrentWatchingModule = e),
      (l.getInitialMetadata = s),
      (l.getChannelMediaMetadataForSNAPL = u));
  },
  98,
);
