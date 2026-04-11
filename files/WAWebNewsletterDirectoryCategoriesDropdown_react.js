__d(
  "WAWebNewsletterDirectoryCategoriesDropdown.react",
  [
    "WAWebApplyIcon.react",
    "WAWebCellV2.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        icon: { color: "x17x0uo", $$css: !0 },
        paddingVert2: {
          paddingTop: "x1gxa6cn",
          paddingBottom: "xa0aww2",
          $$css: !0,
        },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.categories,
        a = e.onCategorySelect,
        i;
      if (t[0] !== n || t[1] !== a) {
        var l;
        (t[3] !== a
          ? ((l = function (t, n) {
              return s.jsx(
                o("WAWebKeyboardHotKeys.react").HotKeys,
                {
                  role: "button",
                  "data-testid": void 0,
                  onMouseDown: function () {
                    return a(t, n);
                  },
                  children: s.jsx(r("WAWebCellV2.react"), {
                    containerXStyle: [u.paddingVert2, u.paddingHoriz16],
                    colorScheme: "default",
                    border: "bottom-partial",
                    testid: void 0,
                    size: "small",
                    primary: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                      children: t.name,
                    }),
                    detailRight: s.jsx(o("WAWebApplyIcon.react").ApplyIcon, {
                      height: 24,
                      iconXstyle: u.icon,
                    }),
                  }),
                },
                t.type,
              );
            }),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
          (i = n.map(l)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      return i;
    }
    l.default = c;
  },
  98,
);
