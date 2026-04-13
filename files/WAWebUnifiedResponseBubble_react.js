__d(
  "WAWebUnifiedResponseBubble.react",
  [
    "fbt",
    "MarkedMobileFlavorPlugin",
    "WAWebBloksEntryPointLoadable",
    "WAWebBotPostCard.react",
    "WAWebBotShoppingItemCard.react",
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebCometComposedTextV2URParserLoadable",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebImg.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMessageCropping",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebPipConst",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebThemeContext",
    "WAWebUnifiedResponseContentDrawerLoadable",
    "WAWebUnifiedResponseUtils",
    "WAWebUseBotMessageUpdateScrolling",
    "WDSIconIcLanguage.react",
    "WDSIconWdsIcLogoFacebookFill.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoThreads.react",
    "WDSInteractionTokens.stylex",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useLayoutEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        container: {
          borderStartStartRadius: "xbjudin",
          borderStartEndRadius: "xnlwouz",
          borderEndEndRadius: "xpp8er5",
          borderEndStartRadius: "xs9wviy",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          color: "xhslqc4",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        link: {
          textDecoration: "x1hl2dhg",
          ":hover_textDecoration": "xt0b8zv",
          $$css: !0,
        },
      },
      h = {
        citationBackgroundColor:
          o("WDSVars.stylex").WDSColors["--WDS-surface-elevated-emphasized"],
        citationLinkListHoverBackgroundColor:
          "rgba(" +
          o("WDSVars.stylex").WDSColors["--WDS-surface-highlight-RGB"] +
          ", " +
          o("WDSInteractionTokens.stylex").WDSInteractionTokens
            .hoveredStateLayerOpacity +
          ")",
        citationListLinkBorderRadius: o("WDSVars.stylex").WDSVars.spacingSingle,
        citationListLinkPadding: o("WDSVars.stylex").WDSVars.spacingDouble,
        dividerColor: o("WDSVars.stylex").WDSColors["--WDS-lines-divider"],
        tableBorderColor: o("WDSVars.stylex").WDSVars["--WDS-lines-divider"],
        tableCellPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingInlineStart: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingTop: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableContainerBorderRadius:
          o("WDSVars.stylex").WDSVars.borderRadiusSingle,
        tableHeaderBackgroundColor:
          o("WDSVars.stylex").WDSVars["--WDS-surface-emphasized"],
        tableHeaderPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus,
        tableHeaderPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableHeaderPaddingInlineStart:
          o("WDSVars.stylex").WDSVars.spacingSingle,
        tableHeaderPaddingTop: o("WDSVars.stylex").WDSVars.spacingSinglePlus,
      },
      y = { x73z65k: "x1lii0bd x73z65k", $$css: !0 },
      C = { x73z65k: "x1lii0bd x73z65k", $$css: !0 };
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.content,
        a = e.contentType,
        i =
          a === "link"
            ? "contentExternalLink"
            : a === "citation_inline" || a === "citation_subtitle"
              ? "contentDeemphasized"
              : a === "modalTrigger"
                ? "contentActionEmphasized"
                : "contentDefault",
        l =
          a === "citation_inline"
            ? "Body3Emphasized"
            : a === "citation_subtitle"
              ? "Body3"
              : a === "modalTrigger"
                ? "Body2Emphasized"
                : "Body2",
        s = a === "citation_title" || a === "citation_subtitle" ? 1 : void 0,
        c = (a === "modalTrigger" || a === "citation_inline") && g.link,
        d;
      return (
        t[0] !== i || t[1] !== n || t[2] !== s || t[3] !== c || t[4] !== l
          ? ((d = u.jsx(r("WDSText.react"), {
              type: l,
              colorName: i,
              maxLines: s,
              xstyle: c,
              children: n,
            })),
            (t[0] = i),
            (t[1] = n),
            (t[2] = s),
            (t[3] = c),
            (t[4] = l),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = e.tag,
        i;
      t[0] !== a
        ? ((i =
            a === "h1"
              ? "LargeTitle1"
              : a === "h2"
                ? "LargeTitle2"
                : a === "h3"
                  ? "Headline1"
                  : a === "h4"
                    ? "Headline2"
                    : a === "h5"
                      ? "Body1Emphasized"
                      : a === "h6"
                        ? "Body1"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                a,
                            );
                          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      return (
        t[2] !== n || t[3] !== l
          ? ((s = u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              type: l,
              children: n,
            })),
            (t[2] = n),
            (t[3] = l),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    var S = 9 / 16,
      R = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
    function L(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.mediaUrl,
        r = f(null),
        a = r[0],
        i = r[1],
        l;
      t[0] !== n
        ? ((l = { videoUrl: n, previewUrl: "" }), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var s = l,
        c = a != null ? a : S,
        d = R / c,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className:
              "xaejkm2 x1uuy6ko x1gfim23 xqfj769 x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
          }),
          (t[2] = m))
        : (m = t[2]);
      var p = d + "px",
        _;
      t[3] !== p ? ((_ = { height: p }), (t[3] = p), (t[4] = _)) : (_ = t[4]);
      var g;
      t[5] !== s
        ? ((g = u.jsx(
            o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer,
            {
              type: o("WAWebPipConst").PlayerType.OG_FLOATER,
              ogVideoInfo: s,
              startTime: null,
              autoPlay: !0,
              noPip: !0,
              onAspectRatio: i,
            },
          )),
          (t[5] = s),
          (t[6] = g))
        : (g = t[6]);
      var h;
      return (
        t[7] !== _ || t[8] !== g
          ? ((h = u.jsx(
              "div",
              babelHelpers.extends({}, m, { style: _, children: g }),
            )),
            (t[7] = _),
            (t[8] = g),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.mediaUrl,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "xaejkm2 x1uuy6ko x1gfim23 xqfj769 x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x1lliihq xh8yej3 xt7dq6l"), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n
          ? ((l = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: u.jsx(r("WAWebImg.react"), { src: n, className: i }),
              }),
            )),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.imagineType,
        r = e.mediaUrl;
      if (r == null) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: g.container,
                children: s._(/*BTDS*/ "No media found"),
              })),
              (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      if (n === "ANIMATE") {
        var i;
        return (
          t[1] !== r
            ? ((i = u.jsx(L, { mediaUrl: r })), (t[1] = r), (t[2] = i))
            : (i = t[2]),
          i
        );
      }
      var l;
      return (
        t[3] !== r
          ? ((l = u.jsx(E, { mediaUrl: r })), (t[3] = r), (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function I() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: g.container,
              children: s._(
                /*BTDS*/ "Part of this response isn't supported on this device yet. View the full response on your phone.",
              ),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var T = new Set([
        o("WAWebBotTypes").BotMsgEditType.FIRST,
        o("WAWebBotTypes").BotMsgEditType.INNER,
        o("WAWebBotTypes").BotMsgEditType.LAST,
      ]),
      D = { icon: { color: "xhslqc4", $$css: !0 } },
      x = {
        height: 12,
        iconXstyle: D.icon,
        viewBox: { x: 0, y: 0, width: 24, height: 24 },
        width: 12,
      };
    function $(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.alt,
        a = e.isThirdParty,
        i = e.url;
      if (a === !0) {
        var l;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = u.jsx(r("WDSIconIcLanguage.react"), { height: 36 })),
              (t[0] = l))
            : (l = t[0]),
          l
        );
      }
      var s;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = "xt8t1vi x1xc408v x129tdwq x15urzxu xc9qbxq xl1xv1r x14qfxbe"),
          (t[1] = s))
        : (s = t[1]);
      var c;
      return (
        t[2] !== n || t[3] !== i
          ? ((c = u.jsx(r("WAWebImg.react"), { src: i, alt: n, className: s })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.errorFallback,
        l = e.msg,
        c = e.unifiedResponse,
        d;
      t[0] !== l ? ((d = l.unsafe()), (t[0] = l), (t[1] = d)) : (d = t[1]);
      var p = d;
      o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(p);
      var f = o("WAWebThemeContext").useIsDarkTheme(),
        g;
      t[2] !== l
        ? ((g = o("WAWebFrontendMsgGetters").getDir(l)), (t[2] = l), (t[3] = g))
        : (g = t[3]);
      var h = g,
        b = _(null);
      if (b.current == null) {
        var v;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = new (o(
              "WAWebUnifiedResponseUtils",
            ).UnifiedResponseQPLLogger)()),
            v.markerStart({
              string: { component_name: "WAWebUnifiedResponseBubble" },
            }),
            (t[4] = v))
          : (v = t[4]),
          (b.current = v));
      }
      var S, R;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            var e;
            (e = b.current) == null || e.markerEnd(2);
          }),
          (R = []),
          (t[5] = S),
          (t[6] = R))
        : ((S = t[5]), (R = t[6])),
        m(S, R));
      var L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { nextButton: U, prevButton: q }), (t[7] = L))
        : (L = t[7]);
      var E = L,
        k = W,
        I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            facebookIcon: u.jsx(
              r("WDSIconWdsIcLogoFacebookFill.react"),
              babelHelpers.extends({}, x),
            ),
            instagramIcon: u.jsx(
              r("WDSIconWdsIcLogoInstagram.react"),
              babelHelpers.extends({}, x),
            ),
            threadsIcon: u.jsx(
              r("WDSIconWdsIcLogoThreads.react"),
              babelHelpers.extends({}, x),
            ),
          }),
          (t[8] = I))
        : (I = t[8]);
      var D;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = {
            contentTriggerTextValues: {
              citations: s._(/*BTDS*/ "See details"),
            },
            renderer: k,
          }),
          (t[9] = D))
        : (D = t[9]);
      var $;
      t[10] !== f
        ? (($ = o(
            "WAWebBotUnifiedResponseGating",
          ).isFoABloksNodeRendererEnabled()
            ? function (e) {
                var t = e.data,
                  n = e.type,
                  r = e.uuid;
                return u.jsx(
                  o("WAWebBloksEntryPointLoadable")
                    .WAWebBloksEntryPointLoadable,
                  {
                    componentData: t,
                    componentType: n,
                    theme: f ? "dark" : "light",
                    uuid: r,
                  },
                );
              }
            : void 0),
          (t[10] = f),
          (t[11] = $))
        : ($ = t[11]);
      var P;
      t[12] !== p
        ? ((P = function (t) {
            var e = t.avatarUrl,
              n = t.creator,
              r = t.reelsUrl,
              a = t.thumbnailUrl;
            return u.jsx(
              o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer,
              {
                displayType:
                  o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                msg: p,
                reelItem: {
                  profileIconUrl: e,
                  thumbnailUrl: a,
                  title: n,
                  videoUrl: r,
                },
                theme: "bot_plugin_link",
              },
            );
          }),
          (t[12] = p),
          (t[13] = P))
        : (P = t[13]);
      var V, H;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = {
            shimmerColor:
              "color-mix(in srgb, " +
              o("WDSVars.stylex").WDSVars["--WDS-content-default"] +
              " 15%, transparent)",
            textColor: o("WDSVars.stylex").WDSVars["--WDS-content-default"],
          }),
          (H = { overflowCellCount: 4, overflowCellSize: 150 }),
          (t[14] = V),
          (t[15] = H))
        : ((V = t[14]), (H = t[15]));
      var G;
      t[16] !== $ || t[17] !== P
        ? ((G = {
            citationIconRenderers: I,
            headingNodeRenderer: B,
            hScrollRenderers: E,
            imageNodeRenderer: O,
            imagineNodeRenderer: F,
            contentViewRenderer: D,
            postNodeRenderer: A,
            productItemCardNodeRenderer: w,
            foABloksNodeRenderer: $,
            reelNodeRenderer: P,
            textNodeRenderer: M,
            progressStatusRenderer: V,
            tableOverflowConfig: H,
            unsupportedTypeNodeRenderer: N,
          }),
          (t[16] = $),
          (t[17] = P),
          (t[18] = G))
        : (G = t[18]);
      var z = G,
        j;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = { plugins: { strong: o("MarkedMobileFlavorPlugin").strong } }),
          (t[19] = j))
        : (j = t[19]);
      var K = j,
        Q =
          p.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
          p.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER,
        X = p.botEditType && T.has(p.botEditType) ? "STREAMING" : null,
        Y = h != null ? h : "auto",
        J = f ? "dark" : "light",
        Z;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { searchResultSourceMismatch: !0 }), (t[20] = Z))
        : (Z = t[20]);
      var ee;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { light: y, dark: C }), (t[21] = ee))
        : (ee = t[21]);
      var te;
      t[22] !== i ||
      t[23] !== Q ||
      t[24] !== z ||
      t[25] !== X ||
      t[26] !== J ||
      t[27] !== c
        ? ((te = u.jsx(
            o("WAWebCometComposedTextV2URParserLoadable")
              .CometComposedTextV2URParserLoadable,
            {
              displayMode: J,
              errorFallback: i,
              isStreaming: Q,
              logging: Z,
              markedTokenizeOptions: K,
              xmsgGenAiUnifiedResponse: c,
              themeOverrides: ee,
              streamingState: X,
              renderers: z,
            },
          )),
          (t[22] = i),
          (t[23] = Q),
          (t[24] = z),
          (t[25] = X),
          (t[26] = J),
          (t[27] = c),
          (t[28] = te))
        : (te = t[28]);
      var ne;
      t[29] !== Y || t[30] !== te
        ? ((ne = u.jsx("div", {
            className: o("WAWebCopyPasteSelectable.react")
              .SELECTABLE_INPUT_CSS_CLASS,
            dir: Y,
            children: te,
          })),
          (t[29] = Y),
          (t[30] = te),
          (t[31] = ne))
        : (ne = t[31]);
      var re;
      t[32] !== p || t[33] !== ne
        ? ((re = u.jsx(r("WAWebMessageSpacerText.react"), {
            msg: p,
            theme: "unifiedResponse",
            children: ne,
          })),
          (t[32] = p),
          (t[33] = ne),
          (t[34] = re))
        : (re = t[34]);
      var oe;
      return (
        t[35] !== n || t[36] !== a || t[37] !== l || t[38] !== re
          ? ((oe = u.jsx(r("WAWebMessageTextBubble.react"), {
              msg: l,
              displayAuthor: n,
              displayType: a,
              children: re,
            })),
            (t[35] = n),
            (t[36] = a),
            (t[37] = l),
            (t[38] = re),
            (t[39] = oe))
          : (oe = t[39]),
        oe
      );
    }
    function N() {
      return u.jsx(I, {});
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      var t = e.content,
        n = e.contentType;
      return u.jsx(b, { content: t, contentType: n });
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      return u.jsx(
        r("WAWebBotShoppingItemCard.react"),
        babelHelpers.extends({}, e),
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      return u.jsx(r("WAWebBotPostCard.react"), babelHelpers.extends({}, e));
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      var t = e.imagineType,
        n = e.mediaUrl;
      return u.jsx(k, { imagineType: t, mediaUrl: n });
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      var t = e.alt,
        n = e.isThirdParty,
        r = e.url;
      return u.jsx($, { alt: t, isThirdParty: n, url: r });
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
      var t = e.children,
        n = e.tag;
      return u.jsx(v, { tag: n, children: t });
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W(e) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        u.jsx(
          o("WAWebUnifiedResponseContentDrawerLoadable")
            .WAWebUnifiedResponseContentDrawerLoadable,
          { contentView: e },
        ),
      );
    }
    function q(e) {
      return u.jsx(
        o("WAWebCarouselNavigationButton").CarouselNavigationButton,
        {
          buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
          displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType
            .BotReelsPluginCarousel,
          onButtonClick: e,
        },
      );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U(e) {
      return u.jsx(
        o("WAWebCarouselNavigationButton").CarouselNavigationButton,
        {
          buttonType: o("WAWebChevronButton.react").ButtonType.Next,
          displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType
            .BotReelsPluginCarousel,
          onButtonClick: e,
        },
      );
    }
    ((U.displayName = U.name + " [from " + i.id + "]"),
      (l.WAWebUnifiedResponseBubble = P));
  },
  226,
);
