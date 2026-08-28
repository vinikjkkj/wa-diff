__d(
  "GeoPrivateFBDarkTheme",
  [
    "cx",
    "GeoPrivateCompanyGradientXStyleSelector",
    "GeoPrivateFacebookAnimationGeneratedStyles",
    "GeoPrivateFacebookAppearanceGeneratedStyles",
    "GeoPrivateFacebookColorGeneratedStyles",
    "GeoPrivateFacebookDarkColorGeneratedStyles",
    "GeoPrivateFacebookDarkElevationGeneratedStyles",
    "GeoPrivateFacebookSpacingGeneratedStyles",
    "GeoPrivateFacebookTextGeneratedStyles",
    "GeoPrivateFacebookTransitionGeneratedStyles",
    "GeoStyleXDarkSheet",
    "makeSelectorsForGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    o("GeoStyleXDarkSheet").inject();
    var m = r("makeSelectorsForGeoTheme")({
        name: "fb_dark",
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
            iconActiveStyles: (e = o(
              "GeoPrivateFacebookDarkColorGeneratedStyles",
            )).iconActiveStyles,
            iconDisabledStyles: e.iconDisabledStyles,
            borderDefaultActiveStyles: e.borderDefaultActiveStyles,
            borderDefaultDisabledStyles: e.borderDefaultDisabledStyles,
            borderSecondaryActiveStyles: e.borderSecondaryActiveStyles,
            borderSecondaryDisabledStyles: e.borderSecondaryDisabledStyles,
            borderMutedActiveStyles: e.borderMutedActiveStyles,
            borderMutedDisabledStyles: e.borderMutedDisabledStyles,
            strokeMutedActiveStyles: e.strokeMutedActiveStyles,
            interactiveBorderDefaultActiveStyles:
              e.interactiveBorderDefaultActiveStyles,
            interactiveBorderDefaultDisabledStyles:
              e.interactiveBorderDefaultDisabledStyles,
            categoricalBackgroundIdleStyles: (u = o(
              "GeoPrivateFacebookColorGeneratedStyles",
            )).categoricalBackgroundIdleStyles,
            categoricalForegroundTextStyles: u.categoricalForegroundTextStyles,
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
            interactiveOverlayColorStyles: u.interactiveOverlayColorStyles,
            interactiveOverlayIdleStyles: u.interactiveOverlayIdleStyles,
            interactiveOverlayFocusedStyles: u.interactiveOverlayFocusedStyles,
            interactiveOverlayActiveStyles: u.interactiveOverlayActiveStyles,
            glimmerStyles: e.glimmerStyles,
            glimmerVariantsStyles: e.glimmerVariantsStyles,
            shimmerStyles: u.shimmerStyles,
            progressElementLightStyles: e.progressElementLightStyles,
            progressElementDarkStyles: e.progressElementDarkStyles,
            outlineActiveStyles: e.outlineActiveStyles,
            outlineFocusedStyles: e.outlineFocusedStyles,
            onboardingTourHighlightStyles: e.onboardingTourHighlightStyles,
            onboardingPulseAnimationStyles: e.onboardingPulseAnimationStyles,
            guidedHighlightAnimationStyles: e.guidedHighlightAnimationStyles,
          },
          elevation: {
            elevationStyles: o("GeoPrivateFacebookDarkElevationGeneratedStyles")
              .elevationStyles,
          },
          spacing: {
            containerInternalPageSpacingStyles: (c = o(
              "GeoPrivateFacebookSpacingGeneratedStyles",
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
            fontStyles: o("GeoPrivateFacebookTextGeneratedStyles").fontStyles,
            fontGlimmerStyles: o("GeoPrivateFacebookTextGeneratedStyles")
              .fontGlimmerStyles,
          },
          appearance: {
            borderWidthStyles: (d = o(
              "GeoPrivateFacebookAppearanceGeneratedStyles",
            )).borderWidthStyles,
            interactiveBorderWidthStyles: d.interactiveBorderWidthStyles,
            borderRadiusStyles: d.borderRadiusStyles,
            sizeStyles: d.sizeStyles,
          },
          transition: {
            transitionDurationStyles: o(
              "GeoPrivateFacebookTransitionGeneratedStyles",
            ).transitionDurationStyles,
            transitionTimingStyles: o(
              "GeoPrivateFacebookTransitionGeneratedStyles",
            ).transitionTimingStyles,
          },
          animation: {
            animationDurationStyles: o(
              "GeoPrivateFacebookAnimationGeneratedStyles",
            ).animationDurationStyles,
            animationTimingStyles: o(
              "GeoPrivateFacebookAnimationGeneratedStyles",
            ).animationTimingStyles,
          },
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
