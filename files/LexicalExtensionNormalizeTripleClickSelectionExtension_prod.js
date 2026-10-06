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
    var o = new Set([
        "Alt",
        "AltGraph",
        "CapsLock",
        "Control",
        "Fn",
        "Meta",
        "Shift",
      ]),
      i = new Set([
        require("Lexical").SKIP_SELECTION_FOCUS_TAG,
        require("Lexical").SKIP_SCROLL_INTO_VIEW_TAG,
      ]),
      r = {
        build: function build(e, t, o) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
          $fixFocusOverselection: function $fixFocusOverselection() {
            var n = require("Lexical").$getSelection();
            if (require("Lexical").$isRangeSelection(n) && !n.isCollapsed()) {
              var _t = require("Lexical").$getCaretRangeInDirection(
                require("Lexical").$caretRangeFromSelection(n),
                "next",
              );
              var _o = _t.focus;
              for (
                require("Lexical").$isTextPointCaret(_o) &&
                  _t.anchor.origin !== _o.origin &&
                  0 === _o.offset &&
                  (_o = require("Lexical").$rewindSiblingCaret(
                    _o.getSiblingCaret(),
                  )),
                  require("Lexical").$isSiblingCaret(_o) &&
                    _t.anchor.origin !== _o.origin &&
                    require("Lexical").$isLineBreakNode(_o.origin) &&
                    (_o = require("Lexical").$rewindSiblingCaret(_o));
                require("Lexical").$isChildCaret(_o) &&
                _t.anchor.origin !== _o.origin;
              )
                _o = require("Lexical").$rewindSiblingCaret(
                  require("Lexical").$getSiblingCaret(_o.origin, "next"),
                );
              if (
                (require("Lexical").$isSiblingCaret(_o) &&
                  require("Lexical").$isElementNode(_o.origin) &&
                  (_o = require("Lexical")
                    .$normalizeCaret(
                      require("Lexical").$getChildCaret(_o.origin, "previous"),
                    )
                    .getFlipped()),
                (_o = require("Lexical").$normalizeCaret(_o)),
                !_o.isSamePointCaret(_t.focus))
              ) {
                var _n = require("Lexical").$setSelectionFromCaretRange(
                    require("Lexical").$getCaretRange(_t.anchor, _o),
                  ),
                  _r = require("Lexical").$getEditor().getRootElement(),
                  l =
                    _r &&
                    require("Lexical").getDOMSelection(
                      _r.ownerDocument.defaultView,
                    );
                l &&
                  require("Lexical").$updateDOMSelection(
                    require("Lexical").$getPreviousSelection(),
                    _n,
                    require("Lexical").$getEditor(),
                    l,
                    i,
                    _r,
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
        register: function register(n, i, r) {
          return require("LexicalExtensionSignals").effect(function () {
            var t = r.getOutput();
            if (!t.disabled.value)
              return n.registerRootListener(function (i) {
                if (!i) return;
                var r = null,
                  l = null;
                var s = function s() {
                    ((r = null), (l = null));
                  },
                  a = function a() {
                    var n = require("Lexical").getDOMSelection(
                      i.ownerDocument.defaultView,
                    );
                    if (null === n)
                      return {
                        anchorNode: null,
                        anchorOffset: 0,
                        focusNode: null,
                        focusOffset: 0,
                      };
                    var _e$getDOMSelectionPoi =
                        require("Lexical").getDOMSelectionPoints(n, i),
                      t = _e$getDOMSelectionPoi.anchorNode,
                      o = _e$getDOMSelectionPoi.anchorOffset,
                      r = _e$getDOMSelectionPoi.focusNode,
                      l = _e$getDOMSelectionPoi.focusOffset;
                    return {
                      anchorNode: t,
                      anchorOffset: o,
                      focusNode: r,
                      focusOffset: l,
                    };
                  };
                return require("Lexical").mergeRegister(
                  n.registerCommand(
                    require("Lexical").SELECTION_CHANGE_COMMAND,
                    function () {
                      return (
                        null === r ||
                          (r.defaultPrevented
                            ? s()
                            : (function () {
                                  var t = require("Lexical").$getSelection(),
                                    o =
                                      require("Lexical").$createRangeSelectionFromDom(
                                        require("Lexical").getDOMSelection(
                                          i.ownerDocument.defaultView,
                                        ),
                                        n,
                                      );
                                  return (
                                    require("Lexical").$isRangeSelection(t) &&
                                    null !== o &&
                                    t.anchor.is(o.anchor) &&
                                    t.focus.is(o.focus)
                                  );
                                })()
                              ? (s(), t.$fixFocusOverselection.peek()())
                              : null === l && (l = a())),
                        !1
                      );
                    },
                    require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL,
                  ),
                  n.registerUpdateListener(function () {
                    var e, n;
                    null !== r &&
                      null !== l &&
                      (r.eventPhase === Event.NONE &&
                      ((e = l),
                      (n = a()),
                      e.anchorNode !== n.anchorNode ||
                        e.anchorOffset !== n.anchorOffset ||
                        e.focusNode !== n.focusNode ||
                        e.focusOffset !== n.focusOffset)
                        ? s()
                        : (l = null));
                  }),
                  require("Lexical").registerEventListeners(
                    i.ownerDocument,
                    {
                      keydown: function keydown(e) {
                        o.has(e.key) || s();
                      },
                      mousedown: function mousedown(e) {
                        (s(),
                          e.detail > 2 &&
                            e.composedPath().includes(i) &&
                            (r = e));
                      },
                      pointerdown: s,
                    },
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
