__d(
  "LexicalHistory.prod",
  [
    "Lexical",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
  ],
  function $module_LexicalHistory_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function r(e, t, n, r, i) {
      if (null === e || (0 === n.size && 0 === r.size && !i)) return 0;
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
      var l = (function (e, t, n) {
        var r = e._nodeMap,
          i = [];
        for (var _e of t) {
          var _t = r.get(_e);
          void 0 !== _t && i.push(_t);
        }
        for (var _ref2 of n) {
          var _e2 = _ref2[0];
          var _t2 = _ref2[1];
          {
            if (!_t2) continue;
            var _n = r.get(_e2);
            void 0 === _n || require("Lexical").$isRootNode(_n) || i.push(_n);
          }
        }
        return i;
      })(t, n, r);
      if (0 === l.length) return 0;
      if (l.length > 1) {
        var _n2 = t._nodeMap,
          _r = _n2.get(a.anchor.key),
          _i = _n2.get(s.anchor.key);
        return _r &&
          _i &&
          !e._nodeMap.has(_r.__key) &&
          require("Lexical").$isTextNode(_r) &&
          1 === _r.__text.length &&
          1 === a.anchor.offset
          ? 2
          : 0;
      }
      var u = l[0],
        d = e._nodeMap.get(u.__key);
      if (
        !require("Lexical").$isTextNode(d) ||
        !require("Lexical").$isTextNode(u) ||
        d.__mode !== u.__mode
      )
        return 0;
      var c = d.__text,
        _ = u.__text;
      if (c === _) return 0;
      var p = a.anchor,
        f = s.anchor;
      if (p.key !== f.key || "text" !== p.type) return 0;
      var h = p.offset,
        g = f.offset,
        S = _.length - c.length;
      return 1 === S && g === h - 1
        ? 2
        : -1 === S && g === h + 1
          ? 3
          : -1 === S && g === h
            ? 4
            : 0;
    }
    function i(e, t, n) {
      var i = n(),
        a = 0,
        s = i,
        l = 0,
        u = null;
      return function (d, c, _, p, f, h) {
        var g = n();
        if (
          (h.has(require("Lexical").COMPOSITION_START_TAG) &&
            ((s = i), (l = a), (u = d)),
          h.has(require("Lexical").HISTORIC_TAG))
        )
          return ((a = 0), (i = g), 2);
        h.has(require("Lexical").COMPOSITION_END_TAG) &&
          u &&
          ((i = s), (a = l), (d = u));
        var S =
            h.has(require("Lexical").PASTE_TAG) ||
            h.has(require("Lexical").CUT_TAG)
              ? 0
              : r(d, c, p, f, e.isComposing()),
          O = (function () {
            var n = null === _ || _.editor === e,
              r = h.has(require("Lexical").HISTORY_PUSH_TAG);
            if (!r && n && h.has(require("Lexical").HISTORY_MERGE_TAG))
              return 0;
            if (1 === S) return 2;
            if (null === d) return 1;
            var s = c._selection;
            if (!(p.size > 0 || f.size > 0)) return null !== s ? 0 : 2;
            var l = "number" == typeof t ? t : t.peek();
            if (!1 === r && 0 !== S && S === a && g < i + l && n) return 0;
            if (1 === p.size) {
              if (
                (function (e, t, n) {
                  var r = t._nodeMap.get(e),
                    i = n._nodeMap.get(e),
                    a = t._selection,
                    s = n._selection;
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
                        n.read(function () {
                          return i.exportJSON();
                        }),
                      )
                  );
                })(Array.from(p)[0], d, c)
              )
                return 0;
            }
            return 1;
          })();
        return ((i = g), (a = S), O);
      };
    }
    function a(e, t) {
      if (null !== t && t.editor === e.editor) return t;
      var n = e.editor,
        o = n.getEditorState();
      return o.isEmpty() ? null : { editor: n, editorState: o };
    }
    function s(e, t) {
      ((e.undoStack = []), (e.redoStack = []), (e.current = null), t && t(e));
    }
    function l(e, t, n, r, l, u) {
      if (r === void 0) {
        r = Date.now;
      }
      if (u === void 0) {
        u = null;
      }
      var d = i(e, n, r),
        c = function c() {
          l && l(t);
        };
      return (
        c(),
        require("Lexical").mergeRegister(
          e.registerCommand(
            require("Lexical").UNDO_COMMAND,
            function () {
              return (
                (function (e, t, n) {
                  var r = t.redoStack,
                    i = t.undoStack;
                  if (0 !== i.length) {
                    var _s = t.current,
                      _l = i.pop();
                    if (_l) {
                      var _t3 = a(_l, _s);
                      null !== _t3 &&
                        (r.push(_t3),
                        e.dispatchCommand(
                          require("Lexical").CAN_REDO_COMMAND,
                          !0,
                        ));
                    }
                    (0 === i.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_UNDO_COMMAND,
                        !1,
                      ),
                      (t.current = _l || null),
                      n && n(t),
                      _l &&
                        _l.editor.setEditorState(_l.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, t, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").REDO_COMMAND,
            function () {
              return (
                (function (e, t, n) {
                  var r = t.redoStack,
                    i = t.undoStack;
                  if (0 !== r.length) {
                    var _s2 = t.current,
                      _l2 = r.pop();
                    if (_l2) {
                      var _t4 = a(_l2, _s2);
                      null !== _t4 &&
                        (i.push(_t4),
                        e.dispatchCommand(
                          require("Lexical").CAN_UNDO_COMMAND,
                          !0,
                        ));
                    }
                    (0 === r.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_REDO_COMMAND,
                        !1,
                      ),
                      (t.current = _l2 || null),
                      n && n(t),
                      _l2 &&
                        _l2.editor.setEditorState(_l2.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, t, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_EDITOR_COMMAND,
            function () {
              return (s(t, l), !1);
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_HISTORY_COMMAND,
            function () {
              return (
                s(t, l),
                e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1),
                e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !1),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerUpdateListener(function (_ref3) {
            var n = _ref3.editorState,
              r = _ref3.prevEditorState,
              i = _ref3.dirtyLeaves,
              a = _ref3.dirtyElements,
              s = _ref3.tags;
            var l = t.current,
              _ = t.redoStack,
              p = t.undoStack,
              f = null === l ? null : l.editorState;
            if (null !== l && n === f) return;
            var h = d(r, n, l, i, a, s);
            if (1 === h) {
              0 !== _.length &&
                ((t.redoStack = []),
                e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1));
              var _n3 = (function (e, t, n) {
                return null === n
                  ? null
                  : n.editor === e
                    ? babelHelpers["extends"]({}, n)
                    : t.isEmpty()
                      ? null
                      : { editor: e, editorState: t };
              })(e, r, l);
              if (null !== _n3) {
                p.push(_n3);
                var _t5 = "number" == typeof u || null === u ? u : u.peek();
                (null !== _t5 && p.length > _t5 && p.splice(0, p.length - _t5),
                  e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !0));
              }
            } else if (2 === h) return;
            ((t.current = { editor: e, editorState: n }), c());
          }),
        )
      );
    }
    function u() {
      return { current: null, redoStack: [], undoStack: [] };
    }
    var d = {
      build: function build(e, _ref4, s) {
        var t = _ref4.delay,
          o = _ref4.createInitialHistoryState,
          r = _ref4.disabled,
          i = _ref4.maxDepth,
          a = _ref4.now;
        return babelHelpers["extends"](
          {},
          require("LexicalExtensionNamedSignals").namedSignals({
            delay: t,
            disabled: r,
            historyState: o(e),
            maxDepth: i,
            now: a,
          }),
          s.getInitResult(),
        );
      },
      config: {
        createInitialHistoryState: u,
        delay: 300,
        disabled: "undefined" == typeof window,
        maxDepth: null,
        now: function now() {
          return Date.now();
        },
      },
      init: function init() {
        return {
          canRedo: require("LexicalExtensionSignals").signal(!1),
          canUndo: require("LexicalExtensionSignals").signal(!1),
        };
      },
      name: "@lexical/history/History",
      register: function register(t, n, o) {
        var _o$getInitResult = o.getInitResult(),
          r = _o$getInitResult.canUndo,
          i = _o$getInitResult.canRedo,
          a = o.getOutput(),
          s = function s(t) {
            return require("LexicalExtensionSignals").batch(function () {
              ((r.value = null != t && t.undoStack.length > 0),
                (i.value = null != t && t.redoStack.length > 0));
            });
          };
        return require("LexicalExtensionSignals").effect(function () {
          if (!a.disabled.value)
            return l(
              t,
              a.historyState.value,
              a.delay,
              function () {
                return a.now.peek()();
              },
              s,
              a.maxDepth,
            );
          s(null);
        });
      },
    };
    function c(e) {
      var n = e
        ? require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
            e,
            "@lexical/extension/HMR",
          )
        : void 0;
      return n ? n.output.restoreCount.value : 0;
    }
    var _ = {
      build: function build(e, _ref5) {
        var t = _ref5.disabled,
          o = _ref5.parentEditor;
        return require("LexicalExtensionNamedSignals").namedSignals({
          disabled: t,
          parentEditor: o || e._parentEditor,
        });
      },
      config: { disabled: !1, parentEditor: null },
      dependencies: [[d, { disabled: !0 }]],
      name: "@lexical/history/SharedHistory",
      register: function register(n, o, r) {
        return require("LexicalExtensionSignals").effect(function () {
          var _r$getOutput = r.getOutput(),
            o = _r$getOutput.disabled,
            i = _r$getOutput.parentEditor;
          if (!o.value) {
            var _r$getDependency = r.getDependency(d),
              _o = _r$getDependency.output;
            (c(n), c(i.value));
            var _a = (function (e) {
              return e
                ? require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
                    e,
                    d.name,
                  )
                : null;
            })(i.value);
            if (!_a) return;
            var _s3 = _a.output;
            require("LexicalExtensionSignals").batch(function () {
              ((_o.delay.value = _s3.delay.value),
                (_o.historyState.value = _s3.historyState.value),
                (_o.now.value = _s3.now.value),
                (_o.maxDepth.value = _s3.maxDepth.value),
                (_o.disabled.value = _s3.disabled.value));
            });
          }
        });
      },
    };
    ((exports.HistoryExtension = d),
      (exports.SharedHistoryExtension = _),
      (exports.createEmptyHistoryState = u),
      (exports.registerHistory = l));
  },
  null,
);
