__d(
  "WAWebPDFNMetaModal.react",
  [
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebPDFNContentElement.react",
    "WAWebPDFNHeaderImage.react",
    "WAWebPDFNSanitizedSvg.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WaWebPDFNCommonUtils",
    "XMDSButton.react",
    "XMDSDialogHeader.react",
    "XMDSDialogPage.react",
    "XMDSDialogTitle.react",
    "XMDSText.react",
    "XMDSTheme.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        cdsContainer: { fontFamily: "xjn6cdj", $$css: !0 },
        bulletSubtitle: {
          fontSize: "x6prxxf",
          lineHeight: "x17fgdl5",
          fontWeight: "xo1l8bm",
          $$css: !0,
        },
        secondaryText: { color: "xb6zdsr", $$css: !0 },
        secondaryTextDark: { color: "x1rmb33y", $$css: !0 },
        link: { fontWeight: "x1xlr1w8", $$css: !0 },
        blueLink: { color: "x1aejobo", $$css: !0 },
        blueLinkDark: { color: "x180kvt1", $$css: !0 },
        cdsFooterText: {
          fontSize: "x1nxh6w3",
          lineHeight: "xuy8w9f",
          $$css: !0,
        },
      };
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(31),
        a = e.onAccept,
        i = e.onCancel,
        l = e.pdfnNotice,
        c = o("WAWebThemeContext").useIsDarkTheme(),
        d = c ? u.blueLinkDark : u.blueLink,
        p;
      n[0] !== l || n[1] !== d
        ? ((p = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(l, {
            linkXstyle: [u.link, d],
          })),
          (n[0] = l),
          (n[1] = d),
          (n[2] = p))
        : (p = n[2]);
      var _ = p,
        f = _.bulletContent,
        g = _.footerContent,
        h = _.headerContent,
        y = _.okText,
        C;
      n[3] !== f
        ? ((C = f != null ? s.jsx(m, { bullets: f }) : null),
          (n[3] = f),
          (n[4] = C))
        : (C = n[4]);
      var b = C,
        v;
      n[5] !== g || n[6] !== c
        ? ((v =
            g != null
              ? s.jsx(r("WAWebPDFNContentElement.react"), {
                  as: "div",
                  content: g,
                  xstyle: [
                    u.cdsFooterText,
                    c ? u.secondaryTextDark : u.secondaryText,
                    o("WAWebUISpacing").uiPadding.bottom12,
                  ],
                })
              : null),
          (n[5] = g),
          (n[6] = c),
          (n[7] = v))
        : (v = n[7]);
      var S = v,
        R;
      n[8] !== h
        ? ((R = s.jsx(r("WAWebPDFNHeaderImage.react"), {
            content: h,
            xstyle: o("WAWebUISpacing").uiPadding.bottom16,
          })),
          (n[8] = h),
          (n[9] = R))
        : (R = n[9]);
      var L = R,
        E = c ? "dark" : "light",
        k;
      n[10] !== i
        ? ((k = s.jsx(r("XMDSDialogHeader.react"), { onClose: i })),
          (n[10] = i),
          (n[11] = k))
        : (k = n[11]);
      var I;
      n[12] !== L
        ? ((I = s.jsx(o("WAWebFlex.react").FlexRow, {
            alignSelf: "center",
            children: L,
          })),
          (n[12] = L),
          (n[13] = I))
        : (I = n[13]);
      var T =
          l == null || (t = l.privacyDisclosureModal) == null
            ? void 0
            : t.title,
        D;
      n[14] !== T
        ? ((D = s.jsx(r("XMDSDialogTitle.react"), {
            children: s.jsx(r("XMDSText.react"), {
              textStyle: "headline2",
              xstyle: o("WAWebUISpacing").uiPadding.vert16,
              children: T,
            }),
          })),
          (n[14] = T),
          (n[15] = D))
        : (D = n[15]);
      var x;
      n[16] !== y || n[17] !== a
        ? ((x = s.jsx(r("XMDSButton.react"), { label: y, onPress: a })),
          (n[16] = y),
          (n[17] = a),
          (n[18] = x))
        : (x = n[18]);
      var $;
      n[19] !== b || n[20] !== S || n[21] !== D || n[22] !== x || n[23] !== I
        ? (($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            paddingStart: 20,
            paddingEnd: 20,
            xstyle: u.cdsContainer,
            children: [I, D, b, S, x],
          })),
          (n[19] = b),
          (n[20] = S),
          (n[21] = D),
          (n[22] = x),
          (n[23] = I),
          (n[24] = $))
        : ($ = n[24]);
      var P;
      n[25] !== $ || n[26] !== k
        ? ((P = s.jsx(r("XMDSDialogPage.react"), {
            footer: null,
            header: k,
            inline: !0,
            children: $,
          })),
          (n[25] = $),
          (n[26] = k),
          (n[27] = P))
        : (P = n[27]);
      var N;
      return (
        n[28] !== P || n[29] !== E
          ? ((N = s.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.CDS,
              children: s.jsx(r("XMDSTheme.react"), {
                displayMode: E,
                children: P,
              }),
            })),
            (n[28] = P),
            (n[29] = E),
            (n[30] = N))
          : (N = n[30]),
        N
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.iconSvg,
        a = e.secondaryText,
        i = e.text,
        l = o("WAWebThemeContext").useIsDarkTheme(),
        c;
      t[0] !== l || t[1] !== a
        ? ((c =
            a != null
              ? s.jsx(r("WAWebPDFNContentElement.react"), {
                  as: "span",
                  xstyle: [
                    u.bulletSubtitle,
                    l ? u.secondaryTextDark : u.secondaryText,
                  ],
                  content: a,
                })
              : null),
          (t[0] = l),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebUISpacing").uiPadding.top10,
            o("WAWebUISpacing").uiPadding.bottom6,
          ]),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== n
        ? ((p = s.jsx(r("WAWebPDFNSanitizedSvg.react"), { iconSvg: n })),
          (t[4] = n),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== i
        ? ((_ = s.jsx(r("XMDSText.react"), {
            textStyle: "primaryLabel",
            children: i,
          })),
          (t[6] = i),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== d || t[9] !== _
        ? ((f = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 4,
            children: [_, d],
          })),
          (t[8] = d),
          (t[9] = _),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== p || t[12] !== f
          ? ((g = s.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 12,
              xstyle: m,
              children: [p, f],
            })),
            (t[11] = p),
            (t[12] = f),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.bullets,
        r;
      t[0] !== n ? ((r = n.map(p)), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = s.jsx(o("WAWebFlex.react").FlexColumn, {
              paddingBottom: 16,
              children: r,
            })),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    function p(e, t) {
      return s.jsx(
        d,
        {
          text: e.text,
          icon: e.icon,
          iconSvg: e.iconSvg,
          secondaryText: e.secondaryText,
        },
        t,
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
