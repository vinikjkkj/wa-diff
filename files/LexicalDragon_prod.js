__d(
  "LexicalDragon.prod",
  [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalExtensionWatchedSignal",
  ],
  function $module_LexicalDragon_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var o = {
        bold: "bold",
        italic: "italic",
        strikeThrough: "strikethrough",
        subscript: "subscript",
        superscript: "superscript",
        underline: "underline",
      },
      s = Symbol["for"]("@lexical/dragon/WindowState");
    function r(e, t, n) {
      var i = (function (e) {
        var t = e[s];
        return (
          void 0 === t &&
            ((t = {
              dispose: function dispose() {},
              editors: new Map(),
              installs: new Set(),
            }),
            (e[s] = t)),
          t
        );
      })(e);
      if (0 === i.installs.size) {
        var _t = c.bind(e);
        (e.addEventListener("message", _t, !0),
          (i.dispose = function () {
            e.removeEventListener("message", _t, !0);
          }));
      }
      if ((i.installs.add(t), n)) {
        var _e = i.editors.get(n) || new Set();
        (_e.add(t), i.editors.set(n, _e));
      }
      return a.bind(null, e, i, t, n);
    }
    function a(e, t, n, i) {
      if (i) {
        var _e2 = t.editors.get(i);
        _e2 && _e2["delete"](n) && 0 === _e2.size && t.editors["delete"](i);
      }
      t.installs["delete"](n) &&
        0 === t.installs.size &&
        (t.dispose(), delete e[s]);
    }
    function l(e) {
      return e && e.ownerDocument.defaultView;
    }
    function d(t) {
      var i = require("LexicalExtensionWatchedSignal").watchedSignal(
        function () {
          return l(t.getRootElement());
        },
        function (e) {
          return t.registerRootListener(function (t) {
            e.value = l(t);
          });
        },
      );
      return require("LexicalExtensionSignals").effect(function () {
        var e = i.value;
        if (e) return r(e, Symbol("@lexical/dragon/editorInstall"), t);
      });
    }
    function c(e) {
      if (e.origin !== this.location.origin) return;
      var t = (function (e) {
        var t = e[s];
        if (void 0 === t) return null;
        var n = require("Lexical").getEditorPropertyFromDOMNode(
          require("Lexical").getActiveElementDeep(e.document),
        );
        return require("Lexical").isLexicalEditor(n) && t.editors.has(n)
          ? n
          : null;
      })(this);
      if (null === t) return;
      var n = e.data;
      if ("string" == typeof n) {
        var _s;
        try {
          _s = JSON.parse(n);
        } catch (e) {
          return;
        }
        if (
          _s &&
          "nuanria_messaging" === _s.protocol &&
          "request" === _s.type
        ) {
          var _n = _s.payload;
          if (_n && "makeChanges" === _n.functionId) {
            var _s2 = _n.args;
            if (Array.isArray(_s2)) {
              var _n2 = _s2[0],
                _r = _s2[1],
                _a = _s2[2],
                _l = _s2[3],
                _d = _s2[4],
                _c = _s2[5];
              if (
                ![_n2, _r, _l, _d].every(Number.isFinite) ||
                ("string" != typeof _a && -1 !== _a)
              )
                return;
              t.update(function () {
                var t = require("Lexical").$getSelection();
                if (require("Lexical").$isRangeSelection(t)) {
                  var _s3 = t.anchor;
                  var _u = _s3.getNode(),
                    g = 0,
                    f = 0;
                  if (
                    (require("Lexical").$isTextNode(_u) &&
                      _n2 >= 0 &&
                      _r >= 0 &&
                      ((g = _n2),
                      (f = _n2 + _r),
                      t.setTextNodeRange(_u, g, _u, f)),
                    "string" != typeof _a ||
                      (g === f && "" === _a) ||
                      (t.insertRawText(_a), (_u = _s3.getNode())),
                    require("Lexical").$isTextNode(_u))
                  ) {
                    var _e3 = _u.getTextContentSize();
                    ((g = Math.min(Math.max(_l, 0), _e3)),
                      (f = _l < 0 || _d < 0 ? g : Math.min(_l + _d, _e3)),
                      t.setTextNodeRange(_u, g, _u, f));
                  }
                  if ("string" == typeof _c && _d > 0 && !t.isCollapsed()) {
                    var _e4 = o[_c];
                    void 0 !== _e4 && t.formatText(_e4);
                  }
                  e.stopImmediatePropagation();
                }
              });
            }
          }
        }
      }
    }
    var u = {
      build: function build(e, n, i) {
        return require("LexicalExtensionNamedSignals").namedSignals(n);
      },
      config: { disabled: "undefined" == typeof window },
      name: "LexicalDragon",
      register: function register(t, n, i) {
        return require("LexicalExtensionSignals").effect(function () {
          return i.getOutput().disabled.value ? void 0 : d(t);
        });
      },
    };
    ((exports.DragonExtension = u),
      (exports.installDragonSupport = function (e) {
        if (e === void 0) {
          e = (function () {
            return "undefined" != typeof window ? window : void 0;
          })();
        }
        return e
          ? r(e, Symbol("@lexical/dragon/globalInstall"), void 0)
          : function () {};
      }),
      (exports.registerDragonSupport = d));
  },
  null,
);
