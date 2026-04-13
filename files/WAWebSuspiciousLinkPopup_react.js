__d(
  "WAWebSuspiciousLinkPopup.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.Fragment,
      d = ".",
      m = function () {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebCmd").Cmd.closeLongLinkModal(!0));
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.link,
        r;
      t[0] !== n
        ? ((r = function () {
            var e = n.href;
            (o("WAWebExternalLink.react").openExternalLink(e),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebCmd").Cmd.closeLongLinkModal(!0));
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i = n.domain,
        l = n.href,
        p = n.suspiciousCharacters,
        _;
      if (t[2] !== i || t[3] !== p) {
        var f = i.split(d);
        ((_ = f.map(function (e, t) {
          var n = !1,
            r = e.split("").map(function (e, r) {
              var o = p != null && p.has(e);
              n = o || n;
              var a = o ? "x117nqv4" : void 0;
              return u.jsx(
                "span",
                { className: a, children: e },
                t + "-" + r + "-" + e,
              );
            }),
            o = n ? "xghrzdh" : void 0;
          return u.jsxs(
            c,
            {
              children: [
                u.jsx("span", { className: o, children: r }),
                t + 1 !== f.length ? u.jsx("span", { children: d }) : null,
              ],
            },
            t + "-" + e,
          );
        })),
          (t[2] = i),
          (t[3] = p),
          (t[4] = _));
      } else _ = t[4];
      var g = _,
        h;
      t[5] !== i || t[6] !== l
        ? ((h = l.split(i)), (t[5] = i), (t[6] = l), (t[7] = h))
        : (h = t[7]);
      var y = h,
        C = y[0],
        b = y[1],
        v,
        S,
        R,
        L;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "suspicious-link" }),
          (S = s._(/*BTDS*/ "Suspicious link")),
          (R = s._(/*BTDS*/ "Cancel")),
          (L = s._(/*BTDS*/ "Open link")),
          (t[8] = v),
          (t[9] = S),
          (t[10] = R),
          (t[11] = L))
        : ((v = t[8]), (S = t[9]), (R = t[10]), (L = t[11]));
      var E, k;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "xyorhqc" }),
          (k = s._(
            /*BTDS*/ "This link contains unusual characters. It may be trying to appear as another site.",
          )),
          (t[12] = E),
          (t[13] = k))
        : ((E = t[12]), (k = t[13]));
      var I, T;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsxs(
            "div",
            babelHelpers.extends({}, E, {
              children: [
                k,
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getSuspiciousLinkFaqUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          )),
          (I = {
            className:
              "x104kibb x1jquxbb x1anpbxc x6ikm8r x10wlt62 x1fc57z9 xlyipyv x1mzt3pk x1gzmk7r x1ua5tub",
          }),
          (t[14] = I),
          (t[15] = T))
        : ((I = t[14]), (T = t[15]));
      var D;
      t[16] !== g || t[17] !== b || t[18] !== C
        ? ((D = u.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [C, g, b] }),
          )),
          (t[16] = g),
          (t[17] = b),
          (t[18] = C),
          (t[19] = D))
        : (D = t[19]);
      var x;
      return (
        t[20] !== a || t[21] !== D
          ? ((x = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: v,
              title: S,
              okText: R,
              cancelText: L,
              onOK: m,
              onCancel: a,
              type: o("WAWebModal.react").ModalTheme.LinkPopup,
              children: [T, D],
            })),
            (t[20] = a),
            (t[21] = D),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    l.default = p;
  },
  226,
);
