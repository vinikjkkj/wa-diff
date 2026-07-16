__d(
  "WAWebImagineActionLogger",
  [
    "WAWebGetMetaAiImagineEventContext",
    "WAWebLogImagineAction",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebLogImagineAction").logImagineAction({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_DOCUMENT_CLICK,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .DOCUMENT,
            eventContext: yield o(
              "WAWebGetMetaAiImagineEventContext",
            ).getMetaAiImagineEventContext(e),
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.logMetaAiDocumentClick = e;
  },
  98,
);
