__d(
  "WAWebGroupMemberUpdatesSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebDrawerButtonRefreshed.react",
    "WDSIconIcFormatListBulleted.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onMemberUpdates,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSIconIcFormatListBulleted.react"), {})),
          (i = s._(/*BTDS*/ "View member changes")),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      return (
        t[2] !== e.onMemberUpdates
          ? ((l = u.jsx(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              {
                children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                  testid: void 0,
                  onClick: n,
                  icon: a,
                  children: i,
                }),
              },
            )),
            (t[2] = e.onMemberUpdates),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  226,
);
