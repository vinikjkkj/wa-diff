__d(
  "WebBloksTextInputDatePickerExtensionHandlerUtils",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksUtils",
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
      var t = e.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.bloksContext,
        a = n.executeOnNextTickCatch,
        i = o("WebBloksUtils").findExtension(t, p);
      if (!i) return null;
      var l = i.get(s),
        _ = i.get(u),
        h = i.get(c),
        y = i.get(d),
        C = i.getExpression(m);
      return y === "time"
        ? {
            typeOverride: "time",
            initialValue: g(l != null ? l * 1e3 : Date.now()),
            minmaxProps: null,
            onChange: function (n) {
              if (n) {
                var t = n.split(":").map(Number),
                  o = t[0],
                  i = t[1],
                  l = new Date();
                (l.setUTCHours(o, i, 0, 0),
                  C != null &&
                    a(e, C, [parseInt(String(l.getTime() / 1e3), 10), e, r]));
              }
            },
          }
        : {
            typeOverride: "date",
            initialValue: l != null ? f(l * 1e3) : "",
            minmaxProps: {
              min: h != null ? f(h * 1e3) : void 0,
              max: _ != null ? f(_ * 1e3) : void 0,
            },
            onChange: function (n) {
              if (n) {
                var t = n.split("-").map(Number),
                  o = t[0],
                  i = t[1],
                  l = t[2],
                  s = new Date();
                (s.setUTCFullYear(o),
                  s.setUTCMonth(i - 1),
                  s.setUTCDate(l),
                  s.setUTCHours(0, 0, 0, 0),
                  C != null &&
                    a(e, C, [parseInt(String(s.getTime() / 1e3), 10), e, r]));
              }
            },
          };
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
