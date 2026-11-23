__d(
  "MAIBAPreviewPublishTargetingFormatter",
  [
    "fbt",
    "AdsPlacementPositionLabelConstant",
    "MAIBAPreviewPublishTargetingLabels",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(["custom_audiences", "excluded_custom_audiences"]),
      u = new Set([
        "audience_network_positions",
        "facebook_positions",
        "instagram_positions",
        "messenger_positions",
        "oculus_positions",
        "threads_positions",
        "whatsapp_positions",
      ]),
      c = new Set([
        "behaviors",
        "college_years",
        "education_majors",
        "education_schools",
        "education_statuses",
        "family_statuses",
        "generation",
        "home_ownership",
        "income",
        "industries",
        "interests",
        "life_events",
        "moms",
        "net_worth",
        "office_type",
        "politics",
        "relationship_statuses",
        "user_adclusters",
        "work_employers",
        "work_positions",
      ]);
    function d(e) {
      return e === "targeting";
    }
    function m(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function p(e) {
      var t = m(e);
      if (t != null) return t;
      if (typeof e != "string" || e === "") return null;
      try {
        var n = JSON.parse(e);
        return m(typeof n == "string" ? JSON.parse(n) : n);
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      if (typeof e == "number" && Number.isInteger(e)) return String(e);
      if (typeof e == "string" && /^[1-9]\d*$/.test(e)) return e;
      var t = m(e),
        n = t == null ? void 0 : t.id;
      return typeof n == "number" && Number.isInteger(n)
        ? String(n)
        : typeof n == "string" && /^[1-9]\d*$/.test(n)
          ? n
          : null;
    }
    function f(e) {
      var t = m(e),
        n = t == null ? void 0 : t.key;
      return typeof n == "string" && n !== ""
        ? n
        : typeof n == "number"
          ? String(n)
          : null;
    }
    function g(e) {
      return "custom_audience:" + e;
    }
    function h(e, t) {
      return "flexible:" + e + "." + t;
    }
    function y(e, t) {
      return "geo:" + e + ":" + t;
    }
    function C(e) {
      return b([e]);
    }
    function b(t) {
      var n = [],
        r = new Set(),
        a = function (t, o) {
          r.has(o) || (r.add(o), n.push(t));
        },
        i = function (n, r) {
          if (Array.isArray(r)) {
            if (n != null && e.has(n)) {
              for (var t of r) {
                var l = _(t);
                l != null &&
                  a(
                    {
                      id: l,
                      kind: "custom_audience",
                      subtype: null,
                      type: null,
                    },
                    g(l),
                  );
              }
              return;
            }
            if (n != null && c.has(n)) {
              for (var s of r) {
                var u = _(s);
                u != null &&
                  a(
                    { id: u, kind: "flexible", subtype: n, type: null },
                    h(n, u),
                  );
              }
              return;
            }
            var d =
              n != null
                ? o(
                    "MAIBAPreviewPublishTargetingLabels",
                  ).getLocationTypeForRelay(n)
                : null;
            if (d != null) {
              for (var p of r) {
                var C = f(p);
                C != null &&
                  a({ id: C, kind: "geo", subtype: null, type: d }, y(d, C));
              }
              return;
            }
            for (var b of r) i(n, b);
            return;
          }
          var v = m(r);
          if (v != null)
            for (var S of Object.entries(v)) {
              var R = S[0],
                L = S[1];
              i(R, L);
            }
        };
      for (var l of t) {
        var s = p(l);
        s != null && i(null, s);
      }
      return n;
    }
    function v(e) {
      var t;
      return typeof e != "string"
        ? e
        : (t = o("MAIBAPreviewPublishTargetingLabels").getCountryName(e)) !=
            null
          ? t
          : e;
    }
    function S(e) {
      var t;
      return typeof e != "number"
        ? e
        : (t = o("MAIBAPreviewPublishTargetingLabels").getLanguageName(e)) !=
            null
          ? t
          : e;
    }
    var R = new Map(
      Object.entries(r("AdsPlacementPositionLabelConstant")).map(function (e) {
        var t = e[0],
          n = e[1];
        return [t, String(n)];
      }),
    );
    function L(e) {
      if (typeof e != "string") return e;
      var t = R.get(e);
      return t != null && t !== "" ? t : e;
    }
    function E(e) {
      var t;
      return typeof e != "number" && typeof e != "string"
        ? e
        : (t = o("MAIBAPreviewPublishTargetingLabels").getGenderLabel(e)) !=
            null
          ? t
          : e;
    }
    function k(e) {
      var t;
      return typeof e != "string"
        ? e
        : (t = o("MAIBAPreviewPublishTargetingLabels").getLocationTypeLabel(
              e,
            )) != null
          ? t
          : e;
    }
    function I(e) {
      return e === 0 || e === "0"
        ? String(s._(/*BTDS*/ ""))
        : e === 1 || e === "1"
          ? String(s._(/*BTDS*/ ""))
          : e;
    }
    function T(e, t) {
      var n = m(e);
      return n == null
        ? e
        : Object.fromEntries(
            Object.entries(n).map(function (e) {
              var n = e[0],
                r = e[1];
              return [n, t(r)];
            }),
          );
    }
    function D(e, t, n) {
      var r,
        o = (r = t != null ? t : x(e)) != null ? r : n;
      return o;
    }
    function x(e) {
      var t,
        n = (t = m(e)) == null ? void 0 : t.name;
      return typeof n == "string" && n !== "" ? n : null;
    }
    function $(e, t) {
      var n,
        r,
        o = (n = m(e)) == null ? void 0 : n.radius;
      return typeof o != "number" || o <= 0
        ? t
        : ((r = m(e)) == null ? void 0 : r.distance_unit) === "kilometer"
          ? String(
              s._(/*BTDS*/ "", [
                s._param("place name", t),
                s._param("radius", o),
              ]),
            )
          : String(
              s._(/*BTDS*/ "", [
                s._param("place name", t),
                s._param("radius", o),
              ]),
            );
    }
    function P(e) {
      var t = [];
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1],
          a = Number(r);
        if (!Number.isSafeInteger(a) || a < 0 || String(a) !== r) return null;
        t.push({ index: a, value: o });
      }
      return t.length === 0
        ? null
        : (t.sort(function (e, t) {
            return e.index - t.index;
          }),
          t.every(function (e, t) {
            var n = e.index;
            return n === t;
          })
            ? t.map(function (e) {
                var t = e.value;
                return t;
              })
            : null);
    }
    function N(e, t, n) {
      if (Array.isArray(t)) return M(e, t, n);
      var r = m(t);
      if (r == null) return t;
      var o = P(r);
      return o != null
        ? M(e, o, n)
        : Object.fromEntries(
            e === "targeting_automation"
              ? Object.entries(r).map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return [
                    t,
                    t === "advantage_audience"
                      ? I(r)
                      : t === "individual_setting"
                        ? T(r, I)
                        : N(t, r, n),
                  ];
                })
              : Object.entries(r).map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return [t, N(t, r, n)];
                }),
          );
    }
    function M(t, n, r) {
      if (t === "countries") return n.map(v);
      if (t === "locales") return n.map(S);
      if (t === "genders") return n.map(E);
      if (t === "location_types") return n.map(k);
      if (t != null && u.has(t)) return n.map(L);
      if (t != null && e.has(t))
        return n.map(function (e) {
          var n = _(e);
          return n == null ? N(t, e, r) : D(e, r.get(g(n)), n);
        });
      if (t != null && c.has(t))
        return n.map(function (e) {
          var n = _(e);
          return n == null ? N(t, e, r) : D(e, r.get(h(t, n)), n);
        });
      var a =
        t != null
          ? o("MAIBAPreviewPublishTargetingLabels").getLocationTypeForRelay(t)
          : null;
      return a != null
        ? n.map(function (e) {
            var n,
              o,
              i = f(e);
            if (i == null) return N(t, e, r);
            var l =
              (n = (o = r.get(y(a, i))) != null ? o : x(e)) != null ? n : i;
            return $(e, l);
          })
        : n.map(function (e) {
            return N(t, e, r);
          });
    }
    function w(e, t) {
      var n = p(e);
      if (n == null) return null;
      var r = N(null, n, t);
      return m(r);
    }
    ((l.isTargetingField = d),
      (l.parseTargetingSpec = p),
      (l.customAudienceRefKey = g),
      (l.flexibleRefKey = h),
      (l.geoRefKey = y),
      (l.collectTargetingEntityRefs = C),
      (l.collectTargetingEntityRefsForSpecs = b),
      (l.decodeTargetingSpec = w));
  },
  226,
);
