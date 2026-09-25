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
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l;
          if (n == null) return null;
          var s, c, d;
          try {
            var m,
              _ = r("WAWebGroupMetadataCollection").filter(function (e) {
                return e.inviteCode === n;
              });
            if (_ == null || _.length < 1) return null;
            ((s = _[0]),
              (d = o("WAWebChatCollection").ChatCollection.get(s.id)),
              (c = a(
                (m = d) == null || (m = m.contact) == null
                  ? void 0
                  : m.profilePicThumb,
              )));
          } catch (e) {
            return null;
          }
          var f = 0.75;
          (c == null || c === "") &&
            (o("WAWebGroupMetadataGetters").getGroupType(s) ===
            o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
              ? (c = o(
                  "WAWebCommunityGeneralChatImage.react",
                ).GeneralChatPlaceholderFullUrl)
              : (c = e),
            (f = 1));
          var g = [
              {
                width: u,
                height: u,
                imageFormat: "image/jpeg",
                imageFormatOptions: f,
              },
            ],
            h = yield o("WAWebMediaDataUtils").getResizedThumbData(c, g),
            y = h != null && h.length > 0 ? h[0] : void 0,
            C =
              (i = s.getParentGroupChat()) == null ? void 0 : i.formattedTitle,
            b;
          o("WAWebGroupMetadataGetters").getGroupType(s) ===
          o("WAWebGroupType").GroupType.LINKED_SUBGROUP
            ? (b = C)
            : (b = p(o("WAWebGroupMetadataGetters").getGroupType(s), C));
          var v = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t,
            linkDetails: {
              title: (l = d) == null ? void 0 : l.formattedTitle,
              description: b,
              richPreviewType: o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$PreviewType.NONE,
              doNotPlayInline: !0,
              inviteGrpType: o("WAWebGroupMetadataGetters").getGroupType(s),
              isLoading: !1,
            },
            linkThumbnail: {
              thumbnail: y == null ? void 0 : y.dataUrl,
              thumbnailHeight: y == null ? void 0 : y.height,
              thumbnailWidth: y == null ? void 0 : y.width,
            },
          });
          return v;
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
