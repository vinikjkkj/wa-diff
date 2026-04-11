__d(
  "WAWebNewsletterLinkDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellFrame.react",
    "WAWebCommonNewsletterStrings",
    "WAWebCopyPasteSelectable.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumChannelLinkShareScreen",
    "WDSIconIcContentCopy.react",
    "WDSIconIcFastForward.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
    "useWAWebNewsletterInviteLink",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = {
        drawer: { backgroundColor: "x1280gxy", $$css: !0 },
        header: {
          width: "x14atkfc",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x1h3rtpe",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        optionsHeader: { textAlign: "x1yc453h", $$css: !0 },
        mouseCursor: { cursor: "x1ypdohk", $$css: !0 },
        link: { wordBreak: "x1yn0g08", $$css: !0 },
        newsletterName: {
          overflowWrap: "x1mzt3pk",
          maxHeight: "x1o16irs",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(50),
        a = t.entryPoint,
        i = t.newsletter,
        l = t.onBack,
        c = t.onClose,
        p = t.ref,
        f = a != null ? a : void 0;
      f === void 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Encountered null link share screen entry point",
              ])),
          )
          .tags("newsletter-logging")
          .sendLogs(
            "Null link share screen entry point in newsletter link share logging",
          );
      var g;
      n[0] !== f
        ? ((g = {
            linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen")
              .CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
            linkShareScreenEntryPoint: f,
          }),
          (n[0] = f),
          (n[1] = g))
        : (g = n[1]);
      var h;
      n[2] !== i || n[3] !== g
        ? ((h = { chat: i, linkShareLoggingNavigationParams: g }),
          (n[2] = i),
          (n[3] = g),
          (n[4] = h))
        : (h = n[4]);
      var y = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink(h),
        C = y[0],
        b = y[1],
        v = y[2],
        S;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = ["name"]), (n[5] = S))
        : (S = n[5]);
      var R = o("useWAWebModelValues").useOptionalModelValues(
          i.newsletterMetadata,
          S,
        ),
        L;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = ["id", "profilePicThumb"]), (n[6] = L))
        : (L = n[6]);
      var E = o("useWAWebModelValues").useModelValues(i.contact, L),
        k;
      if (n[7] !== b || n[8] !== v || n[9] !== C) {
        if (((k = []), C != null)) {
          var I;
          n[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = d.jsx(r("WDSIconIcFastForward.react"), {
                iconXstyle: m.secondaryColor,
              })),
              (n[11] = I))
            : (I = n[11]);
          var T;
          n[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = o(
                "WAWebCommonNewsletterStrings",
              ).getSendLinkViaWhatsAppText()),
              (n[12] = T))
            : (T = n[12]);
          var D;
          if (
            (n[13] !== v
              ? ((D = {
                  icon: I,
                  onClick: v,
                  testid: "newsletter-info-invite-action",
                  title: T,
                }),
                (n[13] = v),
                (n[14] = D))
              : (D = n[14]),
            k.push(D),
            document.queryCommandSupported("copy"))
          ) {
            var x;
            n[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = d.jsx(r("WDSIconIcContentCopy.react"), {
                  iconXstyle: m.secondaryColor,
                })),
                (n[15] = x))
              : (x = n[15]);
            var $;
            n[16] === Symbol.for("react.memo_cache_sentinel")
              ? (($ = o("WAWebCommonNewsletterStrings").getCopyLinkText()),
                (n[16] = $))
              : ($ = n[16]);
            var P;
            (n[17] !== b
              ? ((P = {
                  icon: x,
                  onClick: b,
                  testid: "newsletter-info-copy-link-action",
                  title: $,
                }),
                (n[17] = b),
                (n[18] = P))
              : (P = n[18]),
              k.push(P));
          }
        }
        ((n[7] = b), (n[8] = v), (n[9] = C), (n[10] = k));
      } else k = n[10];
      var N;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (u || (u = r("stylex"))).props(
            m.header,
            o("WAWebUISpacing").uiMargin.all15,
          )),
          (n[19] = N))
        : (N = n[19]);
      var M;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (u || (u = r("stylex")))(
            o("WAWebUISpacing").uiMargin.vert4,
            o("WAWebUISpacing").uiMargin.horiz2,
          )),
          (n[20] = M))
        : (M = n[20]);
      var w;
      n[21] !== E.id
        ? ((w = d.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: E.id,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
            size: 56,
          })),
          (n[21] = E.id),
          (n[22] = w))
        : (w = n[22]);
      var A = R == null ? void 0 : R.name,
        F;
      n[23] !== A
        ? ((F = d.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: m.newsletterName,
            children: A,
          })),
          (n[23] = A),
          (n[24] = F))
        : (F = n[24]);
      var O;
      n[25] !== C
        ? ((O = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "link",
            testid: void 0,
            textWrap: "wrap",
            xstyle: m.link,
            children: C,
          })),
          (n[25] = C),
          (n[26] = O))
        : (O = n[26]);
      var B;
      n[27] !== b || n[28] !== O
        ? ((B = d.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
            onClick: b,
            selectable: !0,
            xstyle: m.mouseCursor,
            children: O,
          })),
          (n[27] = b),
          (n[28] = O),
          (n[29] = B))
        : (B = n[29]);
      var W;
      n[30] !== B || n[31] !== w || n[32] !== F
        ? ((W = d.jsx(
            "div",
            babelHelpers.extends({}, N, {
              children: d.jsx(r("WAWebCellFrame.react"), {
                className: M,
                image: w,
                primary: F,
                secondary: B,
                theme: "newsletter-link-cell",
              }),
            }),
          )),
          (n[30] = B),
          (n[31] = w),
          (n[32] = F),
          (n[33] = W))
        : (W = n[33]);
      var q = W,
        U;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            color: "primary",
            marginBottom: 20,
            marginEnd: 32,
            marginStart: 32,
            marginTop: 16,
            xstyle: m.optionsHeader,
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getChannelLinkInformationText(),
          })),
          (n[34] = U))
        : (U = n[34]);
      var V = U,
        H;
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = d.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [
              o("WAWebUISpacing").uiMargin.vert4,
              o("WAWebUISpacing").uiMargin.horiz30,
            ],
            children: d.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" }),
          })),
          (n[35] = H))
        : (H = n[35]);
      var G = H,
        z;
      n[36] !== l || n[37] !== c
        ? ((z = l ? { onBack: l } : { onCancel: c }),
          (n[36] = l),
          (n[37] = c),
          (n[38] = z))
        : (z = n[38]);
      var j = z,
        K;
      n[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = { surface: "channel-link" }), (n[39] = K))
        : (K = n[39]);
      var Q;
      n[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Channel link")), (n[40] = Q))
        : (Q = n[40]);
      var X;
      n[41] !== j
        ? ((X = d.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                title: Q,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              },
              j,
              { rtlFixIfOnDarwin: !0, testid: void 0 },
            ),
          )),
          (n[41] = j),
          (n[42] = X))
        : (X = n[42]);
      var Y;
      n[43] !== k ? ((Y = k.map(_)), (n[43] = k), (n[44] = Y)) : (Y = n[44]);
      var J;
      return (
        n[45] !== q || n[46] !== p || n[47] !== X || n[48] !== Y
          ? ((J = d.jsxs(r("WAWebDrawer.react"), {
              ref: p,
              testid: void 0,
              theme: "striped",
              tsNavigationData: K,
              xstyle: m.drawer,
              children: [X, q, V, G, Y],
            })),
            (n[45] = q),
            (n[46] = p),
            (n[47] = X),
            (n[48] = Y),
            (n[49] = J))
          : (J = n[49]),
        J
      );
    }
    function _(e, t) {
      var n = e.icon,
        r = e.onClick,
        a = e.testid,
        i = e.title;
      return d.jsx(
        o("WAWebDrawerButton.react").DrawerButtonSimple,
        { divider: !1, icon: n, onClick: r, testid: void 0, children: i },
        a + "-" + t,
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
