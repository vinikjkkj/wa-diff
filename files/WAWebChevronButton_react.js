__d(
  "WAWebChevronButton.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebRound.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.disabled,
        r = e.onClick,
        a = e.onKeyDown,
        i = e.overMedia,
        l = e.testid,
        s = e.theme,
        d = e.type,
        p;
      t[0] !== d ? ((p = _(d)), (t[0] = d), (t[1] = p)) : (p = t[1]);
      var f = p,
        g = f.Icon,
        h = f.label,
        y = d === c.Prev && m.btnMediaPrev,
        C = d === c.Next && m.btnMediaNext,
        b = n === !0 ? m.disabledBtn : m.backgroundColorBtn,
        v = i === !0 && m.overMedia,
        S;
      t[2] !== y || t[3] !== C || t[4] !== b || t[5] !== v
        ? ((S = [m.btn, y, C, b, v]),
          (t[2] = y),
          (t[3] = C),
          (t[4] = b),
          (t[5] = v),
          (t[6] = S))
        : (S = t[6]);
      var R = n === !0 ? null : r,
        L;
      t[7] !== g || t[8] !== h
        ? ((L = u.jsx(g, { title: h, directional: !0 })),
          (t[7] = g),
          (t[8] = h),
          (t[9] = L))
        : (L = t[9]);
      var E;
      return (
        t[10] !== n ||
        t[11] !== h ||
        t[12] !== a ||
        t[13] !== S ||
        t[14] !== R ||
        t[15] !== L ||
        t[16] !== l ||
        t[17] !== s
          ? ((E = u.jsx(o("WAWebRound.react").Round, {
              xstyle: S,
              onClick: R,
              onKeyDown: a,
              label: h,
              theme: s,
              disabled: n,
              testid: void 0,
              children: L,
            })),
            (t[10] = n),
            (t[11] = h),
            (t[12] = a),
            (t[13] = S),
            (t[14] = R),
            (t[15] = L),
            (t[16] = l),
            (t[17] = s),
            (t[18] = E))
          : (E = t[18]),
        E
      );
    }
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
