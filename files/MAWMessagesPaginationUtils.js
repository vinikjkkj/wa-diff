__d(
  "MAWMessagesPaginationUtils",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r) {
      return (e || (e = n("Promise"))).resolve(null);
    }
    function s(t, r, o) {
      return t === r ? (e || (e = n("Promise"))).resolve(o) : u(r);
    }
    function u(t) {
      return (e || (e = n("Promise"))).resolve({
        maxExternalId: null,
        minExternalId: null,
      });
    }
    ((i.getRangeExternalIdForDirection = l),
      (i.getMessagesRangesV2ExternalIdsIfChanged = s));
  },
  66,
);
