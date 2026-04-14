__d(
  "WAWebProductCatalogProductListDrawerHeader.react",
  [
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebName.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        description: {
          display: "x104kibb",
          maxHeight: "x1jquxbb",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x1fc57z9",
          color: "x17t9dm2",
          overflowWrap: "x1mzt3pk",
          WebkitLineClamp: "x1gzmk7r",
          WebkitBoxOrient: "x1ua5tub",
          $$css: !0,
        },
        photoIcon: { width: "x1exxlbk", height: "xpyat2d", $$css: !0 },
        text: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          zIndex: "x11uqc5h",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        spinner: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        img: { height: "xt7dq6l", $$css: !0 },
      };
    function d(t) {
      var n = t.businessProfile,
        a = o("useWAWebModelValues").useOptionalModelValues(n, ["description"]);
      return !a || r("isStringNullOrEmpty")(a == null ? void 0 : a.description)
        ? null
        : u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                c.description,
                o("WAWebUISpacing").uiMargin.top12,
              ),
              {
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: a.description,
                  direction: "auto",
                  selectable: !0,
                  titlify: !0,
                }),
              },
            ),
          );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.contact,
        n = e.profilePicThumb,
        r = o("useWAWebModelValues").useOptionalModelValues(n, ["imgFull"]),
        a = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
        ]),
        i = a[0];
      if (!r) return null;
      var l = u.jsx(o("WAWebDetailImage.react").DefaultIcon, {
        id: i,
        xstyle: c.photoIcon,
      });
      return u.jsx("div", {
        className:
          "x1n2onr6 x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1j6awrg x1m1drc7 x1iygr5g x1ojvc37 x4eaejv x1wsn0xg x100rkj9 x1sak2ym",
        children: u.jsx(o("WAWebDetailImage.react").DetailImageCommon, {
          profilePicThumb: r,
          loader: !0,
          defaultIcon: l,
          profilePicThumbImg: r.imgFull,
          spinnerXstyle: c.spinner,
          spinnerSize: 100,
          imgXstyle: c.img,
          theme: "business",
          shape: o("WAWebDetailImage.react").DetailImageShape.Square,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.businessProfile,
        a = t.contact,
        i = t.profilePicThumb;
      return u.jsxs("div", {
        className: "x1n2onr6 x1m3v4wt x6ikm8r x10wlt62 x15e7hw7",
        "data-testid": void 0,
        children: [
          u.jsx(m, { profilePicThumb: i, contact: a }),
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                c.text,
                o("WAWebUISpacing").uiPadding.horiz30,
              ),
              {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextLarge, {
                    color: "white",
                    weight: "bold",
                    children: u.jsx(o("WAWebName.react").Name, {
                      contact: a,
                      selectable: !0,
                      useVerifiedName: !0,
                    }),
                  }),
                  u.jsx(d, { businessProfile: n }),
                ],
              },
            ),
          ),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
