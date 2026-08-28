__d(
  "LexicalA11y.prod",
  ["Lexical", "LexicalExtension"],
  function $module_LexicalA11y_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var n = [
      "a[href]",
      "button:not([disabled])",
      'input:not([disabled]):not([type="hidden"])',
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(",");
    function r(e) {
      return Array.from(e.querySelectorAll(n));
    }
    function o(e, n) {
      var r = n;
      for (; null !== r; ) {
        if (r === e) return !0;
        r = require("Lexical").isDOMShadowRoot(r) ? r.host : r.parentNode;
      }
      return !1;
    }
    function i(e, n) {
      var _n$initialFocus;
      if (n === void 0) {
        n = {};
      }
      var i =
          (_n$initialFocus = n.initialFocus) != null
            ? _n$initialFocus
            : "firstFocusable",
        s = e.ownerDocument,
        u = require("Lexical").getActiveElementDeep(s),
        a = require("Lexical").isHTMLElement(u) ? u : null,
        l = r(e);
      "container" === i && e.hasAttribute("tabindex")
        ? e.focus()
        : l.length > 0
          ? l[0].focus()
          : e.hasAttribute("tabindex") && e.focus();
      return require("Lexical").mergeRegister(
        function () {
          null !== a && "function" == typeof a.focus && o(s, a) && a.focus();
        },
        require("Lexical").registerEventListener(e, "keydown", function (n) {
          if ("Tab" !== n.key) return;
          var i = r(e);
          if (0 === i.length) return void n.preventDefault();
          n.preventDefault();
          var u = i[0],
            a = i[i.length - 1],
            l = require("Lexical").getActiveElementDeep(s),
            c =
              require("Lexical").isHTMLElement(l) && o(e, l)
                ? i.indexOf(l)
                : -1;
          n.shiftKey
            ? (c <= 0 ? a : i[c - 1]).focus()
            : (-1 === c || c === i.length - 1 ? u : i[c + 1]).focus();
        }),
        require("Lexical").registerEventListener(s, "focusin", function (i) {
          var s = require("Lexical").getComposedEventTarget(i);
          if (!require("Lexical").isHTMLElement(s) || o(e, s)) return;
          if (null != n.allowOutside && n.allowOutside(s)) return;
          var u = r(e);
          u.length > 0 ? u[0].focus() : e.hasAttribute("tabindex") && e.focus();
        }),
      );
    }
    function s(e, n) {
      var _n$orientation, _n$itemSelector;
      if (n === void 0) {
        n = {};
      }
      var r =
          (_n$orientation = n.orientation) != null
            ? _n$orientation
            : "horizontal",
        o =
          (_n$itemSelector = n.itemSelector) != null
            ? _n$itemSelector
            : ":scope > button:not([disabled])",
        i = function i() {
          return Array.from(e.querySelectorAll(o));
        },
        s = function s(e, t) {
          e.forEach(function (e, n) {
            e.tabIndex = n === t ? 0 : -1;
          });
        };
      (function () {
        var n = i();
        if (0 === n.length) return;
        var r = require("Lexical").getActiveElementDeep(e.ownerDocument),
          o = n.findIndex(function (e) {
            return e === r;
          });
        s(n, o >= 0 ? o : 0);
      })();
      return require("Lexical").mergeRegister(
        require("Lexical").registerEventListener(e, "keydown", function (n) {
          var o = i();
          if (0 === o.length) return;
          var u = require("Lexical").getActiveElementDeep(e.ownerDocument),
            a = o.findIndex(function (e) {
              return e === u;
            });
          if (a < 0)
            return void (
              ("ArrowRight" !== n.key &&
                "ArrowDown" !== n.key &&
                "ArrowLeft" !== n.key &&
                "ArrowUp" !== n.key &&
                "Home" !== n.key &&
                "End" !== n.key) ||
              (n.preventDefault(), s(o, 0), o[0].focus())
            );
          var l = "horizontal" === r || "both" === r,
            c = "vertical" === r || "both" === r;
          var d = a;
          switch (n.key) {
            case "ArrowRight":
              if (!l) return;
              d = a + 1;
              break;
            case "ArrowLeft":
              if (!l) return;
              d = a - 1;
              break;
            case "ArrowDown":
              if (!c) return;
              d = a + 1;
              break;
            case "ArrowUp":
              if (!c) return;
              d = a - 1;
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
          (n.preventDefault(),
            (d = (d + o.length) % o.length),
            s(o, d),
            o[d].focus());
        }),
        function () {
          i().forEach(function (e) {
            e.tabIndex = 0;
          });
        },
      );
    }
    var u = {
        build: function build(t, n, r) {
          var o = r.getInitResult();
          return babelHelpers["extends"](
            {},
            require("LexicalExtension").namedSignals(n),
            {
              announce: function announce(e) {
                o.value = e === o.peek() ? e + "\u200b" : e;
              },
            },
          );
        },
        config: { owner: null, politeness: "polite" },
        dependencies: [require("LexicalExtension").RootElementExtension],
        init: function init() {
          return require("LexicalExtension").signal("");
        },
        name: "@lexical/a11y/AriaLiveRegion",
        register: function register(n, r, o) {
          var _require_LexicalExtension;
          var i = o.getInitResult(),
            _o$getOutput = o.getOutput(),
            s = _o$getOutput.owner,
            u = _o$getOutput.politeness,
            a = o.getDependency(
              (_require_LexicalExtension = require("LexicalExtension"))
                .RootElementExtension,
            ).output,
            l = _require_LexicalExtension.signal(null);
          return require("Lexical").mergeRegister(
            _require_LexicalExtension.effect(function () {
              var e = s.value,
                t = e ? null : a.value,
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
                (l.value = r),
                function () {
                  (r.remove(), (l.value = null));
                }
              );
            }),
            _require_LexicalExtension.effect(function () {
              var e = l.value;
              e && e.setAttribute("aria-live", u.value);
            }),
            _require_LexicalExtension.effect(function () {
              var e = i.value,
                t = l.peek();
              t && (t.textContent = e);
            }),
          );
        },
      },
      a = {
        build: function build(t, n) {
          return require("LexicalExtension").namedSignals(n);
        },
        config: { disabled: !1, redone: "Redone", undone: "Undone" },
        dependencies: [u],
        name: "@lexical/a11y/HistoryAnnounce",
        register: function register(n, r, o) {
          var _o$getOutput2 = o.getOutput(),
            i = _o$getOutput2.disabled,
            s = _o$getOutput2.redone,
            a = _o$getOutput2.undone,
            l = o.getDependency(u).output.announce;
          return require("LexicalExtension").effect(function () {
            return i.value
              ? void 0
              : require("Lexical").mergeRegister(
                  n.registerCommand(
                    require("Lexical").UNDO_COMMAND,
                    function () {
                      return (l(a.peek()), !1);
                    },
                    require("Lexical").COMMAND_PRIORITY_LOW,
                  ),
                  n.registerCommand(
                    require("Lexical").REDO_COMMAND,
                    function () {
                      return (l(s.peek()), !1);
                    },
                    require("Lexical").COMMAND_PRIORITY_LOW,
                  ),
                );
          });
        },
      },
      l = {
        build: function build(t, n) {
          return require("LexicalExtension").namedSignals(n);
        },
        config: {
          disabled: !1,
          editable: "Editor is editable",
          readOnly: "Editor is read-only",
        },
        dependencies: [u],
        name: "@lexical/a11y/EditorModeAnnounce",
        register: function register(t, n, r) {
          var _r$getOutput = r.getOutput(),
            o = _r$getOutput.disabled,
            i = _r$getOutput.editable,
            s = _r$getOutput.readOnly,
            a = r.getDependency(u).output.announce;
          return require("LexicalExtension").effect(function () {
            return o.value
              ? void 0
              : t.registerEditableListener(function (e) {
                  a(e ? i.peek() : s.peek());
                });
          });
        },
      },
      c = {
        build: function build() {
          return require("Lexical").createRefCountedRegistry(i);
        },
        name: "@lexical/a11y/FocusTrap",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      },
      d = {
        build: function build() {
          return require("Lexical").createRefCountedRegistry(s);
        },
        name: "@lexical/a11y/RovingTabIndex",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      },
      f = {
        build: function build(e) {
          return require("Lexical").createRefCountedRegistry(function (n, r) {
            return (function (e, n, r, _r$toolbarItemSelecto) {
              if (r === void 0) {
                r = {};
              }
              var i =
                (_r$toolbarItemSelecto = r.toolbarItemSelector) != null
                  ? _r$toolbarItemSelecto
                  : ':scope > button:not([disabled]), :scope > [tabindex="0"]';
              return require("Lexical").mergeRegister(
                e.registerCommand(
                  require("Lexical").KEY_DOWN_COMMAND,
                  function (e) {
                    var _n$querySelector;
                    if (!e.altKey || "F10" !== e.key) return !1;
                    var t =
                      (_n$querySelector = n.querySelector('[tabindex="0"]')) !=
                      null
                        ? _n$querySelector
                        : n.querySelector(i);
                    return null !== t && (e.preventDefault(), t.focus(), !0);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                require("Lexical").registerEventListener(
                  n,
                  "keydown",
                  function (r) {
                    if ("Escape" !== r.key) return;
                    var s = require("Lexical").getComposedEventTarget(r);
                    if (require("Lexical").isHTMLElement(s)) {
                      var _e = n.querySelectorAll(i);
                      var _t = !1;
                      for (var _n of _e)
                        if (_n === s || o(_n, s)) {
                          _t = !0;
                          break;
                        }
                      if (!_t) return;
                    }
                    var u = e.getRootElement();
                    null !== u &&
                      (r.preventDefault(),
                      r.stopPropagation(),
                      e.focus(),
                      u.focus());
                  },
                ),
              );
            })(e, n, r);
          });
        },
        name: "@lexical/a11y/FocusManager",
        register: function register(e, t, n) {
          return function () {
            return n.getOutput().dispose();
          };
        },
      };
    ((exports.AriaLiveRegionExtension = u),
      (exports.EditorModeAnnounceExtension = l),
      (exports.FocusManagerExtension = f),
      (exports.FocusTrapExtension = c),
      (exports.HistoryAnnounceExtension = a),
      (exports.RovingTabIndexExtension = d));
  },
  null,
);
