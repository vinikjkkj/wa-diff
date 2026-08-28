__d(
  "CometSphericalPhotoUtils",
  ["Comet360PhotoTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getPhotoSphereMetadata();
      return t == null ? null : s(t);
    }
    function s(e) {
      var t =
          Number(e.CroppedAreaImageWidthPixels) /
          Number(e.CroppedAreaImageHeightPixels),
        n =
          (Number(e.CroppedAreaImageWidthPixels) /
            Number(e.FullPanoWidthPixels)) *
          Math.PI *
          2,
        r =
          (Number(e.CroppedAreaImageHeightPixels) /
            Number(e.FullPanoHeightPixels)) *
          Math.PI *
          2,
        a = Number(e.InitialViewHeadingDegrees),
        i = Number(e.InitialViewPitchDegrees),
        l = Number(e.InitialViewVerticalFOVDegrees),
        s =
          Number(e.CroppedAreaImageHeightPixels) ===
          Number(e.CroppedAreaImageWidthPixels) * 2
            ? o("Comet360PhotoTypes").Comet360PhotoProjection.Equirectangular
            : o("Comet360PhotoTypes").Comet360PhotoProjection.Cylindrical;
      switch (e.ProjectionType) {
        case "equirectangular":
          s = o("Comet360PhotoTypes").Comet360PhotoProjection.Equirectangular;
          break;
        case "cylindrical":
          s = o("Comet360PhotoTypes").Comet360PhotoProjection.Cylindrical;
          break;
      }
      return {
        aspectRatio: t,
        horizontalFov: n,
        projectionType: s,
        startingView: {
          heading: u(a),
          horizontalFov: null,
          pitch: u(i),
          verticalFov: l !== 0 ? u(l) : null,
        },
        verticalFov: r,
      };
    }
    function u(e) {
      return (e / 180) * Math.PI;
    }
    l.createEncodingFromSphericalImage = e;
  },
  98,
);
