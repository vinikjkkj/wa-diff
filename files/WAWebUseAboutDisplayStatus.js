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
      var t = o("react-compiler-runtime").c(21),
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
      t[12] !== C || t[13] !== h || t[14] !== r || t[15] !== l
        ? ((b = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? h || (!C && o("WAWebTextStatusUtils").hasCustomAboutSet(r))
            : l !== ""),
          (t[12] = C),
          (t[13] = h),
          (t[14] = r),
          (t[15] = l),
          (t[16] = b))
        : (b = t[16]);
      var v = b,
        S;
      return (
        t[17] !== C || t[18] !== h || t[19] !== v
          ? ((S = {
              hasContent: v,
              displayTextStatus: h,
              hasEverHadTextStatus: C,
            }),
            (t[17] = C),
            (t[18] = h),
            (t[19] = v),
            (t[20] = S))
          : (S = t[20]),
        S
      );
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
