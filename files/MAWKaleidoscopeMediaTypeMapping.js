__d(
  "MAWKaleidoscopeMediaTypeMapping",
  ["MAWCastToMsgrServerMediaType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "image" || e === "preview" || e === "xma"
        ? "image"
        : e === "video"
          ? "video"
          : e === "gif"
            ? "gif"
            : e === "audio" || e === "sticker" || e === "file"
              ? "document"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function s(t) {
      var n = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(t);
      return n != null ? e(n) : "document";
    }
    ((l.msgrServerMediaTypeToKaleidoscopeMediaType = e),
      (l.kaleidoscopeMediaTypeFromServerMediaType = s));
  },
  98,
);
