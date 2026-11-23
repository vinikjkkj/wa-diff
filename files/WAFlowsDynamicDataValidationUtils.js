__d(
  "WAFlowsDynamicDataValidationUtils",
  ["WAFlowsError", "isImageSizeUnderLimit"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t && Array.isArray(n.dataSource)) {
        var r = n.dataSource.every(function (t) {
          try {
            return t.image != null
              ? o("isImageSizeUnderLimit").isImageSizeUnderLimit(t.image, e)
              : !0;
          } catch (e) {
            throw new (o(
              "WAFlowsError",
            ).WAFlowsInvalidBase64ValueToDecodeError)(
              "Cannot decode the given value for the image src",
            );
          }
        });
        return r;
      }
      return !0;
    }
    function s(e, t) {
      if (!Array.isArray(t)) return [];
      var n = [];
      return (
        t.forEach(function (t) {
          if (!(t == null || typeof t != "object")) {
            var r = t.id,
              a = t.image;
            if (!(typeof r != "string" || typeof a != "string"))
              try {
                o("isImageSizeUnderLimit").isImageSizeUnderLimit(a, e) ||
                  n.push(r);
              } catch (e) {
                return;
              }
          }
        }),
        n
      );
    }
    ((l.getImageSizeInDataSourceValidation = e),
      (l.getDataSourceItemIdsWithOversizedImage = s));
  },
  98,
);
