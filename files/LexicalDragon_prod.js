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
    function n(e) {
      var n = window.location.origin,
        o = function o(_o) {
          if (_o.origin !== n) return;
          var i = e.getRootElement();
          if (document.activeElement !== i) return;
          var s = _o.data;
          if ("string" == typeof s) {
            var _n;
            try {
              _n = JSON.parse(s);
            } catch (e) {
              return;
            }
            if (
              _n &&
              "nuanria_messaging" === _n.protocol &&
              "request" === _n.type
            ) {
              var _i = _n.payload;
              if (_i && "makeChanges" === _i.functionId) {
                var _n2 = _i.args;
                if (_n2) {
                  var _i2 = _n2[0],
                    _s = _n2[1],
                    a = _n2[2],
                    r = _n2[3],
                    d = _n2[4];
                  e.update(function () {
                    var e = require("Lexical").$getSelection();
                    if (require("Lexical").$isRangeSelection(e)) {
                      var _n3 = e.anchor;
                      var c = _n3.getNode(),
                        g = 0,
                        u = 0;
                      if (
                        (require("Lexical").$isTextNode(c) &&
                          _i2 >= 0 &&
                          _s >= 0 &&
                          ((g = _i2),
                          (u = _i2 + _s),
                          e.setTextNodeRange(c, g, c, u)),
                        (g === u && "" === a) ||
                          (e.insertRawText(a), (c = _n3.getNode())),
                        require("Lexical").$isTextNode(c))
                      ) {
                        ((g = r), (u = r + d));
                        var _t = c.getTextContentSize();
                        ((g = g > _t ? _t : g),
                          (u = u > _t ? _t : u),
                          e.setTextNodeRange(c, g, c, u));
                      }
                      _o.stopImmediatePropagation();
                    }
                  });
                }
              }
            }
          }
        };
      return (
        window.addEventListener("message", o, !0),
        function () {
          window.removeEventListener("message", o, !0);
        }
      );
    }
    var o = require("Lexical").defineExtension({
      build: function build(t, n, o) {
        return require("LexicalExtension").namedSignals(n);
      },
      config: require("Lexical").safeCast({
        disabled: "undefined" == typeof window,
      }),
      name: "LexicalDragon",
      register: function register(t, o, i) {
        return require("LexicalExtension").effect(function () {
          return i.getOutput().disabled.value ? void 0 : n(t);
        });
      },
    });
    ((exports.DragonExtension = o), (exports.registerDragonSupport = n));
  },
  null,
);
