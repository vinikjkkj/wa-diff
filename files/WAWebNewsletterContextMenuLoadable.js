__d(
  "WAWebNewsletterContextMenuLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebNewsletterContextMenu")
        .__setRef("WAWebNewsletterContextMenuLoadable")
        .load();
      return e.getNewsletterContextMenuItems;
    }, "getNewsletterContextMenuItems");
    l.loadGetNewsletterContextMenuItems = e;
  },
  98,
);
