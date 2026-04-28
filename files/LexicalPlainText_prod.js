__d(
  "LexicalPlainText.prod",
  [
    "Lexical",
    "LexicalClipboard",
    "LexicalDragon",
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
    var o =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      a = o && "documentMode" in document ? document.documentMode : null,
      s = o && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      l =
        !(!o || !("InputEvent" in window) || a) &&
        "getTargetRanges" in new window.InputEvent("input"),
      c = o && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      R = o && /Android/.test(navigator.userAgent),
      D = o && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !R,
      O = o && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      C = o && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && s && !O;
    function T(t, n) {
      n.update(function () {
        if (null !== t) {
          var _o = require("LexicalUtils").objectKlassEquals(t, KeyboardEvent)
              ? null
              : t.clipboardData,
            _a = require("Lexical").$getSelection();
          if (null !== _a && !_a.isCollapsed() && null != _o) {
            t.preventDefault();
            var _r = require("LexicalClipboard").$getHtmlContent(n);
            (null !== _r && _o.setData("text/html", _r),
              _o.setData("text/plain", _a.getTextContent()));
          }
        }
      });
    }
    function g(t) {
      var _require_Lexical;
      return require("LexicalUtils").mergeRegister(
        t.registerCommand(
          (_require_Lexical = require("Lexical")).DELETE_CHARACTER_COMMAND,
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
            var r = e,
              o = r.shiftKey;
            return (
              !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !0,
              ) &&
              (r.preventDefault(),
              require("LexicalSelection").$moveCharacter(t, o, !0),
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
            var r = e,
              o = r.shiftKey;
            return (
              !!require("LexicalSelection").$shouldOverrideDefaultCharacterSelection(
                t,
                !1,
              ) &&
              (r.preventDefault(),
              require("LexicalSelection").$moveCharacter(t, o, !1),
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
              (!c || "ko-KR" !== navigator.language) &&
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
              if ((c || D || C) && l) return !1;
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
            return (require("Lexical").$selectAll(), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.COPY_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            return !!require("Lexical").$isRangeSelection(n) && (T(e, t), !0);
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
                (T(e, t),
                  t.update(function () {
                    var e = require("Lexical").$getSelection();
                    require("Lexical").$isRangeSelection(e) && e.removeText();
                  }));
              })(e, t),
              !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        t.registerCommand(
          _require_Lexical.PASTE_COMMAND,
          function (n) {
            var o = require("Lexical").$getSelection();
            return (
              !!require("Lexical").$isRangeSelection(o) &&
              ((function (t, n) {
                (t.preventDefault(),
                  n.update(
                    function () {
                      var n = require("Lexical").$getSelection(),
                        o = require("LexicalUtils").objectKlassEquals(
                          t,
                          ClipboardEvent,
                        )
                          ? t.clipboardData
                          : null;
                      null != o &&
                        require("Lexical").$isRangeSelection(n) &&
                        require("LexicalClipboard").$insertDataTransferForPlainText(
                          o,
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
    var M = require("Lexical").defineExtension({
      conflictsWith: ["LexicalRichText"],
      dependencies: [require("LexicalDragon").DragonExtension],
      name: "LexicalPlainText",
      register: g,
    });
    ((exports.PlainTextExtension = M), (exports.registerPlainText = g));
  },
  null,
);
