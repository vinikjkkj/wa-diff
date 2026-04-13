__d(
  "WAWebBotPluginMsgBubbleMeta.react",
  [
    "WAWebClock",
    "WAWebProtobufsAICommon.pb",
    "WAWebSearchPluginBingIconIcon.react",
    "WAWebSearchPluginGoogleIconIcon.react",
    "WAWebUISpacing",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          $$css: !0,
        },
        hideOverflow: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      d = 16;
    function m(t) {
      var n = o("react-compiler-runtime").c(26),
        a = t.botPluginSearchProvider,
        i = t.botPluginSearchQuery,
        l = t.botPluginSearchUrl,
        s = t.t,
        m = t.theme;
      if (a == null || l == null) return null;
      var p = null;
      e: switch (a) {
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .GOOGLE: {
          var _;
          (n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = u.jsx(
                o("WAWebSearchPluginGoogleIconIcon.react")
                  .SearchPluginGoogleIconIcon,
                { height: d },
              )),
              (n[0] = _))
            : (_ = n[0]),
            (p = _));
          break e;
        }
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .BING: {
          var f;
          (n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = u.jsx(
                o("WAWebSearchPluginBingIconIcon.react")
                  .SearchPluginBingIconIcon,
                { height: d },
              )),
              (n[1] = f))
            : (f = n[1]),
            (p = f));
          break e;
        }
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .SUPPORT:
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .UNKNOWN:
      }
      var g = null;
      if (m !== "date") {
        if (s != null) {
          var h;
          (n[2] !== s
            ? ((h = o("WAWebClock").Clock.timestampStr(s)),
              (n[2] = s),
              (n[3] = h))
            : (h = n[3]),
            (g = h));
        }
      } else if (s != null) {
        var y;
        (n[4] !== s
          ? ((y = o("WAWebClock").Clock.relativeStr(s)), (n[4] = s), (n[5] = y))
          : (y = n[5]),
          (g = y));
      }
      var C;
      n[6] !== i || n[7] !== l
        ? ((C =
            i != null
              ? u.jsx("div", {
                  className:
                    "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
                  children: u.jsx(r("WDSTextualLink.react"), {
                    href: l,
                    textConfig: "Body1",
                    children: i,
                  }),
                })
              : null),
          (n[6] = i),
          (n[7] = l),
          (n[8] = C))
        : (C = n[8]);
      var b = C,
        v,
        S,
        R;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex"))).props([
            o("WAWebUISpacing").uiMargin.top15,
            o("WAWebUISpacing").uiMargin.start9,
            o("WAWebUISpacing").uiMargin.end9,
            c.container,
          ])),
          (S = {
            className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
          }),
          (R = { className: "x78zum5 x6ikm8r x10wlt62" }),
          (n[9] = v),
          (n[10] = S),
          (n[11] = R))
        : ((v = n[9]), (S = n[10]), (R = n[11]));
      var L = p,
        E;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (e || (e = r("stylex"))).props([
            o("WAWebUISpacing").uiPadding.start10,
            o("WAWebUISpacing").uiPadding.top1,
            c.hideOverflow,
          ])),
          (n[12] = E))
        : (E = n[12]);
      var k;
      n[13] !== b || n[14] !== E
        ? ((k = u.jsx("div", babelHelpers.extends({}, E, { children: b }))),
          (n[13] = b),
          (n[14] = E),
          (n[15] = k))
        : (k = n[15]);
      var I;
      n[16] !== p || n[17] !== k
        ? ((I = u.jsx(
            "div",
            babelHelpers.extends({}, S, {
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, R, { children: [L, k] }),
              ),
            }),
          )),
          (n[16] = p),
          (n[17] = k),
          (n[18] = I))
        : (I = n[18]);
      var T;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x78zum5 x13a6bvl xpqajaz" }), (n[19] = T))
        : (T = n[19]);
      var D;
      n[20] !== g
        ? ((D = u.jsx("div", babelHelpers.extends({}, T, { children: g }))),
          (n[20] = g),
          (n[21] = D))
        : (D = n[21]);
      var x;
      return (
        n[22] !== D || n[23] !== v || n[24] !== I
          ? ((x = u.jsxs(
              "div",
              babelHelpers.extends({}, v, { children: [I, D] }),
            )),
            (n[22] = D),
            (n[23] = v),
            (n[24] = I),
            (n[25] = x))
          : (x = n[25]),
        x
      );
    }
    l.default = m;
  },
  98,
);
