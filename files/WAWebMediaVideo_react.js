__d(
  "WAWebMediaVideo.react",
  [
    "WAUnicodeUtils",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageCropping",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebStopEvent",
    "WAWebTypesMedia",
    "WAWebVideoPreview.react",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = {
        bubble: {
          boxSizing: "x9f619",
          maxWidth: "xlkrthq",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        bubbleAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        bubbleChannelAlerts: { maxWidth: "xmewjk2", $$css: !0 },
        portrait: { maxWidth: "xf58f5l", $$css: !0 },
        ctwaContainerWidth: { maxWidth: "x1mvkqlo", $$css: !0 },
        forwardedIndicator: {
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        hasAuthorForwardedIndicator: { paddingTop: "xexx8yu", $$css: !0 },
        nonAlbumBubble: {
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x1djpfga",
          $$css: !0,
        },
      };
    function f(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.currentAlbumMessageIndex,
        d = u === void 0 ? 0 : u,
        f = l.displayAuthor,
        g = l.displayType,
        h = l.msg,
        y = l.overlayContent,
        C = l.theme,
        b = p(null),
        v = function (t) {
          var e;
          (t.preventDefault(), (e = b.current) == null || e.play(t));
        };
      m(i, function () {
        return { handleKeyActivation: v };
      });
      var S = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getFooter,
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getIsCarouselCard,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsPSA,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getIsUnsentMedia,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getCtwaContext,
          o("WAWebMsgGetters").getSupportsMessageFooter,
          o("WAWebFrontendMsgGetters").getText,
        ]),
        R = S[0],
        L = S[1],
        E = S[2],
        k = S[3],
        I = S[4],
        T = S[5],
        D = S[6],
        x = S[7],
        $ = S[8],
        P = S[9],
        N = S[10],
        M = S[11],
        w = S[12],
        A = S[13],
        F = S[14],
        O = S[15],
        B = S[16],
        W = o("useWAWebModelValues").useModelValues(l.msg.mediaData, [
          "aspectRatio",
        ]),
        q =
          o("WAUnicodeUtils").numCodepoints(B != null ? B : "") >
          o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH,
        U = o("WAWebMessageCropping").getBubbleDimension(
          w,
          !1,
          T,
          W.aspectRatio,
          d,
          (n = (a = l.albumMsgs) == null ? void 0 : a.length) != null ? n : 0,
          C,
          g,
          q,
          void 0,
          o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(l.albumMsgs),
        ),
        V = U.bubbleHeight,
        H = U.bubbleWidth,
        G = H < V && o("WAWebMessageCropping").canUseCustomCropping(w, C, g),
        z = o("WAWebDisplayType").isWideDisplay(g),
        j =
          o("WAWebMsgSelectors").showForwarded(h) &&
          l.theme !== o("WAWebTypesMedia").DisplayTheme.Album &&
          l.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        K = j
          ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: h.unsafe(),
              xstyle: [
                _.forwardedIndicator,
                f && _.hasAuthorForwardedIndicator,
              ],
            })
          : null,
        Q = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: h,
        }),
        X = f
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x9f619 xyqdw3p x14vy60q xs9asl8 x25sj25" },
                  1: { className: "x9f619 xyqdw3p x14vy60q x25sj25 x18d9i69" },
                }[!!j << 0],
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msg: h,
                    contact: M,
                    displayType: g,
                  }),
                },
              ),
            )
          : null,
        Y =
          L != null &&
          L !== "" &&
          C !== o("WAWebTypesMedia").DisplayTheme.AlbumV2
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x9f619 x1d8l2j3 xm7lytj x11lfxj5 xs9asl8 x25sj25",
                    },
                    2: {
                      className:
                        "x9f619 x1d8l2j3 xm7lytj x11lfxj5 x25sj25 xcmr1wf",
                    },
                    1: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx",
                    },
                    3: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 x25sj25 xcmr1wf xno0opx",
                    },
                  }[(!!x << 1) | (!!z << 0)],
                  {
                    children: c.jsx(r("WAWebMessageCaption.react"), {
                      msg: h.unsafe(),
                      trusted: l.trusted,
                      spacer: !(O && k),
                      testId: "video-caption",
                    }),
                  },
                ),
              )
            : null,
        J = (s || (s = r("stylex")))(
          _.bubble,
          (!C ||
            (C !== o("WAWebTypesMedia").DisplayTheme.Album &&
              C !== o("WAWebTypesMedia").DisplayTheme.AlbumV2)) &&
            _.nonAlbumBubble,
          G && _.portrait,
          F != null && _.ctwaContainerWidth,
          z && _.bubbleAnnouncement,
          l.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            _.bubbleChannelAlerts,
        ),
        Z = l.quotedMsg
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "xahult9 x1d8l2j3" },
                  2: { className: "xahult9 x16cfgq2" },
                  1: { className: "xahult9 xno0opx" },
                  3: { className: "xahult9 xno0opx" },
                }[(!!G << 1) | (!!z << 0)],
                { children: l.quotedMsg },
              ),
            )
          : null,
        ee;
      y == null &&
        C !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 &&
        (ee = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "xrb244j x10l6tqk x11dcrhx x11uqc5h" },
              1: { className: "x10l6tqk x11uqc5h xy1j3rs x1inkcgm" },
            }[!!Y << 0],
            {
              children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: h,
                displayType: g,
                isAlbum: C === o("WAWebTypesMedia").DisplayTheme.Album,
              }),
            },
          ),
        ));
      var te = c.jsxs("div", {
        className: J,
        children: [
          X,
          K,
          Q,
          Z,
          c.jsx(r("WAWebBizCtwaContext.react"), {
            msg: h.unsafe(),
            wrapperClass: "xdj266r x14z9mp xahult9 x1lziwak",
          }),
          c.jsx(r("WAWebVideoPreview.react"), {
            ref: b,
            albumMsgs: l.albumMsgs,
            currentAlbumMessageIndex: d,
            displayType: g,
            hasOverlay: !!y,
            hover: l.hover,
            msg: h,
            mediaData: l.msg.mediaData,
            theme: C,
            zoomMsg: l.zoomMsg,
          }),
          Y,
          c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
            dir: E,
            footer: k,
            isShown: O,
            msg: h.unsafe(),
            rtl: N,
            type: w,
            trusted: l.trusted,
          }),
          ee,
        ],
      });
      return Y
        ? c.jsx(r("WAWebMessageBubbleHiddenText.react"), {
            contact: M,
            msg: h.unsafe(),
            onClick: o("WAWebStopEvent").stopPropagation,
            children: te,
          })
        : (y != null &&
            (te = c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x6s0dn4 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x78zum5 x1iyjqo2 xl56j7k xjmpccy x6ikm8r x10wlt62 x1n2onr6",
                  },
                  1: {
                    className:
                      "x6s0dn4 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x78zum5 x1iyjqo2 xl56j7k x6ikm8r x10wlt62 x1n2onr6 x1idnn2",
                  },
                }[!!z << 0],
                { children: [te, y] },
              ),
            )),
          c.jsx("div", {
            onClick: o("WAWebStopEvent").stopPropagation,
            children: te,
          }));
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
