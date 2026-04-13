__d(
  "WAWebContactImage.react",
  [
    "WAWebChatSearchQuery",
    "WAWebDetailImage.react",
    "WAWebStatusChatlistRing.react",
    "WAWebStatusProfilePhotoRingWrapper.react",
    "WAWebWamEnumStatusRowSection",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.contact,
        a = e.ephemeralIcon,
        i = e.loadPicture,
        l = e.searchQuery,
        u = e.showStatusRingAroundProfilePhoto,
        c = e.size,
        d = e.waitIdle,
        m = i === void 0 ? !0 : i;
      if (u === !0) {
        var p;
        return (
          t[0] !== n || t[1] !== l || t[2] !== c || t[3] !== d
            ? ((p = o("WAWebChatSearchQuery").isSearchResult(l)
                ? s.jsx(r("WAWebStatusChatlistRing.react"), {
                    contact: n,
                    photoSize: c,
                    waitIdle: d,
                    rowSection: o("WAWebWamEnumStatusRowSection")
                      .STATUS_ROW_SECTION.CHAT_LIST_SEARCH,
                    rowIndex: 0,
                  })
                : s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
                    contact: n,
                    waitIdle: d,
                    photoSize: c,
                    hideWhenNoUnreadStatuses: !1,
                    rowSection: o("WAWebWamEnumStatusRowSection")
                      .STATUS_ROW_SECTION.GROUP_PARTICIPANT,
                    rowIndex: 0,
                  })),
              (t[0] = n),
              (t[1] = l),
              (t[2] = c),
              (t[3] = d),
              (t[4] = p))
            : (p = t[4]),
          p
        );
      }
      var _;
      return (
        t[5] !== n.id || t[6] !== a || t[7] !== m || t[8] !== c || t[9] !== d
          ? ((_ = s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.id,
              size: c,
              ephemeralIcon: a,
              waitIdle: d,
              loadPicture: m,
            })),
            (t[5] = n.id),
            (t[6] = a),
            (t[7] = m),
            (t[8] = c),
            (t[9] = d),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = u;
  },
  98,
);
