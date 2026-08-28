__d(
  "WebBloksCollectionScrollToIndexById",
  ["WebBloksCollectionScrollTo", "WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "&",
      s = "$";
    function u(t, n, r) {
      if (n.uiMutableContainer.domNode) {
        var a = r.get(e),
          i = r.get(s),
          l = n.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY);
        if (!(l == null || l.length === 0)) {
          for (var u = 0; u < l.length; u++)
            if (l[u].getId() === i) {
              o("WebBloksCollectionScrollTo").scrollWebBloksCollectionToIndex(
                n,
                { index: u, isAnimated: a },
              );
              break;
            }
        }
      }
    }
    l.default = u;
  },
  98,
);
