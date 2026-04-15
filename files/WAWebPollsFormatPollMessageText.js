__d(
  "WAWebPollsFormatPollMessageText",
  [
    "WANullthrows",
    "WAWebFrontendMsgGetters",
    "WAWebGetSearchMatchFromMsg",
    "WAWebL10N",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.msg,
        a = e.options,
        i = r("WANullthrows")(o("WAWebFrontendMsgGetters").getAsPoll(n)),
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
