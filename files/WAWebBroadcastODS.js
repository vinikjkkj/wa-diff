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
      r("WAWebODS").incr("web.broadcast.core.delivery.success");
    }
    function d() {
      r("WAWebODS").incr("web.broadcast.core.post_send.error");
    }
    function m(e) {
      r("WAWebODS").incr("web.broadcast.core.delivery.error");
      e: {
        if (e === "account") {
          r("WAWebODS").incr("web.broadcast.core.delivery.error.account");
          break e;
        }
        if (e === "service") {
          r("WAWebODS").incr("web.broadcast.core.delivery.error.service");
          break e;
        }
        if (e === "unknown") {
          r("WAWebODS").incr("web.broadcast.core.delivery.error.unknown");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function p() {
      r("WAWebODS").incr("web.broadcast.send.ephemeral_setup.error");
    }
    function _() {
      r("WAWebODS").incr("web.broadcast.campaign.create");
    }
    function f() {
      r("WAWebODS").incr("web.broadcast.campaign.create.success");
    }
    function g() {
      r("WAWebODS").incr("web.broadcast.campaign.create.error");
    }
    function h() {
      r("WAWebODS").incr("web.broadcast.retry");
    }
    function y() {
      r("WAWebODS").incr("web.broadcast.retry.success");
    }
    function C() {
      r("WAWebODS").incr("web.broadcast.retry.error");
    }
    function b() {
      r("WAWebODS").incr("web.broadcast.audience.save");
    }
    function v() {
      r("WAWebODS").incr("web.broadcast.audience.save.success");
    }
    function S() {
      r("WAWebODS").incr("web.broadcast.audience.save.error");
    }
    function R() {
      r("WAWebODS").incr("web.broadcast.audience.import");
    }
    function L() {
      r("WAWebODS").incr("web.broadcast.audience.import.success");
    }
    function E(e) {
      r("WAWebODS").incr("web.broadcast.audience.import.error");
      e: {
        if (e === "account") {
          r("WAWebODS").incr("web.broadcast.audience.import.error.account");
          break e;
        }
        if (e === "unknown") {
          r("WAWebODS").incr("web.broadcast.audience.import.error.unknown");
          break e;
        }
        if (e === void 0) return;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function k() {
      r("WAWebODS").incr("web.broadcast.pro.campaign.create");
    }
    function I() {
      r("WAWebODS").incr("web.broadcast.pro.campaign.create.success");
    }
    function T() {
      r("WAWebODS").incr("web.broadcast.pro.campaign.create.error");
    }
    function D() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save");
    }
    function x() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save.success");
    }
    function $() {
      r("WAWebODS").incr("web.broadcast.pro.audience.save.error");
    }
    function P() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit");
    }
    function N() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit.success");
    }
    function M() {
      r("WAWebODS").incr("web.broadcast.pro.audience.edit.error");
    }
    function w() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup");
    }
    function A() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup.success");
    }
    function F() {
      r("WAWebODS").incr("web.broadcast.pro.subscriber_pool.setup.error");
    }
    function O() {
      r("WAWebODS").incr("web.broadcast.campaign.transform.msg_unavailable");
    }
    ((l.bumpBroadcastSend = e),
      (l.bumpBroadcastSendSuccess = s),
      (l.bumpBroadcastSendError = u),
      (l.bumpCoreBroadcastDeliverySuccess = c),
      (l.bumpCoreBroadcastPostSendError = d),
      (l.bumpCoreBroadcastDeliveryError = m),
      (l.bumpBroadcastEphemeralSetupError = p),
      (l.bumpCampaignCreate = _),
      (l.bumpCampaignCreateSuccess = f),
      (l.bumpCampaignCreateError = g),
      (l.bumpBroadcastRetry = h),
      (l.bumpBroadcastRetrySuccess = y),
      (l.bumpBroadcastRetryError = C),
      (l.logAudienceSave = b),
      (l.logAudienceSaveSuccess = v),
      (l.logAudienceSaveError = S),
      (l.logAudienceImport = R),
      (l.logAudienceImportSuccess = L),
      (l.logAudienceImportError = E),
      (l.bumpProCampaignCreate = k),
      (l.bumpProCampaignCreateSuccess = I),
      (l.bumpProCampaignCreateError = T),
      (l.logProAudienceSave = D),
      (l.logProAudienceSaveSuccess = x),
      (l.logProAudienceSaveError = $),
      (l.logProAudienceEdit = P),
      (l.logProAudienceEditSuccess = N),
      (l.logProAudienceEditError = M),
      (l.logProSubscriberPoolSetup = w),
      (l.logProSubscriberPoolSetupSuccess = A),
      (l.logProSubscriberPoolSetupError = F),
      (l.logCampaignTransformMsgUnavailable = O));
  },
  98,
);
