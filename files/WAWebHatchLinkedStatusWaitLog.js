__d(
  "WAWebHatchLinkedStatusWaitLog",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalUtils",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATimeUtils").MINUTE_MILLISECONDS / 2,
      c = o("WATimeUtils").MINUTE_SECONDS / 2,
      d = !1,
      m = new Set();
    function p(e) {
      if (d) return r("WAWebNoop");
      var t = g(),
        n = function () {
          (self.clearTimeout(o), m.delete(n));
        },
        o = self.setTimeout(function () {
          (m.delete(n), f(e, t));
        }, u);
      return (m.add(n), n);
    }
    function _() {
      for (var e of Array.from(m)) e();
    }
    function f(t, n) {
      if (!d)
        try {
          if (g() !== n) return;
          ((d = !0),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-linked-status: waiting for ",
                    " after ",
                    "s wait=",
                    "",
                  ])),
                h(),
                c,
                t,
              )
              .sendLogs("hatch-linked-status-wait-slow"));
        } catch (e) {
          ((d = !0),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-linked-status: the slow wait log failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-linked-status-wait-log-failed"));
        }
    }
    function g() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
        ? void 0
        : e.toString();
    }
    function h() {
      return o("WAWebCanonicalUtils").isCanonicalPresent()
        ? "resume"
        : o("WAWebCanonicalUtils").hasCanonicalBeenIssued() ||
            o("WAWebCanonicalUtils").isCanonicalRejected()
          ? "canonical_reissue"
          : "canonical_issue";
    }
    ((l.startHatchLinkedStatusWaitClock = p),
      (l.endHatchLinkedStatusWaitClocks = _));
  },
  98,
);
