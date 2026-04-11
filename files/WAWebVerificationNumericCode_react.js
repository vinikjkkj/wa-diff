__d(
  "WAWebVerificationNumericCode.react",
  ["fbt", "WALogger", "WAWebCopyPasteSelectable.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.memo,
      m = 3,
      p = 4,
      _ = 5;
    function f(t) {
      var n = function () {
        return m * p * _;
      };
      if (t.string == null)
        return c.jsx("div", { children: s._(/*BTDS*/ "Loading\u2026") });
      var r = t.string;
      if (r.length !== n())
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "VerificationNumericCode: expected ",
                " chars, got ",
                "",
              ])),
            n(),
            r.length,
          ),
          c.jsx("div", {
            children: s._(
              /*BTDS*/ "Couldn't display security code. You can verify using the QR code instead.",
            ),
          })
        );
      for (var a = [], i = 0; i < m; i++) {
        for (var l = [], u = 0; u < p; u++) {
          for (var d = [], f = 0; f < _; f++) {
            var g = r.charAt(i * _ * p + u * _ + f);
            d.push(
              c.jsx("span", { className: "x1rg5ohu x10vfzb2", children: g }, f),
            );
          }
          l.push(
            c.jsx(
              "span",
              {
                className: "x1rg5ohu x1hetxy2 xr1yuqi x11t971q x4ii5y1 xvc5jky",
                children: d,
              },
              u,
            ),
          );
        }
        a.push(
          c.jsx(
            o("WAWebCopyPasteSelectable.react").SelectableDiv,
            {
              className:
                "x1hfn5x7 xfl633f x11t971q x13m54ha xvc5jky x1f6kntn x1fc57z9 xhslqc4",
              selectable: !0,
              children: l,
            },
            i,
          ),
        );
      }
      return c.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
        selectable: !0,
        children: a,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = d(f, function (e, t) {
      return t.string === e.string;
    });
    l.VerificationNumericCode = g;
  },
  226,
);
