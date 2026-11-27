__d(
  "WmiErrorReport",
  ["FBLogger", "WmiErrorStamp", "WmiOds", "err", "fb-error", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "unclassified",
      s = "wmi_error",
      u = new WeakSet(),
      c = /:\d+:\d+\)?$/m;
    function d(e) {
      var t = r("fb-error").TAAL.blameToPreviousDirectory(
        r("err")("%s", e.message),
      );
      (Object.defineProperty(e, "stack", {
        configurable: !0,
        value: t.stack,
        writable: !0,
      }),
        (e.taalOpcodes = t.taalOpcodes));
    }
    function m(t, n) {
      var a, i, l, m, p, _;
      if (t instanceof Error) {
        if (u.has(t)) {
          var f,
            g,
            h = o("WmiErrorStamp").getWmiErrorStamp(t),
            y = (f = h == null ? void 0 : h.domain) != null ? f : s;
          (o("WmiOds").wmiOdsBump(y, "report_deduped"),
            o("WmiOds").wmiOdsBump(
              y,
              "report_deduped." +
                ((g = h == null ? void 0 : h.code) != null ? g : e),
            ));
          return;
        }
        u.add(t);
      }
      var C = o("WmiErrorStamp").getWmiErrorStamp(t),
        b = (a = C == null ? void 0 : C.code) != null ? a : e,
        v = (i = C == null ? void 0 : C.severity) != null ? i : "mustfix",
        S = r("getErrorSafe")(t);
      c.test(String((l = S.stack) != null ? l : "")) || d(S);
      var R = S.messageFormat,
        L = S.messageParams,
        E = L != null ? [].concat(L) : void 0,
        k = n == null ? void 0 : n.loggerTags,
        I =
          (m =
            (p = n == null ? void 0 : n.loggerProject) != null
              ? p
              : C == null
                ? void 0
                : C.domain) != null
            ? m
            : "wmi",
        T = r("FBLogger")(I),
        D = (k != null && k.length > 0 ? T.tags([].concat(k)) : T).catching(S),
        x = [
          C != null && C.domain !== I ? C.domain : null,
          b,
          C == null ? void 0 : C.source,
          n == null ? void 0 : n.loggerSubject,
        ].filter(Boolean),
        $ = x
          .map(function () {
            return "%s";
          })
          .join(" ");
      e: {
        if (v === "mustfix") {
          D.mustfix.apply(D, [$].concat(x));
          break e;
        }
        if (v === "warn") {
          D.warn.apply(D, [$].concat(x));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            v,
        );
      }
      ((S.messageFormat = R),
        (S.messageParams = E),
        o("WmiOds").wmiOdsBump(
          (_ = C == null ? void 0 : C.domain) != null ? _ : s,
          b,
        ),
        (C == null ? void 0 : C.site) != null &&
          o("WmiOds").wmiOdsBump(C.domain, b + "." + C.site));
    }
    l.reportWmiError = m;
  },
  98,
);
