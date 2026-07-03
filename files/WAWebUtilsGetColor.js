__d(
  "WAWebUtilsGetColor",
  ["WANullthrows", "err"],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
        ["sand-200", "rgb(234, 224, 214)"],
        ["sand-300", "rgb(170, 148, 125)"],
        ["sand-600", "rgb(94, 83, 72)"],
      ]),
      s = new Map([
        ["cobalt-200", "#99CAFE"],
        ["cobalt-300", "#53A6FD"],
        ["cobalt-600", "#0451A3"],
        ["cool-gray-200", "#D4D6D8"],
        ["cool-gray-300", "#B3B9BD"],
        ["cool-gray-600", "#5B6368"],
        ["cool-gray-alpha-50", "rgba(17, 27, 33, 0.5)"],
        ["green-200", "#ACFCAC"],
        ["green-300", "#71EB85"],
        ["green-600", "#1B8755"],
        ["orange-200", "#FDC1AD"],
        ["orange-300", "#FC9775"],
        ["orange-600", "#9A4529"],
        ["pink-200", "#FFABC7"],
        ["pink-300", "#FF72A1"],
        ["pink-600", "#A32553"],
        ["purple-200", "#D1C4FF"],
        ["purple-300", "#A791FF"],
        ["purple-600", "#4837AF"],
        ["red-200", "#FA99A4"],
        ["red-300", "#FB5061"],
        ["red-600", "#911435"],
        ["sky-blue-200", "#93D7F5"],
        ["sky-blue-300", "#53BDEB"],
        ["sky-blue-600", "#046692"],
        ["teal-200", "#95DBD4"],
        ["teal-300", "#42C7B8"],
        ["teal-600", "#046A62"],
        ["yellow-200", "#FFE4AF"],
        ["yellow-300", "#FFD279"],
        ["yellow-600", "#9D6C2C"],
      ]);
    function u(t, n) {
      var o =
        t === "sand"
          ? r("WANullthrows")(e.get(t + "-" + n))
          : r("WANullthrows")(s.get(t + "-" + n));
      if (o === "")
        throw r("err")(
          "Get color failed (color=" +
            t +
            " depth=" +
            n +
            "). Please check whether wds color changed or there is a typo in color name.",
        );
      return o;
    }
    l.default = u;
  },
  98,
);
