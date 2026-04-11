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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(33),
        a = e.onLogout,
        i = e.onPasskeyComplete,
        l = e.onPasskeyError,
        u = e.passkeyChallenge,
        c = d("idle"),
        p = c[0],
        _ = c[1],
        f;
      t[0] !== i || t[1] !== l || t[2] !== u
        ? ((f = function () {
            (_("pending"),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o(
                    "WAWebIntegrityChallengeUtils",
                  ).performPasskeyAssertion(u);
                  (_("success"), yield i(e));
                } catch (e) {
                  var t = e,
                    n = t instanceof Error ? t.message : "Unknown error";
                  (_("idle"), l(n));
                }
              })());
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = u),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h = p === "pending" || p === "success",
        y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            m.wrapper,
            r("WAWebEnvironment").isWeb ? m.wrapperWeb : m.wrapperWindows,
          ]),
          (t[4] = y))
        : (y = t[4]);
      var C;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: m.headerContainer,
            shrink: 0,
            children: s.jsx(r("WAWebLandingHeader.react"), {
              showAppDownloadButton: !1,
              surface: "lock-screen",
            }),
          })),
          (t[5] = C))
        : (C = t[5]);
      var b, v, S, R, L;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "xewp6mh x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1elprg2 xdounpk",
          }),
          (v = { className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9" }),
          (S = { className: "x78zum5 xdt5ytf x1cy8zhl xfkdz6z x1iyjqo2" }),
          (R = s.jsx("span", {
            className: "xngnso2 xo1l8bm x1mqxbix",
            children: o(
              "WAWebCheckpointModalStrings",
            ).getCheckpointPasskeyTitle(),
          })),
          (L = s.jsx("span", {
            className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
            children: o(
              "WAWebCheckpointModalStrings",
            ).getCheckpointPasskeyDescription(),
          })),
          (t[6] = b),
          (t[7] = v),
          (t[8] = S),
          (t[9] = R),
          (t[10] = L))
        : ((b = t[6]), (v = t[7]), (S = t[8]), (R = t[9]), (L = t[10]));
      var E;
      t[11] !== h
        ? ((E = {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 xfex06f xy7xkci x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z x1ypdohk xjb2p0i x1f6kntn",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 xfex06f xy7xkci x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z xjb2p0i x1f6kntn x197sbye x1h6gzvc",
            },
          }[!!h << 0]),
          (t[11] = h),
          (t[12] = E))
        : (E = t[12]);
      var k, I;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o(
            "WAWebCheckpointModalStrings",
          ).getCheckpointContinueButtonText()),
          (I = s.jsx(r("WDSIconIcArrowForward.react"), {
            height: 16,
            width: 16,
          })),
          (t[13] = k),
          (t[14] = I))
        : ((k = t[13]), (I = t[14]));
      var T;
      t[15] !== g || t[16] !== h || t[17] !== E
        ? ((T = s.jsxs(
            "div",
            babelHelpers.extends({}, S, {
              children: [
                R,
                L,
                s.jsxs(
                  "button",
                  babelHelpers.extends({}, E, {
                    disabled: h,
                    onClick: g,
                    type: "button",
                    children: [k, I],
                  }),
                ),
              ],
            }),
          )),
          (t[15] = g),
          (t[16] = h),
          (t[17] = E),
          (t[18] = T))
        : (T = t[18]);
      var D;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
            children: s.jsx(
              o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon,
              { height: 88, width: 88 },
            ),
          })),
          (t[19] = D))
        : (D = t[19]);
      var x;
      t[20] !== T
        ? ((x = s.jsx(
            "div",
            babelHelpers.extends({}, b, {
              children: s.jsxs(
                "div",
                babelHelpers.extends({}, v, { children: [T, D] }),
              ),
            }),
          )),
          (t[20] = T),
          (t[21] = x))
        : (x = t[21]);
      var $;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = {
            className:
              "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu xyri2b x18d9i69 x1c1uobl xqui205",
          }),
          (t[22] = $))
        : ($ = t[22]);
      var P, N;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s.jsx("span", {
            className: "x1f6kntn xk50ysn x1mqxbix x1bvjpef xlkh4gg xdounpk",
            children: o(
              "WAWebCheckpointModalStrings",
            ).getCheckpointLogoutText(),
          })),
          (N = s.jsx(r("WDSIconIcLogout.react"), { height: 16, width: 16 })),
          (t[23] = P),
          (t[24] = N))
        : ((P = t[23]), (N = t[24]));
      var M;
      t[25] !== a
        ? ((M = s.jsxs(
            "button",
            babelHelpers.extends({}, $, {
              onClick: a,
              type: "button",
              children: [P, N],
            }),
          )),
          (t[25] = a),
          (t[26] = M))
        : (M = t[26]);
      var w;
      t[27] !== x || t[28] !== M
        ? ((w = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 0,
            children: [x, M],
          })),
          (t[27] = x),
          (t[28] = M),
          (t[29] = w))
        : (w = t[29]);
      var A;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: m.headerContainer,
          })),
          (t[30] = A))
        : (A = t[30]);
      var F;
      return (
        t[31] !== w
          ? ((F = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: y,
              children: [C, w, A],
            })),
            (t[31] = w),
            (t[32] = F))
          : (F = t[32]),
        F
      );
    }
    l.default = p;
  },
  98,
);
