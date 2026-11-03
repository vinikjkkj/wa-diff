__d(
  "WAWebMediaSendMetadataWriterLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isChannel,
            a = t.media,
            i = t.resolveVerdict;
          if (n) {
            var l;
            try {
              l = yield o("WAPromiseTimeout").promiseTimeout(u(), s);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-sgi] provenance marker not written: metadata writer failed to load",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("media-sgi-provenance-marker-failed");
              return;
            }
            yield l.writeMediaMetadataForSend({
              isChannel: n,
              media: a,
              resolveVerdict: i,
            });
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.WRITER_LOAD_DEADLINE_MS = s), (l.writeMediaMetadataForSend = c));
  },
  98,
);
