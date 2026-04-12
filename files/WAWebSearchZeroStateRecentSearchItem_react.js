__d(
  "WAWebSearchZeroStateRecentSearchItem.react",
  [
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebParticipantListUtils",
    "WAWebPrivacyBlurWrapper.react",
    "WDSFocusStateStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          width: "xh8yej3",
          maxWidth: "xazcve0",
          cursor: "x1ypdohk",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          backgroundColor: "xjbqb8w",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        avatarImage: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function f(t) {
      var n = t.chat,
        a = t.onClick,
        i = t.onFocus,
        l = t.ref,
        s = t.tabIndex,
        c = p(null);
      m(l, function () {
        return {
          focus: function () {
            var e;
            (e = c.current) == null || e.focus({ focusVisible: !0 });
          },
        };
      });
      var f = d(
          function (e) {
            (e.preventDefault(), a());
          },
          [a],
        ),
        g = d(
          function (e) {
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a());
          },
          [a],
        ),
        h = n.contact,
        y = n.groupMetadata,
        C;
      if ((y == null ? void 0 : y.isUnnamed) === !0)
        C = o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupFullParticipantsList(y, !0);
      else if (h != null)
        C = o("WAWebFrontendContactGetters").getFormattedName(h);
      else {
        var b;
        C = (b = n.name) != null ? b : "";
      }
      return u.jsx(r("WAWebPrivacyBlurWrapper.react"), {
        containerRef: c,
        children: u.jsxs(
          "button",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              _.container,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ),
            {
              ref: c,
              onMouseDown: f,
              onKeyDown: g,
              onFocus: i,
              tabIndex: s,
              "data-testid": void 0,
              children: [
                u.jsxs("div", {
                  className:
                    "xh8yej3 x1nb3phe x1plog1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x1n2onr6",
                  children: [
                    u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      customDimensionsStyle: !0,
                      id: n.id,
                      loadPicture: !0,
                      size: 48,
                      waitIdle: !1,
                      xstyle: _.avatarImage,
                    }),
                    u.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x47corl",
                    }),
                  ],
                }),
                u.jsx("span", {
                  className:
                    "x1pg5gke x1d3mw78 xhslqc4 x2b8uid xh8yej3 xazcve0 x6ikm8r x10wlt62 x104kibb x1h7i4cw x1ua5tub x13faqbe x21xpn4",
                  title: C,
                  children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: C,
                  }),
                }),
              ],
            },
          ),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
