__d(
  "WAWebMediaDocumentPreview",
  [
    "fbt",
    "WAWebBackendRuntime",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFilenameManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaDownloadService",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaThumbnail.react",
    "WAWebMediaTimeLeftEta.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageUiUtils",
    "WAWebMimeTypes",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSPaddings.stylex",
    "react",
    "useWAWebDocumentMediaType",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
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
      return u.jsx("span", {
        className:
          "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6",
        children: "\u2022",
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.size;
      if (t == null || t <= 0) return null;
      var n = o("WAWebL10nFilesize").getL10nFilesize(t);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("span", {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
            title: n,
            children: n,
          }),
          u.jsx(f, {}),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.count;
      if (t == null || t <= 0) return null;
      var n = s._(/*BTDS*/ "", [s._plural(t, "count")]);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("span", {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
            title: n,
            children: n,
          }),
          u.jsx(f, {}),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.ext;
      if (t == null) return null;
      var n = t.toUpperCase();
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("span", {
            "data-meta-key": "type",
            "data-testid": "type",
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
            title: n,
            children: n,
          }),
          u.jsx(f, {}),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
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
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebFrontendMsgGetters").getMediaData,
            o("WAWebMsgGetters").getT,
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
        w = L[10],
        A = L[11],
        F = L[12],
        O = o("useWAWebMediaDataValues").useMediaDataValues(A, [
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
        K =
          P === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? o("WAWebFilenameManager").getDefaultName({
                t: F,
                type: P,
                mimetype: M,
                filename: W,
                caption: k,
                vcardList: null,
                isVcardOverMmsDocument: !1,
              })
            : W,
        Q = r("useWAWebDocumentMediaType")({ mimetype: V, filename: K }),
        X =
          Q.mime != null &&
          o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(Q.mime),
        Y =
          Q.mime != null &&
          (X || o("WAWebMimeTypes").previewType(Q.mime) != null),
        J = !!((T || N) && k),
        Z = J
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
                        u.jsx(h, { count: Y ? q : null }),
                        u.jsx(y, { ext: Q.ext }),
                      ],
                    }),
                u.jsx(g, { size: U }),
              ],
            }),
        ee = r("useWAWebStableCallback")(function () {
          var e;
          if (!(!Y || G)) {
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
              (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMediaDownloadService").MediaDownloadService,
                  ).downloadMmsThumbnail
                : r("WAWebMediaDownloadMmsThumbnail"))({
                msg: t,
                isPreload: !1,
                chat: n,
              });
            }
          }
        });
      d(
        function () {
          return ee();
        },
        [ee],
      );
      var te = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4",
        ne = K || s._(/*BTDS*/ ""),
        re = o("WAWebMediaDocumentUtils").useMediaAction(c, {
          getZoomNode: function () {
            return R.current;
          },
        }),
        oe = re[0],
        ae = re[1],
        ie = babelHelpers.extends({}, oe);
      a === o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (ie.onClick = null);
      var le = Y && (H != null ? H : G) != null,
        se = u.jsx("div", {
          className:
            "x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub",
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: ne,
            dirMismatch: x !== r("WAWebL10N").isRTL(),
            direction: "auto",
            breakWord: !0,
          }),
        }),
        ue = X && S && le,
        ce =
          v &&
          u.jsx("div", {
            className: "x10l6tqk xxx7yvo xbfrwjf",
            children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: c }),
          }),
        de = u.jsxs(o("WAWebFlex.react").FlexRow, {
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
                    u.jsx(r("WAWebFlexItem.react"), { children: se }),
                    u.jsx(r("WAWebFlexItem.react"), { children: Z }),
                  ],
                }),
                u.jsx(r("WAWebFlexItem.react"), {
                  grow: 0,
                  shrink: 0,
                  children: ae,
                }),
              ],
            }),
          ],
        }),
        me = u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: l ? _.embeddedContent : _.deepContainerContent,
          align: "start",
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              children: u.jsx("div", {
                className: te,
                children: u.jsx(r("WAWebDocumentFileIcon"), {
                  width: 26,
                  mimeType: (t = Q.mime) != null ? t : "",
                  ext: (n = Q.ext) != null ? n : "",
                }),
              }),
            }),
            u.jsxs(r("WAWebFlexItem.react"), {
              xstyle: [_.text, r("WAWebL10N").isRTL() && _.textRTL],
              grow: 1,
              children: [se, Z],
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              grow: 0,
              shrink: 0,
              children: ae,
            }),
            ce,
          ],
        }),
        pe = ue ? de : me;
      return u.jsxs(
        o("WAWebClickable.react").Clickable,
        babelHelpers.extends(
          { ref: C, xstyle: _.container, dataTestId: "document-thumb" },
          ie,
          {
            children: [
              S && Y && !ue
                ? u.jsx(r("WAWebMediaThumbnail.react"), {
                    msgKey: c,
                    containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                    childClassName:
                      "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                    thumbnailRef: R,
                  })
                : null,
              l
                ? pe
                : u.jsx(r("WAWebMessageDeeperContainer.react"), {
                    xstyle: _.deepContainer,
                    outgoingMsg: D,
                    position: le ? "bottom" : void 0,
                    testid: "document-thumb-details",
                    children: pe,
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
