__d(
  "MWCookieUtil",
  [
    "I64",
    "LSMessagingThreadTypeUtil",
    "MWChatStateV2Types",
    "MWV2CookieReader",
    "MessengerWebPresenceCookieData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return o("MWV2CookieReader").read(
        r("MessengerWebPresenceCookieData").cookie,
      );
    }
    function u() {
      var e = s();
      return e.tabs.size > 0;
    }
    function c() {
      var e = s();
      return Array.from(e.tabs.values()).reduce(function (e, t) {
        return e || !t.minimizeWatermark;
      }, !1);
    }
    function d() {
      var e = s();
      return Array.from(e.tabs.values()).reduce(function (e, t) {
        return (
          e ||
          (!t.minimizeWatermark &&
            t.tabType.type ===
              o("MWChatStateV2Types").MWChatStateTabType.ChatTab &&
            o("LSMessagingThreadTypeUtil").isArmadilloSecure(
              t.tabType.threadKeyDescriptor.threadType,
            ))
        );
      }, !1);
    }
    function m() {
      var e = s();
      if (u() && c()) {
        var t = Array.from(e.tabs.values()).find(function (e) {
          return (
            e.tabType.type ===
              o("MWChatStateV2Types").MWChatStateTabType.ChatTab &&
            e.minimizeWatermark === 0
          );
        });
        if (
          t == null ||
          t.tabType.type !== o("MWChatStateV2Types").MWChatStateTabType.ChatTab
        )
          return;
        var n = t.tabType.threadKeyDescriptor.threadKey,
          r = t.tabType.threadKeyDescriptor.threadType;
        return { threadKey: n, threadType: r };
      }
    }
    function p(t) {
      var n = m();
      return n ? (e || (e = o("I64"))).equal(n.threadKey, t) : !1;
    }
    function _(t) {
      var n = s();
      return Array.from(n.tabs.values()).some(function (n) {
        return (
          n.tabType.type ===
            o("MWChatStateV2Types").MWChatStateTabType.ChatTab &&
          (e || (e = o("I64"))).equal(
            n.tabType.threadKeyDescriptor.threadKey,
            t,
          )
        );
      });
    }
    ((l.getMWCookie = s),
      (l.hasAutoOpenChatTabs = u),
      (l.hasAtLeastOneUnminimizedChatTab = c),
      (l.hasAtLeastOneUnminimizedSecureChatTab = d),
      (l.getAutoChatTabFromCookie = m),
      (l.isAutoChatTabFromCookie = p),
      (l.isInChatHead = _));
  },
  98,
);
