__d(
  "WAWebMessagePluginRenderMsg",
  [
    "WAWebMessagePluginRenderMsgRegistry",
    "WAWebPluginCreateRegistryLookup",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginRenderMsgRegistry"),
    );
    function s(t) {
      var n = t.displayAuthor,
        r = t.msg,
        a = e(r.type, r.subtype);
      return a == null || a.renderMsg == null
        ? void 0
        : a.renderMsg({
            chat: o("WAWebStateUtils").unproxy(t.chat),
            msg: o("WAWebStateUtils").unproxy(t.msg),
            displayAuthor: n,
          });
    }
    l.renderMsg = s;
  },
  98,
);
