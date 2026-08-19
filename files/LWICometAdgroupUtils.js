__d(
  "LWICometAdgroupUtils",
  [
    "AdsInstagramUserIdMigrationUtils",
    "FBImmer",
    "LWICometACOUtils",
    "LWICometCTAEditorNeedsOverrideType",
    "LWICometCTALinkUtils",
    "LWICometCTAUtils",
    "ads-lib-urllib",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "www.example.com",
      s = "VIDEO";
    function u(e, t, n, r) {
      r === void 0 && (r = !1);
      var o,
        a = null,
        i,
        l = null,
        s = null,
        u,
        c;
      if (e != null) {
        var d, m, p, _;
        if (((d = e.images) == null ? void 0 : d[0]) != null) {
          var f, g, h, y;
          ((a =
            e == null || (f = e.images) == null || (f = f[0]) == null
              ? void 0
              : f.url),
            (o =
              e == null || (g = e.images) == null || (g = g[0]) == null
                ? void 0
                : g.hash),
            (i =
              (h =
                e == null || (y = e.images) == null || (y = y[0]) == null
                  ? void 0
                  : y.clientPreviewImageURL) != null
                ? h
                : void 0),
            a != null
              ? (c = {
                  clientPreviewImageURL: i,
                  imageHash: o,
                  imageUrl: a,
                  key: o != null ? o : a,
                  mediaType: "image",
                })
              : o != null &&
                (c = {
                  clientPreviewImageURL: i,
                  imageHash: o,
                  imageUrl: null,
                  key: o,
                  mediaType: "image",
                }));
        } else if (((m = e.videos) == null ? void 0 : m[0]) != null) {
          var C, b;
          if (
            ((a =
              e == null || (C = e.videos) == null || (C = C[0]) == null
                ? void 0
                : C.thumbnail_url),
            (u =
              e == null || (b = e.videos) == null || (b = b[0]) == null
                ? void 0
                : b.video_id),
            r)
          ) {
            var v;
            ((o =
              e == null || (v = e.videos) == null || (v = v[0]) == null
                ? void 0
                : v.thumbnail_hash),
              u != null &&
                (o != null
                  ? (c = {
                      imageHash: o,
                      key: u,
                      mediaType: "video",
                      videoID: u,
                    })
                  : a != null &&
                    (c = {
                      imageUrl: a,
                      key: u,
                      mediaType: "video",
                      videoID: u,
                    })));
          } else
            a != null &&
              u != null &&
              (c = { imageUrl: a, key: u, mediaType: "video", videoID: u });
        }
        return (
          (l = (p = e.titles) == null || (p = p[0]) == null ? void 0 : p.text),
          (s = (_ = e.bodies) == null || (_ = _[0]) == null ? void 0 : _.text),
          { bodyText: s, headline: l, media: c }
        );
      }
      return (
        t.link_data != null
          ? ((o = t.link_data.image_hash),
            (a = t.link_data.picture),
            (i = n != null ? n : void 0),
            (l = t.link_data.name),
            (s = t.link_data.message),
            a != null
              ? (c = {
                  clientPreviewImageURL: i,
                  imageHash: o,
                  imageUrl: a,
                  key: o != null ? o : a,
                  mediaType: "image",
                })
              : o != null &&
                (c = {
                  clientPreviewImageURL: i,
                  imageHash: o,
                  imageUrl: null,
                  key: o,
                  mediaType: "image",
                }))
          : t.video_data != null &&
            ((a = t.video_data.image_url),
            (o = t.video_data.image_hash),
            (l = t.video_data.title),
            (s = t.video_data.message),
            (u = t.video_data.video_id),
            u != null &&
              (o != null
                ? (c = { imageHash: o, key: u, mediaType: "video", videoID: u })
                : a != null &&
                  (c = {
                    imageUrl: a,
                    key: u,
                    mediaType: "video",
                    videoID: u,
                  }))),
        { bodyText: s, headline: l, media: c }
      );
    }
    function c(t) {
      return o("FBImmer").produce(t, function (t) {
        var n = t.object_story_spec;
        if (n != null) {
          if (n.link_data != null) {
            var a = n.link_data,
              i = a.link;
            if (!r("isStringNullOrEmpty")(i) && r("ads-lib-urllib").isUrl(i))
              return;
            a.link = e;
            var l = a.child_attachments;
            l != null &&
              l.forEach(function (t) {
                t != null && (t.link = e);
              });
          } else if (n.video_data != null) {
            var u,
              c,
              d,
              m = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(
                (u = n.video_data) == null ? void 0 : u.call_to_action,
              );
            (m &&
              ((c = n.video_data) == null ? void 0 : c.call_to_action) !=
                null &&
              ((d = n.video_data.call_to_action.value) == null
                ? void 0
                : d.link) == null &&
              (n.video_data.call_to_action.value = babelHelpers.extends(
                {},
                n.video_data.call_to_action.value,
                { link: e },
              )),
              t.object_type !== s && (t.object_type = s));
          }
        }
      });
    }
    function d(e, t) {
      return o("FBImmer").produce(e, function (e) {
        var n = e == null ? void 0 : e.creative;
        n != null &&
          o("LWICometACOUtils").inACOExperimentEnable() &&
          o("LWICometACOUtils").setCreativeDegreesOfFreedomType(n);
        var r = e == null ? void 0 : e.clientCreativeSpec;
        r != null &&
          o("LWICometACOUtils").inACOExperimentEnable() &&
          (o("LWICometACOUtils").setClientCreativeDegreesOfFreedomType(n, r),
          (e.clientCreativeSpec = r));
        var a = n == null ? void 0 : n.object_story_spec;
        a != null &&
          (a.link_data = babelHelpers.extends({}, a.link_data, { picture: t }));
      });
    }
    function m(e, t) {
      return o("FBImmer").produce(e, function (e) {
        var n = e == null ? void 0 : e.creative;
        n != null &&
          o("LWICometACOUtils").inACOExperimentEnable() &&
          o("LWICometACOUtils").setCreativeDegreesOfFreedomType(n);
        var r = n == null ? void 0 : n.object_story_spec;
        if (r != null) {
          if (t.mediaType === "image") {
            var a, i, l, s, u, c, d, m, p, _;
            ((r.link_data = babelHelpers.extends({}, r.link_data, {
              call_to_action:
                (a = (i = r.link_data) == null ? void 0 : i.call_to_action) !=
                null
                  ? a
                  : (l = r.video_data) == null
                    ? void 0
                    : l.call_to_action,
              image_hash:
                t.imageUrl != null
                  ? void 0
                  : (s = t.imageHash) != null
                    ? s
                    : void 0,
              message:
                (u = (c = r.link_data) == null ? void 0 : c.message) != null
                  ? u
                  : (d = r.video_data) == null
                    ? void 0
                    : d.message,
              name:
                (m = (p = r.link_data) == null ? void 0 : p.name) != null
                  ? m
                  : (_ = r.video_data) == null
                    ? void 0
                    : _.title,
              picture: t.imageUrl,
            })),
              (r.video_data = void 0));
          } else {
            var f, g, h, y, C, b, v, S, R, L;
            ((r.video_data = babelHelpers.extends({}, r.video_data, {
              call_to_action:
                (f = (g = r.video_data) == null ? void 0 : g.call_to_action) !=
                null
                  ? f
                  : (h = r.link_data) == null
                    ? void 0
                    : h.call_to_action,
              image_url: t.imageUrl,
              message:
                (y = (C = r.video_data) == null ? void 0 : C.message) != null
                  ? y
                  : (b = r.link_data) == null
                    ? void 0
                    : b.message,
              title:
                (v = (S = r.video_data) == null ? void 0 : S.title) != null
                  ? v
                  : (R = r.link_data) == null
                    ? void 0
                    : R.name,
              video_id: (L = t.videoID) != null ? L : "",
            })),
              (r.link_data = void 0));
          }
          t.clientPreviewImageURL != null
            ? (e.clientPreviewImageURL = t.clientPreviewImageURL)
            : (e.clientPreviewImageURL = void 0);
        }
      });
    }
    function p(e, t) {
      var n;
      t === void 0 && (t = !1);
      var r =
        e == null || (n = e.creative) == null ? void 0 : n.object_story_spec;
      if (r == null) return null;
      var o =
        (e == null ? void 0 : e.clientPreviewImageURL) != null
          ? e.clientPreviewImageURL
          : void 0;
      if (r.link_data) {
        var a, i, l, s, u;
        return {
          clientPreviewImageURL: o,
          imageHash: (a = r.link_data) == null ? void 0 : a.image_hash,
          imageUrl:
            (i = (l = r.link_data) == null ? void 0 : l.picture) != null
              ? i
              : "",
          key:
            (s = (u = r.link_data) == null ? void 0 : u.picture) != null
              ? s
              : "",
          mediaType: "image",
        };
      } else if (r.video_data) {
        var c,
          d,
          m,
          p,
          _,
          f = (c = r.video_data) == null ? void 0 : c.video_id;
        if (f != null && f !== "" && t) {
          var g, h, y;
          return {
            clientPreviewImageURL: o,
            imageHash: (g = r.video_data) == null ? void 0 : g.image_hash,
            imageUrl:
              (h = (y = r.video_data) == null ? void 0 : y.image_url) != null
                ? h
                : "",
            key: f,
            mediaType: "video",
            videoID: f,
          };
        }
        return {
          clientPreviewImageURL: o,
          imageUrl:
            (d = (m = r.video_data) == null ? void 0 : m.image_url) != null
              ? d
              : "",
          key:
            (p = (_ = r.video_data) == null ? void 0 : _.image_url) != null
              ? p
              : "",
          mediaType: "video",
          videoID: f != null ? f : "",
        };
      }
      return null;
    }
    function _(e, t, n) {
      var r, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
      if ((n === void 0 && (n = !1), e == null)) return null;
      var L = e.link_data,
        E = n ? e.video_data : null,
        k = o("LWICometCTAUtils").getTypedAssetFeedSpecCTA(
          (r = L == null ? void 0 : L.call_to_action) != null
            ? r
            : E == null
              ? void 0
              : E.call_to_action,
        ),
        I =
          e == null || (a = e.product_data) == null
            ? void 0
            : a.map(function (e) {
                return {
                  product_id: e.product_id,
                  product_source:
                    e.product_source != null ? e.product_source : void 0,
                };
              });
      return babelHelpers.extends(
        {
          instagram_actor_id:
            (i = e == null ? void 0 : e.instagram_actor_id) != null
              ? i
              : void 0,
        },
        t && {
          instagram_user_id:
            (l = o(
              "AdsInstagramUserIdMigrationUtils",
            ).convertIGIDV2FromStrongTypeToString(
              e == null ? void 0 : e.instagram_user_id,
            )) != null
              ? l
              : void 0,
        },
        {
          link_data:
            L != null
              ? {
                  call_to_action:
                    (k == null ? void 0 : k.type) != null
                      ? {
                          type: k.type,
                          value: (s = k.value) != null ? s : void 0,
                        }
                      : void 0,
                  description: (u = L.description) != null ? u : void 0,
                  event_id: (c = L.event_id) != null ? c : void 0,
                  image_hash: (d = L.image_hash) != null ? d : void 0,
                  link: (m = L.link) != null ? m : void 0,
                  message: (p = L.message) != null ? p : void 0,
                  name: (_ = L.name) != null ? _ : void 0,
                  picture: (f = L.picture) != null ? f : void 0,
                  use_flexible_image_aspect_ratio: !0,
                }
              : void 0,
          page_id: (g = e.page_id) != null ? g : void 0,
          product_data: I != null ? I : void 0,
          video_data:
            E != null
              ? {
                  call_to_action:
                    (k == null ? void 0 : k.type) != null
                      ? {
                          type: k.type,
                          value: (h = k.value) != null ? h : void 0,
                        }
                      : void 0,
                  image_hash: (y = E.image_hash) != null ? y : void 0,
                  image_url: (C = E.image_url) != null ? C : void 0,
                  link_description:
                    (b = E.link_description) != null ? b : void 0,
                  message: (v = E.message) != null ? v : void 0,
                  title: (S = E.title) != null ? S : void 0,
                  video_id: (R = E.video_id) != null ? R : void 0,
                }
              : void 0,
        },
      );
    }
    function f(e, t, n, o, a) {
      var i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L = e.description,
        E = e.headline,
        k = e.imageHash,
        I = e.imageURL,
        T = e.linkURL,
        D = e.messageText,
        x = e.pageID,
        $ = e.videoID,
        P = e.videoThumbnailHash,
        N = e.videoThumbnailURL;
      if (x == null || x === "") return null;
      var M = { node: { id: x } },
        w = o == null ? void 0 : o.type,
        A = w === "MESSAGE_PAGE" || w === "INSTAGRAM_MESSAGE",
        F =
          A &&
          ((o == null || (i = o.value) == null ? void 0 : i.link) == null ||
            o.value.link === "")
            ? "https://fb.com/messenger_doc/"
            : (l = o == null || (s = o.value) == null ? void 0 : s.link) != null
              ? l
              : null,
        O =
          A &&
          (o == null || (u = o.value) == null ? void 0 : u.app_destination) ==
            null
            ? "MESSENGER"
            : (c =
                  o == null || (d = o.value) == null
                    ? void 0
                    : d.app_destination) != null
              ? c
              : null,
        B =
          w != null
            ? {
                call_to_action_label: null,
                call_to_action_type: w,
                call_to_action_value: {
                  app_destination: O,
                  app_link:
                    (m =
                      o == null || (p = o.value) == null
                        ? void 0
                        : p.app_link) != null
                      ? m
                      : null,
                  event_id:
                    (_ =
                      o == null || (f = o.value) == null
                        ? void 0
                        : f.event_id) != null
                      ? _
                      : null,
                  group_id:
                    (g =
                      o == null || (h = o.value) == null
                        ? void 0
                        : h.group_id) != null
                      ? g
                      : null,
                  lead_gen_form_id:
                    (y =
                      o == null || (C = o.value) == null
                        ? void 0
                        : C.lead_gen_form_id) != null
                      ? y
                      : null,
                  link: F,
                  page_id: null,
                  whatsapp_number:
                    (b =
                      o == null || (v = o.value) == null
                        ? void 0
                        : v.whatsapp_number) != null
                      ? b
                      : null,
                },
              }
            : null,
        W = r("LWICometCTAEditorNeedsOverrideType").cast(w) == null ? F : null;
      return $ != null && $ !== ""
        ? {
            instagram_actor_id: t != null ? t : null,
            instagram_user_id: n != null ? n : null,
            link_data: null,
            page: M,
            photo_data: null,
            product_data: [],
            template_data: null,
            video_data: {
              call_to_action: B,
              image_hash: P != null ? P : null,
              image_url: P != null ? null : N != null ? N : null,
              link_description: L != null ? L : null,
              message: D != null ? D : null,
              title: E != null ? E : null,
              video_id: $,
            },
          }
        : {
            instagram_actor_id: t != null ? t : null,
            instagram_user_id: n != null ? n : null,
            link_data: {
              call_to_action: B,
              child_attachments: [],
              description: L != null ? L : null,
              event_id: null,
              image_crops: null,
              image_hash: k != null ? k : null,
              link:
                (S = (R = T != null ? T : W) != null ? R : a) != null ? S : "",
              message: D != null ? D : null,
              name: E != null ? E : null,
              picture: I != null ? I : null,
              retailer_item_ids: [],
              use_flexible_image_aspect_ratio: null,
            },
            page: M,
            photo_data: null,
            product_data: [],
            template_data: null,
            video_data: null,
          };
    }
    function g(e) {
      return e == null
        ? 0
        : [e.link_data, e.photo_data, e.template_data, e.video_data].filter(
            function (e) {
              return e != null;
            },
          ).length;
    }
    function h(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q = e == null || (a = e.link_data) == null ? void 0 : a.image_crops,
        X =
          (Q == null ? void 0 : Q.crop_dimension) != null
            ? JSON.stringify(
                ((c = {}),
                (c[Q.crop_dimension] = [
                  [
                    (i = Q.upper_left) == null ? void 0 : i.x,
                    (l = Q.upper_left) == null ? void 0 : l.y,
                  ],
                  [
                    (s = Q.lower_right) == null ? void 0 : s.x,
                    (u = Q.lower_right) == null ? void 0 : u.y,
                  ],
                ]),
                c),
              )
            : void 0,
        Y =
          e == null || (d = e.link_data) == null ? void 0 : d.child_attachments,
        J =
          Y != null
            ? Y.map(function (e) {
                var t;
                return babelHelpers.extends({}, e, {
                  link: (t = e.link) != null ? t : "",
                });
              })
            : void 0;
      ((m = J) == null ? void 0 : m.length) === 0 && (J = void 0);
      var Z =
          e == null || (p = e.product_data) == null
            ? void 0
            : p.map(function (e) {
                var t;
                return {
                  product_id: e.product_id,
                  product_source: (t = e.product_source) != null ? t : "",
                };
              }),
        ee =
          e == null || (_ = e.link_data) == null ? void 0 : _.retailer_item_ids,
        te =
          (e == null || (f = e.photo_data) == null ? void 0 : f.image_hash) !=
          null,
        ne = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(t, e),
        re =
          (g = e == null || (h = e.link_data) == null ? void 0 : h.link) != null
            ? g
            : void 0;
      return e
        ? babelHelpers.extends(
            {
              instagram_actor_id:
                (y = e == null ? void 0 : e.instagram_actor_id) != null
                  ? y
                  : void 0,
            },
            r && {
              instagram_user_id:
                (C = e == null ? void 0 : e.instagram_user_id) != null
                  ? C
                  : void 0,
            },
            {
              link_data: e.link_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    child_attachments: J != null ? J : void 0,
                    description:
                      (b = e.link_data.description) != null ? b : void 0,
                    event_id: (v = e.link_data.event_id) != null ? v : void 0,
                    image_crops: X,
                    image_hash:
                      (S = e.link_data.image_hash) != null ? S : void 0,
                    link: o("LWICometCTAUtils").getLWICTALinkData(
                      ne,
                      t == null || (R = t.value) == null ? void 0 : R.link,
                      re,
                      n,
                    ),
                    message:
                      (L = (E = e.link_data) == null ? void 0 : E.message) !=
                      null
                        ? L
                        : void 0,
                    name:
                      (k = (I = e.link_data) == null ? void 0 : I.name) != null
                        ? k
                        : void 0,
                    picture:
                      (T = (D = e.link_data) == null ? void 0 : D.picture) !=
                      null
                        ? T
                        : void 0,
                    retailer_item_ids:
                      ee != null && ee.length > 0 ? ee : void 0,
                    use_flexible_image_aspect_ratio:
                      ((x = e.link_data) == null
                        ? void 0
                        : x.use_flexible_image_aspect_ratio) === !0
                        ? !0
                        : void 0,
                  }
                : void 0,
              page_id:
                ($ =
                  (P = e.page) == null || (P = P.node) == null
                    ? void 0
                    : P.id) != null
                  ? $
                  : void 0,
              photo_data: e.photo_data
                ? te
                  ? {
                      call_to_action: t != null ? t : void 0,
                      caption: (N = e.photo_data.caption) != null ? N : void 0,
                      image_hash:
                        (M = e.photo_data.image_hash) != null ? M : void 0,
                    }
                  : {
                      call_to_action: t != null ? t : void 0,
                      caption: (w = e.photo_data.caption) != null ? w : void 0,
                      url: (A = e.photo_data.url) != null ? A : void 0,
                    }
                : void 0,
              product_data: Z != null ? Z : void 0,
              template_data: e.template_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    description:
                      (F = e.template_data.description) != null ? F : void 0,
                    format_option:
                      (O = e.template_data.format_option) != null ? O : void 0,
                    link: (B = e.template_data.link) != null ? B : void 0,
                    message: (W = e.template_data.message) != null ? W : void 0,
                    multi_share_end_card:
                      (q = e.template_data.multi_share_end_card) != null
                        ? q
                        : void 0,
                    name: (U = e.template_data.name) != null ? U : void 0,
                  }
                : void 0,
              video_data: e.video_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    image_hash:
                      (V = e.video_data.image_hash) != null ? V : void 0,
                    image_url:
                      (H = e.video_data.image_url) != null ? H : void 0,
                    link_description:
                      (G = e.video_data.link_description) != null ? G : void 0,
                    message: (z = e.video_data.message) != null ? z : void 0,
                    title: (j = e.video_data.title) != null ? j : void 0,
                    video_id: (K = e.video_data.video_id) != null ? K : void 0,
                  }
                : void 0,
            },
          )
        : void 0;
    }
    ((l.getCreativeDataFromSpec = u),
      (l.getValidatedCTALinkInCreativeSpecForAdPreview = c),
      (l.initializeAdgroupWithDefaultPhotos = d),
      (l.updateAdgroupWithMedia = m),
      (l.getMediumFromAdgroup = p),
      (l.getTypedObjectStorySpecFromClientObjectStorySpec = _),
      (l.getInitialObjectStorySpecForBoostExistingPost = f),
      (l.countObjectStorySpecPostTypes = g),
      (l.getTypedObjectStorySpec = h));
  },
  98,
);
