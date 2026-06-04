__d(
  "WAWebPollMsgDisplayClass",
  ["WAWebClassnames", "WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType;
      return o("WAWebClassnames").classnamesConvertMeToStylexPlease(
        "messageChat",
        o("WAWebDisplayType").isWideDisplay(t)
          ? "pollAnnouncement"
          : "pollMessage",
      );
    }
    l.default = e;
  },
  98,
);
