__d(
  "WebBloksTextInputDatePickerExtensionHandlerUtils",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksUtils",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WebBloksModel")).defineWebBloksAttributeKey("#"),
      u = e.defineWebBloksAttributeKey("$"),
      c = e.defineWebBloksAttributeKey("&"),
      d = e.defineWebBloksAttributeKey("("),
      m = e.defineWebBloksAttributeKey("+"),
      p = "bk.components.TextInputDatePickerExtension";
    function _(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.bloksContext,
        i = r.executeOnNextTickCatch,
        l = o("WebBloksUtils").findExtension(n, p);
      if (!l) return null;
      var _ = l.get(s),
        h = l.get(u),
        y = l.get(c),
        C = l.get(d),
        b = l.getExpression(m);
      if (C === "time") {
        var v;
        t[0] !== _
          ? ((v = g(_ != null ? _ * 1e3 : Date.now())), (t[0] = _), (t[1] = v))
          : (v = t[1]);
        var S;
        t[2] !== a || t[3] !== i || t[4] !== b || t[5] !== e
          ? ((S = function (n) {
              if (n) {
                var t = n.split(":").map(Number),
                  r = t[0],
                  o = t[1],
                  l = new Date();
                (l.setUTCHours(r, o, 0, 0),
                  b != null &&
                    i(e, b, [parseInt(l.getTime() / 1e3, 10), e, a]));
              }
            }),
            (t[2] = a),
            (t[3] = i),
            (t[4] = b),
            (t[5] = e),
            (t[6] = S))
          : (S = t[6]);
        var R;
        return (
          t[7] !== v || t[8] !== S
            ? ((R = {
                typeOverride: "time",
                initialValue: v,
                minmaxProps: null,
                onChange: S,
              }),
              (t[7] = v),
              (t[8] = S),
              (t[9] = R))
            : (R = t[9]),
          R
        );
      }
      var L;
      t[10] !== _
        ? ((L = _ != null ? f(_ * 1e3) : ""), (t[10] = _), (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== y
        ? ((E = y != null ? f(y * 1e3) : void 0), (t[12] = y), (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] !== h
        ? ((k = h != null ? f(h * 1e3) : void 0), (t[14] = h), (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] !== E || t[17] !== k
        ? ((I = { min: E, max: k }), (t[16] = E), (t[17] = k), (t[18] = I))
        : (I = t[18]);
      var T;
      t[19] !== a || t[20] !== i || t[21] !== b || t[22] !== e
        ? ((T = function (n) {
            if (n) {
              var t = n.split("-").map(Number),
                r = t[0],
                o = t[1],
                l = t[2],
                s = new Date();
              (s.setUTCFullYear(r),
                s.setUTCMonth(o - 1),
                s.setUTCDate(l),
                s.setUTCHours(0, 0, 0, 0),
                b != null && i(e, b, [parseInt(s.getTime() / 1e3, 10), e, a]));
            }
          }),
          (t[19] = a),
          (t[20] = i),
          (t[21] = b),
          (t[22] = e),
          (t[23] = T))
        : (T = t[23]);
      var D;
      return (
        t[24] !== L || t[25] !== I || t[26] !== T
          ? ((D = {
              typeOverride: "date",
              initialValue: L,
              minmaxProps: I,
              onChange: T,
            }),
            (t[24] = L),
            (t[25] = I),
            (t[26] = T),
            (t[27] = D))
          : (D = t[27]),
        D
      );
    }
    var f = function (t) {
        var e = new Date(t);
        return [
          String(e.getUTCFullYear()).padStart(4, "0"),
          String(e.getUTCMonth() + 1).padStart(2, "0"),
          String(e.getUTCDate()).padStart(2, "0"),
        ].join("-");
      },
      g = function (t) {
        var e = new Date(t);
        return [
          e.getUTCHours().toString().padStart(2, "0"),
          e.getUTCMinutes().toString().padStart(2, "0"),
        ].join(":");
      };
    l.useWebBloksTextInputDateProps = _;
  },
  98,
);
