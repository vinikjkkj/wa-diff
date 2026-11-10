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
        a = t.position,
        i = e(r.type, r.subtype);
      return i == null || i.renderMsg == null
        ? void 0
        : i.renderMsg({
            chat: o("WAWebStateUtils").unproxy(t.chat),
            msg: o("WAWebStateUtils").unproxy(t.msg),
            displayAuthor: n,
            position: a,
          });
    }
    l.renderMsg = s;
  },
  98,
);
