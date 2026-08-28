__d(
  "AdsUnifiedCreativeAdTypes",
  ["ApiDynamicCreativeOptimizationTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({
        StaticImage: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        StaticVideo: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        ExistingPost: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        PAC: {
          media_type: "AUTOMATIC",
          text_type: "RAW_TEXT",
          optimization_type: (e = r("ApiDynamicCreativeOptimizationTypes"))
            .PLACEMENT,
        },
        SingleLink: {
          media_type: "SINGLE_LINK",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        Carousel: {
          media_type: "CAROUSEL",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        DCO: {
          media_type: "AUTOMATIC",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        ExistingInstagramPost: {
          media_type: "EXISTING_INSTAGRAM_POST",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        ExistingPostAutoDestination: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        TemplateFormatAutomation: {
          media_type: "AUTOMATIC",
          text_type: "TEMPLATE",
          optimization_type: e.FORMAT_AUTOMATION,
        },
        TextDoF: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        SingleImageAutoDestination: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        ExistingPostPAC: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.PLACEMENT,
        },
        ProductCatalog: {
          media_type: "SINGLE_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        SingleVideoTextDoF: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        SingleImagePAC: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.PLACEMENT,
        },
        CollectionImage: {
          media_type: "COLLECTIONS_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        CarouselAutoDestination: {
          media_type: "CAROUSEL",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        SingleVideoAutoDestination: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        SingleVideoPAC: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.PLACEMENT,
        },
        CarouselTextDoF: {
          media_type: "CAROUSEL",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        CarouselPAC: {
          media_type: "CAROUSEL",
          text_type: "RAW_TEXT",
          optimization_type: e.PLACEMENT,
        },
        CollectionVideo: {
          media_type: "COLLECTIONS_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        CarouselProductCatalog: {
          media_type: "CAROUSEL",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        ExistingPostDoF: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        CarouselImageDCO: {
          media_type: "CAROUSEL_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        SinglePhoto: {
          media_type: "SINGLE_PHOTO",
          text_type: "RAW_TEXT",
          optimization_type: void 0,
        },
        SingleLinkTextDoF: {
          media_type: "SINGLE_LINK",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        ExistingPostDCO: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        ExistingPostTemplate: {
          media_type: "EXISTING_POST",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        ExistingInstagramPostAutoDestination: {
          media_type: "EXISTING_INSTAGRAM_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        ExistingPostFormatAutomation: {
          media_type: "EXISTING_POST",
          text_type: "TEMPLATE",
          optimization_type: e.FORMAT_AUTOMATION,
        },
        SingleVideoDLO: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.LANGUAGE,
        },
        SingleImageDLO: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.LANGUAGE,
        },
        SingleImageDCO: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        ExistingInstagramPostPAC: {
          media_type: "EXISTING_INSTAGRAM_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.PLACEMENT,
        },
        LocalizedPAC: {
          media_type: "AUTOMATIC",
          text_type: "RAW_TEXT",
          optimization_type: e.LOCALIZED_PLACEMENTS,
        },
        SingleVideoDCO: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        AutoFlow: {
          media_type: "AUTOMATIC",
          text_type: "RAW_TEXT",
          optimization_type: e.ACO_AUTOFLOW,
        },
        CollectionImageTextDoF: {
          media_type: "COLLECTIONS_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        ExistingPostDLO: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.LANGUAGE,
        },
        SinglePhotoTextDoF: {
          media_type: "SINGLE_PHOTO",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        CollectionVideoTextDoF: {
          media_type: "COLLECTIONS_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        ExistingPostLocalizedPAC: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.LOCALIZED_PLACEMENTS,
        },
        SingleImageTextDoF: {
          media_type: "SINGLE_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        SingleLinkTemplate: {
          media_type: "SINGLE_LINK",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        ExistingInstagramPostDCO: {
          media_type: "EXISTING_INSTAGRAM_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        SingleVideoLocalizedPAC: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.LOCALIZED_PLACEMENTS,
        },
        CarouselTemplateTextDoF: {
          media_type: "CAROUSEL",
          text_type: "TEMPLATE",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        ExistingPostAutoFlow: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.ACO_AUTOFLOW,
        },
        SingleImageLocalizedPAC: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.LOCALIZED_PLACEMENTS,
        },
        CarouselTemplatePAC: {
          media_type: "CAROUSEL",
          text_type: "TEMPLATE",
          optimization_type: e.PLACEMENT,
        },
        TemplateDCO: {
          media_type: "AUTOMATIC",
          text_type: "TEMPLATE",
          optimization_type: e.REGULAR,
        },
        CarouselDCO: {
          media_type: "CAROUSEL",
          text_type: "RAW_TEXT",
          optimization_type: e.REGULAR,
        },
        FormatAutomation: {
          media_type: "AUTOMATIC",
          text_type: "RAW_TEXT",
          optimization_type: e.FORMAT_AUTOMATION,
        },
        SingleVideoTemplate: {
          media_type: "SINGLE_VIDEO",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        SingleVideoAssetCustomization: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.ASSET_CUSTOMIZATION,
        },
        ExistingPostTemplateDoF: {
          media_type: "EXISTING_POST",
          text_type: "TEMPLATE",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        ExistingPostDoFImageCrop: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_WITH_IMAGE_CROP,
        },
        CarouselTemplateAutoDestination: {
          media_type: "CAROUSEL",
          text_type: "TEMPLATE",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        SingleImageTemplate: {
          media_type: "SINGLE_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: e.PLACEMENT,
        },
        ExistingPostAssetCustomization: {
          media_type: "EXISTING_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.ASSET_CUSTOMIZATION,
        },
        SingleImageTemplateAutoDestination: {
          media_type: "SINGLE_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        ExistingInstagramPostTextDoF: {
          media_type: "EXISTING_INSTAGRAM_POST",
          text_type: "RAW_TEXT",
          optimization_type: e.DEGREES_OF_FREEDOM,
        },
        SingleVideoTemplatePAC: {
          media_type: "SINGLE_VIDEO",
          text_type: "TEMPLATE",
          optimization_type: e.PLACEMENT,
        },
        SingleImageTemplateDLO: {
          media_type: "SINGLE_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: e.LANGUAGE,
        },
        CollectionImageTemplate: {
          media_type: "COLLECTIONS_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: void 0,
        },
        SinglePhotoAutoDestination: {
          media_type: "SINGLE_PHOTO",
          text_type: "RAW_TEXT",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        TemplatePAC: {
          media_type: "AUTOMATIC",
          text_type: "TEMPLATE",
          optimization_type: e.PLACEMENT,
        },
        SingleImageAssetCustomization: {
          media_type: "SINGLE_IMAGE",
          text_type: "RAW_TEXT",
          optimization_type: e.ASSET_CUSTOMIZATION,
        },
        SingleVideoAutoFlow: {
          media_type: "SINGLE_VIDEO",
          text_type: "RAW_TEXT",
          optimization_type: e.ACO_AUTOFLOW,
        },
        CarouselImageTemplate: {
          media_type: "CAROUSEL_IMAGE",
          text_type: "TEMPLATE",
          optimization_type: e.REGULAR,
        },
        ExistingPostTemplateAutoDestination: {
          media_type: "EXISTING_POST",
          text_type: "TEMPLATE",
          optimization_type: e.DOF_MESSAGING_DESTINATION,
        },
        ExistingPostTemplatePlacement: {
          media_type: "EXISTING_POST",
          text_type: "TEMPLATE",
          optimization_type: e.PLACEMENT,
        },
        None: {
          media_type: void 0,
          text_type: void 0,
          optimization_type: void 0,
        },
      });
    l.AdsUnifiedCreativeAdTypePivots = s;
  },
  98,
);
