__d(
  "WAMediaManagerTypes",
  ["WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.success
        ? o("WAResultOrError").makeResult({
            serverMediaType: e.value.serverMediaType,
            source: e.value.source,
            unvalidatedMimeType: e.value.unvalidatedMimeType,
            validatedResult: e.value.validatedResult,
          })
        : e;
    }
    l.transformInternalMediaDownloadResult = e;
  },
  98,
);
