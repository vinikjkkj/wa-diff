__d(
  "GeoPrivateNextTheme",
  [
    "cx",
    "GeoPrivateCompanyGradientXStyleSelector",
    "GeoPrivateNextAnimationGeneratedStyles",
    "GeoPrivateNextAppearanceGeneratedStyles",
    "GeoPrivateNextOptimisticVfTextGeneratedStyles",
    "GeoPrivateNextSpacingGeneratedStyles",
    "GeoPrivateNextTransitionGeneratedStyles",
    "cr:21067",
    "cr:3303",
    "makeSelectorsForGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = r("makeSelectorsForGeoTheme")({
        name: "next",
        features: { hasInteractiveBorder: !0, hasFOAShadow: !0 },
        themeOverrides: {
          selectStaticBackgroundColor: {
            condition: function (t) {
              return t.surface === "page" && !t.isInverted;
            },
            handler: function (t) {
              var e;
              return r("GeoPrivateCompanyGradientXStyleSelector")({
                isMuted: (e = t.isMuted) != null ? e : !1,
                isDark: !1,
              });
            },
          },
        },
        styles: {
          color: {
            iconActiveStyles: (c = n("cr:21067")).iconActiveStyles,
            iconDisabledStyles: c.iconDisabledStyles,
            borderDefaultActiveStyles: c.borderDefaultActiveStyles,
            borderDefaultDisabledStyles: c.borderDefaultDisabledStyles,
            borderSecondaryActiveStyles: c.borderSecondaryActiveStyles,
            borderSecondaryDisabledStyles: c.borderSecondaryDisabledStyles,
            borderMutedActiveStyles: c.borderMutedActiveStyles,
            borderMutedDisabledStyles: c.borderMutedDisabledStyles,
            strokeMutedActiveStyles: c.strokeMutedActiveStyles,
            interactiveBorderDefaultActiveStyles:
              c.interactiveBorderDefaultActiveStyles,
            interactiveBorderDefaultDisabledStyles:
              c.interactiveBorderDefaultDisabledStyles,
            categoricalBackgroundIdleStyles: c.categoricalBackgroundIdleStyles,
            categoricalForegroundTextStyles: c.categoricalForegroundTextStyles,
            staticBackgroundStyles: c.staticBackgroundStyles,
            staticBackgroundInvertedStyles: c.staticBackgroundInvertedStyles,
            staticBackgroundMutedStyles: c.staticBackgroundMutedStyles,
            staticBackgroundInvertedMutedStyles:
              c.staticBackgroundInvertedMutedStyles,
            staticFillStyles: c.staticFillStyles,
            textActiveStyles: c.textActiveStyles,
            textDisabledStyles: c.textDisabledStyles,
            textInvertedActiveStyles: c.textInvertedActiveStyles,
            textInvertedDisabledStyles: c.textInvertedDisabledStyles,
            interactiveBackgroundIdleStyles: c.interactiveBackgroundIdleStyles,
            interactiveBackgroundActiveStyles:
              c.interactiveBackgroundActiveStyles,
            interactiveBackgroundDisabledStyles:
              c.interactiveBackgroundDisabledStyles,
            interactiveBackgroundFocusedStyles:
              c.interactiveBackgroundFocusedStyles,
            interactiveBackgroundTextWeightStyles:
              c.interactiveBackgroundTextWeightStyles,
            interactiveBackgroundTextActiveStyles:
              c.interactiveBackgroundTextActiveStyles,
            interactiveBackgroundTextDisabledStyles:
              c.interactiveBackgroundTextDisabledStyles,
            interactiveOverlayColorStyles: c.interactiveOverlayColorStyles,
            interactiveOverlayIdleStyles: c.interactiveOverlayIdleStyles,
            interactiveOverlayFocusedStyles: c.interactiveOverlayFocusedStyles,
            interactiveOverlayActiveStyles: c.interactiveOverlayActiveStyles,
            glimmerStyles: c.glimmerStyles,
            glimmerVariantsStyles: c.glimmerVariantsStyles,
            shimmerStyles: c.shimmerStyles,
            progressElementLightStyles: c.progressElementLightStyles,
            progressElementDarkStyles: c.progressElementDarkStyles,
            outlineActiveStyles: c.outlineActiveStyles,
            outlineFocusedStyles: c.outlineFocusedStyles,
            onboardingTourHighlightStyles: c.onboardingTourHighlightStyles,
            onboardingPulseAnimationStyles: c.onboardingPulseAnimationStyles,
            guidedHighlightAnimationStyles: c.guidedHighlightAnimationStyles,
          },
          elevation: { elevationStyles: n("cr:3303").elevationStyles },
          spacing: {
            containerInternalPageSpacingStyles: (e = o(
              "GeoPrivateNextSpacingGeneratedStyles",
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
            fontStyles: o("GeoPrivateNextOptimisticVfTextGeneratedStyles")
              .fontStyles,
            fontGlimmerStyles: o(
              "GeoPrivateNextOptimisticVfTextGeneratedStyles",
            ).fontGlimmerStyles,
          },
          appearance: {
            borderWidthStyles: (u = o(
              "GeoPrivateNextAppearanceGeneratedStyles",
            )).borderWidthStyles,
            interactiveBorderWidthStyles: u.interactiveBorderWidthStyles,
            borderRadiusStyles: u.borderRadiusStyles,
            sizeStyles: u.sizeStyles,
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
      m = d;
    l.default = m;
  },
  98,
);
