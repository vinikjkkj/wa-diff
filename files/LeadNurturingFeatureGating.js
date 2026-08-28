__d(
  "LeadNurturingFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsLeadGenFormEditorUtils",
    "AdsLeadGenHBTExposureGating",
    "AdsLeadGenInstantFormEmbeddedCalendarUtil",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsWhatsAppUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = new Set();
    function u(t) {
      ((e = t),
        s.forEach(function (e) {
          return e();
        }));
    }
    function c() {
      return e;
    }
    function d(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    var m = null;
    function p(e) {
      return (
        (m = e),
        function () {
          m = null;
        }
      );
    }
    function _() {
      m != null && m();
    }
    var f = !1;
    function g() {
      f = !0;
    }
    function h() {
      return f ? ((f = !1), !0) : !1;
    }
    function y(e, t, n, r) {
      var a;
      if (t == null)
        return o("AdsWhatsAppUtils").hasSMBNumberConnected(e) && n === !0;
      if (!e) return !1;
      var i = o("AdsWhatsAppUtils").getPageWhatsAppData(e),
        l = (a = i == null ? void 0 : i.isPageAdmin) != null ? a : !1,
        s = !o("AdsPageUtils").hasWhatsAppNumber(e) && l;
      return (
        s ||
        o("AdsWhatsAppUtils").getIsPrimaryNumberBusinessNumber(e) ||
        ((o("AdsPageUtils").hasWhatsAppNumber(e) || b(r)) && v(!0))
      );
    }
    function C(e, t, n, a) {
      var i;
      if (t == null) return !1;
      var l =
          n != null
            ? n
            : e != null
              ? (i = r("AdsPageStore").getLoadObject(e)) == null
                ? void 0
                : i.getValue()
              : null,
        s =
          l != null &&
          y(l, t, !1, a) &&
          o("AdsWhatsAppUtils").hasSMBNumberConnected(l);
      if (s)
        return (
          o("AdsLeadGenFormEditorUtils").logToLeadNurturingAmAction(
            "ctwa_defaulting_has_page_linked_whatsapp",
            { ad_account_id: t != null ? t : "", page_id: e != null ? e : "" },
          ),
          !0
        );
      var u = b(a);
      return (
        u &&
          o("AdsLeadGenFormEditorUtils").logToLeadNurturingAmAction(
            "ctwa_defaulting_has_waba_linked_whatsapp",
            { ad_account_id: t != null ? t : "", page_id: e != null ? e : "" },
          ),
        u && v(!0)
      );
    }
    function b(e) {
      if (e == null || !e.hasValueWithoutError()) return !1;
      var t = o("AdsWhatsAppUtils").getConnectedBusinessWhatsAppAccounts(
        e.getValue(),
      );
      return t != null && t.length > 0;
    }
    function v(e) {
      return (
        e === void 0 && (e = !1),
        r("gkx")("12117") === !0
          ? !0
          : e
            ? r("gkx")("564") === !0 ||
              o("AdsLeadGenHBTExposureGating").isInLeadGenHBT(
                "LEAD_NURTURING_CTWA_BUNDLE_GATING",
              )
            : r("gkx")("564") === !0 ||
              o("AdsLeadGenHBTExposureGating").isInLeadGenHBT(
                "LEAD_NURTURING_CTWA_BUNDLE_GATING",
                !0,
              )
      );
    }
    function S(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5573") === !0 : r("qex")._("5574") === !0
      );
    }
    function R() {
      return r("gkx")("3293") === !0;
    }
    function L(e, t) {
      return (e == null ? void 0 : e.is_auto_thread_creation_enabled) === !0 ||
        t === !1
        ? !1
        : R();
    }
    function E() {
      return r("gkx")("21426") === !0;
    }
    function k() {
      return r("gkx")("19435") === !0;
    }
    function I() {
      var e = r("gkx")("12890") === !0 || r("qex")._("2695");
      return e === !0;
    }
    function T() {
      return r("gkx")("3293") === !0;
    }
    function D(e, t, n, a) {
      var i, l, s;
      if (
        (t !== null &&
          o("AdsLeadGenFormEditorUtils").logToLeadNurturingAmAction(
            "form_duplicate_defaulting_p2b_call_has_call_cta_in_recent_form",
            {
              ad_account_id: a != null ? a : "",
              form_id: e == null ? void 0 : e.id,
              page_id: n != null ? n : "",
            },
          ),
        n != null && a != null)
      ) {
        var u,
          c =
            (u = r("AdsPageStore").getLoadObject(n)) == null
              ? void 0
              : u.getValue();
        if (c != null && y(c, a, !1)) return !1;
      }
      return (e == null || (i = e.thank_you_page) == null
        ? void 0
        : i.button_type) === "CALL_BUSINESS" ||
        (e == null || (l = e.thank_you_page) == null
          ? void 0
          : l.button_type) === "BOOK_ON_WEBSITE" ||
        (e == null || (s = e.thank_you_page) == null
          ? void 0
          : s.button_type) === "WHATSAPP" ||
        t === null
        ? !1
        : T();
    }
    function x(e, t, n, r, o) {
      var a, i;
      return (
        t === void 0 && (t = !1),
        (e == null || (a = e.thank_you_page) == null
          ? void 0
          : a.button_type) === "BOOK_ON_WEBSITE" ||
        (e == null || (i = e.thank_you_page) == null
          ? void 0
          : i.button_type) === "WHATSAPP"
          ? !1
          : C(n, r, null, o)
            ? v(t)
            : !1
      );
    }
    function $(e, t, n, r) {
      return (r === void 0 && (r = !1), C(e, t, null, n) ? S(r) : !1);
    }
    function P(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("1891") === !0 : r("qex")._("2271") === !0
      );
    }
    function N(e, t, n) {
      return C(e, t, null, n) ? P(!0) : !1;
    }
    function M(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("2008") === !0 : r("qex")._("2403") === !0
      );
    }
    function w(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("3273") === !0 : r("qex")._("3274") === !0
      );
    }
    function A(e) {
      return (
        e === void 0 && (e = !1),
        r("gkx")("20882") === !0
          ? !0
          : e
            ? r("qex")._("5375") === !0
            : r("qex")._("5376") === !0
      );
    }
    function F(e) {
      var t;
      if (e == null) return !1;
      if (
        ((t = e.end_pages) == null ? void 0 : t.thank_you_pages) != null &&
        e.end_pages.thank_you_pages.length > 0
      ) {
        var n = e.end_pages.thank_you_pages.some(function (e) {
          return (
            e.button_type === "VIEW_WEBSITE" &&
            o("AdsLeadGenInstantFormEmbeddedCalendarUtil").detectBookingType(
              e.website_url,
            ) != null
          );
        });
        if (!n) return !1;
      } else {
        var r;
        if (
          ((r = e.thank_you_page) == null ? void 0 : r.button_type) !==
            "VIEW_WEBSITE" ||
          o("AdsLeadGenInstantFormEmbeddedCalendarUtil").detectBookingType(
            e.follow_up_action_url,
          ) == null
        )
          return !1;
      }
      return A();
    }
    function O() {
      return r("gkx")("21617") === !0;
    }
    function B(e) {
      return e == null ? !1 : A() && O();
    }
    function W() {
      return r("gkx")("2910");
    }
    function q(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("782") === !0 : r("qex")._("844") === !0
      );
    }
    function U() {
      return r("gkx")("25414") === !0;
    }
    function V() {
      return r("gkx")("6317") === !0;
    }
    function H(e, t, n, o) {
      o === void 0 && (o = !1);
      var a =
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION;
      return (
        a &&
        t === r("AdCampaignDestination").ON_AD &&
        (U() || V()) &&
        (n === !0 || o)
      );
    }
    function G(e) {
      return e === "max_volume";
    }
    ((l.setIsDropdownNumberConsumer = u),
      (l.getIsDropdownNumberConsumer = c),
      (l.subscribeToIsDropdownNumberConsumer = d),
      (l.registerResetConsumerCallback = p),
      (l.resetDropdownConsumerSelection = _),
      (l.markCTWAUpsellApplied = g),
      (l.consumeCTWAUpsellAppliedFlag = h),
      (l.shouldShowWhatsAppOption = y),
      (l.isEligibleForCTWADefaulting = C),
      (l.hasWABALinkedWhatsAppNumber = b),
      (l.isEligibleForB2PMessengerFormDuplicate = L),
      (l.isEligibleForL1PreviewUpdates = E),
      (l.isEligibleForL1ConfigSheet = k),
      (l.isEligibleFor3pSelectionEligibility = I),
      (l.isEligibleForP2BCallFormDuplicate = D),
      (l.isEligibleForCTWAFormDuplicate = x),
      (l.isEligibleForCTWAL1Defaulting = $),
      (l.passCTWAUpsellQE = P),
      (l.isEligibleForCTWAL1Upsell = N),
      (l.passWAMultiNumberQE = M),
      (l.shouldShowHackyErrorInL1 = w),
      (l.passEmbeddedBookAdCreationQE = A),
      (l.isEligibleForBookOnWebsiteFormDuplicate = F),
      (l.passEmbeddedBookingDefaultingCreationGK = O),
      (l.isEligibleForBOWCreationDefaulting = B),
      (l.passLeadGenPlusAllowList = W),
      (l.passLeadGenPlusQE = q),
      (l.passQualityVolumePreferenceGK = U),
      (l.passQualityVolumePreferenceBiglist = V),
      (l.shouldShowQualityVolumeDesign = H),
      (l.shouldHideLeadQualificationStage = G));
  },
  98,
);
