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
    "WAWebThemeContext",
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
          minWidth: "xeuugli",
          $$css: !0,
        },
      };
    function g(e) {
      "use no forget";
      var t,
        n,
        r,
        a,
        i = e.contactId,
        l = e.onClick,
        c = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled(),
        p = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
        _ = o("WAWebThemeContext").useIsDarkTheme(),
        g = s._(/*BTDS*/ "View about"),
        h = o("WAWebContactCollection").ContactCollection.gadd(i),
        y = o("useWAWebContactValues").useContactValues(h.id, [
          (a = o("WAWebFrontendContactGetters")).getTextStatusString,
          a.getTextStatusEmoji,
          a.getTextStatusExpiryTs,
          a.getTextStatusEphemeralDuration,
          a.getTextStatusLastUpdateTime,
        ]),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L = o("WAWebTextStatusUtils").hasTextStatusSet(C, b, R, v, S),
        E = m(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        k = E[0],
        I = (t = e.promptKey) != null ? t : k,
        T = o("WAWebAboutPrompts").getAboutPromptText(I),
        D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      d(
        function () {
          if (
            !(
              !p ||
              v == null ||
              S === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE
            )
          ) {
            var e =
              o("WATimeUtils").secondsUntil(
                o("WATimeUtils").castToUnixTime(v),
              ) * 1e3;
            if (!(e <= 0)) {
              var t = setTimeout(function () {
                D();
              }, e);
              return function () {
                return clearTimeout(t);
              };
            }
          }
        },
        [p, v, S, D],
      );
      var x;
      p
        ? (x = !0)
        : c
          ? (x = o("WAWebChatTextStatusWrapper").willTextStatusDisplayContent(
              i,
            ))
          : (x = o("WAWebChatStatus").willStatusDisplayContent(i));
      var $;
      if (
        (p && !L
          ? ($ = T)
          : c
            ? ($ = u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: i,
                ellipsify: !1,
              }))
            : ($ = u.jsx(o("WAWebChatStatus").StatusWrapper, { id: i })),
        !x)
      )
        return null;
      var P = p && !L,
        N =
          ((n = C == null ? void 0 : C.length) != null ? n : 0) +
            ((r = b == null ? void 0 : b.length) != null ? r : 0) >
          15,
        M = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x14ug900" },
              2: { className: "xhslqc4" },
              1: { className: "x14ug900 x1nxh6w3" },
              3: { className: "xhslqc4 x1nxh6w3" },
            }[(!!P << 1) | (!!N << 0)],
            { children: $ },
          ),
        );
      return u.jsxs("div", {
        className: "x1n2onr6 x1vjfegm x78zum5 xdt5ytf x6s0dn4 xc4flck",
        children: [
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x16w0wmm x1g83kfv x3qq2k7 x2x8art x1qor8vf xz9dl7a xsag5q8 x106a9eq x1xnnf8n x14uwln3 xxlh38d x78zum5 x6s0dn4 xl56j7k x2b8uid x548zag xgtmz09",
                },
                1: {
                  className:
                    "x16w0wmm x1g83kfv x3qq2k7 x2x8art x1qor8vf xz9dl7a xsag5q8 x106a9eq x1xnnf8n x14uwln3 xxlh38d x78zum5 x6s0dn4 xl56j7k x2b8uid x548zag xgtmz09 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
                },
              }[!!_ << 0],
              {
                children: u.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: function () {
                    return l(L ? null : I);
                  },
                  ariaLabel: g,
                  xstyle: f.clickable,
                  "data-tab": 0,
                  tabIndex: 0,
                  children: M,
                }),
              },
            ),
          ),
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x1n2onr6 xvy4d1p xxk0z11 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14uwln3 x4arcmf x18ofunw x18coyug",
                },
                1: {
                  className:
                    "x1n2onr6 xvy4d1p xxk0z11 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14uwln3 x4arcmf x18ofunw x18coyug x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
                },
              }[!!_ << 0],
            ),
          ),
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x1n2onr6 x1xc55vz xdk7pt x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xr9ek0c x14uwln3 x1sc9c76",
                },
                1: {
                  className:
                    "x1n2onr6 x1xc55vz xdk7pt x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xr9ek0c x14uwln3 x1sc9c76 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
                },
              }[!!_ << 0],
            ),
          ),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
