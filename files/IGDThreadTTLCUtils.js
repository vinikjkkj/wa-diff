__d(
  "IGDThreadTTLCUtils",
  [
    "IGDInstamadilloUtils",
    "InstagramMediaProductTypeName",
    "LSThreadBitOffset",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [225, 235, 226, 227, 228, 229, 230, 231, 232, 233, 234, 236];
    function s(e, t) {
      return (
        e == null || o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e),
        !1
      );
    }
    function u(e) {
      return s(e, 225);
    }
    function c(e) {
      return s(e, 226);
    }
    function d(e) {
      return s(e, 227);
    }
    function m(e) {
      return s(e, 228);
    }
    function p(e) {
      return s(e, 229);
    }
    function _(e) {
      return s(e, 230);
    }
    function f(e) {
      return s(e, 231);
    }
    function g(e) {
      return s(e, 232);
    }
    function h(e) {
      return s(e, 233);
    }
    function y(e) {
      return s(e, 234);
    }
    function C(e) {
      return s(e, 236);
    }
    function b(e) {
      return e == null ||
        o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e)
        ? !1
        : v(e);
    }
    function v(t) {
      return t == null
        ? !1
        : e.some(function (e) {
            return o("LSThreadBitOffset").has(e, t);
          });
    }
    function S(e, t) {
      var n = e.isDisappearingModeSettingOn,
        o = e.isTTLCClipEnabled,
        a = e.isTTLCGenericXMAShareEnabled,
        i = e.isTTLCMediaShareEnabled,
        l = e.isTTLCStoryShareEnabled,
        s = r("InstagramMediaProductTypeName").cast(t);
      return (s == null || n, !1);
    }
    function R(e) {
      return {
        is_instamadillo_ttlc: b(e),
        is_instamadillo_ttlc_audio: y(e),
        is_instamadillo_ttlc_clip: c(e),
        is_instamadillo_ttlc_generic_xma: f(e),
        is_instamadillo_ttlc_image: g(e),
        is_instamadillo_ttlc_link: _(e),
        is_instamadillo_ttlc_media_share: m(e),
        is_instamadillo_ttlc_profile: C(e),
        is_instamadillo_ttlc_reel_share: d(e),
        is_instamadillo_ttlc_story_share: p(e),
        is_instamadillo_ttlc_text: u(e),
        is_instamadillo_ttlc_video: h(e),
      };
    }
    function L(e, t) {
      if (e == null) return !1;
      switch (e.__typename) {
        case "XMSGIgReceiverFetchXmaFeedFetchParams":
          return m(t);
        case "XMSGIgReceiverFetchXmaProfileFetchParams":
          return f(t);
        case "XMSGIgReceiverFetchXmaClipFetchParams":
          return c(t);
        default:
          return !1;
      }
    }
    ((l.isInstamadilloTTLCTextEnabled = u),
      (l.isInstamadilloTTLCClipEnabled = c),
      (l.isInstamadilloTTLCReelShareEnabled = d),
      (l.isInstamadilloTTLCMediaShareEnabled = m),
      (l.isInstamadilloTTLCStoryShareEnabled = p),
      (l.isInstamadilloTTLCLinkEnabled = _),
      (l.isInstamadilloTTLCGenericXmaEnabled = f),
      (l.isInstamadilloTTLCImageEnabled = g),
      (l.isInstamadilloTTLCVideoEnabled = h),
      (l.isInstamadilloTTLCAudioEnabled = y),
      (l.isInstamadilloTTLCProfileEnabled = C),
      (l.isIGDTTLCEnabledForThread = b),
      (l.threadHasInstamadilloTTLCCapability = v),
      (l.isIGDTTLCEnabledForIGDCandidate = S),
      (l.getTTLCBooleanAnnotations = R),
      (l.isXmaReceiverFetchTTLCEnabled = L));
  },
  98,
);
