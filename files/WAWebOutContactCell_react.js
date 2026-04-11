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
    "react-compiler-runtime",
    "useWAWebOutContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.contact,
        a = e.entryPoint,
        i = e.inviteFlow,
        l = e.isSearchResult,
        c = e.onClick,
        d = e.searchMatch,
        m = e.testid,
        p = e.theme,
        _ =
          i ===
          o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            o("WAWebOutContactGetters").getName,
            o("WAWebOutContactGetters").getPhoneNumber,
          ]),
          (t[0] = f))
        : (f = t[0]);
      var g = o("useWAWebOutContactValues").useWAWebOutContactValues(n.id, f),
        h = g[0],
        y = g[1],
        C;
      t[1] !== y
        ? ((C = o("WAWebPhoneUtils").formatPhone(y)), (t[1] = y), (t[2] = C))
        : (C = t[2]);
      var b = C,
        v =
          a != null
            ? a
            : l === !0
              ? o("WAWebOutContactConsts").WAWebOutContactInviteEntryPoint
                  .CONTACT_PICKER_SEARCH
              : o("WAWebOutContactConsts").WAWebOutContactInviteEntryPoint
                  .CONTACT_PICKER_LIST,
        S;
      t[3] !== d
        ? ((S =
            d != null && d.results.length > 0
              ? d.results
                  .map(function (e) {
                    return d.match.substring(
                      e.startIndex,
                      e.startIndex + e.length,
                    );
                  })
                  .join(" ")
              : void 0),
          (t[3] = d),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L = m != null ? m : "out-contact-cell",
        E;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k",
            children: u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
              height: 49,
              width: 49,
            }),
          })),
          (t[5] = E))
        : (E = t[5]);
      var k;
      t[6] !== b || t[7] !== _
        ? ((k = _ ? s._(/*BTDS*/ "Not on WhatsApp") : b),
          (t[6] = b),
          (t[7] = _),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== _ || t[10] !== y || t[11] !== v
        ? ((I = _
            ? null
            : u.jsx(r("WAWebOutContactInviteButton.react"), {
                phoneNumber: y,
                entryPoint: v,
              })),
          (t[9] = _),
          (t[10] = y),
          (t[11] = v),
          (t[12] = I))
        : (I = t[12]);
      var T;
      return (
        t[13] !== h ||
        t[14] !== c ||
        t[15] !== R ||
        t[16] !== L ||
        t[17] !== k ||
        t[18] !== I ||
        t[19] !== p
          ? ((T = u.jsx(r("WAWebChatCell.react"), {
              testid: void 0,
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              theme: p,
              image: E,
              primary: h,
              secondary: k,
              searchText: R,
              detail: I,
              onClick: c,
              idle: !1,
            })),
            (t[13] = h),
            (t[14] = c),
            (t[15] = R),
            (t[16] = L),
            (t[17] = k),
            (t[18] = I),
            (t[19] = p),
            (t[20] = T))
          : (T = t[20]),
        T
      );
    }
    l.default = d;
  },
  226,
);
