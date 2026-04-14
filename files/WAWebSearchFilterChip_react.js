__d(
  "WAWebSearchFilterChip.react",
  ["WAWebFlex.react", "WAWebKeyboardHotKeys.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef,
      m = u.useState,
      p = {
        searchChip: {
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "xnbdvss",
          color: "x14ug900",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x5see2y",
          borderInlineEndWidth: "x16hg961",
          borderBottomWidth: "x1pzews7",
          borderInlineStartWidth: "x1x3agtl",
          borderTopColor: "xmqhhia",
          borderInlineEndColor: "xhxcbcp",
          borderBottomColor: "x1klr3x6",
          borderInlineStartColor: "x11lmomm",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        searchChipFocused: {
          borderTopColor: "x1t820il",
          borderInlineEndColor: "x1yrp5sm",
          borderBottomColor: "x15br8yv",
          borderInlineStartColor: "x198hnly",
          $$css: !0,
        },
        paddingHoriz4: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert2: {
          paddingTop: "x1gxa6cn",
          paddingBottom: "xa0aww2",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.onClearFilter,
        n = e.ref,
        r = e.text,
        a = e.xstyle,
        i = d(),
        l = m(!1),
        u = l[0],
        _ = l[1],
        f = {
          backspace: function () {
            u && t();
          },
        },
        g = function () {
          var e;
          ((e = i.current) == null || e.focus(), _(!0));
        },
        h = function (t) {
          (t.preventDefault(), g());
        };
      return (
        c(n, function () {
          return {
            focus: function () {
              g();
            },
            blur: function () {
              var e;
              ((e = i.current) == null || e.blur(), _(!1));
            },
            isFocused: function () {
              return u;
            },
          };
        }),
        s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: i,
          handlers: f,
          xstyle: a,
          onClick: h,
          children: s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [
              p.paddingHoriz4,
              p.paddingVert2,
              p.searchChip,
              u && p.searchChipFocused,
            ],
            children: r,
          }),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
