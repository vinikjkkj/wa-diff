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
      var n,
        a,
        i = t.emoji,
        l = t.size,
        s = l === void 0 ? o("WAWebEmojiConst").LargeEmojiSize.MEDIUM : l,
        u = t.animation,
        d = u === void 0 ? !1 : u,
        f = t.element,
        g = f === void 0 ? "div" : f,
        h = t.selectable,
        y = t.xstyle,
        C = r("useWAWebDevicePixelRatio")(),
        b = m(
          function () {
            var e = o("WAWebEmoji").EmojiUtil.getGlyphId(t.emoji);
            return !!(e != null && o("WAWebEmoji").EmojiUtil.isGlyphCached(e));
          },
          [t.emoji],
        ),
        v = _(b),
        S = v[0],
        R = v[1];
      (o("useWAWebABPropConfigValue").useABPropConfigValue(
        "custom_racing_emoji",
      ),
        o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        ),
        p(
          function () {
            R(b());
          },
          [C, b],
        ));
      var L = function () {
          var e = o("WAWebEmoji").EmojiUtil.getGlyphId(i);
          (e != null && o("WAWebEmoji").EmojiUtil.markGlyphCached(e), R(!0));
        },
        E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._ahiv = s === o("WAWebEmojiConst").LargeEmojiSize.MEDIUM),
          (n._ahix = s === o("WAWebEmojiConst").LargeEmojiSize.LARGE),
          (n._ahiy = s === o("WAWebEmojiConst").LargeEmojiSize.XLARGE),
          (n._ar4y = s === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60),
          n),
        ),
        k;
      s === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60
        ? (k = 160)
        : s === o("WAWebEmojiConst").LargeEmojiSize.XLARGE ||
            r("WAWebAssetLoaderDpiChangeDispatch").currentRes === "high"
          ? (k = 64)
          : (k = 40);
      var I = o("WAWebEmoji").EmojiUtil.getGlyphPath(i, k);
      if (I == null) return null;
      if (S && d) {
        var T = g;
        return c.jsxs(T, {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ahiz",
            (e || (e = r("stylex")))(y),
          ),
          children: [
            c.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
              alt: i,
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ahit",
                E,
              ),
              draggable: !1,
              plainText: i,
              selectable: !!h,
              src: r("WAWebConstantsDeprecated").ONE_BY_ONE_TRANS_GIF,
            }),
            c.jsx(r("WAWebImg.react"), {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ahit",
                E,
                "_ahi_",
              ),
              draggable: !1,
              selectable: !1,
              src: I,
            }),
          ],
        });
      }
      var D = S
          ? void 0
          : c.jsx(
              r("WAWebEmoji.react"),
              {
                DEPRECATED_className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease("_ahiw", E),
                emoji: i,
                selectable: h,
                xstyle: y,
              },
              "low-res",
            ),
        x = c.jsx(
          r("WAWebEmoji.react"),
          {
            DEPRECATED_className: o(
              "WAWebClassnames",
            ).classnamesConvertMeToStylexPlease(
              ((a = {}), (a["_ahi-"] = !S), (a._ahit = !0), (a[E] = !0), a),
            ),
            emoji: i,
            onLoad: L,
            selectable: h,
            src: I,
            xstyle: y,
          },
          "high-res",
        );
      return c.jsxs("span", { className: "_ahiu", children: [D, x] });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.SIZE = o("WAWebEmojiConst").LargeEmojiSize),
      (l.LargeEmoji = f));
  },
  98,
);
