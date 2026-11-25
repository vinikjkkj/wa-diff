__d(
  "WAWebToYouListGatingUtils",
  ["WAWebInboxFiltersGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 17;
    function s(t) {
      return (
        t === e && !o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled()
      );
    }
    ((l.MENTIONS_AND_REPLIES_LIST_TYPE = e), (l.isHiddenToYouList = s));
  },
  98,
);
