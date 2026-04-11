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
      var s = t._selection,
        a = e._selection;
      if (i) return 1;
      if (
        !(
          require("Lexical").$isRangeSelection(s) &&
          require("Lexical").$isRangeSelection(a) &&
          a.isCollapsed() &&
          s.isCollapsed()
        )
      )
        return 0;
      var d = (function (e, t, o) {
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
      if (0 === d.length) return 0;
      if (d.length > 1) {
        var _o2 = t._nodeMap,
          _r = _o2.get(s.anchor.key),
          _i = _o2.get(a.anchor.key);
        return _r &&
          _i &&
          !e._nodeMap.has(_r.__key) &&
          require("Lexical").$isTextNode(_r) &&
          1 === _r.__text.length &&
          1 === s.anchor.offset
          ? 2
          : 0;
      }
      var c = d[0],
        l = e._nodeMap.get(c.__key);
      if (
        !require("Lexical").$isTextNode(l) ||
        !require("Lexical").$isTextNode(c) ||
        l.__mode !== c.__mode
      )
        return 0;
      var u = l.__text,
        _ = c.__text;
      if (u === _) return 0;
      var f = s.anchor,
        p = a.anchor;
      if (f.key !== p.key || "text" !== f.type) return 0;
      var O = f.offset,
        C = p.offset,
        S = _.length - u.length;
      return 1 === S && C === O - 1
        ? 2
        : -1 === S && C === O + 1
          ? 3
          : -1 === S && C === O
            ? 4
            : 0;
    }
    function r(e, t, r) {
      var i = r(),
        s = 0,
        a = i,
        d = 0,
        c = null;
      return function (l, u, _, f, p, O) {
        var C = r();
        if (
          (O.has(require("Lexical").COMPOSITION_START_TAG) &&
            ((a = i), (d = s), (c = l)),
          O.has(require("Lexical").HISTORIC_TAG))
        )
          return ((s = 0), (i = C), 2);
        O.has(require("Lexical").COMPOSITION_END_TAG) &&
          c &&
          ((i = a), (s = d), (l = c));
        var S = o(l, u, f, p, e.isComposing()),
          g = (function () {
            var o = null === _ || _.editor === e,
              r = O.has(require("Lexical").HISTORY_PUSH_TAG);
            if (!r && o && O.has(require("Lexical").HISTORY_MERGE_TAG))
              return 0;
            if (1 === S) return 2;
            if (null === l) return 1;
            var a = u._selection;
            if (!(f.size > 0 || p.size > 0)) return null !== a ? 0 : 2;
            var d = "number" == typeof t ? t : t.peek();
            if (!1 === r && 0 !== S && S === s && C < i + d && o) return 0;
            if (1 === f.size) {
              if (
                (function (e, t, o) {
                  var r = t._nodeMap.get(e),
                    i = o._nodeMap.get(e),
                    s = t._selection,
                    a = o._selection;
                  return (
                    !(
                      (require("Lexical").$isRangeSelection(s) &&
                        require("Lexical").$isRangeSelection(a) &&
                        "element" === s.anchor.type &&
                        "element" === s.focus.type &&
                        "text" === a.anchor.type &&
                        "text" === a.focus.type) ||
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
                })(Array.from(f)[0], l, u)
              )
                return 0;
            }
            return 1;
          })();
        return ((i = C), (s = S), g);
      };
    }
    function i(e) {
      ((e.undoStack = []), (e.redoStack = []), (e.current = null));
    }
    function s(e, o, s, a) {
      if (a === void 0) {
        a = Date.now;
      }
      var d = r(e, s, a);
      return require("LexicalUtils").mergeRegister(
        e.registerCommand(
          require("Lexical").UNDO_COMMAND,
          function () {
            return (
              (function (e, t) {
                var o = t.redoStack,
                  r = t.undoStack;
                if (0 !== r.length) {
                  var _i2 = t.current,
                    _s = r.pop();
                  (null !== _i2 &&
                    (o.push(_i2),
                    e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !0)),
                    0 === r.length &&
                      e.dispatchCommand(
                        require("Lexical").CAN_UNDO_COMMAND,
                        !1,
                      ),
                    (t.current = _s || null),
                    _s &&
                      _s.editor.setEditorState(_s.editorState, {
                        tag: require("Lexical").HISTORIC_TAG,
                      }));
                }
              })(e, o),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        e.registerCommand(
          require("Lexical").REDO_COMMAND,
          function () {
            return (
              (function (e, t) {
                var o = t.redoStack,
                  r = t.undoStack;
                if (0 !== o.length) {
                  var _i3 = t.current;
                  null !== _i3 &&
                    (r.push(_i3),
                    e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !0));
                  var _s2 = o.pop();
                  (0 === o.length &&
                    e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1),
                    (t.current = _s2 || null),
                    _s2 &&
                      _s2.editor.setEditorState(_s2.editorState, {
                        tag: require("Lexical").HISTORIC_TAG,
                      }));
                }
              })(e, o),
              !0
            );
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        e.registerCommand(
          require("Lexical").CLEAR_EDITOR_COMMAND,
          function () {
            return (i(o), !1);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        e.registerCommand(
          require("Lexical").CLEAR_HISTORY_COMMAND,
          function () {
            return (
              i(o),
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
            s = _ref3.dirtyElements,
            a = _ref3.tags;
          var c = o.current,
            l = o.redoStack,
            u = o.undoStack,
            _ = null === c ? null : c.editorState;
          if (null !== c && t === _) return;
          var f = d(r, t, c, i, s, a);
          if (1 === f)
            (0 !== l.length &&
              ((o.redoStack = []),
              e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, !1)),
              null !== c &&
                (u.push(babelHelpers["extends"]({}, c)),
                e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, !0)));
          else if (2 === f) return;
          o.current = { editor: e, editorState: t };
        }),
      );
    }
    function a() {
      return { current: null, redoStack: [], undoStack: [] };
    }
    var d = (_require_Lexical = require("Lexical")).defineExtension({
      build: function build(t, _ref4) {
        var n = _ref4.delay,
          o = _ref4.createInitialHistoryState,
          r = _ref4.disabled,
          i = _ref4.now;
        return require("LexicalExtension").namedSignals({
          delay: n,
          disabled: r,
          historyState: o(t),
          now: i,
        });
      },
      config: _require_Lexical.safeCast({
        createInitialHistoryState: a,
        delay: 300,
        disabled: "undefined" == typeof window,
        now: Date.now,
      }),
      name: "@lexical/history/History",
      register: function register(t, n, o) {
        var r = o.getOutput();
        return require("LexicalExtension").effect(function () {
          return r.disabled.value
            ? void 0
            : s(t, r.historyState.value, r.delay, function () {
                return r.now.peek()();
              });
        });
      },
    });
    var c = _require_Lexical.defineExtension({
      build: function build(t, _ref5) {
        var n = _ref5.disabled,
          o = _ref5.parentEditor;
        return require("LexicalExtension").namedSignals({
          disabled: n,
          parentEditor: o || t._parentEditor,
        });
      },
      config: _require_Lexical.safeCast({ disabled: !1, parentEditor: null }),
      dependencies: [_require_Lexical.configExtension(d, { disabled: !0 })],
      name: "@lexical/history/SharedHistory",
      register: function register(t, n, o) {
        return require("LexicalExtension").effect(function () {
          var _o$getOutput = o.getOutput(),
            t = _o$getOutput.disabled,
            n = _o$getOutput.parentEditor;
          if (!t.value) {
            var _o$getDependency = o.getDependency(d),
              _t3 = _o$getDependency.output,
              _r2 = (function (t) {
                return t
                  ? require("LexicalExtension").getPeerDependencyFromEditor(
                      t,
                      d.name,
                    )
                  : null;
              })(n.value);
            if (!_r2) return;
            var _i4 = _r2.output;
            require("LexicalExtension").batch(function () {
              ((_t3.delay.value = _i4.delay.value),
                (_t3.historyState.value = _i4.historyState.value),
                (_t3.now.value = _i4.now.value),
                (_t3.disabled.value = _i4.disabled.value));
            });
          }
        });
      },
    });
    ((exports.HistoryExtension = d),
      (exports.SharedHistoryExtension = c),
      (exports.createEmptyHistoryState = a),
      (exports.registerHistory = s));
  },
  null,
);
