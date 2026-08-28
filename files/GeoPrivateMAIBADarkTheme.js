__d(
  "GeoPrivateMAIBADarkTheme",
  [
    "cx",
    "GeoPrivateCompanyGradientXStyleSelector",
    "GeoPrivateMaibaDarkColorGeneratedStyles",
    "GeoPrivateMaibaDarkElevationGeneratedStyles",
    "GeoPrivateNextAnimationGeneratedStyles",
    "GeoPrivateNextAppearanceGeneratedStyles",
    "GeoPrivateNextColorGeneratedStyles",
    "GeoPrivateNextOptimisticVfTextGeneratedStyles",
    "GeoPrivateNextSpacingGeneratedStyles",
    "GeoPrivateNextTransitionGeneratedStyles",
    "GeoStyleXDarkSheet",
    "makeSelectorsForGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    o("GeoStyleXDarkSheet").inject();
    var m = r("makeSelectorsForGeoTheme")({
        name: "maiba_dark",
        features: { hasInteractiveBorder: !0, hasFOAShadow: !1 },
        themeOverrides: {
          selectStaticBackgroundColor: {
            condition: function (t) {
              return t.surface === "page" && !t.isInverted;
            },
            handler: function (t) {
              var e;
              return r("GeoPrivateCompanyGradientXStyleSelector")({
                isMuted: (e = t.isMuted) != null ? e : !1,
                isDark: !0,
              });
            },
          },
        },
        styles: {
          color: {
            iconActiveStyles: (e = o("GeoPrivateMaibaDarkColorGeneratedStyles"))
              .iconActiveStyles,
            iconDisabledStyles: e.iconDisabledStyles,
            borderDefaultActiveStyles: e.borderDefaultActiveStyles,
            borderDefaultDisabledStyles: e.borderDefaultDisabledStyles,
            borderSecondaryActiveStyles: e.borderSecondaryActiveStyles,
            borderSecondaryDisabledStyles: e.borderSecondaryDisabledStyles,
            borderMutedActiveStyles: e.borderMutedActiveStyles,
            borderMutedDisabledStyles: e.borderMutedDisabledStyles,
            strokeMutedActiveStyles: e.strokeMutedActiveStyles,
            interactiveBorderDefaultActiveStyles: (u = o(
              "GeoPrivateNextColorGeneratedStyles",
            )).interactiveBorderDefaultActiveStyles,
            interactiveBorderDefaultDisabledStyles:
              u.interactiveBorderDefaultDisabledStyles,
            staticBackgroundStyles: e.staticBackgroundStyles,
            staticBackgroundInvertedStyles: e.staticBackgroundInvertedStyles,
            staticBackgroundMutedStyles: e.staticBackgroundMutedStyles,
            staticBackgroundInvertedMutedStyles:
              e.staticBackgroundInvertedMutedStyles,
            staticFillStyles: e.staticFillStyles,
            textActiveStyles: e.textActiveStyles,
            textDisabledStyles: e.textDisabledStyles,
            textInvertedActiveStyles: e.textInvertedActiveStyles,
            textInvertedDisabledStyles: e.textInvertedDisabledStyles,
            interactiveBackgroundIdleStyles: e.interactiveBackgroundIdleStyles,
            interactiveBackgroundActiveStyles:
              e.interactiveBackgroundActiveStyles,
            interactiveBackgroundDisabledStyles:
              e.interactiveBackgroundDisabledStyles,
            interactiveBackgroundFocusedStyles:
              e.interactiveBackgroundFocusedStyles,
            interactiveBackgroundTextWeightStyles:
              e.interactiveBackgroundTextWeightStyles,
            interactiveBackgroundTextActiveStyles:
              e.interactiveBackgroundTextActiveStyles,
            interactiveBackgroundTextDisabledStyles:
              e.interactiveBackgroundTextDisabledStyles,
            interactiveOverlayActiveStyles: u.interactiveOverlayActiveStyles,
            interactiveOverlayColorStyles: u.interactiveOverlayColorStyles,
            interactiveOverlayFocusedStyles: u.interactiveOverlayFocusedStyles,
            interactiveOverlayIdleStyles: u.interactiveOverlayIdleStyles,
            categoricalBackgroundIdleStyles: u.categoricalBackgroundIdleStyles,
            categoricalForegroundTextStyles: u.categoricalForegroundTextStyles,
            glimmerStyles: e.glimmerStyles,
            glimmerVariantsStyles: e.glimmerVariantsStyles,
            shimmerStyles: e.shimmerStyles,
            progressElementLightStyles: e.progressElementLightStyles,
            progressElementDarkStyles: e.progressElementDarkStyles,
            outlineActiveStyles: e.outlineActiveStyles,
            outlineFocusedStyles: e.outlineFocusedStyles,
            onboardingTourHighlightStyles: e.onboardingTourHighlightStyles,
            onboardingPulseAnimationStyles: e.onboardingPulseAnimationStyles,
            guidedHighlightAnimationStyles: e.guidedHighlightAnimationStyles,
          },
          elevation: {
            elevationStyles: o("GeoPrivateMaibaDarkElevationGeneratedStyles")
              .elevationStyles,
          },
          spacing: {
            containerInternalPageSpacingStyles: (c = o(
              "GeoPrivateNextSpacingGeneratedStyles",
            )).containerInternalPageSpacingStyles,
            containerInternalComponentSpacingStyles:
              c.containerInternalComponentSpacingStyles,
            componentFineSpacingStyles: c.componentFineSpacingStyles,
            componentFineSpacingOffsetStyles:
              c.componentFineSpacingOffsetStyles,
            componentNormalSpacingStyles: c.componentNormalSpacingStyles,
            componentNormalSpacingOffsetStyles:
              c.componentNormalSpacingOffsetStyles,
            componentCoarseSpacingStyles: c.componentCoarseSpacingStyles,
            componentCoarseSpacingOffsetStyles:
              c.componentCoarseSpacingOffsetStyles,
            controlNormalSpacingStyles: c.controlNormalSpacingStyles,
            controlFineSpacingStyles: c.controlFineSpacingStyles,
            controlCoarseSpacingStyles: c.controlCoarseSpacingStyles,
            inputSpacingStyles: c.inputSpacingStyles,
            containerExternalRelatedSpacingStyles:
              c.containerExternalRelatedSpacingStyles,
            layoutContainerExternalRelatedSpacingStyles:
              c.layoutContainerExternalRelatedSpacingStyles,
            containerExternalUnrelatedSpacingStyles:
              c.containerExternalUnrelatedSpacingStyles,
            layoutContainerExternalUnrelatedSpacingStyles:
              c.layoutContainerExternalUnrelatedSpacingStyles,
            containerExternalSectionSpacingStyles:
              c.containerExternalSectionSpacingStyles,
            layoutContainerExternalSectionSpacingStyles:
              c.layoutContainerExternalSectionSpacingStyles,
            componentExternalRelatedSpacingStyles:
              c.componentExternalRelatedSpacingStyles,
            layoutComponentExternalRelatedSpacingStyles:
              c.layoutComponentExternalRelatedSpacingStyles,
            componentExternalUnrelatedSpacingStyles:
              c.componentExternalUnrelatedSpacingStyles,
            layoutComponentExternalUnrelatedSpacingStyles:
              c.layoutComponentExternalUnrelatedSpacingStyles,
            contentExternalHeadingSpacingStyles:
              c.contentExternalHeadingSpacingStyles,
            layoutContentExternalHeadingSpacingStyles:
              c.layoutContentExternalHeadingSpacingStyles,
            contentExternalParagraphSpacingStyles:
              c.contentExternalParagraphSpacingStyles,
            layoutContentExternalParagraphSpacingStyles:
              c.layoutContentExternalParagraphSpacingStyles,
            contentExternalSectionSpacingStyles:
              c.contentExternalSectionSpacingStyles,
            layoutContentExternalSectionSpacingStyles:
              c.layoutContentExternalSectionSpacingStyles,
          },
          text: {
            fontStyles: o("GeoPrivateNextOptimisticVfTextGeneratedStyles")
              .fontStyles,
            fontGlimmerStyles: o(
              "GeoPrivateNextOptimisticVfTextGeneratedStyles",
            ).fontGlimmerStyles,
          },
          appearance: {
            borderWidthStyles: (d = o(
              "GeoPrivateNextAppearanceGeneratedStyles",
            )).borderWidthStyles,
            interactiveBorderWidthStyles: d.interactiveBorderWidthStyles,
            borderRadiusStyles: d.borderRadiusStyles,
            sizeStyles: d.sizeStyles,
          },
          transition: {
            transitionDurationStyles: o(
              "GeoPrivateNextTransitionGeneratedStyles",
            ).transitionDurationStyles,
            transitionTimingStyles: o("GeoPrivateNextTransitionGeneratedStyles")
              .transitionTimingStyles,
          },
          animation: {
            animationDurationStyles: o("GeoPrivateNextAnimationGeneratedStyles")
              .animationDurationStyles,
            animationTimingStyles: o("GeoPrivateNextAnimationGeneratedStyles")
              .animationTimingStyles,
          },
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
