__d(
  "WAWebVoipOutgoingCallConsent",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebBlocklistCollection",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCoreActionsODS",
    "WAWebLidMigrationUtils",
    "WAWebWidFormat",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react"));
    function f(e) {
      var t;
      return (t = e.entryTrust) != null ? t : "deep_link";
    }
    function g(t) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed(),
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: deep-link call refused \u2014 already in a call",
                ])),
            )
            .sendLogs("deep-link-call-already-in-call"),
          !1)
        : h(t)
          ? (o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed(),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: deep-link call refused \u2014 callee is blocked",
                  ])),
              )
              .sendLogs("deep-link-call-blocked-callee"),
            !1)
          : !0;
    }
    function h(e) {
      if (o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null)
        return !0;
      var t = o("WAWebLidMigrationUtils").toLid(e);
      return (
        t != null &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebCoreActionsODS").logDeepLinkCallConfirmShown();
          try {
            var n = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
              okIcon: r(
                t
                  ? "WDSIconIcVideocamFilled.react"
                  : "WDSIconIcCallFilled.react",
              ),
              okText: t
                ? s._(/*BTDS*/ "Video call")
                : s._(/*BTDS*/ "Voice call"),
              title: v(e, t),
            });
            return (
              n
                ? o("WAWebCoreActionsODS").logDeepLinkCallConfirmAccepted()
                : (o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined(),
                  o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: deep-link call declined at the confirmation",
                        ])),
                    )
                    .sendLogs("deep-link-call-declined")),
              n
            );
          } catch (e) {
            return (
              o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined(),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: deep-link call confirmation did not resolve",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("deep-link-call-confirm-failed"),
              !1
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, r) {
      return e === "user_gesture"
        ? (m || (m = n("Promise"))).resolve(!0)
        : y(t, r);
    }
    function v(e, t) {
      var n = S(e);
      return t
        ? s._(/*BTDS*/ "Start a WhatsApp video call with {name}?", [
            s._param("name", n),
          ])
        : s._(/*BTDS*/ "Start a WhatsApp call with {name}?", [
            s._param("name", n),
          ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t;
      return (t = R(e)) != null ? t : o("WAWebWidFormat").widToFormattedUser(e);
    }
    function R(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t == null) return null;
      var n = o("WAWebContactGetters").getName(t);
      return n == null || n === "" || L(t, n) ? null : n;
    }
    function L(e, t) {
      if (t === o("WAWebContactGetters").getVerifiedName(e)) return !0;
      if (!e.id.isLid()) return !1;
      var n = o("WAWebLidMigrationUtils").toPn(e.id),
        r =
          n != null
            ? o("WAWebContactCollection").ContactCollection.get(n)
            : null;
      return r != null && t === o("WAWebContactGetters").getVerifiedName(r);
    }
    ((l.entryTrustOf = f),
      (l.canStartDeepLinkCall = g),
      (l.confirmDeepLinkCall = y),
      (l.hasOutgoingCallConsent = b));
  },
  226,
);
