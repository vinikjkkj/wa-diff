__d(
  "WAWebForwardDrag",
  [],
  function (t, n, r, o, a, i) {
    var e = "application/x-whatsapp-forward-drag",
      l = 1e3,
      s = null,
      u = null;
    function c(e, t) {
      (e.clearData(), d(e, t), (e.effectAllowed = "copy"));
    }
    function d(t, n) {
      h();
      var r = y();
      ((s = { msgs: n, token: r }),
        t.setData(e, r),
        window.addEventListener("dragover", f, !0),
        g());
    }
    function m() {
      s != null && g();
    }
    function p(t) {
      return s != null && t.types.includes(e);
    }
    function _(t) {
      var n = s;
      return (h(), n == null || t.getData(e) !== n.token ? [] : n.msgs);
    }
    function f(t) {
      var n;
      u != null &&
        ((n = t.dataTransfer) == null ? void 0 : n.types.includes(e)) === !0 &&
        g();
    }
    function g() {
      (u != null && self.clearTimeout(u), (u = self.setTimeout(h, l)));
    }
    function h() {
      (u != null && (self.clearTimeout(u), (u = null)),
        (s = null),
        window.removeEventListener("dragover", f, !0));
    }
    function y() {
      var e = new Uint8Array(16);
      return (
        self.crypto.getRandomValues(e),
        Array.from(e, function (e) {
          return e.toString(16).padStart(2, "0");
        }).join("")
      );
    }
    ((i.FORWARD_DRAG_TYPE = e),
      (i.FORWARD_DRAG_IDLE_MS = l),
      (i.startForwardDrag = c),
      (i.addForwardDrag = d),
      (i.endForwardDrag = m),
      (i.isForwardDrag = p),
      (i.takeForwardDragMsgs = _));
  },
  66,
);
