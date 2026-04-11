__d(
  "LexicalText.prod",
  ["Lexical"],
  function $module_LexicalText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function e() {
      return require("Lexical").$getRoot().getTextContent();
    }
    function n(t, n) {
      if (n === void 0) {
        n = !0;
      }
      if (t) return !1;
      var r = e();
      return (n && (r = r.trim()), "" === r);
    }
    function r(e) {
      if (!n(e, !1)) return !1;
      var r = require("Lexical").$getRoot().getChildren(),
        o = r.length;
      if (o > 1) return !1;
      for (var _e = 0; _e < o; _e++) {
        var _n = r[_e];
        if (require("Lexical").$isDecoratorNode(_n)) return !1;
        if (require("Lexical").$isElementNode(_n)) {
          if (!require("Lexical").$isParagraphNode(_n)) return !1;
          if (0 !== _n.__indent) return !1;
          var _r = _n.getChildren(),
            _o = _r.length;
          for (var _n2 = 0; _n2 < _o; _n2++) {
            var _n3 = _r[_e];
            if (!require("Lexical").$isTextNode(_n3)) return !1;
          }
        }
      }
      return !0;
    }
    function o(t) {
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", t);
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      for (var _t of e) r.append("v", _t);
      throw (
        (n.search = r.toString()),
        Error(
          "Minified Lexical error #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    ((exports.$canShowPlaceholder = r),
      (exports.$canShowPlaceholderCurry = function (t) {
        return function () {
          return r(t);
        };
      }),
      (exports.$findTextIntersectionFromCharacters = function (e, n) {
        var r = e.getFirstChild(),
          o = 0;
        t: for (; null !== r; ) {
          if (require("Lexical").$isElementNode(r)) {
            var _t2 = r.getFirstChild();
            if (null !== _t2) {
              r = _t2;
              continue;
            }
          } else if (require("Lexical").$isTextNode(r)) {
            var _t3 = r.getTextContentSize();
            if (o + _t3 > n) return { node: r, offset: n - o };
            o += _t3;
          }
          var _e2 = r.getNextSibling();
          if (null !== _e2) {
            r = _e2;
            continue;
          }
          var i = r.getParent();
          for (; null !== i; ) {
            var _t4 = i.getNextSibling();
            if (null !== _t4) {
              r = _t4;
              continue t;
            }
            i = i.getParent();
          }
          break;
        }
        return null;
      }),
      (exports.$isRootTextContentEmpty = n),
      (exports.$isRootTextContentEmptyCurry = function (t, e) {
        return function () {
          return n(t, e);
        };
      }),
      (exports.$rootTextContent = e),
      (exports.registerLexicalTextEntity = function (e, n, r, i) {
        var s = function s(t) {
            return t instanceof r;
          },
          l = function l(e) {
            var n = require("Lexical").$createTextNode(e.getTextContent());
            (n.setFormat(e.getFormat()), e.replace(n));
          };
        return [
          e.registerNodeTransform(require("Lexical").TextNode, function (e) {
            if (!e.isSimpleText()) return;
            var r,
              u = e.getPreviousSibling(),
              c = e.getTextContent(),
              f = e;
            if (require("Lexical").$isTextNode(u)) {
              var _t5 = u.getTextContent(),
                _r2 = n(_t5 + c);
              if (s(u)) {
                if (
                  null === _r2 ||
                  0 !==
                    (function (t) {
                      return t.getLatest().__mode;
                    })(u)
                )
                  return void l(u);
                {
                  var _n4 = _r2.end - _t5.length;
                  if (_n4 > 0) {
                    var _r3 = _t5 + c.slice(0, _n4);
                    if ((u.select(), u.setTextContent(_r3), _n4 === c.length))
                      e.remove();
                    else {
                      var _t6 = c.slice(_n4);
                      e.setTextContent(_t6);
                    }
                    return;
                  }
                }
              } else if (null === _r2 || _r2.start < _t5.length) return;
            }
            var d = 0;
            for (;;) {
              var _f$splitText, _f$splitText2;
              r = n(c);
              var _e3 = void 0,
                a = null === r ? "" : c.slice(r.end);
              if (((c = a), "" === a)) {
                var _e4 = f.getNextSibling();
                if (require("Lexical").$isTextNode(_e4)) {
                  a = f.getTextContent() + _e4.getTextContent();
                  var _t7 = n(a);
                  if (null === _t7)
                    return void (s(_e4) ? l(_e4) : _e4.markDirty());
                  if (0 !== _t7.start) return;
                }
              }
              if (null === r) return;
              if (
                0 === r.start &&
                require("Lexical").$isTextNode(u) &&
                u.isTextEntity()
              ) {
                d += r.end;
                continue;
              }
              (0 === r.start
                ? ((_f$splitText = f.splitText(r.end)),
                  (_e3 = _f$splitText[0]),
                  (f = _f$splitText[1]),
                  _f$splitText)
                : ((_f$splitText2 = f.splitText(r.start + d, r.end + d)),
                  (_e3 = _f$splitText2[1]),
                  (f = _f$splitText2[2]),
                  _f$splitText2),
                void 0 === _e3 && o(165, "nodeToReplace"));
              var x = i(_e3);
              if ((x.setFormat(_e3.getFormat()), _e3.replace(x), null == f))
                return;
              ((d = 0), (u = x));
            }
          }),
          e.registerNodeTransform(r, function (e) {
            var r = e.getTextContent(),
              o = n(r);
            if (null === o || 0 !== o.start) return void l(e);
            if (r.length > o.end) return void e.splitText(o.end);
            var i = e.getPreviousSibling();
            require("Lexical").$isTextNode(i) &&
              i.isTextEntity() &&
              (l(i), l(e));
            var u = e.getNextSibling();
            require("Lexical").$isTextNode(u) &&
              u.isTextEntity() &&
              (l(u), s(e) && l(e));
          }),
        ];
      }));
  },
  null,
);
