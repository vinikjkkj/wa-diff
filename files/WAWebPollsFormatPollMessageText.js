__d(
  "WAWebPollsFormatPollMessageText",
  [
    "WANullthrows",
    "WAWebFrontendMsgGetters",
    "WAWebGetSearchMatchFromMsg",
    "WAWebL10N",
    "WAWebPollsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = r("WANullthrows")(o("WAWebFrontendMsgGetters").getAsPoll(t));
      if (o("WAWebPollsGatingUtils").arePollsFastFollowsEnabled()) {
        var i,
          l = o("WAWebGetSearchMatchFromMsg").getSearchMatchFromMsg(
            a,
            (i = n.searchQuery) != null ? i : [],
          );
        return l == null
          ? a.pollName
          : l === a.pollName
            ? l
            : r("WAWebL10N").isRTL()
              ? l + " \u25CB"
              : "\u25CB " + l;
      }
      return a.pollName;
    }
    l.default = e;
  },
  98,
);
