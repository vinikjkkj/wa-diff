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
        l = e.item,
        s = e.onClose,
        c = e.videoData,
        d = m(function () {
          return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        }, []),
        p = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        f = p.pushname,
        g = (t = (n = l.businessName) != null ? n : f) != null ? t : "",
        h = c == null || (a = c.fetch__Video) == null ? void 0 : a.playable_url,
        y = (i = l.highResImageUrl) != null ? i : l.thumbnailUrl,
        C = m(
          function () {
            var e;
            if (h != null && h !== "") return null;
            var t = l.childAttachments;
            if (t != null && t.length > 0) {
              var n = t
                .map(function (e) {
                  return e.picture;
                })
                .filter(function (e) {
                  return e != null && e !== "";
                });
              if (n.length > 0) return n;
            }
            var r = (e = l.highResImageUrl) != null ? e : l.thumbnailUrl;
            return r != null ? [r] : null;
          },
          [h, l.childAttachments, l.highResImageUrl, l.thumbnailUrl],
        ),
        b = m(
          function () {
            var e;
            return {
              businessName: g,
              description: l.description,
              medias: C,
              meUser: d,
              profilePictureUrl: l.profilePictureUrl,
              isVerified: l.isVerified,
              thumbnailUrl:
                (e = l.highResImageUrl) != null ? e : l.thumbnailUrl,
              videoUrl: h != null && h !== "" ? h : null,
              videoPosterUrl: h != null && h !== "" ? y : null,
            };
          },
          [
            g,
            C,
            h,
            y,
            l.description,
            l.isVerified,
            l.profilePictureUrl,
            l.highResImageUrl,
            l.thumbnailUrl,
            d,
          ],
        );
      return u.jsx(r("WAWebBizAdPreviewContent.react"), {
        onClose: s,
        previewData: b,
        xstyle: _.root,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.item,
        n = e.onClose,
        r = e.videoId,
        a = o("CometRelay").useLazyLoadQuery(p, { videoId: r });
      return u.jsx(f, { item: t, onClose: n, videoData: a });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t,
        n = e.item,
        o = e.onClose,
        a = (t = n.videoData) == null ? void 0 : t.video_id;
      return u.jsx(r("WAWebBizAdsErrorBoundary.react"), {
        fallback: u.jsx(r("WAWebBizGenericErrorCard.react"), {}),
        name: "ad-preview-drawer",
        children:
          a != null
            ? u.jsx(d, {
                fallback: u.jsx(f, { item: n, onClose: o, videoData: null }),
                children: u.jsx(g, { item: n, onClose: o, videoId: a }),
              })
            : u.jsx(f, { item: n, onClose: o, videoData: null }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
