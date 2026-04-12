__d(
  "WAWebOutContactCell.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebDefaultUserIcon.react",
    "WAWebOutContactConsts",
    "WAWebOutContactGetters",
    "WAWebOutContactInviteButton.react",
    "WAWebPhoneUtils",
    "react",
    "useWAWebOutContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = e.contact,
        n = e.entryPoint,
        a = e.inviteFlow,
        i = e.isSearchResult,
        l = e.onClick,
        d = e.searchMatch,
        m = e.testid,
        p = e.theme,
        _ =
          a ===
          o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite,
        f = o("useWAWebOutContactValues").useWAWebOutContactValues(t.id, [
          o("WAWebOutContactGetters").getName,
          o("WAWebOutContactGetters").getPhoneNumber,
        ]),
        g = f[0],
        h = f[1],
        y = o("WAWebPhoneUtils").formatPhone(h),
        C =
          n != null
            ? n
            : i === !0
              ? o("WAWebOutContactConsts").WAWebOutContactInviteEntryPoint
                  .CONTACT_PICKER_SEARCH
              : o("WAWebOutContactConsts").WAWebOutContactInviteEntryPoint
                  .CONTACT_PICKER_LIST,
        b = c(
          function () {
            return d != null && d.results.length > 0
              ? d.results
                  .map(function (e) {
                    return d.match.substring(
                      e.startIndex,
                      e.startIndex + e.length,
                    );
                  })
                  .join(" ")
              : void 0;
          },
          [d],
        );
      return u.jsx(r("WAWebChatCell.react"), {
        testid: void 0,
        contextEnabled: o("WAWebBoolFunc").returnFalse,
        theme: p,
        image: u.jsx("div", {
          className: "x78zum5 x6s0dn4 xl56j7k",
          children: u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
            height: 49,
            width: 49,
          }),
        }),
        primary: g,
        secondary: _ ? s._(/*BTDS*/ "Not on WhatsApp") : y,
        searchText: b,
        detail: _
          ? null
          : u.jsx(r("WAWebOutContactInviteButton.react"), {
              phoneNumber: h,
              entryPoint: C,
            }),
        onClick: l,
        idle: !1,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
