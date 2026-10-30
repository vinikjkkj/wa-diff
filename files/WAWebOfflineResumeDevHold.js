__d(
  "WAWebOfflineResumeDevHold",
  ["Promise", "WALogger", "WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "WAWebStartupDevHold",
      c = null,
      d = null,
      m = !1;
    function p() {
      var e,
        t = (
          (e =
            r("WAWebLocalStorage") == null
              ? void 0
              : r("WAWebLocalStorage").getItem(u)) != null
            ? e
            : ""
        ).split(",");
      return { regions: t.includes("regions"), resume: t.includes("resume") };
    }
    function _(e) {
      var t = [];
      (e.regions && t.push("regions"),
        e.resume && t.push("resume"),
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(u, t.join(",")));
    }
    function f() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(u);
    }
    function g() {
      return (
        m ||
          ((m = !0),
          p().resume &&
            ((c = new (s || (s = n("Promise")))(function (e) {
              d = e;
            })),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] dev hold: offline processing paused until Debug.releaseStartup()",
                ])),
            ))),
        c != null ? c : (s || (s = n("Promise"))).resolve()
      );
    }
    function h() {
      var e = d;
      ((c = null), (d = null), e == null || e());
    }
    ((l.readStartupDevHoldFlags = p),
      (l.persistStartupDevHoldFlags = _),
      (l.clearStartupDevHoldFlags = f),
      (l.waitForResumeRelease = g),
      (l.releaseResume = h));
  },
  98,
);
