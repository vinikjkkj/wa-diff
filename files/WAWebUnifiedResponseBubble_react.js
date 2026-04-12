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
      var t = e.content,
        n = e.contentType,
        o =
          n === "link"
            ? "contentExternalLink"
            : n === "citation_inline" || n === "citation_subtitle"
              ? "contentDeemphasized"
              : n === "modalTrigger"
                ? "contentActionEmphasized"
                : "contentDefault",
        a =
          n === "citation_inline"
            ? "Body3Emphasized"
            : n === "citation_subtitle"
              ? "Body3"
              : n === "modalTrigger"
                ? "Body2Emphasized"
                : "Body2",
        i = n === "citation_title" || n === "citation_subtitle" ? 1 : void 0;
      return u.jsx(r("WDSText.react"), {
        type: a,
        colorName: o,
        maxLines: i,
        xstyle: (n === "modalTrigger" || n === "citation_inline") && g.link,
        children: t,
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.children,
        n = e.tag,
        o =
          n === "h1"
            ? "LargeTitle1"
            : n === "h2"
              ? "LargeTitle2"
              : n === "h3"
                ? "Headline1"
                : n === "h4"
                  ? "Headline2"
                  : n === "h5"
                    ? "Body1Emphasized"
                    : n === "h6"
                      ? "Body1"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              n,
                          );
                        })();
      return u.jsx(r("WDSText.react"), {
        colorName: "contentDefault",
        type: o,
        children: t,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = 9 / 16,
      R = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
    function L(e) {
      var t = e.mediaUrl,
        n = f(null),
        r = n[0],
        a = n[1],
        i = { videoUrl: t, previewUrl: "" },
        l = r != null ? r : S,
        s = R / l;
      return u.jsx("div", {
        className:
          "xaejkm2 x1uuy6ko x1gfim23 xqfj769 x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
        style: { height: s + "px" },
        children: u.jsx(
          o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer,
          {
            type: o("WAWebPipConst").PlayerType.OG_FLOATER,
            ogVideoInfo: i,
            startTime: null,
            autoPlay: !0,
            noPip: !0,
            onAspectRatio: a,
          },
        ),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.mediaUrl;
      return u.jsx("div", {
        className:
          "xaejkm2 x1uuy6ko x1gfim23 xqfj769 x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
        children: u.jsx(r("WAWebImg.react"), {
          src: t,
          className: "x1lliihq xh8yej3 xt7dq6l",
        }),
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.imagineType,
        n = e.mediaUrl;
      return n == null
        ? u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.container,
            children: s._(/*BTDS*/ "No media found"),
          })
        : t === "ANIMATE"
          ? u.jsx(L, { mediaUrl: n })
          : u.jsx(E, { mediaUrl: n });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: g.container,
        children: s._(
          /*BTDS*/ "Part of this response isn't supported on this device yet. View the full response on your phone.",
        ),
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
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
      var t = e.alt,
        n = e.isThirdParty,
        o = e.url;
      return n === !0
        ? u.jsx(r("WDSIconIcLanguage.react"), { height: 36 })
        : u.jsx(r("WAWebImg.react"), {
            src: o,
            alt: t,
            className:
              "xt8t1vi x1xc408v x129tdwq x15urzxu xc9qbxq xl1xv1r x14qfxbe",
          });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.errorFallback,
        i = e.msg,
        l = e.unifiedResponse,
        c = i.unsafe();
      o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(c);
      var f = o("WAWebThemeContext").useIsDarkTheme(),
        g = o("WAWebFrontendMsgGetters").getDir(i),
        h = _(null);
      if (h.current == null) {
        var S = new (o("WAWebUnifiedResponseUtils").UnifiedResponseQPLLogger)();
        (S.markerStart({
          string: { component_name: "WAWebUnifiedResponseBubble" },
        }),
          (h.current = S));
      }
      m(function () {
        var e;
        (e = h.current) == null || e.markerEnd(2);
      }, []);
      var R = {
          nextButton: function (t) {
            return u.jsx(
              o("WAWebCarouselNavigationButton").CarouselNavigationButton,
              {
                buttonType: o("WAWebChevronButton.react").ButtonType.Next,
                displayType: o("WAWebChevronButton.react")
                  .ChevronButtonDisplayType.BotReelsPluginCarousel,
                onButtonClick: t,
              },
            );
          },
          prevButton: function (t) {
            return u.jsx(
              o("WAWebCarouselNavigationButton").CarouselNavigationButton,
              {
                buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
                displayType: o("WAWebChevronButton.react")
                  .ChevronButtonDisplayType.BotReelsPluginCarousel,
                onButtonClick: t,
              },
            );
          },
        },
        L = d(function (e) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            u.jsx(
              o("WAWebUnifiedResponseContentDrawerLoadable")
                .WAWebUnifiedResponseContentDrawerLoadable,
              { contentView: e },
            ),
          );
        }, []),
        E = {
          citationIconRenderers: {
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
          },
          headingNodeRenderer: function (t) {
            var e = t.children,
              n = t.tag;
            return u.jsx(v, { tag: n, children: e });
          },
          hScrollRenderers: R,
          imageNodeRenderer: function (t) {
            var e = t.alt,
              n = t.isThirdParty,
              r = t.url;
            return u.jsx($, { alt: e, isThirdParty: n, url: r });
          },
          imagineNodeRenderer: function (t) {
            var e = t.imagineType,
              n = t.mediaUrl;
            return u.jsx(k, { imagineType: e, mediaUrl: n });
          },
          contentViewRenderer: {
            contentTriggerTextValues: {
              citations: s._(/*BTDS*/ "See details"),
            },
            renderer: L,
          },
          postNodeRenderer: function (t) {
            return u.jsx(
              r("WAWebBotPostCard.react"),
              babelHelpers.extends({}, t),
            );
          },
          productItemCardNodeRenderer: function (t) {
            return u.jsx(
              r("WAWebBotShoppingItemCard.react"),
              babelHelpers.extends({}, t),
            );
          },
          foABloksNodeRenderer: o(
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
            : void 0,
          reelNodeRenderer: function (t) {
            var e = t.avatarUrl,
              n = t.creator,
              r = t.reelsUrl,
              a = t.thumbnailUrl;
            return u.jsx(
              o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer,
              {
                displayType:
                  o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                msg: c,
                reelItem: {
                  profileIconUrl: e,
                  thumbnailUrl: a,
                  title: n,
                  videoUrl: r,
                },
                theme: "bot_plugin_link",
              },
            );
          },
          textNodeRenderer: function (t) {
            var e = t.content,
              n = t.contentType;
            return u.jsx(b, { content: e, contentType: n });
          },
          progressStatusRenderer: {
            shimmerColor:
              "color-mix(in srgb, " +
              o("WDSVars.stylex").WDSVars["--WDS-content-default"] +
              " 15%, transparent)",
            textColor: o("WDSVars.stylex").WDSVars["--WDS-content-default"],
          },
          tableOverflowConfig: { overflowCellCount: 4, overflowCellSize: 150 },
          unsupportedTypeNodeRenderer: function () {
            return u.jsx(I, {});
          },
        },
        D = p(function () {
          return { plugins: { strong: o("MarkedMobileFlavorPlugin").strong } };
        }, []),
        P =
          c.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
          c.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER,
        N = c.botEditType && T.has(c.botEditType) ? "STREAMING" : null;
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: i,
        displayAuthor: t,
        displayType: n,
        children: u.jsx(r("WAWebMessageSpacerText.react"), {
          msg: c,
          theme: "unifiedResponse",
          children: u.jsx("div", {
            className: o("WAWebCopyPasteSelectable.react")
              .SELECTABLE_INPUT_CSS_CLASS,
            dir: g != null ? g : "auto",
            children: u.jsx(
              o("WAWebCometComposedTextV2URParserLoadable")
                .CometComposedTextV2URParserLoadable,
              {
                displayMode: f ? "dark" : "light",
                errorFallback: a,
                isStreaming: P,
                logging: { searchResultSourceMismatch: !0 },
                markedTokenizeOptions: D,
                xmsgGenAiUnifiedResponse: l,
                themeOverrides: { light: y, dark: C },
                streamingState: N,
                renderers: E,
              },
            ),
          }),
        }),
      });
    }
    ((P.displayName = P.name + " [from " + i.id + "]"),
      (l.WAWebUnifiedResponseBubble = P));
  },
  226,
);
