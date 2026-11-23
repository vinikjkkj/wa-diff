__d(
  "WAFlowJSONLineColumnPointerUtil",
  [
    "WAFlowJSONIterator",
    "WAFlowJSONValidationResultUtil",
    "err",
    "isPlainObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = JSON.parse(e);
        if (!r("isPlainObject")(t)) throw r("err")("JSON is not an object");
      } catch (e) {
        return new Map([
          [
            "",
            {
              value: o(
                "WAFlowJSONValidationResultUtil",
              ).getWAFlowJSONDefaultErrorPointer(),
            },
          ],
        ]);
      }
      var n = new (o("WAFlowJSONIterator").WAFlowJSONIterator)(e),
        a = new Map(),
        i = s("", n, a);
      return (a.set("", { value: i }), a);
    }
    function s(e, t, n) {
      for (
        var r = t.moveToNextChar(
          [o("WAFlowJSONIterator").WA_FLOW_JSON_OBJ_START_SYMBOL],
          !1,
        );
        t.hasNext();
      ) {
        for (var a = null, i = null, l = null; t.hasNext(); ) {
          var s = t.moveToNextChar([
            o("WAFlowJSONIterator").WA_FLOW_JSON_DOUBLE_QUOTE,
            o("WAFlowJSONIterator").WA_FLOW_JSON_OBJ_END_SYMBOL,
          ]);
          if (
            t.currentChar() ===
            o("WAFlowJSONIterator").WA_FLOW_JSON_DOUBLE_QUOTE
          ) {
            ((i = s),
              (l = t.moveToStringClose()),
              (a = JSON.parse(t.json.substring(i.index, l.index + 1))));
            break;
          }
          if (
            t.currentChar() ===
            o("WAFlowJSONIterator").WA_FLOW_JSON_OBJ_END_SYMBOL
          )
            break;
        }
        if (a === null || i === null || l === null) break;
        var u = e + "/" + a,
          m = o("WAFlowJSONValidationResultUtil").convertToJsonPath(u),
          p = c(u, t, n, o("WAFlowJSONIterator").WA_FLOW_JSON_OBJ_END_SYMBOL);
        p && n.set(u, { key: d(i, l, m), value: p });
      }
      return d(
        r,
        t.currentPosition(),
        o("WAFlowJSONValidationResultUtil").convertToJsonPath(e),
      );
    }
    function u(e, t, n) {
      for (
        var r = t.moveToNextChar(
            [o("WAFlowJSONIterator").WA_FLOW_JSON_ARRAY_START_SYMBOL],
            !1,
          ),
          a = 0;
        t.hasNext();
      ) {
        var i = e + "/" + a,
          l = c(i, t, n, o("WAFlowJSONIterator").WA_FLOW_JSON_ARRAY_END_SYMBOL);
        if (!l) break;
        (n.set(i, { value: l }), a++);
      }
      return d(
        r,
        t.currentPosition(),
        o("WAFlowJSONValidationResultUtil").convertToJsonPath(e),
      );
    }
    function c(e, t, n, r) {
      var a,
        i = t.moveToNextCharNotInSet([
          (a = o("WAFlowJSONIterator")).WA_FLOW_JSON_KEY_VALUE_SEPARATOR,
          a.WA_FLOW_JSON_SPACE,
          a.WA_FLOW_JSON_NEW_LINE,
          a.WA_FLOW_JSON_COMMA,
          a.WA_FLOW_JSON_TAB,
        ]),
        l = t.currentChar();
      if (l === r) return null;
      if (l === o("WAFlowJSONIterator").WA_FLOW_JSON_OBJ_START_SYMBOL)
        return s(e, t, n);
      if (l === o("WAFlowJSONIterator").WA_FLOW_JSON_ARRAY_START_SYMBOL)
        return u(e, t, n);
      var c =
        l === o("WAFlowJSONIterator").WA_FLOW_JSON_DOUBLE_QUOTE
          ? t.moveToStringClose()
          : t.moveToNextValueEndPostion(!1);
      return d(i, c, o("WAFlowJSONValidationResultUtil").convertToJsonPath(e));
    }
    function d(e, t, n) {
      return {
        lineStart: e.line,
        lineEnd: t.line,
        columnStart: e.column,
        columnEnd: t.column + 1,
        path: n,
      };
    }
    l.getWAFlowJSONLineColumnPointerData = e;
  },
  98,
);
