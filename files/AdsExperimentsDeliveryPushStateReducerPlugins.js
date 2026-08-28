__d(
  "AdsExperimentsDeliveryPushStateReducerPlugins",
  [
    "AdsAccountStore",
    "AdsExperiments2026CreativeTestQEUtils",
    "AdsExperimentsCreativeDeliveryPushPublishCompletedAction",
    "AdsExperimentsFunnelLogger",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPEDeliveryPushInsightUtil",
    "JSResource",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = new Set(),
      c = 0;
    function d(e) {
      var t,
        n,
        r = e.adgroup,
        o = e.existingStudyIDForAdgroup;
      if (r.creative_delivery_push == null) return !0;
      var a =
        (t = (n = r.include_in_ad_study_id) != null ? n : o) != null ? t : null;
      return a != null ? !0 : u.has(r.id) ? !1 : (u.add(r.id), !0);
    }
    function m(e, t, n, r) {
      var o = new Map(e.campaignGroupIDsWithMutatedAdgroupIDs),
        a = new Map(e.campaignGroupIDsWithPublishedAdgroupIDs),
        i = new Map(e.campaignIDsWithMutatedAdgroupIDs),
        l = new Map(e.adgroupIDToPublishedStudyData);
      return (
        t.forEach(function (e, t) {
          l.set(t, e);
        }),
        n.forEach(function (e, t) {
          var n,
            r,
            i = new Set((n = o.get(t)) != null ? n : new Set());
          for (var l of e) i.delete(l);
          i.size === 0 ? o.delete(t) : o.set(t, i);
          var s = (r = a.get(t)) != null ? r : new Set(),
            u = new Set(s);
          for (var c of e) u.add(c);
          a.set(t, u);
        }),
        r.forEach(function (e, t) {
          var n,
            r = new Set((n = i.get(t)) != null ? n : new Set());
          for (var o of e) r.delete(o);
          r.size === 0 ? i.delete(t) : i.set(t, r);
        }),
        babelHelpers.extends({}, e, {
          adgroupIDToPublishedStudyData: l,
          campaignGroupIDsWithMutatedAdgroupIDs: o,
          campaignGroupIDsWithPublishedAdgroupIDs: a,
          campaignIDsWithMutatedAdgroupIDs: i,
        })
      );
    }
    function p(t, a, l, s, c, m, p) {
      var _ = t.filter(function (e) {
          var t = d(e);
          if (!t) {
            var n, o;
            r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setAction("CREATIVE_DELIVERY_PUSH_CREATE_ATTEMPT")
              .addActionPayload("adgroupID", e.adgroup.id)
              .addActionPayload(
                "studyID",
                (n =
                  (o = e.adgroup.include_in_ad_study_id) != null
                    ? o
                    : e.existingStudyIDForAdgroup) != null
                  ? n
                  : null,
              )
              .addActionPayload("requestSetID", p)
              .addActionPayload("inFlightGuardHit", !0)
              .log();
          }
          return t;
        }),
        f = _.filter(function (e) {
          var t,
            n,
            r,
            a = e.adgroup,
            i = e.existingStudyIDForAdgroup,
            l =
              (t = (n = a.include_in_ad_study_id) != null ? n : i) != null
                ? t
                : null;
          return (
            l == null &&
            o("AdsPEDeliveryPushInsightUtil").DeliveryPushBudgetSource.cast(
              (r = a.creative_delivery_push) == null ? void 0 : r.budget_source,
            ) ===
              o("AdsPEDeliveryPushInsightUtil").DeliveryPushBudgetSource.AddNew
          );
        })
          .map(function (e) {
            var t,
              n,
              r,
              o,
              a = e.adgroup,
              i = e.campaign,
              l = e.campaignGroup;
            return {
              additiveBudget:
                (t =
                  (n =
                    (r = a.creative_delivery_push) == null
                      ? void 0
                      : r.daily_budget) != null
                    ? n
                    : (o = a.creative_delivery_push) == null
                      ? void 0
                      : o.lifetime_budget) != null
                  ? t
                  : 0,
              campaign: i,
              campaignGroup: l,
            };
          })
          .filter(function (e) {
            var t = e.additiveBudget;
            return t > 0;
          });
      f.length > 0 && m(f);
      var g = _.map(function (t) {
        var o,
          i,
          d,
          m,
          _,
          f,
          g,
          h,
          y = t.adgroup,
          C = t.campaign,
          b = t.campaignGroup,
          v = t.existingStudyIDForAdgroup;
        if (y.creative_delivery_push == null)
          return (e || (e = n("Promise"))).resolve({
            success: !1,
            adgroupID: y.id,
            budgetPercentage: null,
            campaignGroupID: y.campaign_id,
            campaignID: y.adset_id,
            durationInSeconds: null,
            studyID: null,
          });
        var S =
            (o = y.creative_delivery_push) == null
              ? void 0
              : o.budget_percentage,
          R = (i = y.creative_delivery_push) == null ? void 0 : i.budget_source,
          L = (d = y.creative_delivery_push) == null ? void 0 : d.daily_budget,
          E =
            (m = y.creative_delivery_push) == null ? void 0 : m.lifetime_budget,
          k =
            (_ = y.creative_delivery_push) == null
              ? void 0
              : _.duration_in_seconds,
          I = (f = a.get(y.id)) != null ? f : "Unknown",
          T =
            (g = (h = y.include_in_ad_study_id) != null ? h : v) != null
              ? g
              : null;
        return new (e || (e = n("Promise")))(function (e) {
          T != null
            ? (r("AdsExperimentsFunnelLogger")
                .withoutAccountID()
                .setAction("CREATIVE_DELIVERY_PUSH_UPDATE_ATTEMPT")
                .addActionPayload("adgroupID", y.id)
                .addActionPayload("studyID", T)
                .addActionPayload("entrySource", I)
                .log(),
              c({
                creativeTestConfig: {
                  budgetPercentage: S,
                  budgetSource: R != null ? R : null,
                  dailyBudget: L != null ? L : null,
                  durationInSeconds: k,
                  lifetimeBudget: E != null ? E : null,
                },
                adgroupID: y.id,
                studyID: T,
                timezoneId: l.timezone_id,
                onSuccess: function () {
                  e({
                    success: !0,
                    adgroupID: y.id,
                    budgetPercentage: S,
                    campaignGroupID: y.campaign_id,
                    campaignID: y.adset_id,
                    durationInSeconds: k,
                    studyID: T,
                  });
                },
                onError: function () {
                  e({
                    success: !1,
                    adgroupID: y.id,
                    budgetPercentage: null,
                    campaignGroupID: y.campaign_id,
                    campaignID: y.adset_id,
                    durationInSeconds: null,
                    studyID: null,
                  });
                },
              }))
            : (r("AdsExperimentsFunnelLogger")
                .withoutAccountID()
                .setAction("CREATIVE_DELIVERY_PUSH_CREATE_ATTEMPT")
                .addActionPayload("adgroupID", y.id)
                .addActionPayload("entrySource", I)
                .addActionPayload("studyID", T)
                .addActionPayload("requestSetID", p)
                .addActionPayload("inFlightGuardHit", !1)
                .log(),
              s({
                adAccount: l,
                campaign: { end_time: C.end_time, start_time: C.start_time },
                campaignGroup: {
                  end_time: b.end_time,
                  start_time: b.start_time,
                },
                creativeTestConfig: {
                  budgetPercentage: S,
                  budgetSource: R != null ? R : null,
                  dailyBudget: L != null ? L : null,
                  durationInSeconds: k,
                  lifetimeBudget: E != null ? E : null,
                },
                adgroupID: y.id,
                entrySource: I,
                onSuccess: function (n) {
                  (u.delete(y.id),
                    e({
                      success: !0,
                      adgroupID: y.id,
                      budgetPercentage: S,
                      campaignGroupID: y.campaign_id,
                      campaignID: y.adset_id,
                      durationInSeconds: k,
                      studyID: n,
                    }));
                },
                onError: function () {
                  (u.delete(y.id),
                    e({
                      success: !1,
                      adgroupID: y.id,
                      budgetPercentage: null,
                      campaignGroupID: y.campaign_id,
                      campaignID: y.adset_id,
                      durationInSeconds: null,
                      studyID: null,
                    }));
                },
              }));
        });
      });
      (e || (e = n("Promise"))).allSettled(g).then(function (e) {
        var t = new Map(),
          n = new Map(),
          o = new Map(),
          a = new Map(
            _.map(function (e) {
              var t,
                n,
                r,
                o,
                a,
                i,
                l = e.adgroup;
              return [
                l.id,
                {
                  additiveBudget:
                    (t =
                      (n =
                        (r = l.creative_delivery_push) == null
                          ? void 0
                          : r.daily_budget) != null
                        ? n
                        : (o = l.creative_delivery_push) == null
                          ? void 0
                          : o.lifetime_budget) != null
                      ? t
                      : null,
                  budgetSource:
                    (a =
                      (i = l.creative_delivery_push) == null
                        ? void 0
                        : i.budget_source) != null
                      ? a
                      : null,
                },
              ];
            }),
          );
        (e.forEach(function (e) {
          if (e.status === "fulfilled" && e.value.success === !0) {
            var r,
              i,
              l = e.value,
              s = l.adgroupID,
              u = l.budgetPercentage,
              c = l.campaignGroupID,
              d = l.campaignID,
              m = l.durationInSeconds,
              p = l.studyID;
            if (
              (t.has(c) || t.set(c, new Set()),
              (r = t.get(c)) == null || r.add(s),
              n.has(d) || n.set(d, new Set()),
              (i = n.get(d)) == null || i.add(s),
              p != null)
            ) {
              var _, f, g, h;
              o.set(s, {
                additiveBudget:
                  (_ = (f = a.get(s)) == null ? void 0 : f.additiveBudget) !=
                  null
                    ? _
                    : null,
                budgetPercentage: u,
                budgetSource:
                  (g = (h = a.get(s)) == null ? void 0 : h.budgetSource) != null
                    ? g
                    : null,
                durationInSeconds: m,
                studyID: p,
              });
            }
          }
        }),
          t.size > 0 &&
            (r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setAction("CREATIVE_DELIVERY_PUSH_PUBLISH_COMPLETED")
              .addActionPayload(
                "adgroupIDs",
                [].concat(Array.from(o.keys())).join(","),
              )
              .addActionPayload(
                "studyIDs",
                []
                  .concat(Array.from(o.values()))
                  .map(function (e) {
                    return e.studyID;
                  })
                  .filter(Boolean)
                  .join(","),
              )
              .log(),
            r(
              "AdsExperimentsCreativeDeliveryPushPublishCompletedAction",
            ).dispatch(
              {
                adgroupIDToPublishedStudyData: o,
                campaignGroupIDsToSuccessfulAdgroupIDsMap: t,
                campaignIDsToSuccessfulAdgroupIDsMap: n,
              },
              {
                line: "593",
                module: "AdsExperimentsDeliveryPushStateReducerPlugins.js",
                moduleID: i.id,
              },
            )));
      });
    }
    var _ = {
      reduce: function (t, n) {
        var e, a;
        if (
          !o(
            "AdsExperiments2026CreativeTestQEUtils",
          ).getIsDeliveryPushedEnabledWithoutLogging()
        )
          return t;
        var l = (
            (e =
              (a = n.response.fragment_statuses) == null ? void 0 : a.data) !=
            null
              ? e
              : []
          )
            .map(function (e) {
              var n;
              if (
                e == null ||
                e.ad_object_type !== "ad" ||
                e.status !== "SUCCESS"
              )
                return null;
              var r = e.ad_object_id,
                a =
                  r != null
                    ? o("AdsPEAdgroupSelectors")
                        .getByFieldsSelector()(
                          r,
                          {
                            adset_id: null,
                            campaign_id: null,
                            creative_delivery_push: null,
                            id: null,
                            include_in_ad_study_id: null,
                          },
                          i.id,
                        )
                        .getValue()
                    : null;
              if (a == null || a.creative_delivery_push == null) return null;
              var l = o("AdsPECampaignSelectors")
                  .getByFieldsSelector()(
                    a.adset_id,
                    {
                      daily_budget: null,
                      end_time: null,
                      id: null,
                      lifetime_budget: null,
                      start_time: null,
                    },
                    i.id,
                  )
                  .getValue(),
                s = o("AdsPECampaignGroupSelectors")
                  .getByFieldsSelector()(
                    a.campaign_id,
                    {
                      daily_budget: null,
                      end_time: null,
                      id: null,
                      lifetime_budget: null,
                      start_time: null,
                    },
                    i.id,
                  )
                  .getValue();
              if (l == null || s == null) return null;
              var u =
                r != null
                  ? (n = t.adgroupIDToPublishedStudyData.get(r)) == null
                    ? void 0
                    : n.studyID
                  : null;
              return {
                adgroup: a,
                campaign: l,
                campaignGroup: s,
                existingStudyIDForAdgroup: u,
              };
            })
            .filter(Boolean),
          u = r("AdsAccountStore").getSelectedAccount().getValue();
        if (l == null || l.length === 0 || u == null) return t;
        var d = n.response.async_request_set_id;
        if (d != null) {
          if (s.has(d)) return t;
          s.add(d);
        }
        return (
          (c += 1),
          r("AdsExperimentsFunnelLogger")
            .withoutAccountID()
            .setAction("CREATIVE_DELIVERY_PUSH_REDUCER_TRIGGERED")
            .addActionPayload("count", l.length)
            .addActionPayload(
              "adgroupIDs",
              l
                .map(function (e) {
                  return e.adgroup.id;
                })
                .join(","),
            )
            .addActionPayload("triggerCount", c)
            .addActionPayload("requestSetID", d)
            .log(),
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "adsExperimentsCreateCreativeDeliveryPush",
              ).__setRef("AdsExperimentsDeliveryPushStateReducerPlugins"),
              r("JSResource")(
                "adsExperimentsUpdateCreativeDeliveryPush",
              ).__setRef("AdsExperimentsDeliveryPushStateReducerPlugins"),
              r("JSResource")(
                "adsExperimentsIncreaseParentBudgetForAdditive",
              ).__setRef("AdsExperimentsDeliveryPushStateReducerPlugins"),
            ],
            function (e, n, r) {
              p(l, t.adgroupIDToEntrySource, u, e, n, r, d);
            },
          ),
          t
        );
      },
    };
    function f(e, t, n, r) {
      var o = new Map(e),
        a = new Set(e.get(t));
      if (r) for (var i of n) a.add(i);
      else for (var l of n) a.delete(l);
      return (a.size === 0 ? o.delete(t) : o.set(t, a), o);
    }
    var g = {
        reduce: function (t, n) {
          var e = n.adgroupIDs,
            o = n.campaignGroupID,
            a = n.campaignID,
            i = n.creativeDeliveryPush,
            l = n.entrySource,
            s = i != null;
          r("AdsExperimentsFunnelLogger")
            .withoutAccountID()
            .setAction(
              s
                ? "CREATIVE_DELIVERY_PUSH_TOGGLE_ON"
                : "CREATIVE_DELIVERY_PUSH_TOGGLE_OFF",
            )
            .addActionPayload("adgroupIDs", e.join(","))
            .addActionPayload("campaignGroupID", o)
            .addActionPayload("campaignID", a)
            .log();
          var u = new Map(t.adgroupIDToEntrySource);
          for (var c of e) l != null ? u.set(c, l) : u.delete(c);
          return babelHelpers.extends({}, t, {
            adgroupIDToEntrySource: u,
            campaignGroupIDsWithMutatedAdgroupIDs: f(
              t.campaignGroupIDsWithMutatedAdgroupIDs,
              o,
              e,
              s,
            ),
            campaignIDsWithMutatedAdgroupIDs: f(
              t.campaignIDsWithMutatedAdgroupIDs,
              a,
              e,
              s,
            ),
          });
        },
      },
      h = {
        reduce: function (t, n) {
          return m(
            t,
            n.adgroupIDToPublishedStudyData,
            n.campaignGroupIDsToSuccessfulAdgroupIDsMap,
            n.campaignIDsToSuccessfulAdgroupIDsMap,
          );
        },
      },
      y = {
        reduce: function (t, n) {
          var e = new Set(t.canceledAdgroupIDs);
          return (
            n.operation === "ADD" ? e.add(n.adgroupID) : e.delete(n.adgroupID),
            babelHelpers.extends({}, t, { canceledAdgroupIDs: e })
          );
        },
      };
    ((l.AdsExperimentsDeliveryPushStateReducerPlugin = _),
      (l.AdsExperimentsCampaignGroupsWithMutatedDeliveryPushAdgroupsReducerPlugin =
        g),
      (l.AdsExperimentsCreativeDeliveryPushPublishCompletedReducerPlugin = h),
      (l.AdsExperimentsDeliveryPushCancelReducerPlugin = y));
  },
  98,
);
