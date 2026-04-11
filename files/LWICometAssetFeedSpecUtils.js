__d(
  "LWICometAssetFeedSpecUtils",
  ["LWICometCreativeJsonMigrationUtils", "jsonParseSafe", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, a;
      if (e == null) return null;
      var i =
        e == null ||
        (t = e.call_to_actions) == null ||
        (t = t[0]) == null ||
        (t = t.value) == null
          ? void 0
          : t.link;
      return {
        ad_formats: ["AUTOMATIC_FORMAT"],
        additional_data: void 0,
        additional_image_index: void 0,
        app_product_page_id: void 0,
        asset_customization_rules: void 0,
        audios: void 0,
        autotranslate: void 0,
        badge_sets: void 0,
        bodies: o("LWICometCreativeJsonMigrationUtils").convertBodiesType(
          e == null ? void 0 : e.bodies,
        ),
        call_ads_configuration: void 0,
        call_to_action_types: o(
          "LWICometCreativeJsonMigrationUtils",
        ).convertCTATypesType(
          ((n = e == null ? void 0 : e.call_to_actions) != null ? n : []).map(
            function (e) {
              return e.type;
            },
          ),
        ),
        call_to_actions: o(
          "LWICometCreativeJsonMigrationUtils",
        ).convertCTAsType(
          (r = e == null ? void 0 : e.call_to_actions) != null ? r : [],
        ),
        captions: void 0,
        carousels: void 0,
        collection_thumbnails: void 0,
        ctwa_consent_data: void 0,
        descriptions: o(
          "LWICometCreativeJsonMigrationUtils",
        ).convertDescriptionsType(e == null ? void 0 : e.descriptions),
        groups: void 0,
        images: o("LWICometCreativeJsonMigrationUtils").convertImagesType(
          e == null ? void 0 : e.images,
        ),
        lead_gen_configuration: void 0,
        lead_nurture_channels: void 0,
        link_urls:
          i != null
            ? s(i)
              ? [
                  {
                    website_url:
                      e == null ||
                      (a = e.call_to_actions) == null ||
                      (a = a[0]) == null ||
                      (a = a.value) == null
                        ? void 0
                        : a.link,
                  },
                ]
              : void 0
            : o("LWICometCreativeJsonMigrationUtils").convertLinkUrlsType(
                e == null ? void 0 : e.link_urls,
              ),
        message_extensions: void 0,
        onsite_destinations: void 0,
        optimization_type: "REGULAR",
        phone_data_ids: void 0,
        post_click_configuration: void 0,
        posts: o("LWICometCreativeJsonMigrationUtils").convertPostsType(
          e == null ? void 0 : e.posts,
        ),
        product_discount_id: void 0,
        promotional_metadata: void 0,
        reasons_to_shop: void 0,
        retailer_item_ids: void 0,
        shops_bundle: void 0,
        target_rules: o(
          "LWICometCreativeJsonMigrationUtils",
        ).convertTargetRulesType(e == null ? void 0 : e.target_rules),
        titles: o("LWICometCreativeJsonMigrationUtils").convertTitlesType(
          e == null ? void 0 : e.titles,
        ),
        translations: void 0,
        upcoming_event_metadata: void 0,
        upcoming_events: void 0,
        videos: o("LWICometCreativeJsonMigrationUtils").convertVideosType(
          e == null ? void 0 : e.videos,
        ),
        web_destination_spec: void 0,
      };
    }
    function s(e) {
      return (
        !e.startsWith("tel:") &&
        !e.startsWith("fbgeo://") &&
        e !== "https://api.whatsapp.com/send" &&
        e !== "https://fb.com/messenger_doc/"
      );
    }
    function u(e, t) {
      var n,
        r = (n = e.carousel_cards) != null ? n : [];
      r[0] != null && d(e, t, r[0]);
    }
    function c(e, t) {
      var n,
        r = (n = e.carousel_cards) != null ? n : [],
        o = r.find(function (e) {
          return e.images != null;
        });
      (o != null || r[0] != null) && d(e, t, o != null ? o : r[0]);
    }
    function d(e, t, n) {
      var r;
      (n.videos != null && n.videos.length > 0
        ? ((e.images = null),
          (e.videos = n.videos),
          (e.ad_formats = ["SINGLE_VIDEO"]),
          (e.titles = n.titles),
          (e.descriptions = n.descriptions))
        : n.images != null &&
          n.images.length > 0 &&
          ((e.videos = null),
          (e.images = n.images),
          (e.ad_formats = ["SINGLE_IMAGE"]),
          (e.titles = n.titles),
          (e.descriptions = n.descriptions)),
        (e.carousel_cards = null));
      var o = (r = _(e, t)) != null ? r : {},
        a = o.object_story_spec;
      a != null && (t.object_story_spec = a);
    }
    function m(e) {
      return e.carousel_cards != null && e.carousel_cards.length !== 0
        ? [].concat(e.carousel_cards)
        : [
            {
              images:
                e.images != null && e.images.length > 0
                  ? [].concat(e.images)
                  : void 0,
              titles:
                e.titles != null && e.titles.length > 0
                  ? [].concat(e.titles)
                  : void 0,
              videos:
                e.videos != null && e.videos.length > 0
                  ? [].concat(e.videos)
                  : void 0,
            },
          ];
    }
    function p(e) {
      var t,
        n,
        r,
        o = null,
        a = null,
        i = null,
        l = null,
        s = null,
        u,
        c,
        d = (t = e.ad_formats) == null ? void 0 : t[0];
      if (d === "SINGLE_IMAGE") {
        var m, p, _, f;
        if (
          ((o =
            (m =
              e == null || (p = e.images) == null || (p = p[0]) == null
                ? void 0
                : p.clientPreviewImageURL) != null
              ? m
              : void 0),
          (i =
            e == null || (_ = e.images) == null || (_ = _[0]) == null
              ? void 0
              : _.url),
          (a =
            e == null || (f = e.images) == null || (f = f[0]) == null
              ? void 0
              : f.hash),
          i != null)
        ) {
          var g;
          c = {
            carouselHeadline:
              (g = e.titles) == null || (g = g[0]) == null ? void 0 : g.text,
            clientPreviewImageURL: o,
            imageHash: a,
            imageUrl: i,
            key: a != null ? a : i,
            mediaType: "image",
          };
        } else if (a != null) {
          var h;
          c = {
            carouselHeadline:
              (h = e.titles) == null || (h = h[0]) == null ? void 0 : h.text,
            clientPreviewImageURL: o,
            imageHash: a,
            imageUrl: i,
            key: a != null ? a : i,
            mediaType: "image",
          };
        }
      } else if (d === "SINGLE_VIDEO") {
        var y, C, b;
        if (
          ((i =
            e == null || (y = e.videos) == null || (y = y[0]) == null
              ? void 0
              : y.thumbnail_url),
          (a =
            e == null || (C = e.videos) == null || (C = C[0]) == null
              ? void 0
              : C.thumbnail_hash),
          (u =
            e == null || (b = e.videos) == null || (b = b[0]) == null
              ? void 0
              : b.video_id),
          u != null)
        ) {
          if (a != null) {
            var v;
            c = {
              carouselHeadline:
                (v = e.titles) == null || (v = v[0]) == null ? void 0 : v.text,
              imageHash: a,
              imageUrl: i,
              key: u,
              mediaType: "video",
              videoID: u,
            };
          } else if (i != null) {
            var S;
            c = {
              carouselHeadline:
                (S = e.titles) == null || (S = S[0]) == null ? void 0 : S.text,
              imageHash: a,
              imageUrl: i,
              key: u,
              mediaType: "video",
              videoID: u,
            };
          }
        }
      }
      return (
        (l = (n = e.titles) == null || (n = n[0]) == null ? void 0 : n.text),
        (s = (r = e.bodies) == null || (r = r[0]) == null ? void 0 : r.text),
        { bodyText: s, headline: l, media: c }
      );
    }
    function _(e, t) {
      var n, o, a;
      if ((t == null ? void 0 : t.object_story_spec) == null || e == null)
        return t;
      var i =
        ((n = e.ad_formats) == null ? void 0 : n[0]) === "SINGLE_IMAGE" ||
        ((o = e.ad_formats) == null ? void 0 : o[0]) === "CAROUSEL"
          ? babelHelpers.extends({}, t.object_story_spec.link_data, f(e))
          : null;
      return (
        i != null &&
          r("qex")._("1392") === !0 &&
          (i.use_flexible_image_aspect_ratio = !0),
        babelHelpers.extends({}, t, {
          object_story_spec: babelHelpers.extends({}, t.object_story_spec, {
            link_data: i != null ? i : void 0,
            video_data:
              ((a = e.ad_formats) == null ? void 0 : a[0]) === "SINGLE_VIDEO"
                ? g(e)
                : void 0,
          }),
        })
      );
    }
    function f(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = e.bodies,
        p = e.call_to_actions,
        _ = e.carousel_cards,
        f = e.descriptions,
        g = e.images,
        h = e.link_urls,
        y = e.titles,
        C =
          p != null && p.length > 0
            ? { type: p[0].type, value: p[0].value }
            : void 0;
      if (
        ((t = e.ad_formats) == null ? void 0 : t[0]) === "CAROUSEL" &&
        _ != null &&
        _.length > 0
      ) {
        var b, v;
        return {
          call_to_action: C,
          child_attachments: _.map(function (e) {
            var t, n, r, o, a, i, l, s, u, c, d, m, p;
            return {
              call_to_action: C,
              description:
                (t = e.descriptions) == null || (t = t[0]) == null
                  ? void 0
                  : t.text,
              image_hash:
                ((n = e.videos) == null ? void 0 : n[0]) != null
                  ? (r = e.videos) == null
                    ? void 0
                    : r[0].thumbnail_hash
                  : (o = e.images) == null
                    ? void 0
                    : o[0].hash,
              link:
                (a =
                  h == null || (i = h[0]) == null ? void 0 : i.website_url) !=
                null
                  ? a
                  : "",
              name:
                (l = e.titles) == null || (l = l[0]) == null ? void 0 : l.text,
              picture:
                ((s = e.videos) == null ? void 0 : s[0]) != null
                  ? ((u = e.videos) == null ? void 0 : u[0].thumbnail_hash) ==
                    null
                    ? (c = e.videos) == null
                      ? void 0
                      : c[0].thumbnail_url
                    : null
                  : ((d = e.images) == null ? void 0 : d[0].hash) == null
                    ? (m = e.images) == null || (m = m[0]) == null
                      ? void 0
                      : m.url
                    : null,
              video_id:
                (p = e.videos) == null || (p = p[0]) == null
                  ? void 0
                  : p.video_id,
            };
          }),
          link: h == null || (b = h[0]) == null ? void 0 : b.website_url,
          message: m == null || (v = m[0]) == null ? void 0 : v.text,
        };
      }
      return {
        call_to_action: C,
        child_attachments: void 0,
        description: f == null || (n = f[0]) == null ? void 0 : n.text,
        image_crops:
          (g == null || (r = g[0]) == null ? void 0 : r.image_crops) &&
          JSON.stringify(
            g == null || (o = g[0]) == null ? void 0 : o.image_crops,
          ),
        image_hash: g == null || (a = g[0]) == null ? void 0 : a.hash,
        link:
          (i = h == null || (l = h[0]) == null ? void 0 : l.website_url) != null
            ? i
            : C == null || (s = C.value) == null
              ? void 0
              : s.link,
        message: m == null || (u = m[0]) == null ? void 0 : u.text,
        name: y == null || (c = y[0]) == null ? void 0 : c.text,
        picture: g == null || (d = g[0]) == null ? void 0 : d.url,
      };
    }
    function g(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = e.bodies,
        s = e.call_to_actions,
        u = e.titles,
        c = e.videos;
      return {
        call_to_action:
          s != null && s.length > 0
            ? { type: s[0].type, value: s[0].value }
            : void 0,
        image_hash: c == null || (t = c[0]) == null ? void 0 : t.thumbnail_hash,
        image_url:
          (c == null || (n = c[0]) == null ? void 0 : n.thumbnail_hash) == null
            ? c == null || (r = c[0]) == null
              ? void 0
              : r.thumbnail_url
            : null,
        message: l == null || (o = l[0]) == null ? void 0 : o.text,
        title: u == null || (a = u[0]) == null ? void 0 : a.text,
        video_id: c == null || (i = c[0]) == null ? void 0 : i.video_id,
      };
    }
    function h(e, t) {
      if (e == null || (e.link_data == null && e.video_data == null))
        return null;
      var n = {
        ad_formats: null,
        bodies: null,
        call_to_actions: null,
        carousel_cards: null,
        descriptions: null,
        images: null,
        link_urls: null,
        titles: null,
        videos: null,
      };
      return (
        e.link_data != null
          ? y(e.link_data, n, t)
          : e.video_data != null && C(e.video_data, n, t),
        babelHelpers.extends({}, n)
      );
    }
    function y(e, t, n) {
      if (
        (e.call_to_action != null &&
          (t.call_to_actions = [
            {
              adlabels: [{ name: n }],
              type: e.call_to_action.type,
              value: e.call_to_action.value,
            },
          ]),
        e.description != null && (t.descriptions = [{ text: e.description }]),
        e.child_attachments != null)
      )
        if (e.child_attachments.length === 1) {
          var o = e.child_attachments[0];
          if ((o == null ? void 0 : o.video_id) != null) {
            if (
              ((t.ad_formats = ["SINGLE_VIDEO"]),
              (o == null ? void 0 : o.call_to_action) != null)
            ) {
              var a;
              ((t.call_to_actions = [
                {
                  adlabels: [{ name: n }],
                  type: o.call_to_action.type,
                  value: o.call_to_action.value,
                },
              ]),
                ((a = o.call_to_action.value) == null ? void 0 : a.link) !=
                  null &&
                  (t.link_urls = [
                    { website_url: o.call_to_action.value.link },
                  ]));
            }
            ((e == null ? void 0 : e.message) != null &&
              (t.bodies = [{ text: e == null ? void 0 : e.message }]),
              (o == null ? void 0 : o.name) != null &&
                (t.titles = [{ text: o.name }]),
              (t.videos = [
                {
                  thumbnail_hash: o.image_hash,
                  thumbnail_url: o.picture,
                  video_id: o.video_id,
                },
              ]));
          } else
            ((t.ad_formats = ["SINGLE_IMAGE"]),
              (o == null ? void 0 : o.name) != null &&
                (t.titles = [{ text: o.name }]),
              ((o == null ? void 0 : o.image_hash) != null ||
                (o == null ? void 0 : o.picture) != null) &&
                (t.images = [{ hash: o.image_hash, url: o.picture }]));
        } else {
          t.ad_formats = ["CAROUSEL"];
          var i = e.child_attachments
            .map(function (e) {
              var t;
              return e == null
                ? null
                : {
                    images:
                      e.video_id == null
                        ? [{ hash: e.image_hash, url: e.picture }]
                        : null,
                    titles: [{ text: (t = e.name) != null ? t : "" }],
                    videos:
                      e.video_id != null
                        ? [
                            {
                              thumbnail_hash: e.image_hash,
                              thumbnail_url: e.picture,
                              video_id: e.video_id,
                            },
                          ]
                        : null,
                  };
            })
            .filter(Boolean);
          i.length > 0 && (t.carousel_cards = i);
        }
      else
        ((t.ad_formats = ["SINGLE_IMAGE"]),
          e.name != null && (t.titles = [{ text: e.name }]),
          (e.image_hash != null || e.picture != null) &&
            (t.images = [
              {
                hash: e.image_hash,
                image_crops:
                  e.image_crops != null
                    ? r("jsonParseSafe")(e.image_crops)
                    : void 0,
                url: e.picture,
              },
            ]));
      (e.link != null && (t.link_urls = [{ website_url: e.link }]),
        e.message != null && (t.bodies = [{ text: e.message }]));
    }
    function C(e, t, n) {
      if (((t.ad_formats = ["SINGLE_VIDEO"]), e.call_to_action != null)) {
        var r;
        ((t.call_to_actions = [
          {
            adlabels: [{ name: n }],
            type: e.call_to_action.type,
            value: e.call_to_action.value,
          },
        ]),
          ((r = e.call_to_action.value) == null ? void 0 : r.link) != null &&
            (t.link_urls = [{ website_url: e.call_to_action.value.link }]));
      }
      (e.message != null && (t.bodies = [{ text: e.message }]),
        e.title != null && (t.titles = [{ text: e.title }]),
        e.video_id != null &&
          (t.videos = [
            {
              thumbnail_hash: e.image_hash,
              thumbnail_url: e.image_url,
              video_id: e.video_id,
            },
          ]));
    }
    function b(e) {
      if (e == null) return !1;
      var t = e.bodies,
        n = e.titles;
      return (t != null && t.length > 1) || (n != null && n.length > 1);
    }
    ((l.createAfsFromAfsPlusForDCO = e),
      (l.convertCarouselCardsToSingleMediaFormat = u),
      (l.convertCarouselCardsToSingleMediaFormatPrioritizeImage = c),
      (l.getFormatedCarouselCardsFromAFSPlus = m),
      (l.getSingleMediaCreativeDataFromAssetFeedSpecPlus = p),
      (l.getObjectStorySpecCreativeFromAssetFeedSpecPlus = _),
      (l.getAssetFeedSpecFromObjectStorySpec = h),
      (l.containsTextVariantsInAFS = b));
  },
  98,
);
