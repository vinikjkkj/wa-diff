__d(
  "WAWebMessageLargeEmoji.react",
  [
    "cx",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebClassnames",
    "WAWebConstantsDeprecated",
    "WAWebCopyPasteSelectable.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiConst",
    "WAWebImg.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebDevicePixelRatio",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState;
    function f(t) {
      var n = o("react-compiler-runtime").c(38),
        a = t.emoji,
        i = t.size,
        l = t.animation,
        s = t.element,
        u = t.selectable,
        d = t.xstyle,
        m = i === void 0 ? o("WAWebEmojiConst").LargeEmojiSize.MEDIUM : i,
        f = l === void 0 ? !1 : l,
        g = s === void 0 ? "div" : s,
        h = r("useWAWebDevicePixelRatio")(),
        y;
      n[0] !== t.emoji
        ? ((y = function () {
            var e = o("WAWebEmoji").EmojiUtil.getGlyphId(t.emoji);
            return !!(e != null && o("WAWebEmoji").EmojiUtil.isGlyphCached(e));
          }),
          (n[0] = t.emoji),
          (n[1] = y))
        : (y = n[1]);
      var C = y,
        b = _(C),
        v = b[0],
        S = b[1];
      (o("useWAWebABPropConfigValue").useABPropConfigValue(
        "custom_racing_emoji",
      ),
        o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        ));
      var R;
      n[2] !== C
        ? ((R = function () {
            S(C());
          }),
          (n[2] = C),
          (n[3] = R))
        : (R = n[3]);
      var L;
      (n[4] !== C || n[5] !== h
        ? ((L = [h, C]), (n[4] = C), (n[5] = h), (n[6] = L))
        : (L = n[6]),
        p(R, L));
      var E;
      n[7] !== a
        ? ((E = function () {
            var e = o("WAWebEmoji").EmojiUtil.getGlyphId(a);
            (e != null && o("WAWebEmoji").EmojiUtil.markGlyphCached(e), S(!0));
          }),
          (n[7] = a),
          (n[8] = E))
        : (E = n[8]);
      var k = E,
        I,
        T,
        D,
        x;
      if (
        n[9] !== f ||
        n[10] !== g ||
        n[11] !== a ||
        n[12] !== v ||
        n[13] !== u ||
        n[14] !== m ||
        n[15] !== d
      ) {
        x = Symbol.for("react.early_return_sentinel");
        e: {
          var $, P;
          T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (($ = {}),
            ($._ahiv = m === (P = o("WAWebEmojiConst")).LargeEmojiSize.MEDIUM),
            ($._ahix = m === P.LargeEmojiSize.LARGE),
            ($._ahiy = m === P.LargeEmojiSize.XLARGE),
            ($._ar4y = m === P.LargeEmojiSize.XLARGE_60),
            $),
          );
          var N;
          m === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60
            ? (N = 160)
            : m === o("WAWebEmojiConst").LargeEmojiSize.XLARGE ||
                r("WAWebAssetLoaderDpiChangeDispatch").currentRes === "high"
              ? (N = 64)
              : (N = 40);
          var M;
          if (
            (n[20] !== a || n[21] !== N
              ? ((M = o("WAWebEmoji").EmojiUtil.getGlyphPath(a, N)),
                (n[20] = a),
                (n[21] = N),
                (n[22] = M))
              : (M = n[22]),
            (I = M),
            I == null)
          ) {
            x = null;
            break e;
          }
          if (v && f) {
            var w = g,
              A;
            (n[23] !== d
              ? ((A = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                  "_ahiz",
                  (e || (e = r("stylex")))(d),
                )),
                (n[23] = d),
                (n[24] = A))
              : (A = n[24]),
              (x = c.jsxs(w, {
                className: A,
                children: [
                  c.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
                    alt: a,
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease("_ahit", T),
                    draggable: !1,
                    plainText: a,
                    selectable: !!u,
                    src: r("WAWebConstantsDeprecated").ONE_BY_ONE_TRANS_GIF,
                  }),
                  c.jsx(r("WAWebImg.react"), {
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease("_ahit", T, "_ahi_"),
                    draggable: !1,
                    selectable: !1,
                    src: I,
                  }),
                ],
              })));
            break e;
          }
          D = v
            ? void 0
            : c.jsx(
                r("WAWebEmoji.react"),
                {
                  DEPRECATED_className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease("_ahiw", T),
                  emoji: a,
                  selectable: u,
                  xstyle: d,
                },
                "low-res",
              );
        }
        ((n[9] = f),
          (n[10] = g),
          (n[11] = a),
          (n[12] = v),
          (n[13] = u),
          (n[14] = m),
          (n[15] = d),
          (n[16] = I),
          (n[17] = T),
          (n[18] = D),
          (n[19] = x));
      } else ((I = n[16]), (T = n[17]), (D = n[18]), (x = n[19]));
      if (x !== Symbol.for("react.early_return_sentinel")) return x;
      var F = D,
        O = !v,
        B;
      if (n[25] !== T || n[26] !== O) {
        var W;
        ((B = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((W = {}), (W["_ahi-"] = O), (W._ahit = !0), (W[T] = !0), W),
        )),
          (n[25] = T),
          (n[26] = O),
          (n[27] = B));
      } else B = n[27];
      var q;
      n[28] !== a ||
      n[29] !== I ||
      n[30] !== k ||
      n[31] !== u ||
      n[32] !== B ||
      n[33] !== d
        ? ((q = c.jsx(
            r("WAWebEmoji.react"),
            {
              DEPRECATED_className: B,
              emoji: a,
              onLoad: k,
              selectable: u,
              src: I,
              xstyle: d,
            },
            "high-res",
          )),
          (n[28] = a),
          (n[29] = I),
          (n[30] = k),
          (n[31] = u),
          (n[32] = B),
          (n[33] = d),
          (n[34] = q))
        : (q = n[34]);
      var U = q,
        V;
      return (
        n[35] !== U || n[36] !== F
          ? ((V = c.jsxs("span", { className: "_ahiu", children: [F, U] })),
            (n[35] = U),
            (n[36] = F),
            (n[37] = V))
          : (V = n[37]),
        V
      );
    }
    ((l.SIZE = o("WAWebEmojiConst").LargeEmojiSize), (l.LargeEmoji = f));
  },
  98,
);
