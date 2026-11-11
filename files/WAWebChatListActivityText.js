__d(
  "WAWebChatListActivityText",
  [
    "WAWebChatGetters",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
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
        n = o("react-compiler-runtime").c(7),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebChatGetters").getIsLocked]), (n[0] = r))
        : (r = n[0]);
      var a = o("useWAWebChatValues").useChatValues(e.id, r),
        i = a[0],
        l;
      n[1] !== e.id || n[2] !== i
        ? ((l = i ? null : m(e.id)), (n[1] = e.id), (n[2] = i), (n[3] = l))
        : (l = n[3]);
      var u = l,
        c;
      return (
        n[4] !== e.id || n[5] !== u
          ? ((c = function () {
              var t;
              return (t = u == null ? void 0 : u.getText(e.id)) != null
                ? t
                : null;
            }),
            (n[4] = e.id),
            (n[5] = u),
            (n[6] = c))
          : (c = n[6]),
        s((t = u == null ? void 0 : u.subscribe) != null ? t : p, c)
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
