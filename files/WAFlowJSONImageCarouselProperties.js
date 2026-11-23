__d(
  "WAFlowJSONImageCarouselProperties",
  ["$InternalEnum", "WAFlowsImageCarousel.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        IMAGES: "images",
        ASPECT_RATIO: "aspect-ratio",
        SCALE_TYPE: "scale-type",
        ITEMS: "items",
        SRC: "src",
        ALT_TEXT: "alt-text",
      }),
      s = n("$InternalEnum")({ STANDARD_4_3: "4:3", LANDSCAPE_16_9: "16:9" }),
      u = n("$InternalEnum")({ COVER: "cover", CONTAIN: "contain" }),
      c = {
        MAX_IMAGES: o("WAFlowsImageCarousel.react")
          .WAFLOWS_IMAGE_CAROUSEL_MAX_IMAGES,
        MAX_COMPONENTS_PER_FLOW: 3,
      };
    ((l.WAFlowJSONImageCarouselPropsType = e),
      (l.WAFlowJSONImageCarouselAspectRatioType = s),
      (l.WAFlowJSONImageCarouselScaleType = u),
      (l.WAFlowJSONImageCarouselConstants = c));
  },
  98,
);
