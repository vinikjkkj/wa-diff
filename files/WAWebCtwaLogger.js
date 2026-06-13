__d(
  "WAWebCtwaLogger",
  [
    "WAWebCtwaBizUserJourneyWamEvent",
    "WAWebWamEnumCtwaBizUserJourneyOperation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["agm"],
      c = u.join(", "),
      d = {
        injected: "injected",
        duplicated: "duplicated",
        null_greeting_message: "null_greeting_message",
        invalid_source_app: "invalid_source_app",
        bottomsheet_text_error: "bottomsheet_text_error",
        agm_cta_clicked: "agm_cta_clicked",
        agm_bottomsheet_external_navigation:
          "agm_bottomsheet_external_navigation",
        agm_view_details_clicked: "agm_view_details_clicked",
        agm_bottom_sheet_shown: "agm_bottom_sheet_shown",
        agm_bottom_sheet_closed: "agm_bottom_sheet_closed",
        agm_invalid_cta_payload: "agm_invalid_cta_payload",
        agm_bottom_sheet_image_error: "agm_bottom_sheet_image_error",
      },
      m =
        ((e = {}),
        (e[d.injected] = "AGM_INJECTED"),
        (e[d.duplicated] = "DUPLICATED_AGM_NOT_INJECTED"),
        (e[d.null_greeting_message] = "AGM_WELCOME_MESSAGE_NULL"),
        (e[d.bottomsheet_text_error] = "AGM_BOTTOMSHEET_TEXT_ERROR"),
        (e[d.agm_cta_clicked] = "AGM_CTA_CLICKED"),
        (e[d.agm_bottomsheet_external_navigation] =
          "AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION"),
        (e[d.agm_view_details_clicked] = "AGM_VIEW_DETAILS_CLICKED"),
        (e[d.agm_bottom_sheet_shown] = "AGM_BOTTOMSHEET_SHOWN"),
        (e[d.agm_bottom_sheet_closed] = "AGM_BOTTOMSHEET_CLOSED"),
        (e[d.agm_bottom_sheet_image_error] = "AGM_BOTTOMSHEET_IMAGE_ERROR"),
        e),
      p = babelHelpers.extends(
        {},
        m,
        ((s = {}),
        (s[d.invalid_source_app] = "AGM_INVALID_SOURCE_APP_FROM_MESSAGE"),
        (s[d.agm_invalid_cta_payload] = "AGM_INVALID_CTA_PAYLOAD_FROM_MESSAGE"),
        s),
      );
    function _(e) {
      var t,
        n = e.adId,
        r = e.agmPayload,
        a = e.fromBusiness,
        i = e.operationType;
      if (a) {
        var l = p[i];
        f({
          ctaType: (t = r == null ? void 0 : r.ctaType) != null ? t : null,
          adID: n,
          operation: o("WAWebWamEnumCtwaBizUserJourneyOperation")
            .CTWA_BIZ_USER_JOURNEY_OPERATION[l],
        });
      }
    }
    function f(e) {
      var t = e.adID,
        n = e.ctaType,
        r = e.operation;
      new (o("WAWebCtwaBizUserJourneyWamEvent").CtwaBizUserJourneyWamEvent)({
        adId: String(t),
        ctwaBizUserJourneyOperation: r,
        bizFeatureEnabled: c,
        ctwaBizUserJourneyMetadata: JSON.stringify({ agm_cta_type: n }),
      }).commit();
    }
    ((l.AGM_OPERATION_TYPE = d), (l.logAGMOperation = _));
  },
  98,
);
