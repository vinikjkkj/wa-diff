__d(
  "AdsMultiDestinationReportingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "actions:offsite_search_add_meta_leads",
        "actions:offsite_complete_registration_add_meta_leads",
        "actions:offsite_content_view_add_meta_leads",
        "actions:offsite_contact_website_add_meta_leads",
        "actions:offsite_submit_application_add_meta_leads",
        "actions:custom_event_actions_add_meta_leads.fb_pixel_custom",
        "actions:grouped_pixel_custom_conversions_meta_leads.custom",
        "actions:offsite_purchase_add_20_s_calls",
        "actions:offsite_lead_add_20_s_calls",
        "actions:offsite_content_view_add_20_s_calls",
        "actions:offsite_complete_registration_add_20_s_calls",
        "actions:offsite_initiate_checkout_add_20_s_calls",
        "actions:offsite_add_to_cart_add_20_s_calls",
      ],
      l = [
        "offsite_search_add_meta_leads",
        "offsite_complete_registration_add_meta_leads",
        "offsite_content_view_add_meta_leads",
        "offsite_contact_website_add_meta_leads",
        "offsite_submit_application_add_meta_leads",
        "custom_event_actions_add_meta_leads",
        "grouped_pixel_custom_conversions_meta_leads",
        "offsite_purchase_add_20_s_calls",
        "offsite_lead_add_20_s_calls",
        "offsite_content_view_add_20_s_calls",
        "offsite_complete_registration_add_20_s_calls",
        "offsite_initiate_checkout_add_20_s_calls",
        "offsite_add_to_cart_add_20_s_calls",
      ];
    function s(t) {
      return e.some(function (e) {
        return t.startsWith(e);
      });
    }
    var u = {
      "actions:offsite_search_add_meta_leads": [
        "meta leads",
        "website searches",
      ],
      "actions:offsite_complete_registration_add_meta_leads": [
        "meta leads",
        "website registrations completed",
      ],
      "actions:offsite_content_view_add_meta_leads": [
        "meta leads",
        "website content views",
      ],
      "actions:offsite_contact_website_add_meta_leads": [
        "meta leads",
        "contacts",
      ],
      "actions:offsite_submit_application_add_meta_leads": [
        "meta leads",
        "applications submitted",
      ],
      "actions:offsite_purchase_add_20_s_calls": [
        "website purchases",
        "20-second phone calls",
      ],
      "actions:offsite_lead_add_20_s_calls": [
        "website leads",
        "20-second phone calls",
      ],
      "actions:offsite_content_view_add_20_s_calls": [
        "website content views",
        "20-second phone calls",
      ],
      "actions:offsite_complete_registration_add_20_s_calls": [
        "website registrations completed",
        "20-second phone calls",
      ],
      "actions:offsite_initiate_checkout_add_20_s_calls": [
        "website checkouts initiated",
        "20-second phone calls",
      ],
      "actions:offsite_add_to_cart_add_20_s_calls": [
        "website adds to cart",
        "20-second phone calls",
      ],
    };
    function c(e) {
      if (e != null && e.includes("actions:")) {
        var t = e.split(":")[1];
        return d(t);
      }
      return !1;
    }
    function d(e) {
      return l.some(function (t) {
        return e.startsWith(t);
      });
    }
    function m() {
      return !0;
    }
    ((i.isMDReportingAggConversionKey = s),
      (i.LEAD_RESULTS_SUBFIELD_MAP = u),
      (i.isMDGroupedResultsField = c),
      (i.isMDReportingAggActionType = d),
      (i.isMDReportingMultiLabelQEOn = m));
  },
  66,
);
