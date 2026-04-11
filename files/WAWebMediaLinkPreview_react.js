__d(
  "WAWebMediaLinkPreview.react",
  [
    "cx",
    "fbt",
    "PaymentLinkPreviewWithAmountFeature",
    "WABidi",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebGroupType",
    "WAWebKeepInChatIcon.react",
    "WAWebL10N",
    "WAWebLinkPreviewGroupUtils",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewImage.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebPaymentLinkPreview.react",
    "WAWebStarIcon.react",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = 20,
      p = "x1qak2s4-B",
      _ = "102px",
      f = {
        preview: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          color: "x14ug900",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          fontSize: "x1wl59ut",
          lineHeight: "x1n6pog2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          transition: "xnhwuio",
          $$css: !0,
        },
        noBorderRadius: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        compose: {
          backgroundColor: "xjbqb8w",
          cursor: "x1sqbtui",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          maxWidth: "x1x1rfll",
          width: "xh8yej3",
          $$css: !0,
        },
        composeWithSQMediaPreview: {
          height: "xk1v102",
          maxHeight: "x1adh1z8",
          $$css: !0,
        },
        composeWithHQMediaPreview: { maxHeight: "xaayvut", $$css: !0 },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        boubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        fullPreview: { display: "x1lliihq", $$css: !0 },
        extended: {
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        highQualityLayout: { flexDirection: "xdt5ytf", $$css: !0 },
        horizontalLayout: { flexDirection: "x1q0g3np", $$css: !0 },
        status: { backgroundColor: "x1p8t8ri", width: "xh8yej3", $$css: !0 },
        body: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          lineHeight: "x17fgdl5",
          maxHeight: "x1q2aixq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "xe2zdcy",
          width: "xh8yej3",
          $$css: !0,
        },
        statusBody: {
          paddingTop: "xz9dl7a",
          paddingInlineEnd: "xpdmqnj",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "x1g0dm76",
          maxHeight: "xi3n7jm",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        fullPreviewBody: { maxHeight: "xjuq1rv", $$css: !0 },
        fullPreviewNotHighQualityLayoutBody: {
          display: "x1lliihq",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        notComposeBody: { alignSelf: "x1y8v6su", $$css: !0 },
        composeBody: {
          alignSelf: "xamitd3",
          boxSizing: "x9f619",
          paddingTop: "x1y1aw1k",
          paddingInlineEnd: "xpdmqnj",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x1iwz3mf",
          $$css: !0,
        },
        composeBodyLQ: { maxHeight: "x1adh1z8", $$css: !0 },
        composeBodyHQ: { maxHeight: "xaayvut", $$css: !0 },
        statusImageShrink: {
          display: "x78zum5",
          flexShrink: "xs83m0k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          maxHeight: "xmqja0k",
          width: "xh8yej3",
          $$css: !0,
        },
        icon: {
          color: "x17t9dm2",
          pointerEvents: "x47corl",
          filter: "x1tqxd1j",
          $$css: !0,
        },
        placeholderImage: { color: "xy8hc96", $$css: !0 },
        paddingAll24: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
      };
    function g(e) {
      return e != null && e !== "" ? o("WABidi").dir(e) : void 0;
    }
    function h(e) {
      var t = e === "rtl";
      return t !== r("WAWebL10N").isRTL();
    }
    var y = 240,
      C = /^(www.)?twitter.com$/i,
      b = /^(www.)?x.com$/i,
      v = [C, b];
    function S(e) {
      return e == null || e === ""
        ? !1
        : v.some(function (t) {
            return t.test(e);
          });
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.displayType,
        a = e.kept,
        i = e.star;
      if (r !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) return n;
      var l;
      if (t[0] !== a || t[1] !== i) {
        if (((l = []), i === !0)) {
          var s;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = [o("WAWebStarIcon.react").StarIcon, 16, 15]), (t[3] = s))
            : (s = t[3]),
            l.push(s));
        }
        if (a === !0) {
          var u;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = [
                o("WAWebKeepInChatIcon.react").KeepInChatIcon,
                15.64,
                14.67,
              ]),
              (t[4] = u))
            : (u = t[4]),
            l.push(u));
        }
        ((t[0] = a), (t[1] = i), (t[2] = l));
      } else l = t[2];
      var c;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1280gxy",
          }),
          (t[5] = c))
        : (c = t[5]);
      var m;
      t[6] !== l
        ? ((m =
            l.length > 0 &&
            d.jsx("div", {
              className: "x78zum5 x10l6tqk xmnqija xy1j3rs",
              children: l.map(L),
            })),
          (t[6] = l),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== n || t[9] !== m
          ? ((p = d.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, c, {
                children: [n, m],
              }),
            )),
            (t[8] = n),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function L(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return d.jsx(t, { xstyle: f.icon, width: n, height: r }, t.name);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(t) {
      var n = o("react-compiler-runtime").c(109),
        a = t.botPluginReferenceIndex,
        i = t.compose,
        l = t.containerXstyle,
        s = t.description,
        c = t.displayType,
        m = t.horizontalLayout,
        p = t.inviteGrpType,
        _ = t.isInvite,
        C = t.isLoading,
        b = t.isSentByMe,
        v = t.kept,
        L = t.linkPreviewData,
        E = t.links,
        k = t.matchedText,
        I = t.onClick,
        T = t.star,
        D = t.theme,
        x = t.thumbnail,
        $ = t.thumbnailJpeg,
        P = t.thumbnailJpegDirectPath,
        N = t.thumbnailJpegHeight,
        M = t.thumbnailJpegHQ,
        w = t.thumbnailJpegWidth,
        A = t.title,
        F = i === void 0 ? !1 : i,
        O = m === void 0 ? !1 : m,
        B = D === "bot_plugin_link",
        W = c === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        q = (D === "high-quality" || D === "high-quality-extended") && !W,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X;
      if (
        n[0] !== l ||
        n[1] !== s ||
        n[2] !== c ||
        n[3] !== O ||
        n[4] !== p ||
        n[5] !== F ||
        n[6] !== W ||
        n[7] !== q ||
        n[8] !== C ||
        n[9] !== b ||
        n[10] !== L ||
        n[11] !== E ||
        n[12] !== k ||
        n[13] !== D ||
        n[14] !== M ||
        n[15] !== w ||
        n[16] !== A
      ) {
        j = Symbol.for("react.early_return_sentinel");
        e: {
          if (
            ((H = !F && !W && S(k)),
            o("WAWebNewsletterApiParse").isNewsletterInviteCode(k))
          )
            if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
              U = null;
            else if (
              o("WAWebABProps").getABPropConfigValue(
                "channels_invite_link_preview_improvement_enabled",
              )
            )
              U = s;
            else {
              var Y;
              (n[26] === Symbol.for("react.memo_cache_sentinel")
                ? ((Y = u._(/*BTDS*/ "Channel invite link")), (n[26] = Y))
                : (Y = n[26]),
                (U = Y));
            }
          else if (p != null) {
            var J;
            p === o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
              typeof s == "string" &&
              (J = s);
            var Z;
            (n[27] !== J || n[28] !== p
              ? ((Z = o("WAWebLinkPreviewGroupUtils").getInviteLinkDescription(
                  p,
                  J,
                )),
                (n[27] = J),
                (n[28] = p),
                (n[29] = Z))
              : (Z = n[29]),
              (U = Z));
          } else U = s;
          var ee;
          (n[30] !== A
            ? ((K = g(A)), (ee = h(K)), (n[30] = A), (n[31] = ee), (n[32] = K))
            : ((ee = n[31]), (K = n[32])),
            (Q = ee),
            (G = c === o("WAWebDisplayType").DISPLAY_TYPE.STATUS));
          var te = D === "support_citations_link",
            ne;
          (n[33] !== F ||
          n[34] !== G ||
          n[35] !== te ||
          n[36] !== k ||
          n[37] !== K ||
          n[38] !== Q
            ? ((ne =
                k != null && k !== ""
                  ? d.jsx(
                      "div",
                      babelHelpers.extends(
                        { "data-testid": void 0 },
                        {
                          0: {
                            className:
                              "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij",
                          },
                          4: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn",
                          },
                          2: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn",
                          },
                          6: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn",
                          },
                          1: {
                            className:
                              "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij xuxw1ft x6ikm8r x10wlt62 xlyipyv",
                          },
                          5: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv",
                          },
                          3: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv",
                          },
                          7: {
                            className:
                              "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv",
                          },
                        }[(!!G << 2) | (!!F << 1) | (!!te << 0)],
                        {
                          children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: k,
                            direction: K,
                            dirMismatch: Q,
                          }),
                        },
                      ),
                    )
                  : null),
              (n[33] = F),
              (n[34] = G),
              (n[35] = te),
              (n[36] = k),
              (n[37] = K),
              (n[38] = Q),
              (n[39] = ne))
            : (ne = n[39]),
            (X = ne));
          var re = L == null ? void 0 : L.previewMetadata;
          if (
            F &&
            re != null &&
            o(
              "PaymentLinkPreviewWithAmountFeature",
            ).isPaymentLinkPreviewWithAmountEnabled(L, E)
          ) {
            var oe;
            (n[40] !== C || n[41] !== re || n[42] !== A || n[43] !== X
              ? ((oe = d.jsx(r("WAWebPaymentLinkPreview.react"), {
                  title: A,
                  urlElement: X,
                  previewMetadata: re,
                  isLoading: C,
                })),
                (n[40] = C),
                (n[41] = re),
                (n[42] = A),
                (n[43] = X),
                (n[44] = oe))
              : (oe = n[44]),
              (j = oe));
            break e;
          }
          var ae;
          (n[45] !== F || n[46] !== M || n[47] !== w
            ? ((ae =
                F &&
                M != null &&
                w != null &&
                w > y &&
                o("WAWebMediaGatingUtils").shouldUseLargeHQPreviewInComposer()),
              (n[45] = F),
              (n[46] = M),
              (n[47] = w),
              (n[48] = ae))
            : (ae = n[48]),
            (V = ae),
            (z = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_ahwq",
              (e || (e = r("stylex")))([
                f.preview,
                F && f.noBorderRadius,
                F && f.compose,
                F &&
                  (M != null && V
                    ? f.composeWithHQMediaPreview
                    : f.composeWithSQMediaPreview),
                b === !0 ? f.boubbleOut : f.bubbleIn,
                G && f.status,
                G && q && f.statusImageShrink,
                D === "extended" && f.extended,
                q && f.highQualityLayout,
                H && !q && f.fullPreview,
                O && f.horizontalLayout,
                l,
              ]),
            )));
        }
        ((n[0] = l),
          (n[1] = s),
          (n[2] = c),
          (n[3] = O),
          (n[4] = p),
          (n[5] = F),
          (n[6] = W),
          (n[7] = q),
          (n[8] = C),
          (n[9] = b),
          (n[10] = L),
          (n[11] = E),
          (n[12] = k),
          (n[13] = D),
          (n[14] = M),
          (n[15] = w),
          (n[16] = A),
          (n[17] = U),
          (n[18] = V),
          (n[19] = H),
          (n[20] = G),
          (n[21] = z),
          (n[22] = j),
          (n[23] = K),
          (n[24] = Q),
          (n[25] = X));
      } else
        ((U = n[17]),
          (V = n[18]),
          (H = n[19]),
          (G = n[20]),
          (z = n[21]),
          (j = n[22]),
          (K = n[23]),
          (Q = n[24]),
          (X = n[25]));
      if (j !== Symbol.for("react.early_return_sentinel")) return j;
      var ie = z,
        le = C,
        se;
      n[49] !== U ||
      n[50] !== c ||
      n[51] !== F ||
      n[52] !== H ||
      n[53] !== q ||
      n[54] !== _ ||
      n[55] !== G ||
      n[56] !== le ||
      n[57] !== D ||
      n[58] !== x ||
      n[59] !== $ ||
      n[60] !== P ||
      n[61] !== M ||
      n[62] !== N ||
      n[63] !== w
        ? ((se = le
            ? d.jsx(r("WDSIconIcLink.react"), {
                testid: void 0,
                xstyle: [f.paddingAll24, f.placeholderImage],
                width: 32,
                height: 32,
              })
            : d.jsx(r("WAWebMediaLinkPreviewImage.react"), {
                thumbnail: x,
                thumbnailJpeg: $,
                thumbnailJpegHQ: M,
                thumbnailJpegDirectPath: P,
                thumbnailJpegHeight: N,
                thumbnailJpegWidth: w,
                isHighQualityLayout: q,
                displayType: c,
                isStatus: G,
                isFullPreview: H,
                theme: D,
                withoutDescription: U == null,
                isInvite:
                  c !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? !!_ : !1,
                isCompose: F,
              })),
          (n[49] = U),
          (n[50] = c),
          (n[51] = F),
          (n[52] = H),
          (n[53] = q),
          (n[54] = _),
          (n[55] = G),
          (n[56] = le),
          (n[57] = D),
          (n[58] = x),
          (n[59] = $),
          (n[60] = P),
          (n[61] = M),
          (n[62] = N),
          (n[63] = w),
          (n[64] = se))
        : (se = n[64]);
      var ue = se,
        ce = H && !q,
        de = p != null ? "link-description-" + String(p) : "link-description",
        me;
      n[65] !== U ||
      n[66] !== F ||
      n[67] !== V ||
      n[68] !== H ||
      n[69] !== q ||
      n[70] !== G ||
      n[71] !== ce ||
      n[72] !== de
        ? ((me = d.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
            useTextLimit: ce,
            isStatus: G,
            isFullPreview: H,
            isHighQualityLayout: q,
            isComposeHQPreview: V,
            isCompose: F,
            testid: void 0,
            children: U,
          })),
          (n[65] = U),
          (n[66] = F),
          (n[67] = V),
          (n[68] = H),
          (n[69] = q),
          (n[70] = G),
          (n[71] = ce),
          (n[72] = de),
          (n[73] = me))
        : (me = n[73]);
      var pe = me,
        _e = A != null && B && a != null ? a + ". " + A : A,
        fe;
      n[74] !== F
        ? ((fe = F ? { ":empty": { display: "none" } } : void 0),
          (n[74] = F),
          (n[75] = fe))
        : (fe = n[75]);
      var ge;
      n[76] !== c || n[77] !== ue || n[78] !== v || n[79] !== T
        ? ((ge = d.jsx(R, { star: T, kept: v, displayType: c, children: ue })),
          (n[76] = c),
          (n[77] = ue),
          (n[78] = v),
          (n[79] = T),
          (n[80] = ge))
        : (ge = n[80]);
      var he;
      n[81] !== F || n[82] !== V || n[83] !== H || n[84] !== q || n[85] !== G
        ? ((he = (e || (e = r("stylex"))).props(
            f.body,
            G && f.statusBody,
            H && f.fullPreviewBody,
            H && !q && f.fullPreviewNotHighQualityLayoutBody,
            F ? f.composeBody : f.notComposeBody,
            F && (V ? f.composeBodyHQ : f.composeBodyLQ),
          )),
          (n[81] = F),
          (n[82] = V),
          (n[83] = H),
          (n[84] = q),
          (n[85] = G),
          (n[86] = he))
        : (he = n[86]);
      var ye;
      n[87] !== B ||
      n[88] !== F ||
      n[89] !== G ||
      n[90] !== _e ||
      n[91] !== le ||
      n[92] !== K ||
      n[93] !== Q
        ? ((ye =
            !le &&
            d.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
              isBotPluginLink: B,
              isCompose: F,
              isStatus: G,
              title: _e,
              titleDir: K,
              titleDirMismatch: Q,
            })),
          (n[87] = B),
          (n[88] = F),
          (n[89] = G),
          (n[90] = _e),
          (n[91] = le),
          (n[92] = K),
          (n[93] = Q),
          (n[94] = ye))
        : (ye = n[94]);
      var Ce = !B && !le && pe,
        be;
      n[95] !== he || n[96] !== ye || n[97] !== Ce || n[98] !== X
        ? ((be = d.jsxs(
            "div",
            babelHelpers.extends({}, he, { children: [ye, Ce, X] }),
          )),
          (n[95] = he),
          (n[96] = ye),
          (n[97] = Ce),
          (n[98] = X),
          (n[99] = be))
        : (be = n[99]);
      var ve;
      n[100] !== le
        ? ((ve =
            le &&
            d.jsx("div", {
              className:
                "xm0bted x1ptvdk8 xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
            })),
          (n[100] = le),
          (n[101] = ve))
        : (ve = n[101]);
      var Se;
      return (
        n[102] !== ie ||
        n[103] !== I ||
        n[104] !== ge ||
        n[105] !== be ||
        n[106] !== ve ||
        n[107] !== fe
          ? ((Se = d.jsxs("div", {
              "data-testid": void 0,
              className: ie,
              style: fe,
              onClick: I,
              children: [ge, be, ve],
            })),
            (n[102] = ie),
            (n[103] = I),
            (n[104] = ge),
            (n[105] = be),
            (n[106] = ve),
            (n[107] = fe),
            (n[108] = Se))
          : (Se = n[108]),
        Se
      );
    }
    l.default = E;
  },
  226,
);
