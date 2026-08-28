__d(
  "WebBloksTextInputDatePickerExtensionHandlerUtils",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksUtils",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "$",
      u = "&",
      c = "(",
      d = "+",
      m = "\u3F27";
    function p(t) {
      var n = o("react-compiler-runtime").c(28),
        r = t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.bloksContext,
        l = a.executeOnNextTickCatch,
        p = o("WebBloksUtils").findExtension(r, m);
      if (!p) return null;
      var g = p.get(e),
        h = p.get(s),
        y = p.get(u),
        C = p.get(c),
        b = p.getExpression(d);
      if (C === "time") {
        var v;
        n[0] !== g
          ? ((v = f(g != null ? g * 1e3 : Date.now())), (n[0] = g), (n[1] = v))
          : (v = n[1]);
        var S;
        n[2] !== i || n[3] !== l || n[4] !== b || n[5] !== t
          ? ((S = function (n) {
              if (n) {
                var e = n.split(":").map(Number),
                  r = e[0],
                  o = e[1],
                  a = new Date();
                (a.setUTCHours(r, o, 0, 0),
                  b != null &&
                    l(t, b, [parseInt(a.getTime() / 1e3, 10), t, i]));
              }
            }),
            (n[2] = i),
            (n[3] = l),
            (n[4] = b),
            (n[5] = t),
            (n[6] = S))
          : (S = n[6]);
        var R;
        return (
          n[7] !== v || n[8] !== S
            ? ((R = {
                typeOverride: "time",
                initialValue: v,
                minmaxProps: null,
                onChange: S,
              }),
              (n[7] = v),
              (n[8] = S),
              (n[9] = R))
            : (R = n[9]),
          R
        );
      }
      var L;
      n[10] !== g
        ? ((L = g != null ? _(g * 1e3) : ""), (n[10] = g), (n[11] = L))
        : (L = n[11]);
      var E;
      n[12] !== y
        ? ((E = y != null ? _(y * 1e3) : void 0), (n[12] = y), (n[13] = E))
        : (E = n[13]);
      var k;
      n[14] !== h
        ? ((k = h != null ? _(h * 1e3) : void 0), (n[14] = h), (n[15] = k))
        : (k = n[15]);
      var I;
      n[16] !== E || n[17] !== k
        ? ((I = { min: E, max: k }), (n[16] = E), (n[17] = k), (n[18] = I))
        : (I = n[18]);
      var T;
      n[19] !== i || n[20] !== l || n[21] !== b || n[22] !== t
        ? ((T = function (n) {
            if (n) {
              var e = n.split("-").map(Number),
                r = e[0],
                o = e[1],
                a = e[2],
                s = new Date();
              (s.setUTCFullYear(r),
                s.setUTCMonth(o - 1),
                s.setUTCDate(a),
                s.setUTCHours(0, 0, 0, 0),
                b != null && l(t, b, [parseInt(s.getTime() / 1e3, 10), t, i]));
            }
          }),
          (n[19] = i),
          (n[20] = l),
          (n[21] = b),
          (n[22] = t),
          (n[23] = T))
        : (T = n[23]);
      var D;
      return (
        n[24] !== L || n[25] !== I || n[26] !== T
          ? ((D = {
              typeOverride: "date",
              initialValue: L,
              minmaxProps: I,
              onChange: T,
            }),
            (n[24] = L),
            (n[25] = I),
            (n[26] = T),
            (n[27] = D))
          : (D = n[27]),
        D
      );
    }
    var _ = function (t) {
        var e = new Date(t);
        return [
          String(e.getUTCFullYear()).padStart(4, "0"),
          String(e.getUTCMonth() + 1).padStart(2, "0"),
          String(e.getUTCDate()).padStart(2, "0"),
        ].join("-");
      },
      f = function (t) {
        var e = new Date(t);
        return [
          e.getUTCHours().toString().padStart(2, "0"),
          e.getUTCMinutes().toString().padStart(2, "0"),
        ].join(":");
      };
    l.useWebBloksTextInputDateProps = p;
  },
  98,
);
