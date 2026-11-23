__d(
  "WAWebContactsAndGroupsOneByOne",
  ["WALogger", "WAWebBackendErrors", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 429;
    function u(e, t) {
      return c(e, t, 0);
    }
    async function c(t, n, a) {
      if (a >= t.length) return 0;
      try {
        await n(t[a]);
      } catch (i) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "runOneByOne: an item failed",
                ])),
            )
            .catching(r("getErrorSafe")(i)),
          d(i) ? 0 : c(t, n, a + 1)
        );
      }
      return 1 + (await c(t, n, a + 1));
    }
    function d(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === s
      );
    }
    ((l.runOneByOne = u), (l.isRateLimited = d));
  },
  98,
);
