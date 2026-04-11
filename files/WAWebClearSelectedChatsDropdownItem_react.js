__d(
  "WAWebClearSelectedChatsDropdownItem.react",
  [
    "fbt",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onComplete,
        a = e.selectedModels,
        i;
      if (t[0] !== a) {
        var l = a.getSelected();
        ((i = l.reduce(d, [])), (t[0] = a), (t[1] = i));
      } else i = t[1];
      var c = i,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Clear selected chats")), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== c || t[4] !== n
        ? ((_ = function () {
            o("WAWebCmd").Cmd.clearSelectedChats(c, n);
          }),
          (t[3] = c),
          (t[4] = n),
          (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WAWebDropdownItemSeparator.react"), {})), (t[6] = g))
        : (g = t[6]);
      var h;
      return (
        t[7] !== f
          ? ((h = u.jsxs(u.Fragment, {
              children: [
                g,
                u.jsx(r("WDSMenuItem.react"), {
                  Icon: r("WDSIconIcDoNotDisturbOn.react"),
                  title: p,
                  onPress: f,
                  destructive: !0,
                  testid: void 0,
                }),
              ],
            })),
            (t[7] = f),
            (t[8] = h))
          : (h = t[8]),
        h
      );
    }
    function d(e, t) {
      return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
    }
    l.default = c;
  },
  226,
);
