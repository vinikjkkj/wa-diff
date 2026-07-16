__d(
  "LexicalPlainText.prod",
  [
    "Lexical",
    "LexicalClipboard",
    "LexicalDragon",
    "LexicalExtension",
    "LexicalSelection",
    "LexicalUtils",
  ],
  function $module_LexicalPlainText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function a(t, n) {
      n.update(function () {
        if (null !== t) {
          var _r = require("LexicalUtils").objectKlassEquals(t, KeyboardEvent)
              ? null
              : t.clipboardData,
            _a = require("Lexical").$getSelection();
          if (null !== _a && !_a.isCollapsed() && null != _r) {
            t.preventDefault();
            var _i = require("LexicalClipboard").$getHtmlContent(n);
            (null !== _i && _r.setData("text/html", _i),
              _r.setData("text/plain", _a.getTextContent()));
          }
        }
      });
    }
    function l(t) {
      var _require_Lexical;
      return (_require_Lexical = require("Lexical")).mergeRegister(
        t.registerCommand(
          _require_Lexical.DELETE_CHARACTER_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) &&
              (t.deleteCharacter(e), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.DELETE_WORD_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) && (t.deleteWord(e), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.DELETE_LINE_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) && (t.deleteLine(e), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.CONTROLLED_TEXT_INSERTION_COMMAND,
          function (t) {
            var n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n)) return !1;
            if ("string" == typeof t) n.insertText(t);
            else {
              var _r2 = t.dataTransfer;
              if (null != _r2)
                require("LexicalClipboard").$insertDataTransferForPlainText(
                  _r2,
                  n,
                );
              else {
                var _e = t.data;
                _e && n.insertText(_e);
              }
            }
            return !0;
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.REMOVE_TEXT_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(e) && (e.removeText(), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.INSERT_LINE_BREAK_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(t) &&
              (t.insertLineBreak(e), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(e) &&
              (e.insertLineBreak(), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.KEY_ARROW_LEFT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = e,
              i = n.shiftKey;
            return (
              !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !0,
              ) &&
              (n.preventDefault(),
              require("LexicalSelection").$moveCharacter(t, i, !0),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.KEY_ARROW_RIGHT_COMMAND,
          function (e) {
            var t = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(t)) return !1;
            var n = e,
              i = n.shiftKey;
            return (
              !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !1,
              ) &&
              (n.preventDefault(),
              require("LexicalSelection").$moveCharacter(t, i, !1),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.KEY_BACKSPACE_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(n) &&
              (!require("Lexical").IS_IOS ||
                !require("Lexical").CAN_USE_BEFORE_INPUT) &&
              (e.preventDefault(),
              t.dispatchCommand(
                require("Lexical").DELETE_CHARACTER_COMMAND,
                !0,
              ))
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.KEY_DELETE_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(n) &&
              (e.preventDefault(),
              t.dispatchCommand(
                require("Lexical").DELETE_CHARACTER_COMMAND,
                !1,
              ))
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.KEY_ENTER_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n)) return !1;
            if (null !== e) {
              if (
                (require("Lexical").IS_IOS ||
                  require("Lexical").IS_SAFARI ||
                  require("Lexical").IS_APPLE_WEBKIT) &&
                require("Lexical").CAN_USE_BEFORE_INPUT
              )
                return !1;
              e.preventDefault();
            }
            return t.dispatchCommand(
              require("Lexical").INSERT_LINE_BREAK_COMMAND,
              !1,
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.SELECT_ALL_COMMAND,
          function () {
            var e = require("Lexical").$getSelection();
            return (
              require("Lexical").$selectAll(
                require("Lexical").$isRangeSelection(e) &&
                  null !== require("Lexical").$getSlotFrame(e.anchor.getNode())
                  ? e
                  : null,
              ),
              !0
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.COPY_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (a(e, t), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.CUT_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(n) &&
              ((function (e, t) {
                (a(e, t),
                  t.update(
                    function () {
                      var e = require("Lexical").$getSelection();
                      require("Lexical").$isRangeSelection(e) && e.removeText();
                    },
                    { tag: require("Lexical").CUT_TAG },
                  ));
              })(e, t),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.PASTE_COMMAND,
          function (n) {
            var r = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(r) &&
              ((function (t, n) {
                (t.preventDefault(),
                  n.update(
                    function () {
                      var n = require("Lexical").$getSelection(),
                        r = require("LexicalUtils").objectKlassEquals(
                          t,
                          ClipboardEvent,
                        )
                          ? t.clipboardData
                          : null;
                      null != r &&
                        require("Lexical").$isRangeSelection(n) &&
                        require("LexicalClipboard").$insertDataTransferForPlainText(
                          r,
                          n,
                        );
                    },
                    { tag: require("Lexical").PASTE_TAG },
                  ));
              })(n, t),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.DROP_COMMAND,
          function (n) {
            return require("LexicalClipboard").$handlePlainTextDrop(n, t);
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.DRAGSTART_COMMAND,
          function (n) {
            var r = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(r) &&
              (r.isCollapsed() ||
                null === n.dataTransfer ||
                require("LexicalClipboard").$writeDragSourceToDataTransfer(
                  n.dataTransfer,
                  t,
                ),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
      );
    }
    var s = require("Lexical").defineExtension({
      conflictsWith: ["LexicalRichText"],
      dependencies: [
        require("LexicalDragon").DragonExtension,
        require("LexicalExtension").NormalizeInlineElementsExtension,
        require("LexicalExtension").NormalizeTripleClickSelectionExtension,
      ],
      name: "LexicalPlainText",
      register: l,
    });
    ((exports.PlainTextExtension = s), (exports.registerPlainText = l));
  },
  null,
);
