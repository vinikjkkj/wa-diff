__d(
  "WAWebMsgPhoneNumbers",
  [
    "WAUnicodeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHelpersFindPhoneNumbers",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.content,
        n = e.cachedValue,
        a = e.currentIndex,
        i = a === void 0 ? 0 : a,
        l = e.endIndex,
        s = l === void 0 ? 1 / 0 : l;
      if (i >= s) return [n, s];
      var u = o("WAUnicodeUtils").firstNCodepoints(t, s),
        c = r("WAWebHelpersFindPhoneNumbers")(u);
      if (o("WAUnicodeUtils").numCodepoints(t) > s && c.length > 0) {
        var d = c[c.length - 1],
          m = o("WAUnicodeUtils").numCodepoints(u.slice(0, d.index)),
          p = m + o("WAUnicodeUtils").numCodepoints(d.phone);
        p === s && (c = r("WAWebHelpersFindPhoneNumbers")(t));
      }
      return [c, s];
    }
    function s(t, n) {
      var r = o("WAWebStateUtils").unproxy(t),
        a = n != null ? n : o("WAWebMsgGetters").getInitialPageSize(r) + 1,
        i = o("WAWebFrontendMsgGetters").getText(r);
      if (i == null || r.phoneNumbersIndexParsed === 1 / 0)
        return r.getRawPhoneNumbers();
      var l = e({
          content: i,
          cachedValue: r.getRawPhoneNumbers(),
          currentIndex: r.phoneNumbersIndexParsed,
          endIndex: a,
        }),
        s = l[0],
        u = l[1];
      return ((r.phoneNumbersIndexParsed = u), r.setRawPhoneNumbers(s), s);
    }
    function u(t, n) {
      if (t.getRawHeaderPhoneNumbers().length > 0)
        return t.getRawHeaderPhoneNumbers();
      var r = e({ content: n, cachedValue: t.getRawHeaderPhoneNumbers() }),
        o = r[0];
      return (t.setRawHeaderPhoneNumbers(o), o);
    }
    function c(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, !0)) {
        var r;
        return u(n, ((r = n.list) == null ? void 0 : r.title) || "");
      } else {
        if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, !1))
          return u(n, n.title);
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((t = n.interactiveHeader) == null ? void 0 : t.title) != null
        )
          return u(n, n.interactiveHeader.title);
      }
      return [];
    }
    function d(t) {
      var n,
        r = o("WAWebStateUtils").unproxy(t);
      if (
        !o("WAWebMsgGetters").getSupportsMessageFooterLinks(r) ||
        r.footer == null
      )
        return [];
      if (r.getRawFooterPhoneNumbers().length > 0)
        return r.getRawFooterPhoneNumbers();
      var a = e({
          content: (n = r.footer) != null ? n : "",
          cachedValue: r.getRawFooterPhoneNumbers(),
        }),
        i = a[0];
      return (r.setRawFooterPhoneNumbers(i), i);
    }
    ((l.getPhoneNumbersFromMsgImpl = e),
      (l.getPhoneNumbersFromMsg = s),
      (l.getHeaderPhoneNumbersFromMsg = c),
      (l.getFooterPhoneNumbersFromMsg = d));
  },
  98,
);
