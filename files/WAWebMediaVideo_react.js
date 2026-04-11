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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(94),
        l,
        u;
      i[0] !== t
        ? ((u = t.ref),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u))
        : ((l = i[1]), (u = i[2]));
      var d = l,
        f = d.currentAlbumMessageIndex,
        g = d.displayAuthor,
        h = d.displayType,
        y = d.msg,
        C = d.overlayContent,
        b = d.theme,
        v = f === void 0 ? 0 : f,
        S = p(null),
        R;
      i[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            var e;
            (t.preventDefault(), (e = S.current) == null || e.play(t));
          }),
          (i[3] = R))
        : (R = i[3]);
      var L = R,
        E;
      (i[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return { handleKeyActivation: L };
          }),
          (i[4] = E))
        : (E = i[4]),
        m(u, E));
      var k;
      if (i[5] === Symbol.for("react.memo_cache_sentinel")) {
        var I, T;
        ((k = [
          (I = o("WAWebMsgGetters")).getAck,
          I.getCaption,
          (T = o("WAWebFrontendMsgGetters")).getDir,
          I.getFooter,
          I.getId,
          I.getIsCarouselCard,
          I.getIsGroupMsg,
          I.getIsPSA,
          I.getIsSentByMe,
          T.getIsUnsentMedia,
          T.getRtl,
          T.getSenderObj,
          I.getType,
          I.getIsFailed,
          I.getCtwaContext,
          I.getSupportsMessageFooter,
          T.getText,
        ]),
          (i[5] = k));
      } else k = i[5];
      var D = o("useWAWebMsgValues").useMsgValues(l.msg.id, k),
        x = D[1],
        $ = D[2],
        P = D[3],
        N = D[5],
        M = D[7],
        w = D[10],
        A = D[11],
        F = D[12],
        O = D[14],
        B = D[15],
        W = D[16],
        q;
      i[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = ["aspectRatio"]), (i[6] = q))
        : (q = i[6]);
      var U = o("useWAWebModelValues").useModelValues(l.msg.mediaData, q),
        V =
          o("WAUnicodeUtils").numCodepoints(W != null ? W : "") >
          o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH,
        H = (n = (a = l.albumMsgs) == null ? void 0 : a.length) != null ? n : 0,
        G;
      i[7] !== v ||
      i[8] !== h ||
      i[9] !== N ||
      i[10] !== U.aspectRatio ||
      i[11] !== V ||
      i[12] !== l.albumMsgs ||
      i[13] !== H ||
      i[14] !== b ||
      i[15] !== F
        ? ((G = o("WAWebMessageCropping").getBubbleDimension(
            F,
            !1,
            N,
            U.aspectRatio,
            v,
            H,
            b,
            h,
            V,
            void 0,
            o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(l.albumMsgs),
          )),
          (i[7] = v),
          (i[8] = h),
          (i[9] = N),
          (i[10] = U.aspectRatio),
          (i[11] = V),
          (i[12] = l.albumMsgs),
          (i[13] = H),
          (i[14] = b),
          (i[15] = F),
          (i[16] = G))
        : (G = i[16]);
      var z = G,
        j = z.bubbleHeight,
        K = z.bubbleWidth,
        Q,
        X;
      if (
        i[17] !== j ||
        i[18] !== K ||
        i[19] !== O ||
        i[20] !== v ||
        i[21] !== $ ||
        i[22] !== g ||
        i[23] !== h ||
        i[24] !== P ||
        i[25] !== M ||
        i[26] !== y ||
        i[27] !== x ||
        i[28] !== C ||
        i[29] !== l.albumMsgs ||
        i[30] !== l.displayType ||
        i[31] !== l.hover ||
        i[32] !== l.msg.mediaData ||
        i[33] !== l.quotedMsg ||
        i[34] !== l.theme ||
        i[35] !== l.trusted ||
        i[36] !== l.zoomMsg ||
        i[37] !== w ||
        i[38] !== A ||
        i[39] !== B ||
        i[40] !== b ||
        i[41] !== F
      ) {
        X = Symbol.for("react.early_return_sentinel");
        e: {
          var Y =
              K < j && o("WAWebMessageCropping").canUseCustomCropping(F, b, h),
            J = o("WAWebDisplayType").isWideDisplay(h),
            Z,
            ee,
            te;
          if (
            i[44] !== g ||
            i[45] !== h ||
            i[46] !== y ||
            i[47] !== l.theme ||
            i[48] !== A
          ) {
            var ne =
              o("WAWebMsgSelectors").showForwarded(y) &&
              l.theme !== o("WAWebTypesMedia").DisplayTheme.Album &&
              l.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2;
            Z = ne
              ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
                  msg: y.unsafe(),
                  xstyle: [
                    _.forwardedIndicator,
                    g && _.hasAuthorForwardedIndicator,
                  ],
                })
              : null;
            var re;
            (i[52] !== y
              ? ((re = c.jsx(
                  r("WAWebMessagePaidPartnershipDisclaimerText.react"),
                  { msg: y },
                )),
                (i[52] = y),
                (i[53] = re))
              : (re = i[53]),
              (ee = re),
              (te = g
                ? c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className: "x9f619 xyqdw3p x14vy60q xs9asl8 x25sj25",
                        },
                        1: {
                          className: "x9f619 xyqdw3p x14vy60q x25sj25 x18d9i69",
                        },
                      }[!!ne << 0],
                      {
                        children: c.jsx(r("WAWebMessageAuthor.react"), {
                          msg: y,
                          contact: A,
                          displayType: h,
                        }),
                      },
                    ),
                  )
                : null),
              (i[44] = g),
              (i[45] = h),
              (i[46] = y),
              (i[47] = l.theme),
              (i[48] = A),
              (i[49] = Z),
              (i[50] = ee),
              (i[51] = te));
          } else ((Z = i[49]), (ee = i[50]), (te = i[51]));
          var oe = te,
            ae =
              x != null &&
              x !== "" &&
              b !== o("WAWebTypesMedia").DisplayTheme.AlbumV2
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
                      }[(!!M << 1) | (!!J << 0)],
                      {
                        children: c.jsx(r("WAWebMessageCaption.react"), {
                          msg: y.unsafe(),
                          trusted: l.trusted,
                          spacer: !(B && P),
                          testId: "video-caption",
                        }),
                      },
                    ),
                  )
                : null,
            ie = (s || (s = r("stylex")))(
              _.bubble,
              (!b ||
                (b !== o("WAWebTypesMedia").DisplayTheme.Album &&
                  b !== o("WAWebTypesMedia").DisplayTheme.AlbumV2)) &&
                _.nonAlbumBubble,
              Y && _.portrait,
              O != null && _.ctwaContainerWidth,
              J && _.bubbleAnnouncement,
              l.displayType ===
                o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
                _.bubbleChannelAlerts,
            ),
            le = l.quotedMsg
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "xahult9 x1d8l2j3" },
                      2: { className: "xahult9 x16cfgq2" },
                      1: { className: "xahult9 xno0opx" },
                      3: { className: "xahult9 xno0opx" },
                    }[(!!Y << 1) | (!!J << 0)],
                    { children: l.quotedMsg },
                  ),
                )
              : null,
            se;
          if (C == null && b !== o("WAWebTypesMedia").DisplayTheme.AlbumV2) {
            var ue;
            i[54] !== ae
              ? ((ue = {
                  0: { className: "xrb244j x10l6tqk x11dcrhx x11uqc5h" },
                  1: { className: "x10l6tqk x11uqc5h xy1j3rs x1inkcgm" },
                }[!!ae << 0]),
                (i[54] = ae),
                (i[55] = ue))
              : (ue = i[55]);
            var ce = b === o("WAWebTypesMedia").DisplayTheme.Album,
              de;
            i[56] !== h || i[57] !== y || i[58] !== ce
              ? ((de = c.jsx(o("WAWebMessageMeta.react").Meta, {
                  msg: y,
                  displayType: h,
                  isAlbum: ce,
                })),
                (i[56] = h),
                (i[57] = y),
                (i[58] = ce),
                (i[59] = de))
              : (de = i[59]);
            var me;
            (i[60] !== ue || i[61] !== de
              ? ((me = c.jsx(
                  "div",
                  babelHelpers.extends({}, ue, { children: de }),
                )),
                (i[60] = ue),
                (i[61] = de),
                (i[62] = me))
              : (me = i[62]),
              (se = me));
          }
          var pe;
          i[63] !== y
            ? ((pe = y.unsafe()), (i[63] = y), (i[64] = pe))
            : (pe = i[64]);
          var _e;
          i[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((_e = "xdj266r x14z9mp xahult9 x1lziwak"), (i[65] = _e))
            : (_e = i[65]);
          var fe;
          i[66] !== pe
            ? ((fe = c.jsx(r("WAWebBizCtwaContext.react"), {
                msg: pe,
                wrapperClass: _e,
              })),
              (i[66] = pe),
              (i[67] = fe))
            : (fe = i[67]);
          var ge = l.albumMsgs,
            he = !!C,
            ye;
          i[68] !== v ||
          i[69] !== h ||
          i[70] !== y ||
          i[71] !== l.albumMsgs ||
          i[72] !== l.hover ||
          i[73] !== l.msg.mediaData ||
          i[74] !== l.zoomMsg ||
          i[75] !== he ||
          i[76] !== b
            ? ((ye = c.jsx(r("WAWebVideoPreview.react"), {
                ref: S,
                albumMsgs: ge,
                currentAlbumMessageIndex: v,
                displayType: h,
                hasOverlay: he,
                hover: l.hover,
                msg: y,
                mediaData: l.msg.mediaData,
                theme: b,
                zoomMsg: l.zoomMsg,
              })),
              (i[68] = v),
              (i[69] = h),
              (i[70] = y),
              (i[71] = l.albumMsgs),
              (i[72] = l.hover),
              (i[73] = l.msg.mediaData),
              (i[74] = l.zoomMsg),
              (i[75] = he),
              (i[76] = b),
              (i[77] = ye))
            : (ye = i[77]);
          var Ce;
          i[78] !== y
            ? ((Ce = y.unsafe()), (i[78] = y), (i[79] = Ce))
            : (Ce = i[79]);
          var be;
          i[80] !== $ ||
          i[81] !== P ||
          i[82] !== l.trusted ||
          i[83] !== w ||
          i[84] !== B ||
          i[85] !== Ce ||
          i[86] !== F
            ? ((be = c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: $,
                footer: P,
                isShown: B,
                msg: Ce,
                rtl: w,
                type: F,
                trusted: l.trusted,
              })),
              (i[80] = $),
              (i[81] = P),
              (i[82] = l.trusted),
              (i[83] = w),
              (i[84] = B),
              (i[85] = Ce),
              (i[86] = F),
              (i[87] = be))
            : (be = i[87]);
          var ve = c.jsxs("div", {
            className: ie,
            children: [oe, Z, ee, le, fe, ye, ae, be, se],
          });
          if (ae) {
            var Se;
            i[88] !== y
              ? ((Se = y.unsafe()), (i[88] = y), (i[89] = Se))
              : (Se = i[89]);
            var Re;
            (i[90] !== ve || i[91] !== A || i[92] !== Se
              ? ((Re = c.jsx(r("WAWebMessageBubbleHiddenText.react"), {
                  contact: A,
                  msg: Se,
                  onClick: o("WAWebStopEvent").stopPropagation,
                  children: ve,
                })),
                (i[90] = ve),
                (i[91] = A),
                (i[92] = Se),
                (i[93] = Re))
              : (Re = i[93]),
              (X = Re));
            break e;
          }
          (C != null &&
            (ve = c.jsxs(
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
                }[!!J << 0],
                { children: [ve, C] },
              ),
            )),
            (Q = c.jsx("div", {
              onClick: o("WAWebStopEvent").stopPropagation,
              children: ve,
            })));
        }
        ((i[17] = j),
          (i[18] = K),
          (i[19] = O),
          (i[20] = v),
          (i[21] = $),
          (i[22] = g),
          (i[23] = h),
          (i[24] = P),
          (i[25] = M),
          (i[26] = y),
          (i[27] = x),
          (i[28] = C),
          (i[29] = l.albumMsgs),
          (i[30] = l.displayType),
          (i[31] = l.hover),
          (i[32] = l.msg.mediaData),
          (i[33] = l.quotedMsg),
          (i[34] = l.theme),
          (i[35] = l.trusted),
          (i[36] = l.zoomMsg),
          (i[37] = w),
          (i[38] = A),
          (i[39] = B),
          (i[40] = b),
          (i[41] = F),
          (i[42] = Q),
          (i[43] = X));
      } else ((Q = i[42]), (X = i[43]));
      return X !== Symbol.for("react.early_return_sentinel") ? X : Q;
    }
    l.default = f;
  },
  98,
);
