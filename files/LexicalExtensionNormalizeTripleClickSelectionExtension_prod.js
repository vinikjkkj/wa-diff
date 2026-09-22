__d(
  "LexicalExtensionNormalizeTripleClickSelectionExtension.prod",
  ["Lexical", "LexicalExtensionNamedSignals", "LexicalExtensionSignals"],
  function $module_LexicalExtensionNormalizeTripleClickSelectionExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var n = new Set([
        require("Lexical").SKIP_SELECTION_FOCUS_TAG,
        require("Lexical").SKIP_SCROLL_INTO_VIEW_TAG,
      ]),
      r = {
        build: function build(e, t, n) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
          $fixFocusOverselection: function $fixFocusOverselection() {
            var i = require("Lexical").$getSelection();
            if (require("Lexical").$isRangeSelection(i) && !i.isCollapsed()) {
              var _t = require("Lexical").$getCaretRangeInDirection(
                require("Lexical").$caretRangeFromSelection(i),
                "next",
              );
              var _r = _t.focus;
              for (
                require("Lexical").$isTextPointCaret(_r) &&
                  _t.anchor.origin !== _r.origin &&
                  0 === _r.offset &&
                  (_r = require("Lexical").$rewindSiblingCaret(
                    _r.getSiblingCaret(),
                  )),
                  require("Lexical").$isSiblingCaret(_r) &&
                    _t.anchor.origin !== _r.origin &&
                    require("Lexical").$isLineBreakNode(_r.origin) &&
                    (_r = require("Lexical").$rewindSiblingCaret(_r));
                require("Lexical").$isChildCaret(_r) &&
                _t.anchor.origin !== _r.origin;
              )
                _r = require("Lexical").$rewindSiblingCaret(
                  require("Lexical").$getSiblingCaret(_r.origin, "next"),
                );
              if (
                (require("Lexical").$isSiblingCaret(_r) &&
                  require("Lexical").$isElementNode(_r.origin) &&
                  (_r = require("Lexical")
                    .$normalizeCaret(
                      require("Lexical").$getChildCaret(_r.origin, "previous"),
                    )
                    .getFlipped()),
                (_r = require("Lexical").$normalizeCaret(_r)),
                !_r.isSamePointCaret(_t.focus))
              ) {
                var _i = require("Lexical").$setSelectionFromCaretRange(
                    require("Lexical").$getCaretRange(_t.anchor, _r),
                  ),
                  o = require("Lexical").$getEditor().getRootElement(),
                  a =
                    o &&
                    require("Lexical").getDOMSelection(
                      o.ownerDocument.defaultView,
                    );
                a &&
                  require("Lexical").$updateDOMSelection(
                    require("Lexical").$getPreviousSelection(),
                    _i,
                    require("Lexical").$getEditor(),
                    a,
                    n,
                    o,
                  );
              }
            }
          },
          dateNow: function dateNow() {
            return Date.now();
          },
          disabled: !1,
          thresholdMsec: 100,
        },
        name: "@lexical/NormalizeTripleClickSelection",
        register: function register(i, n, r) {
          return require("LexicalExtensionSignals").effect(function () {
            var t = r.getOutput();
            if (!t.disabled.value)
              return i.registerRootListener(function (n) {
                if (!n) return;
                var r = 0;
                var o = function o(e) {
                  if (e ? e.detail > 2 : r > 0) {
                    var _i2 = t.dateNow.peek()();
                    r =
                      (e && "mousedown" === e.type) ||
                      _i2 - r <= t.thresholdMsec.peek()
                        ? _i2
                        : 0;
                  }
                  return r;
                };
                return require("Lexical").mergeRegister(
                  i.registerCommand(
                    require("Lexical").SELECTION_CHANGE_COMMAND,
                    function () {
                      return (
                        o(null) && ((r = 0), t.$fixFocusOverselection.peek()()),
                        !1
                      );
                    },
                    require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL,
                  ),
                  require("Lexical").registerEventListeners(
                    n,
                    { mousedown: o, mouseup: o },
                    !0,
                  ),
                );
              });
          });
        },
      };
    exports.NormalizeTripleClickSelectionExtension = r;
  },
  null,
);
