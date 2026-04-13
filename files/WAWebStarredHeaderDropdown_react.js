__d(
  "WAWebStarredHeaderDropdown.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebModalManager",
    "WAWebThreadMsgUtils",
    "WAWebUnstarAllPopup.react",
    "WAWebUnstarRefreshedIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        a = e.msgs,
        i = e.threadId,
        l;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        if (a.length > 0) l = a;
        else {
          var c;
          l =
            (c = n == null ? void 0 : n.getStarredMsgs().toArray()) != null
              ? c
              : [];
        }
        if (i != null) {
          var d;
          (t[4] !== i
            ? ((d = function (t) {
                return o("WAWebThreadMsgUtils").isMsgInThread(t, i);
              }),
              (t[4] = i),
              (t[5] = d))
            : (d = t[5]),
            (l = l.filter(d)));
        }
        ((t[0] = n), (t[1] = a), (t[2] = i), (t[3] = l));
      } else l = t[3];
      var m;
      t[6] !== n || t[7] !== l
        ? ((m = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebUnstarAllPopup.react"), { msgs: l, chat: n }),
            );
          }),
          (t[6] = n),
          (t[7] = l),
          (t[8] = m))
        : (m = t[8]);
      var p = m,
        _;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(
            o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
            {},
          )),
          (t[9] = _))
        : (_ = t[9]);
      var f = l.length === 0,
        g;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Unstar all")), (t[10] = g))
        : (g = t[10]);
      var h;
      return (
        t[11] !== p || t[12] !== f
          ? ((h = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              icon: _,
              testid: void 0,
              action: p,
              disabled: f,
              children: g,
            })),
            (t[11] = p),
            (t[12] = f),
            (t[13] = h))
          : (h = t[13]),
        h
      );
    }
    l.default = c;
  },
  226,
);
