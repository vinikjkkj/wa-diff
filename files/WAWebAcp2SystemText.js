__d(
  "WAWebAcp2SystemText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(
        /*BTDS*/ "You turned on restricted chat. As a result, messages in this chat can only be sent and received on your primary phone. Linked devices will be restricted for everyone in this chat who is on the latest version of WhatsApp.",
      );
    }
    function u() {
      return s._(/*BTDS*/ "You turned off restricted chat.");
    }
    function c(e) {
      return s._(
        /*BTDS*/ "{acp2_author} turned on restricted chat. As a result, messages in this chat can only be sent and received on your primary phone. Linked devices will be restricted for everyone in this chat who is on the latest version of WhatsApp.",
        [s._param("acp2_author", e)],
      );
    }
    function d(e) {
      return s._(/*BTDS*/ "{acp2_author} turned off restricted chat.", [
        s._param("acp2_author", e),
      ]);
    }
    function m() {
      return s._(
        /*BTDS*/ "Restricted chat was turned on. As a result, messages in this chat can only be sent and received on your primary phone. Linked devices will be restricted for everyone in this chat who is on the latest version of WhatsApp.",
      );
    }
    function p() {
      return s._(/*BTDS*/ "Restricted chat was turned off.");
    }
    ((l.getAcp2ByMeOnText = e),
      (l.getAcp2ByMeOffText = u),
      (l.getAcp2ByOtherUserOnText = c),
      (l.getAcp2ByOtherUserOffText = d),
      (l.getAcp2ByNoUserOnText = m),
      (l.getAcp2ByNoUserOffText = p));
  },
  226,
);
