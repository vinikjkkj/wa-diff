__d(
  "AdsWhatsAppUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsCurrentUser",
    "AdsDestinationUtils",
    "AdsInstagramDefaultingUtils",
    "AdsPERouterHelper",
    "AdsPageUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppConnectAccountDialogSendDownloadLinkFailureAction",
    "AdsWhatsAppConnectAccountDialogSendDownloadLinkSuccessAction",
    "AdsWhatsAppConstants",
    "AdsWhatsAppFeatureGating",
    "AdsWhatsAppGKUtils",
    "AdsWhatsAppNumberUtils",
    "AdsWhatsAppTypes",
    "ApiPagePaths",
    "BizSiteIdentifier.brands",
    "ClickToMessageCTXMDFeatureGating",
    "URI",
    "WebStorage",
    "WhatsAppPhoneNumberMentionsSourceUtils",
    "getByPath",
    "gkx",
    "igAccessAdsManagerUtils",
    "isFalsey",
    "isStringNullOrEmpty",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = "https://www.whatsapp.com/business/",
      d = "https://www.whatsapp.com/download/",
      m = function () {
        return o("AdsWhatsAppConstants").WHATSAPP_API_LINK;
      },
      p = function (n, a) {
        return r("isFalsey")(a)
          ? null
          : (n == null ? void 0 : n.whatsapp_page_settings_link) != null
            ? new (e || (e = r("URI")))(n.whatsapp_page_settings_link)
            : o("BizSiteIdentifier.brands")
                .createBusinessURL("/" + a + "/settings")
                .addQueryData({ tab: "whatsapp_management" });
      },
      _ = function (t) {
        var e, n;
        return (
          ((e = t.creative) == null ||
          (e = e.object_story_spec) == null ||
          (e = e.link_data) == null ||
          (e = e.call_to_action) == null ||
          (e = e.value) == null
            ? void 0
            : e.whatsapp_number) != null ||
          ((n = t.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.video_data) == null ||
          (n = n.call_to_action) == null ||
          (n = n.value) == null
            ? void 0
            : n.whatsapp_number) != null ||
          o("AdsDestinationUtils").getAppDestinationForAdgroupSpec(t) ===
            "WHATSAPP"
        );
      },
      f = function (t) {
        return t !== null && t !== "" && t === "WHATSAPP_MESSAGE";
      },
      g = function (t) {
        var e;
        return {
          canManagePageWhatsApp: (e =
            o("AdsPageUtils")).getCanManagePageWhatsApp(t),
          hasWhatsAppBusinessNumber: e.hasWhatsAppBusinessNumber(t),
          hasWhatsAppNumber: e.hasWhatsAppNumber(t),
          hasWhatsAppNumberInLocationStructure:
            e.hasWhatsAppNumberInLocationStructure(t),
          isPageAdmin: e.isAdmin(t),
          pageLoadState: t.loadState,
          pageSettingsLink: p(t, t.id),
          pageToken: r("getByPath")(t, r("ApiPagePaths").PAGE_TOKEN),
          pageWhatsAppNumberID: e.getPageWhatsAppNumberID(t),
          prefillWhatsAppCountryCode: r("AdsCurrentUser").countryCode,
          whatsAppNumber: e.getWhatsAppNumber(t),
          whatsAppNumberFormatted: e.getWhatsAppNumberFormatted(t),
          whatsAppNumbersInfo: e.getWhatsAppNumbersInfo(t),
          whatsAppSmbDevice: e.getWhatsAppSmbDevice(t),
        };
      },
      h = function (t, n) {
        var e,
          r = g(n(t)),
          a = (e = r == null ? void 0 : r.whatsAppNumber) != null ? e : "",
          i = r == null ? void 0 : r.pageWhatsAppNumberID,
          l = r == null ? void 0 : r.whatsAppNumberFormatted,
          s = [];
        a !== "" &&
          i != null &&
          s.push({ id: i, phone_number: a, phone_number_formated: l });
        var u = o(
          "WhatsAppPhoneNumberMentionsSourceUtils",
        ).getSearchableWhatsAppPhoneNumbersList(s);
        return u;
      };
    function y(e) {
      return "@[" + e.getUniqueID() + ":" + e.getTitle() + "] ";
    }
    function C(e) {
      var t = y(e),
        n = s._(/*BTDS*/ "Chat with us on WhatsApp at {WhatsApp number}", [
          s._param("WhatsApp number", t),
        ]);
      return n.toString();
    }
    var b = function (t) {
        var e = t.payload;
        e.response === "success"
          ? r(
              "AdsWhatsAppConnectAccountDialogSendDownloadLinkSuccessAction",
            ).dispatch(
              {},
              { line: "199", module: "AdsWhatsAppUtils.js", moduleID: i.id },
            )
          : r(
              "AdsWhatsAppConnectAccountDialogSendDownloadLinkFailureAction",
            ).dispatch(
              {},
              { line: "201", module: "AdsWhatsAppUtils.js", moduleID: i.id },
            );
      },
      v = function () {
        var e = r("AdsPERouterHelper").getRouter().getQueryParams();
        return e.whatsapp_linking_page_id;
      },
      S = function () {
        r("AdsPERouterHelper")
          .getRouter()
          .updateParams({ whatsapp_linking_page_id: null });
      };
    function R(e, t, n, a) {
      return !(
        t !== r("AdsAPIObjectives").LINK_CLICKS ||
        a ||
        r("AdsAccountUtils").hasCapability(
          e,
          "CTW_ADS_DISABLED_FOR_AD_ACCOUNT",
        ) ||
        o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(n)
      );
    }
    function L(e, t) {
      return (e != null ? e : "") + "_" + (t != null ? t : "");
    }
    function E(e, t) {
      return (e != null ? e : "") + "_" + (t != null ? t : "");
    }
    function k(e) {
      if (e == null) return null;
      var t = {};
      for (var n of e) n.key != null && (t[n.key] = n.value);
      return t;
    }
    function I(e, t, n, r, a, i, l, s, u) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        s === void 0 && (s = null),
        u === void 0 && (u = !1),
        l
          ? i || r
            ? o("AdsWhatsAppTypes").WAAccountConnectionType
                .MultiNumberConnection
            : n
              ? o("AdsWhatsAppTypes").WAAccountConnectionType
                  .PageNumberOnlyConnection
              : o("AdsWhatsAppTypes").WAAccountConnectionType.NoConnection
          : e ||
              r ||
              (a &&
                (s === "ad_set" ||
                  (s === "ad" &&
                    (u
                      ? o(
                          "ClickToMessageCTXMDFeatureGating",
                        ).enableCTWADaisyChainLeadNurturing()
                      : o(
                          "ClickToMessageCTXMDFeatureGating",
                        ).enableCTWAL1Switching()))))
            ? o("AdsWhatsAppTypes").WAAccountConnectionType
                .MultiNumberConnection
            : n
              ? o("AdsWhatsAppTypes").WAAccountConnectionType
                  .PageNumberOnlyConnection
              : t
                ? o("AdsWhatsAppTypes").WAAccountConnectionType
                    .OnlyHasWANumberInLocationStructure
                : o("AdsWhatsAppTypes").WAAccountConnectionType.NoConnection
      );
    }
    var T = function (t) {
        return t == null
          ? void 0
          : t.filter(function (e) {
              return (
                e.whatsAppNumberConnectionStatus === "linked".toUpperCase()
              );
            });
      },
      D = function (t, n) {
        var e;
        return (
          n === void 0 && (n = "linked"),
          (e =
            t == null
              ? void 0
              : t.some(function (e) {
                  return e.whatsAppNumberConnectionStatus === n.toUpperCase();
                })) != null
            ? e
            : !1
        );
      };
    function x(e, t, n) {
      var a = o("AdsWhatsAppFeatureGating").isWaBusinessUpsellEligible(e, t);
      return (
        o("AdsWhatsAppFeatureGating").isWASMBEnforcingEnabled(e, null, n) ||
        (o(
          "AdsWhatsAppFeatureGating",
        ).isBusinessNumberRequiredForMessagesObjective(e) &&
          !a &&
          t !== r("AdsAPIObjectives").OUTCOME_SALES)
      );
    }
    function $(e, t) {
      var n = e == null ? void 0 : e.whatsAppNumber;
      return !r("isStringNullOrEmpty")(n) && e != null && t != null;
    }
    function P(e) {
      var t = T(e);
      return t != null && t.length > 0;
    }
    function N(e, t) {
      var n =
        (t == null ? void 0 : t.hasWhatsAppNumberInLocationStructure) === !0;
      return e && n;
    }
    var M = function (t, n, r, o, a, i, l, s, u, c, d) {
      (l === void 0 && (l = !1),
        s === void 0 && (s = !1),
        u === void 0 && (u = !1),
        c === void 0 && (c = null),
        d === void 0 && (d = !1));
      var e = r ? g(r) : null,
        m = o.getValue(),
        p = x(t, n, i),
        _ = e == null ? void 0 : e.whatsAppNumber,
        f = $(e, r),
        h = P(m),
        y = N(a, e);
      return {
        businessWhatsAppBusinessAccounts: m,
        canUseWANumberInLocationStructure: y,
        isBusinessNumberRequired: p,
        pageHasValidWAAccount: f,
        validPageWhatsAppNumber: _,
        whatsAppAccountConnectionType: I(
          h,
          y,
          f,
          (e == null ? void 0 : e.whatsAppNumbersInfo) != null,
          l,
          s,
          u,
          c,
          d,
        ),
      };
    };
    function w(e, t) {
      var n = P(e),
        r = t != null ? g(t) : null,
        o = $(r, t),
        a = (r == null ? void 0 : r.whatsAppNumbersInfo) != null,
        i =
          (r == null ? void 0 : r.hasWhatsAppNumberInLocationStructure) === !0;
      return n || o || a || i;
    }
    var A = function (t) {
        var e, n;
        return (
          ((e =
            t == null || (n = t.locations) == null || (n = n.summary) == null
              ? void 0
              : n.total_count) != null
            ? e
            : 0) > 0
        );
      },
      F = function (t) {
        if (t != null) {
          var e = g(t);
          return e.hasWhatsAppBusinessNumber === !0;
        }
        return !1;
      },
      O = function (t) {
        return t == null ? !1 : t.has_whatsapp_number || F(t);
      },
      B = function (t) {
        return t.every(function (e) {
          return (
            o(
              "AdsUEditorMessagingDestinationUtils",
            ).destinationIncludesWhatsApp(e.campaign.destination_type) ||
            _(e.adgroup)
          );
        });
      };
    function W(e, t, n) {
      if (n != null && r("gkx")("13743")) return !0;
      var o = t == null ? void 0 : t.whatsapp_numbers_info;
      return o == null
        ? (t == null ? void 0 : t.has_whatsapp_business_number) === !0
        : o.some(function (t) {
            var n = t.is_business_number,
              r = t.page_whatsapp_number_id;
            return r === e && n;
          });
    }
    function q(e) {
      if (e == null) return !1;
      var t = o("AdsWhatsAppNumberUtils").getWhatsAppNumberFormatted(e),
        n = e == null ? void 0 : e.whatsapp_numbers_info,
        r =
          n == null
            ? void 0
            : n.find(function (e) {
                return e.formatted_whatsapp_number === t;
              });
      return (r == null ? void 0 : r.is_business_number) === !0;
    }
    function U(e, t, n, a) {
      return (
        t ||
        n ||
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsIG(e) ||
        o("AdsInstagramDefaultingUtils").shouldDefaultIGFAToIGTab() ||
        G(e, a) ||
        e === r("AdCampaignDestination").INSTAGRAM_LIVE
      );
    }
    function V(e, t) {
      return t === !1 && e !== r("AdCampaignDestination").FACEBOOK_PAGE;
    }
    function H(e, t, n, r, a, i) {
      return (
        V(t, i) &&
        (o("AdsWhatsAppGKUtils").shouldDefaultToIGForSMBBrazil(e, a) ||
          U(t, n, r, a))
      );
    }
    function G(e, t) {
      var n = (t == null ? void 0 : t.is_instagram_account_backed_page) === !0;
      return (
        (n &&
          (e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
            e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT)) ||
        (n && o("igAccessAdsManagerUtils").isIGAccessParityEnabled())
      );
    }
    function z(e, t) {
      var n = (u || (u = r("WebStorage"))).getLocalStorage();
      n == null ||
        n.setItem(e, JSON.stringify({ exposed: t, timestamp: Date.now() }));
    }
    function j(e) {
      var t = (u || (u = r("WebStorage"))).getLocalStorageForRead(),
        n;
      try {
        n = t == null ? void 0 : t.getItem(e);
      } catch (e) {
        return !1;
      }
      if (n != null && n !== "")
        try {
          var o = JSON.parse(n),
            a = o.exposed;
          if (a) return !0;
        } catch (t) {
          (r("vulture")("r0RtsVfrsOatscJqXg8bQOBQ-Gc="), K(e));
        }
      return !1;
    }
    function K(e) {
      var t = (u || (u = r("WebStorage"))).getLocalStorage();
      t == null || t.removeItem(e);
    }
    ((l.whatsAppBusinessLink = c),
      (l.whatsAppLink = d),
      (l.getDefaultCTALink = m),
      (l.getPageSettingsLink = p),
      (l.isWhatsAppDestinationAd = _),
      (l.isWhatsAppCTAType = f),
      (l.getPageWhatsAppData = g),
      (l.getSearchableWhatsAppPhoneNumbersListFromPageID = h),
      (l.getDefaultPrimaryTextWithWhatsAppDeeplinkMentionForCTWA = C),
      (l.handleSendDownloadLinkCallback = b),
      (l.getPageIdFromPreAdCreation = v),
      (l.clearPageIdFromPreAdCreation = S),
      (l.shouldValidateCTWAErrorLinkClicks = R),
      (l.getPagePostIdforInstagramPost = L),
      (l.getPagePostIdforFacebookPost = E),
      (l.getCTADefaultingObject = k),
      (l.getWAAccountConnectionType = I),
      (l.getConnectedBusinessWhatsAppAccounts = T),
      (l.isAnyConnectedWhatsappBusinessNumberStatusTypeCheck = D),
      (l.getInfoForLocalPagesCTWAAds = M),
      (l.hasAnyWhatsAppNumberAvailable = w),
      (l.isParentPage = A),
      (l.hasSMBNumberConnected = F),
      (l.hasWhatsAppNumberConnected = O),
      (l.hasWAselectedAsDestination = B),
      (l.getIsSelectedPageMultiNumberBusiness = W),
      (l.getIsPrimaryNumberBusinessNumber = q),
      (l.shouldDefaultToIGTab = H),
      (l.isPagelessAd = G),
      (l.addExposureFlagInLocalStorage = z),
      (l.getExposureFlagInLocalStorage = j),
      (l.deleteExposureFlagInLocalStorage = K));
  },
  226,
);
