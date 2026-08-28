__d(
  "ReverseInteropLoadObjectUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      if (r("gkx")("2816")) {
        var a,
          i =
            (a = t.fragment_statuses) == null ||
            (a = a.data) == null ||
            (a = a.filter(function (e) {
              return e.ad_object_type === n;
            })) == null
              ? void 0
              : a.map(function (e) {
                  return e.ad_object_id;
                }),
          l =
            i != null
              ? e.filter(function (e) {
                  return i.includes(e);
                })
              : e;
        return l;
      }
      var s =
          (o = t.fragment_statuses) == null ||
          (o = o.data) == null ||
          (o = o.filter(function (e) {
            return e.ad_object_type !== n;
          })) == null
            ? void 0
            : o.map(function (e) {
                return e.ad_object_id;
              }),
        u = e.filter(function (e) {
          return !(s != null && s.includes(e));
        });
      return u;
    }
    l.filterWrongTypeIds = e;
  },
  98,
);
