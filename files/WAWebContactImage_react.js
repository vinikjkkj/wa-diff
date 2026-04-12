__d(
  "WAWebContactImage.react",
  [
    "WAWebChatSearchQuery",
    "WAWebDetailImage.react",
    "WAWebStatusChatlistRing.react",
    "WAWebStatusProfilePhotoRingWrapper.react",
    "WAWebWamEnumStatusRowSection",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = e.ephemeralIcon,
        a = e.loadPicture,
        i = a === void 0 ? !0 : a,
        l = e.searchQuery,
        u = e.showStatusRingAroundProfilePhoto,
        c = e.size,
        d = e.theme,
        m = e.waitIdle;
      return u === !0
        ? o("WAWebChatSearchQuery").isSearchResult(l)
          ? s.jsx(r("WAWebStatusChatlistRing.react"), {
              contact: t,
              photoSize: c,
              waitIdle: m,
              rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .CHAT_LIST_SEARCH,
              rowIndex: 0,
            })
          : s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
              contact: t,
              waitIdle: m,
              photoSize: c,
              hideWhenNoUnreadStatuses: !1,
              rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .GROUP_PARTICIPANT,
              rowIndex: 0,
            })
        : s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: t.id,
            size: c,
            ephemeralIcon: n,
            waitIdle: m,
            loadPicture: i,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
