__d(
  "MAIBAConversionMessagingDestinationUtils",
  ["fbt", "AdCampaignDestination"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return s._(/*BTDS*/ "").toString();
    }
    function c() {
      return s._(/*BTDS*/ "").toString();
    }
    function d() {
      return s._(/*BTDS*/ "").toString();
    }
    function m() {
      return s._(/*BTDS*/ "").toString();
    }
    var p = new Map([
      [
        "MESSAGE_DESTINATIONS",
        function () {
          return [u()];
        },
      ],
      [
        (e = r("AdCampaignDestination")).MESSENGER,
        function () {
          return [c()];
        },
      ],
      [
        e.INSTAGRAM_DIRECT,
        function () {
          return [d()];
        },
      ],
      [
        e.WHATSAPP,
        function () {
          return [m()];
        },
      ],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        function () {
          return [c(), d()];
        },
      ],
      [
        e.MESSAGING_MESSENGER_WHATSAPP,
        function () {
          return [c(), m()];
        },
      ],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        function () {
          return [d(), m()];
        },
      ],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        function () {
          return [c(), d(), m()];
        },
      ],
    ]);
    function _(e) {
      var t,
        n,
        r = e == null ? void 0 : e.trim().toUpperCase();
      return r == null
        ? null
        : (t = (n = p.get(r)) == null ? void 0 : n()) != null
          ? t
          : null;
    }
    function f(e) {
      var t = _(e);
      return t == null || t.length === 0 ? null : t.join(", ");
    }
    l.formatMessagingDestinationValue = f;
  },
  226,
);
