__d(
  "WAWebUseAboutDisplayStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(20),
        n;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r;
        ((n = [
          (r = o("WAWebFrontendContactGetters")).getTextStatusString,
          r.getTextStatusEmoji,
          r.getTextStatusLastUpdateTime,
          r.getTextStatusExpiryTs,
          r.getTextStatusEphemeralDuration,
        ]),
          (t[0] = n));
      } else n = t[0];
      var a = o("useWAWebContactValues").useContactValues(e.id, n),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        c = a[4],
        d;
      t[1] !== e.id
        ? ((d =
            e.id.isRegularUser() &&
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()),
          (t[1] = e.id),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      t[3] !== m ||
      t[4] !== l ||
      t[5] !== c ||
      t[6] !== u ||
      t[7] !== s ||
      t[8] !== i
        ? ((p =
            m &&
            o("WAWebTextStatusUtils").shouldDisplayTextStatus({
              textStatusEmoji: l,
              textStatusEphemeralDuration: c,
              textStatusExpiryTs: u,
              textStatusLastUpdateTime: s,
              textStatusString: i,
            })),
          (t[3] = m),
          (t[4] = l),
          (t[5] = c),
          (t[6] = u),
          (t[7] = s),
          (t[8] = i),
          (t[9] = p))
        : (p = t[9]);
      var _ = p,
        f;
      t[10] !== m || t[11] !== _ || t[12] !== s
        ? ((f =
            m && (o("WAWebTextStatusUtils").isTextStatusNotFetched(s) || _)),
          (t[10] = m),
          (t[11] = _),
          (t[12] = s),
          (t[13] = f))
        : (f = t[13]);
      var g;
      t[14] !== s
        ? ((g = o("WAWebTextStatusUtils").hasEverHadTextStatus(s)),
          (t[14] = s),
          (t[15] = g))
        : (g = t[15]);
      var h;
      return (
        t[16] !== _ || t[17] !== f || t[18] !== g
          ? ((h = {
              shouldRenderAboutSection: f,
              displayTextStatus: _,
              hasEverHadTextStatus: g,
            }),
            (t[16] = _),
            (t[17] = f),
            (t[18] = g),
            (t[19] = h))
          : (h = t[19]),
        h
      );
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
