__d(
  "evalGlobal",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (typeof e != "string") {
        var t = new TypeError(
          "JS sent to evalGlobal is not a string. Only strings are permitted.",
        );
        throw (t.stack, t);
      }
      if (e) {
        var n = document.createElement("script");
        try {
          n.appendChild(document.createTextNode(e));
        } catch (t) {
          n.text = e;
        }
        var r =
          document.getElementsByTagName("head")[0] || document.documentElement;
        (r.appendChild(n), r.removeChild(n));
      }
    }
    i.default = e;
  },
  66,
);
