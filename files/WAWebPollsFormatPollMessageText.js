__d(
  "WAWebPollsFormatPollMessageText",
  [
    "WAWebFrontendMsgGetters",
    "WAWebGetSearchMatchFromMsg",
    "WAWebL10N",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.msg,
        a = e.options,
        i = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPoll(n)),
        l = o("WAWebGetSearchMatchFromMsg").getSearchMatchFromMsg(
          i,
          (t = a.searchQuery) != null ? t : [],
        );
      return l == null
        ? i.pollName
        : l === i.pollName
          ? l
          : r("WAWebL10N").isRTL()
            ? l + " \u25CB"
            : "\u25CB " + l;
    }
    l.default = e;
  },
  98,
);
