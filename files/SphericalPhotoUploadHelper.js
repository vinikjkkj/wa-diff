__d(
  "SphericalPhotoUploadHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return !((t && Math.max(t.x, t.y) <= n) || e === "cubestrip");
    }
    function l(e, t, n) {
      return !(t == null || t <= n || e === "cubestrip");
    }
    ((i.shouldResize360 = e), (i.shouldRecompress360 = l));
  },
  66,
);
