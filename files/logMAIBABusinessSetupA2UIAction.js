__d(
  "logMAIBABusinessSetupA2UIAction",
  ["MAIBABusinessSetupUILogging", "logMAIBABusinessSetupUIEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        "action_id",
        "button_action",
        "external_conversation_id",
        "picker_type",
        "widget_type",
      ]),
      u = {
        AD_ACCOUNT: (e = o("MAIBABusinessSetupUILogging"))
          .MAIBABusinessSetupUIAssetTypes.AD_ACCOUNT,
        IG_ACCOUNT: e.MAIBABusinessSetupUIAssetTypes.INSTAGRAM,
        INSTAGRAM: e.MAIBABusinessSetupUIAssetTypes.INSTAGRAM,
        MIXED: e.MAIBABusinessSetupUIAssetTypes.MIXED,
        PAGE: e.MAIBABusinessSetupUIAssetTypes.PAGE,
      },
      c = {
        "action_list:business_profiles_add_cancel":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_ADD_PROFILES_CANCEL,
        "action_list:business_profiles_add_ig":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_ADD_PROFILES_INSTAGRAM,
        "action_list:business_profiles_create_page":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_ADD_PROFILES_PAGE,
        "add_instagram_profile:add_instagram_profile_client_action":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_INSTAGRAM_CONNECT,
        "add_instagram_profile:add_instagram_profile_submit":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_INSTAGRAM_CONNECT,
        "add_instagram_profile:use_existing_profile":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_INSTAGRAM_USE_EXISTING,
        "business_portfolio_edit:cancel":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PORTFOLIO_EDIT_CANCEL,
        "business_portfolio_edit:edit_suggestion":
          e.MAIBABusinessSetupUIEventDetailValues
            .A2UI_PORTFOLIO_EDIT_SUGGESTION,
        "business_portfolio_edit:submit":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PORTFOLIO_EDIT_SUBMIT,
        "create_page:submit":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_CREATE_PAGE_SUBMIT,
        "create_page:use_existing_profile":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_CREATE_PAGE_USE_EXISTING,
        "gp8_setup_asset_picker:add_action:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_AD_ACCOUNT_PICKER_CREATE,
        "gp8_setup_asset_picker:add_action:profiles":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PROFILES_PICKER_ADD,
        "gp8_setup_asset_picker:confirm:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues
            .A2UI_AD_ACCOUNT_PICKER_CONFIRM,
        "gp8_setup_asset_picker:confirm:profiles":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PROFILES_PICKER_CONFIRM,
        "gp8_setup_asset_picker:deselect:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues
            .A2UI_AD_ACCOUNT_PICKER_DESELECT,
        "gp8_setup_asset_picker:deselect:profiles":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PROFILES_PICKER_DESELECT,
        "gp8_setup_asset_picker:impression:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues
            .A2UI_AD_ACCOUNT_PICKER_IMPRESSION,
        "gp8_setup_asset_picker:impression:profiles":
          e.MAIBABusinessSetupUIEventDetailValues
            .A2UI_PROFILES_PICKER_IMPRESSION,
        "gp8_setup_asset_picker:secondary:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_AD_ACCOUNT_PICKER_CANCEL,
        "gp8_setup_asset_picker:secondary:profiles":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PROFILES_PICKER_CANCEL,
        "gp8_setup_asset_picker:select:ad_account":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_AD_ACCOUNT_PICKER_SELECT,
        "gp8_setup_asset_picker:select:profiles":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_PROFILES_PICKER_SELECT,
        "gp8_setup_asset_picker:show_all":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_ASSET_PICKER_SHOW_ALL,
        "gp8_setup_asset_picker:show_less":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_ASSET_PICKER_SHOW_LESS,
        "gp8_claim_confirm:gp8_claim_confirm_cancel":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CLAIM_CANCEL,
        "gp8_claim_confirm:gp8_claim_confirm_edit_asset":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CLAIM_EDIT_ASSET,
        "gp8_claim_confirm:gp8_claim_confirm_edit_portfolio":
          e.MAIBABusinessSetupUIEventDetailValues
            .MAIBA_GP8_CLAIM_EDIT_PORTFOLIO,
        "gp8_claim_confirm:impression":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CLAIM_CARD,
        "gp8_page_ig_connect:gp8_page_ig_connect_cancel":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CONNECT_CANCEL,
        "gp8_page_ig_connect:gp8_page_ig_connect_change_page":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CONNECT_CHANGE_PAGE,
        "gp8_page_ig_connect:impression":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CONNECT_CARD,
        "invite_people:invite_people":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_INVITE_PEOPLE_OPEN,
        "invite_people:skip":
          e.MAIBABusinessSetupUIEventDetailValues.A2UI_INVITE_PEOPLE_SKIP,
        "maiba_gp8_asset_create_card:maiba_gp8_asset_create_cancel":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CREATE_CANCEL,
        "maiba_gp8_asset_create_card:maiba_gp8_asset_create_edit_cancel":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CREATE_EDIT_CANCEL,
        "maiba_gp8_asset_create_card:maiba_gp8_asset_create_edit_details":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CREATE_EDIT_DETAILS,
        "maiba_gp8_asset_create_card:maiba_gp8_asset_create_edit_details_apply":
          e.MAIBABusinessSetupUIEventDetailValues
            .MAIBA_GP8_CREATE_EDIT_DETAILS_APPLY,
        "maiba_gp8_asset_create_card:maiba_gp8_asset_create_edit_portfolio":
          e.MAIBABusinessSetupUIEventDetailValues
            .MAIBA_GP8_CREATE_EDIT_PORTFOLIO,
        "maiba_gp8_asset_create_card:impression":
          e.MAIBABusinessSetupUIEventDetailValues.MAIBA_GP8_CREATE_CARD,
      };
    function d(e, t) {
      var n,
        r = t == null ? void 0 : t.widget_type;
      if (r == null) return null;
      if (r === "action_list") {
        var o,
          a = t == null ? void 0 : t.action_id;
        return a == null ? null : (o = c[r + ":" + a]) != null ? o : null;
      }
      if (r === "gp8_setup_asset_picker") {
        var i;
        if (e === "show_all" || e === "show_less") {
          var l;
          return (l = c[r + ":" + e]) != null ? l : null;
        }
        var s = t == null ? void 0 : t.picker_type;
        return s == null
          ? null
          : (i = c[r + ":" + e + ":" + s]) != null
            ? i
            : null;
      }
      return (n = c[r + ":" + e]) != null ? n : null;
    }
    function m(e) {
      var t = e == null ? void 0 : e.business_id;
      return t != null && /^[1-9]\d*$/.test(t) ? t : null;
    }
    function p(e) {
      var t = e == null ? void 0 : e.asset_ids;
      if (t == null || t === "") return null;
      var n = t.split(",").filter(function (e) {
        return e !== "";
      });
      return n.length === 0 ? null : n;
    }
    function _(e) {
      var t,
        n = e == null ? void 0 : e.asset_type;
      return n == null ? null : (t = u[n]) != null ? t : null;
    }
    function f(e, t) {
      var n =
          e != null && e !== ""
            ? babelHelpers.extends({}, t, { external_conversation_id: e })
            : t != null
              ? t
              : {},
        r = {};
      for (var o of Object.keys(n)) s.has(o) && (r[o] = n[o]);
      return r;
    }
    function g(e, t, n, a) {
      var i = d(n, a);
      if (i == null) return null;
      var l = _(a),
        s = l == null ? null : p(a);
      return (
        r("logMAIBABusinessSetupUIEvent")({
          assetIDs: s,
          assetType:
            s == null &&
            (a == null ? void 0 : a.widget_type) !== "gp8_claim_confirm"
              ? null
              : l,
          businessID: m(a),
          conversationID: t,
          entryPoint: (function (e) {
            return e === "maiba_gp8_asset_create_card"
              ? o("MAIBABusinessSetupUILogging").MAIBABusinessSetupUIEntryPoints
                  .MAIBA_GP8_CREATE
              : e === "gp8_page_ig_connect"
                ? o("MAIBABusinessSetupUILogging")
                    .MAIBABusinessSetupUIEntryPoints.MAIBA_GP8_CONNECT
                : o("MAIBABusinessSetupUILogging")
                    .MAIBABusinessSetupUIEntryPoints.AI_COPILOT;
          })(a == null ? void 0 : a.widget_type),
          event:
            e === "clicked"
              ? o("MAIBABusinessSetupUILogging").MAIBABusinessSetupUIEvents
                  .A2UI_BUTTON_CLICKED
              : e === "completed"
                ? o("MAIBABusinessSetupUILogging").MAIBABusinessSetupUIEvents
                    .A2UI_ACTION_COMPLETED
                : e === "impression"
                  ? o("MAIBABusinessSetupUILogging").MAIBABusinessSetupUIEvents
                      .COPILOT_CARD_IMPRESSION
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })(),
          eventDetails: i,
        }),
        f(t, a)
      );
    }
    l.default = g;
  },
  98,
);
