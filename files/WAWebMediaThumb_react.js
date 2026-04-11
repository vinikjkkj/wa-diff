__d(
  "WAWebMediaThumb.react",
  [
    "$InternalEnum",
    "WAWebCheckBox.react",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebKeepInChatIcon.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMediaData",
    "WAWebMediaThumbDuration.react",
    "WAWebMediaThumbIcon.react",
    "WAWebMediaThumbMediaImageThumb.react",
    "WAWebMediaThumbRenderStages.react",
    "WAWebMediaThumbSize.react",
    "WAWebMediaTypes",
    "WAWebMessageCaption.react",
    "WAWebMessageTooltip.react",
    "WAWebMessageUiUtils",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPinnedSmallIcon.react",
    "WAWebPopover.react",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "WAWebStarIcon.react",
    "WAWebTooltip.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWrapperDisplayTypeContext",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebIsPinnedMsg",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = { aspectRatio: "x10y9f9r", $$css: !0 },
      f = {
        mediaGalleryThumbnail: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        chatInfoDrawerThumbnail: {
          backgroundColor: "x1od0jb8",
          marginInlineEnd: "x1xegmmw",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        chatInfoDrawerThumbnailRefreshed: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        canvasComponent: {
          position: "x1n2onr6",
          width: "xa1il55",
          marginInlineEnd: "x1bryted",
          marginBottom: "x145uhy8",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          "@media (max-width: 1024px)_width": "x1hmdwey",
          "@media (max-width: 800px)_width": "x1gk22k6",
          $$css: !0,
        },
        canvasComponentRefreshed: {
          position: "x1n2onr6",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          flex: "x1brnrfz",
          boxSizing: "x9f619",
          display: "x78zum5",
          $$css: !0,
        },
        canvasComponentAspectRatio: function (t) {
          return [
            _,
            {
              "--x-aspectRatio":
                (t != null ? t : "1.3142") != null
                  ? t != null
                    ? t
                    : "1.3142"
                  : void 0,
            },
          ];
        },
        hideableSecondRow: {
          display: "x1s85apg",
          "@media (max-width: 1024px)_display": "x1axa3pm",
          "@media (max-width: 800px)_display": "xze2x15",
          $$css: !0,
        },
        viewerFlow: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x9whnou",
          minWidth: "xkzdno3",
          maxWidth: "x2cx08e",
          height: "x31r0a5",
          marginInlineEnd: "x1bryted",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          cursor: "x1ypdohk",
          opacity: "x1hc1fzr",
          transition: "x22zity",
          ":hover_outline": "x1tvyudi",
          $$css: !0,
        },
        viewerFlowTransparent: { opacity: "xz5rk10", $$css: !0 },
        active: {
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1whkhu0",
          borderInlineEndColor: "x3emv5x",
          borderBottomColor: "x1ydeqjr",
          borderInlineStartColor: "xyg86qh",
          transform: "x49wu3b",
          ":hover_outline": "x2j15wl",
          $$css: !0,
        },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      },
      g = {
        mediaHubTextContainer: {
          boxSizing: "x9f619",
          position: "x10l6tqk",
          width: "xh8yej3",
          bottom: "xbfrwjf",
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          paddingLeft: null,
          paddingRight: null,
          transition: "x1jaox4c",
          $$css: !0,
        },
        containerWithIcon: { transform: "xsasqlb", $$css: !0 },
        containerWithCaption: { transform: "x1qmromh", $$css: !0 },
        containerSlideUp: { transform: "x2jnzp2", $$css: !0 },
        canvasMediaHub: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          width: "x14atkfc",
          $$css: !0,
        },
        mediaHubText: { transition: "xcxita6", zIndex: "x1n327nk", $$css: !0 },
        mediaHubTextUp: {
          transition: "x18acrvh",
          opacity: "x1hc1fzr",
          $$css: !0,
        },
        mediaHubTextDown: { opacity: "xg01cxk", $$css: !0 },
        mediaHubSender: {
          verticalAlign: "xw8z9w8",
          zoom: "x94oj0r",
          $$css: !0,
        },
        mediaHubSenderClampParent: {
          width: "xh8yej3",
          minWidth: "xsft2sv",
          $$css: !0,
        },
        mediaHubSenderClamp: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          textWrap: "xebhuq6",
          $$css: !0,
        },
        iconContainer: { width: "xh8yej3", $$css: !0 },
      },
      h = n("$InternalEnum").Mirrored([
        "Loading",
        "Ready",
        "Error",
        "NeedsPoke",
        "NeedsUpload",
      ]),
      y = "viewerFlowTransparent",
      C = 500;
    function b(e) {
      var t = e.fullPreviewData,
        n = e.mediaStage,
        r = e.preview;
      switch (n) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
          return h.Ready;
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          return r != null || t != null ? h.Ready : h.Loading;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          return h.NeedsUpload;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
          return h.Loading;
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          return h.NeedsPoke;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          return h.Error;
      }
    }
    function v(t) {
      "use no forget";
      var n,
        a = t.msg,
        i = t.selectable,
        l = t.theme,
        s = t.active,
        c = t.imgRef,
        _ = t.containerRef,
        v = t.onMessageSelect,
        S = t.selected,
        R = S === void 0 ? !1 : S,
        L = t.onClick,
        E = t.onDragStart,
        k = t.preferPreview,
        I = t.hideableSecondRow,
        T = t.tabIndex,
        D = T === void 0 ? -1 : T,
        x = t.isRefreshed,
        $ = x === void 0 ? !1 : x,
        P = t.aspectRatio,
        N = t.shouldForceHover,
        M = N === void 0 ? !1 : N,
        w = t.shouldShowSize,
        A = w === void 0 ? !1 : w,
        F = t.highlightText,
        O = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        B = m(null),
        W = m(null),
        q = p(!1),
        U = q[0],
        V = q[1];
      o("useWAWebMsgValues").useMsgValues(a.id, [
        o("WAWebMsgGetters").getIsKept,
        o("WAWebMsgGetters").getStar,
      ]);
      var H = r("useWAWebIsPinnedMsg")(a.id),
        G = r("useWAWebIsKeyboardUser")(),
        z = G.isKeyboardUser;
      o("useWAWebListener").useListener(
        a.mediaData,
        ["change:preview", "change:mediaStage"],
        O,
      );
      var j = function () {
        a.mediaData.preview != null ||
          a.mediaData.fullPreviewData != null ||
          ((a.mediaData.type === r("WAWebMediaData").TYPE.IMAGE ||
            a.mediaData.type === r("WAWebMediaData").TYPE.VIDEO) &&
            a.downloadMedia({
              downloadEvenIfExpensive: !1,
              isUserInitiated: !1,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MEDIA_VIEWER,
              shouldSequenceDownload: l === "mediaHub",
            }));
      };
      (d(function () {
        return (
          c == null || c(B.current),
          _ == null || _(W.current),
          j(),
          function () {
            (c == null || c(null), _ == null || _(null));
          }
        );
      }, []),
        d(
          function () {
            (c == null || c(B.current), _ == null || _(W.current));
          },
          [c, _],
        ));
      var K = function (t) {
          v && v(a, !R, t);
        },
        Q = function (t) {
          U || V(!0);
        },
        X = function () {
          return t.showTooltip === !0 && l !== y;
        },
        Y = function (t) {
          U || (t.persist(), V(!0));
        },
        J = function (t) {
          U && V(!1);
        },
        Z = l === "mediaHub",
        ee = b(a.mediaData),
        te;
      if (i === !0 || (U && t.hoverEvent)) {
        var ne,
          re = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: K,
            checked: R,
            theme: o("WAWebCheckBox.react").CheckboxTheme.OUTLINE_WHITE,
            ariaLabel:
              (ne = o("WAWebMessageUiUtils").getMediaCheckBoxAriaLabel(
                i != null && i ? R : null,
              )) != null
                ? ne
                : void 0,
          });
        te = u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x10l6tqk x13vifvy x1n327nk x9f619 xh8yej3 x123j3cw xaso8d8",
              },
              1: {
                className:
                  "x10l6tqk x1n327nk x9f619 xh8yej3 x13fj5qh x1y0xqtl xexx8yu x1c1uobl x13vifvy",
              },
            }[!!Z << 0],
            {
              children: [
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {},
                      4: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xh8yej3 x1vqgdyp x1ypdohk x148ef17",
                      },
                      2: { className: "x1s85apg" },
                      6: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xh8yej3 x1vqgdyp x1ypdohk x148ef17 x1s85apg",
                      },
                      1: { className: "x47corl" },
                      5: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xh8yej3 x1vqgdyp x1ypdohk x148ef17 x47corl",
                      },
                      3: { className: "x1s85apg x47corl" },
                      7: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xh8yej3 x1vqgdyp x1ypdohk x148ef17 x1s85apg x47corl",
                      },
                    }[(!Z << 2) | (!!R << 1) | ((ee !== h.Ready) << 0)],
                    { onClick: t.onClick, tabIndex: D },
                  ),
                ),
                re,
              ],
            },
          ),
        );
      }
      var oe = (e || (e = r("stylex")))(
          $ ? f.canvasComponentRefreshed : f.canvasComponent,
          l !== "chatInfo" && f.mediaGalleryThumbnail,
          l === "chatInfo" &&
            ($
              ? f.chatInfoDrawerThumbnailRefreshed
              : f.chatInfoDrawerThumbnail),
          !!I && f.hideableSecondRow,
          (l === "viewerFlow" || l === "viewerFlowTransparent") && f.viewerFlow,
          l === "viewerFlowTransparent" && f.viewerFlowTransparent,
          !!s && f.active,
          z && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          Z && g.canvasMediaHub,
        ),
        ae = !!o("WAWebMsgGetters").getIsKept(a),
        ie = a.star
          ? u.jsx("div", {
              className: "x17t9dm2 x47corl",
              children: u.jsx(o("WAWebStarIcon.react").StarIcon, {
                width: 16,
                height: 15,
              }),
            })
          : null,
        le = ae
          ? u.jsx("div", {
              className: "x17t9dm2 x47corl",
              children: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
                width: 15.64,
                height: 14.67,
              }),
            })
          : null,
        se = H
          ? u.jsx("div", {
              className: "x17t9dm2 x47corl",
              children: u.jsx(o("WAWebPinnedSmallIcon.react").PinnedSmallIcon, {
                width: 15,
              }),
            })
          : null,
        ue = {
          paddingTop: (1 / ((n = t.aspectRatio) != null ? n : 1)) * 100 + "%",
        },
        ce = function (t) {
          (t === void 0 && (t = !1),
            a.downloadMedia({
              downloadEvenIfExpensive: t,
              isUserInitiated: !1,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MEDIA_VIEWER,
              shouldSequenceDownload: l === "mediaHub",
            }));
        },
        de;
      switch (ee) {
        case h.Loading:
          de = Z
            ? void 0
            : u.jsx(o("WAWebMediaThumbRenderStages.react").MediaThumbLoading, {
                mediaType: a.mediaData.type,
              });
          break;
        case h.NeedsPoke:
          de = u.jsx(
            o("WAWebMediaThumbRenderStages.react").MediaThumbNeedsPoke,
            {
              onClick: function () {
                return ce(!0);
              },
            },
          );
          break;
        case h.Error:
          de = u.jsx(o("WAWebMediaThumbRenderStages.react").MediaThumbError, {
            onClick: t.onClick,
            mediaType: a.mediaData.type,
          });
          break;
        case h.NeedsUpload:
        case h.Ready:
          de = null;
          break;
      }
      var me = o("WAWebMessageUiUtils").getMediaAriaLabel(a),
        pe = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: g.iconContainer,
          align: "center",
          children: [
            u.jsx(r("WAWebMediaThumbIcon.react"), {
              mediaData: a.mediaData,
              theme: "mediaHub",
            }),
            A
              ? u.jsx(r("WAWebMediaThumbSize.react"), {
                  msg: a,
                  theme: "mediaHub",
                })
              : u.jsx(r("WAWebMediaThumbDuration.react"), {
                  mediaData: a.mediaData,
                  selected: R,
                  theme: "mediaHub",
                }),
            a.star &&
              u.jsx("div", {
                className: "x17t9dm2 x47corl xvc5jky",
                children: u.jsx(o("WAWebStarIcon.react").StarIcon, {
                  width: 20,
                  height: 20,
                }),
              }),
            o("WAWebMsgGetters").getIsKept(a) &&
              u.jsx("div", {
                className: "x17t9dm2 x47corl xvc5jky",
                children: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
                  width: 15.64,
                  height: 14.67,
                }),
              }),
          ],
        }),
        _e = Z
          ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: [
                g.mediaHubTextContainer,
                a.caption != null && a.caption !== "" && g.containerWithCaption,
                (a.mediaData.type === r("WAWebMediaData").TYPE.AUDIO ||
                  a.mediaData.type === r("WAWebMediaData").TYPE.VIDEO ||
                  a.mediaData.isGif ||
                  a.star) &&
                  g.containerWithIcon,
                (U || M) && g.containerSlideUp,
              ],
              children: [
                pe,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "end",
                  xstyle: g.mediaHubSenderClampParent,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    colorName: "persistentAlwaysWhite",
                    children: u.jsx(o("WAWebName.react").ContactName, {
                      contact: a.senderObj,
                      emojiXstyle: g.mediaHubSender,
                      xstyle: g.mediaHubSenderClamp,
                      highlightText: F,
                    }),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "end",
                  xstyle: [
                    f.marginEnd8,
                    g.mediaHubText,
                    g.mediaHubTextDown,
                    (U || M) && g.mediaHubTextUp,
                  ],
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    maxLines: 2,
                    colorName: "persistentAlwaysWhite",
                    children: u.jsx(
                      r("WAWebWrapperDisplayTypeContext").Provider,
                      {
                        value: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                        children: u.jsx(r("WAWebMessageCaption.react"), {
                          overflowVisible: !0,
                          msg: a.unsafe(),
                          trusted: !0,
                          spacer: !1,
                          testId: "image-caption",
                          shouldFormatLinks: !1,
                          highlightText: F,
                        }),
                      },
                    ),
                  }),
                }),
              ],
            })
          : u.jsxs(u.Fragment, {
              children: [
                u.jsx(r("WAWebMediaThumbIcon.react"), {
                  mediaData: a.mediaData,
                }),
                u.jsx(r("WAWebMediaThumbDuration.react"), {
                  mediaData: a.mediaData,
                  selected: R,
                }),
                u.jsxs("div", {
                  className: "x78zum5 x10l6tqk x1ro0b6g xy1j3rs",
                  children: [ie, le, se],
                }),
              ],
            });
      return u.jsx(r("WAWebPrivacyBlurWrapper.react"), {
        containerRef: W,
        category: o("WAWebPrivacyModeBlurConfig").BlurCategory.Media,
        children: u.jsxs(
          "div",
          babelHelpers.extends(
            { role: "listitem", "aria-label": me, tabIndex: D, ref: W },
            e.props(f.canvasComponentAspectRatio(P)),
            {
              className: oe,
              "data-testid": void 0,
              onKeyDown: function (t) {
                var e = t.target || t.originalTarget;
                r("WAWebKeyboardIsKeyActivation")(t) && W.current === e && L();
              },
              onMouseOver: Q,
              onMouseEnter: Y,
              onMouseLeave: J,
              children: [
                te,
                u.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x18p79ws xc28ydg",
                      },
                      4: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x18p79ws",
                      },
                      2: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x18p79ws xc28ydg xvxx97b x1028phh x1es37l9 xq7a5ml",
                      },
                      6: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x18p79ws xvxx97b x1028phh x1es37l9 xq7a5ml",
                      },
                      1: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x18p79ws xrn83i7",
                      },
                      5: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x18p79ws xrn83i7",
                      },
                      3: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x18p79ws xvxx97b x1028phh x1es37l9 xq7a5ml xrn83i7",
                      },
                      7: {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl x1whkhu0 x3emv5x x1ydeqjr xyg86qh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x18p79ws xvxx97b x1028phh x1es37l9 xq7a5ml xrn83i7",
                      },
                    }[
                      (!!$ << 2) | (!!(R && !Z) << 1) | (!!(i === !0 && Z) << 0)
                    ],
                    {
                      children: [
                        Z &&
                          u.jsxs(u.Fragment, {
                            children: [
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  {
                                    0: {
                                      className:
                                        "x10l6tqk x4wrhlh x13vifvy xtijo5x x1ey2m1c x1o0tod xg01cxk xzdg38j",
                                    },
                                    1: {
                                      className:
                                        "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xzdg38j x4wrhlh x1hc1fzr",
                                    },
                                  }[!!(U || M) << 0],
                                ),
                              ),
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  {
                                    0: {
                                      className:
                                        "x10l6tqk x1ey2m1c x3vxpfx x39lw6i xh8yej3 x131p8rn x1jaox4c",
                                    },
                                    1: {
                                      className:
                                        "x10l6tqk x1ey2m1c x3vxpfx x39lw6i xh8yej3 x1jaox4c x2jnzp2",
                                    },
                                  }[
                                    !!(
                                      (U || M) &&
                                      a.caption != null &&
                                      a.caption !== ""
                                    ) << 0
                                  ],
                                ),
                              ),
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  {
                                    0: {
                                      className:
                                        "xg01cxk x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1oc8mnn xzdg38j",
                                    },
                                    1: {
                                      className:
                                        "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1oc8mnn xzdg38j x1hc1fzr",
                                    },
                                  }[!!(U || M) << 0],
                                ),
                              ),
                            ],
                          }),
                        _e,
                      ],
                    },
                  ),
                ),
                u.jsx(r("WAWebMessageTooltip.react"), {
                  isEnabled: Z,
                  msg: a,
                  children: u.jsx(r("WAWebMediaThumbMediaImageThumb.react"), {
                    tabIndex: -1,
                    downloadMedia: ce,
                    onClick: L,
                    onDragStart: E,
                    preferPreview: k,
                    ref: B,
                    msg: a,
                    isRefreshed: $,
                  }),
                }),
                X() === !0 &&
                  u.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                    targetRef: W,
                    alignment: o("WAWebPopover.react").PopoverAlignment.Center,
                    position: o("WAWebPopover.react").PopoverPosition.Top,
                    openingDelay: C,
                    testid: void 0,
                    children: o(
                      "WAWebFrontendContactGetters",
                    ).getFormattedShortName(a.senderObj),
                  }),
                de,
                u.jsx("div", { style: ue }),
              ],
            },
          ),
        ),
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
