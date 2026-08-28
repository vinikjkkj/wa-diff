__d(
  "AdsCreativeFlexTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("$InternalEnum")).Mirrored([
        "OPT_IN",
        "OPT_IN_AS_DEFAULT_ON",
        "OPT_IN_AS_INFERRED_DA_INTRO_CARD",
        "OPT_OUT",
        "UNDEFINED",
      ]),
      u = e({
        DELETE_ALL: "delete_all",
        DEFAULT_ON: "default_on",
        DEFAULT: "default",
      }),
      c = e.Mirrored([
        "CROP",
        "TEXT",
        "PLACEMENTS",
        "DESTINATION",
        "TRIM",
        "THUMBNAIL",
        "AUDIENCE",
        "ALT_TEXT",
      ]),
      d = e.Mirrored(["GENERAL", "ACCESSIBILITY", "AUDIENCE"]);
    ((l.RelatedMediaSelection = s),
      (l.ActionCategory = u),
      (l.AdsCreativeFlexMultiMediaModalEditorTab = c),
      (l.AdsCreativeFlexMultiMediaModalEditorToolSection = d));
  },
  98,
);
