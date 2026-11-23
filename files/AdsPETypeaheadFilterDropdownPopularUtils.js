__d(
  "AdsPETypeaheadFilterDropdownPopularUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsPEFilterFields",
    "AdsPEFilterFieldsImpl",
    "AdsPEFilterLabels",
    "AdsPEPersonalizedControlOptions",
    "AdsPETypeaheadRecentlyUsedFilterSearchableEntry",
    "AdsRoutingGenericFilterUtils",
    "GeoBaseText.react",
    "adsMgmtExcludedFilterTypes",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["campaign.impressions"],
        "GREATER_THAN",
        0,
      ),
      d = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["adset.impressions"],
        "GREATER_THAN",
        0,
      ),
      m = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["ad.impressions"],
        "GREATER_THAN",
        0,
      ),
      p = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").CAMPAIGN_GROUP_DELIVERY_STATUS,
        "IN",
        ["active"],
      ),
      _ = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").CAMPAIGN_GROUP_DELIVERY_STATUS,
        "IN",
        ["deleted"],
      ),
      f = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").CAMPAIGN_DELIVERY_STATUS,
        "IN",
        ["active"],
      ),
      g = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").CAMPAIGN_DELIVERY_STATUS,
        "IN",
        ["deleted"],
      ),
      h = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").ADGROUP_DELIVERY_STATUS,
        "IN",
        ["active"],
      ),
      y = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields").ADGROUP_DELIVERY_STATUS,
        "IN",
        ["deleted"],
      ),
      C = new (r("AdsGenericFilter"))(r("AdsPEFilterFields").OBJECTIVE, "IN", [
        r("AdsAPIObjectives").OUTCOME_SALES,
      ]),
      b = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["ad.reach"],
        "GREATER_THAN",
        0,
      ),
      v = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["adset.reach"],
        "GREATER_THAN",
        0,
      ),
      S = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["campaign.reach"],
        "GREATER_THAN",
        0,
      ),
      R = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["ad.result"],
        "GREATER_THAN",
        0,
      ),
      L = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["adset.result"],
        "GREATER_THAN",
        0,
      ),
      E = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["campaign.result"],
        "GREATER_THAN",
        0,
      ),
      k = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["ad.lifetime_spent"],
        "GREATER_THAN",
        0,
      ),
      I = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["adset.lifetime_spent"],
        "GREATER_THAN",
        0,
      ),
      T = new (r("AdsGenericFilter"))(
        r("AdsPEFilterFields")["campaign.lifetime_spent"],
        "GREATER_THAN",
        0,
      ),
      D = [
        {
          filterUniqueId: "filter_field_SPECIAL_AD_CATEGORIES-STRING_SET",
          label: s._(/*BTDS*/ ""),
        },
      ].concat(
        r("gkx")("13098")
          ? []
          : [
              {
                filterUniqueId: "filter_field_STUDY_NAME-STRING",
                label: s._(/*BTDS*/ ""),
              },
            ],
        [
          {
            filterUniqueId: "filter_field_AD_CREATION_PACKAGE_ID-STRING_SET",
            label: s._(/*BTDS*/ ""),
          },
        ],
      ),
      x = [
        "filter_field_CONVERSION_LOCATION-STRING_SET",
        "filter_field_HAS_PRODUCT_CATALOG_ID-STRING_SET",
        "filter_field_adset.placement.page_types-STRING_SET",
        "filter_field_ADGROUP_CHANGED-DATE_RANGE",
        "filter_field_ATTRIBUTION_SETTING-STRING_SET",
        "filter_field_SPECIAL_AD_CATEGORIES-STRING_SET",
        "filter_field_STUDY_NAME-STRING",
        "filter_field_LEARNING_PHASE_STATUS-STRING_SET",
        "filter_field_SEARCH_BY_LABEL-TOKENIZED_TYPEAHEAD",
      ].concat(
        o(
          "AdsMgmt2026H1ExperimentUtils",
        ).getIsAccountInNORBITBudgetStrategyFilters()
          ? ["filter_field_AD_CREATION_PACKAGE_ID-STRING_SET"]
          : [],
      ),
      $ = function (t) {
        return t.isGroupItem
          ? t.group.key === "audience" || t.group.key === "budget"
            ? !0
            : t.group.key === "recently_changed"
          : x.includes(t.entry.getUniqueID());
      },
      P = function (t) {
        return t.filter(function (e) {
          return !$(e);
        });
      },
      N = function (t) {
        if (t == null) return [];
        var e = t.filter(function (e) {
          return $(e);
        });
        return e;
      },
      M = s._(/*BTDS*/ ""),
      w = function (t, n) {
        var e = [];
        e: {
          if (t === "campaign") {
            (e.push({
              key: "campaign.impressions",
              filter: c,
              label: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "value",
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]),
            }),
              e.push({
                key: "CAMPAIGN_GROUP_DELIVERY_STATUS",
                filter: p,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "Active delivery status with green status icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("active"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("GeoBaseText.react"), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }));
            break e;
          }
          if (t === "ad_set") {
            (e.push({
              key: "adset.impressions",
              filter: d,
              label: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "value",
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]),
            }),
              e.push({
                key: "CAMPAIGN_DELIVERY_STATUS",
                filter: f,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "delivery status with icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("active"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("GeoBaseText.react"), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }));
            break e;
          }
          if (t === "ad") {
            (e.push({
              key: "ad.impressions",
              filter: m,
              label: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "value",
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]),
            }),
              e.push({
                key: "ADGROUP_DELIVERY_STATUS",
                filter: h,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "Active delivery status with green status icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("active"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("GeoBaseText.react"), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }));
            break e;
          }
          break e;
        }
        if (
          (e.push({
            key: "OBJECTIVE",
            filter: C,
            label: s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]),
          }),
          n)
        )
          e: {
            if (t === "campaign") {
              var a;
              (e.push({
                key: "CAMPAIGN_GROUP_DELIVERY_STATUSdeleted",
                filter: _,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "Deleted delivery status with red status icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("deleted"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx((a = r("GeoBaseText.react")), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }),
                e.push({
                  key: "campaign.reach",
                  filter: S,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "campaign.result",
                  filter: E,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "campaign.spend",
                  filter: T,
                  label: s._(/*BTDS*/ "", [
                    s._param("0 dollars in currency", M),
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }));
              break e;
            }
            if (t === "ad_set") {
              var a;
              (e.push({
                key: "CAMPAIGN_DELIVERY_STATUSdeleted",
                filter: g,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "delivery status with icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("deleted"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx((a = r("GeoBaseText.react")), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }),
                e.push({
                  key: "adset.reach",
                  filter: v,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "adset.result",
                  filter: L,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "adset.spend",
                  filter: I,
                  label: s._(/*BTDS*/ "", [
                    s._param("0 dollars in currency", M),
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }));
              break e;
            }
            if (t === "ad") {
              var a;
              (e.push({
                key: "ADGROUP_DELIVERY_STATUSdeleted",
                filter: y,
                label: s._(/*BTDS*/ "", [
                  s._param(
                    "Active delivery status with green status icon",
                    o("AdsPEFilterLabels").getDeliveryStatusV2("deleted"),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx((a = r("GeoBaseText.react")), {
                      color: "placeholder",
                      size: "value",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }),
                e.push({
                  key: "ad.reach",
                  filter: b,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "ad.result",
                  filter: R,
                  label: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
                e.push({
                  key: "ad.spend",
                  filter: k,
                  label: s._(/*BTDS*/ "", [
                    s._param("0 dollars in currency", M),
                    s._implicitParam(
                      "=m2",
                      u.jsx(a, {
                        color: "placeholder",
                        size: "value",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }));
              break e;
            }
            break e;
          }
        return e;
      },
      A = new Map([
        ["campaign", "CAMPAIGN_GROUP_DELIVERY_STATUS"],
        ["ad_set", "CAMPAIGN_DELIVERY_STATUS"],
        ["ad", "ADGROUP_DELIVERY_STATUS"],
      ]),
      F = function (t, n, r) {
        var e;
        if (r == null) return !1;
        var o = (e = A.get(r)) != null ? e : "no_mapping";
        return t.includes(o) && t.includes(n);
      },
      O = function (t, n, r, o) {
        return t.filter(function (e) {
          var t,
            a = F(e.filter.key, "active", o != null ? o : "campaign"),
            i = F(e.filter.key, "deleted", o != null ? o : "campaign"),
            l =
              r == null
                ? void 0
                : r.values.find(function (t) {
                    return t.key === e.filter.key;
                  }),
            s =
              (t = n == null ? void 0 : n.includes(e.filter.key)) != null
                ? t
                : !1;
          if (s) return !1;
          if (Array.isArray(n)) {
            var u =
              n == null
                ? void 0
                : n.find(function (e) {
                    if (e == null) return !1;
                    var t = F(e, "active", o != null ? o : "campaign"),
                      n = F(e, "deleted", o != null ? o : "campaign");
                    return (a && t) || (i && n);
                  });
            if (u != null) return !1;
          }
          return l == null;
        });
      },
      B = 3,
      W = Object.keys(r("AdsPEFilterFields")),
      q = new Map([
        ["campaignGroup", 0],
        ["campaign", 1],
        ["adgroup", 2],
      ]),
      U = new Map([
        ["campaign", 0],
        ["ad_set", 1],
        ["ad", 2],
      ]);
    function V(e) {
      var t = e.split("");
      if (t.length !== 3) return null;
      try {
        return (
          JSON.parse(t[2]),
          o("AdsRoutingGenericFilterUtils").decodeFilter(e)
        );
      } catch (e) {
        return null;
      }
    }
    function H(e, t, n, a) {
      var i = e.getField(),
        l = W.find(function (e) {
          return e === i.name;
        });
      if (
        l == null ||
        n.has(l) ||
        r("AdsGenericFilterFieldConfigUtil").getConfigByFieldOrNull(a, i) ==
          null
      )
        return null;
      try {
        var s = q.get(o("AdsPEFilterFieldsImpl").getFilterFieldAdLevel(l));
        return s != null && s <= t
          ? r("AdsPETypeaheadRecentlyUsedFilterSearchableEntry")
              .create({ fieldsConfig: a, filter: e })
              .getViewLabel("")
          : null;
      } catch (e) {
        return null;
      }
    }
    function G(e, t, n, r, a) {
      var i, l;
      if (e == null) return [];
      var s = e.options,
        u = t != null ? t : "campaign",
        c = (i = U.get(u)) != null ? i : 0,
        d = o("adsMgmtExcludedFilterTypes").getAdsMgmtExcludedFilterTypes(
          u,
          o("adsMgmtExcludedFilterTypes").filterSetHasCreativeDiversityFilter(
            r,
          ),
        ),
        m = new Set(
          r == null
            ? void 0
            : r.values.map(function (e) {
                return e.key;
              }),
        ),
        p =
          (l = s.find(function (e) {
            var t, n;
            return m.has(
              (t = (n = V(e.key)) == null ? void 0 : n.key) != null ? t : "",
            );
          })) == null
            ? void 0
            : l.key,
        _ = o("AdsPEPersonalizedControlOptions").getKeysToOffer(e, p),
        f = _.flatMap(function (e, t) {
          var r,
            o = V(e),
            a = o != null ? H(o, c, d, n) : null;
          return o != null && a != null
            ? [
                {
                  filter: o,
                  key: "personalized_filter_" + t,
                  label: a,
                  rank:
                    (r = s.find(function (t) {
                      return t.key === e;
                    })) == null
                      ? void 0
                      : r.rank,
                },
              ]
            : [];
        });
      return O(f, a, r, u).slice(0, B);
    }
    ((l.filtersWithTooltips = D),
      (l.removeMiscellaneousFilters = P),
      (l.getMiscellaneousFilters = N),
      (l.getPopularFilters = w),
      (l.filterPopularFilters = O),
      (l.getPersonalizedFilters = G));
  },
  226,
);
