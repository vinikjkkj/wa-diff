__d(
  "WAWebProfileDrawerPhoneNumber.react",
  [
    "fbt",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebPhoneIcon.react",
    "WAWebStopEvent",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFormat",
    "WDSButton.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        sectionPadding: {
          paddingTop: "xyinxu5",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        titlePadding: {
          paddingInlineStart: "x162tt16",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
        phoneIcon: { color: "xhslqc4", $$css: !0 },
        selectableText: { userSelect: "x1hx0egp", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.myPn,
        a;
      t[0] !== n
        ? ((a = o("WAWebWidFormat").widToFormattedUser(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Phone")), (t[2] = l))
        : (l = t[2]);
      var d = l,
        p;
      t[3] !== i
        ? ((p = function () {
            o("WAWebCopyToClipboard").copyTextToClipboard(i).then(m);
          }),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Copy")), (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== _
        ? ((h = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: u.jsx(r("WDSTooltip.react"), {
              label: g,
              children: u.jsx(r("WDSButton.react"), {
                Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                variant: "borderless",
                onPress: _,
                "aria-label": g,
              }),
            }),
          })),
          (t[6] = _),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
            xstyle: c.phoneIcon,
          })),
          (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] !== i
        ? ((C = u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 24,
            align: "center",
            children: [
              y,
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                gap: 8,
                children: u.jsx("div", {
                  onCopy: o("WAWebStopEvent").stopPropagation,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    xstyle: c.selectableText,
                    children: i,
                  }),
                }),
              }),
            ],
          })),
          (t[9] = i),
          (t[10] = C))
        : (C = t[10]);
      var b;
      if (t[11] !== h || t[12] !== C) {
        var v = u.jsx(r("WAWebDrawerBlock.react"), { side: h, children: C });
        ((b = u.jsx(r("WAWebDrawerSection.react"), {
          theme: "no-padding",
          animation: !1,
          title: d,
          titleXStyle: c.titlePadding,
          xstyle: c.sectionPadding,
          children: v,
        })),
          (t[11] = h),
          (t[12] = C),
          (t[13] = b));
      } else b = t[13];
      return b;
    }
    function m(e) {
      e &&
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Phone number copied"),
          }),
        );
    }
    l.default = d;
  },
  226,
);
