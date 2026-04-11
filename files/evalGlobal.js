__d(
  "evalGlobal",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (typeof e != "string")
        throw new TypeError(
          "JS sent to evalGlobal is not a string. Only strings are permitted.",
        );
      if (e) {
        var t = document.createElement("script");
        try {
          t.appendChild(document.createTextNode(e));
        } catch (n) {
          t.text = e;
        }
        var n =
          document.getElementsByTagName("head")[0] || document.documentElement;
        (n.appendChild(t), n.removeChild(t));
      }
    }
    i.default = e;
  },
  66,
);
