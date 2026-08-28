__d(
  "AdsPEStatRangeUIStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsInsightsToggleTimeRangeSelectorPopoverActionFlux",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsMgmt2025H1DatePickerLaunchUtils",
    "AdsNavigationChangeNavigationStateDataActionFlux",
    "AdsPEFluxStatsSetStatRangeActionFlux",
    "AdsPESortInfoDefaults",
    "AdsPEStatRangeUIProviderUtil",
    "AdsPEStatsUtils",
    "AdsReportDatePresetType",
    "DateTime",
    "FluxStore",
    "Timezone",
    "adsPEManageAdsSectionSelector",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["CREATIVES"],
      u;
    function c() {
      if (u != null) return u;
      var e = r("DateTime")
        .now(r("AdsAccountStore").getTimezoneID())
        .toISOString()
        .split("-");
      return ((u = e[e.length - 1]), u);
    }
    function d(e) {
      return e + "T" + c();
    }
    var m = (function (t) {
      function n() {
        var n, a;
        return (
          (a = t.call(this, e || (e = r("AdsDataAtom"))) || this),
          (a.$AdsPEStatRangeUIStore$p_1 =
            (n = o(
              "AdsMgmt2025H1DatePickerLaunchUtils",
            ).getIsAccountInDatePickerImprovementsDateRangeDefault()) != null
              ? n
              : r("AdsPESortInfoDefaults").datePreset),
          (a.$AdsPEStatRangeUIStore$p_2 = null),
          (a.$AdsPEStatRangeUIStore$p_3 = null),
          (a.$AdsPEStatRangeUIStore$p_4 = null),
          (a.$AdsPEStatRangeUIStore$p_5 = !1),
          a
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getState = function () {
          return {
            rangeType: this.$AdsPEStatRangeUIStore$p_1,
            statRange: this.$AdsPEStatRangeUIStore$p_2,
            comparisonTimeRange: this.$AdsPEStatRangeUIStore$p_3,
            comparePreset: this.$AdsPEStatRangeUIStore$p_4,
            showPopover: this.$AdsPEStatRangeUIStore$p_5,
          };
        }),
        (a.getRangeType = function () {
          return this.$AdsPEStatRangeUIStore$p_1 === "lifetime"
            ? "maximum"
            : this.$AdsPEStatRangeUIStore$p_1;
        }),
        (a.getShowPopover = function () {
          return this.$AdsPEStatRangeUIStore$p_5;
        }),
        (a.getStatRangeWithoutAccount = function () {
          return this.$AdsPEStatRangeUIStore$p_2;
        }),
        (a.getStatRangeString = function (t) {
          return (
            this.$AdsPEStatRangeUIStore$p_2 ||
            o("AdsPEStatsUtils").eventToRange(
              { value: this.$AdsPEStatRangeUIStore$p_1 },
              t != null ? t : o("Timezone").UTC,
              r("AdsAccountStore").getCreatedTime(),
            )
          );
        }),
        (a.getComparisonOrNull = function () {
          return this.$AdsPEStatRangeUIStore$p_3;
        }),
        (a.getStatRange = function (t) {
          var e = this.getStatRangeString(t);
          return {
            start: r("DateTime").fromISOString(e.start, t),
            end: r("DateTime").fromISOString(e.end, t),
          };
        }),
        (a.getComparePresetOrNull = function () {
          return this.$AdsPEStatRangeUIStore$p_4;
        }),
        (a.__getActionTypes = function () {
          return [
            o("AdsInsightsToggleTimeRangeSelectorPopoverActionFlux").actionType,
            o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            o("AdsNavigationChangeNavigationStateDataActionFlux").actionType,
            o("AdsPEFluxStatsSetStatRangeActionFlux").actionType,
          ];
        }),
        (a.__getDependencyStores = function () {
          return [r("AdsAccountStore")].concat(
            r("adsPEManageAdsSectionSelector").getStores(),
          );
        }),
        (a.__onDispatch = function (t) {
          var e = t.action;
          this.getDispatcher().waitFor([
            r("AdsAccountStore").getDispatchToken(),
          ]);
          e: {
            var n = e;
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "actionType" in n &&
              n.actionType ===
                o("AdsNavigationChangeNavigationStateDataActionFlux").actionType
            ) {
              (this.getDispatcher().waitFor(
                r("adsPEManageAdsSectionSelector")
                  .getStores()
                  .map(function (e) {
                    return e.getDispatchToken();
                  }),
              ),
                s.includes(r("adsPEManageAdsSectionSelector")()) &&
                  (this.$AdsPEStatRangeUIStore$p_3 ||
                    this.$AdsPEStatRangeUIStore$p_4) &&
                  this.$AdsPEStatRangeUIStore$p_6(
                    this.$AdsPEStatRangeUIStore$p_1,
                    this.$AdsPEStatRangeUIStore$p_2,
                    null,
                    null,
                  ));
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "actionType" in n &&
              n.actionType ===
                o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType &&
              "data" in n
            ) {
              var a = n.data,
                i = a.changedParamKeys,
                l = a.params,
                u = l.date,
                c = l.comparison_date;
              if (
                i.date &&
                u != null &&
                (typeof u == "object" || r("justknobx")._("3565"))
              ) {
                var m = u.rangeType;
                this.$AdsPEStatRangeUIStore$p_6(
                  Object.values(r("AdsReportDatePresetType")).includes(
                    u.rangeType,
                  )
                    ? m
                    : null,
                  u.statRange && {
                    start: d(u.statRange.start),
                    end: d(u.statRange.end),
                  },
                  c &&
                    c.statRange && {
                      start: d(c.statRange.start),
                      end: d(c.statRange.end),
                    },
                  c && c.rangeType,
                );
              }
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "actionType" in n &&
              n.actionType ===
                o("AdsPEFluxStatsSetStatRangeActionFlux").actionType
            ) {
              var p = n,
                _ = p.comparePreset,
                f = p.comparisonTimeRange,
                g = p.rangeType,
                h = p.statRange;
              this.$AdsPEStatRangeUIStore$p_6(g, h, f, _);
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "actionType" in n &&
              n.actionType ===
                o("AdsInsightsToggleTimeRangeSelectorPopoverActionFlux")
                  .actionType &&
              "shown" in n
            ) {
              var y = n.shown;
              ((this.$AdsPEStatRangeUIStore$p_5 = y), this.__emitChange());
              break e;
            }
            break e;
          }
        }),
        (a.$AdsPEStatRangeUIStore$p_6 = function (t, n, a, i) {
          if (
            ((this.$AdsPEStatRangeUIStore$p_1 = o(
              "AdsPEStatRangeUIProviderUtil",
            ).validateOrConvertRangeType(t)),
            (this.$AdsPEStatRangeUIStore$p_3 = a),
            (this.$AdsPEStatRangeUIStore$p_4 = i),
            r("isTruthy")(t))
          ) {
            var e = r("AdsAccountStore").getSelectedAccount(),
              l = r("AdsAccountStore").getCreatedTime();
            e.hasValueWithoutError() &&
              (this.$AdsPEStatRangeUIStore$p_2 = o(
                "AdsPEStatsUtils",
              ).eventToRange(
                { value: t },
                r("AdsAccountStore").getTimezoneID(),
                l,
              ));
          } else this.$AdsPEStatRangeUIStore$p_2 = n;
          this.__emitChange();
        }),
        n
      );
    })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  98,
);
