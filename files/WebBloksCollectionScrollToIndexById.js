__d(
  "WebBloksCollectionScrollToIndexById",
  ["WebBloksCollectionScrollTo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t.uiMutableContainer.domNode) {
        var r = n.get("animated"),
          a = n.get("target_id"),
          i = t.getSubNodes("children");
        if (!(i == null || i.length === 0)) {
          for (var l = 0; l < i.length; l++)
            if (i[l].getId() === a) {
              o("WebBloksCollectionScrollTo").scrollWebBloksCollectionToIndex(
                t,
                { index: l, isAnimated: r },
              );
              break;
            }
        }
      }
    }
    l.default = e;
  },
  98,
);
