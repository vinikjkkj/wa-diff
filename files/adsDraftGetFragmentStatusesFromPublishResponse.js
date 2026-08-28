__d(
  "adsDraftGetFragmentStatusesFromPublishResponse",
  ["AdsAPIDraftPublishStatusPaths", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("getByPath")(
          e,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
        ) || []
      );
    }
    l.default = e;
  },
  98,
);
