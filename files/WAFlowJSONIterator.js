__d(
  "WAFlowJSONIterator",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "\n",
      u = " ",
      c = "{",
      d = "}",
      m = "[",
      p = "]",
      _ = ":",
      f = ",",
      g = '"',
      h = "\\",
      y = "	",
      C = new Set([e, u, d, f, p]),
      b = (function () {
        function t(e) {
          ((this.json = e),
            (this.index = 0),
            (this.line = 1),
            (this.column = 1));
        }
        var n = t.prototype;
        return (
          (n.hasNext = function () {
            return this.index < this.json.length - 1;
          }),
          (n.currentChar = function () {
            return this.json[this.index];
          }),
          (n.increasePosition = function () {
            (this.hasNext() || s(0, 78839),
              this.json[this.index] === e
                ? (this.line++, (this.column = 1))
                : this.column++,
              this.index++);
          }),
          (n.moveToNextChar = function (t, n) {
            for (
              n === void 0 && (n = !0), n && this.increasePosition();
              this.hasNext() && t.indexOf(this.currentChar()) === -1;
            )
              this.increasePosition();
            return this.currentPosition();
          }),
          (n.moveToNextCharNotInSet = function (t, n) {
            for (
              n === void 0 && (n = !0), n && this.increasePosition();
              this.hasNext() && t.indexOf(this.currentChar()) !== -1;
            )
              this.increasePosition();
            return this.currentPosition();
          }),
          (n.moveToStringClose = function () {
            for (var e = !1; this.hasNext(); ) {
              this.increasePosition();
              var t = this.currentChar();
              if (t === g && !e) break;
              e = t === h && !e;
            }
            return this.currentPosition();
          }),
          (n.moveToNextValueEndPostion = function (t) {
            for (
              t === void 0 && (t = !0), t && this.increasePosition();
              this.index + 1 < this.json.length &&
              !C.has(this.json[this.index + 1]);
            )
              this.increasePosition();
            return this.currentPosition();
          }),
          (n.currentPosition = function () {
            return { index: this.index, line: this.line, column: this.column };
          }),
          t
        );
      })();
    ((l.WA_FLOW_JSON_NEW_LINE = e),
      (l.WA_FLOW_JSON_SPACE = u),
      (l.WA_FLOW_JSON_OBJ_START_SYMBOL = c),
      (l.WA_FLOW_JSON_OBJ_END_SYMBOL = d),
      (l.WA_FLOW_JSON_ARRAY_START_SYMBOL = m),
      (l.WA_FLOW_JSON_ARRAY_END_SYMBOL = p),
      (l.WA_FLOW_JSON_KEY_VALUE_SEPARATOR = _),
      (l.WA_FLOW_JSON_COMMA = f),
      (l.WA_FLOW_JSON_DOUBLE_QUOTE = g),
      (l.WA_FLOW_JSON_TAB = y),
      (l.WAFlowJSONIterator = b));
  },
  98,
);
