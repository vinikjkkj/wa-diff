__d(
  "WAWebMediaDocument.react",
  [
    "WAWebBizCtwaContext.react",
    "WAWebDisplayType",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaDocumentBubbleActions.react",
    "WAWebMediaDocumentPreview",
    "WAWebMessageCaption.react",
    "WAWebMessageContentBox.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
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
          width: "x1o095ql",
          paddingTop: "x1u9i22x",
          paddingInlineEnd: "x1gn2fwh",
          paddingBottom: "x1gwem2t",
          paddingInlineStart: "x4c6wsc",
          $$css: !0,
        },
        isAnnouncement: { width: "x1yuel0x", $$css: !0 },
        bubbleExtraPadding: { paddingBottom: "x1yt8dio", $$css: !0 },
        isGallery: {
          width: "x14atkfc",
          "@media (max-width:880px)_insetInlineEnd": "xt1z7ec",
          "@media (max-width:880px)_left": null,
          "@media (max-width:880px)_right": null,
          "@media (max-width:880px)_overflowX": "x1yp9nv9",
          "@media (max-width:880px)_overflowY": "x186kree",
          "@media (max-width:880px)_textOverflow": "x1y04bub",
          "@media (max-width:880px)_whiteSpace": "x1duis28",
          $$css: !0,
        },
        isPreview: { maxWidth: "x193iq5w", $$css: !0 },
        templateBubble: { position: "x1n2onr6", $$css: !0 },
      },
      f = new Map([
        [o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO, _.isPreview],
        [o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS, _.isGallery],
        [o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, _.isGallery],
        [o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT, _.isAnnouncement],
        [o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER, _.isAnnouncement],
      ]);
    function g(t) {
      var n = o("react-compiler-runtime").c(45),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.displayAuthor,
        d = l.displayType,
        g = l.msg,
        h = l.quotedMsg,
        y = l.trusted,
        C = p(null),
        b;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            return {
              handleKeyActivation: function (t) {
                var e;
                (t.preventDefault(), (e = C.current) == null || e.click());
              },
            };
          }),
          (n[3] = b))
        : (b = n[3]),
        m(i, b));
      var v;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var S, R;
        ((v = [
          (S = o("WAWebMsgGetters")).getAck,
          S.getCaption,
          (R = o("WAWebFrontendMsgGetters")).getDir,
          S.getId,
          S.getIsFromTemplate,
          S.getIsFailed,
          S.getIsSentByMe,
          R.getRtl,
          R.getSenderObj,
          S.getIsGroupMsg,
          S.getBody,
          S.getSupportsMessageFooter,
          S.getFooter,
          R.getText,
          S.getFilename,
          S.getIsCaptionByUser,
          S.getInitialPageSize,
        ]),
          (n[4] = v));
      } else v = n[4];
      var L = o("useWAWebMsgValues").useMsgValues(a.msg.id, v),
        E = L[1],
        k = L[4],
        I = L[12],
        T = L[15],
        D;
      if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
        var S;
        ((D = [
          (S = o("WAWebMsgGetters")).getSubtype,
          S.getType,
          S.getIsVcardOverMmsDocument,
          o("WAWebFrontendMsgGetters").getMediaData,
          S.getIsDynamicReplyButtonsMsg,
        ]),
          (n[5] = D));
      } else D = n[5];
      var x = o("useWAWebMsgValues").useMsgValues(a.msg.id, D),
        $ = x[4],
        P;
      if (n[6] !== g || n[7] !== a.displayType) {
        var N = r("WAWebL10N").isRTL();
        ((P = r("WAWebEnvironment").isWindows
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x1n2onr6 x1n327nk x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6",
                  },
                  1: {
                    className:
                      "x1n2onr6 x1n327nk xhsvlbd x14z9mp xz62fqu x1wbi8v6 xtrg13t",
                  },
                }[!!N << 0],
                {
                  children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msg: g,
                    displayType: a.displayType,
                  }),
                },
              ),
            )
          : null),
          (n[6] = g),
          (n[7] = a.displayType),
          (n[8] = P));
      } else P = n[8];
      var M = P,
        w;
      n[9] !== d ||
      n[10] !== I ||
      n[11] !== T ||
      n[12] !== M ||
      n[13] !== g ||
      n[14] !== y
        ? ((w = T
            ? c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x9f619 x1d8l2j3 x1yrsyyn x11lfxj5 xs9asl8 x25sj25",
                    },
                    1: {
                      className:
                        "x9f619 x1yrsyyn x11lfxj5 xs9asl8 x25sj25 xno0opx",
                    },
                  }[!!o("WAWebDisplayType").isWideDisplay(d) << 0],
                  {
                    children: [
                      c.jsx(r("WAWebMessageCaption.react"), {
                        msg: g.unsafe(),
                        trusted: y,
                        spacer: !I,
                        testId: "document-caption",
                      }),
                      M,
                    ],
                  },
                ),
              )
            : null),
          (n[9] = d),
          (n[10] = I),
          (n[11] = T),
          (n[12] = M),
          (n[13] = g),
          (n[14] = y),
          (n[15] = w))
        : (w = n[15]);
      var A = w,
        F = A != null || !(k || $),
        O;
      n[16] !== g ? ((O = g.unsafe()), (n[16] = g), (n[17] = O)) : (O = n[17]);
      var B;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = "xdj266r x14z9mp xahult9 x1lziwak"), (n[18] = B))
        : (B = n[18]);
      var W;
      n[19] !== O
        ? ((W = c.jsx(r("WAWebBizCtwaContext.react"), {
            msg: O,
            wrapperClass: B,
          })),
          (n[19] = O),
          (n[20] = W))
        : (W = n[20]);
      var q = r("WAWebEnvironment").isWindows && A == null,
        U;
      n[21] !== d || n[22] !== g || n[23] !== q
        ? ((U = c.jsx(r("WAWebMediaDocumentPreview"), {
            ref: C,
            msg: g,
            displayType: d,
            showMessageMeta: q,
          })),
          (n[21] = d),
          (n[22] = g),
          (n[23] = q),
          (n[24] = U))
        : (U = n[24]);
      var V;
      n[25] !== g
        ? ((V = c.jsx(r("WAWebMediaDocumentBubbleActions.react"), { msg: g })),
          (n[25] = g),
          (n[26] = V))
        : (V = n[26]);
      var H;
      n[27] !== A ||
      n[28] !== u ||
      n[29] !== d ||
      n[30] !== g ||
      n[31] !== h ||
      n[32] !== U ||
      n[33] !== V ||
      n[34] !== F ||
      n[35] !== W ||
      n[36] !== y
        ? ((H = c.jsxs(r("WAWebMessageContentBox.react"), {
            displayType: d,
            msg: g,
            quotedMsg: h,
            showAuthor: u,
            hideCaption: F,
            hideMeta: r("WAWebEnvironment").isWindows,
            trusted: y,
            children: [W, U, A, V],
          })),
          (n[27] = A),
          (n[28] = u),
          (n[29] = d),
          (n[30] = g),
          (n[31] = h),
          (n[32] = U),
          (n[33] = V),
          (n[34] = F),
          (n[35] = W),
          (n[36] = y),
          (n[37] = H))
        : (H = n[37]);
      var G = H,
        z = !!((k || $) && E),
        j;
      n[38] !== A || n[39] !== d || n[40] !== z
        ? ((j = (s || (s = r("stylex"))).props(
            _.bubble,
            !A && !r("WAWebEnvironment").isWindows && _.bubbleExtraPadding,
            z && _.templateBubble,
            f.get(d),
          )),
          (n[38] = A),
          (n[39] = d),
          (n[40] = z),
          (n[41] = j))
        : (j = n[41]);
      var K;
      return (
        n[42] !== G || n[43] !== j
          ? ((K = c.jsx("div", babelHelpers.extends({}, j, { children: G }))),
            (n[42] = G),
            (n[43] = j),
            (n[44] = K))
          : (K = n[44]),
        K
      );
    }
    l.default = g;
  },
  98,
);
