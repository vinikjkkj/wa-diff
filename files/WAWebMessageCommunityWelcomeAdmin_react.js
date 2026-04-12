__d(
  "WAWebMessageCommunityWelcomeAdmin.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebFormatLinkNotification",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a = t.author,
        i = t.chat,
        l = t.templateParams,
        u = l.length > 0 ? l[0] : null,
        d;
      u instanceof r("WAWebWid")
        ? (d = u)
        : r("isStringNullOrEmpty")(u) ||
          (d = o("WAWebWidFactory").createWid(u));
      var p = d != null ? r("WAWebGroupMetadataCollection").get(d) : null;
      p != null && p.parentGroup && (d = p.parentGroup);
      var _ = o("WAWebUserPrefsMeUser").isMeAccount(
        (n = i.groupMetadata) == null ? void 0 : n.owner,
      );
      if (!_)
        return c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.horiz12,
              o("WAWebUISpacing").uiPadding.top5,
              o("WAWebUISpacing").uiPadding.bottom6,
            ),
            {
              children: o("WAWebFormatLinkNotification").formatLinkNotification(
                "community_create",
                a,
                null,
                l,
                !0,
              ),
            },
          ),
        );
      if (d == null) return null;
      var f = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.horiz10,
            ),
            {
              children: s._(
                /*BTDS*/ "Send important admin updates to all your members at once.",
              ),
            },
          ),
        ),
        g = s._(/*BTDS*/ "Manage community");
      return c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
        communityId: d,
        subgroupId: i.id,
        title: m({ templateParams: l, chat: i, author: a }),
        subtitle: f,
        footer: g,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.author,
        a = e.chat,
        i = e.templateParams,
        l = o("WAWebUserPrefsMeUser").isMeAccount(
          (t = a.groupMetadata) == null ? void 0 : t.owner,
        );
      return l
        ? s._(/*BTDS*/ "Welcome to your community!")
        : r("WANullthrows")(
            o("WAWebFormatLinkNotification").formatLinkNotifAsFbt(
              "community_create",
              n,
              null,
              i,
            ),
          );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MessageCommunityWelcomeAdmin = d),
      (l.communityWelcomeAdminTitle = m));
  },
  226,
);
