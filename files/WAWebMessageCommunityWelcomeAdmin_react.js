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
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a = o("react-compiler-runtime").c(20),
        i = t.author,
        l = t.chat,
        u = t.templateParams,
        d = u.length > 0 ? u[0] : null,
        p;
      if (d instanceof r("WAWebWid")) p = d;
      else if (!r("isStringNullOrEmpty")(d)) {
        var _;
        (a[0] !== d
          ? ((_ = o("WAWebWidFactory").createWid(d)), (a[0] = d), (a[1] = _))
          : (_ = a[1]),
          (p = _));
      }
      var f;
      a[2] !== p
        ? ((f = p != null ? r("WAWebGroupMetadataCollection").get(p) : null),
          (a[2] = p),
          (a[3] = f))
        : (f = a[3]);
      var g = f;
      g != null && g.parentGroup && (p = g.parentGroup);
      var h = o("WAWebUserPrefsMeUser").isMeAccount(
        (n = l.groupMetadata) == null ? void 0 : n.owner,
      );
      if (!h) {
        var y;
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.horiz12,
              o("WAWebUISpacing").uiPadding.top5,
              o("WAWebUISpacing").uiPadding.bottom6,
            )),
            (a[4] = y))
          : (y = a[4]);
        var C;
        a[5] !== i || a[6] !== u
          ? ((C = o("WAWebFormatLinkNotification").formatLinkNotification(
              "community_create",
              i,
              null,
              u,
              !0,
            )),
            (a[5] = i),
            (a[6] = u),
            (a[7] = C))
          : (C = a[7]);
        var b;
        return (
          a[8] !== C
            ? ((b = c.jsx("div", babelHelpers.extends({}, y, { children: C }))),
              (a[8] = C),
              (a[9] = b))
            : (b = a[9]),
          b
        );
      }
      if (p == null) return null;
      var v;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = c.jsx(
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
          )),
          (a[10] = v))
        : (v = a[10]);
      var S = v,
        R;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Manage community")), (a[11] = R))
        : (R = a[11]);
      var L = R,
        E = p,
        k = l.id,
        I;
      a[12] !== i || a[13] !== l || a[14] !== u
        ? ((I = m({ templateParams: u, chat: l, author: i })),
          (a[12] = i),
          (a[13] = l),
          (a[14] = u),
          (a[15] = I))
        : (I = a[15]);
      var T;
      return (
        a[16] !== l.id || a[17] !== p || a[18] !== I
          ? ((T = c.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              {
                communityId: E,
                subgroupId: k,
                title: I,
                subtitle: S,
                footer: L,
              },
            )),
            (a[16] = l.id),
            (a[17] = p),
            (a[18] = I),
            (a[19] = T))
          : (T = a[19]),
        T
      );
    }
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
