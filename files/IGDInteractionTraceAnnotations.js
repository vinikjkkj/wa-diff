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
      var n,
        r = o("IGDInstamadilloUtils").isInstamadilloCutover(e),
        a = o("IGDInstamadilloUtils").isInstamadilloTransportEnabled(e),
        i = o("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(e);
      (t.addAnnotationBoolean("is_instamadillo", a),
        t.addAnnotationBoolean("is_instamadillo_tlc", r),
        t.addAnnotationBoolean("is_dm", i),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc",
          (n = o("IGDThreadTTLCUtils")).isIGDTTLCEnabledForThread(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_audio",
          n.isInstamadilloTTLCAudioEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_clip",
          n.isInstamadilloTTLCClipEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_generic_xma",
          n.isInstamadilloTTLCGenericXmaEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_image",
          n.isInstamadilloTTLCImageEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_link",
          n.isInstamadilloTTLCLinkEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_media_share",
          n.isInstamadilloTTLCMediaShareEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_profile",
          n.isInstamadilloTTLCProfileEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_reel_share",
          n.isInstamadilloTTLCReelShareEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_story_share",
          n.isInstamadilloTTLCStoryShareEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_text",
          n.isInstamadilloTTLCTextEnabled(e),
        ),
        t.addAnnotationBoolean(
          "is_instamadillo_ttlc_video",
          n.isInstamadilloTTLCVideoEnabled(e),
        ));
    }
    ((l.getInstamadilloBooleanAnnotations = e),
      (l.addInstamadilloAnnotationsToInteractionTrace = s));
  },
  98,
);
