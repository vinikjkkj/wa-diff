__d(
  "WAWebAddCustomerContactRow.react",
  [
    "WAWebContactImage.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.contact,
        n = e.onClick,
        a = o("WAWebFrontendContactGetters").getDisplayName(t),
        i = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(t),
        l = t.username != null && t.username !== "" ? "@" + t.username : null,
        c = u(
          function () {
            n(t);
          },
          [t, n],
        ),
        d = u(
          function (e) {
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(), n(t));
          },
          [t, n],
        );
      return s.jsxs("div", {
        className:
          "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6",
        onClick: c,
        onKeyDown: d,
        role: "button",
        tabIndex: 0,
        "data-testid": void 0,
        children: [
          s.jsx(r("WAWebContactImage.react"), { contact: t, size: 32 }),
          s.jsxs("div", {
            className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery",
            children: [
              s.jsxs("div", {
                className: "x78zum5 x1q0g3np x1pha0wt x1trrmfo",
                children: [
                  s.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDefault",
                    maxLines: 1,
                    children: a,
                  }),
                  l != null &&
                    s.jsx(r("WDSText.react"), {
                      type: "Body3",
                      colorName: "contentDeemphasized",
                      maxLines: 1,
                      children: l,
                    }),
                ],
              }),
              s.jsx("div", {
                className:
                  "x78zum5 x1q0g3np x6s0dn4 x1trrmfo x6ikm8r x10wlt62 xuxw1ft xlyipyv",
                children:
                  i !== "" &&
                  s.jsx(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDeemphasized",
                    maxLines: 1,
                    children: i,
                  }),
              }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
