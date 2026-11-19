__d(
  "WAWebBizNativeAdsEntryTask",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      e: return e === "whatsapp_smb_web_ad_creation_home_screen_icon" ||
        e === "whatsapp_smb_web_ad_creation_home_menu_item" ||
        e === "whatsapp_smb_web_business_tools_list_item"
        ? { kind: "manage" }
        : e === "whatsapp_smb_web_ad_creation_home_banner" ||
            e === "whatsapp_smb_web_business_tools_top_card"
          ? { kind: "create" }
          : e === "whatsapp_smb_web_catalog" ||
              e === "whatsapp_smb_web_catalog_product"
            ? t == null || t === ""
              ? null
              : { catalogProductId: t, kind: "create" }
            : null;
    }
    function l(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "manage"
        )
          return null;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "create"
        )
          return {};
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "resume" &&
          "draftId" in t
        ) {
          var n = t.draftId;
          return { draftId: n };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "recreate" &&
          "boostId" in t
        ) {
          var r = t.boostId;
          return { boostId: r };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    ((i.getNativeAdsEntryTask = e), (i.getNativeAdsTaskPreparationOptions = l));
  },
  66,
);
