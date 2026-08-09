__d(
  "IGDInstamadilloUtils",
  ["IGDThreadTTLCUtils", "LSThreadBitOffset", "isInstamadillo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e == null ? void 0 : e.transportKey) === "Instamadillo";
    }
    function s(e) {
      return e == null ? !1 : o("LSThreadBitOffset").has(214, e);
    }
    function u(e) {
      return e == null ? !1 : o("LSThreadBitOffset").has(38, e);
    }
    function c(e) {
      return e == null ? !1 : o("LSThreadBitOffset").has(211, e);
    }
    function d(e) {
      var t = s(e),
        n = m(e);
      return n || t;
    }
    function m(e) {
      var t = u(e),
        n = s(e),
        r = o("IGDThreadTTLCUtils").threadHasInstamadilloTTLCCapability(e);
      return t && (n || r);
    }
    function p(t, n) {
      var r = e(t) && t.ephemeralExpirationTs != null;
      return (n && r) || (!n && !r);
    }
    function _(t) {
      var n = e(t);
      return n ? r("isInstamadillo")() : !0;
    }
    ((l.isInstamadilloMessage = e),
      (l.isInstamadilloCutover = s),
      (l.isIGDDisappearingModeEnabled = u),
      (l.isInstamadilloTransportEnabled = c),
      (l.isInstamadilloHardblockEnabled = d),
      (l.shouldRenderMessageReply = p),
      (l.canMutateIGDMessage = _));
  },
  98,
);
