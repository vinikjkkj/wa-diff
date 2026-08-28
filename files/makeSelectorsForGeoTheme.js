__d(
  "makeSelectorsForGeoTheme",
  [
    "createAnimationSelector",
    "createAppearanceSelectors",
    "createBorderColorSelector",
    "createCategoricalColorSelector",
    "createElevationSelector",
    "createFontSelector",
    "createGlimmerSelector",
    "createHighlightPulseAnimationSelector",
    "createIconColorSelector",
    "createInteractiveBorderSelector",
    "createInteractiveColorPaletteSelector",
    "createInteractiveOverlaySelector",
    "createNuxBorderStrokeColorSelector",
    "createNuxStaticBackgroundFillColorSelector",
    "createOnboardingPulseAnimationSelector",
    "createOutlineSelector",
    "createProgressElementColorSelector",
    "createShimmerSelector",
    "createSpacingSelector",
    "createStaticBackgroundSelector",
    "createTextColorSelector",
    "createTransitionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        selectAnimation: o("createAnimationSelector").createAnimationSelector(
          e,
        ),
        selectBorderColor: o(
          "createBorderColorSelector",
        ).createBorderColorSelector(e),
        selectCategoricalBackgroundColor: o(
          "createCategoricalColorSelector",
        ).createCategoricalBackgroundColorSelector(e),
        selectCategoricalForegroundColor: o(
          "createCategoricalColorSelector",
        ).createCategoricalForegroundColorSelector(e),
        selectGlimmer: o("createGlimmerSelector").createGlimmerSelector(e),
        selectHighlightPulseAnimation: o(
          "createHighlightPulseAnimationSelector",
        ).createHighlightPulseAnimationSelector(e),
        selectIconColor: o("createIconColorSelector").createIconColorSelector(
          e,
        ),
        selectInteractiveBorder: o(
          "createInteractiveBorderSelector",
        ).createInteractiveBorderSelector(e),
        selectInteractiveColorPalette: o(
          "createInteractiveColorPaletteSelector",
        ).createInteractiveColorPaletteSelector(e),
        selectInteractiveOverlay: o(
          "createInteractiveOverlaySelector",
        ).createInteractiveOverlaySelector(e),
        selectNuxBorderStrokeColor: o(
          "createNuxBorderStrokeColorSelector",
        ).createNuxBorderStrokeColorSelector(e),
        selectNuxStaticBackgroundFillColor: o(
          "createNuxStaticBackgroundFillColorSelector",
        ).createNuxStaticBackgroundFillColorSelector(e),
        selectOnboardingPulseAnimation: o(
          "createOnboardingPulseAnimationSelector",
        ).createOnboardingPulseAnimationSelector(e),
        selectOutline: o("createOutlineSelector").createOutlineSelector(e),
        selectProgressElementColor: o(
          "createProgressElementColorSelector",
        ).createProgressElementColorSelector(e),
        selectShimmer: o("createShimmerSelector").createShimmerSelector(e),
        selectStaticBackgroundColor: o(
          "createStaticBackgroundSelector",
        ).createStaticBackgroundSelector(e),
        selectTextColor: o("createTextColorSelector").createTextColorSelector(
          e,
        ),
        selectBorderRadius: o(
          "createAppearanceSelectors",
        ).createBorderRadiusSelector(e),
        selectBorderWidth: o(
          "createAppearanceSelectors",
        ).createBorderWidthSelector(e),
        selectSize: o("createAppearanceSelectors").createSizeSelector(e),
        selectElevation: o("createElevationSelector").createElevationSelector(
          e,
        ),
        selectLayoutSpacing: o(
          "createSpacingSelector",
        ).createLayoutSpacingSelector(e),
        selectSpacing: o("createSpacingSelector").createSpacingSelector(e),
        selectFont: o("createFontSelector").createFontSelector(e),
        selectTransition: o(
          "createTransitionSelector",
        ).createTransitionSelector(e),
      };
    }
    l.default = e;
  },
  98,
);
