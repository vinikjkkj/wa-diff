__d(
  "createKeyCommandWrapper",
  [
    "CometKeyCommandContext",
    "CometKeyCommandSettingsContext",
    "CometKeyCommandUtilsContext",
    "CometKeyCommandsTypedLoggerLite",
    "FBLogger",
    "areKeyCombinationsEqual",
    "createKeyCommand",
    "gkx",
    "isSingleCharKey",
    "react",
    "stylex",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useMemo,
      _ = c.useRef,
      f = { wrapperFocusable: { ":focus_outline": "x1uvtmcs", $$css: !0 } };
    function g(e) {
      return e instanceof HTMLInputElement
        ? e.type !== "hidden" && e.type !== "file" && !e.disabled
        : e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement
          ? !e.disabled
          : e instanceof HTMLElement && e.isContentEditable;
    }
    function h(e) {
      return e instanceof HTMLElement && e.getAttribute("role") === "listbox"
        ? !e.getAttribute("aria-disabled")
        : !1;
    }
    function y(e, t, n) {
      for (var r of e) {
        var o = r[0],
          a = r[1];
        if (a.groupID === t && a.commandID === n) return e.get(o);
      }
    }
    function C(e, t) {
      var n;
      return (
        r("gkx")("22803") &&
        t.triggerFromInputs === !0 &&
        g(e) &&
        ((n = t.command) == null ? void 0 : n.alt) === !0
      );
    }
    var b = function (t, n) {
        r("FBLogger")("comet_ax").mustfix(
          "Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set",
        );
      },
      v = function (t, n) {
        r("FBLogger")("comet_ax").mustfix(
          "Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set",
        );
      };
    function S(t, n) {
      function o(o) {
        var a = m(r("CometKeyCommandContext")),
          i = m(r("CometKeyCommandUtilsContext")),
          l = m(r("CometKeyCommandSettingsContext")),
          s = i == null ? void 0 : i.setActiveWrapper,
          c = _(b),
          S = _(v),
          R = r("useStable")(function () {
            return new Map();
          }),
          L = d(
            function (e) {
              var t,
                n,
                o = R.get(e);
              if (
                ((t = o) == null ? void 0 : t.groupID) != null &&
                ((n = o) == null ? void 0 : n.commandID) != null
              ) {
                var a,
                  i = l.getCustomKeyCombination(o.groupID, o.commandID);
                if (
                  i == null ||
                  r("areKeyCombinationsEqual")(
                    i,
                    (a = o) == null ? void 0 : a.command,
                  )
                )
                  return o;
                o = null;
              }
              var s = l.getCustomCommandsMap().get(e);
              if (s != null && s.groupID != null && s.commandID != null) {
                var u = y(R, s.groupID, s.commandID);
                u != null && (o = u);
              }
              return o;
            },
            [l, R],
          ),
          E = p(
            function () {
              return {
                addCommands: function (t, n) {
                  return (
                    t.forEach(function (e) {
                      var t = e.command;
                      if (t != null) {
                        var o = r("createKeyCommand")(t),
                          a = R.has(o),
                          l = a && n === !0,
                          s = l || !a || n === void 0;
                        s &&
                          (R.set(o, e), i == null || i.notifyCommandUpdate());
                      }
                    }),
                    function () {
                      (t.forEach(function (e) {
                        var t = e.command,
                          n = r("createKeyCommand")(t),
                          o = R.get(n);
                        o === e && R.delete(n);
                      }),
                        i == null || i.notifyCommandUpdate());
                    }
                  );
                },
                applyCommand: function (t, n) {
                  var e,
                    a = L(t);
                  if (a == null) return !1;
                  var i = /^[a-z0-9]$/;
                  if (
                    r("gkx")("22803") &&
                    ((e = a.command) == null ? void 0 : e.alt) === !0 &&
                    l.getModifiedKeyboardShortcutsPreference() === 1
                  )
                    return !0;
                  if (
                    (!a.triggerFromInputs && g(n.target)) ||
                    (h(n.target) && i.test(t)) ||
                    (n.type === "keyup" &&
                      a.triggerOnKeyUp !== !0 &&
                      a.triggerOnKeyUpAndKeyDown !== !0) ||
                    (n.type === "keydown" && a.triggerOnKeyUp === !0)
                  )
                    return !1;
                  var s = a.handler;
                  if (a.shouldPreventDefault !== !1) {
                    if (
                      C(n.target, a) &&
                      l.getModifiedKeyboardShortcutsPreference() === 3
                    )
                      return !0;
                    s && n.preventDefault();
                  }
                  if (a.triggerOnRepeats === !1 && n.repeat === !0) return !1;
                  if (s != null) {
                    if (
                      a.command != null &&
                      C(n.target, a) &&
                      l.getModifiedKeyboardShortcutsPreference() === 4
                    )
                      return (
                        S.current(a.command, a.singleCharDescription),
                        !0
                      );
                    var u = l && l.getAreSingleKeysDisabled(),
                      d = r("isSingleCharKey")(t);
                    if (u === !0 && d) return !0;
                    if (u === null && d)
                      return (c.current(t, a.singleCharDescription), !0);
                    s();
                    var m = a.description;
                    return (
                      r("CometKeyCommandsTypedLoggerLite").log({
                        key_combo: t,
                        key_context: o.debugName,
                        key_description: m,
                      }),
                      a.shouldStopPropagation !== !1
                    );
                  }
                  return !1;
                },
                debugName: o.debugName,
                getCommandMap: function () {
                  return R;
                },
                getParent: function () {
                  return a;
                },
                removeCommand: function (t) {
                  (R.delete(t), i == null || i.notifyCommandUpdate());
                },
                setShowModifiedKeyCommandWrapperDialogRef: function (t) {
                  return (
                    (S.current = t),
                    function () {
                      S.current = v;
                    }
                  );
                },
                setShowSingleCharacterKeyCommandWrapperDialogRef: function (t) {
                  return (
                    (c.current = t),
                    function () {
                      c.current = b;
                    }
                  );
                },
              };
            },
            [l, i, R, a, o.debugName, S, c, L],
          ),
          k = d(
            function () {
              if (!s) {
                var e;
                r("FBLogger")("comet_ax").mustfix(
                  "setActiveWrapper is undefined in %s",
                  (e = o.debugName) != null ? e : "unknown",
                );
                return;
              }
              s(E);
            },
            [s, E, o.debugName],
          ),
          I;
        if (t || o.elementType !== void 0) {
          var T,
            D = (T = o.elementType) != null ? T : "div";
          I = u.jsx(
            D,
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o.isWrapperFocusable ? f.wrapperFocusable : void 0,
                o.xstyle,
              ),
              {
                "data-testid": void 0,
                onFocusCapture: t ? k : void 0,
                tabIndex: o.isWrapperFocusable ? -1 : void 0,
                children: o.children,
              },
            ),
          );
        } else I = o.children;
        return (
          n && (I = u.jsx(n.Provider, { value: E, children: I })),
          u.jsx(r("CometKeyCommandContext").Provider, { value: E, children: I })
        );
      }
      return ((o.displayName = o.name + " [from " + i.id + "]"), o);
    }
    l.default = S;
  },
  98,
);
