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
      var t = e.children,
        n = e.displayType,
        r = e.kept,
        a = e.star;
      if (n !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) return t;
      var i = [];
      return (
        a === !0 && i.push([o("WAWebStarIcon.react").StarIcon, 16, 15]),
        r === !0 &&
          i.push([o("WAWebKeepInChatIcon.react").KeepInChatIcon, 15.64, 14.67]),
        d.jsxs("div", {
          "data-testid": void 0,
          className:
            "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1280gxy",
          children: [
            t,
            i.length > 0 &&
              d.jsx("div", {
                className: "x78zum5 x10l6tqk xmnqija xy1j3rs",
                children: i.map(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = e[2];
                  return d.jsx(
                    t,
                    { xstyle: f.icon, width: n, height: r },
                    t.name,
                  );
                }),
              }),
          ],
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(t) {
      var n = t.botPluginReferenceIndex,
        a = t.botReelPluginThumbnailData,
        i = t.compose,
        l = i === void 0 ? !1 : i,
        s = t.containerXstyle,
        c = t.description,
        m = t.displayType,
        p = t.horizontalLayout,
        _ = p === void 0 ? !1 : p,
        C = t.inviteGrpType,
        b = t.isInvite,
        v = t.isLoading,
        L = t.isSentByMe,
        E = t.kept,
        k = t.linkPreviewData,
        I = t.links,
        T = t.matchedText,
        D = t.onClick,
        x = t.star,
        $ = t.theme,
        P = t.thumbnail,
        N = t.thumbnailJpeg,
        M = t.thumbnailJpegDirectPath,
        w = t.thumbnailJpegHeight,
        A = t.thumbnailJpegHQ,
        F = t.thumbnailJpegWidth,
        O = t.title,
        B = $ === "bot_plugin_link",
        W = m === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        q = ($ === "high-quality" || $ === "high-quality-extended") && !W,
        U = !l && !W && S(T),
        V;
      if (o("WAWebNewsletterApiParse").isNewsletterInviteCode(T))
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
          ? o("WAWebABProps").getABPropConfigValue(
              "channels_invite_link_preview_improvement_enabled",
            )
            ? (V = c)
            : (V = u._(/*BTDS*/ "Channel invite link"))
          : (V = null);
      else if (C != null) {
        var H;
        (C === o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
          typeof c == "string" &&
          (H = c),
          (V = o("WAWebLinkPreviewGroupUtils").getInviteLinkDescription(C, H)));
      } else V = c;
      var G = g(O),
        z = h(G),
        j = m === o("WAWebDisplayType").DISPLAY_TYPE.STATUS,
        K = $ === "support_citations_link",
        Q =
          T != null && T !== ""
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
                  }[(!!j << 2) | (!!l << 1) | (!!K << 0)],
                  {
                    children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: T,
                      direction: G,
                      dirMismatch: z,
                    }),
                  },
                ),
              )
            : null,
        X = k == null ? void 0 : k.previewMetadata;
      if (
        l &&
        X != null &&
        o(
          "PaymentLinkPreviewWithAmountFeature",
        ).isPaymentLinkPreviewWithAmountEnabled(k, I)
      )
        return d.jsx(r("WAWebPaymentLinkPreview.react"), {
          title: O,
          urlElement: Q,
          previewMetadata: X,
          isLoading: v,
        });
      var Y =
          l &&
          A != null &&
          F != null &&
          F > y &&
          o("WAWebMediaGatingUtils").shouldUseLargeHQPreviewInComposer(),
        J = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ahwq",
          (e || (e = r("stylex")))([
            f.preview,
            l && f.noBorderRadius,
            l && f.compose,
            l &&
              (A != null && Y
                ? f.composeWithHQMediaPreview
                : f.composeWithSQMediaPreview),
            L === !0 ? f.boubbleOut : f.bubbleIn,
            j && f.status,
            j && q && f.statusImageShrink,
            $ === "extended" && f.extended,
            q && f.highQualityLayout,
            U && !q && f.fullPreview,
            _ && f.horizontalLayout,
            s,
          ]),
        ),
        Z = v,
        ee = Z
          ? d.jsx(r("WDSIconIcLink.react"), {
              testid: void 0,
              xstyle: [f.paddingAll24, f.placeholderImage],
              width: 32,
              height: 32,
            })
          : d.jsx(r("WAWebMediaLinkPreviewImage.react"), {
              thumbnail: P,
              thumbnailJpeg: N,
              thumbnailJpegHQ: A,
              thumbnailJpegDirectPath: M,
              thumbnailJpegHeight: w,
              thumbnailJpegWidth: F,
              isHighQualityLayout: q,
              displayType: m,
              isStatus: j,
              isFullPreview: U,
              theme: $,
              withoutDescription: V == null,
              isInvite:
                m !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? !!b : !1,
              isCompose: l,
            }),
        te = d.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
          useTextLimit: U && !q,
          isStatus: j,
          isFullPreview: U,
          isHighQualityLayout: q,
          isComposeHQPreview: Y,
          isCompose: l,
          testid: void 0,
          children: V,
        }),
        ne = O != null && B && n != null ? n + ". " + O : O;
      return d.jsxs("div", {
        "data-testid": void 0,
        className: J,
        style: l ? { ":empty": { display: "none" } } : void 0,
        onClick: D,
        children: [
          d.jsx(R, { star: x, kept: E, displayType: m, children: ee }),
          d.jsxs(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                f.body,
                j && f.statusBody,
                U && f.fullPreviewBody,
                U && !q && f.fullPreviewNotHighQualityLayoutBody,
                l ? f.composeBody : f.notComposeBody,
                l && (Y ? f.composeBodyHQ : f.composeBodyLQ),
              ),
              {
                children: [
                  !Z &&
                    d.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
                      isBotPluginLink: B,
                      isCompose: l,
                      isStatus: j,
                      title: ne,
                      titleDir: G,
                      titleDirMismatch: z,
                    }),
                  !B && !Z && te,
                  Q,
                ],
              },
            ),
          ),
          Z &&
            d.jsx("div", {
              className:
                "xm0bted x1ptvdk8 xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
            }),
        ],
      });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  226,
);
