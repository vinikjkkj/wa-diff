__d(
  "WAWebMsgBarDeactivateCommunityMessageBar",
  ["fbt", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.groupMetadata,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x126k92a" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n.participants
          ? ((a = u.jsx(
              "span",
              babelHelpers.extends({}, r, {
                "data-testid": "deactivated-community-msg-bar",
                children: n.participants.iAmAdmin()
                  ? s._(
                      /*BTDS*/ "This community was deactivated. You can no longer message it.",
                    )
                  : s._(/*BTDS*/ "This community was deactivated"),
              }),
            )),
            (t[1] = n.participants),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = c;
  },
  226,
);
