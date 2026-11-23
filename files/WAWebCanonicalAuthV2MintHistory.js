__d(
  "WAWebCanonicalAuthV2MintHistory",
  ["WAWebUserPrefsCanonical", "WAWebUserPrefsTabMutex"],
  function (t, n, r, o, a, i, l) {
    var e = "WAWebCanonicalAuthV2MintHistory";
    async function s(t) {
      return globalThis.navigator.locks != null
        ? globalThis.navigator.locks.request(e, function () {
            return u(t);
          })
        : o("WAWebUserPrefsTabMutex").currentTabHasMutex()
          ? u(t)
          : null;
    }
    function u(e) {
      var t = e(o("WAWebUserPrefsCanonical").getCanonicalAuthV2MintThrottle()),
        n = t.next,
        r = t.result;
      return (
        n != null &&
          o("WAWebUserPrefsCanonical").setCanonicalAuthV2MintThrottle(n),
        r
      );
    }
    l.updateMintHistory = s;
  },
  98,
);
