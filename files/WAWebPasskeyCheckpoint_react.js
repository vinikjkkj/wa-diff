__d(
  "WAWebPasskeyCheckpoint.react",
  [
    "WAWebCheckpointModalStrings",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebIntegrityChallengeUtils",
    "WAWebLandingHeader.react",
    "WAWebWdsPictoPasskeyIcon.react",
    "WDSIconIcArrowForward.react",
    "WDSIconIcLogout.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = {
        wrapper: {
          position: "xixxii4",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xn9wirt",
          height: "x1dr59a3",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xu7uy1i",
          paddingInlineEnd: "x1t7qo4d",
          boxSizing: "x9f619",
          zIndex: "xfo81ep",
          $$css: !0,
        },
        wrapperWeb: { background: "xe4h88v", $$css: !0 },
        wrapperWindows: { background: "xp8kixx", $$css: !0 },
        headerContainer: { width: "xh8yej3", height: "xwzfr38", $$css: !0 },
      };
    function p(e) {
      var t = e.onLogout,
        a = e.onPasskeyComplete,
        i = e.onPasskeyError,
        l = e.passkeyChallenge,
        u = d("idle"),
        p = u[0],
        _ = u[1],
        f = c(
          function () {
            (_("pending"),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o(
                    "WAWebIntegrityChallengeUtils",
                  ).performPasskeyAssertion(l);
                  (_("success"), yield a(e));
                } catch (e) {
                  var t = e instanceof Error ? e.message : "Unknown error";
                  (_("idle"), i(t));
                }
              })());
          },
          [l, a, i],
        ),
        g = p === "pending" || p === "success";
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: [
          m.wrapper,
          r("WAWebEnvironment").isWeb ? m.wrapperWeb : m.wrapperWindows,
        ],
        children: [
          s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: m.headerContainer,
            shrink: 0,
            children: s.jsx(r("WAWebLandingHeader.react"), {
              showAppDownloadButton: !1,
              surface: "lock-screen",
            }),
          }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 0,
            children: [
              s.jsx("div", {
                className:
                  "xewp6mh x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1elprg2 xdounpk",
                children: s.jsxs("div", {
                  className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9",
                  children: [
                    s.jsxs("div", {
                      className: "x78zum5 xdt5ytf x1cy8zhl xfkdz6z x1iyjqo2",
                      children: [
                        s.jsx("span", {
                          className: "xngnso2 xo1l8bm x1mqxbix",
                          children: o(
                            "WAWebCheckpointModalStrings",
                          ).getCheckpointPasskeyTitle(),
                        }),
                        s.jsx("span", {
                          className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
                          children: o(
                            "WAWebCheckpointModalStrings",
                          ).getCheckpointPasskeyDescription(),
                        }),
                        s.jsxs(
                          "button",
                          babelHelpers.extends(
                            {},
                            {
                              0: {
                                className:
                                  "x78zum5 x1q0g3np x6s0dn4 xfex06f xy7xkci x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z x1ypdohk xjb2p0i x1f6kntn",
                              },
                              1: {
                                className:
                                  "x78zum5 x1q0g3np x6s0dn4 xfex06f xy7xkci x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z xjb2p0i x1f6kntn x197sbye x1h6gzvc",
                              },
                            }[!!g << 0],
                            {
                              disabled: g,
                              onClick: f,
                              type: "button",
                              children: [
                                o(
                                  "WAWebCheckpointModalStrings",
                                ).getCheckpointContinueButtonText(),
                                s.jsx(r("WDSIconIcArrowForward.react"), {
                                  height: 16,
                                  width: 16,
                                }),
                              ],
                            },
                          ),
                        ),
                      ],
                    }),
                    s.jsx("div", {
                      className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
                      children: s.jsx(
                        o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon,
                        { height: 88, width: 88 },
                      ),
                    }),
                  ],
                }),
              }),
              s.jsxs("button", {
                className:
                  "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu xyri2b x18d9i69 x1c1uobl xqui205",
                onClick: t,
                type: "button",
                children: [
                  s.jsx("span", {
                    className:
                      "x1f6kntn xk50ysn x1mqxbix x1bvjpef xlkh4gg xdounpk",
                    children: o(
                      "WAWebCheckpointModalStrings",
                    ).getCheckpointLogoutText(),
                  }),
                  s.jsx(r("WDSIconIcLogout.react"), { height: 16, width: 16 }),
                ],
              }),
            ],
          }),
          s.jsx(o("WAWebFlex.react").FlexItem, { xstyle: m.headerContainer }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
