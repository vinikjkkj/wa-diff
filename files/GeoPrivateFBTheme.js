__d(
  "GeoPrivateFBTheme",
  [
    "cx",
    "GeoPrivateCompanyGradientXStyleSelector",
    "GeoPrivateFacebookAnimationGeneratedStyles",
    "GeoPrivateFacebookAppearanceGeneratedStyles",
    "GeoPrivateFacebookColorGeneratedStyles",
    "GeoPrivateFacebookElevationGeneratedStyles",
    "GeoPrivateFacebookSpacingGeneratedStyles",
    "GeoPrivateFacebookTextGeneratedStyles",
    "GeoPrivateFacebookTransitionGeneratedStyles",
    "makeSelectorsForGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = r("makeSelectorsForGeoTheme")({
        name: "fb",
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
            iconActiveStyles: (e = o("GeoPrivateFacebookColorGeneratedStyles"))
              .iconActiveStyles,
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
            categoricalBackgroundIdleStyles: e.categoricalBackgroundIdleStyles,
            categoricalForegroundTextStyles: e.categoricalForegroundTextStyles,
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
            interactiveOverlayColorStyles: e.interactiveOverlayColorStyles,
            interactiveOverlayIdleStyles: e.interactiveOverlayIdleStyles,
            interactiveOverlayFocusedStyles: e.interactiveOverlayFocusedStyles,
            interactiveOverlayActiveStyles: e.interactiveOverlayActiveStyles,
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
            elevationStyles: o("GeoPrivateFacebookElevationGeneratedStyles")
              .elevationStyles,
          },
          spacing: {
            containerInternalPageSpacingStyles: (u = o(
              "GeoPrivateFacebookSpacingGeneratedStyles",
            )).containerInternalPageSpacingStyles,
            containerInternalComponentSpacingStyles:
              u.containerInternalComponentSpacingStyles,
            componentFineSpacingStyles: u.componentFineSpacingStyles,
            componentFineSpacingOffsetStyles:
              u.componentFineSpacingOffsetStyles,
            componentNormalSpacingStyles: u.componentNormalSpacingStyles,
            componentNormalSpacingOffsetStyles:
              u.componentNormalSpacingOffsetStyles,
            componentCoarseSpacingStyles: u.componentCoarseSpacingStyles,
            componentCoarseSpacingOffsetStyles:
              u.componentCoarseSpacingOffsetStyles,
            controlNormalSpacingStyles: u.controlNormalSpacingStyles,
            controlFineSpacingStyles: u.controlFineSpacingStyles,
            controlCoarseSpacingStyles: u.controlCoarseSpacingStyles,
            inputSpacingStyles: u.inputSpacingStyles,
            containerExternalRelatedSpacingStyles:
              u.containerExternalRelatedSpacingStyles,
            layoutContainerExternalRelatedSpacingStyles:
              u.layoutContainerExternalRelatedSpacingStyles,
            containerExternalUnrelatedSpacingStyles:
              u.containerExternalUnrelatedSpacingStyles,
            layoutContainerExternalUnrelatedSpacingStyles:
              u.layoutContainerExternalUnrelatedSpacingStyles,
            containerExternalSectionSpacingStyles:
              u.containerExternalSectionSpacingStyles,
            layoutContainerExternalSectionSpacingStyles:
              u.layoutContainerExternalSectionSpacingStyles,
            componentExternalRelatedSpacingStyles:
              u.componentExternalRelatedSpacingStyles,
            layoutComponentExternalRelatedSpacingStyles:
              u.layoutComponentExternalRelatedSpacingStyles,
            componentExternalUnrelatedSpacingStyles:
              u.componentExternalUnrelatedSpacingStyles,
            layoutComponentExternalUnrelatedSpacingStyles:
              u.layoutComponentExternalUnrelatedSpacingStyles,
            contentExternalHeadingSpacingStyles:
              u.contentExternalHeadingSpacingStyles,
            layoutContentExternalHeadingSpacingStyles:
              u.layoutContentExternalHeadingSpacingStyles,
            contentExternalParagraphSpacingStyles:
              u.contentExternalParagraphSpacingStyles,
            layoutContentExternalParagraphSpacingStyles:
              u.layoutContentExternalParagraphSpacingStyles,
            contentExternalSectionSpacingStyles:
              u.contentExternalSectionSpacingStyles,
            layoutContentExternalSectionSpacingStyles:
              u.layoutContentExternalSectionSpacingStyles,
          },
          text: {
            fontStyles: o("GeoPrivateFacebookTextGeneratedStyles").fontStyles,
            fontGlimmerStyles: o("GeoPrivateFacebookTextGeneratedStyles")
              .fontGlimmerStyles,
          },
          appearance: {
            borderWidthStyles: (c = o(
              "GeoPrivateFacebookAppearanceGeneratedStyles",
            )).borderWidthStyles,
            interactiveBorderWidthStyles: c.interactiveBorderWidthStyles,
            borderRadiusStyles: c.borderRadiusStyles,
            sizeStyles: c.sizeStyles,
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
      m = d;
    l.default = m;
  },
  98,
);
