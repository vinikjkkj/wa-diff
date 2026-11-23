__d(
  "MAIBAR21FacebookLinkHrefUtils",
  [
    "BusinessCometAdCenterNativeEditRequest.entrypointutils",
    "XCometLWIBoostedItemPickerControllerRouteBuilder",
    "XCometLWIEditingControllerRouteBuilder",
    "XCometLWIManagementControllerRouteBuilder",
    "XCometLWIPostCreationControllerRouteBuilder",
    "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e.pageID === t &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.boostID) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.legacyAccountID) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.pageID)
      );
    }
    function s(t, n) {
      return e(t, n)
        ? String(
            r("XCometLWIManagementControllerRouteBuilder").buildURL({
              boost_id: t.boostID,
              entry_point: "fb_maiba",
              page_id: t.pageID,
            }),
          )
        : null;
    }
    function u(t, n) {
      return e(t, n)
        ? r("XPaymentsBillingHubPaymentSettingsControllerRouteBuilder")
            .buildUri({ asset_id: t.legacyAccountID })
            .toString()
        : null;
    }
    function c(t, n, o) {
      return e(t, n)
        ? String(
            r("XCometLWIEditingControllerRouteBuilder").buildURL(
              babelHelpers.extends(
                { boost_id: t.boostID, entry_point: "fb_maiba" },
                o != null ? { native_edit_focus: o } : {},
              ),
            ),
          )
        : null;
    }
    function d(t, n, a) {
      return e(t, n) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(a)
        ? String(
            r("XCometLWIPostCreationControllerRouteBuilder").buildURL({
              ad_account_id: t.legacyAccountID,
              boost_id: t.boostID,
              entry_point: "fb_maiba",
              page_id: t.pageID,
              target_id: a,
            }),
          )
        : null;
    }
    function m(t, n, a, i) {
      return e(t, n) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(a)
        ? String(
            r("XCometLWIPostCreationControllerRouteBuilder").buildURL({
              ad_account_id: t.legacyAccountID,
              entry_point: "fb_maiba",
              page_id: t.pageID,
              so: i,
              target_id: a,
            }),
          )
        : null;
    }
    function p(t, n, a) {
      return e(t, n) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(a)
        ? String(
            r("XCometLWIPostCreationControllerRouteBuilder").buildURL({
              ad_account_id: t.legacyAccountID,
              entry_point: "fb_maiba",
              page_id: t.pageID,
              target_id: a,
            }),
          )
        : null;
    }
    function _(t, n) {
      return e(t, n)
        ? String(
            r("XCometLWIBoostedItemPickerControllerRouteBuilder").buildURL({
              entry_point: "fb_maiba",
              item_picker: "boosted_post_picker",
              page_id: t.pageID,
            }),
          )
        : null;
    }
    ((l.getFacebookNativeResultsHref = s),
      (l.getFacebookNativePaymentHref = u),
      (l.getFacebookNativeEditHref = c),
      (l.getFacebookNativeBoostPostHref = d),
      (l.getFacebookNativeBoostPostWithSettingsHref = m),
      (l.getFacebookNativeNewBoostPostHref = p),
      (l.getFacebookNativeBoostPostPickerHref = _));
  },
  98,
);
