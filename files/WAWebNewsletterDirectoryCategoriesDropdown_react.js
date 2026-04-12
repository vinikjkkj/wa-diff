__d(
  "WAWebNewsletterDirectoryCategoriesDropdown.react",
  [
    "WAWebApplyIcon.react",
    "WAWebCellV2.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebText.react",
    "react",
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
      var t = e.categories,
        n = e.onCategorySelect;
      return t.map(function (e, t) {
        return s.jsx(
          o("WAWebKeyboardHotKeys.react").HotKeys,
          {
            role: "button",
            "data-testid": void 0,
            onMouseDown: function () {
              return n(e, t);
            },
            children: s.jsx(r("WAWebCellV2.react"), {
              containerXStyle: [u.paddingVert2, u.paddingHoriz16],
              colorScheme: "default",
              border: "bottom-partial",
              testid: void 0,
              size: "small",
              primary: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: e.name,
              }),
              detailRight: s.jsx(o("WAWebApplyIcon.react").ApplyIcon, {
                height: 24,
                iconXstyle: u.icon,
              }),
            }),
          },
          e.type,
        );
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
