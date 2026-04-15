__d(
  "WAWebStickerLikeMsgPlaceholder.react",
  ["WAWebClassnames", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.className,
        r = e.size,
        a;
      t[0] !== r
        ? ((a = r == null ? void 0 : { width: r, height: r }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x78zum5 xl56j7k x6s0dn4",
            n,
          )),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s.jsx("div", {
            className:
              "x1f9tj09 xb8htw9 x1w8lwzf xed5h26 x1502et5 xggx2qq x1bklw8v",
          })),
          (t[4] = u))
        : (u = t[4]);
      var c;
      return (
        t[5] !== i || t[6] !== l
          ? ((c = s.jsx("div", {
              "data-testid": void 0,
              style: i,
              className: l,
              children: u,
            })),
            (t[5] = i),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    l.default = u;
  },
  98,
);
