__d(
  "WAWebAssetLoaderDpiChangeDispatch",
  [],
  function (t, n, r, o, a, i) {
    var e = { LOW: "low", HIGH: "high" },
      l = window.matchMedia(
        "\n    only screen and (-webkit-min-device-pixel-ratio: 2),\n    only screen and (min-device-pixel-ratio: 2),\n    only screen and (min-resolution: 2dppx)\n",
      ),
      s = { RES: e, currentRes: l.matches ? e.HIGH : e.LOW },
      u = function (n) {
        var t = n.matches ? e.HIGH : e.LOW;
        if (t !== s.currentRes) {
          s.currentRes = t;
          var r = document.createEvent("Event");
          (r.initEvent("dpichange", !0, !0), window.dispatchEvent(r));
        }
      };
    l.addListener(u);
    var c = s;
    i.default = c;
  },
  66,
);
