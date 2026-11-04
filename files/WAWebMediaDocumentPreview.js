__d(
  "WAWebMediaDocumentPreview",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaThumbnail.react",
    "WAWebMediaTimeLeftEta.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageUiUtils",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebDocumentMediaType",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        paddingBlock13: {
          paddingTop: "x1d0ri9u",
          paddingBottom: "x1ug4tga",
          $$css: !0,
        },
        marginInline10: {
          marginInlineStart: "x1hm9lzh",
          marginInlineEnd: "x1sa5p1d",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      _ = {
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
          borderStartStartRadius: "x1i282gy",
          borderStartEndRadius: "xx9ypkp",
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
    function f() {
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
    function g(e) {
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
        ? ((s = u.jsx(f, {})), (t[5] = s))
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
    function h(e) {
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
        ? ((c = u.jsx(f, {})), (t[5] = c))
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
    function y(e) {
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
              { "data-meta-key": "type", "data-testid": "type" },
              i,
              { title: a, children: a },
            ),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(f, {})), (t[5] = s))
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
    function C(e) {
      var t,
        n,
        a = e.displayType,
        i = e.embedded,
        l = i === void 0 ? !1 : i,
        c = e.msgKey,
        C = e.ref,
        b = e.showMessageMeta,
        v = b === void 0 ? !1 : b,
        S = r("useWAWebIsMsgTrusted")(c),
        R = m(null),
        L = o("useWAWebMsgValues").useMsgValues(
          c,
          o("WAWebMsgCasts").castToDocumentOrInteractiveMsg,
          [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getCaption,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebMsgGetters").getIsFromTemplate,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getIsDynamicReplyButtonsMsg,
            o("WAWebMsgGetters").getMimetype,
          ],
        ),
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
        w = o("useWAWebMsgValues").useMsgValues(c, [
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        A = w[0],
        F = w[1],
        O = o("useWAWebMediaDataValues").useMediaDataValues(F, [
          o("WAWebMediaDataGetters").getMediaStage,
          o("WAWebMediaDataGetters").getFilename,
          o("WAWebMediaDataGetters").getPageCount,
          o("WAWebMediaDataGetters").getSize,
          o("WAWebMediaDataGetters").getMimetype,
          o("WAWebMediaDataGetters").getPreview,
          o("WAWebMediaDataGetters").getFullPreviewData,
          o("WAWebMediaDataGetters").getLoadedSize,
          o("WAWebMediaDataGetters").getFilehash,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = O[3],
        V = O[4],
        H = O[5],
        G = O[6],
        z = O[7],
        j = O[8],
        K = r("useWAWebDocumentMediaType")({ mimetype: V, filename: W }),
        Q = !!((T || N) && k),
        X = Q
          ? null
          : u.jsxs("div", {
              className:
                "xx3o462 x1ncwhqj xyqdw3p xyri2b xg8j3zb x1c1uobl x152skdk x1bvqhpb xt1z7ec x1yp9nv9 x186kree x1y04bub x1duis28",
              children: [
                o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(B)
                  ? u.jsx(r("WAWebMediaTimeLeftEta.react"), {
                      size: U,
                      loadedSize: z,
                      sampling: 3,
                      xstyle: _.metaValue,
                      children: u.jsx(f, {}),
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(h, { count: q }),
                        u.jsx(y, { ext: K.ext }),
                      ],
                    }),
                u.jsx(g, { size: U }),
              ],
            });
      d(function () {
        var e;
        if (!G) {
          var t =
            (e = o("WAWebMsgCollection").MsgCollection.get(c)) == null
              ? void 0
              : e.safe();
          if (
            !(
              t == null ||
              (t.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
            )
          ) {
            var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
            r("WAWebMediaDownloadMmsThumbnail")({
              msg: t,
              isPreload: !1,
              chat: n,
            });
          }
        }
      }, []);
      var Y = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4",
        J = W || s._(/*BTDS*/ "Untitled"),
        Z = o("WAWebMediaDocumentUtils").useMediaAction(c, {
          getZoomNode: function () {
            return R.current;
          },
        }),
        ee = Z[0],
        te = Z[1],
        ne = babelHelpers.extends({}, ee);
      a === o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (ne.onClick = null);
      var re = (H != null ? H : G) != null,
        oe =
          K.mime != null &&
          o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(K.mime),
        ae = u.jsx("div", {
          className:
            "x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub",
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: J,
            dirMismatch: x !== r("WAWebL10N").isRTL(),
            direction: "auto",
            breakWord: !0,
          }),
        }),
        ie = oe && S && re,
        le =
          v &&
          u.jsx("div", {
            className: "x10l6tqk xxx7yvo xbfrwjf",
            children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: c }),
          }),
        se = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            l ? _.embeddedContent : _.deepContainerContent,
            o("WDSPaddings.stylex").wdsPaddings.padding0,
          ],
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              grow: 0,
              children: u.jsxs("div", {
                className: "x1n2onr6",
                children: [
                  u.jsx(r("WAWebMediaThumbnail.react"), {
                    msgKey: c,
                    containerClassName: "xcbkimw x1n2onr6 xjzcg3w",
                    childClassName:
                      "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                  }),
                  M != null &&
                    M !== "" &&
                    o(
                      "WAWebMediaMessageGetValidatedProperties",
                    ).isVideoMimeType(M) &&
                    u.jsx(r("WDSIconIcVideocamFilled.react"), {
                      xstyle: _.mediaThumbVideoIcon,
                      height: 14,
                      width: 14,
                      testid: "msg-video",
                    }),
                ],
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "start",
              xstyle: [_.textContainerPadding, p.paddingBlock13],
              grow: 1,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  grow: 1,
                  justify: "center",
                  xstyle: [
                    _.text,
                    r("WAWebL10N").isRTL() && _.textRTL,
                    p.marginInline10,
                    _.fixedTextHeight,
                  ],
                  children: [
                    u.jsx(r("WAWebFlexItem.react"), { children: ae }),
                    u.jsx(r("WAWebFlexItem.react"), { children: X }),
                  ],
                }),
                u.jsx(r("WAWebFlexItem.react"), {
                  grow: 0,
                  shrink: 0,
                  children: te,
                }),
              ],
            }),
          ],
        }),
        ue = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: l ? _.embeddedContent : _.deepContainerContent,
          align: "start",
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              children: u.jsx("div", {
                className: Y,
                children: u.jsx(r("WAWebDocumentFileIcon"), {
                  width: 26,
                  mimeType: (t = K.mime) != null ? t : "",
                  ext: (n = K.ext) != null ? n : "",
                }),
              }),
            }),
            u.jsxs(r("WAWebFlexItem.react"), {
              xstyle: [_.text, r("WAWebL10N").isRTL() && _.textRTL],
              grow: 1,
              children: [ae, X],
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              grow: 0,
              shrink: 0,
              children: te,
            }),
            le,
          ],
        }),
        ce = ie ? se : ue;
      return u.jsxs(
        o("WAWebClickable.react").Clickable,
        babelHelpers.extends(
          { ref: C, xstyle: _.container, dataTestId: "document-thumb" },
          ne,
          {
            children: [
              S && !ie
                ? u.jsx(r("WAWebMediaThumbnail.react"), {
                    msgKey: c,
                    containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                    childClassName:
                      "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                    thumbnailRef: R,
                  })
                : null,
              l
                ? ce
                : u.jsx(r("WAWebMessageDeeperContainer.react"), {
                    xstyle: _.deepContainer,
                    outgoingMsg: D,
                    position: re ? "bottom" : void 0,
                    children: ce,
                  }),
            ],
          },
        ),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
