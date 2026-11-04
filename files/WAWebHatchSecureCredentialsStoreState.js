__d(
  "WAWebHatchSecureCredentialsStoreState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n, r;
      if (e.loading || t.loading) return "loading";
      var o = e.value;
      return e.error != null || o == null
        ? "error"
        : o.length === 0 &&
            ((n = (r = t.value) == null ? void 0 : r.length) != null
              ? n
              : 0) === 0
          ? "empty"
          : "list";
    }
    i.getHatchSecureCredentialsStoreState = e;
  },
  66,
);
