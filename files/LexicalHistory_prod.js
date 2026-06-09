__d(
  "LexicalHistory.prod",
  ["Lexical", "LexicalExtension", "LexicalUtils"],
  function $module_LexicalHistory_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    function o(e, t, o, r, i) {
      if (null === e || (0 === o.size && 0 === r.size && !i)) return 0;
      var a = t._selection,
        s = e._selection;
      if (i) return 1;
      if (
        !(
          require("Lexical").$isRangeSelection(a) &&
          require("Lexical").$isRangeSelection(s) &&
          s.isCollapsed() &&
          a.isCollapsed()
        )
      )
        return 0;
      var l = (function (e, t, o) {
        var r = e._nodeMap,
          i = [];
        for (var _e of t) {
          var _t = r.get(_e);
          void 0 !== _t && i.push(_t);
        }
        for (var _ref2 of o) {
          var _e2 = _ref2[0];
          var _t2 = _ref2[1];
          {
            if (!_t2) continue;
            var _o = r.get(_e2);
            void 0 === _o || require("Lexical").$isRootNode(_o) || i.push(_o);
          }
        }
        return i;
      })(t, o, r);
      if (0 === l.length) return 0;
      if (l.length > 1) {
        var _o2 = t._nodeMap,
          _r = _o2.get(a.anchor.key),
          _i = _o2.get(s.anchor.key);
        return _r &&
          _i &&
          !e._nodeMap.has(_r.__key) &&
          require("Lexical").$isTextNode(_r) &&
          1 === _r.__text.length &&
          1 === a.anchor.offset
          ? 2
          : 0;
      }
      var d = l[0],
        u = e._nodeMap.get(d.__key);
      if (
        !require("Lexical").$isTextNode(u) ||
        !require("Lexical").$isTextNode(d) ||
        u.__mode !== d.__mode
      )
        return 0;
      var c = u.__text,
        _ = d.__text;
      if (c === _) return 0;
      var f = a.anchor,
        p = s.anchor;
      if (f.key !== p.key || "text" !== f.type) return 0;
      var h = f.offset,
        g = p.offset,
        O = _.length - c.length;
      return 1 === O && g === h - 1
        ? 2
        : -1 === O && g === h + 1
          ? 3
          : -1 === O && g === h
            ? 4
            : 0;
    }
    function r(e, t, r) {
      var i = r(),
        a = 0,
        s = i,
        l = 0,
        d = null;
      return function (u, c, _, f, p, h) {
        var g = r();
        if (
          (h.has(require("Lexical").COMPOSITION_START_TAG) &&
            ((s = i), (l = a), (d = u)),
          h.has(require("Lexical").HISTORIC_TAG))
        )
          return ((a = 0), (i = g), 2);
        h.has(require("Lexical").COMPOSITION_END_TAG) &&
          d &&
          ((i = s), (a = l), (u = d));
        var O =
            h.has(require("Lexical").PASTE_TAG) ||
            h.has(require("Lexical").CUT_TAG)
              ? 0
              : o(u, c, f, p, e.isComposing()),
          S = (function () {
            var o = null === _ || _.editor === e,
              r = h.has(require("Lexical").HISTORY_PUSH_TAG);
            if (!r && o && h.has(require("Lexical").HISTORY_MERGE_TAG))
              return 0;
            if (1 === O) return 2;
            if (null === u) return 1;
            var s = c._selection;
            if (!(f.size > 0 || p.size > 0)) return null !== s ? 0 : 2;
            var l = "number" == typeof t ? t : t.peek();
            if (!1 === r && 0 !== O && O === a && g < i + l && o) return 0;
            if (1 === f.size) {
              if (
                (function (e, t, o) {
                  var r = t._nodeMap.get(e),
                    i = o._nodeMap.get(e),
                    a = t._selection,
                    s = o._selection;
                  return (
                    !(
                      (require("Lexical").$isRangeSelection(a) &&
                        require("Lexical").$isRangeSelection(s) &&
                        "element" === a.anchor.type &&
                        "element" === a.focus.type &&
                        "text" === s.anchor.type &&
                        "text" === s.focus.type) ||
                      !require("Lexical").$isTextNode(r) ||
                      !require("Lexical").$isTextNode(i) ||
                      r.__parent !== i.__parent
                    ) &&
                    JSON.stringify(
                      t.read(function () {
                        return r.exportJSON();
                      }),
                    ) ===
                      JSON.stringify(
                        o.read(function () {
                          return i.exportJSON();
                        }),
                      )
                  );
                })(Array.from(f)[0], u, c)
              )
                return 0;
            }
            return 1;
          })();
        return ((i = g), (a = O), S);
      };
    }
    function i(e, t) {
      ((e.undoStack = []), (e.redoStack = []), (e.current = null), t && t(e));
    }
    function a(e, o, a, s, l, d) {
      if (s === void 0) {
        s = Date.now;
      }
      if (d === void 0) {
        d = null;
      }
      var u = r(e, a, s),
        c = function c() {
          l && l(o);
        };
      return (
        c(),
        require("LexicalUtils").mergeRegister(
          e.registerCommand(
            require("Lexical").UNDO_COMMAND,
            function () {
              return (
                (function (e, t, o) {
                  var r = t.redoStack,
                    i = t.undoStack;
                  if (0 !== i.length) {
                    var _a = t.current,
                      _s = i.pop();
                    (null !== _a &&
                      (r.push(_a),
                      e.dispatchCommand(
                        require("Lexical").CAN_REDO_COMMAND,
                        !0,
                      )),
                      0 === i.length &&
                        e.dispatchCommand(
                          require("Lexical").CAN_UNDO_COMMAND,
                          !1,
                        ),
                      (t.current = _s || null),
                      o && o(t),
                      _s &&
                        _s.editor.setEditorState(_s.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, o, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").REDO_COMMAND,
            function () {
              return (
                (function (e, t, o) {
                  var r = t.redoStack,
                    i = t.undoStack;
                  if (0 !== r.length) {
                    var _a2 = t.current;
                    null !== _a2 &&
                      (i.push(_a2),
                      e.dispatchCommand(
                        require("Lexical").CAN_UNDO_COMMAND,
                        !0,
                      ));
                    var _s2 = r.pop();
                    (0 === r.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_REDO_COMMAND,
                        !1,
                      ),
                      (t.current = _s2 || null),
                      o && o(t),
                      _s2 &&
                        _s2.editor.setEditorState(_s2.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, o, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_EDITOR_COMMAND,
            function () {
              return (i(o, l), !1);
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_HISTORY_COMMAND,
            function () {
              return (
                i(o, l),
                e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1),
                e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !1),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerUpdateListener(function (_ref3) {
            var t = _ref3.editorState,
              r = _ref3.prevEditorState,
              i = _ref3.dirtyLeaves,
              a = _ref3.dirtyElements,
              s = _ref3.tags;
            var l = o.current,
              _ = o.redoStack,
              f = o.undoStack,
              p = null === l ? null : l.editorState;
            if (null !== l && t === p) return;
            var h = u(r, t, l, i, a, s);
            if (1 === h) {
              if (
                (0 !== _.length &&
                  ((o.redoStack = []),
                  e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1)),
                null !== l)
              ) {
                f.push(babelHelpers["extends"]({}, l));
                var _t3 = "number" == typeof d || null === d ? d : d.peek();
                (null !== _t3 && f.length > _t3 && f.splice(0, f.length - _t3),
                  e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !0));
              }
            } else if (2 === h) return;
            ((o.current = { editor: e, editorState: t }), c());
          }),
        )
      );
    }
    function s() {
      return { current: null, redoStack: [], undoStack: [] };
    }
    var l = (_require_Lexical = require("Lexical")).defineExtension({
      build: function build(t, _ref4, s) {
        var n = _ref4.delay,
          o = _ref4.createInitialHistoryState,
          r = _ref4.disabled,
          i = _ref4.maxDepth,
          a = _ref4.now;
        return babelHelpers["extends"](
          {},
          require("LexicalExtension").namedSignals({
            delay: n,
            disabled: r,
            historyState: o(t),
            maxDepth: i,
            now: a,
          }),
          s.getInitResult(),
        );
      },
      config: _require_Lexical.safeCast({
        createInitialHistoryState: s,
        delay: 300,
        disabled: "undefined" == typeof window,
        maxDepth: null,
        now: Date.now,
      }),
      init: function init() {
        return {
          canRedo: require("LexicalExtension").signal(!1),
          canUndo: require("LexicalExtension").signal(!1),
        };
      },
      name: "@lexical/history/History",
      register: function register(t, n, o) {
        var _o$getInitResult = o.getInitResult(),
          r = _o$getInitResult.canUndo,
          i = _o$getInitResult.canRedo,
          s = o.getOutput(),
          l = function l(t) {
            return require("LexicalExtension").batch(function () {
              ((r.value = null != t && t.undoStack.length > 0),
                (i.value = null != t && t.redoStack.length > 0));
            });
          };
        return require("LexicalExtension").effect(function () {
          if (!s.disabled.value)
            return a(
              t,
              s.historyState.value,
              s.delay,
              function () {
                return s.now.peek()();
              },
              l,
              s.maxDepth,
            );
          l(null);
        });
      },
    });
    var d = _require_Lexical.defineExtension({
      build: function build(t, _ref5) {
        var n = _ref5.disabled,
          o = _ref5.parentEditor;
        return require("LexicalExtension").namedSignals({
          disabled: n,
          parentEditor: o || t._parentEditor,
        });
      },
      config: _require_Lexical.safeCast({ disabled: !1, parentEditor: null }),
      dependencies: [_require_Lexical.configExtension(l, { disabled: !0 })],
      name: "@lexical/history/SharedHistory",
      register: function register(t, n, o) {
        return require("LexicalExtension").effect(function () {
          var _o$getOutput = o.getOutput(),
            t = _o$getOutput.disabled,
            n = _o$getOutput.parentEditor;
          if (!t.value) {
            var _o$getDependency = o.getDependency(l),
              _t4 = _o$getDependency.output,
              _r2 = (function (t) {
                return t
                  ? require("LexicalExtension").getPeerDependencyFromEditor(
                      t,
                      l.name,
                    )
                  : null;
              })(n.value);
            if (!_r2) return;
            var _i2 = _r2.output;
            require("LexicalExtension").batch(function () {
              ((_t4.delay.value = _i2.delay.value),
                (_t4.historyState.value = _i2.historyState.value),
                (_t4.now.value = _i2.now.value),
                (_t4.disabled.value = _i2.disabled.value));
            });
          }
        });
      },
    });
    ((exports.HistoryExtension = l),
      (exports.SharedHistoryExtension = d),
      (exports.createEmptyHistoryState = s),
      (exports.registerHistory = a));
  },
  null,
);
