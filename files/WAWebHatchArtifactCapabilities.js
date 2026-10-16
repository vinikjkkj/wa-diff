__d(
  "WAWebHatchArtifactCapabilities",
  [
    "WAWebHatchJsonReaders",
    "WAWebHatchSpaceRoute",
    "WAWebHatchSpaceRowDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebHatchSpaceRoute").toHatchSpaceSlug(
        o("WAWebHatchJsonReaders").readTrimmedString(
          o("WAWebHatchJsonReaders").readObject(e, "open_target"),
          "slug",
        ),
      );
      if (
        o("WAWebHatchJsonReaders").readTrimmedString(e, "source") !==
          o("WAWebHatchSpaceRowDecoder").HATCH_SPACE_SOURCE ||
        t == null
      )
        return null;
      var n = o("WAWebHatchJsonReaders").readObject(e, "capabilities");
      return {
        capabilities:
          n == null
            ? null
            : {
                canDownloadHtml:
                  o("WAWebHatchJsonReaders").readBool(
                    n,
                    "can_download_html",
                  ) === !0,
                canShare:
                  o("WAWebHatchJsonReaders").readBool(n, "can_share") === !0,
              },
        slug: t,
      };
    }
    l.decodeHatchSpaceCapabilities = e;
  },
  98,
);
