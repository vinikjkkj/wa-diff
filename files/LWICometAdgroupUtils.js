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
    "qex",
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
    function f(e, t, n, a, i) {
      var l,
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
        X,
        Y,
        J,
        Z = e == null || (l = e.link_data) == null ? void 0 : l.image_crops;
      Z =
        ((s = Z) == null ? void 0 : s.crop_dimension) != null
          ? JSON.stringify(
              ((p = {}),
              (p[Z.crop_dimension] = [
                [
                  (u = Z.upper_left) == null ? void 0 : u.x,
                  (c = Z.upper_left) == null ? void 0 : c.y,
                ],
                [
                  (d = Z.lower_right) == null ? void 0 : d.x,
                  (m = Z.lower_right) == null ? void 0 : m.y,
                ],
              ]),
              p),
            )
          : void 0;
      var ee =
        e == null || (_ = e.link_data) == null ? void 0 : _.child_attachments;
      ((ee =
        ee != null
          ? ee.map(function (e) {
              var t;
              return babelHelpers.extends({}, e, {
                link: (t = e.link) != null ? t : "",
              });
            })
          : void 0),
        ((f = ee) == null ? void 0 : f.length) === 0 && (ee = void 0));
      var te =
          e == null || (g = e.product_data) == null
            ? void 0
            : g.map(function (e) {
                var t;
                return {
                  product_id: e.product_id,
                  product_source: (t = e.product_source) != null ? t : "",
                };
              }),
        ne =
          e == null || (h = e.link_data) == null ? void 0 : h.retailer_item_ids,
        re =
          (e == null || (y = e.photo_data) == null ? void 0 : y.image_hash) !==
          null,
        oe = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(t, e),
        ae =
          (C = e == null || (b = e.link_data) == null ? void 0 : b.link) != null
            ? C
            : void 0;
      return e
        ? babelHelpers.extends(
            {
              instagram_actor_id:
                (v = e == null ? void 0 : e.instagram_actor_id) != null
                  ? v
                  : void 0,
            },
            i && {
              instagram_user_id:
                (S = e == null ? void 0 : e.instagram_user_id) != null
                  ? S
                  : void 0,
            },
            {
              link_data: e.link_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    child_attachments: ee != null ? ee : void 0,
                    description:
                      (R = e.link_data.description) != null ? R : void 0,
                    event_id: (L = e.link_data.event_id) != null ? L : void 0,
                    image_crops: Z,
                    image_hash:
                      (E = e.link_data.image_hash) != null ? E : void 0,
                    link: o("LWICometCTAUtils").getLWICTALinkData(
                      oe,
                      t == null || (k = t.value) == null ? void 0 : k.link,
                      ae,
                      a,
                    ),
                    message:
                      (I = (T = e.link_data) == null ? void 0 : T.message) !=
                      null
                        ? I
                        : void 0,
                    name:
                      (D = (x = e.link_data) == null ? void 0 : x.name) != null
                        ? D
                        : void 0,
                    picture:
                      ($ = (P = e.link_data) == null ? void 0 : P.picture) !=
                      null
                        ? $
                        : void 0,
                    retailer_item_ids:
                      ne != null && ne.length > 0 ? ne : void 0,
                    use_flexible_image_aspect_ratio: (
                      (N =
                        (M = e.link_data) == null
                          ? void 0
                          : M.use_flexible_image_aspect_ratio) != null
                        ? N
                        : !n && r("qex")._("1392") === !0
                    )
                      ? !0
                      : void 0,
                  }
                : void 0,
              page_id:
                (w =
                  (A = e.page) == null || (A = A.node) == null
                    ? void 0
                    : A.id) != null
                  ? w
                  : void 0,
              photo_data: e.photo_data
                ? re
                  ? {
                      call_to_action: t != null ? t : void 0,
                      caption: (F = e.photo_data.caption) != null ? F : void 0,
                      image_hash:
                        (O = e.photo_data.image_hash) != null ? O : void 0,
                    }
                  : {
                      call_to_action: t != null ? t : void 0,
                      caption: (B = e.photo_data.caption) != null ? B : void 0,
                      url: (W = e.photo_data.url) != null ? W : void 0,
                    }
                : void 0,
              product_data: te != null ? te : void 0,
              template_data: e.template_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    description:
                      (q = e.template_data.description) != null ? q : void 0,
                    format_option:
                      (U = e.template_data.format_option) != null ? U : void 0,
                    link: (V = e.template_data.link) != null ? V : void 0,
                    message: (H = e.template_data.message) != null ? H : void 0,
                    multi_share_end_card:
                      (G = e.template_data.multi_share_end_card) != null
                        ? G
                        : void 0,
                    name: (z = e.template_data.name) != null ? z : void 0,
                  }
                : void 0,
              video_data: e.video_data
                ? {
                    call_to_action: t != null ? t : void 0,
                    image_hash:
                      (j = e.video_data.image_hash) != null ? j : void 0,
                    image_url:
                      (K = e.video_data.image_url) != null ? K : void 0,
                    link_description:
                      (Q = e.video_data.link_description) != null ? Q : void 0,
                    message: (X = e.video_data.message) != null ? X : void 0,
                    title: (Y = e.video_data.title) != null ? Y : void 0,
                    video_id: (J = e.video_data.video_id) != null ? J : void 0,
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
      (l.getTypedObjectStorySpec = f));
  },
  98,
);
