__d(
  "GeoPrivateStatusIconUtils",
  [
    "geoIPMGatingUtils",
    "meta-brand-checkmark-circle-filled-12",
    "meta-brand-checkmark-circle-filled-16",
    "meta-brand-checkmark-circle-filled-20",
    "meta-brand-checkmark-circle-outline-16",
    "meta-brand-checkmark-circle-outline-20",
    "meta-brand-circle-dashed-left-two-thirds-filled-12",
    "meta-brand-circle-dashed-left-two-thirds-filled-16",
    "meta-brand-circle-dashed-left-two-thirds-filled-20",
    "meta-brand-circle-slash-filled-12",
    "meta-brand-circle-slash-filled-16",
    "meta-brand-circle-slash-filled-20",
    "meta-brand-circle-slash-outline-16",
    "meta-brand-circle-slash-outline-20",
    "meta-brand-clock-filled-12",
    "meta-brand-clock-filled-16",
    "meta-brand-clock-filled-20",
    "meta-brand-clock-outline-16",
    "meta-brand-clock-outline-20",
    "meta-brand-exclamation-triangle-filled-12",
    "meta-brand-exclamation-triangle-filled-16",
    "meta-brand-exclamation-triangle-filled-20",
    "meta-brand-exclamation-triangle-outline-16",
    "meta-brand-exclamation-triangle-outline-20",
    "meta-brand-four-dots-three-lines-connected-filled-12",
    "meta-brand-four-dots-three-lines-connected-filled-16",
    "meta-brand-four-dots-three-lines-connected-filled-20",
    "meta-brand-four-dots-three-lines-connected-outline-16",
    "meta-brand-four-dots-three-lines-connected-outline-20",
    "meta-brand-i-circle-filled-12",
    "meta-brand-i-circle-filled-16",
    "meta-brand-i-circle-filled-20",
    "meta-brand-i-circle-outline-16",
    "meta-brand-i-circle-outline-20",
    "meta-brand-light-bulb-filled-12",
    "meta-brand-light-bulb-filled-16",
    "meta-brand-light-bulb-filled-20",
    "meta-brand-light-bulb-outline-16",
    "meta-brand-light-bulb-outline-20",
    "meta-brand-star-circle-triangle-ai-filled-12",
    "meta-brand-star-circle-triangle-ai-filled-16",
    "meta-brand-star-circle-triangle-ai-filled-20",
    "meta-brand-star-four-points-plus-filled-12",
    "meta-brand-star-four-points-plus-filled-16",
    "meta-brand-star-four-points-plus-filled-20",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("geoIPMGatingUtils").shouldShowNewBrandingStatusIcon(),
      p = o("geoIPMGatingUtils").shouldShowNewBrandingInfoIcon(),
      _ = {
        8: o("meta-brand-exclamation-triangle-filled-12")
          .metaBrandExclamationTriangleCautionTriangleFilled12,
        12: o("meta-brand-exclamation-triangle-filled-12")
          .metaBrandExclamationTriangleCautionTriangleFilled12,
        16: o("meta-brand-exclamation-triangle-filled-16")
          .metaBrandExclamationTriangleCautionTriangleFilled16,
        20: o("meta-brand-exclamation-triangle-filled-20")
          .metaBrandExclamationTriangleCautionTriangleFilled20,
        28: o("meta-brand-exclamation-triangle-filled-20")
          .metaBrandExclamationTriangleCautionTriangleFilled20,
        32: o("meta-brand-exclamation-triangle-filled-20")
          .metaBrandExclamationTriangleCautionTriangleFilled20,
        shape: "rectangle",
      },
      f = {
        8: (e = o("meta-brand-circle-slash-filled-12"))
          .metaBrandCircleSlashSlashCircleFilled12,
        12: e.metaBrandCircleSlashSlashCircleFilled12,
        16: o("meta-brand-circle-slash-filled-16")
          .metaBrandCircleSlashSlashCircleFilled16,
        20: o("meta-brand-circle-slash-filled-20")
          .metaBrandCircleSlashSlashCircleFilled20,
        28: o("meta-brand-circle-slash-filled-20")
          .metaBrandCircleSlashSlashCircleFilled20,
        32: o("meta-brand-circle-slash-filled-20")
          .metaBrandCircleSlashSlashCircleFilled20,
        shape: "rounded",
      },
      g = {
        8: e.metaBrandCircleSlashSlashCircleFilled12,
        12: e.metaBrandCircleSlashSlashCircleFilled12,
        16: o("meta-brand-circle-slash-outline-16")
          .metaBrandCircleSlashSlashCircleOutline16,
        20: o("meta-brand-circle-slash-outline-20")
          .metaBrandCircleSlashSlashCircleOutline20,
        28: o("meta-brand-circle-slash-outline-20")
          .metaBrandCircleSlashSlashCircleOutline20,
        32: o("meta-brand-circle-slash-outline-20")
          .metaBrandCircleSlashSlashCircleOutline20,
        shape: "rounded",
      },
      h = {
        8: o("meta-brand-star-four-points-plus-filled-12")
          .metaBrandStarFourPointsPlusFilled12,
        12: o("meta-brand-star-four-points-plus-filled-12")
          .metaBrandStarFourPointsPlusFilled12,
        16: o("meta-brand-star-four-points-plus-filled-16")
          .metaBrandStarFourPointsPlusFilled16,
        20: o("meta-brand-star-four-points-plus-filled-20")
          .metaBrandStarFourPointsPlusFilled20,
        28: o("meta-brand-star-four-points-plus-filled-20")
          .metaBrandStarFourPointsPlusFilled20,
        32: o("meta-brand-star-four-points-plus-filled-20")
          .metaBrandStarFourPointsPlusFilled20,
        shape: "rectangle",
      },
      y = {
        8: o("meta-brand-star-circle-triangle-ai-filled-12")
          .metaBrandStarCircleTriangleAiFilled12,
        12: o("meta-brand-star-circle-triangle-ai-filled-12")
          .metaBrandStarCircleTriangleAiFilled12,
        16: o("meta-brand-star-circle-triangle-ai-filled-16")
          .metaBrandStarCircleTriangleAiFilled16,
        20: o("meta-brand-star-circle-triangle-ai-filled-20")
          .metaBrandStarCircleTriangleAiFilled20,
        28: o("meta-brand-star-circle-triangle-ai-filled-20")
          .metaBrandStarCircleTriangleAiFilled20,
        32: o("meta-brand-star-circle-triangle-ai-filled-20")
          .metaBrandStarCircleTriangleAiFilled20,
        shape: "rectangle",
      },
      C = {
        8: (s = o("meta-brand-light-bulb-filled-12"))
          .metaBrandLightBulbFilled12,
        12: s.metaBrandLightBulbFilled12,
        16: o("meta-brand-light-bulb-filled-16").metaBrandLightBulbFilled16,
        20: o("meta-brand-light-bulb-filled-20").metaBrandLightBulbFilled20,
        28: o("meta-brand-light-bulb-filled-20").metaBrandLightBulbFilled20,
        32: o("meta-brand-light-bulb-filled-20").metaBrandLightBulbFilled20,
        shape: "rectangle",
      },
      b = {
        8: s.metaBrandLightBulbFilled12,
        12: s.metaBrandLightBulbFilled12,
        16: o("meta-brand-light-bulb-outline-16").metaBrandLightBulbOutline16,
        20: o("meta-brand-light-bulb-outline-20").metaBrandLightBulbOutline20,
        28: o("meta-brand-light-bulb-outline-20").metaBrandLightBulbOutline20,
        32: o("meta-brand-light-bulb-outline-20").metaBrandLightBulbOutline20,
        shape: "rectangle",
      },
      v = {
        8: (u = o("meta-brand-i-circle-filled-12"))
          .metaBrandICircleInfoCircleFilled12,
        12: u.metaBrandICircleInfoCircleFilled12,
        16: o("meta-brand-i-circle-filled-16")
          .metaBrandICircleInfoCircleFilled16,
        20: o("meta-brand-i-circle-filled-20")
          .metaBrandICircleInfoCircleFilled20,
        28: o("meta-brand-i-circle-filled-20")
          .metaBrandICircleInfoCircleFilled20,
        32: o("meta-brand-i-circle-filled-20")
          .metaBrandICircleInfoCircleFilled20,
        shape: "rectangle",
      },
      S = {
        8: u.metaBrandICircleInfoCircleFilled12,
        12: u.metaBrandICircleInfoCircleFilled12,
        16: o("meta-brand-i-circle-outline-16")
          .metaBrandICircleInfoCircleOutline16,
        20: o("meta-brand-i-circle-outline-20")
          .metaBrandICircleInfoCircleOutline20,
        28: o("meta-brand-i-circle-outline-20")
          .metaBrandICircleInfoCircleOutline20,
        32: o("meta-brand-i-circle-outline-20")
          .metaBrandICircleInfoCircleOutline20,
        shape: "rectangle",
      },
      R = {
        8: (c = o("meta-brand-clock-filled-12")).metaBrandClockFilled12,
        12: c.metaBrandClockFilled12,
        16: o("meta-brand-clock-filled-16").metaBrandClockFilled16,
        20: o("meta-brand-clock-filled-20").metaBrandClockFilled20,
        28: o("meta-brand-clock-filled-20").metaBrandClockFilled20,
        32: o("meta-brand-clock-filled-20").metaBrandClockFilled20,
        shape: "rounded",
      },
      L = {
        8: c.metaBrandClockFilled12,
        12: c.metaBrandClockFilled12,
        16: o("meta-brand-clock-outline-16").metaBrandClockOutline16,
        20: o("meta-brand-clock-outline-20").metaBrandClockOutline20,
        28: o("meta-brand-clock-outline-20").metaBrandClockOutline20,
        32: o("meta-brand-clock-outline-20").metaBrandClockOutline20,
        shape: "rounded",
      },
      E = {
        8: o("meta-brand-circle-dashed-left-two-thirds-filled-12")
          .metaBrandCircleDashedLeftTwoThirdsFilled12,
        12: o("meta-brand-circle-dashed-left-two-thirds-filled-12")
          .metaBrandCircleDashedLeftTwoThirdsFilled12,
        16: o("meta-brand-circle-dashed-left-two-thirds-filled-16")
          .metaBrandCircleDashedLeftTwoThirdsFilled16,
        20: o("meta-brand-circle-dashed-left-two-thirds-filled-20")
          .metaBrandCircleDashedLeftTwoThirdsFilled20,
        28: o("meta-brand-circle-dashed-left-two-thirds-filled-20")
          .metaBrandCircleDashedLeftTwoThirdsFilled20,
        32: o("meta-brand-circle-dashed-left-two-thirds-filled-20")
          .metaBrandCircleDashedLeftTwoThirdsFilled20,
        shape: "rounded",
      },
      k = {
        8: (d = o("meta-brand-four-dots-three-lines-connected-filled-12"))
          .metaBrandFourDotsThreeLinesConnectedFilled12,
        12: d.metaBrandFourDotsThreeLinesConnectedFilled12,
        16: o("meta-brand-four-dots-three-lines-connected-filled-16")
          .metaBrandFourDotsThreeLinesConnectedLineChartFilled16,
        20: o("meta-brand-four-dots-three-lines-connected-filled-20")
          .metaBrandFourDotsThreeLinesConnectedLineChartFilled20,
        28: o("meta-brand-four-dots-three-lines-connected-filled-20")
          .metaBrandFourDotsThreeLinesConnectedLineChartFilled20,
        32: o("meta-brand-four-dots-three-lines-connected-filled-20")
          .metaBrandFourDotsThreeLinesConnectedLineChartFilled20,
        shape: "rectangle",
      },
      I = {
        8: d.metaBrandFourDotsThreeLinesConnectedFilled12,
        12: d.metaBrandFourDotsThreeLinesConnectedFilled12,
        16: o("meta-brand-four-dots-three-lines-connected-outline-16")
          .metaBrandFourDotsThreeLinesConnectedOutline16,
        20: o("meta-brand-four-dots-three-lines-connected-outline-20")
          .metaBrandFourDotsThreeLinesConnectedOutline20,
        28: o("meta-brand-four-dots-three-lines-connected-outline-20")
          .metaBrandFourDotsThreeLinesConnectedOutline20,
        32: o("meta-brand-four-dots-three-lines-connected-outline-20")
          .metaBrandFourDotsThreeLinesConnectedOutline20,
        shape: "rectangle",
      },
      T = Object.freeze({
        error: m ? f : _,
        warning: _,
        info: p ? v : C,
        "info-advantage-plus": h,
        "info-generative-ai": y,
        progress: m ? E : R,
        "value-proven-recommendation": k,
        success: {
          8: o("meta-brand-checkmark-circle-filled-12")
            .metaBrandCheckmarkCircleFilled12,
          12: o("meta-brand-checkmark-circle-filled-12")
            .metaBrandCheckmarkCircleFilled12,
          16: o("meta-brand-checkmark-circle-filled-16")
            .metaBrandCheckmarkCircleFilled16,
          20: o("meta-brand-checkmark-circle-filled-20")
            .metaBrandCheckmarkCircleFilled20,
          28: o("meta-brand-checkmark-circle-filled-20")
            .metaBrandCheckmarkCircleFilled20,
          32: o("meta-brand-checkmark-circle-filled-20")
            .metaBrandCheckmarkCircleFilled20,
          shape: "rectangle",
        },
        "success-advantage-plus": h,
        "error-emphasized": f,
        "warning-emphasized": f,
      }),
      D = {
        8: o("meta-brand-exclamation-triangle-filled-12")
          .metaBrandExclamationTriangleCautionTriangleFilled12,
        12: o("meta-brand-exclamation-triangle-filled-12")
          .metaBrandExclamationTriangleCautionTriangleFilled12,
        16: o("meta-brand-exclamation-triangle-outline-16")
          .metaBrandExclamationTriangleCautionTriangleOutline16,
        20: o("meta-brand-exclamation-triangle-outline-20")
          .metaBrandExclamationTriangleCautionTriangleOutline20,
        28: o("meta-brand-exclamation-triangle-outline-20")
          .metaBrandExclamationTriangleCautionTriangleOutline20,
        32: o("meta-brand-exclamation-triangle-outline-20")
          .metaBrandExclamationTriangleCautionTriangleOutline20,
        shape: "rectangle",
      },
      x = Object.freeze({
        error: m ? g : D,
        warning: D,
        info: p ? S : b,
        "info-advantage-plus": h,
        "info-generative-ai": y,
        progress: m ? E : L,
        "value-proven-recommendation": I,
        success: {
          8: o("meta-brand-checkmark-circle-filled-12")
            .metaBrandCheckmarkCircleFilled12,
          12: o("meta-brand-checkmark-circle-filled-12")
            .metaBrandCheckmarkCircleFilled12,
          16: o("meta-brand-checkmark-circle-outline-16")
            .metaBrandCheckmarkCircleOutline16,
          20: o("meta-brand-checkmark-circle-outline-20")
            .metaBrandCheckmarkCircleOutline20,
          28: o("meta-brand-checkmark-circle-outline-20")
            .metaBrandCheckmarkCircleOutline20,
          32: o("meta-brand-checkmark-circle-outline-20")
            .metaBrandCheckmarkCircleOutline20,
          shape: "rectangle",
        },
        "success-advantage-plus": h,
        "error-emphasized": g,
        "warning-emphasized": D,
      });
    function $(e, t) {
      return T[e][t];
    }
    function P(e, t) {
      return x[e][t];
    }
    function N(e) {
      return T[e].shape;
    }
    ((l.getIcon = $), (l.getNextIcon = P), (l.getIconShape = N));
  },
  98,
);
