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
      var c = l.getValues(),
        d = c.initial_time_seconds,
        m = c.maximum_time_seconds,
        p = c.minimum_time_seconds,
        _ = c.mode,
        f = l.getExpression("on_date_change");
      if (_ === "time") {
        var g;
        t[0] !== d
          ? ((g = u(d != null ? d * 1e3 : Date.now())), (t[0] = d), (t[1] = g))
          : (g = t[1]);
        var h;
        t[2] !== a || t[3] !== i || t[4] !== f || t[5] !== e
          ? ((h = function (n) {
              if (n) {
                var t = n.split(":").map(Number),
                  r = t[0],
                  o = t[1],
                  l = new Date();
                (l.setUTCHours(r, o, 0, 0),
                  f != null &&
                    i(e, f, [parseInt(l.getTime() / 1e3, 10), e, a]));
              }
            }),
            (t[2] = a),
            (t[3] = i),
            (t[4] = f),
            (t[5] = e),
            (t[6] = h))
          : (h = t[6]);
        var y;
        return (
          t[7] !== g || t[8] !== h
            ? ((y = {
                typeOverride: "time",
                initialValue: g,
                minmaxProps: null,
                onChange: h,
              }),
              (t[7] = g),
              (t[8] = h),
              (t[9] = y))
            : (y = t[9]),
          y
        );
      }
      var C;
      t[10] !== d
        ? ((C = s(d != null ? d * 1e3 : Date.now())), (t[10] = d), (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== p
        ? ((b = p != null ? s(p * 1e3) : void 0), (t[12] = p), (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== m
        ? ((v = m != null ? s(m * 1e3) : void 0), (t[14] = m), (t[15] = v))
        : (v = t[15]);
      var S;
      t[16] !== b || t[17] !== v
        ? ((S = { min: b, max: v }), (t[16] = b), (t[17] = v), (t[18] = S))
        : (S = t[18]);
      var R;
      t[19] !== a || t[20] !== i || t[21] !== f || t[22] !== e
        ? ((R = function (n) {
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
                f != null && i(e, f, [parseInt(s.getTime() / 1e3, 10), e, a]));
            }
          }),
          (t[19] = a),
          (t[20] = i),
          (t[21] = f),
          (t[22] = e),
          (t[23] = R))
        : (R = t[23]);
      var L;
      return (
        t[24] !== C || t[25] !== S || t[26] !== R
          ? ((L = {
              typeOverride: "date",
              initialValue: C,
              minmaxProps: S,
              onChange: R,
            }),
            (t[24] = C),
            (t[25] = S),
            (t[26] = R),
            (t[27] = L))
          : (L = t[27]),
        L
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
