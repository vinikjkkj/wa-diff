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
          var _e2 = _n.getChildren(),
            _r = _e2.length;
          for (var _n2 = 0; _n2 < _r; _n2++) {
            var _r2 = _e2[_n2];
            if (!require("Lexical").$isTextNode(_r2)) return !1;
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
          var _e3 = r.getNextSibling();
          if (null !== _e3) {
            r = _e3;
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
            var n = require("Lexical")
              .$createTextNode(e.getTextContent())
              .setFormat(e.getFormat())
              .setStyle(e.getStyle())
              .setDetail(e.getDetail());
            e.replace(n);
          };
        return [
          e.registerNodeTransform(require("Lexical").TextNode, function (e) {
            if (!e.isSimpleText()) return;
            var r,
              c = e.getPreviousSibling(),
              u = e.getTextContent(),
              f = e;
            if (require("Lexical").$isTextNode(c)) {
              var _t5 = c.getTextContent(),
                _r3 = n(_t5 + u);
              if (s(c)) {
                if (
                  null === _r3 ||
                  0 !==
                    (function (t) {
                      return t.getLatest().__mode;
                    })(c)
                )
                  return void l(c);
                {
                  var _n3 = _r3.end - _t5.length;
                  if (_n3 > 0) {
                    var _r4 = _t5 + u.slice(0, _n3);
                    if ((c.select(), c.setTextContent(_r4), _n3 === u.length))
                      e.remove();
                    else {
                      var _t6 = u.slice(_n3);
                      e.setTextContent(_t6);
                    }
                    return;
                  }
                }
              } else if (null === _r3 || _r3.start < _t5.length) return;
            }
            var a = 0;
            for (;;) {
              var _f$splitText, _f$splitText2;
              var _e4 = u;
              r = n(_e4);
              var d = null === r ? "" : _e4.slice(r.end);
              if (((u = d), "" === d)) {
                var _o = f.getNextSibling();
                if (require("Lexical").$isTextNode(_o)) {
                  var _t7 = _e4 + _o.getTextContent(),
                    _i = n(_t7);
                  if (null === _i) return void (s(_o) ? l(_o) : _o.markDirty());
                  if (null === r || _i.start !== r.start) return;
                }
              }
              if (null === r) return;
              if (
                0 === r.start &&
                require("Lexical").$isTextNode(c) &&
                c.isTextEntity()
              ) {
                a += r.end;
                continue;
              }
              var g = void 0;
              (0 === r.start
                ? ((_f$splitText = f.splitText(r.end)),
                  (g = _f$splitText[0]),
                  (f = _f$splitText[1]),
                  _f$splitText)
                : ((_f$splitText2 = f.splitText(r.start + a, r.end + a)),
                  (g = _f$splitText2[1]),
                  (f = _f$splitText2[2]),
                  _f$splitText2),
                void 0 === g && o(165, "nodeToReplace"));
              var x = i(g);
              if ((x.setFormat(g.getFormat()), g.replace(x), null == f)) return;
              ((a = 0), (c = x));
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
            var c = e.getNextSibling();
            require("Lexical").$isTextNode(c) &&
              c.isTextEntity() &&
              (l(c), s(e) && l(e));
          }),
        ];
      }));
  },
  null,
);
