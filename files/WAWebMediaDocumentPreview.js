__d(
  "WAWebMediaDocumentPreview",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDocumentUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaThumbnail.react",
    "WAWebMediaTimeLeftEta.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageUiUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgVideoIcon.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebDocumentMediaType",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        textContainerPadding: { paddingInlineEnd: "xl3akx1", $$css: !0 },
        container: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x1qjc9v5",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x1heor9g",
          textAlign: "x16tdsg8",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          $$css: !0,
        },
        fixedTextHeight: { height: "xdiz9cm", $$css: !0 },
        text: {
          position: "x1n2onr6",
          top: "x1qiirwl",
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          marginInlineEnd: "x1sa5p1d",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
        textRTL: { textAlign: "x1hr2gdg", $$css: !0 },
        deepContainerContent: {
          paddingTop: "x1d0ri9u",
          paddingInlineEnd: "xl3akx1",
          paddingBottom: "x1ug4tga",
          paddingInlineStart: "x11ahuha",
          position: "x1n2onr6",
          $$css: !0,
        },
        embeddedContent: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          marginBottom: "xz62fqu",
          position: "x1n2onr6",
          $$css: !0,
        },
        metaValue: {
          display: "x1rg5ohu",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          ":last-child_display": "xwcf1sq",
          $$css: !0,
        },
        deepContainer: { cursor: "xmper1u", $$css: !0 },
        mediaThumbVideoIcon: {
          position: "x10l6tqk",
          bottom: "xy1j3rs",
          insetInlineStart: "xrr41r3",
          left: null,
          right: null,
          color: "x17t9dm2",
          $$css: !0,
        },
      };
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx("span", {
              className:
                "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6",
              children: "\u2022",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.size;
      if (n == null || n <= 0) return null;
      var r;
      t[0] !== n
        ? ((r = o("WAWebL10nFilesize").getL10nFilesize(n)),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends({}, i, { title: a, children: a }),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(_, {})), (t[5] = s))
        : (s = t[5]);
      var c;
      return (
        t[6] !== l
          ? ((c = u.jsxs(u.Fragment, { children: [l, s] })),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.count;
      if (n == null || n <= 0) return null;
      var r;
      t[0] !== n
        ? ((r = s._(/*BTDS*/ '_j{"*":"{count} pages","_1":"1 page"}', [
            s._plural(n, "count"),
          ])),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends({}, i, { title: a, children: a }),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var c;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(_, {})), (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== l
          ? ((d = u.jsxs(u.Fragment, { children: [l, c] })),
            (t[6] = l),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.ext;
      if (n == null) return null;
      var r;
      t[0] !== n ? ((r = n.toUpperCase()), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends(
              { "data-meta-key": "type", "data-testid": void 0 },
              i,
              { title: a, children: a },
            ),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(_, {})), (t[5] = s))
        : (s = t[5]);
      var c;
      return (
        t[6] !== l
          ? ((c = u.jsxs(u.Fragment, { children: [l, s] })),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function y(e) {
      var t,
        n,
        a,
        i = e.displayType,
        l = e.embedded,
        c = l === void 0 ? !1 : l,
        y = e.msg,
        C = e.ref,
        b = e.showMessageMeta,
        v = b === void 0 ? !1 : b,
        S = o("WAWebMsgModelPropUtils").isTrusted(y.unsafe()),
        R = m(null),
        L = o("useWAWebMsgValues").useMsgValues(y.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getIsFromTemplate,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getSubtype,
          o("WAWebMsgGetters").getType,
          o("WAWebFrontendMsgGetters").getMediaData,
          o("WAWebMsgGetters").getIsDynamicReplyButtonsMsg,
        ]),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[5],
        $ = L[6],
        P = L[7],
        N = L[8],
        M = L[9],
        w = L[10],
        A = o("useWAWebModelValues").useModelValues(y.mediaData, [
          "mediaStage",
          "filename",
          "pageCount",
          "size",
          "mimetype",
          "preview",
          "fullPreviewData",
          "loadedSize",
          "filehash",
        ]),
        F = r("useWAWebDocumentMediaType")({
          mimetype: A.mimetype,
          filename: A.filename,
        }),
        O = !!((T || w) && k),
        B = O
          ? null
          : u.jsxs("div", {
              className:
                "xx3o462 x1ncwhqj xyqdw3p xyri2b xg8j3zb x1c1uobl x152skdk x1bvqhpb xt1z7ec x1yp9nv9 x186kree x1y04bub x1duis28",
              children: [
                o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(A.mediaStage)
                  ? u.jsx(r("WAWebMediaTimeLeftEta.react"), {
                      size: A.size,
                      loadedSize: A.loadedSize,
                      sampling: 3,
                      xstyle: p.metaValue,
                      children: u.jsx(_, {}),
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(g, { count: A.pageCount }),
                        u.jsx(h, { ext: F.ext }),
                      ],
                    }),
                u.jsx(f, { size: A.size }),
              ],
            });
      d(function () {
        if (!A.fullPreviewData) {
          var e = o("WAWebFrontendMsgGetters").getChat(y.unsafe()),
            t =
              (e == null ? void 0 : e.id) != null &&
              o("WAWebBotUtils").isBotChannelFBID(e.id);
          (!t &&
            !o("WAWebABProps").getABPropConfigValue(
              "download_document_thumb_mms_enabled",
            )) ||
            r("WAWebMediaDownloadMmsThumbnail")({
              msg: o("WAWebStateUtils").unproxy(y),
              isPreload: !1,
              chat: e,
            });
        }
      }, []);
      var W = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4",
        q = A.filename || s._(/*BTDS*/ "Untitled"),
        U = o("WAWebMediaDocumentUtils").useMediaAction(y.unsafe(), {
          getZoomNode: function () {
            return R.current;
          },
        }),
        V = U[0],
        H = U[1],
        G = babelHelpers.extends({}, V);
      i === o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (G.onClick = null);
      var z = ((t = A.preview) != null ? t : A.fullPreviewData) != null,
        j =
          F.mime != null &&
          o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(F.mime),
        K = u.jsx("div", {
          className:
            "x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub",
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: q,
            dirMismatch: x !== r("WAWebL10N").isRTL(),
            direction: "auto",
            breakWord: !0,
          }),
        }),
        Q = j && S && z,
        X =
          v &&
          u.jsx("div", {
            className: "x10l6tqk xxx7yvo xbfrwjf",
            children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: y }),
          }),
        Y = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            c ? p.embeddedContent : p.deepContainerContent,
            o("WAWebUISpacing").uiPadding.all0,
          ],
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              grow: 0,
              children: u.jsxs("div", {
                className: "x1n2onr6",
                children: [
                  u.jsx(r("WAWebMediaThumbnail.react"), {
                    msg: y.unsafe(),
                    containerClassName: "xcbkimw x1n2onr6 xjzcg3w",
                    childClassName:
                      "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                  }),
                  y.mimetype &&
                    o(
                      "WAWebMediaMessageGetValidatedProperties",
                    ).isVideoMimeType(y.mimetype) &&
                    u.jsx(o("WAWebMsgVideoIcon.react").MsgVideoIcon, {
                      xstyle: p.mediaThumbVideoIcon,
                      height: 12,
                      width: 14,
                    }),
                ],
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "start",
              xstyle: [
                p.textContainerPadding,
                o("WAWebUISpacing").uiPadding.vert13,
              ],
              grow: 1,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  grow: 1,
                  justify: "center",
                  xstyle: [
                    p.text,
                    r("WAWebL10N").isRTL() && p.textRTL,
                    o("WAWebUISpacing").uiMargin.horiz10,
                    p.fixedTextHeight,
                  ],
                  children: [
                    u.jsx(r("WAWebFlexItem.react"), { children: K }),
                    u.jsx(r("WAWebFlexItem.react"), { children: B }),
                  ],
                }),
                u.jsx(r("WAWebFlexItem.react"), {
                  grow: 0,
                  shrink: 0,
                  children: H,
                }),
              ],
            }),
          ],
        }),
        J = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: c ? p.embeddedContent : p.deepContainerContent,
          align: "start",
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              children: u.jsx("div", {
                className: W,
                children: u.jsx(r("WAWebDocumentFileIcon"), {
                  width: 26,
                  mimeType: (n = F.mime) != null ? n : "",
                  ext: (a = F.ext) != null ? a : "",
                }),
              }),
            }),
            u.jsxs(r("WAWebFlexItem.react"), {
              xstyle: [p.text, r("WAWebL10N").isRTL() && p.textRTL],
              grow: 1,
              children: [K, B],
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              grow: 0,
              shrink: 0,
              children: H,
            }),
            X,
          ],
        }),
        Z = Q ? Y : J;
      return u.jsxs(
        o("WAWebClickable.react").Clickable,
        babelHelpers.extends(
          { ref: C, xstyle: p.container, dataTestId: "document-thumb" },
          G,
          {
            children: [
              S && !Q
                ? u.jsx(r("WAWebMediaThumbnail.react"), {
                    msg: y.unsafe(),
                    containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                    childClassName:
                      "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                    thumbnailRef: R,
                  })
                : null,
              c
                ? Z
                : u.jsx(r("WAWebMessageDeeperContainer.react"), {
                    xstyle: p.deepContainer,
                    outgoingMsg: D,
                    position: z ? "bottom" : void 0,
                    children: Z,
                  }),
            ],
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
