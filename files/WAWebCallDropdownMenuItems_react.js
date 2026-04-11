__d(
  "WAWebCallDropdownMenuItems.react",
  [
    "WAWebMenuController.react",
    "WAWebMenuItem.react",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = {
        menuItemButton: {
          alignSelf: "xkh2ocl",
          display: "x78zum5",
          flexBasis: "xdl72j9",
          flexGrow: "x1iyjqo2",
          flexShrink: "x2lah0s",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textAlign: "x1yc453h",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.children,
        a = e.onSelect,
        i = e.optionId,
        l = o("WAWebMenuController.react").useMenu(),
        d = u(null),
        p;
      (t[0] !== a || t[1] !== i
        ? ((p = {
            id: i,
            type: "multi-select",
            label: null,
            onSelect: a,
            ref: d,
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = p))
        : (p = t[2]),
        o("WAWebMenuController.react").useRegisterItem(i, p));
      var _ = (l == null ? void 0 : l.activeItemId) === i,
        f;
      t[3] !== a
        ? ((f = function (t) {
            (t.stopPropagation(), a());
          }),
          (t[3] = a),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h = m,
        y;
      t[5] !== l || t[6] !== i
        ? ((y = function () {
            l.activateItem(i);
          }),
          (t[5] = l),
          (t[6] = i),
          (t[7] = y))
        : (y = t[7]);
      var C = y,
        b;
      t[8] !== l
        ? ((b = function () {
            l.activateItem(null);
          }),
          (t[8] = l),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "x78zum5 xeuugli xh8yej3" }), (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== _
        ? ((R = {
            0: {
              className:
                "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n",
            },
            1: {
              className:
                "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n x4wrhlh",
            },
          }[!!_ << 0]),
          (t[11] = _),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] !== n || t[14] !== R
        ? ((L = s.jsx("div", babelHelpers.extends({}, R, { children: n }))),
          (t[13] = n),
          (t[14] = R),
          (t[15] = L))
        : (L = t[15]);
      var E;
      return (
        t[16] !== v || t[17] !== g || t[18] !== C || t[19] !== L
          ? ((E = s.jsx(
              "div",
              babelHelpers.extends({ onKeyDown: h, role: "none" }, S, {
                children: s.jsx(r("WAWebUnstyledButton.react"), {
                  ref: d,
                  role: "listitem",
                  xstyle: c.menuItemButton,
                  onClick: g,
                  tabIndex: -1,
                  onFocus: C,
                  onBlur: v,
                  children: L,
                }),
              }),
            )),
            (t[16] = v),
            (t[17] = g),
            (t[18] = C),
            (t[19] = L),
            (t[20] = E))
          : (E = t[20]),
        E
      );
    }
    function m(e) {
      e.key === " " && e.preventDefault();
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.children,
        a = e.isSelected,
        i = e.onSelect,
        l = e.optionId,
        d = o("WAWebMenuController.react").useMenu(),
        m = u(null),
        p;
      (t[0] !== i || t[1] !== l
        ? ((p = {
            id: l,
            type: "multi-select",
            label: null,
            onSelect: i,
            ref: m,
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = p))
        : (p = t[2]),
        o("WAWebMenuController.react").useRegisterItem(l, p));
      var _ = (d == null ? void 0 : d.activeItemId) === l,
        f;
      t[3] !== i
        ? ((f = function (t) {
            (t.stopPropagation(), i());
          }),
          (t[3] = i),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h;
      t[5] !== i
        ? ((h = function (t) {
            (t.key === "Enter" || t.key === " ") &&
              (t.stopPropagation(), t.preventDefault(), i());
          }),
          (t[5] = i),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      t[7] !== d || t[8] !== l
        ? ((C = function () {
            d.activateItem(l);
          }),
          (t[7] = d),
          (t[8] = l),
          (t[9] = C))
        : (C = t[9]);
      var b = C,
        v;
      t[10] !== d
        ? ((v = function () {
            d.activateItem(null);
          }),
          (t[10] = d),
          (t[11] = v))
        : (v = t[11]);
      var S = v,
        R;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "x78zum5 xeuugli xh8yej3" }), (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] !== _ || t[14] !== a
        ? ((L = {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1ubxc9n",
            },
            2: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1ubxc9n x4wrhlh",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1abdmlv xm38lk9",
            },
            3: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1abdmlv xm38lk9",
            },
          }[(!!(_ || a) << 1) | (!!a << 0)]),
          (t[13] = _),
          (t[14] = a),
          (t[15] = L))
        : (L = t[15]);
      var E;
      t[16] !== n || t[17] !== L
        ? ((E = s.jsx("div", babelHelpers.extends({}, L, { children: n }))),
          (t[16] = n),
          (t[17] = L),
          (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== S || t[20] !== g || t[21] !== b || t[22] !== E
        ? ((k = s.jsx(r("WAWebUnstyledButton.react"), {
            ref: m,
            role: "listitem",
            xstyle: c.menuItemButton,
            onClick: g,
            tabIndex: -1,
            onFocus: b,
            onBlur: S,
            children: E,
          })),
          (t[19] = S),
          (t[20] = g),
          (t[21] = b),
          (t[22] = E),
          (t[23] = k))
        : (k = t[23]);
      var I;
      return (
        t[24] !== y || t[25] !== k
          ? ((I = s.jsx(
              "div",
              babelHelpers.extends({ onKeyDown: y, role: "none" }, R, {
                children: k,
              }),
            )),
            (t[24] = y),
            (t[25] = k),
            (t[26] = I))
          : (I = t[26]),
        I
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.disabled,
        a = e.icon,
        i = e.label,
        l = e.onSelect,
        u = e.optionId,
        c = e.testid,
        d = o("WAWebMenuItem.react").useMenuItem(u),
        m = d.isActive,
        p;
      t[0] !== n || t[1] !== m
        ? ((p = {
            0: {
              className:
                "x6s0dn4 xyp3urf xt8t1vi x1xc408v x129tdwq x15urzxu x1pse0pq x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x1yxkqql",
            },
            2: {
              className:
                "x6s0dn4 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x4wrhlh xhslqc4 x2ylx5l",
            },
            1: {
              className:
                "x6s0dn4 xyp3urf xt8t1vi x1xc408v x129tdwq x15urzxu x1pse0pq x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x1yxkqql xny8mc",
            },
            3: {
              className:
                "x6s0dn4 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x4wrhlh xhslqc4 x2ylx5l xny8mc",
            },
          }[(!!n << 1) | (!!(m && !n) << 0)]),
          (t[0] = n),
          (t[1] = m),
          (t[2] = p))
        : (p = t[2]);
      var _ = n ? "contentDeemphasized" : "contentOnAccent",
        f;
      t[3] !== i || t[4] !== _
        ? ((f = s.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            textAlign: "center",
            selectable: !1,
            colorName: _,
            children: i,
          })),
          (t[3] = i),
          (t[4] = _),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== a || t[7] !== p || t[8] !== f
        ? ((g = s.jsxs(
            "div",
            babelHelpers.extends({}, p, { children: [a, f] }),
          )),
          (t[6] = a),
          (t[7] = p),
          (t[8] = f),
          (t[9] = g))
        : (g = t[9]);
      var h;
      return (
        t[10] !== n || t[11] !== l || t[12] !== u || t[13] !== g || t[14] !== c
          ? ((h = s.jsx(o("WAWebMenuItem.react").WAWebMenuItem, {
              optionId: u,
              testid: void 0,
              disabled: n,
              onSelect: l,
              children: g,
            })),
            (t[10] = n),
            (t[11] = l),
            (t[12] = u),
            (t[13] = g),
            (t[14] = c),
            (t[15] = h))
          : (h = t[15]),
        h
      );
    }
    ((l.ExpandableHeaderMenuItem = d),
      (l.ParticipantMenuItem = p),
      (l.CallButtonMenuItem = _));
  },
  98,
);
