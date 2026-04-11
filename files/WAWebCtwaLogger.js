__d(
  "WAWebCtwaLogger",
  [
    "WAWebBizGatingUtils",
    "WAWebCtwaBizUserJourneyWamEvent",
    "WAWebCtwaUserJourneyWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumCtwaBizUserJourneyOperation",
    "WAWebWamEnumCtwaUserJourneyOperationType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = ["agm"],
      d = c.join(", "),
      m = {
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
      p =
        ((e = {}),
        (e[m.injected] = "AGM_INJECTED"),
        (e[m.duplicated] = "DUPLICATED_AGM_NOT_INJECTED"),
        (e[m.null_greeting_message] = "AGM_WELCOME_MESSAGE_NULL"),
        (e[m.bottomsheet_text_error] = "AGM_BOTTOMSHEET_TEXT_ERROR"),
        (e[m.agm_cta_clicked] = "AGM_CTA_CLICKED"),
        (e[m.agm_bottomsheet_external_navigation] =
          "AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION"),
        (e[m.agm_view_details_clicked] = "AGM_VIEW_DETAILS_CLICKED"),
        (e[m.agm_bottom_sheet_shown] = "AGM_BOTTOMSHEET_SHOWN"),
        (e[m.agm_bottom_sheet_closed] = "AGM_BOTTOMSHEET_CLOSED"),
        (e[m.agm_bottom_sheet_image_error] = "AGM_BOTTOMSHEET_IMAGE_ERROR"),
        e),
      _ = babelHelpers.extends(
        {},
        p,
        ((s = {}),
        (s[m.invalid_source_app] = "AGM_INVALID_SOURCE_APP_FROM_MESSAGE"),
        (s[m.agm_invalid_cta_payload] = "AGM_INVALID_CTA_PAYLOAD_FROM_MESSAGE"),
        s),
      ),
      f = babelHelpers.extends(
        {},
        p,
        ((u = {}),
        (u[m.invalid_source_app] = "AGM_INVALID_SOURCE_APP_FROM_ACTION_LINK"),
        (u[m.agm_invalid_cta_payload] =
          "AGM_INVALID_CTA_PAYLOAD_FROM_ACTION_LINK"),
        u),
      );
    function g(e) {
      var t,
        n = e.adId,
        r = e.agmPayload,
        a = e.businessWid,
        i = e.fromBusiness,
        l = e.operationType,
        s = {
          ctaType: (t = r == null ? void 0 : r.ctaType) != null ? t : null,
          adID: n,
        };
      if (i) {
        var c = _[l];
        y(
          babelHelpers.extends({}, s, {
            operation: o("WAWebWamEnumCtwaBizUserJourneyOperation")
              .CTWA_BIZ_USER_JOURNEY_OPERATION[c],
          }),
        );
      } else {
        var u = f[l];
        h(
          babelHelpers.extends({}, s, {
            businessPhoneNumber: a,
            operation: o("WAWebWamEnumCtwaUserJourneyOperationType")
              .CTWA_USER_JOURNEY_OPERATION_TYPE[u],
          }),
        );
      }
    }
    function h(e) {
      if (
        o("WAWebBizGatingUtils").getFmxAgmEnabled() &&
        o("WAWebBizGatingUtils").getCtwaLogUserJourneyEnabled()
      ) {
        var t = e.adID,
          n = e.businessPhoneNumber,
          r = e.ctaType,
          a = e.operation;
        new (o("WAWebCtwaUserJourneyWamEvent").CtwaUserJourneyWamEvent)(
          babelHelpers.extends(
            { adId: String(t), ctwaUserJourneyOperation: a },
            n != null ? { businessJid: b(n) } : null,
            {
              icebreakersShown: !1,
              ctwaUserJourneyMetadata: JSON.stringify({ agm_cta_type: r }),
              featureEnabled: d,
            },
          ),
        ).commit();
      }
    }
    function y(e) {
      if (o("WAWebBizGatingUtils").getFmxAgmEnabled()) {
        var t = e.adID,
          n = e.ctaType,
          r = e.operation;
        new (o("WAWebCtwaBizUserJourneyWamEvent").CtwaBizUserJourneyWamEvent)({
          adId: String(t),
          ctwaBizUserJourneyOperation: r,
          bizFeatureEnabled: d,
          ctwaBizUserJourneyMetadata: JSON.stringify({ agm_cta_type: n }),
        }).commit();
      }
    }
    function C(e) {
      return e != null ? e.toString() : "null";
    }
    function b(e) {
      var t = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated(),
        n = t ? o("WAWebLidMigrationUtils").toLid(e) : null,
        r = n != null ? n : e;
      return C(r);
    }
    ((l.AGM_OPERATION_TYPE = m), (l.logAGMOperation = g));
  },
  98,
);
