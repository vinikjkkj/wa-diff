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
      r("WAWebODS").incr("web.broadcast.campaign.create");
    }
    function d() {
      r("WAWebODS").incr("web.broadcast.campaign.create.success");
    }
    function m() {
      r("WAWebODS").incr("web.broadcast.campaign.create.error");
    }
    function p() {
      r("WAWebODS").incr("web.broadcast.retry");
    }
    function _() {
      r("WAWebODS").incr("web.broadcast.retry.success");
    }
    function f() {
      r("WAWebODS").incr("web.broadcast.retry.error");
    }
    function g() {
      r("WAWebODS").incr("web.broadcast.audience.save");
    }
    function h() {
      r("WAWebODS").incr("web.broadcast.audience.save.success");
    }
    function y() {
      r("WAWebODS").incr("web.broadcast.audience.save.error");
    }
    function C() {
      r("WAWebODS").incr("web.broadcast.audience.import");
    }
    function b() {
      r("WAWebODS").incr("web.broadcast.audience.import.success");
    }
    function v() {
      r("WAWebODS").incr("web.broadcast.audience.import.error");
    }
    function S() {
      r("WAWebODS").incr("web.broadcast.campaign.transform.msg_unavailable");
    }
    function R() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch");
    }
    function L() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.success");
    }
    function E() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.error");
    }
    function k() {
      r("WAWebODS").incr("web.broadcast.eligibility.prefetch.error.500");
    }
    ((l.bumpBroadcastSend = e),
      (l.bumpBroadcastSendSuccess = s),
      (l.bumpBroadcastSendError = u),
      (l.bumpCampaignCreate = c),
      (l.bumpCampaignCreateSuccess = d),
      (l.bumpCampaignCreateError = m),
      (l.bumpBroadcastRetry = p),
      (l.bumpBroadcastRetrySuccess = _),
      (l.bumpBroadcastRetryError = f),
      (l.logAudienceSave = g),
      (l.logAudienceSaveSuccess = h),
      (l.logAudienceSaveError = y),
      (l.logAudienceImport = C),
      (l.logAudienceImportSuccess = b),
      (l.logAudienceImportError = v),
      (l.logCampaignTransformMsgUnavailable = S),
      (l.logEligibilityPrefetch = R),
      (l.logEligibilityPrefetchSuccess = L),
      (l.logEligibilityPrefetchError = E),
      (l.logEligibilityPrefetchError500 = k));
  },
  98,
);
