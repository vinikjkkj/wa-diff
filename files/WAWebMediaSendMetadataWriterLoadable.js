__d(
  "WAWebMediaSendMetadataWriterLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebMediaSendMetadataWriter")
          .__setRef("WAWebMediaSendMetadataWriterLoadable")
          .load();
      }, "WAWebMediaSendMetadataWriter");
    async function c(t) {
      var n = t.isChannel,
        a = t.media,
        i = t.resolveSystemProvenance,
        l;
      try {
        l = await o("WAPromiseTimeout").promiseTimeout(u(), s);
      } catch (t) {
        return (
          n &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-sgi] provenance marker not written: metadata writer failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("media-sgi-provenance-marker-failed"),
          a
        );
      }
      return l.writeMediaMetadataForSend({
        isChannel: n,
        media: a,
        resolveSystemProvenance: i,
      });
    }
    ((l.WRITER_LOAD_DEADLINE_MS = s), (l.writeMediaMetadataForSend = c));
  },
  98,
);
