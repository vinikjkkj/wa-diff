__d(
  "WAWebLinkPreviewGroupUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9583")),
      u = 100,
      c = s._(/*BTDS*/ "Group chat invite").toString();
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a, i;
          if (n == null) return null;
          var l, s, c;
          try {
            var d,
              m = r("WAWebGroupMetadataCollection").filter(function (e) {
                return e.inviteCode === n;
              });
            if (m == null || m.length < 1) return null;
            ((l = m[0]),
              (c = o("WAWebChatCollection").ChatCollection.get(l.id)),
              (s =
                (d = c) == null ||
                (d = d.contact) == null ||
                (d = d.profilePicThumb) == null
                  ? void 0
                  : d.img));
          } catch (e) {
            return null;
          }
          var _ = 0.75;
          (s == null || s === "") &&
            (l.groupType ===
              o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP &&
            o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
              ? (s = o(
                  "WAWebCommunityGeneralChatImage.react",
                ).GeneralChatPlaceholderFullUrl)
              : (s = e),
            (_ = 1));
          var f = [
              {
                width: u,
                height: u,
                imageFormat: "image/jpeg",
                imageFormatOptions: _,
              },
            ],
            g = yield o("WAWebMediaDataUtils").getResizedThumbData(s, f),
            h = g != null && g.length > 0 ? g[0] : void 0,
            y =
              (a = l.getParentGroupChat()) == null ? void 0 : a.formattedTitle,
            C;
          l.groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP
            ? (C = y)
            : (C = p(l.groupType, y));
          var b = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t,
            linkDetails: {
              title: (i = c) == null ? void 0 : i.formattedTitle,
              description: C,
              richPreviewType: o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$PreviewType.NONE,
              doNotPlayInline: !0,
              inviteGrpType: l.groupType,
              isLoading: !1,
            },
            linkThumbnail: {
              thumbnail: h == null ? void 0 : h.dataUrl,
              thumbnailHeight: h == null ? void 0 : h.height,
              thumbnailWidth: h == null ? void 0 : h.width,
            },
          });
          return b;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return e === o("WAWebGroupType").GroupType.COMMUNITY
        ? s._(/*BTDS*/ "Community invite").toString()
        : e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && t != null
          ? s
              ._(/*BTDS*/ 'Group in "{community}"', [s._param("community", t)])
              .toString()
          : e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? s._(/*BTDS*/ "Announcements").toString()
            : c;
    }
    ((l.GROUP_INVITE_DEFAULT_DESCRIPTION = c),
      (l.getGroupInviteLinkPreview = d),
      (l.getInviteLinkDescription = p));
  },
  226,
);
