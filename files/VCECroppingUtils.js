__d(
  "VCECroppingUtils",
  ["VCEConstants", "shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "9:16":
          return 9 / 16;
        case "1:1":
          return 1 / 1;
        case "4:5":
          return 4 / 5;
        case "2:3":
          return 2 / 3;
        case "16:9":
          return 16 / 9;
        case "4:3":
          return 4 / 3;
        case "9:9.25":
          return 9 / 9.25;
        case "900:925":
          return 900 / 925;
        case "9:10.9375":
          return 9 / 10.9375;
        case "CIRCLE":
          return 1 / 1;
      }
      return o("VCEConstants").SQUARE_ASPECT_RATIO;
    }
    function s(e, t, n, r) {
      r === void 0 && (r = o("VCEConstants").NEUTRAL_SCALE);
      var a = d();
      return (
        (a.width = Math.round(r * e.crop_section_width)),
        (a.height = Math.round(r * e.crop_section_height)),
        (a.left = Math.round(r * e.crop_section_top_x)),
        (a.top = Math.round(r * e.crop_section_top_y)),
        (a.bottom = n - a.height - a.top),
        (a.right = t - a.width - a.left),
        a
      );
    }
    function u(e, t, n, r, a) {
      a === void 0 && (a = o("VCEConstants").NEUTRAL_SCALE);
      var i = Math.min(t, Math.round(e.width / a)),
        l = Math.min(n, Math.round(e.height / a));
      return {
        crop_section_width: i,
        crop_section_height: l,
        crop_section_top_x: Math.round(e.left / a),
        crop_section_top_y: Math.round(e.top / a),
        crop_section_relative_width: i / t,
        crop_section_relative_height: l / n,
        crop_section_relative_top_x: e.left / (a * t),
        crop_section_relative_top_y: e.top / (a * n),
        displayed_video_width: t,
        displayed_video_height: n,
        aspect_ratio: r,
      };
    }
    function c(e, t, n) {
      var r = 0,
        o = 0;
      t * n < e ? ((r = t), (o = t * n)) : ((o = e), (r = e / n));
      var a = d();
      return (
        (a.top = Math.round((t - r) / 2)),
        (a.left = Math.round((e - o) / 2)),
        (a.width = o),
        (a.height = r),
        (a.bottom = t - a.height - a.top),
        (a.right = e - a.width - a.left),
        a
      );
    }
    function d() {
      return { width: 0, height: 0, left: 0, top: 0, bottom: 0, right: 0 };
    }
    function m(e, t) {
      return {
        aspect_ratio: "ORIGINAL",
        crop_section_top_x: 0,
        crop_section_top_y: 0,
        crop_section_width: e,
        crop_section_height: t,
        crop_section_relative_top_x: 0,
        crop_section_relative_top_y: 0,
        crop_section_relative_width: 1,
        crop_section_relative_height: 1,
        displayed_video_width: e,
        displayed_video_height: t,
      };
    }
    function p(e, t, n) {
      return {
        aspect_ratio: e.aspect_ratio,
        crop_section_top_x: Math.round(e.crop_section_relative_top_x * t),
        crop_section_top_y: Math.round(e.crop_section_relative_top_y * n),
        crop_section_width: Math.round(e.crop_section_relative_width * t),
        crop_section_height: Math.round(e.crop_section_relative_height * n),
        crop_section_relative_top_x: e.crop_section_relative_top_x,
        crop_section_relative_top_y: e.crop_section_relative_top_y,
        crop_section_relative_width: e.crop_section_relative_width,
        crop_section_relative_height: e.crop_section_relative_height,
        displayed_video_width: t,
        displayed_video_height: n,
      };
    }
    function _(e, t, n) {
      var r = Math.round(e / n.crop_section_relative_width),
        o = Math.round(t / n.crop_section_relative_height);
      return {
        crop_section_top_x: Math.round(
          (e * n.crop_section_relative_top_x) / n.crop_section_relative_width,
        ),
        crop_section_top_y: Math.round(
          (t * n.crop_section_relative_top_y) / n.crop_section_relative_height,
        ),
        crop_section_width: e,
        crop_section_height: t,
        crop_section_relative_top_x: n.crop_section_relative_top_x,
        crop_section_relative_top_y: n.crop_section_relative_top_y,
        crop_section_relative_width: n.crop_section_relative_width,
        crop_section_relative_height: n.crop_section_relative_height,
        aspect_ratio: n.aspect_ratio,
        displayed_video_width: r,
        displayed_video_height: o,
      };
    }
    function f(e) {
      if (e && e.aspect_ratio !== "ORIGINAL") {
        var t = e.crop_section_height,
          n = e.crop_section_width,
          r = e.displayed_video_height,
          o = e.displayed_video_width,
          a = o * r > 0 && (n * t) / (o * r) >= 0.99,
          i = n > o || t > r;
        return !(a || i);
      }
      return !1;
    }
    function g(e, t) {
      return e != null && t != null ? r("shallowEqual")(e, t) : e == t;
    }
    var h = function (t) {
      return t.every(function (e) {
        return e.crops == null;
      });
    };
    ((l.getAspectRatioNumber = e),
      (l.convertCroppingParamsToWindowCoordinates = s),
      (l.convertWindowCoordinatesToCroppingParams = u),
      (l.deriveCenteredWindowCoordinates = c),
      (l.emptyWindowCoordinates = d),
      (l.getOriginalVideoCroppingParams = m),
      (l.updateCroppingParamsFromOriginalVideoDimensions = p),
      (l.estimateAbsCropParamsFromRelativeParams = _),
      (l.isValidCroppingParams = f),
      (l.isIdenticalCroppingParams = g),
      (l.isCroppingChangeSetEmpty = h));
  },
  98,
);
