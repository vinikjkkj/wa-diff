__d(
  "WAWeb-novnc",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        var t = Object.getOwnPropertyNames,
          r = function (n, r) {
            return function () {
              return (
                r || (0, n[t(n)[0]])((r = { exports: {} }).exports, r),
                r.exports
              );
            };
          },
          o = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/int.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.toSigned32bit = n),
                  (t.toUnsigned32bit = e));
                function e(e) {
                  return e >>> 0;
                }
                function n(e) {
                  return e | 0;
                }
              },
          }),
          a = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/logging.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Warn = t.Info = t.Error = t.Debug = void 0),
                  (t.getLogging = l),
                  (t.initLogging = i));
                var e = "warn",
                  n = (t.Debug = function () {}),
                  r = (t.Info = function () {}),
                  o = (t.Warn = function () {}),
                  a = (t.Error = function () {});
                function i(i) {
                  if (
                    (typeof i > "u" ? (i = e) : (e = i),
                    (t.Debug =
                      n =
                      t.Info =
                      r =
                      t.Warn =
                      o =
                      t.Error =
                      a =
                        function () {}),
                    typeof window.console < "u")
                  )
                    switch (i) {
                      case "debug":
                        t.Debug = n = console.debug.bind(window.console);
                      case "info":
                        t.Info = r = console.info.bind(window.console);
                      case "warn":
                        t.Warn = o = console.warn.bind(window.console);
                      case "error":
                        t.Error = a = console.error.bind(window.console);
                      case "none":
                        break;
                      default:
                        throw new window.Error(
                          "invalid logging type '" + i + "'",
                        );
                    }
                }
                function l() {
                  return e;
                }
                i();
              },
          }),
          i = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/strings.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.decodeUTF8 = e),
                  (t.encodeUTF8 = n));
                function e(e) {
                  var t =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1;
                  try {
                    return decodeURIComponent(escape(e));
                  } catch (n) {
                    if (n instanceof URIError && t) return e;
                    throw n;
                  }
                }
                function n(e) {
                  return unescape(encodeURIComponent(e));
                }
              },
          }),
          l = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/browser.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.hasScrollbarGutter = t.dragThreshold = void 0),
                  (t.isAndroid = C),
                  (t.isBlink = D),
                  (t.isChrome = R),
                  (t.isChromeOS = b),
                  (t.isChromium = L),
                  (t.isEdge = k),
                  (t.isFirefox = S),
                  (t.isGecko = I),
                  (t.isIOS = y),
                  (t.isMac = g),
                  (t.isOpera = E),
                  (t.isSafari = v),
                  (t.isTouchDevice = void 0),
                  (t.isWebKit = T),
                  (t.isWindows = h),
                  (t.supportsCursorURIs = void 0));
                var n = o(a());
                function r(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function o(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var o = r(n);
                  if (o && o.has(t)) return o.get(t);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in t)
                    if (l !== "default" && {}.hasOwnProperty.call(t, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(t, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = t[l]);
                    }
                  return ((a.default = t), o && o.set(t, a), a);
                }
                var i = (t.isTouchDevice =
                  "ontouchstart" in document.documentElement ||
                  document.ontouchstart !== void 0 ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0);
                window.addEventListener(
                  "touchstart",
                  function e() {
                    ((t.isTouchDevice = i = !0),
                      window.removeEventListener("touchstart", e, !1));
                  },
                  !1,
                );
                var l = (t.dragThreshold = 10 * (window.devicePixelRatio || 1)),
                  s = !1;
                try {
                  ((u = document.createElement("canvas")),
                    (u.style.cursor =
                      'url("data:image/x-icon;base64,AAACAAEACAgAAAIAAgA4AQAAFgAAACgAAAAIAAAAEAAAAAEAIAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAA==") 2 2, default'),
                    u.style.cursor.indexOf("url") === 0
                      ? (n.Info("Data URI scheme cursor supported"), (s = !0))
                      : n.Warn("Data URI scheme cursor not supported"));
                } catch (e) {
                  n.Error("Data URI scheme cursor test exception: " + e);
                }
                var u,
                  c = (t.supportsCursorURIs = s),
                  d = !0;
                try {
                  ((m = document.createElement("div")),
                    (m.style.visibility = "hidden"),
                    (m.style.overflow = "scroll"),
                    document.body.appendChild(m),
                    (p = document.createElement("div")),
                    m.appendChild(p),
                    (_ = m.offsetWidth - p.offsetWidth),
                    m.parentNode.removeChild(m),
                    (d = _ != 0));
                } catch (e) {
                  n.Error("Scrollbar test exception: " + e);
                }
                var m,
                  p,
                  _,
                  f = (t.hasScrollbarGutter = d);
                function g() {
                  return !!/mac/i.exec(navigator.platform);
                }
                function h() {
                  return !!/win/i.exec(navigator.platform);
                }
                function y() {
                  return (
                    !!/ipad/i.exec(navigator.platform) ||
                    !!/iphone/i.exec(navigator.platform) ||
                    !!/ipod/i.exec(navigator.platform)
                  );
                }
                function C() {
                  return !!navigator.userAgent.match("Android ");
                }
                function b() {
                  return !!navigator.userAgent.match(" CrOS ");
                }
                function v() {
                  return (
                    !!navigator.userAgent.match("Safari/...") &&
                    !navigator.userAgent.match("Chrome/...") &&
                    !navigator.userAgent.match("Chromium/...") &&
                    !navigator.userAgent.match("Epiphany/...")
                  );
                }
                function S() {
                  return (
                    !!navigator.userAgent.match("Firefox/...") &&
                    !navigator.userAgent.match("Seamonkey/...")
                  );
                }
                function R() {
                  return (
                    !!navigator.userAgent.match("Chrome/...") &&
                    !navigator.userAgent.match("Chromium/...") &&
                    !navigator.userAgent.match("Edg/...") &&
                    !navigator.userAgent.match("OPR/...")
                  );
                }
                function L() {
                  return !!navigator.userAgent.match("Chromium/...");
                }
                function E() {
                  return !!navigator.userAgent.match("OPR/...");
                }
                function k() {
                  return !!navigator.userAgent.match("Edg/...");
                }
                function I() {
                  return !!navigator.userAgent.match("Gecko/...");
                }
                function T() {
                  return (
                    !!navigator.userAgent.match("AppleWebKit/...") &&
                    !navigator.userAgent.match("Chrome/...")
                  );
                }
                function D() {
                  return !!navigator.userAgent.match("Chrome/...");
                }
              },
          }),
          s = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/element.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.clientToElement = e));
                function e(e, t, n) {
                  var r = n.getBoundingClientRect(),
                    o = { x: 0, y: 0 };
                  return (
                    e < r.left
                      ? (o.x = 0)
                      : e >= r.right
                        ? (o.x = r.width - 1)
                        : (o.x = e - r.left),
                    t < r.top
                      ? (o.y = 0)
                      : t >= r.bottom
                        ? (o.y = r.height - 1)
                        : (o.y = t - r.top),
                    o
                  );
                }
              },
          }),
          u = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/events.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getPointerEvent = e),
                  (t.releaseCapture = u),
                  (t.setCapture = s),
                  (t.stopEvent = n));
                function e(e) {
                  return e.changedTouches
                    ? e.changedTouches[0]
                    : e.touches
                      ? e.touches[0]
                      : e;
                }
                function n(e) {
                  (e.stopPropagation(), e.preventDefault());
                }
                var r = !1,
                  o = null;
                document.captureElement = null;
                function a(e) {
                  if (!r) {
                    var t = new e.constructor(e.type, e);
                    ((r = !0),
                      document.captureElement
                        ? document.captureElement.dispatchEvent(t)
                        : o.dispatchEvent(t),
                      (r = !1),
                      e.stopPropagation(),
                      t.defaultPrevented && e.preventDefault(),
                      e.type === "mouseup" && u());
                  }
                }
                function i() {
                  var e = document.getElementById("noVNC_mouse_capture_elem");
                  e.style.cursor = window.getComputedStyle(
                    document.captureElement,
                  ).cursor;
                }
                var l = new MutationObserver(i);
                function s(e) {
                  if (e.setCapture)
                    (e.setCapture(), (document.captureElement = e));
                  else {
                    u();
                    var t = document.getElementById("noVNC_mouse_capture_elem");
                    (t === null &&
                      ((t = document.createElement("div")),
                      (t.id = "noVNC_mouse_capture_elem"),
                      (t.style.position = "fixed"),
                      (t.style.top = "0px"),
                      (t.style.left = "0px"),
                      (t.style.width = "100%"),
                      (t.style.height = "100%"),
                      (t.style.zIndex = 1e4),
                      (t.style.display = "none"),
                      document.body.appendChild(t),
                      t.addEventListener("contextmenu", a),
                      t.addEventListener("mousemove", a),
                      t.addEventListener("mouseup", a)),
                      (document.captureElement = e),
                      l.observe(e, { attributes: !0 }),
                      i(),
                      (t.style.display = ""),
                      window.addEventListener("mousemove", a),
                      window.addEventListener("mouseup", a));
                  }
                }
                function u() {
                  if (document.releaseCapture)
                    (document.releaseCapture(),
                      (document.captureElement = null));
                  else {
                    if (!document.captureElement) return;
                    ((o = document.captureElement),
                      (document.captureElement = null),
                      l.disconnect());
                    var e = document.getElementById("noVNC_mouse_capture_elem");
                    ((e.style.display = "none"),
                      window.removeEventListener("mousemove", a),
                      window.removeEventListener("mouseup", a));
                  }
                }
              },
          }),
          c = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/eventtarget.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = (t.default = (function () {
                  function e() {
                    (n(this, e), (this._listeners = new Map()));
                  }
                  return o(e, [
                    {
                      key: "addEventListener",
                      value: function (t, n) {
                        (this._listeners.has(t) ||
                          this._listeners.set(t, new Set()),
                          this._listeners.get(t).add(n));
                      },
                    },
                    {
                      key: "removeEventListener",
                      value: function (t, n) {
                        this._listeners.has(t) &&
                          this._listeners.get(t).delete(n);
                      },
                    },
                    {
                      key: "dispatchEvent",
                      value: function (t) {
                        var e = this;
                        return this._listeners.has(t.type)
                          ? (this._listeners.get(t.type).forEach(function (n) {
                              return n.call(e, t);
                            }),
                            !t.defaultPrevented)
                          : !0;
                      },
                    },
                  ]);
                })());
              },
          }),
          d = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/base64.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var n = o(a());
                function r(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function o(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var o = r(n);
                  if (o && o.has(t)) return o.get(t);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in t)
                    if (l !== "default" && {}.hasOwnProperty.call(t, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(t, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = t[l]);
                    }
                  return ((a.default = t), o && o.set(t, a), a);
                }
                var i = (t.default = {
                  toBase64Table:
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(
                      "",
                    ),
                  base64Pad: "=",
                  encode: function (t) {
                    "use strict";
                    for (
                      var e = "", n = t.length, r = n % 3, o = 0;
                      o < n - 2;
                      o += 3
                    )
                      ((e += this.toBase64Table[t[o] >> 2]),
                        (e +=
                          this.toBase64Table[
                            ((t[o] & 3) << 4) + (t[o + 1] >> 4)
                          ]),
                        (e +=
                          this.toBase64Table[
                            ((t[o + 1] & 15) << 2) + (t[o + 2] >> 6)
                          ]),
                        (e += this.toBase64Table[t[o + 2] & 63]));
                    var a = n - r;
                    return (
                      r === 2
                        ? ((e += this.toBase64Table[t[a] >> 2]),
                          (e +=
                            this.toBase64Table[
                              ((t[a] & 3) << 4) + (t[a + 1] >> 4)
                            ]),
                          (e += this.toBase64Table[(t[a + 1] & 15) << 2]),
                          (e += this.toBase64Table[64]))
                        : r === 1 &&
                          ((e += this.toBase64Table[t[a] >> 2]),
                          (e += this.toBase64Table[(t[a] & 3) << 4]),
                          (e += this.toBase64Table[64]),
                          (e += this.toBase64Table[64])),
                      e
                    );
                  },
                  toBinaryTable: [
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1,
                    -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1,
                    -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1,
                    -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
                    -1, -1, -1, -1, -1,
                  ],
                  decode: function (t) {
                    var e =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      r = t.indexOf("=") - e;
                    r < 0 && (r = t.length - e);
                    for (
                      var o = (r >> 2) * 3 + Math.floor((r % 4) / 1.5),
                        a = new Array(o),
                        i = 0,
                        l = 0,
                        s = 0,
                        u = e;
                      u < t.length;
                      u++
                    ) {
                      var c = this.toBinaryTable[t.charCodeAt(u) & 127],
                        d = t.charAt(u) === this.base64Pad;
                      if (c === -1) {
                        n.Error(
                          "Illegal character code " +
                            t.charCodeAt(u) +
                            " at position " +
                            u,
                        );
                        continue;
                      }
                      ((l = (l << 6) | c),
                        (i += 6),
                        i >= 8 &&
                          ((i -= 8),
                          d || (a[s++] = (l >> i) & 255),
                          (l &= (1 << i) - 1)));
                    }
                    if (i) {
                      var m = new Error("Corrupted base64 string");
                      throw ((m.name = "Base64-Error"), m);
                    }
                    return a;
                  },
                });
              },
          }),
          m = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/display.js":
              function (r) {
                "use strict";
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0));
                var t = c(a()),
                  i = s(d()),
                  l = o();
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function c(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (m(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var n = u(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    o =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
                      var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set)
                        ? Object.defineProperty(r, a, i)
                        : (r[a] = e[a]);
                    }
                  return ((r.default = e), n && n.set(e, r), r);
                }
                function m(e) {
                  "@babel/helpers - typeof";
                  return (
                    (m =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    m(e)
                  );
                }
                function p(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function _(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, g(r.key), r));
                  }
                }
                function f(e, t, n) {
                  return (
                    t && _(e.prototype, t),
                    n && _(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function g(e) {
                  var t = h(e, "string");
                  return m(t) == "symbol" ? t : t + "";
                }
                function h(e, t) {
                  if (m(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (m(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var y = (r.default = (function () {
                  function r(e) {
                    if (
                      (p(this, r),
                      (this._drawCtx = null),
                      (this._renderQ = []),
                      (this._flushPromise = null),
                      (this._fbWidth = 0),
                      (this._fbHeight = 0),
                      (this._prevDrawStyle = ""),
                      t.Debug(">> Display.constructor"),
                      (this._target = e),
                      !this._target)
                    )
                      throw new Error("Target must be set");
                    if (typeof this._target == "string")
                      throw new Error("target must be a DOM element");
                    if (!this._target.getContext)
                      throw new Error("no getContext method");
                    ((this._targetCtx = this._target.getContext("2d")),
                      (this._viewportLoc = {
                        x: 0,
                        y: 0,
                        w: this._target.width,
                        h: this._target.height,
                      }),
                      (this._backbuffer = document.createElement("canvas")),
                      (this._drawCtx = this._backbuffer.getContext("2d")),
                      (this._damageBounds = {
                        left: 0,
                        top: 0,
                        right: this._backbuffer.width,
                        bottom: this._backbuffer.height,
                      }),
                      t.Debug("User Agent: " + navigator.userAgent),
                      t.Debug("<< Display.constructor"),
                      (this._scale = 1),
                      (this._clipViewport = !1));
                  }
                  return f(r, [
                    {
                      key: "scale",
                      get: function () {
                        return this._scale;
                      },
                      set: function (t) {
                        this._rescale(t);
                      },
                    },
                    {
                      key: "clipViewport",
                      get: function () {
                        return this._clipViewport;
                      },
                      set: function (t) {
                        this._clipViewport = t;
                        var e = this._viewportLoc;
                        (this.viewportChangeSize(e.w, e.h),
                          this.viewportChangePos(0, 0));
                      },
                    },
                    {
                      key: "width",
                      get: function () {
                        return this._fbWidth;
                      },
                    },
                    {
                      key: "height",
                      get: function () {
                        return this._fbHeight;
                      },
                    },
                    {
                      key: "viewportChangePos",
                      value: function (n, r) {
                        var e = this._viewportLoc;
                        ((n = Math.floor(n)),
                          (r = Math.floor(r)),
                          this._clipViewport || ((n = -e.w), (r = -e.h)));
                        var o = e.x + e.w - 1,
                          a = e.y + e.h - 1;
                        (n < 0 && e.x + n < 0 && (n = -e.x),
                          o + n >= this._fbWidth &&
                            (n -= o + n - this._fbWidth + 1),
                          e.y + r < 0 && (r = -e.y),
                          a + r >= this._fbHeight &&
                            (r -= a + r - this._fbHeight + 1),
                          !(n === 0 && r === 0) &&
                            (t.Debug(
                              "viewportChange deltaX: " + n + ", deltaY: " + r,
                            ),
                            (e.x += n),
                            (e.y += r),
                            this._damage(e.x, e.y, e.w, e.h),
                            this.flip()));
                      },
                    },
                    {
                      key: "viewportChangeSize",
                      value: function (n, r) {
                        ((!this._clipViewport ||
                          typeof n > "u" ||
                          typeof r > "u") &&
                          (t.Debug("Setting viewport to full display region"),
                          (n = this._fbWidth),
                          (r = this._fbHeight)),
                          (n = Math.floor(n)),
                          (r = Math.floor(r)),
                          n > this._fbWidth && (n = this._fbWidth),
                          r > this._fbHeight && (r = this._fbHeight));
                        var e = this._viewportLoc;
                        if (e.w !== n || e.h !== r) {
                          ((e.w = n), (e.h = r));
                          var o = this._target;
                          ((o.width = n),
                            (o.height = r),
                            this.viewportChangePos(0, 0),
                            this._damage(e.x, e.y, e.w, e.h),
                            this.flip(),
                            this._rescale(this._scale));
                        }
                      },
                    },
                    {
                      key: "absX",
                      value: function (t) {
                        return this._scale === 0
                          ? 0
                          : (0, l.toSigned32bit)(
                              t / this._scale + this._viewportLoc.x,
                            );
                      },
                    },
                    {
                      key: "absY",
                      value: function (t) {
                        return this._scale === 0
                          ? 0
                          : (0, l.toSigned32bit)(
                              t / this._scale + this._viewportLoc.y,
                            );
                      },
                    },
                    {
                      key: "resize",
                      value: function (t, n) {
                        ((this._prevDrawStyle = ""),
                          (this._fbWidth = t),
                          (this._fbHeight = n));
                        var e = this._backbuffer;
                        if (e.width !== t || e.height !== n) {
                          var r = null;
                          (e.width > 0 &&
                            e.height > 0 &&
                            (r = this._drawCtx.getImageData(
                              0,
                              0,
                              e.width,
                              e.height,
                            )),
                            e.width !== t && (e.width = t),
                            e.height !== n && (e.height = n),
                            r && this._drawCtx.putImageData(r, 0, 0));
                        }
                        var o = this._viewportLoc;
                        (this.viewportChangeSize(o.w, o.h),
                          this.viewportChangePos(0, 0));
                      },
                    },
                    {
                      key: "getImageData",
                      value: function () {
                        return this._drawCtx.getImageData(
                          0,
                          0,
                          this.width,
                          this.height,
                        );
                      },
                    },
                    {
                      key: "toDataURL",
                      value: function (t, n) {
                        return this._backbuffer.toDataURL(t, n);
                      },
                    },
                    {
                      key: "toBlob",
                      value: function (t, n, r) {
                        return this._backbuffer.toBlob(t, n, r);
                      },
                    },
                    {
                      key: "_damage",
                      value: function (t, n, r, o) {
                        (t < this._damageBounds.left &&
                          (this._damageBounds.left = t),
                          n < this._damageBounds.top &&
                            (this._damageBounds.top = n),
                          t + r > this._damageBounds.right &&
                            (this._damageBounds.right = t + r),
                          n + o > this._damageBounds.bottom &&
                            (this._damageBounds.bottom = n + o));
                      },
                    },
                    {
                      key: "flip",
                      value: function (t) {
                        if (this._renderQ.length !== 0 && !t)
                          this._renderQPush({ type: "flip" });
                        else {
                          var e = this._damageBounds.left,
                            n = this._damageBounds.top,
                            r = this._damageBounds.right - e,
                            o = this._damageBounds.bottom - n,
                            a = e - this._viewportLoc.x,
                            i = n - this._viewportLoc.y;
                          (a < 0 && ((r += a), (e -= a), (a = 0)),
                            i < 0 && ((o += i), (n -= i), (i = 0)),
                            a + r > this._viewportLoc.w &&
                              (r = this._viewportLoc.w - a),
                            i + o > this._viewportLoc.h &&
                              (o = this._viewportLoc.h - i),
                            r > 0 &&
                              o > 0 &&
                              this._targetCtx.drawImage(
                                this._backbuffer,
                                e,
                                n,
                                r,
                                o,
                                a,
                                i,
                                r,
                                o,
                              ),
                            (this._damageBounds.left = this._damageBounds.top =
                              65535),
                            (this._damageBounds.right =
                              this._damageBounds.bottom =
                                0));
                        }
                      },
                    },
                    {
                      key: "pending",
                      value: function () {
                        return this._renderQ.length > 0;
                      },
                    },
                    {
                      key: "flush",
                      value: function () {
                        var t = this;
                        return this._renderQ.length === 0
                          ? (e || (e = n("Promise"))).resolve()
                          : (this._flushPromise === null &&
                              (this._flushPromise = new (
                                e || (e = n("Promise"))
                              )(function (e) {
                                t._flushResolve = e;
                              })),
                            this._flushPromise);
                      },
                    },
                    {
                      key: "fillRect",
                      value: function (t, n, r, o, a, i) {
                        this._renderQ.length !== 0 && !i
                          ? this._renderQPush({
                              type: "fill",
                              x: t,
                              y: n,
                              width: r,
                              height: o,
                              color: a,
                            })
                          : (this._setFillColor(a),
                            this._drawCtx.fillRect(t, n, r, o),
                            this._damage(t, n, r, o));
                      },
                    },
                    {
                      key: "copyImage",
                      value: function (t, n, r, o, a, i, l) {
                        this._renderQ.length !== 0 && !l
                          ? this._renderQPush({
                              type: "copy",
                              oldX: t,
                              oldY: n,
                              x: r,
                              y: o,
                              width: a,
                              height: i,
                            })
                          : ((this._drawCtx.mozImageSmoothingEnabled = !1),
                            (this._drawCtx.webkitImageSmoothingEnabled = !1),
                            (this._drawCtx.msImageSmoothingEnabled = !1),
                            (this._drawCtx.imageSmoothingEnabled = !1),
                            this._drawCtx.drawImage(
                              this._backbuffer,
                              t,
                              n,
                              a,
                              i,
                              r,
                              o,
                              a,
                              i,
                            ),
                            this._damage(r, o, a, i));
                      },
                    },
                    {
                      key: "imageRect",
                      value: function (t, n, r, o, a, l) {
                        if (!(r === 0 || o === 0)) {
                          var e = new Image();
                          ((e.src =
                            "data: " + a + ";base64," + i.default.encode(l)),
                            this._renderQPush({
                              type: "img",
                              img: e,
                              x: t,
                              y: n,
                              width: r,
                              height: o,
                            }));
                        }
                      },
                    },
                    {
                      key: "blitImage",
                      value: function (t, n, r, o, a, i, l) {
                        if (this._renderQ.length !== 0 && !l) {
                          var e = new Uint8Array(r * o * 4);
                          (e.set(new Uint8Array(a.buffer, 0, e.length)),
                            this._renderQPush({
                              type: "blit",
                              data: e,
                              x: t,
                              y: n,
                              width: r,
                              height: o,
                            }));
                        } else {
                          var s = new Uint8ClampedArray(
                              a.buffer,
                              a.byteOffset + i,
                              r * o * 4,
                            ),
                            u = new ImageData(s, r, o);
                          (this._drawCtx.putImageData(u, t, n),
                            this._damage(t, n, r, o));
                        }
                      },
                    },
                    {
                      key: "drawImage",
                      value: function (t, n, r) {
                        (this._drawCtx.drawImage(t, n, r),
                          this._damage(n, r, t.width, t.height));
                      },
                    },
                    {
                      key: "autoscale",
                      value: function (t, n) {
                        var e;
                        if (t === 0 || n === 0) e = 0;
                        else {
                          var r = this._viewportLoc,
                            o = t / n,
                            a = r.w / r.h;
                          a >= o ? (e = t / r.w) : (e = n / r.h);
                        }
                        this._rescale(e);
                      },
                    },
                    {
                      key: "_rescale",
                      value: function (t) {
                        this._scale = t;
                        var e = this._viewportLoc,
                          n = t * e.w + "px",
                          r = t * e.h + "px";
                        (this._target.style.width !== n ||
                          this._target.style.height !== r) &&
                          ((this._target.style.width = n),
                          (this._target.style.height = r));
                      },
                    },
                    {
                      key: "_setFillColor",
                      value: function (t) {
                        var e = "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
                        e !== this._prevDrawStyle &&
                          ((this._drawCtx.fillStyle = e),
                          (this._prevDrawStyle = e));
                      },
                    },
                    {
                      key: "_renderQPush",
                      value: function (t) {
                        (this._renderQ.push(t),
                          this._renderQ.length === 1 && this._scanRenderQ());
                      },
                    },
                    {
                      key: "_resumeRenderQ",
                      value: function () {
                        (this.removeEventListener(
                          "load",
                          this._noVNCDisplay._resumeRenderQ,
                        ),
                          this._noVNCDisplay._scanRenderQ());
                      },
                    },
                    {
                      key: "_scanRenderQ",
                      value: function () {
                        for (var e = !0; e && this._renderQ.length > 0; ) {
                          var n = this._renderQ[0];
                          switch (n.type) {
                            case "flip":
                              this.flip(!0);
                              break;
                            case "copy":
                              this.copyImage(
                                n.oldX,
                                n.oldY,
                                n.x,
                                n.y,
                                n.width,
                                n.height,
                                !0,
                              );
                              break;
                            case "fill":
                              this.fillRect(
                                n.x,
                                n.y,
                                n.width,
                                n.height,
                                n.color,
                                !0,
                              );
                              break;
                            case "blit":
                              this.blitImage(
                                n.x,
                                n.y,
                                n.width,
                                n.height,
                                n.data,
                                0,
                                !0,
                              );
                              break;
                            case "img":
                              if (n.img.complete) {
                                if (
                                  n.img.width !== n.width ||
                                  n.img.height !== n.height
                                ) {
                                  t.Error(
                                    "Decoded image has incorrect dimensions. Got " +
                                      n.img.width +
                                      "x" +
                                      n.img.height +
                                      ". Expected " +
                                      n.width +
                                      "x" +
                                      n.height +
                                      ".",
                                  );
                                  return;
                                }
                                this.drawImage(n.img, n.x, n.y);
                              } else
                                ((n.img._noVNCDisplay = this),
                                  n.img.addEventListener(
                                    "load",
                                    this._resumeRenderQ,
                                  ),
                                  (e = !1));
                              break;
                          }
                          e && this._renderQ.shift();
                        }
                        this._renderQ.length === 0 &&
                          this._flushPromise !== null &&
                          (this._flushResolve(),
                          (this._flushPromise = null),
                          (this._flushResolve = null));
                      },
                    },
                  ]);
                })());
              },
          }),
          p = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/utils/common.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Buf8 = t.Buf32 = t.Buf16 = void 0),
                  (t.arraySet = n),
                  (t.flattenChunks = r),
                  (t.shrinkBuf = e));
                function e(e, t) {
                  return e.length === t
                    ? e
                    : e.subarray
                      ? e.subarray(0, t)
                      : ((e.length = t), e);
                }
                function n(e, t, n, r, o) {
                  if (t.subarray && e.subarray) {
                    e.set(t.subarray(n, n + r), o);
                    return;
                  }
                  for (var a = 0; a < r; a++) e[o + a] = t[n + a];
                }
                function r(e) {
                  var t, n, r, o, a, i;
                  for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
                  for (
                    i = new Uint8Array(r), o = 0, t = 0, n = e.length;
                    t < n;
                    t++
                  )
                    ((a = e[t]), i.set(a, o), (o += a.length));
                  return i;
                }
                var o = (t.Buf8 = Uint8Array),
                  a = (t.Buf16 = Uint16Array),
                  i = (t.Buf32 = Int32Array);
              },
          }),
          _ = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/adler32.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = e));
                function e(e, t, n, r) {
                  for (
                    var o = (e & 65535) | 0,
                      a = ((e >>> 16) & 65535) | 0,
                      i = 0;
                    n !== 0;
                  ) {
                    ((i = n > 2e3 ? 2e3 : n), (n -= i));
                    do ((o = (o + t[r++]) | 0), (a = (a + o) | 0));
                    while (--i);
                    ((o %= 65521), (a %= 65521));
                  }
                  return o | (a << 16) | 0;
                }
              },
          }),
          f = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/crc32.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = e));
                function e() {
                  for (var e, t = [], n = 0; n < 256; n++) {
                    e = n;
                    for (var r = 0; r < 8; r++)
                      e = e & 1 ? 3988292384 ^ (e >>> 1) : e >>> 1;
                    t[n] = e;
                  }
                  return t;
                }
                var n = e();
              },
          }),
          g = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/inffast.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = r));
                var e = 30,
                  n = 12;
                function r(t, r) {
                  var o,
                    a,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d,
                    m,
                    p,
                    _,
                    f,
                    g,
                    h,
                    y,
                    C,
                    b,
                    v,
                    S,
                    R,
                    L,
                    E,
                    k,
                    I,
                    T;
                  ((o = t.state),
                    (a = t.next_in),
                    (I = t.input),
                    (i = a + (t.avail_in - 5)),
                    (l = t.next_out),
                    (T = t.output),
                    (s = l - (r - t.avail_out)),
                    (u = l + (t.avail_out - 257)),
                    (c = o.dmax),
                    (d = o.wsize),
                    (m = o.whave),
                    (p = o.wnext),
                    (_ = o.window),
                    (f = o.hold),
                    (g = o.bits),
                    (h = o.lencode),
                    (y = o.distcode),
                    (C = (1 << o.lenbits) - 1),
                    (b = (1 << o.distbits) - 1));
                  e: do {
                    (g < 15 &&
                      ((f += I[a++] << g),
                      (g += 8),
                      (f += I[a++] << g),
                      (g += 8)),
                      (v = h[f & C]));
                    t: for (;;) {
                      if (
                        ((S = v >>> 24),
                        (f >>>= S),
                        (g -= S),
                        (S = (v >>> 16) & 255),
                        S === 0)
                      )
                        T[l++] = v & 65535;
                      else if (S & 16) {
                        ((R = v & 65535),
                          (S &= 15),
                          S &&
                            (g < S && ((f += I[a++] << g), (g += 8)),
                            (R += f & ((1 << S) - 1)),
                            (f >>>= S),
                            (g -= S)),
                          g < 15 &&
                            ((f += I[a++] << g),
                            (g += 8),
                            (f += I[a++] << g),
                            (g += 8)),
                          (v = y[f & b]));
                        n: for (;;) {
                          if (
                            ((S = v >>> 24),
                            (f >>>= S),
                            (g -= S),
                            (S = (v >>> 16) & 255),
                            S & 16)
                          ) {
                            if (
                              ((L = v & 65535),
                              (S &= 15),
                              g < S &&
                                ((f += I[a++] << g),
                                (g += 8),
                                g < S && ((f += I[a++] << g), (g += 8))),
                              (L += f & ((1 << S) - 1)),
                              L > c)
                            ) {
                              ((t.msg = "invalid distance too far back"),
                                (o.mode = e));
                              break e;
                            }
                            if (((f >>>= S), (g -= S), (S = l - s), L > S)) {
                              if (((S = L - S), S > m && o.sane)) {
                                ((t.msg = "invalid distance too far back"),
                                  (o.mode = e));
                                break e;
                              }
                              if (((E = 0), (k = _), p === 0)) {
                                if (((E += d - S), S < R)) {
                                  R -= S;
                                  do T[l++] = _[E++];
                                  while (--S);
                                  ((E = l - L), (k = T));
                                }
                              } else if (p < S) {
                                if (((E += d + p - S), (S -= p), S < R)) {
                                  R -= S;
                                  do T[l++] = _[E++];
                                  while (--S);
                                  if (((E = 0), p < R)) {
                                    ((S = p), (R -= S));
                                    do T[l++] = _[E++];
                                    while (--S);
                                    ((E = l - L), (k = T));
                                  }
                                }
                              } else if (((E += p - S), S < R)) {
                                R -= S;
                                do T[l++] = _[E++];
                                while (--S);
                                ((E = l - L), (k = T));
                              }
                              for (; R > 2; )
                                ((T[l++] = k[E++]),
                                  (T[l++] = k[E++]),
                                  (T[l++] = k[E++]),
                                  (R -= 3));
                              R &&
                                ((T[l++] = k[E++]), R > 1 && (T[l++] = k[E++]));
                            } else {
                              E = l - L;
                              do
                                ((T[l++] = T[E++]),
                                  (T[l++] = T[E++]),
                                  (T[l++] = T[E++]),
                                  (R -= 3));
                              while (R > 2);
                              R &&
                                ((T[l++] = T[E++]), R > 1 && (T[l++] = T[E++]));
                            }
                          } else if ((S & 64) === 0) {
                            v = y[(v & 65535) + (f & ((1 << S) - 1))];
                            continue n;
                          } else {
                            ((t.msg = "invalid distance code"), (o.mode = e));
                            break e;
                          }
                          break;
                        }
                      } else if ((S & 64) === 0) {
                        v = h[(v & 65535) + (f & ((1 << S) - 1))];
                        continue t;
                      } else if (S & 32) {
                        o.mode = n;
                        break e;
                      } else {
                        ((t.msg = "invalid literal/length code"), (o.mode = e));
                        break e;
                      }
                      break;
                    }
                  } while (a < i && l < u);
                  ((R = g >> 3),
                    (a -= R),
                    (g -= R << 3),
                    (f &= (1 << g) - 1),
                    (t.next_in = a),
                    (t.next_out = l),
                    (t.avail_in = a < i ? 5 + (i - a) : 5 - (a - i)),
                    (t.avail_out = l < u ? 257 + (u - l) : 257 - (l - u)),
                    (o.hold = f),
                    (o.bits = g));
                }
              },
          }),
          h = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/inftrees.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = g));
                var n = o(p());
                function r(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function o(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var o = r(n);
                  if (o && o.has(t)) return o.get(t);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in t)
                    if (l !== "default" && {}.hasOwnProperty.call(t, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(t, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = t[l]);
                    }
                  return ((a.default = t), o && o.set(t, a), a);
                }
                var a = 15,
                  i = 852,
                  l = 592,
                  s = 0,
                  u = 1,
                  c = 2,
                  d = [
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                    43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                  ],
                  m = [
                    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18,
                    18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72,
                    78,
                  ],
                  _ = [
                    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                    8193, 12289, 16385, 24577, 0, 0,
                  ],
                  f = [
                    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22,
                    22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
                    64, 64,
                  ];
                function g(e, t, r, o, p, g, h, y) {
                  var C = y.bits,
                    b = 0,
                    v = 0,
                    S = 0,
                    R = 0,
                    L = 0,
                    E = 0,
                    k = 0,
                    I = 0,
                    T = 0,
                    D = 0,
                    x,
                    $,
                    P,
                    N,
                    M,
                    w = null,
                    A = 0,
                    F,
                    O = new n.Buf16(a + 1),
                    B = new n.Buf16(a + 1),
                    W = null,
                    q = 0,
                    U,
                    V,
                    H;
                  for (b = 0; b <= a; b++) O[b] = 0;
                  for (v = 0; v < o; v++) O[t[r + v]]++;
                  for (L = C, R = a; R >= 1 && O[R] === 0; R--);
                  if ((L > R && (L = R), R === 0))
                    return (
                      (p[g++] = (1 << 24) | (64 << 16) | 0),
                      (p[g++] = (1 << 24) | (64 << 16) | 0),
                      (y.bits = 1),
                      0
                    );
                  for (S = 1; S < R && O[S] === 0; S++);
                  for (L < S && (L = S), I = 1, b = 1; b <= a; b++)
                    if (((I <<= 1), (I -= O[b]), I < 0)) return -1;
                  if (I > 0 && (e === s || R !== 1)) return -1;
                  for (B[1] = 0, b = 1; b < a; b++) B[b + 1] = B[b] + O[b];
                  for (v = 0; v < o; v++)
                    t[r + v] !== 0 && (h[B[t[r + v]]++] = v);
                  if (
                    (e === s
                      ? ((w = W = h), (F = 19))
                      : e === u
                        ? ((w = d), (A -= 257), (W = m), (q -= 257), (F = 256))
                        : ((w = _), (W = f), (F = -1)),
                    (D = 0),
                    (v = 0),
                    (b = S),
                    (M = g),
                    (E = L),
                    (k = 0),
                    (P = -1),
                    (T = 1 << L),
                    (N = T - 1),
                    (e === u && T > i) || (e === c && T > l))
                  )
                    return 1;
                  for (;;) {
                    ((U = b - k),
                      h[v] < F
                        ? ((V = 0), (H = h[v]))
                        : h[v] > F
                          ? ((V = W[q + h[v]]), (H = w[A + h[v]]))
                          : ((V = 96), (H = 0)),
                      (x = 1 << (b - k)),
                      ($ = 1 << E),
                      (S = $));
                    do
                      (($ -= x),
                        (p[M + (D >> k) + $] = (U << 24) | (V << 16) | H | 0));
                    while ($ !== 0);
                    for (x = 1 << (b - 1); D & x; ) x >>= 1;
                    if (
                      (x !== 0 ? ((D &= x - 1), (D += x)) : (D = 0),
                      v++,
                      --O[b] === 0)
                    ) {
                      if (b === R) break;
                      b = t[r + h[v]];
                    }
                    if (b > L && (D & N) !== P) {
                      for (
                        k === 0 && (k = L), M += S, E = b - k, I = 1 << E;
                        E + k < R && ((I -= O[E + k]), !(I <= 0));
                      )
                        (E++, (I <<= 1));
                      if (
                        ((T += 1 << E),
                        (e === u && T > i) || (e === c && T > l))
                      )
                        return 1;
                      ((P = D & N),
                        (p[P] = (L << 24) | (E << 16) | (M - g) | 0));
                    }
                  }
                  return (
                    D !== 0 && (p[M + D] = ((b - k) << 24) | (64 << 16) | 0),
                    (y.bits = L),
                    0
                  );
                }
              },
          }),
          y = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/inflate.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Z_TREES =
                    t.Z_STREAM_ERROR =
                    t.Z_STREAM_END =
                    t.Z_OK =
                    t.Z_NEED_DICT =
                    t.Z_MEM_ERROR =
                    t.Z_FINISH =
                    t.Z_DEFLATED =
                    t.Z_DATA_ERROR =
                    t.Z_BUF_ERROR =
                    t.Z_BLOCK =
                      void 0),
                  (t.inflate = Re),
                  (t.inflateEnd = Le),
                  (t.inflateGetHeader = Ee),
                  (t.inflateInfo = void 0),
                  (t.inflateInit = he),
                  (t.inflateInit2 = ge),
                  (t.inflateReset = _e),
                  (t.inflateReset2 = fe),
                  (t.inflateResetKeep = pe),
                  (t.inflateSetDictionary = ke));
                var n = u(p()),
                  r = l(_()),
                  o = l(f()),
                  a = l(g()),
                  i = l(h());
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function u(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var r = s(n);
                  if (r && r.has(t)) return r.get(t);
                  var o = { __proto__: null },
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in t)
                    if (i !== "default" && {}.hasOwnProperty.call(t, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(t, i) : null;
                      l && (l.get || l.set)
                        ? Object.defineProperty(o, i, l)
                        : (o[i] = t[i]);
                    }
                  return ((o.default = t), r && r.set(t, o), o);
                }
                var c = 0,
                  d = 1,
                  m = 2,
                  y = (t.Z_FINISH = 4),
                  C = (t.Z_BLOCK = 5),
                  b = (t.Z_TREES = 6),
                  v = (t.Z_OK = 0),
                  S = (t.Z_STREAM_END = 1),
                  R = (t.Z_NEED_DICT = 2),
                  L = (t.Z_STREAM_ERROR = -2),
                  E = (t.Z_DATA_ERROR = -3),
                  k = (t.Z_MEM_ERROR = -4),
                  I = (t.Z_BUF_ERROR = -5),
                  T = (t.Z_DEFLATED = 8),
                  D = 1,
                  x = 2,
                  $ = 3,
                  P = 4,
                  N = 5,
                  M = 6,
                  w = 7,
                  A = 8,
                  F = 9,
                  O = 10,
                  B = 11,
                  W = 12,
                  q = 13,
                  U = 14,
                  V = 15,
                  H = 16,
                  G = 17,
                  z = 18,
                  j = 19,
                  K = 20,
                  Q = 21,
                  X = 22,
                  Y = 23,
                  J = 24,
                  Z = 25,
                  ee = 26,
                  te = 27,
                  ne = 28,
                  re = 29,
                  oe = 30,
                  ae = 31,
                  ie = 32,
                  le = 852,
                  se = 592,
                  ue = 15,
                  ce = ue;
                function de(e) {
                  return (
                    ((e >>> 24) & 255) +
                    ((e >>> 8) & 65280) +
                    ((e & 65280) << 8) +
                    ((e & 255) << 24)
                  );
                }
                function me() {
                  ((this.mode = 0),
                    (this.last = !1),
                    (this.wrap = 0),
                    (this.havedict = !1),
                    (this.flags = 0),
                    (this.dmax = 0),
                    (this.check = 0),
                    (this.total = 0),
                    (this.head = null),
                    (this.wbits = 0),
                    (this.wsize = 0),
                    (this.whave = 0),
                    (this.wnext = 0),
                    (this.window = null),
                    (this.hold = 0),
                    (this.bits = 0),
                    (this.length = 0),
                    (this.offset = 0),
                    (this.extra = 0),
                    (this.lencode = null),
                    (this.distcode = null),
                    (this.lenbits = 0),
                    (this.distbits = 0),
                    (this.ncode = 0),
                    (this.nlen = 0),
                    (this.ndist = 0),
                    (this.have = 0),
                    (this.next = null),
                    (this.lens = new n.Buf16(320)),
                    (this.work = new n.Buf16(288)),
                    (this.lendyn = null),
                    (this.distdyn = null),
                    (this.sane = 0),
                    (this.back = 0),
                    (this.was = 0));
                }
                function pe(e) {
                  var t;
                  return !e || !e.state
                    ? L
                    : ((t = e.state),
                      (e.total_in = e.total_out = t.total = 0),
                      (e.msg = ""),
                      t.wrap && (e.adler = t.wrap & 1),
                      (t.mode = D),
                      (t.last = 0),
                      (t.havedict = 0),
                      (t.dmax = 32768),
                      (t.head = null),
                      (t.hold = 0),
                      (t.bits = 0),
                      (t.lencode = t.lendyn = new n.Buf32(le)),
                      (t.distcode = t.distdyn = new n.Buf32(se)),
                      (t.sane = 1),
                      (t.back = -1),
                      v);
                }
                function _e(e) {
                  var t;
                  return !e || !e.state
                    ? L
                    : ((t = e.state),
                      (t.wsize = 0),
                      (t.whave = 0),
                      (t.wnext = 0),
                      pe(e));
                }
                function fe(e, t) {
                  var n, r;
                  return !e ||
                    !e.state ||
                    ((r = e.state),
                    t < 0
                      ? ((n = 0), (t = -t))
                      : ((n = (t >> 4) + 1), t < 48 && (t &= 15)),
                    t && (t < 8 || t > 15))
                    ? L
                    : (r.window !== null && r.wbits !== t && (r.window = null),
                      (r.wrap = n),
                      (r.wbits = t),
                      _e(e));
                }
                function ge(e, t) {
                  var n, r;
                  return e
                    ? ((r = new me()),
                      (e.state = r),
                      (r.window = null),
                      (n = fe(e, t)),
                      n !== v && (e.state = null),
                      n)
                    : L;
                }
                function he(e) {
                  return ge(e, ce);
                }
                var ye = !0,
                  Ce,
                  be;
                function ve(e) {
                  if (ye) {
                    var t;
                    for (
                      Ce = new n.Buf32(512), be = new n.Buf32(32), t = 0;
                      t < 144;
                    )
                      e.lens[t++] = 8;
                    for (; t < 256; ) e.lens[t++] = 9;
                    for (; t < 280; ) e.lens[t++] = 7;
                    for (; t < 288; ) e.lens[t++] = 8;
                    for (
                      (0, i.default)(d, e.lens, 0, 288, Ce, 0, e.work, {
                        bits: 9,
                      }),
                        t = 0;
                      t < 32;
                    )
                      e.lens[t++] = 5;
                    ((0, i.default)(m, e.lens, 0, 32, be, 0, e.work, {
                      bits: 5,
                    }),
                      (ye = !1));
                  }
                  ((e.lencode = Ce),
                    (e.lenbits = 9),
                    (e.distcode = be),
                    (e.distbits = 5));
                }
                function Se(e, t, r, o) {
                  var a,
                    i = e.state;
                  return (
                    i.window === null &&
                      ((i.wsize = 1 << i.wbits),
                      (i.wnext = 0),
                      (i.whave = 0),
                      (i.window = new n.Buf8(i.wsize))),
                    o >= i.wsize
                      ? (n.arraySet(i.window, t, r - i.wsize, i.wsize, 0),
                        (i.wnext = 0),
                        (i.whave = i.wsize))
                      : ((a = i.wsize - i.wnext),
                        a > o && (a = o),
                        n.arraySet(i.window, t, r - o, a, i.wnext),
                        (o -= a),
                        o
                          ? (n.arraySet(i.window, t, r - o, o, 0),
                            (i.wnext = o),
                            (i.whave = i.wsize))
                          : ((i.wnext += a),
                            i.wnext === i.wsize && (i.wnext = 0),
                            i.whave < i.wsize && (i.whave += a))),
                    0
                  );
                }
                function Re(e, t) {
                  var l,
                    s,
                    u,
                    p,
                    _,
                    f,
                    g,
                    h,
                    le,
                    se,
                    ue,
                    ce,
                    me,
                    pe,
                    _e = 0,
                    fe,
                    ge,
                    he,
                    ye,
                    Ce,
                    be,
                    Re,
                    Le,
                    Ee = new n.Buf8(4),
                    ke,
                    Ie,
                    Te = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ];
                  if (
                    !e ||
                    !e.state ||
                    !e.output ||
                    (!e.input && e.avail_in !== 0)
                  )
                    return L;
                  ((l = e.state),
                    l.mode === W && (l.mode = q),
                    (_ = e.next_out),
                    (u = e.output),
                    (g = e.avail_out),
                    (p = e.next_in),
                    (s = e.input),
                    (f = e.avail_in),
                    (h = l.hold),
                    (le = l.bits),
                    (se = f),
                    (ue = g),
                    (Le = v));
                  e: for (;;)
                    switch (l.mode) {
                      case D:
                        if (l.wrap === 0) {
                          l.mode = q;
                          break;
                        }
                        for (; le < 16; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if (l.wrap & 2 && h === 35615) {
                          ((l.check = 0),
                            (Ee[0] = h & 255),
                            (Ee[1] = (h >>> 8) & 255),
                            (l.check = (0, o.default)(l.check, Ee, 2, 0)),
                            (h = 0),
                            (le = 0),
                            (l.mode = x));
                          break;
                        }
                        if (
                          ((l.flags = 0),
                          l.head && (l.head.done = !1),
                          !(l.wrap & 1) || (((h & 255) << 8) + (h >> 8)) % 31)
                        ) {
                          ((e.msg = "incorrect header check"), (l.mode = oe));
                          break;
                        }
                        if ((h & 15) !== T) {
                          ((e.msg = "unknown compression method"),
                            (l.mode = oe));
                          break;
                        }
                        if (
                          ((h >>>= 4),
                          (le -= 4),
                          (Re = (h & 15) + 8),
                          l.wbits === 0)
                        )
                          l.wbits = Re;
                        else if (Re > l.wbits) {
                          ((e.msg = "invalid window size"), (l.mode = oe));
                          break;
                        }
                        ((l.dmax = 1 << Re),
                          (e.adler = l.check = 1),
                          (l.mode = h & 512 ? O : W),
                          (h = 0),
                          (le = 0));
                        break;
                      case x:
                        for (; le < 16; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if (((l.flags = h), (l.flags & 255) !== T)) {
                          ((e.msg = "unknown compression method"),
                            (l.mode = oe));
                          break;
                        }
                        if (l.flags & 57344) {
                          ((e.msg = "unknown header flags set"), (l.mode = oe));
                          break;
                        }
                        (l.head && (l.head.text = (h >> 8) & 1),
                          l.flags & 512 &&
                            ((Ee[0] = h & 255),
                            (Ee[1] = (h >>> 8) & 255),
                            (l.check = (0, o.default)(l.check, Ee, 2, 0))),
                          (h = 0),
                          (le = 0),
                          (l.mode = $));
                      case $:
                        for (; le < 32; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        (l.head && (l.head.time = h),
                          l.flags & 512 &&
                            ((Ee[0] = h & 255),
                            (Ee[1] = (h >>> 8) & 255),
                            (Ee[2] = (h >>> 16) & 255),
                            (Ee[3] = (h >>> 24) & 255),
                            (l.check = (0, o.default)(l.check, Ee, 4, 0))),
                          (h = 0),
                          (le = 0),
                          (l.mode = P));
                      case P:
                        for (; le < 16; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        (l.head &&
                          ((l.head.xflags = h & 255), (l.head.os = h >> 8)),
                          l.flags & 512 &&
                            ((Ee[0] = h & 255),
                            (Ee[1] = (h >>> 8) & 255),
                            (l.check = (0, o.default)(l.check, Ee, 2, 0))),
                          (h = 0),
                          (le = 0),
                          (l.mode = N));
                      case N:
                        if (l.flags & 1024) {
                          for (; le < 16; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((l.length = h),
                            l.head && (l.head.extra_len = h),
                            l.flags & 512 &&
                              ((Ee[0] = h & 255),
                              (Ee[1] = (h >>> 8) & 255),
                              (l.check = (0, o.default)(l.check, Ee, 2, 0))),
                            (h = 0),
                            (le = 0));
                        } else l.head && (l.head.extra = null);
                        l.mode = M;
                      case M:
                        if (
                          l.flags & 1024 &&
                          ((ce = l.length),
                          ce > f && (ce = f),
                          ce &&
                            (l.head &&
                              ((Re = l.head.extra_len - l.length),
                              l.head.extra ||
                                (l.head.extra = new Array(l.head.extra_len)),
                              n.arraySet(l.head.extra, s, p, ce, Re)),
                            l.flags & 512 &&
                              (l.check = (0, o.default)(l.check, s, ce, p)),
                            (f -= ce),
                            (p += ce),
                            (l.length -= ce)),
                          l.length)
                        )
                          break e;
                        ((l.length = 0), (l.mode = w));
                      case w:
                        if (l.flags & 2048) {
                          if (f === 0) break e;
                          ce = 0;
                          do
                            ((Re = s[p + ce++]),
                              l.head &&
                                Re &&
                                l.length < 65536 &&
                                (l.head.name += String.fromCharCode(Re)));
                          while (Re && ce < f);
                          if (
                            (l.flags & 512 &&
                              (l.check = (0, o.default)(l.check, s, ce, p)),
                            (f -= ce),
                            (p += ce),
                            Re)
                          )
                            break e;
                        } else l.head && (l.head.name = null);
                        ((l.length = 0), (l.mode = A));
                      case A:
                        if (l.flags & 4096) {
                          if (f === 0) break e;
                          ce = 0;
                          do
                            ((Re = s[p + ce++]),
                              l.head &&
                                Re &&
                                l.length < 65536 &&
                                (l.head.comment += String.fromCharCode(Re)));
                          while (Re && ce < f);
                          if (
                            (l.flags & 512 &&
                              (l.check = (0, o.default)(l.check, s, ce, p)),
                            (f -= ce),
                            (p += ce),
                            Re)
                          )
                            break e;
                        } else l.head && (l.head.comment = null);
                        l.mode = F;
                      case F:
                        if (l.flags & 512) {
                          for (; le < 16; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          if (h !== (l.check & 65535)) {
                            ((e.msg = "header crc mismatch"), (l.mode = oe));
                            break;
                          }
                          ((h = 0), (le = 0));
                        }
                        (l.head &&
                          ((l.head.hcrc = (l.flags >> 9) & 1),
                          (l.head.done = !0)),
                          (e.adler = l.check = 0),
                          (l.mode = W));
                        break;
                      case O:
                        for (; le < 32; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        ((e.adler = l.check = de(h)),
                          (h = 0),
                          (le = 0),
                          (l.mode = B));
                      case B:
                        if (l.havedict === 0)
                          return (
                            (e.next_out = _),
                            (e.avail_out = g),
                            (e.next_in = p),
                            (e.avail_in = f),
                            (l.hold = h),
                            (l.bits = le),
                            R
                          );
                        ((e.adler = l.check = 1), (l.mode = W));
                      case W:
                        if (t === C || t === b) break e;
                      case q:
                        if (l.last) {
                          ((h >>>= le & 7), (le -= le & 7), (l.mode = te));
                          break;
                        }
                        for (; le < 3; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        switch (
                          ((l.last = h & 1), (h >>>= 1), (le -= 1), h & 3)
                        ) {
                          case 0:
                            l.mode = U;
                            break;
                          case 1:
                            if ((ve(l), (l.mode = K), t === b)) {
                              ((h >>>= 2), (le -= 2));
                              break e;
                            }
                            break;
                          case 2:
                            l.mode = G;
                            break;
                          case 3:
                            ((e.msg = "invalid block type"), (l.mode = oe));
                        }
                        ((h >>>= 2), (le -= 2));
                        break;
                      case U:
                        for (h >>>= le & 7, le -= le & 7; le < 32; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if ((h & 65535) !== ((h >>> 16) ^ 65535)) {
                          ((e.msg = "invalid stored block lengths"),
                            (l.mode = oe));
                          break;
                        }
                        if (
                          ((l.length = h & 65535),
                          (h = 0),
                          (le = 0),
                          (l.mode = V),
                          t === b)
                        )
                          break e;
                      case V:
                        l.mode = H;
                      case H:
                        if (((ce = l.length), ce)) {
                          if (
                            (ce > f && (ce = f), ce > g && (ce = g), ce === 0)
                          )
                            break e;
                          (n.arraySet(u, s, p, ce, _),
                            (f -= ce),
                            (p += ce),
                            (g -= ce),
                            (_ += ce),
                            (l.length -= ce));
                          break;
                        }
                        l.mode = W;
                        break;
                      case G:
                        for (; le < 14; ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if (
                          ((l.nlen = (h & 31) + 257),
                          (h >>>= 5),
                          (le -= 5),
                          (l.ndist = (h & 31) + 1),
                          (h >>>= 5),
                          (le -= 5),
                          (l.ncode = (h & 15) + 4),
                          (h >>>= 4),
                          (le -= 4),
                          l.nlen > 286 || l.ndist > 30)
                        ) {
                          ((e.msg = "too many length or distance symbols"),
                            (l.mode = oe));
                          break;
                        }
                        ((l.have = 0), (l.mode = z));
                      case z:
                        for (; l.have < l.ncode; ) {
                          for (; le < 3; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((l.lens[Te[l.have++]] = h & 7),
                            (h >>>= 3),
                            (le -= 3));
                        }
                        for (; l.have < 19; ) l.lens[Te[l.have++]] = 0;
                        if (
                          ((l.lencode = l.lendyn),
                          (l.lenbits = 7),
                          (ke = { bits: l.lenbits }),
                          (Le = (0, i.default)(
                            c,
                            l.lens,
                            0,
                            19,
                            l.lencode,
                            0,
                            l.work,
                            ke,
                          )),
                          (l.lenbits = ke.bits),
                          Le)
                        ) {
                          ((e.msg = "invalid code lengths set"), (l.mode = oe));
                          break;
                        }
                        ((l.have = 0), (l.mode = j));
                      case j:
                        for (; l.have < l.nlen + l.ndist; ) {
                          for (
                            ;
                            (_e = l.lencode[h & ((1 << l.lenbits) - 1)]),
                              (fe = _e >>> 24),
                              (ge = (_e >>> 16) & 255),
                              (he = _e & 65535),
                              !(fe <= le);
                          ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          if (he < 16)
                            ((h >>>= fe), (le -= fe), (l.lens[l.have++] = he));
                          else {
                            if (he === 16) {
                              for (Ie = fe + 2; le < Ie; ) {
                                if (f === 0) break e;
                                (f--, (h += s[p++] << le), (le += 8));
                              }
                              if (((h >>>= fe), (le -= fe), l.have === 0)) {
                                ((e.msg = "invalid bit length repeat"),
                                  (l.mode = oe));
                                break;
                              }
                              ((Re = l.lens[l.have - 1]),
                                (ce = 3 + (h & 3)),
                                (h >>>= 2),
                                (le -= 2));
                            } else if (he === 17) {
                              for (Ie = fe + 3; le < Ie; ) {
                                if (f === 0) break e;
                                (f--, (h += s[p++] << le), (le += 8));
                              }
                              ((h >>>= fe),
                                (le -= fe),
                                (Re = 0),
                                (ce = 3 + (h & 7)),
                                (h >>>= 3),
                                (le -= 3));
                            } else {
                              for (Ie = fe + 7; le < Ie; ) {
                                if (f === 0) break e;
                                (f--, (h += s[p++] << le), (le += 8));
                              }
                              ((h >>>= fe),
                                (le -= fe),
                                (Re = 0),
                                (ce = 11 + (h & 127)),
                                (h >>>= 7),
                                (le -= 7));
                            }
                            if (l.have + ce > l.nlen + l.ndist) {
                              ((e.msg = "invalid bit length repeat"),
                                (l.mode = oe));
                              break;
                            }
                            for (; ce--; ) l.lens[l.have++] = Re;
                          }
                        }
                        if (l.mode === oe) break;
                        if (l.lens[256] === 0) {
                          ((e.msg = "invalid code -- missing end-of-block"),
                            (l.mode = oe));
                          break;
                        }
                        if (
                          ((l.lenbits = 9),
                          (ke = { bits: l.lenbits }),
                          (Le = (0, i.default)(
                            d,
                            l.lens,
                            0,
                            l.nlen,
                            l.lencode,
                            0,
                            l.work,
                            ke,
                          )),
                          (l.lenbits = ke.bits),
                          Le)
                        ) {
                          ((e.msg = "invalid literal/lengths set"),
                            (l.mode = oe));
                          break;
                        }
                        if (
                          ((l.distbits = 6),
                          (l.distcode = l.distdyn),
                          (ke = { bits: l.distbits }),
                          (Le = (0, i.default)(
                            m,
                            l.lens,
                            l.nlen,
                            l.ndist,
                            l.distcode,
                            0,
                            l.work,
                            ke,
                          )),
                          (l.distbits = ke.bits),
                          Le)
                        ) {
                          ((e.msg = "invalid distances set"), (l.mode = oe));
                          break;
                        }
                        if (((l.mode = K), t === b)) break e;
                      case K:
                        l.mode = Q;
                      case Q:
                        if (f >= 6 && g >= 258) {
                          ((e.next_out = _),
                            (e.avail_out = g),
                            (e.next_in = p),
                            (e.avail_in = f),
                            (l.hold = h),
                            (l.bits = le),
                            (0, a.default)(e, ue),
                            (_ = e.next_out),
                            (u = e.output),
                            (g = e.avail_out),
                            (p = e.next_in),
                            (s = e.input),
                            (f = e.avail_in),
                            (h = l.hold),
                            (le = l.bits),
                            l.mode === W && (l.back = -1));
                          break;
                        }
                        for (
                          l.back = 0;
                          (_e = l.lencode[h & ((1 << l.lenbits) - 1)]),
                            (fe = _e >>> 24),
                            (ge = (_e >>> 16) & 255),
                            (he = _e & 65535),
                            !(fe <= le);
                        ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if (ge && (ge & 240) === 0) {
                          for (
                            ye = fe, Ce = ge, be = he;
                            (_e =
                              l.lencode[
                                be + ((h & ((1 << (ye + Ce)) - 1)) >> ye)
                              ]),
                              (fe = _e >>> 24),
                              (ge = (_e >>> 16) & 255),
                              (he = _e & 65535),
                              !(ye + fe <= le);
                          ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((h >>>= ye), (le -= ye), (l.back += ye));
                        }
                        if (
                          ((h >>>= fe),
                          (le -= fe),
                          (l.back += fe),
                          (l.length = he),
                          ge === 0)
                        ) {
                          l.mode = ee;
                          break;
                        }
                        if (ge & 32) {
                          ((l.back = -1), (l.mode = W));
                          break;
                        }
                        if (ge & 64) {
                          ((e.msg = "invalid literal/length code"),
                            (l.mode = oe));
                          break;
                        }
                        ((l.extra = ge & 15), (l.mode = X));
                      case X:
                        if (l.extra) {
                          for (Ie = l.extra; le < Ie; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((l.length += h & ((1 << l.extra) - 1)),
                            (h >>>= l.extra),
                            (le -= l.extra),
                            (l.back += l.extra));
                        }
                        ((l.was = l.length), (l.mode = Y));
                      case Y:
                        for (
                          ;
                          (_e = l.distcode[h & ((1 << l.distbits) - 1)]),
                            (fe = _e >>> 24),
                            (ge = (_e >>> 16) & 255),
                            (he = _e & 65535),
                            !(fe <= le);
                        ) {
                          if (f === 0) break e;
                          (f--, (h += s[p++] << le), (le += 8));
                        }
                        if ((ge & 240) === 0) {
                          for (
                            ye = fe, Ce = ge, be = he;
                            (_e =
                              l.distcode[
                                be + ((h & ((1 << (ye + Ce)) - 1)) >> ye)
                              ]),
                              (fe = _e >>> 24),
                              (ge = (_e >>> 16) & 255),
                              (he = _e & 65535),
                              !(ye + fe <= le);
                          ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((h >>>= ye), (le -= ye), (l.back += ye));
                        }
                        if (
                          ((h >>>= fe), (le -= fe), (l.back += fe), ge & 64)
                        ) {
                          ((e.msg = "invalid distance code"), (l.mode = oe));
                          break;
                        }
                        ((l.offset = he), (l.extra = ge & 15), (l.mode = J));
                      case J:
                        if (l.extra) {
                          for (Ie = l.extra; le < Ie; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          ((l.offset += h & ((1 << l.extra) - 1)),
                            (h >>>= l.extra),
                            (le -= l.extra),
                            (l.back += l.extra));
                        }
                        if (l.offset > l.dmax) {
                          ((e.msg = "invalid distance too far back"),
                            (l.mode = oe));
                          break;
                        }
                        l.mode = Z;
                      case Z:
                        if (g === 0) break e;
                        if (((ce = ue - g), l.offset > ce)) {
                          if (((ce = l.offset - ce), ce > l.whave && l.sane)) {
                            ((e.msg = "invalid distance too far back"),
                              (l.mode = oe));
                            break;
                          }
                          (ce > l.wnext
                            ? ((ce -= l.wnext), (me = l.wsize - ce))
                            : (me = l.wnext - ce),
                            ce > l.length && (ce = l.length),
                            (pe = l.window));
                        } else ((pe = u), (me = _ - l.offset), (ce = l.length));
                        (ce > g && (ce = g), (g -= ce), (l.length -= ce));
                        do u[_++] = pe[me++];
                        while (--ce);
                        l.length === 0 && (l.mode = Q);
                        break;
                      case ee:
                        if (g === 0) break e;
                        ((u[_++] = l.length), g--, (l.mode = Q));
                        break;
                      case te:
                        if (l.wrap) {
                          for (; le < 32; ) {
                            if (f === 0) break e;
                            (f--, (h |= s[p++] << le), (le += 8));
                          }
                          if (
                            ((ue -= g),
                            (e.total_out += ue),
                            (l.total += ue),
                            ue &&
                              (e.adler = l.check =
                                l.flags
                                  ? (0, o.default)(l.check, u, ue, _ - ue)
                                  : (0, r.default)(l.check, u, ue, _ - ue)),
                            (ue = g),
                            (l.flags ? h : de(h)) !== l.check)
                          ) {
                            ((e.msg = "incorrect data check"), (l.mode = oe));
                            break;
                          }
                          ((h = 0), (le = 0));
                        }
                        l.mode = ne;
                      case ne:
                        if (l.wrap && l.flags) {
                          for (; le < 32; ) {
                            if (f === 0) break e;
                            (f--, (h += s[p++] << le), (le += 8));
                          }
                          if (h !== (l.total & 4294967295)) {
                            ((e.msg = "incorrect length check"), (l.mode = oe));
                            break;
                          }
                          ((h = 0), (le = 0));
                        }
                        l.mode = re;
                      case re:
                        Le = S;
                        break e;
                      case oe:
                        Le = E;
                        break e;
                      case ae:
                        return k;
                      case ie:
                      default:
                        return L;
                    }
                  return (
                    (e.next_out = _),
                    (e.avail_out = g),
                    (e.next_in = p),
                    (e.avail_in = f),
                    (l.hold = h),
                    (l.bits = le),
                    (l.wsize ||
                      (ue !== e.avail_out &&
                        l.mode < oe &&
                        (l.mode < te || t !== y))) &&
                    Se(e, e.output, e.next_out, ue - e.avail_out)
                      ? ((l.mode = ae), k)
                      : ((se -= e.avail_in),
                        (ue -= e.avail_out),
                        (e.total_in += se),
                        (e.total_out += ue),
                        (l.total += ue),
                        l.wrap &&
                          ue &&
                          (e.adler = l.check =
                            l.flags
                              ? (0, o.default)(l.check, u, ue, e.next_out - ue)
                              : (0, r.default)(
                                  l.check,
                                  u,
                                  ue,
                                  e.next_out - ue,
                                )),
                        (e.data_type =
                          l.bits +
                          (l.last ? 64 : 0) +
                          (l.mode === W ? 128 : 0) +
                          (l.mode === K || l.mode === V ? 256 : 0)),
                        ((se === 0 && ue === 0) || t === y) &&
                          Le === v &&
                          (Le = I),
                        Le)
                  );
                }
                function Le(e) {
                  if (!e || !e.state) return L;
                  var t = e.state;
                  return (t.window && (t.window = null), (e.state = null), v);
                }
                function Ee(e, t) {
                  var n;
                  return !e || !e.state || ((n = e.state), (n.wrap & 2) === 0)
                    ? L
                    : ((n.head = t), (t.done = !1), v);
                }
                function ke(e, t) {
                  var n = t.length,
                    o,
                    a,
                    i;
                  return !e ||
                    !e.state ||
                    ((o = e.state), o.wrap !== 0 && o.mode !== B)
                    ? L
                    : o.mode === B &&
                        ((a = 1),
                        (a = (0, r.default)(a, t, n, 0)),
                        a !== o.check)
                      ? E
                      : ((i = Se(e, t, n, n)),
                        i ? ((o.mode = ae), k) : ((o.havedict = 1), v));
                }
                var Ie = (t.inflateInfo = "pako inflate (from Nodeca project)");
              },
          }),
          C = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/zstream.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = e));
                function e() {
                  ((this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0));
                }
              },
          }),
          b = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/inflator.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = y(),
                  n = r(C());
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o(e) {
                  "@babel/helpers - typeof";
                  return (
                    (o =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    o(e)
                  );
                }
                function a(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function i(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, s(r.key), r));
                  }
                }
                function l(e, t, n) {
                  return (
                    t && i(e.prototype, t),
                    n && i(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function s(e) {
                  var t = u(e, "string");
                  return o(t) == "symbol" ? t : t + "";
                }
                function u(e, t) {
                  if (o(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (o(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var c = (t.default = (function () {
                  function t() {
                    (a(this, t),
                      (this.strm = new n.default()),
                      (this.chunkSize = 1024 * 10 * 10),
                      (this.strm.output = new Uint8Array(this.chunkSize)),
                      (0, e.inflateInit)(this.strm));
                  }
                  return l(t, [
                    {
                      key: "setInput",
                      value: function (t) {
                        t
                          ? ((this.strm.input = t),
                            (this.strm.avail_in = this.strm.input.length),
                            (this.strm.next_in = 0))
                          : ((this.strm.input = null),
                            (this.strm.avail_in = 0),
                            (this.strm.next_in = 0));
                      },
                    },
                    {
                      key: "inflate",
                      value: function (n) {
                        (n > this.chunkSize &&
                          ((this.chunkSize = n),
                          (this.strm.output = new Uint8Array(this.chunkSize))),
                          (this.strm.next_out = 0),
                          (this.strm.avail_out = n));
                        var t = (0, e.inflate)(this.strm, 0);
                        if (t < 0) throw new Error("zlib inflate failed");
                        if (this.strm.next_out != n)
                          throw new Error("Incomplete zlib block");
                        return new Uint8Array(
                          this.strm.output.buffer,
                          0,
                          this.strm.next_out,
                        );
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        (0, e.inflateReset)(this.strm);
                      },
                    },
                  ]);
                })());
              },
          }),
          v = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/trees.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t._tr_align = fe),
                  (t._tr_flush_block = ge),
                  (t._tr_init = pe),
                  (t._tr_stored_block = _e),
                  (t._tr_tally = he));
                var n = o(p());
                function r(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function o(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var o = r(n);
                  if (o && o.has(t)) return o.get(t);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in t)
                    if (l !== "default" && {}.hasOwnProperty.call(t, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(t, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = t[l]);
                    }
                  return ((a.default = t), o && o.set(t, a), a);
                }
                var a = 4,
                  i = 0,
                  l = 1,
                  s = 2;
                function u(e) {
                  for (var t = e.length; --t >= 0; ) e[t] = 0;
                }
                var c = 0,
                  d = 1,
                  m = 2,
                  _ = 3,
                  f = 258,
                  g = 29,
                  h = 256,
                  y = h + 1 + g,
                  C = 30,
                  b = 19,
                  v = 2 * y + 1,
                  S = 15,
                  R = 16,
                  L = 7,
                  E = 256,
                  k = 16,
                  I = 17,
                  T = 18,
                  D = [
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
                    4, 4, 4, 4, 5, 5, 5, 5, 0,
                  ],
                  x = [
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
                    9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                  ],
                  $ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  P = [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                    1, 15,
                  ],
                  N = 512,
                  M = new Array((y + 2) * 2);
                u(M);
                var w = new Array(C * 2);
                u(w);
                var A = new Array(N);
                u(A);
                var F = new Array(f - _ + 1);
                u(F);
                var O = new Array(g);
                u(O);
                var B = new Array(C);
                u(B);
                function W(e, t, n, r, o) {
                  ((this.static_tree = e),
                    (this.extra_bits = t),
                    (this.extra_base = n),
                    (this.elems = r),
                    (this.max_length = o),
                    (this.has_stree = e && e.length));
                }
                var q, U, V;
                function H(e, t) {
                  ((this.dyn_tree = e),
                    (this.max_code = 0),
                    (this.stat_desc = t));
                }
                function G(e) {
                  return e < 256 ? A[e] : A[256 + (e >>> 7)];
                }
                function z(e, t) {
                  ((e.pending_buf[e.pending++] = t & 255),
                    (e.pending_buf[e.pending++] = (t >>> 8) & 255));
                }
                function j(e, t, n) {
                  e.bi_valid > R - n
                    ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      z(e, e.bi_buf),
                      (e.bi_buf = t >> (R - e.bi_valid)),
                      (e.bi_valid += n - R))
                    : ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      (e.bi_valid += n));
                }
                function K(e, t, n) {
                  j(e, n[t * 2], n[t * 2 + 1]);
                }
                function Q(e, t) {
                  var n = 0;
                  do ((n |= e & 1), (e >>>= 1), (n <<= 1));
                  while (--t > 0);
                  return n >>> 1;
                }
                function X(e) {
                  e.bi_valid === 16
                    ? (z(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                    : e.bi_valid >= 8 &&
                      ((e.pending_buf[e.pending++] = e.bi_buf & 255),
                      (e.bi_buf >>= 8),
                      (e.bi_valid -= 8));
                }
                function Y(e, t) {
                  var n = t.dyn_tree,
                    r = t.max_code,
                    o = t.stat_desc.static_tree,
                    a = t.stat_desc.has_stree,
                    i = t.stat_desc.extra_bits,
                    l = t.stat_desc.extra_base,
                    s = t.stat_desc.max_length,
                    u,
                    c,
                    d,
                    m,
                    p,
                    _,
                    f = 0;
                  for (m = 0; m <= S; m++) e.bl_count[m] = 0;
                  for (
                    n[e.heap[e.heap_max] * 2 + 1] = 0, u = e.heap_max + 1;
                    u < v;
                    u++
                  )
                    ((c = e.heap[u]),
                      (m = n[n[c * 2 + 1] * 2 + 1] + 1),
                      m > s && ((m = s), f++),
                      (n[c * 2 + 1] = m),
                      !(c > r) &&
                        (e.bl_count[m]++,
                        (p = 0),
                        c >= l && (p = i[c - l]),
                        (_ = n[c * 2]),
                        (e.opt_len += _ * (m + p)),
                        a && (e.static_len += _ * (o[c * 2 + 1] + p))));
                  if (f !== 0) {
                    do {
                      for (m = s - 1; e.bl_count[m] === 0; ) m--;
                      (e.bl_count[m]--,
                        (e.bl_count[m + 1] += 2),
                        e.bl_count[s]--,
                        (f -= 2));
                    } while (f > 0);
                    for (m = s; m !== 0; m--)
                      for (c = e.bl_count[m]; c !== 0; )
                        ((d = e.heap[--u]),
                          !(d > r) &&
                            (n[d * 2 + 1] !== m &&
                              ((e.opt_len += (m - n[d * 2 + 1]) * n[d * 2]),
                              (n[d * 2 + 1] = m)),
                            c--));
                  }
                }
                function J(e, t, n) {
                  var r = new Array(S + 1),
                    o = 0,
                    a,
                    i;
                  for (a = 1; a <= S; a++) r[a] = o = (o + n[a - 1]) << 1;
                  for (i = 0; i <= t; i++) {
                    var l = e[i * 2 + 1];
                    l !== 0 && (e[i * 2] = Q(r[l]++, l));
                  }
                }
                function Z() {
                  var e,
                    t,
                    n,
                    r,
                    o,
                    a = new Array(S + 1);
                  for (n = 0, r = 0; r < g - 1; r++)
                    for (O[r] = n, e = 0; e < 1 << D[r]; e++) F[n++] = r;
                  for (F[n - 1] = r, o = 0, r = 0; r < 16; r++)
                    for (B[r] = o, e = 0; e < 1 << x[r]; e++) A[o++] = r;
                  for (o >>= 7; r < C; r++)
                    for (B[r] = o << 7, e = 0; e < 1 << (x[r] - 7); e++)
                      A[256 + o++] = r;
                  for (t = 0; t <= S; t++) a[t] = 0;
                  for (e = 0; e <= 143; ) ((M[e * 2 + 1] = 8), e++, a[8]++);
                  for (; e <= 255; ) ((M[e * 2 + 1] = 9), e++, a[9]++);
                  for (; e <= 279; ) ((M[e * 2 + 1] = 7), e++, a[7]++);
                  for (; e <= 287; ) ((M[e * 2 + 1] = 8), e++, a[8]++);
                  for (J(M, y + 1, a), e = 0; e < C; e++)
                    ((w[e * 2 + 1] = 5), (w[e * 2] = Q(e, 5)));
                  ((q = new W(M, D, h + 1, y, S)),
                    (U = new W(w, x, 0, C, S)),
                    (V = new W(new Array(0), $, 0, b, L)));
                }
                function ee(e) {
                  var t;
                  for (t = 0; t < y; t++) e.dyn_ltree[t * 2] = 0;
                  for (t = 0; t < C; t++) e.dyn_dtree[t * 2] = 0;
                  for (t = 0; t < b; t++) e.bl_tree[t * 2] = 0;
                  ((e.dyn_ltree[E * 2] = 1),
                    (e.opt_len = e.static_len = 0),
                    (e.last_lit = e.matches = 0));
                }
                function te(e) {
                  (e.bi_valid > 8
                    ? z(e, e.bi_buf)
                    : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0));
                }
                function ne(e, t, r, o) {
                  (te(e),
                    o && (z(e, r), z(e, ~r)),
                    n.arraySet(e.pending_buf, e.window, t, r, e.pending),
                    (e.pending += r));
                }
                function re(e, t, n, r) {
                  var o = t * 2,
                    a = n * 2;
                  return e[o] < e[a] || (e[o] === e[a] && r[t] <= r[n]);
                }
                function oe(e, t, n) {
                  for (
                    var r = e.heap[n], o = n << 1;
                    o <= e.heap_len &&
                    (o < e.heap_len &&
                      re(t, e.heap[o + 1], e.heap[o], e.depth) &&
                      o++,
                    !re(t, r, e.heap[o], e.depth));
                  )
                    ((e.heap[n] = e.heap[o]), (n = o), (o <<= 1));
                  e.heap[n] = r;
                }
                function ae(e, t, n) {
                  var r,
                    o,
                    a = 0,
                    i,
                    l;
                  if (e.last_lit !== 0)
                    do
                      ((r =
                        (e.pending_buf[e.d_buf + a * 2] << 8) |
                        e.pending_buf[e.d_buf + a * 2 + 1]),
                        (o = e.pending_buf[e.l_buf + a]),
                        a++,
                        r === 0
                          ? K(e, o, t)
                          : ((i = F[o]),
                            K(e, i + h + 1, t),
                            (l = D[i]),
                            l !== 0 && ((o -= O[i]), j(e, o, l)),
                            r--,
                            (i = G(r)),
                            K(e, i, n),
                            (l = x[i]),
                            l !== 0 && ((r -= B[i]), j(e, r, l))));
                    while (a < e.last_lit);
                  K(e, E, t);
                }
                function ie(e, t) {
                  var n = t.dyn_tree,
                    r = t.stat_desc.static_tree,
                    o = t.stat_desc.has_stree,
                    a = t.stat_desc.elems,
                    i,
                    l,
                    s = -1,
                    u;
                  for (e.heap_len = 0, e.heap_max = v, i = 0; i < a; i++)
                    n[i * 2] !== 0
                      ? ((e.heap[++e.heap_len] = s = i), (e.depth[i] = 0))
                      : (n[i * 2 + 1] = 0);
                  for (; e.heap_len < 2; )
                    ((u = e.heap[++e.heap_len] = s < 2 ? ++s : 0),
                      (n[u * 2] = 1),
                      (e.depth[u] = 0),
                      e.opt_len--,
                      o && (e.static_len -= r[u * 2 + 1]));
                  for (t.max_code = s, i = e.heap_len >> 1; i >= 1; i--)
                    oe(e, n, i);
                  u = a;
                  do
                    ((i = e.heap[1]),
                      (e.heap[1] = e.heap[e.heap_len--]),
                      oe(e, n, 1),
                      (l = e.heap[1]),
                      (e.heap[--e.heap_max] = i),
                      (e.heap[--e.heap_max] = l),
                      (n[u * 2] = n[i * 2] + n[l * 2]),
                      (e.depth[u] =
                        (e.depth[i] >= e.depth[l] ? e.depth[i] : e.depth[l]) +
                        1),
                      (n[i * 2 + 1] = n[l * 2 + 1] = u),
                      (e.heap[1] = u++),
                      oe(e, n, 1));
                  while (e.heap_len >= 2);
                  ((e.heap[--e.heap_max] = e.heap[1]),
                    Y(e, t),
                    J(n, s, e.bl_count));
                }
                function le(e, t, n) {
                  var r,
                    o = -1,
                    a,
                    i = t[1],
                    l = 0,
                    s = 7,
                    u = 4;
                  for (
                    i === 0 && ((s = 138), (u = 3)),
                      t[(n + 1) * 2 + 1] = 65535,
                      r = 0;
                    r <= n;
                    r++
                  )
                    ((a = i),
                      (i = t[(r + 1) * 2 + 1]),
                      !(++l < s && a === i) &&
                        (l < u
                          ? (e.bl_tree[a * 2] += l)
                          : a !== 0
                            ? (a !== o && e.bl_tree[a * 2]++,
                              e.bl_tree[k * 2]++)
                            : l <= 10
                              ? e.bl_tree[I * 2]++
                              : e.bl_tree[T * 2]++,
                        (l = 0),
                        (o = a),
                        i === 0
                          ? ((s = 138), (u = 3))
                          : a === i
                            ? ((s = 6), (u = 3))
                            : ((s = 7), (u = 4))));
                }
                function se(e, t, n) {
                  var r,
                    o = -1,
                    a,
                    i = t[1],
                    l = 0,
                    s = 7,
                    u = 4;
                  for (i === 0 && ((s = 138), (u = 3)), r = 0; r <= n; r++)
                    if (
                      ((a = i), (i = t[(r + 1) * 2 + 1]), !(++l < s && a === i))
                    ) {
                      if (l < u)
                        do K(e, a, e.bl_tree);
                        while (--l !== 0);
                      else
                        a !== 0
                          ? (a !== o && (K(e, a, e.bl_tree), l--),
                            K(e, k, e.bl_tree),
                            j(e, l - 3, 2))
                          : l <= 10
                            ? (K(e, I, e.bl_tree), j(e, l - 3, 3))
                            : (K(e, T, e.bl_tree), j(e, l - 11, 7));
                      ((l = 0),
                        (o = a),
                        i === 0
                          ? ((s = 138), (u = 3))
                          : a === i
                            ? ((s = 6), (u = 3))
                            : ((s = 7), (u = 4)));
                    }
                }
                function ue(e) {
                  var t;
                  for (
                    le(e, e.dyn_ltree, e.l_desc.max_code),
                      le(e, e.dyn_dtree, e.d_desc.max_code),
                      ie(e, e.bl_desc),
                      t = b - 1;
                    t >= 3 && e.bl_tree[P[t] * 2 + 1] === 0;
                    t--
                  );
                  return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
                }
                function ce(e, t, n, r) {
                  var o;
                  for (
                    j(e, t - 257, 5), j(e, n - 1, 5), j(e, r - 4, 4), o = 0;
                    o < r;
                    o++
                  )
                    j(e, e.bl_tree[P[o] * 2 + 1], 3);
                  (se(e, e.dyn_ltree, t - 1), se(e, e.dyn_dtree, n - 1));
                }
                function de(e) {
                  var t = 4093624447,
                    n;
                  for (n = 0; n <= 31; n++, t >>>= 1)
                    if (t & 1 && e.dyn_ltree[n * 2] !== 0) return i;
                  if (
                    e.dyn_ltree[18] !== 0 ||
                    e.dyn_ltree[20] !== 0 ||
                    e.dyn_ltree[26] !== 0
                  )
                    return l;
                  for (n = 32; n < h; n++)
                    if (e.dyn_ltree[n * 2] !== 0) return l;
                  return i;
                }
                var me = !1;
                function pe(e) {
                  (me || (Z(), (me = !0)),
                    (e.l_desc = new H(e.dyn_ltree, q)),
                    (e.d_desc = new H(e.dyn_dtree, U)),
                    (e.bl_desc = new H(e.bl_tree, V)),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0),
                    ee(e));
                }
                function _e(e, t, n, r) {
                  (j(e, (c << 1) + (r ? 1 : 0), 3), ne(e, t, n, !0));
                }
                function fe(e) {
                  (j(e, d << 1, 3), K(e, E, M), X(e));
                }
                function ge(e, t, n, r) {
                  var o,
                    i,
                    l = 0;
                  (e.level > 0
                    ? (e.strm.data_type === s && (e.strm.data_type = de(e)),
                      ie(e, e.l_desc),
                      ie(e, e.d_desc),
                      (l = ue(e)),
                      (o = (e.opt_len + 3 + 7) >>> 3),
                      (i = (e.static_len + 3 + 7) >>> 3),
                      i <= o && (o = i))
                    : (o = i = n + 5),
                    n + 4 <= o && t !== -1
                      ? _e(e, t, n, r)
                      : e.strategy === a || i === o
                        ? (j(e, (d << 1) + (r ? 1 : 0), 3), ae(e, M, w))
                        : (j(e, (m << 1) + (r ? 1 : 0), 3),
                          ce(
                            e,
                            e.l_desc.max_code + 1,
                            e.d_desc.max_code + 1,
                            l + 1,
                          ),
                          ae(e, e.dyn_ltree, e.dyn_dtree)),
                    ee(e),
                    r && te(e));
                }
                function he(e, t, n) {
                  return (
                    (e.pending_buf[e.d_buf + e.last_lit * 2] = (t >>> 8) & 255),
                    (e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255),
                    (e.pending_buf[e.l_buf + e.last_lit] = n & 255),
                    e.last_lit++,
                    t === 0
                      ? e.dyn_ltree[n * 2]++
                      : (e.matches++,
                        t--,
                        e.dyn_ltree[(F[n] + h + 1) * 2]++,
                        e.dyn_dtree[G(t) * 2]++),
                    e.last_lit === e.lit_bufsize - 1
                  );
                }
              },
          }),
          S = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/messages.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = (t.default = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version",
                });
              },
          }),
          R = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/vendor/pako/lib/zlib/deflate.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Z_UNKNOWN =
                    t.Z_STREAM_ERROR =
                    t.Z_STREAM_END =
                    t.Z_RLE =
                    t.Z_PARTIAL_FLUSH =
                    t.Z_OK =
                    t.Z_NO_FLUSH =
                    t.Z_HUFFMAN_ONLY =
                    t.Z_FULL_FLUSH =
                    t.Z_FIXED =
                    t.Z_FINISH =
                    t.Z_FILTERED =
                    t.Z_DEFLATED =
                    t.Z_DEFAULT_STRATEGY =
                    t.Z_DEFAULT_COMPRESSION =
                    t.Z_DATA_ERROR =
                    t.Z_BUF_ERROR =
                    t.Z_BLOCK =
                      void 0),
                  (t.deflate = De),
                  (t.deflateEnd = xe),
                  (t.deflateInfo = void 0),
                  (t.deflateInit = Te),
                  (t.deflateInit2 = Ie),
                  (t.deflateReset = Ee),
                  (t.deflateResetKeep = Le),
                  (t.deflateSetDictionary = $e),
                  (t.deflateSetHeader = ke));
                var n = u(p()),
                  r = u(v()),
                  o = l(_()),
                  a = l(f()),
                  i = l(S());
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function u(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var r = s(n);
                  if (r && r.has(t)) return r.get(t);
                  var o = { __proto__: null },
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in t)
                    if (i !== "default" && {}.hasOwnProperty.call(t, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(t, i) : null;
                      l && (l.get || l.set)
                        ? Object.defineProperty(o, i, l)
                        : (o[i] = t[i]);
                    }
                  return ((o.default = t), r && r.set(t, o), o);
                }
                var c = (t.Z_NO_FLUSH = 0),
                  d = (t.Z_PARTIAL_FLUSH = 1),
                  m = (t.Z_FULL_FLUSH = 3),
                  g = (t.Z_FINISH = 4),
                  h = (t.Z_BLOCK = 5),
                  y = (t.Z_OK = 0),
                  C = (t.Z_STREAM_END = 1),
                  b = (t.Z_STREAM_ERROR = -2),
                  R = (t.Z_DATA_ERROR = -3),
                  L = (t.Z_BUF_ERROR = -5),
                  E = (t.Z_DEFAULT_COMPRESSION = -1),
                  k = (t.Z_FILTERED = 1),
                  I = (t.Z_HUFFMAN_ONLY = 2),
                  T = (t.Z_RLE = 3),
                  D = (t.Z_FIXED = 4),
                  x = (t.Z_DEFAULT_STRATEGY = 0),
                  $ = (t.Z_UNKNOWN = 2),
                  P = (t.Z_DEFLATED = 8),
                  N = 9,
                  M = 15,
                  w = 8,
                  A = 29,
                  F = 256,
                  O = F + 1 + A,
                  B = 30,
                  W = 19,
                  q = 2 * O + 1,
                  U = 15,
                  V = 3,
                  H = 258,
                  G = H + V + 1,
                  z = 32,
                  j = 42,
                  K = 69,
                  Q = 73,
                  X = 91,
                  Y = 103,
                  J = 113,
                  Z = 666,
                  ee = 1,
                  te = 2,
                  ne = 3,
                  re = 4,
                  oe = 3;
                function ae(e, t) {
                  return ((e.msg = i.default[t]), t);
                }
                function ie(e) {
                  return (e << 1) - (e > 4 ? 9 : 0);
                }
                function le(e) {
                  for (var t = e.length; --t >= 0; ) e[t] = 0;
                }
                function se(e) {
                  var t = e.state,
                    r = t.pending;
                  (r > e.avail_out && (r = e.avail_out),
                    r !== 0 &&
                      (n.arraySet(
                        e.output,
                        t.pending_buf,
                        t.pending_out,
                        r,
                        e.next_out,
                      ),
                      (e.next_out += r),
                      (t.pending_out += r),
                      (e.total_out += r),
                      (e.avail_out -= r),
                      (t.pending -= r),
                      t.pending === 0 && (t.pending_out = 0)));
                }
                function ue(e, t) {
                  (r._tr_flush_block(
                    e,
                    e.block_start >= 0 ? e.block_start : -1,
                    e.strstart - e.block_start,
                    t,
                  ),
                    (e.block_start = e.strstart),
                    se(e.strm));
                }
                function ce(e, t) {
                  e.pending_buf[e.pending++] = t;
                }
                function de(e, t) {
                  ((e.pending_buf[e.pending++] = (t >>> 8) & 255),
                    (e.pending_buf[e.pending++] = t & 255));
                }
                function me(e, t, r, i) {
                  var l = e.avail_in;
                  return (
                    l > i && (l = i),
                    l === 0
                      ? 0
                      : ((e.avail_in -= l),
                        n.arraySet(t, e.input, e.next_in, l, r),
                        e.state.wrap === 1
                          ? (e.adler = (0, o.default)(e.adler, t, l, r))
                          : e.state.wrap === 2 &&
                            (e.adler = (0, a.default)(e.adler, t, l, r)),
                        (e.next_in += l),
                        (e.total_in += l),
                        l)
                  );
                }
                function pe(e, t) {
                  var n = e.max_chain_length,
                    r = e.strstart,
                    o,
                    a,
                    i = e.prev_length,
                    l = e.nice_match,
                    s =
                      e.strstart > e.w_size - G
                        ? e.strstart - (e.w_size - G)
                        : 0,
                    u = e.window,
                    c = e.w_mask,
                    d = e.prev,
                    m = e.strstart + H,
                    p = u[r + i - 1],
                    _ = u[r + i];
                  (e.prev_length >= e.good_match && (n >>= 2),
                    l > e.lookahead && (l = e.lookahead));
                  do
                    if (
                      ((o = t),
                      !(
                        u[o + i] !== _ ||
                        u[o + i - 1] !== p ||
                        u[o] !== u[r] ||
                        u[++o] !== u[r + 1]
                      ))
                    ) {
                      ((r += 2), o++);
                      do;
                      while (
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        u[++r] === u[++o] &&
                        r < m
                      );
                      if (((a = H - (m - r)), (r = m - H), a > i)) {
                        if (((e.match_start = t), (i = a), a >= l)) break;
                        ((p = u[r + i - 1]), (_ = u[r + i]));
                      }
                    }
                  while ((t = d[t & c]) > s && --n !== 0);
                  return i <= e.lookahead ? i : e.lookahead;
                }
                function _e(e) {
                  var t = e.w_size,
                    r,
                    o,
                    a,
                    i,
                    l;
                  do {
                    if (
                      ((i = e.window_size - e.lookahead - e.strstart),
                      e.strstart >= t + (t - G))
                    ) {
                      (n.arraySet(e.window, e.window, t, t, 0),
                        (e.match_start -= t),
                        (e.strstart -= t),
                        (e.block_start -= t),
                        (o = e.hash_size),
                        (r = o));
                      do ((a = e.head[--r]), (e.head[r] = a >= t ? a - t : 0));
                      while (--o);
                      ((o = t), (r = o));
                      do ((a = e.prev[--r]), (e.prev[r] = a >= t ? a - t : 0));
                      while (--o);
                      i += t;
                    }
                    if (e.strm.avail_in === 0) break;
                    if (
                      ((o = me(e.strm, e.window, e.strstart + e.lookahead, i)),
                      (e.lookahead += o),
                      e.lookahead + e.insert >= V)
                    )
                      for (
                        l = e.strstart - e.insert,
                          e.ins_h = e.window[l],
                          e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[l + 1]) &
                            e.hash_mask;
                        e.insert &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^ e.window[l + V - 1]) &
                          e.hash_mask),
                        (e.prev[l & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = l),
                        l++,
                        e.insert--,
                        !(e.lookahead + e.insert < V));
                      );
                  } while (e.lookahead < G && e.strm.avail_in !== 0);
                }
                function fe(e, t) {
                  var n = 65535;
                  for (
                    n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);
                    ;
                  ) {
                    if (e.lookahead <= 1) {
                      if ((_e(e), e.lookahead === 0 && t === c)) return ee;
                      if (e.lookahead === 0) break;
                    }
                    ((e.strstart += e.lookahead), (e.lookahead = 0));
                    var r = e.block_start + n;
                    if (
                      ((e.strstart === 0 || e.strstart >= r) &&
                        ((e.lookahead = e.strstart - r),
                        (e.strstart = r),
                        ue(e, !1),
                        e.strm.avail_out === 0)) ||
                      (e.strstart - e.block_start >= e.w_size - G &&
                        (ue(e, !1), e.strm.avail_out === 0))
                    )
                      return ee;
                  }
                  return (
                    (e.insert = 0),
                    t === g
                      ? (ue(e, !0), e.strm.avail_out === 0 ? ne : re)
                      : (e.strstart > e.block_start &&
                          (ue(e, !1), e.strm.avail_out),
                        ee)
                  );
                }
                function ge(e, t) {
                  for (var n, o; ; ) {
                    if (e.lookahead < G) {
                      if ((_e(e), e.lookahead < G && t === c)) return ee;
                      if (e.lookahead === 0) break;
                    }
                    if (
                      ((n = 0),
                      e.lookahead >= V &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + V - 1]) &
                          e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      n !== 0 &&
                        e.strstart - n <= e.w_size - G &&
                        (e.match_length = pe(e, n)),
                      e.match_length >= V)
                    )
                      if (
                        ((o = r._tr_tally(
                          e,
                          e.strstart - e.match_start,
                          e.match_length - V,
                        )),
                        (e.lookahead -= e.match_length),
                        e.match_length <= e.max_lazy_match && e.lookahead >= V)
                      ) {
                        e.match_length--;
                        do
                          (e.strstart++,
                            (e.ins_h =
                              ((e.ins_h << e.hash_shift) ^
                                e.window[e.strstart + V - 1]) &
                              e.hash_mask),
                            (n = e.prev[e.strstart & e.w_mask] =
                              e.head[e.ins_h]),
                            (e.head[e.ins_h] = e.strstart));
                        while (--e.match_length !== 0);
                        e.strstart++;
                      } else
                        ((e.strstart += e.match_length),
                          (e.match_length = 0),
                          (e.ins_h = e.window[e.strstart]),
                          (e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + 1]) &
                            e.hash_mask));
                    else
                      ((o = r._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++);
                    if (o && (ue(e, !1), e.strm.avail_out === 0)) return ee;
                  }
                  return (
                    (e.insert = e.strstart < V - 1 ? e.strstart : V - 1),
                    t === g
                      ? (ue(e, !0), e.strm.avail_out === 0 ? ne : re)
                      : e.last_lit && (ue(e, !1), e.strm.avail_out === 0)
                        ? ee
                        : te
                  );
                }
                function he(e, t) {
                  for (var n, o, a; ; ) {
                    if (e.lookahead < G) {
                      if ((_e(e), e.lookahead < G && t === c)) return ee;
                      if (e.lookahead === 0) break;
                    }
                    if (
                      ((n = 0),
                      e.lookahead >= V &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + V - 1]) &
                          e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      (e.prev_length = e.match_length),
                      (e.prev_match = e.match_start),
                      (e.match_length = V - 1),
                      n !== 0 &&
                        e.prev_length < e.max_lazy_match &&
                        e.strstart - n <= e.w_size - G &&
                        ((e.match_length = pe(e, n)),
                        e.match_length <= 5 &&
                          (e.strategy === k ||
                            (e.match_length === V &&
                              e.strstart - e.match_start > 4096)) &&
                          (e.match_length = V - 1)),
                      e.prev_length >= V && e.match_length <= e.prev_length)
                    ) {
                      ((a = e.strstart + e.lookahead - V),
                        (o = r._tr_tally(
                          e,
                          e.strstart - 1 - e.prev_match,
                          e.prev_length - V,
                        )),
                        (e.lookahead -= e.prev_length - 1),
                        (e.prev_length -= 2));
                      do
                        ++e.strstart <= a &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + V - 1]) &
                            e.hash_mask),
                          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart));
                      while (--e.prev_length !== 0);
                      if (
                        ((e.match_available = 0),
                        (e.match_length = V - 1),
                        e.strstart++,
                        o && (ue(e, !1), e.strm.avail_out === 0))
                      )
                        return ee;
                    } else if (e.match_available) {
                      if (
                        ((o = r._tr_tally(e, 0, e.window[e.strstart - 1])),
                        o && ue(e, !1),
                        e.strstart++,
                        e.lookahead--,
                        e.strm.avail_out === 0)
                      )
                        return ee;
                    } else
                      ((e.match_available = 1), e.strstart++, e.lookahead--);
                  }
                  return (
                    e.match_available &&
                      ((o = r._tr_tally(e, 0, e.window[e.strstart - 1])),
                      (e.match_available = 0)),
                    (e.insert = e.strstart < V - 1 ? e.strstart : V - 1),
                    t === g
                      ? (ue(e, !0), e.strm.avail_out === 0 ? ne : re)
                      : e.last_lit && (ue(e, !1), e.strm.avail_out === 0)
                        ? ee
                        : te
                  );
                }
                function ye(e, t) {
                  for (var n, o, a, i, l = e.window; ; ) {
                    if (e.lookahead <= H) {
                      if ((_e(e), e.lookahead <= H && t === c)) return ee;
                      if (e.lookahead === 0) break;
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= V &&
                        e.strstart > 0 &&
                        ((a = e.strstart - 1),
                        (o = l[a]),
                        o === l[++a] && o === l[++a] && o === l[++a]))
                    ) {
                      i = e.strstart + H;
                      do;
                      while (
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        o === l[++a] &&
                        a < i
                      );
                      ((e.match_length = H - (i - a)),
                        e.match_length > e.lookahead &&
                          (e.match_length = e.lookahead));
                    }
                    if (
                      (e.match_length >= V
                        ? ((n = r._tr_tally(e, 1, e.match_length - V)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((n = r._tr_tally(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      n && (ue(e, !1), e.strm.avail_out === 0))
                    )
                      return ee;
                  }
                  return (
                    (e.insert = 0),
                    t === g
                      ? (ue(e, !0), e.strm.avail_out === 0 ? ne : re)
                      : e.last_lit && (ue(e, !1), e.strm.avail_out === 0)
                        ? ee
                        : te
                  );
                }
                function Ce(e, t) {
                  for (var n; ; ) {
                    if (e.lookahead === 0 && (_e(e), e.lookahead === 0)) {
                      if (t === c) return ee;
                      break;
                    }
                    if (
                      ((e.match_length = 0),
                      (n = r._tr_tally(e, 0, e.window[e.strstart])),
                      e.lookahead--,
                      e.strstart++,
                      n && (ue(e, !1), e.strm.avail_out === 0))
                    )
                      return ee;
                  }
                  return (
                    (e.insert = 0),
                    t === g
                      ? (ue(e, !0), e.strm.avail_out === 0 ? ne : re)
                      : e.last_lit && (ue(e, !1), e.strm.avail_out === 0)
                        ? ee
                        : te
                  );
                }
                function be(e, t, n, r, o) {
                  ((this.good_length = e),
                    (this.max_lazy = t),
                    (this.nice_length = n),
                    (this.max_chain = r),
                    (this.func = o));
                }
                var ve;
                ve = [
                  new be(0, 0, 0, 0, fe),
                  new be(4, 4, 8, 4, ge),
                  new be(4, 5, 16, 8, ge),
                  new be(4, 6, 32, 32, ge),
                  new be(4, 4, 16, 16, he),
                  new be(8, 16, 32, 32, he),
                  new be(8, 16, 128, 128, he),
                  new be(8, 32, 128, 256, he),
                  new be(32, 128, 258, 1024, he),
                  new be(32, 258, 258, 4096, he),
                ];
                function Se(e) {
                  ((e.window_size = 2 * e.w_size),
                    le(e.head),
                    (e.max_lazy_match = ve[e.level].max_lazy),
                    (e.good_match = ve[e.level].good_length),
                    (e.nice_match = ve[e.level].nice_length),
                    (e.max_chain_length = ve[e.level].max_chain),
                    (e.strstart = 0),
                    (e.block_start = 0),
                    (e.lookahead = 0),
                    (e.insert = 0),
                    (e.match_length = e.prev_length = V - 1),
                    (e.match_available = 0),
                    (e.ins_h = 0));
                }
                function Re() {
                  ((this.strm = null),
                    (this.status = 0),
                    (this.pending_buf = null),
                    (this.pending_buf_size = 0),
                    (this.pending_out = 0),
                    (this.pending = 0),
                    (this.wrap = 0),
                    (this.gzhead = null),
                    (this.gzindex = 0),
                    (this.method = P),
                    (this.last_flush = -1),
                    (this.w_size = 0),
                    (this.w_bits = 0),
                    (this.w_mask = 0),
                    (this.window = null),
                    (this.window_size = 0),
                    (this.prev = null),
                    (this.head = null),
                    (this.ins_h = 0),
                    (this.hash_size = 0),
                    (this.hash_bits = 0),
                    (this.hash_mask = 0),
                    (this.hash_shift = 0),
                    (this.block_start = 0),
                    (this.match_length = 0),
                    (this.prev_match = 0),
                    (this.match_available = 0),
                    (this.strstart = 0),
                    (this.match_start = 0),
                    (this.lookahead = 0),
                    (this.prev_length = 0),
                    (this.max_chain_length = 0),
                    (this.max_lazy_match = 0),
                    (this.level = 0),
                    (this.strategy = 0),
                    (this.good_match = 0),
                    (this.nice_match = 0),
                    (this.dyn_ltree = new n.Buf16(q * 2)),
                    (this.dyn_dtree = new n.Buf16((2 * B + 1) * 2)),
                    (this.bl_tree = new n.Buf16((2 * W + 1) * 2)),
                    le(this.dyn_ltree),
                    le(this.dyn_dtree),
                    le(this.bl_tree),
                    (this.l_desc = null),
                    (this.d_desc = null),
                    (this.bl_desc = null),
                    (this.bl_count = new n.Buf16(U + 1)),
                    (this.heap = new n.Buf16(2 * O + 1)),
                    le(this.heap),
                    (this.heap_len = 0),
                    (this.heap_max = 0),
                    (this.depth = new n.Buf16(2 * O + 1)),
                    le(this.depth),
                    (this.l_buf = 0),
                    (this.lit_bufsize = 0),
                    (this.last_lit = 0),
                    (this.d_buf = 0),
                    (this.opt_len = 0),
                    (this.static_len = 0),
                    (this.matches = 0),
                    (this.insert = 0),
                    (this.bi_buf = 0),
                    (this.bi_valid = 0));
                }
                function Le(e) {
                  var t;
                  return !e || !e.state
                    ? ae(e, b)
                    : ((e.total_in = e.total_out = 0),
                      (e.data_type = $),
                      (t = e.state),
                      (t.pending = 0),
                      (t.pending_out = 0),
                      t.wrap < 0 && (t.wrap = -t.wrap),
                      (t.status = t.wrap ? j : J),
                      (e.adler = t.wrap === 2 ? 0 : 1),
                      (t.last_flush = c),
                      r._tr_init(t),
                      y);
                }
                function Ee(e) {
                  var t = Le(e);
                  return (t === y && Se(e.state), t);
                }
                function ke(e, t) {
                  return !e || !e.state || e.state.wrap !== 2
                    ? b
                    : ((e.state.gzhead = t), y);
                }
                function Ie(e, t, r, o, a, i) {
                  if (!e) return b;
                  var l = 1;
                  if (
                    (t === E && (t = 6),
                    o < 0
                      ? ((l = 0), (o = -o))
                      : o > 15 && ((l = 2), (o -= 16)),
                    a < 1 ||
                      a > N ||
                      r !== P ||
                      o < 8 ||
                      o > 15 ||
                      t < 0 ||
                      t > 9 ||
                      i < 0 ||
                      i > D)
                  )
                    return ae(e, b);
                  o === 8 && (o = 9);
                  var s = new Re();
                  return (
                    (e.state = s),
                    (s.strm = e),
                    (s.wrap = l),
                    (s.gzhead = null),
                    (s.w_bits = o),
                    (s.w_size = 1 << s.w_bits),
                    (s.w_mask = s.w_size - 1),
                    (s.hash_bits = a + 7),
                    (s.hash_size = 1 << s.hash_bits),
                    (s.hash_mask = s.hash_size - 1),
                    (s.hash_shift = ~~((s.hash_bits + V - 1) / V)),
                    (s.window = new n.Buf8(s.w_size * 2)),
                    (s.head = new n.Buf16(s.hash_size)),
                    (s.prev = new n.Buf16(s.w_size)),
                    (s.lit_bufsize = 1 << (a + 6)),
                    (s.pending_buf_size = s.lit_bufsize * 4),
                    (s.pending_buf = new n.Buf8(s.pending_buf_size)),
                    (s.d_buf = 1 * s.lit_bufsize),
                    (s.l_buf = 3 * s.lit_bufsize),
                    (s.level = t),
                    (s.strategy = i),
                    (s.method = r),
                    Ee(e)
                  );
                }
                function Te(e, t) {
                  return Ie(e, t, P, M, w, x);
                }
                function De(e, t) {
                  var n, o, i, l;
                  if (!e || !e.state || t > h || t < 0) return e ? ae(e, b) : b;
                  if (
                    ((o = e.state),
                    !e.output ||
                      (!e.input && e.avail_in !== 0) ||
                      (o.status === Z && t !== g))
                  )
                    return ae(e, e.avail_out === 0 ? L : b);
                  if (
                    ((o.strm = e),
                    (n = o.last_flush),
                    (o.last_flush = t),
                    o.status === j)
                  )
                    if (o.wrap === 2)
                      ((e.adler = 0),
                        ce(o, 31),
                        ce(o, 139),
                        ce(o, 8),
                        o.gzhead
                          ? (ce(
                              o,
                              (o.gzhead.text ? 1 : 0) +
                                (o.gzhead.hcrc ? 2 : 0) +
                                (o.gzhead.extra ? 4 : 0) +
                                (o.gzhead.name ? 8 : 0) +
                                (o.gzhead.comment ? 16 : 0),
                            ),
                            ce(o, o.gzhead.time & 255),
                            ce(o, (o.gzhead.time >> 8) & 255),
                            ce(o, (o.gzhead.time >> 16) & 255),
                            ce(o, (o.gzhead.time >> 24) & 255),
                            ce(
                              o,
                              o.level === 9
                                ? 2
                                : o.strategy >= I || o.level < 2
                                  ? 4
                                  : 0,
                            ),
                            ce(o, o.gzhead.os & 255),
                            o.gzhead.extra &&
                              o.gzhead.extra.length &&
                              (ce(o, o.gzhead.extra.length & 255),
                              ce(o, (o.gzhead.extra.length >> 8) & 255)),
                            o.gzhead.hcrc &&
                              (e.adler = (0, a.default)(
                                e.adler,
                                o.pending_buf,
                                o.pending,
                                0,
                              )),
                            (o.gzindex = 0),
                            (o.status = K))
                          : (ce(o, 0),
                            ce(o, 0),
                            ce(o, 0),
                            ce(o, 0),
                            ce(o, 0),
                            ce(
                              o,
                              o.level === 9
                                ? 2
                                : o.strategy >= I || o.level < 2
                                  ? 4
                                  : 0,
                            ),
                            ce(o, oe),
                            (o.status = J)));
                    else {
                      var s = (P + ((o.w_bits - 8) << 4)) << 8,
                        u = -1;
                      (o.strategy >= I || o.level < 2
                        ? (u = 0)
                        : o.level < 6
                          ? (u = 1)
                          : o.level === 6
                            ? (u = 2)
                            : (u = 3),
                        (s |= u << 6),
                        o.strstart !== 0 && (s |= z),
                        (s += 31 - (s % 31)),
                        (o.status = J),
                        de(o, s),
                        o.strstart !== 0 &&
                          (de(o, e.adler >>> 16), de(o, e.adler & 65535)),
                        (e.adler = 1));
                    }
                  if (o.status === K)
                    if (o.gzhead.extra) {
                      for (
                        i = o.pending;
                        o.gzindex < (o.gzhead.extra.length & 65535) &&
                        !(
                          o.pending === o.pending_buf_size &&
                          (o.gzhead.hcrc &&
                            o.pending > i &&
                            (e.adler = (0, a.default)(
                              e.adler,
                              o.pending_buf,
                              o.pending - i,
                              i,
                            )),
                          se(e),
                          (i = o.pending),
                          o.pending === o.pending_buf_size)
                        );
                      )
                        (ce(o, o.gzhead.extra[o.gzindex] & 255), o.gzindex++);
                      (o.gzhead.hcrc &&
                        o.pending > i &&
                        (e.adler = (0, a.default)(
                          e.adler,
                          o.pending_buf,
                          o.pending - i,
                          i,
                        )),
                        o.gzindex === o.gzhead.extra.length &&
                          ((o.gzindex = 0), (o.status = Q)));
                    } else o.status = Q;
                  if (o.status === Q)
                    if (o.gzhead.name) {
                      i = o.pending;
                      do {
                        if (
                          o.pending === o.pending_buf_size &&
                          (o.gzhead.hcrc &&
                            o.pending > i &&
                            (e.adler = (0, a.default)(
                              e.adler,
                              o.pending_buf,
                              o.pending - i,
                              i,
                            )),
                          se(e),
                          (i = o.pending),
                          o.pending === o.pending_buf_size)
                        ) {
                          l = 1;
                          break;
                        }
                        (o.gzindex < o.gzhead.name.length
                          ? (l = o.gzhead.name.charCodeAt(o.gzindex++) & 255)
                          : (l = 0),
                          ce(o, l));
                      } while (l !== 0);
                      (o.gzhead.hcrc &&
                        o.pending > i &&
                        (e.adler = (0, a.default)(
                          e.adler,
                          o.pending_buf,
                          o.pending - i,
                          i,
                        )),
                        l === 0 && ((o.gzindex = 0), (o.status = X)));
                    } else o.status = X;
                  if (o.status === X)
                    if (o.gzhead.comment) {
                      i = o.pending;
                      do {
                        if (
                          o.pending === o.pending_buf_size &&
                          (o.gzhead.hcrc &&
                            o.pending > i &&
                            (e.adler = (0, a.default)(
                              e.adler,
                              o.pending_buf,
                              o.pending - i,
                              i,
                            )),
                          se(e),
                          (i = o.pending),
                          o.pending === o.pending_buf_size)
                        ) {
                          l = 1;
                          break;
                        }
                        (o.gzindex < o.gzhead.comment.length
                          ? (l = o.gzhead.comment.charCodeAt(o.gzindex++) & 255)
                          : (l = 0),
                          ce(o, l));
                      } while (l !== 0);
                      (o.gzhead.hcrc &&
                        o.pending > i &&
                        (e.adler = (0, a.default)(
                          e.adler,
                          o.pending_buf,
                          o.pending - i,
                          i,
                        )),
                        l === 0 && (o.status = Y));
                    } else o.status = Y;
                  if (
                    (o.status === Y &&
                      (o.gzhead.hcrc
                        ? (o.pending + 2 > o.pending_buf_size && se(e),
                          o.pending + 2 <= o.pending_buf_size &&
                            (ce(o, e.adler & 255),
                            ce(o, (e.adler >> 8) & 255),
                            (e.adler = 0),
                            (o.status = J)))
                        : (o.status = J)),
                    o.pending !== 0)
                  ) {
                    if ((se(e), e.avail_out === 0))
                      return ((o.last_flush = -1), y);
                  } else if (e.avail_in === 0 && ie(t) <= ie(n) && t !== g)
                    return ae(e, L);
                  if (o.status === Z && e.avail_in !== 0) return ae(e, L);
                  if (
                    e.avail_in !== 0 ||
                    o.lookahead !== 0 ||
                    (t !== c && o.status !== Z)
                  ) {
                    var p =
                      o.strategy === I
                        ? Ce(o, t)
                        : o.strategy === T
                          ? ye(o, t)
                          : ve[o.level].func(o, t);
                    if (
                      ((p === ne || p === re) && (o.status = Z),
                      p === ee || p === ne)
                    )
                      return (e.avail_out === 0 && (o.last_flush = -1), y);
                    if (
                      p === te &&
                      (t === d
                        ? r._tr_align(o)
                        : t !== h &&
                          (r._tr_stored_block(o, 0, 0, !1),
                          t === m &&
                            (le(o.head),
                            o.lookahead === 0 &&
                              ((o.strstart = 0),
                              (o.block_start = 0),
                              (o.insert = 0)))),
                      se(e),
                      e.avail_out === 0)
                    )
                      return ((o.last_flush = -1), y);
                  }
                  return t !== g
                    ? y
                    : o.wrap <= 0
                      ? C
                      : (o.wrap === 2
                          ? (ce(o, e.adler & 255),
                            ce(o, (e.adler >> 8) & 255),
                            ce(o, (e.adler >> 16) & 255),
                            ce(o, (e.adler >> 24) & 255),
                            ce(o, e.total_in & 255),
                            ce(o, (e.total_in >> 8) & 255),
                            ce(o, (e.total_in >> 16) & 255),
                            ce(o, (e.total_in >> 24) & 255))
                          : (de(o, e.adler >>> 16), de(o, e.adler & 65535)),
                        se(e),
                        o.wrap > 0 && (o.wrap = -o.wrap),
                        o.pending !== 0 ? y : C);
                }
                function xe(e) {
                  var t;
                  return !e || !e.state
                    ? b
                    : ((t = e.state.status),
                      t !== j &&
                      t !== K &&
                      t !== Q &&
                      t !== X &&
                      t !== Y &&
                      t !== J &&
                      t !== Z
                        ? ae(e, b)
                        : ((e.state = null), t === J ? ae(e, R) : y));
                }
                function $e(e, t) {
                  var r = t.length,
                    a,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d,
                    m;
                  if (
                    !e ||
                    !e.state ||
                    ((a = e.state),
                    (s = a.wrap),
                    s === 2 || (s === 1 && a.status !== j) || a.lookahead)
                  )
                    return b;
                  for (
                    s === 1 && (e.adler = (0, o.default)(e.adler, t, r, 0)),
                      a.wrap = 0,
                      r >= a.w_size &&
                        (s === 0 &&
                          (le(a.head),
                          (a.strstart = 0),
                          (a.block_start = 0),
                          (a.insert = 0)),
                        (m = new n.Buf8(a.w_size)),
                        n.arraySet(m, t, r - a.w_size, a.w_size, 0),
                        (t = m),
                        (r = a.w_size)),
                      u = e.avail_in,
                      c = e.next_in,
                      d = e.input,
                      e.avail_in = r,
                      e.next_in = 0,
                      e.input = t,
                      _e(a);
                    a.lookahead >= V;
                  ) {
                    ((i = a.strstart), (l = a.lookahead - (V - 1)));
                    do
                      ((a.ins_h =
                        ((a.ins_h << a.hash_shift) ^ a.window[i + V - 1]) &
                        a.hash_mask),
                        (a.prev[i & a.w_mask] = a.head[a.ins_h]),
                        (a.head[a.ins_h] = i),
                        i++);
                    while (--l);
                    ((a.strstart = i), (a.lookahead = V - 1), _e(a));
                  }
                  return (
                    (a.strstart += a.lookahead),
                    (a.block_start = a.strstart),
                    (a.insert = a.lookahead),
                    (a.lookahead = 0),
                    (a.match_length = a.prev_length = V - 1),
                    (a.match_available = 0),
                    (e.next_in = c),
                    (e.input = d),
                    (e.avail_in = u),
                    (a.wrap = s),
                    y
                  );
                }
                var Pe = (t.deflateInfo = "pako deflate (from Nodeca project)");
              },
          }),
          L = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/deflator.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = R(),
                  n = r(C());
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o(e) {
                  "@babel/helpers - typeof";
                  return (
                    (o =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    o(e)
                  );
                }
                function a(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function i(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, s(r.key), r));
                  }
                }
                function l(e, t, n) {
                  return (
                    t && i(e.prototype, t),
                    n && i(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function s(e) {
                  var t = u(e, "string");
                  return o(t) == "symbol" ? t : t + "";
                }
                function u(e, t) {
                  if (o(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (o(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var c = (t.default = (function () {
                  function t() {
                    (a(this, t),
                      (this.strm = new n.default()),
                      (this.chunkSize = 1024 * 10 * 10),
                      (this.outputBuffer = new Uint8Array(this.chunkSize)),
                      (0, e.deflateInit)(this.strm, e.Z_DEFAULT_COMPRESSION));
                  }
                  return l(t, [
                    {
                      key: "deflate",
                      value: function (n) {
                        ((this.strm.input = n),
                          (this.strm.avail_in = this.strm.input.length),
                          (this.strm.next_in = 0),
                          (this.strm.output = this.outputBuffer),
                          (this.strm.avail_out = this.chunkSize),
                          (this.strm.next_out = 0));
                        var t = (0, e.deflate)(this.strm, e.Z_FULL_FLUSH),
                          r = new Uint8Array(
                            this.strm.output.buffer,
                            0,
                            this.strm.next_out,
                          );
                        if (t < 0) throw new Error("zlib deflate failed");
                        if (this.strm.avail_in > 0) {
                          var o = [r],
                            a = r.length;
                          do {
                            if (
                              ((this.strm.output = new Uint8Array(
                                this.chunkSize,
                              )),
                              (this.strm.next_out = 0),
                              (this.strm.avail_out = this.chunkSize),
                              (t = (0, e.deflate)(this.strm, e.Z_FULL_FLUSH)),
                              t < 0)
                            )
                              throw new Error("zlib deflate failed");
                            var i = new Uint8Array(
                              this.strm.output.buffer,
                              0,
                              this.strm.next_out,
                            );
                            ((a += i.length), o.push(i));
                          } while (this.strm.avail_in > 0);
                          for (
                            var l = new Uint8Array(a), s = 0, u = 0;
                            u < o.length;
                            u++
                          )
                            (l.set(o[u], s), (s += o[u].length));
                          r = l;
                        }
                        return (
                          (this.strm.input = null),
                          (this.strm.avail_in = 0),
                          (this.strm.next_in = 0),
                          r
                        );
                      },
                    },
                  ]);
                })());
              },
          }),
          E = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/keysym.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = (t.default = {
                  XK_VoidSymbol: 16777215,
                  XK_BackSpace: 65288,
                  XK_Tab: 65289,
                  XK_Linefeed: 65290,
                  XK_Clear: 65291,
                  XK_Return: 65293,
                  XK_Pause: 65299,
                  XK_Scroll_Lock: 65300,
                  XK_Sys_Req: 65301,
                  XK_Escape: 65307,
                  XK_Delete: 65535,
                  XK_Multi_key: 65312,
                  XK_Codeinput: 65335,
                  XK_SingleCandidate: 65340,
                  XK_MultipleCandidate: 65341,
                  XK_PreviousCandidate: 65342,
                  XK_Kanji: 65313,
                  XK_Muhenkan: 65314,
                  XK_Henkan_Mode: 65315,
                  XK_Henkan: 65315,
                  XK_Romaji: 65316,
                  XK_Hiragana: 65317,
                  XK_Katakana: 65318,
                  XK_Hiragana_Katakana: 65319,
                  XK_Zenkaku: 65320,
                  XK_Hankaku: 65321,
                  XK_Zenkaku_Hankaku: 65322,
                  XK_Touroku: 65323,
                  XK_Massyo: 65324,
                  XK_Kana_Lock: 65325,
                  XK_Kana_Shift: 65326,
                  XK_Eisu_Shift: 65327,
                  XK_Eisu_toggle: 65328,
                  XK_Kanji_Bangou: 65335,
                  XK_Zen_Koho: 65341,
                  XK_Mae_Koho: 65342,
                  XK_Home: 65360,
                  XK_Left: 65361,
                  XK_Up: 65362,
                  XK_Right: 65363,
                  XK_Down: 65364,
                  XK_Prior: 65365,
                  XK_Page_Up: 65365,
                  XK_Next: 65366,
                  XK_Page_Down: 65366,
                  XK_End: 65367,
                  XK_Begin: 65368,
                  XK_Select: 65376,
                  XK_Print: 65377,
                  XK_Execute: 65378,
                  XK_Insert: 65379,
                  XK_Undo: 65381,
                  XK_Redo: 65382,
                  XK_Menu: 65383,
                  XK_Find: 65384,
                  XK_Cancel: 65385,
                  XK_Help: 65386,
                  XK_Break: 65387,
                  XK_Mode_switch: 65406,
                  XK_script_switch: 65406,
                  XK_Num_Lock: 65407,
                  XK_KP_Space: 65408,
                  XK_KP_Tab: 65417,
                  XK_KP_Enter: 65421,
                  XK_KP_F1: 65425,
                  XK_KP_F2: 65426,
                  XK_KP_F3: 65427,
                  XK_KP_F4: 65428,
                  XK_KP_Home: 65429,
                  XK_KP_Left: 65430,
                  XK_KP_Up: 65431,
                  XK_KP_Right: 65432,
                  XK_KP_Down: 65433,
                  XK_KP_Prior: 65434,
                  XK_KP_Page_Up: 65434,
                  XK_KP_Next: 65435,
                  XK_KP_Page_Down: 65435,
                  XK_KP_End: 65436,
                  XK_KP_Begin: 65437,
                  XK_KP_Insert: 65438,
                  XK_KP_Delete: 65439,
                  XK_KP_Equal: 65469,
                  XK_KP_Multiply: 65450,
                  XK_KP_Add: 65451,
                  XK_KP_Separator: 65452,
                  XK_KP_Subtract: 65453,
                  XK_KP_Decimal: 65454,
                  XK_KP_Divide: 65455,
                  XK_KP_0: 65456,
                  XK_KP_1: 65457,
                  XK_KP_2: 65458,
                  XK_KP_3: 65459,
                  XK_KP_4: 65460,
                  XK_KP_5: 65461,
                  XK_KP_6: 65462,
                  XK_KP_7: 65463,
                  XK_KP_8: 65464,
                  XK_KP_9: 65465,
                  XK_F1: 65470,
                  XK_F2: 65471,
                  XK_F3: 65472,
                  XK_F4: 65473,
                  XK_F5: 65474,
                  XK_F6: 65475,
                  XK_F7: 65476,
                  XK_F8: 65477,
                  XK_F9: 65478,
                  XK_F10: 65479,
                  XK_F11: 65480,
                  XK_L1: 65480,
                  XK_F12: 65481,
                  XK_L2: 65481,
                  XK_F13: 65482,
                  XK_L3: 65482,
                  XK_F14: 65483,
                  XK_L4: 65483,
                  XK_F15: 65484,
                  XK_L5: 65484,
                  XK_F16: 65485,
                  XK_L6: 65485,
                  XK_F17: 65486,
                  XK_L7: 65486,
                  XK_F18: 65487,
                  XK_L8: 65487,
                  XK_F19: 65488,
                  XK_L9: 65488,
                  XK_F20: 65489,
                  XK_L10: 65489,
                  XK_F21: 65490,
                  XK_R1: 65490,
                  XK_F22: 65491,
                  XK_R2: 65491,
                  XK_F23: 65492,
                  XK_R3: 65492,
                  XK_F24: 65493,
                  XK_R4: 65493,
                  XK_F25: 65494,
                  XK_R5: 65494,
                  XK_F26: 65495,
                  XK_R6: 65495,
                  XK_F27: 65496,
                  XK_R7: 65496,
                  XK_F28: 65497,
                  XK_R8: 65497,
                  XK_F29: 65498,
                  XK_R9: 65498,
                  XK_F30: 65499,
                  XK_R10: 65499,
                  XK_F31: 65500,
                  XK_R11: 65500,
                  XK_F32: 65501,
                  XK_R12: 65501,
                  XK_F33: 65502,
                  XK_R13: 65502,
                  XK_F34: 65503,
                  XK_R14: 65503,
                  XK_F35: 65504,
                  XK_R15: 65504,
                  XK_Shift_L: 65505,
                  XK_Shift_R: 65506,
                  XK_Control_L: 65507,
                  XK_Control_R: 65508,
                  XK_Caps_Lock: 65509,
                  XK_Shift_Lock: 65510,
                  XK_Meta_L: 65511,
                  XK_Meta_R: 65512,
                  XK_Alt_L: 65513,
                  XK_Alt_R: 65514,
                  XK_Super_L: 65515,
                  XK_Super_R: 65516,
                  XK_Hyper_L: 65517,
                  XK_Hyper_R: 65518,
                  XK_ISO_Level3_Shift: 65027,
                  XK_ISO_Next_Group: 65032,
                  XK_ISO_Prev_Group: 65034,
                  XK_ISO_First_Group: 65036,
                  XK_ISO_Last_Group: 65038,
                  XK_space: 32,
                  XK_exclam: 33,
                  XK_quotedbl: 34,
                  XK_numbersign: 35,
                  XK_dollar: 36,
                  XK_percent: 37,
                  XK_ampersand: 38,
                  XK_apostrophe: 39,
                  XK_quoteright: 39,
                  XK_parenleft: 40,
                  XK_parenright: 41,
                  XK_asterisk: 42,
                  XK_plus: 43,
                  XK_comma: 44,
                  XK_minus: 45,
                  XK_period: 46,
                  XK_slash: 47,
                  XK_0: 48,
                  XK_1: 49,
                  XK_2: 50,
                  XK_3: 51,
                  XK_4: 52,
                  XK_5: 53,
                  XK_6: 54,
                  XK_7: 55,
                  XK_8: 56,
                  XK_9: 57,
                  XK_colon: 58,
                  XK_semicolon: 59,
                  XK_less: 60,
                  XK_equal: 61,
                  XK_greater: 62,
                  XK_question: 63,
                  XK_at: 64,
                  XK_A: 65,
                  XK_B: 66,
                  XK_C: 67,
                  XK_D: 68,
                  XK_E: 69,
                  XK_F: 70,
                  XK_G: 71,
                  XK_H: 72,
                  XK_I: 73,
                  XK_J: 74,
                  XK_K: 75,
                  XK_L: 76,
                  XK_M: 77,
                  XK_N: 78,
                  XK_O: 79,
                  XK_P: 80,
                  XK_Q: 81,
                  XK_R: 82,
                  XK_S: 83,
                  XK_T: 84,
                  XK_U: 85,
                  XK_V: 86,
                  XK_W: 87,
                  XK_X: 88,
                  XK_Y: 89,
                  XK_Z: 90,
                  XK_bracketleft: 91,
                  XK_backslash: 92,
                  XK_bracketright: 93,
                  XK_asciicircum: 94,
                  XK_underscore: 95,
                  XK_grave: 96,
                  XK_quoteleft: 96,
                  XK_a: 97,
                  XK_b: 98,
                  XK_c: 99,
                  XK_d: 100,
                  XK_e: 101,
                  XK_f: 102,
                  XK_g: 103,
                  XK_h: 104,
                  XK_i: 105,
                  XK_j: 106,
                  XK_k: 107,
                  XK_l: 108,
                  XK_m: 109,
                  XK_n: 110,
                  XK_o: 111,
                  XK_p: 112,
                  XK_q: 113,
                  XK_r: 114,
                  XK_s: 115,
                  XK_t: 116,
                  XK_u: 117,
                  XK_v: 118,
                  XK_w: 119,
                  XK_x: 120,
                  XK_y: 121,
                  XK_z: 122,
                  XK_braceleft: 123,
                  XK_bar: 124,
                  XK_braceright: 125,
                  XK_asciitilde: 126,
                  XK_nobreakspace: 160,
                  XK_exclamdown: 161,
                  XK_cent: 162,
                  XK_sterling: 163,
                  XK_currency: 164,
                  XK_yen: 165,
                  XK_brokenbar: 166,
                  XK_section: 167,
                  XK_diaeresis: 168,
                  XK_copyright: 169,
                  XK_ordfeminine: 170,
                  XK_guillemotleft: 171,
                  XK_notsign: 172,
                  XK_hyphen: 173,
                  XK_registered: 174,
                  XK_macron: 175,
                  XK_degree: 176,
                  XK_plusminus: 177,
                  XK_twosuperior: 178,
                  XK_threesuperior: 179,
                  XK_acute: 180,
                  XK_mu: 181,
                  XK_paragraph: 182,
                  XK_periodcentered: 183,
                  XK_cedilla: 184,
                  XK_onesuperior: 185,
                  XK_masculine: 186,
                  XK_guillemotright: 187,
                  XK_onequarter: 188,
                  XK_onehalf: 189,
                  XK_threequarters: 190,
                  XK_questiondown: 191,
                  XK_Agrave: 192,
                  XK_Aacute: 193,
                  XK_Acircumflex: 194,
                  XK_Atilde: 195,
                  XK_Adiaeresis: 196,
                  XK_Aring: 197,
                  XK_AE: 198,
                  XK_Ccedilla: 199,
                  XK_Egrave: 200,
                  XK_Eacute: 201,
                  XK_Ecircumflex: 202,
                  XK_Ediaeresis: 203,
                  XK_Igrave: 204,
                  XK_Iacute: 205,
                  XK_Icircumflex: 206,
                  XK_Idiaeresis: 207,
                  XK_ETH: 208,
                  XK_Eth: 208,
                  XK_Ntilde: 209,
                  XK_Ograve: 210,
                  XK_Oacute: 211,
                  XK_Ocircumflex: 212,
                  XK_Otilde: 213,
                  XK_Odiaeresis: 214,
                  XK_multiply: 215,
                  XK_Oslash: 216,
                  XK_Ooblique: 216,
                  XK_Ugrave: 217,
                  XK_Uacute: 218,
                  XK_Ucircumflex: 219,
                  XK_Udiaeresis: 220,
                  XK_Yacute: 221,
                  XK_THORN: 222,
                  XK_Thorn: 222,
                  XK_ssharp: 223,
                  XK_agrave: 224,
                  XK_aacute: 225,
                  XK_acircumflex: 226,
                  XK_atilde: 227,
                  XK_adiaeresis: 228,
                  XK_aring: 229,
                  XK_ae: 230,
                  XK_ccedilla: 231,
                  XK_egrave: 232,
                  XK_eacute: 233,
                  XK_ecircumflex: 234,
                  XK_ediaeresis: 235,
                  XK_igrave: 236,
                  XK_iacute: 237,
                  XK_icircumflex: 238,
                  XK_idiaeresis: 239,
                  XK_eth: 240,
                  XK_ntilde: 241,
                  XK_ograve: 242,
                  XK_oacute: 243,
                  XK_ocircumflex: 244,
                  XK_otilde: 245,
                  XK_odiaeresis: 246,
                  XK_division: 247,
                  XK_oslash: 248,
                  XK_ooblique: 248,
                  XK_ugrave: 249,
                  XK_uacute: 250,
                  XK_ucircumflex: 251,
                  XK_udiaeresis: 252,
                  XK_yacute: 253,
                  XK_thorn: 254,
                  XK_ydiaeresis: 255,
                  XK_Hangul: 65329,
                  XK_Hangul_Hanja: 65332,
                  XK_Hangul_Jeonja: 65336,
                  XF86XK_ModeLock: 269025025,
                  XF86XK_MonBrightnessUp: 269025026,
                  XF86XK_MonBrightnessDown: 269025027,
                  XF86XK_KbdLightOnOff: 269025028,
                  XF86XK_KbdBrightnessUp: 269025029,
                  XF86XK_KbdBrightnessDown: 269025030,
                  XF86XK_Standby: 269025040,
                  XF86XK_AudioLowerVolume: 269025041,
                  XF86XK_AudioMute: 269025042,
                  XF86XK_AudioRaiseVolume: 269025043,
                  XF86XK_AudioPlay: 269025044,
                  XF86XK_AudioStop: 269025045,
                  XF86XK_AudioPrev: 269025046,
                  XF86XK_AudioNext: 269025047,
                  XF86XK_HomePage: 269025048,
                  XF86XK_Mail: 269025049,
                  XF86XK_Start: 269025050,
                  XF86XK_Search: 269025051,
                  XF86XK_AudioRecord: 269025052,
                  XF86XK_Calculator: 269025053,
                  XF86XK_Memo: 269025054,
                  XF86XK_ToDoList: 269025055,
                  XF86XK_Calendar: 269025056,
                  XF86XK_PowerDown: 269025057,
                  XF86XK_ContrastAdjust: 269025058,
                  XF86XK_RockerUp: 269025059,
                  XF86XK_RockerDown: 269025060,
                  XF86XK_RockerEnter: 269025061,
                  XF86XK_Back: 269025062,
                  XF86XK_Forward: 269025063,
                  XF86XK_Stop: 269025064,
                  XF86XK_Refresh: 269025065,
                  XF86XK_PowerOff: 269025066,
                  XF86XK_WakeUp: 269025067,
                  XF86XK_Eject: 269025068,
                  XF86XK_ScreenSaver: 269025069,
                  XF86XK_WWW: 269025070,
                  XF86XK_Sleep: 269025071,
                  XF86XK_Favorites: 269025072,
                  XF86XK_AudioPause: 269025073,
                  XF86XK_AudioMedia: 269025074,
                  XF86XK_MyComputer: 269025075,
                  XF86XK_VendorHome: 269025076,
                  XF86XK_LightBulb: 269025077,
                  XF86XK_Shop: 269025078,
                  XF86XK_History: 269025079,
                  XF86XK_OpenURL: 269025080,
                  XF86XK_AddFavorite: 269025081,
                  XF86XK_HotLinks: 269025082,
                  XF86XK_BrightnessAdjust: 269025083,
                  XF86XK_Finance: 269025084,
                  XF86XK_Community: 269025085,
                  XF86XK_AudioRewind: 269025086,
                  XF86XK_BackForward: 269025087,
                  XF86XK_Launch0: 269025088,
                  XF86XK_Launch1: 269025089,
                  XF86XK_Launch2: 269025090,
                  XF86XK_Launch3: 269025091,
                  XF86XK_Launch4: 269025092,
                  XF86XK_Launch5: 269025093,
                  XF86XK_Launch6: 269025094,
                  XF86XK_Launch7: 269025095,
                  XF86XK_Launch8: 269025096,
                  XF86XK_Launch9: 269025097,
                  XF86XK_LaunchA: 269025098,
                  XF86XK_LaunchB: 269025099,
                  XF86XK_LaunchC: 269025100,
                  XF86XK_LaunchD: 269025101,
                  XF86XK_LaunchE: 269025102,
                  XF86XK_LaunchF: 269025103,
                  XF86XK_ApplicationLeft: 269025104,
                  XF86XK_ApplicationRight: 269025105,
                  XF86XK_Book: 269025106,
                  XF86XK_CD: 269025107,
                  XF86XK_Calculater: 269025108,
                  XF86XK_Clear: 269025109,
                  XF86XK_Close: 269025110,
                  XF86XK_Copy: 269025111,
                  XF86XK_Cut: 269025112,
                  XF86XK_Display: 269025113,
                  XF86XK_DOS: 269025114,
                  XF86XK_Documents: 269025115,
                  XF86XK_Excel: 269025116,
                  XF86XK_Explorer: 269025117,
                  XF86XK_Game: 269025118,
                  XF86XK_Go: 269025119,
                  XF86XK_iTouch: 269025120,
                  XF86XK_LogOff: 269025121,
                  XF86XK_Market: 269025122,
                  XF86XK_Meeting: 269025123,
                  XF86XK_MenuKB: 269025125,
                  XF86XK_MenuPB: 269025126,
                  XF86XK_MySites: 269025127,
                  XF86XK_New: 269025128,
                  XF86XK_News: 269025129,
                  XF86XK_OfficeHome: 269025130,
                  XF86XK_Open: 269025131,
                  XF86XK_Option: 269025132,
                  XF86XK_Paste: 269025133,
                  XF86XK_Phone: 269025134,
                  XF86XK_Q: 269025136,
                  XF86XK_Reply: 269025138,
                  XF86XK_Reload: 269025139,
                  XF86XK_RotateWindows: 269025140,
                  XF86XK_RotationPB: 269025141,
                  XF86XK_RotationKB: 269025142,
                  XF86XK_Save: 269025143,
                  XF86XK_ScrollUp: 269025144,
                  XF86XK_ScrollDown: 269025145,
                  XF86XK_ScrollClick: 269025146,
                  XF86XK_Send: 269025147,
                  XF86XK_Spell: 269025148,
                  XF86XK_SplitScreen: 269025149,
                  XF86XK_Support: 269025150,
                  XF86XK_TaskPane: 269025151,
                  XF86XK_Terminal: 269025152,
                  XF86XK_Tools: 269025153,
                  XF86XK_Travel: 269025154,
                  XF86XK_UserPB: 269025156,
                  XF86XK_User1KB: 269025157,
                  XF86XK_User2KB: 269025158,
                  XF86XK_Video: 269025159,
                  XF86XK_WheelButton: 269025160,
                  XF86XK_Word: 269025161,
                  XF86XK_Xfer: 269025162,
                  XF86XK_ZoomIn: 269025163,
                  XF86XK_ZoomOut: 269025164,
                  XF86XK_Away: 269025165,
                  XF86XK_Messenger: 269025166,
                  XF86XK_WebCam: 269025167,
                  XF86XK_MailForward: 269025168,
                  XF86XK_Pictures: 269025169,
                  XF86XK_Music: 269025170,
                  XF86XK_Battery: 269025171,
                  XF86XK_Bluetooth: 269025172,
                  XF86XK_WLAN: 269025173,
                  XF86XK_UWB: 269025174,
                  XF86XK_AudioForward: 269025175,
                  XF86XK_AudioRepeat: 269025176,
                  XF86XK_AudioRandomPlay: 269025177,
                  XF86XK_Subtitle: 269025178,
                  XF86XK_AudioCycleTrack: 269025179,
                  XF86XK_CycleAngle: 269025180,
                  XF86XK_FrameBack: 269025181,
                  XF86XK_FrameForward: 269025182,
                  XF86XK_Time: 269025183,
                  XF86XK_Select: 269025184,
                  XF86XK_View: 269025185,
                  XF86XK_TopMenu: 269025186,
                  XF86XK_Red: 269025187,
                  XF86XK_Green: 269025188,
                  XF86XK_Yellow: 269025189,
                  XF86XK_Blue: 269025190,
                  XF86XK_Suspend: 269025191,
                  XF86XK_Hibernate: 269025192,
                  XF86XK_TouchpadToggle: 269025193,
                  XF86XK_TouchpadOn: 269025200,
                  XF86XK_TouchpadOff: 269025201,
                  XF86XK_AudioMicMute: 269025202,
                  XF86XK_Switch_VT_1: 269024769,
                  XF86XK_Switch_VT_2: 269024770,
                  XF86XK_Switch_VT_3: 269024771,
                  XF86XK_Switch_VT_4: 269024772,
                  XF86XK_Switch_VT_5: 269024773,
                  XF86XK_Switch_VT_6: 269024774,
                  XF86XK_Switch_VT_7: 269024775,
                  XF86XK_Switch_VT_8: 269024776,
                  XF86XK_Switch_VT_9: 269024777,
                  XF86XK_Switch_VT_10: 269024778,
                  XF86XK_Switch_VT_11: 269024779,
                  XF86XK_Switch_VT_12: 269024780,
                  XF86XK_Ungrab: 269024800,
                  XF86XK_ClearGrab: 269024801,
                  XF86XK_Next_VMode: 269024802,
                  XF86XK_Prev_VMode: 269024803,
                  XF86XK_LogWindowTree: 269024804,
                  XF86XK_LogGrabInfo: 269024805,
                });
              },
          }),
          k = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/keysymdef.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = {
                    256: 960,
                    257: 992,
                    258: 451,
                    259: 483,
                    260: 417,
                    261: 433,
                    262: 454,
                    263: 486,
                    264: 710,
                    265: 742,
                    266: 709,
                    267: 741,
                    268: 456,
                    269: 488,
                    270: 463,
                    271: 495,
                    272: 464,
                    273: 496,
                    274: 938,
                    275: 954,
                    278: 972,
                    279: 1004,
                    280: 458,
                    281: 490,
                    282: 460,
                    283: 492,
                    284: 728,
                    285: 760,
                    286: 683,
                    287: 699,
                    288: 725,
                    289: 757,
                    290: 939,
                    291: 955,
                    292: 678,
                    293: 694,
                    294: 673,
                    295: 689,
                    296: 933,
                    297: 949,
                    298: 975,
                    299: 1007,
                    302: 967,
                    303: 999,
                    304: 681,
                    305: 697,
                    308: 684,
                    309: 700,
                    310: 979,
                    311: 1011,
                    312: 930,
                    313: 453,
                    314: 485,
                    315: 934,
                    316: 950,
                    317: 421,
                    318: 437,
                    321: 419,
                    322: 435,
                    323: 465,
                    324: 497,
                    325: 977,
                    326: 1009,
                    327: 466,
                    328: 498,
                    330: 957,
                    331: 959,
                    332: 978,
                    333: 1010,
                    336: 469,
                    337: 501,
                    338: 5052,
                    339: 5053,
                    340: 448,
                    341: 480,
                    342: 931,
                    343: 947,
                    344: 472,
                    345: 504,
                    346: 422,
                    347: 438,
                    348: 734,
                    349: 766,
                    350: 426,
                    351: 442,
                    352: 425,
                    353: 441,
                    354: 478,
                    355: 510,
                    356: 427,
                    357: 443,
                    358: 940,
                    359: 956,
                    360: 989,
                    361: 1021,
                    362: 990,
                    363: 1022,
                    364: 733,
                    365: 765,
                    366: 473,
                    367: 505,
                    368: 475,
                    369: 507,
                    370: 985,
                    371: 1017,
                    376: 5054,
                    377: 428,
                    378: 444,
                    379: 431,
                    380: 447,
                    381: 430,
                    382: 446,
                    402: 2294,
                    466: 16777681,
                    711: 439,
                    728: 418,
                    729: 511,
                    731: 434,
                    733: 445,
                    901: 1966,
                    902: 1953,
                    904: 1954,
                    905: 1955,
                    906: 1956,
                    908: 1959,
                    910: 1960,
                    911: 1963,
                    912: 1974,
                    913: 1985,
                    914: 1986,
                    915: 1987,
                    916: 1988,
                    917: 1989,
                    918: 1990,
                    919: 1991,
                    920: 1992,
                    921: 1993,
                    922: 1994,
                    923: 1995,
                    924: 1996,
                    925: 1997,
                    926: 1998,
                    927: 1999,
                    928: 2e3,
                    929: 2001,
                    931: 2002,
                    932: 2004,
                    933: 2005,
                    934: 2006,
                    935: 2007,
                    936: 2008,
                    937: 2009,
                    938: 1957,
                    939: 1961,
                    940: 1969,
                    941: 1970,
                    942: 1971,
                    943: 1972,
                    944: 1978,
                    945: 2017,
                    946: 2018,
                    947: 2019,
                    948: 2020,
                    949: 2021,
                    950: 2022,
                    951: 2023,
                    952: 2024,
                    953: 2025,
                    954: 2026,
                    955: 2027,
                    956: 2028,
                    957: 2029,
                    958: 2030,
                    959: 2031,
                    960: 2032,
                    961: 2033,
                    962: 2035,
                    963: 2034,
                    964: 2036,
                    965: 2037,
                    966: 2038,
                    967: 2039,
                    968: 2040,
                    969: 2041,
                    970: 1973,
                    971: 1977,
                    972: 1975,
                    973: 1976,
                    974: 1979,
                    1025: 1715,
                    1026: 1713,
                    1027: 1714,
                    1028: 1716,
                    1029: 1717,
                    1030: 1718,
                    1031: 1719,
                    1032: 1720,
                    1033: 1721,
                    1034: 1722,
                    1035: 1723,
                    1036: 1724,
                    1038: 1726,
                    1039: 1727,
                    1040: 1761,
                    1041: 1762,
                    1042: 1783,
                    1043: 1767,
                    1044: 1764,
                    1045: 1765,
                    1046: 1782,
                    1047: 1786,
                    1048: 1769,
                    1049: 1770,
                    1050: 1771,
                    1051: 1772,
                    1052: 1773,
                    1053: 1774,
                    1054: 1775,
                    1055: 1776,
                    1056: 1778,
                    1057: 1779,
                    1058: 1780,
                    1059: 1781,
                    1060: 1766,
                    1061: 1768,
                    1062: 1763,
                    1063: 1790,
                    1064: 1787,
                    1065: 1789,
                    1066: 1791,
                    1067: 1785,
                    1068: 1784,
                    1069: 1788,
                    1070: 1760,
                    1071: 1777,
                    1072: 1729,
                    1073: 1730,
                    1074: 1751,
                    1075: 1735,
                    1076: 1732,
                    1077: 1733,
                    1078: 1750,
                    1079: 1754,
                    1080: 1737,
                    1081: 1738,
                    1082: 1739,
                    1083: 1740,
                    1084: 1741,
                    1085: 1742,
                    1086: 1743,
                    1087: 1744,
                    1088: 1746,
                    1089: 1747,
                    1090: 1748,
                    1091: 1749,
                    1092: 1734,
                    1093: 1736,
                    1094: 1731,
                    1095: 1758,
                    1096: 1755,
                    1097: 1757,
                    1098: 1759,
                    1099: 1753,
                    1100: 1752,
                    1101: 1756,
                    1102: 1728,
                    1103: 1745,
                    1105: 1699,
                    1106: 1697,
                    1107: 1698,
                    1108: 1700,
                    1109: 1701,
                    1110: 1702,
                    1111: 1703,
                    1112: 1704,
                    1113: 1705,
                    1114: 1706,
                    1115: 1707,
                    1116: 1708,
                    1118: 1710,
                    1119: 1711,
                    1168: 1725,
                    1169: 1709,
                    1488: 3296,
                    1489: 3297,
                    1490: 3298,
                    1491: 3299,
                    1492: 3300,
                    1493: 3301,
                    1494: 3302,
                    1495: 3303,
                    1496: 3304,
                    1497: 3305,
                    1498: 3306,
                    1499: 3307,
                    1500: 3308,
                    1501: 3309,
                    1502: 3310,
                    1503: 3311,
                    1504: 3312,
                    1505: 3313,
                    1506: 3314,
                    1507: 3315,
                    1508: 3316,
                    1509: 3317,
                    1510: 3318,
                    1511: 3319,
                    1512: 3320,
                    1513: 3321,
                    1514: 3322,
                    1548: 1452,
                    1563: 1467,
                    1567: 1471,
                    1569: 1473,
                    1570: 1474,
                    1571: 1475,
                    1572: 1476,
                    1573: 1477,
                    1574: 1478,
                    1575: 1479,
                    1576: 1480,
                    1577: 1481,
                    1578: 1482,
                    1579: 1483,
                    1580: 1484,
                    1581: 1485,
                    1582: 1486,
                    1583: 1487,
                    1584: 1488,
                    1585: 1489,
                    1586: 1490,
                    1587: 1491,
                    1588: 1492,
                    1589: 1493,
                    1590: 1494,
                    1591: 1495,
                    1592: 1496,
                    1593: 1497,
                    1594: 1498,
                    1600: 1504,
                    1601: 1505,
                    1602: 1506,
                    1603: 1507,
                    1604: 1508,
                    1605: 1509,
                    1606: 1510,
                    1607: 1511,
                    1608: 1512,
                    1609: 1513,
                    1610: 1514,
                    1611: 1515,
                    1612: 1516,
                    1613: 1517,
                    1614: 1518,
                    1615: 1519,
                    1616: 1520,
                    1617: 1521,
                    1618: 1522,
                    3585: 3489,
                    3586: 3490,
                    3587: 3491,
                    3588: 3492,
                    3589: 3493,
                    3590: 3494,
                    3591: 3495,
                    3592: 3496,
                    3593: 3497,
                    3594: 3498,
                    3595: 3499,
                    3596: 3500,
                    3597: 3501,
                    3598: 3502,
                    3599: 3503,
                    3600: 3504,
                    3601: 3505,
                    3602: 3506,
                    3603: 3507,
                    3604: 3508,
                    3605: 3509,
                    3606: 3510,
                    3607: 3511,
                    3608: 3512,
                    3609: 3513,
                    3610: 3514,
                    3611: 3515,
                    3612: 3516,
                    3613: 3517,
                    3614: 3518,
                    3615: 3519,
                    3616: 3520,
                    3617: 3521,
                    3618: 3522,
                    3619: 3523,
                    3620: 3524,
                    3621: 3525,
                    3622: 3526,
                    3623: 3527,
                    3624: 3528,
                    3625: 3529,
                    3626: 3530,
                    3627: 3531,
                    3628: 3532,
                    3629: 3533,
                    3630: 3534,
                    3631: 3535,
                    3632: 3536,
                    3633: 3537,
                    3634: 3538,
                    3635: 3539,
                    3636: 3540,
                    3637: 3541,
                    3638: 3542,
                    3639: 3543,
                    3640: 3544,
                    3641: 3545,
                    3642: 3546,
                    3647: 3551,
                    3648: 3552,
                    3649: 3553,
                    3650: 3554,
                    3651: 3555,
                    3652: 3556,
                    3653: 3557,
                    3654: 3558,
                    3655: 3559,
                    3656: 3560,
                    3657: 3561,
                    3658: 3562,
                    3659: 3563,
                    3660: 3564,
                    3661: 3565,
                    3664: 3568,
                    3665: 3569,
                    3666: 3570,
                    3667: 3571,
                    3668: 3572,
                    3669: 3573,
                    3670: 3574,
                    3671: 3575,
                    3672: 3576,
                    3673: 3577,
                    8194: 2722,
                    8195: 2721,
                    8196: 2723,
                    8197: 2724,
                    8199: 2725,
                    8200: 2726,
                    8201: 2727,
                    8202: 2728,
                    8210: 2747,
                    8211: 2730,
                    8212: 2729,
                    8213: 1967,
                    8215: 3295,
                    8216: 2768,
                    8217: 2769,
                    8218: 2813,
                    8220: 2770,
                    8221: 2771,
                    8222: 2814,
                    8224: 2801,
                    8225: 2802,
                    8226: 2790,
                    8229: 2735,
                    8230: 2734,
                    8240: 2773,
                    8242: 2774,
                    8243: 2775,
                    8248: 2812,
                    8254: 1150,
                    8361: 3839,
                    8364: 8364,
                    8453: 2744,
                    8470: 1712,
                    8471: 2811,
                    8478: 2772,
                    8482: 2761,
                    8531: 2736,
                    8532: 2737,
                    8533: 2738,
                    8534: 2739,
                    8535: 2740,
                    8536: 2741,
                    8537: 2742,
                    8538: 2743,
                    8539: 2755,
                    8540: 2756,
                    8541: 2757,
                    8542: 2758,
                    8592: 2299,
                    8593: 2300,
                    8594: 2301,
                    8595: 2302,
                    8658: 2254,
                    8660: 2253,
                    8706: 2287,
                    8711: 2245,
                    8728: 3018,
                    8730: 2262,
                    8733: 2241,
                    8734: 2242,
                    8743: 2270,
                    8744: 2271,
                    8745: 2268,
                    8746: 2269,
                    8747: 2239,
                    8756: 2240,
                    8764: 2248,
                    8771: 2249,
                    8773: 16785992,
                    8800: 2237,
                    8801: 2255,
                    8804: 2236,
                    8805: 2238,
                    8834: 2266,
                    8835: 2267,
                    8866: 3068,
                    8867: 3036,
                    8868: 3010,
                    8869: 3022,
                    8968: 3027,
                    8970: 3012,
                    8981: 2810,
                    8992: 2212,
                    8993: 2213,
                    9109: 3020,
                    9115: 2219,
                    9117: 2220,
                    9118: 2221,
                    9120: 2222,
                    9121: 2215,
                    9123: 2216,
                    9124: 2217,
                    9126: 2218,
                    9128: 2223,
                    9132: 2224,
                    9143: 2209,
                    9146: 2543,
                    9147: 2544,
                    9148: 2546,
                    9149: 2547,
                    9225: 2530,
                    9226: 2533,
                    9227: 2537,
                    9228: 2531,
                    9229: 2532,
                    9251: 2732,
                    9252: 2536,
                    9472: 2211,
                    9474: 2214,
                    9484: 2210,
                    9488: 2539,
                    9492: 2541,
                    9496: 2538,
                    9500: 2548,
                    9508: 2549,
                    9516: 2551,
                    9524: 2550,
                    9532: 2542,
                    9618: 2529,
                    9642: 2791,
                    9643: 2785,
                    9644: 2779,
                    9645: 2786,
                    9646: 2783,
                    9647: 2767,
                    9650: 2792,
                    9651: 2787,
                    9654: 2781,
                    9655: 2765,
                    9660: 2793,
                    9661: 2788,
                    9664: 2780,
                    9665: 2764,
                    9670: 2528,
                    9675: 2766,
                    9679: 2782,
                    9702: 2784,
                    9734: 2789,
                    9742: 2809,
                    9747: 2762,
                    9756: 2794,
                    9758: 2795,
                    9792: 2808,
                    9794: 2807,
                    9827: 2796,
                    9829: 2798,
                    9830: 2797,
                    9837: 2806,
                    9839: 2805,
                    10003: 2803,
                    10007: 2804,
                    10013: 2777,
                    10016: 2800,
                    10216: 2748,
                    10217: 2750,
                    12289: 1188,
                    12290: 1185,
                    12300: 1186,
                    12301: 1187,
                    12443: 1246,
                    12444: 1247,
                    12449: 1191,
                    12450: 1201,
                    12451: 1192,
                    12452: 1202,
                    12453: 1193,
                    12454: 1203,
                    12455: 1194,
                    12456: 1204,
                    12457: 1195,
                    12458: 1205,
                    12459: 1206,
                    12461: 1207,
                    12463: 1208,
                    12465: 1209,
                    12467: 1210,
                    12469: 1211,
                    12471: 1212,
                    12473: 1213,
                    12475: 1214,
                    12477: 1215,
                    12479: 1216,
                    12481: 1217,
                    12483: 1199,
                    12484: 1218,
                    12486: 1219,
                    12488: 1220,
                    12490: 1221,
                    12491: 1222,
                    12492: 1223,
                    12493: 1224,
                    12494: 1225,
                    12495: 1226,
                    12498: 1227,
                    12501: 1228,
                    12504: 1229,
                    12507: 1230,
                    12510: 1231,
                    12511: 1232,
                    12512: 1233,
                    12513: 1234,
                    12514: 1235,
                    12515: 1196,
                    12516: 1236,
                    12517: 1197,
                    12518: 1237,
                    12519: 1198,
                    12520: 1238,
                    12521: 1239,
                    12522: 1240,
                    12523: 1241,
                    12524: 1242,
                    12525: 1243,
                    12527: 1244,
                    12530: 1190,
                    12531: 1245,
                    12539: 1189,
                    12540: 1200,
                  },
                  n = (t.default = {
                    lookup: function (n) {
                      if (n >= 32 && n <= 255) return n;
                      var t = e[n];
                      return t !== void 0 ? t : 16777216 | n;
                    },
                  });
              },
          }),
          I = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/vkeys.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = (t.default = {
                  8: "Backspace",
                  9: "Tab",
                  10: "NumpadClear",
                  13: "Enter",
                  16: "ShiftLeft",
                  17: "ControlLeft",
                  18: "AltLeft",
                  19: "Pause",
                  20: "CapsLock",
                  21: "Lang1",
                  25: "Lang2",
                  27: "Escape",
                  28: "Convert",
                  29: "NonConvert",
                  32: "Space",
                  33: "PageUp",
                  34: "PageDown",
                  35: "End",
                  36: "Home",
                  37: "ArrowLeft",
                  38: "ArrowUp",
                  39: "ArrowRight",
                  40: "ArrowDown",
                  41: "Select",
                  44: "PrintScreen",
                  45: "Insert",
                  46: "Delete",
                  47: "Help",
                  48: "Digit0",
                  49: "Digit1",
                  50: "Digit2",
                  51: "Digit3",
                  52: "Digit4",
                  53: "Digit5",
                  54: "Digit6",
                  55: "Digit7",
                  56: "Digit8",
                  57: "Digit9",
                  91: "MetaLeft",
                  92: "MetaRight",
                  93: "ContextMenu",
                  95: "Sleep",
                  96: "Numpad0",
                  97: "Numpad1",
                  98: "Numpad2",
                  99: "Numpad3",
                  100: "Numpad4",
                  101: "Numpad5",
                  102: "Numpad6",
                  103: "Numpad7",
                  104: "Numpad8",
                  105: "Numpad9",
                  106: "NumpadMultiply",
                  107: "NumpadAdd",
                  108: "NumpadDecimal",
                  109: "NumpadSubtract",
                  110: "NumpadDecimal",
                  111: "NumpadDivide",
                  112: "F1",
                  113: "F2",
                  114: "F3",
                  115: "F4",
                  116: "F5",
                  117: "F6",
                  118: "F7",
                  119: "F8",
                  120: "F9",
                  121: "F10",
                  122: "F11",
                  123: "F12",
                  124: "F13",
                  125: "F14",
                  126: "F15",
                  127: "F16",
                  128: "F17",
                  129: "F18",
                  130: "F19",
                  131: "F20",
                  132: "F21",
                  133: "F22",
                  134: "F23",
                  135: "F24",
                  144: "NumLock",
                  145: "ScrollLock",
                  166: "BrowserBack",
                  167: "BrowserForward",
                  168: "BrowserRefresh",
                  169: "BrowserStop",
                  170: "BrowserSearch",
                  171: "BrowserFavorites",
                  172: "BrowserHome",
                  173: "AudioVolumeMute",
                  174: "AudioVolumeDown",
                  175: "AudioVolumeUp",
                  176: "MediaTrackNext",
                  177: "MediaTrackPrevious",
                  178: "MediaStop",
                  179: "MediaPlayPause",
                  180: "LaunchMail",
                  181: "MediaSelect",
                  182: "LaunchApp1",
                  183: "LaunchApp2",
                  225: "AltRight",
                });
              },
          }),
          T = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/fixedkeys.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = (t.default = {
                  Backspace: "Backspace",
                  AltLeft: "Alt",
                  AltRight: "Alt",
                  CapsLock: "CapsLock",
                  ContextMenu: "ContextMenu",
                  ControlLeft: "Control",
                  ControlRight: "Control",
                  Enter: "Enter",
                  MetaLeft: "Meta",
                  MetaRight: "Meta",
                  ShiftLeft: "Shift",
                  ShiftRight: "Shift",
                  Tab: "Tab",
                  Delete: "Delete",
                  End: "End",
                  Help: "Help",
                  Home: "Home",
                  Insert: "Insert",
                  PageDown: "PageDown",
                  PageUp: "PageUp",
                  ArrowDown: "ArrowDown",
                  ArrowLeft: "ArrowLeft",
                  ArrowRight: "ArrowRight",
                  ArrowUp: "ArrowUp",
                  NumLock: "NumLock",
                  NumpadBackspace: "Backspace",
                  NumpadClear: "Clear",
                  Escape: "Escape",
                  F1: "F1",
                  F2: "F2",
                  F3: "F3",
                  F4: "F4",
                  F5: "F5",
                  F6: "F6",
                  F7: "F7",
                  F8: "F8",
                  F9: "F9",
                  F10: "F10",
                  F11: "F11",
                  F12: "F12",
                  F13: "F13",
                  F14: "F14",
                  F15: "F15",
                  F16: "F16",
                  F17: "F17",
                  F18: "F18",
                  F19: "F19",
                  F20: "F20",
                  F21: "F21",
                  F22: "F22",
                  F23: "F23",
                  F24: "F24",
                  F25: "F25",
                  F26: "F26",
                  F27: "F27",
                  F28: "F28",
                  F29: "F29",
                  F30: "F30",
                  F31: "F31",
                  F32: "F32",
                  F33: "F33",
                  F34: "F34",
                  F35: "F35",
                  PrintScreen: "PrintScreen",
                  ScrollLock: "ScrollLock",
                  Pause: "Pause",
                  BrowserBack: "BrowserBack",
                  BrowserFavorites: "BrowserFavorites",
                  BrowserForward: "BrowserForward",
                  BrowserHome: "BrowserHome",
                  BrowserRefresh: "BrowserRefresh",
                  BrowserSearch: "BrowserSearch",
                  BrowserStop: "BrowserStop",
                  Eject: "Eject",
                  LaunchApp1: "LaunchMyComputer",
                  LaunchApp2: "LaunchCalendar",
                  LaunchMail: "LaunchMail",
                  MediaPlayPause: "MediaPlay",
                  MediaStop: "MediaStop",
                  MediaTrackNext: "MediaTrackNext",
                  MediaTrackPrevious: "MediaTrackPrevious",
                  Power: "Power",
                  Sleep: "Sleep",
                  AudioVolumeDown: "AudioVolumeDown",
                  AudioVolumeMute: "AudioVolumeMute",
                  AudioVolumeUp: "AudioVolumeUp",
                  WakeUp: "WakeUp",
                });
              },
          }),
          D = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/domkeytable.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = n(E());
                function n(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                var r = {};
                function o(e, t) {
                  if (t === void 0)
                    throw new Error('Undefined keysym for key "' + e + '"');
                  if (e in r)
                    throw new Error('Duplicate entry for key "' + e + '"');
                  r[e] = [t, t, t, t];
                }
                function a(e, t, n) {
                  if (t === void 0)
                    throw new Error('Undefined keysym for key "' + e + '"');
                  if (n === void 0)
                    throw new Error('Undefined keysym for key "' + e + '"');
                  if (e in r)
                    throw new Error('Duplicate entry for key "' + e + '"');
                  r[e] = [t, t, n, t];
                }
                function i(e, t, n) {
                  if (t === void 0)
                    throw new Error('Undefined keysym for key "' + e + '"');
                  if (n === void 0)
                    throw new Error('Undefined keysym for key "' + e + '"');
                  if (e in r)
                    throw new Error('Duplicate entry for key "' + e + '"');
                  r[e] = [t, t, t, n];
                }
                (a("Alt", e.default.XK_Alt_L, e.default.XK_Alt_R),
                  o("AltGraph", e.default.XK_ISO_Level3_Shift),
                  o("CapsLock", e.default.XK_Caps_Lock),
                  a("Control", e.default.XK_Control_L, e.default.XK_Control_R),
                  a("Meta", e.default.XK_Super_L, e.default.XK_Super_R),
                  o("NumLock", e.default.XK_Num_Lock),
                  o("ScrollLock", e.default.XK_Scroll_Lock),
                  a("Shift", e.default.XK_Shift_L, e.default.XK_Shift_R),
                  i("Enter", e.default.XK_Return, e.default.XK_KP_Enter),
                  o("Tab", e.default.XK_Tab),
                  i(" ", e.default.XK_space, e.default.XK_KP_Space),
                  i("ArrowDown", e.default.XK_Down, e.default.XK_KP_Down),
                  i("ArrowLeft", e.default.XK_Left, e.default.XK_KP_Left),
                  i("ArrowRight", e.default.XK_Right, e.default.XK_KP_Right),
                  i("ArrowUp", e.default.XK_Up, e.default.XK_KP_Up),
                  i("End", e.default.XK_End, e.default.XK_KP_End),
                  i("Home", e.default.XK_Home, e.default.XK_KP_Home),
                  i("PageDown", e.default.XK_Next, e.default.XK_KP_Next),
                  i("PageUp", e.default.XK_Prior, e.default.XK_KP_Prior),
                  o("Backspace", e.default.XK_BackSpace),
                  i("Clear", e.default.XK_Clear, e.default.XK_KP_Begin),
                  o("Copy", e.default.XF86XK_Copy),
                  o("Cut", e.default.XF86XK_Cut),
                  i("Delete", e.default.XK_Delete, e.default.XK_KP_Delete),
                  i("Insert", e.default.XK_Insert, e.default.XK_KP_Insert),
                  o("Paste", e.default.XF86XK_Paste),
                  o("Redo", e.default.XK_Redo),
                  o("Undo", e.default.XK_Undo),
                  o("Cancel", e.default.XK_Cancel),
                  o("ContextMenu", e.default.XK_Menu),
                  o("Escape", e.default.XK_Escape),
                  o("Execute", e.default.XK_Execute),
                  o("Find", e.default.XK_Find),
                  o("Help", e.default.XK_Help),
                  o("Pause", e.default.XK_Pause),
                  o("Select", e.default.XK_Select),
                  o("ZoomIn", e.default.XF86XK_ZoomIn),
                  o("ZoomOut", e.default.XF86XK_ZoomOut),
                  o("BrightnessDown", e.default.XF86XK_MonBrightnessDown),
                  o("BrightnessUp", e.default.XF86XK_MonBrightnessUp),
                  o("Eject", e.default.XF86XK_Eject),
                  o("LogOff", e.default.XF86XK_LogOff),
                  o("Power", e.default.XF86XK_PowerOff),
                  o("PowerOff", e.default.XF86XK_PowerDown),
                  o("PrintScreen", e.default.XK_Print),
                  o("Hibernate", e.default.XF86XK_Hibernate),
                  o("Standby", e.default.XF86XK_Standby),
                  o("WakeUp", e.default.XF86XK_WakeUp),
                  o("AllCandidates", e.default.XK_MultipleCandidate),
                  o("Alphanumeric", e.default.XK_Eisu_toggle),
                  o("CodeInput", e.default.XK_Codeinput),
                  o("Compose", e.default.XK_Multi_key),
                  o("Convert", e.default.XK_Henkan),
                  o("GroupFirst", e.default.XK_ISO_First_Group),
                  o("GroupLast", e.default.XK_ISO_Last_Group),
                  o("GroupNext", e.default.XK_ISO_Next_Group),
                  o("GroupPrevious", e.default.XK_ISO_Prev_Group),
                  o("NonConvert", e.default.XK_Muhenkan),
                  o("PreviousCandidate", e.default.XK_PreviousCandidate),
                  o("SingleCandidate", e.default.XK_SingleCandidate),
                  o("HangulMode", e.default.XK_Hangul),
                  o("HanjaMode", e.default.XK_Hangul_Hanja),
                  o("JunjaMode", e.default.XK_Hangul_Jeonja),
                  o("Eisu", e.default.XK_Eisu_toggle),
                  o("Hankaku", e.default.XK_Hankaku),
                  o("Hiragana", e.default.XK_Hiragana),
                  o("HiraganaKatakana", e.default.XK_Hiragana_Katakana),
                  o("KanaMode", e.default.XK_Kana_Shift),
                  o("KanjiMode", e.default.XK_Kanji),
                  o("Katakana", e.default.XK_Katakana),
                  o("Romaji", e.default.XK_Romaji),
                  o("Zenkaku", e.default.XK_Zenkaku),
                  o("ZenkakuHankaku", e.default.XK_Zenkaku_Hankaku),
                  o("F1", e.default.XK_F1),
                  o("F2", e.default.XK_F2),
                  o("F3", e.default.XK_F3),
                  o("F4", e.default.XK_F4),
                  o("F5", e.default.XK_F5),
                  o("F6", e.default.XK_F6),
                  o("F7", e.default.XK_F7),
                  o("F8", e.default.XK_F8),
                  o("F9", e.default.XK_F9),
                  o("F10", e.default.XK_F10),
                  o("F11", e.default.XK_F11),
                  o("F12", e.default.XK_F12),
                  o("F13", e.default.XK_F13),
                  o("F14", e.default.XK_F14),
                  o("F15", e.default.XK_F15),
                  o("F16", e.default.XK_F16),
                  o("F17", e.default.XK_F17),
                  o("F18", e.default.XK_F18),
                  o("F19", e.default.XK_F19),
                  o("F20", e.default.XK_F20),
                  o("F21", e.default.XK_F21),
                  o("F22", e.default.XK_F22),
                  o("F23", e.default.XK_F23),
                  o("F24", e.default.XK_F24),
                  o("F25", e.default.XK_F25),
                  o("F26", e.default.XK_F26),
                  o("F27", e.default.XK_F27),
                  o("F28", e.default.XK_F28),
                  o("F29", e.default.XK_F29),
                  o("F30", e.default.XK_F30),
                  o("F31", e.default.XK_F31),
                  o("F32", e.default.XK_F32),
                  o("F33", e.default.XK_F33),
                  o("F34", e.default.XK_F34),
                  o("F35", e.default.XK_F35),
                  o("Close", e.default.XF86XK_Close),
                  o("MailForward", e.default.XF86XK_MailForward),
                  o("MailReply", e.default.XF86XK_Reply),
                  o("MailSend", e.default.XF86XK_Send),
                  o("MediaFastForward", e.default.XF86XK_AudioForward),
                  o("MediaPause", e.default.XF86XK_AudioPause),
                  o("MediaPlay", e.default.XF86XK_AudioPlay),
                  o("MediaRecord", e.default.XF86XK_AudioRecord),
                  o("MediaRewind", e.default.XF86XK_AudioRewind),
                  o("MediaStop", e.default.XF86XK_AudioStop),
                  o("MediaTrackNext", e.default.XF86XK_AudioNext),
                  o("MediaTrackPrevious", e.default.XF86XK_AudioPrev),
                  o("New", e.default.XF86XK_New),
                  o("Open", e.default.XF86XK_Open),
                  o("Print", e.default.XK_Print),
                  o("Save", e.default.XF86XK_Save),
                  o("SpellCheck", e.default.XF86XK_Spell),
                  o("AudioVolumeDown", e.default.XF86XK_AudioLowerVolume),
                  o("AudioVolumeUp", e.default.XF86XK_AudioRaiseVolume),
                  o("AudioVolumeMute", e.default.XF86XK_AudioMute),
                  o("MicrophoneVolumeMute", e.default.XF86XK_AudioMicMute),
                  o("LaunchApplication1", e.default.XF86XK_MyComputer),
                  o("LaunchApplication2", e.default.XF86XK_Calculator),
                  o("LaunchCalendar", e.default.XF86XK_Calendar),
                  o("LaunchMail", e.default.XF86XK_Mail),
                  o("LaunchMediaPlayer", e.default.XF86XK_AudioMedia),
                  o("LaunchMusicPlayer", e.default.XF86XK_Music),
                  o("LaunchPhone", e.default.XF86XK_Phone),
                  o("LaunchScreenSaver", e.default.XF86XK_ScreenSaver),
                  o("LaunchSpreadsheet", e.default.XF86XK_Excel),
                  o("LaunchWebBrowser", e.default.XF86XK_WWW),
                  o("LaunchWebCam", e.default.XF86XK_WebCam),
                  o("LaunchWordProcessor", e.default.XF86XK_Word),
                  o("BrowserBack", e.default.XF86XK_Back),
                  o("BrowserFavorites", e.default.XF86XK_Favorites),
                  o("BrowserForward", e.default.XF86XK_Forward),
                  o("BrowserHome", e.default.XF86XK_HomePage),
                  o("BrowserRefresh", e.default.XF86XK_Refresh),
                  o("BrowserSearch", e.default.XF86XK_Search),
                  o("BrowserStop", e.default.XF86XK_Stop),
                  o("Dimmer", e.default.XF86XK_BrightnessAdjust),
                  o("MediaAudioTrack", e.default.XF86XK_AudioCycleTrack),
                  o("RandomToggle", e.default.XF86XK_AudioRandomPlay),
                  o("SplitScreenToggle", e.default.XF86XK_SplitScreen),
                  o("Subtitle", e.default.XF86XK_Subtitle),
                  o("VideoModeNext", e.default.XF86XK_Next_VMode),
                  i("=", e.default.XK_equal, e.default.XK_KP_Equal),
                  i("+", e.default.XK_plus, e.default.XK_KP_Add),
                  i("-", e.default.XK_minus, e.default.XK_KP_Subtract),
                  i("*", e.default.XK_asterisk, e.default.XK_KP_Multiply),
                  i("/", e.default.XK_slash, e.default.XK_KP_Divide),
                  i(".", e.default.XK_period, e.default.XK_KP_Decimal),
                  i(",", e.default.XK_comma, e.default.XK_KP_Separator),
                  i("0", e.default.XK_0, e.default.XK_KP_0),
                  i("1", e.default.XK_1, e.default.XK_KP_1),
                  i("2", e.default.XK_2, e.default.XK_KP_2),
                  i("3", e.default.XK_3, e.default.XK_KP_3),
                  i("4", e.default.XK_4, e.default.XK_KP_4),
                  i("5", e.default.XK_5, e.default.XK_KP_5),
                  i("6", e.default.XK_6, e.default.XK_KP_6),
                  i("7", e.default.XK_7, e.default.XK_KP_7),
                  i("8", e.default.XK_8, e.default.XK_KP_8),
                  i("9", e.default.XK_9, e.default.XK_KP_9));
                var l = (t.default = r);
              },
          }),
          x = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/util.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getKey = p),
                  (t.getKeycode = m),
                  (t.getKeysym = _));
                var n = d(E()),
                  r = d(k()),
                  o = d(I()),
                  a = d(T()),
                  i = d(D()),
                  s = c(l());
                function u(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function c(t, n) {
                  if (!n && t && t.__esModule) return t;
                  if (
                    t === null ||
                    (e(t) != "object" && typeof t != "function")
                  )
                    return { default: t };
                  var r = u(n);
                  if (r && r.has(t)) return r.get(t);
                  var o = { __proto__: null },
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in t)
                    if (i !== "default" && {}.hasOwnProperty.call(t, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(t, i) : null;
                      l && (l.get || l.set)
                        ? Object.defineProperty(o, i, l)
                        : (o[i] = t[i]);
                    }
                  return ((o.default = t), r && r.set(t, o), o);
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if (e.code) {
                    switch (e.code) {
                      case "OSLeft":
                        return "MetaLeft";
                      case "OSRight":
                        return "MetaRight";
                    }
                    return e.code;
                  }
                  if (e.keyCode in o.default) {
                    var t = o.default[e.keyCode];
                    if (
                      (s.isMac() && t === "ContextMenu" && (t = "MetaRight"),
                      e.location === 2)
                    )
                      switch (t) {
                        case "ShiftLeft":
                          return "ShiftRight";
                        case "ControlLeft":
                          return "ControlRight";
                        case "AltLeft":
                          return "AltRight";
                      }
                    if (e.location === 3)
                      switch (t) {
                        case "Delete":
                          return "NumpadDecimal";
                        case "Insert":
                          return "Numpad0";
                        case "End":
                          return "Numpad1";
                        case "ArrowDown":
                          return "Numpad2";
                        case "PageDown":
                          return "Numpad3";
                        case "ArrowLeft":
                          return "Numpad4";
                        case "ArrowRight":
                          return "Numpad6";
                        case "Home":
                          return "Numpad7";
                        case "ArrowUp":
                          return "Numpad8";
                        case "PageUp":
                          return "Numpad9";
                        case "Enter":
                          return "NumpadEnter";
                      }
                    return t;
                  }
                  return "Unidentified";
                }
                function p(e) {
                  if (e.key !== void 0 && e.key !== "Unidentified") {
                    switch (e.key) {
                      case "OS":
                        return "Meta";
                      case "LaunchMyComputer":
                        return "LaunchApplication1";
                      case "LaunchCalculator":
                        return "LaunchApplication2";
                    }
                    switch (e.key) {
                      case "UIKeyInputUpArrow":
                        return "ArrowUp";
                      case "UIKeyInputDownArrow":
                        return "ArrowDown";
                      case "UIKeyInputLeftArrow":
                        return "ArrowLeft";
                      case "UIKeyInputRightArrow":
                        return "ArrowRight";
                      case "UIKeyInputEscape":
                        return "Escape";
                    }
                    return e.key === "\0" && e.code === "NumpadDecimal"
                      ? "Delete"
                      : e.key;
                  }
                  var t = m(e);
                  return t in a.default
                    ? a.default[t]
                    : e.charCode
                      ? String.fromCharCode(e.charCode)
                      : "Unidentified";
                }
                function _(e) {
                  var t = p(e);
                  if (t === "Unidentified") return null;
                  if (t in i.default) {
                    var o = e.location;
                    if (
                      (t === "Meta" && o === 0 && (o = 2),
                      t === "Clear" && o === 3)
                    ) {
                      var a = m(e);
                      a === "NumLock" && (o = 0);
                    }
                    if (((o === void 0 || o > 3) && (o = 0), t === "Meta")) {
                      var l = m(e);
                      if (l === "AltLeft") return n.default.XK_Meta_L;
                      if (l === "AltRight") return n.default.XK_Meta_R;
                    }
                    if (t === "Clear") {
                      var u = m(e);
                      if (u === "NumLock") return n.default.XK_Num_Lock;
                    }
                    if (s.isWindows())
                      switch (t) {
                        case "Zenkaku":
                        case "Hankaku":
                          return n.default.XK_Zenkaku_Hankaku;
                        case "Romaji":
                        case "KanaMode":
                          return n.default.XK_Romaji;
                      }
                    return i.default[t][o];
                  }
                  if (t.length !== 1) return null;
                  var c = t.charCodeAt();
                  return c ? r.default.lookup(c) : null;
                }
              },
          }),
          $ = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/keyboard.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = d(a()),
                  n = u(),
                  r = d(x()),
                  o = s(E()),
                  i = d(l());
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function d(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (m(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var n = c(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    o =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
                      var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set)
                        ? Object.defineProperty(r, a, i)
                        : (r[a] = e[a]);
                    }
                  return ((r.default = e), n && n.set(e, r), r);
                }
                function m(e) {
                  "@babel/helpers - typeof";
                  return (
                    (m =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    m(e)
                  );
                }
                function p(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function _(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, g(r.key), r));
                  }
                }
                function f(e, t, n) {
                  return (
                    t && _(e.prototype, t),
                    n && _(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function g(e) {
                  var t = h(e, "string");
                  return m(t) == "symbol" ? t : t + "";
                }
                function h(e, t) {
                  if (m(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (m(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var y = (t.default = (function () {
                  function t(e) {
                    (p(this, t),
                      (this._target = e || null),
                      (this._keyDownList = {}),
                      (this._altGrArmed = !1),
                      (this._eventHandlers = {
                        keyup: this._handleKeyUp.bind(this),
                        keydown: this._handleKeyDown.bind(this),
                        blur: this._allKeysUp.bind(this),
                      }),
                      (this.onkeyevent = function () {}));
                  }
                  return f(t, [
                    {
                      key: "_sendKeyEvent",
                      value: function (n, r, o) {
                        var t =
                            arguments.length > 3 && arguments[3] !== void 0
                              ? arguments[3]
                              : null,
                          a =
                            arguments.length > 4 && arguments[4] !== void 0
                              ? arguments[4]
                              : null;
                        if (o) this._keyDownList[r] = n;
                        else {
                          if (!(r in this._keyDownList)) return;
                          delete this._keyDownList[r];
                        }
                        (e.Debug(
                          "onkeyevent " +
                            (o ? "down" : "up") +
                            ", keysym: " +
                            n,
                          ", code: " +
                            r +
                            ", numlock: " +
                            t +
                            ", capslock: " +
                            a,
                        ),
                          this.onkeyevent(n, r, o, t, a));
                      },
                    },
                    {
                      key: "_getKeyCode",
                      value: function (t) {
                        var e = r.getKeycode(t);
                        if (e !== "Unidentified") return e;
                        if (t.keyCode && t.keyCode !== 229)
                          return "Platform" + t.keyCode;
                        if (t.keyIdentifier) {
                          if (t.keyIdentifier.substr(0, 2) !== "U+")
                            return t.keyIdentifier;
                          var n = parseInt(t.keyIdentifier.substr(2), 16),
                            o = String.fromCharCode(n).toUpperCase();
                          return "Platform" + o.charCodeAt();
                        }
                        return "Unidentified";
                      },
                    },
                    {
                      key: "_handleKeyDown",
                      value: function (t) {
                        var e = this._getKeyCode(t),
                          a = r.getKeysym(t),
                          l = t.getModifierState("NumLock"),
                          s = t.getModifierState("CapsLock");
                        if (
                          ((i.isMac() || i.isIOS()) && (l = null),
                          this._altGrArmed &&
                            ((this._altGrArmed = !1),
                            clearTimeout(this._altGrTimeout),
                            e === "AltRight" &&
                            t.timeStamp - this._altGrCtrlTime < 50
                              ? (a = o.default.XK_ISO_Level3_Shift)
                              : this._sendKeyEvent(
                                  o.default.XK_Control_L,
                                  "ControlLeft",
                                  !0,
                                  l,
                                  s,
                                )),
                          e === "Unidentified")
                        ) {
                          (a &&
                            (this._sendKeyEvent(a, e, !0, l, s),
                            this._sendKeyEvent(a, e, !1, l, s)),
                            (0, n.stopEvent)(t));
                          return;
                        }
                        if (i.isMac() || i.isIOS())
                          switch (a) {
                            case o.default.XK_Super_L:
                              a = o.default.XK_Alt_L;
                              break;
                            case o.default.XK_Super_R:
                              a = o.default.XK_Super_L;
                              break;
                            case o.default.XK_Alt_L:
                              a = o.default.XK_Mode_switch;
                              break;
                            case o.default.XK_Alt_R:
                              a = o.default.XK_ISO_Level3_Shift;
                              break;
                          }
                        if (
                          (e in this._keyDownList && (a = this._keyDownList[e]),
                          (i.isMac() || i.isIOS()) &&
                            t.metaKey &&
                            e !== "MetaLeft" &&
                            e !== "MetaRight")
                        ) {
                          (this._sendKeyEvent(a, e, !0, l, s),
                            this._sendKeyEvent(a, e, !1, l, s),
                            (0, n.stopEvent)(t));
                          return;
                        }
                        if ((i.isMac() || i.isIOS()) && e === "CapsLock") {
                          (this._sendKeyEvent(
                            o.default.XK_Caps_Lock,
                            "CapsLock",
                            !0,
                            l,
                            s,
                          ),
                            this._sendKeyEvent(
                              o.default.XK_Caps_Lock,
                              "CapsLock",
                              !1,
                              l,
                              s,
                            ),
                            (0, n.stopEvent)(t));
                          return;
                        }
                        var u = [
                          o.default.XK_Zenkaku_Hankaku,
                          o.default.XK_Eisu_toggle,
                          o.default.XK_Katakana,
                          o.default.XK_Hiragana,
                          o.default.XK_Romaji,
                        ];
                        if (i.isWindows() && u.includes(a)) {
                          (this._sendKeyEvent(a, e, !0, l, s),
                            this._sendKeyEvent(a, e, !1, l, s),
                            (0, n.stopEvent)(t));
                          return;
                        }
                        if (
                          ((0, n.stopEvent)(t),
                          e === "ControlLeft" &&
                            i.isWindows() &&
                            !("ControlLeft" in this._keyDownList))
                        ) {
                          ((this._altGrArmed = !0),
                            (this._altGrTimeout = setTimeout(
                              this._handleAltGrTimeout.bind(this),
                              100,
                            )),
                            (this._altGrCtrlTime = t.timeStamp));
                          return;
                        }
                        this._sendKeyEvent(a, e, !0, l, s);
                      },
                    },
                    {
                      key: "_handleKeyUp",
                      value: function (t) {
                        (0, n.stopEvent)(t);
                        var e = this._getKeyCode(t);
                        if (
                          (this._altGrArmed &&
                            ((this._altGrArmed = !1),
                            clearTimeout(this._altGrTimeout),
                            this._sendKeyEvent(
                              o.default.XK_Control_L,
                              "ControlLeft",
                              !0,
                            )),
                          (i.isMac() || i.isIOS()) && e === "CapsLock")
                        ) {
                          (this._sendKeyEvent(
                            o.default.XK_Caps_Lock,
                            "CapsLock",
                            !0,
                          ),
                            this._sendKeyEvent(
                              o.default.XK_Caps_Lock,
                              "CapsLock",
                              !1,
                            ));
                          return;
                        }
                        (this._sendKeyEvent(this._keyDownList[e], e, !1),
                          i.isWindows() &&
                            (e === "ShiftLeft" || e === "ShiftRight") &&
                            ("ShiftRight" in this._keyDownList &&
                              this._sendKeyEvent(
                                this._keyDownList.ShiftRight,
                                "ShiftRight",
                                !1,
                              ),
                            "ShiftLeft" in this._keyDownList &&
                              this._sendKeyEvent(
                                this._keyDownList.ShiftLeft,
                                "ShiftLeft",
                                !1,
                              )));
                      },
                    },
                    {
                      key: "_handleAltGrTimeout",
                      value: function () {
                        ((this._altGrArmed = !1),
                          clearTimeout(this._altGrTimeout),
                          this._sendKeyEvent(
                            o.default.XK_Control_L,
                            "ControlLeft",
                            !0,
                          ));
                      },
                    },
                    {
                      key: "_allKeysUp",
                      value: function () {
                        e.Debug(">> Keyboard.allKeysUp");
                        for (var t in this._keyDownList)
                          this._sendKeyEvent(this._keyDownList[t], t, !1);
                        e.Debug("<< Keyboard.allKeysUp");
                      },
                    },
                    {
                      key: "grab",
                      value: function () {
                        (this._target.addEventListener(
                          "keydown",
                          this._eventHandlers.keydown,
                        ),
                          this._target.addEventListener(
                            "keyup",
                            this._eventHandlers.keyup,
                          ),
                          window.addEventListener(
                            "blur",
                            this._eventHandlers.blur,
                          ));
                      },
                    },
                    {
                      key: "ungrab",
                      value: function () {
                        (this._target.removeEventListener(
                          "keydown",
                          this._eventHandlers.keydown,
                        ),
                          this._target.removeEventListener(
                            "keyup",
                            this._eventHandlers.keyup,
                          ),
                          window.removeEventListener(
                            "blur",
                            this._eventHandlers.blur,
                          ),
                          this._allKeysUp());
                      },
                    },
                  ]);
                })());
              },
          }),
          P = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/gesturehandler.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = 0,
                  s = 1,
                  u = 2,
                  c = 4,
                  d = 8,
                  m = 16,
                  p = 32,
                  _ = 64,
                  f = 127,
                  g = 50,
                  h = 90,
                  y = 250,
                  C = 1e3,
                  b = 1e3,
                  v = 50,
                  S = (t.default = (function () {
                    function e() {
                      (n(this, e),
                        (this._target = null),
                        (this._state = f),
                        (this._tracked = []),
                        (this._ignored = []),
                        (this._waitingRelease = !1),
                        (this._releaseStart = 0),
                        (this._longpressTimeoutId = null),
                        (this._twoTouchTimeoutId = null),
                        (this._boundEventHandler =
                          this._eventHandler.bind(this)));
                    }
                    return o(e, [
                      {
                        key: "attach",
                        value: function (t) {
                          (this.detach(),
                            (this._target = t),
                            this._target.addEventListener(
                              "touchstart",
                              this._boundEventHandler,
                            ),
                            this._target.addEventListener(
                              "touchmove",
                              this._boundEventHandler,
                            ),
                            this._target.addEventListener(
                              "touchend",
                              this._boundEventHandler,
                            ),
                            this._target.addEventListener(
                              "touchcancel",
                              this._boundEventHandler,
                            ));
                        },
                      },
                      {
                        key: "detach",
                        value: function () {
                          this._target &&
                            (this._stopLongpressTimeout(),
                            this._stopTwoTouchTimeout(),
                            this._target.removeEventListener(
                              "touchstart",
                              this._boundEventHandler,
                            ),
                            this._target.removeEventListener(
                              "touchmove",
                              this._boundEventHandler,
                            ),
                            this._target.removeEventListener(
                              "touchend",
                              this._boundEventHandler,
                            ),
                            this._target.removeEventListener(
                              "touchcancel",
                              this._boundEventHandler,
                            ),
                            (this._target = null));
                        },
                      },
                      {
                        key: "_eventHandler",
                        value: function (t) {
                          var e;
                          switch (
                            (t.stopPropagation(), t.preventDefault(), t.type)
                          ) {
                            case "touchstart":
                              e = this._touchStart;
                              break;
                            case "touchmove":
                              e = this._touchMove;
                              break;
                            case "touchend":
                            case "touchcancel":
                              e = this._touchEnd;
                              break;
                          }
                          for (var n = 0; n < t.changedTouches.length; n++) {
                            var r = t.changedTouches[n];
                            e.call(this, r.identifier, r.clientX, r.clientY);
                          }
                        },
                      },
                      {
                        key: "_touchStart",
                        value: function (t, n, r) {
                          if (this._hasDetectedGesture() || this._state === l) {
                            this._ignored.push(t);
                            return;
                          }
                          if (
                            this._tracked.length > 0 &&
                            Date.now() - this._tracked[0].started > y
                          ) {
                            ((this._state = l), this._ignored.push(t));
                            return;
                          }
                          if (this._waitingRelease) {
                            ((this._state = l), this._ignored.push(t));
                            return;
                          }
                          switch (
                            (this._tracked.push({
                              id: t,
                              started: Date.now(),
                              active: !0,
                              firstX: n,
                              firstY: r,
                              lastX: n,
                              lastY: r,
                              angle: 0,
                            }),
                            this._tracked.length)
                          ) {
                            case 1:
                              this._startLongpressTimeout();
                              break;
                            case 2:
                              ((this._state &= ~(s | d | m)),
                                this._stopLongpressTimeout());
                              break;
                            case 3:
                              this._state &= ~(u | p | _);
                              break;
                            default:
                              this._state = l;
                          }
                        },
                      },
                      {
                        key: "_touchMove",
                        value: function (t, n, r) {
                          var e = this._tracked.find(function (e) {
                            return e.id === t;
                          });
                          if (e !== void 0) {
                            ((e.lastX = n), (e.lastY = r));
                            var o = n - e.firstX,
                              a = r - e.firstY;
                            if (
                              ((e.firstX !== e.lastX || e.firstY !== e.lastY) &&
                                (e.angle = (Math.atan2(a, o) * 180) / Math.PI),
                              !this._hasDetectedGesture())
                            ) {
                              if (Math.hypot(o, a) < g) return;
                              if (
                                ((this._state &= ~(s | u | c | m)),
                                this._stopLongpressTimeout(),
                                this._tracked.length !== 1 &&
                                  (this._state &= ~d),
                                this._tracked.length !== 2 &&
                                  (this._state &= ~(p | _)),
                                this._tracked.length === 2)
                              ) {
                                var i = this._tracked.find(function (e) {
                                    return e.id !== t;
                                  }),
                                  l = Math.hypot(
                                    i.firstX - i.lastX,
                                    i.firstY - i.lastY,
                                  );
                                if (l > g) {
                                  var f = Math.abs(e.angle - i.angle);
                                  ((f = Math.abs(((f + 180) % 360) - 180)),
                                    f > h
                                      ? (this._state &= ~p)
                                      : (this._state &= ~_),
                                    this._isTwoTouchTimeoutRunning() &&
                                      this._stopTwoTouchTimeout());
                                } else
                                  this._isTwoTouchTimeoutRunning() ||
                                    this._startTwoTouchTimeout();
                              }
                              if (!this._hasDetectedGesture()) return;
                              this._pushEvent("gesturestart");
                            }
                            this._pushEvent("gesturemove");
                          }
                        },
                      },
                      {
                        key: "_touchEnd",
                        value: function (t, n, r) {
                          if (this._ignored.indexOf(t) !== -1) {
                            (this._ignored.splice(this._ignored.indexOf(t), 1),
                              this._ignored.length === 0 &&
                                this._tracked.length === 0 &&
                                ((this._state = f),
                                (this._waitingRelease = !1)));
                            return;
                          }
                          if (
                            (!this._hasDetectedGesture() &&
                              this._isTwoTouchTimeoutRunning() &&
                              (this._stopTwoTouchTimeout(), (this._state = l)),
                            !this._hasDetectedGesture() &&
                              ((this._state &= ~(d | p | _)),
                              (this._state &= ~m),
                              this._stopLongpressTimeout(),
                              !this._waitingRelease))
                          )
                            switch (
                              ((this._releaseStart = Date.now()),
                              (this._waitingRelease = !0),
                              this._tracked.length)
                            ) {
                              case 1:
                                this._state &= ~(u | c);
                                break;
                              case 2:
                                this._state &= ~(s | c);
                                break;
                            }
                          if (this._waitingRelease) {
                            (Date.now() - this._releaseStart > y &&
                              (this._state = l),
                              this._tracked.some(function (e) {
                                return Date.now() - e.started > C;
                              }) && (this._state = l));
                            var e = this._tracked.find(function (e) {
                              return e.id === t;
                            });
                            if (((e.active = !1), this._hasDetectedGesture()))
                              this._pushEvent("gesturestart");
                            else if (this._state !== l) return;
                          }
                          this._hasDetectedGesture() &&
                            this._pushEvent("gestureend");
                          for (var o = 0; o < this._tracked.length; o++)
                            this._tracked[o].active &&
                              this._ignored.push(this._tracked[o].id);
                          ((this._tracked = []),
                            (this._state = l),
                            this._ignored.indexOf(t) !== -1 &&
                              this._ignored.splice(this._ignored.indexOf(t), 1),
                            this._ignored.length === 0 &&
                              ((this._state = f), (this._waitingRelease = !1)));
                        },
                      },
                      {
                        key: "_hasDetectedGesture",
                        value: function () {
                          return !(
                            this._state === l ||
                            this._state & (this._state - 1) ||
                            (this._state & (s | u | c) &&
                              this._tracked.some(function (e) {
                                return e.active;
                              }))
                          );
                        },
                      },
                      {
                        key: "_startLongpressTimeout",
                        value: function () {
                          var e = this;
                          (this._stopLongpressTimeout(),
                            (this._longpressTimeoutId = setTimeout(function () {
                              return e._longpressTimeout();
                            }, b)));
                        },
                      },
                      {
                        key: "_stopLongpressTimeout",
                        value: function () {
                          (clearTimeout(this._longpressTimeoutId),
                            (this._longpressTimeoutId = null));
                        },
                      },
                      {
                        key: "_longpressTimeout",
                        value: function () {
                          if (this._hasDetectedGesture())
                            throw new Error(
                              "A longpress gesture failed, conflict with a different gesture",
                            );
                          ((this._state = m), this._pushEvent("gesturestart"));
                        },
                      },
                      {
                        key: "_startTwoTouchTimeout",
                        value: function () {
                          var e = this;
                          (this._stopTwoTouchTimeout(),
                            (this._twoTouchTimeoutId = setTimeout(function () {
                              return e._twoTouchTimeout();
                            }, v)));
                        },
                      },
                      {
                        key: "_stopTwoTouchTimeout",
                        value: function () {
                          (clearTimeout(this._twoTouchTimeoutId),
                            (this._twoTouchTimeoutId = null));
                        },
                      },
                      {
                        key: "_isTwoTouchTimeoutRunning",
                        value: function () {
                          return this._twoTouchTimeoutId !== null;
                        },
                      },
                      {
                        key: "_twoTouchTimeout",
                        value: function () {
                          if (this._tracked.length === 0)
                            throw new Error(
                              "A pinch or two drag gesture failed, no tracked touches",
                            );
                          var e = this._getAverageMovement(),
                            t = Math.abs(e.x),
                            n = Math.abs(e.y),
                            r = this._getAverageDistance(),
                            o = Math.abs(
                              Math.hypot(r.first.x, r.first.y) -
                                Math.hypot(r.last.x, r.last.y),
                            );
                          (n < o && t < o
                            ? (this._state = _)
                            : (this._state = p),
                            this._pushEvent("gesturestart"),
                            this._pushEvent("gesturemove"));
                        },
                      },
                      {
                        key: "_pushEvent",
                        value: function (t) {
                          var e = { type: this._stateToGesture(this._state) },
                            n = this._getPosition(),
                            r = n.last;
                          switch (
                            (t === "gesturestart" && (r = n.first), this._state)
                          ) {
                            case p:
                            case _:
                              r = n.first;
                              break;
                          }
                          if (
                            ((e.clientX = r.x),
                            (e.clientY = r.y),
                            this._state === _)
                          ) {
                            var o = this._getAverageDistance();
                            t === "gesturestart"
                              ? ((e.magnitudeX = o.first.x),
                                (e.magnitudeY = o.first.y))
                              : ((e.magnitudeX = o.last.x),
                                (e.magnitudeY = o.last.y));
                          } else if (this._state === p)
                            if (t === "gesturestart")
                              ((e.magnitudeX = 0), (e.magnitudeY = 0));
                            else {
                              var a = this._getAverageMovement();
                              ((e.magnitudeX = a.x), (e.magnitudeY = a.y));
                            }
                          var i = new CustomEvent(t, { detail: e });
                          this._target.dispatchEvent(i);
                        },
                      },
                      {
                        key: "_stateToGesture",
                        value: function (t) {
                          switch (t) {
                            case s:
                              return "onetap";
                            case u:
                              return "twotap";
                            case c:
                              return "threetap";
                            case d:
                              return "drag";
                            case m:
                              return "longpress";
                            case p:
                              return "twodrag";
                            case _:
                              return "pinch";
                          }
                          throw new Error("Unknown gesture state: " + t);
                        },
                      },
                      {
                        key: "_getPosition",
                        value: function () {
                          if (this._tracked.length === 0)
                            throw new Error(
                              "Failed to get gesture position, no tracked touches",
                            );
                          for (
                            var e = this._tracked.length,
                              t = 0,
                              n = 0,
                              r = 0,
                              o = 0,
                              a = 0;
                            a < this._tracked.length;
                            a++
                          )
                            ((t += this._tracked[a].firstX),
                              (n += this._tracked[a].firstY),
                              (r += this._tracked[a].lastX),
                              (o += this._tracked[a].lastY));
                          return {
                            first: { x: t / e, y: n / e },
                            last: { x: r / e, y: o / e },
                          };
                        },
                      },
                      {
                        key: "_getAverageMovement",
                        value: function () {
                          if (this._tracked.length === 0)
                            throw new Error(
                              "Failed to get gesture movement, no tracked touches",
                            );
                          var e, t;
                          e = t = 0;
                          for (
                            var n = this._tracked.length, r = 0;
                            r < this._tracked.length;
                            r++
                          )
                            ((e +=
                              this._tracked[r].lastX - this._tracked[r].firstX),
                              (t +=
                                this._tracked[r].lastY -
                                this._tracked[r].firstY));
                          return { x: e / n, y: t / n };
                        },
                      },
                      {
                        key: "_getAverageDistance",
                        value: function () {
                          if (this._tracked.length === 0)
                            throw new Error(
                              "Failed to get gesture distance, no tracked touches",
                            );
                          var e = this._tracked[0],
                            t = this._tracked[this._tracked.length - 1],
                            n = Math.abs(t.firstX - e.firstX),
                            r = Math.abs(t.firstY - e.firstY),
                            o = Math.abs(t.lastX - e.lastX),
                            a = Math.abs(t.lastY - e.lastY);
                          return {
                            first: { x: n, y: r },
                            last: { x: o, y: a },
                          };
                        },
                      },
                    ]);
                  })());
              },
          }),
          N = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/util/cursor.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = l();
                function n(e) {
                  "@babel/helpers - typeof";
                  return (
                    (n =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    n(e)
                  );
                }
                function r(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function o(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, i(r.key), r));
                  }
                }
                function a(e, t, n) {
                  return (
                    t && o(e.prototype, t),
                    n && o(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function i(e) {
                  var t = s(e, "string");
                  return n(t) == "symbol" ? t : t + "";
                }
                function s(e, t) {
                  if (n(e) != "object" || !e) return e;
                  var r =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(e, t || "default");
                    if (n(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var u = !e.supportsCursorURIs || e.isTouchDevice,
                  c = (t.default = (function () {
                    function e() {
                      (r(this, e),
                        (this._target = null),
                        (this._canvas = document.createElement("canvas")),
                        u &&
                          ((this._canvas.style.position = "fixed"),
                          (this._canvas.style.zIndex = "65535"),
                          (this._canvas.style.pointerEvents = "none"),
                          (this._canvas.style.userSelect = "none"),
                          (this._canvas.style.WebkitUserSelect = "none"),
                          (this._canvas.style.visibility = "hidden")),
                        (this._position = { x: 0, y: 0 }),
                        (this._hotSpot = { x: 0, y: 0 }),
                        (this._eventHandlers = {
                          mouseover: this._handleMouseOver.bind(this),
                          mouseleave: this._handleMouseLeave.bind(this),
                          mousemove: this._handleMouseMove.bind(this),
                          mouseup: this._handleMouseUp.bind(this),
                        }));
                    }
                    return a(e, [
                      {
                        key: "attach",
                        value: function (t) {
                          if (
                            (this._target && this.detach(),
                            (this._target = t),
                            u)
                          ) {
                            document.body.appendChild(this._canvas);
                            var e = { capture: !0, passive: !0 };
                            (this._target.addEventListener(
                              "mouseover",
                              this._eventHandlers.mouseover,
                              e,
                            ),
                              this._target.addEventListener(
                                "mouseleave",
                                this._eventHandlers.mouseleave,
                                e,
                              ),
                              this._target.addEventListener(
                                "mousemove",
                                this._eventHandlers.mousemove,
                                e,
                              ),
                              this._target.addEventListener(
                                "mouseup",
                                this._eventHandlers.mouseup,
                                e,
                              ));
                          }
                          this.clear();
                        },
                      },
                      {
                        key: "detach",
                        value: function () {
                          if (this._target) {
                            if (u) {
                              var e = { capture: !0, passive: !0 };
                              (this._target.removeEventListener(
                                "mouseover",
                                this._eventHandlers.mouseover,
                                e,
                              ),
                                this._target.removeEventListener(
                                  "mouseleave",
                                  this._eventHandlers.mouseleave,
                                  e,
                                ),
                                this._target.removeEventListener(
                                  "mousemove",
                                  this._eventHandlers.mousemove,
                                  e,
                                ),
                                this._target.removeEventListener(
                                  "mouseup",
                                  this._eventHandlers.mouseup,
                                  e,
                                ),
                                document.contains(this._canvas) &&
                                  document.body.removeChild(this._canvas));
                            }
                            this._target = null;
                          }
                        },
                      },
                      {
                        key: "change",
                        value: function (t, n, r, o, a) {
                          if (o === 0 || a === 0) {
                            this.clear();
                            return;
                          }
                          ((this._position.x =
                            this._position.x + this._hotSpot.x - n),
                            (this._position.y =
                              this._position.y + this._hotSpot.y - r),
                            (this._hotSpot.x = n),
                            (this._hotSpot.y = r));
                          var e = this._canvas.getContext("2d");
                          ((this._canvas.width = o), (this._canvas.height = a));
                          var i = new ImageData(new Uint8ClampedArray(t), o, a);
                          if (
                            (e.clearRect(0, 0, o, a),
                            e.putImageData(i, 0, 0),
                            u)
                          )
                            this._updatePosition();
                          else {
                            var l = this._canvas.toDataURL();
                            this._target.style.cursor =
                              "url(" + l + ")" + n + " " + r + ", default";
                          }
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          ((this._target.style.cursor = "none"),
                            (this._canvas.width = 0),
                            (this._canvas.height = 0),
                            (this._position.x =
                              this._position.x + this._hotSpot.x),
                            (this._position.y =
                              this._position.y + this._hotSpot.y),
                            (this._hotSpot.x = 0),
                            (this._hotSpot.y = 0));
                        },
                      },
                      {
                        key: "move",
                        value: function (t, n) {
                          if (u) {
                            (window.visualViewport
                              ? ((this._position.x =
                                  t + window.visualViewport.offsetLeft),
                                (this._position.y =
                                  n + window.visualViewport.offsetTop))
                              : ((this._position.x = t),
                                (this._position.y = n)),
                              this._updatePosition());
                            var e = document.elementFromPoint(t, n);
                            this._updateVisibility(e);
                          }
                        },
                      },
                      {
                        key: "_handleMouseOver",
                        value: function (t) {
                          this._handleMouseMove(t);
                        },
                      },
                      {
                        key: "_handleMouseLeave",
                        value: function (t) {
                          this._updateVisibility(t.relatedTarget);
                        },
                      },
                      {
                        key: "_handleMouseMove",
                        value: function (t) {
                          (this._updateVisibility(t.target),
                            (this._position.x = t.clientX - this._hotSpot.x),
                            (this._position.y = t.clientY - this._hotSpot.y),
                            this._updatePosition());
                        },
                      },
                      {
                        key: "_handleMouseUp",
                        value: function (t) {
                          var e = this,
                            n = document.elementFromPoint(t.clientX, t.clientY);
                          (this._updateVisibility(n),
                            this._captureIsActive() &&
                              window.setTimeout(function () {
                                e._target &&
                                  ((n = document.elementFromPoint(
                                    t.clientX,
                                    t.clientY,
                                  )),
                                  e._updateVisibility(n));
                              }, 0));
                        },
                      },
                      {
                        key: "_showCursor",
                        value: function () {
                          this._canvas.style.visibility === "hidden" &&
                            (this._canvas.style.visibility = "");
                        },
                      },
                      {
                        key: "_hideCursor",
                        value: function () {
                          this._canvas.style.visibility !== "hidden" &&
                            (this._canvas.style.visibility = "hidden");
                        },
                      },
                      {
                        key: "_shouldShowCursor",
                        value: function (t) {
                          return t
                            ? t === this._target
                              ? !0
                              : !(
                                  !this._target.contains(t) ||
                                  window.getComputedStyle(t).cursor !== "none"
                                )
                            : !1;
                        },
                      },
                      {
                        key: "_updateVisibility",
                        value: function (t) {
                          (this._captureIsActive() &&
                            (t = document.captureElement),
                            this._shouldShowCursor(t)
                              ? this._showCursor()
                              : this._hideCursor());
                        },
                      },
                      {
                        key: "_updatePosition",
                        value: function () {
                          ((this._canvas.style.left = this._position.x + "px"),
                            (this._canvas.style.top = this._position.y + "px"));
                        },
                      },
                      {
                        key: "_captureIsActive",
                        value: function () {
                          return (
                            document.captureElement &&
                            document.documentElement.contains(
                              document.captureElement,
                            )
                          );
                        },
                      },
                    ]);
                  })());
              },
          }),
          M = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/websock.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = r(a());
                function n(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (n = function (n) {
                    return n ? r : t;
                  })(e);
                }
                function r(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (o(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var r = n(t);
                  if (r && r.has(e)) return r.get(e);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in e)
                    if (l !== "default" && {}.hasOwnProperty.call(e, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(e, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = e[l]);
                    }
                  return ((a.default = e), r && r.set(e, a), a);
                }
                function o(e) {
                  "@babel/helpers - typeof";
                  return (
                    (o =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    o(e)
                  );
                }
                function i(e) {
                  return c(e) || u(e) || s(e) || l();
                }
                function l() {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                }
                function s(e, t) {
                  if (e) {
                    if (typeof e == "string") return d(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      n === "Object" &&
                        e.constructor &&
                        (n = e.constructor.name),
                      n === "Map" || n === "Set"
                        ? Array.from(e)
                        : n === "Arguments" ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? d(e, t)
                          : void 0
                    );
                  }
                }
                function u(e) {
                  if (
                    (typeof Symbol < "u" &&
                      e[
                        typeof Symbol == "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ] != null) ||
                    e["@@iterator"] != null
                  )
                    return Array.from(e);
                }
                function c(e) {
                  if (Array.isArray(e)) return d(e);
                }
                function d(e, t) {
                  (t == null || t > e.length) && (t = e.length);
                  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function m(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function p(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, f(r.key), r));
                  }
                }
                function _(e, t, n) {
                  return (
                    t && p(e.prototype, t),
                    n && p(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function f(e) {
                  var t = g(e, "string");
                  return o(t) == "symbol" ? t : t + "";
                }
                function g(e, t) {
                  if (o(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (o(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var h = 40 * 1024 * 1024,
                  y = {
                    CONNECTING: "connecting",
                    OPEN: "open",
                    CLOSING: "closing",
                    CLOSED: "closed",
                  },
                  C = {
                    CONNECTING: [WebSocket.CONNECTING, y.CONNECTING],
                    OPEN: [WebSocket.OPEN, y.OPEN],
                    CLOSING: [WebSocket.CLOSING, y.CLOSING],
                    CLOSED: [WebSocket.CLOSED, y.CLOSED],
                  },
                  b = [
                    "send",
                    "close",
                    "binaryType",
                    "onerror",
                    "onmessage",
                    "onopen",
                    "protocol",
                    "readyState",
                  ],
                  v = (t.default = (function () {
                    function t() {
                      (m(this, t),
                        (this._websocket = null),
                        (this._rQi = 0),
                        (this._rQlen = 0),
                        (this._rQbufferSize = 1024 * 1024 * 4),
                        (this._rQ = null),
                        (this._sQbufferSize = 1024 * 10),
                        (this._sQlen = 0),
                        (this._sQ = null),
                        (this._eventHandlers = {
                          message: function () {},
                          open: function () {},
                          close: function () {},
                          error: function () {},
                        }));
                    }
                    return _(t, [
                      {
                        key: "readyState",
                        get: function () {
                          var e;
                          return this._websocket === null
                            ? "unused"
                            : ((e = this._websocket.readyState),
                              C.CONNECTING.includes(e)
                                ? "connecting"
                                : C.OPEN.includes(e)
                                  ? "open"
                                  : C.CLOSING.includes(e)
                                    ? "closing"
                                    : C.CLOSED.includes(e)
                                      ? "closed"
                                      : "unknown");
                        },
                      },
                      {
                        key: "rQpeek8",
                        value: function () {
                          return this._rQ[this._rQi];
                        },
                      },
                      {
                        key: "rQskipBytes",
                        value: function (t) {
                          this._rQi += t;
                        },
                      },
                      {
                        key: "rQshift8",
                        value: function () {
                          return this._rQshift(1);
                        },
                      },
                      {
                        key: "rQshift16",
                        value: function () {
                          return this._rQshift(2);
                        },
                      },
                      {
                        key: "rQshift32",
                        value: function () {
                          return this._rQshift(4);
                        },
                      },
                      {
                        key: "_rQshift",
                        value: function (t) {
                          for (var e = 0, n = t - 1; n >= 0; n--)
                            e += this._rQ[this._rQi++] << (n * 8);
                          return e >>> 0;
                        },
                      },
                      {
                        key: "rQshiftStr",
                        value: function (t) {
                          for (var e = "", n = 0; n < t; n += 4096) {
                            var r = this.rQshiftBytes(
                              Math.min(4096, t - n),
                              !1,
                            );
                            e += String.fromCharCode.apply(null, r);
                          }
                          return e;
                        },
                      },
                      {
                        key: "rQshiftBytes",
                        value: function (t) {
                          var e =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : !0;
                          return (
                            (this._rQi += t),
                            e
                              ? this._rQ.slice(this._rQi - t, this._rQi)
                              : this._rQ.subarray(this._rQi - t, this._rQi)
                          );
                        },
                      },
                      {
                        key: "rQshiftTo",
                        value: function (t, n) {
                          (t.set(new Uint8Array(this._rQ.buffer, this._rQi, n)),
                            (this._rQi += n));
                        },
                      },
                      {
                        key: "rQpeekBytes",
                        value: function (t) {
                          var e =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : !0;
                          return e
                            ? this._rQ.slice(this._rQi, this._rQi + t)
                            : this._rQ.subarray(this._rQi, this._rQi + t);
                        },
                      },
                      {
                        key: "rQwait",
                        value: function (t, n, r) {
                          if (this._rQlen - this._rQi < n) {
                            if (r) {
                              if (this._rQi < r)
                                throw new Error(
                                  "rQwait cannot backup " + r + " bytes",
                                );
                              this._rQi -= r;
                            }
                            return !0;
                          }
                          return !1;
                        },
                      },
                      {
                        key: "sQpush8",
                        value: function (t) {
                          (this._sQensureSpace(1),
                            (this._sQ[this._sQlen++] = t));
                        },
                      },
                      {
                        key: "sQpush16",
                        value: function (t) {
                          (this._sQensureSpace(2),
                            (this._sQ[this._sQlen++] = (t >> 8) & 255),
                            (this._sQ[this._sQlen++] = (t >> 0) & 255));
                        },
                      },
                      {
                        key: "sQpush32",
                        value: function (t) {
                          (this._sQensureSpace(4),
                            (this._sQ[this._sQlen++] = (t >> 24) & 255),
                            (this._sQ[this._sQlen++] = (t >> 16) & 255),
                            (this._sQ[this._sQlen++] = (t >> 8) & 255),
                            (this._sQ[this._sQlen++] = (t >> 0) & 255));
                        },
                      },
                      {
                        key: "sQpushString",
                        value: function (t) {
                          var e = t.split("").map(function (e) {
                            return e.charCodeAt(0);
                          });
                          this.sQpushBytes(new Uint8Array(e));
                        },
                      },
                      {
                        key: "sQpushBytes",
                        value: function (t) {
                          for (var e = 0; e < t.length; ) {
                            this._sQensureSpace(1);
                            var n = this._sQbufferSize - this._sQlen;
                            (n > t.length - e && (n = t.length - e),
                              this._sQ.set(t.subarray(e, n), this._sQlen),
                              (this._sQlen += n),
                              (e += n));
                          }
                        },
                      },
                      {
                        key: "flush",
                        value: function () {
                          this._sQlen > 0 &&
                            this.readyState === "open" &&
                            (this._websocket.send(
                              new Uint8Array(this._sQ.buffer, 0, this._sQlen),
                            ),
                            (this._sQlen = 0));
                        },
                      },
                      {
                        key: "_sQensureSpace",
                        value: function (t) {
                          this._sQbufferSize - this._sQlen < t && this.flush();
                        },
                      },
                      {
                        key: "off",
                        value: function (t) {
                          this._eventHandlers[t] = function () {};
                        },
                      },
                      {
                        key: "on",
                        value: function (t, n) {
                          this._eventHandlers[t] = n;
                        },
                      },
                      {
                        key: "_allocateBuffers",
                        value: function () {
                          ((this._rQ = new Uint8Array(this._rQbufferSize)),
                            (this._sQ = new Uint8Array(this._sQbufferSize)));
                        },
                      },
                      {
                        key: "init",
                        value: function () {
                          (this._allocateBuffers(),
                            (this._rQi = 0),
                            (this._websocket = null));
                        },
                      },
                      {
                        key: "open",
                        value: function (t, n) {
                          this.attach(new WebSocket(t, n));
                        },
                      },
                      {
                        key: "attach",
                        value: function (n) {
                          var t = this;
                          this.init();
                          for (
                            var r = [].concat(
                                i(Object.keys(n)),
                                i(
                                  Object.getOwnPropertyNames(
                                    Object.getPrototypeOf(n),
                                  ),
                                ),
                              ),
                              o = 0;
                            o < b.length;
                            o++
                          ) {
                            var a = b[o];
                            if (r.indexOf(a) < 0)
                              throw new Error(
                                "Raw channel missing property: " + a,
                              );
                          }
                          ((this._websocket = n),
                            (this._websocket.binaryType = "arraybuffer"),
                            (this._websocket.onmessage =
                              this._recvMessage.bind(this)),
                            (this._websocket.onopen = function () {
                              (e.Debug(">> WebSock.onopen"),
                                t._websocket.protocol &&
                                  e.Info(
                                    "Server choose sub-protocol: " +
                                      t._websocket.protocol,
                                  ),
                                t._eventHandlers.open(),
                                e.Debug("<< WebSock.onopen"));
                            }),
                            (this._websocket.onclose = function (n) {
                              (e.Debug(">> WebSock.onclose"),
                                t._eventHandlers.close(n),
                                e.Debug("<< WebSock.onclose"));
                            }),
                            (this._websocket.onerror = function (n) {
                              (e.Debug(">> WebSock.onerror: " + n),
                                t._eventHandlers.error(n),
                                e.Debug("<< WebSock.onerror: " + n));
                            }));
                        },
                      },
                      {
                        key: "close",
                        value: function () {
                          this._websocket &&
                            ((this.readyState === "connecting" ||
                              this.readyState === "open") &&
                              (e.Info("Closing WebSocket connection"),
                              this._websocket.close()),
                            (this._websocket.onmessage = function () {}));
                        },
                      },
                      {
                        key: "_expandCompactRQ",
                        value: function (t) {
                          var e = (this._rQlen - this._rQi + t) * 8,
                            n = this._rQbufferSize < e;
                          if (
                            (n &&
                              (this._rQbufferSize = Math.max(
                                this._rQbufferSize * 2,
                                e,
                              )),
                            this._rQbufferSize > h &&
                              ((this._rQbufferSize = h),
                              this._rQbufferSize - (this._rQlen - this._rQi) <
                                t))
                          )
                            throw new Error(
                              "Receive Queue buffer exceeded " +
                                h +
                                " bytes, and the new message could not fit",
                            );
                          if (n) {
                            var r = this._rQ.buffer;
                            ((this._rQ = new Uint8Array(this._rQbufferSize)),
                              this._rQ.set(
                                new Uint8Array(
                                  r,
                                  this._rQi,
                                  this._rQlen - this._rQi,
                                ),
                              ));
                          } else this._rQ.copyWithin(0, this._rQi, this._rQlen);
                          ((this._rQlen = this._rQlen - this._rQi),
                            (this._rQi = 0));
                        },
                      },
                      {
                        key: "_recvMessage",
                        value: function (n) {
                          this._rQlen == this._rQi &&
                            ((this._rQlen = 0), (this._rQi = 0));
                          var t = new Uint8Array(n.data);
                          (t.length > this._rQbufferSize - this._rQlen &&
                            this._expandCompactRQ(t.length),
                            this._rQ.set(t, this._rQlen),
                            (this._rQlen += t.length),
                            this._rQlen - this._rQi > 0
                              ? this._eventHandlers.message()
                              : e.Debug("Ignoring empty message"));
                        },
                      },
                    ]);
                  })());
              },
          }),
          w = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/input/xtscancodes.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = (t.default = {
                  Again: 57349,
                  AltLeft: 56,
                  AltRight: 57400,
                  ArrowDown: 57424,
                  ArrowLeft: 57419,
                  ArrowRight: 57421,
                  ArrowUp: 57416,
                  AudioVolumeDown: 57390,
                  AudioVolumeMute: 57376,
                  AudioVolumeUp: 57392,
                  Backquote: 41,
                  Backslash: 43,
                  Backspace: 14,
                  BracketLeft: 26,
                  BracketRight: 27,
                  BrowserBack: 57450,
                  BrowserFavorites: 57446,
                  BrowserForward: 57449,
                  BrowserHome: 57394,
                  BrowserRefresh: 57447,
                  BrowserSearch: 57445,
                  BrowserStop: 57448,
                  CapsLock: 58,
                  Comma: 51,
                  ContextMenu: 57437,
                  ControlLeft: 29,
                  ControlRight: 57373,
                  Convert: 121,
                  Copy: 57464,
                  Cut: 57404,
                  Delete: 57427,
                  Digit0: 11,
                  Digit1: 2,
                  Digit2: 3,
                  Digit3: 4,
                  Digit4: 5,
                  Digit5: 6,
                  Digit6: 7,
                  Digit7: 8,
                  Digit8: 9,
                  Digit9: 10,
                  Eject: 57469,
                  End: 57423,
                  Enter: 28,
                  Equal: 13,
                  Escape: 1,
                  F1: 59,
                  F10: 68,
                  F11: 87,
                  F12: 88,
                  F13: 93,
                  F14: 94,
                  F15: 95,
                  F16: 85,
                  F17: 57347,
                  F18: 57463,
                  F19: 57348,
                  F2: 60,
                  F20: 90,
                  F21: 116,
                  F22: 57465,
                  F23: 109,
                  F24: 111,
                  F3: 61,
                  F4: 62,
                  F5: 63,
                  F6: 64,
                  F7: 65,
                  F8: 66,
                  F9: 67,
                  Find: 57409,
                  Help: 57461,
                  Hiragana: 119,
                  Home: 57415,
                  Insert: 57426,
                  IntlBackslash: 86,
                  IntlRo: 115,
                  IntlYen: 125,
                  KanaMode: 112,
                  Katakana: 120,
                  KeyA: 30,
                  KeyB: 48,
                  KeyC: 46,
                  KeyD: 32,
                  KeyE: 18,
                  KeyF: 33,
                  KeyG: 34,
                  KeyH: 35,
                  KeyI: 23,
                  KeyJ: 36,
                  KeyK: 37,
                  KeyL: 38,
                  KeyM: 50,
                  KeyN: 49,
                  KeyO: 24,
                  KeyP: 25,
                  KeyQ: 16,
                  KeyR: 19,
                  KeyS: 31,
                  KeyT: 20,
                  KeyU: 22,
                  KeyV: 47,
                  KeyW: 17,
                  KeyX: 45,
                  KeyY: 21,
                  KeyZ: 44,
                  Lang1: 114,
                  Lang2: 113,
                  Lang3: 120,
                  Lang4: 119,
                  Lang5: 118,
                  LaunchApp1: 57451,
                  LaunchApp2: 57377,
                  LaunchMail: 57452,
                  MediaPlayPause: 57378,
                  MediaSelect: 57453,
                  MediaStop: 57380,
                  MediaTrackNext: 57369,
                  MediaTrackPrevious: 57360,
                  MetaLeft: 57435,
                  MetaRight: 57436,
                  Minus: 12,
                  NonConvert: 123,
                  NumLock: 69,
                  Numpad0: 82,
                  Numpad1: 79,
                  Numpad2: 80,
                  Numpad3: 81,
                  Numpad4: 75,
                  Numpad5: 76,
                  Numpad6: 77,
                  Numpad7: 71,
                  Numpad8: 72,
                  Numpad9: 73,
                  NumpadAdd: 78,
                  NumpadComma: 126,
                  NumpadDecimal: 83,
                  NumpadDivide: 57397,
                  NumpadEnter: 57372,
                  NumpadEqual: 89,
                  NumpadMultiply: 55,
                  NumpadParenLeft: 57462,
                  NumpadParenRight: 57467,
                  NumpadSubtract: 74,
                  Open: 100,
                  PageDown: 57425,
                  PageUp: 57417,
                  Paste: 101,
                  Pause: 57414,
                  Period: 52,
                  Power: 57438,
                  PrintScreen: 84,
                  Props: 57350,
                  Quote: 40,
                  ScrollLock: 70,
                  Semicolon: 39,
                  ShiftLeft: 42,
                  ShiftRight: 54,
                  Slash: 53,
                  Sleep: 57439,
                  Space: 57,
                  Suspend: 57381,
                  Tab: 15,
                  Undo: 57351,
                  WakeUp: 57443,
                });
              },
          }),
          A = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/encodings.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.encodingName = n),
                  (t.encodings = void 0));
                var e = (t.encodings = {
                  encodingRaw: 0,
                  encodingCopyRect: 1,
                  encodingRRE: 2,
                  encodingHextile: 5,
                  encodingTight: 7,
                  encodingZRLE: 16,
                  encodingTightPNG: -260,
                  encodingJPEG: 21,
                  pseudoEncodingQualityLevel9: -23,
                  pseudoEncodingQualityLevel0: -32,
                  pseudoEncodingDesktopSize: -223,
                  pseudoEncodingLastRect: -224,
                  pseudoEncodingCursor: -239,
                  pseudoEncodingQEMUExtendedKeyEvent: -258,
                  pseudoEncodingQEMULedEvent: -261,
                  pseudoEncodingDesktopName: -307,
                  pseudoEncodingExtendedDesktopSize: -308,
                  pseudoEncodingXvp: -309,
                  pseudoEncodingFence: -312,
                  pseudoEncodingContinuousUpdates: -313,
                  pseudoEncodingCompressLevel9: -247,
                  pseudoEncodingCompressLevel0: -256,
                  pseudoEncodingVMwareCursor: 1464686180,
                  pseudoEncodingExtendedClipboard: 3231835598,
                });
                function n(t) {
                  switch (t) {
                    case e.encodingRaw:
                      return "Raw";
                    case e.encodingCopyRect:
                      return "CopyRect";
                    case e.encodingRRE:
                      return "RRE";
                    case e.encodingHextile:
                      return "Hextile";
                    case e.encodingTight:
                      return "Tight";
                    case e.encodingZRLE:
                      return "ZRLE";
                    case e.encodingTightPNG:
                      return "TightPNG";
                    case e.encodingJPEG:
                      return "JPEG";
                    default:
                      return "[unknown encoding " + t + "]";
                  }
                }
              },
          }),
          F = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/aes.js":
              function (r) {
                "use strict";
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.AESECBCipher = r.AESEAXCipher = void 0));
                function t(e) {
                  "@babel/helpers - typeof";
                  return (
                    (t =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    t(e)
                  );
                }
                function o() {
                  "use strict";
                  o = function () {
                    return a;
                  };
                  var r,
                    a = {},
                    i = Object.prototype,
                    l = i.hasOwnProperty,
                    s =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    u = typeof Symbol == "function" ? Symbol : {},
                    c = u.iterator || "@@iterator",
                    d = u.asyncIterator || "@@asyncIterator",
                    m = u.toStringTag || "@@toStringTag";
                  function p(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    p({}, "");
                  } catch (e) {
                    p = function (t, n, r) {
                      return (t[n] = r);
                    };
                  }
                  function _(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v,
                      a = Object.create(o.prototype),
                      i = new M(r || []);
                    return (s(a, "_invoke", { value: x(e, n, i) }), a);
                  }
                  function f(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  a.wrap = _;
                  var g = "suspendedStart",
                    h = "suspendedYield",
                    y = "executing",
                    C = "completed",
                    b = {};
                  function v() {}
                  function S() {}
                  function R() {}
                  var L = {};
                  p(L, c, function () {
                    return this;
                  });
                  var E = Object.getPrototypeOf,
                    k = E && E(E(w([])));
                  k && k !== i && l.call(k, c) && (L = k);
                  var I = (R.prototype = v.prototype = Object.create(L));
                  function T(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      p(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function D(e, n) {
                    function r(o, a, i, s) {
                      var u = f(e[o], e, a);
                      if (u.type !== "throw") {
                        var c = u.arg,
                          d = c.value;
                        return d && t(d) == "object" && l.call(d, "__await")
                          ? n.resolve(d.__await).then(
                              function (e) {
                                r("next", e, i, s);
                              },
                              function (e) {
                                r("throw", e, i, s);
                              },
                            )
                          : n.resolve(d).then(
                              function (e) {
                                ((c.value = e), i(c));
                              },
                              function (e) {
                                return r("throw", e, i, s);
                              },
                            );
                      }
                      s(u.arg);
                    }
                    var o;
                    s(this, "_invoke", {
                      value: function (t, a) {
                        function e() {
                          return new n(function (e, n) {
                            r(t, a, e, n);
                          });
                        }
                        return (o = o ? o.then(e, e) : e());
                      },
                    });
                  }
                  function x(e, t, n) {
                    var o = g;
                    return function (a, i) {
                      if (o === y) throw Error("Generator is already running");
                      if (o === C) {
                        if (a === "throw") throw i;
                        return { value: r, done: !0 };
                      }
                      for (n.method = a, n.arg = i; ; ) {
                        var l = n.delegate;
                        if (l) {
                          var s = $(l, n);
                          if (s) {
                            if (s === b) continue;
                            return s;
                          }
                        }
                        if (n.method === "next") n.sent = n._sent = n.arg;
                        else if (n.method === "throw") {
                          if (o === g) throw ((o = C), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          n.method === "return" && n.abrupt("return", n.arg);
                        o = y;
                        var u = f(e, t, n);
                        if (u.type === "normal") {
                          if (((o = n.done ? C : h), u.arg === b)) continue;
                          return { value: u.arg, done: n.done };
                        }
                        u.type === "throw" &&
                          ((o = C), (n.method = "throw"), (n.arg = u.arg));
                      }
                    };
                  }
                  function $(e, t) {
                    var n = t.method,
                      o = e.iterator[n];
                    if (o === r)
                      return (
                        (t.delegate = null),
                        (n === "throw" &&
                          e.iterator.return &&
                          ((t.method = "return"),
                          (t.arg = r),
                          $(e, t),
                          t.method === "throw")) ||
                          (n !== "return" &&
                            ((t.method = "throw"),
                            (t.arg = new TypeError(
                              "The iterator does not provide a '" +
                                n +
                                "' method",
                            )))),
                        b
                      );
                    var a = f(o, e.iterator, t.arg);
                    if (a.type === "throw")
                      return (
                        (t.method = "throw"),
                        (t.arg = a.arg),
                        (t.delegate = null),
                        b
                      );
                    var i = a.arg;
                    return i
                      ? i.done
                        ? ((t[e.resultName] = i.value),
                          (t.next = e.nextLoc),
                          t.method !== "return" &&
                            ((t.method = "next"), (t.arg = r)),
                          (t.delegate = null),
                          b)
                        : i
                      : ((t.method = "throw"),
                        (t.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (t.delegate = null),
                        b);
                  }
                  function P(e) {
                    var t = { tryLoc: e[0] };
                    (1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t));
                  }
                  function N(e) {
                    var t = e.completion || {};
                    ((t.type = "normal"), delete t.arg, (e.completion = t));
                  }
                  function M(e) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach(P, this),
                      this.reset(!0));
                  }
                  function w(e) {
                    if (e || e === "") {
                      var n = e[c];
                      if (n) return n.call(e);
                      if (typeof e.next == "function") return e;
                      if (!isNaN(e.length)) {
                        var o = -1,
                          a = function t() {
                            for (; ++o < e.length; )
                              if (l.call(e, o))
                                return ((t.value = e[o]), (t.done = !1), t);
                            return ((t.value = r), (t.done = !0), t);
                          };
                        return (a.next = a);
                      }
                    }
                    throw new TypeError(t(e) + " is not iterable");
                  }
                  return (
                    (S.prototype = R),
                    s(I, "constructor", { value: R, configurable: !0 }),
                    s(R, "constructor", { value: S, configurable: !0 }),
                    (S.displayName = p(R, m, "GeneratorFunction")),
                    (a.isGeneratorFunction = function (e) {
                      var t = typeof e == "function" && e.constructor;
                      return (
                        !!t &&
                        (t === S ||
                          (t.displayName || t.name) === "GeneratorFunction")
                      );
                    }),
                    (a.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, R)
                          : ((e.__proto__ = R), p(e, m, "GeneratorFunction")),
                        (e.prototype = Object.create(I)),
                        e
                      );
                    }),
                    (a.awrap = function (e) {
                      return { __await: e };
                    }),
                    T(D.prototype),
                    p(D.prototype, d, function () {
                      return this;
                    }),
                    (a.AsyncIterator = D),
                    (a.async = function (t, r, o, i, l) {
                      l === void 0 && (l = e || (e = n("Promise")));
                      var s = new D(_(t, r, o, i), l);
                      return a.isGeneratorFunction(r)
                        ? s
                        : s.next().then(function (e) {
                            return e.done ? e.value : s.next();
                          });
                    }),
                    T(I),
                    p(I, m, "Generator"),
                    p(I, c, function () {
                      return this;
                    }),
                    p(I, "toString", function () {
                      return "[object Generator]";
                    }),
                    (a.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                              return ((e.value = r), (e.done = !1), e);
                          }
                          return ((e.done = !0), e);
                        }
                      );
                    }),
                    (a.values = w),
                    (M.prototype = {
                      constructor: M,
                      reset: function (t) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = r),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = r),
                          this.tryEntries.forEach(N),
                          !t)
                        )
                          for (var e in this)
                            e.charAt(0) === "t" &&
                              l.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = r);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if (e.type === "throw") throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(n, o) {
                          return (
                            (i.type = "throw"),
                            (i.arg = t),
                            (e.next = n),
                            o && ((e.method = "next"), (e.arg = r)),
                            !!o
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var a = this.tryEntries[o],
                            i = a.completion;
                          if (a.tryLoc === "root") return n("end");
                          if (a.tryLoc <= this.prev) {
                            var s = l.call(a, "catchLoc"),
                              u = l.call(a, "finallyLoc");
                            if (s && u) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            } else if (s) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                            } else {
                              if (!u)
                                throw Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (
                            r.tryLoc <= this.prev &&
                            l.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                          ) {
                            var o = r;
                            break;
                          }
                        }
                        o &&
                          (t === "break" || t === "continue") &&
                          o.tryLoc <= n &&
                          n <= o.finallyLoc &&
                          (o = null);
                        var a = o ? o.completion : {};
                        return (
                          (a.type = t),
                          (a.arg = n),
                          o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              b)
                            : this.complete(a)
                        );
                      },
                      complete: function (t, n) {
                        if (t.type === "throw") throw t.arg;
                        return (
                          t.type === "break" || t.type === "continue"
                            ? (this.next = t.arg)
                            : t.type === "return"
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : t.type === "normal" && n && (this.next = n),
                          b
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              N(n),
                              b
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if (r.type === "throw") {
                              var o = r.arg;
                              N(n);
                            }
                            return o;
                          }
                        }
                        throw Error("illegal catch attempt");
                      },
                      delegateYield: function (t, n, o) {
                        return (
                          (this.delegate = {
                            iterator: w(t),
                            resultName: n,
                            nextLoc: o,
                          }),
                          this.method === "next" && (this.arg = r),
                          b
                        );
                      },
                    }),
                    a
                  );
                }
                function a(t, r, o, a, i, l, s) {
                  try {
                    var u = t[l](s),
                      c = u.value;
                  } catch (e) {
                    return void o(e);
                  }
                  u.done
                    ? r(c)
                    : (e || (e = n("Promise"))).resolve(c).then(a, i);
                }
                function i(t) {
                  return function () {
                    var r = this,
                      o = arguments;
                    return new (e || (e = n("Promise")))(function (e, n) {
                      var i = t.apply(r, o);
                      function l(t) {
                        a(i, e, n, l, s, "next", t);
                      }
                      function s(t) {
                        a(i, e, n, l, s, "throw", t);
                      }
                      l(void 0);
                    });
                  };
                }
                function l(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function s(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, c(r.key), r));
                  }
                }
                function u(e, t, n) {
                  return (
                    t && s(e.prototype, t),
                    n && s(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function c(e) {
                  var n = d(e, "string");
                  return t(n) == "symbol" ? n : n + "";
                }
                function d(e, n) {
                  if (t(e) != "object" || !e) return e;
                  var r =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(e, n || "default");
                    if (t(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(e);
                }
                var m = (r.AESECBCipher = (function () {
                    function e() {
                      (l(this, e), (this._key = null));
                    }
                    return u(
                      e,
                      [
                        {
                          key: "algorithm",
                          get: function () {
                            return { name: "AES-ECB" };
                          },
                        },
                        {
                          key: "_importKey",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n, r) {
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            window.crypto.subtle.importKey(
                                              "raw",
                                              t,
                                              { name: "AES-CBC" },
                                              n,
                                              r,
                                            )
                                          );
                                        case 2:
                                          this._key = e.sent;
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n, r) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "encrypt",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r, a, i, l;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((r = new Uint8Array(n)),
                                            !(
                                              r.length % 16 !== 0 ||
                                              this._key === null
                                            ))
                                          ) {
                                            e.next = 3;
                                            break;
                                          }
                                          return e.abrupt("return", null);
                                        case 3:
                                          ((a = r.length / 16), (i = 0));
                                        case 5:
                                          if (!(i < a)) {
                                            e.next = 15;
                                            break;
                                          }
                                          return (
                                            (e.t0 = Uint8Array),
                                            (e.next = 9),
                                            window.crypto.subtle.encrypt(
                                              {
                                                name: "AES-CBC",
                                                iv: new Uint8Array(16),
                                              },
                                              this._key,
                                              r.slice(i * 16, i * 16 + 16),
                                            )
                                          );
                                        case 9:
                                          ((e.t1 = e.sent),
                                            (l = new e.t0(e.t1).slice(0, 16)),
                                            r.set(l, i * 16));
                                        case 12:
                                          (i++, (e.next = 5));
                                          break;
                                        case 15:
                                          return e.abrupt("return", r);
                                        case 16:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                      ],
                      [
                        {
                          key: "importKey",
                          value: (function () {
                            var t = i(
                              o().mark(function t(n, r, a, i) {
                                var l;
                                return o().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (l = new e()),
                                          (t.next = 3),
                                          l._importKey(n, a, i)
                                        );
                                      case 3:
                                        return t.abrupt("return", l);
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              }),
                            );
                            function n(e, n, r, o) {
                              return t.apply(this, arguments);
                            }
                            return n;
                          })(),
                        },
                      ],
                    );
                  })()),
                  p = (r.AESEAXCipher = (function () {
                    function e() {
                      (l(this, e),
                        (this._rawKey = null),
                        (this._ctrKey = null),
                        (this._cbcKey = null),
                        (this._zeroBlock = new Uint8Array(16)),
                        (this._prefixBlock0 = this._zeroBlock),
                        (this._prefixBlock1 = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                        ])),
                        (this._prefixBlock2 = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                        ])));
                    }
                    return u(
                      e,
                      [
                        {
                          key: "algorithm",
                          get: function () {
                            return { name: "AES-EAX" };
                          },
                        },
                        {
                          key: "_encryptBlock",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t) {
                                var n;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            window.crypto.subtle.encrypt(
                                              {
                                                name: "AES-CBC",
                                                iv: this._zeroBlock,
                                              },
                                              this._cbcKey,
                                              t,
                                            )
                                          );
                                        case 2:
                                          return (
                                            (n = e.sent),
                                            e.abrupt(
                                              "return",
                                              new Uint8Array(n).slice(0, 16),
                                            )
                                          );
                                        case 4:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "_initCMAC",
                          value: (function () {
                            var e = i(
                              o().mark(function e() {
                                var t, n, r, a, i;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            this._encryptBlock(this._zeroBlock)
                                          );
                                        case 2:
                                          for (
                                            t = e.sent,
                                              n = new Uint8Array(16),
                                              r = t[0] >>> 6,
                                              a = 0;
                                            a < 15;
                                            a++
                                          )
                                            ((n[a] =
                                              (t[a + 1] >> 6) | (t[a] << 2)),
                                              (t[a] =
                                                (t[a + 1] >> 7) | (t[a] << 1)));
                                          ((i = [0, 135, 14, 137]),
                                            (n[14] ^= r >>> 1),
                                            (n[15] = (t[15] << 2) ^ i[r]),
                                            (t[15] = (t[15] << 1) ^ i[r >> 1]),
                                            (this._k1 = t),
                                            (this._k2 = n));
                                        case 12:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t() {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "_encryptCTR",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            window.crypto.subtle.encrypt(
                                              {
                                                name: "AES-CTR",
                                                counter: n,
                                                length: 128,
                                              },
                                              this._ctrKey,
                                              t,
                                            )
                                          );
                                        case 2:
                                          return (
                                            (r = e.sent),
                                            e.abrupt(
                                              "return",
                                              new Uint8Array(r),
                                            )
                                          );
                                        case 4:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "_decryptCTR",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            window.crypto.subtle.decrypt(
                                              {
                                                name: "AES-CTR",
                                                counter: n,
                                                length: 128,
                                              },
                                              this._ctrKey,
                                              t,
                                            )
                                          );
                                        case 2:
                                          return (
                                            (r = e.sent),
                                            e.abrupt(
                                              "return",
                                              new Uint8Array(r),
                                            )
                                          );
                                        case 4:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "_computeCMAC",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r, a, i, l, s, u, c, d;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (n.length === 16) {
                                            e.next = 2;
                                            break;
                                          }
                                          return e.abrupt("return", null);
                                        case 2:
                                          if (
                                            ((r = Math.floor(t.length / 16)),
                                            (a = Math.ceil(t.length / 16)),
                                            (i = t.length - r * 16),
                                            (l = new Uint8Array((a + 1) * 16)),
                                            l.set(n),
                                            l.set(t, 16),
                                            i === 0)
                                          )
                                            for (s = 0; s < 16; s++)
                                              l[r * 16 + s] ^= this._k1[s];
                                          else
                                            for (
                                              l[(r + 1) * 16 + i] = 128, u = 0;
                                              u < 16;
                                              u++
                                            )
                                              l[(r + 1) * 16 + u] ^=
                                                this._k2[u];
                                          return (
                                            (e.next = 11),
                                            window.crypto.subtle.encrypt(
                                              {
                                                name: "AES-CBC",
                                                iv: this._zeroBlock,
                                              },
                                              this._cbcKey,
                                              l,
                                            )
                                          );
                                        case 11:
                                          return (
                                            (c = e.sent),
                                            (c = new Uint8Array(c)),
                                            (d = c.slice(
                                              c.length - 32,
                                              c.length - 16,
                                            )),
                                            e.abrupt("return", d)
                                          );
                                        case 15:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "_importKey",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t) {
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (this._rawKey = t),
                                            (e.next = 3),
                                            window.crypto.subtle.importKey(
                                              "raw",
                                              t,
                                              { name: "AES-CTR" },
                                              !1,
                                              ["encrypt", "decrypt"],
                                            )
                                          );
                                        case 3:
                                          return (
                                            (this._ctrKey = e.sent),
                                            (e.next = 6),
                                            window.crypto.subtle.importKey(
                                              "raw",
                                              t,
                                              { name: "AES-CBC" },
                                              !1,
                                              ["encrypt"],
                                            )
                                          );
                                        case 6:
                                          return (
                                            (this._cbcKey = e.sent),
                                            (e.next = 9),
                                            this._initCMAC()
                                          );
                                        case 9:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "encrypt",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r, a, i, l, s, u, c, d;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (r = t.additionalData),
                                            (a = t.iv),
                                            (e.next = 4),
                                            this._computeCMAC(
                                              a,
                                              this._prefixBlock0,
                                            )
                                          );
                                        case 4:
                                          return (
                                            (i = e.sent),
                                            (e.next = 7),
                                            this._encryptCTR(n, i)
                                          );
                                        case 7:
                                          return (
                                            (l = e.sent),
                                            (e.next = 10),
                                            this._computeCMAC(
                                              r,
                                              this._prefixBlock1,
                                            )
                                          );
                                        case 10:
                                          return (
                                            (s = e.sent),
                                            (e.next = 13),
                                            this._computeCMAC(
                                              l,
                                              this._prefixBlock2,
                                            )
                                          );
                                        case 13:
                                          for (u = e.sent, c = 0; c < 16; c++)
                                            u[c] ^= i[c] ^ s[c];
                                          return (
                                            (d = new Uint8Array(16 + l.length)),
                                            d.set(l),
                                            d.set(u, l.length),
                                            e.abrupt("return", d)
                                          );
                                        case 19:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                        {
                          key: "decrypt",
                          value: (function () {
                            var e = i(
                              o().mark(function e(t, n) {
                                var r, a, i, l, s, u, c, d, m, p;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (r = n.slice(0, n.length - 16)),
                                            (a = t.additionalData),
                                            (i = t.iv),
                                            (l = n.slice(n.length - 16)),
                                            (e.next = 6),
                                            this._computeCMAC(
                                              i,
                                              this._prefixBlock0,
                                            )
                                          );
                                        case 6:
                                          return (
                                            (s = e.sent),
                                            (e.next = 9),
                                            this._computeCMAC(
                                              a,
                                              this._prefixBlock1,
                                            )
                                          );
                                        case 9:
                                          return (
                                            (u = e.sent),
                                            (e.next = 12),
                                            this._computeCMAC(
                                              r,
                                              this._prefixBlock2,
                                            )
                                          );
                                        case 12:
                                          for (c = e.sent, d = 0; d < 16; d++)
                                            c[d] ^= s[d] ^ u[d];
                                          if (c.length === l.length) {
                                            e.next = 16;
                                            break;
                                          }
                                          return e.abrupt("return", null);
                                        case 16:
                                          m = 0;
                                        case 17:
                                          if (!(m < l.length)) {
                                            e.next = 23;
                                            break;
                                          }
                                          if (c[m] === l[m]) {
                                            e.next = 20;
                                            break;
                                          }
                                          return e.abrupt("return", null);
                                        case 20:
                                          (m++, (e.next = 17));
                                          break;
                                        case 23:
                                          return (
                                            (e.next = 25),
                                            this._decryptCTR(r, s)
                                          );
                                        case 25:
                                          return (
                                            (p = e.sent),
                                            e.abrupt("return", p)
                                          );
                                        case 27:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function t(t, n) {
                              return e.apply(this, arguments);
                            }
                            return t;
                          })(),
                        },
                      ],
                      [
                        {
                          key: "importKey",
                          value: (function () {
                            var t = i(
                              o().mark(function t(n, r, a, i) {
                                var l;
                                return o().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (l = new e()),
                                          (t.next = 3),
                                          l._importKey(n)
                                        );
                                      case 3:
                                        return t.abrupt("return", l);
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              }),
                            );
                            function n(e, n, r, o) {
                              return t.apply(this, arguments);
                            }
                            return n;
                          })(),
                        },
                      ],
                    );
                  })());
              },
          }),
          O = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/des.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.DESECBCipher = t.DESCBCCipher = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = [
                    13, 16, 10, 23, 0, 4, 2, 27, 14, 5, 20, 9, 22, 18, 11, 3,
                    25, 7, 15, 6, 26, 19, 12, 1, 40, 51, 30, 36, 46, 54, 29, 39,
                    50, 44, 32, 47, 43, 48, 38, 55, 33, 52, 45, 41, 49, 35, 28,
                    31,
                  ],
                  s = [
                    1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28,
                  ],
                  u = 0,
                  c,
                  d,
                  m,
                  p,
                  _,
                  f;
                ((c = 65536),
                  (d = 1 << 24),
                  (m = c | d),
                  (p = 4),
                  (_ = 1024),
                  (f = p | _));
                var g = [
                  m | _,
                  u | u,
                  c | u,
                  m | f,
                  m | p,
                  c | f,
                  u | p,
                  c | u,
                  u | _,
                  m | _,
                  m | f,
                  u | _,
                  d | f,
                  m | p,
                  d | u,
                  u | p,
                  u | f,
                  d | _,
                  d | _,
                  c | _,
                  c | _,
                  m | u,
                  m | u,
                  d | f,
                  c | p,
                  d | p,
                  d | p,
                  c | p,
                  u | u,
                  u | f,
                  c | f,
                  d | u,
                  c | u,
                  m | f,
                  u | p,
                  m | u,
                  m | _,
                  d | u,
                  d | u,
                  u | _,
                  m | p,
                  c | u,
                  c | _,
                  d | p,
                  u | _,
                  u | p,
                  d | f,
                  c | f,
                  m | f,
                  c | p,
                  m | u,
                  d | f,
                  d | p,
                  u | f,
                  c | f,
                  m | _,
                  u | f,
                  d | _,
                  d | _,
                  u | u,
                  c | p,
                  c | _,
                  u | u,
                  m | p,
                ];
                ((c = 1 << 20),
                  (d = 1 << 31),
                  (m = c | d),
                  (p = 32),
                  (_ = 32768),
                  (f = p | _));
                var h = [
                  m | f,
                  d | _,
                  u | _,
                  c | f,
                  c | u,
                  u | p,
                  m | p,
                  d | f,
                  d | p,
                  m | f,
                  m | _,
                  d | u,
                  d | _,
                  c | u,
                  u | p,
                  m | p,
                  c | _,
                  c | p,
                  d | f,
                  u | u,
                  d | u,
                  u | _,
                  c | f,
                  m | u,
                  c | p,
                  d | p,
                  u | u,
                  c | _,
                  u | f,
                  m | _,
                  m | u,
                  u | f,
                  u | u,
                  c | f,
                  m | p,
                  c | u,
                  d | f,
                  m | u,
                  m | _,
                  u | _,
                  m | u,
                  d | _,
                  u | p,
                  m | f,
                  c | f,
                  u | p,
                  u | _,
                  d | u,
                  u | f,
                  m | _,
                  c | u,
                  d | p,
                  c | p,
                  d | f,
                  d | p,
                  c | p,
                  c | _,
                  u | u,
                  d | _,
                  u | f,
                  d | u,
                  m | p,
                  m | f,
                  c | _,
                ];
                ((c = 1 << 17),
                  (d = 1 << 27),
                  (m = c | d),
                  (p = 8),
                  (_ = 512),
                  (f = p | _));
                var y = [
                  u | f,
                  m | _,
                  u | u,
                  m | p,
                  d | _,
                  u | u,
                  c | f,
                  d | _,
                  c | p,
                  d | p,
                  d | p,
                  c | u,
                  m | f,
                  c | p,
                  m | u,
                  u | f,
                  d | u,
                  u | p,
                  m | _,
                  u | _,
                  c | _,
                  m | u,
                  m | p,
                  c | f,
                  d | f,
                  c | _,
                  c | u,
                  d | f,
                  u | p,
                  m | f,
                  u | _,
                  d | u,
                  m | _,
                  d | u,
                  c | p,
                  u | f,
                  c | u,
                  m | _,
                  d | _,
                  u | u,
                  u | _,
                  c | p,
                  m | f,
                  d | _,
                  d | p,
                  u | _,
                  u | u,
                  m | p,
                  d | f,
                  c | u,
                  d | u,
                  m | f,
                  u | p,
                  c | f,
                  c | _,
                  d | p,
                  m | u,
                  d | f,
                  u | f,
                  m | u,
                  c | f,
                  u | p,
                  m | p,
                  c | _,
                ];
                ((c = 8192),
                  (d = 1 << 23),
                  (m = c | d),
                  (p = 1),
                  (_ = 128),
                  (f = p | _));
                var C = [
                  m | p,
                  c | f,
                  c | f,
                  u | _,
                  m | _,
                  d | f,
                  d | p,
                  c | p,
                  u | u,
                  m | u,
                  m | u,
                  m | f,
                  u | f,
                  u | u,
                  d | _,
                  d | p,
                  u | p,
                  c | u,
                  d | u,
                  m | p,
                  u | _,
                  d | u,
                  c | p,
                  c | _,
                  d | f,
                  u | p,
                  c | _,
                  d | _,
                  c | u,
                  m | _,
                  m | f,
                  u | f,
                  d | _,
                  d | p,
                  m | u,
                  m | f,
                  u | f,
                  u | u,
                  u | u,
                  m | u,
                  c | _,
                  d | _,
                  d | f,
                  u | p,
                  m | p,
                  c | f,
                  c | f,
                  u | _,
                  m | f,
                  u | f,
                  u | p,
                  c | u,
                  d | p,
                  c | p,
                  m | _,
                  d | f,
                  c | p,
                  c | _,
                  d | u,
                  m | p,
                  u | _,
                  d | u,
                  c | u,
                  m | _,
                ];
                ((c = 1 << 25),
                  (d = 1 << 30),
                  (m = c | d),
                  (p = 256),
                  (_ = 1 << 19),
                  (f = p | _));
                var b = [
                  u | p,
                  c | f,
                  c | _,
                  m | p,
                  u | _,
                  u | p,
                  d | u,
                  c | _,
                  d | f,
                  u | _,
                  c | p,
                  d | f,
                  m | p,
                  m | _,
                  u | f,
                  d | u,
                  c | u,
                  d | _,
                  d | _,
                  u | u,
                  d | p,
                  m | f,
                  m | f,
                  c | p,
                  m | _,
                  d | p,
                  u | u,
                  m | u,
                  c | f,
                  c | u,
                  m | u,
                  u | f,
                  u | _,
                  m | p,
                  u | p,
                  c | u,
                  d | u,
                  c | _,
                  m | p,
                  d | f,
                  c | p,
                  d | u,
                  m | _,
                  c | f,
                  d | f,
                  u | p,
                  c | u,
                  m | _,
                  m | f,
                  u | f,
                  m | u,
                  m | f,
                  c | _,
                  u | u,
                  d | _,
                  m | u,
                  u | f,
                  c | p,
                  d | p,
                  u | _,
                  u | u,
                  d | _,
                  c | f,
                  d | p,
                ];
                ((c = 1 << 22),
                  (d = 1 << 29),
                  (m = c | d),
                  (p = 16),
                  (_ = 16384),
                  (f = p | _));
                var v = [
                  d | p,
                  m | u,
                  u | _,
                  m | f,
                  m | u,
                  u | p,
                  m | f,
                  c | u,
                  d | _,
                  c | f,
                  c | u,
                  d | p,
                  c | p,
                  d | _,
                  d | u,
                  u | f,
                  u | u,
                  c | p,
                  d | f,
                  u | _,
                  c | _,
                  d | f,
                  u | p,
                  m | p,
                  m | p,
                  u | u,
                  c | f,
                  m | _,
                  u | f,
                  c | _,
                  m | _,
                  d | u,
                  d | _,
                  u | p,
                  m | p,
                  c | _,
                  m | f,
                  c | u,
                  u | f,
                  d | p,
                  c | u,
                  d | _,
                  d | u,
                  u | f,
                  d | p,
                  m | f,
                  c | _,
                  m | u,
                  c | f,
                  m | _,
                  u | u,
                  m | p,
                  u | p,
                  u | _,
                  m | u,
                  c | f,
                  u | _,
                  c | p,
                  d | f,
                  u | u,
                  m | _,
                  d | u,
                  c | p,
                  d | f,
                ];
                ((c = 1 << 21),
                  (d = 1 << 26),
                  (m = c | d),
                  (p = 2),
                  (_ = 2048),
                  (f = p | _));
                var S = [
                  c | u,
                  m | p,
                  d | f,
                  u | u,
                  u | _,
                  d | f,
                  c | f,
                  m | _,
                  m | f,
                  c | u,
                  u | u,
                  d | p,
                  u | p,
                  d | u,
                  m | p,
                  u | f,
                  d | _,
                  c | f,
                  c | p,
                  d | _,
                  d | p,
                  m | u,
                  m | _,
                  c | p,
                  m | u,
                  u | _,
                  u | f,
                  m | f,
                  c | _,
                  u | p,
                  d | u,
                  c | _,
                  d | u,
                  c | _,
                  c | u,
                  d | f,
                  d | f,
                  m | p,
                  m | p,
                  u | p,
                  c | p,
                  d | u,
                  d | _,
                  c | u,
                  m | _,
                  u | f,
                  c | f,
                  m | _,
                  u | f,
                  d | p,
                  m | f,
                  m | u,
                  c | _,
                  u | u,
                  u | p,
                  m | f,
                  u | u,
                  c | f,
                  m | u,
                  u | _,
                  d | p,
                  d | _,
                  u | _,
                  c | p,
                ];
                ((c = 1 << 18),
                  (d = 1 << 28),
                  (m = c | d),
                  (p = 64),
                  (_ = 4096),
                  (f = p | _));
                var R = [
                    d | f,
                    u | _,
                    c | u,
                    m | f,
                    d | u,
                    d | f,
                    u | p,
                    d | u,
                    c | p,
                    m | u,
                    m | f,
                    c | _,
                    m | _,
                    c | f,
                    u | _,
                    u | p,
                    m | u,
                    d | p,
                    d | _,
                    u | f,
                    c | _,
                    c | p,
                    m | p,
                    m | _,
                    u | f,
                    u | u,
                    u | u,
                    m | p,
                    d | p,
                    d | _,
                    c | f,
                    c | u,
                    c | f,
                    c | u,
                    m | _,
                    u | _,
                    u | p,
                    m | p,
                    u | _,
                    c | f,
                    d | _,
                    u | p,
                    d | p,
                    m | u,
                    m | p,
                    d | u,
                    c | u,
                    d | f,
                    u | u,
                    m | f,
                    c | p,
                    d | p,
                    m | u,
                    d | _,
                    d | f,
                    u | u,
                    m | f,
                    c | _,
                    c | _,
                    u | f,
                    u | f,
                    c | p,
                    d | u,
                    m | _,
                  ],
                  L = (function () {
                    function e(t) {
                      (n(this, e), (this.keys = []));
                      for (
                        var r = [], o = [], a = [], i = 0, u = 56;
                        i < 56;
                        ++i, u -= 8
                      ) {
                        u +=
                          u < -5
                            ? 65
                            : u < -3
                              ? 31
                              : u < -1
                                ? 63
                                : u === 27
                                  ? 35
                                  : 0;
                        var c = u & 7;
                        r[i] = (t[u >>> 3] & (1 << c)) !== 0 ? 1 : 0;
                      }
                      for (var d = 0; d < 16; ++d) {
                        var m = d << 1,
                          p = m + 1;
                        a[m] = a[p] = 0;
                        for (var _ = 28; _ < 59; _ += 28)
                          for (var f = _ - 28; f < _; ++f) {
                            var g = f + s[d];
                            o[f] = g < _ ? r[g] : r[g - 28];
                          }
                        for (var h = 0; h < 24; ++h)
                          (o[l[h]] !== 0 && (a[m] |= 1 << (23 - h)),
                            o[l[h + 24]] !== 0 && (a[p] |= 1 << (23 - h)));
                      }
                      for (var y = 0, C = 0, b = 0; y < 16; ++y) {
                        var v = a[C++],
                          S = a[C++];
                        ((this.keys[b] = (v & 16515072) << 6),
                          (this.keys[b] |= (v & 4032) << 10),
                          (this.keys[b] |= (S & 16515072) >>> 10),
                          (this.keys[b] |= (S & 4032) >>> 6),
                          ++b,
                          (this.keys[b] = (v & 258048) << 12),
                          (this.keys[b] |= (v & 63) << 16),
                          (this.keys[b] |= (S & 258048) >>> 4),
                          (this.keys[b] |= S & 63),
                          ++b);
                      }
                    }
                    return o(e, [
                      {
                        key: "enc8",
                        value: function (t) {
                          var e = t.slice(),
                            n = 0,
                            r,
                            o,
                            a;
                          ((r =
                            (e[n++] << 24) |
                            (e[n++] << 16) |
                            (e[n++] << 8) |
                            e[n++]),
                            (o =
                              (e[n++] << 24) |
                              (e[n++] << 16) |
                              (e[n++] << 8) |
                              e[n++]),
                            (a = ((r >>> 4) ^ o) & 252645135),
                            (o ^= a),
                            (r ^= a << 4),
                            (a = ((r >>> 16) ^ o) & 65535),
                            (o ^= a),
                            (r ^= a << 16),
                            (a = ((o >>> 2) ^ r) & 858993459),
                            (r ^= a),
                            (o ^= a << 2),
                            (a = ((o >>> 8) ^ r) & 16711935),
                            (r ^= a),
                            (o ^= a << 8),
                            (o = (o << 1) | ((o >>> 31) & 1)),
                            (a = (r ^ o) & 2863311530),
                            (r ^= a),
                            (o ^= a),
                            (r = (r << 1) | ((r >>> 31) & 1)));
                          for (var i = 0, l = 0; i < 8; ++i) {
                            ((a = (o << 28) | (o >>> 4)),
                              (a ^= this.keys[l++]));
                            var s = S[a & 63];
                            ((s |= b[(a >>> 8) & 63]),
                              (s |= y[(a >>> 16) & 63]),
                              (s |= g[(a >>> 24) & 63]),
                              (a = o ^ this.keys[l++]),
                              (s |= R[a & 63]),
                              (s |= v[(a >>> 8) & 63]),
                              (s |= C[(a >>> 16) & 63]),
                              (s |= h[(a >>> 24) & 63]),
                              (r ^= s),
                              (a = (r << 28) | (r >>> 4)),
                              (a ^= this.keys[l++]),
                              (s = S[a & 63]),
                              (s |= b[(a >>> 8) & 63]),
                              (s |= y[(a >>> 16) & 63]),
                              (s |= g[(a >>> 24) & 63]),
                              (a = r ^ this.keys[l++]),
                              (s |= R[a & 63]),
                              (s |= v[(a >>> 8) & 63]),
                              (s |= C[(a >>> 16) & 63]),
                              (s |= h[(a >>> 24) & 63]),
                              (o ^= s));
                          }
                          for (
                            o = (o << 31) | (o >>> 1),
                              a = (r ^ o) & 2863311530,
                              r ^= a,
                              o ^= a,
                              r = (r << 31) | (r >>> 1),
                              a = ((r >>> 8) ^ o) & 16711935,
                              o ^= a,
                              r ^= a << 8,
                              a = ((r >>> 2) ^ o) & 858993459,
                              o ^= a,
                              r ^= a << 2,
                              a = ((o >>> 16) ^ r) & 65535,
                              r ^= a,
                              o ^= a << 16,
                              a = ((o >>> 4) ^ r) & 252645135,
                              r ^= a,
                              o ^= a << 4,
                              a = [o, r],
                              n = 0;
                            n < 8;
                            n++
                          )
                            ((e[n] =
                              (a[n >>> 2] >>> (8 * (3 - (n % 4)))) % 256),
                              e[n] < 0 && (e[n] += 256));
                          return e;
                        },
                      },
                    ]);
                  })(),
                  E = (t.DESECBCipher = (function () {
                    function e() {
                      (n(this, e), (this._cipher = null));
                    }
                    return o(
                      e,
                      [
                        {
                          key: "algorithm",
                          get: function () {
                            return { name: "DES-ECB" };
                          },
                        },
                        {
                          key: "_importKey",
                          value: function (t, n, r) {
                            this._cipher = new L(t);
                          },
                        },
                        {
                          key: "encrypt",
                          value: function (t, n) {
                            var e = new Uint8Array(n);
                            if (e.length % 8 !== 0 || this._cipher === null)
                              return null;
                            for (var r = e.length / 8, o = 0; o < r; o++)
                              e.set(
                                this._cipher.enc8(e.slice(o * 8, o * 8 + 8)),
                                o * 8,
                              );
                            return e;
                          },
                        },
                      ],
                      [
                        {
                          key: "importKey",
                          value: function (n, r, o, a) {
                            var t = new e();
                            return (t._importKey(n), t);
                          },
                        },
                      ],
                    );
                  })()),
                  k = (t.DESCBCCipher = (function () {
                    function e() {
                      (n(this, e), (this._cipher = null));
                    }
                    return o(
                      e,
                      [
                        {
                          key: "algorithm",
                          get: function () {
                            return { name: "DES-CBC" };
                          },
                        },
                        {
                          key: "_importKey",
                          value: function (t) {
                            this._cipher = new L(t);
                          },
                        },
                        {
                          key: "encrypt",
                          value: function (t, n) {
                            var e = new Uint8Array(n),
                              r = new Uint8Array(t.iv);
                            if (e.length % 8 !== 0 || this._cipher === null)
                              return null;
                            for (var o = e.length / 8, a = 0; a < o; a++) {
                              for (var i = 0; i < 8; i++) r[i] ^= n[a * 8 + i];
                              ((r = this._cipher.enc8(r)), e.set(r, a * 8));
                            }
                            return e;
                          },
                        },
                      ],
                      [
                        {
                          key: "importKey",
                          value: function (n, r, o, a) {
                            var t = new e();
                            return (t._importKey(n), t);
                          },
                        },
                      ],
                    );
                  })());
              },
          }),
          B = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/bigint.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.bigIntToU8Array = n),
                  (t.modPow = e),
                  (t.u8ArrayToBigInt = r));
                function e(e, t, n) {
                  var r = BigInt(1);
                  for (e = e % n; t > BigInt(0); )
                    ((t & BigInt(1)) === BigInt(1) && (r = (r * e) % n),
                      (t = t >> BigInt(1)),
                      (e = (e * e) % n));
                  return r;
                }
                function n(e) {
                  var t =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                    n = e.toString(16);
                  (t === 0 && (t = Math.ceil(n.length / 2)),
                    (n = n.padStart(t * 2, "0")));
                  for (
                    var r = n.length / 2, o = new Uint8Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = parseInt(n.slice(a * 2, a * 2 + 2), 16);
                  return o;
                }
                function r(e) {
                  for (var t = "0x", n = 0; n < e.length; n++)
                    t += e[n].toString(16).padStart(2, "0");
                  return BigInt(t);
                }
              },
          }),
          W = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/rsa.js":
              function (r) {
                "use strict";
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.RSACipher = void 0));
                var t = a(d()),
                  o = B();
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  "@babel/helpers - typeof";
                  return (
                    (i =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    i(e)
                  );
                }
                function l() {
                  "use strict";
                  l = function () {
                    return r;
                  };
                  var t,
                    r = {},
                    o = Object.prototype,
                    a = o.hasOwnProperty,
                    s =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    u = typeof Symbol == "function" ? Symbol : {},
                    c = u.iterator || "@@iterator",
                    d = u.asyncIterator || "@@asyncIterator",
                    m = u.toStringTag || "@@toStringTag";
                  function p(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    p({}, "");
                  } catch (e) {
                    p = function (t, n, r) {
                      return (t[n] = r);
                    };
                  }
                  function _(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v,
                      a = Object.create(o.prototype),
                      i = new M(r || []);
                    return (s(a, "_invoke", { value: x(e, n, i) }), a);
                  }
                  function f(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  r.wrap = _;
                  var g = "suspendedStart",
                    h = "suspendedYield",
                    y = "executing",
                    C = "completed",
                    b = {};
                  function v() {}
                  function S() {}
                  function R() {}
                  var L = {};
                  p(L, c, function () {
                    return this;
                  });
                  var E = Object.getPrototypeOf,
                    k = E && E(E(w([])));
                  k && k !== o && a.call(k, c) && (L = k);
                  var I = (R.prototype = v.prototype = Object.create(L));
                  function T(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      p(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function D(e, t) {
                    function n(r, o, l, s) {
                      var u = f(e[r], e, o);
                      if (u.type !== "throw") {
                        var c = u.arg,
                          d = c.value;
                        return d && i(d) == "object" && a.call(d, "__await")
                          ? t.resolve(d.__await).then(
                              function (e) {
                                n("next", e, l, s);
                              },
                              function (e) {
                                n("throw", e, l, s);
                              },
                            )
                          : t.resolve(d).then(
                              function (e) {
                                ((c.value = e), l(c));
                              },
                              function (e) {
                                return n("throw", e, l, s);
                              },
                            );
                      }
                      s(u.arg);
                    }
                    var r;
                    s(this, "_invoke", {
                      value: function (o, a) {
                        function e() {
                          return new t(function (e, t) {
                            n(o, a, e, t);
                          });
                        }
                        return (r = r ? r.then(e, e) : e());
                      },
                    });
                  }
                  function x(e, n, r) {
                    var o = g;
                    return function (a, i) {
                      if (o === y) throw Error("Generator is already running");
                      if (o === C) {
                        if (a === "throw") throw i;
                        return { value: t, done: !0 };
                      }
                      for (r.method = a, r.arg = i; ; ) {
                        var l = r.delegate;
                        if (l) {
                          var s = $(l, r);
                          if (s) {
                            if (s === b) continue;
                            return s;
                          }
                        }
                        if (r.method === "next") r.sent = r._sent = r.arg;
                        else if (r.method === "throw") {
                          if (o === g) throw ((o = C), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          r.method === "return" && r.abrupt("return", r.arg);
                        o = y;
                        var u = f(e, n, r);
                        if (u.type === "normal") {
                          if (((o = r.done ? C : h), u.arg === b)) continue;
                          return { value: u.arg, done: r.done };
                        }
                        u.type === "throw" &&
                          ((o = C), (r.method = "throw"), (r.arg = u.arg));
                      }
                    };
                  }
                  function $(e, n) {
                    var r = n.method,
                      o = e.iterator[r];
                    if (o === t)
                      return (
                        (n.delegate = null),
                        (r === "throw" &&
                          e.iterator.return &&
                          ((n.method = "return"),
                          (n.arg = t),
                          $(e, n),
                          n.method === "throw")) ||
                          (r !== "return" &&
                            ((n.method = "throw"),
                            (n.arg = new TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method",
                            )))),
                        b
                      );
                    var a = f(o, e.iterator, n.arg);
                    if (a.type === "throw")
                      return (
                        (n.method = "throw"),
                        (n.arg = a.arg),
                        (n.delegate = null),
                        b
                      );
                    var i = a.arg;
                    return i
                      ? i.done
                        ? ((n[e.resultName] = i.value),
                          (n.next = e.nextLoc),
                          n.method !== "return" &&
                            ((n.method = "next"), (n.arg = t)),
                          (n.delegate = null),
                          b)
                        : i
                      : ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (n.delegate = null),
                        b);
                  }
                  function P(e) {
                    var t = { tryLoc: e[0] };
                    (1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t));
                  }
                  function N(e) {
                    var t = e.completion || {};
                    ((t.type = "normal"), delete t.arg, (e.completion = t));
                  }
                  function M(e) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach(P, this),
                      this.reset(!0));
                  }
                  function w(e) {
                    if (e || e === "") {
                      var n = e[c];
                      if (n) return n.call(e);
                      if (typeof e.next == "function") return e;
                      if (!isNaN(e.length)) {
                        var r = -1,
                          o = function n() {
                            for (; ++r < e.length; )
                              if (a.call(e, r))
                                return ((n.value = e[r]), (n.done = !1), n);
                            return ((n.value = t), (n.done = !0), n);
                          };
                        return (o.next = o);
                      }
                    }
                    throw new TypeError(i(e) + " is not iterable");
                  }
                  return (
                    (S.prototype = R),
                    s(I, "constructor", { value: R, configurable: !0 }),
                    s(R, "constructor", { value: S, configurable: !0 }),
                    (S.displayName = p(R, m, "GeneratorFunction")),
                    (r.isGeneratorFunction = function (e) {
                      var t = typeof e == "function" && e.constructor;
                      return (
                        !!t &&
                        (t === S ||
                          (t.displayName || t.name) === "GeneratorFunction")
                      );
                    }),
                    (r.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, R)
                          : ((e.__proto__ = R), p(e, m, "GeneratorFunction")),
                        (e.prototype = Object.create(I)),
                        e
                      );
                    }),
                    (r.awrap = function (e) {
                      return { __await: e };
                    }),
                    T(D.prototype),
                    p(D.prototype, d, function () {
                      return this;
                    }),
                    (r.AsyncIterator = D),
                    (r.async = function (t, o, a, i, l) {
                      l === void 0 && (l = e || (e = n("Promise")));
                      var s = new D(_(t, o, a, i), l);
                      return r.isGeneratorFunction(o)
                        ? s
                        : s.next().then(function (e) {
                            return e.done ? e.value : s.next();
                          });
                    }),
                    T(I),
                    p(I, m, "Generator"),
                    p(I, c, function () {
                      return this;
                    }),
                    p(I, "toString", function () {
                      return "[object Generator]";
                    }),
                    (r.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                              return ((e.value = r), (e.done = !1), e);
                          }
                          return ((e.done = !0), e);
                        }
                      );
                    }),
                    (r.values = w),
                    (M.prototype = {
                      constructor: M,
                      reset: function (n) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = t),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = t),
                          this.tryEntries.forEach(N),
                          !n)
                        )
                          for (var e in this)
                            e.charAt(0) === "t" &&
                              a.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = t);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if (e.type === "throw") throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (n) {
                        if (this.done) throw n;
                        var e = this;
                        function r(r, o) {
                          return (
                            (l.type = "throw"),
                            (l.arg = n),
                            (e.next = r),
                            o && ((e.method = "next"), (e.arg = t)),
                            !!o
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var i = this.tryEntries[o],
                            l = i.completion;
                          if (i.tryLoc === "root") return r("end");
                          if (i.tryLoc <= this.prev) {
                            var s = a.call(i, "catchLoc"),
                              u = a.call(i, "finallyLoc");
                            if (s && u) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            } else if (s) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                            } else {
                              if (!u)
                                throw Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (
                            r.tryLoc <= this.prev &&
                            a.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                          ) {
                            var o = r;
                            break;
                          }
                        }
                        o &&
                          (t === "break" || t === "continue") &&
                          o.tryLoc <= n &&
                          n <= o.finallyLoc &&
                          (o = null);
                        var i = o ? o.completion : {};
                        return (
                          (i.type = t),
                          (i.arg = n),
                          o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              b)
                            : this.complete(i)
                        );
                      },
                      complete: function (t, n) {
                        if (t.type === "throw") throw t.arg;
                        return (
                          t.type === "break" || t.type === "continue"
                            ? (this.next = t.arg)
                            : t.type === "return"
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : t.type === "normal" && n && (this.next = n),
                          b
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              N(n),
                              b
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if (r.type === "throw") {
                              var o = r.arg;
                              N(n);
                            }
                            return o;
                          }
                        }
                        throw Error("illegal catch attempt");
                      },
                      delegateYield: function (n, r, o) {
                        return (
                          (this.delegate = {
                            iterator: w(n),
                            resultName: r,
                            nextLoc: o,
                          }),
                          this.method === "next" && (this.arg = t),
                          b
                        );
                      },
                    }),
                    r
                  );
                }
                function s(t, r, o, a, i, l, s) {
                  try {
                    var u = t[l](s),
                      c = u.value;
                  } catch (e) {
                    return void o(e);
                  }
                  u.done
                    ? r(c)
                    : (e || (e = n("Promise"))).resolve(c).then(a, i);
                }
                function u(t) {
                  return function () {
                    var r = this,
                      o = arguments;
                    return new (e || (e = n("Promise")))(function (e, n) {
                      var a = t.apply(r, o);
                      function i(t) {
                        s(a, e, n, i, l, "next", t);
                      }
                      function l(t) {
                        s(a, e, n, i, l, "throw", t);
                      }
                      i(void 0);
                    });
                  };
                }
                function c(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function m(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, _(r.key), r));
                  }
                }
                function p(e, t, n) {
                  return (
                    t && m(e.prototype, t),
                    n && m(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function _(e) {
                  var t = f(e, "string");
                  return i(t) == "symbol" ? t : t + "";
                }
                function f(e, t) {
                  if (i(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (i(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var g = (r.RSACipher = (function () {
                  function e() {
                    (c(this, e),
                      (this._keyLength = 0),
                      (this._keyBytes = 0),
                      (this._n = null),
                      (this._e = null),
                      (this._d = null),
                      (this._nBigInt = null),
                      (this._eBigInt = null),
                      (this._dBigInt = null),
                      (this._extractable = !1));
                  }
                  return p(
                    e,
                    [
                      {
                        key: "algorithm",
                        get: function () {
                          return { name: "RSA-PKCS1-v1_5" };
                        },
                      },
                      {
                        key: "_base64urlDecode",
                        value: function (n) {
                          return (
                            (n = n.replace(/-/g, "+").replace(/_/g, "/")),
                            (n = n.padEnd(Math.ceil(n.length / 4) * 4, "=")),
                            t.default.decode(n)
                          );
                        },
                      },
                      {
                        key: "_padArray",
                        value: function (t, n) {
                          var e = new Uint8Array(n);
                          return (e.set(t, n - t.length), e);
                        },
                      },
                      {
                        key: "_generateKey",
                        value: (function () {
                          var e = u(
                            l().mark(function e(t, n) {
                              var r, a;
                              return l().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (this._keyLength = t.modulusLength),
                                          (this._keyBytes = Math.ceil(
                                            this._keyLength / 8,
                                          )),
                                          (e.next = 4),
                                          window.crypto.subtle.generateKey(
                                            {
                                              name: "RSA-OAEP",
                                              modulusLength: t.modulusLength,
                                              publicExponent: t.publicExponent,
                                              hash: { name: "SHA-256" },
                                            },
                                            !0,
                                            ["encrypt", "decrypt"],
                                          )
                                        );
                                      case 4:
                                        return (
                                          (r = e.sent),
                                          (e.next = 7),
                                          window.crypto.subtle.exportKey(
                                            "jwk",
                                            r.privateKey,
                                          )
                                        );
                                      case 7:
                                        ((a = e.sent),
                                          (this._n = this._padArray(
                                            this._base64urlDecode(a.n),
                                            this._keyBytes,
                                          )),
                                          (this._nBigInt = (0,
                                          o.u8ArrayToBigInt)(this._n)),
                                          (this._e = this._padArray(
                                            this._base64urlDecode(a.e),
                                            this._keyBytes,
                                          )),
                                          (this._eBigInt = (0,
                                          o.u8ArrayToBigInt)(this._e)),
                                          (this._d = this._padArray(
                                            this._base64urlDecode(a.d),
                                            this._keyBytes,
                                          )),
                                          (this._dBigInt = (0,
                                          o.u8ArrayToBigInt)(this._d)),
                                          (this._extractable = n));
                                      case 15:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "_importKey",
                        value: (function () {
                          var e = u(
                            l().mark(function e(t, n) {
                              var r, a;
                              return l().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((r = t.n),
                                          (a = t.e),
                                          r.length === a.length)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        throw new Error(
                                          "the sizes of modulus and public exponent do not match",
                                        );
                                      case 4:
                                        ((this._keyBytes = r.length),
                                          (this._keyLength =
                                            this._keyBytes * 8),
                                          (this._n = new Uint8Array(
                                            this._keyBytes,
                                          )),
                                          (this._e = new Uint8Array(
                                            this._keyBytes,
                                          )),
                                          this._n.set(r),
                                          this._e.set(a),
                                          (this._nBigInt = (0,
                                          o.u8ArrayToBigInt)(this._n)),
                                          (this._eBigInt = (0,
                                          o.u8ArrayToBigInt)(this._e)),
                                          (this._extractable = n));
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "encrypt",
                        value: (function () {
                          var e = u(
                            l().mark(function e(t, n) {
                              var r, a, i, s, u;
                              return l().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!(n.length > this._keyBytes - 11)) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return", null);
                                      case 2:
                                        for (
                                          r = new Uint8Array(
                                            this._keyBytes - n.length - 3,
                                          ),
                                            window.crypto.getRandomValues(r),
                                            a = 0;
                                          a < r.length;
                                          a++
                                        )
                                          r[a] = Math.floor(
                                            (r[a] * 254) / 255 + 1,
                                          );
                                        return (
                                          (i = new Uint8Array(this._keyBytes)),
                                          (i[1] = 2),
                                          i.set(r, 2),
                                          i.set(n, r.length + 3),
                                          (s = (0, o.u8ArrayToBigInt)(i)),
                                          (u = (0, o.modPow)(
                                            s,
                                            this._eBigInt,
                                            this._nBigInt,
                                          )),
                                          e.abrupt(
                                            "return",
                                            (0, o.bigIntToU8Array)(
                                              u,
                                              this._keyBytes,
                                            ),
                                          )
                                        );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "decrypt",
                        value: (function () {
                          var e = u(
                            l().mark(function e(t, n) {
                              var r, a, i, s;
                              return l().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (n.length === this._keyBytes) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return", null);
                                      case 2:
                                        if (
                                          ((r = (0, o.u8ArrayToBigInt)(n)),
                                          (a = (0, o.modPow)(
                                            r,
                                            this._dBigInt,
                                            this._nBigInt,
                                          )),
                                          (i = (0, o.bigIntToU8Array)(
                                            a,
                                            this._keyBytes,
                                          )),
                                          !(i[0] !== 0 || i[1] !== 2))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return e.abrupt("return", null);
                                      case 7:
                                        s = 2;
                                      case 8:
                                        if (!(s < i.length)) {
                                          e.next = 14;
                                          break;
                                        }
                                        if (i[s] !== 0) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("break", 14);
                                      case 11:
                                        (s++, (e.next = 8));
                                        break;
                                      case 14:
                                        if (s !== i.length) {
                                          e.next = 16;
                                          break;
                                        }
                                        return e.abrupt("return", null);
                                      case 16:
                                        return e.abrupt(
                                          "return",
                                          i.slice(s + 1, i.length),
                                        );
                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "exportKey",
                        value: (function () {
                          var e = u(
                            l().mark(function e() {
                              return l().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (this._extractable) {
                                          e.next = 2;
                                          break;
                                        }
                                        throw new Error(
                                          "key is not extractable",
                                        );
                                      case 2:
                                        return e.abrupt("return", {
                                          n: this._n,
                                          e: this._e,
                                          d: this._d,
                                        });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t() {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                    ],
                    [
                      {
                        key: "generateKey",
                        value: (function () {
                          var t = u(
                            l().mark(function t(n, r, o) {
                              var a;
                              return l().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (a = new e()),
                                        (t.next = 3),
                                        a._generateKey(n, r)
                                      );
                                    case 3:
                                      return t.abrupt("return", {
                                        privateKey: a,
                                      });
                                    case 4:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          );
                          function n(e, n, r) {
                            return t.apply(this, arguments);
                          }
                          return n;
                        })(),
                      },
                      {
                        key: "importKey",
                        value: (function () {
                          var t = u(
                            l().mark(function t(n, r, o, a) {
                              var i;
                              return l().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        !(a.length !== 1 || a[0] !== "encrypt")
                                      ) {
                                        t.next = 2;
                                        break;
                                      }
                                      throw new Error(
                                        "only support importing RSA public key",
                                      );
                                    case 2:
                                      return (
                                        (i = new e()),
                                        (t.next = 5),
                                        i._importKey(n, o)
                                      );
                                    case 5:
                                      return t.abrupt("return", i);
                                    case 6:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          );
                          function n(e, n, r, o) {
                            return t.apply(this, arguments);
                          }
                          return n;
                        })(),
                      },
                    ],
                  );
                })());
              },
          }),
          q = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/dh.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.DHCipher = void 0));
                var e = B();
                function n(e) {
                  "@babel/helpers - typeof";
                  return (
                    (n =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    n(e)
                  );
                }
                function r(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function o(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, i(r.key), r));
                  }
                }
                function a(e, t, n) {
                  return (
                    t && o(e.prototype, t),
                    n && o(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function i(e) {
                  var t = l(e, "string");
                  return n(t) == "symbol" ? t : t + "";
                }
                function l(e, t) {
                  if (n(e) != "object" || !e) return e;
                  var r =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(e, t || "default");
                    if (n(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var s = (function () {
                    function e(t) {
                      (r(this, e), (this._key = t));
                    }
                    return a(e, [
                      {
                        key: "algorithm",
                        get: function () {
                          return { name: "DH" };
                        },
                      },
                      {
                        key: "exportKey",
                        value: function () {
                          return this._key;
                        },
                      },
                    ]);
                  })(),
                  u = (t.DHCipher = (function () {
                    function t() {
                      (r(this, t),
                        (this._g = null),
                        (this._p = null),
                        (this._gBigInt = null),
                        (this._pBigInt = null),
                        (this._privateKey = null));
                    }
                    return a(
                      t,
                      [
                        {
                          key: "algorithm",
                          get: function () {
                            return { name: "DH" };
                          },
                        },
                        {
                          key: "_generateKey",
                          value: function (n) {
                            var t = n.g,
                              r = n.p;
                            ((this._keyBytes = r.length),
                              (this._gBigInt = (0, e.u8ArrayToBigInt)(t)),
                              (this._pBigInt = (0, e.u8ArrayToBigInt)(r)),
                              (this._privateKey = window.crypto.getRandomValues(
                                new Uint8Array(this._keyBytes),
                              )),
                              (this._privateKeyBigInt = (0, e.u8ArrayToBigInt)(
                                this._privateKey,
                              )),
                              (this._publicKey = (0, e.bigIntToU8Array)(
                                (0, e.modPow)(
                                  this._gBigInt,
                                  this._privateKeyBigInt,
                                  this._pBigInt,
                                ),
                                this._keyBytes,
                              )));
                          },
                        },
                        {
                          key: "deriveBits",
                          value: function (n, r) {
                            var t = Math.ceil(r / 8),
                              o = new Uint8Array(n.public),
                              a = t > this._keyBytes ? t : this._keyBytes,
                              i = (0, e.modPow)(
                                (0, e.u8ArrayToBigInt)(o),
                                this._privateKeyBigInt,
                                this._pBigInt,
                              );
                            return (0, e.bigIntToU8Array)(i, a).slice(0, a);
                          },
                        },
                      ],
                      [
                        {
                          key: "generateKey",
                          value: function (n, r) {
                            var e = new t();
                            return (
                              e._generateKey(n),
                              { privateKey: e, publicKey: new s(e._publicKey) }
                            );
                          },
                        },
                      ],
                    );
                  })());
              },
          }),
          U = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/md5.js":
              function (r) {
                "use strict";
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.MD5 = l));
                function t(e) {
                  "@babel/helpers - typeof";
                  return (
                    (t =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    t(e)
                  );
                }
                function o() {
                  "use strict";
                  o = function () {
                    return a;
                  };
                  var r,
                    a = {},
                    i = Object.prototype,
                    l = i.hasOwnProperty,
                    s =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    u = typeof Symbol == "function" ? Symbol : {},
                    c = u.iterator || "@@iterator",
                    d = u.asyncIterator || "@@asyncIterator",
                    m = u.toStringTag || "@@toStringTag";
                  function p(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    p({}, "");
                  } catch (e) {
                    p = function (t, n, r) {
                      return (t[n] = r);
                    };
                  }
                  function _(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v,
                      a = Object.create(o.prototype),
                      i = new M(r || []);
                    return (s(a, "_invoke", { value: x(e, n, i) }), a);
                  }
                  function f(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  a.wrap = _;
                  var g = "suspendedStart",
                    h = "suspendedYield",
                    y = "executing",
                    C = "completed",
                    b = {};
                  function v() {}
                  function S() {}
                  function R() {}
                  var L = {};
                  p(L, c, function () {
                    return this;
                  });
                  var E = Object.getPrototypeOf,
                    k = E && E(E(w([])));
                  k && k !== i && l.call(k, c) && (L = k);
                  var I = (R.prototype = v.prototype = Object.create(L));
                  function T(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      p(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function D(e, n) {
                    function r(o, a, i, s) {
                      var u = f(e[o], e, a);
                      if (u.type !== "throw") {
                        var c = u.arg,
                          d = c.value;
                        return d && t(d) == "object" && l.call(d, "__await")
                          ? n.resolve(d.__await).then(
                              function (e) {
                                r("next", e, i, s);
                              },
                              function (e) {
                                r("throw", e, i, s);
                              },
                            )
                          : n.resolve(d).then(
                              function (e) {
                                ((c.value = e), i(c));
                              },
                              function (e) {
                                return r("throw", e, i, s);
                              },
                            );
                      }
                      s(u.arg);
                    }
                    var o;
                    s(this, "_invoke", {
                      value: function (t, a) {
                        function e() {
                          return new n(function (e, n) {
                            r(t, a, e, n);
                          });
                        }
                        return (o = o ? o.then(e, e) : e());
                      },
                    });
                  }
                  function x(e, t, n) {
                    var o = g;
                    return function (a, i) {
                      if (o === y) throw Error("Generator is already running");
                      if (o === C) {
                        if (a === "throw") throw i;
                        return { value: r, done: !0 };
                      }
                      for (n.method = a, n.arg = i; ; ) {
                        var l = n.delegate;
                        if (l) {
                          var s = $(l, n);
                          if (s) {
                            if (s === b) continue;
                            return s;
                          }
                        }
                        if (n.method === "next") n.sent = n._sent = n.arg;
                        else if (n.method === "throw") {
                          if (o === g) throw ((o = C), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          n.method === "return" && n.abrupt("return", n.arg);
                        o = y;
                        var u = f(e, t, n);
                        if (u.type === "normal") {
                          if (((o = n.done ? C : h), u.arg === b)) continue;
                          return { value: u.arg, done: n.done };
                        }
                        u.type === "throw" &&
                          ((o = C), (n.method = "throw"), (n.arg = u.arg));
                      }
                    };
                  }
                  function $(e, t) {
                    var n = t.method,
                      o = e.iterator[n];
                    if (o === r)
                      return (
                        (t.delegate = null),
                        (n === "throw" &&
                          e.iterator.return &&
                          ((t.method = "return"),
                          (t.arg = r),
                          $(e, t),
                          t.method === "throw")) ||
                          (n !== "return" &&
                            ((t.method = "throw"),
                            (t.arg = new TypeError(
                              "The iterator does not provide a '" +
                                n +
                                "' method",
                            )))),
                        b
                      );
                    var a = f(o, e.iterator, t.arg);
                    if (a.type === "throw")
                      return (
                        (t.method = "throw"),
                        (t.arg = a.arg),
                        (t.delegate = null),
                        b
                      );
                    var i = a.arg;
                    return i
                      ? i.done
                        ? ((t[e.resultName] = i.value),
                          (t.next = e.nextLoc),
                          t.method !== "return" &&
                            ((t.method = "next"), (t.arg = r)),
                          (t.delegate = null),
                          b)
                        : i
                      : ((t.method = "throw"),
                        (t.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (t.delegate = null),
                        b);
                  }
                  function P(e) {
                    var t = { tryLoc: e[0] };
                    (1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t));
                  }
                  function N(e) {
                    var t = e.completion || {};
                    ((t.type = "normal"), delete t.arg, (e.completion = t));
                  }
                  function M(e) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach(P, this),
                      this.reset(!0));
                  }
                  function w(e) {
                    if (e || e === "") {
                      var n = e[c];
                      if (n) return n.call(e);
                      if (typeof e.next == "function") return e;
                      if (!isNaN(e.length)) {
                        var o = -1,
                          a = function t() {
                            for (; ++o < e.length; )
                              if (l.call(e, o))
                                return ((t.value = e[o]), (t.done = !1), t);
                            return ((t.value = r), (t.done = !0), t);
                          };
                        return (a.next = a);
                      }
                    }
                    throw new TypeError(t(e) + " is not iterable");
                  }
                  return (
                    (S.prototype = R),
                    s(I, "constructor", { value: R, configurable: !0 }),
                    s(R, "constructor", { value: S, configurable: !0 }),
                    (S.displayName = p(R, m, "GeneratorFunction")),
                    (a.isGeneratorFunction = function (e) {
                      var t = typeof e == "function" && e.constructor;
                      return (
                        !!t &&
                        (t === S ||
                          (t.displayName || t.name) === "GeneratorFunction")
                      );
                    }),
                    (a.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, R)
                          : ((e.__proto__ = R), p(e, m, "GeneratorFunction")),
                        (e.prototype = Object.create(I)),
                        e
                      );
                    }),
                    (a.awrap = function (e) {
                      return { __await: e };
                    }),
                    T(D.prototype),
                    p(D.prototype, d, function () {
                      return this;
                    }),
                    (a.AsyncIterator = D),
                    (a.async = function (t, r, o, i, l) {
                      l === void 0 && (l = e || (e = n("Promise")));
                      var s = new D(_(t, r, o, i), l);
                      return a.isGeneratorFunction(r)
                        ? s
                        : s.next().then(function (e) {
                            return e.done ? e.value : s.next();
                          });
                    }),
                    T(I),
                    p(I, m, "Generator"),
                    p(I, c, function () {
                      return this;
                    }),
                    p(I, "toString", function () {
                      return "[object Generator]";
                    }),
                    (a.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                              return ((e.value = r), (e.done = !1), e);
                          }
                          return ((e.done = !0), e);
                        }
                      );
                    }),
                    (a.values = w),
                    (M.prototype = {
                      constructor: M,
                      reset: function (t) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = r),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = r),
                          this.tryEntries.forEach(N),
                          !t)
                        )
                          for (var e in this)
                            e.charAt(0) === "t" &&
                              l.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = r);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if (e.type === "throw") throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(n, o) {
                          return (
                            (i.type = "throw"),
                            (i.arg = t),
                            (e.next = n),
                            o && ((e.method = "next"), (e.arg = r)),
                            !!o
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var a = this.tryEntries[o],
                            i = a.completion;
                          if (a.tryLoc === "root") return n("end");
                          if (a.tryLoc <= this.prev) {
                            var s = l.call(a, "catchLoc"),
                              u = l.call(a, "finallyLoc");
                            if (s && u) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            } else if (s) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                            } else {
                              if (!u)
                                throw Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (
                            r.tryLoc <= this.prev &&
                            l.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                          ) {
                            var o = r;
                            break;
                          }
                        }
                        o &&
                          (t === "break" || t === "continue") &&
                          o.tryLoc <= n &&
                          n <= o.finallyLoc &&
                          (o = null);
                        var a = o ? o.completion : {};
                        return (
                          (a.type = t),
                          (a.arg = n),
                          o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              b)
                            : this.complete(a)
                        );
                      },
                      complete: function (t, n) {
                        if (t.type === "throw") throw t.arg;
                        return (
                          t.type === "break" || t.type === "continue"
                            ? (this.next = t.arg)
                            : t.type === "return"
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : t.type === "normal" && n && (this.next = n),
                          b
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              N(n),
                              b
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if (r.type === "throw") {
                              var o = r.arg;
                              N(n);
                            }
                            return o;
                          }
                        }
                        throw Error("illegal catch attempt");
                      },
                      delegateYield: function (t, n, o) {
                        return (
                          (this.delegate = {
                            iterator: w(t),
                            resultName: n,
                            nextLoc: o,
                          }),
                          this.method === "next" && (this.arg = r),
                          b
                        );
                      },
                    }),
                    a
                  );
                }
                function a(t, r, o, a, i, l, s) {
                  try {
                    var u = t[l](s),
                      c = u.value;
                  } catch (e) {
                    return void o(e);
                  }
                  u.done
                    ? r(c)
                    : (e || (e = n("Promise"))).resolve(c).then(a, i);
                }
                function i(t) {
                  return function () {
                    var r = this,
                      o = arguments;
                    return new (e || (e = n("Promise")))(function (e, n) {
                      var i = t.apply(r, o);
                      function l(t) {
                        a(i, e, n, l, s, "next", t);
                      }
                      function s(t) {
                        a(i, e, n, l, s, "throw", t);
                      }
                      l(void 0);
                    });
                  };
                }
                function l(e) {
                  return s.apply(this, arguments);
                }
                function s() {
                  return (
                    (s = i(
                      o().mark(function e(t) {
                        var n, r;
                        return o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (n = "", r = 0; r < t.length; r++)
                                  n += String.fromCharCode(t[r]);
                                return e.abrupt(
                                  "return",
                                  u(d(m(c(n), 8 * n.length))),
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    )),
                    s.apply(this, arguments)
                  );
                }
                function u(e) {
                  for (
                    var t = new Uint8Array(e.length), n = 0;
                    n < e.length;
                    n++
                  )
                    t[n] = e.charCodeAt(n);
                  return t;
                }
                function c(e) {
                  for (var t = Array(e.length >> 2), n = 0; n < t.length; n++)
                    t[n] = 0;
                  for (var r = 0; r < 8 * e.length; r += 8)
                    t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << (r % 32);
                  return t;
                }
                function d(e) {
                  for (var t = "", n = 0; n < 32 * e.length; n += 8)
                    t += String.fromCharCode((e[n >> 5] >>> (n % 32)) & 255);
                  return t;
                }
                function m(e, t) {
                  ((e[t >> 5] |= 128 << (t % 32)),
                    (e[14 + (((t + 64) >>> 9) << 4)] = t));
                  for (
                    var n = 1732584193,
                      r = -271733879,
                      o = -1732584194,
                      a = 271733878,
                      i = 0;
                    i < e.length;
                    i += 16
                  ) {
                    var l = n,
                      s = r,
                      u = o,
                      c = a;
                    ((r = h(
                      (r = h(
                        (r = h(
                          (r = h(
                            (r = g(
                              (r = g(
                                (r = g(
                                  (r = g(
                                    (r = f(
                                      (r = f(
                                        (r = f(
                                          (r = f(
                                            (r = _(
                                              (r = _(
                                                (r = _(
                                                  (r = _(
                                                    r,
                                                    (o = _(
                                                      o,
                                                      (a = _(
                                                        a,
                                                        (n = _(
                                                          n,
                                                          r,
                                                          o,
                                                          a,
                                                          e[i + 0],
                                                          7,
                                                          -680876936,
                                                        )),
                                                        r,
                                                        o,
                                                        e[i + 1],
                                                        12,
                                                        -389564586,
                                                      )),
                                                      n,
                                                      r,
                                                      e[i + 2],
                                                      17,
                                                      606105819,
                                                    )),
                                                    a,
                                                    n,
                                                    e[i + 3],
                                                    22,
                                                    -1044525330,
                                                  )),
                                                  (o = _(
                                                    o,
                                                    (a = _(
                                                      a,
                                                      (n = _(
                                                        n,
                                                        r,
                                                        o,
                                                        a,
                                                        e[i + 4],
                                                        7,
                                                        -176418897,
                                                      )),
                                                      r,
                                                      o,
                                                      e[i + 5],
                                                      12,
                                                      1200080426,
                                                    )),
                                                    n,
                                                    r,
                                                    e[i + 6],
                                                    17,
                                                    -1473231341,
                                                  )),
                                                  a,
                                                  n,
                                                  e[i + 7],
                                                  22,
                                                  -45705983,
                                                )),
                                                (o = _(
                                                  o,
                                                  (a = _(
                                                    a,
                                                    (n = _(
                                                      n,
                                                      r,
                                                      o,
                                                      a,
                                                      e[i + 8],
                                                      7,
                                                      1770035416,
                                                    )),
                                                    r,
                                                    o,
                                                    e[i + 9],
                                                    12,
                                                    -1958414417,
                                                  )),
                                                  n,
                                                  r,
                                                  e[i + 10],
                                                  17,
                                                  -42063,
                                                )),
                                                a,
                                                n,
                                                e[i + 11],
                                                22,
                                                -1990404162,
                                              )),
                                              (o = _(
                                                o,
                                                (a = _(
                                                  a,
                                                  (n = _(
                                                    n,
                                                    r,
                                                    o,
                                                    a,
                                                    e[i + 12],
                                                    7,
                                                    1804603682,
                                                  )),
                                                  r,
                                                  o,
                                                  e[i + 13],
                                                  12,
                                                  -40341101,
                                                )),
                                                n,
                                                r,
                                                e[i + 14],
                                                17,
                                                -1502002290,
                                              )),
                                              a,
                                              n,
                                              e[i + 15],
                                              22,
                                              1236535329,
                                            )),
                                            (o = f(
                                              o,
                                              (a = f(
                                                a,
                                                (n = f(
                                                  n,
                                                  r,
                                                  o,
                                                  a,
                                                  e[i + 1],
                                                  5,
                                                  -165796510,
                                                )),
                                                r,
                                                o,
                                                e[i + 6],
                                                9,
                                                -1069501632,
                                              )),
                                              n,
                                              r,
                                              e[i + 11],
                                              14,
                                              643717713,
                                            )),
                                            a,
                                            n,
                                            e[i + 0],
                                            20,
                                            -373897302,
                                          )),
                                          (o = f(
                                            o,
                                            (a = f(
                                              a,
                                              (n = f(
                                                n,
                                                r,
                                                o,
                                                a,
                                                e[i + 5],
                                                5,
                                                -701558691,
                                              )),
                                              r,
                                              o,
                                              e[i + 10],
                                              9,
                                              38016083,
                                            )),
                                            n,
                                            r,
                                            e[i + 15],
                                            14,
                                            -660478335,
                                          )),
                                          a,
                                          n,
                                          e[i + 4],
                                          20,
                                          -405537848,
                                        )),
                                        (o = f(
                                          o,
                                          (a = f(
                                            a,
                                            (n = f(
                                              n,
                                              r,
                                              o,
                                              a,
                                              e[i + 9],
                                              5,
                                              568446438,
                                            )),
                                            r,
                                            o,
                                            e[i + 14],
                                            9,
                                            -1019803690,
                                          )),
                                          n,
                                          r,
                                          e[i + 3],
                                          14,
                                          -187363961,
                                        )),
                                        a,
                                        n,
                                        e[i + 8],
                                        20,
                                        1163531501,
                                      )),
                                      (o = f(
                                        o,
                                        (a = f(
                                          a,
                                          (n = f(
                                            n,
                                            r,
                                            o,
                                            a,
                                            e[i + 13],
                                            5,
                                            -1444681467,
                                          )),
                                          r,
                                          o,
                                          e[i + 2],
                                          9,
                                          -51403784,
                                        )),
                                        n,
                                        r,
                                        e[i + 7],
                                        14,
                                        1735328473,
                                      )),
                                      a,
                                      n,
                                      e[i + 12],
                                      20,
                                      -1926607734,
                                    )),
                                    (o = g(
                                      o,
                                      (a = g(
                                        a,
                                        (n = g(
                                          n,
                                          r,
                                          o,
                                          a,
                                          e[i + 5],
                                          4,
                                          -378558,
                                        )),
                                        r,
                                        o,
                                        e[i + 8],
                                        11,
                                        -2022574463,
                                      )),
                                      n,
                                      r,
                                      e[i + 11],
                                      16,
                                      1839030562,
                                    )),
                                    a,
                                    n,
                                    e[i + 14],
                                    23,
                                    -35309556,
                                  )),
                                  (o = g(
                                    o,
                                    (a = g(
                                      a,
                                      (n = g(
                                        n,
                                        r,
                                        o,
                                        a,
                                        e[i + 1],
                                        4,
                                        -1530992060,
                                      )),
                                      r,
                                      o,
                                      e[i + 4],
                                      11,
                                      1272893353,
                                    )),
                                    n,
                                    r,
                                    e[i + 7],
                                    16,
                                    -155497632,
                                  )),
                                  a,
                                  n,
                                  e[i + 10],
                                  23,
                                  -1094730640,
                                )),
                                (o = g(
                                  o,
                                  (a = g(
                                    a,
                                    (n = g(
                                      n,
                                      r,
                                      o,
                                      a,
                                      e[i + 13],
                                      4,
                                      681279174,
                                    )),
                                    r,
                                    o,
                                    e[i + 0],
                                    11,
                                    -358537222,
                                  )),
                                  n,
                                  r,
                                  e[i + 3],
                                  16,
                                  -722521979,
                                )),
                                a,
                                n,
                                e[i + 6],
                                23,
                                76029189,
                              )),
                              (o = g(
                                o,
                                (a = g(
                                  a,
                                  (n = g(n, r, o, a, e[i + 9], 4, -640364487)),
                                  r,
                                  o,
                                  e[i + 12],
                                  11,
                                  -421815835,
                                )),
                                n,
                                r,
                                e[i + 15],
                                16,
                                530742520,
                              )),
                              a,
                              n,
                              e[i + 2],
                              23,
                              -995338651,
                            )),
                            (o = h(
                              o,
                              (a = h(
                                a,
                                (n = h(n, r, o, a, e[i + 0], 6, -198630844)),
                                r,
                                o,
                                e[i + 7],
                                10,
                                1126891415,
                              )),
                              n,
                              r,
                              e[i + 14],
                              15,
                              -1416354905,
                            )),
                            a,
                            n,
                            e[i + 5],
                            21,
                            -57434055,
                          )),
                          (o = h(
                            o,
                            (a = h(
                              a,
                              (n = h(n, r, o, a, e[i + 12], 6, 1700485571)),
                              r,
                              o,
                              e[i + 3],
                              10,
                              -1894986606,
                            )),
                            n,
                            r,
                            e[i + 10],
                            15,
                            -1051523,
                          )),
                          a,
                          n,
                          e[i + 1],
                          21,
                          -2054922799,
                        )),
                        (o = h(
                          o,
                          (a = h(
                            a,
                            (n = h(n, r, o, a, e[i + 8], 6, 1873313359)),
                            r,
                            o,
                            e[i + 15],
                            10,
                            -30611744,
                          )),
                          n,
                          r,
                          e[i + 6],
                          15,
                          -1560198380,
                        )),
                        a,
                        n,
                        e[i + 13],
                        21,
                        1309151649,
                      )),
                      (o = h(
                        o,
                        (a = h(
                          a,
                          (n = h(n, r, o, a, e[i + 4], 6, -145523070)),
                          r,
                          o,
                          e[i + 11],
                          10,
                          -1120210379,
                        )),
                        n,
                        r,
                        e[i + 2],
                        15,
                        718787259,
                      )),
                      a,
                      n,
                      e[i + 9],
                      21,
                      -343485551,
                    )),
                      (n = y(n, l)),
                      (r = y(r, s)),
                      (o = y(o, u)),
                      (a = y(a, c)));
                  }
                  return Array(n, r, o, a);
                }
                function p(e, t, n, r, o, a) {
                  return y(C(y(y(t, e), y(r, a)), o), n);
                }
                function _(e, t, n, r, o, a, i) {
                  return p((t & n) | (~t & r), e, t, o, a, i);
                }
                function f(e, t, n, r, o, a, i) {
                  return p((t & r) | (n & ~r), e, t, o, a, i);
                }
                function g(e, t, n, r, o, a, i) {
                  return p(t ^ n ^ r, e, t, o, a, i);
                }
                function h(e, t, n, r, o, a, i) {
                  return p(n ^ (t | ~r), e, t, o, a, i);
                }
                function y(e, t) {
                  var n = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                  );
                }
                function C(e, t) {
                  return (e << t) | (e >>> (32 - t));
                }
              },
          }),
          V = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/crypto/crypto.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = F(),
                  n = O(),
                  r = W(),
                  o = q(),
                  a = U();
                function i(e) {
                  "@babel/helpers - typeof";
                  return (
                    (i =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    i(e)
                  );
                }
                function l(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function s(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, c(r.key), r));
                  }
                }
                function u(e, t, n) {
                  return (
                    t && s(e.prototype, t),
                    n && s(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function c(e) {
                  var t = d(e, "string");
                  return i(t) == "symbol" ? t : t + "";
                }
                function d(e, t) {
                  if (i(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (i(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var m = (function () {
                    function t() {
                      (l(this, t),
                        (this._algorithms = {
                          "AES-ECB": e.AESECBCipher,
                          "AES-EAX": e.AESEAXCipher,
                          "DES-ECB": n.DESECBCipher,
                          "DES-CBC": n.DESCBCCipher,
                          "RSA-PKCS1-v1_5": r.RSACipher,
                          DH: o.DHCipher,
                          MD5: a.MD5,
                        }));
                    }
                    return u(t, [
                      {
                        key: "encrypt",
                        value: function (t, n, r) {
                          if (n.algorithm.name !== t.name)
                            throw new Error("algorithm does not match");
                          if (typeof n.encrypt != "function")
                            throw new Error("key does not support encryption");
                          return n.encrypt(t, r);
                        },
                      },
                      {
                        key: "decrypt",
                        value: function (t, n, r) {
                          if (n.algorithm.name !== t.name)
                            throw new Error("algorithm does not match");
                          if (typeof n.decrypt != "function")
                            throw new Error("key does not support encryption");
                          return n.decrypt(t, r);
                        },
                      },
                      {
                        key: "importKey",
                        value: function (t, n, r, o, a) {
                          if (t !== "raw")
                            throw new Error("key format is not supported");
                          var e = this._algorithms[r.name];
                          if (
                            typeof e > "u" ||
                            typeof e.importKey != "function"
                          )
                            throw new Error("algorithm is not supported");
                          return e.importKey(n, r, o, a);
                        },
                      },
                      {
                        key: "generateKey",
                        value: function (t, n, r) {
                          var e = this._algorithms[t.name];
                          if (
                            typeof e > "u" ||
                            typeof e.generateKey != "function"
                          )
                            throw new Error("algorithm is not supported");
                          return e.generateKey(t, n, r);
                        },
                      },
                      {
                        key: "exportKey",
                        value: function (t, n) {
                          if (t !== "raw")
                            throw new Error("key format is not supported");
                          if (typeof n.exportKey != "function")
                            throw new Error("key does not support exportKey");
                          return n.exportKey();
                        },
                      },
                      {
                        key: "digest",
                        value: function (t, n) {
                          var e = this._algorithms[t];
                          if (typeof e != "function")
                            throw new Error("algorithm is not supported");
                          return e(n);
                        },
                      },
                      {
                        key: "deriveBits",
                        value: function (t, n, r) {
                          if (n.algorithm.name !== t.name)
                            throw new Error("algorithm does not match");
                          if (typeof n.deriveBits != "function")
                            throw new Error("key does not support deriveBits");
                          return n.deriveBits(t, r);
                        },
                      },
                    ]);
                  })(),
                  p = (t.default = new m());
              },
          }),
          H = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/ra2.js":
              function (r) {
                "use strict";
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0));
                var t = i(),
                  o = l(c()),
                  a = l(V());
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e, t, n) {
                  return (
                    (t = p(t)),
                    u(
                      e,
                      m()
                        ? Reflect.construct(t, n || [], p(e).constructor)
                        : t.apply(e, n),
                    )
                  );
                }
                function u(e, t) {
                  if (t && (g(t) == "object" || typeof t == "function"))
                    return t;
                  if (t !== void 0)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return d(e);
                }
                function d(e) {
                  if (e === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                }
                function m() {
                  try {
                    var e = !Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    );
                  } catch (e) {}
                  return (m = function () {
                    return !!e;
                  })();
                }
                function p(e) {
                  return (
                    (p = Object.setPrototypeOf
                      ? Object.getPrototypeOf.bind()
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                    p(e)
                  );
                }
                function _(e, t) {
                  if (typeof t != "function" && t !== null)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t));
                }
                function f(e, t) {
                  return (
                    (f = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (e, t) {
                          return ((e.__proto__ = t), e);
                        }),
                    f(e, t)
                  );
                }
                function g(e) {
                  "@babel/helpers - typeof";
                  return (
                    (g =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    g(e)
                  );
                }
                function h() {
                  "use strict";
                  h = function () {
                    return r;
                  };
                  var t,
                    r = {},
                    o = Object.prototype,
                    a = o.hasOwnProperty,
                    i =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    l = typeof Symbol == "function" ? Symbol : {},
                    s = l.iterator || "@@iterator",
                    u = l.asyncIterator || "@@asyncIterator",
                    c = l.toStringTag || "@@toStringTag";
                  function d(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    d({}, "");
                  } catch (e) {
                    d = function (t, n, r) {
                      return (t[n] = r);
                    };
                  }
                  function m(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v,
                      a = Object.create(o.prototype),
                      l = new M(r || []);
                    return (i(a, "_invoke", { value: x(e, n, l) }), a);
                  }
                  function p(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  r.wrap = m;
                  var _ = "suspendedStart",
                    f = "suspendedYield",
                    y = "executing",
                    C = "completed",
                    b = {};
                  function v() {}
                  function S() {}
                  function R() {}
                  var L = {};
                  d(L, s, function () {
                    return this;
                  });
                  var E = Object.getPrototypeOf,
                    k = E && E(E(w([])));
                  k && k !== o && a.call(k, s) && (L = k);
                  var I = (R.prototype = v.prototype = Object.create(L));
                  function T(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      d(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function D(e, t) {
                    function n(r, o, i, l) {
                      var s = p(e[r], e, o);
                      if (s.type !== "throw") {
                        var u = s.arg,
                          c = u.value;
                        return c && g(c) == "object" && a.call(c, "__await")
                          ? t.resolve(c.__await).then(
                              function (e) {
                                n("next", e, i, l);
                              },
                              function (e) {
                                n("throw", e, i, l);
                              },
                            )
                          : t.resolve(c).then(
                              function (e) {
                                ((u.value = e), i(u));
                              },
                              function (e) {
                                return n("throw", e, i, l);
                              },
                            );
                      }
                      l(s.arg);
                    }
                    var r;
                    i(this, "_invoke", {
                      value: function (o, a) {
                        function e() {
                          return new t(function (e, t) {
                            n(o, a, e, t);
                          });
                        }
                        return (r = r ? r.then(e, e) : e());
                      },
                    });
                  }
                  function x(e, n, r) {
                    var o = _;
                    return function (a, i) {
                      if (o === y) throw Error("Generator is already running");
                      if (o === C) {
                        if (a === "throw") throw i;
                        return { value: t, done: !0 };
                      }
                      for (r.method = a, r.arg = i; ; ) {
                        var l = r.delegate;
                        if (l) {
                          var s = $(l, r);
                          if (s) {
                            if (s === b) continue;
                            return s;
                          }
                        }
                        if (r.method === "next") r.sent = r._sent = r.arg;
                        else if (r.method === "throw") {
                          if (o === _) throw ((o = C), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          r.method === "return" && r.abrupt("return", r.arg);
                        o = y;
                        var u = p(e, n, r);
                        if (u.type === "normal") {
                          if (((o = r.done ? C : f), u.arg === b)) continue;
                          return { value: u.arg, done: r.done };
                        }
                        u.type === "throw" &&
                          ((o = C), (r.method = "throw"), (r.arg = u.arg));
                      }
                    };
                  }
                  function $(e, n) {
                    var r = n.method,
                      o = e.iterator[r];
                    if (o === t)
                      return (
                        (n.delegate = null),
                        (r === "throw" &&
                          e.iterator.return &&
                          ((n.method = "return"),
                          (n.arg = t),
                          $(e, n),
                          n.method === "throw")) ||
                          (r !== "return" &&
                            ((n.method = "throw"),
                            (n.arg = new TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method",
                            )))),
                        b
                      );
                    var a = p(o, e.iterator, n.arg);
                    if (a.type === "throw")
                      return (
                        (n.method = "throw"),
                        (n.arg = a.arg),
                        (n.delegate = null),
                        b
                      );
                    var i = a.arg;
                    return i
                      ? i.done
                        ? ((n[e.resultName] = i.value),
                          (n.next = e.nextLoc),
                          n.method !== "return" &&
                            ((n.method = "next"), (n.arg = t)),
                          (n.delegate = null),
                          b)
                        : i
                      : ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (n.delegate = null),
                        b);
                  }
                  function P(e) {
                    var t = { tryLoc: e[0] };
                    (1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t));
                  }
                  function N(e) {
                    var t = e.completion || {};
                    ((t.type = "normal"), delete t.arg, (e.completion = t));
                  }
                  function M(e) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach(P, this),
                      this.reset(!0));
                  }
                  function w(e) {
                    if (e || e === "") {
                      var n = e[s];
                      if (n) return n.call(e);
                      if (typeof e.next == "function") return e;
                      if (!isNaN(e.length)) {
                        var r = -1,
                          o = function n() {
                            for (; ++r < e.length; )
                              if (a.call(e, r))
                                return ((n.value = e[r]), (n.done = !1), n);
                            return ((n.value = t), (n.done = !0), n);
                          };
                        return (o.next = o);
                      }
                    }
                    throw new TypeError(g(e) + " is not iterable");
                  }
                  return (
                    (S.prototype = R),
                    i(I, "constructor", { value: R, configurable: !0 }),
                    i(R, "constructor", { value: S, configurable: !0 }),
                    (S.displayName = d(R, c, "GeneratorFunction")),
                    (r.isGeneratorFunction = function (e) {
                      var t = typeof e == "function" && e.constructor;
                      return (
                        !!t &&
                        (t === S ||
                          (t.displayName || t.name) === "GeneratorFunction")
                      );
                    }),
                    (r.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, R)
                          : ((e.__proto__ = R), d(e, c, "GeneratorFunction")),
                        (e.prototype = Object.create(I)),
                        e
                      );
                    }),
                    (r.awrap = function (e) {
                      return { __await: e };
                    }),
                    T(D.prototype),
                    d(D.prototype, u, function () {
                      return this;
                    }),
                    (r.AsyncIterator = D),
                    (r.async = function (t, o, a, i, l) {
                      l === void 0 && (l = e || (e = n("Promise")));
                      var s = new D(m(t, o, a, i), l);
                      return r.isGeneratorFunction(o)
                        ? s
                        : s.next().then(function (e) {
                            return e.done ? e.value : s.next();
                          });
                    }),
                    T(I),
                    d(I, c, "Generator"),
                    d(I, s, function () {
                      return this;
                    }),
                    d(I, "toString", function () {
                      return "[object Generator]";
                    }),
                    (r.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                              return ((e.value = r), (e.done = !1), e);
                          }
                          return ((e.done = !0), e);
                        }
                      );
                    }),
                    (r.values = w),
                    (M.prototype = {
                      constructor: M,
                      reset: function (n) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = t),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = t),
                          this.tryEntries.forEach(N),
                          !n)
                        )
                          for (var e in this)
                            e.charAt(0) === "t" &&
                              a.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = t);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if (e.type === "throw") throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (n) {
                        if (this.done) throw n;
                        var e = this;
                        function r(r, o) {
                          return (
                            (l.type = "throw"),
                            (l.arg = n),
                            (e.next = r),
                            o && ((e.method = "next"), (e.arg = t)),
                            !!o
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var i = this.tryEntries[o],
                            l = i.completion;
                          if (i.tryLoc === "root") return r("end");
                          if (i.tryLoc <= this.prev) {
                            var s = a.call(i, "catchLoc"),
                              u = a.call(i, "finallyLoc");
                            if (s && u) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            } else if (s) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                            } else {
                              if (!u)
                                throw Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (
                            r.tryLoc <= this.prev &&
                            a.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                          ) {
                            var o = r;
                            break;
                          }
                        }
                        o &&
                          (t === "break" || t === "continue") &&
                          o.tryLoc <= n &&
                          n <= o.finallyLoc &&
                          (o = null);
                        var i = o ? o.completion : {};
                        return (
                          (i.type = t),
                          (i.arg = n),
                          o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              b)
                            : this.complete(i)
                        );
                      },
                      complete: function (t, n) {
                        if (t.type === "throw") throw t.arg;
                        return (
                          t.type === "break" || t.type === "continue"
                            ? (this.next = t.arg)
                            : t.type === "return"
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : t.type === "normal" && n && (this.next = n),
                          b
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              N(n),
                              b
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if (r.type === "throw") {
                              var o = r.arg;
                              N(n);
                            }
                            return o;
                          }
                        }
                        throw Error("illegal catch attempt");
                      },
                      delegateYield: function (n, r, o) {
                        return (
                          (this.delegate = {
                            iterator: w(n),
                            resultName: r,
                            nextLoc: o,
                          }),
                          this.method === "next" && (this.arg = t),
                          b
                        );
                      },
                    }),
                    r
                  );
                }
                function y(t, r, o, a, i, l, s) {
                  try {
                    var u = t[l](s),
                      c = u.value;
                  } catch (e) {
                    return void o(e);
                  }
                  u.done
                    ? r(c)
                    : (e || (e = n("Promise"))).resolve(c).then(a, i);
                }
                function C(t) {
                  return function () {
                    var r = this,
                      o = arguments;
                    return new (e || (e = n("Promise")))(function (e, n) {
                      var a = t.apply(r, o);
                      function i(t) {
                        y(a, e, n, i, l, "next", t);
                      }
                      function l(t) {
                        y(a, e, n, i, l, "throw", t);
                      }
                      i(void 0);
                    });
                  };
                }
                function b(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function v(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, R(r.key), r));
                  }
                }
                function S(e, t, n) {
                  return (
                    t && v(e.prototype, t),
                    n && v(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function R(e) {
                  var t = L(e, "string");
                  return g(t) == "symbol" ? t : t + "";
                }
                function L(e, t) {
                  if (g(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (g(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var E = (function () {
                    function e() {
                      (b(this, e),
                        (this._cipher = null),
                        (this._counter = new Uint8Array(16)));
                    }
                    return S(e, [
                      {
                        key: "setKey",
                        value: (function () {
                          var e = C(
                            h().mark(function e(t) {
                              return h().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          a.default.importKey(
                                            "raw",
                                            t,
                                            { name: "AES-EAX" },
                                            !1,
                                            ["encrypt, decrypt"],
                                          )
                                        );
                                      case 2:
                                        this._cipher = e.sent;
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "makeMessage",
                        value: (function () {
                          var e = C(
                            h().mark(function e(t) {
                              var n, r, o, i;
                              return h().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = new Uint8Array([
                                            (t.length & 65280) >>> 8,
                                            t.length & 255,
                                          ])),
                                          (e.next = 3),
                                          a.default.encrypt(
                                            {
                                              name: "AES-EAX",
                                              iv: this._counter,
                                              additionalData: n,
                                            },
                                            this._cipher,
                                            t,
                                          )
                                        );
                                      case 3:
                                        for (
                                          r = e.sent, o = 0;
                                          o < 16 && this._counter[o]++ === 255;
                                          o++
                                        );
                                        return (
                                          (i = new Uint8Array(
                                            t.length + 2 + 16,
                                          )),
                                          i.set(n),
                                          i.set(r, 2),
                                          e.abrupt("return", i)
                                        );
                                      case 9:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                      {
                        key: "receiveMessage",
                        value: (function () {
                          var e = C(
                            h().mark(function e(t, n) {
                              var r, o, i;
                              return h().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (r = new Uint8Array([
                                            (t & 65280) >>> 8,
                                            t & 255,
                                          ])),
                                          (e.next = 3),
                                          a.default.decrypt(
                                            {
                                              name: "AES-EAX",
                                              iv: this._counter,
                                              additionalData: r,
                                            },
                                            this._cipher,
                                            n,
                                          )
                                        );
                                      case 3:
                                        for (
                                          o = e.sent, i = 0;
                                          i < 16 && this._counter[i]++ === 255;
                                          i++
                                        );
                                        return e.abrupt("return", o);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                    ]);
                  })(),
                  k = (r.default = (function (r) {
                    function o(e, t) {
                      var n;
                      return (
                        b(this, o),
                        (n = s(this, o)),
                        (n._hasStarted = !1),
                        (n._checkSock = null),
                        (n._checkCredentials = null),
                        (n._approveServerResolve = null),
                        (n._sockReject = null),
                        (n._credentialsReject = null),
                        (n._approveServerReject = null),
                        (n._sock = e),
                        (n._getCredentials = t),
                        n
                      );
                    }
                    return (
                      _(o, r),
                      S(o, [
                        {
                          key: "_waitSockAsync",
                          value: function (r) {
                            var t = this;
                            return new (e || (e = n("Promise")))(function (
                              e,
                              n,
                            ) {
                              var o = function () {
                                return !t._sock.rQwait("RA2", r);
                              };
                              o()
                                ? e()
                                : ((t._checkSock = function () {
                                    o() &&
                                      (e(),
                                      (t._checkSock = null),
                                      (t._sockReject = null));
                                  }),
                                  (t._sockReject = n));
                            });
                          },
                        },
                        {
                          key: "_waitApproveKeyAsync",
                          value: function () {
                            var t = this;
                            return new (e || (e = n("Promise")))(function (
                              e,
                              n,
                            ) {
                              ((t._approveServerResolve = e),
                                (t._approveServerReject = n));
                            });
                          },
                        },
                        {
                          key: "_waitCredentialsAsync",
                          value: function (r) {
                            var t = this,
                              o = function () {
                                return r === 1 &&
                                  t._getCredentials().username !== void 0 &&
                                  t._getCredentials().password !== void 0
                                  ? !0
                                  : r === 2 &&
                                      t._getCredentials().password !== void 0;
                              };
                            return new (e || (e = n("Promise")))(function (
                              e,
                              n,
                            ) {
                              o()
                                ? e()
                                : ((t._checkCredentials = function () {
                                    o() &&
                                      (e(),
                                      (t._checkCredentials = null),
                                      (t._credentialsReject = null));
                                  }),
                                  (t._credentialsReject = n));
                            });
                          },
                        },
                        {
                          key: "checkInternalEvents",
                          value: function () {
                            (this._checkSock !== null && this._checkSock(),
                              this._checkCredentials !== null &&
                                this._checkCredentials());
                          },
                        },
                        {
                          key: "approveServer",
                          value: function () {
                            this._approveServerResolve !== null &&
                              (this._approveServerResolve(),
                              (this._approveServerResolve = null));
                          },
                        },
                        {
                          key: "disconnect",
                          value: function () {
                            (this._sockReject !== null &&
                              (this._sockReject(
                                new Error("disconnect normally"),
                              ),
                              (this._sockReject = null)),
                              this._credentialsReject !== null &&
                                (this._credentialsReject(
                                  new Error("disconnect normally"),
                                ),
                                (this._credentialsReject = null)),
                              this._approveServerReject !== null &&
                                (this._approveServerReject(
                                  new Error("disconnect normally"),
                                ),
                                (this._approveServerReject = null)));
                          },
                        },
                        {
                          key: "negotiateRA2neAuthAsync",
                          value: (function () {
                            var e = C(
                              h().mark(function e() {
                                var n,
                                  r,
                                  o,
                                  i,
                                  l,
                                  s,
                                  u,
                                  c,
                                  d,
                                  m,
                                  p,
                                  _,
                                  f,
                                  g,
                                  y,
                                  C,
                                  b,
                                  v,
                                  S,
                                  R,
                                  L,
                                  k,
                                  I,
                                  T,
                                  D,
                                  x,
                                  $,
                                  P,
                                  N,
                                  M,
                                  w,
                                  A,
                                  F,
                                  O,
                                  B;
                                return h().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (this._hasStarted = !0),
                                            (e.next = 3),
                                            this._waitSockAsync(4)
                                          );
                                        case 3:
                                          if (
                                            ((n = this._sock.rQpeekBytes(4)),
                                            (r = this._sock.rQshift32()),
                                            !(r < 1024))
                                          ) {
                                            e.next = 9;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: server public key is too short: " +
                                              r,
                                          );
                                        case 9:
                                          if (!(r > 8192)) {
                                            e.next = 11;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: server public key is too long: " +
                                              r,
                                          );
                                        case 11:
                                          return (
                                            (o = Math.ceil(r / 8)),
                                            (e.next = 14),
                                            this._waitSockAsync(o * 2)
                                          );
                                        case 14:
                                          return (
                                            (i = this._sock.rQshiftBytes(o)),
                                            (l = this._sock.rQshiftBytes(o)),
                                            (e.next = 18),
                                            a.default.importKey(
                                              "raw",
                                              { n: i, e: l },
                                              { name: "RSA-PKCS1-v1_5" },
                                              !1,
                                              ["encrypt"],
                                            )
                                          );
                                        case 18:
                                          return (
                                            (s = e.sent),
                                            (u = new Uint8Array(4 + o * 2)),
                                            u.set(n),
                                            u.set(i, 4),
                                            u.set(l, 4 + o),
                                            (c = this._waitApproveKeyAsync()),
                                            this.dispatchEvent(
                                              new CustomEvent(
                                                "serververification",
                                                {
                                                  detail: {
                                                    type: "RSA",
                                                    publickey: u,
                                                  },
                                                },
                                              ),
                                            ),
                                            (e.next = 27),
                                            c
                                          );
                                        case 27:
                                          return (
                                            (d = 2048),
                                            (m = Math.ceil(d / 8)),
                                            (e.next = 31),
                                            a.default.generateKey(
                                              {
                                                name: "RSA-PKCS1-v1_5",
                                                modulusLength: d,
                                                publicExponent: new Uint8Array([
                                                  1, 0, 1,
                                                ]),
                                              },
                                              !0,
                                              ["encrypt"],
                                            )
                                          );
                                        case 31:
                                          return (
                                            (p = e.sent.privateKey),
                                            (e.next = 34),
                                            a.default.exportKey("raw", p)
                                          );
                                        case 34:
                                          return (
                                            (_ = e.sent),
                                            (f = _.n),
                                            (g = _.e),
                                            (y = new Uint8Array(4 + m * 2)),
                                            (y[0] = (d & 4278190080) >>> 24),
                                            (y[1] = (d & 16711680) >>> 16),
                                            (y[2] = (d & 65280) >>> 8),
                                            (y[3] = d & 255),
                                            y.set(f, 4),
                                            y.set(g, 4 + m),
                                            this._sock.sQpushBytes(y),
                                            this._sock.flush(),
                                            (C = new Uint8Array(16)),
                                            window.crypto.getRandomValues(C),
                                            (e.next = 50),
                                            a.default.encrypt(
                                              { name: "RSA-PKCS1-v1_5" },
                                              s,
                                              C,
                                            )
                                          );
                                        case 50:
                                          return (
                                            (b = e.sent),
                                            (v = new Uint8Array(2 + o)),
                                            (v[0] = (o & 65280) >>> 8),
                                            (v[1] = o & 255),
                                            v.set(b, 2),
                                            this._sock.sQpushBytes(v),
                                            this._sock.flush(),
                                            (e.next = 59),
                                            this._waitSockAsync(2)
                                          );
                                        case 59:
                                          if (this._sock.rQshift16() === m) {
                                            e.next = 61;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: wrong encrypted message length",
                                          );
                                        case 61:
                                          return (
                                            (S = this._sock.rQshiftBytes(m)),
                                            (e.next = 64),
                                            a.default.decrypt(
                                              { name: "RSA-PKCS1-v1_5" },
                                              p,
                                              S,
                                            )
                                          );
                                        case 64:
                                          if (
                                            ((R = e.sent),
                                            !(R === null || R.length !== 16))
                                          ) {
                                            e.next = 67;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: corrupted server encrypted random",
                                          );
                                        case 67:
                                          return (
                                            (L = new Uint8Array(32)),
                                            (k = new Uint8Array(32)),
                                            L.set(R),
                                            L.set(C, 16),
                                            k.set(C),
                                            k.set(R, 16),
                                            (e.next = 75),
                                            window.crypto.subtle.digest(
                                              "SHA-1",
                                              L,
                                            )
                                          );
                                        case 75:
                                          return (
                                            (L = e.sent),
                                            (L = new Uint8Array(L).slice(
                                              0,
                                              16,
                                            )),
                                            (e.next = 79),
                                            window.crypto.subtle.digest(
                                              "SHA-1",
                                              k,
                                            )
                                          );
                                        case 79:
                                          return (
                                            (k = e.sent),
                                            (k = new Uint8Array(k).slice(
                                              0,
                                              16,
                                            )),
                                            (I = new E()),
                                            (e.next = 84),
                                            I.setKey(L)
                                          );
                                        case 84:
                                          return (
                                            (T = new E()),
                                            (e.next = 87),
                                            T.setKey(k)
                                          );
                                        case 87:
                                          return (
                                            (D = new Uint8Array(
                                              8 + o * 2 + m * 2,
                                            )),
                                            (x = new Uint8Array(
                                              8 + o * 2 + m * 2,
                                            )),
                                            D.set(u),
                                            D.set(y, 4 + o * 2),
                                            x.set(y),
                                            x.set(u, 4 + m * 2),
                                            (e.next = 95),
                                            window.crypto.subtle.digest(
                                              "SHA-1",
                                              D,
                                            )
                                          );
                                        case 95:
                                          return (
                                            (D = e.sent),
                                            (e.next = 98),
                                            window.crypto.subtle.digest(
                                              "SHA-1",
                                              x,
                                            )
                                          );
                                        case 98:
                                          return (
                                            (x = e.sent),
                                            (D = new Uint8Array(D)),
                                            (x = new Uint8Array(x)),
                                            (e.t0 = this._sock),
                                            (e.next = 104),
                                            I.makeMessage(x)
                                          );
                                        case 104:
                                          return (
                                            (e.t1 = e.sent),
                                            e.t0.sQpushBytes.call(e.t0, e.t1),
                                            this._sock.flush(),
                                            (e.next = 109),
                                            this._waitSockAsync(38)
                                          );
                                        case 109:
                                          if (this._sock.rQshift16() === 20) {
                                            e.next = 111;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: wrong server hash",
                                          );
                                        case 111:
                                          return (
                                            (e.next = 113),
                                            T.receiveMessage(
                                              20,
                                              this._sock.rQshiftBytes(36),
                                            )
                                          );
                                        case 113:
                                          if ((($ = e.sent), $ !== null)) {
                                            e.next = 116;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: failed to authenticate the message",
                                          );
                                        case 116:
                                          P = 0;
                                        case 117:
                                          if (!(P < 20)) {
                                            e.next = 123;
                                            break;
                                          }
                                          if ($[P] === D[P]) {
                                            e.next = 120;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: wrong server hash",
                                          );
                                        case 120:
                                          (P++, (e.next = 117));
                                          break;
                                        case 123:
                                          return (
                                            (e.next = 125),
                                            this._waitSockAsync(19)
                                          );
                                        case 125:
                                          if (this._sock.rQshift16() === 1) {
                                            e.next = 127;
                                            break;
                                          }
                                          throw new Error("RA2: wrong subtype");
                                        case 127:
                                          return (
                                            (e.next = 129),
                                            T.receiveMessage(
                                              1,
                                              this._sock.rQshiftBytes(17),
                                            )
                                          );
                                        case 129:
                                          if (((N = e.sent), N !== null)) {
                                            e.next = 132;
                                            break;
                                          }
                                          throw new Error(
                                            "RA2: failed to authenticate the message",
                                          );
                                        case 132:
                                          if (
                                            ((N = N[0]),
                                            (M = this._waitCredentialsAsync(N)),
                                            N !== 1)
                                          ) {
                                            e.next = 138;
                                            break;
                                          }
                                          ((this._getCredentials().username ===
                                            void 0 ||
                                            this._getCredentials().password ===
                                              void 0) &&
                                            this.dispatchEvent(
                                              new CustomEvent(
                                                "credentialsrequired",
                                                {
                                                  detail: {
                                                    types: [
                                                      "username",
                                                      "password",
                                                    ],
                                                  },
                                                },
                                              ),
                                            ),
                                            (e.next = 143));
                                          break;
                                        case 138:
                                          if (N !== 2) {
                                            e.next = 142;
                                            break;
                                          }
                                          (this._getCredentials().password ===
                                            void 0 &&
                                            this.dispatchEvent(
                                              new CustomEvent(
                                                "credentialsrequired",
                                                {
                                                  detail: {
                                                    types: ["password"],
                                                  },
                                                },
                                              ),
                                            ),
                                            (e.next = 143));
                                          break;
                                        case 142:
                                          throw new Error("RA2: wrong subtype");
                                        case 143:
                                          return ((e.next = 145), M);
                                        case 145:
                                          for (
                                            N === 1
                                              ? (w = (0, t.encodeUTF8)(
                                                  this._getCredentials()
                                                    .username,
                                                ).slice(0, 255))
                                              : (w = ""),
                                              A = (0, t.encodeUTF8)(
                                                this._getCredentials().password,
                                              ).slice(0, 255),
                                              F = new Uint8Array(
                                                w.length + A.length + 2,
                                              ),
                                              F[0] = w.length,
                                              F[w.length + 1] = A.length,
                                              O = 0;
                                            O < w.length;
                                            O++
                                          )
                                            F[O + 1] = w.charCodeAt(O);
                                          for (B = 0; B < A.length; B++)
                                            F[w.length + 2 + B] =
                                              A.charCodeAt(B);
                                          return (
                                            (e.t2 = this._sock),
                                            (e.next = 155),
                                            I.makeMessage(F)
                                          );
                                        case 155:
                                          ((e.t3 = e.sent),
                                            e.t2.sQpushBytes.call(e.t2, e.t3),
                                            this._sock.flush());
                                        case 158:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                );
                              }),
                            );
                            function n() {
                              return e.apply(this, arguments);
                            }
                            return n;
                          })(),
                        },
                        {
                          key: "hasStarted",
                          get: function () {
                            return this._hasStarted;
                          },
                          set: function (t) {
                            this._hasStarted = t;
                          },
                        },
                      ])
                    );
                  })(o.default));
              },
          }),
          G = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/raw.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = (t.default = (function () {
                  function e() {
                    (n(this, e), (this._lines = 0));
                  }
                  return o(e, [
                    {
                      key: "decodeRect",
                      value: function (t, n, r, o, a, i, l) {
                        if (r === 0 || o === 0) return !0;
                        this._lines === 0 && (this._lines = o);
                        for (
                          var e = l == 8 ? 1 : 4, s = r * e;
                          this._lines > 0;
                        ) {
                          if (a.rQwait("RAW", s)) return !1;
                          var u = n + (o - this._lines),
                            c = a.rQshiftBytes(s, !1);
                          if (l == 8) {
                            for (
                              var d = new Uint8Array(r * 4), m = 0;
                              m < r;
                              m++
                            )
                              ((d[m * 4 + 0] = (((c[m] >> 0) & 3) * 255) / 3),
                                (d[m * 4 + 1] = (((c[m] >> 2) & 3) * 255) / 3),
                                (d[m * 4 + 2] = (((c[m] >> 4) & 3) * 255) / 3),
                                (d[m * 4 + 3] = 255));
                            c = d;
                          }
                          for (var p = 0; p < r; p++) c[p * 4 + 3] = 255;
                          (i.blitImage(t, u, r, 1, c, 0), this._lines--);
                        }
                        return !0;
                      },
                    },
                  ]);
                })());
              },
          }),
          z = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/copyrect.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = (t.default = (function () {
                  function e() {
                    n(this, e);
                  }
                  return o(e, [
                    {
                      key: "decodeRect",
                      value: function (t, n, r, o, a, i, l) {
                        if (a.rQwait("COPYRECT", 4)) return !1;
                        var e = a.rQshift16(),
                          s = a.rQshift16();
                        return (
                          r === 0 || o === 0 || i.copyImage(e, s, t, n, r, o),
                          !0
                        );
                      },
                    },
                  ]);
                })());
              },
          }),
          j = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/rre.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r));
                  }
                }
                function o(e, t, n) {
                  return (
                    t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function a(t) {
                  var n = i(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function i(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var l = (t.default = (function () {
                  function e() {
                    (n(this, e), (this._subrects = 0));
                  }
                  return o(e, [
                    {
                      key: "decodeRect",
                      value: function (t, n, r, o, a, i, l) {
                        if (this._subrects === 0) {
                          if (a.rQwait("RRE", 8)) return !1;
                          this._subrects = a.rQshift32();
                          var e = a.rQshiftBytes(4);
                          i.fillRect(t, n, r, o, e);
                        }
                        for (; this._subrects > 0; ) {
                          if (a.rQwait("RRE", 12)) return !1;
                          var s = a.rQshiftBytes(4),
                            u = a.rQshift16(),
                            c = a.rQshift16(),
                            d = a.rQshift16(),
                            m = a.rQshift16();
                          (i.fillRect(t + u, n + c, d, m, s), this._subrects--);
                        }
                        return !0;
                      },
                    },
                  ]);
                })());
              },
          }),
          K = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/hextile.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = r(a());
                function n(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (n = function (n) {
                    return n ? r : t;
                  })(e);
                }
                function r(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (o(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var r = n(t);
                  if (r && r.has(e)) return r.get(e);
                  var a = { __proto__: null },
                    i =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var l in e)
                    if (l !== "default" && {}.hasOwnProperty.call(e, l)) {
                      var s = i ? Object.getOwnPropertyDescriptor(e, l) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(a, l, s)
                        : (a[l] = e[l]);
                    }
                  return ((a.default = e), r && r.set(e, a), a);
                }
                function o(e) {
                  "@babel/helpers - typeof";
                  return (
                    (o =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    o(e)
                  );
                }
                function i(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, u(r.key), r));
                  }
                }
                function s(e, t, n) {
                  return (
                    t && l(e.prototype, t),
                    n && l(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function u(e) {
                  var t = c(e, "string");
                  return o(t) == "symbol" ? t : t + "";
                }
                function c(e, t) {
                  if (o(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (o(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var d = (t.default = (function () {
                  function t() {
                    (i(this, t),
                      (this._tiles = 0),
                      (this._lastsubencoding = 0),
                      (this._tileBuffer = new Uint8Array(256 * 4)));
                  }
                  return s(t, [
                    {
                      key: "decodeRect",
                      value: function (n, r, o, a, i, l, s) {
                        for (
                          this._tiles === 0 &&
                          ((this._tilesX = Math.ceil(o / 16)),
                          (this._tilesY = Math.ceil(a / 16)),
                          (this._totalTiles = this._tilesX * this._tilesY),
                          (this._tiles = this._totalTiles));
                          this._tiles > 0;
                        ) {
                          var t = 1;
                          if (i.rQwait("HEXTILE", t)) return !1;
                          var u = i.rQpeek8();
                          if (u > 30)
                            throw new Error(
                              "Illegal hextile subencoding (subencoding: " +
                                u +
                                ")",
                            );
                          var c = this._totalTiles - this._tiles,
                            d = c % this._tilesX,
                            m = Math.floor(c / this._tilesX),
                            p = n + d * 16,
                            _ = r + m * 16,
                            f = Math.min(16, n + o - p),
                            g = Math.min(16, r + a - _);
                          if (u & 1) t += f * g * 4;
                          else if (
                            (u & 2 && (t += 4), u & 4 && (t += 4), u & 8)
                          ) {
                            if ((t++, i.rQwait("HEXTILE", t))) return !1;
                            var h = i.rQpeekBytes(t).at(-1);
                            u & 16 ? (t += h * 6) : (t += h * 2);
                          }
                          if (i.rQwait("HEXTILE", t)) return !1;
                          if ((i.rQshift8(), u === 0))
                            this._lastsubencoding & 1
                              ? e.Debug("     Ignoring blank after RAW")
                              : l.fillRect(p, _, f, g, this._background);
                          else if (u & 1) {
                            for (
                              var y = f * g,
                                C = i.rQshiftBytes(y * 4, !1),
                                b = 0;
                              b < y;
                              b++
                            )
                              C[b * 4 + 3] = 255;
                            l.blitImage(p, _, f, g, C, 0);
                          } else {
                            if (
                              (u & 2 &&
                                (this._background = new Uint8Array(
                                  i.rQshiftBytes(4),
                                )),
                              u & 4 &&
                                (this._foreground = new Uint8Array(
                                  i.rQshiftBytes(4),
                                )),
                              this._startTile(p, _, f, g, this._background),
                              u & 8)
                            )
                              for (var v = i.rQshift8(), S = 0; S < v; S++) {
                                var R = void 0;
                                u & 16
                                  ? (R = i.rQshiftBytes(4))
                                  : (R = this._foreground);
                                var L = i.rQshift8(),
                                  E = L >> 4,
                                  k = L & 15,
                                  I = i.rQshift8(),
                                  T = (I >> 4) + 1,
                                  D = (I & 15) + 1;
                                this._subTile(E, k, T, D, R);
                              }
                            this._finishTile(l);
                          }
                          ((this._lastsubencoding = u), this._tiles--);
                        }
                        return !0;
                      },
                    },
                    {
                      key: "_startTile",
                      value: function (t, n, r, o, a) {
                        ((this._tileX = t),
                          (this._tileY = n),
                          (this._tileW = r),
                          (this._tileH = o));
                        for (
                          var e = a[0],
                            i = a[1],
                            l = a[2],
                            s = this._tileBuffer,
                            u = 0;
                          u < r * o * 4;
                          u += 4
                        )
                          ((s[u] = e),
                            (s[u + 1] = i),
                            (s[u + 2] = l),
                            (s[u + 3] = 255));
                      },
                    },
                    {
                      key: "_subTile",
                      value: function (t, n, r, o, a) {
                        for (
                          var e = a[0],
                            i = a[1],
                            l = a[2],
                            s = t + r,
                            u = n + o,
                            c = this._tileBuffer,
                            d = this._tileW,
                            m = n;
                          m < u;
                          m++
                        )
                          for (var p = t; p < s; p++) {
                            var _ = (p + m * d) * 4;
                            ((c[_] = e),
                              (c[_ + 1] = i),
                              (c[_ + 2] = l),
                              (c[_ + 3] = 255));
                          }
                      },
                    },
                    {
                      key: "_finishTile",
                      value: function (t) {
                        t.blitImage(
                          this._tileX,
                          this._tileY,
                          this._tileW,
                          this._tileH,
                          this._tileBuffer,
                          0,
                        );
                      },
                    },
                  ]);
                })());
              },
          }),
          Q = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/tight.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = i(a()),
                  n = r(b());
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (o = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function i(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (l(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var n = o(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
                      var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(r, i, s)
                        : (r[i] = e[i]);
                    }
                  return ((r.default = e), n && n.set(e, r), r);
                }
                function l(e) {
                  "@babel/helpers - typeof";
                  return (
                    (l =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    l(e)
                  );
                }
                function s(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, d(r.key), r));
                  }
                }
                function c(e, t, n) {
                  return (
                    t && u(e.prototype, t),
                    n && u(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function d(e) {
                  var t = m(e, "string");
                  return l(t) == "symbol" ? t : t + "";
                }
                function m(e, t) {
                  if (l(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var r = n.call(e, t || "default");
                    if (l(r) != "object") return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var p = (t.default = (function () {
                  function t() {
                    (s(this, t),
                      (this._ctl = null),
                      (this._filter = null),
                      (this._numColors = 0),
                      (this._palette = new Uint8Array(1024)),
                      (this._len = 0),
                      (this._zlibs = []));
                    for (var e = 0; e < 4; e++)
                      this._zlibs[e] = new n.default();
                  }
                  return c(t, [
                    {
                      key: "decodeRect",
                      value: function (n, r, o, a, i, l, s) {
                        if (this._ctl === null) {
                          if (i.rQwait("TIGHT compression-control", 1))
                            return !1;
                          this._ctl = i.rQshift8();
                          for (var t = 0; t < 4; t++)
                            (this._ctl >> t) & 1 &&
                              (this._zlibs[t].reset(),
                              e.Info("Reset zlib stream " + t));
                          this._ctl = this._ctl >> 4;
                        }
                        var u;
                        if (this._ctl === 8)
                          u = this._fillRect(n, r, o, a, i, l, s);
                        else if (this._ctl === 9)
                          u = this._jpegRect(n, r, o, a, i, l, s);
                        else if (this._ctl === 10)
                          u = this._pngRect(n, r, o, a, i, l, s);
                        else if ((this._ctl & 8) == 0)
                          u = this._basicRect(this._ctl, n, r, o, a, i, l, s);
                        else
                          throw new Error(
                            "Illegal tight compression received (ctl: " +
                              this._ctl +
                              ")",
                          );
                        return (u && (this._ctl = null), u);
                      },
                    },
                    {
                      key: "_fillRect",
                      value: function (t, n, r, o, a, i, l) {
                        if (a.rQwait("TIGHT", 3)) return !1;
                        var e = a.rQshiftBytes(3);
                        return (i.fillRect(t, n, r, o, e, !1), !0);
                      },
                    },
                    {
                      key: "_jpegRect",
                      value: function (t, n, r, o, a, i, l) {
                        var e = this._readData(a);
                        return e === null
                          ? !1
                          : (i.imageRect(t, n, r, o, "image/jpeg", e), !0);
                      },
                    },
                    {
                      key: "_pngRect",
                      value: function (t, n, r, o, a, i, l) {
                        throw new Error("PNG received in standard Tight rect");
                      },
                    },
                    {
                      key: "_basicRect",
                      value: function (t, n, r, o, a, i, l, s) {
                        if (this._filter === null)
                          if (t & 4) {
                            if (i.rQwait("TIGHT", 1)) return !1;
                            this._filter = i.rQshift8();
                          } else this._filter = 0;
                        var e = t & 3,
                          u;
                        switch (this._filter) {
                          case 0:
                            u = this._copyFilter(e, n, r, o, a, i, l, s);
                            break;
                          case 1:
                            u = this._paletteFilter(e, n, r, o, a, i, l, s);
                            break;
                          case 2:
                            u = this._gradientFilter(e, n, r, o, a, i, l, s);
                            break;
                          default:
                            throw new Error(
                              "Illegal tight filter received (ctl: " +
                                this._filter +
                                ")",
                            );
                        }
                        return (u && (this._filter = null), u);
                      },
                    },
                    {
                      key: "_copyFilter",
                      value: function (t, n, r, o, a, i, l, s) {
                        var e = o * a * 3,
                          u;
                        if (e === 0) return !0;
                        if (e < 12) {
                          if (i.rQwait("TIGHT", e)) return !1;
                          u = i.rQshiftBytes(e);
                        } else {
                          if (((u = this._readData(i)), u === null)) return !1;
                          (this._zlibs[t].setInput(u),
                            (u = this._zlibs[t].inflate(e)),
                            this._zlibs[t].setInput(null));
                        }
                        for (
                          var c = new Uint8Array(o * a * 4), d = 0, m = 0;
                          d < o * a * 4;
                          d += 4, m += 3
                        )
                          ((c[d] = u[m]),
                            (c[d + 1] = u[m + 1]),
                            (c[d + 2] = u[m + 2]),
                            (c[d + 3] = 255));
                        return (l.blitImage(n, r, o, a, c, 0, !1), !0);
                      },
                    },
                    {
                      key: "_paletteFilter",
                      value: function (t, n, r, o, a, i, l, s) {
                        if (this._numColors === 0) {
                          if (i.rQwait("TIGHT palette", 1)) return !1;
                          var e = i.rQpeek8() + 1,
                            u = e * 3;
                          if (i.rQwait("TIGHT palette", 1 + u)) return !1;
                          ((this._numColors = e),
                            i.rQskipBytes(1),
                            i.rQshiftTo(this._palette, u));
                        }
                        var c = this._numColors <= 2 ? 1 : 8,
                          d = Math.floor((o * c + 7) / 8),
                          m = d * a,
                          p;
                        if (m === 0) return !0;
                        if (m < 12) {
                          if (i.rQwait("TIGHT", m)) return !1;
                          p = i.rQshiftBytes(m);
                        } else {
                          if (((p = this._readData(i)), p === null)) return !1;
                          (this._zlibs[t].setInput(p),
                            (p = this._zlibs[t].inflate(m)),
                            this._zlibs[t].setInput(null));
                        }
                        return (
                          this._numColors == 2
                            ? this._monoRect(n, r, o, a, p, this._palette, l)
                            : this._paletteRect(
                                n,
                                r,
                                o,
                                a,
                                p,
                                this._palette,
                                l,
                              ),
                          (this._numColors = 0),
                          !0
                        );
                      },
                    },
                    {
                      key: "_monoRect",
                      value: function (t, n, r, o, a, i, l) {
                        for (
                          var e = this._getScratchBuffer(r * o * 4),
                            s = Math.floor((r + 7) / 8),
                            u = Math.floor(r / 8),
                            c = 0;
                          c < o;
                          c++
                        ) {
                          var d = void 0,
                            m = void 0,
                            p = void 0;
                          for (p = 0; p < u; p++)
                            for (var _ = 7; _ >= 0; _--)
                              ((d = (c * r + p * 8 + 7 - _) * 4),
                                (m = ((a[c * s + p] >> _) & 1) * 3),
                                (e[d] = i[m]),
                                (e[d + 1] = i[m + 1]),
                                (e[d + 2] = i[m + 2]),
                                (e[d + 3] = 255));
                          for (var f = 7; f >= 8 - (r % 8); f--)
                            ((d = (c * r + p * 8 + 7 - f) * 4),
                              (m = ((a[c * s + p] >> f) & 1) * 3),
                              (e[d] = i[m]),
                              (e[d + 1] = i[m + 1]),
                              (e[d + 2] = i[m + 2]),
                              (e[d + 3] = 255));
                        }
                        l.blitImage(t, n, r, o, e, 0, !1);
                      },
                    },
                    {
                      key: "_paletteRect",
                      value: function (t, n, r, o, a, i, l) {
                        for (
                          var e = this._getScratchBuffer(r * o * 4),
                            s = r * o * 4,
                            u = 0,
                            c = 0;
                          u < s;
                          u += 4, c++
                        ) {
                          var d = a[c] * 3;
                          ((e[u] = i[d]),
                            (e[u + 1] = i[d + 1]),
                            (e[u + 2] = i[d + 2]),
                            (e[u + 3] = 255));
                        }
                        l.blitImage(t, n, r, o, e, 0, !1);
                      },
                    },
                    {
                      key: "_gradientFilter",
                      value: function (t, n, r, o, a, i, l, s) {
                        var e = o * a * 3,
                          u;
                        if (e === 0) return !0;
                        if (e < 12) {
                          if (i.rQwait("TIGHT", e)) return !1;
                          u = i.rQshiftBytes(e);
                        } else {
                          if (((u = this._readData(i)), u === null)) return !1;
                          (this._zlibs[t].setInput(u),
                            (u = this._zlibs[t].inflate(e)),
                            this._zlibs[t].setInput(null));
                        }
                        for (
                          var c = new Uint8Array(4 * o * a),
                            d = 0,
                            m = 0,
                            p = new Uint8Array(3),
                            _ = 0;
                          _ < o;
                          _++
                        ) {
                          for (var f = 0; f < 3; f++) {
                            var g = p[f],
                              h = u[m++] + g;
                            ((c[d++] = h), (p[f] = h));
                          }
                          c[d++] = 255;
                        }
                        for (
                          var y = 0,
                            C = new Uint8Array(3),
                            b = new Uint8Array(3),
                            v = 1;
                          v < a;
                          v++
                        ) {
                          (p.fill(0), b.fill(0));
                          for (var S = 0; S < o; S++) {
                            for (var R = 0; R < 3; R++) {
                              C[R] = c[y++];
                              var L = p[R] + C[R] - b[R];
                              L < 0 ? (L = 0) : L > 255 && (L = 255);
                              var E = u[m++] + L;
                              ((c[d++] = E), (b[R] = C[R]), (p[R] = E));
                            }
                            ((c[d++] = 255), y++);
                          }
                        }
                        return (l.blitImage(n, r, o, a, c, 0, !1), !0);
                      },
                    },
                    {
                      key: "_readData",
                      value: function (t) {
                        if (this._len === 0) {
                          if (t.rQwait("TIGHT", 3)) return null;
                          var e;
                          ((e = t.rQshift8()),
                            (this._len = e & 127),
                            e & 128 &&
                              ((e = t.rQshift8()),
                              (this._len |= (e & 127) << 7),
                              e & 128 &&
                                ((e = t.rQshift8()), (this._len |= e << 14))));
                        }
                        if (t.rQwait("TIGHT", this._len)) return null;
                        var n = t.rQshiftBytes(this._len, !1);
                        return ((this._len = 0), n);
                      },
                    },
                    {
                      key: "_getScratchBuffer",
                      value: function (t) {
                        return (
                          (!this._scratchBuffer ||
                            this._scratchBuffer.length < t) &&
                            (this._scratchBuffer = new Uint8Array(t)),
                          this._scratchBuffer
                        );
                      },
                    },
                  ]);
                })());
              },
          }),
          X = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/tightpng.js":
              function (t) {
                "use strict";
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var n = r(Q());
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, l(r.key), r));
                  }
                }
                function i(e, t, n) {
                  return (
                    t && a(e.prototype, t),
                    n && a(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function l(t) {
                  var n = s(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function s(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                function u(e, t, n) {
                  return (
                    (t = p(t)),
                    c(
                      e,
                      m()
                        ? Reflect.construct(t, n || [], p(e).constructor)
                        : t.apply(e, n),
                    )
                  );
                }
                function c(t, n) {
                  if (n && (e(n) == "object" || typeof n == "function"))
                    return n;
                  if (n !== void 0)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return d(t);
                }
                function d(e) {
                  if (e === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                }
                function m() {
                  try {
                    var e = !Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    );
                  } catch (e) {}
                  return (m = function () {
                    return !!e;
                  })();
                }
                function p(e) {
                  return (
                    (p = Object.setPrototypeOf
                      ? Object.getPrototypeOf.bind()
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                    p(e)
                  );
                }
                function _(e, t) {
                  if (typeof t != "function" && t !== null)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t));
                }
                function f(e, t) {
                  return (
                    (f = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (e, t) {
                          return ((e.__proto__ = t), e);
                        }),
                    f(e, t)
                  );
                }
                var g = (t.default = (function (e) {
                  function t() {
                    return (o(this, t), u(this, t, arguments));
                  }
                  return (
                    _(t, e),
                    i(t, [
                      {
                        key: "_pngRect",
                        value: function (t, n, r, o, a, i, l) {
                          var e = this._readData(a);
                          return e === null
                            ? !1
                            : (i.imageRect(t, n, r, o, "image/png", e), !0);
                        },
                      },
                      {
                        key: "_basicRect",
                        value: function (t, n, r, o, a, i, l, s) {
                          throw new Error(
                            "BasicCompression received in TightPNG rect",
                          );
                        },
                      },
                    ])
                  );
                })(n.default));
              },
          }),
          Y = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/zrle.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                var e = n(b());
                function n(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function r(e) {
                  "@babel/helpers - typeof";
                  return (
                    (r =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    r(e)
                  );
                }
                function o(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, l(r.key), r));
                  }
                }
                function i(e, t, n) {
                  return (
                    t && a(e.prototype, t),
                    n && a(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function l(e) {
                  var t = s(e, "string");
                  return r(t) == "symbol" ? t : t + "";
                }
                function s(e, t) {
                  if (r(e) != "object" || !e) return e;
                  var n =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (n !== void 0) {
                    var o = n.call(e, t || "default");
                    if (r(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (t === "string" ? String : Number)(e);
                }
                var u = 64,
                  c = 64,
                  d = (t.default = (function () {
                    function t() {
                      (o(this, t),
                        (this._length = 0),
                        (this._inflator = new e.default()),
                        (this._pixelBuffer = new Uint8Array(u * c * 4)),
                        (this._tileBuffer = new Uint8Array(u * c * 4)));
                    }
                    return i(t, [
                      {
                        key: "decodeRect",
                        value: function (t, n, r, o, a, i, l) {
                          if (this._length === 0) {
                            if (a.rQwait("ZLib data length", 4)) return !1;
                            this._length = a.rQshift32();
                          }
                          if (a.rQwait("Zlib data", this._length)) return !1;
                          var e = a.rQshiftBytes(this._length, !1);
                          this._inflator.setInput(e);
                          for (var s = n; s < n + o; s += c)
                            for (
                              var d = Math.min(c, n + o - s), m = t;
                              m < t + r;
                              m += u
                            ) {
                              var p = Math.min(u, t + r - m),
                                _ = p * d,
                                f = this._inflator.inflate(1)[0];
                              if (f === 0) {
                                var g = this._readPixels(_);
                                i.blitImage(m, s, p, d, g, 0, !1);
                              } else if (f === 1) {
                                var h = this._readPixels(1);
                                i.fillRect(m, s, p, d, [h[0], h[1], h[2]]);
                              } else if (f >= 2 && f <= 16) {
                                var y = this._decodePaletteTile(f, _, p, d);
                                i.blitImage(m, s, p, d, y, 0, !1);
                              } else if (f === 128) {
                                var C = this._decodeRLETile(_);
                                i.blitImage(m, s, p, d, C, 0, !1);
                              } else if (f >= 130 && f <= 255) {
                                var b = this._decodeRLEPaletteTile(f - 128, _);
                                i.blitImage(m, s, p, d, b, 0, !1);
                              } else
                                throw new Error("Unknown subencoding: " + f);
                            }
                          return ((this._length = 0), !0);
                        },
                      },
                      {
                        key: "_getBitsPerPixelInPalette",
                        value: function (t) {
                          if (t <= 2) return 1;
                          if (t <= 4) return 2;
                          if (t <= 16) return 4;
                        },
                      },
                      {
                        key: "_readPixels",
                        value: function (t) {
                          for (
                            var e = this._pixelBuffer,
                              n = this._inflator.inflate(3 * t),
                              r = 0,
                              o = 0;
                            r < t * 4;
                            r += 4, o += 3
                          )
                            ((e[r] = n[o]),
                              (e[r + 1] = n[o + 1]),
                              (e[r + 2] = n[o + 2]),
                              (e[r + 3] = 255));
                          return e;
                        },
                      },
                      {
                        key: "_decodePaletteTile",
                        value: function (t, n, r, o) {
                          for (
                            var e = this._tileBuffer,
                              a = this._readPixels(t),
                              i = this._getBitsPerPixelInPalette(t),
                              l = (1 << i) - 1,
                              s = 0,
                              u = this._inflator.inflate(1)[0],
                              c = 0;
                            c < o;
                            c++
                          ) {
                            for (var d = 8 - i, m = 0; m < r; m++) {
                              d < 0 &&
                                ((d = 8 - i),
                                (u = this._inflator.inflate(1)[0]));
                              var p = (u >> d) & l;
                              ((e[s] = a[p * 4]),
                                (e[s + 1] = a[p * 4 + 1]),
                                (e[s + 2] = a[p * 4 + 2]),
                                (e[s + 3] = a[p * 4 + 3]),
                                (s += 4),
                                (d -= i));
                            }
                            d < 8 - i &&
                              c < o - 1 &&
                              (u = this._inflator.inflate(1)[0]);
                          }
                          return e;
                        },
                      },
                      {
                        key: "_decodeRLETile",
                        value: function (t) {
                          for (var e = this._tileBuffer, n = 0; n < t; )
                            for (
                              var r = this._readPixels(1),
                                o = this._readRLELength(),
                                a = 0;
                              a < o;
                              a++
                            )
                              ((e[n * 4] = r[0]),
                                (e[n * 4 + 1] = r[1]),
                                (e[n * 4 + 2] = r[2]),
                                (e[n * 4 + 3] = r[3]),
                                n++);
                          return e;
                        },
                      },
                      {
                        key: "_decodeRLEPaletteTile",
                        value: function (t, n) {
                          for (
                            var e = this._tileBuffer,
                              r = this._readPixels(t),
                              o = 0;
                            o < n;
                          ) {
                            var a = this._inflator.inflate(1)[0],
                              i = 1;
                            if (
                              (a >= 128 &&
                                ((a -= 128), (i = this._readRLELength())),
                              a > t)
                            )
                              throw new Error(
                                "Too big index in palette: " +
                                  a +
                                  ", palette size: " +
                                  t,
                              );
                            if (o + i > n)
                              throw new Error(
                                "Too big rle length in palette mode: " +
                                  i +
                                  ", allowed length is: " +
                                  (n - o),
                              );
                            for (var l = 0; l < i; l++)
                              ((e[o * 4] = r[a * 4]),
                                (e[o * 4 + 1] = r[a * 4 + 1]),
                                (e[o * 4 + 2] = r[a * 4 + 2]),
                                (e[o * 4 + 3] = r[a * 4 + 3]),
                                o++);
                          }
                          return e;
                        },
                      },
                      {
                        key: "_readRLELength",
                        value: function () {
                          var e = 0,
                            t = 0;
                          do ((t = this._inflator.inflate(1)[0]), (e += t));
                          while (t === 255);
                          return e + 1;
                        },
                      },
                    ]);
                  })());
              },
          }),
          J = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/decoders/jpeg.js":
              function (t) {
                "use strict";
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = void 0));
                function e(t) {
                  "@babel/helpers - typeof";
                  return (
                    (e =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    e(t)
                  );
                }
                function n(e) {
                  return a(e) || o(e) || l(e) || r();
                }
                function r() {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                }
                function o(e) {
                  if (
                    (typeof Symbol < "u" &&
                      e[
                        typeof Symbol == "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ] != null) ||
                    e["@@iterator"] != null
                  )
                    return Array.from(e);
                }
                function a(e) {
                  if (Array.isArray(e)) return s(e);
                }
                function i(e, t) {
                  var n =
                    (typeof Symbol < "u" &&
                      e[
                        typeof Symbol == "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = l(e)) ||
                      (t && e && typeof e.length == "number")
                    ) {
                      n && (e = n);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: o,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  }
                  var a,
                    i = !0,
                    s = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return ((i = e.done), e);
                    },
                    e: function (t) {
                      ((s = !0), (a = t));
                    },
                    f: function () {
                      try {
                        i || n.return == null || n.return();
                      } finally {
                        if (s) throw a;
                      }
                    },
                  };
                }
                function l(e, t) {
                  if (e) {
                    if (typeof e == "string") return s(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      n === "Object" &&
                        e.constructor &&
                        (n = e.constructor.name),
                      n === "Map" || n === "Set"
                        ? Array.from(e)
                        : n === "Arguments" ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? s(e, t)
                          : void 0
                    );
                  }
                }
                function s(e, t) {
                  (t == null || t > e.length) && (t = e.length);
                  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function u(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, m(r.key), r));
                  }
                }
                function d(e, t, n) {
                  return (
                    t && c(e.prototype, t),
                    n && c(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function m(t) {
                  var n = p(t, "string");
                  return e(n) == "symbol" ? n : n + "";
                }
                function p(t, n) {
                  if (e(t) != "object" || !t) return t;
                  var r =
                    t[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(t, n || "default");
                    if (e(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(t);
                }
                var _ = (t.default = (function () {
                  function e() {
                    (u(this, e),
                      (this._cachedQuantTables = []),
                      (this._cachedHuffmanTables = []),
                      (this._segments = []));
                  }
                  return d(e, [
                    {
                      key: "decodeRect",
                      value: function (t, r, o, a, l, s, u) {
                        for (;;) {
                          var e = this._readSegment(l);
                          if (e === null) return !1;
                          if ((this._segments.push(e), e[1] === 217)) break;
                        }
                        var c = [],
                          d = [],
                          m = i(this._segments),
                          p;
                        try {
                          for (m.s(); !(p = m.n()).done; ) {
                            var _ = p.value,
                              f = _[1];
                            f === 196 ? c.push(_) : f === 219 && d.push(_);
                          }
                        } catch (e) {
                          m.e(e);
                        } finally {
                          m.f();
                        }
                        var g = this._segments.findIndex(function (e) {
                          return e[1] == 192 || e[1] == 194;
                        });
                        if (g == -1)
                          throw new Error("Illegal JPEG image without SOF");
                        if (d.length === 0) {
                          var h;
                          (h = this._segments).splice.apply(
                            h,
                            [g + 1, 0].concat(n(this._cachedQuantTables)),
                          );
                        }
                        if (c.length === 0) {
                          var y;
                          (y = this._segments).splice.apply(
                            y,
                            [g + 1, 0].concat(n(this._cachedHuffmanTables)),
                          );
                        }
                        var C = 0,
                          b = i(this._segments),
                          v;
                        try {
                          for (b.s(); !(v = b.n()).done; ) {
                            var S = v.value;
                            C += S.length;
                          }
                        } catch (e) {
                          b.e(e);
                        } finally {
                          b.f();
                        }
                        var R = new Uint8Array(C);
                        C = 0;
                        var L = i(this._segments),
                          E;
                        try {
                          for (L.s(); !(E = L.n()).done; ) {
                            var k = E.value;
                            (R.set(k, C), (C += k.length));
                          }
                        } catch (e) {
                          L.e(e);
                        } finally {
                          L.f();
                        }
                        return (
                          s.imageRect(t, r, o, a, "image/jpeg", R),
                          c.length !== 0 && (this._cachedHuffmanTables = c),
                          d.length !== 0 && (this._cachedQuantTables = d),
                          (this._segments = []),
                          !0
                        );
                      },
                    },
                    {
                      key: "_readSegment",
                      value: function (t) {
                        if (t.rQwait("JPEG", 2)) return null;
                        var e = t.rQshift8();
                        if (e != 255)
                          throw new Error(
                            "Illegal JPEG marker received (byte: " + e + ")",
                          );
                        var n = t.rQshift8();
                        if ((n >= 208 && n <= 217) || n == 1)
                          return new Uint8Array([e, n]);
                        if (t.rQwait("JPEG", 2, 2)) return null;
                        var r = t.rQshift16();
                        if (r < 2)
                          throw new Error(
                            "Illegal JPEG length received (length: " + r + ")",
                          );
                        if (t.rQwait("JPEG", r - 2, 4)) return null;
                        var o = 0;
                        if (n === 218)
                          for (o += 2; ; ) {
                            if (t.rQwait("JPEG", r - 2 + o, 4)) return null;
                            var a = t.rQpeekBytes(r - 2 + o, !1);
                            if (
                              a.at(-2) === 255 &&
                              a.at(-1) !== 0 &&
                              !(a.at(-1) >= 208 && a.at(-1) <= 215)
                            ) {
                              o -= 2;
                              break;
                            }
                            o++;
                          }
                        var i = new Uint8Array(2 + r + o);
                        return (
                          (i[0] = e),
                          (i[1] = n),
                          (i[2] = r >> 8),
                          (i[3] = r),
                          i.set(t.rQshiftBytes(r - 2 + o, !1), 4),
                          i
                        );
                      },
                    },
                  ]);
                })());
              },
          }),
          Z = r({
            "node_modules/.pnpm/@novnc+novnc@1.5.0/node_modules/@novnc/novnc/lib/rfb.js":
              function (r) {
                function t(e) {
                  "@babel/helpers - typeof";
                  return (
                    (t =
                      typeof Symbol == "function" &&
                      typeof (typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator") == "symbol"
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              typeof Symbol == "function" &&
                              e.constructor === Symbol &&
                              e !==
                                (typeof Symbol == "function"
                                  ? Symbol.prototype
                                  : "@@prototype")
                              ? "symbol"
                              : typeof e;
                          }),
                    t(e)
                  );
                }
                (Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = void 0));
                var d = o(),
                  p = ie(a()),
                  _ = i(),
                  f = l(),
                  g = s(),
                  h = u(),
                  y = oe(c()),
                  C = oe(m()),
                  v = oe(b()),
                  S = oe(L()),
                  R = oe($()),
                  k = oe(P()),
                  I = oe(N()),
                  T = oe(M()),
                  D = oe(E()),
                  x = oe(w()),
                  F = A(),
                  O = oe(H()),
                  B = oe(V()),
                  W = oe(G()),
                  q = oe(z()),
                  U = oe(j()),
                  Z = oe(K()),
                  ee = oe(Q()),
                  te = oe(X()),
                  ne = oe(Y()),
                  re = oe(J());
                function oe(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function ae(e) {
                  if (typeof WeakMap != "function") return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (ae = function (r) {
                    return r ? n : t;
                  })(e);
                }
                function ie(e, n) {
                  if (!n && e && e.__esModule) return e;
                  if (
                    e === null ||
                    (t(e) != "object" && typeof e != "function")
                  )
                    return { default: e };
                  var r = ae(n);
                  if (r && r.has(e)) return r.get(e);
                  var o = { __proto__: null },
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      l && (l.get || l.set)
                        ? Object.defineProperty(o, i, l)
                        : (o[i] = e[i]);
                    }
                  return ((o.default = e), r && r.set(e, o), o);
                }
                function le() {
                  "use strict";
                  le = function () {
                    return o;
                  };
                  var r,
                    o = {},
                    a = Object.prototype,
                    i = a.hasOwnProperty,
                    l =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    s = typeof Symbol == "function" ? Symbol : {},
                    u = s.iterator || "@@iterator",
                    c = s.asyncIterator || "@@asyncIterator",
                    d = s.toStringTag || "@@toStringTag";
                  function m(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    m({}, "");
                  } catch (e) {
                    m = function (t, n, r) {
                      return (t[n] = r);
                    };
                  }
                  function p(e, t, n, r) {
                    var o = t && t.prototype instanceof b ? t : b,
                      a = Object.create(o.prototype),
                      i = new N(r || []);
                    return (l(a, "_invoke", { value: D(e, n, i) }), a);
                  }
                  function _(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  o.wrap = p;
                  var f = "suspendedStart",
                    g = "suspendedYield",
                    h = "executing",
                    y = "completed",
                    C = {};
                  function b() {}
                  function v() {}
                  function S() {}
                  var R = {};
                  m(R, u, function () {
                    return this;
                  });
                  var L = Object.getPrototypeOf,
                    E = L && L(L(M([])));
                  E && E !== a && i.call(E, u) && (R = E);
                  var k = (S.prototype = b.prototype = Object.create(R));
                  function I(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      m(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function T(e, n) {
                    function r(o, a, l, s) {
                      var u = _(e[o], e, a);
                      if (u.type !== "throw") {
                        var c = u.arg,
                          d = c.value;
                        return d && t(d) == "object" && i.call(d, "__await")
                          ? n.resolve(d.__await).then(
                              function (e) {
                                r("next", e, l, s);
                              },
                              function (e) {
                                r("throw", e, l, s);
                              },
                            )
                          : n.resolve(d).then(
                              function (e) {
                                ((c.value = e), l(c));
                              },
                              function (e) {
                                return r("throw", e, l, s);
                              },
                            );
                      }
                      s(u.arg);
                    }
                    var o;
                    l(this, "_invoke", {
                      value: function (t, a) {
                        function e() {
                          return new n(function (e, n) {
                            r(t, a, e, n);
                          });
                        }
                        return (o = o ? o.then(e, e) : e());
                      },
                    });
                  }
                  function D(e, t, n) {
                    var o = f;
                    return function (a, i) {
                      if (o === h) throw Error("Generator is already running");
                      if (o === y) {
                        if (a === "throw") throw i;
                        return { value: r, done: !0 };
                      }
                      for (n.method = a, n.arg = i; ; ) {
                        var l = n.delegate;
                        if (l) {
                          var s = x(l, n);
                          if (s) {
                            if (s === C) continue;
                            return s;
                          }
                        }
                        if (n.method === "next") n.sent = n._sent = n.arg;
                        else if (n.method === "throw") {
                          if (o === f) throw ((o = y), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          n.method === "return" && n.abrupt("return", n.arg);
                        o = h;
                        var u = _(e, t, n);
                        if (u.type === "normal") {
                          if (((o = n.done ? y : g), u.arg === C)) continue;
                          return { value: u.arg, done: n.done };
                        }
                        u.type === "throw" &&
                          ((o = y), (n.method = "throw"), (n.arg = u.arg));
                      }
                    };
                  }
                  function x(e, t) {
                    var n = t.method,
                      o = e.iterator[n];
                    if (o === r)
                      return (
                        (t.delegate = null),
                        (n === "throw" &&
                          e.iterator.return &&
                          ((t.method = "return"),
                          (t.arg = r),
                          x(e, t),
                          t.method === "throw")) ||
                          (n !== "return" &&
                            ((t.method = "throw"),
                            (t.arg = new TypeError(
                              "The iterator does not provide a '" +
                                n +
                                "' method",
                            )))),
                        C
                      );
                    var a = _(o, e.iterator, t.arg);
                    if (a.type === "throw")
                      return (
                        (t.method = "throw"),
                        (t.arg = a.arg),
                        (t.delegate = null),
                        C
                      );
                    var i = a.arg;
                    return i
                      ? i.done
                        ? ((t[e.resultName] = i.value),
                          (t.next = e.nextLoc),
                          t.method !== "return" &&
                            ((t.method = "next"), (t.arg = r)),
                          (t.delegate = null),
                          C)
                        : i
                      : ((t.method = "throw"),
                        (t.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (t.delegate = null),
                        C);
                  }
                  function $(e) {
                    var t = { tryLoc: e[0] };
                    (1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t));
                  }
                  function P(e) {
                    var t = e.completion || {};
                    ((t.type = "normal"), delete t.arg, (e.completion = t));
                  }
                  function N(e) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach($, this),
                      this.reset(!0));
                  }
                  function M(e) {
                    if (e || e === "") {
                      var n = e[u];
                      if (n) return n.call(e);
                      if (typeof e.next == "function") return e;
                      if (!isNaN(e.length)) {
                        var o = -1,
                          a = function t() {
                            for (; ++o < e.length; )
                              if (i.call(e, o))
                                return ((t.value = e[o]), (t.done = !1), t);
                            return ((t.value = r), (t.done = !0), t);
                          };
                        return (a.next = a);
                      }
                    }
                    throw new TypeError(t(e) + " is not iterable");
                  }
                  return (
                    (v.prototype = S),
                    l(k, "constructor", { value: S, configurable: !0 }),
                    l(S, "constructor", { value: v, configurable: !0 }),
                    (v.displayName = m(S, d, "GeneratorFunction")),
                    (o.isGeneratorFunction = function (e) {
                      var t = typeof e == "function" && e.constructor;
                      return (
                        !!t &&
                        (t === v ||
                          (t.displayName || t.name) === "GeneratorFunction")
                      );
                    }),
                    (o.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, S)
                          : ((e.__proto__ = S), m(e, d, "GeneratorFunction")),
                        (e.prototype = Object.create(k)),
                        e
                      );
                    }),
                    (o.awrap = function (e) {
                      return { __await: e };
                    }),
                    I(T.prototype),
                    m(T.prototype, c, function () {
                      return this;
                    }),
                    (o.AsyncIterator = T),
                    (o.async = function (t, r, a, i, l) {
                      l === void 0 && (l = e || (e = n("Promise")));
                      var s = new T(p(t, r, a, i), l);
                      return o.isGeneratorFunction(r)
                        ? s
                        : s.next().then(function (e) {
                            return e.done ? e.value : s.next();
                          });
                    }),
                    I(k),
                    m(k, d, "Generator"),
                    m(k, u, function () {
                      return this;
                    }),
                    m(k, "toString", function () {
                      return "[object Generator]";
                    }),
                    (o.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                              return ((e.value = r), (e.done = !1), e);
                          }
                          return ((e.done = !0), e);
                        }
                      );
                    }),
                    (o.values = M),
                    (N.prototype = {
                      constructor: N,
                      reset: function (t) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = r),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = r),
                          this.tryEntries.forEach(P),
                          !t)
                        )
                          for (var e in this)
                            e.charAt(0) === "t" &&
                              i.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = r);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if (e.type === "throw") throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(n, o) {
                          return (
                            (l.type = "throw"),
                            (l.arg = t),
                            (e.next = n),
                            o && ((e.method = "next"), (e.arg = r)),
                            !!o
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var a = this.tryEntries[o],
                            l = a.completion;
                          if (a.tryLoc === "root") return n("end");
                          if (a.tryLoc <= this.prev) {
                            var s = i.call(a, "catchLoc"),
                              u = i.call(a, "finallyLoc");
                            if (s && u) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            } else if (s) {
                              if (this.prev < a.catchLoc)
                                return n(a.catchLoc, !0);
                            } else {
                              if (!u)
                                throw Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < a.finallyLoc)
                                return n(a.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (
                            r.tryLoc <= this.prev &&
                            i.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                          ) {
                            var o = r;
                            break;
                          }
                        }
                        o &&
                          (t === "break" || t === "continue") &&
                          o.tryLoc <= n &&
                          n <= o.finallyLoc &&
                          (o = null);
                        var a = o ? o.completion : {};
                        return (
                          (a.type = t),
                          (a.arg = n),
                          o
                            ? ((this.method = "next"),
                              (this.next = o.finallyLoc),
                              C)
                            : this.complete(a)
                        );
                      },
                      complete: function (t, n) {
                        if (t.type === "throw") throw t.arg;
                        return (
                          t.type === "break" || t.type === "continue"
                            ? (this.next = t.arg)
                            : t.type === "return"
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : t.type === "normal" && n && (this.next = n),
                          C
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              P(n),
                              C
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if (r.type === "throw") {
                              var o = r.arg;
                              P(n);
                            }
                            return o;
                          }
                        }
                        throw Error("illegal catch attempt");
                      },
                      delegateYield: function (t, n, o) {
                        return (
                          (this.delegate = {
                            iterator: M(t),
                            resultName: n,
                            nextLoc: o,
                          }),
                          this.method === "next" && (this.arg = r),
                          C
                        );
                      },
                    }),
                    o
                  );
                }
                function se(t, r, o, a, i, l, s) {
                  try {
                    var u = t[l](s),
                      c = u.value;
                  } catch (e) {
                    return void o(e);
                  }
                  u.done
                    ? r(c)
                    : (e || (e = n("Promise"))).resolve(c).then(a, i);
                }
                function ue(t) {
                  return function () {
                    var r = this,
                      o = arguments;
                    return new (e || (e = n("Promise")))(function (e, n) {
                      var a = t.apply(r, o);
                      function i(t) {
                        se(a, e, n, i, l, "next", t);
                      }
                      function l(t) {
                        se(a, e, n, i, l, "throw", t);
                      }
                      i(void 0);
                    });
                  };
                }
                function ce(e, t) {
                  return pe(e) || me(e, t) || fe(e, t) || de();
                }
                function de() {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                }
                function me(e, t) {
                  var n =
                    e == null
                      ? null
                      : (typeof Symbol < "u" &&
                          e[
                            typeof Symbol == "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]) ||
                        e["@@iterator"];
                  if (n != null) {
                    var r,
                      o,
                      a,
                      i,
                      l = [],
                      s = !0,
                      u = !1;
                    try {
                      if (((a = (n = n.call(e)).next), t === 0)) {
                        if (Object(n) !== n) return;
                        s = !1;
                      } else
                        for (
                          ;
                          !(s = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          s = !0
                        );
                    } catch (e) {
                      ((u = !0), (o = e));
                    } finally {
                      try {
                        if (
                          !s &&
                          n.return != null &&
                          ((i = n.return()), Object(i) !== i)
                        )
                          return;
                      } finally {
                        if (u) throw o;
                      }
                    }
                    return l;
                  }
                }
                function pe(e) {
                  if (Array.isArray(e)) return e;
                }
                function _e(e, t) {
                  var n =
                    (typeof Symbol < "u" &&
                      e[
                        typeof Symbol == "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = fe(e)) ||
                      (t && e && typeof e.length == "number")
                    ) {
                      n && (e = n);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: o,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  }
                  var a,
                    i = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return ((i = e.done), e);
                    },
                    e: function (t) {
                      ((l = !0), (a = t));
                    },
                    f: function () {
                      try {
                        i || n.return == null || n.return();
                      } finally {
                        if (l) throw a;
                      }
                    },
                  };
                }
                function fe(e, t) {
                  if (e) {
                    if (typeof e == "string") return ge(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      n === "Object" &&
                        e.constructor &&
                        (n = e.constructor.name),
                      n === "Map" || n === "Set"
                        ? Array.from(e)
                        : n === "Arguments" ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? ge(e, t)
                          : void 0
                    );
                  }
                }
                function ge(e, t) {
                  (t == null || t > e.length) && (t = e.length);
                  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function he(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function ye(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, be(r.key), r));
                  }
                }
                function Ce(e, t, n) {
                  return (
                    t && ye(e.prototype, t),
                    n && ye(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                }
                function be(e) {
                  var n = ve(e, "string");
                  return t(n) == "symbol" ? n : n + "";
                }
                function ve(e, n) {
                  if (t(e) != "object" || !e) return e;
                  var r =
                    e[
                      typeof Symbol == "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (r !== void 0) {
                    var o = r.call(e, n || "default");
                    if (t(o) != "object") return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return (n === "string" ? String : Number)(e);
                }
                function Se(e, t, n) {
                  return (
                    (t = ke(t)),
                    Re(
                      e,
                      Ee()
                        ? Reflect.construct(t, n || [], ke(e).constructor)
                        : t.apply(e, n),
                    )
                  );
                }
                function Re(e, n) {
                  if (n && (t(n) == "object" || typeof n == "function"))
                    return n;
                  if (n !== void 0)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return Le(e);
                }
                function Le(e) {
                  if (e === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                }
                function Ee() {
                  try {
                    var e = !Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    );
                  } catch (e) {}
                  return (Ee = function () {
                    return !!e;
                  })();
                }
                function ke(e) {
                  return (
                    (ke = Object.setPrototypeOf
                      ? Object.getPrototypeOf.bind()
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                    ke(e)
                  );
                }
                function Ie(e, t) {
                  if (typeof t != "function" && t !== null)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && Te(e, t));
                }
                function Te(e, t) {
                  return (
                    (Te = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (e, t) {
                          return ((e.__proto__ = t), e);
                        }),
                    Te(e, t)
                  );
                }
                var De = 3,
                  xe = "rgb(40, 40, 40)",
                  $e = 17,
                  Pe = 50,
                  Ne = 19,
                  Me = 75,
                  we = 50,
                  Ae = 1e3,
                  Fe = 50,
                  Oe = 1,
                  Be = 2,
                  We = 6,
                  qe = 16,
                  Ue = 19,
                  Ve = 22,
                  He = 30,
                  Ge = 113,
                  ze = 129,
                  je = 256,
                  Ke = 1,
                  Qe = 2,
                  Xe = 4,
                  Ye = 8,
                  Je = 16,
                  Ze = 1 << 24,
                  et = 1 << 25,
                  tt = 1 << 26,
                  nt = 1 << 27,
                  rt = 1 << 28,
                  ot = (r.default = (function (e) {
                    function t(e, n, r) {
                      var o;
                      if ((he(this, t), !e))
                        throw new Error("Must specify target");
                      if (!n)
                        throw new Error(
                          "Must specify URL, WebSocket or RTCDataChannel",
                        );
                      (window.isSecureContext ||
                        p.Error(
                          "noVNC requires a secure context (TLS). Expect crashes!",
                        ),
                        (o = Se(this, t)),
                        (o._target = e),
                        typeof n == "string"
                          ? (o._url = n)
                          : ((o._url = null), (o._rawChannel = n)),
                        (r = r || {}),
                        (o._rfbCredentials = r.credentials || {}),
                        (o._shared = "shared" in r ? !!r.shared : !0),
                        (o._repeaterID = r.repeaterID || ""),
                        (o._wsProtocols = r.wsProtocols || []),
                        (o._rfbConnectionState = ""),
                        (o._rfbInitState = ""),
                        (o._rfbAuthScheme = -1),
                        (o._rfbCleanDisconnect = !0),
                        (o._rfbRSAAESAuthenticationState = null),
                        (o._rfbVersion = 0),
                        (o._rfbMaxVersion = 3.8),
                        (o._rfbTightVNC = !1),
                        (o._rfbVeNCryptState = 0),
                        (o._rfbXvpVer = 0),
                        (o._fbWidth = 0),
                        (o._fbHeight = 0),
                        (o._fbName = ""),
                        (o._capabilities = { power: !1 }),
                        (o._supportsFence = !1),
                        (o._supportsContinuousUpdates = !1),
                        (o._enabledContinuousUpdates = !1),
                        (o._supportsSetDesktopSize = !1),
                        (o._screenID = 0),
                        (o._screenFlags = 0),
                        (o._qemuExtKeyEventSupported = !1),
                        (o._clipboardText = null),
                        (o._clipboardServerCapabilitiesActions = {}),
                        (o._clipboardServerCapabilitiesFormats = {}),
                        (o._sock = null),
                        (o._display = null),
                        (o._flushing = !1),
                        (o._keyboard = null),
                        (o._gestures = null),
                        (o._resizeObserver = null),
                        (o._disconnTimer = null),
                        (o._resizeTimeout = null),
                        (o._mouseMoveTimer = null),
                        (o._decoders = {}),
                        (o._FBU = {
                          rects: 0,
                          x: 0,
                          y: 0,
                          width: 0,
                          height: 0,
                          encoding: null,
                        }),
                        (o._mousePos = {}),
                        (o._mouseButtonMask = 0),
                        (o._mouseLastMoveTime = 0),
                        (o._viewportDragging = !1),
                        (o._viewportDragPos = {}),
                        (o._viewportHasMoved = !1),
                        (o._accumulatedWheelDeltaX = 0),
                        (o._accumulatedWheelDeltaY = 0),
                        (o._gestureLastTapTime = null),
                        (o._gestureFirstDoubleTapEv = null),
                        (o._gestureLastMagnitudeX = 0),
                        (o._gestureLastMagnitudeY = 0),
                        (o._eventHandlers = {
                          focusCanvas: o._focusCanvas.bind(o),
                          handleResize: o._handleResize.bind(o),
                          handleMouse: o._handleMouse.bind(o),
                          handleWheel: o._handleWheel.bind(o),
                          handleGesture: o._handleGesture.bind(o),
                          handleRSAAESCredentialsRequired:
                            o._handleRSAAESCredentialsRequired.bind(o),
                          handleRSAAESServerVerification:
                            o._handleRSAAESServerVerification.bind(o),
                        }),
                        p.Debug(">> RFB.constructor"),
                        (o._screen = document.createElement("div")),
                        (o._screen.style.display = "flex"),
                        (o._screen.style.width = "100%"),
                        (o._screen.style.height = "100%"),
                        (o._screen.style.overflow = "auto"),
                        (o._screen.style.background = xe),
                        (o._canvas = document.createElement("canvas")),
                        (o._canvas.style.margin = "auto"),
                        (o._canvas.style.outline = "none"),
                        (o._canvas.width = 0),
                        (o._canvas.height = 0),
                        (o._canvas.tabIndex = -1),
                        o._screen.appendChild(o._canvas),
                        (o._cursor = new I.default()),
                        (o._cursorImage = t.cursors.none),
                        (o._decoders[F.encodings.encodingRaw] =
                          new W.default()),
                        (o._decoders[F.encodings.encodingCopyRect] =
                          new q.default()),
                        (o._decoders[F.encodings.encodingRRE] =
                          new U.default()),
                        (o._decoders[F.encodings.encodingHextile] =
                          new Z.default()),
                        (o._decoders[F.encodings.encodingTight] =
                          new ee.default()),
                        (o._decoders[F.encodings.encodingTightPNG] =
                          new te.default()),
                        (o._decoders[F.encodings.encodingZRLE] =
                          new ne.default()),
                        (o._decoders[F.encodings.encodingJPEG] =
                          new re.default()));
                      try {
                        o._display = new C.default(o._canvas);
                      } catch (e) {
                        throw (p.Error("Display exception: " + e), e);
                      }
                      return (
                        (o._keyboard = new R.default(o._canvas)),
                        (o._keyboard.onkeyevent = o._handleKeyEvent.bind(o)),
                        (o._remoteCapsLock = null),
                        (o._remoteNumLock = null),
                        (o._gestures = new k.default()),
                        (o._sock = new T.default()),
                        o._sock.on("open", o._socketOpen.bind(o)),
                        o._sock.on("close", o._socketClose.bind(o)),
                        o._sock.on("message", o._handleMessage.bind(o)),
                        o._sock.on("error", o._socketError.bind(o)),
                        (o._expectedClientWidth = null),
                        (o._expectedClientHeight = null),
                        (o._resizeObserver = new ResizeObserver(
                          o._eventHandlers.handleResize,
                        )),
                        o._updateConnectionState("connecting"),
                        p.Debug("<< RFB.constructor"),
                        (o.dragViewport = !1),
                        (o.focusOnClick = !0),
                        (o._viewOnly = !1),
                        (o._clipViewport = !1),
                        (o._clippingViewport = !1),
                        (o._scaleViewport = !1),
                        (o._resizeSession = !1),
                        (o._showDotCursor = !1),
                        r.showDotCursor !== void 0 &&
                          (p.Warn(
                            "Specifying showDotCursor as a RFB constructor argument is deprecated",
                          ),
                          (o._showDotCursor = r.showDotCursor)),
                        (o._qualityLevel = 6),
                        (o._compressionLevel = 2),
                        o
                      );
                    }
                    return (
                      Ie(t, e),
                      Ce(
                        t,
                        [
                          {
                            key: "viewOnly",
                            get: function () {
                              return this._viewOnly;
                            },
                            set: function (t) {
                              ((this._viewOnly = t),
                                (this._rfbConnectionState === "connecting" ||
                                  this._rfbConnectionState === "connected") &&
                                  (t
                                    ? this._keyboard.ungrab()
                                    : this._keyboard.grab()));
                            },
                          },
                          {
                            key: "capabilities",
                            get: function () {
                              return this._capabilities;
                            },
                          },
                          {
                            key: "clippingViewport",
                            get: function () {
                              return this._clippingViewport;
                            },
                          },
                          {
                            key: "_setClippingViewport",
                            value: function (t) {
                              t !== this._clippingViewport &&
                                ((this._clippingViewport = t),
                                this.dispatchEvent(
                                  new CustomEvent("clippingviewport", {
                                    detail: this._clippingViewport,
                                  }),
                                ));
                            },
                          },
                          {
                            key: "touchButton",
                            get: function () {
                              return 0;
                            },
                            set: function (t) {
                              p.Warn("Using old API!");
                            },
                          },
                          {
                            key: "clipViewport",
                            get: function () {
                              return this._clipViewport;
                            },
                            set: function (t) {
                              ((this._clipViewport = t), this._updateClip());
                            },
                          },
                          {
                            key: "scaleViewport",
                            get: function () {
                              return this._scaleViewport;
                            },
                            set: function (t) {
                              ((this._scaleViewport = t),
                                t && this._clipViewport && this._updateClip(),
                                this._updateScale(),
                                !t && this._clipViewport && this._updateClip());
                            },
                          },
                          {
                            key: "resizeSession",
                            get: function () {
                              return this._resizeSession;
                            },
                            set: function (t) {
                              ((this._resizeSession = t),
                                t && this._requestRemoteResize());
                            },
                          },
                          {
                            key: "showDotCursor",
                            get: function () {
                              return this._showDotCursor;
                            },
                            set: function (t) {
                              ((this._showDotCursor = t),
                                this._refreshCursor());
                            },
                          },
                          {
                            key: "background",
                            get: function () {
                              return this._screen.style.background;
                            },
                            set: function (t) {
                              this._screen.style.background = t;
                            },
                          },
                          {
                            key: "qualityLevel",
                            get: function () {
                              return this._qualityLevel;
                            },
                            set: function (t) {
                              if (!Number.isInteger(t) || t < 0 || t > 9) {
                                p.Error(
                                  "qualityLevel must be an integer between 0 and 9",
                                );
                                return;
                              }
                              this._qualityLevel !== t &&
                                ((this._qualityLevel = t),
                                this._rfbConnectionState === "connected" &&
                                  this._sendEncodings());
                            },
                          },
                          {
                            key: "compressionLevel",
                            get: function () {
                              return this._compressionLevel;
                            },
                            set: function (t) {
                              if (!Number.isInteger(t) || t < 0 || t > 9) {
                                p.Error(
                                  "compressionLevel must be an integer between 0 and 9",
                                );
                                return;
                              }
                              this._compressionLevel !== t &&
                                ((this._compressionLevel = t),
                                this._rfbConnectionState === "connected" &&
                                  this._sendEncodings());
                            },
                          },
                          {
                            key: "disconnect",
                            value: function () {
                              (this._updateConnectionState("disconnecting"),
                                this._sock.off("error"),
                                this._sock.off("message"),
                                this._sock.off("open"),
                                this._rfbRSAAESAuthenticationState !== null &&
                                  this._rfbRSAAESAuthenticationState.disconnect());
                            },
                          },
                          {
                            key: "approveServer",
                            value: function () {
                              this._rfbRSAAESAuthenticationState !== null &&
                                this._rfbRSAAESAuthenticationState.approveServer();
                            },
                          },
                          {
                            key: "sendCredentials",
                            value: function (t) {
                              ((this._rfbCredentials = t),
                                this._resumeAuthentication());
                            },
                          },
                          {
                            key: "sendCtrlAltDel",
                            value: function () {
                              this._rfbConnectionState !== "connected" ||
                                this._viewOnly ||
                                (p.Info("Sending Ctrl-Alt-Del"),
                                this.sendKey(
                                  D.default.XK_Control_L,
                                  "ControlLeft",
                                  !0,
                                ),
                                this.sendKey(D.default.XK_Alt_L, "AltLeft", !0),
                                this.sendKey(D.default.XK_Delete, "Delete", !0),
                                this.sendKey(D.default.XK_Delete, "Delete", !1),
                                this.sendKey(D.default.XK_Alt_L, "AltLeft", !1),
                                this.sendKey(
                                  D.default.XK_Control_L,
                                  "ControlLeft",
                                  !1,
                                ));
                            },
                          },
                          {
                            key: "machineShutdown",
                            value: function () {
                              this._xvpOp(1, 2);
                            },
                          },
                          {
                            key: "machineReboot",
                            value: function () {
                              this._xvpOp(1, 3);
                            },
                          },
                          {
                            key: "machineReset",
                            value: function () {
                              this._xvpOp(1, 4);
                            },
                          },
                          {
                            key: "sendKey",
                            value: function (n, r, o) {
                              if (
                                !(
                                  this._rfbConnectionState !== "connected" ||
                                  this._viewOnly
                                )
                              ) {
                                if (o === void 0) {
                                  (this.sendKey(n, r, !0),
                                    this.sendKey(n, r, !1));
                                  return;
                                }
                                var e = x.default[r];
                                if (this._qemuExtKeyEventSupported && e)
                                  ((n = n || 0),
                                    p.Info(
                                      "Sending key (" +
                                        (o ? "down" : "up") +
                                        "): keysym " +
                                        n +
                                        ", scancode " +
                                        e,
                                    ),
                                    t.messages.QEMUExtendedKeyEvent(
                                      this._sock,
                                      n,
                                      o,
                                      e,
                                    ));
                                else {
                                  if (!n) return;
                                  (p.Info(
                                    "Sending keysym (" +
                                      (o ? "down" : "up") +
                                      "): " +
                                      n,
                                  ),
                                    t.messages.keyEvent(
                                      this._sock,
                                      n,
                                      o ? 1 : 0,
                                    ));
                                }
                              }
                            },
                          },
                          {
                            key: "focus",
                            value: function (t) {
                              this._canvas.focus(t);
                            },
                          },
                          {
                            key: "blur",
                            value: function () {
                              this._canvas.blur();
                            },
                          },
                          {
                            key: "clipboardPasteFrom",
                            value: function (n) {
                              if (
                                !(
                                  this._rfbConnectionState !== "connected" ||
                                  this._viewOnly
                                )
                              )
                                if (
                                  this._clipboardServerCapabilitiesFormats[
                                    Ke
                                  ] &&
                                  this._clipboardServerCapabilitiesActions[nt]
                                )
                                  ((this._clipboardText = n),
                                    t.messages.extendedClipboardNotify(
                                      this._sock,
                                      [Ke],
                                    ));
                                else {
                                  var e, r, o;
                                  e = 0;
                                  var a = _e(n),
                                    i;
                                  try {
                                    for (a.s(); !(i = a.n()).done; ) {
                                      var l = i.value;
                                      e++;
                                    }
                                  } catch (e) {
                                    a.e(e);
                                  } finally {
                                    a.f();
                                  }
                                  ((o = new Uint8Array(e)), (r = 0));
                                  var s = _e(n),
                                    u;
                                  try {
                                    for (s.s(); !(u = s.n()).done; ) {
                                      var c = u.value,
                                        d = c.codePointAt(0);
                                      (d > 255 && (d = 63), (o[r++] = d));
                                    }
                                  } catch (e) {
                                    s.e(e);
                                  } finally {
                                    s.f();
                                  }
                                  t.messages.clientCutText(this._sock, o);
                                }
                            },
                          },
                          {
                            key: "getImageData",
                            value: function () {
                              return this._display.getImageData();
                            },
                          },
                          {
                            key: "toDataURL",
                            value: function (t, n) {
                              return this._display.toDataURL(t, n);
                            },
                          },
                          {
                            key: "toBlob",
                            value: function (t, n, r) {
                              return this._display.toBlob(t, n, r);
                            },
                          },
                          {
                            key: "_connect",
                            value: function () {
                              if ((p.Debug(">> RFB.connect"), this._url))
                                (p.Info("connecting to ".concat(this._url)),
                                  this._sock.open(
                                    this._url,
                                    this._wsProtocols,
                                  ));
                              else {
                                if (
                                  (p.Info(
                                    "attaching ".concat(
                                      this._rawChannel,
                                      " to Websock",
                                    ),
                                  ),
                                  this._sock.attach(this._rawChannel),
                                  this._sock.readyState === "closed")
                                )
                                  throw Error(
                                    "Cannot use already closed WebSocket/RTCDataChannel",
                                  );
                                this._sock.readyState === "open" &&
                                  this._socketOpen();
                              }
                              (this._target.appendChild(this._screen),
                                this._gestures.attach(this._canvas),
                                this._cursor.attach(this._canvas),
                                this._refreshCursor(),
                                this._resizeObserver.observe(this._screen),
                                this._canvas.addEventListener(
                                  "mousedown",
                                  this._eventHandlers.focusCanvas,
                                ),
                                this._canvas.addEventListener(
                                  "touchstart",
                                  this._eventHandlers.focusCanvas,
                                ),
                                this._canvas.addEventListener(
                                  "mousedown",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.addEventListener(
                                  "mouseup",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.addEventListener(
                                  "mousemove",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.addEventListener(
                                  "click",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.addEventListener(
                                  "contextmenu",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.addEventListener(
                                  "wheel",
                                  this._eventHandlers.handleWheel,
                                ),
                                this._canvas.addEventListener(
                                  "gesturestart",
                                  this._eventHandlers.handleGesture,
                                ),
                                this._canvas.addEventListener(
                                  "gesturemove",
                                  this._eventHandlers.handleGesture,
                                ),
                                this._canvas.addEventListener(
                                  "gestureend",
                                  this._eventHandlers.handleGesture,
                                ),
                                p.Debug("<< RFB.connect"));
                            },
                          },
                          {
                            key: "_disconnect",
                            value: function () {
                              (p.Debug(">> RFB.disconnect"),
                                this._cursor.detach(),
                                this._canvas.removeEventListener(
                                  "gesturestart",
                                  this._eventHandlers.handleGesture,
                                ),
                                this._canvas.removeEventListener(
                                  "gesturemove",
                                  this._eventHandlers.handleGesture,
                                ),
                                this._canvas.removeEventListener(
                                  "gestureend",
                                  this._eventHandlers.handleGesture,
                                ),
                                this._canvas.removeEventListener(
                                  "wheel",
                                  this._eventHandlers.handleWheel,
                                ),
                                this._canvas.removeEventListener(
                                  "mousedown",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.removeEventListener(
                                  "mouseup",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.removeEventListener(
                                  "mousemove",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.removeEventListener(
                                  "click",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.removeEventListener(
                                  "contextmenu",
                                  this._eventHandlers.handleMouse,
                                ),
                                this._canvas.removeEventListener(
                                  "mousedown",
                                  this._eventHandlers.focusCanvas,
                                ),
                                this._canvas.removeEventListener(
                                  "touchstart",
                                  this._eventHandlers.focusCanvas,
                                ),
                                this._resizeObserver.disconnect(),
                                this._keyboard.ungrab(),
                                this._gestures.detach(),
                                this._sock.close());
                              try {
                                this._target.removeChild(this._screen);
                              } catch (e) {
                                if (e.name !== "NotFoundError") throw e;
                              }
                              (clearTimeout(this._resizeTimeout),
                                clearTimeout(this._mouseMoveTimer),
                                p.Debug("<< RFB.disconnect"));
                            },
                          },
                          {
                            key: "_socketOpen",
                            value: function () {
                              this._rfbConnectionState === "connecting" &&
                              this._rfbInitState === ""
                                ? ((this._rfbInitState = "ProtocolVersion"),
                                  p.Debug("Starting VNC handshake"))
                                : this._fail(
                                    "Unexpected server connection while " +
                                      this._rfbConnectionState,
                                  );
                            },
                          },
                          {
                            key: "_socketClose",
                            value: function (t) {
                              p.Debug("WebSocket on-close event");
                              var e = "";
                              switch (
                                (t.code &&
                                  ((e = "(code: " + t.code),
                                  t.reason && (e += ", reason: " + t.reason),
                                  (e += ")")),
                                this._rfbConnectionState)
                              ) {
                                case "connecting":
                                  this._fail("Connection closed " + e);
                                  break;
                                case "connected":
                                  (this._updateConnectionState("disconnecting"),
                                    this._updateConnectionState(
                                      "disconnected",
                                    ));
                                  break;
                                case "disconnecting":
                                  this._updateConnectionState("disconnected");
                                  break;
                                case "disconnected":
                                  this._fail(
                                    "Unexpected server disconnect when already disconnected " +
                                      e,
                                  );
                                  break;
                                default:
                                  this._fail(
                                    "Unexpected server disconnect before connecting " +
                                      e,
                                  );
                                  break;
                              }
                              (this._sock.off("close"),
                                (this._rawChannel = null));
                            },
                          },
                          {
                            key: "_socketError",
                            value: function (t) {
                              p.Warn("WebSocket on-error event");
                            },
                          },
                          {
                            key: "_focusCanvas",
                            value: function (t) {
                              this.focusOnClick &&
                                this.focus({ preventScroll: !0 });
                            },
                          },
                          {
                            key: "_setDesktopName",
                            value: function (t) {
                              ((this._fbName = t),
                                this.dispatchEvent(
                                  new CustomEvent("desktopname", {
                                    detail: { name: this._fbName },
                                  }),
                                ));
                            },
                          },
                          {
                            key: "_saveExpectedClientSize",
                            value: function () {
                              ((this._expectedClientWidth =
                                this._screen.clientWidth),
                                (this._expectedClientHeight =
                                  this._screen.clientHeight));
                            },
                          },
                          {
                            key: "_currentClientSize",
                            value: function () {
                              return [
                                this._screen.clientWidth,
                                this._screen.clientHeight,
                              ];
                            },
                          },
                          {
                            key: "_clientHasExpectedSize",
                            value: function () {
                              var e = this._currentClientSize(),
                                t = ce(e, 2),
                                n = t[0],
                                r = t[1];
                              return (
                                n == this._expectedClientWidth &&
                                r == this._expectedClientHeight
                              );
                            },
                          },
                          {
                            key: "_handleResize",
                            value: function () {
                              var e = this;
                              this._clientHasExpectedSize() ||
                                (window.requestAnimationFrame(function () {
                                  (e._updateClip(), e._updateScale());
                                }),
                                this._resizeSession &&
                                  (clearTimeout(this._resizeTimeout),
                                  (this._resizeTimeout = setTimeout(
                                    this._requestRemoteResize.bind(this),
                                    500,
                                  ))));
                            },
                          },
                          {
                            key: "_updateClip",
                            value: function () {
                              var e = this._display.clipViewport,
                                t = this._clipViewport;
                              if (
                                (this._scaleViewport && (t = !1),
                                e !== t && (this._display.clipViewport = t),
                                t)
                              ) {
                                var n = this._screenSize();
                                (this._display.viewportChangeSize(n.w, n.h),
                                  this._fixScrollbars(),
                                  this._setClippingViewport(
                                    n.w < this._display.width ||
                                      n.h < this._display.height,
                                  ));
                              } else this._setClippingViewport(!1);
                              e !== t && this._saveExpectedClientSize();
                            },
                          },
                          {
                            key: "_updateScale",
                            value: function () {
                              if (!this._scaleViewport) this._display.scale = 1;
                              else {
                                var e = this._screenSize();
                                this._display.autoscale(e.w, e.h);
                              }
                              this._fixScrollbars();
                            },
                          },
                          {
                            key: "_requestRemoteResize",
                            value: function () {
                              if (
                                (clearTimeout(this._resizeTimeout),
                                (this._resizeTimeout = null),
                                !(
                                  !this._resizeSession ||
                                  this._viewOnly ||
                                  !this._supportsSetDesktopSize
                                ))
                              ) {
                                var e = this._screenSize();
                                (t.messages.setDesktopSize(
                                  this._sock,
                                  Math.floor(e.w),
                                  Math.floor(e.h),
                                  this._screenID,
                                  this._screenFlags,
                                ),
                                  p.Debug(
                                    "Requested new desktop size: " +
                                      e.w +
                                      "x" +
                                      e.h,
                                  ));
                              }
                            },
                          },
                          {
                            key: "_screenSize",
                            value: function () {
                              var e = this._screen.getBoundingClientRect();
                              return { w: e.width, h: e.height };
                            },
                          },
                          {
                            key: "_fixScrollbars",
                            value: function () {
                              var e = this._screen.style.overflow;
                              ((this._screen.style.overflow = "hidden"),
                                this._screen.getBoundingClientRect(),
                                (this._screen.style.overflow = e));
                            },
                          },
                          {
                            key: "_updateConnectionState",
                            value: function (t) {
                              var e = this,
                                n = this._rfbConnectionState;
                              if (t === n) {
                                p.Debug(
                                  "Already in state '" + t + "', ignoring",
                                );
                                return;
                              }
                              if (n === "disconnected") {
                                p.Error(
                                  "Tried changing state of a disconnected RFB object",
                                );
                                return;
                              }
                              switch (t) {
                                case "connected":
                                  if (n !== "connecting") {
                                    p.Error(
                                      "Bad transition to connected state, previous connection state: " +
                                        n,
                                    );
                                    return;
                                  }
                                  break;
                                case "disconnected":
                                  if (n !== "disconnecting") {
                                    p.Error(
                                      "Bad transition to disconnected state, previous connection state: " +
                                        n,
                                    );
                                    return;
                                  }
                                  break;
                                case "connecting":
                                  if (n !== "") {
                                    p.Error(
                                      "Bad transition to connecting state, previous connection state: " +
                                        n,
                                    );
                                    return;
                                  }
                                  break;
                                case "disconnecting":
                                  if (n !== "connected" && n !== "connecting") {
                                    p.Error(
                                      "Bad transition to disconnecting state, previous connection state: " +
                                        n,
                                    );
                                    return;
                                  }
                                  break;
                                default:
                                  p.Error("Unknown connection state: " + t);
                                  return;
                              }
                              switch (
                                ((this._rfbConnectionState = t),
                                p.Debug(
                                  "New state '" + t + "', was '" + n + "'.",
                                ),
                                this._disconnTimer &&
                                  t !== "disconnecting" &&
                                  (p.Debug("Clearing disconnect timer"),
                                  clearTimeout(this._disconnTimer),
                                  (this._disconnTimer = null),
                                  this._sock.off("close")),
                                t)
                              ) {
                                case "connecting":
                                  this._connect();
                                  break;
                                case "connected":
                                  this.dispatchEvent(
                                    new CustomEvent("connect", { detail: {} }),
                                  );
                                  break;
                                case "disconnecting":
                                  (this._disconnect(),
                                    (this._disconnTimer = setTimeout(
                                      function () {
                                        (p.Error("Disconnection timed out."),
                                          e._updateConnectionState(
                                            "disconnected",
                                          ));
                                      },
                                      De * 1e3,
                                    )));
                                  break;
                                case "disconnected":
                                  this.dispatchEvent(
                                    new CustomEvent("disconnect", {
                                      detail: {
                                        clean: this._rfbCleanDisconnect,
                                      },
                                    }),
                                  );
                                  break;
                              }
                            },
                          },
                          {
                            key: "_fail",
                            value: function (t) {
                              switch (this._rfbConnectionState) {
                                case "disconnecting":
                                  p.Error("Failed when disconnecting: " + t);
                                  break;
                                case "connected":
                                  p.Error("Failed while connected: " + t);
                                  break;
                                case "connecting":
                                  p.Error("Failed when connecting: " + t);
                                  break;
                                default:
                                  p.Error("RFB failure: " + t);
                                  break;
                              }
                              return (
                                (this._rfbCleanDisconnect = !1),
                                this._updateConnectionState("disconnecting"),
                                this._updateConnectionState("disconnected"),
                                !1
                              );
                            },
                          },
                          {
                            key: "_setCapability",
                            value: function (t, n) {
                              ((this._capabilities[t] = n),
                                this.dispatchEvent(
                                  new CustomEvent("capabilities", {
                                    detail: {
                                      capabilities: this._capabilities,
                                    },
                                  }),
                                ));
                            },
                          },
                          {
                            key: "_handleMessage",
                            value: function () {
                              if (this._sock.rQwait("message", 1)) {
                                p.Warn(
                                  "handleMessage called on an empty receive queue",
                                );
                                return;
                              }
                              switch (this._rfbConnectionState) {
                                case "disconnected":
                                  p.Error("Got data while disconnected");
                                  break;
                                case "connected":
                                  for (
                                    ;
                                    !(
                                      this._flushing ||
                                      !this._normalMsg() ||
                                      this._sock.rQwait("message", 1)
                                    );
                                  );
                                  break;
                                case "connecting":
                                  for (
                                    ;
                                    this._rfbConnectionState === "connecting" &&
                                    this._initMsg();
                                  );
                                  break;
                                default:
                                  p.Error("Got data while in an invalid state");
                                  break;
                              }
                            },
                          },
                          {
                            key: "_handleKeyEvent",
                            value: function (t, n, r, o, a) {
                              (n == "CapsLock" &&
                                r &&
                                (this._remoteCapsLock = null),
                                this._remoteCapsLock !== null &&
                                  a !== null &&
                                  this._remoteCapsLock !== a &&
                                  r &&
                                  (p.Debug("Fixing remote caps lock"),
                                  this.sendKey(
                                    D.default.XK_Caps_Lock,
                                    "CapsLock",
                                    !0,
                                  ),
                                  this.sendKey(
                                    D.default.XK_Caps_Lock,
                                    "CapsLock",
                                    !1,
                                  ),
                                  (this._remoteCapsLock = null)),
                                n == "NumLock" &&
                                  r &&
                                  (this._remoteNumLock = null),
                                this._remoteNumLock !== null &&
                                  o !== null &&
                                  this._remoteNumLock !== o &&
                                  r &&
                                  (p.Debug("Fixing remote num lock"),
                                  this.sendKey(
                                    D.default.XK_Num_Lock,
                                    "NumLock",
                                    !0,
                                  ),
                                  this.sendKey(
                                    D.default.XK_Num_Lock,
                                    "NumLock",
                                    !1,
                                  ),
                                  (this._remoteNumLock = null)),
                                this.sendKey(t, n, r));
                            },
                          },
                          {
                            key: "_handleMouse",
                            value: function (t) {
                              if (
                                !(
                                  t.type === "click" &&
                                  t.target !== this._canvas
                                ) &&
                                (t.stopPropagation(),
                                t.preventDefault(),
                                !(
                                  t.type === "click" || t.type === "contextmenu"
                                ))
                              ) {
                                var e = (0, g.clientToElement)(
                                  t.clientX,
                                  t.clientY,
                                  this._canvas,
                                );
                                switch (t.type) {
                                  case "mousedown":
                                    ((0, h.setCapture)(this._canvas),
                                      this._handleMouseButton(
                                        e.x,
                                        e.y,
                                        !0,
                                        1 << t.button,
                                      ));
                                    break;
                                  case "mouseup":
                                    this._handleMouseButton(
                                      e.x,
                                      e.y,
                                      !1,
                                      1 << t.button,
                                    );
                                    break;
                                  case "mousemove":
                                    this._handleMouseMove(e.x, e.y);
                                    break;
                                }
                              }
                            },
                          },
                          {
                            key: "_handleMouseButton",
                            value: function (t, n, r, o) {
                              if (this.dragViewport)
                                if (r && !this._viewportDragging) {
                                  ((this._viewportDragging = !0),
                                    (this._viewportDragPos = { x: t, y: n }),
                                    (this._viewportHasMoved = !1));
                                  return;
                                } else {
                                  if (
                                    ((this._viewportDragging = !1),
                                    this._viewportHasMoved)
                                  )
                                    return;
                                  this._sendMouse(t, n, o);
                                }
                              (this._mouseMoveTimer !== null &&
                                (clearTimeout(this._mouseMoveTimer),
                                (this._mouseMoveTimer = null),
                                this._sendMouse(t, n, this._mouseButtonMask)),
                                r
                                  ? (this._mouseButtonMask |= o)
                                  : (this._mouseButtonMask &= ~o),
                                this._sendMouse(t, n, this._mouseButtonMask));
                            },
                          },
                          {
                            key: "_handleMouseMove",
                            value: function (t, n) {
                              var e = this;
                              if (this._viewportDragging) {
                                var r = this._viewportDragPos.x - t,
                                  o = this._viewportDragPos.y - n;
                                (this._viewportHasMoved ||
                                  Math.abs(r) > f.dragThreshold ||
                                  Math.abs(o) > f.dragThreshold) &&
                                  ((this._viewportHasMoved = !0),
                                  (this._viewportDragPos = { x: t, y: n }),
                                  this._display.viewportChangePos(r, o));
                                return;
                              }
                              if (
                                ((this._mousePos = { x: t, y: n }),
                                this._mouseMoveTimer == null)
                              ) {
                                var a = Date.now() - this._mouseLastMoveTime;
                                a > $e
                                  ? (this._sendMouse(
                                      t,
                                      n,
                                      this._mouseButtonMask,
                                    ),
                                    (this._mouseLastMoveTime = Date.now()))
                                  : (this._mouseMoveTimer = setTimeout(
                                      function () {
                                        e._handleDelayedMouseMove();
                                      },
                                      $e - a,
                                    ));
                              }
                            },
                          },
                          {
                            key: "_handleDelayedMouseMove",
                            value: function () {
                              ((this._mouseMoveTimer = null),
                                this._sendMouse(
                                  this._mousePos.x,
                                  this._mousePos.y,
                                  this._mouseButtonMask,
                                ),
                                (this._mouseLastMoveTime = Date.now()));
                            },
                          },
                          {
                            key: "_sendMouse",
                            value: function (n, r, o) {
                              this._rfbConnectionState === "connected" &&
                                (this._viewOnly ||
                                  t.messages.pointerEvent(
                                    this._sock,
                                    this._display.absX(n),
                                    this._display.absY(r),
                                    o,
                                  ));
                            },
                          },
                          {
                            key: "_handleWheel",
                            value: function (t) {
                              if (
                                this._rfbConnectionState === "connected" &&
                                !this._viewOnly
                              ) {
                                (t.stopPropagation(), t.preventDefault());
                                var e = (0, g.clientToElement)(
                                    t.clientX,
                                    t.clientY,
                                    this._canvas,
                                  ),
                                  n = t.deltaX,
                                  r = t.deltaY;
                                (t.deltaMode !== 0 && ((n *= Ne), (r *= Ne)),
                                  (this._accumulatedWheelDeltaX += n),
                                  (this._accumulatedWheelDeltaY += r),
                                  Math.abs(this._accumulatedWheelDeltaX) >=
                                    Pe &&
                                    (this._accumulatedWheelDeltaX < 0
                                      ? (this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !0,
                                          32,
                                        ),
                                        this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !1,
                                          32,
                                        ))
                                      : this._accumulatedWheelDeltaX > 0 &&
                                        (this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !0,
                                          64,
                                        ),
                                        this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !1,
                                          64,
                                        )),
                                    (this._accumulatedWheelDeltaX = 0)),
                                  Math.abs(this._accumulatedWheelDeltaY) >=
                                    Pe &&
                                    (this._accumulatedWheelDeltaY < 0
                                      ? (this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !0,
                                          8,
                                        ),
                                        this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !1,
                                          8,
                                        ))
                                      : this._accumulatedWheelDeltaY > 0 &&
                                        (this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !0,
                                          16,
                                        ),
                                        this._handleMouseButton(
                                          e.x,
                                          e.y,
                                          !1,
                                          16,
                                        )),
                                    (this._accumulatedWheelDeltaY = 0)));
                              }
                            },
                          },
                          {
                            key: "_fakeMouseMove",
                            value: function (t, n, r) {
                              (this._handleMouseMove(n, r),
                                this._cursor.move(
                                  t.detail.clientX,
                                  t.detail.clientY,
                                ));
                            },
                          },
                          {
                            key: "_handleTapEvent",
                            value: function (t, n) {
                              var e = (0, g.clientToElement)(
                                t.detail.clientX,
                                t.detail.clientY,
                                this._canvas,
                              );
                              if (
                                this._gestureLastTapTime !== null &&
                                Date.now() - this._gestureLastTapTime < Ae &&
                                this._gestureFirstDoubleTapEv.detail.type ===
                                  t.detail.type
                              ) {
                                var r =
                                    this._gestureFirstDoubleTapEv.detail
                                      .clientX - t.detail.clientX,
                                  o =
                                    this._gestureFirstDoubleTapEv.detail
                                      .clientY - t.detail.clientY,
                                  a = Math.hypot(r, o);
                                a < Fe
                                  ? (e = (0, g.clientToElement)(
                                      this._gestureFirstDoubleTapEv.detail
                                        .clientX,
                                      this._gestureFirstDoubleTapEv.detail
                                        .clientY,
                                      this._canvas,
                                    ))
                                  : (this._gestureFirstDoubleTapEv = t);
                              } else this._gestureFirstDoubleTapEv = t;
                              ((this._gestureLastTapTime = Date.now()),
                                this._fakeMouseMove(
                                  this._gestureFirstDoubleTapEv,
                                  e.x,
                                  e.y,
                                ),
                                this._handleMouseButton(e.x, e.y, !0, n),
                                this._handleMouseButton(e.x, e.y, !1, n));
                            },
                          },
                          {
                            key: "_handleGesture",
                            value: function (t) {
                              var e,
                                n = (0, g.clientToElement)(
                                  t.detail.clientX,
                                  t.detail.clientY,
                                  this._canvas,
                                );
                              switch (t.type) {
                                case "gesturestart":
                                  switch (t.detail.type) {
                                    case "onetap":
                                      this._handleTapEvent(t, 1);
                                      break;
                                    case "twotap":
                                      this._handleTapEvent(t, 4);
                                      break;
                                    case "threetap":
                                      this._handleTapEvent(t, 2);
                                      break;
                                    case "drag":
                                      (this._fakeMouseMove(t, n.x, n.y),
                                        this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          1,
                                        ));
                                      break;
                                    case "longpress":
                                      (this._fakeMouseMove(t, n.x, n.y),
                                        this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          4,
                                        ));
                                      break;
                                    case "twodrag":
                                      ((this._gestureLastMagnitudeX =
                                        t.detail.magnitudeX),
                                        (this._gestureLastMagnitudeY =
                                          t.detail.magnitudeY),
                                        this._fakeMouseMove(t, n.x, n.y));
                                      break;
                                    case "pinch":
                                      ((this._gestureLastMagnitudeX =
                                        Math.hypot(
                                          t.detail.magnitudeX,
                                          t.detail.magnitudeY,
                                        )),
                                        this._fakeMouseMove(t, n.x, n.y));
                                      break;
                                  }
                                  break;
                                case "gesturemove":
                                  switch (t.detail.type) {
                                    case "onetap":
                                    case "twotap":
                                    case "threetap":
                                      break;
                                    case "drag":
                                    case "longpress":
                                      this._fakeMouseMove(t, n.x, n.y);
                                      break;
                                    case "twodrag":
                                      for (
                                        this._fakeMouseMove(t, n.x, n.y);
                                        t.detail.magnitudeY -
                                          this._gestureLastMagnitudeY >
                                        we;
                                      )
                                        (this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          8,
                                        ),
                                          this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !1,
                                            8,
                                          ),
                                          (this._gestureLastMagnitudeY += we));
                                      for (
                                        ;
                                        t.detail.magnitudeY -
                                          this._gestureLastMagnitudeY <
                                        -we;
                                      )
                                        (this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          16,
                                        ),
                                          this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !1,
                                            16,
                                          ),
                                          (this._gestureLastMagnitudeY -= we));
                                      for (
                                        ;
                                        t.detail.magnitudeX -
                                          this._gestureLastMagnitudeX >
                                        we;
                                      )
                                        (this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          32,
                                        ),
                                          this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !1,
                                            32,
                                          ),
                                          (this._gestureLastMagnitudeX += we));
                                      for (
                                        ;
                                        t.detail.magnitudeX -
                                          this._gestureLastMagnitudeX <
                                        -we;
                                      )
                                        (this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !0,
                                          64,
                                        ),
                                          this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !1,
                                            64,
                                          ),
                                          (this._gestureLastMagnitudeX -= we));
                                      break;
                                    case "pinch":
                                      if (
                                        (this._fakeMouseMove(t, n.x, n.y),
                                        (e = Math.hypot(
                                          t.detail.magnitudeX,
                                          t.detail.magnitudeY,
                                        )),
                                        Math.abs(
                                          e - this._gestureLastMagnitudeX,
                                        ) > Me)
                                      ) {
                                        for (
                                          this._handleKeyEvent(
                                            D.default.XK_Control_L,
                                            "ControlLeft",
                                            !0,
                                          );
                                          e - this._gestureLastMagnitudeX > Me;
                                        )
                                          (this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !0,
                                            8,
                                          ),
                                            this._handleMouseButton(
                                              n.x,
                                              n.y,
                                              !1,
                                              8,
                                            ),
                                            (this._gestureLastMagnitudeX +=
                                              Me));
                                        for (
                                          ;
                                          e - this._gestureLastMagnitudeX < -Me;
                                        )
                                          (this._handleMouseButton(
                                            n.x,
                                            n.y,
                                            !0,
                                            16,
                                          ),
                                            this._handleMouseButton(
                                              n.x,
                                              n.y,
                                              !1,
                                              16,
                                            ),
                                            (this._gestureLastMagnitudeX -=
                                              Me));
                                      }
                                      this._handleKeyEvent(
                                        D.default.XK_Control_L,
                                        "ControlLeft",
                                        !1,
                                      );
                                      break;
                                  }
                                  break;
                                case "gestureend":
                                  switch (t.detail.type) {
                                    case "onetap":
                                    case "twotap":
                                    case "threetap":
                                    case "pinch":
                                    case "twodrag":
                                      break;
                                    case "drag":
                                      (this._fakeMouseMove(t, n.x, n.y),
                                        this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !1,
                                          1,
                                        ));
                                      break;
                                    case "longpress":
                                      (this._fakeMouseMove(t, n.x, n.y),
                                        this._handleMouseButton(
                                          n.x,
                                          n.y,
                                          !1,
                                          4,
                                        ));
                                      break;
                                  }
                                  break;
                              }
                            },
                          },
                          {
                            key: "_negotiateProtocolVersion",
                            value: function () {
                              if (this._sock.rQwait("version", 12)) return !1;
                              var e = this._sock.rQshiftStr(12).substr(4, 7);
                              p.Info("Server ProtocolVersion: " + e);
                              var t = 0;
                              switch (e) {
                                case "000.000":
                                  t = 1;
                                  break;
                                case "003.003":
                                case "003.006":
                                  this._rfbVersion = 3.3;
                                  break;
                                case "003.007":
                                  this._rfbVersion = 3.7;
                                  break;
                                case "003.008":
                                case "003.889":
                                case "004.000":
                                case "004.001":
                                case "005.000":
                                  this._rfbVersion = 3.8;
                                  break;
                                default:
                                  return this._fail(
                                    "Invalid server version " + e,
                                  );
                              }
                              if (t) {
                                for (
                                  var n = "ID:" + this._repeaterID;
                                  n.length < 250;
                                )
                                  n += "\0";
                                return (
                                  this._sock.sQpushString(n),
                                  this._sock.flush(),
                                  !0
                                );
                              }
                              this._rfbVersion > this._rfbMaxVersion &&
                                (this._rfbVersion = this._rfbMaxVersion);
                              var r =
                                "00" +
                                parseInt(this._rfbVersion, 10) +
                                ".00" +
                                ((this._rfbVersion * 10) % 10);
                              (this._sock.sQpushString("RFB " + r + "\n"),
                                this._sock.flush(),
                                p.Debug("Sent ProtocolVersion: " + r),
                                (this._rfbInitState = "Security"));
                            },
                          },
                          {
                            key: "_isSupportedSecurityType",
                            value: function (t) {
                              var e = [Oe, Be, We, qe, Ue, Ve, He, Ge, je];
                              return e.includes(t);
                            },
                          },
                          {
                            key: "_negotiateSecurity",
                            value: function () {
                              if (this._rfbVersion >= 3.7) {
                                var e = this._sock.rQshift8();
                                if (this._sock.rQwait("security type", e, 1))
                                  return !1;
                                if (e === 0)
                                  return (
                                    (this._rfbInitState = "SecurityReason"),
                                    (this._securityContext =
                                      "no security types"),
                                    (this._securityStatus = 1),
                                    !0
                                  );
                                var t = this._sock.rQshiftBytes(e);
                                (p.Debug("Server security types: " + t),
                                  (this._rfbAuthScheme = -1));
                                var n = _e(t),
                                  r;
                                try {
                                  for (n.s(); !(r = n.n()).done; ) {
                                    var o = r.value;
                                    if (this._isSupportedSecurityType(o)) {
                                      this._rfbAuthScheme = o;
                                      break;
                                    }
                                  }
                                } catch (e) {
                                  n.e(e);
                                } finally {
                                  n.f();
                                }
                                if (this._rfbAuthScheme === -1)
                                  return this._fail(
                                    "Unsupported security types (types: " +
                                      t +
                                      ")",
                                  );
                                (this._sock.sQpush8(this._rfbAuthScheme),
                                  this._sock.flush());
                              } else {
                                if (this._sock.rQwait("security scheme", 4))
                                  return !1;
                                if (
                                  ((this._rfbAuthScheme =
                                    this._sock.rQshift32()),
                                  this._rfbAuthScheme == 0)
                                )
                                  return (
                                    (this._rfbInitState = "SecurityReason"),
                                    (this._securityContext =
                                      "authentication scheme"),
                                    (this._securityStatus = 1),
                                    !0
                                  );
                              }
                              return (
                                (this._rfbInitState = "Authentication"),
                                p.Debug(
                                  "Authenticating using scheme: " +
                                    this._rfbAuthScheme,
                                ),
                                !0
                              );
                            },
                          },
                          {
                            key: "_handleSecurityReason",
                            value: function () {
                              if (this._sock.rQwait("reason length", 4))
                                return !1;
                              var e = this._sock.rQshift32(),
                                t = "";
                              if (e > 0) {
                                if (this._sock.rQwait("reason", e, 4))
                                  return !1;
                                t = this._sock.rQshiftStr(e);
                              }
                              return t !== ""
                                ? (this.dispatchEvent(
                                    new CustomEvent("securityfailure", {
                                      detail: {
                                        status: this._securityStatus,
                                        reason: t,
                                      },
                                    }),
                                  ),
                                  this._fail(
                                    "Security negotiation failed on " +
                                      this._securityContext +
                                      " (reason: " +
                                      t +
                                      ")",
                                  ))
                                : (this.dispatchEvent(
                                    new CustomEvent("securityfailure", {
                                      detail: { status: this._securityStatus },
                                    }),
                                  ),
                                  this._fail(
                                    "Security negotiation failed on " +
                                      this._securityContext,
                                  ));
                            },
                          },
                          {
                            key: "_negotiateXvpAuth",
                            value: function () {
                              return this._rfbCredentials.username === void 0 ||
                                this._rfbCredentials.password === void 0 ||
                                this._rfbCredentials.target === void 0
                                ? (this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: {
                                        types: [
                                          "username",
                                          "password",
                                          "target",
                                        ],
                                      },
                                    }),
                                  ),
                                  !1)
                                : (this._sock.sQpush8(
                                    this._rfbCredentials.username.length,
                                  ),
                                  this._sock.sQpush8(
                                    this._rfbCredentials.target.length,
                                  ),
                                  this._sock.sQpushString(
                                    this._rfbCredentials.username,
                                  ),
                                  this._sock.sQpushString(
                                    this._rfbCredentials.target,
                                  ),
                                  this._sock.flush(),
                                  (this._rfbAuthScheme = Be),
                                  this._negotiateAuthentication());
                            },
                          },
                          {
                            key: "_negotiateVeNCryptAuth",
                            value: function () {
                              if (this._rfbVeNCryptState == 0) {
                                if (this._sock.rQwait("vencrypt version", 2))
                                  return !1;
                                var e = this._sock.rQshift8(),
                                  t = this._sock.rQshift8();
                                if (!(e == 0 && t == 2))
                                  return this._fail(
                                    "Unsupported VeNCrypt version " +
                                      e +
                                      "." +
                                      t,
                                  );
                                (this._sock.sQpush8(0),
                                  this._sock.sQpush8(2),
                                  this._sock.flush(),
                                  (this._rfbVeNCryptState = 1));
                              }
                              if (this._rfbVeNCryptState == 1) {
                                if (this._sock.rQwait("vencrypt ack", 1))
                                  return !1;
                                var n = this._sock.rQshift8();
                                if (n != 0)
                                  return this._fail("VeNCrypt failure " + n);
                                this._rfbVeNCryptState = 2;
                              }
                              if (this._rfbVeNCryptState == 2) {
                                if (
                                  this._sock.rQwait(
                                    "vencrypt subtypes length",
                                    1,
                                  )
                                )
                                  return !1;
                                var r = this._sock.rQshift8();
                                if (r < 1)
                                  return this._fail("VeNCrypt subtypes empty");
                                ((this._rfbVeNCryptSubtypesLength = r),
                                  (this._rfbVeNCryptState = 3));
                              }
                              if (this._rfbVeNCryptState == 3) {
                                if (
                                  this._sock.rQwait(
                                    "vencrypt subtypes",
                                    4 * this._rfbVeNCryptSubtypesLength,
                                  )
                                )
                                  return !1;
                                for (
                                  var o = [], a = 0;
                                  a < this._rfbVeNCryptSubtypesLength;
                                  a++
                                )
                                  o.push(this._sock.rQshift32());
                                this._rfbAuthScheme = -1;
                                for (var i = 0, l = o; i < l.length; i++) {
                                  var s = l[i];
                                  if (
                                    s !== Ue &&
                                    this._isSupportedSecurityType(s)
                                  ) {
                                    this._rfbAuthScheme = s;
                                    break;
                                  }
                                }
                                return this._rfbAuthScheme === -1
                                  ? this._fail(
                                      "Unsupported security types (types: " +
                                        o +
                                        ")",
                                    )
                                  : (this._sock.sQpush32(this._rfbAuthScheme),
                                    this._sock.flush(),
                                    (this._rfbVeNCryptState = 4),
                                    !0);
                              }
                            },
                          },
                          {
                            key: "_negotiatePlainAuth",
                            value: function () {
                              if (
                                this._rfbCredentials.username === void 0 ||
                                this._rfbCredentials.password === void 0
                              )
                                return (
                                  this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: {
                                        types: ["username", "password"],
                                      },
                                    }),
                                  ),
                                  !1
                                );
                              var e = (0, _.encodeUTF8)(
                                  this._rfbCredentials.username,
                                ),
                                t = (0, _.encodeUTF8)(
                                  this._rfbCredentials.password,
                                );
                              return (
                                this._sock.sQpush32(e.length),
                                this._sock.sQpush32(t.length),
                                this._sock.sQpushString(e),
                                this._sock.sQpushString(t),
                                this._sock.flush(),
                                (this._rfbInitState = "SecurityResult"),
                                !0
                              );
                            },
                          },
                          {
                            key: "_negotiateStdVNCAuth",
                            value: function () {
                              if (this._sock.rQwait("auth challenge", 16))
                                return !1;
                              if (this._rfbCredentials.password === void 0)
                                return (
                                  this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: { types: ["password"] },
                                    }),
                                  ),
                                  !1
                                );
                              var e = Array.prototype.slice.call(
                                  this._sock.rQshiftBytes(16),
                                ),
                                n = t.genDES(this._rfbCredentials.password, e);
                              return (
                                this._sock.sQpushBytes(n),
                                this._sock.flush(),
                                (this._rfbInitState = "SecurityResult"),
                                !0
                              );
                            },
                          },
                          {
                            key: "_negotiateARDAuth",
                            value: function () {
                              if (
                                this._rfbCredentials.username === void 0 ||
                                this._rfbCredentials.password === void 0
                              )
                                return (
                                  this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: {
                                        types: ["username", "password"],
                                      },
                                    }),
                                  ),
                                  !1
                                );
                              if (
                                this._rfbCredentials.ardPublicKey != null &&
                                this._rfbCredentials.ardCredentials != null
                              )
                                return (
                                  this._sock.sQpushBytes(
                                    this._rfbCredentials.ardCredentials,
                                  ),
                                  this._sock.sQpushBytes(
                                    this._rfbCredentials.ardPublicKey,
                                  ),
                                  this._sock.flush(),
                                  (this._rfbCredentials.ardCredentials = null),
                                  (this._rfbCredentials.ardPublicKey = null),
                                  (this._rfbInitState = "SecurityResult"),
                                  !0
                                );
                              if (this._sock.rQwait("read ard", 4)) return !1;
                              var e = this._sock.rQshiftBytes(2),
                                t = this._sock.rQshift16();
                              if (
                                this._sock.rQwait(
                                  "read ard keylength",
                                  t * 2,
                                  4,
                                )
                              )
                                return !1;
                              var n = this._sock.rQshiftBytes(t),
                                r = this._sock.rQshiftBytes(t),
                                o = B.default.generateKey(
                                  { name: "DH", g: e, p: n },
                                  !1,
                                  ["deriveBits"],
                                );
                              return (this._negotiateARDAuthAsync(t, r, o), !1);
                            },
                          },
                          {
                            key: "_negotiateARDAuthAsync",
                            value: (function () {
                              var e = ue(
                                le().mark(function e(t, n, r) {
                                  var o, a, i, l, s, u, c, d, m, p;
                                  return le().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            for (
                                              o = B.default.exportKey(
                                                "raw",
                                                r.publicKey,
                                              ),
                                                a = B.default.deriveBits(
                                                  { name: "DH", public: n },
                                                  r.privateKey,
                                                  t * 8,
                                                ),
                                                i = (0, _.encodeUTF8)(
                                                  this._rfbCredentials.username,
                                                ).substring(0, 63),
                                                l = (0, _.encodeUTF8)(
                                                  this._rfbCredentials.password,
                                                ).substring(0, 63),
                                                s =
                                                  window.crypto.getRandomValues(
                                                    new Uint8Array(128),
                                                  ),
                                                u = 0;
                                              u < i.length;
                                              u++
                                            )
                                              s[u] = i.charCodeAt(u);
                                            for (
                                              s[i.length] = 0, c = 0;
                                              c < l.length;
                                              c++
                                            )
                                              s[64 + c] = l.charCodeAt(c);
                                            return (
                                              (s[64 + l.length] = 0),
                                              (e.next = 11),
                                              B.default.digest("MD5", a)
                                            );
                                          case 11:
                                            return (
                                              (d = e.sent),
                                              (e.next = 14),
                                              B.default.importKey(
                                                "raw",
                                                d,
                                                { name: "AES-ECB" },
                                                !1,
                                                ["encrypt"],
                                              )
                                            );
                                          case 14:
                                            return (
                                              (m = e.sent),
                                              (e.next = 17),
                                              B.default.encrypt(
                                                { name: "AES-ECB" },
                                                m,
                                                s,
                                              )
                                            );
                                          case 17:
                                            ((p = e.sent),
                                              (this._rfbCredentials.ardCredentials =
                                                p),
                                              (this._rfbCredentials.ardPublicKey =
                                                o),
                                              this._resumeAuthentication());
                                          case 21:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this,
                                  );
                                }),
                              );
                              function t(t, n, r) {
                                return e.apply(this, arguments);
                              }
                              return t;
                            })(),
                          },
                          {
                            key: "_negotiateTightUnixAuth",
                            value: function () {
                              return this._rfbCredentials.username === void 0 ||
                                this._rfbCredentials.password === void 0
                                ? (this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: {
                                        types: ["username", "password"],
                                      },
                                    }),
                                  ),
                                  !1)
                                : (this._sock.sQpush32(
                                    this._rfbCredentials.username.length,
                                  ),
                                  this._sock.sQpush32(
                                    this._rfbCredentials.password.length,
                                  ),
                                  this._sock.sQpushString(
                                    this._rfbCredentials.username,
                                  ),
                                  this._sock.sQpushString(
                                    this._rfbCredentials.password,
                                  ),
                                  this._sock.flush(),
                                  (this._rfbInitState = "SecurityResult"),
                                  !0);
                            },
                          },
                          {
                            key: "_negotiateTightTunnels",
                            value: function (t) {
                              for (
                                var e = {
                                    0: {
                                      vendor: "TGHT",
                                      signature: "NOTUNNEL",
                                    },
                                  },
                                  n = {},
                                  r = 0;
                                r < t;
                                r++
                              ) {
                                var o = this._sock.rQshift32(),
                                  a = this._sock.rQshiftStr(4),
                                  i = this._sock.rQshiftStr(8);
                                n[o] = { vendor: a, signature: i };
                              }
                              return (
                                p.Debug("Server Tight tunnel types: " + n),
                                n[1] &&
                                  n[1].vendor === "SICR" &&
                                  n[1].signature === "SCHANNEL" &&
                                  (p.Debug(
                                    "Detected Siemens server. Assuming NOTUNNEL support.",
                                  ),
                                  (n[0] = {
                                    vendor: "TGHT",
                                    signature: "NOTUNNEL",
                                  })),
                                n[0]
                                  ? n[0].vendor != e[0].vendor ||
                                    n[0].signature != e[0].signature
                                    ? this._fail(
                                        "Client's tunnel type had the incorrect vendor or signature",
                                      )
                                    : (p.Debug("Selected tunnel type: " + e[0]),
                                      this._sock.sQpush32(0),
                                      this._sock.flush(),
                                      !1)
                                  : this._fail(
                                      "Server wanted tunnels, but doesn't support the notunnel type",
                                    )
                              );
                            },
                          },
                          {
                            key: "_negotiateTightAuth",
                            value: function () {
                              if (!this._rfbTightVNC) {
                                if (this._sock.rQwait("num tunnels", 4))
                                  return !1;
                                var e = this._sock.rQshift32();
                                if (
                                  e > 0 &&
                                  this._sock.rQwait(
                                    "tunnel capabilities",
                                    16 * e,
                                    4,
                                  )
                                )
                                  return !1;
                                if (((this._rfbTightVNC = !0), e > 0))
                                  return (this._negotiateTightTunnels(e), !1);
                              }
                              if (this._sock.rQwait("sub auth count", 4))
                                return !1;
                              var t = this._sock.rQshift32();
                              if (t === 0)
                                return (
                                  (this._rfbInitState = "SecurityResult"),
                                  !0
                                );
                              if (
                                this._sock.rQwait(
                                  "sub auth capabilities",
                                  16 * t,
                                  4,
                                )
                              )
                                return !1;
                              for (
                                var n = {
                                    STDVNOAUTH__: 1,
                                    STDVVNCAUTH_: 2,
                                    TGHTULGNAUTH: 129,
                                  },
                                  r = [],
                                  o = 0;
                                o < t;
                                o++
                              ) {
                                this._sock.rQshift32();
                                var a = this._sock.rQshiftStr(12);
                                r.push(a);
                              }
                              p.Debug(
                                "Server Tight authentication types: " + r,
                              );
                              for (var i in n)
                                if (r.indexOf(i) != -1)
                                  switch (
                                    (this._sock.sQpush32(n[i]),
                                    this._sock.flush(),
                                    p.Debug(
                                      "Selected authentication type: " + i,
                                    ),
                                    i)
                                  ) {
                                    case "STDVNOAUTH__":
                                      return (
                                        (this._rfbInitState = "SecurityResult"),
                                        !0
                                      );
                                    case "STDVVNCAUTH_":
                                      return ((this._rfbAuthScheme = Be), !0);
                                    case "TGHTULGNAUTH":
                                      return ((this._rfbAuthScheme = ze), !0);
                                    default:
                                      return this._fail(
                                        "Unsupported tiny auth scheme (scheme: " +
                                          i +
                                          ")",
                                      );
                                  }
                              return this._fail("No supported sub-auth types!");
                            },
                          },
                          {
                            key: "_handleRSAAESCredentialsRequired",
                            value: function (t) {
                              this.dispatchEvent(t);
                            },
                          },
                          {
                            key: "_handleRSAAESServerVerification",
                            value: function (t) {
                              this.dispatchEvent(t);
                            },
                          },
                          {
                            key: "_negotiateRA2neAuth",
                            value: function () {
                              var e = this;
                              return (
                                this._rfbRSAAESAuthenticationState === null &&
                                  ((this._rfbRSAAESAuthenticationState =
                                    new O.default(this._sock, function () {
                                      return e._rfbCredentials;
                                    })),
                                  this._rfbRSAAESAuthenticationState.addEventListener(
                                    "serververification",
                                    this._eventHandlers
                                      .handleRSAAESServerVerification,
                                  ),
                                  this._rfbRSAAESAuthenticationState.addEventListener(
                                    "credentialsrequired",
                                    this._eventHandlers
                                      .handleRSAAESCredentialsRequired,
                                  )),
                                this._rfbRSAAESAuthenticationState.checkInternalEvents(),
                                this._rfbRSAAESAuthenticationState.hasStarted ||
                                  this._rfbRSAAESAuthenticationState
                                    .negotiateRA2neAuthAsync()
                                    .catch(function (t) {
                                      t.message !== "disconnect normally" &&
                                        e._fail(t.message);
                                    })
                                    .then(function () {
                                      return (
                                        (e._rfbInitState = "SecurityResult"),
                                        !0
                                      );
                                    })
                                    .finally(function () {
                                      (e._rfbRSAAESAuthenticationState.removeEventListener(
                                        "serververification",
                                        e._eventHandlers
                                          .handleRSAAESServerVerification,
                                      ),
                                        e._rfbRSAAESAuthenticationState.removeEventListener(
                                          "credentialsrequired",
                                          e._eventHandlers
                                            .handleRSAAESCredentialsRequired,
                                        ),
                                        (e._rfbRSAAESAuthenticationState =
                                          null));
                                    }),
                                !1
                              );
                            },
                          },
                          {
                            key: "_negotiateMSLogonIIAuth",
                            value: function () {
                              if (this._sock.rQwait("mslogonii dh param", 24))
                                return !1;
                              if (
                                this._rfbCredentials.username === void 0 ||
                                this._rfbCredentials.password === void 0
                              )
                                return (
                                  this.dispatchEvent(
                                    new CustomEvent("credentialsrequired", {
                                      detail: {
                                        types: ["username", "password"],
                                      },
                                    }),
                                  ),
                                  !1
                                );
                              var e = this._sock.rQshiftBytes(8),
                                t = this._sock.rQshiftBytes(8),
                                n = this._sock.rQshiftBytes(8),
                                r = B.default.generateKey(
                                  { name: "DH", g: e, p: t },
                                  !0,
                                  ["deriveBits"],
                                ),
                                o = B.default.exportKey("raw", r.publicKey),
                                a = B.default.deriveBits(
                                  { name: "DH", public: n },
                                  r.privateKey,
                                  64,
                                ),
                                i = B.default.importKey(
                                  "raw",
                                  a,
                                  { name: "DES-CBC" },
                                  !1,
                                  ["encrypt"],
                                ),
                                l = (0, _.encodeUTF8)(
                                  this._rfbCredentials.username,
                                ).substring(0, 255),
                                s = (0, _.encodeUTF8)(
                                  this._rfbCredentials.password,
                                ).substring(0, 63),
                                u = new Uint8Array(256),
                                c = new Uint8Array(64);
                              (window.crypto.getRandomValues(u),
                                window.crypto.getRandomValues(c));
                              for (var d = 0; d < l.length; d++)
                                u[d] = l.charCodeAt(d);
                              u[l.length] = 0;
                              for (var m = 0; m < s.length; m++)
                                c[m] = s.charCodeAt(m);
                              return (
                                (c[s.length] = 0),
                                (u = B.default.encrypt(
                                  { name: "DES-CBC", iv: a },
                                  i,
                                  u,
                                )),
                                (c = B.default.encrypt(
                                  { name: "DES-CBC", iv: a },
                                  i,
                                  c,
                                )),
                                this._sock.sQpushBytes(o),
                                this._sock.sQpushBytes(u),
                                this._sock.sQpushBytes(c),
                                this._sock.flush(),
                                (this._rfbInitState = "SecurityResult"),
                                !0
                              );
                            },
                          },
                          {
                            key: "_negotiateAuthentication",
                            value: function () {
                              switch (this._rfbAuthScheme) {
                                case Oe:
                                  return (
                                    this._rfbVersion >= 3.8
                                      ? (this._rfbInitState = "SecurityResult")
                                      : (this._rfbInitState =
                                          "ClientInitialisation"),
                                    !0
                                  );
                                case Ve:
                                  return this._negotiateXvpAuth();
                                case He:
                                  return this._negotiateARDAuth();
                                case Be:
                                  return this._negotiateStdVNCAuth();
                                case qe:
                                  return this._negotiateTightAuth();
                                case Ue:
                                  return this._negotiateVeNCryptAuth();
                                case je:
                                  return this._negotiatePlainAuth();
                                case ze:
                                  return this._negotiateTightUnixAuth();
                                case We:
                                  return this._negotiateRA2neAuth();
                                case Ge:
                                  return this._negotiateMSLogonIIAuth();
                                default:
                                  return this._fail(
                                    "Unsupported auth scheme (scheme: " +
                                      this._rfbAuthScheme +
                                      ")",
                                  );
                              }
                            },
                          },
                          {
                            key: "_handleSecurityResult",
                            value: function () {
                              if (this._sock.rQwait("VNC auth response ", 4))
                                return !1;
                              var e = this._sock.rQshift32();
                              return e === 0
                                ? ((this._rfbInitState =
                                    "ClientInitialisation"),
                                  p.Debug("Authentication OK"),
                                  !0)
                                : this._rfbVersion >= 3.8
                                  ? ((this._rfbInitState = "SecurityReason"),
                                    (this._securityContext = "security result"),
                                    (this._securityStatus = e),
                                    !0)
                                  : (this.dispatchEvent(
                                      new CustomEvent("securityfailure", {
                                        detail: { status: e },
                                      }),
                                    ),
                                    this._fail("Security handshake failed"));
                            },
                          },
                          {
                            key: "_negotiateServerInit",
                            value: function () {
                              if (
                                this._sock.rQwait("server initialization", 24)
                              )
                                return !1;
                              var e = this._sock.rQshift16(),
                                n = this._sock.rQshift16(),
                                r = this._sock.rQshift8(),
                                o = this._sock.rQshift8(),
                                a = this._sock.rQshift8(),
                                i = this._sock.rQshift8(),
                                l = this._sock.rQshift16(),
                                s = this._sock.rQshift16(),
                                u = this._sock.rQshift16(),
                                c = this._sock.rQshift8(),
                                d = this._sock.rQshift8(),
                                m = this._sock.rQshift8();
                              this._sock.rQskipBytes(3);
                              var f = this._sock.rQshift32();
                              if (this._sock.rQwait("server init name", f, 24))
                                return !1;
                              var g = this._sock.rQshiftStr(f);
                              if (
                                ((g = (0, _.decodeUTF8)(g, !0)),
                                this._rfbTightVNC)
                              ) {
                                if (
                                  this._sock.rQwait(
                                    "TightVNC extended server init header",
                                    8,
                                    24 + f,
                                  )
                                )
                                  return !1;
                                var h = this._sock.rQshift16(),
                                  y = this._sock.rQshift16(),
                                  C = this._sock.rQshift16();
                                this._sock.rQskipBytes(2);
                                var b = (h + y + C) * 16;
                                if (
                                  this._sock.rQwait(
                                    "TightVNC extended server init header",
                                    b,
                                    32 + f,
                                  )
                                )
                                  return !1;
                                (this._sock.rQskipBytes(16 * h),
                                  this._sock.rQskipBytes(16 * y),
                                  this._sock.rQskipBytes(16 * C));
                              }
                              return (
                                p.Info(
                                  "Screen: " +
                                    e +
                                    "x" +
                                    n +
                                    ", bpp: " +
                                    r +
                                    ", depth: " +
                                    o +
                                    ", bigEndian: " +
                                    a +
                                    ", trueColor: " +
                                    i +
                                    ", redMax: " +
                                    l +
                                    ", greenMax: " +
                                    s +
                                    ", blueMax: " +
                                    u +
                                    ", redShift: " +
                                    c +
                                    ", greenShift: " +
                                    d +
                                    ", blueShift: " +
                                    m,
                                ),
                                this._setDesktopName(g),
                                this._resize(e, n),
                                this._viewOnly || this._keyboard.grab(),
                                (this._fbDepth = 24),
                                this._fbName === "Intel(r) AMT KVM" &&
                                  (p.Warn(
                                    "Intel AMT KVM only supports 8/16 bit depths. Using low color mode.",
                                  ),
                                  (this._fbDepth = 8)),
                                t.messages.pixelFormat(
                                  this._sock,
                                  this._fbDepth,
                                  !0,
                                ),
                                this._sendEncodings(),
                                t.messages.fbUpdateRequest(
                                  this._sock,
                                  !1,
                                  0,
                                  0,
                                  this._fbWidth,
                                  this._fbHeight,
                                ),
                                this._updateConnectionState("connected"),
                                !0
                              );
                            },
                          },
                          {
                            key: "_sendEncodings",
                            value: function () {
                              var e = [];
                              (e.push(F.encodings.encodingCopyRect),
                                this._fbDepth == 24 &&
                                  (e.push(F.encodings.encodingTight),
                                  e.push(F.encodings.encodingTightPNG),
                                  e.push(F.encodings.encodingZRLE),
                                  e.push(F.encodings.encodingJPEG),
                                  e.push(F.encodings.encodingHextile),
                                  e.push(F.encodings.encodingRRE)),
                                e.push(F.encodings.encodingRaw),
                                e.push(
                                  F.encodings.pseudoEncodingQualityLevel0 +
                                    this._qualityLevel,
                                ),
                                e.push(
                                  F.encodings.pseudoEncodingCompressLevel0 +
                                    this._compressionLevel,
                                ),
                                e.push(F.encodings.pseudoEncodingDesktopSize),
                                e.push(F.encodings.pseudoEncodingLastRect),
                                e.push(
                                  F.encodings
                                    .pseudoEncodingQEMUExtendedKeyEvent,
                                ),
                                e.push(F.encodings.pseudoEncodingQEMULedEvent),
                                e.push(
                                  F.encodings.pseudoEncodingExtendedDesktopSize,
                                ),
                                e.push(F.encodings.pseudoEncodingXvp),
                                e.push(F.encodings.pseudoEncodingFence),
                                e.push(
                                  F.encodings.pseudoEncodingContinuousUpdates,
                                ),
                                e.push(F.encodings.pseudoEncodingDesktopName),
                                e.push(
                                  F.encodings.pseudoEncodingExtendedClipboard,
                                ),
                                this._fbDepth == 24 &&
                                  (e.push(
                                    F.encodings.pseudoEncodingVMwareCursor,
                                  ),
                                  e.push(F.encodings.pseudoEncodingCursor)),
                                t.messages.clientEncodings(this._sock, e));
                            },
                          },
                          {
                            key: "_initMsg",
                            value: function () {
                              switch (this._rfbInitState) {
                                case "ProtocolVersion":
                                  return this._negotiateProtocolVersion();
                                case "Security":
                                  return this._negotiateSecurity();
                                case "Authentication":
                                  return this._negotiateAuthentication();
                                case "SecurityResult":
                                  return this._handleSecurityResult();
                                case "SecurityReason":
                                  return this._handleSecurityReason();
                                case "ClientInitialisation":
                                  return (
                                    this._sock.sQpush8(this._shared ? 1 : 0),
                                    this._sock.flush(),
                                    (this._rfbInitState =
                                      "ServerInitialisation"),
                                    !0
                                  );
                                case "ServerInitialisation":
                                  return this._negotiateServerInit();
                                default:
                                  return this._fail(
                                    "Unknown init state (state: " +
                                      this._rfbInitState +
                                      ")",
                                  );
                              }
                            },
                          },
                          {
                            key: "_resumeAuthentication",
                            value: function () {
                              setTimeout(this._initMsg.bind(this), 0);
                            },
                          },
                          {
                            key: "_handleSetColourMapMsg",
                            value: function () {
                              return (
                                p.Debug("SetColorMapEntries"),
                                this._fail(
                                  "Unexpected SetColorMapEntries message",
                                )
                              );
                            },
                          },
                          {
                            key: "_handleServerCutText",
                            value: function () {
                              if (
                                (p.Debug("ServerCutText"),
                                this._sock.rQwait("ServerCutText header", 7, 1))
                              )
                                return !1;
                              this._sock.rQskipBytes(3);
                              var e = this._sock.rQshift32();
                              if (
                                ((e = (0, d.toSigned32bit)(e)),
                                this._sock.rQwait(
                                  "ServerCutText content",
                                  Math.abs(e),
                                  8,
                                ))
                              )
                                return !1;
                              if (e >= 0) {
                                var n = this._sock.rQshiftStr(e);
                                if (this._viewOnly) return !0;
                                this.dispatchEvent(
                                  new CustomEvent("clipboard", {
                                    detail: { text: n },
                                  }),
                                );
                              } else {
                                e = Math.abs(e);
                                var r = this._sock.rQshift32(),
                                  o = r & 65535,
                                  a = r & 4278190080,
                                  i = !!(a & Ze);
                                if (i) {
                                  ((this._clipboardServerCapabilitiesFormats =
                                    {}),
                                    (this._clipboardServerCapabilitiesActions =
                                      {}));
                                  for (var l = 0; l <= 15; l++) {
                                    var s = 1 << l;
                                    o & s &&
                                      ((this._clipboardServerCapabilitiesFormats[
                                        s
                                      ] = !0),
                                      this._sock.rQshift32());
                                  }
                                  for (var u = 24; u <= 31; u++) {
                                    var c = 1 << u;
                                    this._clipboardServerCapabilitiesActions[
                                      c
                                    ] = !!(a & c);
                                  }
                                  var m = [Ze, et, tt, nt, rt];
                                  t.messages.extendedClipboardCaps(
                                    this._sock,
                                    m,
                                    { extendedClipboardFormatText: 0 },
                                  );
                                } else if (a === et) {
                                  if (this._viewOnly) return !0;
                                  this._clipboardText != null &&
                                    this._clipboardServerCapabilitiesActions[
                                      rt
                                    ] &&
                                    o & Ke &&
                                    t.messages.extendedClipboardProvide(
                                      this._sock,
                                      [Ke],
                                      [this._clipboardText],
                                    );
                                } else if (a === tt) {
                                  if (this._viewOnly) return !0;
                                  this._clipboardServerCapabilitiesActions[
                                    nt
                                  ] &&
                                    (this._clipboardText != null
                                      ? t.messages.extendedClipboardNotify(
                                          this._sock,
                                          [Ke],
                                        )
                                      : t.messages.extendedClipboardNotify(
                                          this._sock,
                                          [],
                                        ));
                                } else if (a === nt) {
                                  if (this._viewOnly) return !0;
                                  this._clipboardServerCapabilitiesActions[
                                    et
                                  ] &&
                                    o & Ke &&
                                    t.messages.extendedClipboardRequest(
                                      this._sock,
                                      [Ke],
                                    );
                                } else if (a === rt) {
                                  if (this._viewOnly || !(o & Ke)) return !0;
                                  this._clipboardText = null;
                                  var f = this._sock.rQshiftBytes(e - 4),
                                    g = new v.default(),
                                    h = null;
                                  g.setInput(f);
                                  for (var y = 0; y <= 15; y++) {
                                    var C = 1 << y;
                                    if (o & C) {
                                      var b = 0,
                                        S = g.inflate(4);
                                      ((b |= S[0] << 24),
                                        (b |= S[1] << 16),
                                        (b |= S[2] << 8),
                                        (b |= S[3]));
                                      var R = g.inflate(b);
                                      C === Ke && (h = R);
                                    }
                                  }
                                  if ((g.setInput(null), h !== null)) {
                                    for (var L = "", E = 0; E < h.length; E++)
                                      L += String.fromCharCode(h[E]);
                                    ((h = L),
                                      (h = (0, _.decodeUTF8)(h)),
                                      h.length > 0 &&
                                        h.charAt(h.length - 1) === "\0" &&
                                        (h = h.slice(0, -1)),
                                      (h = h.replaceAll("\r\n", "\n")),
                                      this.dispatchEvent(
                                        new CustomEvent("clipboard", {
                                          detail: { text: h },
                                        }),
                                      ));
                                  }
                                } else
                                  return this._fail(
                                    "Unexpected action in extended clipboard message: " +
                                      a,
                                  );
                              }
                              return !0;
                            },
                          },
                          {
                            key: "_handleServerFenceMsg",
                            value: function () {
                              if (this._sock.rQwait("ServerFence header", 8, 1))
                                return !1;
                              this._sock.rQskipBytes(3);
                              var e = this._sock.rQshift32(),
                                n = this._sock.rQshift8();
                              if (
                                this._sock.rQwait("ServerFence payload", n, 9)
                              )
                                return !1;
                              n > 64 &&
                                (p.Warn(
                                  "Bad payload length (" +
                                    n +
                                    ") in fence response",
                                ),
                                (n = 64));
                              var r = this._sock.rQshiftStr(n);
                              return (
                                (this._supportsFence = !0),
                                e & (1 << 31)
                                  ? ((e &= 3),
                                    t.messages.clientFence(this._sock, e, r),
                                    !0)
                                  : this._fail("Unexpected fence response")
                              );
                            },
                          },
                          {
                            key: "_handleXvpMsg",
                            value: function () {
                              if (
                                this._sock.rQwait(
                                  "XVP version and message",
                                  3,
                                  1,
                                )
                              )
                                return !1;
                              this._sock.rQskipBytes(1);
                              var e = this._sock.rQshift8(),
                                t = this._sock.rQshift8();
                              switch (t) {
                                case 0:
                                  p.Error("XVP Operation Failed");
                                  break;
                                case 1:
                                  ((this._rfbXvpVer = e),
                                    p.Info(
                                      "XVP extensions enabled (version " +
                                        this._rfbXvpVer +
                                        ")",
                                    ),
                                    this._setCapability("power", !0));
                                  break;
                                default:
                                  this._fail(
                                    "Illegal server XVP message (msg: " +
                                      t +
                                      ")",
                                  );
                                  break;
                              }
                              return !0;
                            },
                          },
                          {
                            key: "_normalMsg",
                            value: function () {
                              var e;
                              this._FBU.rects > 0
                                ? (e = 0)
                                : (e = this._sock.rQshift8());
                              var n, r;
                              switch (e) {
                                case 0:
                                  return (
                                    (r = this._framebufferUpdate()),
                                    r &&
                                      !this._enabledContinuousUpdates &&
                                      t.messages.fbUpdateRequest(
                                        this._sock,
                                        !0,
                                        0,
                                        0,
                                        this._fbWidth,
                                        this._fbHeight,
                                      ),
                                    r
                                  );
                                case 1:
                                  return this._handleSetColourMapMsg();
                                case 2:
                                  return (
                                    p.Debug("Bell"),
                                    this.dispatchEvent(
                                      new CustomEvent("bell", { detail: {} }),
                                    ),
                                    !0
                                  );
                                case 3:
                                  return this._handleServerCutText();
                                case 150:
                                  return (
                                    (n = !this._supportsContinuousUpdates),
                                    (this._supportsContinuousUpdates = !0),
                                    (this._enabledContinuousUpdates = !1),
                                    n &&
                                      ((this._enabledContinuousUpdates = !0),
                                      this._updateContinuousUpdates(),
                                      p.Info("Enabling continuous updates.")),
                                    !0
                                  );
                                case 248:
                                  return this._handleServerFenceMsg();
                                case 250:
                                  return this._handleXvpMsg();
                                default:
                                  return (
                                    this._fail(
                                      "Unexpected server message (type " +
                                        e +
                                        ")",
                                    ),
                                    p.Debug(
                                      "sock.rQpeekBytes(30): " +
                                        this._sock.rQpeekBytes(30),
                                    ),
                                    !0
                                  );
                              }
                            },
                          },
                          {
                            key: "_framebufferUpdate",
                            value: function () {
                              var e = this;
                              if (this._FBU.rects === 0) {
                                if (this._sock.rQwait("FBU header", 3, 1))
                                  return !1;
                                if (
                                  (this._sock.rQskipBytes(1),
                                  (this._FBU.rects = this._sock.rQshift16()),
                                  this._display.pending())
                                )
                                  return (
                                    (this._flushing = !0),
                                    this._display.flush().then(function () {
                                      ((e._flushing = !1),
                                        e._sock.rQwait("message", 1) ||
                                          e._handleMessage());
                                    }),
                                    !1
                                  );
                              }
                              for (; this._FBU.rects > 0; ) {
                                if (this._FBU.encoding === null) {
                                  if (this._sock.rQwait("rect header", 12))
                                    return !1;
                                  ((this._FBU.x = this._sock.rQshift16()),
                                    (this._FBU.y = this._sock.rQshift16()),
                                    (this._FBU.width = this._sock.rQshift16()),
                                    (this._FBU.height = this._sock.rQshift16()),
                                    (this._FBU.encoding =
                                      this._sock.rQshift32()),
                                    (this._FBU.encoding >>= 0));
                                }
                                if (!this._handleRect()) return !1;
                                (this._FBU.rects--,
                                  (this._FBU.encoding = null));
                              }
                              return (this._display.flip(), !0);
                            },
                          },
                          {
                            key: "_handleRect",
                            value: function () {
                              switch (this._FBU.encoding) {
                                case F.encodings.pseudoEncodingLastRect:
                                  return ((this._FBU.rects = 1), !0);
                                case F.encodings.pseudoEncodingVMwareCursor:
                                  return this._handleVMwareCursor();
                                case F.encodings.pseudoEncodingCursor:
                                  return this._handleCursor();
                                case F.encodings
                                  .pseudoEncodingQEMUExtendedKeyEvent:
                                  return (
                                    (this._qemuExtKeyEventSupported = !0),
                                    !0
                                  );
                                case F.encodings.pseudoEncodingDesktopName:
                                  return this._handleDesktopName();
                                case F.encodings.pseudoEncodingDesktopSize:
                                  return (
                                    this._resize(
                                      this._FBU.width,
                                      this._FBU.height,
                                    ),
                                    !0
                                  );
                                case F.encodings
                                  .pseudoEncodingExtendedDesktopSize:
                                  return this._handleExtendedDesktopSize();
                                case F.encodings.pseudoEncodingQEMULedEvent:
                                  return this._handleLedEvent();
                                default:
                                  return this._handleDataRect();
                              }
                            },
                          },
                          {
                            key: "_handleVMwareCursor",
                            value: function () {
                              var e = this._FBU.x,
                                t = this._FBU.y,
                                n = this._FBU.width,
                                r = this._FBU.height;
                              if (
                                this._sock.rQwait("VMware cursor encoding", 1)
                              )
                                return !1;
                              var o = this._sock.rQshift8();
                              this._sock.rQshift8();
                              var a,
                                i = 4;
                              if (o == 0) {
                                var l = -256;
                                if (
                                  ((a = new Array(n * r * i)),
                                  this._sock.rQwait(
                                    "VMware cursor classic encoding",
                                    n * r * i * 2,
                                    2,
                                  ))
                                )
                                  return !1;
                                for (
                                  var s = new Array(n * r), u = 0;
                                  u < n * r;
                                  u++
                                )
                                  s[u] = this._sock.rQshift32();
                                for (
                                  var c = new Array(n * r), d = 0;
                                  d < n * r;
                                  d++
                                )
                                  c[d] = this._sock.rQshift32();
                                for (var m = 0; m < n * r; m++)
                                  if (s[m] == 0) {
                                    var _ = c[m],
                                      f = (_ >> 8) & 255,
                                      g = (_ >> 16) & 255,
                                      h = (_ >> 24) & 255;
                                    ((a[m * i] = f),
                                      (a[m * i + 1] = g),
                                      (a[m * i + 2] = h),
                                      (a[m * i + 3] = 255));
                                  } else
                                    (s[m] & l) == l
                                      ? c[m] == 0
                                        ? ((a[m * i] = 0),
                                          (a[m * i + 1] = 0),
                                          (a[m * i + 2] = 0),
                                          (a[m * i + 3] = 0))
                                        : ((c[m] & l) == l,
                                          (a[m * i] = 0),
                                          (a[m * i + 1] = 0),
                                          (a[m * i + 2] = 0),
                                          (a[m * i + 3] = 255))
                                      : ((a[m * i] = 0),
                                        (a[m * i + 1] = 0),
                                        (a[m * i + 2] = 0),
                                        (a[m * i + 3] = 255));
                              } else if (o == 1) {
                                if (
                                  this._sock.rQwait(
                                    "VMware cursor alpha encoding",
                                    n * r * 4,
                                    2,
                                  )
                                )
                                  return !1;
                                a = new Array(n * r * i);
                                for (var y = 0; y < n * r; y++) {
                                  var C = this._sock.rQshift32();
                                  ((a[y * 4] = (C >> 24) & 255),
                                    (a[y * 4 + 1] = (C >> 16) & 255),
                                    (a[y * 4 + 2] = (C >> 8) & 255),
                                    (a[y * 4 + 3] = C & 255));
                                }
                              } else
                                return (
                                  p.Warn(
                                    "The given cursor type is not supported: " +
                                      o +
                                      " given.",
                                  ),
                                  !1
                                );
                              return (this._updateCursor(a, e, t, n, r), !0);
                            },
                          },
                          {
                            key: "_handleCursor",
                            value: function () {
                              var e = this._FBU.x,
                                t = this._FBU.y,
                                n = this._FBU.width,
                                r = this._FBU.height,
                                o = n * r * 4,
                                a = Math.ceil(n / 8) * r,
                                i = o + a;
                              if (this._sock.rQwait("cursor encoding", i))
                                return !1;
                              for (
                                var l = this._sock.rQshiftBytes(o),
                                  s = this._sock.rQshiftBytes(a),
                                  u = new Uint8Array(n * r * 4),
                                  c = 0,
                                  d = 0;
                                d < r;
                                d++
                              )
                                for (var m = 0; m < n; m++) {
                                  var p =
                                      d * Math.ceil(n / 8) + Math.floor(m / 8),
                                    _ = (s[p] << (m % 8)) & 128 ? 255 : 0;
                                  ((u[c] = l[c + 2]),
                                    (u[c + 1] = l[c + 1]),
                                    (u[c + 2] = l[c]),
                                    (u[c + 3] = _),
                                    (c += 4));
                                }
                              return (this._updateCursor(u, e, t, n, r), !0);
                            },
                          },
                          {
                            key: "_handleDesktopName",
                            value: function () {
                              if (this._sock.rQwait("DesktopName", 4))
                                return !1;
                              var e = this._sock.rQshift32();
                              if (this._sock.rQwait("DesktopName", e, 4))
                                return !1;
                              var t = this._sock.rQshiftStr(e);
                              return (
                                (t = (0, _.decodeUTF8)(t, !0)),
                                this._setDesktopName(t),
                                !0
                              );
                            },
                          },
                          {
                            key: "_handleLedEvent",
                            value: function () {
                              if (this._sock.rQwait("LED Status", 1)) return !1;
                              var e = this._sock.rQshift8(),
                                t = !!(e & 2),
                                n = !!(e & 4);
                              return (
                                (this._remoteCapsLock = n),
                                (this._remoteNumLock = t),
                                !0
                              );
                            },
                          },
                          {
                            key: "_handleExtendedDesktopSize",
                            value: function () {
                              if (this._sock.rQwait("ExtendedDesktopSize", 4))
                                return !1;
                              var e = this._sock.rQpeek8(),
                                t = 4 + e * 16;
                              if (this._sock.rQwait("ExtendedDesktopSize", t))
                                return !1;
                              var n = !this._supportsSetDesktopSize;
                              ((this._supportsSetDesktopSize = !0),
                                this._sock.rQskipBytes(1),
                                this._sock.rQskipBytes(3));
                              for (var r = 0; r < e; r += 1)
                                r === 0
                                  ? ((this._screenID = this._sock.rQshift32()),
                                    this._sock.rQskipBytes(2),
                                    this._sock.rQskipBytes(2),
                                    this._sock.rQskipBytes(2),
                                    this._sock.rQskipBytes(2),
                                    (this._screenFlags =
                                      this._sock.rQshift32()))
                                  : this._sock.rQskipBytes(16);
                              if (this._FBU.x === 1 && this._FBU.y !== 0) {
                                var o = "";
                                switch (this._FBU.y) {
                                  case 1:
                                    o = "Resize is administratively prohibited";
                                    break;
                                  case 2:
                                    o = "Out of resources";
                                    break;
                                  case 3:
                                    o = "Invalid screen layout";
                                    break;
                                  default:
                                    o = "Unknown reason";
                                    break;
                                }
                                p.Warn(
                                  "Server did not accept the resize request: " +
                                    o,
                                );
                              } else
                                this._resize(this._FBU.width, this._FBU.height);
                              return (n && this._requestRemoteResize(), !0);
                            },
                          },
                          {
                            key: "_handleDataRect",
                            value: function () {
                              var e = this._decoders[this._FBU.encoding];
                              if (!e)
                                return (
                                  this._fail(
                                    "Unsupported encoding (encoding: " +
                                      this._FBU.encoding +
                                      ")",
                                  ),
                                  !1
                                );
                              try {
                                return e.decodeRect(
                                  this._FBU.x,
                                  this._FBU.y,
                                  this._FBU.width,
                                  this._FBU.height,
                                  this._sock,
                                  this._display,
                                  this._fbDepth,
                                );
                              } catch (e) {
                                return (
                                  this._fail("Error decoding rect: " + e),
                                  !1
                                );
                              }
                            },
                          },
                          {
                            key: "_updateContinuousUpdates",
                            value: function () {
                              this._enabledContinuousUpdates &&
                                t.messages.enableContinuousUpdates(
                                  this._sock,
                                  !0,
                                  0,
                                  0,
                                  this._fbWidth,
                                  this._fbHeight,
                                );
                            },
                          },
                          {
                            key: "_resize",
                            value: function (t, n) {
                              ((this._fbWidth = t),
                                (this._fbHeight = n),
                                this._display.resize(
                                  this._fbWidth,
                                  this._fbHeight,
                                ),
                                this._updateClip(),
                                this._updateScale(),
                                this._updateContinuousUpdates(),
                                this._saveExpectedClientSize());
                            },
                          },
                          {
                            key: "_xvpOp",
                            value: function (n, r) {
                              this._rfbXvpVer < n ||
                                (p.Info(
                                  "Sending XVP operation " +
                                    r +
                                    " (version " +
                                    n +
                                    ")",
                                ),
                                t.messages.xvpOp(this._sock, n, r));
                            },
                          },
                          {
                            key: "_updateCursor",
                            value: function (t, n, r, o, a) {
                              ((this._cursorImage = {
                                rgbaPixels: t,
                                hotx: n,
                                hoty: r,
                                w: o,
                                h: a,
                              }),
                                this._refreshCursor());
                            },
                          },
                          {
                            key: "_shouldShowDotCursor",
                            value: function () {
                              if (!this._showDotCursor) return !1;
                              for (
                                var e = 3;
                                e < this._cursorImage.rgbaPixels.length;
                                e += 4
                              )
                                if (this._cursorImage.rgbaPixels[e]) return !1;
                              return !0;
                            },
                          },
                          {
                            key: "_refreshCursor",
                            value: function () {
                              if (
                                !(
                                  this._rfbConnectionState !== "connecting" &&
                                  this._rfbConnectionState !== "connected"
                                )
                              ) {
                                var e = this._shouldShowDotCursor()
                                  ? t.cursors.dot
                                  : this._cursorImage;
                                this._cursor.change(
                                  e.rgbaPixels,
                                  e.hotx,
                                  e.hoty,
                                  e.w,
                                  e.h,
                                );
                              }
                            },
                          },
                        ],
                        [
                          {
                            key: "genDES",
                            value: function (t, n) {
                              var e = t.split("").map(function (e) {
                                  return e.charCodeAt(0);
                                }),
                                r = B.default.importKey(
                                  "raw",
                                  e,
                                  { name: "DES-ECB" },
                                  !1,
                                  ["encrypt"],
                                );
                              return B.default.encrypt(
                                { name: "DES-ECB" },
                                r,
                                n,
                              );
                            },
                          },
                        ],
                      )
                    );
                  })(y.default));
                ((ot.messages = {
                  keyEvent: function (t, n, r) {
                    (t.sQpush8(4),
                      t.sQpush8(r),
                      t.sQpush16(0),
                      t.sQpush32(n),
                      t.flush());
                  },
                  QEMUExtendedKeyEvent: function (t, n, r, o) {
                    function e(e) {
                      var t = o >> 8,
                        n = o & 255;
                      return t === 224 && n < 127 ? n | 128 : e;
                    }
                    (t.sQpush8(255),
                      t.sQpush8(0),
                      t.sQpush16(r),
                      t.sQpush32(n));
                    var a = e(o);
                    (t.sQpush32(a), t.flush());
                  },
                  pointerEvent: function (t, n, r, o) {
                    (t.sQpush8(5),
                      t.sQpush8(o),
                      t.sQpush16(n),
                      t.sQpush16(r),
                      t.flush());
                  },
                  _buildExtendedClipboardFlags: function (t, n) {
                    for (
                      var e = new Uint8Array(4), r = 0, o = 0, a = 0;
                      a < t.length;
                      a++
                    )
                      o |= t[a];
                    for (var i = 0; i < n.length; i++) r |= n[i];
                    return (
                      (e[0] = o >> 24),
                      (e[1] = 0),
                      (e[2] = 0),
                      (e[3] = r),
                      e
                    );
                  },
                  extendedClipboardProvide: function (t, n, r) {
                    for (
                      var e = new S.default(), o = [], a = 0;
                      a < n.length;
                      a++
                    ) {
                      if (n[a] != Ke)
                        throw new Error(
                          "Unsupported extended clipboard format for Provide message.",
                        );
                      r[a] = r[a].replace(/\r\n|\r|\n/gm, "\r\n");
                      var i = (0, _.encodeUTF8)(r[a] + "\0");
                      o.push(
                        (i.length >> 24) & 255,
                        (i.length >> 16) & 255,
                        (i.length >> 8) & 255,
                        i.length & 255,
                      );
                      for (var l = 0; l < i.length; l++)
                        o.push(i.charCodeAt(l));
                    }
                    var s = e.deflate(new Uint8Array(o)),
                      u = new Uint8Array(4 + s.length);
                    (u.set(ot.messages._buildExtendedClipboardFlags([rt], n)),
                      u.set(s, 4),
                      ot.messages.clientCutText(t, u, !0));
                  },
                  extendedClipboardNotify: function (t, n) {
                    var e = ot.messages._buildExtendedClipboardFlags([nt], n);
                    ot.messages.clientCutText(t, e, !0);
                  },
                  extendedClipboardRequest: function (t, n) {
                    var e = ot.messages._buildExtendedClipboardFlags([et], n);
                    ot.messages.clientCutText(t, e, !0);
                  },
                  extendedClipboardCaps: function (t, n, r) {
                    var e = Object.keys(r),
                      o = new Uint8Array(4 + 4 * e.length);
                    (e.map(function (e) {
                      return parseInt(e);
                    }),
                      e.sort(function (e, t) {
                        return e - t;
                      }),
                      o.set(ot.messages._buildExtendedClipboardFlags(n, [])));
                    for (var a = 4, i = 0; i < e.length; i++)
                      ((o[a] = r[e[i]] >> 24),
                        (o[a + 1] = r[e[i]] >> 16),
                        (o[a + 2] = r[e[i]] >> 8),
                        (o[a + 3] = r[e[i]] >> 0),
                        (a += 4),
                        (o[3] |= 1 << e[i]));
                    ot.messages.clientCutText(t, o, !0);
                  },
                  clientCutText: function (t, n) {
                    var e =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1;
                    (t.sQpush8(6), t.sQpush8(0), t.sQpush8(0), t.sQpush8(0));
                    var r;
                    (e
                      ? (r = (0, d.toUnsigned32bit)(-n.length))
                      : (r = n.length),
                      t.sQpush32(r),
                      t.sQpushBytes(n),
                      t.flush());
                  },
                  setDesktopSize: function (t, n, r, o, a) {
                    (t.sQpush8(251),
                      t.sQpush8(0),
                      t.sQpush16(n),
                      t.sQpush16(r),
                      t.sQpush8(1),
                      t.sQpush8(0),
                      t.sQpush32(o),
                      t.sQpush16(0),
                      t.sQpush16(0),
                      t.sQpush16(n),
                      t.sQpush16(r),
                      t.sQpush32(a),
                      t.flush());
                  },
                  clientFence: function (t, n, r) {
                    (t.sQpush8(248),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush32(n),
                      t.sQpush8(r.length),
                      t.sQpushString(r),
                      t.flush());
                  },
                  enableContinuousUpdates: function (t, n, r, o, a, i) {
                    (t.sQpush8(150),
                      t.sQpush8(n),
                      t.sQpush16(r),
                      t.sQpush16(o),
                      t.sQpush16(a),
                      t.sQpush16(i),
                      t.flush());
                  },
                  pixelFormat: function (t, n, r) {
                    var e;
                    n > 16 ? (e = 32) : n > 8 ? (e = 16) : (e = 8);
                    var o = Math.floor(n / 3);
                    (t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush8(e),
                      t.sQpush8(n),
                      t.sQpush8(0),
                      t.sQpush8(r ? 1 : 0),
                      t.sQpush16((1 << o) - 1),
                      t.sQpush16((1 << o) - 1),
                      t.sQpush16((1 << o) - 1),
                      t.sQpush8(o * 0),
                      t.sQpush8(o * 1),
                      t.sQpush8(o * 2),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.sQpush8(0),
                      t.flush());
                  },
                  clientEncodings: function (t, n) {
                    (t.sQpush8(2), t.sQpush8(0), t.sQpush16(n.length));
                    for (var e = 0; e < n.length; e++) t.sQpush32(n[e]);
                    t.flush();
                  },
                  fbUpdateRequest: function (t, n, r, o, a, i) {
                    (typeof r > "u" && (r = 0),
                      typeof o > "u" && (o = 0),
                      t.sQpush8(3),
                      t.sQpush8(n ? 1 : 0),
                      t.sQpush16(r),
                      t.sQpush16(o),
                      t.sQpush16(a),
                      t.sQpush16(i),
                      t.flush());
                  },
                  xvpOp: function (t, n, r) {
                    (t.sQpush8(250),
                      t.sQpush8(0),
                      t.sQpush8(n),
                      t.sQpush8(r),
                      t.flush());
                  },
                }),
                  (ot.cursors = {
                    none: {
                      rgbaPixels: new Uint8Array(),
                      w: 0,
                      h: 0,
                      hotx: 0,
                      hoty: 0,
                    },
                    dot: {
                      rgbaPixels: new Uint8Array([
                        255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 0,
                        0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255,
                        0, 0, 0, 255, 255, 255, 255, 255,
                      ]),
                      w: 3,
                      h: 3,
                      hotx: 1,
                      hoty: 1,
                    },
                  }));
              },
          });
        return Z();
      })();
    a.exports = l.default;
  },
  null,
);
