__d(
  "AdsAspectRatioTypeStrings",
  [
    "fbt",
    "BusinessUnifiedCreativeEditorSpecContextUtils",
    "getTranslatableRatio",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      switch (e) {
        case "FULLSCREEN_VERTICAL":
          return t === "lower"
            ? s._(/*BTDS*/ "vertical")
            : s._(/*BTDS*/ "Vertical");
        case "FOUR_BY_THREE":
          return s._(/*BTDS*/ "4:3");
        case "SIXTEEN_BY_NINE":
          return s._(/*BTDS*/ "16:9");
        case "NINE_BY_NINE_POINT_TWO_FIVE":
          return s._(/*BTDS*/ "9:9.25");
        case "NINE_BY_TEN_POINT_NINE_THREE_SEVEN_FIVE":
          return s._(/*BTDS*/ "9:10.9375");
        case "NINE_HUNDRED_BY_NINE_HUNDRED_TWENTY_FIVE":
          return s._(/*BTDS*/ "900:925");
        case "CIRCLE":
          return s._(/*BTDS*/ "Circle");
      }
    }
    var u = s._(
        /*BTDS*/ "This image is already cropped to the recommended aspect ratio.",
      ),
      c = s._(
        /*BTDS*/ "This video is already cropped to the recommended aspect ratio.",
      );
    function d(t, n, r) {
      if (
        (n === void 0 && (n = "long_names"),
        r === void 0 && (r = "default"),
        n === "short_names")
      ) {
        var o = e(t, r);
        if (o != null) return o;
      }
      switch (t) {
        case "HORIZONTAL":
        case "FULLSCREEN_LANDSCAPE":
          return r === "lower"
            ? s._(/*BTDS*/ "horizontal")
            : s._(/*BTDS*/ "Horizontal");
        case "FULLSCREEN_VERTICAL":
          return s._(/*BTDS*/ "Fullscreen vertical");
        case "FOUR_BY_THREE":
          return s._(/*BTDS*/ "Camera");
        case "SIXTEEN_BY_NINE":
          return s._(/*BTDS*/ "Camera");
        case "NINE_BY_NINE_POINT_TWO_FIVE":
          return s._(/*BTDS*/ "Content");
        case "NINE_BY_TEN_POINT_NINE_THREE_SEVEN_FIVE":
          return s._(/*BTDS*/ "Content");
        case "NINE_HUNDRED_BY_NINE_HUNDRED_TWENTY_FIVE":
          return s._(/*BTDS*/ "Content");
        case "VERTICAL":
          return s._(/*BTDS*/ "Vertical");
        case "SQUARE":
          return r === "lower"
            ? s._(/*BTDS*/ "square")
            : s._(/*BTDS*/ "Square");
        case "ORIGINAL":
          return s._(/*BTDS*/ "Original");
        default:
          return "";
        case "CIRCLE":
          return s._(/*BTDS*/ "Camera");
      }
    }
    function m(e, t, n, a) {
      switch ((n === void 0 && (n = !1), a === void 0 && (a = !1), e)) {
        case "FULLSCREEN_VERTICAL":
          return o(
            "BusinessUnifiedCreativeEditorSpecContextUtils",
          ).getIsStoryComposerUCE(t)
            ? f("FULLSCREEN_VERTICAL")
            : r("getTranslatableRatio")(9, 16);
        case "HORIZONTAL":
          return r("getTranslatableRatio")(1.91, 1);
        case "SQUARE":
          return o(
            "BusinessUnifiedCreativeEditorSpecContextUtils",
          ).getIsPostComposerUCE(t) &&
            (n || a)
            ? f("SQUARE")
            : r("getTranslatableRatio")(1, 1);
        case "VERTICAL":
          return r("getTranslatableRatio")(4, 5);
        case "FULLSCREEN_LANDSCAPE":
          return r("getTranslatableRatio")(16, 9);
        case "FOUR_BY_THREE":
          return r("getTranslatableRatio")(4, 3);
        case "NINE_BY_NINE_POINT_TWO_FIVE":
          return r("getTranslatableRatio")(9, 9.25);
        case "NINE_HUNDRED_BY_NINE_HUNDRED_TWENTY_FIVE":
          return r("getTranslatableRatio")(900, 925);
        case "NINE_BY_TEN_POINT_NINE_THREE_SEVEN_FIVE":
          return r("getTranslatableRatio")(9, 10.9375);
        default:
          return null;
      }
    }
    function p(e, t) {
      var n = d(e, t),
        r = m(e);
      return r != null
        ? s._(
            /*BTDS*/ "{Friendly human readable name of the aspect ratio} ({Aspect ratio e.g. 1.91:1})",
            [
              s._param("Friendly human readable name of the aspect ratio", n),
              s._param("Aspect ratio e.g. 1.91:1", r),
            ],
          )
        : n;
    }
    function _(e) {
      return s._(/*BTDS*/ "{name} (recommended)", [s._param("name", e)]);
    }
    function f(e) {
      var t = m(e);
      if (t != null) return _(t);
    }
    function g(e, t) {
      var n = d(e, t);
      if (n != null)
        return s._(
          /*BTDS*/ "This image is too small to be cropped to {name}. To use the recommended aspect ratio, select or upload an image with a higher resolution.",
          [s._param("name", n)],
        );
    }
    ((l.ASPECT_RATIO_ALREADY_CONFORMS_DISABLE_REASON = u),
      (l.VIDEO_ASPECT_RATIO_ALREADY_CONFORMS_DISABLE_REASON = c),
      (l.getAspectRatioTypeName = d),
      (l.getAspectRatioTypeRatio = m),
      (l.getAspectRatioTypeNameWithRatio = p),
      (l.getAspectRatioWithRecommended = _),
      (l.getAspectRatioTypeRatioWithRecommended = f),
      (l.getAspectRatioTypeDisableReason = g));
  },
  226,
);
