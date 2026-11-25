__d(
  "WAWebNewsletterInviteLinkPreviewUtils",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterRoleIdentifier",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 100,
      c = 5e3;
    async function d(t) {
      var n,
        r,
        a,
        i,
        l = o("WAWebNewsletterApiParse").parseNewsletter(t);
      if (
        (l == null ? void 0 : l.type) !== "view" ||
        l.identifierType !==
          o("WAWebNewsletterApiParse").NewsletterIdentifierType.InviteCode
      )
        return null;
      var s = l.identifier,
        u;
      try {
        u = await o(
          "WAWebNewsletterMetadataQueryJob",
        ).queryNewsletterMetadataByInviteCode(
          s,
          o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(s),
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] while fetching invite link preview metadata ",
                  "",
                ])),
              t,
            )
            .sendLogs("newsletter-invite-preview-metadata-fail"),
          null
        );
      }
      var c =
        (n = u) == null || (n = n.newsletterNameMetadataMixin) == null
          ? void 0
          : n.nameElementValue;
      if (c == null || c === "") return null;
      var d = await m(
          (r = u) == null || (r = r.newsletterPictureMetadataMixin) == null
            ? void 0
            : r.picture,
        ),
        p = d.shouldCache,
        _ = d.thumbnail;
      return {
        preview: o("WAWebLinkPreviewUtils").genLinkPreview({
          url: t,
          linkDetails: {
            title: c,
            description:
              (a =
                (i = u) == null ||
                (i = i.newsletterDescriptionMetadataMixin) == null ||
                (i = i.descriptionQueryDescriptionResponseMixin) == null
                  ? void 0
                  : i.elementValue) != null
                ? a
                : "",
            richPreviewType: o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$PreviewType.NONE,
            doNotPlayInline: !0,
            isLoading: !1,
          },
          linkThumbnail: {
            thumbnail: _ == null ? void 0 : _.dataUrl,
            thumbnailHeight: _ == null ? void 0 : _.height,
            thumbnailWidth: _ == null ? void 0 : _.width,
          },
        }),
        shouldCache: p,
      };
    }
    async function m(e) {
      var t,
        n = {};
      for (var r of e != null ? e : []) {
        var a = r.queryPictureDirectPathOrEmptyResponseMixinGroup;
        a.name === "QueryPictureDirectPathResponse" &&
          (n[a.value.type] = a.value.directPath);
      }
      var i = o("WAWebNewsletterModelUtils").formatProfilePictureURL(
        (t = n.preview) != null ? t : n.image,
      );
      if (i == null)
        return {
          thumbnail: void 0,
          shouldCache:
            e != null &&
            e.length > 0 &&
            e.every(function (e) {
              var t = e.queryPictureDirectPathOrEmptyResponseMixinGroup;
              return t.name === "QueryPictureEmptyResponse";
            }),
        };
      try {
        var l = await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebMediaDataUtils").getResizedThumbData(i, [
              {
                width: u,
                height: u,
                imageFormat: "image/jpeg",
                imageFormatOptions: 0.75,
              },
            ]),
            c,
          ),
          d = l[0];
        return {
          thumbnail: d,
          shouldCache: (d == null ? void 0 : d.dataUrl) != null,
        };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] while generating invite link preview thumbnail ",
                  "",
                ])),
              e,
            )
            .sendLogs("newsletter-invite-preview-thumbnail-fail"),
          { thumbnail: void 0, shouldCache: !1 }
        );
      }
    }
    l.getNewsletterInviteLinkPreview = d;
  },
  98,
);
