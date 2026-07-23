__d(
  "cometRouterCleanURLSearchParameters",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "__cft__",
      "__tn__",
      "fnr_t",
      "sw_fnr_id",
      "__cmr",
      "_ps",
      "wtsid",
      "lsrc",
    ];
    function l(t, n, r) {
      var o = e;
      return (
        r != null && (o = o.concat(r)),
        n != null && (o = o.concat(n)),
        t.removeQueryParams(o)
      );
    }
    i.default = l;
  },
  66,
);
