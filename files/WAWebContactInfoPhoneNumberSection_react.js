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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.contact,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebFrontendContactGetters").getFormattedPhoneAndType,
            o("WAWebFrontendContactGetters").getFormattedUserAndType,
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebContactValues").useContactValues(n.id, r),
        i = a[0],
        l = a[1],
        c = a[2],
        d =
          (l.type ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME ||
            c.type ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME) &&
          i.type ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER;
      if (!d) return null;
      var m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Phone number")), (t[1] = m))
        : (m = t[1]);
      var p = m,
        _ = i.displayName,
        f;
      return (
        t[2] !== _
          ? ((f = u.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-phone-number",
                title: p,
                titleXStyle: o("WAWebUISpacing").uiPadding.all0,
                children: u.jsx("div", {
                  onCopy: o("WAWebStopEvent").stopPropagation,
                  children: u.jsx(
                    o("WAWebText.react").WAWebTextTitleRefreshed,
                    {
                      color: "wdsContentDefault",
                      xstyle: o("WAWebUISpacing").uiMargin.top4,
                      children: _,
                    },
                  ),
                }),
              },
            )),
            (t[2] = _),
            (t[3] = f))
          : (f = t[3]),
        f
      );
    }
    l.default = c;
  },
  226,
);
