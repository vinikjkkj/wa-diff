__d(
  "WAWebChevronButton.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebRound.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum").Mirrored(["Prev", "Next"]),
      d = n("$InternalEnum").Mirrored([
        "BotPluginCarousel",
        "BotReelsPluginCarousel",
        "SupportCitationsCarousel",
      ]),
      m = {
        btn: {
          position: "x10l6tqk",
          top: "x8jeoy8",
          zIndex: "xupqr0c",
          $$css: !0,
        },
        overMedia: { backgroundColor: "x1kz0r3c", $$css: !0 },
        backgroundColorBtn: { backgroundColor: "x1sr6hwe", $$css: !0 },
        btnMediaPrev: {
          insetInlineStart: "xi5uv41",
          left: null,
          right: null,
          $$css: !0,
        },
        btnMediaNext: {
          insetInlineEnd: "xo2ifbc",
          left: null,
          right: null,
          $$css: !0,
        },
        disabledBtn: { opacity: "xbyyjgo", $$css: !0 },
      };
    function p(e) {
      var t = e.disabled,
        n = e.onClick,
        r = e.onKeyDown,
        a = e.overMedia,
        i = e.testid,
        l = e.theme,
        s = e.type,
        d = _(s),
        p = d.Icon,
        f = d.label;
      return u.jsx(o("WAWebRound.react").Round, {
        xstyle: [
          m.btn,
          s === c.Prev && m.btnMediaPrev,
          s === c.Next && m.btnMediaNext,
          t === !0 ? m.disabledBtn : m.backgroundColorBtn,
          a === !0 && m.overMedia,
        ],
        onClick: t === !0 ? null : n,
        onKeyDown: r,
        label: f,
        theme: l,
        disabled: t,
        testid: void 0,
        children: u.jsx(p, { title: f, directional: !0 }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      switch (e) {
        case c.Prev:
          return {
            Icon: o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
            label: s._(/*BTDS*/ "Previous"),
          };
        case c.Next:
          return {
            Icon: o("WAWebChevronIcon.react").ChevronIcon,
            label: s._(/*BTDS*/ "Next"),
          };
      }
    }
    ((l.ButtonType = c),
      (l.ChevronButtonDisplayType = d),
      (l.ChevronButton = p));
  },
  226,
);
