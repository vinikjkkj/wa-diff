__d(
  "WAWebArchiveMenuItem.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebNewsletterGatingUtils",
    "WDSIconIcArchive.react",
    "WDSIconIcUnarchive.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.disabled,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["archive"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(e.chat, a),
        l;
      t[1] !== i.archive || t[2] !== e.onArchive
        ? ((l = e.onArchive.bind(null, !i.archive)),
          (t[1] = i.archive),
          (t[2] = e.onArchive),
          (t[3] = l))
        : (l = t[3]);
      var c = l,
        d;
      t[4] !== e.chat
        ? ((d =
            o("WAWebChatGetters").getIsNewsletter(e.chat) &&
            o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()),
          (t[4] = e.chat),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      if (i.archive) {
        var _;
        (t[6] !== m
          ? ((_ = m
              ? s._(/*BTDS*/ "Unarchive channel")
              : s._(/*BTDS*/ "Unarchive chat")),
            (t[6] = m),
            (t[7] = _))
          : (_ = t[7]),
          (p = _));
      } else {
        var f;
        (t[8] !== m
          ? ((f = m
              ? s._(/*BTDS*/ "Archive channel")
              : s._(/*BTDS*/ "Archive chat")),
            (t[8] = m),
            (t[9] = f))
          : (f = t[9]),
          (p = f));
      }
      var g = i.archive
          ? r("WDSIconIcUnarchive.react")
          : r("WDSIconIcArchive.react"),
        h;
      return (
        t[10] !== n || t[11] !== c || t[12] !== g || t[13] !== p
          ? ((h = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: g, title: p, testid: void 0, onPress: c, disabled: n },
              "ArchiveMenuItem",
            )),
            (t[10] = n),
            (t[11] = c),
            (t[12] = g),
            (t[13] = p),
            (t[14] = h))
          : (h = t[14]),
        h
      );
    }
    l.default = c;
  },
  226,
);
