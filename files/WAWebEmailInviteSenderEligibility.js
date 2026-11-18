__d(
  "WAWebEmailInviteSenderEligibility",
  [
    "WALogger",
    "WAWebEmailInviteEligibilityQuery",
    "WAWebEmailInviteGating",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useSyncExternalStore,
      m = 60 * 1e3,
      p = 3,
      _ = "unknown",
      f = null,
      g = 0,
      h = 0,
      y = null,
      C = 0,
      b = new Set();
    function v() {
      return (
        _ === "eligible" && f === o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      return (
        t[0] !== e
          ? ((n = function () {
              return e ? E() : void 0;
            }),
            (r = [e]),
            (t[0] = e),
            (t[1] = n),
            (t[2] = r))
          : ((n = t[1]), (r = t[2])),
        c(n, r),
        d(T, v)
      );
    }
    function R() {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      t != null &&
        (t !== f && ((f = t), I(), D("unknown")),
        !(
          _ !== "unknown" ||
          Date.now() < g ||
          !o("WAWebEmailInviteGating").isEmailInviteEntryPointEnabled() ||
          !o("WAWebEmailInviteGating").isEmailInviteServerSendEnabled()
        ) &&
          (D("loading"),
          o("WAWebEmailInviteEligibilityQuery")
            .fetchCanSendEmailInvites()
            .then(function (e) {
              f === t && ((h = 0), D(e ? "eligible" : "ineligible"));
            })
            .catch(function (n) {
              f === t &&
                (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "email invite eligibility fetch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("email-invite-eligibility-fetch-failed"),
                (g = Date.now() + m),
                D("unknown"),
                k(t));
            })));
    }
    function L() {
      ((_ = "unknown"), (f = null), I(), (C = 0), b.clear());
    }
    function E() {
      return (
        (C += 1),
        R(),
        function () {
          C -= 1;
        }
      );
    }
    function k(e) {
      y != null ||
        h >= p ||
        ((h += 1),
        (y = window.setTimeout(function () {
          ((y = null), C > 0 && f === e && ((g = 0), R()));
        }, m)));
    }
    function I() {
      (y != null && (window.clearTimeout(y), (y = null)), (g = 0), (h = 0));
    }
    function T(e) {
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    function D(e) {
      ((_ = e),
        b.forEach(function (e) {
          return e();
        }));
    }
    ((l.getCanSendEmailInvites = v),
      (l.useCanSendEmailInvites = S),
      (l.requestCanSendEmailInvites = R),
      (l.resetEmailInviteSenderEligibilityForTests = L));
  },
  98,
);
