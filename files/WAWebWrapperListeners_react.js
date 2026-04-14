__d(
  "WAWebWrapperListeners.react",
  ["WAWebCmd", "react", "useWAWebListener", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.parent,
        n = function (n, r) {
          t.scrollMsg(n, r);
        },
        r = function (n) {
          t.highlight == null || t.highlight(n);
        },
        a = function () {
          t.highlightMention == null || t.highlightMention();
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "scroll_to_focused_msg",
          n,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "flash_focused_msg",
          function (e) {
            return r(e);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "flash_mention_msg",
          a,
        ),
        null
      );
    }
    function c(e) {
      var t = e.msgId,
        n = e.parent,
        r = e.selectedMessages,
        a = function (t) {
          n.onSelectChange(t);
        };
      return (o("useWAWebListener").useListener(r, t, a), null);
    }
    function d(e) {
      var t = e.forceUpdate,
        n = o("useWAWebModelValues").useModelValues(e.mediaData, ["isGif"]);
      return (
        s(
          function () {
            t();
          },
          [n, t],
        ),
        null
      );
    }
    ((l.WhileFocusedListener = u),
      (l.SelectionListener = c),
      (l.MediaListener = d));
  },
  98,
);
