__d(
  "WAWebMessageMultiEmoji.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.animation,
        r = e.emojis,
        a = r ? r.length : 0;
      if (a === 0) return null;
      var i;
      if (t[0] !== a) {
        e: switch (a) {
          default:
          case 3: {
            i = o("WAWebMessageLargeEmoji.react").SIZE.MEDIUM;
            break e;
          }
          case 2: {
            i = o("WAWebMessageLargeEmoji.react").SIZE.LARGE;
            break e;
          }
          case 1:
            i = o("WAWebMessageLargeEmoji.react").SIZE.XLARGE;
        }
        ((t[0] = a), (t[1] = i));
      } else i = t[1];
      var l;
      if (t[2] !== n || t[3] !== r || t[4] !== i) {
        var u;
        (t[6] !== n || t[7] !== i
          ? ((u = function (t, r) {
              return s.jsx(
                o("WAWebMessageLargeEmoji.react").LargeEmoji,
                { animation: n, size: i, emoji: t, selectable: !0 },
                t + r,
              );
            }),
            (t[6] = n),
            (t[7] = i),
            (t[8] = u))
          : (u = t[8]),
          (l = r.map(u)),
          (t[2] = n),
          (t[3] = r),
          (t[4] = i),
          (t[5] = l));
      } else l = t[5];
      var c = l,
        d;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((d =
            "x1n2onr6 xc9l9hb x78zum5 xl56j7k x1yrsyyn xdj266r x1emmycd x1u7kmwd xx6jrq6 x1ed109x"),
          (t[9] = d))
        : (d = t[9]);
      var m;
      return (
        t[10] !== c
          ? ((m = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              selectable: !0,
              className: d,
              children: c,
            })),
            (t[10] = c),
            (t[11] = m))
          : (m = t[11]),
        m
      );
    }
    l.default = u;
  },
  98,
);
