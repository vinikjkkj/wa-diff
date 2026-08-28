__d(
  "AdsCallToActionTypes",
  ["fbt", "AdsCallToActionTypesNew", "cr:556", "mapObject"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (u || (u = r("mapObject")))(
        r("AdsCallToActionTypesNew").TYPES,
        function (e) {
          var t = n("cr:556")
              .replaceJSONWrapper(e.text)
              .getRootNode()
              .textContent.trim(),
            r = n("cr:556")
              .replaceJSONWrapper(e.short_text)
              .getRootNode()
              .textContent.trim();
          if (e.name === "INSTAGRAM_MESSAGE") {
            var o = s._(/*BTDS*/ "Send Instagram message").toString();
            ((t = o), (r = o));
          }
          return {
            name: e.name,
            objectives: e.objectives,
            value_fields: void 0,
            text: t,
            short_text: r,
          };
        },
      ),
      d =
        r("AdsCallToActionTypesNew").TYPES.INSTAGRAM_MESSAGE != null
          ? ((e = n("cr:556")
              .replaceJSONWrapper(
                r("AdsCallToActionTypesNew").TYPES.INSTAGRAM_MESSAGE.text,
              )
              .getRootNode().textContent) != null
              ? e
              : ""
            ).trim()
          : "",
      m = d !== "" ? d : null,
      p = { INSTAGRAM_MESSAGE_SERVER_TEXT: m, TYPES: c };
    l.default = p;
  },
  226,
);
