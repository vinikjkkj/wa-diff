__d(
  "AdsUEditorCampaignGroupL2AggregationUtils",
  [
    "AdsReservationInAuctionConstants",
    "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
    "parseISODate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.length === 0) return [];
      var t = new Set(),
        n = [];
      for (var r of e) {
        var o,
          a = (o = JSON.stringify(r)) != null ? o : "";
        t.has(a) || (t.add(a), n.push(r));
      }
      return n;
    }
    function s(t) {
      var n = t.flatMap(function (e) {
        return e;
      });
      if (n.length === 0) return [];
      var r = {};
      for (var o of n) {
        var a = JSON.parse(JSON.stringify(o));
        for (var i of Object.keys(a)) {
          if (i === "type") {
            r[i] = a[i];
            continue;
          }
          var l = a[i],
            s = r[i];
          Array.isArray(l) && Array.isArray(s)
            ? (r[i] = s.concat(l))
            : (r[i] = l);
        }
      }
      for (var u of Object.keys(r))
        if (u !== "type") {
          var c = r[u];
          Array.isArray(c) && (r[u] = e(c));
        }
      return [JSON.parse(JSON.stringify(r))];
    }
    function u(t) {
      var n = {};
      for (var r of t) {
        var o = JSON.parse(JSON.stringify(r));
        for (var a of Object.keys(o)) {
          var i = o[a],
            l = n[a];
          Array.isArray(i) && Array.isArray(l)
            ? (n[a] = l.concat(i))
            : (n[a] = i);
        }
      }
      for (var s of Object.keys(n)) {
        var u = n[s];
        Array.isArray(u) && (n[s] = e(u));
      }
      return (d(n), JSON.parse(JSON.stringify(n)));
    }
    function c(e, t, n) {
      for (var r of t) e[r] != null && (e[r] = n(e[r]));
    }
    function d(e) {
      var t = new Set(),
        n = e.countries;
      if (Array.isArray(n)) for (var r of n) t.add(String(r));
      var o = function (n) {
        return Array.isArray(n)
          ? n.filter(function (e) {
              var n;
              return (
                e != null &&
                typeof e == "object" &&
                !t.has(String((n = e.country) != null ? n : ""))
              );
            })
          : n;
      };
      t.size > 0 &&
        c(
          e,
          [
            "regions",
            "cities",
            "zips",
            "custom_locations",
            "places",
            "geo_markets",
            "electoral_districts",
            "political_districts",
          ],
          o,
        );
      var a = new Set();
      if (Array.isArray(e.regions))
        for (var i of e.regions)
          i != null &&
            typeof i == "object" &&
            i.key != null &&
            a.add(String(i.key));
      if (a.size > 0) {
        var l = function (t) {
          return Array.isArray(t)
            ? t.filter(function (e) {
                var t, n;
                return (
                  e != null &&
                  typeof e == "object" &&
                  !a.has(
                    String(
                      (t = (n = e.region_id) != null ? n : e.region) != null
                        ? t
                        : "",
                    ),
                  )
                );
              })
            : t;
        };
        c(
          e,
          [
            "cities",
            "zips",
            "custom_locations",
            "places",
            "political_districts",
          ],
          l,
        );
      }
      var s = new Set();
      if (Array.isArray(e.cities))
        for (var u of e.cities)
          u != null &&
            typeof u == "object" &&
            u.key != null &&
            s.add(String(u.key));
      if (s.size > 0) {
        var d = function (t) {
          return Array.isArray(t)
            ? t.filter(function (e) {
                var t, n;
                return (
                  e != null &&
                  typeof e == "object" &&
                  !s.has(
                    String(
                      (t =
                        (n = e.primary_city) != null ? n : e.primary_city_id) !=
                        null
                        ? t
                        : "",
                    ),
                  )
                );
              })
            : t;
        };
        c(e, ["zips", "custom_locations", "places"], d);
      }
    }
    function m(e, t) {
      var n = function (n) {
          return Array.from(
            new Set(
              e.flatMap(function (e) {
                var t;
                return (t = n(e)) != null ? t : [];
              }),
            ),
          );
        },
        r = n(function (e) {
          return e.publisher_platforms;
        });
      r.length > 0 && (t.publisher_platforms = r);
      var o = n(function (e) {
        return e.device_platforms;
      });
      o.length > 0 && (t.device_platforms = o);
      var a = n(function (e) {
        return e.facebook_positions;
      });
      a.length > 0 && (t.facebook_positions = a);
      var i = n(function (e) {
        return e.audience_network_positions;
      });
      i.length > 0 && (t.audience_network_positions = i);
      var l = n(function (e) {
        return e.instagram_positions;
      });
      l.length > 0 && (t.instagram_positions = l);
      var s = n(function (e) {
        return e.messenger_positions;
      });
      s.length > 0 && (t.messenger_positions = s);
      var u = n(function (e) {
        return e.whatsapp_positions;
      });
      u.length > 0 && (t.whatsapp_positions = u);
      var c = n(function (e) {
        return e.oculus_positions;
      });
      c.length > 0 && (t.oculus_positions = c);
      var d = n(function (e) {
        return e.threads_positions;
      });
      d.length > 0 && (t.threads_positions = d);
    }
    function p(e) {
      if (e.length === 0)
        return {
          age_min: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN,
          age_max: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX,
        };
      var t = {};
      for (var n of e) t = babelHelpers.extends({}, t, n);
      var r = e
          .map(function (e) {
            return e.age_min;
          })
          .filter(Boolean),
        a = e
          .map(function (e) {
            return e.age_max;
          })
          .filter(Boolean);
      ((t.age_min =
        r.length > 0
          ? Math.min.apply(Math, r)
          : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN),
        (t.age_max =
          a.length > 0
            ? Math.max.apply(Math, a)
            : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX));
      var i = e.filter(function (e) {
        return e.age_range != null;
      });
      if (i.length > 0) {
        var l = i.map(function (e) {
            var t, n;
            return (t = (n = e.age_range) == null ? void 0 : n[0]) != null
              ? t
              : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN;
          }),
          c = i.map(function (e) {
            var t, n;
            return (t = (n = e.age_range) == null ? void 0 : n[1]) != null
              ? t
              : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX;
          });
        t.age_range = [Math.min.apply(Math, l), Math.max.apply(Math, c)];
      }
      m(e, t);
      var d = e
        .map(function (e) {
          return e.geo_locations;
        })
        .filter(Boolean);
      d.length > 0 && (t.geo_locations = u(d));
      var p = e.flatMap(function (e) {
        var t;
        return (t = e.custom_audiences) != null ? t : [];
      });
      if (p.length > 0) {
        var _ = new Set();
        t.custom_audiences = p.filter(function (e) {
          var t,
            n = String((t = e.id) != null ? t : "");
          return _.has(n) ? !1 : (_.add(n), !0);
        });
      }
      var f = e.filter(function (e) {
        return e.genders != null;
      });
      if (f.length > 0) {
        var g =
          f.length < e.length ||
          f.some(function (e) {
            return e.genders != null && e.genders.length === 0;
          });
        if (g) t.genders = [];
        else {
          var h = Array.from(
            new Set(
              f.flatMap(function (e) {
                var t;
                return (t = e.genders) != null ? t : [];
              }),
            ),
          );
          t.genders = h.length > 1 ? [] : h;
        }
      }
      var y = e.filter(function (e) {
        return e.locales != null;
      });
      if (y.length > 0) {
        var C =
          y.length < e.length ||
          y.some(function (e) {
            return e.locales != null && e.locales.length === 0;
          });
        C
          ? delete t.locales
          : (t.locales = Array.from(
              new Set(
                y.flatMap(function (e) {
                  var t;
                  return (t = e.locales) != null ? t : [];
                }),
              ),
            ));
      }
      var b = e.filter(function (e) {
        return e.flexible_spec != null;
      });
      if (b.length > 0) {
        var v =
          b.length < e.length ||
          b.some(function (e) {
            return e.flexible_spec != null && e.flexible_spec.length === 0;
          });
        v
          ? delete t.flexible_spec
          : (t.flexible_spec = s(
              b.map(function (e) {
                var t;
                return (t = e.flexible_spec) != null ? t : [];
              }),
            ));
      }
      var S = e.filter(function (e) {
        return e.exclusions != null;
      });
      if (S.length > 0) {
        var R =
          S.length < e.length ||
          S.some(function (e) {
            return e.exclusions != null && e.exclusions.length === 0;
          });
        R
          ? delete t.exclusions
          : (t.exclusions = s(
              S.map(function (e) {
                var t;
                return (t = e.exclusions) != null ? t : [];
              }),
            ));
      }
      var L = e.flatMap(function (e) {
        var t;
        return (t = e.excluded_custom_audiences) != null ? t : [];
      });
      if (L.length > 0) {
        var E = new Set();
        t.excluded_custom_audiences = L.filter(function (e) {
          var t,
            n = String((t = e.id) != null ? t : "");
          return E.has(n) ? !1 : (E.add(n), !0);
        });
      }
      var k = e
        .map(function (e) {
          return e.targeting_optimization;
        })
        .filter(Boolean);
      return (
        k.length > 0 &&
          (t.targeting_optimization = k.some(function (e) {
            return e === "expansion_all";
          })
            ? "expansion_all"
            : "none"),
        t
      );
    }
    function _(e, t, n) {
      if (e.size === 0) return null;
      var a = [],
        i = 1 / 0,
        l = -1 / 0;
      for (var s of e.values()) {
        var u = s.targeting;
        if (u != null && Object.keys(u).length > 0) {
          var c,
            d,
            m,
            _ = JSON.parse(JSON.stringify(u)),
            f = (c = s.optimization_goal) != null ? c : "REACH",
            g =
              (d = (m = s.promoted_object) == null ? void 0 : m.page_id) != null
                ? d
                : null;
          a.push(
            o(
              "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
            ).getEffectiveTargetSpec(t, g, n, f, _),
          );
        }
        if (s.start_time != null) {
          var h = r("parseISODate")(s.start_time).getTime() / 1e3;
          i = Math.min(i, h);
        }
        if (s.end_time != null) {
          var y = r("parseISODate")(s.end_time).getTime() / 1e3;
          l = Math.max(l, y);
        }
      }
      if (a.length === 0) return null;
      var C = p(a);
      return {
        start_time: i === 1 / 0 ? 0 : i,
        stop_time: l === -1 / 0 ? 0 : l,
        target_spec: C,
      };
    }
    ((l.mergeTargetSpecs = p), (l.aggregateCampaignParams = _));
  },
  98,
);
