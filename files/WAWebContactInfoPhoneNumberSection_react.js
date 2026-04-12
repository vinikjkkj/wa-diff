__d(
  "WAWebContactInfoPhoneNumberSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebFrontendContactGetters",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedPhoneAndType,
          o("WAWebFrontendContactGetters").getFormattedUserAndType,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l =
          (a.type ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME ||
            i.type ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME) &&
          r.type ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER;
      if (!l) return null;
      var c = s._(/*BTDS*/ "Phone number"),
        d = r.displayName;
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          titleTestId: "section-phone-number",
          title: c,
          titleXStyle: o("WAWebUISpacing").uiPadding.all0,
          children: u.jsx("div", {
            onCopy: o("WAWebStopEvent").stopPropagation,
            children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              color: "wdsContentDefault",
              xstyle: o("WAWebUISpacing").uiMargin.top4,
              children: d,
            }),
          }),
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
