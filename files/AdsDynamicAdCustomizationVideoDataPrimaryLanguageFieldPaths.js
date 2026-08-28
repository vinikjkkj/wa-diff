__d(
  "AdsDynamicAdCustomizationVideoDataPrimaryLanguageFieldPaths",
  ["AdsAPIAdgroupPaths", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("immutable").Map(
        Object.freeze(
          ((e = {}),
          (e.name = (s =
            r(
              "AdsAPIAdgroupPaths",
            )).CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.TITLE),
          (e.message = s.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.MESSAGE),
          (e.description = s.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.DESCRIPTION),
          (e.link =
            s.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.VALUE.LINK),
          (e.template_url_spec = s.CREATIVE.TEMPLATE_URL_SPEC),
          (e.call_to_action =
            s.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.path),
          e),
        ),
      ),
      c = u;
    l.default = c;
  },
  98,
);
