__d(
  "WAWebContactInfoLinkedSocialAccounts.react",
  [
    "fbt",
    "WAWebBusinessLogEvents",
    "WAWebContactInfoLinkedAccountRow.react",
    "WAWebDrawerContext",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebLogoFacebookRoundIcon.react",
    "WAWebLogoInstagramColorIcon.react",
    "WAWebProductCatalogContext",
    "WAWebWamEnumBusinessToolsLinkedAccountType",
    "isStringNullOrEmpty",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = {
        infoText: {
          fontSize: "x1pg5gke",
          lineHeight: "x37zpob",
          color: "xhslqc4",
          paddingInlineStart: "xgv2mm5",
          paddingInlineEnd: "x1t7qo4d",
          display: "x1lliihq",
          paddingBottom: "x1g2khh7",
          paddingTop: "x1xrf6ya",
          marginTop: "xdj266r",
          $$css: !0,
        },
        iconColor: { color: "xb92f9i", $$css: !0 },
      };
    function m(e) {
      var t = e.businessProfile,
        n = e.rowTheme,
        a = n === void 0 ? "linked-account" : n,
        i = e.sectionTheme,
        l = i === void 0 ? "no-padding" : i,
        m = e.showEditHint,
        p = o("useWAWebModelValues").useModelValues(t, [
          "fbPage",
          "igProfessional",
        ]),
        _ = p.fbPage,
        f = p.igProfessional,
        g = o("WAWebProductCatalogContext").getProductCatalogSessionId(
          c(o("WAWebDrawerContext").DrawerContext),
        ),
        h = [];
      if (
        _ &&
        !r("isStringNullOrEmpty")(_.displayName) &&
        !r("isStringNullOrEmpty")(_.id)
      ) {
        var y =
            _.likes != null
              ? s._(
                  /*BTDS*/ '_j{"*":"Facebook \\u2022 {count} Likes","_1":"Facebook \\u2022 1 Like"}',
                  [s._plural(_.likes, "count")],
                )
              : s._(/*BTDS*/ "Facebook"),
          C = function () {
            o("WAWebBusinessLogEvents").logLinkedFbClick(
              g,
              _.likes,
              !!t.coverPhoto,
            );
          };
        h.push(
          u.jsx(
            r("WAWebContactInfoLinkedAccountRow.react"),
            {
              Icon: u.jsx(
                o("WAWebLogoFacebookRoundIcon.react").LogoFacebookRoundIcon,
                { iconXstyle: d.iconColor },
              ),
              text: _.displayName,
              secondary: y,
              href: "https://www.facebook.com/" + _.id,
              rowTheme: a,
              onClick: C,
              linkedAccountType: o("WAWebWamEnumBusinessToolsLinkedAccountType")
                .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
              hasCoverPhoto: !!t.coverPhoto,
            },
            "fb",
          ),
        );
      }
      if (f && !r("isStringNullOrEmpty")(f.handle)) {
        var b =
            f.followers != null
              ? s._(
                  /*BTDS*/ '_j{"*":"Instagram \\u2022 {count} followers","_1":"Instagram \\u2022 1 follower"}',
                  [s._plural(f.followers, "count")],
                )
              : s._(/*BTDS*/ "Instagram"),
          v = function () {
            o("WAWebBusinessLogEvents").logLinkedIgClick(
              g,
              f.followers,
              !!t.coverPhoto,
            );
          };
        h.push(
          u.jsx(
            r("WAWebContactInfoLinkedAccountRow.react"),
            {
              Icon: u.jsx(
                o("WAWebLogoInstagramColorIcon.react").LogoInstagramColorIcon,
                {},
              ),
              text: "@" + f.handle,
              secondary: b,
              href: "https://www.instagram.com/" + f.handle,
              rowTheme: a,
              onClick: v,
              linkedAccountType: o("WAWebWamEnumBusinessToolsLinkedAccountType")
                .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
              hasCoverPhoto: !!t.coverPhoto,
            },
            "ig",
          ),
        );
      }
      if (h.length === 0) return null;
      var S;
      if (m === !0) {
        var R = s._(
          /*BTDS*/ "Facebook and Instagram handles can only be edited from the app on your mobile device.",
        );
        S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: "inherit",
          xstyle: d.infoText,
          text: R.toString(),
        });
      }
      return u.jsxs(r("WAWebDrawerSection.react"), {
        theme: l,
        animation: !1,
        children: [
          h.map(function (e) {
            return e;
          }),
          S,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
