__d(
  "invariant",
  ["Env", "fb-error-lite", "sprintf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (e == null || !e) {
        for (
          var n = t,
            o = arguments.length,
            a = new Array(o > 2 ? o - 2 : 0),
            i = 2;
          i < o;
          i++
        )
          a[i - 2] = arguments[i];
        if (typeof n == "number") {
          var l = u(n, a),
            s = l.decoderLink,
            c = l.message;
          ((n = c), a.unshift(s));
        } else if (n === void 0) {
          for (var d = "Invariant: ", m = 0; m < a.length; m++) d = d + "%s,";
          n = d;
        }
        var p = n,
          _ = new Error(p);
        throw (
          (_.name = "Invariant Violation"),
          (_.messageFormat = n),
          (_.messageParams = a.map(function (e) {
            return String(e);
          })),
          (_.taalOpcodes = [r("fb-error-lite").TAALOpcode.PREVIOUS_FRAME]),
          _.stack,
          _
        );
      }
    }
    function u(t, n) {
      var o = "Minified invariant #" + t + "; %s";
      n.length > 0 &&
        (o +=
          " Params: " +
          n
            .map(function (e) {
              return "%s";
            })
            .join(", "));
      var a =
        (e || (e = r("Env"))).show_invariant_decoder === !0
          ? "visit " + c(t, n) + " to see the full message."
          : "";
      return { message: o, decoderLink: a };
    }
    function c(e, t) {
      var n = "https://www.internalfb.com/intern/invariant/" + e + "/";
      return (
        t.length > 0 &&
          (n +=
            "?" +
            t
              .map(function (e, t) {
                return "args[" + t + "]=" + encodeURIComponent(String(e));
              })
              .join("&")),
        n
      );
    }
    l.default = s;
  },
  98,
);
