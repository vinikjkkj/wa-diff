__d(
  "SimpleInterface.config",
  [
    "fbt",
    "ix",
    "$InternalEnum",
    "LBDSupportedAsset",
    "getViewportDimensions",
    "keyMirror",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = 500,
      c = n("$InternalEnum")({
        Issue: 0,
        Asset: 1,
        Help: 2,
        Segment: 3,
        Feedback: 4,
      }),
      d = "0",
      m = "1476186143231289",
      p = "0",
      _ = "1",
      f = [p, _],
      g = 0.6,
      h = 0.5,
      y = r("keyMirror")(r("LBDSupportedAsset")),
      C = {
        book: u("656039"),
        chat: u("822622"),
        phone: u("822592"),
        envelope: u("870145"),
        whatsapp: u("726969"),
        messenger: u("505620"),
        whatsappButton: u("726985"),
        messengerButton: u("481157"),
        questionMark: u("513798"),
        shareExternal: u("499406"),
      },
      b = [
        s._(/*BTDS*/ "Select Asset"),
        s._(/*BTDS*/ "Select the Issue"),
        s._(/*BTDS*/ "Get Help"),
      ],
      v = [c.Segment, c.Issue, c.Asset, c.Help, c.Feedback];
    function S(e) {
      switch (e) {
        case c.Segment:
          return s._(/*BTDS*/ "Select issue type");
        case c.Issue:
          return s._(/*BTDS*/ "What issue are you having?");
        case c.Asset:
          return s._(/*BTDS*/ "What asset can we help you with?");
        case c.Help:
          return s._(/*BTDS*/ "Get help");
        case c.Feedback:
          return s._(/*BTDS*/ "We'd love your feedback!");
      }
    }
    function R(e) {
      return s._(
        /*BTDS*/ "This form is for help with {Issue name in contact support flow for businesses}. For any other issues please visit the Help Center again.",
        [s._param("Issue name in contact support flow for businesses", e)],
      );
    }
    var L = function (t, n, r) {
        switch ((n === void 0 && (n = !0), r === void 0 && (r = !1), t)) {
          case y.PAGE:
            return n
              ? r
                ? s._(/*BTDS*/ "Facebook Pages")
                : s._(/*BTDS*/ "Facebook Page")
              : r
                ? s._(/*BTDS*/ "Facebook Pages\/Profile+")
                : s._(/*BTDS*/ "Facebook Page\/Profile+");
          case y.AD_ACCOUNT:
            return r ? s._(/*BTDS*/ "Ad Accounts") : s._(/*BTDS*/ "Ad Account");
          case y.BUSINESS:
            return r
              ? s._(/*BTDS*/ "Business Managers")
              : s._(/*BTDS*/ "Business Manager");
          case y.IG_ACCOUNT:
          case y.IG_BUSINESS_ASSET:
            return r
              ? s._(/*BTDS*/ "Instagram Accounts")
              : s._(/*BTDS*/ "Instagram Account");
          case y.FB_ACCOUNT:
            return r
              ? s._(/*BTDS*/ "Facebook Accounts")
              : s._(/*BTDS*/ "Facebook Account");
          case y.GROUP:
            return r ? s._(/*BTDS*/ "Groups") : s._(/*BTDS*/ "Group");
          case y.COMMERCE_MERCHANT_SETTINGS:
            return r
              ? s._(/*BTDS*/ "Commerce Managers")
              : s._(/*BTDS*/ "Commerce Manager");
          case y.APPLICATION:
            return r
              ? s._(/*BTDS*/ "Applications")
              : s._(/*BTDS*/ "Application");
          case y.AD_PAYMENT:
            return r ? s._(/*BTDS*/ "Ad Payments") : s._(/*BTDS*/ "Ad Payment");
          case y.PAYMENT_CREDENTIAL:
            return r
              ? s._(/*BTDS*/ "Payment Methods")
              : s._(/*BTDS*/ "Payment Method");
          case y.ADS_PIXEL:
            return r ? s._(/*BTDS*/ "Ads Pixels") : s._(/*BTDS*/ "Ads Pixel");
          case y.AD_GROUP:
            return r ? s._(/*BTDS*/ "Ads") : s._(/*BTDS*/ "Ad");
          case y.AD_CAMPAIGN:
            return r ? s._(/*BTDS*/ "Ad sets") : s._(/*BTDS*/ "Ad set");
          case y.FINANCIAL_ENTITY:
            return r
              ? s._(/*BTDS*/ "Financial Entities")
              : s._(/*BTDS*/ "Financial Entity");
          default:
            return r
              ? s._(/*BTDS*/ "Other Assets")
              : s._(/*BTDS*/ "Other Asset");
        }
      },
      E = s._(/*BTDS*/ "More options"),
      k = s._(/*BTDS*/ "Change"),
      I = s._(/*BTDS*/ "None of the above"),
      T = s._(/*BTDS*/ "Search for something or select an issue."),
      D = s._(/*BTDS*/ "Select issue"),
      x = s._(/*BTDS*/ "It's something else"),
      $ = s._(/*BTDS*/ "Other issues"),
      P = s._(
        /*BTDS*/ "The issue you selected is only applicable to this asset type.",
      ),
      N = function (t) {
        if (t != null) {
          var e = /^[1-9]\d*$/.test(t);
          return e;
        }
        return !1;
      },
      M = function (t) {
        return t === "1520316518781137" || t === "660410179184282";
      },
      w = function () {
        return r("getViewportDimensions")().width <= e;
      },
      A = function (t) {
        if (t === null) return !1;
        var e = [
          y.AD_ACCOUNT,
          y.COMMERCE_MERCHANT_SETTINGS,
          y.PAGE,
          y.IG_ACCOUNT,
        ];
        return (
          e.filter(function (e) {
            return t != null && t.includes(e);
          }).length > 0
        );
      },
      F = function (t, n) {
        return n != null && !f.includes(n.id) ? n : t;
      },
      O = function (t) {
        switch (t) {
          case "AD_PAYMENT":
            return s._(/*BTDS*/ "Select payment");
          case "PAYMENT_CREDENTIAL":
            return s._(/*BTDS*/ "Select payment method");
        }
        return null;
      },
      B = function (t) {
        switch (t) {
          case "AD_PAYMENT":
            return s._(/*BTDS*/ "Which payment do you need help with?");
          case "PAYMENT_CREDENTIAL":
            return s._(/*BTDS*/ "Which payment method do you need help with?");
        }
        return null;
      },
      W = function (t) {
        switch (t) {
          case "AD_PAYMENT":
            return s._(/*BTDS*/ "Payment not listed").toString();
          case "PAYMENT_CREDENTIAL":
            return s._(/*BTDS*/ "Payment method not listed").toString();
        }
        return null;
      };
    ((l.BusinessSupportCaseSubmissionSection = c),
      (l.OTHER_ISSUE_KEY = d),
      (l.FALLBACK_SYMPTOM_ID = m),
      (l.OTHER_GRANULAR_ASSET_KEY = p),
      (l.NO_GRANULAR_ASSET_KEY = _),
      (l.OTHER_GRANULAR_ASSET_KEYS = f),
      (l.TYPE2SOLVE_HIGH_CONFIDENCE_THRESHOLD = g),
      (l.TYPE2SOLVE_MIN_CONFIDENCE_THRESHOLD = h),
      (l.LBDSupportedAsset = y),
      (l.icons = C),
      (l.steps = b),
      (l.caseSubmissionSection = v),
      (l.getSectionTitle = S),
      (l.getDisableReselectMsg = R),
      (l.getFriendlyAssetTypeName = L),
      (l.MORE_OPTIONS_LABEL = E),
      (l.CHANGE_SELECTION_LABEL = k),
      (l.OTHER_GRANULAR_ASSET_LABEL = I),
      (l.SELECT_ISSUE_DESCRIPTION = T),
      (l.SELECT_ISSUE_HEADING = D),
      (l.DETECTED_ISSUE_OTHER_LABEL = x),
      (l.OTHER_ISSUE_LABEL = $),
      (l.ASSET_FILTER_TOOLTIP_CONTENT = P),
      (l.isInputFBID = N),
      (l.isPublishErrorPlan = M),
      (l.isMobileWidth = w),
      (l.isValidBusinessFilter = A),
      (l.getSelectedAsset = F),
      (l.getGranularAssetSelectorHeading = O),
      (l.getGranularAssetSelectorDescription = B),
      (l.getOtherGranularAssetOptionLabel = W));
  },
  226,
);
