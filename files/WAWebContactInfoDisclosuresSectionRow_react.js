__d(
  "WAWebContactInfoDisclosuresSectionRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebConsumerTransparencyModalDialog.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(4);
      if (
        !o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowROWConsumerDisclosure()
      )
        return null;
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(
            /*BTDS*/ "Meta receives limited info, like the number and types of interactions with a business chat.",
          )),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(
            o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
            { iconXstyle: c.secondaryColor, height: 22, width: 22 },
          )),
          (e[1] = r))
        : (r = e[1]);
      var a;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            children: n,
          })),
          (e[2] = a))
        : (a = e[2]);
      var i;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
              icon: r,
              onClick: o("WAWebConsumerTransparencyModalDialog.react")
                .showConsumerTransparencyModalDialog,
              secondaryTitle: a,
              testid: void 0,
              title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                testid: void 0,
                children: s._(/*BTDS*/ "This chat started from an ad"),
              }),
            })),
            (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    l.default = d;
  },
  226,
);
