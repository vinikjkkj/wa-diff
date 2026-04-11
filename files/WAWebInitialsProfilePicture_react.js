__d(
  "WAWebInitialsProfilePicture.react",
  [
    "$InternalEnum",
    "WABidi",
    "WAWebInitialsFromNameUtils",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(22),
        a = t.backgroundColorId,
        i = t.initialsData,
        l = t.theme,
        s = t.wid,
        m = l === void 0 ? c.Default : l,
        p = o("useWAWebDefaultProfileColors").useDefaultProfileColors(s),
        _ = p.background,
        f = p.foreground,
        g = o("useWAWebGroupColors").useGroupsColorStyle(a, "background");
      g = _ != null ? _ : g;
      var h = i.firstInitial != null && i.secondInitial != null,
        y = o("WAWebInitialsFromNameUtils").supportedAlphabetsMap.get(
          o("WAWebInitialsFromNameUtils").InitialsAlphabets.HAN,
        ),
        C = !1;
      if (
        y &&
        i.secondInitial != null &&
        y.test(i == null ? void 0 : i.secondInitial)
      ) {
        var b,
          v = ((b = i.secondInitial) == null ? void 0 : b.length) || 0;
        C = v > 1;
      }
      var S =
          i.firstInitial != null && o("WABidi").dir(i.firstInitial) === "rtl"
            ? "rtl"
            : "ltr",
        R =
          m === c.NewsletterQuestionsResponses
            ? d.initialsNewsletterResponses
            : d.initialsDefault,
        L;
      n[0] !== g || n[1] !== R || n[2] !== f
        ? ((L = (e || (e = r("stylex"))).props(d.initialsBackground, R, g, f)),
          (n[0] = g),
          (n[1] = R),
          (n[2] = f),
          (n[3] = L))
        : (L = n[3]);
      var E;
      n[4] !== C || n[5] !== m || n[6] !== h
        ? ((E = {
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
            ((m === c.Default) << 3) |
              ((m === c.GroupChatProfilePicture) << 2) |
              (!!(m === c.GroupChatProfilePicture && h) << 1) |
              (!!C << 0)
          ]),
          (n[4] = C),
          (n[5] = m),
          (n[6] = h),
          (n[7] = E))
        : (E = n[7]);
      var k;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { className: "x1rg5ohu xk50ysn" }), (n[8] = k))
        : (k = n[8]);
      var I;
      n[9] !== i.firstInitial
        ? ((I = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, k, {
              children: i.firstInitial,
            }),
          )),
          (n[9] = i.firstInitial),
          (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x1rg5ohu xk50ysn" }), (n[11] = T))
        : (T = n[11]);
      var D;
      n[12] !== i.secondInitial
        ? ((D = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, T, {
              children: i.secondInitial,
            }),
          )),
          (n[12] = i.secondInitial),
          (n[13] = D))
        : (D = n[13]);
      var x;
      n[14] !== S || n[15] !== E || n[16] !== I || n[17] !== D
        ? ((x = u.jsxs(
            "div",
            babelHelpers.extends({ dir: S }, E, { children: [I, D] }),
          )),
          (n[14] = S),
          (n[15] = E),
          (n[16] = I),
          (n[17] = D),
          (n[18] = x))
        : (x = n[18]);
      var $;
      return (
        n[19] !== L || n[20] !== x
          ? (($ = u.jsx("div", babelHelpers.extends({}, L, { children: x }))),
            (n[19] = L),
            (n[20] = x),
            (n[21] = $))
          : ($ = n[21]),
        $
      );
    }
    ((l.ThemeType = c), (l.InitialsProfilePicture = m));
  },
  98,
);
