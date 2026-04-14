__d(
  "WAWebInitialsProfilePicture.react",
  [
    "$InternalEnum",
    "WABidi",
    "WAWebInitialsFromNameUtils",
    "react",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored([
        "Default",
        "GroupChatProfilePicture",
        "NewsletterQuestionsResponses",
      ]),
      d = {
        initialsBackground: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "x1awj2ng",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        initialsNewsletterResponses: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          $$css: !0,
        },
        initialsDefault: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function m(t) {
      var n = t.backgroundColorId,
        a = t.initialsData,
        i = t.theme,
        l = i === void 0 ? c.Default : i,
        s = t.wid,
        m = o("useWAWebDefaultProfileColors").useDefaultProfileColors(s),
        p = m.background,
        _ = m.foreground,
        f = o("useWAWebGroupColors").useGroupsColorStyle(n, "background");
      f = p != null ? p : f;
      var g = a.firstInitial != null && a.secondInitial != null,
        h = o("WAWebInitialsFromNameUtils").supportedAlphabetsMap.get(
          o("WAWebInitialsFromNameUtils").InitialsAlphabets.HAN,
        ),
        y = !1;
      if (
        h &&
        a.secondInitial != null &&
        h.test(a == null ? void 0 : a.secondInitial)
      ) {
        var C,
          b = ((C = a.secondInitial) == null ? void 0 : C.length) || 0;
        y = b > 1;
      }
      var v =
          a.firstInitial != null && o("WABidi").dir(a.firstInitial) === "rtl"
            ? "rtl"
            : "ltr",
        S =
          l === c.NewsletterQuestionsResponses
            ? d.initialsNewsletterResponses
            : d.initialsDefault;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(d.initialsBackground, S, f, _),
          {
            children: u.jsxs(
              "div",
              babelHelpers.extends(
                { dir: v },
                {
                  0: {},
                  8: { className: "x1aueamr" },
                  4: { className: "x1f6kntn" },
                  12: { className: "x1f6kntn" },
                  2: { className: "x1nxh6w3" },
                  10: { className: "x1nxh6w3" },
                  6: { className: "x1nxh6w3" },
                  14: { className: "x1nxh6w3" },
                  1: { className: "x1ncwhqj" },
                  9: { className: "x1ncwhqj" },
                  5: { className: "x1ncwhqj" },
                  13: { className: "x1ncwhqj" },
                  3: { className: "x1ncwhqj" },
                  11: { className: "x1ncwhqj" },
                  7: { className: "x1ncwhqj" },
                  15: { className: "x1ncwhqj" },
                }[
                  ((l === c.Default) << 3) |
                    ((l === c.GroupChatProfilePicture) << 2) |
                    (!!(l === c.GroupChatProfilePicture && g) << 1) |
                    (!!y << 0)
                ],
                {
                  children: [
                    u.jsx("div", {
                      "data-testid": void 0,
                      className: "x1rg5ohu xk50ysn",
                      children: a.firstInitial,
                    }),
                    u.jsx("div", {
                      "data-testid": void 0,
                      className: "x1rg5ohu xk50ysn",
                      children: a.secondInitial,
                    }),
                  ],
                },
              ),
            ),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ThemeType = c),
      (l.InitialsProfilePicture = m));
  },
  98,
);
