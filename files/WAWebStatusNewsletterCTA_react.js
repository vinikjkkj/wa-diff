__d(
  "WAWebStatusNewsletterCTA.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebChevronIcon.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterIcon.react",
    "WAWebWamEnumTsSurface",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 14,
      m = { cta: { cursor: "x1ypdohk", $$css: !0 } };
    function p(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.msg,
        i = t.xstyle,
        l = a.forwardedNewsletterMessageInfo;
      if (l == null) return null;
      var u = l.newsletterId,
        p = l.serverMessageId;
      if (u == null) return null;
      var _;
      n[0] !== u || n[1] !== p
        ? ((_ = function () {
            (o("WAWebCmd").Cmd.closeStatusViewer(),
              o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
                identifier: u.toString(),
                identifierType: o("WAWebNewsletterApiParse")
                  .NewsletterIdentifierType.Id,
                type: "view",
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterCTAOnStatus,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .STATUS_VIEW,
                serverId: p,
              }));
          }),
          (n[0] = u),
          (n[1] = p),
          (n[2] = _))
        : (_ = n[2]);
      var f = _,
        g;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(o("WAWebFlex.react").FlexItem, {
            children: c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
              height: d,
              width: d,
            }),
          })),
          (n[3] = g))
        : (g = n[3]);
      var h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            children: [
              g,
              c.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: m.cta,
                children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    s._(/*BTDS*/ "View channel"),
                    c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                      directional: !0,
                      height: d,
                      width: d,
                    }),
                  ],
                }),
              }),
            ],
          })),
          (n[4] = h))
        : (h = n[4]);
      var y;
      n[5] !== f
        ? ((y = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onClick: f,
            children: h,
          })),
          (n[5] = f),
          (n[6] = y))
        : (y = n[6]);
      var C = y,
        b;
      n[7] !== i
        ? ((b = (e || (e = r("stylex")))(i)), (n[7] = i), (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] !== a.t
        ? ((v = o("WAWebClock").Clock.statusTimePassedString(a.t)),
          (n[9] = a.t),
          (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] !== v
        ? ((S = c.jsx("div", { children: v })), (n[11] = v), (n[12] = S))
        : (S = n[12]);
      var R;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = c.jsx("div", {
            className: "x181vq82 x1uc92m",
            children: "\xB7",
          })),
          (n[13] = R))
        : (R = n[13]);
      var L;
      return (
        n[14] !== C || n[15] !== b || n[16] !== S
          ? ((L = c.jsxs(o("WAWebFlex.react").FlexRow, {
              className: b,
              children: [S, R, C],
            })),
            (n[14] = C),
            (n[15] = b),
            (n[16] = S),
            (n[17] = L))
          : (L = n[17]),
        L
      );
    }
    l.default = p;
  },
  226,
);
