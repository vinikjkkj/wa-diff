__d(
  "getOpacityStyleName",
  [],
  function (t, n, r, o, a, i) {
    var e = !1,
      l = null;
    function s() {
      if (!e) {
        if (document.body && "opacity" in document.body.style) l = "opacity";
        else {
          var t = document.createElement("div");
          ((t.style.filter = "alpha(opacity=100)"),
            t.style.filter && (l = "filter"));
        }
        e = !0;
      }
      return l;
    }
    i.default = s;
  },
  66,
);
