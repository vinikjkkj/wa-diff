__d(
  "MWChatLogOpenChatTab",
  ["MessengerWebEntryPointsUtil", "MessengerWebEventsFalcoEvent", "ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {};
    function u(t, n, a) {
      (t === void 0 && (t = !1),
        (e || (e = o("ODS"))).bumpEntityKey(3185, "mwchat_tab", "open_user"));
      var i = o("MessengerWebEntryPointsUtil").cast(a);
      return (
        (s[n] = i),
        r("MessengerWebEventsFalcoEvent").log(function () {
          return {
            entry_point: i,
            event_name: "open_chat_tab",
            is_secured: t,
            other_user_fbid: t ? null : n,
          };
        })
      );
    }
    function c(t, n, a) {
      (t === void 0 && (t = !1),
        (e || (e = o("ODS"))).bumpEntityKey(3185, "mwchat_tab", "open_group"));
      var i = o("MessengerWebEntryPointsUtil").cast(a);
      return (
        (s[n] = i),
        r("MessengerWebEventsFalcoEvent").log(function () {
          return {
            entry_point: i,
            event_name: "open_chat_tab",
            is_secured: t,
            thread_fbid: t ? null : n,
          };
        })
      );
    }
    function d(t, n, a) {
      (t === void 0 && (t = !1),
        (e || (e = o("ODS"))).bumpEntityKey(3185, "mwchat_tab", "open_page"));
      var i = o("MessengerWebEntryPointsUtil").cast(a);
      return (
        (s[n] = i),
        r("MessengerWebEventsFalcoEvent").log(function () {
          return {
            entry_point: i,
            event_name: "open_chat_tab",
            is_secured: t,
            other_user_fbid: t ? null : n,
          };
        })
      );
    }
    ((l.logOpenUserTab = u), (l.logOpenGroupTab = c), (l.logOpenPageTab = d));
  },
  98,
);
