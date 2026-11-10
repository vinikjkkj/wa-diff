__d(
  "WAWebMessageDrag",
  [
    "WAWebDragAndDropGatingUtils",
    "WAWebForwardDrag",
    "WAWebMediaDragFiles",
    "WAWebMediaDragOut",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = '[data-testid="document-thumb"]',
      s = '[data-testid="document-thumb-details"]',
      u = '[data-testid="video-content"]',
      c = new WeakMap();
    function d(e) {
      var t = e.msg,
        n = e.selectable;
      return {
        onMouseDownCapture: function (r) {
          var e = r.currentTarget,
            o = n === !0 ? null : y(r.target, t);
          o != null
            ? (c.set(e, o), (e.draggable = !0))
            : c.delete(e) && e.removeAttribute("draggable");
        },
        onMouseOverCapture: function (r) {
          n !== !0 &&
            C(r.target, t) &&
            o("WAWebMediaDragOut").isDragOutMedia(t) &&
            o("WAWebMediaDragOut").prepareMediaDragOut(t);
        },
        onDragStart: function (r) {
          n !== !0 &&
            (g(r.target, t)
              ? _(t) &&
                o("WAWebForwardDrag").addForwardDrag(r.dataTransfer, [t])
              : h(r, t) && m(r, t));
        },
        onDragEnd: function () {
          (o("WAWebForwardDrag").endForwardDrag(),
            o("WAWebMediaDragOut").endMediaDragOut());
        },
      };
    }
    function m(e, t) {
      var n = e.dataTransfer;
      (n.clearData(),
        (n.effectAllowed = "copy"),
        p(e),
        _(t) && o("WAWebForwardDrag").addForwardDrag(n, [t]),
        o("WAWebMediaDragOut").addMediaDragOut(n, t));
    }
    function p(t) {
      var n,
        r = c.get(t.currentTarget);
      if (r != null) {
        var o = r.matches(e) && (n = r.querySelector(s)) != null ? n : r,
          a = o.getBoundingClientRect(),
          i = a.height,
          l = a.left,
          u = a.top,
          d = a.width;
        t.dataTransfer.setDragImage(
          o,
          Math.min(Math.max(t.clientX - l, 0), d),
          Math.min(Math.max(t.clientY - u, 0), i),
        );
      }
    }
    function _(e) {
      return f() && o("WAWebMediaDragFiles").isDraggableMediaMsg(e);
    }
    function f() {
      return o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
        o("WAWebDragAndDropGatingUtils").DragAndDropCapability.DragToChat,
      );
    }
    function g(e, t) {
      return (
        t.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
        e instanceof HTMLImageElement &&
        e.draggable
      );
    }
    function h(e, t) {
      return (
        e.currentTarget instanceof HTMLElement &&
        e.currentTarget.draggable &&
        v(t)
      );
    }
    function y(e, t) {
      var n = b(e, t);
      return n != null && v(t) ? n : null;
    }
    function C(e, t) {
      return b(e, t) != null;
    }
    function b(t, n) {
      if (
        !(t instanceof Element) ||
        (n.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          n.type !== o("WAWebMsgType").MSG_TYPE.VIDEO)
      )
        return null;
      var r = n.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? e : u;
      return t.closest(r);
    }
    function v(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
          e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
        (_(e) || o("WAWebMediaDragOut").canDragMediaOut(e))
      );
    }
    l.getMessageRowDragHandlers = d;
  },
  98,
);
