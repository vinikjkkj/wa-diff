__d(
  "IGDThreadTTLCUtils",
  ["IGDInstamadilloUtils", "LSThreadBitOffset"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [225, 235, 226, 227, 228, 229, 230, 231, 232, 233, 234, 236];
    function s(e) {
      return e == null ||
        o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e)
        ? !1
        : u(e);
    }
    function u(t) {
      return t == null
        ? !1
        : e.some(function (e) {
            return o("LSThreadBitOffset").has(e, t);
          });
    }
    function c(e) {
      return {
        is_instamadillo_ttlc: s(e),
        is_instamadillo_ttlc_audio: !1,
        is_instamadillo_ttlc_clip: !1,
        is_instamadillo_ttlc_generic_xma: !1,
        is_instamadillo_ttlc_image: !1,
        is_instamadillo_ttlc_link: !1,
        is_instamadillo_ttlc_media_share: !1,
        is_instamadillo_ttlc_profile: !1,
        is_instamadillo_ttlc_reel_share: !1,
        is_instamadillo_ttlc_story_share: !1,
        is_instamadillo_ttlc_text: !1,
        is_instamadillo_ttlc_video: !1,
      };
    }
    ((l.isIGDTTLCEnabledForThread = s),
      (l.threadHasInstamadilloTTLCCapability = u),
      (l.getTTLCBooleanAnnotations = c));
  },
  98,
);
