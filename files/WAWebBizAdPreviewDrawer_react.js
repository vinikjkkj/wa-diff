__d(
  "WAWebBizAdPreviewDrawer.react",
  [
    "CometRelay",
    "WAWebBizAdPreviewContent.react",
    "WAWebBizAdPreviewDrawerVideoQuery.graphql",
    "WAWebBizAdsErrorBoundary.react",
    "WAWebBizGenericErrorCard.react",
    "WAWebConnModel",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.Suspense,
      m = c.useMemo,
      p =
        e !== void 0 ? e : (e = n("WAWebBizAdPreviewDrawerVideoQuery.graphql")),
      _ = { root: { height: "x5yr21d", $$css: !0 } };
    function f(e) {
      var t,
        n,
        a,
        i,
        l,
        s = o("react-compiler-runtime").c(18),
        c = e.item,
        d = e.onClose,
        m = e.videoData,
        p;
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
          (s[0] = p))
        : (p = s[0]);
      var f = p,
        y;
      s[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["pushname"]), (s[1] = y))
        : (y = s[1]);
      var C = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          y,
        ),
        b = C.pushname,
        v = (t = (n = c.businessName) != null ? n : b) != null ? t : "",
        S = m == null || (a = m.fetch__Video) == null ? void 0 : a.playable_url,
        R = (i = c.highResImageUrl) != null ? i : c.thumbnailUrl,
        L;
      e: {
        var E;
        if (S != null && S !== "") {
          L = null;
          break e;
        }
        var k = c.childAttachments;
        if (k != null && k.length > 0) {
          var I;
          s[2] !== k
            ? ((I = k.map(h).filter(g)), (s[2] = k), (s[3] = I))
            : (I = s[3]);
          var T = I;
          if (T.length > 0) {
            L = T;
            break e;
          }
        }
        var D = (E = c.highResImageUrl) != null ? E : c.thumbnailUrl,
          x;
        (s[4] !== D
          ? ((x = D != null ? [D] : null), (s[4] = D), (s[5] = x))
          : (x = s[5]),
          (L = x));
      }
      var $ = L,
        P = (l = c.highResImageUrl) != null ? l : c.thumbnailUrl,
        N = S != null && S !== "" ? S : null,
        M = S != null && S !== "" ? R : null,
        w;
      s[6] !== v ||
      s[7] !== c.description ||
      s[8] !== c.isVerified ||
      s[9] !== c.profilePictureUrl ||
      s[10] !== $ ||
      s[11] !== P ||
      s[12] !== N ||
      s[13] !== M
        ? ((w = {
            businessName: v,
            description: c.description,
            medias: $,
            meUser: f,
            profilePictureUrl: c.profilePictureUrl,
            isVerified: c.isVerified,
            thumbnailUrl: P,
            videoUrl: N,
            videoPosterUrl: M,
          }),
          (s[6] = v),
          (s[7] = c.description),
          (s[8] = c.isVerified),
          (s[9] = c.profilePictureUrl),
          (s[10] = $),
          (s[11] = P),
          (s[12] = N),
          (s[13] = M),
          (s[14] = w))
        : (w = s[14]);
      var A = w,
        F;
      return (
        s[15] !== d || s[16] !== A
          ? ((F = u.jsx(r("WAWebBizAdPreviewContent.react"), {
              onClose: d,
              previewData: A,
              xstyle: _.root,
            })),
            (s[15] = d),
            (s[16] = A),
            (s[17] = F))
          : (F = s[17]),
        F
      );
    }
    function g(e) {
      return e != null && e !== "";
    }
    function h(e) {
      return e.picture;
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.item,
        r = e.onClose,
        a = e.videoId,
        i = o("CometRelay").useLazyLoadQuery(p, { videoId: a }),
        l;
      return (
        t[0] !== n || t[1] !== r || t[2] !== i
          ? ((l = u.jsx(f, { item: n, onClose: r, videoData: i })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function C(e) {
      var t,
        n = o("react-compiler-runtime").c(5),
        a = e.item,
        i = e.onClose,
        l = (t = a.videoData) == null ? void 0 : t.video_id,
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(r("WAWebBizGenericErrorCard.react"), {})), (n[0] = s))
        : (s = n[0]);
      var c;
      return (
        n[1] !== a || n[2] !== i || n[3] !== l
          ? ((c = u.jsx(r("WAWebBizAdsErrorBoundary.react"), {
              fallback: s,
              name: "ad-preview-drawer",
              children:
                l != null
                  ? u.jsx(d, {
                      fallback: u.jsx(f, {
                        item: a,
                        onClose: i,
                        videoData: null,
                      }),
                      children: u.jsx(y, { item: a, onClose: i, videoId: l }),
                    })
                  : u.jsx(f, { item: a, onClose: i, videoData: null }),
            })),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l),
            (n[4] = c))
          : (c = n[4]),
        c
      );
    }
    l.default = C;
  },
  98,
);
