__d(
  "LexicalHistory.prod",
  ["Lexical", "LexicalExtension"],
  function $module_LexicalHistory_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function n(e, n, o, r, i) {
      if (null === e || (0 === o.size && 0 === r.size && !i)) return 0;
      var a = n._selection,
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
      var l = (function (e, n, o) {
        var r = e._nodeMap,
          i = [];
        for (var _e of n) {
          var _t = r.get(_e);
          void 0 !== _t && i.push(_t);
        }
        for (var _ref2 of o) {
          var _e2 = _ref2[0];
          var _n = _ref2[1];
          {
            if (!_n) continue;
            var _o = r.get(_e2);
            void 0 === _o || require("Lexical").$isRootNode(_o) || i.push(_o);
          }
        }
        return i;
      })(n, o, r);
      if (0 === l.length) return 0;
      if (l.length > 1) {
        var _o2 = n._nodeMap,
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
    function o(e, o, r) {
      var i = r(),
        a = 0,
        s = i,
        l = 0,
        u = null;
      return function (d, c, _, p, f, h) {
        var g = r();
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
              : n(d, c, p, f, e.isComposing()),
          O = (function () {
            var n = null === _ || _.editor === e,
              r = h.has(require("Lexical").HISTORY_PUSH_TAG);
            if (!r && n && h.has(require("Lexical").HISTORY_MERGE_TAG))
              return 0;
            if (1 === S) return 2;
            if (null === d) return 1;
            var s = c._selection;
            if (!(p.size > 0 || f.size > 0)) return null !== s ? 0 : 2;
            var l = "number" == typeof o ? o : o.peek();
            if (!1 === r && 0 !== S && S === a && g < i + l && n) return 0;
            if (1 === p.size) {
              if (
                (function (e, n, o) {
                  var r = n._nodeMap.get(e),
                    i = o._nodeMap.get(e),
                    a = n._selection,
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
                      n.read(function () {
                        return r.exportJSON();
                      }),
                    ) ===
                      JSON.stringify(
                        o.read(function () {
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
    function r(e, t) {
      if (null !== t && t.editor === e.editor) return t;
      var n = e.editor,
        o = n.getEditorState();
      return o.isEmpty() ? null : { editor: n, editorState: o };
    }
    function i(e, t) {
      ((e.undoStack = []), (e.redoStack = []), (e.current = null), t && t(e));
    }
    function a(e, n, a, s, l, u) {
      if (s === void 0) {
        s = Date.now;
      }
      if (u === void 0) {
        u = null;
      }
      var d = o(e, a, s),
        c = function c() {
          l && l(n);
        };
      return (
        c(),
        require("Lexical").mergeRegister(
          e.registerCommand(
            require("Lexical").UNDO_COMMAND,
            function () {
              return (
                (function (e, n, o) {
                  var i = n.redoStack,
                    a = n.undoStack;
                  if (0 !== a.length) {
                    var _s = n.current,
                      _l = a.pop();
                    if (_l) {
                      var _n2 = r(_l, _s);
                      null !== _n2 &&
                        (i.push(_n2),
                        e.dispatchCommand(
                          require("Lexical").CAN_REDO_COMMAND,
                          !0,
                        ));
                    }
                    (0 === a.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_UNDO_COMMAND,
                        !1,
                      ),
                      (n.current = _l || null),
                      o && o(n),
                      _l &&
                        _l.editor.setEditorState(_l.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, n, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").REDO_COMMAND,
            function () {
              return (
                (function (e, n, o) {
                  var i = n.redoStack,
                    a = n.undoStack;
                  if (0 !== i.length) {
                    var _s2 = n.current,
                      _l2 = i.pop();
                    if (_l2) {
                      var _n3 = r(_l2, _s2);
                      null !== _n3 &&
                        (a.push(_n3),
                        e.dispatchCommand(
                          require("Lexical").CAN_UNDO_COMMAND,
                          !0,
                        ));
                    }
                    (0 === i.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_REDO_COMMAND,
                        !1,
                      ),
                      (n.current = _l2 || null),
                      o && o(n),
                      _l2 &&
                        _l2.editor.setEditorState(_l2.editorState, {
                          tag: require("Lexical").HISTORIC_TAG,
                        }));
                  }
                })(e, n, l),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_EDITOR_COMMAND,
            function () {
              return (i(n, l), !1);
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerCommand(
            require("Lexical").CLEAR_HISTORY_COMMAND,
            function () {
              return (
                i(n, l),
                e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1),
                e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !1),
                !0
              );
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          e.registerUpdateListener(function (_ref3) {
            var o = _ref3.editorState,
              r = _ref3.prevEditorState,
              i = _ref3.dirtyLeaves,
              a = _ref3.dirtyElements,
              s = _ref3.tags;
            var l = n.current,
              _ = n.redoStack,
              p = n.undoStack,
              f = null === l ? null : l.editorState;
            if (null !== l && o === f) return;
            var h = d(r, o, l, i, a, s);
            if (1 === h) {
              0 !== _.length &&
                ((n.redoStack = []),
                e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1));
              var _o3 = (function (e, t, n) {
                return null === n
                  ? null
                  : n.editor === e
                    ? babelHelpers["extends"]({}, n)
                    : t.isEmpty()
                      ? null
                      : { editor: e, editorState: t };
              })(e, r, l);
              if (null !== _o3) {
                p.push(_o3);
                var _n4 = "number" == typeof u || null === u ? u : u.peek();
                (null !== _n4 && p.length > _n4 && p.splice(0, p.length - _n4),
                  e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !0));
              }
            } else if (2 === h) return;
            ((n.current = { editor: e, editorState: o }), c());
          }),
        )
      );
    }
    function s() {
      return { current: null, redoStack: [], undoStack: [] };
    }
    var l = {
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
      config: {
        createInitialHistoryState: s,
        delay: 300,
        disabled: "undefined" == typeof window,
        maxDepth: null,
        now: function now() {
          return Date.now();
        },
      },
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
    };
    function u(t) {
      var n = t
        ? require("LexicalExtension").getPeerDependencyFromEditor(
            t,
            "@lexical/extension/HMR",
          )
        : void 0;
      return n ? n.output.restoreCount.value : 0;
    }
    var d = {
      build: function build(t, _ref5) {
        var n = _ref5.disabled,
          o = _ref5.parentEditor;
        return require("LexicalExtension").namedSignals({
          disabled: n,
          parentEditor: o || t._parentEditor,
        });
      },
      config: { disabled: !1, parentEditor: null },
      dependencies: [[l, { disabled: !0 }]],
      name: "@lexical/history/SharedHistory",
      register: function register(t, n, o) {
        return require("LexicalExtension").effect(function () {
          var _o$getOutput = o.getOutput(),
            n = _o$getOutput.disabled,
            r = _o$getOutput.parentEditor;
          if (!n.value) {
            var _o$getDependency = o.getDependency(l),
              _n5 = _o$getDependency.output;
            (u(t), u(r.value));
            var _i2 = (function (t) {
              return t
                ? require("LexicalExtension").getPeerDependencyFromEditor(
                    t,
                    l.name,
                  )
                : null;
            })(r.value);
            if (!_i2) return;
            var _a = _i2.output;
            require("LexicalExtension").batch(function () {
              ((_n5.delay.value = _a.delay.value),
                (_n5.historyState.value = _a.historyState.value),
                (_n5.now.value = _a.now.value),
                (_n5.maxDepth.value = _a.maxDepth.value),
                (_n5.disabled.value = _a.disabled.value));
            });
          }
        });
      },
    };
    ((exports.HistoryExtension = l),
      (exports.SharedHistoryExtension = d),
      (exports.createEmptyHistoryState = s),
      (exports.registerHistory = a));
  },
  null,
);
