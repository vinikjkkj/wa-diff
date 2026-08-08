__d(
  "WAWebCometVideoPlayerUtils",
  [
    "WAWebABProps",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebStatusLoggingUtils",
    "WAWebWamEnumMessageType",
    "WAWebWamMsgUtils",
    "videoPlayerUniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebWamMsgUtils").getWamMessageType(e);
      switch (n) {
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
          return o("WAWebMsgGetters").getIsNewsletterStatus(e) &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterVideoPlaybackLoggingEnabled()
            ? t === !0
              ? "whatsapp_channel_status_non_ugc"
              : "whatsapp_channel_status_ugc"
            : t === !0
              ? "whatsapp_status"
              : "whatsapp_status_organic_videos";
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
          mediaId: o("WAWebABProps").getABPropConfigValue(
            "snapl_newsletter_logging_media_id_placeholder_string",
          ),
          mediaIdString: u,
        };
      }
      return { mediaId: null, mediaIdString: null };
    }
    function c(e, t, n) {
      var r = o("WAWebStatusLoggingUtils").channelStatusCid(e.id.remote);
      if (r == null) return { mediaId: null, mediaIdString: null };
      if (t) return { mediaId: n, mediaIdString: null };
      var a = e.serverId;
      return a == null || a <= 0
        ? { mediaId: null, mediaIdString: null }
        : {
            mediaId: o("WAWebABProps").getABPropConfigValue(
              "snapl_newsletter_logging_media_id_placeholder_string",
            ),
            mediaIdString: "cs_" + r + "_" + a,
          };
    }
    function d(e, t, n) {
      if (
        o("WAWebMsgGetters").getIsNewsletterStatus(e) &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVideoPlaybackLoggingEnabled()
      ) {
        var r = c(e, t, n);
        return {
          mediaId: r.mediaId,
          mediaIdString: r.mediaIdString,
          videoOrigin: o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL,
          videoTagMediaId: r.mediaId,
        };
      }
      return {
        mediaId: n != null ? n : "-1",
        mediaIdString: t ? null : String(e.id),
        videoOrigin: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
        videoTagMediaId: n,
      };
    }
    ((l.getCurrentWatchingModule = e),
      (l.getInitialMetadata = s),
      (l.getChannelMediaMetadataForSNAPL = u),
      (l.getNewsletterStatusSNAPLMetadata = c),
      (l.getStatusSNAPLParams = d));
  },
  98,
);
