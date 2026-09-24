__d(
  "WAWebMediaStreamability",
  ["WAWebMediaTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s(e) && t && e.isViewOnce !== !0;
    }
    function s(e) {
      var t = e.fullHeight,
        n = e.fullWidth,
        r = e.isGif,
        a = e.mediaStage,
        i = e.sidecar,
        l = e.type;
      return (
        l === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO &&
        r !== !0 &&
        (a === o("WAWebMediaTypes").MediaDataStage.INIT ||
          a === o("WAWebMediaTypes").MediaDataStage.FETCHING ||
          a === o("WAWebMediaTypes").MediaDataStage.DECRYPTING ||
          a === o("WAWebMediaTypes").MediaDataStage.RESOLVED) &&
        n != null &&
        t != null &&
        !!(i && i.byteLength > 0)
      );
    }
    l.isStreamableMedia = e;
  },
  98,
);
