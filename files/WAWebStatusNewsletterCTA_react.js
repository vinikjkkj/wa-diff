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
      var n = t.msg,
        a = t.xstyle,
        i = n.forwardedNewsletterMessageInfo;
      if (i == null) return null;
      var l = i.newsletterId,
        u = i.serverMessageId;
      if (l == null) return null;
      var p = function () {
          (o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
              identifier: l.toString(),
              identifierType: o("WAWebNewsletterApiParse")
                .NewsletterIdentifierType.Id,
              type: "view",
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterCTAOnStatus,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .STATUS_VIEW,
              serverId: u,
            }));
        },
        _ = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          onClick: p,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                children: c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
                  height: d,
                  width: d,
                }),
              }),
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
          }),
        });
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        className: (e || (e = r("stylex")))(a),
        children: [
          c.jsx("div", {
            children: o("WAWebClock").Clock.statusTimePassedString(n.t),
          }),
          c.jsx("div", { className: "x181vq82 x1uc92m", children: "\xB7" }),
          _,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
