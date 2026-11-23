__d(
  "AdsAutoLogoUploadValidation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["image/png", "image/jpeg"]),
      l = 2 * 1024 * 1024,
      s = [137, 80, 78, 71],
      u = [255, 216, 255];
    function c(e) {
      var t = new Uint8Array(e.slice(0, 4));
      return (
        (t[0] === s[0] && t[1] === s[1] && t[2] === s[2] && t[3] === s[3]) ||
        (t[0] === u[0] && t[1] === u[1] && t[2] === u[2])
      );
    }
    ((i.ALLOWED_LOGO_MIME_TYPES = e),
      (i.MAX_LOGO_FILE_SIZE_BYTES = l),
      (i.validateImageSignature = c));
  },
  66,
);
