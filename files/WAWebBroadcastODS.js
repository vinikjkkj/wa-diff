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
      r("WAWebODS").incr("web.broadcast.pro.campaign.create");
    }
    function L() {
      r("WAWebODS").incr("web.broadcast.pro.campaign.create.success");
    }
    function E() {
      r("WAWebODS").incr("web.broadcast.pro.campaign.create.error");
    }
    function k() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save");
    }
    function I() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save.success");
    }
    function T() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save.error");
    }
    function D() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit");
    }
    function x() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit.success");
    }
    function $() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit.error");
    }
    function P() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup");
    }
    function N() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup.success");
    }
    function M() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup.error");
    }
    function w() {
      r("WAWebODS").incr("web.broadcast.campaign.transform.msg_unavailable");
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
      (l.bumpProCampaignCreate = R),
      (l.bumpProCampaignCreateSuccess = L),
      (l.bumpProCampaignCreateError = E),
      (l.logProAudienceSave = k),
      (l.logProAudienceSaveSuccess = I),
      (l.logProAudienceSaveError = T),
      (l.logProAudienceEdit = D),
      (l.logProAudienceEditSuccess = x),
      (l.logProAudienceEditError = $),
      (l.logProSubscriberPoolSetup = P),
      (l.logProSubscriberPoolSetupSuccess = N),
      (l.logProSubscriberPoolSetupError = M),
      (l.logCampaignTransformMsgUnavailable = w));
  },
  98,
);
