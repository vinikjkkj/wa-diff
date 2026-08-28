__d(
  "LeadAdsQualityFeatureGating",
  ["AdsLeadGenTrain3HoldoutGating", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        return (t == null ? void 0 : t.is_phone_sms_verify_enabled) === !0 ||
          n === !0 ||
          r("gkx")("459") === !0
          ? !1
          : r("gkx")("20314") === !0
            ? !0
            : r("qex")._("4707") === !0;
      },
      s = function (t) {
        var e = (t == null ? void 0 : t.silent) === !0,
          n = e ? r("qex")._("73") : r("qex")._("5124"),
          o = r("gkx")("22891");
        return n === !0 && o !== !0;
      },
      u = function (t) {
        return (
          t === void 0 && (t = !0),
          (t ? r("qex")._("1269") : r("qex")._("1513")) === !0
        );
      };
    function c(e) {
      var t = r("gkx")("9436") === !0;
      return (
        t &&
        o(
          "AdsLeadGenTrain3HoldoutGating",
        ).isInLeadGenCentralizedHoldout2026H1Train3(e)
      );
    }
    function d(e) {
      return (
        ((e == null ? void 0 : e.silent) === !0
          ? r("gkx")("26600")
          : r("gkx")("26601")) === !0
      );
    }
    function m() {
      var e = r("qex")._("415") === !0,
        t = d({ silent: !0 });
      return e || t;
    }
    function p() {
      var e = r("qex")._("402") === !0,
        t = d();
      return e || t;
    }
    var _ = function () {
        return r("gkx")("19866") === !0;
      },
      f = function (t) {
        var e, n;
        if (
          t == null ||
          (t == null ? void 0 : t.questions) == null ||
          t.should_enforce_work_email === !0
        )
          return !1;
        var o =
          ((e = t.questions) == null
            ? void 0
            : e.some(function (e) {
                return e.type === "WORK_EMAIL";
              })) === !0;
        if (o && r("gkx")("11679") === !0) return !1;
        var a =
          ((n = t.questions) == null
            ? void 0
            : n.some(function (e) {
                return e.type === "EMAIL";
              })) === !0;
        return !o && a && r("gkx")("11680") === !0
          ? !1
          : (o || a) && r("qex")._("97") === !0;
      };
    ((l.isEligibleForOTPDuplicateRecommendations = e),
      (l.isEligibleForWorkEmailDefaulting = s),
      (l.isEligibleForWorkEmailEnforcementGuidance = u),
      (l.shouldDefaultOTPViaHoldout = c),
      (l.isInCombinedOTPDefaultingHBTLaunch = d),
      (l.isInOTPL1DefaultingTreatmentWithoutExposure = m),
      (l.isInOTPL1DefaultingTreatmentWithExposure = p),
      (l.canSeePreferredAnswerDropdownUI = _),
      (l.isEligibleForWorkEmailFormDuplicate = f));
  },
  98,
);
