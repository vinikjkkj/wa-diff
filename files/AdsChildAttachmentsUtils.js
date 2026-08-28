__d(
  "AdsChildAttachmentsUtils",
  [
    "codedError",
    "AdsAPIAdgroupPaths",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCreativeSpecTypes",
    "AdsDynamicAdsFormatUtils",
    "AdsLinkPostFormat",
    "AdsMultiProductConstants",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupShopAdsBundle",
    "PartnershipDynamicAdsGatingUtils",
    "Result",
    "adsConvertAdObjectRecordToPlainJS",
    "getByPath",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
    "justknobx",
    "memoizeByReference",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("memoizeByReference")(function (e) {
      var t = C(e);
      return !!t && u(t);
    });
    function u(e) {
      return e ? e.some(c) : !1;
    }
    function c(e) {
      e.toJS && (e = e.toJS());
      var t = !!e.static_card,
        n = !!e.template_video_spec;
      return t || n;
    }
    function d(e, t, n) {
      if (!r("AdsAdgroupSemanticFields").childAttachments.isSupported(t, e))
        return o("Result").withError(
          s._(
            2016065,
            function (e) {
              return e._(/*BTDS*/ "Ad's Field Not Supported");
            },
            function (e, t) {
              return e._(
                /*BTDS*/ "Field {fieldName} is not supported by this ad.",
                [e._param("fieldName", t.fieldName)],
              );
            },
            { fieldName: r("AdsAdgroupSemanticFieldKeys").childAttachments },
          ),
        );
      var a = r("AdsAdgroupSemanticFields").childAttachments.get(t, e),
        i = a != null ? a.get(n) : null;
      if (!i)
        return o("Result").withError(
          s._(
            2016064,
            function (e) {
              return e._(/*BTDS*/ "Child Attachment's Not Found in Ad");
            },
            function (e, t) {
              return e._(
                /*BTDS*/ "It was expected a child attachment in the adgroup spec but it is not there.",
              );
            },
            {},
          ),
        );
      var l = m(e, i);
      return o("Result").withSuccess(l);
    }
    function m(t, n) {
      var o;
      if (n.getIn(r("AdsAPIChildAttachmentPaths").PLACE_DATA.path))
        return r("AdsAdgroupChildAttachmentTypes").PLACE;
      if (c(n)) return r("AdsAdgroupChildAttachmentTypes").STATIC;
      var a = !!(
        (o = t.creative) != null &&
        (o = o.object_story_spec) != null &&
        o.template_data
      );
      return a && e(t)
        ? r("AdsAdgroupChildAttachmentTypes").DYNAMIC
        : r("AdsAdgroupChildAttachmentTypes").STATIC;
    }
    function p(e) {
      return e
        ? g(e)
          ? o("Result").withSuccess(0)
          : o("Result").withSuccess(e.size)
        : o("Result").withError(
            s._(
              2016065,
              function (e) {
                return e._(/*BTDS*/ "Ad's Field Not Supported");
              },
              function (e, t) {
                return e._(
                  /*BTDS*/ "Field {fieldName} is not supported by this ad.",
                  [e._param("fieldName", t.fieldName)],
                );
              },
              { fieldName: r("AdsAdgroupSemanticFieldKeys").childAttachments },
            ),
          );
    }
    function _(e, t) {
      var n = r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      return p(n);
    }
    function f(e) {
      return (
        e === void 0 && (e = 3),
        e === 0
          ? r("immutable").fromJS([
              {
                image_hash: o("AdsMultiProductConstants")
                  .EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER,
              },
            ])
          : r("immutable").fromJS(Array(e).fill({ link: "" }))
      );
    }
    function g(e) {
      return Array.isArray(e)
        ? e.length === 1 &&
            (e[0].imageHash ===
              o("AdsMultiProductConstants")
                .EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER ||
              e[0].image_hash ===
                o("AdsMultiProductConstants")
                  .EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER)
        : e.size === 1 &&
            e.get(0).get("image_hash") ===
              o("AdsMultiProductConstants").EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER;
    }
    function h(e) {
      return y(r("adsConvertAdObjectRecordToPlainJS")(e));
    }
    function y(e) {
      var t = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      switch (t) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .CHILD_ATTACHMENTS;
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
            .TEMPLATE_DATA.CHILD_ATTACHMENTS;
      }
      return null;
    }
    function C(e) {
      var t = y(r("adsConvertAdObjectRecordToPlainJS")(e)),
        n = t ? r("getByPath")(e, t) : null;
      return (n && !Array.isArray(n) && (n = n.toJS()), n);
    }
    function b(e) {
      var t,
        n,
        a = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      switch (a) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return (
            ((t = e.creative) == null ||
            (t = t.object_story_spec) == null ||
            (t = t.link_data) == null
              ? void 0
              : t.child_attachments) != null
          );
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return (
            ((n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.template_data) == null
              ? void 0
              : n.child_attachments) != null
          );
      }
      return !1;
    }
    function v(e) {
      return !!e.getIn(r("AdsAPIChildAttachmentPaths").PLACE_DATA.path);
    }
    function S(e) {
      if (!e) return !1;
      var t = e.filter(c);
      return (
        t.size > 0 &&
        t.every(function (e) {
          return !!e.get("place_data");
        })
      );
    }
    function R(e, t, n, o) {
      o === void 0 && (o = { skipPlaceData: !1 });
      var a = h(n);
      if (a)
        return o.skipPlaceData &&
          n.getIn(
            [].concat(
              a,
              ["" + e],
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.path,
            ),
          ) &&
          t.length > 0
          ? e - 1 >= 0
            ? n.getIn([].concat(a, ["" + (e - 1)], t))
            : void 0
          : n.getIn([].concat(a, ["" + e], t));
    }
    function L(e, t) {
      var n = r("AdsAdgroupSemanticFields").childAttachments.get(t, e) || [];
      return n.findIndex(function (e) {
        return v(e);
      });
    }
    function E(e) {
      var t = o("AdsObjectTypeUtils").getCreativeSpecType(e);
      return t !== r("AdsCreativeSpecTypes").TEMPLATE_DATA
        ? r("AdsLinkPostFormat").SINGLE
        : o("AdsDynamicAdsFormatUtils").getDynamicAdLinkPostFormat(e);
    }
    function k(e, t, n) {
      var a = r("AdsAdgroupChildAttachmentsFields").videoID.get(e, t, n),
        i = r("AdsAdgroupChildAttachmentsFields").imageURL.get(e, t, n),
        l = r("AdsAdgroupChildAttachmentsFields").imageHash.get(e, t, n),
        u = i.supported || l.supported,
        c = r(
          "AdsAdgroupChildAttachmentsFields",
        ).templateVideoSpecTemplateID.get(e, t, n),
        d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content.parent_source_instagram_media_id.get(e),
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content.parent_source_facebook_post_id.get(e);
      return c.supported && c.value
        ? o("Result").withSuccess("TEMPLATE_VIDEO")
        : o(
              "PartnershipDynamicAdsGatingUtils",
            ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() &&
            (d != null || m != null)
          ? o("Result").withSuccess("EXISTING_POST")
          : a.supported && a.value
            ? o("Result").withSuccess("VIDEO")
            : u
              ? o("Result").withSuccess("IMAGE")
              : a.supported
                ? o("Result").withSuccess("VIDEO")
                : o("Result").withError(
                    s._(
                      2016065,
                      function (e) {
                        return e._(/*BTDS*/ "Ad's Field Not Supported");
                      },
                      function (e, t) {
                        return e._(
                          /*BTDS*/ "Field {fieldName} is not supported by this ad.",
                          [e._param("fieldName", t.fieldName)],
                        );
                      },
                      {
                        fieldName:
                          r("AdsAdgroupSemanticFieldKeys").videoID +
                          " or " +
                          r("AdsAdgroupSemanticFieldKeys").imageURL +
                          " or " +
                          r("AdsAdgroupSemanticFieldKeys").imageHash,
                      },
                    ),
                  );
    }
    function I(e) {
      return (
        o("AdsObjectTypeUtils").isTemplateCreative(e) &&
        o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(e)
      );
    }
    var T = r("memoizeWithArgsWeak")(function (e) {
      var t;
      if (o("AdsUEditorAdgroupShopAdsBundle").isShopAdsBundle(e) && I(e))
        return !0;
      var n =
          r("justknobx")._("5008") &&
          o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat(),
        a = r("adsConvertAdObjectRecordToPlainJS")(e),
        i = (t = a.creative) == null ? void 0 : t.asset_feed_spec,
        l = (i == null || Object.keys(i).length === 0) && n;
      return !l &&
        o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
        ? o("AdsAssetFeedUtils").hasCarouselFormat(e)
        : I(e)
          ? !0
          : b(e);
    });
    function D(e) {
      return T(e);
    }
    function x(e, t) {
      var n =
        r("AdsAdgroupSemanticFields").childAttachments.get(t, e) ||
        r("immutable").List();
      return n.some(function (e) {
        return !M(e) && !v(e);
      });
    }
    function $(e, t, n) {
      var o =
        r("AdsAdgroupSemanticFields").childAttachments.get(t, e) ||
        r("immutable").List();
      return g(o) && n > 0
        ? !1
        : o.count(function (e) {
            return !M(e) && !v(e);
          }) >= n;
    }
    function P(e, t, n) {
      var o =
        r("AdsAdgroupSemanticFields").childAttachments.get(t, e) ||
        r("immutable").List();
      return g(o) && n > 0
        ? !1
        : o.count(function (e) {
            return !v(e);
          }) >= n;
    }
    function N(e, t) {
      var n =
        r("AdsAdgroupSemanticFields").childAttachments.get(t, e) ||
        r("immutable").List();
      return n.some(M);
    }
    var M = function (t) {
      return !!t.get("video_id");
    };
    function w(e) {
      return !M(e) && (!!e.get("image_hash") || !!e.get("picture"));
    }
    function A(e, t) {
      var n = C(e);
      return (
        n != null &&
        n[t].video_id == null &&
        (n[t].image_hash != null || n[t].picture != null)
      );
    }
    ((l.isStaticAndDynamicCarouselAd = e),
      (l.isStaticAndDynamicCarouselChildAttachments = u),
      (l.isDynamicAdsIntroCard = c),
      (l.getChildAttachmentTypeFromPath = d),
      (l.getChildAttachmentType = m),
      (l.coerceChildAttachmentsToResult = p),
      (l.getChildAttachmentCount = _),
      (l.getDefaultChildAttachments = f),
      (l.hasOnlyEmptyChildAttachmentsPlaceholder = g),
      (l.getChildAttachmentsPath = h),
      (l.getChildAttachmentsPathFromSpec = y),
      (l.getChildAttachments = C),
      (l.isStaticCarouselAd = b),
      (l.hasPlaceData = v),
      (l.isEveryStaticChildAttachmentMapCard = S),
      (l.getInChild = R),
      (l.getPlaceDataIndex = L),
      (l.getTemplatePostFormat = E),
      (l.getChildAttachmentMediaFormat = k),
      (l.isDynamicAdCarouselMediaFormat = I),
      (l.isCarouselAdFromSpec = T),
      (l.isCarouselAd = D),
      (l.isCarouselImageAd = x),
      (l.isCarouseAdWithAtLeastXImages = $),
      (l.isCarouseAdWithAtLeastXMedia = P),
      (l.isCarouselVideoAd = N),
      (l.isVideoChildAttachment = M),
      (l.isImageChildAttachmentSemantic = w),
      (l.isImageChildAttachment = A));
  },
  226,
);
