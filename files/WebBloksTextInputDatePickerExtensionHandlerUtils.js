__d(
  "WebBloksTextInputDatePickerExtensionHandlerUtils",
  ["WebBloksComponentContext", "WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.get("extensions"),
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.bloksContext,
        i = r.executeOnNextTickCatch,
        l = o("WebBloksUtils").findExtension(
          n,
          "bk.components.TextInputDatePickerExtension",
        );
      if (!l) return null;
      var c = l.get("initial_time_seconds"),
        d = l.get("maximum_time_seconds"),
        m = l.get("minimum_time_seconds"),
        p = l.get("mode"),
        _ = l.getExpression("on_date_change");
      if (p === "time") {
        var f;
        t[0] !== c
          ? ((f = u(c != null ? c * 1e3 : Date.now())), (t[0] = c), (t[1] = f))
          : (f = t[1]);
        var g;
        t[2] !== a || t[3] !== i || t[4] !== _ || t[5] !== e
          ? ((g = function (n) {
              if (n) {
                var t = n.split(":").map(Number),
                  r = t[0],
                  o = t[1],
                  l = new Date();
                (l.setUTCHours(r, o, 0, 0),
                  _ != null &&
                    i(e, _, [parseInt(l.getTime() / 1e3, 10), e, a]));
              }
            }),
            (t[2] = a),
            (t[3] = i),
            (t[4] = _),
            (t[5] = e),
            (t[6] = g))
          : (g = t[6]);
        var h;
        return (
          t[7] !== f || t[8] !== g
            ? ((h = {
                typeOverride: "time",
                initialValue: f,
                minmaxProps: null,
                onChange: g,
              }),
              (t[7] = f),
              (t[8] = g),
              (t[9] = h))
            : (h = t[9]),
          h
        );
      }
      var y;
      t[10] !== c
        ? ((y = c != null ? s(c * 1e3) : ""), (t[10] = c), (t[11] = y))
        : (y = t[11]);
      var C;
      t[12] !== m
        ? ((C = m != null ? s(m * 1e3) : void 0), (t[12] = m), (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== d
        ? ((b = d != null ? s(d * 1e3) : void 0), (t[14] = d), (t[15] = b))
        : (b = t[15]);
      var v;
      t[16] !== C || t[17] !== b
        ? ((v = { min: C, max: b }), (t[16] = C), (t[17] = b), (t[18] = v))
        : (v = t[18]);
      var S;
      t[19] !== a || t[20] !== i || t[21] !== _ || t[22] !== e
        ? ((S = function (n) {
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
                _ != null && i(e, _, [parseInt(s.getTime() / 1e3, 10), e, a]));
            }
          }),
          (t[19] = a),
          (t[20] = i),
          (t[21] = _),
          (t[22] = e),
          (t[23] = S))
        : (S = t[23]);
      var R;
      return (
        t[24] !== y || t[25] !== v || t[26] !== S
          ? ((R = {
              typeOverride: "date",
              initialValue: y,
              minmaxProps: v,
              onChange: S,
            }),
            (t[24] = y),
            (t[25] = v),
            (t[26] = S),
            (t[27] = R))
          : (R = t[27]),
        R
      );
    }
    var s = function (t) {
        var e = new Date(t);
        return [
          String(e.getUTCFullYear()).padStart(4, "0"),
          String(e.getUTCMonth() + 1).padStart(2, "0"),
          String(e.getUTCDate()).padStart(2, "0"),
        ].join("-");
      },
      u = function (t) {
        var e = new Date(t);
        return [
          e.getUTCHours().toString().padStart(2, "0"),
          e.getUTCMinutes().toString().padStart(2, "0"),
        ].join(":");
      };
    l.useWebBloksTextInputDateProps = e;
  },
  98,
);
