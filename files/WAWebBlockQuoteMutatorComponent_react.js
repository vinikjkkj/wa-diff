__d(
  "WAWebBlockQuoteMutatorComponent.react",
  [
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        quote: {
          display: "x1rg5ohu",
          position: "x1n2onr6",
          width: "xh8yej3",
          color: "xhslqc4",
          $$css: !0,
        },
        quotedColor: {
          color: "x15rks2t",
          borderTopColor: "x1b4hy2t",
          borderInlineEndColor: "x1273586",
          borderBottomColor: "x1tnzt7h",
          borderInlineStartColor: "x1mi4oqr",
          $$css: !0,
        },
        marginVert4: {
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.children,
        a = n === void 0 ? "" : n,
        i = t.inline,
        l = i === void 0 ? !1 : i,
        s = t.quoted,
        d = s === void 0 ? !1 : s,
        m = t.selectable,
        p = t.text,
        _ = o("WABidi").dir(p),
        f = (_ === "rtl") !== r("WAWebL10N").isRTL(),
        g = "> ";
      return l
        ? u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
            dir: _,
            selectable: m,
            prePlainText: g,
            className: {
              0: "xt0psk2 x14atkfc xhslqc4 xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
              2: "xt0psk2 x14atkfc x15rks2t x1b4hy2t x1273586 x1tnzt7h xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
              1: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 xhslqc4 x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj",
              3: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 x15rks2t x1b4hy2t x1tnzt7h x1mi4oqr x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj",
            }[(!!d << 1) | (!!f << 0)],
            children: a,
          })
        : u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableBlockQuote, {
            dir: _,
            selectable: m,
            prePlainText: g,
            className: (e || (e = r("stylex")))([
              c.quote,
              d && c.quotedColor,
              !d && c.marginVert4,
            ]),
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7",
                    },
                    2: {
                      className:
                        "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x",
                    },
                    1: {
                      className:
                        "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtwfq29",
                    },
                    3: {
                      className:
                        "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x xtwfq29",
                    },
                  }[(!!f << 1) | (!!d << 0)],
                ),
              ),
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "x1rg5ohu x1gx403c xj0a0fe xeaf4i8" },
                    1: {
                      className: "x1rg5ohu xj0a0fe xeaf4i8 x1c1uobl x1q3ajuy",
                    },
                  }[!!f << 0],
                  {
                    children: o(
                      "WAWebFormatComponentUtils",
                    ).removeFirstLeadingSpace(a),
                  },
                ),
              ),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
