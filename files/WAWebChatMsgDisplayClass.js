__d(
  "WAWebChatMsgDisplayClass",
  [
    "cx",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUtilsShouldShowVideoPreview",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.displayType,
        n = e.msg;
      return o("WAWebFrontendMsgGetters").getIsTransparentMsg(n)
        ? "_amk9"
        : r("WAWebUtilsShouldShowVideoPreview")(n)
          ? o("WAWebDisplayType").isWideDisplay(t)
            ? "_aml6"
            : "_aml5"
          : o("WAWebMsgGetters").getBotPluginMaybeParent(n) === !0
            ? o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_amkd",
                "_ap4o",
              )
            : "_amkd";
    }
    l.default = e;
  },
  98,
);
