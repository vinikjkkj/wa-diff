__d(
  "CometComposerDirtyTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = function (n, r) {
        n != null && (r ? e.add(n) : e.delete(n));
      },
      s = function () {
        return e.size > 0;
      };
    ((i.setIsComposerDirty = l), (i.isAnyComposerDirty = s));
  },
  66,
);
