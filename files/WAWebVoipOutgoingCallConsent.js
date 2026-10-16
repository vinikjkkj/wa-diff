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
      m = d || (d = o("react")),
      p = 500;
    function _(e, t) {
      var n =
        t === "before_ask"
          ? o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed
          : o("WAWebCoreActionsODS").logDeepLinkCallRefusedAfterAsk;
      return r("WAWebCallCollection").activeCall != null
        ? (n(), o("WAWebVoipCallBlockedModals").showEndCurrentCallToast(), !1)
        : f(e)
          ? (n(), !1)
          : !0;
    }
    function f(e) {
      if (o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null)
        return !0;
      var t = o("WAWebLidMigrationUtils").toLid(e);
      return (
        t != null &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WAWebCoreActionsODS").logDeepLinkCallConfirmShown();
          try {
            var a = yield v(t),
              i = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                okInputGuardMs: p,
                onOkInputGuarded: o("WAWebCoreActionsODS")
                  .logDeepLinkCallConfirmGuardSwallowed,
                okIcon: r(
                  n
                    ? "WDSIconIcVideocamFilled.react"
                    : "WDSIconIcCallFilled.react",
                ),
                okText: n
                  ? s._(/*BTDS*/ "Video call")
                  : s._(/*BTDS*/ "Voice call"),
                children: b(a),
                title: C(a, n),
              });
            return (
              i
                ? o("WAWebCoreActionsODS").logDeepLinkCallConfirmAccepted()
                : o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined(),
              i
            );
          } catch (t) {
            return (
              o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined(),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: deep-link call confirmation did not resolve",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("deep-link-call-confirm-failed"),
              !1
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, r) {
      return e === "user_gesture"
        ? (c || (c = n("Promise"))).resolve(!0)
        : g(t, r);
    }
    function C(e, t) {
      var n = e.title;
      return t
        ? s._(/*BTDS*/ "Start a WhatsApp video call with {name}?", [
            s._param("name", n),
          ])
        : s._(/*BTDS*/ "Start a WhatsApp call with {name}?", [
            s._param("name", n),
          ]);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e.name == null || e.number == null
        ? null
        : m.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            testid: "voip_deeplink_confirm_peer_number",
            children: e.number,
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = R(e);
          if (t == null)
            return {
              name: null,
              number: null,
              title: o("WAWebWidFormat").getUnknownUserOrNumber(),
            };
          var n = yield L(e);
          return { name: n, number: t, title: n != null ? n : t };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isLid()
              ? o("WAWebLidMigrationUtils").toPn(e)
              : o("WAWebLidMigrationUtils").toLid(e),
            r = t != null && !t.equals(e) ? [e, t] : [e],
            a = yield (c || (c = n("Promise"))).all(r.map(k)),
            i = a.find(function (e) {
              return e != null;
            });
          return i != null &&
            !r.some(function (e) {
              return T(e, i);
            })
            ? i
            : null;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: deep-link call could not read address-book membership",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("deep-link-call-address-book-read-failed"),
              null
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      return n != null && t === o("WAWebContactGetters").getVerifiedName(n);
    }
    ((l.canStartDeepLinkCall = _),
      (l.confirmDeepLinkCall = g),
      (l.hasOutgoingCallConsent = y));
  },
  226,
);
