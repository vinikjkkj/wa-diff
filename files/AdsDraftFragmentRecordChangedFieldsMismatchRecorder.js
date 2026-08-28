__d(
  "AdsDraftFragmentRecordChangedFieldsMismatchRecorder",
  ["FBLogger", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    function c(e, t) {
      var n = r("immutable")
        .Set()
        .withMutations(function (e) {
          t.forEach(function (t) {
            e.union(t.getNonMemoizedChangedFields_FOR_LOGGING_ONLY());
          });
        });
      n.equals(e) ||
        r("FBLogger")("ads", "draft_fragment_record").warn(
          "Changed fields mismatch. Expected: %s, Actual: %s",
          n.toJS(),
          e.toJS(),
        );
    }
    ((l.setEnabled = s), (l.isEnabled = u), (l.checkAndLogIfMismatch = c));
  },
  98,
);
