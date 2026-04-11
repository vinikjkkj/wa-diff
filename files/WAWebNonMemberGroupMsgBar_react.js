__d(
  "WAWebNonMemberGroupMsgBar.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebDeleteIcon.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            paddingEnd: 4,
            children: u.jsx("div", {
              className: "x126k92a",
              children: s._(
                /*BTDS*/ "You can't send messages to this group because you're no longer a member.",
              ),
            }),
          })),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n
        ? ((a = function () {
            return o("WAWebCmd").Cmd.deleteOrExitChat(n);
          }),
          (t[1] = n),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Delete chat")), (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              grow: 1,
              children: [
                r,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  shrink: 0,
                  children: u.jsx(
                    o("WAWebButton.react").WAWebButtonSecondaryDestructive,
                    {
                      alignSelf: "end",
                      onClick: a,
                      icon: o("WAWebDeleteIcon.react").DeleteIcon,
                      testid: void 0,
                      children: i,
                    },
                  ),
                }),
              ],
            })),
            (t[4] = a),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    l.default = c;
  },
  226,
);
