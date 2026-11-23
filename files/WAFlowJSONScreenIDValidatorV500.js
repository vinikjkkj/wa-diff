__d(
  "WAFlowJSONScreenIDValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "success",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            for (
              var t = [],
                n = this.flowJSONData.flowJson.screens,
                r = this.flowJSONData.flowJSONPointers,
                a = new Set(),
                i = new Map(),
                l = new Map(),
                s = 0;
              s < n.length;
              s++
            ) {
              var c = n[s].id;
              if (c === e) {
                var d,
                  m = (d = l.get(c)) != null ? d : [];
                (l.set(c, [u(s, r)].concat(m)), a.add(c));
                continue;
              }
              if (a.has(c)) {
                var p,
                  _ = (p = i.get(c)) != null ? p : [];
                i.set(c, [u(s, r)].concat(_));
              } else a.add(c);
            }
            for (var f of i) {
              var g = f[0],
                h = f[1];
              t.push(
                o(
                  "WAFlowJSONValidationResultUtil",
                ).getWAFlowJSONValidationError({
                  code: o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.DUPLICATE_SCREEN_IDS,
                  message: o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDuplicateScreenIDErrorMsg(
                    g,
                  ),
                  pointers: h,
                }),
              );
            }
            for (var y of l) {
              var C = y[0],
                b = y[1];
              t.push(
                o(
                  "WAFlowJSONValidationResultUtil",
                ).getWAFlowJSONValidationError({
                  code: o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .SCREEN_ID_IS_RESERVED_KEYWORD,
                  message: o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getScreenIDIsReservedKeywordErrorMsg(
                    e,
                  ),
                  pointers: b,
                }),
              );
            }
            if (this.flowJSONData.getTerminalScreens().size === 0) {
              var v,
                S = [],
                R = (v = r.get("/screens")) == null ? void 0 : v.value;
              (R != null && (S = S.concat(R)),
                t.push(
                  o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONValidationError({
                    code: o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .MISSING_TERMINAL_SCREEN,
                    message: o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingTerminalScreenErrorMsg(),
                    pointers: S,
                  }),
                ));
            }
            return t;
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function u(e, t) {
      var n,
        r = "/screens/" + e + "/id",
        a = (n = t.get(r)) == null ? void 0 : n.value;
      return a != null
        ? a
        : o(
            "WAFlowJSONValidationResultUtil",
          ).getWAFlowJSONDefaultErrorPointer();
    }
    l.WAFlowJSONScreenIDValidatorV500 = s;
  },
  98,
);
