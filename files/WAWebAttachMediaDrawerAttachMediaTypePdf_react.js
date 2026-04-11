__d(
  "WAWebAttachMediaDrawerAttachMediaTypePdf.react",
  [
    "fbt",
    "WAWebAttachMediaDrawerAttachMediaTypeFile.react",
    "WAWebObjectFit.react",
    "fbs",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.filename,
        a = e.fullPreview,
        i = e.fullPreviewSize,
        l = e.mimeType,
        c = e.pageCount,
        d = e.showBorder,
        m = e.showPageCount,
        p = d === void 0 ? !1 : d,
        _ = m === void 0 ? !0 : m;
      if (a != null && i != null && c != null && c > 0) {
        var f;
        t[0] !== c
          ? ((f = s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
              s._plural(c, "number"),
            ])),
            (t[0] = c),
            (t[1] = f))
          : (f = t[1]);
        var g = f,
          h;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              className:
                "x9f619 x78zum5 xdt5ytf xh8yej3 x5yr21d x1h678fw xcldk2z xv6tirj x1phvje8",
            }),
            (t[2] = h))
          : (h = t[2]);
        var y;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = { className: "x1n2onr6 x1gebrk9" }), (t[3] = y))
          : (y = t[3]);
        var C;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = r("fbs")._(/*BTDS*/ "Preview")), (t[4] = C))
          : (C = t[4]);
        var b;
        t[5] !== p
          ? ((b = {
              0: { className: "xhtitgo xh8yej3 x5yr21d" },
              1: {
                className:
                  "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xohxato x1of651i x1lcapj5 xeiadmc xyi3aci xwf5gio x1p453bz x1suzm8a x1it3r9l xhtitgo xh8yej3 x5yr21d",
              },
            }[!!p << 0]),
            (t[5] = p),
            (t[6] = b))
          : (b = t[6]);
        var v;
        t[7] !== a || t[8] !== b
          ? ((v = u.jsx("img", babelHelpers.extends({ alt: C, src: a }, b))),
            (t[7] = a),
            (t[8] = b),
            (t[9] = v))
          : (v = t[9]);
        var S;
        t[10] !== i || t[11] !== v
          ? ((S = u.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: u.jsx(r("WAWebObjectFit.react"), {
                  type: "scaleDown",
                  size: i,
                  children: v,
                }),
              }),
            )),
            (t[10] = i),
            (t[11] = v),
            (t[12] = S))
          : (S = t[12]);
        var R;
        t[13] !== g || t[14] !== _
          ? ((R =
              _ &&
              u.jsx("div", {
                className: "x1okw0bk x2b8uid x1nmyh1g",
                children: g,
              })),
            (t[13] = g),
            (t[14] = _),
            (t[15] = R))
          : (R = t[15]);
        var L;
        return (
          t[16] !== R || t[17] !== S
            ? ((L = u.jsxs(
                "div",
                babelHelpers.extends({}, h, {
                  "data-js-attach-preview": !0,
                  children: [S, R],
                }),
              )),
              (t[16] = R),
              (t[17] = S),
              (t[18] = L))
            : (L = t[18]),
          L
        );
      }
      var E;
      return (
        t[19] !== n || t[20] !== l
          ? ((E = u.jsx(r("WAWebAttachMediaDrawerAttachMediaTypeFile.react"), {
              mimeType: l,
              filename: n,
            })),
            (t[19] = n),
            (t[20] = l),
            (t[21] = E))
          : (E = t[21]),
        E
      );
    }
    l.default = c;
  },
  226,
);
