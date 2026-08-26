__d(
  "LexicalDragon.prod",
  ["Lexical", "LexicalExtension"],
  function $module_LexicalDragon_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var n = {
        bold: "bold",
        italic: "italic",
        strikeThrough: "strikethrough",
        subscript: "subscript",
        superscript: "superscript",
        underline: "underline",
      },
      i = Symbol["for"]("@lexical/dragon/WindowState");
    function o(e, t, n) {
      var o = (function (e) {
        var t = e[i];
        return (
          void 0 === t &&
            ((t = {
              dispose: function dispose() {},
              editors: new Map(),
              installs: new Set(),
            }),
            (e[i] = t)),
          t
        );
      })(e);
      if (0 === o.installs.size) {
        var _t = l.bind(e);
        (e.addEventListener("message", _t, !0),
          (o.dispose = function () {
            e.removeEventListener("message", _t, !0);
          }));
      }
      if ((o.installs.add(t), n)) {
        var _e = o.editors.get(n) || new Set();
        (_e.add(t), o.editors.set(n, _e));
      }
      return s.bind(null, e, o, t, n);
    }
    function s(e, t, n, o) {
      if (o) {
        var _e2 = t.editors.get(o);
        _e2 && _e2["delete"](n) && 0 === _e2.size && t.editors["delete"](o);
      }
      t.installs["delete"](n) &&
        0 === t.installs.size &&
        (t.dispose(), delete e[i]);
    }
    function r(e) {
      return e && e.ownerDocument.defaultView;
    }
    function a(t) {
      var n = require("LexicalExtension").watchedSignal(
        function () {
          return r(t.getRootElement());
        },
        function (e) {
          return t.registerRootListener(function (t) {
            e.value = r(t);
          });
        },
      );
      return require("LexicalExtension").effect(function () {
        var e = n.value;
        if (e) return o(e, Symbol("@lexical/dragon/editorInstall"), t);
      });
    }
    function l(e) {
      if (e.origin !== this.location.origin) return;
      var o = (function (e) {
        var n = e[i];
        if (void 0 === n) return null;
        var o = require("Lexical").getEditorPropertyFromDOMNode(
          require("Lexical").getActiveElementDeep(e.document),
        );
        return require("Lexical").isLexicalEditor(o) && n.editors.has(o)
          ? o
          : null;
      })(this);
      if (null === o) return;
      var s = e.data;
      if ("string" == typeof s) {
        var _i;
        try {
          _i = JSON.parse(s);
        } catch (e) {
          return;
        }
        if (
          _i &&
          "nuanria_messaging" === _i.protocol &&
          "request" === _i.type
        ) {
          var _s = _i.payload;
          if (_s && "makeChanges" === _s.functionId) {
            var _i2 = _s.args;
            if (Array.isArray(_i2)) {
              var _s2 = _i2[0],
                _r = _i2[1],
                _a = _i2[2],
                _l = _i2[3],
                _d = _i2[4],
                c = _i2[5];
              if (
                ![_s2, _r, _l, _d].every(Number.isFinite) ||
                ("string" != typeof _a && -1 !== _a)
              )
                return;
              o.update(function () {
                var i = require("Lexical").$getSelection();
                if (require("Lexical").$isRangeSelection(i)) {
                  var _o = i.anchor;
                  var u = _o.getNode(),
                    g = 0,
                    f = 0;
                  if (
                    (require("Lexical").$isTextNode(u) &&
                      _s2 >= 0 &&
                      _r >= 0 &&
                      ((g = _s2),
                      (f = _s2 + _r),
                      i.setTextNodeRange(u, g, u, f)),
                    "string" != typeof _a ||
                      (g === f && "" === _a) ||
                      (i.insertRawText(_a), (u = _o.getNode())),
                    require("Lexical").$isTextNode(u))
                  ) {
                    var _e3 = u.getTextContentSize();
                    ((g = Math.min(Math.max(_l, 0), _e3)),
                      (f = _l < 0 || _d < 0 ? g : Math.min(_l + _d, _e3)),
                      i.setTextNodeRange(u, g, u, f));
                  }
                  if ("string" == typeof c && _d > 0 && !i.isCollapsed()) {
                    var _e4 = n[c];
                    void 0 !== _e4 && i.formatText(_e4);
                  }
                  e.stopImmediatePropagation();
                }
              });
            }
          }
        }
      }
    }
    var d = {
      build: function build(t, n, i) {
        return require("LexicalExtension").namedSignals(n);
      },
      config: { disabled: "undefined" == typeof window },
      name: "LexicalDragon",
      register: function register(t, n, i) {
        return require("LexicalExtension").effect(function () {
          return i.getOutput().disabled.value ? void 0 : a(t);
        });
      },
    };
    ((exports.DragonExtension = d),
      (exports.installDragonSupport = function (e) {
        if (e === void 0) {
          e = (function () {
            return "undefined" != typeof window ? window : void 0;
          })();
        }
        return e
          ? o(e, Symbol("@lexical/dragon/globalInstall"), void 0)
          : function () {};
      }),
      (exports.registerDragonSupport = a));
  },
  null,
);
