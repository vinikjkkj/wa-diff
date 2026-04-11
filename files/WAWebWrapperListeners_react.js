__d(
  "WAWebWrapperListeners.react",
  [
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.parent,
        r;
      t[0] !== n
        ? ((r = function (t, r) {
            n.scrollMsg(t, r);
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] !== n
        ? ((i = function (t) {
            n.highlight == null || n.highlight(t);
          }),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        s;
      t[4] !== n
        ? ((s = function () {
            n.highlightMention == null || n.highlightMention();
          }),
          (t[4] = n),
          (t[5] = s))
        : (s = t[5]);
      var u = s;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "scroll_to_focused_msg",
        a,
      );
      var c;
      return (
        t[6] !== l
          ? ((c = function (t) {
              return l(t);
            }),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "flash_focused_msg",
          c,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "flash_mention_msg",
          u,
        ),
        null
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.msgId,
        r = e.parent,
        a = e.selectedMessages,
        i;
      t[0] !== r
        ? ((i = function (t) {
            r.onSelectChange(t);
          }),
          (t[0] = r),
          (t[1] = i))
        : (i = t[1]);
      var l = i;
      return (o("useWAWebListener").useListener(a, n, l), null);
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.forceUpdate,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["isGif"]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e.mediaData, r),
        i;
      t[1] !== n
        ? ((i = function () {
            n();
          }),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n || t[4] !== a
          ? ((l = [a, n]), (t[3] = n), (t[4] = a), (t[5] = l))
          : (l = t[5]),
        s(i, l),
        null
      );
    }
    ((l.WhileFocusedListener = u),
      (l.SelectionListener = c),
      (l.MediaListener = d));
  },
  98,
);
