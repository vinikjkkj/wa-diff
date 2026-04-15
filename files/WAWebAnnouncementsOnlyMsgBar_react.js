__d(
  "WAWebAnnouncementsOnlyMsgBar.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebMsgBarActions",
    "WAWebMuteGetters",
    "WAWebTabOrder",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.groupMetadata,
        a = e.mute,
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMuteGetters").getIsMuted]), (t[0] = i))
        : (i = t[0]),
        o("useWAWebMuteValues").useMuteValues(a.id, i));
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["participants", "id"]), (t[1] = l))
        : (l = t[1]);
      var c = o("useWAWebModelValues").useModelValues(n, l),
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Message admin")), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== c
        ? ((m = function () {
            o("WAWebMsgBarActions").handleMsgAdmin(
              c,
              s._(/*BTDS*/ "Message admin"),
            );
          }),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "admins")), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== m
        ? ((_ = u.jsx(r("WAWebClickableLink.react"), {
            tabIndex: 0,
            "data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
            ariaLabel: d,
            onClick: m,
            children: p,
          })),
          (t[6] = m),
          (t[7] = _))
        : (_ = t[7]);
      var f = _,
        g;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x126k92a" }), (t[8] = g))
        : (g = t[8]);
      var h;
      return (
        t[9] !== f
          ? ((h = u.jsx(
              "span",
              babelHelpers.extends({}, g, {
                children: s._(/*BTDS*/ "Only {admins} can send messages", [
                  s._param("admins", f),
                ]),
              }),
            )),
            (t[9] = f),
            (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    l.default = c;
  },
  226,
);
