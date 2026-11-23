__d(
  "AdsArConstants",
  ["fbt", "ix"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        description: s._(/*BTDS*/ ""),
        description_disabled: s._(/*BTDS*/ ""),
        name: s._(/*BTDS*/ ""),
        is_new: !1,
        snapshot_photo_src: u("847332"),
        tooltip_text_unsupported_placements: s._(/*BTDS*/ ""),
        tooltip_text_unsupported_format: s._(/*BTDS*/ ""),
        tooltip_text_unsupported_placements_formats: s._(/*BTDS*/ ""),
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
