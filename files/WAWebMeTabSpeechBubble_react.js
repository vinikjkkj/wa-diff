__d(
  "WAWebMeTabSpeechBubble.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutPrompts",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebClickable.react",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "react",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = 24,
      _ = 8,
      f = {
        clickable: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      };
    function g(e) {
      "use no forget";
      var t,
        n,
        r = e.contactId,
        a = e.onClick,
        i = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled(),
        l = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
        c = s._(/*BTDS*/ "View about"),
        p = o("WAWebContactCollection").ContactCollection.gadd(r),
        _ = o("useWAWebContactValues").useContactValues(p.id, [
          (n = o("WAWebFrontendContactGetters")).getTextStatusString,
          n.getTextStatusEmoji,
          n.getTextStatusExpiryTs,
          n.getTextStatusEphemeralDuration,
          n.getTextStatusLastUpdateTime,
        ]),
        g = _[0],
        h = _[1],
        y = _[2],
        C = _[3],
        b = _[4],
        v = o("WAWebTextStatusUtils").hasTextStatusSet(g, h, b, y, C),
        S = m(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        R = S[0],
        L = (t = e.promptKey) != null ? t : R,
        E = o("WAWebAboutPrompts").getAboutPromptText(L),
        k = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      d(
        function () {
          if (
            !(
              !l ||
              y == null ||
              C === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE
            )
          ) {
            var e =
              o("WATimeUtils").secondsUntil(
                o("WATimeUtils").castToUnixTime(y),
              ) * 1e3;
            if (!(e <= 0)) {
              var t = setTimeout(function () {
                k();
              }, e);
              return function () {
                return clearTimeout(t);
              };
            }
          }
        },
        [l, y, C, k],
      );
      var I;
      l
        ? (I = !0)
        : i
          ? (I = o("WAWebChatTextStatusWrapper").willTextStatusDisplayContent(
              r,
            ))
          : (I = o("WAWebChatStatus").willStatusDisplayContent(r));
      var T;
      if (
        (l && !v
          ? (T = E)
          : i
            ? (T = u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: r,
              }))
            : (T = u.jsx(o("WAWebChatStatus").StatusWrapper, { id: r })),
        !I)
      )
        return null;
      var D = l && !v,
        x = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            { 0: { className: "x14ug900" }, 1: { className: "xhslqc4" } }[
              !!D << 0
            ],
            { children: T },
          ),
        );
      return u.jsxs("div", {
        className: "x1n2onr6 x1vjfegm x78zum5 xdt5ytf x6s0dn4 xc4flck",
        children: [
          u.jsx("div", {
            className:
              "x16w0wmm x1g83kfv x3qq2k7 x2x8art x1qor8vf xz9dl7a xsag5q8 x106a9eq x1xnnf8n x14uwln3 xxlh38d x78zum5 x6s0dn4 xl56j7k x2b8uid x1i9suas x1gfrnbc",
            children: u.jsx(o("WAWebClickable.react").Clickable, {
              onClick: function () {
                return a(v ? null : L);
              },
              ariaLabel: c,
              xstyle: f.clickable,
              "data-tab": 0,
              tabIndex: 0,
              children: x,
            }),
          }),
          u.jsx("div", {
            className:
              "x1n2onr6 xvy4d1p xxk0z11 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14uwln3 x4arcmf x18ofunw x18coyug",
          }),
          u.jsx("div", {
            className:
              "x1n2onr6 x1xc55vz xdk7pt x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xr9ek0c x14uwln3 x1sc9c76",
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
