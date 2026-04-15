__d(
  "WAWebIgnoreNonDirectGroupMsgToggle.react",
  [
    "fbt",
    "WAWebMuteCollection",
    "WAWebSettingsCheckList.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = r("useWAWebToggle")(m, d),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Ignore non-direct group messages")), (e[0] = i))
        : (i = e[0]);
      var l = i,
        c;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "Ignore group chat notifications that aren't directed at you",
            ),
          })),
          (e[1] = c))
        : (c = e[1]);
      var p;
      return (
        e[2] !== n || e[3] !== a
          ? ((p = u.jsxs(
              o("WAWebSettingsCheckList.react").SettingsCheckListItem,
              {
                testid: void 0,
                id: "nondirect-group-msg-notif",
                checked: n,
                checkboxRightAligned: !0,
                onChange: a,
                children: [l, c],
              },
            )),
            (e[2] = n),
            (e[3] = a),
            (e[4] = p))
          : (p = e[4]),
        p
      );
    }
    function d(e) {
      return o("WAWebMuteCollection").MuteCollection.setIgnoreNondirectGroupMsg(
        e,
      );
    }
    function m() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getIgnoreNondirectGroupMsg();
    }
    l.default = c;
  },
  226,
);
