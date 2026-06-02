__d(
  "WAWebNewsletterFetchLinkPreviewAction",
  [
    "WALogger",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewUtils",
    "WAWebMexFetchPlaintextLinkPreviewJob",
    "WAWebMmsMediaTypes",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      try {
        var r = o("WAWebLinkPreviewCache").getNewsletterPreviewCache(),
          a = await o(
            "WAWebMexFetchPlaintextLinkPreviewJob",
          ).mexFetchPlaintextLinkPreview(t.url);
        if (a == null)
          return o(
            "WAWebGenMinimalLinkPreviewChatAction",
          ).genMinimalLinkPreview(
            t,
            o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .NONE,
          );
        var i = await o("WAWebLinkPreviewUtils").getThumbnailDetails({
            chatWid: n == null ? void 0 : n.id,
            mediaType:
              o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
            thumbnail: a.thumbData,
            hqThumbnailParams: a.hqThumbnail,
          }),
          l = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t.url,
            linkDetails: {
              title: a == null ? void 0 : a.title,
              description: a == null ? void 0 : a.description,
              richPreviewType: o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$PreviewType.NONE,
              doNotPlayInline: !0,
              isLoading: !1,
            },
            linkThumbnail: i,
          });
        return (i.thumbnailHQ != null && r.set(t.url, l), l);
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
    l.fetchPlaintextLinkPreviewAction = s;
  },
  98,
);
