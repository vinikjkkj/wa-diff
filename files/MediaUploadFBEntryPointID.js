__d(
  "MediaUploadFBEntryPointID",
  ["MediaUploadEntryPointID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t + "\\" + n) || this),
          (r.sourceType = t),
          (r.entryPointRef = n),
          r
        );
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.castOrThrow = function (n, r) {
          var e = r.createThrowableError;
          if (n instanceof t) return n;
          var o;
          throw e(
            'Provided entry point ID has incorrect type of "' +
              ((o = n.constructor) == null ? void 0 : o.name) +
              '"',
          );
        }),
        t
      );
    })(r("MediaUploadEntryPointID"));
    l.default = e;
  },
  98,
);
