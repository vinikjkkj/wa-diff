__d(
  "AdsArConstants",
  ["fbt", "ix"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        description: s._(
          /*BTDS*/ "Import a camera effect into your Instant Experience to inspire people to interact with your brand.",
        ),
        description_disabled: s._(
          /*BTDS*/ "Import a camera effect into your Instant Experience to inspire people to interact with your brand.",
        ),
        name: s._(/*BTDS*/ "AR Experience"),
        is_new: !1,
        snapshot_photo_src: u("847332"),
        tooltip_text_unsupported_placements: s._(
          /*BTDS*/ "The AR Experience template is only supported on Facebook and Instagram mobile feeds, and Instagram Stories on mobile. To use this template, add one or more of these placements.",
        ),
        tooltip_text_unsupported_format: s._(
          /*BTDS*/ "You can only select this template for ads that use video, not images.",
        ),
        tooltip_text_unsupported_placements_formats: s._(
          /*BTDS*/ "The AR Experience template is only supported for video ads on Facebook and Instagram mobile feeds, and Instagram Stories on mobile. To use this template, add one or more of these placements.",
        ),
      },
      c = "https://fb.com/ar_experience/",
      d = new Set([
        "CALL_NOW",
        "MESSAGE_PAGE",
        "WHATSAPP_MESSAGE",
        "GET_DIRECTIONS",
        "FIND_A_GROUP",
        "FIND_YOUR_GROUPS",
        "JOBS_APPLY_NOW",
      ]);
    ((l.DEFAULT_TEMPLATE = e),
      (l.AR_ADS_LINK_PREFIX = c),
      (l.BLOCKLISTED_CTA = d));
  },
  226,
);
