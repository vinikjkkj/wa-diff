__d(
  "WAWebBizCtwaPreview.react",
  [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaThumbnailImage.react",
    "WAWebBizGatingUtils",
    "WAWebBizOpenStatusModal",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebEmojiText.react",
    "WAWebKeyboardConstants",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        thumbnail: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.context,
        a = e.msg,
        i;
      if (t[0] !== n) {
        var l;
        ((i =
          (l = n.sourceApp) != null
            ? l
            : o("WAWebBizCtwaAGMUtils").getHostnameLabel(n)),
          (t[0] = n),
          (t[1] = i));
      } else i = t[1];
      var u = i,
        d;
      t[2] !== u
        ? ((d =
            u != null
              ? s.jsx("div", {
                  className:
                    "x104kibb x1c4vz4f xs83m0k xdl72j9 xw6vvto x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub x1s688f x6prxxf x1fc57z9 x1w2d6ul",
                  "data-testid": void 0,
                  children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(u),
                  }),
                })
              : null),
          (t[2] = u),
          (t[3] = d))
        : (d = t[3]);
      var p = d,
        _;
      t[4] !== a
        ? ((_ = o("WAWebMsgGetters").getIsSentByMe(a)), (t[4] = a), (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g =
            "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x6ikm8r x10wlt62 x17fgdl5"),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className:
              "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1nxh6w3 xhslqc4 xd4r4e8",
          }),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebBizCtwaAGMUtils").getCtwaDetailsLabel(),
          })),
          (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== n.description
        ? ((b = s.jsx(
            "div",
            babelHelpers.extends({}, y, { title: n.description, children: C }),
          )),
          (t[9] = n.description),
          (t[10] = b))
        : (b = t[10]);
      var v = b,
        S;
      t[11] !== f
        ? ((S = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            {
              0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x6egj2d",
              1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x4wrhlh",
            }[!!f << 0],
          )),
          (t[11] = f),
          (t[12] = S))
        : (S = t[12]);
      var R = S,
        L;
      t[13] !== n || t[14] !== a
        ? ((L = function () {
            n.sourceApp === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP &&
            o("WAWebBizGatingUtils").getWamoAgmEnabled()
              ? r("WAWebBizOpenStatusModal")()
              : m(n, a);
          }),
          (t[13] = n),
          (t[14] = a),
          (t[15] = L))
        : (L = t[15]);
      var E = L,
        k;
      t[16] !== E
        ? ((k = function (t) {
            (t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ENTER ||
              t.key ===
                o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.SPACE) &&
              E();
          }),
          (t[16] = E),
          (t[17] = k))
        : (k = t[17]);
      var I;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x78zum5 x1qjc9v5 x1nhvcw1 xh8yej3 x6ikm8r x10wlt62 x889kno x2vl965 x1a8lsjc xe2zdcy x1q0g3np xlrrn2g",
          }),
          (t[18] = I))
        : (I = t[18]);
      var T = a.from,
        D;
      t[19] !== a
        ? ((D = o("WAWebMsgGetters").getIsSentByMe(a)),
          (t[19] = a),
          (t[20] = D))
        : (D = t[20]);
      var x;
      t[21] !== n || t[22] !== a.from || t[23] !== D
        ? ((x = s.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
            context: n,
            businessWid: T,
            fromMe: D,
            xstyle: c.thumbnail,
            isThumbnail: !0,
          })),
          (t[21] = n),
          (t[22] = a.from),
          (t[23] = D),
          (t[24] = x))
        : (x = t[24]);
      var $;
      t[25] !== p || t[26] !== n.sourceUrl || t[27] !== v
        ? (($ =
            n.sourceUrl != null
              ? s.jsxs("div", { className: h, children: [p, v] })
              : null),
          (t[25] = p),
          (t[26] = n.sourceUrl),
          (t[27] = v),
          (t[28] = $))
        : ($ = t[28]);
      var P;
      t[29] !== x || t[30] !== $
        ? ((P = s.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [x, $] }),
          )),
          (t[29] = x),
          (t[30] = $),
          (t[31] = P))
        : (P = t[31]);
      var N;
      return (
        t[32] !== R || t[33] !== E || t[34] !== P || t[35] !== k
          ? ((N = s.jsx("div", {
              className: R,
              onClick: E,
              "data-testid": void 0,
              role: "button",
              tabIndex: 0,
              onKeyPress: k,
              children: P,
            })),
            (t[32] = R),
            (t[33] = E),
            (t[34] = P),
            (t[35] = k),
            (t[36] = N))
          : (N = t[36]),
        N
      );
    }
    function m(e, t) {
      var n = o("WAWebCtwaAGMUtils").extractAGMPayload(e),
        r = o("WAWebMsgGetters").getIsSentByMe(t),
        a = function () {
          o("WAWebCtwaLogger").logAGMOperation({
            operationType:
              o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_closed,
            fromBusiness: r,
            agmPayload: n,
            businessWid: t.from,
            adId: e.sourceId,
          });
        },
        i = function () {
          o("WAWebCtwaLogger").logAGMOperation({
            operationType:
              o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_shown,
            fromBusiness: r,
            agmPayload: n,
            businessWid: t.from,
            adId: e.sourceId,
          });
        };
      (o("WAWebCtwaLogger").logAGMOperation({
        operationType:
          o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_view_details_clicked,
        fromBusiness: r,
        agmPayload: n,
        businessWid: t.from,
        adId: e.sourceId,
      }),
        o("WAWebCmd").Cmd.ctwaAdPreviewDrawer(
          o("WAWebStateUtils").unproxy(t),
          a,
          i,
        ));
    }
    l.default = d;
  },
  98,
);
