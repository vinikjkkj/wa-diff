__d(
  "WAWebChatSortTime",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return Math.max(
        e.previewT || 0,
        e.draftMessageSortTs || 0,
        e.draftAttachMediaContentsSortTs || 0,
        e.t || 0,
      );
    }
    i.getChatSortTime = e;
  },
  66,
);
