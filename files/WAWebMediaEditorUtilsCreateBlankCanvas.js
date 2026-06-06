__d(
  "WAWebMediaEditorUtilsCreateBlankCanvas",
  ["Promise", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1600,
      u = 900,
      c = "#FFFFFF";
    function d(e) {
      e === void 0 && (e = c);
      var t = document.createElement("canvas");
      ((t.width = s), (t.height = u));
      var n = t.getContext("2d");
      return (n != null && ((n.fillStyle = e), n.fillRect(0, 0, s, u)), t);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = d(),
            t = yield _(e),
            n = new File([t], "drawing.jpeg", { type: "image/jpeg" });
          return { file: n };
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, o) {
      return (
        o === void 0 && (o = "image/jpeg"),
        new (e || (e = n("Promise")))(function (e, n) {
          t.toBlob(
            function (t) {
              t != null
                ? e(t)
                : n(r("err")("Failed to convert canvas to blob"));
            },
            o,
            1,
          );
        })
      );
    }
    ((l.createBlankCanvas = d), (l.createBlankCanvasAttachment = m));
  },
  98,
);
