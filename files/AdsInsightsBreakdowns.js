__d(
  "AdsInsightsBreakdowns",
  [
    "fbt",
    "invariant",
    "AdsInsightsActionFieldTypes",
    "AdsInsightsAttributionSettingBreakdownUtils",
    "AdsInsightsBreakdown",
    "AdsInsightsBreakdownBaseConfig",
    "AdsInsightsBreakdownEntries",
    "AdsInsightsBreakdownsSpec",
    "AdsInsightsDemographicsBreakdown",
    "AdsInsightsField",
    "AdsInsightsGeographyBreakdown",
    "AdsInsightsMetaBreakdowns",
    "createObjectFrom",
    "getObjectValues",
    "isAdsInsightsCreativeBreakdown",
    "justknobx",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m = (e = r("createObjectFrom"))([
        "action_destination",
        "action_device",
        "action_canvas_component_name",
        "action_carousel_card_name",
        "action_event_channel",
        "action_reaction",
        "action_video_sound",
        "action_video_type",
        "action_brand",
        "action_category",
        "action_converted_product_id",
        "interactive_component_sticker_id",
        "interactive_component_sticker_response",
        "action_brand_name",
        "action_category_name",
        "conversion_destination",
        "signal_source_bucket",
        "is_business_ai_assisted",
        "promoted_product_set_result",
      ]),
      p = e((c = r("getObjectValues"))(r("AdsInsightsBreakdown"))),
      _ = e(c(r("AdsInsightsDemographicsBreakdown"))),
      f = e(c(r("AdsInsightsGeographyBreakdown"))),
      g = e(c(r("AdsInsightsMetaBreakdowns"))),
      h = e(c(o("AdsInsightsBreakdownsSpec").ObjectBreakdowns)),
      y = [1, 7, 14],
      C = {};
    C.monthly = null;
    var b = /^days_(\d+)$/,
      v = [
        [
          function (e) {
            return Object.prototype.hasOwnProperty.call(C, e);
          },
          function (e) {
            return { timeIncrement: e };
          },
        ],
        [
          function (e) {
            return Object.prototype.hasOwnProperty.call(m, e);
          },
          function (e) {
            return { action: e };
          },
        ],
        [
          r("isAdsInsightsCreativeBreakdown"),
          function (e) {
            return { creative: e };
          },
        ],
        [
          function (e) {
            return Object.prototype.hasOwnProperty.call(p, e);
          },
          function (e) {
            return { impression: e };
          },
        ],
        [
          function (e) {
            return Object.prototype.hasOwnProperty.call(g, e);
          },
          function (e) {
            return { metaBreakdown: e };
          },
        ],
        [
          function (e) {
            return Object.prototype.hasOwnProperty.call(h, e);
          },
          function (e) {
            return { object: e };
          },
        ],
        [
          function (e) {
            return (
              r("justknobx")._("5021") && $.isAttributionSettingBreakdown(e)
            );
          },
          function () {
            return {
              attributionSettingBreakdown: o(
                "AdsInsightsAttributionSettingBreakdownUtils",
              ).ATTRIBUTION_SETTING_BREAKDOWN_KEY,
            };
          },
        ],
        [
          function (e) {
            var t = b.exec(e);
            return t != null && $.isSupportedDayIncrement(+t[1]);
          },
          function (e) {
            var t = b.exec(e);
            return (t != null || u(0, 162877), { timeInDays: +t[1] });
          },
        ],
      ],
      S = function (t) {
        for (var e of v) {
          var n = e[0],
            r = e[1];
          if (n(t)) return r(t);
        }
        return null;
      },
      R = function (t) {
        var e = S(t);
        return (e || u(0, 1121, t), e);
      },
      L = function (t) {
        var e = $.getDescriptor(t),
          n = e.action,
          a = e.attributionSettingBreakdown,
          i = e.creative,
          l = e.impression,
          s = e.metaBreakdown,
          c = e.object,
          d = e.timeIncrement,
          m = e.timeInDays;
        if (m || d)
          return [
            r("AdsInsightsField").DATE_START,
            r("AdsInsightsField").DATE_STOP,
          ];
        if (n) return o("AdsInsightsActionFieldTypes").getIDs();
        if (l) return [t];
        if (s) return [s];
        if (i) return [i];
        if (c) return [];
        if (a) return [r("AdsInsightsField").ATTRIBUTION_SETTING];
        u(0, 1121, t);
      },
      E = function (t) {
        var e = $.getDescriptor(t),
          n = e.action,
          a = e.attributionSettingBreakdown,
          i = e.creative,
          l = e.impression,
          s = e.metaBreakdown,
          c = e.object,
          d = e.timeIncrement,
          m = e.timeInDays;
        if (m || d)
          return [
            r("AdsInsightsField").DATE_START,
            r("AdsInsightsField").DATE_STOP,
          ];
        if (t === "action_carousel_card_name")
          return ["action_carousel_card_id", "action_carousel_card_name"];
        if (t === "action_destination")
          return ["action_destination", "action_target_id"];
        if (n || l || s) return [t];
        if (i) return [i];
        if (c) return [];
        if (a)
          return [
            o("AdsInsightsAttributionSettingBreakdownUtils")
              .ATTRIBUTION_SETTING_BREAKDOWN_KEY,
          ];
        u(0, 1121, t);
      },
      k = function (t) {
        var e = $.getDescriptor(t),
          n = e.action,
          a = e.attributionSettingBreakdown,
          i = e.creative,
          l = e.impression,
          s = e.metaBreakdown,
          c = e.object,
          d = e.timeIncrement,
          m = e.timeInDays;
        if (m || d) return r("AdsInsightsField").DATE_START;
        if (t === "action_carousel_card_name") return "action_carousel_card_id";
        if (t === "action_destination") return "action_target_id";
        if (n || l || s) return t;
        if (i) return i;
        if (c) u(0, 1122, t);
        else {
          if (r("justknobx")._("5021") && a)
            return o("AdsInsightsAttributionSettingBreakdownUtils")
              .ATTRIBUTION_SETTING_BREAKDOWN_KEY;
          u(0, 1121, t);
        }
      },
      I = function (t) {
        return $.getKeyField(t);
      },
      T = function (t, n) {
        var e = t.findIndex(n);
        return e === -1 ? null : t.splice(e, 1)[0];
      },
      D = function (t) {
        var e = null,
          n = null,
          r,
          o = t.findIndex(function (e) {
            return e.valueOf() === "country".valueOf();
          }),
          a = t.findIndex(function (e) {
            return e.valueOf() === "user_segment_key".valueOf();
          });
        return (
          o !== -1 && a !== -1
            ? ((e = t.splice(o, 1)),
              e.push(t.splice(a, 1)[0]),
              (r = t.findIndex($.isDemographicsBreakdown)),
              (n = r === -1 ? null : t.splice(r, 1)),
              (r = t.findIndex($.isDemographicsBreakdown)),
              n != null && r !== -1 && n.push(t.splice(r, 1)[0]))
            : ((r = t.findIndex($.isDemographicsBreakdown)),
              (n = r === -1 ? null : t.splice(r, 1)),
              (r = t.findIndex($.isDemographicsBreakdown)),
              n != null && r !== -1 && n.push(t.splice(r, 1)[0]),
              (r = t.findIndex($.isGeographyBreakdown)),
              (e = r === -1 ? null : t.splice(r, 1)),
              (r = t.findIndex($.isGeographyBreakdown)),
              e != null && r !== -1 && e.push(t.splice(r, 1)[0])),
          { demographicsBreakdown: n, geographyBreakdown: e }
        );
      },
      x = function (t, n) {
        var e = {},
          r = o("AdsInsightsBreakdownEntries").getEntriesByType();
        return (
          o("AdsInsightsBreakdownEntries")
            .getTypes()
            .forEach(function (a) {
              r[a].forEach(function (r) {
                var a = o("AdsInsightsBreakdownEntries").getConfig(r);
                (a.hiddenFor &&
                  a.hiddenFor.length &&
                  a.hiddenFor.indexOf(t) !== -1 &&
                  (e[r] = !0),
                  a.isAsset && !n && (e[r] = !0));
              });
            }),
          e
        );
      },
      $ = {
        getAPIFields: (d = r("memoizeStringOnly"))(L),
        getConfig: function (t) {
          var e = o("AdsInsightsBreakdownBaseConfig").getConfigsByID(),
            n = e[t];
          return (n || u(0, 1123, t), n);
        },
        getDescriptor: d(R),
        getDescriptorOrNull: S,
        getFields: d(E),
        getKeyField: d(k),
        getRowKey: function (t, n) {
          var e = n[$.getKeyField(t)];
          return $.isObjectKey(t) ? (e == null ? void 0 : e.id) : e;
        },
        getSortField: d(I),
        getTimeBreakdowns: function (t) {
          var e = t[0];
          return e && $.isTimeBreakdown(e) ? [e] : [];
        },
        getUnsupportedBreakdowns: function (t) {
          var e = {};
          return (
            o("AdsInsightsBreakdownEntries")
              .getTypes()
              .forEach(function (n) {
                var r = t[n],
                  a = o("AdsInsightsBreakdownEntries").getConfig(r);
                a.unsupported &&
                  a.unsupported.forEach(function (t) {
                    var n = o("AdsInsightsBreakdownEntries").getConfig(t);
                    e[t] = s._(
                      /*BTDS*/ "{breakdown_name} cannot be combined with {conflict_breakdown}.",
                      [
                        s._param("breakdown_name", a.name),
                        s._param("conflict_breakdown", n.name),
                      ],
                    );
                  });
              }),
            e
          );
        },
        getTypes: function () {
          return ["action", "demographics", "geography", "impression", "time"];
        },
        getHiddenBreakdowns: function (t, n) {
          return x(t, n);
        },
        hiddenBreakdownsSelected: function (t, n) {
          return Object.keys(n).some(function (e) {
            return t[n[e]];
          });
        },
        groupByType: function (t) {
          var e = [].concat(t),
            n = T(e, $.isTimeBreakdown),
            o = T(e, $.isActionBreakdown),
            a = T(e, $.isMetaBreakdown),
            i = D(e),
            l = i.demographicsBreakdown,
            s = i.geographyBreakdown,
            c = T(e, r("isAdsInsightsCreativeBreakdown")),
            d = T(e, $.isAttributionSettingBreakdown);
          e = e.filter(function (e) {
            return !$.isObjectBreakdown(e);
          });
          var m = e;
          return (
            m.every($.isImpressionBreakdown) || u(0, 1124, t),
            {
              action: o,
              demographics: l,
              geography: s,
              impression: m,
              time: n,
              meta: a,
              creative: c,
              attribution_setting_breakdowns: d,
            }
          );
        },
        splitActionBreakdown: function (t) {
          var e = $.groupByType(t),
            n = $.joinByType({
              action: void 0,
              demographics: e.demographics,
              geography: e.geography,
              impression: e.impression,
              meta: e.meta,
              time: e.time,
              creative: e.creative,
              attribution_setting_breakdowns: e.attribution_setting_breakdowns,
            });
          return { actionBreakdown: e.action, nonActionBreakdowns: n };
        },
        isObjectKey: function (t) {
          var e = o("AdsInsightsBreakdownEntries").getConfigOrNull(t);
          return !!e && !!e.isAsset;
        },
        joinByType: function (t) {
          var e = [];
          return (
            t.time && e.push(t.time),
            t.demographics && e.push.apply(e, t.demographics),
            t.geography && e.push.apply(e, t.geography),
            e.push.apply(e, t.impression),
            t.action && e.push(t.action),
            t.meta && e.push(t.meta),
            t.attribution_setting_breakdowns &&
              e.push(t.attribution_setting_breakdowns),
            e
          );
        },
        inPeriodsOf: function (t) {
          return "days_" + t;
        },
        isSupportedDayIncrement: function (t) {
          return y.indexOf(t) !== -1;
        },
        isActionBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(m, t);
        },
        isObjectBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(h, t);
        },
        isAggregateActionBreakdownValue: function (t, n) {
          switch (t) {
            case "action_device":
              return n === "not_applicable";
            case "action_destination":
              return n === "no_breakdown" || n === "total";
            case "action_video_type":
              return n === "no_breakdown" || n === "total";
            default:
              return !1;
          }
        },
        isDemographicsBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(_, t);
        },
        isGeographyBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(f, t);
        },
        isImpressionBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(p, t);
        },
        isTimeBreakdown: function (t) {
          if (Object.prototype.hasOwnProperty.call(C, t)) return !0;
          var e = b.exec(t);
          return e ? $.isSupportedDayIncrement(+e[1]) : !1;
        },
        isMetaBreakdown: function (t) {
          return Object.prototype.hasOwnProperty.call(g, t);
        },
        isAttributionSettingBreakdown: function (t) {
          return Object.values(
            o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns,
          ).includes(t);
        },
        isValid: function (t) {
          var e = $.getDescriptorOrNull(t);
          return e != null;
        },
        shouldRenderAsLink: function (t) {
          var e = o("AdsInsightsBreakdownEntries").getConfigOrNull(t);
          return !!e && !!e.shouldRenderAsLink;
        },
        shouldRenderWithThumbnail: function (t) {
          var e = o("AdsInsightsBreakdownEntries").getConfigOrNull(t);
          return !!e && !!e.hasThumbnail;
        },
      },
      P = $;
    l.default = P;
  },
  226,
);
