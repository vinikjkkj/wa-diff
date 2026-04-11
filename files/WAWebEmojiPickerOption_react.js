__d(
  "WAWebEmojiPickerOption.react",
  [
    "WAWebBoolFunc",
    "WAWebConnModel",
    "WAWebDropdownItem.react",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMobilePlatforms",
    "bx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("bx").getURL(r("bx")("9551")),
      c = r("bx").getURL(r("bx")("9552")),
      d = r("bx").getURL(r("bx")("9553")),
      m = r("bx").getURL(r("bx")("9554")),
      p = new Set([
        o("WAWebEmoji").KISS_WOMAN_MAN,
        o("WAWebEmoji").KISS_WOMAN_WOMAN,
        o("WAWebEmoji").KISS_MAN_MAN,
        o("WAWebEmoji").KISS,
        o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_MAN,
        o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_WOMAN,
        o("WAWebEmoji").COUPLE_WITH_HEART_MAN_MAN,
        o("WAWebEmoji").COUPLE_WITH_HEART,
      ]),
      _ = new Set([
        o("WAWebEmoji").PEOPLE_HOLDING_HANDS,
        o("WAWebEmoji").WOMEN_HOLDING_HANDS,
        o("WAWebEmoji").MEN_HOLDING_HANDS,
        o("WAWebEmoji").WOMAN_AND_MAN_HOLDING_HANDS,
      ]);
    function f(e) {
      var t = e.action,
        n = t === void 0 ? o("WAWebBoolFunc").returnFalse : t,
        r = e.emoji,
        a = e.base,
        i = e.leftEmojiVariation,
        l = i === void 0 ? !1 : i,
        f = e.rightEmojiVariation,
        g = f === void 0 ? !1 : f,
        h = e.showBaseEmoji,
        y = h === void 0 ? !1 : h,
        C = e.selected,
        b = C === void 0 ? !1 : C,
        v = e.testid,
        S = p.has(a),
        R = o("WAWebEmoji").HANDSHAKE === a,
        L = _.has(a),
        E =
          (o("WAWebConnModel").Conn.platform ===
            o("WAWebMobilePlatforms").PLATFORMS.ANDROID ||
            o("WAWebConnModel").Conn.platform ===
              o("WAWebMobilePlatforms").PLATFORMS.SMBA) &&
          (a === o("WAWebEmoji").KISS_WOMAN_WOMAN ||
            a === o("WAWebEmoji").COUPLE_WITH_HEART_WOMAN_WOMAN),
        k =
          o("WAWebConnModel").Conn.platform ===
            o("WAWebMobilePlatforms").PLATFORMS.ANDROID ||
          o("WAWebConnModel").Conn.platform ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBA
            ? m
            : u,
        I = a === r,
        T = I || (!l && !g),
        D;
      return (
        T
          ? (D = s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: n,
              type: "emoji-preview",
              children: s.jsxs("div", {
                className: "x1n2onr6 x90ne7k",
                children: [
                  s.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "x90ne7k" },
                        1: { className: "x90ne7k x1fw281u" },
                      }[!!(I && !y) << 0],
                      {
                        children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: r,
                          formatters: o(
                            "WAWebFormatConfiguration",
                          ).LargeEmojiOnly(),
                          tabIndex: "-1",
                        }),
                      },
                    ),
                  ),
                  I &&
                    !y &&
                    S &&
                    s.jsx("img", {
                      src: k,
                      alt: "Heart",
                      className: "x10w6t97 x1td3qas x1n2onr6 xepu288",
                    }),
                ],
              }),
            }))
          : L || S
            ? (D = s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                action: n,
                type: "emoji-preview",
                children: s.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1n2onr6 x90ne7k" },
                      1: {
                        className:
                          "x1n2onr6 x90ne7k x53faa5 x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5",
                      },
                    }[!!b << 0],
                    {
                      children: [
                        s.jsx(
                          "div",
                          babelHelpers.extends(
                            {},
                            {
                              0: { className: "x1n2onr6 x1ys8fmf" },
                              4: { className: "x1n2onr6 xee18i3" },
                              2: { className: "x1n2onr6 x1fveu2v" },
                              6: { className: "x1n2onr6 x1fveu2v" },
                              1: { className: "x1n2onr6 x1ys8fmf x1fw281u" },
                              5: { className: "x1n2onr6 xee18i3 x1fw281u" },
                              3: { className: "x1n2onr6 x1fveu2v x1fw281u" },
                              7: { className: "x1n2onr6 x1fveu2v x1fw281u" },
                            }[(!!S << 2) | (!!E << 1) | (!!l << 0)],
                            {
                              children: s.jsx(
                                o("WAWebEmojiText.react").EmojiText,
                                {
                                  text: r,
                                  formatters: o(
                                    "WAWebFormatConfiguration",
                                  ).LargeEmojiOnly(),
                                  tabIndex: "-1",
                                },
                              ),
                            },
                          ),
                        ),
                        s.jsx(
                          "div",
                          babelHelpers.extends(
                            {},
                            {
                              0: {
                                className: "x10l6tqk x13vifvy x1o0tod x1k33vu5",
                              },
                              4: {
                                className: "x10l6tqk x13vifvy x1o0tod x1h21ihg",
                              },
                              2: {
                                className: "x10l6tqk x13vifvy x1o0tod x1avug1o",
                              },
                              6: {
                                className: "x10l6tqk x13vifvy x1o0tod x1avug1o",
                              },
                              1: {
                                className:
                                  "x10l6tqk x13vifvy x1o0tod x1k33vu5 x1fw281u",
                              },
                              5: {
                                className:
                                  "x10l6tqk x13vifvy x1o0tod x1h21ihg x1fw281u",
                              },
                              3: {
                                className:
                                  "x10l6tqk x13vifvy x1o0tod x1avug1o x1fw281u",
                              },
                              7: {
                                className:
                                  "x10l6tqk x13vifvy x1o0tod x1avug1o x1fw281u",
                              },
                            }[(!!S << 2) | (!!E << 1) | (!!g << 0)],
                            {
                              children: s.jsx(
                                o("WAWebEmojiText.react").EmojiText,
                                {
                                  text: r,
                                  formatters: o(
                                    "WAWebFormatConfiguration",
                                  ).LargeEmojiOnly(),
                                  tabIndex: "-1",
                                },
                              ),
                            },
                          ),
                        ),
                        S &&
                          s.jsx("img", {
                            src: k,
                            alt: "Heart",
                            className: "x10w6t97 x1td3qas x1n2onr6 xepu288",
                          }),
                      ],
                    },
                  ),
                ),
              }))
            : R &&
              (D = s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                action: n,
                type: "emoji-preview",
                children: s.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1n2onr6 x90ne7k" },
                      1: {
                        className:
                          "x1n2onr6 x90ne7k x53faa5 x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5",
                      },
                    }[!!b << 0],
                    {
                      children: [
                        s.jsx("div", {
                          className: "x1n2onr6",
                          children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: r,
                            formatters: o(
                              "WAWebFormatConfiguration",
                            ).LargeEmojiOnly(),
                            tabIndex: "-1",
                          }),
                        }),
                        s.jsx(
                          "img",
                          babelHelpers.extends(
                            {
                              src: l ? d : c,
                              alt:
                                (l ? "Right" : "Left") +
                                " shake hand silhouette",
                            },
                            {
                              0: {
                                className:
                                  "xojvqvm x1npj6m0 x1n2onr6 xepu288 x10b2gpd xc3n6vs x1fw281u",
                              },
                              1: {
                                className:
                                  "xojvqvm x1npj6m0 x1n2onr6 xepu288 x10b2gpd x1fw281u",
                              },
                            }[!!l << 0],
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              })),
        s.jsx("div", {
          className: "x1ua1l7f",
          "data-testid": void 0,
          children: D,
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
