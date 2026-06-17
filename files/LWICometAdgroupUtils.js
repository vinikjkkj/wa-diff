__d(
  "LWICometAdgroupUtils",
  [
    "AdsInstagramUserIdMigrationUtils",
    "FBImmer",
    "LWICometACOUtils",
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
    function f(e, t, n, r) {
      var o,
        a,
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
        b = e.description,
        v = e.headline,
        S = e.imageHash,
        R = e.imageURL,
        L = e.linkURL,
        E = e.messageText,
        k = e.pageID,
        I = e.videoID,
        T = e.videoThumbnailHash,
        D = e.videoThumbnailURL;
      if (k == null || k === "") return null;
      var x = { node: { id: k } },
        $ = r == null ? void 0 : r.type,
        P = $ === "MESSAGE_PAGE" || $ === "INSTAGRAM_MESSAGE",
        N =
          P &&
          ((r == null || (o = r.value) == null ? void 0 : o.link) == null ||
            r.value.link === "")
            ? "https://fb.com/messenger_doc/"
            : (a = r == null || (i = r.value) == null ? void 0 : i.link) != null
              ? a
              : null,
        M =
          P &&
          (r == null || (l = r.value) == null ? void 0 : l.app_destination) ==
            null
            ? "MESSENGER"
            : (s =
                  r == null || (u = r.value) == null
                    ? void 0
                    : u.app_destination) != null
              ? s
              : null,
        w =
          $ != null
            ? {
                call_to_action_label: null,
                call_to_action_type: $,
                call_to_action_value: {
                  app_destination: M,
                  app_link:
                    (c =
                      r == null || (d = r.value) == null
                        ? void 0
                        : d.app_link) != null
                      ? c
                      : null,
                  event_id:
                    (m =
                      r == null || (p = r.value) == null
                        ? void 0
                        : p.event_id) != null
                      ? m
                      : null,
                  group_id:
                    (_ =
                      r == null || (f = r.value) == null
                        ? void 0
                        : f.group_id) != null
                      ? _
                      : null,
                  lead_gen_form_id:
                    (g =
                      r == null || (h = r.value) == null
                        ? void 0
                        : h.lead_gen_form_id) != null
                      ? g
                      : null,
                  link: N,
                  page_id: null,
                  whatsapp_number:
                    (y =
                      r == null || (C = r.value) == null
                        ? void 0
                        : C.whatsapp_number) != null
                      ? y
                      : null,
                },
              }
            : null;
      return I != null && I !== ""
        ? {
            instagram_actor_id: t != null ? t : null,
            instagram_user_id: n != null ? n : null,
            link_data: null,
            page: x,
            photo_data: null,
            product_data: [],
            template_data: null,
            video_data: {
              call_to_action: w,
              image_hash: T != null ? T : null,
              image_url: T != null ? null : D != null ? D : null,
              link_description: b != null ? b : null,
              message: E != null ? E : null,
              title: v != null ? v : null,
              video_id: I,
            },
          }
        : {
            instagram_actor_id: t != null ? t : null,
            instagram_user_id: n != null ? n : null,
            link_data: {
              call_to_action: w,
              child_attachments: [],
              description: b != null ? b : null,
              event_id: null,
              image_crops: null,
              image_hash: S != null ? S : null,
              link: L != null ? L : "",
              message: E != null ? E : null,
              name: v != null ? v : null,
              picture: R != null ? R : null,
              retailer_item_ids: [],
              use_flexible_image_aspect_ratio: null,
            },
            page: x,
            photo_data: null,
            product_data: [],
            template_data: null,
            video_data: null,
          };
    }
    function g(e, t, n, r) {
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
        Q,
        X = e == null || (a = e.link_data) == null ? void 0 : a.image_crops;
      X =
        ((i = X) == null ? void 0 : i.crop_dimension) != null
          ? JSON.stringify(
              ((d = {}),
              (d[X.crop_dimension] = [
                [
                  (l = X.upper_left) == null ? void 0 : l.x,
                  (s = X.upper_left) == null ? void 0 : s.y,
                ],
                [
                  (u = X.lower_right) == null ? void 0 : u.x,
                  (c = X.lower_right) == null ? void 0 : c.y,
                ],
              ]),
              d),
            )
          : void 0;
      var Y =
        e == null || (m = e.link_data) == null ? void 0 : m.child_attachments;
      ((Y =
        Y != null
          ? Y.map(function (e) {
              var t;
              return babelHelpers.extends({}, e, {
                link: (t = e.link) != null ? t : "",
              });
            })
          : void 0),
        ((p = Y) == null ? void 0 : p.length) === 0 && (Y = void 0));
      var J =
          e == null || (_ = e.product_data) == null
            ? void 0
            : _.map(function (e) {
                var t;
                return {
                  product_id: e.product_id,
                  product_source: (t = e.product_source) != null ? t : "",
                };
              }),
        Z =
          e == null || (f = e.link_data) == null ? void 0 : f.retailer_item_ids,
        ee =
          (e == null || (g = e.photo_data) == null ? void 0 : g.image_hash) !==
          null,
        te = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(t, e),
        ne =
          (h = e == null || (y = e.link_data) == null ? void 0 : y.link) != null
            ? h
            : void 0;
      return e
        ? babelHelpers.extends(
            {
              instagram_actor_id:
                (C = e == null ? void 0 : e.instagram_actor_id) != null
                  ? C
                  : void 0,
            },
            r && {
              instagram_user_id:
                (b = e == null ? void 0 : e.instagram_user_id) != null
                  ? b
                  : void 0,
            },
            {
              link_data: e.link_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    child_attachments: Y != null ? Y : void 0,
                    description:
                      (v = e.link_data.description) != null ? v : void 0,
                    event_id: (S = e.link_data.event_id) != null ? S : void 0,
                    image_crops: X,
                    image_hash:
                      (R = e.link_data.image_hash) != null ? R : void 0,
                    link: o("LWICometCTAUtils").getLWICTALinkData(
                      te,
                      t == null || (L = t.value) == null ? void 0 : L.link,
                      ne,
                      n,
                    ),
                    message:
                      (E = (k = e.link_data) == null ? void 0 : k.message) !=
                      null
                        ? E
                        : void 0,
                    name:
                      (I = (T = e.link_data) == null ? void 0 : T.name) != null
                        ? I
                        : void 0,
                    picture:
                      (D = (x = e.link_data) == null ? void 0 : x.picture) !=
                      null
                        ? D
                        : void 0,
                    retailer_item_ids: Z != null && Z.length > 0 ? Z : void 0,
                    use_flexible_image_aspect_ratio:
                      (($ = e.link_data) == null
                        ? void 0
                        : $.use_flexible_image_aspect_ratio) === !0
                        ? !0
                        : void 0,
                  }
                : void 0,
              page_id:
                (P =
                  (N = e.page) == null || (N = N.node) == null
                    ? void 0
                    : N.id) != null
                  ? P
                  : void 0,
              photo_data: e.photo_data
                ? ee
                  ? {
                      call_to_action: t != null ? t : void 0,
                      caption: (M = e.photo_data.caption) != null ? M : void 0,
                      image_hash:
                        (w = e.photo_data.image_hash) != null ? w : void 0,
                    }
                  : {
                      call_to_action: t != null ? t : void 0,
                      caption: (A = e.photo_data.caption) != null ? A : void 0,
                      url: (F = e.photo_data.url) != null ? F : void 0,
                    }
                : void 0,
              product_data: J != null ? J : void 0,
              template_data: e.template_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    description:
                      (O = e.template_data.description) != null ? O : void 0,
                    format_option:
                      (B = e.template_data.format_option) != null ? B : void 0,
                    link: (W = e.template_data.link) != null ? W : void 0,
                    message: (q = e.template_data.message) != null ? q : void 0,
                    multi_share_end_card:
                      (U = e.template_data.multi_share_end_card) != null
                        ? U
                        : void 0,
                    name: (V = e.template_data.name) != null ? V : void 0,
                  }
                : void 0,
              video_data: e.video_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    image_hash:
                      (H = e.video_data.image_hash) != null ? H : void 0,
                    image_url:
                      (G = e.video_data.image_url) != null ? G : void 0,
                    link_description:
                      (z = e.video_data.link_description) != null ? z : void 0,
                    message: (j = e.video_data.message) != null ? j : void 0,
                    title: (K = e.video_data.title) != null ? K : void 0,
                    video_id: (Q = e.video_data.video_id) != null ? Q : void 0,
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
      (l.getTypedObjectStorySpec = g));
  },
  98,
);
