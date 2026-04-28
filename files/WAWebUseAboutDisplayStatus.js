__d(
  "WAWebUseAboutDisplayStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(24),
        n;
      t[0] !== e ? ((n = e.getStatus()), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["status"]), (t[2] = a))
        : (a = t[2]);
      var i = o("useWAWebModelValues").useModelValues(r, a),
        l = i.status,
        s;
      if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((s = [
          (u = o("WAWebFrontendContactGetters")).getTextStatusString,
          u.getTextStatusEmoji,
          u.getTextStatusLastUpdateTime,
          u.getTextStatusExpiryTs,
          u.getTextStatusEphemeralDuration,
        ]),
          (t[3] = s));
      } else s = t[3];
      var c = o("useWAWebContactValues").useContactValues(e.id, s),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g;
      t[4] !== m || t[5] !== f || t[6] !== _ || t[7] !== p || t[8] !== d
        ? ((g = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            d,
            m,
            p,
            _,
            f,
          )),
          (t[4] = m),
          (t[5] = f),
          (t[6] = _),
          (t[7] = p),
          (t[8] = d),
          (t[9] = g))
        : (g = t[9]);
      var h = g,
        y;
      t[10] !== p
        ? ((y = o("WAWebTextStatusUtils").hasEverHadTextStatus(p)),
          (t[10] = p),
          (t[11] = y))
        : (y = t[11]);
      var C = y,
        b;
      t[12] !== p
        ? ((b = o("WAWebTextStatusUtils").isTextStatusNotFetched(p)),
          (t[12] = p),
          (t[13] = b))
        : (b = t[13]);
      var v = b,
        S;
      t[14] !== C || t[15] !== h || t[16] !== r || t[17] !== l || t[18] !== v
        ? ((S = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? v || h || (!C && o("WAWebTextStatusUtils").hasCustomAboutSet(r))
            : l !== ""),
          (t[14] = C),
          (t[15] = h),
          (t[16] = r),
          (t[17] = l),
          (t[18] = v),
          (t[19] = S))
        : (S = t[19]);
      var R = S,
        L;
      return (
        t[20] !== C || t[21] !== h || t[22] !== R
          ? ((L = {
              shouldRenderAboutSection: R,
              displayTextStatus: h,
              hasEverHadTextStatus: C,
            }),
            (t[20] = C),
            (t[21] = h),
            (t[22] = R),
            (t[23] = L))
          : (L = t[23]),
        L
      );
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
