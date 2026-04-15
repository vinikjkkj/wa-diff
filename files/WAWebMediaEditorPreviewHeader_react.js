__d(
  "WAWebMediaEditorPreviewHeader.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WDSIconIcClose.react",
    "fbs",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { closeButton: { cursor: "x1ypdohk", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.filename,
        a = e.pageCount,
        i = null;
      if (a != null && a > 0) {
        var l;
        (t[0] !== a
          ? ((l = s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
              s._plural(a, "number"),
            ])),
            (t[0] = a),
            (t[1] = l))
          : (l = t[1]),
          (i = l));
      }
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            className:
              "x78zum5 x6s0dn4 x1qughib x1gg8mnh x16ovd2e xvtqlqk x12xbjc7 xdx6fka x1280gxy",
          }),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = r("fbs")._(/*BTDS*/ "Close")), (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconIcClose.react"), {})), (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== e.onClose
        ? ((_ = u.jsx(o("WAWebClickable.react").Clickable, {
            ariaLabel: m,
            onClick: e.onClose,
            xstyle: c.closeButton,
            children: p,
          })),
          (t[5] = e.onClose),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x6s0dn4",
          }),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== n
        ? ((g =
            n &&
            u.jsx("span", { className: "x1f6kntn x14ug900", children: n })),
          (t[8] = n),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== i
        ? ((h =
            i != null &&
            u.jsx("span", {
              className: "x1ok221b x1pg5gke xhslqc4",
              children: i,
            })),
          (t[10] = i),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== g || t[13] !== h
        ? ((y = u.jsxs(
            "div",
            babelHelpers.extends({}, f, { children: [g, h] }),
          )),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y))
        : (y = t[14]);
      var C;
      return (
        t[15] !== _ || t[16] !== y
          ? ((C = u.jsxs(
              "div",
              babelHelpers.extends({}, d, { children: [_, y] }),
            )),
            (t[15] = _),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    l.default = d;
  },
  226,
);
