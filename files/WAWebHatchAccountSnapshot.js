__d(
  "WAWebHatchAccountSnapshot",
  ["WAWebHatchIdeasIconAccount", "WAWebHatchLinkedStatusManager"],
  function (t, n, r, o, a, i, l) {
    function e() {
      try {
        var e;
        return r("WAWebHatchLinkedStatusManager").isUnlinked()
          ? null
          : {
              owner: o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken(),
              channel:
                (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) ==
                null
                  ? void 0
                  : e.channelFbid,
            };
      } catch (e) {
        return null;
      }
    }
    function s(e, t) {
      return t != null && t.owner === e.owner && t.channel === e.channel;
    }
    ((l.readHatchAccountSnapshot = e), (l.isSameHatchAccount = s));
  },
  98,
);
