__d(
  "WAWebBusinessProfileSMBUserJourneyLogger",
  [
    "$InternalEnum",
    "WAWebBusinessProfileUtils",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        ABOUT_INFO: "about_info",
        ADD_ANOTHER_WEBSITE: "add_another_website",
        ADDRESS: "address",
        BACK: "back",
        BIZ_DESCRIPTION: "biz_description",
        BIZ_HOURS: "biz_hours",
        BIZ_NAME: "biz_name",
        CATALOG_PRODUCT: "catalog_product",
        CATEGORY: "category",
        CONFIRM_DIALOG_CANCEL_BUTTON: "confirm_dialog_cancel_button",
        CONFIRM_DIALOG_CONTINUE_BUTTON: "confirm_dialog_continue_button",
        COVER_PHOTO: "cover_photo",
        EMAIL: "email",
        ERROR_DIALOG_OK_BUTTON: "error_dialog_ok_button",
        FB_ACCOUNT: "fb_account",
        FB_IG_ACCOUNT: "fb_ig_account",
        IG_ACCOUNT: "ig_account",
        MANAGE_CATALOG: "manage_catalog",
        MANAGE_SERVICES: "manage_services",
        PHONE_NUMBER: "phone_number",
        PRICE_RANGE: "price_range",
        PROFILE_PHOTO: "profile_photo",
        SAVE_ABOUT_INFO: "save_about_info",
        SAVE_ADDRESS: "save_address",
        SAVE_BIZ_DESCRIPTION: "save_biz_description",
        SAVE_BIZ_HOURS: "save_biz_hours",
        SAVE_BIZ_NAME: "save_biz_name",
        SAVE_CATEGORY: "save_category",
        SAVE_COVER_PHOTO: "save_cover_photo",
        SAVE_EMAIL: "save_email",
        SAVE_FB_ACCOUNT: "save_fb_account",
        SAVE_IG_ACCOUNT: "save_ig_account",
        SAVE_MANAGE_SERVICES: "save_manage_services",
        SAVE_PHONE_NUMBER: "save_phone_number",
        SAVE_PRICE_RANGE: "save_price_range",
        SAVE_PRIMARY_WEBSITE: "save_primary_website",
        SAVE_PROFILE_PHOTO: "save_profile_photo",
        SAVE_SECONDARY_WEBSITE: "save_secondary_website",
        SAVE_USER_NAME: "save_user_name",
        SAVE_WEBSITE: "save_website",
        USER_NAME: "user_name",
        WEBSITE: "website",
      },
      s = n("$InternalEnum")({
        ADD: "add",
        MODIFY: "modify",
        REMOVE: "remove",
        UNCHANGED: "unchanged",
      }),
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.viewProfile = function (t) {
            this.$1(
              babelHelpers.extends(
                {
                  action: o("WAWebWamEnumSmbUserActionTypeEnum")
                    .SMB_USER_ACTION_TYPE_ENUM.VIEW,
                },
                t != null ? { entryPoint: t } : {},
              ),
            );
          }),
          (n.clickBusinessName = function () {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              userActionTarget: e.BIZ_NAME,
            });
          }),
          (n.saveBusinessName = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { biz_name_edit_op: n },
              userActionTarget: e.SAVE_BIZ_NAME,
            });
          }),
          (n.clickBusinessHours = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_biz_hours: n },
              userActionTarget: e.BIZ_HOURS,
            });
          }),
          (n.saveBusinessHours = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { biz_hour_edit_op: n },
              userActionTarget: e.SAVE_BIZ_HOURS,
            });
          }),
          (n.clickCategory = function () {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              userActionTarget: e.CATEGORY,
            });
          }),
          (n.saveCategory = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { category_edit_op: n },
              userActionTarget: e.SAVE_CATEGORY,
            });
          }),
          (n.clickAddress = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_address: n },
              userActionTarget: e.ADDRESS,
            });
          }),
          (n.clickDescription = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_biz_description: n },
              userActionTarget: e.BIZ_DESCRIPTION,
            });
          }),
          (n.clickEmail = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_email: n },
              userActionTarget: e.EMAIL,
            });
          }),
          (n.clickPriceRange = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_price_range: n },
              userActionTarget: e.PRICE_RANGE,
            });
          }),
          (n.clickWebsite = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_website: n },
              userActionTarget: e.WEBSITE,
            });
          }),
          (n.clickAddAnotherWebsite = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_website: n },
              userActionTarget: e.ADD_ANOTHER_WEBSITE,
            });
          }),
          (n.clickAboutInfo = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_about_info: n },
              userActionTarget: e.ABOUT_INFO,
            });
          }),
          (n.saveProfilePhoto = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { profile_photo_edit_op: n },
              userActionTarget: e.SAVE_PROFILE_PHOTO,
            });
          }),
          (n.saveCoverPhoto = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { cover_photo_edit_op: n },
              userActionTarget: e.SAVE_COVER_PHOTO,
            });
          }),
          (n.clickProfilePhoto = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_profile_photo: n },
              userActionTarget: e.PROFILE_PHOTO,
            });
          }),
          (n.clickCoverPhoto = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { has_cover_photo: n },
              userActionTarget: e.COVER_PHOTO,
            });
          }),
          (n.saveBizDescription = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { biz_description_edit_op: n },
              userActionTarget: e.SAVE_BIZ_DESCRIPTION,
            });
          }),
          (n.saveAddress = function (n, r, a) {
            var t = { address_edit_op: n };
            (r != null && (t.radius = r),
              a != null && (t.has_location_notes = a),
              this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: t,
                userActionTarget: e.SAVE_ADDRESS,
              }));
          }),
          (n.savePriceRange = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { price_range_edit_op: n },
              userActionTarget: e.SAVE_PRICE_RANGE,
            });
          }),
          (n.saveEmail = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { email_edit_op: n },
              userActionTarget: e.SAVE_EMAIL,
            });
          }),
          (n.savePrimaryWebsite = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { website_edit_op: n },
              userActionTarget: e.SAVE_PRIMARY_WEBSITE,
            });
          }),
          (n.saveSecondaryWebsite = function (n) {
            this.$1({
              action: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              extraAttributes: { website_edit_op: n },
              userActionTarget: e.SAVE_SECONDARY_WEBSITE,
            });
          }),
          (n.logProfileFieldsSave = function (t, n) {
            var e = o("WAWebBusinessProfileUtils").getEditOperationType(
              t.description,
              n.description,
            );
            e != null && this.saveBizDescription(e);
            var r = o("WAWebBusinessProfileUtils").getEditOperationType(
                t.address,
                n.address,
              ),
              a = t.serviceAreaRadius !== n.serviceAreaRadius,
              i = t.locationNotes !== n.locationNotes;
            if (r != null || a || i) {
              var l = n.locationNotes != null && n.locationNotes !== "";
              this.saveAddress(
                r != null ? r : s.UNCHANGED,
                n.serviceAreaRadius,
                l,
              );
            }
            var u = o("WAWebBusinessProfileUtils").getEditOperationType(
              t.email,
              n.email,
            );
            u != null && this.saveEmail(u);
            var c = o("WAWebBusinessProfileUtils").getEditOperationType(
              t.primaryWebsite,
              n.primaryWebsite,
            );
            c != null && this.savePrimaryWebsite(c);
            var d = o("WAWebBusinessProfileUtils").getEditOperationType(
              t.secondaryWebsite,
              n.secondaryWebsite,
            );
            d != null && this.saveSecondaryWebsite(d);
            var m = function (t) {
                return t === "0" ? "" : t;
              },
              p = o("WAWebBusinessProfileUtils").getEditOperationType(
                m(t.priceTier),
                m(n.priceTier),
              );
            p != null && this.savePriceRange(p);
          }),
          (n.$1 = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              entryPoint: t.entryPoint,
              extraAttributes: t.extraAttributes,
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_PROFILE,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .EDIT_BIZ_PROFILE,
              userActionTarget: t.userActionTarget,
              userActionType: t.action,
            });
          }),
          t
        );
      })(),
      c = new u();
    ((l.OperationType = s), (l.BusinessProfileUserJourneyLogger = c));
  },
  98,
);
