__d(
  "useWAWebConversationPanelDragHandlers",
  [
    "WAWebCmd",
    "WAWebDataTransfer",
    "WAWebMediaEditorOpenTrigger",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.canCompose,
        i = t.onDragEnter,
        l = t.threadId,
        u = s(!1),
        c = s(null),
        d;
      n[0] !== a
        ? ((d = function (t) {
            a && (u.current = !0);
          }),
          (n[0] = a),
          (n[1] = d))
        : (d = n[1]);
      var m = d,
        p;
      n[2] !== a
        ? ((p = function (t) {
            a && (u.current = !1);
          }),
          (n[2] = a),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f;
      n[4] !== a || n[5] !== e || n[6] !== i || n[7] !== l
        ? ((f = function (n) {
            if (a) {
              var t = c.current;
              if (t != null) {
                var s = t.getCurrentComposeContent();
                i();
                var d = new (r("WAWebDataTransfer"))(n.dataTransfer);
                !u.current &&
                  d.hasType("Files") &&
                  (t.flushSaveComposeContentDebounced(),
                  o("WAWebCmd").Cmd.attachMediaDrawer({
                    chat: e,
                    threadId: l,
                    initCaption: s,
                    onComplete: t.updateTextAfterMediaDrawerClose,
                    openTrigger: o("WAWebMediaEditorOpenTrigger")
                      .MediaEditorOpenTrigger.ConversationPanelDragAndDrop,
                  }),
                  n.stopPropagation(),
                  n.preventDefault());
              }
            }
          }),
          (n[4] = a),
          (n[5] = e),
          (n[6] = i),
          (n[7] = l),
          (n[8] = f))
        : (f = n[8]);
      var g = f,
        h;
      if (n[9] !== _ || n[10] !== g || n[11] !== m) {
        var y = { onDragStart: m, onDragEnd: _, onDragEnter: g };
        ((h = [c, y]), (n[9] = _), (n[10] = g), (n[11] = m), (n[12] = h));
      } else h = n[12];
      return h;
    }
    l.default = u;
  },
  98,
);
