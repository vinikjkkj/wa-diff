__d(
  "WAWebTextLineClamp.react",
  [
    "invariant",
    "WAWebClassnames",
    "WAWebLineHeight",
    "react",
    "react-compiler-runtime",
    "useWAWebPrevious",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.dir,
        i = e.maxLines,
        l = e.style,
        c = i,
        d = l == null ? void 0 : l.singleLine,
        p = l == null ? void 0 : l.multipleLine,
        _ = m(d),
        f = _[0],
        g = _[1],
        h = r("useWAWebPrevious")(f),
        y = r("useWAWebWindowSize")(),
        C = y.width,
        b = r("useWAWebPrevious")(C),
        v;
      t[0] !== c ||
      t[1] !== p ||
      t[2] !== h ||
      t[3] !== b ||
      t[4] !== d ||
      t[5] !== f ||
      t[6] !== C
        ? ((v = function (t) {
            if (!(t == null || !(C > 0)) && !(c === 1 || p == null)) {
              var e = o("WAWebLineHeight").getNumberOfLines(t);
              if (f === d && h === p && e > 1) {
                g(p);
                return;
              }
              if (f !== p && (b == null || C < b) && e > 1) {
                g(p);
                return;
              }
              if (f !== d && (b == null || C > b) && e === 1) {
                g(d);
                return;
              }
            }
          }),
          (t[0] = c),
          (t[1] = p),
          (t[2] = h),
          (t[3] = b),
          (t[4] = d),
          (t[5] = f),
          (t[6] = C),
          (t[7] = v))
        : (v = t[7]);
      var S = v;
      c >= 1 || s(0, 56351);
      var R;
      if (c === 1) {
        var L;
        (t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = {
              display: "block",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }),
            (t[8] = L))
          : (L = t[8]),
          (R = L));
      } else {
        var E;
        (t[9] !== c
          ? ((E = {
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: c,
            }),
            (t[9] = c),
            (t[10] = E))
          : (E = t[10]),
          (R = E));
      }
      var k;
      t[11] !== f
        ? ((k = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x1n2onr6 x6ikm8r x10wlt62",
            f,
          )),
          (t[11] = f),
          (t[12] = k))
        : (k = t[12]);
      var I;
      return (
        t[13] !== n || t[14] !== S || t[15] !== a || t[16] !== R || t[17] !== k
          ? ((I = u.jsx("span", {
              ref: S,
              className: k,
              style: R,
              dir: a,
              children: n,
            })),
            (t[13] = n),
            (t[14] = S),
            (t[15] = a),
            (t[16] = R),
            (t[17] = k),
            (t[18] = I))
          : (I = t[18]),
        I
      );
    }
    l.default = p;
  },
  98,
);
