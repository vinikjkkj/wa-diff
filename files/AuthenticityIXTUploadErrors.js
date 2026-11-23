__d(
  "AuthenticityIXTUploadErrors",
  ["fbt", "AuthenticityIXTImageSizeCheck"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "", [
        s._param(
          "number representing the minimum size in pixels",
          o("AuthenticityIXTImageSizeCheck").MIN_IMAGE_SIDE_PX,
        ),
      ]);
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.getNonImageUploadError = e),
      (l.getImageTooSmallError = u),
      (l.getImageTooBigError = c));
  },
  226,
);
