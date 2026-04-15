__d(
  "WAWebInAppSignupConfirmationHeader.react",
  [
    "WAPromiseDelays",
    "WAWebInAppSignupConfirmation",
    "WAWebInAppSignupConfirmationHeaderVisual.react",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebSignupCTAExperiment",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.msg,
        a = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(n),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebSignupCTAExperiment").getSignupCTAExperiment()),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        u = d(null),
        m = u[0],
        _ = u[1],
        f = d(null),
        g = f[0],
        h = f[1],
        y = r("useWAWebUnmountSignal")(),
        C,
        b;
      (t[1] !== y
        ? ((C = function () {
            var e = o("WAWebUserPrefsMeUser").getMeUser();
            e != null &&
              o("WAWebProfilePicThumbCollection")
                .ProfilePicThumbCollection.find(e)
                .then(p)
                .then(function (e) {
                  y.aborted || (h(e), _(e == null ? void 0 : e.img));
                })
                .catch(r("WAWebNoop"));
          }),
          (b = [y]),
          (t[1] = y),
          (t[2] = C),
          (t[3] = b))
        : ((C = t[2]), (b = t[3])),
        c(C, b));
      var v;
      if (
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = function (t) {
              _(t == null ? void 0 : t.img);
            }),
            (t[4] = v))
          : (v = t[4]),
        o("useWAWebListener").useListener(g, "change:img", v),
        a == null)
      )
        return null;
      var S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            return _(null);
          }),
          (t[5] = S))
        : (S = t[5]);
      var R;
      return (
        t[6] !== m
          ? ((R = s.jsx(r("WAWebInAppSignupConfirmationHeaderVisual.react"), {
              experiment: l,
              profilePicUrl: m,
              onProfilePicError: S,
            })),
            (t[6] = m),
            (t[7] = R))
          : (R = t[7]),
        R
      );
    }
    function p(e) {
      return o("WAPromiseDelays")
        .releaseToEventLoop()
        .then(function () {
          return e;
        });
    }
    l.default = m;
  },
  98,
);
