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
      var n = t.botPluginSearchProvider,
        a = t.botPluginSearchQuery,
        i = t.botPluginSearchUrl,
        l = t.t,
        s = t.theme;
      if (n == null || i == null) return null;
      var m = null;
      switch (n) {
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .GOOGLE:
          m = u.jsx(
            o("WAWebSearchPluginGoogleIconIcon.react")
              .SearchPluginGoogleIconIcon,
            { height: d },
          );
          break;
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .BING:
          m = u.jsx(
            o("WAWebSearchPluginBingIconIcon.react").SearchPluginBingIconIcon,
            { height: d },
          );
          break;
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .SUPPORT:
        case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider
          .UNKNOWN:
          break;
      }
      var p = null;
      s !== "date"
        ? l != null && (p = o("WAWebClock").Clock.timestampStr(l))
        : l != null && (p = o("WAWebClock").Clock.relativeStr(l));
      var _ =
        a != null
          ? u.jsx("div", {
              className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
              children: u.jsx(r("WDSTextualLink.react"), {
                href: i,
                textConfig: "Body1",
                children: a,
              }),
            })
          : null;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            o("WAWebUISpacing").uiMargin.top15,
            o("WAWebUISpacing").uiMargin.start9,
            o("WAWebUISpacing").uiMargin.end9,
            c.container,
          ]),
          {
            children: [
              u.jsx("div", {
                className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
                children: u.jsxs("div", {
                  className: "x78zum5 x6ikm8r x10wlt62",
                  children: [
                    m,
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props([
                          o("WAWebUISpacing").uiPadding.start10,
                          o("WAWebUISpacing").uiPadding.top1,
                          c.hideOverflow,
                        ]),
                        { children: _ },
                      ),
                    ),
                  ],
                }),
              }),
              u.jsx("div", {
                className: "x78zum5 x13a6bvl xpqajaz",
                children: p,
              }),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
