__d(
  "WebBloksCollectionScrollToIndexById",
  ["WebBloksCollectionScrollTo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t.uiMutableContainer.domNode) {
        var r = n.getValues(),
          a = r.animated,
          i = r.target_id,
          l = t.getSubNodes("children");
        if (!(l == null || l.length === 0)) {
          for (var s = 0; s < l.length; s++)
            if (l[s].getId() === i) {
              o("WebBloksCollectionScrollTo").scrollWebBloksCollectionToIndex(
                t,
                { index: s, isAnimated: a },
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
