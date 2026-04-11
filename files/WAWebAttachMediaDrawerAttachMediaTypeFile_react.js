__d(
  "WAWebAttachMediaDrawerAttachMediaTypeFile.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypeStyles",
    "WAWebDocumentFileIcon",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDocumentMediaType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          width: "x23j0i4",
          height: "x1gnnpzl",
          backgroundRepeat: "xiy17q3",
          backgroundSize: "x1tbiz1a",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(16),
        a = t.filename,
        i = t.mimeType,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex")))(
            c.icon,
            o("WAWebUISpacing").uiMargin.bottom15,
          )),
          (n[0] = l))
        : (l = n[0]);
      var s = l,
        d;
      n[1] !== a || n[2] !== i
        ? ((d = { mimetype: i, filename: a }),
          (n[1] = a),
          (n[2] = i),
          (n[3] = d))
        : (d = n[3]);
      var m = r("useWAWebDocumentMediaType")(d),
        p = m.ext,
        _ = m.mime,
        f;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container,
          )),
          (n[4] = f))
        : (f = n[4]);
      var g, h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").mediaContainer,
          )),
          (h = { className: "x78zum5 x3psx0u xdt5ytf x6s0dn4 xamitd3" }),
          (n[5] = g),
          (n[6] = h))
        : ((g = n[5]), (h = n[6]));
      var y = _ != null ? _ : "",
        C = p != null ? p : "",
        b;
      n[7] !== y || n[8] !== C
        ? ((b = u.jsx("div", {
            className: s,
            children: u.jsx(r("WAWebDocumentFileIcon"), {
              width: 26,
              mimeType: y,
              ext: C,
            }),
          })),
          (n[7] = y),
          (n[8] = C),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x1iikomf" }), (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] !== a
        ? ((S = u.jsx("div", babelHelpers.extends({}, v, { children: a }))),
          (n[11] = a),
          (n[12] = S))
        : (S = n[12]);
      var R;
      return (
        n[13] !== S || n[14] !== b
          ? ((R = u.jsx(
              "div",
              babelHelpers.extends({}, f, {
                "data-animate-attach-media": !0,
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, g, {
                    children: u.jsxs(
                      "div",
                      babelHelpers.extends({}, h, { children: [b, S] }),
                    ),
                  }),
                ),
              }),
            )),
            (n[13] = S),
            (n[14] = b),
            (n[15] = R))
          : (R = n[15]),
        R
      );
    }
    l.default = d;
  },
  98,
);
