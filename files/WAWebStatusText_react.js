__d(
  "WAWebStatusText.react",
  [
    "WALinkify",
    "WAUnicodeUtils",
    "WAWebEmojiText.react",
    "WAWebFontLoader",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebNoop",
    "WAWebProtobufsE2E.pb",
    "WAWebStatusContext",
    "WAWebStatusLinkFormatMutator",
    "WAWebStatusLinkPreview.react",
    "WAWebWamEnumUrlStatusClicked",
    "WAWebWamEnumUrlStatusType",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState,
      p = {
        textLargeEmoji: {
          width: "x1cvuv27",
          height: "x9uazi4",
          transform: "xanp114",
          display: "x1rg5ohu",
          $$css: !0,
        },
        textMediumEmoji: {
          transform: "xanp114",
          display: "x1rg5ohu",
          $$css: !0,
        },
        textSmallEmoji: {
          width: "x1yyxrnf",
          height: "x1r35sqa",
          transform: "x1ni14s7",
          display: "x1rg5ohu",
          $$css: !0,
        },
        textLargeEmojiWithLinkPreview: {
          width: "x1qybzeu",
          height: "x1vdgx54",
          transform: "x1rbuhwb",
          display: "x1rg5ohu",
          $$css: !0,
        },
        textMediumEmojiWithLinkPreview: {
          width: "x1dddjuj",
          height: "xfoc215",
          transform: "x15ypmcq",
          display: "x1rg5ohu",
          $$css: !0,
        },
        text: {
          position: "x10l6tqk",
          left: "x1nrll8i",
          transform: "x11lhmoz",
          top: "xwa60dl",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          maxWidth: "x1lwm3bp",
          paddingTop: "xnk5j39",
          paddingBottom: "xn4wywj",
          paddingInlineStart: "x106a9eq",
          paddingInlineEnd: "x1xnnf8n",
          marginInlineEnd: "x11t971q",
          marginInlineStart: "xvc5jky",
          color: "x17t9dm2",
          wordWrap: "x1vvkbs",
          wordBreak: "x1yn0g08",
          whiteSpace: "x126k92a",
          pointerEvents: "x67bb7w",
          maxHeight: "xmz0i5r",
          overflowWrap: "x1mzt3pk",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        textAnchor: {
          paddingInlineEnd: "xvikjs0",
          paddingInlineStart: "x1bybnoc",
          color: "x17t9dm2",
          pointerEvents: "x3gnuav",
          backgroundColor: "x1casotk",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        column: { flexDirection: "xdt5ytf", $$css: !0 },
        columnTextSmall: { alignItems: "x1cy8zhl", $$css: !0 },
        textLarge: {
          fontSize: "xvzvg7y",
          lineHeight: "x1xuplte",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        textLargeLinkPreview: { fontSize: "xdhfpv1", $$css: !0 },
        textMedium: {
          fontSize: "xdhfpv1",
          lineHeight: "x1swossr",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        textMediumLinkPreview: { fontSize: "x1q74xe4", $$css: !0 },
        textSmall: {
          fontSize: "x1jchvi3",
          lineHeight: "x3gokd0",
          textAlign: "xdpxx8g",
          $$css: !0,
        },
        font_0: { $$css: !0 },
        font_1: { fontFamily: "x1kp91nz", $$css: !0 },
        font_2: { fontFamily: "xspkpnd", $$css: !0 },
      },
      _ = new Map([
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM,
          p.font_0,
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .SYSTEM_TEXT,
          p.font_1,
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .FB_SCRIPT,
          p.font_2,
        ],
      ]),
      f = function (t, n) {
        return (
          n === void 0 && (n = !1),
          t <= 60
            ? [
                [p.textLarge, n && p.textLargeLinkPreview, p.column],
                n ? p.textLargeEmojiWithLinkPreview : p.textLargeEmoji,
              ]
            : t <= 240
              ? [
                  [p.textMedium, n && p.textMediumLinkPreview, p.column],
                  n ? p.textMediumEmojiWithLinkPreview : p.textMediumEmoji,
                ]
              : [[p.textSmall, p.column, p.columnTextSmall], p.textSmallEmoji]
        );
      },
      g = function (t) {
        if (t == null) return null;
        var e = 800,
          n = r("WAWebL10N").isRTL(),
          o = n ? "right" : "left";
        if (t === "status-carousel") {
          var a = 0.11,
            i = n ? 40 : -40;
          return {
            transformOrigin: "top " + o,
            transform:
              "scale(" + a + ") translateX(" + i + "px) translateY(400px)",
            width: e,
            height: e,
          };
        }
        var l = 150,
          s = n ? l : -l,
          u = t === "status-panel" ? 0.16 : 0.08;
        return {
          transformOrigin: "top " + o,
          transform:
            "scale(" + u + ") translateX(" + s + "px) translateY(" + -l + "px)",
          width: e,
          height: e,
        };
      };
    function h(t) {
      var n = t.dataTab,
        a = t.msg,
        i = t.statusItemViewEventRef,
        l =
          o("WAWebMsgGetters").getLinkPreview(a) &&
          o("WAWebFrontendMsgGetters").getAsUrl(a) != null &&
          o("WAWebMsgLinks")
            .getSuspiciousLinks(a)
            .filter(function (e) {
              var t = e.url;
              return a.matchedText === t;
            }).length === 0,
        s = m(0),
        c = s[0],
        h = s[1];
      d(function () {
        o("WAWebFontLoader")
          .FontLoader.loadMessageFont(a.font)
          .catch(r("WAWebNoop"));
      }, []);
      var y = function (t) {
          var e;
          h(
            o("WAUnicodeUtils").numCodepoints(t == null ? void 0 : t.innerText),
          );
          var n = t == null ? void 0 : t.querySelector("a"),
            r = i == null ? void 0 : i.current;
          if (!(!l || n == null || r == null)) {
            var a = o("WALinkify").findLink(n.href);
            if (a) {
              var s = o("WAWebStatusLinkFormatMutator").cleanUrl(a);
              s.join("") !== ((e = n.innerText) == null ? void 0 : e.trim()) &&
                (r.urlStatusType = o(
                  "WAWebWamEnumUrlStatusType",
                ).URL_STATUS_TYPE.TRUNCATED);
            }
          }
        },
        C = f(c, l),
        b = C[0],
        v = C[1],
        S = o("WAWebMsgLinks").getLinksFromMsg(a),
        R = p.textAnchor,
        L = o("WAWebFormatConfiguration").StatusText({
          links: S,
          linkXstyle: R,
          emojiXstyle: v,
          dataTab: n,
        });
      l &&
        i != null &&
        i.current &&
        i.current.urlStatusType ===
          o("WAWebWamEnumUrlStatusType").URL_STATUS_TYPE.NO_PREVIEW &&
        (i.current.urlStatusType = o(
          "WAWebWamEnumUrlStatusType",
        ).URL_STATUS_TYPE.NON_TRUNCATED);
      var E = function (t) {
          var e = i == null ? void 0 : i.current;
          e &&
            t.target instanceof HTMLAnchorElement &&
            e.urlStatusClicked ===
              o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.NO_CLICK &&
            (e.urlStatusClicked = o(
              "WAWebWamEnumUrlStatusClicked",
            ).URL_STATUS_CLICKED.ONE_CLICK);
        },
        k = g(t.theme);
      return u.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
        onClick: E,
        onMouseDown: t.onMouseDown,
        onMouseUp: t.onMouseUp,
        style: k,
        children: u.jsx(o("WAWebStatusContext").StatusContext.Provider, {
          value: { statusItemViewEventRef: i },
          children: u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(p.text, b, _.get(a.font)),
              {
                "data-testid": void 0,
                children: [
                  l
                    ? u.jsx(r("WAWebStatusLinkPreview.react"), {
                        msg: a.unsafe(),
                        length: c,
                      })
                    : null,
                  u.jsx("div", {
                    ref: y,
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: t.msg.body,
                      formatters: L,
                    }),
                  }),
                ],
              },
            ),
          ),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
