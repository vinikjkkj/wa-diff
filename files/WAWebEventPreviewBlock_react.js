__d(
  "WAWebEventPreviewBlock.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebEventDateBlock.react",
    "WAWebEventsGatingUtils",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventMyRSVPStatus",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        eventPreviewBlock: { display: "x1rg5ohu", $$css: !0 },
        container: {
          boxSizing: "x9f619",
          height: "xlo07zb",
          width: "xtlo18s",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          fontSize: "x1f6kntn",
          fontWeight: "x1iikomf",
          $$css: !0,
        },
        containerFullWidth: { width: "xh8yej3", $$css: !0 },
        eventDetailColumn: { textAlign: "x1yc453h", $$css: !0 },
        eventNameContainer: { maxWidth: "x193iq5w", $$css: !0 },
        eventDetailText: {
          display: "x1rg5ohu",
          maxWidth: "x193iq5w",
          color: "xhslqc4",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        eventNameText: {
          fontWeight: "x1s688f",
          fontSize: "x1jchvi3",
          $$css: !0,
        },
        tag: { alignSelf: "xamitd3", $$css: !0 },
      };
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(53),
        i = t.eventMsg,
        l = t.fullWidth,
        u = t.onClick,
        m = l === void 0 ? !1 : l,
        p;
      if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
        var _;
        ((p = [
          (_ = o("WAWebMsgGetters")).getEventName,
          _.getEventStartTime,
          _.getEventEndTime,
          _.getEventLocation,
          _.getIsSentByMe,
        ]),
          (a[0] = p));
      } else p = a[0];
      var f = o("useWAWebMsgValues").useMsgValues(i.id, p),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v = o("useWAWebEventMyRSVPStatus").useEventMyRSVPStatus(i),
        S;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (a[1] = S))
        : (S = a[1]);
      var R = S.pollQuestionTextSize,
        L;
      if (a[2] !== g) {
        var E;
        ((L = g.slice(
          0,
          (E = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? E
            : 100,
        )),
          (a[2] = g),
          (a[3] = L));
      } else L = a[3];
      var k = L,
        I;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = [d.eventNameContainer, o("WAWebUISpacing").uiPadding.vert2]),
          (a[4] = I))
        : (I = a[4]);
      var T;
      a[5] !== i
        ? ((T = o("WAWebFrontendMsgGetters").getRtl(i)), (a[5] = i), (a[6] = T))
        : (T = a[6]);
      var D;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = r("WAWebL10N").isRTL()), (a[7] = D))
        : (D = a[7]);
      var x = T !== D,
        $;
      a[8] !== i
        ? (($ = o("WAWebFrontendMsgGetters").getDir(i)), (a[8] = i), (a[9] = $))
        : ($ = a[9]);
      var P;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = [d.eventNameText, R]), (a[10] = P))
        : (P = a[10]);
      var N;
      a[11] !== x || a[12] !== $ || a[13] !== k
        ? ((N = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: I,
            grow: 0,
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: k,
              dirMismatch: x,
              direction: $,
              inferLinesDirection: !0,
              selectable: !0,
              xstyle: P,
              ellipsify: !0,
            }),
          })),
          (a[11] = x),
          (a[12] = $),
          (a[13] = k),
          (a[14] = N))
        : (N = a[14]);
      var M = N,
        w;
      a[15] !== y || a[16] !== h
        ? ((w = o("WAWebFormatEventDateString").getEventDateStringFor(h, y)),
          (a[15] = y),
          (a[16] = h),
          (a[17] = w))
        : (w = a[17]);
      var A = w,
        F;
      a[18] !== A || a[19] !== h
        ? ((F =
            h != null
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props([
                      d.eventDetailText,
                      o("WAWebUISpacing").uiMargin.vert1,
                    ]),
                    {
                      children: s._(/*BTDS*/ "{Event-starttime-string}", [
                        s._param("Event-starttime-string", A),
                      ]),
                    },
                  ),
                )
              : null),
          (a[18] = A),
          (a[19] = h),
          (a[20] = F))
        : (F = a[20]);
      var O = F,
        B,
        W =
          (n = C == null ? void 0 : C.name) != null
            ? n
            : C == null
              ? void 0
              : C.address;
      if (W != null) {
        var q;
        a[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (e || (e = r("stylex"))).props([
              d.eventDetailText,
              o("WAWebUISpacing").uiMargin.vert1,
            ])),
            (a[21] = q))
          : (q = a[21]);
        var U;
        a[22] !== W
          ? ((U = s._(/*BTDS*/ "{event-location}", [
              s._param("event-location", W),
            ])),
            (a[22] = W),
            (a[23] = U))
          : (U = a[23]);
        var V;
        (a[24] !== q || a[25] !== U
          ? ((V = c.jsx("div", babelHelpers.extends({}, q, { children: U }))),
            (a[24] = q),
            (a[25] = U),
            (a[26] = V))
          : (V = a[26]),
          (B = V));
      }
      var H = null;
      if (b) {
        var G;
        a[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = [d.tag, o("WAWebUISpacing").uiMargin.startAuto]), (a[27] = G))
          : (G = a[27]);
        var z;
        (a[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = c.jsx(o("WAWebTag.react").Tag, {
              theme: o("WAWebTag.react").TagTheme.Primary,
              xstyle: G,
              testid: void 0,
              children: s._(/*BTDS*/ "Creator"),
            })),
            (a[28] = z))
          : (z = a[28]),
          (H = z));
      } else if (
        v ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .GOING
      ) {
        var j;
        a[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = [d.tag, o("WAWebUISpacing").uiMargin.startAuto]), (a[29] = j))
          : (j = a[29]);
        var K;
        (a[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = c.jsx(o("WAWebTag.react").Tag, {
              theme: o("WAWebTag.react").TagTheme.Primary,
              xstyle: j,
              testid: void 0,
              children: s._(/*BTDS*/ "Going"),
            })),
            (a[30] = K))
          : (K = a[30]),
          (H = K));
      } else if (
        v ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .MAYBE
      ) {
        var Q;
        a[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = [d.tag, o("WAWebUISpacing").uiMargin.startAuto]), (a[31] = Q))
          : (Q = a[31]);
        var X;
        (a[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = c.jsx(o("WAWebTag.react").Tag, {
              theme: o("WAWebTag.react").TagTheme.Secondary,
              xstyle: Q,
              testid: void 0,
              children: s._(/*BTDS*/ "Maybe"),
            })),
            (a[32] = X))
          : (X = a[32]),
          (H = X));
      }
      var Y;
      a[33] !== m
        ? ((Y = [d.eventPreviewBlock].concat(
            m
              ? [d.containerFullWidth]
              : [
                  o("WAWebUISpacing").uiMargin.all2,
                  o("WAWebUISpacing").uiMargin.end12,
                ],
          )),
          (a[33] = m),
          (a[34] = Y))
        : (Y = a[34]);
      var J;
      a[35] !== m
        ? ((J = [d.container].concat(m ? [d.containerFullWidth] : [])),
          (a[35] = m),
          (a[36] = J))
        : (J = a[36]);
      var Z;
      a[37] !== h
        ? ((Z = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            padding: 2,
            shrink: 0,
            children: c.jsx(r("WAWebEventDateBlock.react"), {
              eventStartTime: h,
            }),
          })),
          (a[37] = h),
          (a[38] = Z))
        : (Z = a[38]);
      var ee;
      a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = [d.eventDetailColumn, o("WAWebUISpacing").uiPadding.start8]),
          (a[39] = ee))
        : (ee = a[39]);
      var te;
      a[40] !== B || a[41] !== M || a[42] !== O
        ? ((te = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: ee,
            padding: 2,
            children: [M, O, B],
          })),
          (a[40] = B),
          (a[41] = M),
          (a[42] = O),
          (a[43] = te))
        : (te = a[43]);
      var ne;
      a[44] !== J || a[45] !== Z || a[46] !== te || a[47] !== H
        ? ((ne = c.jsxs(o("WAWebFlex.react").FlexContainer, {
            xstyle: J,
            direction: "horizontal",
            padding: 12,
            children: [Z, te, H],
          })),
          (a[44] = J),
          (a[45] = Z),
          (a[46] = te),
          (a[47] = H),
          (a[48] = ne))
        : (ne = a[48]);
      var re;
      return (
        a[49] !== u || a[50] !== Y || a[51] !== ne
          ? ((re = c.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: Y,
              onClick: u,
              tabIndex: 0,
              children: ne,
            })),
            (a[49] = u),
            (a[50] = Y),
            (a[51] = ne),
            (a[52] = re))
          : (re = a[52]),
        re
      );
    }
    l.default = m;
  },
  226,
);
