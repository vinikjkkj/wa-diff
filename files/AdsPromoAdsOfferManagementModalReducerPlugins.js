__d(
  "AdsPromoAdsOfferManagementModalReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          switch (n.modalMode) {
            case "view":
              return babelHelpers.extends({}, t, {
                isViewModalVisible: !1,
                promoAdsOfferManagementReferralSurface: void 0,
              });
            case "create":
            case "edit":
              return babelHelpers.extends({}, t, {
                isEditModalVisible: !1,
                promoAdsOfferManagementReferralSurface: void 0,
              });
            case "create_and_select":
              return babelHelpers.extends({}, t, {
                isEditModalVisible: !1,
                isViewModalVisible: !1,
                promoAdsOfferManagementReferralSurface: void 0,
              });
            case "edit_confirmation":
              return babelHelpers.extends({}, t, {
                isEditConfirmationModalVisible: !1,
                promoAdsOfferManagementReferralSurface: void 0,
              });
            default:
              return babelHelpers.extends({}, t, {
                isEditModalVisible: !1,
                isViewModalVisible: !1,
                promoAdsOfferManagementReferralSurface: void 0,
              });
          }
        },
      },
      l = {
        reduce: function (t, n) {
          switch (n.modalMode) {
            case "view":
              return babelHelpers.extends({}, t, {
                isViewModalVisible: !0,
                modalMode: n.modalMode,
              });
            case "create":
            case "create_and_select":
            case "edit":
              return babelHelpers.extends({}, t, {
                selectedPromoOffer: n.selectedPromoOffer,
                isEditModalVisible: !0,
                isViewModalVisible: !0,
                modalMode: n.modalMode,
                newPromoCodeName: n.newPromoCodeName,
              });
            case "edit_confirmation":
              return babelHelpers.extends({}, t, {
                isEditConfirmationModalVisible: !0,
                modalMode: n.modalMode,
              });
            case "none":
              return babelHelpers.extends({}, t, {
                selectedPromoOffer: n.selectedPromoOffer,
              });
            default:
              return t;
          }
        },
      },
      s = {
        reduce: function (t, n) {
          switch (n.modalMode) {
            case "create_and_select":
            case "edit":
              return babelHelpers.extends({}, t, {
                selectedPromoOffer: n.selectedPromoOffer,
                isEditModalVisible: !0,
                isViewModalVisible: !0,
                modalMode: n.modalMode,
                newPromoCodeName: n.newPromoCodeName,
                promoAdsOfferManagementReferralSurface:
                  n.promoAdsOfferManagementReferralSurface,
              });
            case "none":
              return babelHelpers.extends({}, t, {
                newPromoCodeName: n.newPromoCodeName,
                promoAdsOfferManagementReferralSurface:
                  n.promoAdsOfferManagementReferralSurface,
                selectedPromoOffer: n.selectedPromoOffer,
              });
            default:
              return babelHelpers.extends({}, t);
          }
        },
      };
    ((i.onPromoAdsOfferManagementModalClose = e),
      (i.onPromoAdsOfferManagementModalOpen = l),
      (i.onPromoAdsOfferManagementAddEditOfferModal = s));
  },
  66,
);
