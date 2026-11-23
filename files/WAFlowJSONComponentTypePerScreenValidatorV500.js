__d(
  "WAFlowJSONComponentTypePerScreenValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this,
            t = [],
            n = this.flowJSONData.flowJson.screens;
          return (
            n.forEach(function (n) {
              return (t = t.concat(e.validateComponentCount(n)));
            }),
            t
          );
        }),
        (n.validateComponentCount = function (t) {
          var e = t.id,
            n = this.flowJSONData.findComponent(
              e,
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF,
            ),
            r = this.flowJSONData.findComponent(
              e,
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH,
            );
          return n == null && r == null
            ? this.validateSimpleComponentCount(t)
            : this.validateComponentCountWithConditionalRendering(t);
        }),
        (n.validateSimpleComponentCount = function (t) {
          var e = [],
            n = this.getMaxAllowedComponentCountPerScreen();
          for (var r of Object.keys(n)) {
            var a,
              i,
              l = n[r],
              s =
                (a =
                  (i = this.flowJSONData.componentTypeDataMap.get(t.id)) == null
                    ? void 0
                    : i.get(r)) != null
                  ? a
                  : [];
            if (s.length > l) {
              for (
                var u = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxComponentPerScreenErrorMsg(
                    r,
                    l,
                    s.length,
                  ),
                  c = [],
                  d = l;
                d < s.length;
                d++
              )
                c.push(s[d].jsonPointer + "/type");
              e.push(
                this.getError(
                  u,
                  c,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .COMPONENT_TYPE_MAX_NUMBER_PER_SCREEN,
                ),
              );
            }
          }
          return e;
        }),
        (n.validateComponentCountWithConditionalRendering = function (t) {
          var e,
            n,
            r = [],
            a = this.countComponentMaxCount(
              (e = (n = t.layout) == null ? void 0 : n.children) != null
                ? e
                : [],
              Array.from(
                Object.keys(
                  o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT,
                ),
              ),
            );
          for (var i of Object.keys(
            o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT,
          )) {
            var l,
              s = o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT[i],
              u = (l = a.get(i)) != null ? l : 0;
            if (u > s) {
              var c = this.flowJSONData
                  .getComponentDataByType(t.id, i)
                  .map(function (e) {
                    return e.jsonPointer + "/type";
                  }),
                d = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxComponentPerScreenErrorMsg(
                  i,
                  s,
                  c.length,
                );
              r.push(
                this.getError(
                  d,
                  c,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .COMPONENT_TYPE_MAX_NUMBER_PER_SCREEN,
                ),
              );
            }
          }
          return r;
        }),
        (n.countComponentMaxCount = function (t, n) {
          var e = this,
            a = s(n);
          return (
            t.forEach(function (t) {
              var i = t.type;
              if (
                i === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF
              ) {
                var l,
                  d = r("unsafeCast")(t),
                  m = e.countComponentMaxCount(d.then, n),
                  p = e.countComponentMaxCount(
                    (l = d.else) != null ? l : [],
                    n,
                  ),
                  _ = u(m, p);
                a = c(a, _);
              } else if (
                i ===
                o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH
              ) {
                var f = r("unsafeCast")(t),
                  g = s(n);
                (Object.entries(f.cases).forEach(function (t) {
                  var r = t[0],
                    o = t[1];
                  g = u(g, e.countComponentMaxCount(o, n));
                }),
                  (a = c(a, g)));
              } else if (
                i === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
              ) {
                var h = r("unsafeCast")(t),
                  y = e.countComponentMaxCount(h.children, n);
                a = c(a, y);
              } else if (n.includes(i)) {
                var C,
                  b = (C = a.get(i)) != null ? C : 0;
                a.set(i, b + 1);
              }
            }),
            a
          );
        }),
        (n.getMaxAllowedComponentCountPerScreen = function () {
          return o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          t.set(e, 0);
        }),
        t
      );
    }
    function u(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, r) {
          var o;
          n.set(r, Math.max(e, (o = t.get(r)) != null ? o : 0));
        }),
        n
      );
    }
    function c(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, r) {
          var o;
          n.set(r, e + ((o = t.get(r)) != null ? o : 0));
        }),
        n
      );
    }
    l.WAFlowJSONComponentTypePerScreenValidatorV500 = e;
  },
  98,
);
