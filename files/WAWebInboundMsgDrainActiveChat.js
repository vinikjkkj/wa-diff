__d(
  "WAWebInboundMsgDrainActiveChat",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = function () {};
    function s(t, n) {
      n ? ((e = t), t != null && l(t)) : e === t && (e = null);
    }
    function u(e) {
      l = e;
    }
    function c() {
      return e;
    }
    ((i.noteInboundMsgDrainChatActive = s),
      (i.setInboundMsgDrainChatOpenedListener = u),
      (i.getInboundMsgDrainActiveChat = c));
  },
  66,
);
