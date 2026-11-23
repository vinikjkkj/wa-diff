__d(
  "WAWebCanonicalAuthV2Registration",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebCanonicalAuthV2").__setRef(
        "WAWebCanonicalAuthV2Registration",
      ),
      c = 2 * o("WATimeUtils").MINUTE_MILLISECONDS,
      d = null;
    function m() {
      var e = { cancelled: !1, end: null };
      d = { control: e, result: g(e) };
    }
    async function p() {
      var e = await u.load(),
        t = e.ensureCanonicalCredentials;
      return t();
    }
    async function _(e) {
      var t = await u.load(),
        n = t.refreshCanonicalCredentials;
      return n(e);
    }
    async function f(t) {
      var n = d;
      if (n == null) return "none";
      try {
        return await o("WAPromiseTimeout").promiseTimeout(n.result, c);
      } catch (r) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] auth v2 registration wait timed out",
              ])),
          ),
          t === "navigate" &&
            ((n.control.cancelled = !0),
            await (n.control.end == null ? void 0 : n.control.end())),
          "timed_out"
        );
      }
    }
    async function g(e) {
      try {
        var t = await u.load(),
          n = t.endCanonicalAuthSession,
          a = t.mintCanonicalCredentialsAfterRegistration;
        if (((e.end = n), e.cancelled)) return "not_stored";
        var i = await a();
        return i.kind === "stored" ? "stored" : "not_stored";
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] auth v2 registration mint failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("canonical-error", { sampling: 0.01 }),
          "not_stored"
        );
      }
    }
    ((l.startCanonicalAuthV2Registration = m),
      (l.ensureCanonicalAuthV2Credentials = p),
      (l.refreshCanonicalAuthV2Credentials = _),
      (l.waitForCanonicalAuthV2Registration = f));
  },
  98,
);
