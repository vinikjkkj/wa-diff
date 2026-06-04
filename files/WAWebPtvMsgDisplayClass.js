__d(
  "WAWebPtvMsgDisplayClass",
  ["WAWebClassnames", "WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType;
      return o("WAWebClassnames").classnamesConvertMeToStylexPlease(
        "messageChat",
        "ptvMessage",
        o("WAWebDisplayType").isWideDisplay(t) ? "ptvAnnouncement" : null,
      );
    }
    l.default = e;
  },
  98,
);
