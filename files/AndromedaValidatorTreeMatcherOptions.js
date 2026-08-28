__d(
  "AndromedaValidatorTreeMatcherOptions",
  ["areEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { continueAfterMismatch: !0 },
      u = {
        custom_locations: {
          custom_type: function (n, o) {
            return (
              (e || (e = r("areEqual")))(n, o) ||
              (e || (e = r("areEqual")))(n, "place")
            );
          },
        },
        places: {
          primary_city_id: function (t, n) {
            return String(t) === String(n);
          },
          region_id: function (t, n) {
            return String(t) === String(n);
          },
        },
        zips: {
          primary_city_id: function (t, n) {
            return String(t) === String(n);
          },
          region_id: function (t, n) {
            return String(t) === String(n);
          },
        },
        geo_markets: {
          market_type: function (t, n) {
            var e = n != null ? n : "DMA";
            return t === e;
          },
        },
        location_cluster_ids: function (n, o) {
          var t = (e || (e = r("areEqual")))(n, o);
          return t
            ? !0
            : n && o
              ? n.every(function (e, t) {
                  return e.key === String(o[t].key);
                })
              : !1;
        },
      },
      c = {
        data: function (t, n) {
          if (t === n || n.length === 0) return !0;
          var e = t.find(function (e) {
              return e.role !== "";
            }),
            r = n.find(function (e) {
              return e.role !== "";
            });
          return (e == null ? void 0 : e.role) !== (r == null ? void 0 : r.role)
            ? !1
            : t.length === 1 && n.length === 1
              ? p(
                  e == null ? void 0 : e.business,
                  r == null ? void 0 : r.business,
                )
              : t.some(function (e) {
                  return e.role !== ""
                    ? !1
                    : n.some(function (t) {
                        return p(t.business, e.business, !0);
                      });
                });
        },
      };
    function d(e, t) {
      var n = parseInt(t, 10),
        r = isNaN(n) ? t : n;
      return e === r || (e == null && t == null);
    }
    function m(e, t) {
      if (e === 0 && t === 0) return 0;
      var n = e - t;
      return Math.abs((100 * n) / e);
    }
    function p(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !e && !t ? !n : !e || !t ? !1 : e.id === t.id && e.name === t.name
      );
    }
    ((l.baseGlobalOptions = s),
      (l.geoLocationMatcher = u),
      (l.userPermissionsMatcher = c),
      (l.compareNumberWithString = d),
      (l.getPercentChange = m));
  },
  98,
);
