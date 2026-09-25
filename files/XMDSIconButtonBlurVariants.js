__d(
  "XMDSIconButtonBlurVariants",
  ["BaseIconButtonXMDSVariants", "XMDSButtonBlurSurfaceStyles"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        xstyleConfig: babelHelpers.extends(
          {},
          (e = o("BaseIconButtonXMDSVariants")).BaseIconButtonXMDSDefaultVariant
            .xstyleConfig,
          {
            pressable: [
              e.BaseIconButtonXMDSDefaultVariant.xstyleConfig.pressable,
              o("XMDSButtonBlurSurfaceStyles").blurSurfaceStyles.blurAdaptive,
            ],
          },
        ),
      },
      u = {
        xstyleConfig: babelHelpers.extends(
          {},
          e.BaseIconButtonXMDSDefaultVariant.xstyleConfig,
          {
            pressable: [
              e.BaseIconButtonXMDSDefaultVariant.xstyleConfig.pressable,
              o("XMDSButtonBlurSurfaceStyles").blurSurfaceStyles.blurDark,
            ],
          },
        ),
      },
      c = {
        xstyleConfig: babelHelpers.extends(
          {},
          e.BaseIconButtonXMDSDefaultVariant.xstyleConfig,
          {
            pressable: [
              e.BaseIconButtonXMDSDefaultVariant.xstyleConfig.pressable,
              o("XMDSButtonBlurSurfaceStyles").blurSurfaceStyles.blurLight,
            ],
          },
        ),
      };
    ((l.XMDSIconButtonBlurAdaptiveVariant = s),
      (l.XMDSIconButtonBlurDarkVariant = u),
      (l.XMDSIconButtonBlurLightVariant = c));
  },
  98,
);
