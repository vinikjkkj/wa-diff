__d(
  "WAWebConversationClosedPanelRelease",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (typeof WeakRef != "function") return null;
      var t = new WeakRef(e);
      return function (e) {
        var n = t.deref();
        n != null && (n.scrollContainer = e);
      };
    }
    i.createScrollContainerRef = e;
  },
  66,
);
