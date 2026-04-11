__d(
  "WAWebBusinessProfilePhoneSection.react",
  [
    "fbt",
    "WAWebBusinessProfileIconSection.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "WDSIconIcCall.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginTop20: { marginTop: "x1nmyh1g", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isProfileLocked,
        a = n === void 0 ? !1 : n,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
            selectable: !0,
            children: o("WAWebWidFormat").widToFormattedUser(
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            ),
          })),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l =
            a === !0
              ? null
              : u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: c.marginTop20,
                  className: "xhslqc4 x1pg5gke x37zpob",
                  children: s._(
                    /*BTDS*/ "Name and phone number will be visible to your WhatsApp customers and can be edited from the app on your mobile device.",
                  ),
                })),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var d;
      t[3] !== l
        ? ((d = u.jsxs("div", { children: [i, l] })), (t[3] = l), (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== a || t[6] !== d
          ? ((m = u.jsx(
              o("WAWebBusinessProfileIconSection.react").IconSection,
              {
                Icon: r("WDSIconIcCall.react"),
                type: "container",
                disabled: a,
                content: d,
              },
            )),
            (t[5] = a),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.default = d;
  },
  226,
);
