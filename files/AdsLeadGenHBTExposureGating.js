__d(
  "AdsLeadGenHBTExposureGating",
  [
    "AdsAccountStore",
    "CASSegmentEnum",
    "LeadGenAdvertiserHbtExposureFalcoEvent",
    "LeadGenHBTAdvertiserPretestEnabledJK",
    "LeadGenHBTExposureConfig",
    "LeadGenHBTTrain",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = null),
          (this.$3 = null),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$1 = e));
      }
      e.forCallsite = function (n) {
        return new e(n);
      };
      var t = e.prototype;
      return (
        (t.setEvent = function (t) {
          return ((this.$2 = t), this);
        }),
        (t.setEventName = function (t) {
          return ((this.$3 = t), this);
        }),
        (t.setIsSilent = function (t) {
          return ((this.$4 = t), this);
        }),
        (t.setIsInHoldout = function (t) {
          return ((this.$5 = t), this);
        }),
        (t.setIsActiveHoldoutExposure = function (t) {
          return ((this.$6 = t), this);
        }),
        (t.log = function () {
          var e,
            t = this.$2,
            n = this.$3;
          if (!(t == null || n == null)) {
            var o = String(this.$1),
              a = r("LeadGenHBTExposureConfig").callsite_map[o];
            if (a != null) {
              var i = r("LeadGenHBTExposureConfig").project_config[
                  a.project_config
                ],
                l = i
                  ? r("LeadGenHBTExposureConfig").hbt_config[i.target_hbt]
                  : null,
                s =
                  (e = r("AdsAccountStore").getSelectedAccountID()) != null
                    ? e
                    : "0",
                u = this.$4,
                c = this.$5,
                d = this.$6;
              r("LeadGenAdvertiserHbtExposureFalcoEvent").log(function () {
                var e, r;
                return {
                  ad_account_id: s,
                  project_name: a.project_config,
                  project_exposure_callsite: o,
                  hbt_name:
                    (e = l == null ? void 0 : l.hbt_name) != null ? e : "",
                  hbt_gating_experiment_name:
                    (r = l == null ? void 0 : l.hbt_gk) != null ? r : "",
                  event: t,
                  event_name: n,
                  is_silent: u,
                  is_in_holdout: c,
                  is_active_holdout_exposure: d,
                };
              });
            }
          }
        }),
        e
      );
    })();
    function s(t, n) {
      n === void 0 && (n = !1);
      try {
        var o = e.forCallsite(t).setIsSilent(n != null ? n : !1),
          a = String(t),
          i = r("LeadGenHBTExposureConfig").callsite_map[a];
        if (i == null)
          return (
            o.setEvent("fail").setEventName("callsite_map_null").log(),
            !1
          );
        var l = r("LeadGenHBTExposureConfig").project_config[i.project_config];
        if (l == null)
          return (
            o.setEvent("fail").setEventName("project_config_null").log(),
            !1
          );
        var s = r("LeadGenHBTAdvertiserPretestEnabledJK").cast(l.enabled_jk);
        if (s == null || !d(s))
          return (
            o.setEvent("success").setEventName("project_disabled").log(),
            !1
          );
        if (
          l.cas_targeting_segments != null &&
          l.cas_targeting_segments.length !== 0
        ) {
          var p = l.cas_targeting_segments,
            _ = p.some(function (e) {
              var t = r("CASSegmentEnum").cast(e);
              return t != null && m(t);
            });
          if (!_)
            return (
              o.setEvent("success").setEventName("cas_disabled").log(),
              !1
            );
        }
        var f = r("LeadGenHBTTrain").cast(l.target_hbt);
        if (f == null)
          return (
            o.setEvent("fail").setEventName("train_resolution_null").log(),
            !1
          );
        if (!c(f))
          return (o.setEvent("success").setEventName("hbt_disabled").log(), !1);
        var g = u(f, n != null ? n : !1);
        return (
          o
            .setEvent("success")
            .setEventName("exposure")
            .setIsActiveHoldoutExposure(!(n != null && n))
            .setIsInHoldout(g)
            .log(),
          g
        );
      } catch (e) {
        var h,
          y =
            (h = r("AdsAccountStore").getSelectedAccountID()) != null ? h : "0";
        return (
          r("LeadGenAdvertiserHbtExposureFalcoEvent").log(function () {
            return {
              ad_account_id: y,
              project_name: "",
              project_exposure_callsite: t,
              hbt_name: "",
              hbt_gating_experiment_name: "",
              event: "fail",
              event_name: "crticial_hbt_check_failure",
              is_silent: !1,
              is_in_holdout: !1,
              is_active_holdout_exposure: !1,
            };
          }),
          !1
        );
      }
    }
    function u(e, t) {
      return e === "LEAD_GEN_L1_BASELINE"
        ? t
          ? r("gkx")("25571")
          : r("gkx")("25577")
        : e === "LG_2026_H1_TRAIN_4"
          ? t
            ? r("gkx")("25411")
            : r("gkx")("25412")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return e === "LEAD_GEN_L1_BASELINE"
        ? r("justknobx")._("1376")
        : e === "LG_2026_H1_TRAIN_4"
          ? r("justknobx")._("4924")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function d(e) {
      return e ===
        "lead_gen/advertiser_hbt_exposure_logging:lead_gen_l1_baseline_project"
        ? r("justknobx")._("5601")
        : e ===
            "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_web_based_form_generation_2"
          ? r("justknobx")._("1764")
          : e ===
              "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_lead_nuturing_wa_bundle_v2"
            ? r("justknobx")._("2329")
            : e ===
                "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_form_mgmt"
              ? r("justknobx")._("2334")
              : e ===
                  "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_whatsapp_PII"
                ? r("justknobx")._("2374")
                : e ===
                    "lead_gen/advertiser_hbt_exposure_logging:2026_H1_train_4_PROJECT_lead_gen_manual_download_redesign"
                  ? r("justknobx")._("3959")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function m(e) {
      return e === "Premium"
        ? r("gkx")("19884")
        : e === "Top"
          ? r("gkx")("19928")
          : e === "High"
            ? r("gkx")("20070")
            : e === "Mid"
              ? r("gkx")("20082")
              : e === "Low"
                ? r("gkx")("20156")
                : e === "Tail"
                  ? r("gkx")("20157")
                  : e === "Basic"
                    ? r("gkx")("20169")
                    : e === "GSI" ||
                        e === "CAR Red" ||
                        e === "New Mid" ||
                        e === "New Low" ||
                        e === "Meta" ||
                        e === "Unvetted" ||
                        e === "No Segment"
                      ? !1
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    ((l.LeadGenHBTExposureLogBuilder = e),
      (l.isInLeadGenHBT = s),
      (l.checkHBTGK = u),
      (l.checkHBTEnabledJK = c),
      (l.checkProjectEnabledJK = d),
      (l.checkCASSegmentGK = m));
  },
  98,
);
