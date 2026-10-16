__d(
  "WAWebPollsFormatPollMessageText",
  [
    "WAWebFormatMsgTextUtils",
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
        ? o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i.pollName, a)
        : l === i.pollName
          ? o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(l, a)
          : o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(
              r("WAWebL10N").isRTL() ? l + " \u25CB" : "\u25CB " + l,
              a,
            );
    }
    l.default = e;
  },
  98,
);
