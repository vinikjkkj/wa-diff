__d(
  "useWebBloksTextInputFormatValue",
  [
    "WebBloksTextInputHelpers",
    "WebBloksTextInputMaskExtensionHandlerUtils",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(7),
        r = e.get("max_number_of_lines"),
        a = e.get("digits_key_listener"),
        i;
      n[0] !== e || n[1] !== t
        ? ((i = o(
            "WebBloksTextInputMaskExtensionHandlerUtils",
          ).getTextInputMaskExtensionProps(e.getValues(), t)),
          (n[0] = e),
          (n[1] = t),
          (n[2] = i))
        : (i = n[2]);
      var l = i,
        s = l == null ? void 0 : l.onBeforeChange,
        u = r != null && r > 0 ? r : null,
        c;
      return (
        n[3] !== a || n[4] !== u || n[5] !== s
          ? ((c = function (t, n) {
              var e = n;
              if (
                (s && (e = s(t, n)),
                u != null &&
                  (e = o("WebBloksTextInputHelpers").removeLineBreaks(
                    e,
                    u - 1,
                  )),
                a != null)
              ) {
                var r = new RegExp("[^" + a + "]", "gmi");
                e = e.replace(r, "");
              }
              return e;
            }),
            (n[3] = a),
            (n[4] = u),
            (n[5] = s),
            (n[6] = c))
          : (c = n[6]),
        c
      );
    }
    l.default = e;
  },
  98,
);
