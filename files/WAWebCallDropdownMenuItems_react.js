__d(
  "WAWebCallDropdownMenuItems.react",
  [
    "WAWebMenuController.react",
    "WAWebMenuItem.react",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
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
      var t = e.children,
        n = e.onSelect,
        a = e.optionId,
        i = o("WAWebMenuController.react").useMenu(),
        l = u(null);
      o("WAWebMenuController.react").useRegisterItem(a, {
        id: a,
        type: "multi-select",
        label: null,
        onSelect: n,
        ref: l,
      });
      var d = (i == null ? void 0 : i.activeItemId) === a,
        m = function (t) {
          (t.stopPropagation(), n());
        },
        p = function (t) {
          t.key === " " && t.preventDefault();
        },
        _ = function () {
          i.activateItem(a);
        },
        f = function () {
          i.activateItem(null);
        };
      return s.jsx("div", {
        onKeyDown: p,
        role: "none",
        className: "x78zum5 xeuugli xh8yej3",
        children: s.jsx(r("WAWebUnstyledButton.react"), {
          ref: l,
          role: "listitem",
          xstyle: c.menuItemButton,
          onClick: m,
          tabIndex: -1,
          onFocus: _,
          onBlur: f,
          children: s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n",
                },
                1: {
                  className:
                    "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n x4wrhlh",
                },
              }[!!d << 0],
              { children: t },
            ),
          ),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.children,
        n = e.isSelected,
        a = e.onSelect,
        i = e.optionId,
        l = o("WAWebMenuController.react").useMenu(),
        d = u(null);
      o("WAWebMenuController.react").useRegisterItem(i, {
        id: i,
        type: "multi-select",
        label: null,
        onSelect: a,
        ref: d,
      });
      var m = (l == null ? void 0 : l.activeItemId) === i,
        p = function (t) {
          (t.stopPropagation(), a());
        },
        _ = function (t) {
          (t.key === "Enter" || t.key === " ") &&
            (t.stopPropagation(), t.preventDefault(), a());
        },
        f = function () {
          l.activateItem(i);
        },
        g = function () {
          l.activateItem(null);
        };
      return s.jsx("div", {
        onKeyDown: _,
        role: "none",
        className: "x78zum5 xeuugli xh8yej3",
        children: s.jsx(r("WAWebUnstyledButton.react"), {
          ref: d,
          role: "listitem",
          xstyle: c.menuItemButton,
          onClick: p,
          tabIndex: -1,
          onFocus: f,
          onBlur: g,
          children: s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
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
              }[(!!(m || n) << 1) | (!!n << 0)],
              { children: t },
            ),
          ),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.disabled,
        n = e.icon,
        a = e.label,
        i = e.onSelect,
        l = e.optionId,
        u = e.testid,
        c = o("WAWebMenuItem.react").useMenuItem(l),
        d = c.isActive;
      return s.jsx(o("WAWebMenuItem.react").WAWebMenuItem, {
        optionId: l,
        testid: void 0,
        disabled: t,
        onSelect: i,
        children: s.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
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
            }[(!!t << 1) | (!!(d && !t) << 0)],
            {
              children: [
                n,
                s.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  textAlign: "center",
                  selectable: !1,
                  colorName: t ? "contentDeemphasized" : "contentOnAccent",
                  children: a,
                }),
              ],
            },
          ),
        ),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.ExpandableHeaderMenuItem = d),
      (l.ParticipantMenuItem = m),
      (l.CallButtonMenuItem = p));
  },
  98,
);
