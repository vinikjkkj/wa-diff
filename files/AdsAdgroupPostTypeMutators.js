__d(
  "AdsAdgroupPostTypeMutators",
  [
    "AdsAPIAdgroupLinkDataRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupTemplateDataRecord",
    "AdsAPIAdgroupVideoDataRecord",
    "AdsAPICallToActionPaths",
    "AdsAPIObjectives",
    "AdsAdgroupEditorStore",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsCanvasAdUtils",
    "AdsClickToCallAdsUtils",
    "AdsCollectionsAdUtils",
    "AdsDataAtom",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLocalUtils",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsOnsiteDonateAdsUtils",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "AdsWebsiteAdUtils",
    "ApiAdObjectTypes",
    "ConstUriUtils",
    "XVanityURLControllerRouteBuilder",
    "adsPromotedObjectTypeSelector_LEGACY",
    "getByPath",
    "gkx",
    "immutable",
    "isAdsCanvasLink",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("AdsAPIAdgroupRecord"))(),
      u = new (r("AdsAPIAdgroupTemplateDataRecord"))();
    function c(t) {
      var n = {};
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAdgroupEditorStore").getDispatchToken(),
        ]);
      var o = r("AdsAdgroupEditorStore").getCachedImageHash(t.id);
      o && (n.image_hash = o);
      var a = r("AdsAdgroupEditorStore").getCachedImageCrops(t.id);
      a && (n.image_crops = a);
      var i = r("AdsAdgroupEditorStore").getCachedImageURL(t.id);
      return (i && (n.picture = i), n);
    }
    function d(t) {
      var n = {};
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAdgroupEditorStore").getDispatchToken(),
        ]);
      var o = r("AdsAdgroupEditorStore").getCachedVideoID(t.id);
      o && (n.video_id = o);
      var a = r("AdsAdgroupEditorStore").getCachedVideoThumbnailURL(t.id);
      a && (n.image_url = a);
      var i = r("AdsAdgroupEditorStore").getCachedVideoThumbnailHash(t.id);
      return (i && (n.image_hash = i), n);
    }
    function m(t, n, a) {
      var i,
        l,
        s,
        u = [],
        c = {},
        d = p(n),
        m = d.config,
        _ = d.isDynamic;
      _
        ? u.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .CALL_TO_ACTION.VALUE.CAPTION,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .CALL_TO_ACTION.VALUE.LINK_DESCRIPTION,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .CALL_TO_ACTION.VALUE.LINK_TITLE,
          )
        : u.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.CAPTION,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.LINK_DESCRIPTION,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.LINK_TITLE,
          );
      var f =
        (i = t.creative) == null ||
        (i = i.object_story_spec) == null ||
        (i = i.video_data) == null ||
        (i = i.call_to_action) == null
          ? void 0
          : i.type;
      (f === "DIAL_CODE" ||
        f === "LEARN_MORE" ||
        f === "SEE_DETAILS" ||
        f === "MESSAGE_PAGE") &&
        u.push(
          _
            ? r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .CALL_TO_ACTION.VALUE.LINK
            : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
        );
      var g =
          (l = t.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.link,
        h = "link";
      if ((f === "LEARN_MORE" || f === "SEE_DETAILS") && g) c[h] = g;
      else if (a && !r("isAdsCanvasLink")(a)) c[h] = a;
      else if (
        ((s = t.creative) == null ||
        (s = s.object_story_spec) == null ||
        (s = s.video_data) == null
          ? void 0
          : s.offer_id) != null
      ) {
        var y,
          C =
            (y = t.creative) == null || (y = y.object_story_spec) == null
              ? void 0
              : y.page_id;
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsPageStore").getDispatchToken(),
          ]);
        var b = r("AdsPageStore").getLoadObject(C).getValue();
        c[h] = o("AdsPageUtils").getPageLink(b);
      } else
        u.push(
          _
            ? r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .LINK
            : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
        );
      if (_) {
        var v = "force_single_link";
        c[v] = !0;
      }
      return {
        toConfig: m,
        deletePaths: u,
        overrideDataFields: c,
        isDynamic: _,
      };
    }
    function p(e) {
      return {
        config: o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        isDynamic: e === r("AdsAPIObjectives").STORE_VISITS,
      };
    }
    function _(e, t) {
      var n,
        a = [],
        i = { call_to_action: void 0 };
      delete i.call_to_action;
      var l = p(t),
        s = l.isDynamic,
        u = o("AdsAdgroupSpecUtils").getCallToAction(e),
        c = r("getByPath")(u, r("AdsAPICallToActionPaths").TYPE),
        d = r("getByPath")(u, r("AdsAPICallToActionPaths").VALUE.LINK),
        m =
          ((n = e.creative) == null ? void 0 : n.dynamic_ad_voice) ===
          "DYNAMIC",
        _ = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
        f =
          c === "GET_DIRECTIONS" &&
          o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(e);
      return (
        _
          ? (i.call_to_action = {
              type: r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
            })
          : o("AdsCanvasAdUtils").isCanvasAd(e)
            ? (i.call_to_action = {
                type: r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              })
            : c
              ? f
                ? ((i.call_to_action = {
                    type: "GET_DIRECTIONS",
                    value: { link: "https://fb.com/dynamic_get_directions" },
                  }),
                  a.push(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .VIDEO_DATA.CALL_TO_ACTION.VALUE.CAPTION,
                  ))
                : c === "SHOP_NOW" || c === "ORDER_NOW"
                  ? ((i.call_to_action = { type: "GET_DIRECTIONS" }),
                    a.push(
                      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                        .VIDEO_DATA.CALL_TO_ACTION.VALUE.LINK,
                    ))
                  : c !== "LEARN_MORE" && c !== "SEE_DETAILS" && !d
                    ? a.push(
                        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                          .VIDEO_DATA.CALL_TO_ACTION.VALUE.LINK,
                      )
                    : c !== "LEARN_MORE" &&
                      c !== "SEE_DETAILS" &&
                      (i.call_to_action = { type: c, value: { link: d } })
              : s && m
                ? ((i.call_to_action = { type: "GET_DIRECTIONS" }),
                  a.push(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .VIDEO_DATA.CALL_TO_ACTION.VALUE.path,
                  ))
                : (i.call_to_action = {
                    type: r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                  }),
        { deletePaths: a, overrideVideoDataFields: i }
      );
    }
    function f(e, t) {
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecord(
        r("ApiAdObjectTypes").SHARE,
        r("ApiAdObjectTypes").DOMAIN,
        e,
        t,
        r("immutable").List([
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
        ]),
      );
    }
    function g(t, n) {
      var a,
        i = d(n),
        l = [],
        u = o("AdsObjectTypeUtils").isTemplateCreative(n)
          ? o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig
          : o("AdsAdgroupPostTypeMutatorsUtils").linkConversionConfig,
        c = n.getIn(r("nullthrows")(u.mapping.callToActionType));
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor(
          r("adsPromotedObjectTypeSelector_LEGACY")
            .getStores()
            .map(function (e) {
              return e.getDispatchToken();
            }),
        );
      var m = r("adsPromotedObjectTypeSelector_LEGACY")(n.adset_id),
        p =
          t === r("AdsAPIObjectives").LINK_CLICKS &&
          (c === "CALL_NOW" || m === r("AdsPromotedObjectTypes").PHONE_CALL),
        f =
          t === r("AdsAPIObjectives").CONVERSIONS &&
          (c === "CALL_NOW" || m === r("AdsPromotedObjectTypes").PHONE_CALL),
        g = m === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE;
      if (
        (o("AdsWebsiteAdUtils").isWebsiteObjective(t) &&
          c !== "WHATSAPP_MESSAGE" &&
          c !== "BUY_TICKETS" &&
          c !== "JOIN_GROUP" &&
          c !== "REMIND_ME" &&
          c !== "JOIN_LIVE_VIDEO" &&
          !p &&
          !f &&
          !g) ||
        t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
      ) {
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsAdgroupEditorStore").getDispatchToken(),
          ]);
        var h =
          r("AdsAdgroupEditorStore").getCachedCallToActionType(n.id) ||
          r("AdsAdgroupEditorStore").getCachedVideoCallToActionType(n.id) ||
          (r("gkx")("23348") ? c : null) ||
          (r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE");
        i.call_to_action = { type: h };
      }
      if (
        o("AdsLocalUtils").isLocalObjective(t) ||
        (c === "GET_DIRECTIONS" &&
          o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(n))
      ) {
        var y = _(n, t);
        ((l = [].concat(l, y.deletePaths)),
          (i = babelHelpers.extends({}, i, y.overrideVideoDataFields)));
      }
      (t === r("AdsAPIObjectives").REACH &&
        l.push(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .CALL_TO_ACTION.VALUE.LINK,
        ),
        o("AdsOnsiteDonateAdsUtils").isOnsiteDonateAdPromotedObjectType(m) &&
          (i.call_to_action = { type: "DONATE" }));
      var C = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.set(
          new (r("AdsAPIAdgroupVideoDataRecord"))(i),
          s,
        ),
        b = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          u,
          o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
          n,
          C,
          r("immutable").List(l),
        );
      if (
        t === r("AdsAPIObjectives").LEAD_GENERATION &&
        c === "CALL_NOW" &&
        n != null &&
        (a = n.creative) != null &&
        (a = a.object_story_spec) != null &&
        (a = a.link_data) != null &&
        (a = a.call_to_action) != null &&
        (a = a.value) != null &&
        a.link
      ) {
        var v;
        b = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.link.set(
            n == null ||
              (v = n.creative) == null ||
              (v = v.object_story_spec) == null ||
              (v = v.link_data) == null ||
              (v = v.call_to_action) == null ||
              (v = v.value) == null
              ? void 0
              : v.link,
          ),
        )(b);
      }
      if (p || f) {
        var S,
          R =
            n == null ||
            (S = n.creative) == null ||
            (S = S.object_story_spec) == null ||
            (S = S.link_data) == null ||
            (S = S.call_to_action) == null ||
            (S = S.value) == null
              ? void 0
              : S.link,
          L = o("AdsClickToCallAdsUtils").getIsClickToCallAdsLinkValue(
            String(R),
          );
        if (L) {
          var E;
          b = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.set(
              n == null ||
                (E = n.creative) == null ||
                (E = E.object_story_spec) == null ||
                (E = E.link_data) == null ||
                (E = E.call_to_action) == null ||
                (E = E.value) == null
                ? void 0
                : E.link,
            ),
          )(b);
        } else
          b = o("AdsMutators").chain(function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.delete(
              e,
            );
          })(b);
      }
      return b;
    }
    function h(e, t) {
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecord(
        r("ApiAdObjectTypes").PHOTO,
        r("ApiAdObjectTypes").SHARE,
        t,
      );
    }
    function y(e, t) {
      var n = d(t),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.set(
          new (r("AdsAPIAdgroupVideoDataRecord"))(n),
          s,
        );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecord(
        r("ApiAdObjectTypes").PHOTO,
        r("ApiAdObjectTypes").VIDEO,
        t,
        a,
      );
    }
    function C(t, n) {
      var a,
        i,
        l,
        u,
        d = c(n),
        p = [];
      if (o("AdsWebsiteAdUtils").isWebsiteObjective(t)) {
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsAdgroupEditorStore").getDispatchToken(),
          ]);
        var _ = r("AdsAdgroupEditorStore").getCachedCallToActionType(n.id);
        _ && (d.call_to_action = { type: _ });
      }
      var f = {};
      o("AdsLocalUtils").isLocalObjective(t) &&
        ((e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsAdgroupEditorStore").getDispatchToken(),
          ]),
        (f = m(n, t, r("AdsAdgroupEditorStore").getCachedLink(n.id))),
        (p = [].concat(p, f.deletePaths)),
        (d = babelHelpers.extends({}, d, f.overrideDataFields)));
      var g =
          ((a = n.creative) == null ? void 0 : a.omnichannel_link_spec) != null,
        h =
          (i = n.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.video_data) == null ||
          (i = i.call_to_action) == null ||
          (i = i.value) == null
            ? void 0
            : i.app_destination,
        y =
          (l = n.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null
            ? void 0
            : l.type,
        C =
          h !== "MESSENGER" &&
          h !== "MESSENGER_EXTENSIONS" &&
          y !== "WHATSAPP_MESSAGE" &&
          y !== "GET_DIRECTIONS" &&
          y !== "CALL_NOW" &&
          y !== "JOIN_LIVE_VIDEO",
        b = t === r("AdsAPIObjectives").LEAD_GENERATION && y === "CALL_NOW",
        v = t === r("AdsAPIObjectives").LINK_CLICKS && y === "CALL_NOW",
        S = t === r("AdsAPIObjectives").CONVERSIONS && y === "CALL_NOW";
      ((o("AdsWebsiteAdUtils").isWebsiteObjective(t) ||
        t === r("AdsAPIObjectives").BRAND_AWARENESS) &&
        C &&
        !g &&
        p.push(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .CALL_TO_ACTION.VALUE.path,
        ),
        t === r("AdsAPIObjectives").POST_ENGAGEMENT &&
          p.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.path,
          ),
        t === r("AdsAPIObjectives").VIDEO_VIEWS &&
          (p.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.path,
          ),
          p.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
          )),
        t === r("AdsAPIObjectives").REACH &&
          ((d.call_to_action = {
            type: r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
          }),
          p.push(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.path,
          ),
          C ||
            p.push(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
            )));
      var R = f.isDynamic
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.set(
            new (r("AdsAPIAdgroupTemplateDataRecord"))(d),
            s,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.set(
            new (r("AdsAPIAdgroupLinkDataRecord"))(d),
            s,
          );
      t === r("AdsAPIObjectives").LEAD_GENERATION &&
        (b
          ? p.push(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.CAPTION,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK_TITLE,
            )
          : p.push(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.CAPTION,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK_TITLE,
            ));
      var L = o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
        f.toConfig || o("AdsAdgroupPostTypeMutatorsUtils").linkConversionConfig,
        n,
        R,
        r("immutable").List(p),
      );
      if (b || v || S) {
        var E,
          k =
            (E = n.creative) == null || (E = E.object_story_spec) == null
              ? void 0
              : E.page_id;
        if (k != null) {
          var I, T;
          L = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(
              (I =
                (T = r("XVanityURLControllerRouteBuilder")
                  .buildUri({ vanity: k })
                  .qualifyDomain(
                    o("ConstUriUtils").getUri("https://facebook.com/"),
                  )) == null
                  ? void 0
                  : T.toString()) != null
                ? I
                : "",
            ),
          )(L);
        }
      }
      if (
        (u = n.creative) != null &&
        (u = u.object_story_spec) != null &&
        (u = u.video_data) != null &&
        (u = u.call_to_action) != null &&
        (u = u.value) != null &&
        u.event_id
      ) {
        var D, x;
        L = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.event_id.set(
            (D = n.creative) == null ||
              (D = D.object_story_spec) == null ||
              (D = D.video_data) == null ||
              (D = D.call_to_action) == null ||
              (D = D.value) == null
              ? void 0
              : D.event_id,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.link.set(
            (x = n.creative) == null ||
              (x = x.object_story_spec) == null ||
              (x = x.video_data) == null ||
              (x = x.call_to_action) == null ||
              (x = x.value) == null
              ? void 0
              : x.link,
          ),
        )(L);
      }
      return L;
    }
    function b(e, t, n, a) {
      var i, l;
      a === void 0 && (a = null);
      var u = _(e, t),
        c = u.deletePaths,
        d = u.overrideVideoDataFields;
      a = (i = a || r("immutable").List([])).push.apply(i, c);
      var m = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.video_data.set(
        new (r("AdsAPIAdgroupVideoDataRecord"))(
          babelHelpers.extends(
            {},
            (l = n.creative) == null ||
              (l = l.object_story_spec) == null ||
              (l = l.video_data) == null
              ? void 0
              : l.toJS(),
            d,
          ),
        ),
        s,
      );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
        e,
        m,
        a,
      );
    }
    function v(e, t, n, a) {
      var i, l;
      a === void 0 && (a = null);
      var c =
          (n == null ||
          (i = n.creative) == null ||
          (i = i.object_story_spec) == null
            ? void 0
            : i.template_data) || u,
        d = m(e, t, c.link),
        p = d.deletePaths,
        _ = d.overrideDataFields;
      a = (l = a || r("immutable").List([])).push.apply(l, p);
      var f = babelHelpers.extends({}, c.toJS(), _),
        g = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.set(
          new (r("AdsAPIAdgroupTemplateDataRecord"))(f),
          s,
        );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        e,
        g,
        a,
      );
    }
    function S(t, n) {
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAdgroupEditorStore").getDispatchToken(),
        ]);
      var a = r("AdsAdgroupEditorStore").getCachedImageHash(n.id),
        i = r("AdsAdgroupEditorStore").getCachedImageURL(n.id),
        l = s;
      (a &&
        (l = o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).setUnifiedCreativeOrLegacyValueForRecord(
          l,
          a,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.photo_data
            .image_hash.set,
          function (e, t) {
            var n,
              o,
              a,
              i,
              l =
                (n =
                  (o = t.creative) == null ||
                  (o = o.asset_feed_spec) == null ||
                  (o = o.images) == null
                    ? void 0
                    : o.get(0)) != null
                  ? n
                  : r("immutable").Map();
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.images.set(
              ((a =
                (i = t.creative) == null || (i = i.asset_feed_spec) == null
                  ? void 0
                  : i.images) != null
                ? a
                : r("immutable").List()
              ).set(0, l.set("hash", e)),
              t,
            );
          },
        )),
        i &&
          (l = o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).setUnifiedCreativeOrLegacyValueForRecord(
            l,
            i,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.photo_data
              .url.set,
            function (e, t) {
              var n,
                o,
                a,
                i,
                l =
                  (n =
                    (o = t.creative) == null ||
                    (o = o.asset_feed_spec) == null ||
                    (o = o.images) == null
                      ? void 0
                      : o.get(0)) != null
                    ? n
                    : r("immutable").Map();
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.images.set(
                ((a =
                  (i = t.creative) == null || (i = i.asset_feed_spec) == null
                    ? void 0
                    : i.images) != null
                  ? a
                  : r("immutable").List()
                ).set(0, l.set("url", e)),
                t,
              );
            },
          )));
      var u = [];
      return (
        t !== r("AdsAPIObjectives").POST_ENGAGEMENT &&
          u.push(
            o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              n,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .CALL_TO_ACTION.path,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                  .CALL_TO_ACTIONS,
                ["0"],
              ),
            ),
          ),
        o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
          r("ApiAdObjectTypes").VIDEO,
          r("ApiAdObjectTypes").PHOTO,
          n,
          l,
          r("immutable").List(u),
        )
      );
    }
    function R(e, t) {
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecord(
        r("ApiAdObjectTypes").VIDEO,
        r("ApiAdObjectTypes").DOMAIN,
        e,
        t,
        r("immutable").List([
          r("AdsAPIAdgroupPaths").CREATIVE.URL_TAGS,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
        ]),
      );
    }
    function L(e, t) {
      var n,
        a = o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
          r("ApiAdObjectTypes").DOMAIN,
          r("ApiAdObjectTypes").SHARE,
          e,
          t,
          r("immutable").List([
            (n = r("AdsAPIAdgroupPaths")).CREATIVE.BODY,
            n.CREATIVE.CALL_TO_ACTION_TYPE,
            n.CREATIVE.TITLE,
            n.CREATIVE.IMAGE_CROPS,
            n.CREATIVE.IMAGE_HASH,
            n.CREATIVE.IMAGE_URL,
            n.CREATIVE.OBJECT_URL,
          ]),
        );
      if (t) {
        var i, l;
        a = a
          .setIn(
            (l = r("nullthrows"))(
              (i = o("AdsAdgroupPostTypeMutatorsUtils")).linkConversionConfig
                .mapping.pageID,
            ),
            t.getIn(l(i.linkConversionConfig.mapping.pageID)),
          )
          .setIn(
            l(i.linkConversionConfig.mapping.instagramActorID),
            t.getIn(l(i.linkConversionConfig.mapping.instagramActorID)),
          );
      }
      return a;
    }
    function E(e, t) {
      var n,
        a = o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
          r("ApiAdObjectTypes").DOMAIN,
          r("ApiAdObjectTypes").VIDEO,
          e,
          t,
          r("immutable").List([
            (n = r("AdsAPIAdgroupPaths")).CREATIVE.BODY,
            n.CREATIVE.CALL_TO_ACTION_TYPE,
            n.CREATIVE.TITLE,
            n.CREATIVE.IMAGE_CROPS,
            n.CREATIVE.IMAGE_HASH,
            n.CREATIVE.IMAGE_URL,
            n.CREATIVE.OBJECT_URL,
          ]),
        );
      if (t) {
        var i, l, s, u;
        a = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            (i = t.creative) == null || (i = i.object_story_spec) == null
              ? void 0
              : i.page_id,
          ),
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            (l = t.creative) == null || (l = l.object_story_spec) == null
              ? void 0
              : l.instagram_actor_id,
            (s = t.creative) == null || (s = s.object_story_spec) == null
              ? void 0
              : s.instagram_user_id,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.threads_user_id.set(
            (u = t.creative) == null || (u = u.object_story_spec) == null
              ? void 0
              : u.threads_user_id,
          ),
        )(a);
      }
      return a;
    }
    function k(e) {
      var t,
        n = (t = r(
          "AdsAdgroupRecordAccessors",
        )).creative.object_story_spec.template_data.set(
          new (r("AdsAPIAdgroupTemplateDataRecord"))({}),
          s,
        );
      return (
        (e = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          o("AdsAdgroupPostTypeMutatorsUtils").linkConversionConfig,
          o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
          e,
          n,
          r("immutable").List([
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.path,
          ]),
        )),
        o("AdsMutators").chain(
          t.creative.object_story_spec.template_data.image_hash.delete,
          t.creative.object_story_spec.template_data.image_crops.delete,
          t.creative.object_story_spec.template_data.picture.delete,
        )(e)
      );
    }
    function I(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.link_data.set(
        new (r("AdsAPIAdgroupLinkDataRecord"))({}),
        s,
      );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").linkConversionConfig,
        e,
        t || n,
        r("immutable").List([
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .FORMAT_OPTION,
        ]),
      );
    }
    function T(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.template_data.set(
        new (r("AdsAPIAdgroupTemplateDataRecord"))({}),
        s,
      );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").linkConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        e,
        t,
      );
    }
    function D(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.template_data.set(
        new (r("AdsAPIAdgroupTemplateDataRecord"))({}),
        s,
      );
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        e,
        t,
        r("immutable").List([
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
            .CALL_TO_ACTION.VALUE.CAPTION,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
            .CALL_TO_ACTION.VALUE.LINK,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
            .CALL_TO_ACTION.VALUE.LINK_FORMAT,
        ]),
      );
    }
    function x(e, t) {
      return o(
        "AdsAdgroupPostTypeMutatorsUtils",
      ).convertPostTypeInAdgroupRecordUsingConfig(
        o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
        o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
        e,
        t,
      );
    }
    ((l.convertLinkPostToDomainPost = f),
      (l.convertLinkOrTemplatePostToVideoPost = g),
      (l.convertPhotoPostToLinkPost = h),
      (l.convertPhotoPostToVideoPost = y),
      (l.convertVideoPostToLinkOrTemplatePost = C),
      (l.convertTemplatePostToVideoPost = b),
      (l.convertVideoPostToTemplatePost = v),
      (l.convertVideoPostToPhotoPost = S),
      (l.convertVideoPostToDomainPost = R),
      (l.convertDomainPostToLinkPost = L),
      (l.convertDomainPostToVideoPost = E),
      (l.convertLinkPostToTemplatePost = k),
      (l.convertTemplatePostToLinkPost = I),
      (l.convertLinkPostToTemplateVideoPost = T),
      (l.convertVideoPostToTemplateVideoPost = D),
      (l.convertTemplateVideoPostToVideoPost = x));
  },
  98,
);
