__d(
  "WAWebVoipOutgoingCallConsent",
  [
    "fbt",
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
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = 500;
    function p(e, t) {
      var n =
        t === "before_ask"
          ? o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed
          : o("WAWebCoreActionsODS").logDeepLinkCallRefusedAfterAsk;
      return r("WAWebCallCollection").activeCall != null
        ? (n(), o("WAWebVoipCallBlockedModals").showEndCurrentCallToast(), !1)
        : _(e)
          ? (n(), !1)
          : !0;
    }
    function _(e) {
      if (o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null)
        return !0;
      var t = o("WAWebLidMigrationUtils").toLid(e);
      return (
        t != null &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null
      );
    }
    async function f(t, n) {
      o("WAWebCoreActionsODS").logDeepLinkCallConfirmShown();
      try {
        var a = await C(t),
          i = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
            okInputGuardMs: m,
            onOkInputGuarded: o("WAWebCoreActionsODS")
              .logDeepLinkCallConfirmGuardSwallowed,
            okIcon: r(
              n ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react",
            ),
            okText: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
            children: y(a),
            title: h(a, n),
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
    }
    function g(e, t, n) {
      return e === "user_gesture" ? Promise.resolve(!0) : f(t, n);
    }
    function h(e, t) {
      var n = e.title;
      return t
        ? s._(/*BTDS*/ "", [s._param("name", n)])
        : s._(/*BTDS*/ "", [s._param("name", n)]);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return e.name == null || e.number == null
        ? null
        : d.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            testid: "voip_deeplink_confirm_peer_number",
            children: e.number,
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    async function C(e) {
      var t = b(e);
      if (t == null)
        return {
          name: null,
          number: null,
          title: o("WAWebWidFormat").getUnknownUserOrNumber(),
        };
      var n = await v(e);
      return { name: n, number: t, title: n != null ? n : t };
    }
    function b(e) {
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
    async function v(e) {
      var t = e.isLid()
          ? o("WAWebLidMigrationUtils").toPn(e)
          : o("WAWebLidMigrationUtils").toLid(e),
        n = t != null && !t.equals(e) ? [e, t] : [e],
        r = await Promise.all(n.map(S)),
        a = r.find(function (e) {
          return e != null;
        });
      return a != null &&
        !n.some(function (e) {
          return R(e, a);
        })
        ? a
        : null;
    }
    async function S(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t == null) return null;
      var n = o("WAWebContactGetters").getName(t);
      if (n == null || n === "") return null;
      try {
        var a = o("WAWebWidToJid").widToUserJid(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        );
        return (await o("WAWebApiContact").isAddressBookContact(a)) ? n : null;
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
    }
    function R(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      return n != null && t === o("WAWebContactGetters").getVerifiedName(n);
    }
    ((l.canStartDeepLinkCall = p),
      (l.confirmDeepLinkCall = f),
      (l.hasOutgoingCallConsent = g));
  },
  226,
);
