__d(
  "WAWebUseAboutDisplayStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusGetters",
    "WAWebTextStatusUtils",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebTextStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.getStatus(),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebTextStatusGetters").getStatus]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebTextStatusValues").useTextStatusValues(n.id, r),
        i = a[0],
        l;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var s;
        ((l = [
          (s = o("WAWebFrontendContactGetters")).getTextStatusString,
          s.getTextStatusEmoji,
          s.getTextStatusLastUpdateTime,
          s.getTextStatusExpiryTs,
          s.getTextStatusEphemeralDuration,
        ]),
          (t[1] = l));
      } else l = t[1];
      var u = o("useWAWebContactValues").useContactValues(e.id, l),
        c = u[0],
        d = u[1],
        m = u[2],
        p = u[3],
        _ = u[4],
        f;
      t[2] !== d || t[3] !== _ || t[4] !== p || t[5] !== m || t[6] !== c
        ? ((f = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            c,
            d,
            m,
            p,
            _,
          )),
          (t[2] = d),
          (t[3] = _),
          (t[4] = p),
          (t[5] = m),
          (t[6] = c),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      t[8] !== m
        ? ((h = o("WAWebTextStatusUtils").hasEverHadTextStatus(m)),
          (t[8] = m),
          (t[9] = h))
        : (h = t[9]);
      var y = h,
        C;
      t[10] !== m
        ? ((C = o("WAWebTextStatusUtils").isTextStatusNotFetched(m)),
          (t[10] = m),
          (t[11] = C))
        : (C = t[11]);
      var b = C,
        v = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
          ? b || g || (!y && o("WAWebTextStatusUtils").hasCustomAboutSet(n))
          : i !== "",
        S;
      return (
        t[12] !== y || t[13] !== g || t[14] !== v
          ? ((S = {
              shouldRenderAboutSection: v,
              displayTextStatus: g,
              hasEverHadTextStatus: y,
            }),
            (t[12] = y),
            (t[13] = g),
            (t[14] = v),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
