__d(
  "WAWebMediaEditorUtilsCreateBlankCanvas",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = 1600,
      s = 900,
      u = "#FFFFFF";
    function c(t) {
      t === void 0 && (t = u);
      var n = document.createElement("canvas");
      ((n.width = e), (n.height = s));
      var r = n.getContext("2d");
      return (r != null && ((r.fillStyle = t), r.fillRect(0, 0, e, s)), n);
    }
    async function d() {
      var e = c(),
        t = await m(e),
        n = new File([t], "drawing.jpeg", { type: "image/jpeg" });
      return { file: n };
    }
    function m(e, t) {
      return (
        t === void 0 && (t = "image/jpeg"),
        new Promise(function (n, o) {
          e.toBlob(
            function (e) {
              e != null
                ? n(e)
                : o(r("err")("Failed to convert canvas to blob"));
            },
            t,
            1,
          );
        })
      );
    }
    ((l.createBlankCanvas = c), (l.createBlankCanvasAttachment = d));
  },
  98,
);
