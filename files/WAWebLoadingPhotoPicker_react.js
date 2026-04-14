__d(
  "WAWebLoadingPhotoPicker.react",
  [
    "WAWebAvatarSpinner.react",
    "WAWebEmptyState.react",
    "WAWebPhotoPickerStyle",
    "react",
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
      var t = e.error,
        n = e.retry,
        a = e.svgName,
        i =
          a != null
            ? s.jsx("div", {
                className: o("WAWebPhotoPickerStyle").styles.svgSize,
              })
            : void 0;
      return s.jsx("div", {
        className: o("WAWebPhotoPickerStyle").styles.container,
        children: s.jsxs("div", {
          className: o("WAWebPhotoPickerStyle").styles.body,
          dir: "ltr",
          children: [
            s.jsx("div", {
              className: o("WAWebPhotoPickerStyle").styles.imageContainer,
              children: i,
            }),
            t
              ? s.jsx(o("WAWebEmptyState.react").LazyLoadRetry, {
                  xstyle: u.lazyLoadRetry,
                  onClick: n,
                })
              : s.jsx(r("WAWebAvatarSpinner.react"), {}),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
