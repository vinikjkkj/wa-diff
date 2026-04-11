__d(
  "WAWebKeyboardManager",
  ["WAWebKeyboardRun", "WAWebKeyboardShortcuts"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          document.addEventListener("keydown", function (e) {
            var t = o("WAWebKeyboardShortcuts").getAction(e);
            t && r("WAWebKeyboardRun")(t);
          });
        }
        var t = e.prototype;
        return (
          (t.trigger = function (t) {}),
          (t.menuBatchRenderWith = function (t) {}),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
