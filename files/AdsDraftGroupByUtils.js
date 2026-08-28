__d(
  "AdsDraftGroupByUtils",
  ["mapObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["campaign", "ad_set", "ad"];
    function u(t) {
      Array.isArray(t) || (t = Array.from(t.values()));
      var n = c(t);
      return (e || (e = r("mapObject")))(n, function (e) {
        return e.map(function (e) {
          return e.ad_object_id;
        });
      });
    }
    function c(e) {
      Array.isArray(e) || (e = Array.from(e.values()));
      var t = {};
      return (
        s.forEach(function (e) {
          t[e] = [];
        }),
        e.forEach(function (e) {
          var n = e.ad_object_type;
          t[n] && t[n].push(e);
        }),
        t
      );
    }
    ((l.groupAdObjectIDsByLevel = u), (l.groupFragmentsByLevel = c));
  },
  98,
);
