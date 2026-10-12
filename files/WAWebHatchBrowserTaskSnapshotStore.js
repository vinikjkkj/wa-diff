__d(
  "WAWebHatchBrowserTaskSnapshotStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l(t, n) {
      e.set(t, n);
    }
    function s(t) {
      e.delete(t);
    }
    function u() {
      e = new WeakMap();
    }
    function c(t) {
      return t != null ? e.get(t) : null;
    }
    ((i.retainBrowserTaskSnapshot = l),
      (i.releaseBrowserTaskSnapshot = s),
      (i.resetBrowserTaskSnapshots = u),
      (i.getBrowserTaskSnapshot = c));
  },
  66,
);
