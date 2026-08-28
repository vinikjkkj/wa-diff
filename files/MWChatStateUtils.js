__d(
  "MWChatStateUtils",
  [
    "I64",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MWChatStateContext",
    "MWChatStateV2IsOpen",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (e || (e = o("react"))).useMemo;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = o("MWChatStateContext").useChatState(p),
        n;
      e[0] !== t
        ? ((n = Array.from(t.values()).filter(m)), (e[0] = t), (e[1] = n))
        : (n = e[1]);
      var r = n;
      return r.length > 0;
    }
    function m(e) {
      return (
        o("MWChatStateV2IsOpen").isOpen(void 0, e) &&
        e.tabType.threadKeyDescriptor &&
        o("LSMessagingThreadTypeUtil").isPublicCMThread(
          e.tabType.threadKeyDescriptor.threadType,
        )
      );
    }
    function p(e) {
      return e.tabs;
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = o("MWChatStateContext").useChatState(g),
        n;
      e[0] !== t
        ? ((n = Array.from(t.values()).filter(f)), (e[0] = t), (e[1] = n))
        : (n = e[1]);
      var r = n;
      return r.length > 0;
    }
    function f(e) {
      return (
        o("MWChatStateV2IsOpen").isOpen(void 0, e) &&
        e.tabType.threadKeyDescriptor &&
        o("LSMessagingThreadTypeUtil").isArmadilloSecure(
          e.tabType.threadKeyDescriptor.threadType,
        )
      );
    }
    function g(e) {
      return e.tabs;
    }
    function h() {
      var e = o("react-compiler-runtime").c(2),
        t = o("MWChatStateContext").useChatState(C),
        n;
      e[0] !== t
        ? ((n = Array.from(t.values()).filter(y)), (e[0] = t), (e[1] = n))
        : (n = e[1]);
      var r = n;
      return r.length > 0;
    }
    function y(e) {
      return (
        o("MWChatStateV2IsOpen").isOpen(void 0, e) &&
        e.tabType.threadKeyDescriptor &&
        o("LSMessagingThreadTypeUtil").isOpenGroupFnFThread(
          e.tabType.threadKeyDescriptor.threadType,
        )
      );
    }
    function C(e) {
      return e.tabs;
    }
    function b() {
      var e = o("react-compiler-runtime").c(2),
        t = o("MWChatStateContext").useChatState(S),
        n;
      e[0] !== t
        ? ((n = Array.from(t.values()).filter(v)), (e[0] = t), (e[1] = n))
        : (n = e[1]);
      var r = n;
      return r.length > 0;
    }
    function v(e) {
      return (
        o("MWChatStateV2IsOpen").isOpen(void 0, e) &&
        e.tabType.threadKeyDescriptor &&
        o("LSMessagingThreadTypeUtil").isArmadilloSecureGroup(
          e.tabType.threadKeyDescriptor.threadType,
        )
      );
    }
    function S(e) {
      return e.tabs;
    }
    function R() {
      var e = o("react-compiler-runtime").c(2),
        t = o("MWChatStateContext").useChatState(E),
        n;
      e[0] !== t
        ? ((n = Array.from(t.values()).every(L)), (e[0] = t), (e[1] = n))
        : (n = e[1]);
      var r = n;
      return r;
    }
    function L(e) {
      var t = e.tabType.threadKeyDescriptor;
      if (!t) return !0;
      var n =
          (s || (s = o("I64"))).equal(
            t.threadType,
            (u || (u = o("LSIntEnum"))).ofNumber(2),
          ) ||
          (s || (s = o("I64"))).equal(
            t.threadType,
            (u || (u = o("LSIntEnum"))).ofNumber(1),
          ),
        r = o("LSMessagingThreadTypeUtil").isArmadilloSecure(t.threadType);
      return n || r;
    }
    function E(e) {
      return e.tabs;
    }
    ((l.useHasCommunityChatTabsOpen = d),
      (l.useHasSecureChatTabsOpen = _),
      (l.useHasOpenGroupChatTabsOpen = h),
      (l.useHasSecureGroupChatTabsOpen = b),
      (l.useOneToOneOrGroupThreadsOnly = R));
  },
  98,
);
