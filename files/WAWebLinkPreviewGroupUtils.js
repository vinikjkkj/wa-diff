__d(
  "WAWebLinkPreviewGroupUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebProtobufsE2E.pb",
    "bx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9583")),
      u = 100,
      c = s._(/*BTDS*/ "").toString();
    async function d(t) {
      var n,
        a,
        i = t.code,
        l = t.resolveProfilePicUrl,
        s = t.url;
      if (i == null) return null;
      var c, d, p;
      try {
        var _,
          f = r("WAWebGroupMetadataCollection").filter(function (e) {
            return e.inviteCode === i;
          });
        if (f == null || f.length < 1) return null;
        ((c = f[0]),
          (p = o("WAWebChatCollection").ChatCollection.get(c.id)),
          (d = l(
            (_ = p) == null || (_ = _.contact) == null
              ? void 0
              : _.profilePicThumb,
          )));
      } catch (e) {
        return null;
      }
      var g = 0.75;
      (d == null || d === "") &&
        (o("WAWebGroupMetadataGetters").getGroupType(c) ===
        o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
          ? (d = o(
              "WAWebCommunityGeneralChatImage.react",
            ).GeneralChatPlaceholderFullUrl)
          : (d = e),
        (g = 1));
      var h = [
          {
            width: u,
            height: u,
            imageFormat: "image/jpeg",
            imageFormatOptions: g,
          },
        ],
        y = await o("WAWebMediaDataUtils").getResizedThumbData(d, h),
        C = y != null && y.length > 0 ? y[0] : void 0,
        b = (n = c.getParentGroupChat()) == null ? void 0 : n.formattedTitle,
        v;
      o("WAWebGroupMetadataGetters").getGroupType(c) ===
      o("WAWebGroupType").GroupType.LINKED_SUBGROUP
        ? (v = b)
        : (v = m(o("WAWebGroupMetadataGetters").getGroupType(c), b));
      var S = o("WAWebLinkPreviewUtils").genLinkPreview({
        url: s,
        linkDetails: {
          title: (a = p) == null ? void 0 : a.formattedTitle,
          description: v,
          richPreviewType: o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$PreviewType.NONE,
          doNotPlayInline: !0,
          inviteGrpType: o("WAWebGroupMetadataGetters").getGroupType(c),
          isLoading: !1,
        },
        linkThumbnail: {
          thumbnail: C == null ? void 0 : C.dataUrl,
          thumbnailHeight: C == null ? void 0 : C.height,
          thumbnailWidth: C == null ? void 0 : C.width,
        },
      });
      return S;
    }
    function m(e, t) {
      return e === o("WAWebGroupType").GroupType.COMMUNITY
        ? s._(/*BTDS*/ "").toString()
        : e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && t != null
          ? s._(/*BTDS*/ "", [s._param("community", t)]).toString()
          : e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? s._(/*BTDS*/ "").toString()
            : c;
    }
    ((l.GROUP_INVITE_DEFAULT_DESCRIPTION = c),
      (l.getGroupInviteLinkPreview = d),
      (l.getInviteLinkDescription = m));
  },
  226,
);
