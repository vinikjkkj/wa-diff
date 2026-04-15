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
      var t = o("react-compiler-runtime").c(19),
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
        y = p != null && p >= 0,
        C;
      t[10] !== h || t[11] !== y || t[12] !== r || t[13] !== l
        ? ((C = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? h || (!y && o("WAWebTextStatusUtils").hasCustomAboutSet(r))
            : l !== ""),
          (t[10] = h),
          (t[11] = y),
          (t[12] = r),
          (t[13] = l),
          (t[14] = C))
        : (C = t[14]);
      var b = C,
        v;
      return (
        t[15] !== h || t[16] !== b || t[17] !== y
          ? ((v = {
              hasContent: b,
              displayTextStatus: h,
              hasEverHadTextStatus: y,
            }),
            (t[15] = h),
            (t[16] = b),
            (t[17] = y),
            (t[18] = v))
          : (v = t[18]),
        v
      );
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
