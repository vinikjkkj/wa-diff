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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(49),
        n = e.businessProfile,
        a = e.rowTheme,
        i = e.sectionTheme,
        l = e.showEditHint,
        m = a === void 0 ? "linked-account" : a,
        _ = i === void 0 ? "no-padding" : i,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["fbPage", "igProfessional"]), (t[0] = f))
        : (f = t[0]);
      var g = o("useWAWebModelValues").useModelValues(n, f),
        h = g.fbPage,
        y = g.igProfessional,
        C = c(o("WAWebDrawerContext").DrawerContext),
        b;
      t[1] !== C
        ? ((b = o("WAWebProductCatalogContext").getProductCatalogSessionId(C)),
          (t[1] = C),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      if (t[3] !== n || t[4] !== v || t[5] !== h || t[6] !== y || t[7] !== m) {
        if (
          ((S = []),
          h &&
            !r("isStringNullOrEmpty")(h.displayName) &&
            !r("isStringNullOrEmpty")(h.id))
        ) {
          var R;
          t[9] !== h.likes
            ? ((R =
                h.likes != null
                  ? s._(
                      /*BTDS*/ '_j{"*":"Facebook \\u2022 {count} Likes","_1":"Facebook \\u2022 1 Like"}',
                      [s._plural(h.likes, "count")],
                    )
                  : s._(/*BTDS*/ "Facebook")),
              (t[9] = h.likes),
              (t[10] = R))
            : (R = t[10]);
          var L = R,
            E;
          t[11] !== n.coverPhoto || t[12] !== v || t[13] !== h.likes
            ? ((E = function () {
                o("WAWebBusinessLogEvents").logLinkedFbClick(
                  v,
                  h.likes,
                  !!n.coverPhoto,
                );
              }),
              (t[11] = n.coverPhoto),
              (t[12] = v),
              (t[13] = h.likes),
              (t[14] = E))
            : (E = t[14]);
          var k = E,
            I;
          t[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = u.jsx(
                o("WAWebLogoFacebookRoundIcon.react").LogoFacebookRoundIcon,
                { iconXstyle: d.iconColor },
              )),
              (t[15] = I))
            : (I = t[15]);
          var T = "https://www.facebook.com/" + h.id,
            D = !!n.coverPhoto,
            x;
          (t[16] !== h.displayName ||
          t[17] !== k ||
          t[18] !== L ||
          t[19] !== m ||
          t[20] !== T ||
          t[21] !== D
            ? ((x = u.jsx(
                r("WAWebContactInfoLinkedAccountRow.react"),
                {
                  Icon: I,
                  text: h.displayName,
                  secondary: L,
                  href: T,
                  rowTheme: m,
                  onClick: k,
                  linkedAccountType: o(
                    "WAWebWamEnumBusinessToolsLinkedAccountType",
                  ).BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                  hasCoverPhoto: D,
                },
                "fb",
              )),
              (t[16] = h.displayName),
              (t[17] = k),
              (t[18] = L),
              (t[19] = m),
              (t[20] = T),
              (t[21] = D),
              (t[22] = x))
            : (x = t[22]),
            S.push(x));
        }
        if (y && !r("isStringNullOrEmpty")(y.handle)) {
          var $;
          t[23] !== y.followers
            ? (($ =
                y.followers != null
                  ? s._(
                      /*BTDS*/ '_j{"*":"Instagram \\u2022 {count} followers","_1":"Instagram \\u2022 1 follower"}',
                      [s._plural(y.followers, "count")],
                    )
                  : s._(/*BTDS*/ "Instagram")),
              (t[23] = y.followers),
              (t[24] = $))
            : ($ = t[24]);
          var P = $,
            N;
          t[25] !== n.coverPhoto || t[26] !== v || t[27] !== y.followers
            ? ((N = function () {
                o("WAWebBusinessLogEvents").logLinkedIgClick(
                  v,
                  y.followers,
                  !!n.coverPhoto,
                );
              }),
              (t[25] = n.coverPhoto),
              (t[26] = v),
              (t[27] = y.followers),
              (t[28] = N))
            : (N = t[28]);
          var M = N,
            w;
          t[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = u.jsx(
                o("WAWebLogoInstagramColorIcon.react").LogoInstagramColorIcon,
                {},
              )),
              (t[29] = w))
            : (w = t[29]);
          var A = "@" + y.handle,
            F = "https://www.instagram.com/" + y.handle,
            O = !!n.coverPhoto,
            B;
          (t[30] !== P ||
          t[31] !== M ||
          t[32] !== m ||
          t[33] !== O ||
          t[34] !== A ||
          t[35] !== F
            ? ((B = u.jsx(
                r("WAWebContactInfoLinkedAccountRow.react"),
                {
                  Icon: w,
                  text: A,
                  secondary: P,
                  href: F,
                  rowTheme: m,
                  onClick: M,
                  linkedAccountType: o(
                    "WAWebWamEnumBusinessToolsLinkedAccountType",
                  ).BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                  hasCoverPhoto: O,
                },
                "ig",
              )),
              (t[30] = P),
              (t[31] = M),
              (t[32] = m),
              (t[33] = O),
              (t[34] = A),
              (t[35] = F),
              (t[36] = B))
            : (B = t[36]),
            S.push(B));
        }
        ((t[3] = n),
          (t[4] = v),
          (t[5] = h),
          (t[6] = y),
          (t[7] = m),
          (t[8] = S));
      } else S = t[8];
      if (S.length === 0) return null;
      var W;
      if (l === !0) {
        var q, U, V, H;
        if (t[37] === Symbol.for("react.memo_cache_sentinel")) {
          var G = s._(
            /*BTDS*/ "Facebook and Instagram handles can only be edited from the app on your mobile device.",
          );
          ((q = o("WAWebEmojiText.react").EmojiText),
            (U = "inherit"),
            (V = d.infoText),
            (H = G.toString()),
            (t[37] = q),
            (t[38] = U),
            (t[39] = V),
            (t[40] = H));
        } else ((q = t[37]), (U = t[38]), (V = t[39]), (H = t[40]));
        var z;
        (t[41] !== H
          ? ((z = u.jsx(q, { direction: U, xstyle: V, text: H })),
            (t[41] = H),
            (t[42] = z))
          : (z = t[42]),
          (W = z));
      }
      var j;
      t[43] !== S ? ((j = S.map(p)), (t[43] = S), (t[44] = j)) : (j = t[44]);
      var K;
      return (
        t[45] !== W || t[46] !== _ || t[47] !== j
          ? ((K = u.jsxs(r("WAWebDrawerSection.react"), {
              theme: _,
              animation: !1,
              children: [j, W],
            })),
            (t[45] = W),
            (t[46] = _),
            (t[47] = j),
            (t[48] = K))
          : (K = t[48]),
        K
      );
    }
    function p(e) {
      return e;
    }
    l.default = m;
  },
  226,
);
