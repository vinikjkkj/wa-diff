__d(
  "LexicalA11y.prod",
  [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionRootElementExtension",
    "LexicalExtensionSignals",
  ],
  function $module_LexicalA11y_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var o = [
      "a[href]",
      "button:not([disabled])",
      'input:not([disabled]):not([type="hidden"])',
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(",");
    function i(e) {
      return Array.from(e.querySelectorAll(o));
    }
    function s(e, t) {
      var n = t;
      for (; null !== n; ) {
        if (n === e) return !0;
        n = require("Lexical").isDOMShadowRoot(n) ? n.host : n.parentNode;
      }
      return !1;
    }
    function a(e, t, n) {
      var o = require("Lexical").getActiveElementDeep(e);
      for (var _i of t) {
        _i.focus();
        var _t = require("Lexical").getActiveElementDeep(e);
        if (_t !== o || (n && null !== _t && s(_i, _t))) return !0;
      }
      return !1;
    }
    function u(e, t) {
      var _t$initialFocus;
      if (t === void 0) {
        t = {};
      }
      var n =
          (_t$initialFocus = t.initialFocus) != null
            ? _t$initialFocus
            : "firstFocusable",
        o = e.ownerDocument,
        u = require("Lexical").getActiveElementDeep(o),
        l = require("Lexical").isHTMLElement(u) ? u : null;
      return (
        (("container" === n && e.hasAttribute("tabindex")) ||
          (!a(o, i(e), !0) && e.hasAttribute("tabindex"))) &&
          e.focus(),
        require("Lexical").mergeRegister(
          function () {
            null !== l && "function" == typeof l.focus && s(o, l) && l.focus();
          },
          require("Lexical").registerEventListener(e, "keydown", function (t) {
            if ("Tab" !== t.key) return;
            t.preventDefault();
            var n = i(e),
              u = require("Lexical").getActiveElementDeep(o),
              l =
                require("Lexical").isHTMLElement(u) && s(e, u)
                  ? n.indexOf(u)
                  : -1,
              c =
                -1 === l
                  ? n
                  : [].concat(
                      Array.from(n.slice(l + 1)),
                      Array.from(n.slice(0, l)),
                    );
            a(o, t.shiftKey ? c.reverse() : c, !1);
          }),
          require("Lexical").registerEventListener(o, "focusin", function (n) {
            var u = require("Lexical").getComposedEventTarget(n);
            require("Lexical").isHTMLElement(u) &&
              !s(e, u) &&
              ((null != t.allowOutside && t.allowOutside(u)) ||
                (!a(o, i(e), !0) && e.hasAttribute("tabindex") && e.focus()));
          }),
        )
      );
    }
    function l(e, t) {
      var _t$orientation, _t$itemSelector;
      if (t === void 0) {
        t = {};
      }
      var n =
          (_t$orientation = t.orientation) != null
            ? _t$orientation
            : "horizontal",
        o =
          (_t$itemSelector = t.itemSelector) != null
            ? _t$itemSelector
            : ":scope > button:not([disabled])",
        i = function i() {
          return Array.from(e.querySelectorAll(o));
        },
        s = function s(e, t) {
          e.forEach(function (e, n) {
            e.tabIndex = n === t ? 0 : -1;
          });
        };
      return (
        (function () {
          var t = i();
          if (0 === t.length) return;
          var n = require("Lexical").getActiveElementDeep(e.ownerDocument),
            o = t.findIndex(function (e) {
              return e === n;
            });
          s(t, o >= 0 ? o : 0);
        })(),
        require("Lexical").mergeRegister(
          require("Lexical").registerEventListener(e, "keydown", function (t) {
            var o = i();
            if (0 === o.length) return;
            var a = require("Lexical").getActiveElementDeep(e.ownerDocument),
              u = o.findIndex(function (e) {
                return e === a;
              });
            if (u < 0)
              return void (
                ("ArrowRight" !== t.key &&
                  "ArrowDown" !== t.key &&
                  "ArrowLeft" !== t.key &&
                  "ArrowUp" !== t.key &&
                  "Home" !== t.key &&
                  "End" !== t.key) ||
                (t.preventDefault(), s(o, 0), o[0].focus())
              );
            var l = "horizontal" === n || "both" === n,
              c = "vertical" === n || "both" === n;
            var d = u;
            switch (t.key) {
              case "ArrowRight":
                if (!l) return;
                d = u + 1;
                break;
              case "ArrowLeft":
                if (!l) return;
                d = u - 1;
                break;
              case "ArrowDown":
                if (!c) return;
                d = u + 1;
                break;
              case "ArrowUp":
                if (!c) return;
                d = u - 1;
                break;
              case "Home":
                d = 0;
                break;
              case "End":
                d = o.length - 1;
                break;
              default:
                return;
            }
            (t.preventDefault(),
              (d = (d + o.length) % o.length),
              s(o, d),
              o[d].focus());
          }),
          function () {
            i().forEach(function (e) {
              e.tabIndex = 0;
            });
          },
        )
      );
    }
    var c = {
        build: function build(e, n, r) {
          var o = r.getInitResult();
          return babelHelpers["extends"](
            {},
            require("LexicalExtensionNamedSignals").namedSignals(n),
            {
              announce: function announce(e) {
                o.value = e === o.peek() ? e + "\u200b" : e;
              },
            },
          );
        },
        config: { owner: null, politeness: "polite" },
        dependencies: [
          require("LexicalExtensionRootElementExtension").RootElementExtension,
        ],
        init: function init() {
          return require("LexicalExtensionSignals").signal("");
        },
        name: "@lexical/a11y/AriaLiveRegion",
        register: function register(t, o, i) {
          var _require_LexicalExtensionSignals;
          var s = i.getInitResult(),
            _i$getOutput = i.getOutput(),
            a = _i$getOutput.owner,
            u = _i$getOutput.politeness,
            l = i.getDependency(
              require("LexicalExtensionRootElementExtension")
                .RootElementExtension,
            ).output,
            c =
              (_require_LexicalExtensionSignals = require("LexicalExtensionSignals")).signal(
                null,
              );
          return require("Lexical").mergeRegister(
            _require_LexicalExtensionSignals.effect(function () {
              var e = a.value,
                t = e ? null : l.value,
                n = e != null ? e : t ? t.ownerDocument.body : null;
              if (!n) return;
              var r = (function (e) {
                var t = e.ownerDocument.createElement("div");
                return (
                  t.setAttribute("aria-atomic", "true"),
                  t.setAttribute("role", "status"),
                  (function (e) {
                    var t = e.style;
                    ((t.border = "0"),
                      (t.clip = "rect(0 0 0 0)"),
                      (t.height = "1px"),
                      (t.margin = "-1px"),
                      (t.overflow = "hidden"),
                      (t.padding = "0"),
                      (t.position = "absolute"),
                      (t.whiteSpace = "nowrap"),
                      (t.width = "1px"));
                  })(t),
                  e.appendChild(t),
                  t
                );
              })(n);
              return (
                (c.value = r),
                function () {
                  (r.remove(), (c.value = null));
                }
              );
            }),
            _require_LexicalExtensionSignals.effect(function () {
              var e = c.value;
              e && e.setAttribute("aria-live", u.value);
            }),
            _require_LexicalExtensionSignals.effect(function () {
              var e = s.value,
                t = c.peek();
              t && (t.textContent = e);
            }),
          );
        },
      },
      d = {
        build: function build(e, n) {
          return require("LexicalExtensionNamedSignals").namedSignals(n);
        },
        config: { disabled: !1, redone: "Redone", undone: "Undone" },
        dependencies: [c],
        name: "@lexical/a11y/HistoryAnnounce",
        register: function register(t, n, o) {
          var _o$getOutput = o.getOutput(),
            i = _o$getOutput.disabled,
            s = _o$getOutput.redone,
            a = _o$getOutput.undone,
            u = o.getDependency(c).output.announce;
          return require("LexicalExtensionSignals").effect(function () {
            return i.value
              ? void 0
              : require("Lexical").mergeRegister(
                  t.registerCommand(
                    require("Lexical").UNDO_COMMAND,
                    function () {
                      return (u(a.peek()), !1);
                    },
                    require("Lexical").COMMAND_PRIORITY_LOW,
                  ),
                  t.registerCommand(
                    require("Lexical").REDO_COMMAND,
                    function () {
                      return (u(s.peek()), !1);
                    },
                    require("Lexical").COMMAND_PRIORITY_LOW,
                  ),
                );
          });
        },
      },
      f = {
        build: function build(e, n) {
          return require("LexicalExtensionNamedSignals").namedSignals(n);
        },
        config: {
          disabled: !1,
          editable: "Editor is editable",
          readOnly: "Editor is read-only",
        },
        dependencies: [c],
        name: "@lexical/a11y/EditorModeAnnounce",
        register: function register(t, n, r) {
          var _r$getOutput = r.getOutput(),
            o = _r$getOutput.disabled,
            i = _r$getOutput.editable,
            s = _r$getOutput.readOnly,
            a = r.getDependency(c).output.announce;
          return require("LexicalExtensionSignals").effect(function () {
            return o.value
              ? void 0
              : t.registerEditableListener(function (e) {
                  a(e ? i.peek() : s.peek());
                });
          });
        },
      },
      g = {
        build: function build() {
          return require("Lexical").createRefCountedRegistry(u);
        },
        name: "@lexical/a11y/FocusTrap",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      },
      p = {
        build: function build() {
          return require("Lexical").createRefCountedRegistry(l);
        },
        name: "@lexical/a11y/RovingTabIndex",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      },
      b = {
        build: function build(e) {
          return require("Lexical").createRefCountedRegistry(function (t, n) {
            return (function (e, t, n, _n$toolbarItemSelecto) {
              if (n === void 0) {
                n = {};
              }
              var o =
                (_n$toolbarItemSelecto = n.toolbarItemSelector) != null
                  ? _n$toolbarItemSelecto
                  : ':scope > button:not([disabled]), :scope > [tabindex="0"]';
              return require("Lexical").mergeRegister(
                e.registerCommand(
                  require("Lexical").KEY_DOWN_COMMAND,
                  function (e) {
                    var _t$querySelector;
                    if (!e.altKey || "F10" !== e.key) return !1;
                    var n =
                      (_t$querySelector = t.querySelector('[tabindex="0"]')) !=
                      null
                        ? _t$querySelector
                        : t.querySelector(o);
                    return null !== n && (e.preventDefault(), n.focus(), !0);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                require("Lexical").registerEventListener(
                  t,
                  "keydown",
                  function (n) {
                    if ("Escape" !== n.key) return;
                    var i = require("Lexical").getComposedEventTarget(n);
                    if (require("Lexical").isHTMLElement(i)) {
                      var _e = t.querySelectorAll(o);
                      var _n = !1;
                      for (var _t2 of _e)
                        if (_t2 === i || s(_t2, i)) {
                          _n = !0;
                          break;
                        }
                      if (!_n) return;
                    }
                    var a = e.getRootElement();
                    null !== a &&
                      (n.preventDefault(),
                      n.stopPropagation(),
                      e.focus(),
                      a.focus());
                  },
                ),
              );
            })(e, t, n);
          });
        },
        name: "@lexical/a11y/FocusManager",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      };
    ((exports.AriaLiveRegionExtension = c),
      (exports.EditorModeAnnounceExtension = f),
      (exports.FocusManagerExtension = b),
      (exports.FocusTrapExtension = g),
      (exports.HistoryAnnounceExtension = d),
      (exports.RovingTabIndexExtension = p));
  },
  null,
);
