__d(
  "WAWebBroadcastODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
      SEND: "web.broadcast.send",
      SEND_SUCCESS: "web.broadcast.send.success",
      SEND_ERROR: "web.broadcast.send.error",
      CAMPAIGN_CREATE: "web.broadcast.campaign.create",
      CAMPAIGN_CREATE_SUCCESS: "web.broadcast.campaign.create.success",
      CAMPAIGN_CREATE_ERROR: "web.broadcast.campaign.create.error",
      RETRY: "web.broadcast.retry",
      RETRY_SUCCESS: "web.broadcast.retry.success",
      RETRY_ERROR: "web.broadcast.retry.error",
      AUDIENCE_SAVE: "web.broadcast.audience.save",
      AUDIENCE_SAVE_SUCCESS: "web.broadcast.audience.save.success",
      AUDIENCE_SAVE_ERROR: "web.broadcast.audience.save.error",
      AUDIENCE_IMPORT: "web.broadcast.audience.import",
      AUDIENCE_IMPORT_SUCCESS: "web.broadcast.audience.import.success",
      AUDIENCE_IMPORT_ERROR: "web.broadcast.audience.import.error",
      CAMPAIGN_TRANSFORM_MSG_UNAVAILABLE:
        "web.broadcast.campaign.transform.msg_unavailable",
      ELIGIBILITY_PREFETCH: "web.broadcast.eligibility.prefetch",
      ELIGIBILITY_PREFETCH_SUCCESS:
        "web.broadcast.eligibility.prefetch.success",
      ELIGIBILITY_PREFETCH_ERROR: "web.broadcast.eligibility.prefetch.error",
      ELIGIBILITY_PREFETCH_ERROR_500:
        "web.broadcast.eligibility.prefetch.error.500",
    });
    function s() {
      r("WAWebODS").incr("web.broadcast.send");
    }
    function u() {
      r("WAWebODS").incr("web.broadcast.send.success");
    }
    function c() {
      r("WAWebODS").incr("web.broadcast.send.error");
    }
    function d() {
      r("WAWebODS").incr("web.broadcast.campaign.create");
    }
    function m() {
      r("WAWebODS").incr("web.broadcast.campaign.create.success");
    }
    function p() {
      r("WAWebODS").incr("web.broadcast.campaign.create.error");
    }
    function _() {
      r("WAWebODS").incr("web.broadcast.retry");
    }
    function f() {
      r("WAWebODS").incr("web.broadcast.retry.success");
    }
    function g() {
      r("WAWebODS").incr("web.broadcast.retry.error");
    }
    function h() {
      r("WAWebODS").incr("web.broadcast.audience.save");
    }
    function y() {
      r("WAWebODS").incr("web.broadcast.audience.save.success");
    }
    function C() {
      r("WAWebODS").incr("web.broadcast.audience.save.error");
    }
    function b() {
      r("WAWebODS").incr("web.broadcast.audience.import");
    }
    function v() {
      r("WAWebODS").incr("web.broadcast.audience.import.success");
    }
    function S() {
      r("WAWebODS").incr("web.broadcast.audience.import.error");
    }
    function R() {
      r("WAWebODS").incr("web.broadcast.campaign.transform.msg_unavailable");
    }
    function L() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch");
    }
    function E() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.success");
    }
    function k() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.error");
    }
    function I() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.error.500");
    }
    ((l.BroadcastODSKey = e),
      (l.bumpBroadcastSend = s),
      (l.bumpBroadcastSendSuccess = u),
      (l.bumpBroadcastSendError = c),
      (l.bumpCampaignCreate = d),
      (l.bumpCampaignCreateSuccess = m),
      (l.bumpCampaignCreateError = p),
      (l.bumpBroadcastRetry = _),
      (l.bumpBroadcastRetrySuccess = f),
      (l.bumpBroadcastRetryError = g),
      (l.logAudienceSave = h),
      (l.logAudienceSaveSuccess = y),
      (l.logAudienceSaveError = C),
      (l.logAudienceImport = b),
      (l.logAudienceImportSuccess = v),
      (l.logAudienceImportError = S),
      (l.logCampaignTransformMsgUnavailable = R),
      (l.logEligibilityPrefetch = L),
      (l.logEligibilityPrefetchSuccess = E),
      (l.logEligibilityPrefetchError = k),
      (l.logEligibilityPrefetchError500 = I));
  },
  98,
);
