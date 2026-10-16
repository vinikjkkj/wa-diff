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
        r = e.currentIndex,
        a = r === void 0 ? 0 : r,
        i = e.endIndex,
        l = i === void 0 ? 1 / 0 : i;
      if (a >= l) return [n, l];
      var s = o("WAUnicodeUtils").firstNCodepoints(t, l),
        u = o("WAWebHelpersFindPhoneNumbers").findPhoneNumbers(s);
      if (o("WAUnicodeUtils").numCodepoints(t) > l && u.length > 0) {
        var c = u[u.length - 1],
          d = o("WAUnicodeUtils").numCodepoints(s.slice(0, c.index)),
          m = d + o("WAUnicodeUtils").numCodepoints(c.phone);
        m === l && (u = o("WAWebHelpersFindPhoneNumbers").findPhoneNumbers(t));
      }
      return [u, l];
    }
    function s(t, n) {
      var r = e({ content: t, cachedValue: [], endIndex: n }),
        o = r[0];
      return o;
    }
    function u(t, n) {
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
    function c(t, n) {
      if (t.getRawHeaderPhoneNumbers().length > 0)
        return t.getRawHeaderPhoneNumbers();
      var r = e({ content: n, cachedValue: t.getRawHeaderPhoneNumbers() }),
        o = r[0];
      return (t.setRawHeaderPhoneNumbers(o), o);
    }
    function d(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, !0)) {
        var r;
        return c(n, ((r = n.list) == null ? void 0 : r.title) || "");
      } else {
        if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, !1))
          return c(n, n.title);
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((t = n.interactiveHeader) == null ? void 0 : t.title) != null
        )
          return c(n, n.interactiveHeader.title);
      }
      return [];
    }
    function m(t) {
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
      (l.getPhoneNumbersFromText = s),
      (l.getPhoneNumbersFromMsg = u),
      (l.getHeaderPhoneNumbersFromMsg = d),
      (l.getFooterPhoneNumbersFromMsg = m));
  },
  98,
);
