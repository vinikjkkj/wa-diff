__d(
  "GeoPrivateDefaultTheme",
  [
    "GeoPrivateDefaultAnimationGeneratedStyles",
    "GeoPrivateDefaultAppearanceGeneratedStyles",
    "GeoPrivateDefaultElevationGeneratedStyles",
    "GeoPrivateDefaultSpacingGeneratedStyles",
    "GeoPrivateDefaultTextGeneratedStyles",
    "GeoPrivateDefaultTransitionGeneratedStyles",
    "GeoStyleXDefaultSheet",
    "cr:21069",
    "makeSelectorsForGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    o("GeoStyleXDefaultSheet").inject();
    var u = r("makeSelectorsForGeoTheme")({
        name: "default",
        features: { hasInteractiveBorder: !1, hasFOAShadow: !1 },
        styles: {
          color: {
            iconActiveStyles: (s = n("cr:21069")).iconActiveStyles,
            iconDisabledStyles: s.iconDisabledStyles,
            borderDefaultActiveStyles: s.borderDefaultActiveStyles,
            borderDefaultDisabledStyles: s.borderDefaultDisabledStyles,
            borderSecondaryActiveStyles: s.borderSecondaryActiveStyles,
            borderSecondaryDisabledStyles: s.borderSecondaryDisabledStyles,
            borderMutedActiveStyles: s.borderMutedActiveStyles,
            borderMutedDisabledStyles: s.borderMutedDisabledStyles,
            strokeMutedActiveStyles: s.strokeMutedActiveStyles,
            interactiveBorderDefaultActiveStyles:
              s.interactiveBorderDefaultActiveStyles,
            interactiveBorderDefaultDisabledStyles:
              s.interactiveBorderDefaultDisabledStyles,
            categoricalBackgroundIdleStyles: s.categoricalBackgroundIdleStyles,
            categoricalForegroundTextStyles: s.categoricalForegroundTextStyles,
            staticBackgroundStyles: s.staticBackgroundStyles,
            staticBackgroundInvertedStyles: s.staticBackgroundInvertedStyles,
            staticBackgroundMutedStyles: s.staticBackgroundMutedStyles,
            staticBackgroundInvertedMutedStyles:
              s.staticBackgroundInvertedMutedStyles,
            staticFillStyles: s.staticFillStyles,
            textActiveStyles: s.textActiveStyles,
            textDisabledStyles: s.textDisabledStyles,
            textInvertedActiveStyles: s.textInvertedActiveStyles,
            textInvertedDisabledStyles: s.textInvertedDisabledStyles,
            interactiveBackgroundIdleStyles: s.interactiveBackgroundIdleStyles,
            interactiveBackgroundActiveStyles:
              s.interactiveBackgroundActiveStyles,
            interactiveBackgroundDisabledStyles:
              s.interactiveBackgroundDisabledStyles,
            interactiveBackgroundFocusedStyles:
              s.interactiveBackgroundFocusedStyles,
            interactiveBackgroundTextWeightStyles:
              s.interactiveBackgroundTextWeightStyles,
            interactiveBackgroundTextActiveStyles:
              s.interactiveBackgroundTextActiveStyles,
            interactiveBackgroundTextDisabledStyles:
              s.interactiveBackgroundTextDisabledStyles,
            interactiveOverlayColorStyles: s.interactiveOverlayColorStyles,
            interactiveOverlayIdleStyles: s.interactiveOverlayIdleStyles,
            interactiveOverlayFocusedStyles: s.interactiveOverlayFocusedStyles,
            interactiveOverlayActiveStyles: s.interactiveOverlayActiveStyles,
            glimmerStyles: s.glimmerStyles,
            glimmerVariantsStyles: s.glimmerVariantsStyles,
            shimmerStyles: s.shimmerStyles,
            progressElementLightStyles: s.progressElementLightStyles,
            progressElementDarkStyles: s.progressElementDarkStyles,
            outlineActiveStyles: s.outlineActiveStyles,
            outlineFocusedStyles: s.outlineFocusedStyles,
            onboardingTourHighlightStyles: s.onboardingTourHighlightStyles,
            onboardingPulseAnimationStyles: s.onboardingPulseAnimationStyles,
            guidedHighlightAnimationStyles: s.guidedHighlightAnimationStyles,
          },
          elevation: {
            elevationStyles: o("GeoPrivateDefaultElevationGeneratedStyles")
              .elevationStyles,
          },
          spacing: {
            containerInternalPageSpacingStyles: (e = o(
              "GeoPrivateDefaultSpacingGeneratedStyles",
            )).containerInternalPageSpacingStyles,
            containerInternalComponentSpacingStyles:
              e.containerInternalComponentSpacingStyles,
            componentFineSpacingStyles: e.componentFineSpacingStyles,
            componentFineSpacingOffsetStyles:
              e.componentFineSpacingOffsetStyles,
            componentNormalSpacingStyles: e.componentNormalSpacingStyles,
            componentNormalSpacingOffsetStyles:
              e.componentNormalSpacingOffsetStyles,
            componentCoarseSpacingStyles: e.componentCoarseSpacingStyles,
            componentCoarseSpacingOffsetStyles:
              e.componentCoarseSpacingOffsetStyles,
            controlNormalSpacingStyles: e.controlNormalSpacingStyles,
            controlFineSpacingStyles: e.controlFineSpacingStyles,
            controlCoarseSpacingStyles: e.controlCoarseSpacingStyles,
            inputSpacingStyles: e.inputSpacingStyles,
            containerExternalRelatedSpacingStyles:
              e.containerExternalRelatedSpacingStyles,
            layoutContainerExternalRelatedSpacingStyles:
              e.layoutContainerExternalRelatedSpacingStyles,
            containerExternalUnrelatedSpacingStyles:
              e.containerExternalUnrelatedSpacingStyles,
            layoutContainerExternalUnrelatedSpacingStyles:
              e.layoutContainerExternalUnrelatedSpacingStyles,
            containerExternalSectionSpacingStyles:
              e.containerExternalSectionSpacingStyles,
            layoutContainerExternalSectionSpacingStyles:
              e.layoutContainerExternalSectionSpacingStyles,
            componentExternalRelatedSpacingStyles:
              e.componentExternalRelatedSpacingStyles,
            layoutComponentExternalRelatedSpacingStyles:
              e.layoutComponentExternalRelatedSpacingStyles,
            componentExternalUnrelatedSpacingStyles:
              e.componentExternalUnrelatedSpacingStyles,
            layoutComponentExternalUnrelatedSpacingStyles:
              e.layoutComponentExternalUnrelatedSpacingStyles,
            contentExternalHeadingSpacingStyles:
              e.contentExternalHeadingSpacingStyles,
            layoutContentExternalHeadingSpacingStyles:
              e.layoutContentExternalHeadingSpacingStyles,
            contentExternalParagraphSpacingStyles:
              e.contentExternalParagraphSpacingStyles,
            layoutContentExternalParagraphSpacingStyles:
              e.layoutContentExternalParagraphSpacingStyles,
            contentExternalSectionSpacingStyles:
              e.contentExternalSectionSpacingStyles,
            layoutContentExternalSectionSpacingStyles:
              e.layoutContentExternalSectionSpacingStyles,
          },
          text: {
            fontStyles: o("GeoPrivateDefaultTextGeneratedStyles").fontStyles,
            fontGlimmerStyles: o("GeoPrivateDefaultTextGeneratedStyles")
              .fontGlimmerStyles,
          },
          appearance: {
            borderWidthStyles: o("GeoPrivateDefaultAppearanceGeneratedStyles")
              .borderWidthStyles,
            borderRadiusStyles: o("GeoPrivateDefaultAppearanceGeneratedStyles")
              .borderRadiusStyles,
            sizeStyles: o("GeoPrivateDefaultAppearanceGeneratedStyles")
              .sizeStyles,
          },
          transition: {
            transitionDurationStyles: o(
              "GeoPrivateDefaultTransitionGeneratedStyles",
            ).transitionDurationStyles,
            transitionTimingStyles: o(
              "GeoPrivateDefaultTransitionGeneratedStyles",
            ).transitionTimingStyles,
          },
          animation: {
            animationDurationStyles: o(
              "GeoPrivateDefaultAnimationGeneratedStyles",
            ).animationDurationStyles,
            animationTimingStyles: o(
              "GeoPrivateDefaultAnimationGeneratedStyles",
            ).animationTimingStyles,
          },
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
