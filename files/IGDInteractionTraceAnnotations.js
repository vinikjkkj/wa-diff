__d(
  "IGDInteractionTraceAnnotations",
  ["IGDInstamadilloUtils", "IGDThreadTTLCUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return babelHelpers.extends(
        {},
        o("IGDThreadTTLCUtils").getTTLCBooleanAnnotations(e),
        {
          is_dm: o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e),
          is_instamadillo: o(
            "IGDInstamadilloUtils",
          ).isInstamadilloTransportEnabled(e),
          is_instamadillo_tlc: o("IGDInstamadilloUtils").isInstamadilloCutover(
            e,
          ),
        },
      );
    }
    function s(e, t) {
      var n = o("IGDInstamadilloUtils").isInstamadilloCutover(e),
        r = o("IGDInstamadilloUtils").isInstamadilloTransportEnabled(e),
        a = o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e);
      (t.addAnnotationBoolean("is_instamadillo", r),
        t.addAnnotationBoolean("is_instamadillo_tlc", n),
        t.addAnnotationBoolean("is_dm", a),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc",
          o("IGDThreadTTLCUtils").isIGDTTLCEnabledForThread(e),
        ),
        t.addAnnotationBoolean("is_instamadillo_ttlc_audio", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_clip", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_generic_xma", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_image", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_link", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_media_share", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_profile", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_reel_share", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_story_share", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_text", !1),
        t.addAnnotationBoolean("is_instamadillo_ttlc_video", !1));
    }
    ((l.getInstamadilloBooleanAnnotations = e),
      (l.addInstamadilloAnnotationsToInteractionTrace = s));
  },
  98,
);
