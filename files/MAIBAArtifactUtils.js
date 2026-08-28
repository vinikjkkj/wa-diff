__d(
  "MAIBAArtifactUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return {};
      try {
        var t = JSON.parse(e);
        return {
          file_size: typeof t.file_size == "number" ? t.file_size : void 0,
        };
      } catch (e) {
        return {};
      }
    }
    i.parseMetadata = e;
  },
  66,
);
