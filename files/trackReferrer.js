__d(
  "trackReferrer",
  ["Cookie", "Parent"],
  function (t, n, r, o, a, i) {
    var e =
      /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    function l(t) {
      var n;
      return ((n = e.exec(t)) == null ? void 0 : n[1]) || "";
    }
    function s(e, t) {
      var r = n("Parent").byAttribute(e, "data-referrer");
      if (r) {
        var o,
          a = l(t);
        if (!a) return;
        var i =
          a + "|" + ((o = r.getAttribute("data-referrer")) != null ? o : "");
        n("Cookie").set("x-src", i);
      }
    }
    a.exports = s;
  },
  null,
);
