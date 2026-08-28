__d(
  "MediaUploadFBDefaultSurfaceDefinition",
  [
    "MediaUploadFBDefaultClientContext",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSurface",
    "MediaUploadSurfaceDefinition",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        return (
          e.call(this, {
            client: function (n, o) {
              var e = new (r("MediaUploadFBDefaultClientContext"))(
                t,
                r("MediaUploadFBEntryPointID").castOrThrow(n, t),
                o,
              );
              return e.client;
            },
            surface: function (n) {
              return new (r("MediaUploadFBSurface"))(t, n);
            },
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("MediaUploadSurfaceDefinition"));
    l.default = e;
  },
  98,
);
