__d(
  "useWAWebConversationPanelDragHandlers",
  ["WAWebCmd", "WAWebDataTransfer", "WAWebMediaEditorOpenTrigger", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e, t) {
      var n = t.canCompose,
        a = t.onDragEnter,
        i = t.threadId,
        l = s(!1),
        u = s(null),
        c = function (t) {
          n && (l.current = !0);
        },
        d = function (t) {
          n && (l.current = !1);
        },
        m = function (s) {
          if (n) {
            var t = u.current;
            if (t != null) {
              var c = t.getCurrentComposeContent();
              a();
              var d = new (r("WAWebDataTransfer"))(s.dataTransfer);
              !l.current &&
                d.hasType("Files") &&
                (t.flushSaveComposeContentDebounced(),
                o("WAWebCmd").Cmd.attachMediaDrawer({
                  chat: e,
                  threadId: i,
                  initCaption: c,
                  onComplete: t.updateTextAfterMediaDrawerClose,
                  openTrigger: o("WAWebMediaEditorOpenTrigger")
                    .MediaEditorOpenTrigger.ConversationPanelDragAndDrop,
                }),
                s.stopPropagation(),
                s.preventDefault());
            }
          }
        },
        p = { onDragStart: c, onDragEnd: d, onDragEnter: m };
      return [u, p];
    }
    l.default = u;
  },
  98,
);
