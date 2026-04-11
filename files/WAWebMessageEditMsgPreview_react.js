__d(
  "WAWebMessageEditMsgPreview.react",
  [
    "WAWebChatPreferenceCollection",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDocument.react",
    "WAWebMediaVideo.react",
    "WAWebMessageGif.react",
    "WAWebMessagePicture.react",
    "WAWebMessageText.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPreview.react",
    "WAWebMsgType",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 100,
      c = 70,
      d = c - u / 2,
      m = "x7xn9x5-B",
      p = "xjqn293-B",
      _ = {
        wrapper: {
          backgroundColor: "x1g5lz36",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          maxWidth: "x1gfrnbc",
          minWidth: "xt7fyls",
          zIndex: "x1ja2u2z",
          position: "x1n2onr6",
          $$css: !0,
        },
        previewContainer: { maxHeight: "x7ab17h", $$css: !0 },
        previewBody: {
          animationDuration: "xw8ag78",
          animationFillMode: "x10e4vud",
          animationTimingFunction: null,
          $$css: !0,
        },
        pushUp: {
          animationName: "x1uej8s0",
          paddingTop: "x1yfp7c2",
          paddingBottom: "xo5ses6",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        pushDown: {
          animationName: "x131uzpj",
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          marginBottom: "xiv7p99",
          $$css: !0,
        },
        paddingHoriz28: {
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.linkPreviewVisible,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getT,
            o("WAWebFrontendMsgGetters").getSenderObj,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(a.id, i),
        u = l[0],
        c = l[1],
        d;
      t[1] !== a
        ? ((d = o("WAWebFrontendMsgGetters").getChat(a.unsafe())),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      t[3] !== a ? ((p = a.safe()), (t[3] = a), (t[4] = p)) : (p = t[4]);
      var f = p,
        g;
      if (t[5] !== m || t[6] !== a || t[7] !== f || t[8] !== u) {
        var h = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(a.unsafe());
        (h &&
          (g = s.jsx(
            r("WAWebQuotedMsg.react"),
            {
              msg: h,
              rootMsg: f,
              displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
              theme: "editing",
              chat: m,
              t: u,
            },
            h.id.toString(),
          )),
          (t[5] = m),
          (t[6] = a),
          (t[7] = f),
          (t[8] = u),
          (t[9] = g));
      } else g = t[9];
      var y;
      e: switch (f.type) {
        case o("WAWebMsgType").MSG_TYPE.CHAT: {
          var C = g,
            b;
          t[10] !== f
            ? ((b = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe())),
              (t[10] = f),
              (t[11] = b))
            : (b = t[11]);
          var v;
          (t[12] !== g || t[13] !== f || t[14] !== c || t[15] !== b
            ? ((v = s.jsx(r("WAWebMessageText.react"), {
                msg: f,
                contact: c,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                quotedMsg: C,
                trusted: b,
                displayAuthor: !1,
              })),
              (t[12] = g),
              (t[13] = f),
              (t[14] = c),
              (t[15] = b),
              (t[16] = v))
            : (v = t[16]),
            (y = v));
          break e;
        }
        case o("WAWebMsgType").MSG_TYPE.IMAGE: {
          var S = g,
            R;
          t[17] !== f
            ? ((R = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe())),
              (t[17] = f),
              (t[18] = R))
            : (R = t[18]);
          var L;
          (t[19] !== g || t[20] !== f || t[21] !== R
            ? ((L = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                msg: f,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                quotedMsg: S,
                trusted: R,
                displayAuthor: !1,
                mediaData: f.mediaData,
              })),
              (t[19] = g),
              (t[20] = f),
              (t[21] = R),
              (t[22] = L))
            : (L = t[22]),
            (y = L));
          break e;
        }
        case o("WAWebMsgType").MSG_TYPE.VIDEO: {
          if (f.isGif === !0) {
            var E = g,
              k;
            t[23] !== f
              ? ((k = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe())),
                (t[23] = f),
                (t[24] = k))
              : (k = t[24]);
            var I;
            (t[25] !== g || t[26] !== f || t[27] !== k
              ? ((I = s.jsx(o("WAWebMessageGif.react").WrappedGif, {
                  msg: f,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                  quotedMsg: E,
                  trusted: k,
                  displayAuthor: !1,
                  mediaData: f.mediaData,
                })),
                (t[25] = g),
                (t[26] = f),
                (t[27] = k),
                (t[28] = I))
              : (I = t[28]),
              (y = I));
          } else {
            var T = g,
              D;
            t[29] !== f
              ? ((D = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe())),
                (t[29] = f),
                (t[30] = D))
              : (D = t[30]);
            var x;
            (t[31] !== g || t[32] !== f || t[33] !== D
              ? ((x = s.jsx(r("WAWebMediaVideo.react"), {
                  msg: f,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                  quotedMsg: T,
                  trusted: D,
                  displayAuthor: !1,
                })),
                (t[31] = g),
                (t[32] = f),
                (t[33] = D),
                (t[34] = x))
              : (x = t[34]),
              (y = x));
          }
          break e;
        }
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT: {
          var $ = g,
            P;
          t[35] !== f
            ? ((P = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe())),
              (t[35] = f),
              (t[36] = P))
            : (P = t[36]);
          var N;
          (t[37] !== g || t[38] !== f || t[39] !== P
            ? ((N = s.jsx(r("WAWebMediaDocument.react"), {
                msg: f,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                quotedMsg: $,
                trusted: P,
                displayAuthor: !1,
              })),
              (t[37] = g),
              (t[38] = f),
              (t[39] = P),
              (t[40] = N))
            : (N = t[40]),
            (y = N));
        }
      }
      if (!y) return null;
      var M;
      t[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = r("WAWebChatPreferenceCollection").assertGet(
            "defaultPreference",
          )),
          (t[41] = M))
        : (M = t[41]);
      var w = n && _.pushUp,
        A = !n && _.pushDown,
        F;
      t[42] !== w || t[43] !== A
        ? ((F = [_.previewBody, _.paddingHoriz28, w, A]),
          (t[42] = w),
          (t[43] = A),
          (t[44] = F))
        : (F = t[44]);
      var O;
      t[45] !== y
        ? ((O = s.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: s.jsx(r("WAWebFlexItem.react"), {
              xstyle: _.wrapper,
              grow: 0,
              children: s.jsx("div", {
                "data-nohandle": !0,
                testid: void 0,
                children: s.jsx(r("WAWebWrapperDisplayTypeContext").Provider, {
                  value: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                  children: y,
                }),
              }),
            }),
          })),
          (t[45] = y),
          (t[46] = O))
        : (O = t[46]);
      var B;
      return (
        t[47] !== F || t[48] !== O
          ? ((B = s.jsx(r("WAWebMsgPreview.react"), {
              chatPreference: M,
              containerXstyle: _.previewContainer,
              bodyXstyle: F,
              children: O,
            })),
            (t[47] = F),
            (t[48] = O),
            (t[49] = B))
          : (B = t[49]),
        B
      );
    }
    l.default = f;
  },
  98,
);
