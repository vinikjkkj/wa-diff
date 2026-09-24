__d(
  "WAWebVoipOutgoingCallConsent",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCoreActionsODS",
    "WAWebLidMigrationUtils",
    "WAWebVoipCallBlockedModals",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WAWebWidToJid",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
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
      _,
      f = _ || (_ = o("react")),
      g = 500;
    function h(e) {
      var t;
      return (t = e.entryTrust) != null ? t : "deep_link";
    }
    function y(t, n) {
      var a =
        n === "before_ask"
          ? o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed
          : o("WAWebCoreActionsODS").logDeepLinkCallRefusedAfterAsk;
      return r("WAWebCallCollection").activeCall != null
        ? (a(),
          o("WAWebVoipCallBlockedModals").showEndCurrentCallToast(),
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: deep-link call refused \u2014 already in a call",
                ])),
            )
            .sendLogs("deep-link-call-already-in-call"),
          !1)
        : C(t)
          ? (a(),
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
    function C(e) {
      if (o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null)
        return !0;
      var t = o("WAWebLidMigrationUtils").toLid(e);
      return (
        t != null &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebCoreActionsODS").logDeepLinkCallConfirmShown();
          try {
            var n = yield E(e),
              a = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                okInputGuardMs: g,
                onOkInputGuarded: o("WAWebCoreActionsODS")
                  .logDeepLinkCallConfirmGuardSwallowed,
                okIcon: r(
                  t
                    ? "WDSIconIcVideocamFilled.react"
                    : "WDSIconIcCallFilled.react",
                ),
                okText: t
                  ? s._(/*BTDS*/ "Video call")
                  : s._(/*BTDS*/ "Voice call"),
                children: L(n),
                title: R(n, t),
              });
            return (
              a
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
              a
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, r) {
      return e === "user_gesture"
        ? (p || (p = n("Promise"))).resolve(!0)
        : b(t, r);
    }
    function R(e, t) {
      var n = e.title;
      return t
        ? s._(/*BTDS*/ "Start a WhatsApp video call with {name}?", [
            s._param("name", n),
          ])
        : s._(/*BTDS*/ "Start a WhatsApp call with {name}?", [
            s._param("name", n),
          ]);
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      return e.name == null || e.number == null
        ? null
        : f.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            testid: "voip_deeplink_confirm_peer_number",
            children: e.number,
          });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = I(e);
          if (t == null)
            return {
              name: null,
              number: null,
              title: o("WAWebWidFormat").getUnknownUserOrNumber(),
            };
          var n = yield T(e);
          return { name: n, number: t, title: n != null ? n : t };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      if (e.isLid()) {
        var t = o("WAWebApiContact").getPnIfLidIsLatestMapping(
          o("WAWebWidFactory").asUserLidOrThrow(e),
        );
        return t != null ? o("WAWebWidFormat").widToFormattedUser(t) : null;
      }
      return e.isRegularUserPn() && !e.isHosted()
        ? o("WAWebWidFormat").widToFormattedUser(e)
        : null;
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isLid()
              ? o("WAWebLidMigrationUtils").toPn(e)
              : o("WAWebLidMigrationUtils").toLid(e),
            r = t != null && !t.equals(e) ? [e, t] : [e],
            a = yield (p || (p = n("Promise"))).all(r.map(x)),
            i = a.find(function (e) {
              return e != null;
            });
          return i != null &&
            !r.some(function (e) {
              return P(e, i);
            })
            ? i
            : null;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e);
          if (t == null) return null;
          var n = o("WAWebContactGetters").getName(t);
          if (n == null || n === "") return null;
          try {
            var a = o("WAWebWidToJid").widToUserJid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            );
            return (yield o("WAWebApiContact").isAddressBookContact(a))
              ? n
              : null;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: deep-link call could not read address-book membership",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("deep-link-call-address-book-read-failed"),
              null
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      return n != null && t === o("WAWebContactGetters").getVerifiedName(n);
    }
    ((l.entryTrustOf = h),
      (l.canStartDeepLinkCall = y),
      (l.confirmDeepLinkCall = b),
      (l.hasOutgoingCallConsent = S));
  },
  226,
);
