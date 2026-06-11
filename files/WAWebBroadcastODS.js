__d(
  "WAWebBroadcastODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebODS").incr("web.broadcast.send");
    }
    function s() {
      r("WAWebODS").incr("web.broadcast.send.success");
    }
    function u() {
      r("WAWebODS").incr("web.broadcast.send.error");
    }
    function c() {
      r("WAWebODS").incr("web.broadcast.send.ephemeral_setup.error");
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
    ((l.bumpBroadcastSend = e),
      (l.bumpBroadcastSendSuccess = s),
      (l.bumpBroadcastSendError = u),
      (l.bumpBroadcastEphemeralSetupError = c),
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
