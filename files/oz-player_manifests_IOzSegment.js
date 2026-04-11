__d(
  "oz-player/manifests/IOzSegment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return (
        ((e == null ? void 0 : e.getSequenceNumber()) || 0) ===
        ((t == null ? void 0 : t.getSequenceNumber()) || 0)
      );
    }
    function l(e, t) {
      return (
        ((e == null ? void 0 : e.getSequenceNumber()) || 0) >=
        ((t == null ? void 0 : t.getSequenceNumber()) || 0)
      );
    }
    ((i.isSequenceNumberEqual = e), (i.isSequenceNumberGreaterOrEqual = l));
  },
  66,
);
