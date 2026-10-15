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
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9583")),
      u = 100,
      c = s._(/*BTDS*/ "Group chat invite").toString();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i = t.code,
            l = t.resolveProfilePicUrl,
            s = t.url;
          if (i == null) return null;
          var c, d, m;
          try {
            var _,
              f = r("WAWebGroupMetadataCollection").filter(function (e) {
                return e.inviteCode === i;
              });
            if (f == null || f.length < 1) return null;
            ((c = f[0]),
              (m = o("WAWebChatCollection").ChatCollection.get(c.id)),
              (d = l(
                (_ = m) == null || (_ = _.contact) == null
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
            y = yield o("WAWebMediaDataUtils").getResizedThumbData(d, h),
            C = y != null && y.length > 0 ? y[0] : void 0,
            b =
              (n = c.getParentGroupChat()) == null ? void 0 : n.formattedTitle,
            v;
          o("WAWebGroupMetadataGetters").getGroupType(c) ===
          o("WAWebGroupType").GroupType.LINKED_SUBGROUP
            ? (v = b)
            : (v = p(o("WAWebGroupMetadataGetters").getGroupType(c), b));
          var S = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: s,
            linkDetails: {
              title: (a = m) == null ? void 0 : a.formattedTitle,
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
