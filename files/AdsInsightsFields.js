__d(
  "AdsInsightsFields",
  [
    "invariant",
    "AdsGoalUtil",
    "AdsInsightsActionFieldTypes",
    "AdsInsightsActionGroups",
    "AdsInsightsActionTypeAttributionWindiow",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBreakdown",
    "AdsInsightsColumn",
    "AdsInsightsField",
    "AdsInsightsFieldConfigReader",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFieldUtil",
    "AdsInsightsFormatters",
    "AdsInsightsMetricAvailableLevelsNotes",
    "AdsInsightsMetricBetaBadgeConfig",
    "AdsInsightsMetricNames",
    "AdsInsightsMetricNoteTitles",
    "AdsInsightsMetricNotes",
    "AdsInsightsRelevanceScoreSubfields",
    "AdsInsightsResultUtil",
    "AdsInsightsShortSummaryLabels",
    "AdsInsightsUnit",
    "AdsMgmtCustomMetricsStringOperations",
    "CPASAdsMgmtUtils",
    "PenguinConfig",
    "StrSet",
    "adsGetInsightsMetricDefinition",
    "filterNulls",
    "flatMapArray",
    "getObjectValues",
    "mapObject",
    "memoize",
    "memoizeStringOnly",
    "memoizeWithArgs",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["cutoffTime"],
      u,
      c,
      d = c || (c = o("react")),
      m = "custom_derived_metrics",
      p = " ",
      _ = ["deal_start", "deal_end", "impressions_goal", "budget_goal"],
      f = new (r("StrSet"))([])
        .addAll(r("getObjectValues")(r("AdsInsightsBreakdown")))
        .addAll(r("getObjectValues")(r("AdsInsightsActionGroups")))
        .addAll(_);
    function g(e) {
      var t = o("AdsInsightsFieldDescriptor").get(e),
        n = t.actionFieldType,
        a = t.relevanceScoreSubfield,
        i = t.simpleField,
        l = t.storeVisitsSubfield;
      return n
        ? [n]
        : a
          ? [r("AdsInsightsField").RELEVANCE_SCORE]
          : l != null
            ? [r("AdsInsightsField").STORE_VISITS]
            : i && !f.contains(i)
              ? [i]
              : [];
    }
    function h() {
      var e = H()
        .concat(o("AdsInsightsActionFieldTypes").getIDs())
        .filter(function (e) {
          return !f.contains(e);
        });
      return new (r("StrSet"))(e).toArray();
    }
    function y(e, t) {
      var n = t ? r("AdsInsightsShortSummaryLabels")[t] : null;
      switch (e) {
        case ne("unique_actions", "onsite_conversion.messaging_first_reply"):
        case ne(
          "unique_actions",
          "onsite_conversion.total_messaging_connection",
        ):
        case r("AdsInsightsField")
          .ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION:
          return r("AdsInsightsShortSummaryLabels").PEOPLE;
        default:
          return n;
      }
    }
    var C = {},
      b = o("AdsInsightsAttributionWindows").getInline(),
      v = new Set(
        r("AdsInsightsActionTypeAttributionWindiow").INLINE_AND_NON_INLINE,
      ),
      S = new Map([
        [
          r("AdsInsightsField").RESULTS,
          r("AdsInsightsField").DDA_COUNTBY_CONVS,
        ],
        [
          r("AdsInsightsField").COST_PER_RESULT,
          r("AdsInsightsField").COST_PER_DDA_COUNTBY_CONVS,
        ],
      ]),
      R = new Map(
        Array.from(S.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return [n, t];
        }),
      ),
      L = "action_type";
    function E(t) {
      var n = o("AdsInsightsFieldDescriptor").get(t),
        a = n.actionFieldType,
        i = n.actionType,
        l = n.conversionID,
        u = n.customEventName,
        c = n.customMetricID;
      if (l) return k(t, n);
      if (u) {
        var d,
          m,
          _ = ne((m = r("nullthrows"))(a), m(i));
        return babelHelpers.extends({}, P(ne(m(a), "subscribe_website")), {
          description: void 0,
          label: o("AdsInsightsFieldUtil").getCustomEventFieldLabel(
            u,
            m(a),
            null,
            i,
          ),
          id: _,
          primaryField: _,
          fields: ((d = {}), (d[_] = _), d),
        });
      }
      if (c) {
        var f = n.actionFieldType;
        return babelHelpers.extends({}, P(r("nullthrows")(f)), {
          shortSummaryLabel: p,
          description: void 0,
          label: void 0,
          id: t,
        });
      }
      var g = O(t),
        h = o("AdsInsightsFieldConfigReader").getFieldConfig(g);
      h || s(0, 326, g);
      var C = h.cutoffTime,
        b = babelHelpers.objectWithoutPropertiesLoose(h, e),
        v = {
          availabilityNote: r("AdsInsightsMetricAvailableLevelsNotes")[g],
          description: r("adsGetInsightsMetricDefinition")(g),
          label: r("AdsInsightsMetricNames")[g],
          shortSummaryLabel: y(b.id, b.shortSummaryLabel),
          note: r("AdsInsightsMetricNotes")[g],
          noteTitle: r("AdsInsightsMetricNoteTitles")[g],
        },
        S = r("AdsInsightsMetricBetaBadgeConfig").fieldToShowBetaBadge[g];
      return babelHelpers.extends({}, b, v, {
        id: t,
        cutoffTime: C && r("PenguinConfig")[C],
        beta: S !== void 0 ? S : b.beta,
      });
    }
    function k(e, t) {
      var n = t.actionFieldType,
        a = t.actionType;
      (a &&
        (a.startsWith("app_custom_event.custom") ||
          a.startsWith("offsite_conversion.custom") ||
          a.startsWith("offline_conversion.custom"))) ||
        s(0, 327, a);
      var i = o("AdsGoalUtil").mapCustomConversionPrefixToActionType(a);
      return babelHelpers.extends({}, P(ne(r("nullthrows")(n), i)), {
        description: void 0,
        label: void 0,
        id: e,
      });
    }
    function I(e) {
      return (
        e === r("AdsInsightsField").RESULTS ||
        e === r("AdsInsightsField").COST_PER_RESULT
      );
    }
    var T = r("memoizeStringOnly")(g),
      D = r("memoizeWithArgs")(
        function (e, t) {
          t === void 0 && (t = !1);
          var n = new (r("StrSet"))(),
            a = {},
            i = new Set();
          return (
            e.forEach(function (e) {
              var t = o("AdsInsightsFieldDescriptor").get(e),
                l = t.actionFieldType,
                s = t.actionType,
                u = t.attributionWindow;
              (n.addAll(T(e)),
                l &&
                  s &&
                  (Object.prototype.hasOwnProperty.call(a, l) ||
                    (a[l] = new (r("StrSet"))()),
                  a[l].add(s)),
                l || u
                  ? (i.add(
                      u || o("AdsInsightsAttributionWindows").getDefault(),
                    ),
                    v.has(s) && i.add(b))
                  : I(e) &&
                    !u &&
                    i.add(o("AdsInsightsAttributionWindows").getDefault()));
            }),
            t &&
              o("AdsInsightsAttributionWindows")
                .getSkanIDs()
                .forEach(function (e) {
                  return i.add(e);
                }),
            {
              apiFields: n.toArray(),
              actionTypes: (u || (u = r("mapObject")))(a, function (e) {
                return e.toArray();
              }),
              attributionWindows: Array.from(i),
            }
          );
        },
        function (e, t) {
          return (
            t === void 0 && (t = !1),
            e.join(",") + (t ? ",withDDA" : "")
          );
        },
      ),
      x = r("memoize")(function () {
        return r("flatMapArray")(
          o("AdsInsightsActionFieldTypes").getIDs(),
          function (e) {
            return o("AdsInsightsActionFieldTypes")
              .getActionTypes(e)
              .map(function (t) {
                return [e, t];
              });
          },
        );
      }),
      $ = r("memoize")(h),
      P = r("memoizeStringOnly")(function (e) {
        var t = N(e);
        return (t || s(0, 328, e), t);
      });
    function N(e) {
      return ee(e) ? (C[e] || (C[e] = E(e)), C[e]) : null;
    }
    var M = r("memoize")(function () {
      return r("filterNulls")(Array.from(R.keys()));
    });
    function w(e) {
      return S.get(e);
    }
    function A(e) {
      return R.get(e);
    }
    function F(e) {
      var t = 1,
        n = e.split("/"),
        r = n[0],
        o = n[1],
        a = {};
      return (
        r &&
          r.split(",").forEach(function (e) {
            /^\w+/.test(e) ? (a[e] = (a[e] || 0) + 1) : e !== "" && (t *= +e);
          }),
        o &&
          o.split(",").forEach(function (e) {
            /^\w+/.test(e) ? (a[e] = (a[e] || 0) - 1) : e !== "" && (t /= +e);
          }),
        { coeff: t, dims: a }
      );
    }
    function O(e) {
      var t = o("AdsInsightsFieldDescriptor").get(e),
        n = t.actionFieldType,
        r = t.actionType,
        a = t.relevanceScoreSubfield,
        i = t.simpleField,
        l = t.storeVisitsSubfield;
      return (
        i ||
        (a
          ? ce(a)
          : l != null
            ? e
            : n && o("AdsInsightsActionFieldTypes").isResultsType(n)
              ? n
              : ne(n, r))
      );
    }
    function B(e, t) {
      var n = P(e);
      return r("AdsInsightsFormatters").getFormatter(
        babelHelpers.extends({}, n, { currencyCode: t }),
      );
    }
    var W = r("memoize")(function () {
        var e = x();
        return [].concat(
          H(),
          e.map(function (e) {
            var t = e[0],
              n = e[1];
            return ne(t, n);
          }),
          r("flatMapArray")(e, function (e) {
            var t = e[0],
              n = e[1];
            return o("AdsInsightsAttributionWindows")
              .getIDs()
              .map(function (e) {
                return ne(t, n, e);
              });
          }),
        );
      }),
      q = r("memoize")(function () {
        var e;
        return new Set([
          (e = r("AdsInsightsField")).ACCOUNT_CURRENCY,
          e.ACCOUNT_ID,
          e.ADGROUP_ID,
          e.ADGROUP_NAME,
          e.CAMPAIGN_END,
          e.CAMPAIGN_GROUP_END,
          e.CAMPAIGN_GROUP_ID,
          e.CAMPAIGN_GROUP_NAME,
          e.CAMPAIGN_ID,
          e.CAMPAIGN_NAME,
          e.CAMPAIGN_START,
          e.OBJECTIVE,
          e.PERFORMANCE_INDICATOR,
        ]);
      });
    function U(e) {
      var t = N(e);
      return !t || !t.unit ? null : V(t.unit);
    }
    function V(e) {
      var t = F(e),
        n = t.dims;
      return Object.keys(n).find(function (e) {
        return e === "Accounts Center account" && n[e] < 0;
      })
        ? "weightedUniqueAverage"
        : r("getObjectValues")(n).find(function (e) {
              return e < 0;
            }) ||
            !r("getObjectValues")(n).find(function (e) {
              return e > 0;
            })
          ? "weightedAverage"
          : Object.keys(n).find(function (e) {
                return e === "Accounts Center account" && n[e] > 0;
              })
            ? "uniqueSum"
            : "sum";
    }
    var H = r("memoize")(function () {
        return r("getObjectValues")(r("AdsInsightsField"));
      }),
      G = r("memoize")(function () {
        return new Set(r("getObjectValues")(r("AdsInsightsField")));
      }),
      z = new Map([
        [r("AdsInsightsField").CLICKS, r("AdsInsightsUnit").CLICK],
        [
          r("AdsInsightsField").ESTIMATED_AD_RECALLERS,
          r("AdsInsightsUnit").ESTIMATED_AD_RECALL,
        ],
        [
          r("AdsInsightsField").VIDEO_CONTINUOUS_2_SEC_WATCHED_ACTIONS,
          r("AdsInsightsUnit").VIDEO_CONTINUOUS_2_SEC_WATCHED_ACTIONS,
        ],
        [
          r("AdsInsightsField").VIDEO_10_SEC_WATCHED_ACTIONS,
          r("AdsInsightsUnit").VIDEO_10_SEC_WATCHED_ACTIONS,
        ],
        [
          r("AdsInsightsField").VIDEO_6_SEC_WATCHED_ACTIONS,
          r("AdsInsightsUnit").VIDEO_6_SEC_WATCHED_ACTIONS,
        ],
        [
          r("AdsInsightsField").VIDEO_THRUPLAY_WATCHED_ACTIONS,
          r("AdsInsightsUnit").VIDEO_THRUPLAY_WATCHED_ACTIONS,
        ],
        [
          r("AdsInsightsField").PROFILE_VISIT_VIEW,
          r("AdsInsightsUnit").PROFILE_VISIT_VIEW,
        ],
        [
          r("AdsInsightsField").PAGE_VISIT_VIEW,
          r("AdsInsightsUnit").PAGE_VISIT_VIEW,
        ],
        [
          r("AdsInsightsField").TOTAL_PROFILE_VISITS,
          r("AdsInsightsUnit").TOTAL_PROFILE_VISITS,
        ],
        [
          r("AdsInsightsField").PROFILE_AND_PAGE_ENGAGEMENT,
          r("AdsInsightsUnit").PROFILE_AND_PAGE_ENGAGEMENT,
        ],
      ]);
    function j(e, t, n) {
      var a = o("AdsInsightsFieldDescriptor").get(e),
        i = a.actionFieldType,
        l = a.actionType,
        s = a.simpleField;
      if (!n && i === "action_values") return e;
      if (s === r("AdsInsightsField").REACH)
        return t ? r("AdsInsightsUnit").KILO_REACH : r("AdsInsightsUnit").REACH;
      if (s === r("AdsInsightsField").IMPRESSIONS)
        return t
          ? r("AdsInsightsUnit").KILO_IMPRESSION
          : r("AdsInsightsUnit").IMPRESSION;
      var u = z.get(s);
      return u != null ? u : K(e, i, l);
    }
    function K(e, t, n) {
      if (o("CPASAdsMgmtUtils").shouldConvertToCPASActionUnit(t, n))
        return (
          n != null || s(0, 20268),
          o("CPASAdsMgmtUtils").convertToCPASActionUnit(n)
        );
      if (e.startsWith("post_conversion_signal_custom_event_indicator"))
        return e;
      if (t === "promoted_product_set_result_actions" && n)
        return "promoted_product_set_result_" + n;
      if (t === "promoted_product_set_result_action_values" && n)
        return "promoted_product_set_result_" + n;
      if (n) return n;
      if (o("AdsInsightsResultUtil").isMixedUnit(e)) return e;
      s(0, 329, e);
    }
    function Q(e) {
      var t = o("AdsInsightsFieldDescriptor").get(e),
        n = t.actionFieldType,
        r = t.relevanceScoreSubfield,
        a = t.simpleField;
      return n || r ? !0 : a ? G().has(a) && !Z(a) : !1;
    }
    function X(e) {
      return !!o("AdsInsightsFieldDescriptor").get(e).conversionID;
    }
    function Y(e) {
      return !!o("AdsInsightsFieldDescriptor").get(e).customEventName;
    }
    function J(e) {
      return !!o("AdsInsightsFieldDescriptor").get(e).customMetricID;
    }
    function Z(e) {
      return q().has(e);
    }
    var ee = r("memoizeStringOnly")(function (e) {
      var t = o("AdsInsightsFieldDescriptor").get(e),
        n = t.actionFieldType,
        r = t.actionType,
        a = t.attributionWindow,
        i = t.conversionID,
        l = t.customEventName,
        s = t.customMetricID,
        u = t.relevanceScoreSubfield,
        c = t.simpleField,
        d = t.storeVisitsSubfield;
      return c
        ? G().has(c)
        : i
          ? n === "actions" ||
            n === "action_values" ||
            n === "cost_per_action_type"
          : s
            ? !0
            : l
              ? n === "conversions" ||
                n === "cost_per_conversion" ||
                n === "conversion_values"
              : n
                ? a && !o("AdsInsightsAttributionWindows").isValid(a)
                  ? !1
                  : o("AdsInsightsActionFieldTypes").isResultsType(n)
                    ? !0
                    : o("AdsInsightsActionFieldTypes").isValid(n) &&
                      r != null &&
                      o("AdsInsightsActionFieldTypes")
                        .getActionTypes(n)
                        .indexOf(r) !== -1
                : u
                  ? o("AdsInsightsRelevanceScoreSubfields").isValid(u)
                  : d != null;
    });
    function te(e) {
      return e && !o("AdsInsightsAttributionWindows").isDefault(e)
        ? "_" + e
        : "";
    }
    function ne(e, t, n) {
      return e + te(n) + ":" + t;
    }
    function re(e, t) {
      if (o("AdsMgmtCustomMetricsStringOperations").isBasicCMColumnID(e)) {
        var n,
          r =
            (n = o("AdsMgmtCustomMetricsStringOperations").getCMIDFromColumnID(
              e,
            )) != null
              ? n
              : "";
        return m + te(t) + ":" + r;
      }
      return e;
    }
    function oe(e, t) {
      return e + te(t);
    }
    function ae(e, t, n, r) {
      var o = te(r);
      return ne(e + o, n + "." + t);
    }
    function ie(e, t, n, r) {
      var o = te(r);
      return ne(e + o, t + "." + n);
    }
    function le(e, t) {
      var n = te(t);
      return ne("custom_derived_metrics" + n, e);
    }
    function se(e) {
      if (e) {
        var t = o("AdsInsightsFieldDescriptor").get(e),
          n = t.conversionID;
        return n;
      }
    }
    function ue(e) {
      if (e) {
        var t = o("AdsInsightsFieldDescriptor").get(e),
          n = t.customMetricID;
        return n;
      }
    }
    function ce(e) {
      return r("AdsInsightsColumn").RELEVANCE_SCORE + ":" + e;
    }
    function de(e) {
      return [r("AdsInsightsColumn").STORE_VISITS, e].join(":");
    }
    function me(e, t) {
      var n = o("AdsInsightsFieldDescriptor").get(e),
        a = n.actionFieldType,
        i = n.actionType;
      return a ? ne(a, r("nullthrows")(i), t) : e;
    }
    function pe() {
      return "post_reaction";
    }
    function _e(e, t) {
      if (!e) return t || [];
      if (!t) return e || [];
      var n = fe(e),
        r = n
          .map(function (e) {
            return e.value;
          })
          .flat(),
        o = fe(t),
        a = o
          .map(function (e) {
            return e.value;
          })
          .flat(),
        i = Array.from(new Set([].concat(r, a))),
        l = e.filter(function (e) {
          return !n.includes(e);
        }),
        s = t.filter(function (e) {
          return !o.includes(e);
        }),
        u = [].concat(l, s),
        c = null;
      return (
        i.length > 0 &&
          ((c = { field: L, operator: "IN", value: i }), u.push(c)),
        u
      );
    }
    function fe(e) {
      return e.filter(function (e) {
        return e.field === L && e.operator === "IN";
      });
    }
    ((l.ACTION_TYPE_FILTER_FIELD = L),
      (l.buildConfig = E),
      (l.buildCustomConversionConfig = k),
      (l.canSpecialize = I),
      (l.getAPIFields = T),
      (l.getAPIPropsMulti = D),
      (l.getActionParams = x),
      (l.getAllAPIFields = $),
      (l.getConfig = P),
      (l.getConfigOrNull = N),
      (l.getDDAFields = M),
      (l.getDDAFieldForInsightsField = w),
      (l.getInsightsFieldForDDAField = A),
      (l.getDimensions = F),
      (l.getFieldWithDefaultAttributionWindow = O),
      (l.getFormatter = B),
      (l.getIDs = W),
      (l.getMetadataBasedFields = q),
      (l.getReducerOfField = U),
      (l.getReducerOfUnit = V),
      (l.getSimpleFields = H),
      (l.getSimpleFieldsSet = G),
      (l.getUnitOfResultsField = j),
      (l.hasBreakdownData = Q),
      (l.isCustomConversion = X),
      (l.isCustomEvent = Y),
      (l.isCustomMetric = J),
      (l.isMetadataBased = Z),
      (l.isValid = ee),
      (l.getAttributionWindowPrefix = te),
      (l.makeActionID = ne),
      (l.makeCMIDWithAttributionWindow = re),
      (l.makeResultsFieldID = oe),
      (l.makeCustomConversionField = ae),
      (l.makeCustomEventField = ie),
      (l.makeCustomMetricField = le),
      (l.getCustomConversionIDOrNull = se),
      (l.getCustomMetricIDOrNull = ue),
      (l.makeRelevanceScoreID = ce),
      (l.makeStoreVisitsID = de),
      (l.setAttributionWindow = me),
      (l.getPostReactionActionTypeName = pe),
      (l.mergeActionTypeFilters = _e));
  },
  98,
);
