__d(
  "Popup",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      var a = [];
      (r("isTruthy")(t) && a.push("width=" + t),
        r("isTruthy")(n) && a.push("height=" + n));
      var i = document.body;
      if (i != null && t != null && t !== 0 && n != null && n !== 0) {
        var l = "screenX" in window ? window.screenX : window.screenLeft,
          s = "screenY" in window ? window.screenY : window.screenTop,
          u = "outerWidth" in window ? window.outerWidth : i.clientWidth,
          c =
            "outerHeight" in window ? window.outerHeight : i.clientHeight - 22,
          d = Math.floor(l + (u - t) / 2),
          m = Math.floor(s + (c - n) / 2.5);
        (a.push("left=" + d), a.push("top=" + m));
      }
      return (
        a.push("scrollbars"),
        window.open(e, o != null && o !== "" ? o : "_blank", a.join(","))
      );
    }
    l.open = e;
  },
  98,
);
