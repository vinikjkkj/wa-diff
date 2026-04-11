__d(
  "isQuotaExceededError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!(e instanceof t.DOMException)) return !1;
      var n = e;
      return (
        n.code === 22 ||
        n.code === 1014 ||
        n.name === "QuotaExceededError" ||
        n.name === "NS_ERROR_DOM_QUOTA_REACHED"
      );
    }
    function l(t, n) {
      return !!(e(n) && t && t.length !== 0);
    }
    ((i.isQuotaExceededError = e), (i.isStorageQuotaExceededError = l));
  },
  66,
);
