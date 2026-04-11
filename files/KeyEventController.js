__d(
  "KeyEventController",
  [
    "Bootloader",
    "DOMQuery",
    "Event",
    "Run",
    "emptyFunction",
    "getElementText",
    "isContentEditable",
    "isElementInteractive",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        "`": [192],
        "[": [219],
        "]": [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        "-": [189],
        "=": [187],
        FORWARD_SLASH: [191],
      },
      d =
        ((e = {}),
        (e[8] = 1),
        (e[9] = 1),
        (e[13] = 1),
        (e[27] = 1),
        (e[32] = 1),
        (e[37] = 1),
        (e[63234] = 1),
        (e[38] = 1),
        (e[63232] = 1),
        (e[39] = 1),
        (e[63235] = 1),
        (e[40] = 1),
        (e[63233] = 1),
        (e[46] = 1),
        e),
      m = (function () {
        function e() {
          var e = this;
          ((this.handlers = {}),
            ["keyup", "keydown", "keypress"].forEach(function (t) {
              return document.addEventListener(
                t,
                e.onkeyevent.bind(e, "on" + t),
              );
            }));
        }
        var t = e.prototype;
        return (
          (t.mapKey = function (t) {
            var e = t;
            if (/^[0-9]$/.test(e + ""))
              return (
                typeof e != "number" && (e = e.charCodeAt(0) - 48),
                [48 + e, 96 + e]
              );
            e += "";
            var n = c[e.toUpperCase()];
            return n || [e.toUpperCase().charCodeAt(0)];
          }),
          (t.onkeyevent = function (t, n) {
            var e = n;
            e = r("Event").$E(e);
            var o = this.handlers[e.keyCode] || this.handlers[e.which];
            if (o) {
              for (
                var a = function () {
                    var n = o[l].callback,
                      a = o[l].filter;
                    try {
                      if (!a || a(e, t)) {
                        var i = n(e, t),
                          s = e.which || e.keyCode;
                        if (
                          (r("Bootloader").loadModules(
                            ["KeyEventTypedLogger"],
                            function (t) {
                              new t()
                                .setAction("key_shortcut")
                                .setKey(e.key || "")
                                .setKeyChar(String.fromCharCode(s))
                                .setKeyCode(s)
                                .addToExtraData("is_trusted", e.isTrusted)
                                .log();
                            },
                            "KeyEventController",
                          ),
                          i === !1)
                        )
                          return { v: r("Event").kill(e) };
                      }
                    } catch (e) {}
                  },
                  i,
                  l = 0;
                l < o.length;
                l++
              )
                if (((i = a()), i)) return i.v;
            }
            return !0;
          }),
          (t.resetHandlers = function () {
            for (var e in this.handlers)
              if (Object.prototype.hasOwnProperty.call(this.handlers, e)) {
                var t = this.handlers[e].filter(function (e) {
                  return e.preserve();
                });
                t.length ? (this.handlers[e] = t) : delete this.handlers[e];
              }
          }),
          (e.getInstance = function () {
            return u || (u = new e());
          }),
          (e.defaultFilter = function (n, o) {
            var t = r("Event").$E(n);
            return (
              e.filterEventTypes(t, o) &&
              e.filterEventTargets(t, o) &&
              e.filterEventModifiers(t, o)
            );
          }),
          (e.filterEventTypes = function (t, n) {
            return n === "onkeydown";
          }),
          (e.filterEventTargets = function (t, n) {
            var e = t.getTarget();
            return (
              !r("isElementInteractive")(e) ||
              (t.keyCode in d &&
                ((o("DOMQuery").isNodeOfType(e, ["input", "textarea"]) &&
                  e.value.length === 0) ||
                  (r("isContentEditable")(e) &&
                    r("getElementText")(e).length === 0)))
            );
          }),
          (e.filterEventModifiers = function (t, n) {
            return !(t.ctrlKey || t.altKey || t.metaKey || t.repeat);
          }),
          (e.registerKeyAcrossTransitions = function (n, o, a, i) {
            return (
              a === void 0 && (a = e.defaultFilter),
              i === void 0 && (i = !1),
              e.registerKey(n, o, a, i, r("emptyFunction").thatReturnsTrue)
            );
          }),
          (e.registerKey = function (n, a, i, l, u) {
            (i === void 0 && (i = e.defaultFilter),
              l === void 0 && (l = !1),
              u === void 0 && (u = r("emptyFunction").thatReturnsFalse));
            var t = n,
              c = e.getInstance(),
              d = t == null ? [] : c.mapKey(t);
            (s || (s = r("isEmpty")))(c.handlers) &&
              o("Run").onLeave(c.resetHandlers.bind(c));
            for (var m = {}, p = 0; p < d.length; p++) {
              ((t = "" + d[p]), (!c.handlers[t] || l) && (c.handlers[t] = []));
              var _ = { callback: a, filter: i, preserve: u };
              ((m[t] = _), c.handlers[t].push(_));
            }
            return {
              remove: function () {
                for (var e in m) {
                  if (c.handlers[e] && c.handlers[e].length) {
                    var t = m[e] != null ? c.handlers[e].indexOf(m[e]) : -1;
                    t >= 0 && c.handlers[e].splice(t, 1);
                  }
                  delete m[e];
                }
              },
            };
          }),
          (e.registerKeyForButtonCallback = function (n, r) {
            return e.registerKey(n, function () {
              return (r.click(), !1);
            });
          }),
          e
        );
      })();
    l.default = m;
  },
  98,
);
