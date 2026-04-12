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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      if (
        !o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowROWConsumerDisclosure()
      )
        return null;
      var e = s._(
        /*BTDS*/ "Meta receives limited info, like the number and types of interactions with a business chat.",
      );
      return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
        icon: u.jsx(
          o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
          { iconXstyle: c.secondaryColor, height: 22, width: 22 },
        ),
        onClick: o("WAWebConsumerTransparencyModalDialog.react")
          .showConsumerTransparencyModalDialog,
        secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          testid: void 0,
          children: e,
        }),
        testid: void 0,
        title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          testid: void 0,
          children: s._(/*BTDS*/ "This chat started from an ad"),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
