__d(
  "WAWebChatListActivityText",
  ["WAWebChatGetters", "WAWebNoop", "react", "useWAWebChatValues"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Set();
    function c(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function d(e) {
      var t,
        n = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebChatGetters").getIsLocked,
        ]),
        r = n[0],
        a = r ? null : m(e.id);
      return s(
        (t = a == null ? void 0 : a.subscribe) != null ? t : p,
        function () {
          var t;
          return (t = a == null ? void 0 : a.getText(e.id)) != null ? t : null;
        },
      );
    }
    function m(e) {
      for (var t of u) if (t.appliesTo(e)) return t;
      return null;
    }
    function p() {
      return r("WAWebNoop");
    }
    ((l.registerChatListActivityTextSource = c),
      (l.useChatListActivityText = d));
  },
  98,
);
