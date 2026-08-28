__d(
  "AdsNonODAXToODAXMigrationUtils",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesCreationSectionMode",
    "AdsODAXConversionEventsUtils",
    "AdsODAXUtils",
    "AdsPECreationMode",
    "AdsPromotedObjectTypes",
    "SignalsHomeStandardEventToCustomEventMap",
    "adsConvertAdObjectRecordToPlainJS",
    "adsDuplicationHasMixedObjectivesUtil",
    "emptyArray",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (d = r("immutable")).Map(
        ((e = {}),
        (e[(m = r("AdsAPIObjectives")).CONVERSIONS] = [
          m.OUTCOME_ENGAGEMENT,
          m.OUTCOME_LEADS,
          m.OUTCOME_SALES,
        ]),
        (e[m.MESSAGES] = [m.OUTCOME_ENGAGEMENT, m.OUTCOME_LEADS]),
        (e[m.VIDEO_VIEWS] = [m.OUTCOME_AWARENESS, m.OUTCOME_ENGAGEMENT]),
        (e[m.POST_ENGAGEMENT] = [m.OUTCOME_ENGAGEMENT]),
        (e[m.PAGE_LIKES] = [m.OUTCOME_ENGAGEMENT]),
        (e[m.EVENT_RESPONSES] = [m.OUTCOME_ENGAGEMENT]),
        (e[m.PRODUCT_CATALOG_SALES] = [m.OUTCOME_SALES]),
        (e[m.REACH] = [m.OUTCOME_AWARENESS]),
        (e[m.BRAND_AWARENESS] = [m.OUTCOME_AWARENESS]),
        (e[m.LEAD_GENERATION] = [m.OUTCOME_LEADS]),
        (e[m.STORE_VISITS] = [m.OUTCOME_AWARENESS]),
        e),
      ),
      g = [(p = r("AdsPromotedObjectTypes")).PIXEL, p.MOBILE_APP],
      h = [p.WEB_AND_APP, p.WEB_AND_SHOP, p.MESSENGER, p.WHATSAPP, p.DONATION],
      y = d.Map(
        ((c = {}),
        (c[m.CONVERSIONS] = d.Map(
          ((s = {}),
          (s[p.PIXEL] = [
            m.OUTCOME_ENGAGEMENT,
            m.OUTCOME_LEADS,
            m.OUTCOME_SALES,
          ]),
          (s[p.MOBILE_APP] = [
            m.OUTCOME_ENGAGEMENT,
            m.OUTCOME_LEADS,
            m.OUTCOME_SALES,
          ]),
          (s[p.WEB_AND_APP] = [m.OUTCOME_SALES]),
          (s[p.WEB_AND_SHOP] = [m.OUTCOME_SALES]),
          (s[p.MESSENGER] = [m.OUTCOME_SALES]),
          (s[p.WHATSAPP] = [m.OUTCOME_SALES]),
          (s[p.DONATION] = [m.OUTCOME_SALES]),
          s),
        )),
        (c[m.MESSAGES] = d.Map(
          ((u = {}),
          (u[p.MESSENGER] = [m.OUTCOME_ENGAGEMENT, m.OUTCOME_LEADS]),
          (u[p.WHATSAPP] = [m.OUTCOME_ENGAGEMENT]),
          (u[p.INSTAGRAM] = [m.OUTCOME_ENGAGEMENT]),
          u),
        )),
        c),
      ),
      C = [(_ = r("AdsAPIOptimizationGoals")).LEAD_GENERATION],
      b = [_.CONVERSATIONS, _.LINK_CLICKS, _.MESSAGING_PURCHASE_CONVERSION],
      v = Array.from(
        o(
          "SignalsHomeStandardEventToCustomEventMap",
        ).STANDARD_EVENT_TO_CUSTOM_EVENT.keys(),
      ),
      S = function (t) {
        return v.find(function (e) {
          return (
            o(
              "SignalsHomeStandardEventToCustomEventMap",
            ).STANDARD_EVENT_TO_CUSTOM_EVENT.get(e) === t
          );
        });
      };
    function R(e, t, n, a, i) {
      var l,
        s = (l = y.get(e)) == null ? void 0 : l.get(t);
      if (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").PIXEL
      ) {
        if (a === r("AdsAPIOptimizationGoals").VALUE)
          s = [r("AdsAPIObjectives").OUTCOME_SALES];
        else if (
          n != null &&
          o(
            "AdsODAXConversionEventsUtils",
          ).CONVERSION_EVENT_TO_OUTCOMES_MAP.get(n) != null
        ) {
          var u,
            c = o(
              "AdsODAXConversionEventsUtils",
            ).CONVERSION_EVENT_TO_OUTCOMES_MAP.get(n);
          s =
            (u = s) == null
              ? void 0
              : u.filter(function (e) {
                  return c != null && c.includes(e);
                });
        }
      }
      if (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP &&
        n != null
      ) {
        var d = S(n);
        if (d != null) {
          var m,
            p = o("AdsODAXConversionEventsUtils").APP_EVENT_TO_OUTCOMES_MAP.get(
              d,
            );
          s =
            (m = s) == null
              ? void 0
              : m.filter(function (e) {
                  return p != null && p.includes(e);
                });
        }
      }
      if (
        e === r("AdsAPIObjectives").MESSAGES &&
        t === r("AdsPromotedObjectTypes").MESSENGER &&
        a != null &&
        (C.includes(a) || b.includes(a))
      ) {
        var _,
          g = C.includes(a)
            ? [r("AdsAPIObjectives").OUTCOME_LEADS]
            : [r("AdsAPIObjectives").OUTCOME_ENGAGEMENT];
        s =
          (_ = s) == null
            ? void 0
            : _.filter(function (e) {
                return g.includes(e);
              });
      }
      switch (e) {
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").EVENT_RESPONSES:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").STORE_VISITS:
          s = f.get(e);
      }
      return s != null ? s : r("emptyArray");
    }
    var L = {
      compatibleODAXObjectives: r("emptyArray"),
      compatibleODAXObjectiveMap: d.Map(),
    };
    function E(e, t, n, a, i) {
      if (
        (i === void 0 && (i = !0),
        t !== r("AdsPECreationMode").DuplicateCampaignGroups ||
          n == null ||
          n.length < 1)
      )
        return L;
      var l = n.map(function (e) {
        return e.objective;
      });
      if (
        !l.every(function (e) {
          return e === l[0];
        })
      )
        return L;
      if ((a == null ? void 0 : a.length) === 0) {
        var s = l[0],
          u = (s && f.get(s)) || r("emptyArray");
        return babelHelpers.extends({}, L, { compatibleODAXObjectives: u });
      }
      var c = n.length === 1,
        d = new Map(
          n.map(function (e) {
            return [e.id, e];
          }),
        ),
        m = r("emptyArray"),
        p = r("immutable").Map(
          a == null
            ? void 0
            : a.map(function (t) {
                var n,
                  a,
                  i,
                  l =
                    (n =
                      (a = d.get(t.campaign_id)) == null
                        ? void 0
                        : a.objective) != null
                      ? n
                      : r("AdsAPIObjectives").NONE,
                  s = o(
                    "AdsAPICampaignRecordUtilsShared",
                  ).getPromotedObjectType(e, l, t);
                return [
                  t.id,
                  R(
                    l,
                    s,
                    (i = t.promoted_object) == null
                      ? void 0
                      : i.custom_event_type,
                    t.optimization_goal,
                    e,
                  ),
                ];
              }),
        ),
        _ = l[0],
        y =
          a == null
            ? void 0
            : a.map(function (t) {
                return o(
                  "AdsAPICampaignRecordUtilsShared",
                ).getPromotedObjectType(e, _, t);
              }),
        C = _ === r("AdsAPIObjectives").CONVERSIONS,
        b =
          y != null &&
          y.every(function (e) {
            return g.includes(e);
          }),
        v =
          y != null &&
          y.some(function (e) {
            return h.includes(e);
          });
      return (
        Array.from(p.values()).forEach(function (e, t) {
          c && C
            ? v && i
              ? (m = [r("AdsAPIObjectives").OUTCOME_SALES])
              : b && i
                ? (m = m.concat(e))
                : (t === 0 && (m = e),
                  (m = m.filter(function (t) {
                    return e.includes(t);
                  })))
            : (t === 0 && (m = e),
              e.toString() !== m.toString() && (m = r("emptyArray")));
        }),
        (m = m.filter(function (e, t, n) {
          return n.indexOf(e) === t;
        })),
        { compatibleODAXObjectives: m, compatibleODAXObjectiveMap: p }
      );
    }
    function k(e, t, n, a) {
      if (
        t !== r("AdsPECreationMode").DuplicateCampaigns ||
        n == null ||
        a == null
      )
        return [];
      var i = n[0];
      if (
        !n.every(function (e) {
          return e === i;
        })
      )
        return [];
      var l = a
        .map(function (t) {
          var n;
          return R(
            i,
            o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(e, i, t),
            (n = t.promoted_object) == null ? void 0 : n.custom_event_type,
            t.optimization_goal,
            e,
          );
        })
        .filter(Boolean);
      if (l.length === 0) return [];
      var s = l[0];
      return (
        l.forEach(function (e) {
          s = s.filter(function (t) {
            return e.includes(t);
          });
        }),
        s
      );
    }
    function I(e, t, n, a, i) {
      if (
        t !== r("AdsPECreationMode").DuplicateAdgroups ||
        n == null ||
        a == null ||
        i == null
      )
        return [];
      var l = n.map(function (e) {
          return e.objective;
        }),
        s = l[0];
      if (
        !l.every(function (e) {
          return e === s;
        })
      )
        return [];
      var u = a.map(function (t) {
          return o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
            e,
            s,
            r("adsConvertAdObjectRecordToPlainJS")(t),
          );
        }),
        c = u[0];
      if (
        !u.every(function (e) {
          return e === c;
        })
      )
        return [];
      var d = a
        .map(function (e) {
          var t;
          return R(
            s,
            c,
            (t = e.promoted_object) == null ? void 0 : t.custom_event_type,
            e.optimization_goal,
          );
        })
        .filter(Boolean);
      if (d.length === 0) return [];
      var m = d[0];
      return (
        d.forEach(function (e) {
          m = m.filter(function (t) {
            return e.includes(t);
          });
        }),
        m
      );
    }
    function T(e, t, n, o, a, i) {
      if (!t) return [];
      switch (t) {
        case r("AdsPECreationMode").DuplicateCampaignGroups: {
          var l = E(e, t, o, a),
            s = l.compatibleODAXObjectives;
          return s;
        }
        case r("AdsPECreationMode").DuplicateCampaigns:
          return k(e, t, n, a);
        case r("AdsPECreationMode").DuplicateAdgroups:
          return I(e, t, o, a, i);
        default:
          return [];
      }
    }
    function D(e, t, n, o, a, i, l) {
      if (t == null) return !1;
      var s = T(e, t, o, a, i, l);
      switch (t) {
        case r("AdsPECreationMode").DuplicateCampaignGroups:
          return s.length > 0;
        case r("AdsPECreationMode").DuplicateCampaigns:
        case r("AdsPECreationMode").DuplicateAdgroups:
          return (
            s.length > 0 && n === r("AdsInterfacesCreationSectionMode").NEW
          );
        default:
          return !1;
      }
    }
    function x(e, t, n) {
      var a =
        n != null &&
        e.some(function (e) {
          return e === n;
        });
      if (a) return { targetObjective: n, isCompatibleTargetObjective: a };
      if (n != null && o("AdsODAXUtils").isODAXSpecificObjective(n)) {
        var i = r("adsDuplicationHasMixedObjectivesUtil")(t),
          l = t[0];
        return !i && l !== n
          ? { targetObjective: n, isCompatibleTargetObjective: a }
          : null;
      }
      return null;
    }
    ((l.EXISTING_OBJECTIVE_TO_OUTCOMES_MAP_BASE = f),
      (l.EXISTING_OBJECTIVE_TO_OUTCOMES_MAP = y),
      (l.LEADS_MESSENGER_OPTIMIZATION_GOALS = C),
      (l.ENGAGEMENT_MESSENGER_OPTIMIZATION_GOALS = b),
      (l.getAppEventFromCustomEvent = S),
      (l.getODAXObjectives = R),
      (l.getODAXMigrationCompatibleObjectivesForCampaignGroups = E),
      (l.getODAXMigrationCompatibleObjectivesForCampaigns = k),
      (l.getODAXMigrationCompatibleObjectivesForAdgroups = I),
      (l.getODAXMigrationCompatibleObjectivesForCreationMode = T),
      (l.isODAXMigrationIntoNewCampaignGroupEnabled = D),
      (l.getCampaignODAXMigrationData = x));
  },
  98,
);
