__d(
  "WAWebNewsletterFetchLinkPreviewAction",
  [
    "WALogger",
    "WAWebCanvasUtils",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebImageGeometry",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewUtils",
    "WAWebMediaLoad",
    "WAWebMexFetchPlaintextLinkPreviewJob",
    "WAWebMmsMediaTypes",
    "WAWebNewsletterInviteLinkPreviewUtils",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 140,
      c = 0.8,
      d = "image/jpeg",
      m = "data:" + d + ";base64,";
    async function p(t, n) {
      try {
        var r = o("WAWebLinkPreviewCache").getNewsletterPreviewCache(),
          a = await o(
            "WAWebNewsletterInviteLinkPreviewUtils",
          ).getNewsletterInviteLinkPreview(t.url);
        if (a != null)
          return (a.shouldCache && r.set(t.url, a.preview), a.preview);
        var i = await o(
          "WAWebMexFetchPlaintextLinkPreviewJob",
        ).mexFetchPlaintextLinkPreview(t.url);
        if (i == null)
          return o(
            "WAWebGenMinimalLinkPreviewChatAction",
          ).genMinimalLinkPreview({
            link: t,
            richPreviewType: o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$PreviewType.NONE,
          });
        var l = await o("WAWebLinkPreviewUtils").getThumbnailDetails({
            chatWid: n == null ? void 0 : n.id,
            mediaType:
              o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
            thumbnail: i.thumbData,
            hqThumbnailParams: i.hqThumbnail,
          }),
          s = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t.url,
            linkDetails: {
              title: i == null ? void 0 : i.title,
              description: i == null ? void 0 : i.description,
              richPreviewType: o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$PreviewType.NONE,
              doNotPlayInline: !0,
              isLoading: !1,
            },
            linkThumbnail: babelHelpers.extends({}, l, {
              thumbnail: await _(l, i.isVideo),
            }),
          });
        return (l.thumbnailHQ != null && r.set(t.url, s), s);
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter] while trying to fetch newsletter link preview ",
              "",
            ])),
          t,
        );
      }
    }
    async function _(e, t) {
      var n = e.thumbnail,
        a = e.thumbnailHQ;
      if (!(n == null || n === ""))
        try {
          var i = await o("WAWebMediaLoad").loadImage("" + m + n),
            l = f(i, t || a != null),
            u = l.toDataURL(d, c);
          return u.startsWith(m) ? u.slice(m.length) : void 0;
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] inline link thumbnail resize failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
    }
    function f(e, t) {
      var n = e.naturalHeight,
        a = e.naturalWidth,
        i = Math.min(a, n),
        l = t ? a : i,
        s = t ? n : i,
        c = o("WAWebImageGeometry").aspectRatioScaled(l / s, u),
        d = c.height,
        m = c.width,
        p = o("WAWebCanvasUtils").createCanvas(Math.round(m), Math.round(d));
      return (
        r("nullthrows")(p.getContext("2d")).drawImage(
          e,
          (a - l) / 2,
          (n - s) / 2,
          l,
          s,
          0,
          0,
          p.width,
          p.height,
        ),
        p
      );
    }
    l.fetchPlaintextLinkPreviewAction = p;
  },
  98,
);
