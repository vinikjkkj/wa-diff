__d(
  "WAWebChatGroupSuspendedMessagePreview.react",
  [
    "fbt",
    "WAWebGroupGatingUtils",
    "WAWebSettingsBlockedIcon.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o(
            "WAWebGroupGatingUtils",
          ).isGroupSuspensionAppealsRedesignEnabled()
            ? s._(/*BTDS*/ "This group is suspended")
            : s._(/*BTDS*/ "This group is no longer available")),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1k4tb9n" }), (e[1] = r))
        : (r = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsxs(
              "span",
              babelHelpers.extends({ title: n }, r, {
                children: [
                  u.jsx(
                    o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
                    {
                      width: 14,
                      height: 14,
                      displayInline: !0,
                      directional: !0,
                      xstyle: [
                        o("WAWebUISpacing").uiMargin.top3,
                        o("WAWebUISpacing").uiMargin.end3,
                      ],
                    },
                  ),
                  n,
                ],
              }),
            )),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = c;
  },
  226,
);
