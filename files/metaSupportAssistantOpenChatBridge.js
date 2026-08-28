__d(
  "metaSupportAssistantOpenChatBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null,
      s = !1,
      u = new Set(),
      c = !1,
      d = new Set();
    function m(t) {
      e = t;
    }
    function p() {
      e = null;
    }
    function _(e) {
      l = e;
    }
    function f() {
      l = null;
    }
    function g(e, t) {
      return l == null ? !1 : l(e, t);
    }
    var h = null;
    function y(e) {
      h = e;
    }
    function C() {
      h = null;
    }
    function b() {
      return e == null ? !1 : (h == null || h(), !0);
    }
    function v(t) {
      return e == null ? !1 : (e(t), h == null || h(), !0);
    }
    function S(e) {
      s !== e &&
        ((s = e),
        u.forEach(function (e) {
          e();
        }));
    }
    function R(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function L() {
      return s;
    }
    function E(e) {
      c !== e &&
        ((c = e),
        d.forEach(function (e) {
          e();
        }));
    }
    function k(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function I() {
      return c;
    }
    ((i.setOpenChatSendMessageCallback = m),
      (i.clearOpenChatSendMessageCallback = p),
      (i.setInjectGreetingCallback = _),
      (i.clearInjectGreetingCallback = f),
      (i.injectGreeting = g),
      (i.setOnMessageSentListener = y),
      (i.clearOnMessageSentListener = C),
      (i.focusOpenChat = b),
      (i.sendMessageToOpenChat = v),
      (i.setOpenChatInFlight = S),
      (i.subscribeToOpenChatInFlight = R),
      (i.getIsOpenChatInFlight = L),
      (i.setOpenChatComposerDisabled = E),
      (i.subscribeToOpenChatComposerDisabled = k),
      (i.getIsOpenChatComposerDisabled = I));
  },
  66,
);
