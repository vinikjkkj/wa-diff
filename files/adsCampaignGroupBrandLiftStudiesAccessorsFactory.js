__d(
  "adsCampaignGroupBrandLiftStudiesAccessorsFactory",
  ["memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return {
        get: t,
        description: {
          get: function (n) {
            var e = t(n);
            return e != null ? e.get("description") : void 0;
          },
        },
        end_time: {
          get: function (n) {
            var e = t(n);
            return e != null ? e.get("end_time") : void 0;
          },
        },
        id: {
          get: function (n) {
            var e = t(n);
            return e != null ? e.get("id") : void 0;
          },
        },
        name: {
          get: function (n) {
            var e = t(n);
            return e != null ? e.get("name") : void 0;
          },
        },
        start_time: {
          get: function (n) {
            var e = t(n);
            return e != null ? e.get("start_time") : void 0;
          },
        },
      };
    };
    function s(t) {
      return {
        get: t,
        index: r("memoizeWithArgs")(
          function (n) {
            return e(function (e) {
              var r = t(e);
              return r != null ? (Array.isArray(r) ? r[n] : r.get(n)) : void 0;
            });
          },
          function (e) {
            return String(e);
          },
        ),
      };
    }
    l.default = s;
  },
  98,
);
