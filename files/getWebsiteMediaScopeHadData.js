__d(
  "getWebsiteMediaScopeHadData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "HAS_DATA" || e === "TRANSIENT_DOWNLOAD_ERRORS"
        ? !0
        : e === "DATA_UNAVAILABLE" || e === "NEVER_FETCHED"
          ? !1
          : null;
    }
    i.default = e;
  },
  66,
);
