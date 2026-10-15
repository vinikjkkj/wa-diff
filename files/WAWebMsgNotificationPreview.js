__d(
  "WAWebMsgNotificationPreview",
  ["WAWebFrontendMsgGetters", "WAWebMuteCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (
        !(
          (t = o("WAWebFrontendMsgGetters").getAsViewOnce(e)) != null &&
          t.isViewOnce
        ) && o("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
      );
    }
    l.shouldShowMsgNotificationPreview = e;
  },
  98,
);
