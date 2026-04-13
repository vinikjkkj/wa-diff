__d(
  "WAWebPdfLinkDialog.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        url: { overflowWrap: "x1mzt3pk", $$css: !0 },
        title: { whiteSpace: "xuxw1ft", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.url,
        a = m,
        i;
      t[0] !== n
        ? ((i = function () {
            (o("WAWebExternalLink.react").openExternalLink(n), a());
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x78zum5 x7v6yn8 xh8yej3 x1f0uite xs2akgl" }),
          (t[2] = d))
        : (d = t[2]);
      var p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSButton.react"), {
            label: s._(/*BTDS*/ "Cancel"),
            variant: "borderless",
            onPress: a,
          })),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Open link")), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== l
        ? ((f = u.jsxs(
            "div",
            babelHelpers.extends({}, d, {
              children: [
                p,
                u.jsx(r("WDSButton.react"), {
                  label: _,
                  variant: "filled",
                  onPress: l,
                }),
              ],
            }),
          )),
          (t[5] = l),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3" }),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            xstyle: c.title,
            children: s._(/*BTDS*/ "Open external link"),
          })),
          (t[8] = h))
        : (h = t[8]);
      var y;
      if (t[9] !== n) {
        var C;
        (t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = u.jsx("br", {})), (t[11] = C))
          : (C = t[11]),
          (y = u.jsxs(
            "div",
            babelHelpers.extends({}, g, {
              children: [
                h,
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: c.url,
                  children: s._(
                    /*BTDS*/ "You're about to leave this app and open an external link: {url}{lineBreak} Do you want to continue?",
                    [s._param("url", n), s._param("lineBreak", C)],
                  ),
                }),
              ],
            }),
          )),
          (t[9] = n),
          (t[10] = y));
      } else y = t[10];
      var b;
      return (
        t[12] !== f || t[13] !== y
          ? ((b = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Small,
              actions: f,
              onOverlayClick: a,
              children: y,
            })),
            (t[12] = f),
            (t[13] = y),
            (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = d;
  },
  226,
);
