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
    function p(e, t) {
      var n = e
          .map(function (e) {
            return e.age_min;
          })
          .filter(Boolean),
        r = e
          .map(function (e) {
            return e.age_max;
          })
          .filter(Boolean);
      ((t.age_min =
        n.length > 0
          ? Math.min.apply(Math, n)
          : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN),
        (t.age_max =
          r.length > 0
            ? Math.max.apply(Math, r)
            : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX));
      var a = e.filter(function (e) {
        return e.age_range != null;
      });
      if (a.length > 0) {
        var i = a.map(function (e) {
            var t, n;
            return (t = (n = e.age_range) == null ? void 0 : n[0]) != null
              ? t
              : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN;
          }),
          l = a.map(function (e) {
            var t, n;
            return (t = (n = e.age_range) == null ? void 0 : n[1]) != null
              ? t
              : o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX;
          });
        t.age_range = [Math.min.apply(Math, i), Math.max.apply(Math, l)];
      }
    }
    function _(e) {
      if (e.length === 0)
        return {
          age_min: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN,
          age_max: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX,
        };
      var t = {};
      for (var n of e) t = babelHelpers.extends({}, t, n);
      (p(e, t), m(e, t));
      var r = e
        .map(function (e) {
          return e.geo_locations;
        })
        .filter(Boolean);
      r.length > 0 && (t.geo_locations = u(r));
      var a = e.flatMap(function (e) {
        var t;
        return (t = e.custom_audiences) != null ? t : [];
      });
      if (a.length > 0) {
        var i = new Set();
        t.custom_audiences = a.filter(function (e) {
          var t,
            n = String((t = e.id) != null ? t : "");
          return i.has(n) ? !1 : (i.add(n), !0);
        });
      }
      var l = e.filter(function (e) {
        return e.genders != null;
      });
      if (l.length > 0) {
        var c =
          l.length < e.length ||
          l.some(function (e) {
            return e.genders != null && e.genders.length === 0;
          });
        if (c) t.genders = [];
        else {
          var d = Array.from(
            new Set(
              l.flatMap(function (e) {
                var t;
                return (t = e.genders) != null ? t : [];
              }),
            ),
          );
          t.genders = d.length > 1 ? [] : d;
        }
      }
      var _ = e.filter(function (e) {
        return e.locales != null;
      });
      if (_.length > 0) {
        var f =
          _.length < e.length ||
          _.some(function (e) {
            return e.locales != null && e.locales.length === 0;
          });
        f
          ? delete t.locales
          : (t.locales = Array.from(
              new Set(
                _.flatMap(function (e) {
                  var t;
                  return (t = e.locales) != null ? t : [];
                }),
              ),
            ));
      }
      var g = e.filter(function (e) {
        return e.flexible_spec != null;
      });
      if (g.length > 0) {
        var h =
          g.length < e.length ||
          g.some(function (e) {
            return e.flexible_spec != null && e.flexible_spec.length === 0;
          });
        h
          ? delete t.flexible_spec
          : (t.flexible_spec = s(
              g.map(function (e) {
                var t;
                return (t = e.flexible_spec) != null ? t : [];
              }),
            ));
      }
      var y = e.filter(function (e) {
        return e.exclusions != null;
      });
      if (y.length > 0) {
        var C =
          y.length < e.length ||
          y.some(function (e) {
            return e.exclusions != null && e.exclusions.length === 0;
          });
        C
          ? delete t.exclusions
          : (t.exclusions = s(
              y.map(function (e) {
                var t;
                return (t = e.exclusions) != null ? t : [];
              }),
            ));
      }
      var b = e.flatMap(function (e) {
        var t;
        return (t = e.excluded_custom_audiences) != null ? t : [];
      });
      if (b.length > 0) {
        var v = new Set();
        t.excluded_custom_audiences = b.filter(function (e) {
          var t,
            n = String((t = e.id) != null ? t : "");
          return v.has(n) ? !1 : (v.add(n), !0);
        });
      }
      var S = e
        .map(function (e) {
          return e.targeting_optimization;
        })
        .filter(Boolean);
      return (
        S.length > 0 &&
          (t.targeting_optimization = S.some(function (e) {
            return e === "expansion_all";
          })
            ? "expansion_all"
            : "none"),
        t
      );
    }
    function f(e, t, n) {
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
            p = JSON.parse(JSON.stringify(u)),
            f = (c = s.optimization_goal) != null ? c : "REACH",
            g =
              (d = (m = s.promoted_object) == null ? void 0 : m.page_id) != null
                ? d
                : null;
          a.push(
            o(
              "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
            ).getEffectiveTargetSpec(t, g, n, f, p),
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
      var C = _(a);
      return {
        start_time: i === 1 / 0 ? 0 : i,
        stop_time: l === -1 / 0 ? 0 : l,
        target_spec: C,
      };
    }
    ((l.mergeTargetSpecs = _), (l.aggregateCampaignParams = f));
  },
  98,
);
