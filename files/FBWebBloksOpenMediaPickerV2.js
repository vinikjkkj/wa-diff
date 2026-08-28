__d(
  "FBWebBloksOpenMediaPickerV2",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r, o, a, i) {
      var l,
        s = document.createElement("input");
      ((s.type = "file"),
        (s.accept = "image/*"),
        (s.style.display = "none"),
        s.addEventListener("change", function () {
          var o,
            a = (o = s.files) == null ? void 0 : o[0];
          if (a == null) {
            (r != null && e.executeCatch(r, [t]), u());
            return;
          }
          var i = URL.createObjectURL(a);
          (e.executeCatch(n, [t, i]), u());
        }),
        s.addEventListener("cancel", function () {
          (r != null && e.executeCatch(r, [t]), u());
        }));
      function u() {
        s.remove();
      }
      ((l = document.body) == null || l.appendChild(s), s.click());
    }
    i.default = e;
  },
  66,
);
