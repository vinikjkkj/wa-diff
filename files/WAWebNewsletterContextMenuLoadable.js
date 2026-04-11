__d(
  "WAWebNewsletterContextMenuLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebNewsletterContextMenu",
        )
          .__setRef("WAWebNewsletterContextMenuLoadable")
          .load();
        return e.getNewsletterContextMenuItems;
      }),
      "getNewsletterContextMenuItems",
    );
    l.loadGetNewsletterContextMenuItems = e;
  },
  98,
);
