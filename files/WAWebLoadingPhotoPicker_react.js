__d(
  "WAWebLoadingPhotoPicker.react",
  [
    "WAWebAvatarSpinner.react",
    "WAWebEmptyState.react",
    "WAWebPhotoPickerStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        lazyLoadRetry: {
          position: "x10l6tqk",
          top: "x13vifvy",
          left: "xu96u03",
          insetInlineStart: null,
          insetInlineEnd: null,
          zIndex: "x1n327nk",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x5yr21d",
          color: "x17t9dm2",
          backgroundColor: "x1honnu5",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.error,
        a = e.retry,
        i = e.svgName,
        l;
      t[0] !== i
        ? ((l =
            i != null
              ? s.jsx("div", {
                  className: o("WAWebPhotoPickerStyle").styles.svgSize,
                })
              : void 0),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] !== c
        ? ((d = s.jsx("div", {
            className: o("WAWebPhotoPickerStyle").styles.imageContainer,
            children: c,
          })),
          (t[2] = c),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== n || t[5] !== a
        ? ((m = n
            ? s.jsx(o("WAWebEmptyState.react").LazyLoadRetry, {
                xstyle: u.lazyLoadRetry,
                onClick: a,
              })
            : s.jsx(r("WAWebAvatarSpinner.react"), {})),
          (t[4] = n),
          (t[5] = a),
          (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== d || t[8] !== m
          ? ((p = s.jsx("div", {
              className: o("WAWebPhotoPickerStyle").styles.container,
              children: s.jsxs("div", {
                className: o("WAWebPhotoPickerStyle").styles.body,
                dir: "ltr",
                children: [d, m],
              }),
            })),
            (t[7] = d),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = c;
  },
  98,
);
