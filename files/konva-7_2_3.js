__d(
  "konva-7.2.3",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._registerNode =
          e._NODES_REGISTRY =
          e.Konva =
          e.glob =
          e._parseUA =
            void 0));
      var n = Math.PI / 180;
      function r() {
        return (
          typeof window != "undefined" &&
          ({}.toString.call(window) === "[object Window]" ||
            {}.toString.call(window) === "[object global]")
        );
      }
      var o = function (e) {
          var t = e.indexOf("msie ");
          if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
          var n = e.indexOf("trident/");
          if (n > 0) {
            var r = e.indexOf("rv:");
            return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
          }
          var o = e.indexOf("edge/");
          return o > 0
            ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
            : !1;
        },
        a = function (e) {
          var t = e.toLowerCase(),
            n =
              /(chrome)[ /]([\w.]+)/.exec(t) ||
              /(webkit)[ /]([\w.]+)/.exec(t) ||
              /(opera)(?:.*version|)[ /]([\w.]+)/.exec(t) ||
              /(msie) ([\w.]+)/.exec(t) ||
              (t.indexOf("compatible") < 0 &&
                /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
              [],
            r = !!e.match(
              /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i,
            ),
            a = !!e.match(/IEMobile/i);
          return {
            browser: n[1] || "",
            version: n[2] || "0",
            isIE: o(t),
            mobile: r,
            ieMobile: a,
          };
        };
      ((e._parseUA = a),
        (e.glob =
          typeof t != "undefined"
            ? t
            : typeof window != "undefined"
              ? window
              : typeof WorkerGlobalScope != "undefined"
                ? self
                : {}),
        (e.Konva = {
          _global: e.glob,
          version: "7.2.3",
          isBrowser: r(),
          isUnminified: /param/.test(function (e) {}.toString()),
          dblClickWindow: 400,
          getAngle: function (t) {
            return e.Konva.angleDeg ? t * n : t;
          },
          enableTrace: !1,
          _pointerEventsEnabled: !1,
          hitOnDragEnabled: !1,
          captureTouchEventsEnabled: !1,
          listenClickTap: !1,
          inDblClickWindow: !1,
          pixelRatio: void 0,
          dragDistance: 3,
          angleDeg: !0,
          showWarnings: !0,
          dragButtons: [0, 1],
          isDragging: function () {
            return e.Konva.DD.isDragging;
          },
          isDragReady: function () {
            return !!e.Konva.DD.node;
          },
          UA: e._parseUA(
            (e.glob.navigator && e.glob.navigator.userAgent) || "",
          ),
          document: e.glob.document,
          _injectGlobal: function (t) {
            e.glob.Konva = t;
          },
          _parseUA: e._parseUA,
        }),
        (e._NODES_REGISTRY = {}));
      var i = function (t) {
        ((e._NODES_REGISTRY[t.prototype.getClassName()] = t),
          (e.Konva[t.prototype.getClassName()] = t));
      };
      e._registerNode = i;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      (Object.defineProperty(d, "__esModule", { value: !0 }),
        (d.Util = d.Transform = d.Collection = void 0));
      var e = c(),
        t = (function () {
          function e() {}
          return (
            (e.toCollection = function (t) {
              var n = new e(),
                r = t.length,
                o;
              for (o = 0; o < r; o++) n.push(t[o]);
              return n;
            }),
            (e._mapMethod = function (t) {
              e.prototype[t] = function () {
                var e = this.length,
                  n,
                  r = [].slice.call(arguments);
                for (n = 0; n < e; n++) this[n][t].apply(this[n], r);
                return this;
              };
            }),
            (e.mapMethods = function (t) {
              var n = t.prototype;
              for (var r in n) e._mapMethod(r);
            }),
            e
          );
        })();
      ((d.Collection = t),
        (t.prototype = []),
        (t.prototype.each = function (e) {
          for (var t = 0; t < this.length; t++) e(this[t], t);
        }),
        (t.prototype.toArray = function () {
          var e = [],
            t = this.length,
            n;
          for (n = 0; n < t; n++) e.push(this[n]);
          return e;
        }));
      var n = (function () {
        function e(e) {
          (e === void 0 && (e = [1, 0, 0, 1, 0, 0]),
            (this.dirty = !1),
            (this.m = (e && e.slice()) || [1, 0, 0, 1, 0, 0]));
        }
        return (
          (e.prototype.reset = function () {
            ((this.m[0] = 1),
              (this.m[1] = 0),
              (this.m[2] = 0),
              (this.m[3] = 1),
              (this.m[4] = 0),
              (this.m[5] = 0));
          }),
          (e.prototype.copy = function () {
            return new e(this.m);
          }),
          (e.prototype.copyInto = function (e) {
            ((e.m[0] = this.m[0]),
              (e.m[1] = this.m[1]),
              (e.m[2] = this.m[2]),
              (e.m[3] = this.m[3]),
              (e.m[4] = this.m[4]),
              (e.m[5] = this.m[5]));
          }),
          (e.prototype.point = function (e) {
            var t = this.m;
            return {
              x: t[0] * e.x + t[2] * e.y + t[4],
              y: t[1] * e.x + t[3] * e.y + t[5],
            };
          }),
          (e.prototype.translate = function (e, t) {
            return (
              (this.m[4] += this.m[0] * e + this.m[2] * t),
              (this.m[5] += this.m[1] * e + this.m[3] * t),
              this
            );
          }),
          (e.prototype.scale = function (e, t) {
            return (
              (this.m[0] *= e),
              (this.m[1] *= e),
              (this.m[2] *= t),
              (this.m[3] *= t),
              this
            );
          }),
          (e.prototype.rotate = function (e) {
            var t = Math.cos(e),
              n = Math.sin(e),
              r = this.m[0] * t + this.m[2] * n,
              o = this.m[1] * t + this.m[3] * n,
              a = this.m[0] * -n + this.m[2] * t,
              i = this.m[1] * -n + this.m[3] * t;
            return (
              (this.m[0] = r),
              (this.m[1] = o),
              (this.m[2] = a),
              (this.m[3] = i),
              this
            );
          }),
          (e.prototype.getTranslation = function () {
            return { x: this.m[4], y: this.m[5] };
          }),
          (e.prototype.skew = function (e, t) {
            var n = this.m[0] + this.m[2] * t,
              r = this.m[1] + this.m[3] * t,
              o = this.m[2] + this.m[0] * e,
              a = this.m[3] + this.m[1] * e;
            return (
              (this.m[0] = n),
              (this.m[1] = r),
              (this.m[2] = o),
              (this.m[3] = a),
              this
            );
          }),
          (e.prototype.multiply = function (e) {
            var t = this.m[0] * e.m[0] + this.m[2] * e.m[1],
              n = this.m[1] * e.m[0] + this.m[3] * e.m[1],
              r = this.m[0] * e.m[2] + this.m[2] * e.m[3],
              o = this.m[1] * e.m[2] + this.m[3] * e.m[3],
              a = this.m[0] * e.m[4] + this.m[2] * e.m[5] + this.m[4],
              i = this.m[1] * e.m[4] + this.m[3] * e.m[5] + this.m[5];
            return (
              (this.m[0] = t),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = o),
              (this.m[4] = a),
              (this.m[5] = i),
              this
            );
          }),
          (e.prototype.invert = function () {
            var e = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
              t = this.m[3] * e,
              n = -this.m[1] * e,
              r = -this.m[2] * e,
              o = this.m[0] * e,
              a = e * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
              i = e * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return (
              (this.m[0] = t),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = o),
              (this.m[4] = a),
              (this.m[5] = i),
              this
            );
          }),
          (e.prototype.getMatrix = function () {
            return this.m;
          }),
          (e.prototype.setAbsolutePosition = function (e, t) {
            var n = this.m[0],
              r = this.m[1],
              o = this.m[2],
              a = this.m[3],
              i = this.m[4],
              l = this.m[5],
              s = (n * (t - l) - r * (e - i)) / (n * a - r * o),
              u = (e - i - o * s) / n;
            return this.translate(u, s);
          }),
          (e.prototype.decompose = function () {
            var e = this.m[0],
              t = this.m[1],
              n = this.m[2],
              r = this.m[3],
              o = this.m[4],
              a = this.m[5],
              i = e * r - t * n,
              l = {
                x: o,
                y: a,
                rotation: 0,
                scaleX: 0,
                scaleY: 0,
                skewX: 0,
                skewY: 0,
              };
            if (e != 0 || t != 0) {
              var s = Math.sqrt(e * e + t * t);
              ((l.rotation = t > 0 ? Math.acos(e / s) : -Math.acos(e / s)),
                (l.scaleX = s),
                (l.scaleY = i / s),
                (l.skewX = (e * n + t * r) / i),
                (l.skewY = 0));
            } else if (n != 0 || r != 0) {
              var u = Math.sqrt(n * n + r * r);
              ((l.rotation =
                Math.PI / 2 - (r > 0 ? Math.acos(-n / u) : -Math.acos(n / u))),
                (l.scaleX = i / u),
                (l.scaleY = u),
                (l.skewX = 0),
                (l.skewY = (e * n + t * r) / i));
            }
            return ((l.rotation = d.Util._getRotation(l.rotation)), l);
          }),
          e
        );
      })();
      d.Transform = n;
      var r = "[object Array]",
        o = "[object Number]",
        a = "[object String]",
        i = "[object Boolean]",
        l = Math.PI / 180,
        s = 180 / Math.PI,
        u = "#",
        m = "",
        p = "0",
        _ = "Konva warning: ",
        f = "Konva error: ",
        g = "rgb(",
        h = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 132, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 255, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 203],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [119, 128, 144],
          slategrey: [119, 128, 144],
          snow: [255, 255, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          transparent: [255, 255, 255, 0],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 5],
        },
        y = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
        C = [];
      d.Util = {
        _isElement: function (e) {
          return !!(e && e.nodeType == 1);
        },
        _isFunction: function (e) {
          return !!(e && e.constructor && e.call && e.apply);
        },
        _isPlainObject: function (e) {
          return !!e && e.constructor === Object;
        },
        _isArray: function (e) {
          return Object.prototype.toString.call(e) === r;
        },
        _isNumber: function (e) {
          return (
            Object.prototype.toString.call(e) === o && !isNaN(e) && isFinite(e)
          );
        },
        _isString: function (e) {
          return Object.prototype.toString.call(e) === a;
        },
        _isBoolean: function (e) {
          return Object.prototype.toString.call(e) === i;
        },
        isObject: function (e) {
          return e instanceof Object;
        },
        isValidSelector: function (e) {
          if (typeof e != "string") return !1;
          var t = e[0];
          return t === "#" || t === "." || t === t.toUpperCase();
        },
        _sign: function (e) {
          return e === 0 || e > 0 ? 1 : -1;
        },
        requestAnimFrame: function (e) {
          (C.push(e),
            C.length === 1 &&
              requestAnimationFrame(function () {
                var e = C;
                ((C = []),
                  e.forEach(function (e) {
                    e();
                  }));
              }));
        },
        createCanvasElement: function () {
          var e = document.createElement("canvas");
          try {
            e.style = e.style || {};
          } catch (e) {}
          return e;
        },
        createImageElement: function () {
          return document.createElement("img");
        },
        _isInDocument: function (e) {
          for (; (e = e.parentNode); ) if (e == document) return !0;
          return !1;
        },
        _simplifyArray: function (e) {
          var t = [],
            n = e.length,
            r = d.Util,
            o,
            a;
          for (o = 0; o < n; o++)
            ((a = e[o]),
              r._isNumber(a)
                ? (a = Math.round(a * 1e3) / 1e3)
                : r._isString(a) || (a = a.toString()),
              t.push(a));
          return t;
        },
        _urlToImage: function (t, n) {
          var r = new e.glob.Image();
          ((r.onload = function () {
            n(r);
          }),
            (r.src = t));
        },
        _rgbToHex: function (e, t, n) {
          return ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1);
        },
        _hexToRgb: function (e) {
          e = e.replace(u, m);
          var t = parseInt(e, 16);
          return { r: (t >> 16) & 255, g: (t >> 8) & 255, b: t & 255 };
        },
        getRandomColor: function () {
          for (
            var e = ((Math.random() * 16777215) << 0).toString(16);
            e.length < 6;
          )
            e = p + e;
          return u + e;
        },
        get: function (e, t) {
          return e === void 0 ? t : e;
        },
        getRGB: function (e) {
          var t;
          return e in h
            ? ((t = h[e]), { r: t[0], g: t[1], b: t[2] })
            : e[0] === u
              ? this._hexToRgb(e.substring(1))
              : e.substr(0, 4) === g
                ? ((t = y.exec(e.replace(/ /g, ""))),
                  {
                    r: parseInt(t[1], 10),
                    g: parseInt(t[2], 10),
                    b: parseInt(t[3], 10),
                  })
                : { r: 0, g: 0, b: 0 };
        },
        colorToRGBA: function (e) {
          return (
            (e = e || "black"),
            d.Util._namedColorToRBA(e) ||
              d.Util._hex3ColorToRGBA(e) ||
              d.Util._hex6ColorToRGBA(e) ||
              d.Util._rgbColorToRGBA(e) ||
              d.Util._rgbaColorToRGBA(e) ||
              d.Util._hslColorToRGBA(e)
          );
        },
        _namedColorToRBA: function (e) {
          var t = h[e.toLowerCase()];
          return t ? { r: t[0], g: t[1], b: t[2], a: 1 } : null;
        },
        _rgbColorToRGBA: function (e) {
          if (e.indexOf("rgb(") === 0) {
            e = e.match(/rgb\(([^)]+)\)/)[1];
            var t = e.split(/ *, */).map(Number);
            return { r: t[0], g: t[1], b: t[2], a: 1 };
          }
        },
        _rgbaColorToRGBA: function (e) {
          if (e.indexOf("rgba(") === 0) {
            e = e.match(/rgba\(([^)]+)\)/)[1];
            var t = e.split(/ *, */).map(Number);
            return { r: t[0], g: t[1], b: t[2], a: t[3] };
          }
        },
        _hex6ColorToRGBA: function (e) {
          if (e[0] === "#" && e.length === 7)
            return {
              r: parseInt(e.slice(1, 3), 16),
              g: parseInt(e.slice(3, 5), 16),
              b: parseInt(e.slice(5, 7), 16),
              a: 1,
            };
        },
        _hex3ColorToRGBA: function (e) {
          if (e[0] === "#" && e.length === 4)
            return {
              r: parseInt(e[1] + e[1], 16),
              g: parseInt(e[2] + e[2], 16),
              b: parseInt(e[3] + e[3], 16),
              a: 1,
            };
        },
        _hslColorToRGBA: function (e) {
          if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(e)) {
            var t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
            t[0];
            var n = t.slice(1),
              r = Number(n[0]) / 360,
              o = Number(n[1]) / 100,
              a = Number(n[2]) / 100,
              i = void 0,
              l = void 0,
              s = void 0;
            if (o === 0)
              return (
                (s = a * 255),
                { r: Math.round(s), g: Math.round(s), b: Math.round(s), a: 1 }
              );
            a < 0.5 ? (i = a * (1 + o)) : (i = a + o - a * o);
            for (var u = 2 * a - i, c = [0, 0, 0], d = 0; d < 3; d++)
              ((l = r + (1 / 3) * -(d - 1)),
                l < 0 && l++,
                l > 1 && l--,
                6 * l < 1
                  ? (s = u + (i - u) * 6 * l)
                  : 2 * l < 1
                    ? (s = i)
                    : 3 * l < 2
                      ? (s = u + (i - u) * (2 / 3 - l) * 6)
                      : (s = u),
                (c[d] = s * 255));
            return {
              r: Math.round(c[0]),
              g: Math.round(c[1]),
              b: Math.round(c[2]),
              a: 1,
            };
          }
        },
        haveIntersection: function (e, t) {
          return !(
            t.x > e.x + e.width ||
            t.x + t.width < e.x ||
            t.y > e.y + e.height ||
            t.y + t.height < e.y
          );
        },
        cloneObject: function (e) {
          var t = {};
          for (var n in e)
            this._isPlainObject(e[n])
              ? (t[n] = this.cloneObject(e[n]))
              : this._isArray(e[n])
                ? (t[n] = this.cloneArray(e[n]))
                : (t[n] = e[n]);
          return t;
        },
        cloneArray: function (e) {
          return e.slice(0);
        },
        _degToRad: function (e) {
          return e * l;
        },
        _radToDeg: function (e) {
          return e * s;
        },
        _getRotation: function (t) {
          return e.Konva.angleDeg ? d.Util._radToDeg(t) : t;
        },
        _capitalize: function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        throw: function (e) {
          throw new Error(f + e);
        },
        error: function (e) {
          f + e;
        },
        warn: function (t) {
          e.Konva.showWarnings && _ + t;
        },
        extend: function (e, t) {
          function n() {
            this.constructor = e;
          }
          n.prototype = t.prototype;
          var r = e.prototype;
          e.prototype = new n();
          for (var o in r) r.hasOwnProperty(o) && (e.prototype[o] = r[o]);
          ((e.__super__ = t.prototype), (e.super = t));
        },
        _getControlPoints: function (e, t, n, r, o, a, i) {
          var l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2)),
            s = Math.sqrt(Math.pow(o - n, 2) + Math.pow(a - r, 2)),
            u = (i * l) / (l + s),
            c = (i * s) / (l + s),
            d = n - u * (o - e),
            m = r - u * (a - t),
            p = n + c * (o - e),
            _ = r + c * (a - t);
          return [d, m, p, _];
        },
        _expandPoints: function (e, t) {
          var n = e.length,
            r = [],
            o,
            a;
          for (o = 2; o < n - 2; o += 2)
            ((a = d.Util._getControlPoints(
              e[o - 2],
              e[o - 1],
              e[o],
              e[o + 1],
              e[o + 2],
              e[o + 3],
              t,
            )),
              !isNaN(a[0]) &&
                (r.push(a[0]),
                r.push(a[1]),
                r.push(e[o]),
                r.push(e[o + 1]),
                r.push(a[2]),
                r.push(a[3])));
          return r;
        },
        each: function (e, t) {
          for (var n in e) t(n, e[n]);
        },
        _inRange: function (e, t, n) {
          return t <= e && e < n;
        },
        _getProjectionToSegment: function (e, t, n, r, o, a) {
          var i,
            l,
            s,
            u = (e - n) * (e - n) + (t - r) * (t - r);
          if (u == 0)
            ((i = e), (l = t), (s = (o - n) * (o - n) + (a - r) * (a - r)));
          else {
            var c = ((o - e) * (n - e) + (a - t) * (r - t)) / u;
            c < 0
              ? ((i = e), (l = t), (s = (e - o) * (e - o) + (t - a) * (t - a)))
              : c > 1
                ? ((i = n),
                  (l = r),
                  (s = (n - o) * (n - o) + (r - a) * (r - a)))
                : ((i = e + c * (n - e)),
                  (l = t + c * (r - t)),
                  (s = (i - o) * (i - o) + (l - a) * (l - a)));
          }
          return [i, l, s];
        },
        _getProjectionToLine: function (e, t, n) {
          var r = d.Util.cloneObject(e),
            o = Number.MAX_VALUE;
          return (
            t.forEach(function (a, i) {
              if (!(!n && i === t.length - 1)) {
                var l = t[(i + 1) % t.length],
                  s = d.Util._getProjectionToSegment(
                    a.x,
                    a.y,
                    l.x,
                    l.y,
                    e.x,
                    e.y,
                  ),
                  u = s[0],
                  c = s[1],
                  m = s[2];
                m < o && ((r.x = u), (r.y = c), (o = m));
              }
            }),
            r
          );
        },
        _prepareArrayForTween: function (e, t, n) {
          var r,
            o = [],
            a = [];
          if (e.length > t.length) {
            var i = t;
            ((t = e), (e = i));
          }
          for (r = 0; r < e.length; r += 2) o.push({ x: e[r], y: e[r + 1] });
          for (r = 0; r < t.length; r += 2) a.push({ x: t[r], y: t[r + 1] });
          var l = [];
          return (
            a.forEach(function (e) {
              var t = d.Util._getProjectionToLine(e, o, n);
              (l.push(t.x), l.push(t.y));
            }),
            l
          );
        },
        _prepareToStringify: function (e) {
          var t;
          e.visitedByCircularReferenceRemoval = !0;
          for (var n in e)
            if (e.hasOwnProperty(n) && e[n] && typeof e[n] == "object") {
              if (
                ((t = Object.getOwnPropertyDescriptor(e, n)),
                e[n].visitedByCircularReferenceRemoval ||
                  d.Util._isElement(e[n]))
              )
                if (t.configurable) delete e[n];
                else return null;
              else if (d.Util._prepareToStringify(e[n]) === null)
                if (t.configurable) delete e[n];
                else return null;
            }
          return (delete e.visitedByCircularReferenceRemoval, e);
        },
        _assign: function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        _getFirstPointerId: function (e) {
          return e.touches ? e.changedTouches[0].identifier : 999;
        },
      };
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      (Object.defineProperty(g, "__esModule", { value: !0 }),
        (g.getComponentValidator =
          g.getBooleanValidator =
          g.getNumberArrayValidator =
          g.getFunctionValidator =
          g.getStringOrGradientValidator =
          g.getStringValidator =
          g.getNumberOrAutoValidator =
          g.getNumberOrArrayOfNumbersValidator =
          g.getNumberValidator =
          g.alphaComponent =
          g.RGBComponent =
            void 0));
      var e = c(),
        t = f();
      function n(e) {
        return t.Util._isString(e)
          ? '"' + e + '"'
          : Object.prototype.toString.call(e) === "[object Number]" ||
              t.Util._isBoolean(e)
            ? e
            : Object.prototype.toString.call(e);
      }
      function r(e) {
        return e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
      }
      g.RGBComponent = r;
      function o(e) {
        return e > 1 ? 1 : e < 1e-4 ? 1e-4 : e;
      }
      g.alphaComponent = o;
      function a() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            return (
              t.Util._isNumber(e) ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a number.',
                ),
              e
            );
          };
      }
      g.getNumberValidator = a;
      function i(r) {
        if (e.Konva.isUnminified)
          return function (e, o) {
            var a = t.Util._isNumber(e),
              i = t.Util._isArray(e) && e.length == r;
            return (
              !a &&
                !i &&
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    o +
                    '" attribute. The value should be a number or Array<number>(' +
                    r +
                    ")",
                ),
              e
            );
          };
      }
      g.getNumberOrArrayOfNumbersValidator = i;
      function l() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            var o = t.Util._isNumber(e),
              a = e === "auto";
            return (
              o ||
                a ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a number or "auto".',
                ),
              e
            );
          };
      }
      g.getNumberOrAutoValidator = l;
      function s() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            return (
              t.Util._isString(e) ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a string.',
                ),
              e
            );
          };
      }
      g.getStringValidator = s;
      function u() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            var o = t.Util._isString(e),
              a =
                Object.prototype.toString.call(e) === "[object CanvasGradient]";
            return (
              o ||
                a ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a string or a native gradient.',
                ),
              e
            );
          };
      }
      g.getStringOrGradientValidator = u;
      function d() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            return (
              t.Util._isFunction(e) ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a function.',
                ),
              e
            );
          };
      }
      g.getFunctionValidator = d;
      function m() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            return (
              t.Util._isArray(e)
                ? e.forEach(function (e) {
                    t.Util._isNumber(e) ||
                      t.Util.warn(
                        '"' +
                          r +
                          '" attribute has non numeric element ' +
                          e +
                          ". Make sure that all elements are numbers.",
                      );
                  })
                : t.Util.warn(
                    n(e) +
                      ' is a not valid value for "' +
                      r +
                      '" attribute. The value should be a array of numbers.',
                  ),
              e
            );
          };
      }
      g.getNumberArrayValidator = m;
      function p() {
        if (e.Konva.isUnminified)
          return function (e, r) {
            var o = e === !0 || e === !1;
            return (
              o ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    r +
                    '" attribute. The value should be a boolean.',
                ),
              e
            );
          };
      }
      g.getBooleanValidator = p;
      function _(r) {
        if (e.Konva.isUnminified)
          return function (e, o) {
            return (
              t.Util.isObject(e) ||
                t.Util.warn(
                  n(e) +
                    ' is a not valid value for "' +
                    o +
                    '" attribute. The value should be an object with properties ' +
                    r,
                ),
              e
            );
          };
      }
      g.getComponentValidator = _;
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      (Object.defineProperty(v, "__esModule", { value: !0 }),
        (v.Factory = void 0));
      var e = f(),
        t = b(),
        n = "get",
        r = "set";
      v.Factory = {
        addGetterSetter: function (e, t, n, r, o) {
          (v.Factory.addGetter(e, t, n),
            v.Factory.addSetter(e, t, r, o),
            v.Factory.addOverloadedGetterSetter(e, t));
        },
        addGetter: function (t, r, o) {
          var a = n + e.Util._capitalize(r);
          t.prototype[a] =
            t.prototype[a] ||
            function () {
              var e = this.attrs[r];
              return e === void 0 ? o : e;
            };
        },
        addSetter: function (t, n, o, a) {
          var i = r + e.Util._capitalize(n);
          t.prototype[i] || v.Factory.overWriteSetter(t, n, o, a);
        },
        overWriteSetter: function (t, n, o, a) {
          var i = r + e.Util._capitalize(n);
          t.prototype[i] = function (e) {
            return (
              o && e !== void 0 && e !== null && (e = o.call(this, e, n)),
              this._setAttr(n, e),
              a && a.call(this),
              this
            );
          };
        },
        addComponentsGetterSetter: function (o, a, i, l, s) {
          var u = i.length,
            c = e.Util._capitalize,
            d = n + c(a),
            m = r + c(a),
            p,
            _;
          o.prototype[d] = function () {
            var e = {};
            for (p = 0; p < u; p++)
              ((_ = i[p]), (e[_] = this.getAttr(a + c(_))));
            return e;
          };
          var f = t.getComponentValidator(i);
          ((o.prototype[m] = function (e) {
            var t = this.attrs[a],
              n;
            (l && (e = l.call(this, e)), f && f.call(this, e, a));
            for (n in e) e.hasOwnProperty(n) && this._setAttr(a + c(n), e[n]);
            return (this._fireChangeEvent(a, t, e), s && s.call(this), this);
          }),
            v.Factory.addOverloadedGetterSetter(o, a));
        },
        addOverloadedGetterSetter: function (t, o) {
          var a = e.Util._capitalize(o),
            i = r + a,
            l = n + a;
          t.prototype[o] = function () {
            return arguments.length ? (this[i](arguments[0]), this) : this[l]();
          };
        },
        addDeprecatedGetterSetter: function (t, r, o, a) {
          e.Util.error("Adding deprecated " + r);
          var i = n + e.Util._capitalize(r),
            l =
              r +
              " property is deprecated and will be removed soon. Look at Konva change log for more information.";
          ((t.prototype[i] = function () {
            e.Util.error(l);
            var t = this.attrs[r];
            return t === void 0 ? o : t;
          }),
            v.Factory.addSetter(t, r, a, function () {
              e.Util.error(l);
            }),
            v.Factory.addOverloadedGetterSetter(t, r));
        },
        backCompat: function (t, o) {
          e.Util.each(o, function (o, a) {
            var i = t.prototype[a],
              l = n + e.Util._capitalize(o),
              s = r + e.Util._capitalize(o);
            function u() {
              (i.apply(this, arguments),
                e.Util.error(
                  '"' +
                    o +
                    '" method is deprecated and will be removed soon. Use ""' +
                    a +
                    '" instead.',
                ));
            }
            ((t.prototype[o] = u), (t.prototype[l] = u), (t.prototype[s] = u));
          });
        },
        afterSetFilter: function () {
          this._filterUpToDate = !1;
        },
      };
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(k, "__esModule", { value: !0 }),
        (k.HitContext = k.SceneContext = k.Context = void 0));
      var t = f(),
        n = c(),
        r = ",",
        o = "(",
        a = ")",
        i = "([",
        l = "])",
        s = ";",
        u = "()",
        d = "=",
        m = [
          "arc",
          "arcTo",
          "beginPath",
          "bezierCurveTo",
          "clearRect",
          "clip",
          "closePath",
          "createLinearGradient",
          "createPattern",
          "createRadialGradient",
          "drawImage",
          "ellipse",
          "fill",
          "fillText",
          "getImageData",
          "createImageData",
          "lineTo",
          "moveTo",
          "putImageData",
          "quadraticCurveTo",
          "rect",
          "restore",
          "rotate",
          "save",
          "scale",
          "setLineDash",
          "setTransform",
          "stroke",
          "strokeText",
          "transform",
          "translate",
        ],
        p = [
          "fillStyle",
          "strokeStyle",
          "shadowColor",
          "shadowBlur",
          "shadowOffsetX",
          "shadowOffsetY",
          "lineCap",
          "lineDashOffset",
          "lineJoin",
          "lineWidth",
          "miterLimit",
          "font",
          "textAlign",
          "textBaseline",
          "globalAlpha",
          "globalCompositeOperation",
          "imageSmoothingEnabled",
        ],
        _ = 100,
        g = (function () {
          function e(e) {
            ((this.canvas = e),
              (this._context = e._canvas.getContext("2d")),
              n.Konva.enableTrace &&
                ((this.traceArr = []), this._enableTrace()));
          }
          return (
            (e.prototype.fillShape = function (e) {
              e.fillEnabled() && this._fill(e);
            }),
            (e.prototype._fill = function (e) {}),
            (e.prototype.strokeShape = function (e) {
              e.hasStroke() && this._stroke(e);
            }),
            (e.prototype._stroke = function (e) {}),
            (e.prototype.fillStrokeShape = function (e) {
              e.attrs.fillAfterStrokeEnabled
                ? (this.strokeShape(e), this.fillShape(e))
                : (this.fillShape(e), this.strokeShape(e));
            }),
            (e.prototype.getTrace = function (e) {
              var n = this.traceArr,
                c = n.length,
                m = "",
                p,
                _,
                f,
                g;
              for (p = 0; p < c; p++)
                ((_ = n[p]),
                  (f = _.method),
                  f
                    ? ((g = _.args),
                      (m += f),
                      e
                        ? (m += u)
                        : t.Util._isArray(g[0])
                          ? (m += i + g.join(r) + l)
                          : (m += o + g.join(r) + a))
                    : ((m += _.property), e || (m += d + _.val)),
                  (m += s));
              return m;
            }),
            (e.prototype.clearTrace = function () {
              this.traceArr = [];
            }),
            (e.prototype._trace = function (e) {
              var t = this.traceArr,
                n;
              (t.push(e), (n = t.length), n >= _ && t.shift());
            }),
            (e.prototype.reset = function () {
              var e = this.getCanvas().getPixelRatio();
              this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
            }),
            (e.prototype.getCanvas = function () {
              return this.canvas;
            }),
            (e.prototype.clear = function (e) {
              var t = this.getCanvas();
              e
                ? this.clearRect(
                    e.x || 0,
                    e.y || 0,
                    e.width || 0,
                    e.height || 0,
                  )
                : this.clearRect(
                    0,
                    0,
                    t.getWidth() / t.pixelRatio,
                    t.getHeight() / t.pixelRatio,
                  );
            }),
            (e.prototype._applyLineCap = function (e) {
              var t = e.getLineCap();
              t && this.setAttr("lineCap", t);
            }),
            (e.prototype._applyOpacity = function (e) {
              var t = e.getAbsoluteOpacity();
              t !== 1 && this.setAttr("globalAlpha", t);
            }),
            (e.prototype._applyLineJoin = function (e) {
              var t = e.attrs.lineJoin;
              t && this.setAttr("lineJoin", t);
            }),
            (e.prototype.setAttr = function (e, t) {
              this._context[e] = t;
            }),
            (e.prototype.arc = function (e, t, n, r, o, a) {
              this._context.arc(e, t, n, r, o, a);
            }),
            (e.prototype.arcTo = function (e, t, n, r, o) {
              this._context.arcTo(e, t, n, r, o);
            }),
            (e.prototype.beginPath = function () {
              this._context.beginPath();
            }),
            (e.prototype.bezierCurveTo = function (e, t, n, r, o, a) {
              this._context.bezierCurveTo(e, t, n, r, o, a);
            }),
            (e.prototype.clearRect = function (e, t, n, r) {
              this._context.clearRect(e, t, n, r);
            }),
            (e.prototype.clip = function () {
              this._context.clip();
            }),
            (e.prototype.closePath = function () {
              this._context.closePath();
            }),
            (e.prototype.createImageData = function (e, t) {
              var n = arguments;
              if (n.length === 2) return this._context.createImageData(e, t);
              if (n.length === 1) return this._context.createImageData(e);
            }),
            (e.prototype.createLinearGradient = function (e, t, n, r) {
              return this._context.createLinearGradient(e, t, n, r);
            }),
            (e.prototype.createPattern = function (e, t) {
              return this._context.createPattern(e, t);
            }),
            (e.prototype.createRadialGradient = function (e, t, n, r, o, a) {
              return this._context.createRadialGradient(e, t, n, r, o, a);
            }),
            (e.prototype.drawImage = function (e, t, n, r, o, a, i, l, s) {
              var u = arguments,
                c = this._context;
              u.length === 3
                ? c.drawImage(e, t, n)
                : u.length === 5
                  ? c.drawImage(e, t, n, r, o)
                  : u.length === 9 && c.drawImage(e, t, n, r, o, a, i, l, s);
            }),
            (e.prototype.ellipse = function (e, t, n, r, o, a, i, l) {
              this._context.ellipse(e, t, n, r, o, a, i, l);
            }),
            (e.prototype.isPointInPath = function (e, t) {
              return this._context.isPointInPath(e, t);
            }),
            (e.prototype.fill = function () {
              this._context.fill();
            }),
            (e.prototype.fillRect = function (e, t, n, r) {
              this._context.fillRect(e, t, n, r);
            }),
            (e.prototype.strokeRect = function (e, t, n, r) {
              this._context.strokeRect(e, t, n, r);
            }),
            (e.prototype.fillText = function (e, t, n) {
              this._context.fillText(e, t, n);
            }),
            (e.prototype.measureText = function (e) {
              return this._context.measureText(e);
            }),
            (e.prototype.getImageData = function (e, t, n, r) {
              return this._context.getImageData(e, t, n, r);
            }),
            (e.prototype.lineTo = function (e, t) {
              this._context.lineTo(e, t);
            }),
            (e.prototype.moveTo = function (e, t) {
              this._context.moveTo(e, t);
            }),
            (e.prototype.rect = function (e, t, n, r) {
              this._context.rect(e, t, n, r);
            }),
            (e.prototype.putImageData = function (e, t, n) {
              this._context.putImageData(e, t, n);
            }),
            (e.prototype.quadraticCurveTo = function (e, t, n, r) {
              this._context.quadraticCurveTo(e, t, n, r);
            }),
            (e.prototype.restore = function () {
              this._context.restore();
            }),
            (e.prototype.rotate = function (e) {
              this._context.rotate(e);
            }),
            (e.prototype.save = function () {
              this._context.save();
            }),
            (e.prototype.scale = function (e, t) {
              this._context.scale(e, t);
            }),
            (e.prototype.setLineDash = function (e) {
              this._context.setLineDash
                ? this._context.setLineDash(e)
                : "mozDash" in this._context
                  ? (this._context.mozDash = e)
                  : "webkitLineDash" in this._context &&
                    (this._context.webkitLineDash = e);
            }),
            (e.prototype.getLineDash = function () {
              return this._context.getLineDash();
            }),
            (e.prototype.setTransform = function (e, t, n, r, o, a) {
              this._context.setTransform(e, t, n, r, o, a);
            }),
            (e.prototype.stroke = function () {
              this._context.stroke();
            }),
            (e.prototype.strokeText = function (e, t, n, r) {
              this._context.strokeText(e, t, n, r);
            }),
            (e.prototype.transform = function (e, t, n, r, o, a) {
              this._context.transform(e, t, n, r, o, a);
            }),
            (e.prototype.translate = function (e, t) {
              this._context.translate(e, t);
            }),
            (e.prototype._enableTrace = function () {
              var e = this,
                n = m.length,
                r = t.Util._simplifyArray,
                o = this.setAttr,
                a,
                i,
                l = function (t) {
                  var n = e[t],
                    o;
                  e[t] = function () {
                    return (
                      (i = r(Array.prototype.slice.call(arguments, 0))),
                      (o = n.apply(e, arguments)),
                      e._trace({ method: t, args: i }),
                      o
                    );
                  };
                };
              for (a = 0; a < n; a++) l(m[a]);
              e.setAttr = function () {
                o.apply(e, arguments);
                var t = arguments[0],
                  n = arguments[1];
                ((t === "shadowOffsetX" ||
                  t === "shadowOffsetY" ||
                  t === "shadowBlur") &&
                  (n = n / this.canvas.getPixelRatio()),
                  e._trace({ property: t, val: n }));
              };
            }),
            (e.prototype._applyGlobalCompositeOperation = function (e) {
              var t = e.getGlobalCompositeOperation();
              t !== "source-over" &&
                this.setAttr("globalCompositeOperation", t);
            }),
            e
          );
        })();
      ((k.Context = g),
        p.forEach(function (e) {
          Object.defineProperty(g.prototype, e, {
            get: function () {
              return this._context[e];
            },
            set: function (t) {
              this._context[e] = t;
            },
          });
        }));
      var h = (function (r) {
        e(o, r);
        function o() {
          return (r !== null && r.apply(this, arguments)) || this;
        }
        return (
          (o.prototype._fillColor = function (e) {
            var t = e.fill();
            (this.setAttr("fillStyle", t), e._fillFunc(this));
          }),
          (o.prototype._fillPattern = function (e) {
            var t = e.getFillPatternX(),
              r = e.getFillPatternY(),
              o = n.Konva.getAngle(e.getFillPatternRotation()),
              a = e.getFillPatternOffsetX(),
              i = e.getFillPatternOffsetY();
            (e.getFillPatternScaleX(),
              e.getFillPatternScaleY(),
              (t || r) && this.translate(t || 0, r || 0),
              o && this.rotate(o),
              (a || i) && this.translate(-1 * a, -1 * i),
              this.setAttr("fillStyle", e._getFillPattern()),
              e._fillFunc(this));
          }),
          (o.prototype._fillLinearGradient = function (e) {
            var t = e._getLinearGradient();
            t && (this.setAttr("fillStyle", t), e._fillFunc(this));
          }),
          (o.prototype._fillRadialGradient = function (e) {
            var t = e._getRadialGradient();
            t && (this.setAttr("fillStyle", t), e._fillFunc(this));
          }),
          (o.prototype._fill = function (e) {
            var t = e.fill(),
              n = e.getFillPriority();
            if (t && n === "color") {
              this._fillColor(e);
              return;
            }
            var r = e.getFillPatternImage();
            if (r && n === "pattern") {
              this._fillPattern(e);
              return;
            }
            var o = e.getFillLinearGradientColorStops();
            if (o && n === "linear-gradient") {
              this._fillLinearGradient(e);
              return;
            }
            var a = e.getFillRadialGradientColorStops();
            if (a && n === "radial-gradient") {
              this._fillRadialGradient(e);
              return;
            }
            t
              ? this._fillColor(e)
              : r
                ? this._fillPattern(e)
                : o
                  ? this._fillLinearGradient(e)
                  : a && this._fillRadialGradient(e);
          }),
          (o.prototype._strokeLinearGradient = function (e) {
            var t = e.getStrokeLinearGradientStartPoint(),
              n = e.getStrokeLinearGradientEndPoint(),
              r = e.getStrokeLinearGradientColorStops(),
              o = this.createLinearGradient(t.x, t.y, n.x, n.y);
            if (r) {
              for (var a = 0; a < r.length; a += 2)
                o.addColorStop(r[a], r[a + 1]);
              this.setAttr("strokeStyle", o);
            }
          }),
          (o.prototype._stroke = function (e) {
            var t = e.dash(),
              n = e.getStrokeScaleEnabled();
            if (e.hasStroke()) {
              if (!n) {
                this.save();
                var r = this.getCanvas().getPixelRatio();
                this.setTransform(r, 0, 0, r, 0, 0);
              }
              (this._applyLineCap(e),
                t &&
                  e.dashEnabled() &&
                  (this.setLineDash(t),
                  this.setAttr("lineDashOffset", e.dashOffset())),
                this.setAttr("lineWidth", e.strokeWidth()),
                e.getShadowForStrokeEnabled() ||
                  this.setAttr("shadowColor", "rgba(0,0,0,0)"));
              var o = e.getStrokeLinearGradientColorStops();
              (o
                ? this._strokeLinearGradient(e)
                : this.setAttr("strokeStyle", e.stroke()),
                e._strokeFunc(this),
                n || this.restore());
            }
          }),
          (o.prototype._applyShadow = function (e) {
            var n = t.Util,
              r = n.get(e.getShadowRGBA(), "black"),
              o = n.get(e.getShadowBlur(), 5),
              a = n.get(e.getShadowOffset(), { x: 0, y: 0 }),
              i = e.getAbsoluteScale(),
              l = this.canvas.getPixelRatio(),
              s = i.x * l,
              u = i.y * l;
            (this.setAttr("shadowColor", r),
              this.setAttr(
                "shadowBlur",
                o * Math.min(Math.abs(s), Math.abs(u)),
              ),
              this.setAttr("shadowOffsetX", a.x * s),
              this.setAttr("shadowOffsetY", a.y * u));
          }),
          o
        );
      })(g);
      k.SceneContext = h;
      var y = (function (t) {
        e(n, t);
        function n() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          (n.prototype._fill = function (e) {
            (this.save(),
              this.setAttr("fillStyle", e.colorKey),
              e._fillFuncHit(this),
              this.restore());
          }),
          (n.prototype.strokeShape = function (e) {
            e.hasHitStroke() && this._stroke(e);
          }),
          (n.prototype._stroke = function (e) {
            if (e.hasHitStroke()) {
              var t = e.getStrokeScaleEnabled();
              if (!t) {
                this.save();
                var n = this.getCanvas().getPixelRatio();
                this.setTransform(n, 0, 0, n, 0, 0);
              }
              this._applyLineCap(e);
              var r = e.hitStrokeWidth(),
                o = r === "auto" ? e.strokeWidth() : r;
              (this.setAttr("lineWidth", o),
                this.setAttr("strokeStyle", e.colorKey),
                e._strokeFuncHit(this),
                t || this.restore());
            }
          }),
          n
        );
      })(g);
      k.HitContext = y;
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty($, "__esModule", { value: !0 }),
        ($.HitCanvas = $.SceneCanvas = $.Canvas = void 0));
      var t = f(),
        n = x(),
        r = c(),
        o = E(),
        a = b(),
        i;
      function l() {
        if (i) return i;
        var e = t.Util.createCanvasElement(),
          n = e.getContext("2d");
        return (
          (i = (function () {
            var e = r.Konva._global.devicePixelRatio || 1,
              t =
                n.webkitBackingStorePixelRatio ||
                n.mozBackingStorePixelRatio ||
                n.msBackingStorePixelRatio ||
                n.oBackingStorePixelRatio ||
                n.backingStorePixelRatio ||
                1;
            return e / t;
          })()),
          i
        );
      }
      var s = (function () {
        function e(e) {
          ((this.pixelRatio = 1),
            (this.width = 0),
            (this.height = 0),
            (this.isCache = !1));
          var n = e || {},
            o = n.pixelRatio || r.Konva.pixelRatio || l();
          ((this.pixelRatio = o),
            (this._canvas = t.Util.createCanvasElement()),
            (this._canvas.style.padding = "0"),
            (this._canvas.style.margin = "0"),
            (this._canvas.style.border = "0"),
            (this._canvas.style.background = "transparent"),
            (this._canvas.style.position = "absolute"),
            (this._canvas.style.top = "0"),
            (this._canvas.style.left = "0"));
        }
        return (
          (e.prototype.getContext = function () {
            return this.context;
          }),
          (e.prototype.getPixelRatio = function () {
            return this.pixelRatio;
          }),
          (e.prototype.setPixelRatio = function (e) {
            var t = this.pixelRatio;
            ((this.pixelRatio = e),
              this.setSize(this.getWidth() / t, this.getHeight() / t));
          }),
          (e.prototype.setWidth = function (e) {
            ((this.width = this._canvas.width = e * this.pixelRatio),
              (this._canvas.style.width = e + "px"));
            var t = this.pixelRatio,
              n = this.getContext()._context;
            n.scale(t, t);
          }),
          (e.prototype.setHeight = function (e) {
            ((this.height = this._canvas.height = e * this.pixelRatio),
              (this._canvas.style.height = e + "px"));
            var t = this.pixelRatio,
              n = this.getContext()._context;
            n.scale(t, t);
          }),
          (e.prototype.getWidth = function () {
            return this.width;
          }),
          (e.prototype.getHeight = function () {
            return this.height;
          }),
          (e.prototype.setSize = function (e, t) {
            (this.setWidth(e || 0), this.setHeight(t || 0));
          }),
          (e.prototype.toDataURL = function (e, n) {
            try {
              return this._canvas.toDataURL(e, n);
            } catch (e) {
              try {
                return this._canvas.toDataURL();
              } catch (e) {
                return (
                  t.Util.error(
                    "Unable to get data URL. " +
                      e.message +
                      " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.",
                  ),
                  ""
                );
              }
            }
          }),
          e
        );
      })();
      (($.Canvas = s),
        o.Factory.addGetterSetter(
          s,
          "pixelRatio",
          void 0,
          a.getNumberValidator(),
        ));
      var u = (function (t) {
        e(r, t);
        function r(e) {
          e === void 0 && (e = { width: 0, height: 0 });
          var r = t.call(this, e) || this;
          return (
            (r.context = new n.SceneContext(r)),
            r.setSize(e.width, e.height),
            r
          );
        }
        return r;
      })(s);
      $.SceneCanvas = u;
      var d = (function (t) {
        e(r, t);
        function r(e) {
          e === void 0 && (e = { width: 0, height: 0 });
          var r = t.call(this, e) || this;
          return (
            (r.hitCanvas = !0),
            (r.context = new n.HitContext(r)),
            r.setSize(e.width, e.height),
            r
          );
        }
        return r;
      })(s);
      $.HitCanvas = d;
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      (Object.defineProperty(A, "__esModule", { value: !0 }), (A.DD = void 0));
      var e = c(),
        t = f();
      ((A.DD = {
        get isDragging() {
          var e = !1;
          return (
            A.DD._dragElements.forEach(function (t) {
              t.dragStatus === "dragging" && (e = !0);
            }),
            e
          );
        },
        justDragged: !1,
        get node() {
          var e;
          return (
            A.DD._dragElements.forEach(function (t) {
              e = t.node;
            }),
            e
          );
        },
        _dragElements: new Map(),
        _drag: function (e) {
          var n = [];
          (A.DD._dragElements.forEach(function (r, o) {
            var a = r.node,
              i = a.getStage();
            (i.setPointersPositions(e),
              r.pointerId === void 0 &&
                (r.pointerId = t.Util._getFirstPointerId(e)));
            var l = i._changedPointerPositions.find(function (e) {
              return e.id === r.pointerId;
            });
            if (l) {
              if (r.dragStatus !== "dragging") {
                var s = a.dragDistance(),
                  u = Math.max(
                    Math.abs(l.x - r.startPointerPos.x),
                    Math.abs(l.y - r.startPointerPos.y),
                  );
                if (u < s || (a.startDrag({ evt: e }), !a.isDragging())) return;
              }
              (a._setDragPosition(e, r), n.push(a));
            }
          }),
            n.forEach(function (t) {
              t.fire("dragmove", { type: "dragmove", target: t, evt: e }, !0);
            }));
        },
        _endDragBefore: function (t) {
          A.DD._dragElements.forEach(function (n, r) {
            var o = n.node,
              a = o.getStage();
            t && a.setPointersPositions(t);
            var i = a._changedPointerPositions.find(function (e) {
              return e.id === n.pointerId;
            });
            if (i) {
              (n.dragStatus === "dragging" || n.dragStatus === "stopped") &&
                ((A.DD.justDragged = !0),
                (e.Konva.listenClickTap = !1),
                (n.dragStatus = "stopped"));
              var l =
                n.node.getLayer() ||
                (n.node instanceof e.Konva.Stage && n.node);
              l && l.batchDraw();
            }
          });
        },
        _endDragAfter: function (e) {
          A.DD._dragElements.forEach(function (t, n) {
            (t.dragStatus === "stopped" &&
              t.node.fire(
                "dragend",
                { type: "dragend", target: t.node, evt: e },
                !0,
              ),
              t.dragStatus !== "dragging" && A.DD._dragElements.delete(n));
          });
        },
      }),
        e.Konva.isBrowser &&
          (window.addEventListener("mouseup", A.DD._endDragBefore, !0),
          window.addEventListener("touchend", A.DD._endDragBefore, !0),
          window.addEventListener("mousemove", A.DD._drag),
          window.addEventListener("touchmove", A.DD._drag),
          window.addEventListener("mouseup", A.DD._endDragAfter, !1),
          window.addEventListener("touchend", A.DD._endDragAfter, !1)));
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      (Object.defineProperty(q, "__esModule", { value: !0 }),
        (q.Node =
          q._removeName =
          q._addName =
          q._removeId =
          q.names =
          q.ids =
            void 0));
      var e = f(),
        t = E(),
        n = w(),
        r = c(),
        o = W(),
        a = b();
      ((q.ids = {}), (q.names = {}));
      var i = function (e, t) {
          t && (q.ids[t] = e);
        },
        l = function (e, t) {
          e && q.ids[e] === t && delete q.ids[e];
        };
      q._removeId = l;
      var s = function (e, t) {
        t && (q.names[t] || (q.names[t] = []), q.names[t].push(e));
      };
      q._addName = s;
      var u = function (e, t) {
        if (e) {
          var n = q.names[e];
          if (n) {
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              o._id === t && n.splice(r, 1);
            }
            n.length === 0 && delete q.names[e];
          }
        }
      };
      q._removeName = u;
      var d = "absoluteOpacity",
        m = "allEventListeners",
        p = "absoluteTransform",
        _ = "absoluteScale",
        g = "canvas",
        h = "Change",
        y = "children",
        C = "konva",
        v = "listening",
        S = "mouseenter",
        R = "mouseleave",
        L = "name",
        k = "set",
        I = "Shape",
        T = " ",
        D = "stage",
        x = "transform",
        $ = "Stage",
        P = "visible",
        N = [
          "xChange.konva",
          "yChange.konva",
          "scaleXChange.konva",
          "scaleYChange.konva",
          "skewXChange.konva",
          "skewYChange.konva",
          "rotationChange.konva",
          "offsetXChange.konva",
          "offsetYChange.konva",
          "transformsEnabledChange.konva",
        ].join(T),
        M = new e.Collection(),
        A = 1,
        F = (function () {
          function t(e) {
            ((this._id = A++),
              (this.eventListeners = {}),
              (this.attrs = {}),
              (this.index = 0),
              (this._allEventListeners = null),
              (this.parent = null),
              (this._cache = new Map()),
              (this._attachedDepsListeners = new Map()),
              (this._lastPos = null),
              (this._batchingTransformChange = !1),
              (this._needClearTransformCache = !1),
              (this._filterUpToDate = !1),
              (this._isUnderCache = !1),
              (this.children = M),
              (this._dragEventId = null),
              (this._shouldFireChangeEvents = !1),
              this.setAttrs(e),
              (this._shouldFireChangeEvents = !0));
          }
          return (
            (t.prototype.hasChildren = function () {
              return !1;
            }),
            (t.prototype.getChildren = function () {
              return M;
            }),
            (t.prototype._clearCache = function (e) {
              (e === x || e === p) && this._cache.get(e)
                ? (this._cache.get(e).dirty = !0)
                : e
                  ? this._cache.delete(e)
                  : this._cache.clear();
            }),
            (t.prototype._getCache = function (e, t) {
              var n = this._cache.get(e),
                r = e === x || e === p,
                o = n === void 0 || (r && n.dirty === !0);
              return (o && ((n = t.call(this)), this._cache.set(e, n)), n);
            }),
            (t.prototype._calculate = function (e, t, n) {
              var r = this;
              if (!this._attachedDepsListeners.get(e)) {
                var o = t
                  .map(function (e) {
                    return e + "Change.konva";
                  })
                  .join(T);
                (this.on(o, function () {
                  r._clearCache(e);
                }),
                  this._attachedDepsListeners.set(e, !0));
              }
              return this._getCache(e, n);
            }),
            (t.prototype._getCanvasCache = function () {
              return this._cache.get(g);
            }),
            (t.prototype._clearSelfAndDescendantCache = function (e, t) {
              (this._clearCache(e),
                t && e === p && this.fire("_clearTransformCache"),
                !this.isCached() &&
                  this.children &&
                  this.children.each(function (t) {
                    t._clearSelfAndDescendantCache(e, !0);
                  }));
            }),
            (t.prototype.clearCache = function () {
              return (
                this._cache.delete(g),
                this._clearSelfAndDescendantCache(),
                this
              );
            }),
            (t.prototype.cache = function (t) {
              var r = t || {},
                o = {};
              (r.x === void 0 ||
                r.y === void 0 ||
                r.width === void 0 ||
                r.height === void 0) &&
                (o = this.getClientRect({
                  skipTransform: !0,
                  relativeTo: this.getParent(),
                }));
              var a = Math.ceil(r.width || o.width),
                i = Math.ceil(r.height || o.height),
                l = r.pixelRatio,
                s = r.x === void 0 ? o.x : r.x,
                u = r.y === void 0 ? o.y : r.y,
                c = r.offset || 0,
                m = r.drawBorder || !1;
              if (!a || !i) {
                e.Util.error(
                  "Can not cache the node. Width or height of the node equals 0. Caching is skipped.",
                );
                return;
              }
              ((a += c * 2), (i += c * 2), (s -= c), (u -= c));
              var p = new n.SceneCanvas({ pixelRatio: l, width: a, height: i }),
                f = new n.SceneCanvas({ pixelRatio: l, width: 0, height: 0 }),
                h = new n.HitCanvas({ pixelRatio: 1, width: a, height: i }),
                y = p.getContext(),
                C = h.getContext();
              return (
                (h.isCache = !0),
                (p.isCache = !0),
                this._cache.delete("canvas"),
                (this._filterUpToDate = !1),
                r.imageSmoothingEnabled === !1 &&
                  ((p.getContext()._context.imageSmoothingEnabled = !1),
                  (f.getContext()._context.imageSmoothingEnabled = !1)),
                y.save(),
                C.save(),
                y.translate(-s, -u),
                C.translate(-s, -u),
                (this._isUnderCache = !0),
                this._clearSelfAndDescendantCache(d),
                this._clearSelfAndDescendantCache(_),
                this.drawScene(p, this),
                this.drawHit(h, this),
                (this._isUnderCache = !1),
                y.restore(),
                C.restore(),
                m &&
                  (y.save(),
                  y.beginPath(),
                  y.rect(0, 0, a, i),
                  y.closePath(),
                  y.setAttr("strokeStyle", "red"),
                  y.setAttr("lineWidth", 5),
                  y.stroke(),
                  y.restore()),
                this._cache.set(g, { scene: p, filter: f, hit: h, x: s, y: u }),
                this
              );
            }),
            (t.prototype.isCached = function () {
              return this._cache.has("canvas");
            }),
            (t.prototype.getClientRect = function (e) {
              throw new Error('abstract "getClientRect" method call');
            }),
            (t.prototype._transformedRect = function (e, t) {
              var n = [
                  { x: e.x, y: e.y },
                  { x: e.x + e.width, y: e.y },
                  { x: e.x + e.width, y: e.y + e.height },
                  { x: e.x, y: e.y + e.height },
                ],
                r,
                o,
                a,
                i,
                l = this.getAbsoluteTransform(t);
              return (
                n.forEach(function (e) {
                  var t = l.point(e);
                  (r === void 0 && ((r = a = t.x), (o = i = t.y)),
                    (r = Math.min(r, t.x)),
                    (o = Math.min(o, t.y)),
                    (a = Math.max(a, t.x)),
                    (i = Math.max(i, t.y)));
                }),
                { x: r, y: o, width: a - r, height: i - o }
              );
            }),
            (t.prototype._drawCachedSceneCanvas = function (e) {
              (e.save(),
                e._applyOpacity(this),
                e._applyGlobalCompositeOperation(this));
              var t = this._getCanvasCache();
              e.translate(t.x, t.y);
              var n = this._getCachedSceneCanvas(),
                r = n.pixelRatio;
              (e.drawImage(n._canvas, 0, 0, n.width / r, n.height / r),
                e.restore());
            }),
            (t.prototype._drawCachedHitCanvas = function (e) {
              var t = this._getCanvasCache(),
                n = t.hit;
              (e.save(),
                e.translate(t.x, t.y),
                e.drawImage(n._canvas, 0, 0),
                e.restore());
            }),
            (t.prototype._getCachedSceneCanvas = function () {
              var t = this.filters(),
                n = this._getCanvasCache(),
                r = n.scene,
                o = n.filter,
                a = o.getContext(),
                i,
                l,
                s,
                u;
              if (t) {
                if (!this._filterUpToDate) {
                  var c = r.pixelRatio;
                  o.setSize(r.width / r.pixelRatio, r.height / r.pixelRatio);
                  try {
                    for (
                      i = t.length,
                        a.clear(),
                        a.drawImage(
                          r._canvas,
                          0,
                          0,
                          r.getWidth() / c,
                          r.getHeight() / c,
                        ),
                        l = a.getImageData(0, 0, o.getWidth(), o.getHeight()),
                        s = 0;
                      s < i;
                      s++
                    ) {
                      if (((u = t[s]), typeof u != "function")) {
                        e.Util.error(
                          "Filter should be type of function, but got " +
                            typeof u +
                            " instead. Please check correct filters",
                        );
                        continue;
                      }
                      (u.call(this, l), a.putImageData(l, 0, 0));
                    }
                  } catch (t) {
                    e.Util.error(
                      "Unable to apply filter. " +
                        t.message +
                        " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.",
                    );
                  }
                  this._filterUpToDate = !0;
                }
                return o;
              }
              return r;
            }),
            (t.prototype.on = function (e, t) {
              if (
                (this._cache && this._cache.delete(m), arguments.length === 3)
              )
                return this._delegate.apply(this, arguments);
              var n = e.split(T),
                r = n.length,
                o,
                a,
                i,
                l,
                s;
              for (o = 0; o < r; o++)
                ((a = n[o]),
                  (i = a.split(".")),
                  (l = i[0]),
                  (s = i[1] || ""),
                  this.eventListeners[l] || (this.eventListeners[l] = []),
                  this.eventListeners[l].push({ name: s, handler: t }));
              return this;
            }),
            (t.prototype.off = function (e, t) {
              var n = (e || "").split(T),
                r = n.length,
                o,
                a,
                i,
                l,
                s,
                u;
              if ((this._cache && this._cache.delete(m), !e))
                for (a in this.eventListeners) this._off(a);
              for (o = 0; o < r; o++)
                if (((i = n[o]), (l = i.split(".")), (s = l[0]), (u = l[1]), s))
                  this.eventListeners[s] && this._off(s, u, t);
                else for (a in this.eventListeners) this._off(a, u, t);
              return this;
            }),
            (t.prototype.dispatchEvent = function (e) {
              var t = { target: this, type: e.type, evt: e };
              return (this.fire(e.type, t), this);
            }),
            (t.prototype.addEventListener = function (e, t) {
              return (
                this.on(e, function (e) {
                  t.call(this, e.evt);
                }),
                this
              );
            }),
            (t.prototype.removeEventListener = function (e) {
              return (this.off(e), this);
            }),
            (t.prototype._delegate = function (t, n, r) {
              var o = this;
              this.on(t, function (t) {
                for (
                  var a = t.target.findAncestors(n, !0, o), i = 0;
                  i < a.length;
                  i++
                )
                  ((t = e.Util.cloneObject(t)),
                    (t.currentTarget = a[i]),
                    r.call(a[i], t));
              });
            }),
            (t.prototype.remove = function () {
              return (
                this.isDragging() && this.stopDrag(),
                o.DD._dragElements.delete(this._id),
                this._remove(),
                this
              );
            }),
            (t.prototype._clearCaches = function () {
              (this._clearSelfAndDescendantCache(p),
                this._clearSelfAndDescendantCache(d),
                this._clearSelfAndDescendantCache(_),
                this._clearSelfAndDescendantCache(D),
                this._clearSelfAndDescendantCache(P),
                this._clearSelfAndDescendantCache(v));
            }),
            (t.prototype._remove = function () {
              this._clearCaches();
              var e = this.getParent();
              e &&
                e.children &&
                (e.children.splice(this.index, 1),
                e._setChildrenIndices(),
                (this.parent = null));
            }),
            (t.prototype.destroy = function () {
              q._removeId(this.id(), this);
              for (
                var e = (this.name() || "").split(/\s/g), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t];
                q._removeName(n, this._id);
              }
              return (this.remove(), this);
            }),
            (t.prototype.getAttr = function (t) {
              var n = "get" + e.Util._capitalize(t);
              return e.Util._isFunction(this[n]) ? this[n]() : this.attrs[t];
            }),
            (t.prototype.getAncestors = function () {
              for (var t = this.getParent(), n = new e.Collection(); t; )
                (n.push(t), (t = t.getParent()));
              return n;
            }),
            (t.prototype.getAttrs = function () {
              return this.attrs || {};
            }),
            (t.prototype.setAttrs = function (t) {
              var n = this;
              return (
                this._batchTransformChanges(function () {
                  var r, o;
                  if (!t) return n;
                  for (r in t)
                    r !== y &&
                      ((o = k + e.Util._capitalize(r)),
                      e.Util._isFunction(n[o])
                        ? n[o](t[r])
                        : n._setAttr(r, t[r]));
                }),
                this
              );
            }),
            (t.prototype.isListening = function () {
              return this._getCache(v, this._isListening);
            }),
            (t.prototype._isListening = function (e) {
              var t = this.listening();
              if (!t) return !1;
              var n = this.getParent();
              return n && n !== e && this !== e ? n._isListening(e) : !0;
            }),
            (t.prototype.isVisible = function () {
              return this._getCache(P, this._isVisible);
            }),
            (t.prototype._isVisible = function (e) {
              var t = this.visible();
              if (!t) return !1;
              var n = this.getParent();
              return n && n !== e && this !== e ? n._isVisible(e) : !0;
            }),
            (t.prototype.shouldDrawHit = function (e, t) {
              if ((t === void 0 && (t = !1), e))
                return this._isVisible(e) && this._isListening(e);
              var n = this.getLayer(),
                a = !1;
              o.DD._dragElements.forEach(function (e) {
                e.dragStatus === "dragging" &&
                  (e.node.nodeType === "Stage" || e.node.getLayer() === n) &&
                  (a = !0);
              });
              var i = !t && !r.Konva.hitOnDragEnabled && a;
              return this.isListening() && this.isVisible() && !i;
            }),
            (t.prototype.show = function () {
              return (this.visible(!0), this);
            }),
            (t.prototype.hide = function () {
              return (this.visible(!1), this);
            }),
            (t.prototype.getZIndex = function () {
              return this.index || 0;
            }),
            (t.prototype.getAbsoluteZIndex = function () {
              var e = this.getDepth(),
                t = this,
                n = 0,
                r,
                o,
                a,
                i;
              function l(s) {
                for (r = [], o = s.length, a = 0; a < o; a++)
                  ((i = s[a]),
                    n++,
                    i.nodeType !== I &&
                      (r = r.concat(i.getChildren().toArray())),
                    i._id === t._id && (a = o));
                r.length > 0 && r[0].getDepth() <= e && l(r);
              }
              return (t.nodeType !== $ && l(t.getStage().getChildren()), n);
            }),
            (t.prototype.getDepth = function () {
              for (var e = 0, t = this.parent; t; ) (e++, (t = t.parent));
              return e;
            }),
            (t.prototype._batchTransformChanges = function (e) {
              ((this._batchingTransformChange = !0),
                e(),
                (this._batchingTransformChange = !1),
                this._needClearTransformCache &&
                  (this._clearCache(x),
                  this._clearSelfAndDescendantCache(p, !0)),
                (this._needClearTransformCache = !1));
            }),
            (t.prototype.setPosition = function (e) {
              var t = this;
              return (
                this._batchTransformChanges(function () {
                  (t.x(e.x), t.y(e.y));
                }),
                this
              );
            }),
            (t.prototype.getPosition = function () {
              return { x: this.x(), y: this.y() };
            }),
            (t.prototype.getAbsolutePosition = function (t) {
              for (var n = !1, r = this.parent; r; ) {
                if (r.isCached()) {
                  n = !0;
                  break;
                }
                r = r.parent;
              }
              n && !t && (t = !0);
              var o = this.getAbsoluteTransform(t).getMatrix(),
                a = new e.Transform(),
                i = this.offset();
              return (
                (a.m = o.slice()),
                a.translate(i.x, i.y),
                a.getTranslation()
              );
            }),
            (t.prototype.setAbsolutePosition = function (e) {
              var t = this._clearTransform();
              ((this.attrs.x = t.x),
                (this.attrs.y = t.y),
                delete t.x,
                delete t.y,
                this._clearCache(x));
              var n = this._getAbsoluteTransform().copy();
              return (
                n.invert(),
                n.translate(e.x, e.y),
                (e = {
                  x: this.attrs.x + n.getTranslation().x,
                  y: this.attrs.y + n.getTranslation().y,
                }),
                this._setTransform(t),
                this.setPosition({ x: e.x, y: e.y }),
                this._clearCache(x),
                this._clearSelfAndDescendantCache(p),
                this
              );
            }),
            (t.prototype._setTransform = function (e) {
              var t;
              for (t in e) this.attrs[t] = e[t];
            }),
            (t.prototype._clearTransform = function () {
              var e = {
                x: this.x(),
                y: this.y(),
                rotation: this.rotation(),
                scaleX: this.scaleX(),
                scaleY: this.scaleY(),
                offsetX: this.offsetX(),
                offsetY: this.offsetY(),
                skewX: this.skewX(),
                skewY: this.skewY(),
              };
              return (
                (this.attrs.x = 0),
                (this.attrs.y = 0),
                (this.attrs.rotation = 0),
                (this.attrs.scaleX = 1),
                (this.attrs.scaleY = 1),
                (this.attrs.offsetX = 0),
                (this.attrs.offsetY = 0),
                (this.attrs.skewX = 0),
                (this.attrs.skewY = 0),
                e
              );
            }),
            (t.prototype.move = function (e) {
              var t = e.x,
                n = e.y,
                r = this.x(),
                o = this.y();
              return (
                t !== void 0 && (r += t),
                n !== void 0 && (o += n),
                this.setPosition({ x: r, y: o }),
                this
              );
            }),
            (t.prototype._eachAncestorReverse = function (e, t) {
              var n = [],
                r = this.getParent(),
                o,
                a;
              if (!(t && t._id === this._id)) {
                for (n.unshift(this); r && (!t || r._id !== t._id); )
                  (n.unshift(r), (r = r.parent));
                for (o = n.length, a = 0; a < o; a++) e(n[a]);
              }
            }),
            (t.prototype.rotate = function (e) {
              return (this.rotation(this.rotation() + e), this);
            }),
            (t.prototype.moveToTop = function () {
              if (!this.parent)
                return (
                  e.Util.warn(
                    "Node has no parent. moveToTop function is ignored.",
                  ),
                  !1
                );
              var t = this.index;
              return (
                this.parent.children.splice(t, 1),
                this.parent.children.push(this),
                this.parent._setChildrenIndices(),
                !0
              );
            }),
            (t.prototype.moveUp = function () {
              if (!this.parent)
                return (
                  e.Util.warn(
                    "Node has no parent. moveUp function is ignored.",
                  ),
                  !1
                );
              var t = this.index,
                n = this.parent.getChildren().length;
              return t < n - 1
                ? (this.parent.children.splice(t, 1),
                  this.parent.children.splice(t + 1, 0, this),
                  this.parent._setChildrenIndices(),
                  !0)
                : !1;
            }),
            (t.prototype.moveDown = function () {
              if (!this.parent)
                return (
                  e.Util.warn(
                    "Node has no parent. moveDown function is ignored.",
                  ),
                  !1
                );
              var t = this.index;
              return t > 0
                ? (this.parent.children.splice(t, 1),
                  this.parent.children.splice(t - 1, 0, this),
                  this.parent._setChildrenIndices(),
                  !0)
                : !1;
            }),
            (t.prototype.moveToBottom = function () {
              if (!this.parent)
                return (
                  e.Util.warn(
                    "Node has no parent. moveToBottom function is ignored.",
                  ),
                  !1
                );
              var t = this.index;
              return t > 0
                ? (this.parent.children.splice(t, 1),
                  this.parent.children.unshift(this),
                  this.parent._setChildrenIndices(),
                  !0)
                : !1;
            }),
            (t.prototype.setZIndex = function (t) {
              if (!this.parent)
                return (
                  e.Util.warn(
                    "Node has no parent. zIndex parameter is ignored.",
                  ),
                  this
                );
              (t < 0 || t >= this.parent.children.length) &&
                e.Util.warn(
                  "Unexpected value " +
                    t +
                    " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
                    (this.parent.children.length - 1) +
                    ".",
                );
              var n = this.index;
              return (
                this.parent.children.splice(n, 1),
                this.parent.children.splice(t, 0, this),
                this.parent._setChildrenIndices(),
                this
              );
            }),
            (t.prototype.getAbsoluteOpacity = function () {
              return this._getCache(d, this._getAbsoluteOpacity);
            }),
            (t.prototype._getAbsoluteOpacity = function () {
              var e = this.opacity(),
                t = this.getParent();
              return (
                t && !t._isUnderCache && (e *= t.getAbsoluteOpacity()),
                e
              );
            }),
            (t.prototype.moveTo = function (e) {
              return (
                this.getParent() !== e && (this._remove(), e.add(this)),
                this
              );
            }),
            (t.prototype.toObject = function () {
              var t = {},
                n = this.getAttrs(),
                r,
                o,
                a,
                i,
                l;
              t.attrs = {};
              for (r in n)
                ((o = n[r]),
                  (l =
                    e.Util.isObject(o) &&
                    !e.Util._isPlainObject(o) &&
                    !e.Util._isArray(o)),
                  !l &&
                    ((a = typeof this[r] == "function" && this[r]),
                    delete n[r],
                    (i = a ? a.call(this) : null),
                    (n[r] = o),
                    i !== o && (t.attrs[r] = o)));
              return (
                (t.className = this.getClassName()),
                e.Util._prepareToStringify(t)
              );
            }),
            (t.prototype.toJSON = function () {
              return JSON.stringify(this.toObject());
            }),
            (t.prototype.getParent = function () {
              return this.parent;
            }),
            (t.prototype.findAncestors = function (e, t, n) {
              var r = [];
              t && this._isMatch(e) && r.push(this);
              for (var o = this.parent; o; ) {
                if (o === n) return r;
                (o._isMatch(e) && r.push(o), (o = o.parent));
              }
              return r;
            }),
            (t.prototype.isAncestorOf = function (e) {
              return !1;
            }),
            (t.prototype.findAncestor = function (e, t, n) {
              return this.findAncestors(e, t, n)[0];
            }),
            (t.prototype._isMatch = function (t) {
              if (!t) return !1;
              if (typeof t == "function") return t(this);
              var n = t.replace(/ /g, "").split(","),
                r = n.length,
                o,
                a;
              for (o = 0; o < r; o++)
                if (
                  ((a = n[o]),
                  e.Util.isValidSelector(a) ||
                    (e.Util.warn(
                      'Selector "' +
                        a +
                        '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".',
                    ),
                    e.Util.warn(
                      'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".',
                    ),
                    e.Util.warn("Konva is awesome, right?")),
                  a.charAt(0) === "#")
                ) {
                  if (this.id() === a.slice(1)) return !0;
                } else if (a.charAt(0) === ".") {
                  if (this.hasName(a.slice(1))) return !0;
                } else if (this.className === a || this.nodeType === a)
                  return !0;
              return !1;
            }),
            (t.prototype.getLayer = function () {
              var e = this.getParent();
              return e ? e.getLayer() : null;
            }),
            (t.prototype.getStage = function () {
              return this._getCache(D, this._getStage);
            }),
            (t.prototype._getStage = function () {
              var e = this.getParent();
              if (e) return e.getStage();
            }),
            (t.prototype.fire = function (e, t, n) {
              return (
                t === void 0 && (t = {}),
                (t.target = t.target || this),
                n ? this._fireAndBubble(e, t) : this._fire(e, t),
                this
              );
            }),
            (t.prototype.getAbsoluteTransform = function (e) {
              return e
                ? this._getAbsoluteTransform(e)
                : this._getCache(p, this._getAbsoluteTransform);
            }),
            (t.prototype._getAbsoluteTransform = function (t) {
              var n;
              if (t)
                return (
                  (n = new e.Transform()),
                  this._eachAncestorReverse(function (e) {
                    var t = e.transformsEnabled();
                    t === "all"
                      ? n.multiply(e.getTransform())
                      : t === "position" &&
                        n.translate(e.x() - e.offsetX(), e.y() - e.offsetY());
                  }, t),
                  n
                );
              ((n = this._cache.get(p) || new e.Transform()),
                this.parent
                  ? this.parent.getAbsoluteTransform().copyInto(n)
                  : n.reset());
              var r = this.transformsEnabled();
              if (r === "all") n.multiply(this.getTransform());
              else if (r === "position") {
                var o = this.attrs.x || 0,
                  a = this.attrs.y || 0,
                  i = this.attrs.offsetX || 0,
                  l = this.attrs.offsetY || 0;
                n.translate(o - i, a - l);
              }
              return ((n.dirty = !1), n);
            }),
            (t.prototype.getAbsoluteScale = function (e) {
              for (var t = this; t; )
                (t._isUnderCache && (e = t), (t = t.getParent()));
              var n = this.getAbsoluteTransform(e),
                r = n.decompose();
              return { x: r.scaleX, y: r.scaleY };
            }),
            (t.prototype.getAbsoluteRotation = function () {
              return this.getAbsoluteTransform().decompose().rotation;
            }),
            (t.prototype.getTransform = function () {
              return this._getCache(x, this._getTransform);
            }),
            (t.prototype._getTransform = function () {
              var t,
                n,
                o = this._cache.get(x) || new e.Transform();
              o.reset();
              var a = this.x(),
                i = this.y(),
                l = r.Konva.getAngle(this.rotation()),
                s = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1,
                u = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1,
                c = this.attrs.skewX || 0,
                d = this.attrs.skewY || 0,
                m = this.attrs.offsetX || 0,
                p = this.attrs.offsetY || 0;
              return (
                (a !== 0 || i !== 0) && o.translate(a, i),
                l !== 0 && o.rotate(l),
                (c !== 0 || d !== 0) && o.skew(c, d),
                (s !== 1 || u !== 1) && o.scale(s, u),
                (m !== 0 || p !== 0) && o.translate(-1 * m, -1 * p),
                (o.dirty = !1),
                o
              );
            }),
            (t.prototype.clone = function (t) {
              var n = e.Util.cloneObject(this.attrs),
                r,
                o,
                a,
                i,
                l;
              for (r in t) n[r] = t[r];
              var s = new this.constructor(n);
              for (r in this.eventListeners)
                for (
                  o = this.eventListeners[r], a = o.length, i = 0;
                  i < a;
                  i++
                )
                  ((l = o[i]),
                    l.name.indexOf(C) < 0 &&
                      (s.eventListeners[r] || (s.eventListeners[r] = []),
                      s.eventListeners[r].push(l)));
              return s;
            }),
            (t.prototype._toKonvaCanvas = function (e) {
              e = e || {};
              var t = this.getClientRect(),
                r = this.getStage(),
                o = e.x !== void 0 ? e.x : t.x,
                a = e.y !== void 0 ? e.y : t.y,
                i = e.pixelRatio || 1,
                l = new n.SceneCanvas({
                  width: e.width || t.width || (r ? r.width() : 0),
                  height: e.height || t.height || (r ? r.height() : 0),
                  pixelRatio: i,
                }),
                s = l.getContext();
              return (
                s.save(),
                (o || a) && s.translate(-1 * o, -1 * a),
                this.drawScene(l),
                s.restore(),
                l
              );
            }),
            (t.prototype.toCanvas = function (e) {
              return this._toKonvaCanvas(e)._canvas;
            }),
            (t.prototype.toDataURL = function (e) {
              e = e || {};
              var t = e.mimeType || null,
                n = e.quality || null,
                r = this._toKonvaCanvas(e).toDataURL(t, n);
              return (e.callback && e.callback(r), r);
            }),
            (t.prototype.toImage = function (t) {
              if (!t || !t.callback)
                throw "callback required for toImage method config argument";
              var n = t.callback;
              (delete t.callback,
                e.Util._urlToImage(this.toDataURL(t), function (e) {
                  n(e);
                }));
            }),
            (t.prototype.setSize = function (e) {
              return (this.width(e.width), this.height(e.height), this);
            }),
            (t.prototype.getSize = function () {
              return { width: this.width(), height: this.height() };
            }),
            (t.prototype.getClassName = function () {
              return this.className || this.nodeType;
            }),
            (t.prototype.getType = function () {
              return this.nodeType;
            }),
            (t.prototype.getDragDistance = function () {
              return this.attrs.dragDistance !== void 0
                ? this.attrs.dragDistance
                : this.parent
                  ? this.parent.getDragDistance()
                  : r.Konva.dragDistance;
            }),
            (t.prototype._off = function (e, t, n) {
              var r = this.eventListeners[e],
                o,
                a,
                i;
              for (o = 0; o < r.length; o++)
                if (
                  ((a = r[o].name),
                  (i = r[o].handler),
                  (a !== "konva" || t === "konva") &&
                    (!t || a === t) &&
                    (!n || n === i))
                ) {
                  if ((r.splice(o, 1), r.length === 0)) {
                    delete this.eventListeners[e];
                    break;
                  }
                  o--;
                }
            }),
            (t.prototype._fireChangeEvent = function (e, t, n) {
              this._fire(e + h, { oldVal: t, newVal: n });
            }),
            (t.prototype.setId = function (e) {
              var t = this.id();
              return (
                q._removeId(t, this),
                i(this, e),
                this._setAttr("id", e),
                this
              );
            }),
            (t.prototype.setName = function (e) {
              var t = (this.name() || "").split(/\s/g),
                n = (e || "").split(/\s/g),
                r,
                o;
              for (o = 0; o < t.length; o++)
                ((r = t[o]),
                  n.indexOf(r) === -1 && r && q._removeName(r, this._id));
              for (o = 0; o < n.length; o++)
                ((r = n[o]), t.indexOf(r) === -1 && r && q._addName(this, r));
              return (this._setAttr(L, e), this);
            }),
            (t.prototype.addName = function (e) {
              if (!this.hasName(e)) {
                var t = this.name(),
                  n = t ? t + " " + e : e;
                this.setName(n);
              }
              return this;
            }),
            (t.prototype.hasName = function (e) {
              if (!e) return !1;
              var t = this.name();
              if (!t) return !1;
              var n = (t || "").split(/\s/g);
              return n.indexOf(e) !== -1;
            }),
            (t.prototype.removeName = function (e) {
              var t = (this.name() || "").split(/\s/g),
                n = t.indexOf(e);
              return (
                n !== -1 && (t.splice(n, 1), this.setName(t.join(" "))),
                this
              );
            }),
            (t.prototype.setAttr = function (t, n) {
              var r = this[k + e.Util._capitalize(t)];
              return (
                e.Util._isFunction(r) ? r.call(this, n) : this._setAttr(t, n),
                this
              );
            }),
            (t.prototype._setAttr = function (t, n, r) {
              var o = this.attrs[t];
              (o === n && !e.Util.isObject(n)) ||
                (n == null ? delete this.attrs[t] : (this.attrs[t] = n),
                this._shouldFireChangeEvents && this._fireChangeEvent(t, o, n));
            }),
            (t.prototype._setComponentAttr = function (e, t, n) {
              var r;
              n !== void 0 &&
                ((r = this.attrs[e]),
                r || (this.attrs[e] = this.getAttr(e)),
                (this.attrs[e][t] = n),
                this._fireChangeEvent(e, r, n));
            }),
            (t.prototype._fireAndBubble = function (e, t, n) {
              t && this.nodeType === I && (t.target = this);
              var r =
                (e === S || e === R) &&
                ((n &&
                  (this === n ||
                    (this.isAncestorOf && this.isAncestorOf(n)))) ||
                  (this.nodeType === "Stage" && !n));
              if (!r) {
                this._fire(e, t);
                var o =
                  (e === S || e === R) &&
                  n &&
                  n.isAncestorOf &&
                  n.isAncestorOf(this) &&
                  !n.isAncestorOf(this.parent);
                ((t && !t.cancelBubble) || !t) &&
                  this.parent &&
                  this.parent.isListening() &&
                  !o &&
                  (n && n.parent
                    ? this._fireAndBubble.call(this.parent, e, t, n)
                    : this._fireAndBubble.call(this.parent, e, t));
              }
            }),
            (t.prototype._getProtoListeners = function (e) {
              var t = this._cache.get(m);
              if (!t) {
                t = {};
                for (var n = Object.getPrototypeOf(this); n; ) {
                  if (!n.eventListeners) {
                    n = Object.getPrototypeOf(n);
                    continue;
                  }
                  for (var r in n.eventListeners) {
                    var o = n.eventListeners[r],
                      a = t[r] || [];
                    t[r] = o.concat(a);
                  }
                  n = Object.getPrototypeOf(n);
                }
                this._cache.set(m, t);
              }
              return t[e];
            }),
            (t.prototype._fire = function (e, t) {
              ((t = t || {}), (t.currentTarget = this), (t.type = e));
              var n = this._getProtoListeners(e);
              if (n)
                for (var r = 0; r < n.length; r++) n[r].handler.call(this, t);
              var o = this.eventListeners[e];
              if (o)
                for (var r = 0; r < o.length; r++) o[r].handler.call(this, t);
            }),
            (t.prototype.draw = function () {
              return (this.drawScene(), this.drawHit(), this);
            }),
            (t.prototype._createDragElement = function (e) {
              var t = e ? e.pointerId : void 0,
                n = this.getStage(),
                r = this.getAbsolutePosition(),
                a = n._getPointerById(t) || n._changedPointerPositions[0] || r;
              o.DD._dragElements.set(this._id, {
                node: this,
                startPointerPos: a,
                offset: { x: a.x - r.x, y: a.y - r.y },
                dragStatus: "ready",
                pointerId: t,
              });
            }),
            (t.prototype.startDrag = function (e, t) {
              (t === void 0 && (t = !0),
                o.DD._dragElements.has(this._id) || this._createDragElement(e));
              var n = o.DD._dragElements.get(this._id);
              ((n.dragStatus = "dragging"),
                this.fire(
                  "dragstart",
                  { type: "dragstart", target: this, evt: e && e.evt },
                  t,
                ));
            }),
            (t.prototype._setDragPosition = function (t, n) {
              var r = this.getStage()._getPointerById(n.pointerId);
              if (r) {
                var o = { x: r.x - n.offset.x, y: r.y - n.offset.y },
                  a = this.dragBoundFunc();
                if (a !== void 0) {
                  var i = a.call(this, o, t);
                  i
                    ? (o = i)
                    : e.Util.warn(
                        "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.",
                      );
                }
                ((!this._lastPos ||
                  this._lastPos.x !== o.x ||
                  this._lastPos.y !== o.y) &&
                  (this.setAbsolutePosition(o),
                  this.getLayer()
                    ? this.getLayer().batchDraw()
                    : this.getStage() && this.getStage().batchDraw()),
                  (this._lastPos = o));
              }
            }),
            (t.prototype.stopDrag = function (e) {
              var t = o.DD._dragElements.get(this._id);
              (t && (t.dragStatus = "stopped"),
                o.DD._endDragBefore(e),
                o.DD._endDragAfter(e));
            }),
            (t.prototype.setDraggable = function (e) {
              (this._setAttr("draggable", e), this._dragChange());
            }),
            (t.prototype.isDragging = function () {
              var e = o.DD._dragElements.get(this._id);
              return e ? e.dragStatus === "dragging" : !1;
            }),
            (t.prototype._listenDrag = function () {
              (this._dragCleanup(),
                this.on("mousedown.konva touchstart.konva", function (e) {
                  var t = this,
                    n = e.evt.button !== void 0,
                    a = !n || r.Konva.dragButtons.indexOf(e.evt.button) >= 0;
                  if (a && !this.isDragging()) {
                    var i = !1;
                    (o.DD._dragElements.forEach(function (e) {
                      t.isAncestorOf(e.node) && (i = !0);
                    }),
                      i || this._createDragElement(e));
                  }
                }));
            }),
            (t.prototype._dragChange = function () {
              if (this.attrs.draggable) this._listenDrag();
              else {
                this._dragCleanup();
                var e = this.getStage();
                if (!e) return;
                var t = o.DD._dragElements.get(this._id),
                  n = t && t.dragStatus === "dragging",
                  r = t && t.dragStatus === "ready";
                n ? this.stopDrag() : r && o.DD._dragElements.delete(this._id);
              }
            }),
            (t.prototype._dragCleanup = function () {
              (this.off("mousedown.konva"), this.off("touchstart.konva"));
            }),
            (t.create = function (t, n) {
              return (
                e.Util._isString(t) && (t = JSON.parse(t)),
                this._createNode(t, n)
              );
            }),
            (t._createNode = function (n, o) {
              var a = t.prototype.getClassName.call(n),
                i = n.children,
                l,
                s,
                u;
              (o && (n.attrs.container = o),
                r._NODES_REGISTRY[a] ||
                  (e.Util.warn(
                    'Can not find a node with class name "' +
                      a +
                      '". Fallback to "Shape".',
                  ),
                  (a = "Shape")));
              var c = r._NODES_REGISTRY[a];
              if (((l = new c(n.attrs)), i))
                for (s = i.length, u = 0; u < s; u++)
                  l.add(t._createNode(i[u]));
              return l;
            }),
            t
          );
        })();
      ((q.Node = F),
        (F.prototype.nodeType = "Node"),
        (F.prototype._attrsAffectingSize = []),
        (F.prototype.eventListeners = {}),
        F.prototype.on.call(F.prototype, N, function () {
          if (this._batchingTransformChange) {
            this._needClearTransformCache = !0;
            return;
          }
          (this._clearCache(x), this._clearSelfAndDescendantCache(p));
        }),
        F.prototype.on.call(F.prototype, "visibleChange.konva", function () {
          this._clearSelfAndDescendantCache(P);
        }),
        F.prototype.on.call(F.prototype, "listeningChange.konva", function () {
          this._clearSelfAndDescendantCache(v);
        }),
        F.prototype.on.call(F.prototype, "opacityChange.konva", function () {
          this._clearSelfAndDescendantCache(d);
        }));
      var O = t.Factory.addGetterSetter;
      (O(F, "zIndex"),
        O(F, "absolutePosition"),
        O(F, "position"),
        O(F, "x", 0, a.getNumberValidator()),
        O(F, "y", 0, a.getNumberValidator()),
        O(F, "globalCompositeOperation", "source-over", a.getStringValidator()),
        O(F, "opacity", 1, a.getNumberValidator()),
        O(F, "name", "", a.getStringValidator()),
        O(F, "id", "", a.getStringValidator()),
        O(F, "rotation", 0, a.getNumberValidator()),
        t.Factory.addComponentsGetterSetter(F, "scale", ["x", "y"]),
        O(F, "scaleX", 1, a.getNumberValidator()),
        O(F, "scaleY", 1, a.getNumberValidator()),
        t.Factory.addComponentsGetterSetter(F, "skew", ["x", "y"]),
        O(F, "skewX", 0, a.getNumberValidator()),
        O(F, "skewY", 0, a.getNumberValidator()),
        t.Factory.addComponentsGetterSetter(F, "offset", ["x", "y"]),
        O(F, "offsetX", 0, a.getNumberValidator()),
        O(F, "offsetY", 0, a.getNumberValidator()),
        O(F, "dragDistance", null, a.getNumberValidator()),
        O(F, "width", 0, a.getNumberValidator()),
        O(F, "height", 0, a.getNumberValidator()),
        O(F, "listening", !0, a.getBooleanValidator()),
        O(F, "preventDefault", !0, a.getBooleanValidator()),
        O(F, "filters", null, function (e) {
          return ((this._filterUpToDate = !1), e);
        }),
        O(F, "visible", !0, a.getBooleanValidator()),
        O(F, "transformsEnabled", "all", a.getStringValidator()),
        O(F, "size"),
        O(F, "dragBoundFunc"),
        O(F, "draggable", !1, a.getBooleanValidator()),
        t.Factory.backCompat(F, {
          rotateDeg: "rotate",
          setRotationDeg: "setRotation",
          getRotationDeg: "getRotation",
        }),
        e.Collection.mapMethods(F));
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(z, "__esModule", { value: !0 }),
        (z.Container = void 0));
      var t = f(),
        n = E(),
        r = G(),
        o = b(),
        a = (function (n) {
          e(o, n);
          function o() {
            var e = (n !== null && n.apply(this, arguments)) || this;
            return ((e.children = new t.Collection()), e);
          }
          return (
            (o.prototype.getChildren = function (e) {
              if (!e) return this.children;
              var n = new t.Collection();
              return (
                this.children.each(function (t) {
                  e(t) && n.push(t);
                }),
                n
              );
            }),
            (o.prototype.hasChildren = function () {
              return this.getChildren().length > 0;
            }),
            (o.prototype.removeChildren = function () {
              for (var e, n = 0; n < this.children.length; n++)
                ((e = this.children[n]),
                  (e.parent = null),
                  (e.index = 0),
                  e.remove());
              return ((this.children = new t.Collection()), this);
            }),
            (o.prototype.destroyChildren = function () {
              for (var e, n = 0; n < this.children.length; n++)
                ((e = this.children[n]),
                  (e.parent = null),
                  (e.index = 0),
                  e.destroy());
              return ((this.children = new t.Collection()), this);
            }),
            (o.prototype.add = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if (arguments.length > 1) {
                for (var n = 0; n < arguments.length; n++)
                  this.add(arguments[n]);
                return this;
              }
              var r = e[0];
              if (r.getParent()) return (r.moveTo(this), this);
              var o = this.children;
              return (
                this._validateAdd(r),
                r._clearCaches(),
                (r.index = o.length),
                (r.parent = this),
                o.push(r),
                this._fire("add", { child: r }),
                this
              );
            }),
            (o.prototype.destroy = function () {
              return (
                this.hasChildren() && this.destroyChildren(),
                n.prototype.destroy.call(this),
                this
              );
            }),
            (o.prototype.find = function (e) {
              return this._generalFind(e, !1);
            }),
            (o.prototype.get = function (e) {
              return (
                t.Util.warn(
                  "collection.get() method is deprecated. Please use collection.find() instead.",
                ),
                this.find(e)
              );
            }),
            (o.prototype.findOne = function (e) {
              var t = this._generalFind(e, !0);
              return t.length > 0 ? t[0] : void 0;
            }),
            (o.prototype._generalFind = function (e, n) {
              var r = [];
              return (
                this._descendants(function (t) {
                  var o = t._isMatch(e);
                  return (o && r.push(t), !!(o && n));
                }),
                t.Collection.toCollection(r)
              );
            }),
            (o.prototype._descendants = function (e) {
              for (var t = !1, n = 0; n < this.children.length; n++) {
                var r = this.children[n];
                if (((t = e(r)), t)) return !0;
                if (r.hasChildren() && ((t = r._descendants(e)), t)) return !0;
              }
              return !1;
            }),
            (o.prototype.toObject = function () {
              var e = r.Node.prototype.toObject.call(this);
              e.children = [];
              for (
                var t = this.getChildren(), n = t.length, o = 0;
                o < n;
                o++
              ) {
                var a = t[o];
                e.children.push(a.toObject());
              }
              return e;
            }),
            (o.prototype.isAncestorOf = function (e) {
              for (var t = e.getParent(); t; ) {
                if (t._id === this._id) return !0;
                t = t.getParent();
              }
              return !1;
            }),
            (o.prototype.clone = function (e) {
              var t = r.Node.prototype.clone.call(this, e);
              return (
                this.getChildren().each(function (e) {
                  t.add(e.clone());
                }),
                t
              );
            }),
            (o.prototype.getAllIntersections = function (e) {
              var t = [];
              return (
                this.find("Shape").each(function (n) {
                  n.isVisible() && n.intersects(e) && t.push(n);
                }),
                t
              );
            }),
            (o.prototype._setChildrenIndices = function () {
              this.children.each(function (e, t) {
                e.index = t;
              });
            }),
            (o.prototype.drawScene = function (e, t) {
              var n = this.getLayer(),
                r = e || (n && n.getCanvas()),
                o = r && r.getContext(),
                a = this._getCanvasCache(),
                i = a && a.scene,
                l = r && r.isCache;
              if (!this.isVisible() && !l) return this;
              if (i) {
                o.save();
                var s = this.getAbsoluteTransform(t).getMatrix();
                (o.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
                  this._drawCachedSceneCanvas(o),
                  o.restore());
              } else this._drawChildren("drawScene", r, t);
              return this;
            }),
            (o.prototype.drawHit = function (e, t) {
              if (!this.shouldDrawHit(t)) return this;
              var n = this.getLayer(),
                r = e || (n && n.hitCanvas),
                o = r && r.getContext(),
                a = this._getCanvasCache(),
                i = a && a.hit;
              if (i) {
                o.save();
                var l = this.getAbsoluteTransform(t).getMatrix();
                (o.transform(l[0], l[1], l[2], l[3], l[4], l[5]),
                  this._drawCachedHitCanvas(o),
                  o.restore());
              } else this._drawChildren("drawHit", r, t);
              return this;
            }),
            (o.prototype._drawChildren = function (e, t, n) {
              var r = t && t.getContext(),
                o = this.clipWidth(),
                a = this.clipHeight(),
                i = this.clipFunc(),
                l = (o && a) || i,
                s = n === this;
              if (l) {
                r.save();
                var u = this.getAbsoluteTransform(n),
                  c = u.getMatrix();
                if (
                  (r.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
                  r.beginPath(),
                  i)
                )
                  i.call(this, r, this);
                else {
                  var d = this.clipX(),
                    m = this.clipY();
                  r.rect(d, m, o, a);
                }
                (r.clip(),
                  (c = u.copy().invert().getMatrix()),
                  r.transform(c[0], c[1], c[2], c[3], c[4], c[5]));
              }
              var p =
                !s &&
                this.globalCompositeOperation() !== "source-over" &&
                e === "drawScene";
              (p && (r.save(), r._applyGlobalCompositeOperation(this)),
                this.children.each(function (r) {
                  r[e](t, n);
                }),
                p && r.restore(),
                l && r.restore());
            }),
            (o.prototype.getClientRect = function (e) {
              e = e || {};
              var t = e.skipTransform,
                n = e.relativeTo,
                r,
                o,
                a,
                i,
                l = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
                s = this;
              this.children.each(function (t) {
                if (t.visible()) {
                  var n = t.getClientRect({
                    relativeTo: s,
                    skipShadow: e.skipShadow,
                    skipStroke: e.skipStroke,
                  });
                  (n.width === 0 && n.height === 0) ||
                    (r === void 0
                      ? ((r = n.x),
                        (o = n.y),
                        (a = n.x + n.width),
                        (i = n.y + n.height))
                      : ((r = Math.min(r, n.x)),
                        (o = Math.min(o, n.y)),
                        (a = Math.max(a, n.x + n.width)),
                        (i = Math.max(i, n.y + n.height))));
                }
              });
              for (
                var u = this.find("Shape"), c = !1, d = 0;
                d < u.length;
                d++
              ) {
                var m = u[d];
                if (m._isVisible(this)) {
                  c = !0;
                  break;
                }
              }
              return (
                c && r !== void 0
                  ? (l = { x: r, y: o, width: a - r, height: i - o })
                  : (l = { x: 0, y: 0, width: 0, height: 0 }),
                t ? l : this._transformedRect(l, n)
              );
            }),
            o
          );
        })(r.Node);
      ((z.Container = a),
        n.Factory.addComponentsGetterSetter(a, "clip", [
          "x",
          "y",
          "width",
          "height",
        ]),
        n.Factory.addGetterSetter(a, "clipX", void 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(a, "clipY", void 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(
          a,
          "clipWidth",
          void 0,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          a,
          "clipHeight",
          void 0,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(a, "clipFunc"),
        t.Collection.mapMethods(a));
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      (Object.defineProperty(Y, "__esModule", { value: !0 }),
        (Y.releaseCapture =
          Y.setPointerCapture =
          Y.hasPointerCapture =
          Y.createEvent =
          Y.getCapturedShape =
            void 0));
      var e = c(),
        t = new Map(),
        n = e.Konva._global.PointerEvent !== void 0;
      function r(e) {
        return t.get(e);
      }
      Y.getCapturedShape = r;
      function o(e) {
        return { evt: e, pointerId: e.pointerId };
      }
      Y.createEvent = o;
      function a(e, n) {
        return t.get(e) === n;
      }
      Y.hasPointerCapture = a;
      function i(e, r) {
        l(e);
        var a = r.getStage();
        a &&
          (t.set(e, r),
          n &&
            r._fire(
              "gotpointercapture",
              o(new PointerEvent("gotpointercapture")),
            ));
      }
      Y.setPointerCapture = i;
      function l(e, r) {
        var a = t.get(e);
        if (a) {
          var i = a.getStage();
          (i && i.content,
            t.delete(e),
            n &&
              a._fire(
                "lostpointercapture",
                o(new PointerEvent("lostpointercapture")),
              ));
        }
      }
      Y.releaseCapture = l;
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    var ne = {},
      re = { exports: ne };
    function oe() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(ne, "__esModule", { value: !0 }),
        (ne.Stage = ne.stages = void 0));
      var t = f(),
        n = E(),
        r = X(),
        o = c(),
        a = w(),
        i = W(),
        l = c(),
        s = te(),
        u = "Stage",
        d = "string",
        m = "px",
        p = "mouseout",
        _ = "mouseleave",
        g = "mouseover",
        h = "mouseenter",
        y = "mousemove",
        C = "mousedown",
        b = "mouseup",
        v = "pointermove",
        S = "pointerdown",
        R = "pointerup",
        L = "pointercancel",
        k = "lostpointercapture",
        I = "contextmenu",
        T = "click",
        D = "dblclick",
        x = "touchstart",
        $ = "touchend",
        P = "tap",
        N = "dbltap",
        M = "touchmove",
        A = "wheel",
        F = "contentMouseout",
        O = "contentMouseover",
        B = "contentMousemove",
        q = "contentMousedown",
        U = "contentMouseup",
        V = "contentContextmenu",
        H = "contentClick",
        G = "contentDblclick",
        z = "contentTouchstart",
        j = "contentTouchend",
        K = "contentDbltap",
        Q = "contentTap",
        Y = "contentTouchmove",
        J = "contentWheel",
        Z = "relative",
        ee = "konvajs-content",
        re = "_",
        oe = "container",
        ae = 5,
        ie = "",
        le = [h, C, y, b, p, x, M, $, g, A, I, S, v, R, L, k],
        se = le.length;
      function ue(e, t) {
        e.content.addEventListener(
          t,
          function (n) {
            e[re + t](n);
          },
          !1,
        );
      }
      var ce =
        "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
      ne.stages = [];
      function de(e) {
        return (
          e === void 0 && (e = {}),
          (e.clipFunc || e.clipWidth || e.clipHeight) &&
            t.Util.warn(
              "Stage does not support clipping. Please use clip for Layers or Groups.",
            ),
          e
        );
      }
      var me = (function (n) {
        e(l, n);
        function l(e) {
          var t = n.call(this, de(e)) || this;
          return (
            (t._pointerPositions = []),
            (t._changedPointerPositions = []),
            t._buildDOM(),
            t._bindContentEvents(),
            ne.stages.push(t),
            t.on("widthChange.konva heightChange.konva", t._resizeDOM),
            t.on("visibleChange.konva", t._checkVisibility),
            t.on(
              "clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",
              function () {
                de(t.attrs);
              },
            ),
            t._checkVisibility(),
            t
          );
        }
        return (
          (l.prototype._validateAdd = function (e) {
            var n = e.getType() === "Layer",
              r = e.getType() === "FastLayer",
              o = n || r;
            o || t.Util.throw("You may only add layers to the stage.");
          }),
          (l.prototype._checkVisibility = function () {
            if (this.content) {
              var e = this.visible() ? "" : "none";
              this.content.style.display = e;
            }
          }),
          (l.prototype.setContainer = function (e) {
            if (typeof e === d) {
              if (e.charAt(0) === ".") {
                var t = e.slice(1);
                e = document.getElementsByClassName(t)[0];
              } else {
                var n;
                (e.charAt(0) !== "#" ? (n = e) : (n = e.slice(1)),
                  (e = document.getElementById(n)));
              }
              if (!e) throw "Can not find container in document with id " + n;
            }
            return (
              this._setAttr(oe, e),
              this.content &&
                (this.content.parentElement &&
                  this.content.parentElement.removeChild(this.content),
                e.appendChild(this.content)),
              this
            );
          }),
          (l.prototype.shouldDrawHit = function () {
            return !0;
          }),
          (l.prototype.clear = function () {
            var e = this.children,
              t = e.length,
              n;
            for (n = 0; n < t; n++) e[n].clear();
            return this;
          }),
          (l.prototype.clone = function (e) {
            return (
              e || (e = {}),
              (e.container = document.createElement("div")),
              r.Container.prototype.clone.call(this, e)
            );
          }),
          (l.prototype.destroy = function () {
            n.prototype.destroy.call(this);
            var e = this.content;
            e && t.Util._isInDocument(e) && this.container().removeChild(e);
            var r = ne.stages.indexOf(this);
            return (r > -1 && ne.stages.splice(r, 1), this);
          }),
          (l.prototype.getPointerPosition = function () {
            var e =
              this._pointerPositions[0] || this._changedPointerPositions[0];
            return e ? { x: e.x, y: e.y } : (t.Util.warn(ce), null);
          }),
          (l.prototype._getPointerById = function (e) {
            return this._pointerPositions.find(function (t) {
              return t.id === e;
            });
          }),
          (l.prototype.getPointersPositions = function () {
            return this._pointerPositions;
          }),
          (l.prototype.getStage = function () {
            return this;
          }),
          (l.prototype.getContent = function () {
            return this.content;
          }),
          (l.prototype._toKonvaCanvas = function (e) {
            ((e = e || {}),
              (e.x = e.x || 0),
              (e.y = e.y || 0),
              (e.width = e.width || this.width()),
              (e.height = e.height || this.height()));
            var t = new a.SceneCanvas({
                width: e.width,
                height: e.height,
                pixelRatio: e.pixelRatio || 1,
              }),
              n = t.getContext()._context,
              r = this.children;
            return (
              (e.x || e.y) && n.translate(-1 * e.x, -1 * e.y),
              r.each(function (t) {
                if (t.isVisible()) {
                  var r = t._toKonvaCanvas(e);
                  n.drawImage(
                    r._canvas,
                    e.x,
                    e.y,
                    r.getWidth() / r.getPixelRatio(),
                    r.getHeight() / r.getPixelRatio(),
                  );
                }
              }),
              t
            );
          }),
          (l.prototype.getIntersection = function (e, t) {
            if (!e) return null;
            var n = this.children,
              r = n.length,
              o = r - 1,
              a,
              i;
            for (a = o; a >= 0; a--)
              if (((i = n[a].getIntersection(e, t)), i)) return i;
            return null;
          }),
          (l.prototype._resizeDOM = function () {
            var e = this.width(),
              t = this.height();
            (this.content &&
              ((this.content.style.width = e + m),
              (this.content.style.height = t + m)),
              this.bufferCanvas.setSize(e, t),
              this.bufferHitCanvas.setSize(e, t),
              this.children.each(function (n) {
                (n.setSize({ width: e, height: t }), n.draw());
              }));
          }),
          (l.prototype.add = function (e) {
            if (arguments.length > 1) {
              for (var r = 0; r < arguments.length; r++) this.add(arguments[r]);
              return this;
            }
            n.prototype.add.call(this, e);
            var a = this.children.length;
            return (
              a > ae &&
                t.Util.warn(
                  "The stage has " +
                    a +
                    " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.",
                ),
              e.setSize({ width: this.width(), height: this.height() }),
              e.draw(),
              o.Konva.isBrowser && this.content.appendChild(e.canvas._canvas),
              this
            );
          }),
          (l.prototype.getParent = function () {
            return null;
          }),
          (l.prototype.getLayer = function () {
            return null;
          }),
          (l.prototype.hasPointerCapture = function (e) {
            return s.hasPointerCapture(e, this);
          }),
          (l.prototype.setPointerCapture = function (e) {
            s.setPointerCapture(e, this);
          }),
          (l.prototype.releaseCapture = function (e) {
            s.releaseCapture(e, this);
          }),
          (l.prototype.getLayers = function () {
            return this.getChildren();
          }),
          (l.prototype._bindContentEvents = function () {
            if (o.Konva.isBrowser) for (var e = 0; e < se; e++) ue(this, le[e]);
          }),
          (l.prototype._mouseenter = function (e) {
            (this.setPointersPositions(e),
              this._fire(h, { evt: e, target: this, currentTarget: this }));
          }),
          (l.prototype._mouseover = function (e) {
            (this.setPointersPositions(e),
              this._fire(O, { evt: e }),
              this._fire(g, { evt: e, target: this, currentTarget: this }));
          }),
          (l.prototype._mouseout = function (e) {
            var t;
            this.setPointersPositions(e);
            var n =
                !((t = this.targetShape) === null || t === void 0) &&
                t.getStage()
                  ? this.targetShape
                  : null,
              r = !i.DD.isDragging || o.Konva.hitOnDragEnabled;
            (n && r
              ? (n._fireAndBubble(p, { evt: e }),
                n._fireAndBubble(_, { evt: e }),
                this._fire(_, { evt: e, target: this, currentTarget: this }),
                (this.targetShape = null))
              : r &&
                (this._fire(_, { evt: e, target: this, currentTarget: this }),
                this._fire(p, { evt: e, target: this, currentTarget: this })),
              (this.pointerPos = void 0),
              (this._pointerPositions = []),
              this._fire(F, { evt: e }));
          }),
          (l.prototype._mousemove = function (e) {
            var n;
            if (o.Konva.UA.ieMobile) return this._touchmove(e);
            this.setPointersPositions(e);
            var r = t.Util._getFirstPointerId(e),
              a,
              l =
                !((n = this.targetShape) === null || n === void 0) &&
                n.getStage()
                  ? this.targetShape
                  : null,
              s = !i.DD.isDragging || o.Konva.hitOnDragEnabled;
            if (s) {
              if (
                ((a = this.getIntersection(this.getPointerPosition())),
                a && a.isListening())
              ) {
                var u = l !== a;
                s && u
                  ? (l &&
                      (l._fireAndBubble(p, { evt: e, pointerId: r }, a),
                      l._fireAndBubble(_, { evt: e, pointerId: r }, a)),
                    a._fireAndBubble(g, { evt: e, pointerId: r }, l),
                    a._fireAndBubble(h, { evt: e, pointerId: r }, l),
                    a._fireAndBubble(y, { evt: e, pointerId: r }),
                    (this.targetShape = a))
                  : a._fireAndBubble(y, { evt: e, pointerId: r });
              } else
                (l &&
                  s &&
                  (l._fireAndBubble(p, { evt: e, pointerId: r }),
                  l._fireAndBubble(_, { evt: e, pointerId: r }),
                  this._fire(g, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: r,
                  }),
                  (this.targetShape = null)),
                  this._fire(y, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: r,
                  }));
              this._fire(B, { evt: e });
            }
            e.cancelable && e.preventDefault();
          }),
          (l.prototype._mousedown = function (e) {
            if (o.Konva.UA.ieMobile) return this._touchstart(e);
            this.setPointersPositions(e);
            var n = t.Util._getFirstPointerId(e),
              r = this.getIntersection(this.getPointerPosition());
            ((i.DD.justDragged = !1),
              (o.Konva.listenClickTap = !0),
              r && r.isListening()
                ? ((this.clickStartShape = r),
                  r._fireAndBubble(C, { evt: e, pointerId: n }))
                : this._fire(C, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: n,
                  }),
              this._fire(q, { evt: e }));
          }),
          (l.prototype._mouseup = function (e) {
            if (o.Konva.UA.ieMobile) return this._touchend(e);
            this.setPointersPositions(e);
            var n = t.Util._getFirstPointerId(e),
              r = this.getIntersection(this.getPointerPosition()),
              a = this.clickStartShape,
              l = this.clickEndShape,
              s = !1;
            (o.Konva.inDblClickWindow
              ? ((s = !0), clearTimeout(this.dblTimeout))
              : i.DD.justDragged ||
                ((o.Konva.inDblClickWindow = !0),
                clearTimeout(this.dblTimeout)),
              (this.dblTimeout = setTimeout(function () {
                o.Konva.inDblClickWindow = !1;
              }, o.Konva.dblClickWindow)),
              r && r.isListening()
                ? ((this.clickEndShape = r),
                  r._fireAndBubble(b, { evt: e, pointerId: n }),
                  o.Konva.listenClickTap &&
                    a &&
                    a._id === r._id &&
                    (r._fireAndBubble(T, { evt: e, pointerId: n }),
                    s &&
                      l &&
                      l === r &&
                      r._fireAndBubble(D, { evt: e, pointerId: n })))
                : ((this.clickEndShape = null),
                  this._fire(b, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: n,
                  }),
                  o.Konva.listenClickTap &&
                    this._fire(T, {
                      evt: e,
                      target: this,
                      currentTarget: this,
                      pointerId: n,
                    }),
                  s &&
                    this._fire(D, {
                      evt: e,
                      target: this,
                      currentTarget: this,
                      pointerId: n,
                    })),
              this._fire(U, { evt: e }),
              o.Konva.listenClickTap &&
                (this._fire(H, { evt: e }), s && this._fire(G, { evt: e })),
              (o.Konva.listenClickTap = !1),
              e.cancelable && e.preventDefault());
          }),
          (l.prototype._contextmenu = function (e) {
            this.setPointersPositions(e);
            var t = this.getIntersection(this.getPointerPosition());
            (t && t.isListening()
              ? t._fireAndBubble(I, { evt: e })
              : this._fire(I, { evt: e, target: this, currentTarget: this }),
              this._fire(V, { evt: e }));
          }),
          (l.prototype._touchstart = function (e) {
            var t = this;
            this.setPointersPositions(e);
            var n = !1;
            (this._changedPointerPositions.forEach(function (r) {
              var a = t.getIntersection(r);
              ((o.Konva.listenClickTap = !0), (i.DD.justDragged = !1));
              var l = a && a.isListening();
              l &&
                (o.Konva.captureTouchEventsEnabled && a.setPointerCapture(r.id),
                (t.tapStartShape = a),
                a._fireAndBubble(x, { evt: e, pointerId: r.id }, t),
                (n = !0),
                a.isListening() &&
                  a.preventDefault() &&
                  e.cancelable &&
                  e.preventDefault());
            }),
              n ||
                this._fire(x, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              this._fire(z, { evt: e }));
          }),
          (l.prototype._touchmove = function (e) {
            var t = this;
            this.setPointersPositions(e);
            var n = !i.DD.isDragging || o.Konva.hitOnDragEnabled;
            if (n) {
              var r = !1,
                a = {};
              (this._changedPointerPositions.forEach(function (n) {
                var o = s.getCapturedShape(n.id) || t.getIntersection(n),
                  i = o && o.isListening();
                i &&
                  (a[o._id] ||
                    ((a[o._id] = !0),
                    o._fireAndBubble(M, { evt: e, pointerId: n.id }),
                    (r = !0),
                    o.isListening() &&
                      o.preventDefault() &&
                      e.cancelable &&
                      e.preventDefault()));
              }),
                r ||
                  this._fire(M, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: this._changedPointerPositions[0].id,
                  }),
                this._fire(Y, { evt: e }));
            }
            i.DD.isDragging &&
              i.DD.node.preventDefault() &&
              e.cancelable &&
              e.preventDefault();
          }),
          (l.prototype._touchend = function (e) {
            var t = this;
            this.setPointersPositions(e);
            var n = this.tapEndShape,
              r = !1;
            (o.Konva.inDblClickWindow
              ? ((r = !0), clearTimeout(this.dblTimeout))
              : i.DD.justDragged ||
                ((o.Konva.inDblClickWindow = !0),
                clearTimeout(this.dblTimeout)),
              (this.dblTimeout = setTimeout(function () {
                o.Konva.inDblClickWindow = !1;
              }, o.Konva.dblClickWindow)));
            var a = !1,
              l = {},
              u = !1,
              c = !1;
            (this._changedPointerPositions.forEach(function (i) {
              var d = s.getCapturedShape(i.id) || t.getIntersection(i);
              d && d.releaseCapture(i.id);
              var m = d && d.isListening();
              m &&
                (l[d._id] ||
                  ((l[d._id] = !0),
                  (t.tapEndShape = d),
                  d._fireAndBubble($, { evt: e, pointerId: i.id }),
                  (a = !0),
                  o.Konva.listenClickTap &&
                    d === t.tapStartShape &&
                    ((u = !0),
                    d._fireAndBubble(P, { evt: e, pointerId: i.id }),
                    r &&
                      n &&
                      n === d &&
                      ((c = !0),
                      d._fireAndBubble(N, { evt: e, pointerId: i.id }))),
                  d.isListening() &&
                    d.preventDefault() &&
                    e.cancelable &&
                    e.preventDefault()));
            }),
              a ||
                this._fire($, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              o.Konva.listenClickTap &&
                !u &&
                ((this.tapEndShape = null),
                this._fire(P, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                })),
              r &&
                !c &&
                this._fire(N, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              this._fire(j, { evt: e }),
              o.Konva.listenClickTap &&
                (this._fire(Q, { evt: e }), r && this._fire(K, { evt: e })),
              this.preventDefault() && e.cancelable && e.preventDefault(),
              (o.Konva.listenClickTap = !1));
          }),
          (l.prototype._wheel = function (e) {
            this.setPointersPositions(e);
            var t = this.getIntersection(this.getPointerPosition());
            (t && t.isListening()
              ? t._fireAndBubble(A, { evt: e })
              : this._fire(A, { evt: e, target: this, currentTarget: this }),
              this._fire(J, { evt: e }));
          }),
          (l.prototype._pointerdown = function (e) {
            if (o.Konva._pointerEventsEnabled) {
              this.setPointersPositions(e);
              var t =
                s.getCapturedShape(e.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              t && t._fireAndBubble(S, s.createEvent(e));
            }
          }),
          (l.prototype._pointermove = function (e) {
            if (o.Konva._pointerEventsEnabled) {
              this.setPointersPositions(e);
              var t =
                s.getCapturedShape(e.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              t && t._fireAndBubble(v, s.createEvent(e));
            }
          }),
          (l.prototype._pointerup = function (e) {
            if (o.Konva._pointerEventsEnabled) {
              this.setPointersPositions(e);
              var t =
                s.getCapturedShape(e.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              (t && t._fireAndBubble(R, s.createEvent(e)),
                s.releaseCapture(e.pointerId));
            }
          }),
          (l.prototype._pointercancel = function (e) {
            if (o.Konva._pointerEventsEnabled) {
              this.setPointersPositions(e);
              var t =
                s.getCapturedShape(e.pointerId) ||
                this.getIntersection(this.getPointerPosition());
              (t && t._fireAndBubble(R, s.createEvent(e)),
                s.releaseCapture(e.pointerId));
            }
          }),
          (l.prototype._lostpointercapture = function (e) {
            s.releaseCapture(e.pointerId);
          }),
          (l.prototype.setPointersPositions = function (e) {
            var n = this,
              r = this._getContentPosition(),
              o = null,
              a = null;
            ((e = e || window.event),
              e.touches !== void 0
                ? ((this._pointerPositions = []),
                  (this._changedPointerPositions = []),
                  t.Collection.prototype.each.call(e.touches, function (e) {
                    n._pointerPositions.push({
                      id: e.identifier,
                      x: (e.clientX - r.left) / r.scaleX,
                      y: (e.clientY - r.top) / r.scaleY,
                    });
                  }),
                  t.Collection.prototype.each.call(
                    e.changedTouches || e.touches,
                    function (e) {
                      n._changedPointerPositions.push({
                        id: e.identifier,
                        x: (e.clientX - r.left) / r.scaleX,
                        y: (e.clientY - r.top) / r.scaleY,
                      });
                    },
                  ))
                : ((o = (e.clientX - r.left) / r.scaleX),
                  (a = (e.clientY - r.top) / r.scaleY),
                  (this.pointerPos = { x: o, y: a }),
                  (this._pointerPositions = [
                    { x: o, y: a, id: t.Util._getFirstPointerId(e) },
                  ]),
                  (this._changedPointerPositions = [
                    { x: o, y: a, id: t.Util._getFirstPointerId(e) },
                  ])));
          }),
          (l.prototype._setPointerPosition = function (e) {
            (t.Util.warn(
              'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.',
            ),
              this.setPointersPositions(e));
          }),
          (l.prototype._getContentPosition = function () {
            if (!this.content || !this.content.getBoundingClientRect)
              return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
            var e = this.content.getBoundingClientRect();
            return {
              top: e.top,
              left: e.left,
              scaleX: e.width / this.content.clientWidth || 1,
              scaleY: e.height / this.content.clientHeight || 1,
            };
          }),
          (l.prototype._buildDOM = function () {
            if (
              ((this.bufferCanvas = new a.SceneCanvas({
                width: this.width(),
                height: this.height(),
              })),
              (this.bufferHitCanvas = new a.HitCanvas({
                pixelRatio: 1,
                width: this.width(),
                height: this.height(),
              })),
              !!o.Konva.isBrowser)
            ) {
              var e = this.container();
              if (!e) throw "Stage has no container. A container is required.";
              ((e.innerHTML = ie),
                (this.content = document.createElement("div")),
                (this.content.style.position = Z),
                (this.content.style.userSelect = "none"),
                (this.content.className = ee),
                this.content.setAttribute("role", "presentation"),
                e.appendChild(this.content),
                this._resizeDOM());
            }
          }),
          (l.prototype.cache = function () {
            return (
              t.Util.warn(
                "Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.",
              ),
              this
            );
          }),
          (l.prototype.clearCache = function () {
            return this;
          }),
          (l.prototype.batchDraw = function () {
            return (
              this.children.each(function (e) {
                e.batchDraw();
              }),
              this
            );
          }),
          l
        );
      })(r.Container);
      ((ne.Stage = me),
        (me.prototype.nodeType = u),
        l._registerNode(me),
        n.Factory.addGetterSetter(me, "container"));
    }
    var ae = !1;
    function ie() {
      return (ae || ((ae = !0), oe()), re.exports);
    }
    var le = {},
      se = { exports: le };
    function ue() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(le, "__esModule", { value: !0 }),
        (le.Shape = le.shapes = void 0));
      var t = f(),
        n = E(),
        r = G(),
        o = b(),
        a = c(),
        i = te(),
        l = "hasShadow",
        s = "shadowRGBA",
        u = "patternImage",
        d = "linearGradient",
        m = "radialGradient",
        p;
      function _() {
        return p || ((p = t.Util.createCanvasElement().getContext("2d")), p);
      }
      le.shapes = {};
      function g(e) {
        e.fill();
      }
      function h(e) {
        e.stroke();
      }
      function y(e) {
        e.fill();
      }
      function C(e) {
        e.stroke();
      }
      function v() {
        this._clearCache(l);
      }
      function S() {
        this._clearCache(s);
      }
      function R() {
        this._clearCache(u);
      }
      function L() {
        this._clearCache(d);
      }
      function k() {
        this._clearCache(m);
      }
      var I = (function (n) {
        e(o, n);
        function o(e) {
          for (
            var r = n.call(this, e) || this, o;
            (o = t.Util.getRandomColor()), !(o && !(o in le.shapes));
          );
          return ((r.colorKey = o), (le.shapes[o] = r), r);
        }
        return (
          (o.prototype.getContext = function () {
            return this.getLayer().getContext();
          }),
          (o.prototype.getCanvas = function () {
            return this.getLayer().getCanvas();
          }),
          (o.prototype.getSceneFunc = function () {
            return this.attrs.sceneFunc || this._sceneFunc;
          }),
          (o.prototype.getHitFunc = function () {
            return this.attrs.hitFunc || this._hitFunc;
          }),
          (o.prototype.hasShadow = function () {
            return this._getCache(l, this._hasShadow);
          }),
          (o.prototype._hasShadow = function () {
            return (
              this.shadowEnabled() &&
              this.shadowOpacity() !== 0 &&
              !!(
                this.shadowColor() ||
                this.shadowBlur() ||
                this.shadowOffsetX() ||
                this.shadowOffsetY()
              )
            );
          }),
          (o.prototype._getFillPattern = function () {
            return this._getCache(u, this.__getFillPattern);
          }),
          (o.prototype.__getFillPattern = function () {
            if (this.fillPatternImage()) {
              var e = _(),
                t = e.createPattern(
                  this.fillPatternImage(),
                  this.fillPatternRepeat() || "repeat",
                );
              return (
                t &&
                  t.setTransform &&
                  t.setTransform({
                    a: this.fillPatternScaleX(),
                    b: 0,
                    c: 0,
                    d: this.fillPatternScaleY(),
                    e: 0,
                    f: 0,
                  }),
                t
              );
            }
          }),
          (o.prototype._getLinearGradient = function () {
            return this._getCache(d, this.__getLinearGradient);
          }),
          (o.prototype.__getLinearGradient = function () {
            var e = this.fillLinearGradientColorStops();
            if (e) {
              for (
                var t = _(),
                  n = this.fillLinearGradientStartPoint(),
                  r = this.fillLinearGradientEndPoint(),
                  o = t.createLinearGradient(n.x, n.y, r.x, r.y),
                  a = 0;
                a < e.length;
                a += 2
              )
                o.addColorStop(e[a], e[a + 1]);
              return o;
            }
          }),
          (o.prototype._getRadialGradient = function () {
            return this._getCache(m, this.__getRadialGradient);
          }),
          (o.prototype.__getRadialGradient = function () {
            var e = this.fillRadialGradientColorStops();
            if (e) {
              for (
                var t = _(),
                  n = this.fillRadialGradientStartPoint(),
                  r = this.fillRadialGradientEndPoint(),
                  o = t.createRadialGradient(
                    n.x,
                    n.y,
                    this.fillRadialGradientStartRadius(),
                    r.x,
                    r.y,
                    this.fillRadialGradientEndRadius(),
                  ),
                  a = 0;
                a < e.length;
                a += 2
              )
                o.addColorStop(e[a], e[a + 1]);
              return o;
            }
          }),
          (o.prototype.getShadowRGBA = function () {
            return this._getCache(s, this._getShadowRGBA);
          }),
          (o.prototype._getShadowRGBA = function () {
            if (this.hasShadow()) {
              var e = t.Util.colorToRGBA(this.shadowColor());
              return (
                "rgba(" +
                e.r +
                "," +
                e.g +
                "," +
                e.b +
                "," +
                e.a * (this.shadowOpacity() || 1) +
                ")"
              );
            }
          }),
          (o.prototype.hasFill = function () {
            var e = this;
            return this._calculate(
              "hasFill",
              [
                "fillEnabled",
                "fill",
                "fillPatternImage",
                "fillLinearGradientColorStops",
                "fillRadialGradientColorStops",
              ],
              function () {
                return (
                  e.fillEnabled() &&
                  !!(
                    e.fill() ||
                    e.fillPatternImage() ||
                    e.fillLinearGradientColorStops() ||
                    e.fillRadialGradientColorStops()
                  )
                );
              },
            );
          }),
          (o.prototype.hasStroke = function () {
            var e = this;
            return this._calculate(
              "hasStroke",
              [
                "strokeEnabled",
                "strokeWidth",
                "stroke",
                "strokeLinearGradientColorStops",
              ],
              function () {
                return (
                  e.strokeEnabled() &&
                  e.strokeWidth() &&
                  !!(e.stroke() || e.strokeLinearGradientColorStops())
                );
              },
            );
          }),
          (o.prototype.hasHitStroke = function () {
            var e = this.hitStrokeWidth();
            return e === "auto"
              ? this.hasStroke()
              : this.strokeEnabled() && !!e;
          }),
          (o.prototype.intersects = function (e) {
            var t = this.getStage(),
              n = t.bufferHitCanvas,
              r;
            return (
              n.getContext().clear(),
              this.drawHit(n, null, !0),
              (r = n.context.getImageData(
                Math.round(e.x),
                Math.round(e.y),
                1,
                1,
              ).data),
              r[3] > 0
            );
          }),
          (o.prototype.destroy = function () {
            return (
              r.Node.prototype.destroy.call(this),
              delete le.shapes[this.colorKey],
              delete this.colorKey,
              this
            );
          }),
          (o.prototype._useBufferCanvas = function (e) {
            var t;
            if (!this.getStage()) return !1;
            var n =
              (t = this.attrs.perfectDrawEnabled) !== null && t !== void 0
                ? t
                : !0;
            if (!n) return !1;
            var r = e || this.hasFill(),
              o = this.hasStroke(),
              a = this.getAbsoluteOpacity() !== 1;
            if (r && o && a) return !0;
            var i = this.hasShadow(),
              l = this.shadowForStrokeEnabled();
            return !!(r && o && i && l);
          }),
          (o.prototype.setStrokeHitEnabled = function (e) {
            (t.Util.warn(
              "strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.",
            ),
              e ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0));
          }),
          (o.prototype.getStrokeHitEnabled = function () {
            return this.hitStrokeWidth() !== 0;
          }),
          (o.prototype.getSelfRect = function () {
            var e = this.size();
            return {
              x: this._centroid ? -e.width / 2 : 0,
              y: this._centroid ? -e.height / 2 : 0,
              width: e.width,
              height: e.height,
            };
          }),
          (o.prototype.getClientRect = function (e) {
            e === void 0 && (e = {});
            var t = e.skipTransform,
              n = e.relativeTo,
              r = this.getSelfRect(),
              o = !e.skipStroke && this.hasStroke(),
              a = (o && this.strokeWidth()) || 0,
              i = r.width + a,
              l = r.height + a,
              s = !e.skipShadow && this.hasShadow(),
              u = s ? this.shadowOffsetX() : 0,
              c = s ? this.shadowOffsetY() : 0,
              d = i + Math.abs(u),
              m = l + Math.abs(c),
              p = (s && this.shadowBlur()) || 0,
              _ = d + p * 2,
              f = m + p * 2,
              g = 0;
            Math.round(a / 2) !== a / 2 && (g = 1);
            var h = {
              width: _ + g,
              height: f + g,
              x: -Math.round(a / 2 + p) + Math.min(u, 0) + r.x,
              y: -Math.round(a / 2 + p) + Math.min(c, 0) + r.y,
            };
            return t ? h : this._transformedRect(h, n);
          }),
          (o.prototype.drawScene = function (e, t) {
            var n = this.getLayer(),
              r = e || n.getCanvas(),
              o = r.getContext(),
              a = this._getCanvasCache(),
              i = this.getSceneFunc(),
              l = this.hasShadow(),
              s,
              u,
              c,
              d = r.isCache,
              m = r.isCache,
              p = t === this;
            if (!this.isVisible() && !d) return this;
            if (a) {
              o.save();
              var _ = this.getAbsoluteTransform(t).getMatrix();
              return (
                o.transform(_[0], _[1], _[2], _[3], _[4], _[5]),
                this._drawCachedSceneCanvas(o),
                o.restore(),
                this
              );
            }
            if (!i) return this;
            if ((o.save(), this._useBufferCanvas() && !m)) {
              ((s = this.getStage()),
                (u = s.bufferCanvas),
                (c = u.getContext()),
                c.clear(),
                c.save(),
                c._applyLineJoin(this));
              var f = this.getAbsoluteTransform(t).getMatrix();
              (c.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
                i.call(this, c, this),
                c.restore());
              var g = u.pixelRatio;
              (l && o._applyShadow(this),
                o._applyOpacity(this),
                o._applyGlobalCompositeOperation(this),
                o.drawImage(u._canvas, 0, 0, u.width / g, u.height / g));
            } else {
              if ((o._applyLineJoin(this), !p)) {
                var f = this.getAbsoluteTransform(t).getMatrix();
                (o.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
                  o._applyOpacity(this),
                  o._applyGlobalCompositeOperation(this));
              }
              (l && o._applyShadow(this), i.call(this, o, this));
            }
            return (o.restore(), this);
          }),
          (o.prototype.drawHit = function (e, n, r) {
            if ((r === void 0 && (r = !1), !this.shouldDrawHit(n, r)))
              return this;
            var o = this.getLayer(),
              a = e || o.hitCanvas,
              i = a && a.getContext(),
              l = this.hitFunc() || this.sceneFunc(),
              s = this._getCanvasCache(),
              u = s && s.hit;
            if (
              (this.colorKey ||
                t.Util.warn(
                  "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()",
                ),
              u)
            ) {
              i.save();
              var c = this.getAbsoluteTransform(n).getMatrix();
              return (
                i.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
                this._drawCachedHitCanvas(i),
                i.restore(),
                this
              );
            }
            if (!l) return this;
            (i.save(), i._applyLineJoin(this));
            var d = this === n;
            if (!d) {
              var m = this.getAbsoluteTransform(n).getMatrix();
              i.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            }
            return (l.call(this, i, this), i.restore(), this);
          }),
          (o.prototype.drawHitFromCache = function (e) {
            e === void 0 && (e = 0);
            var n = this._getCanvasCache(),
              r = this._getCachedSceneCanvas(),
              o = n.hit,
              a = o.getContext(),
              i = o.getWidth(),
              l = o.getHeight(),
              s,
              u,
              c,
              d,
              m,
              p;
            (a.clear(), a.drawImage(r._canvas, 0, 0, i, l));
            try {
              for (
                s = a.getImageData(0, 0, i, l),
                  u = s.data,
                  c = u.length,
                  d = t.Util._hexToRgb(this.colorKey),
                  m = 0;
                m < c;
                m += 4
              )
                ((p = u[m + 3]),
                  p > e
                    ? ((u[m] = d.r),
                      (u[m + 1] = d.g),
                      (u[m + 2] = d.b),
                      (u[m + 3] = 255))
                    : (u[m + 3] = 0));
              a.putImageData(s, 0, 0);
            } catch (e) {
              t.Util.error(
                "Unable to draw hit graph from cached scene canvas. " +
                  e.message,
              );
            }
            return this;
          }),
          (o.prototype.hasPointerCapture = function (e) {
            return i.hasPointerCapture(e, this);
          }),
          (o.prototype.setPointerCapture = function (e) {
            i.setPointerCapture(e, this);
          }),
          (o.prototype.releaseCapture = function (e) {
            i.releaseCapture(e, this);
          }),
          o
        );
      })(r.Node);
      ((le.Shape = I),
        (I.prototype._fillFunc = g),
        (I.prototype._strokeFunc = h),
        (I.prototype._fillFuncHit = y),
        (I.prototype._strokeFuncHit = C),
        (I.prototype._centroid = !1),
        (I.prototype.nodeType = "Shape"),
        a._registerNode(I),
        (I.prototype.eventListeners = {}),
        I.prototype.on.call(
          I.prototype,
          "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
          v,
        ),
        I.prototype.on.call(
          I.prototype,
          "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
          S,
        ),
        I.prototype.on.call(
          I.prototype,
          "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva",
          R,
        ),
        I.prototype.on.call(
          I.prototype,
          "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
          L,
        ),
        I.prototype.on.call(
          I.prototype,
          "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
          k,
        ),
        n.Factory.addGetterSetter(
          I,
          "stroke",
          void 0,
          o.getStringOrGradientValidator(),
        ),
        n.Factory.addGetterSetter(I, "strokeWidth", 2, o.getNumberValidator()),
        n.Factory.addGetterSetter(I, "fillAfterStrokeEnabled", !1),
        n.Factory.addGetterSetter(
          I,
          "hitStrokeWidth",
          "auto",
          o.getNumberOrAutoValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "strokeHitEnabled",
          !0,
          o.getBooleanValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "perfectDrawEnabled",
          !0,
          o.getBooleanValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "shadowForStrokeEnabled",
          !0,
          o.getBooleanValidator(),
        ),
        n.Factory.addGetterSetter(I, "lineJoin"),
        n.Factory.addGetterSetter(I, "lineCap"),
        n.Factory.addGetterSetter(I, "sceneFunc"),
        n.Factory.addGetterSetter(I, "hitFunc"),
        n.Factory.addGetterSetter(I, "dash"),
        n.Factory.addGetterSetter(I, "dashOffset", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(
          I,
          "shadowColor",
          void 0,
          o.getStringValidator(),
        ),
        n.Factory.addGetterSetter(I, "shadowBlur", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(
          I,
          "shadowOpacity",
          1,
          o.getNumberValidator(),
        ),
        n.Factory.addComponentsGetterSetter(I, "shadowOffset", ["x", "y"]),
        n.Factory.addGetterSetter(
          I,
          "shadowOffsetX",
          0,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "shadowOffsetY",
          0,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(I, "fillPatternImage"),
        n.Factory.addGetterSetter(
          I,
          "fill",
          void 0,
          o.getStringOrGradientValidator(),
        ),
        n.Factory.addGetterSetter(I, "fillPatternX", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(I, "fillPatternY", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(I, "fillLinearGradientColorStops"),
        n.Factory.addGetterSetter(I, "strokeLinearGradientColorStops"),
        n.Factory.addGetterSetter(I, "fillRadialGradientStartRadius", 0),
        n.Factory.addGetterSetter(I, "fillRadialGradientEndRadius", 0),
        n.Factory.addGetterSetter(I, "fillRadialGradientColorStops"),
        n.Factory.addGetterSetter(I, "fillPatternRepeat", "repeat"),
        n.Factory.addGetterSetter(I, "fillEnabled", !0),
        n.Factory.addGetterSetter(I, "strokeEnabled", !0),
        n.Factory.addGetterSetter(I, "shadowEnabled", !0),
        n.Factory.addGetterSetter(I, "dashEnabled", !0),
        n.Factory.addGetterSetter(I, "strokeScaleEnabled", !0),
        n.Factory.addGetterSetter(I, "fillPriority", "color"),
        n.Factory.addComponentsGetterSetter(I, "fillPatternOffset", ["x", "y"]),
        n.Factory.addGetterSetter(
          I,
          "fillPatternOffsetX",
          0,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "fillPatternOffsetY",
          0,
          o.getNumberValidator(),
        ),
        n.Factory.addComponentsGetterSetter(I, "fillPatternScale", ["x", "y"]),
        n.Factory.addGetterSetter(
          I,
          "fillPatternScaleX",
          1,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          I,
          "fillPatternScaleY",
          1,
          o.getNumberValidator(),
        ),
        n.Factory.addComponentsGetterSetter(I, "fillLinearGradientStartPoint", [
          "x",
          "y",
        ]),
        n.Factory.addComponentsGetterSetter(
          I,
          "strokeLinearGradientStartPoint",
          ["x", "y"],
        ),
        n.Factory.addGetterSetter(I, "fillLinearGradientStartPointX", 0),
        n.Factory.addGetterSetter(I, "strokeLinearGradientStartPointX", 0),
        n.Factory.addGetterSetter(I, "fillLinearGradientStartPointY", 0),
        n.Factory.addGetterSetter(I, "strokeLinearGradientStartPointY", 0),
        n.Factory.addComponentsGetterSetter(I, "fillLinearGradientEndPoint", [
          "x",
          "y",
        ]),
        n.Factory.addComponentsGetterSetter(I, "strokeLinearGradientEndPoint", [
          "x",
          "y",
        ]),
        n.Factory.addGetterSetter(I, "fillLinearGradientEndPointX", 0),
        n.Factory.addGetterSetter(I, "strokeLinearGradientEndPointX", 0),
        n.Factory.addGetterSetter(I, "fillLinearGradientEndPointY", 0),
        n.Factory.addGetterSetter(I, "strokeLinearGradientEndPointY", 0),
        n.Factory.addComponentsGetterSetter(I, "fillRadialGradientStartPoint", [
          "x",
          "y",
        ]),
        n.Factory.addGetterSetter(I, "fillRadialGradientStartPointX", 0),
        n.Factory.addGetterSetter(I, "fillRadialGradientStartPointY", 0),
        n.Factory.addComponentsGetterSetter(I, "fillRadialGradientEndPoint", [
          "x",
          "y",
        ]),
        n.Factory.addGetterSetter(I, "fillRadialGradientEndPointX", 0),
        n.Factory.addGetterSetter(I, "fillRadialGradientEndPointY", 0),
        n.Factory.addGetterSetter(I, "fillPatternRotation", 0),
        n.Factory.backCompat(I, {
          dashArray: "dash",
          getDashArray: "getDash",
          setDashArray: "getDash",
          drawFunc: "sceneFunc",
          getDrawFunc: "getSceneFunc",
          setDrawFunc: "setSceneFunc",
          drawHitFunc: "hitFunc",
          getDrawHitFunc: "getHitFunc",
          setDrawHitFunc: "setHitFunc",
        }),
        t.Collection.mapMethods(I));
    }
    var ce = !1;
    function de() {
      return (ce || ((ce = !0), ue()), se.exports);
    }
    var me = {},
      pe = { exports: me };
    function _e() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(me, "__esModule", { value: !0 }),
        (me.Layer = void 0));
      var t = f(),
        n = X(),
        r = G(),
        o = E(),
        a = w(),
        i = b(),
        l = de(),
        s = c(),
        u = "#",
        d = "beforeDraw",
        m = "draw",
        p = [
          { x: 0, y: 0 },
          { x: -1, y: -1 },
          { x: 1, y: -1 },
          { x: 1, y: 1 },
          { x: -1, y: 1 },
        ],
        _ = p.length,
        g = (function (o) {
          e(i, o);
          function i(e) {
            var t = o.call(this, e) || this;
            return (
              (t.canvas = new a.SceneCanvas()),
              (t.hitCanvas = new a.HitCanvas({ pixelRatio: 1 })),
              (t._waitingForDraw = !1),
              t.on("visibleChange.konva", t._checkVisibility),
              t._checkVisibility(),
              t.on("imageSmoothingEnabledChange.konva", t._setSmoothEnabled),
              t._setSmoothEnabled(),
              t
            );
          }
          return (
            (i.prototype.createPNGStream = function () {
              var e = this.canvas._canvas;
              return e.createPNGStream();
            }),
            (i.prototype.getCanvas = function () {
              return this.canvas;
            }),
            (i.prototype.getHitCanvas = function () {
              return this.hitCanvas;
            }),
            (i.prototype.getContext = function () {
              return this.getCanvas().getContext();
            }),
            (i.prototype.clear = function (e) {
              return (
                this.getContext().clear(e),
                this.getHitCanvas().getContext().clear(e),
                this
              );
            }),
            (i.prototype.setZIndex = function (e) {
              o.prototype.setZIndex.call(this, e);
              var t = this.getStage();
              return (
                t &&
                  (t.content.removeChild(this.getCanvas()._canvas),
                  e < t.children.length - 1
                    ? t.content.insertBefore(
                        this.getCanvas()._canvas,
                        t.children[e + 1].getCanvas()._canvas,
                      )
                    : t.content.appendChild(this.getCanvas()._canvas)),
                this
              );
            }),
            (i.prototype.moveToTop = function () {
              r.Node.prototype.moveToTop.call(this);
              var e = this.getStage();
              return (
                e &&
                  (e.content.removeChild(this.getCanvas()._canvas),
                  e.content.appendChild(this.getCanvas()._canvas)),
                !0
              );
            }),
            (i.prototype.moveUp = function () {
              var e = r.Node.prototype.moveUp.call(this);
              if (!e) return !1;
              var t = this.getStage();
              return t
                ? (t.content.removeChild(this.getCanvas()._canvas),
                  this.index < t.children.length - 1
                    ? t.content.insertBefore(
                        this.getCanvas()._canvas,
                        t.children[this.index + 1].getCanvas()._canvas,
                      )
                    : t.content.appendChild(this.getCanvas()._canvas),
                  !0)
                : !1;
            }),
            (i.prototype.moveDown = function () {
              if (r.Node.prototype.moveDown.call(this)) {
                var e = this.getStage();
                if (e) {
                  var t = e.children;
                  (e.content.removeChild(this.getCanvas()._canvas),
                    e.content.insertBefore(
                      this.getCanvas()._canvas,
                      t[this.index + 1].getCanvas()._canvas,
                    ));
                }
                return !0;
              }
              return !1;
            }),
            (i.prototype.moveToBottom = function () {
              if (r.Node.prototype.moveToBottom.call(this)) {
                var e = this.getStage();
                if (e) {
                  var t = e.children;
                  (e.content.removeChild(this.getCanvas()._canvas),
                    e.content.insertBefore(
                      this.getCanvas()._canvas,
                      t[1].getCanvas()._canvas,
                    ));
                }
                return !0;
              }
              return !1;
            }),
            (i.prototype.getLayer = function () {
              return this;
            }),
            (i.prototype.remove = function () {
              var e = this.getCanvas()._canvas;
              return (
                r.Node.prototype.remove.call(this),
                e &&
                  e.parentNode &&
                  t.Util._isInDocument(e) &&
                  e.parentNode.removeChild(e),
                this
              );
            }),
            (i.prototype.getStage = function () {
              return this.parent;
            }),
            (i.prototype.setSize = function (e) {
              var t = e.width,
                n = e.height;
              return (
                this.canvas.setSize(t, n),
                this.hitCanvas.setSize(t, n),
                this._setSmoothEnabled(),
                this
              );
            }),
            (i.prototype._validateAdd = function (e) {
              var n = e.getType();
              n !== "Group" &&
                n !== "Shape" &&
                t.Util.throw("You may only add groups and shapes to a layer.");
            }),
            (i.prototype._toKonvaCanvas = function (e) {
              return (
                (e = e || {}),
                (e.width = e.width || this.getWidth()),
                (e.height = e.height || this.getHeight()),
                (e.x = e.x !== void 0 ? e.x : this.x()),
                (e.y = e.y !== void 0 ? e.y : this.y()),
                r.Node.prototype._toKonvaCanvas.call(this, e)
              );
            }),
            (i.prototype._checkVisibility = function () {
              var e = this.visible();
              e
                ? (this.canvas._canvas.style.display = "block")
                : (this.canvas._canvas.style.display = "none");
            }),
            (i.prototype._setSmoothEnabled = function () {
              this.getContext()._context.imageSmoothingEnabled =
                this.imageSmoothingEnabled();
            }),
            (i.prototype.getWidth = function () {
              if (this.parent) return this.parent.width();
            }),
            (i.prototype.setWidth = function () {
              t.Util.warn(
                'Can not change width of layer. Use "stage.width(value)" function instead.',
              );
            }),
            (i.prototype.getHeight = function () {
              if (this.parent) return this.parent.height();
            }),
            (i.prototype.setHeight = function () {
              t.Util.warn(
                'Can not change height of layer. Use "stage.height(value)" function instead.',
              );
            }),
            (i.prototype.batchDraw = function () {
              var e = this;
              return (
                this._waitingForDraw ||
                  ((this._waitingForDraw = !0),
                  t.Util.requestAnimFrame(function () {
                    (e.draw(), (e._waitingForDraw = !1));
                  })),
                this
              );
            }),
            (i.prototype.getIntersection = function (e, t) {
              if (!this.isListening() || !this.isVisible()) return null;
              for (var n = 1, r = !1; ; ) {
                for (var o = 0; o < _; o++) {
                  var a = p[o],
                    i = this._getIntersection({
                      x: e.x + a.x * n,
                      y: e.y + a.y * n,
                    }),
                    l = i.shape;
                  if (l && t) return l.findAncestor(t, !0);
                  if (l) return l;
                  if (((r = !!i.antialiased), !i.antialiased)) break;
                }
                if (r) n += 1;
                else return null;
              }
            }),
            (i.prototype._getIntersection = function (e) {
              var n = this.hitCanvas.pixelRatio,
                r = this.hitCanvas.context.getImageData(
                  Math.round(e.x * n),
                  Math.round(e.y * n),
                  1,
                  1,
                ).data,
                o = r[3];
              if (o === 255) {
                var a = t.Util._rgbToHex(r[0], r[1], r[2]),
                  i = l.shapes[u + a];
                return i ? { shape: i } : { antialiased: !0 };
              } else if (o > 0) return { antialiased: !0 };
              return {};
            }),
            (i.prototype.drawScene = function (e, t) {
              var r = this.getLayer(),
                o = e || (r && r.getCanvas());
              return (
                this._fire(d, { node: this }),
                this.clearBeforeDraw() && o.getContext().clear(),
                n.Container.prototype.drawScene.call(this, o, t),
                this._fire(m, { node: this }),
                this
              );
            }),
            (i.prototype.drawHit = function (e, t) {
              var r = this.getLayer(),
                o = e || (r && r.hitCanvas);
              return (
                r &&
                  r.clearBeforeDraw() &&
                  r.getHitCanvas().getContext().clear(),
                n.Container.prototype.drawHit.call(this, o, t),
                this
              );
            }),
            (i.prototype.enableHitGraph = function () {
              return (this.hitGraphEnabled(!0), this);
            }),
            (i.prototype.disableHitGraph = function () {
              return (this.hitGraphEnabled(!1), this);
            }),
            (i.prototype.setHitGraphEnabled = function (e) {
              (t.Util.warn(
                "hitGraphEnabled method is deprecated. Please use layer.listening() instead.",
              ),
                this.listening(e));
            }),
            (i.prototype.getHitGraphEnabled = function (e) {
              return (
                t.Util.warn(
                  "hitGraphEnabled method is deprecated. Please use layer.listening() instead.",
                ),
                this.listening()
              );
            }),
            (i.prototype.toggleHitCanvas = function () {
              if (this.parent) {
                var e = this.parent,
                  t = !!this.hitCanvas._canvas.parentNode;
                t
                  ? e.content.removeChild(this.hitCanvas._canvas)
                  : e.content.appendChild(this.hitCanvas._canvas);
              }
            }),
            i
          );
        })(n.Container);
      ((me.Layer = g),
        (g.prototype.nodeType = "Layer"),
        s._registerNode(g),
        o.Factory.addGetterSetter(g, "imageSmoothingEnabled", !0),
        o.Factory.addGetterSetter(g, "clearBeforeDraw", !0),
        o.Factory.addGetterSetter(
          g,
          "hitGraphEnabled",
          !0,
          i.getBooleanValidator(),
        ),
        t.Collection.mapMethods(g));
    }
    var fe = !1;
    function ge() {
      return (fe || ((fe = !0), _e()), pe.exports);
    }
    var he = {},
      ye = { exports: he };
    function Ce() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(he, "__esModule", { value: !0 }),
        (he.FastLayer = void 0));
      var t = f(),
        n = ge(),
        r = c(),
        o = (function (n) {
          e(r, n);
          function r(e) {
            var r = n.call(this, e) || this;
            return (
              r.listening(!1),
              t.Util.warn(
                'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.',
              ),
              r
            );
          }
          return r;
        })(n.Layer);
      ((he.FastLayer = o),
        (o.prototype.nodeType = "FastLayer"),
        r._registerNode(o),
        t.Collection.mapMethods(o));
    }
    var be = !1;
    function ve() {
      return (be || ((be = !0), Ce()), ye.exports);
    }
    var Se = {},
      Re = { exports: Se };
    function Le() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Se, "__esModule", { value: !0 }),
        (Se.Group = void 0));
      var t = f(),
        n = X(),
        r = c(),
        o = (function (n) {
          e(r, n);
          function r() {
            return (n !== null && n.apply(this, arguments)) || this;
          }
          return (
            (r.prototype._validateAdd = function (e) {
              var n = e.getType();
              n !== "Group" &&
                n !== "Shape" &&
                t.Util.throw("You may only add groups and shapes to groups.");
            }),
            r
          );
        })(n.Container);
      ((Se.Group = o),
        (o.prototype.nodeType = "Group"),
        r._registerNode(o),
        t.Collection.mapMethods(o));
    }
    var Ee = !1;
    function ke() {
      return (Ee || ((Ee = !0), Le()), Re.exports);
    }
    var Ie = {},
      Te = { exports: Ie };
    function De() {
      (Object.defineProperty(Ie, "__esModule", { value: !0 }),
        (Ie.Animation = void 0));
      var e = c(),
        t = (function () {
          return e.glob.performance && e.glob.performance.now
            ? function () {
                return e.glob.performance.now();
              }
            : function () {
                return new Date().getTime();
              };
        })(),
        n = (function () {
          function e(n, r) {
            ((this.id = e.animIdCounter++),
              (this.frame = {
                time: 0,
                timeDiff: 0,
                lastTime: t(),
                frameRate: 0,
              }),
              (this.func = n),
              this.setLayers(r));
          }
          return (
            (e.prototype.setLayers = function (e) {
              var t = [];
              return (
                e ? (e.length > 0 ? (t = e) : (t = [e])) : (t = []),
                (this.layers = t),
                this
              );
            }),
            (e.prototype.getLayers = function () {
              return this.layers;
            }),
            (e.prototype.addLayer = function (e) {
              var t = this.layers,
                n = t.length,
                r;
              for (r = 0; r < n; r++) if (t[r]._id === e._id) return !1;
              return (this.layers.push(e), !0);
            }),
            (e.prototype.isRunning = function () {
              var t = e,
                n = t.animations,
                r = n.length,
                o;
              for (o = 0; o < r; o++) if (n[o].id === this.id) return !0;
              return !1;
            }),
            (e.prototype.start = function () {
              return (
                this.stop(),
                (this.frame.timeDiff = 0),
                (this.frame.lastTime = t()),
                e._addAnimation(this),
                this
              );
            }),
            (e.prototype.stop = function () {
              return (e._removeAnimation(this), this);
            }),
            (e.prototype._updateFrameObject = function (e) {
              ((this.frame.timeDiff = e - this.frame.lastTime),
                (this.frame.lastTime = e),
                (this.frame.time += this.frame.timeDiff),
                (this.frame.frameRate = 1e3 / this.frame.timeDiff));
            }),
            (e._addAnimation = function (e) {
              (this.animations.push(e), this._handleAnimation());
            }),
            (e._removeAnimation = function (e) {
              var t = e.id,
                n = this.animations,
                r = n.length,
                o;
              for (o = 0; o < r; o++)
                if (n[o].id === t) {
                  this.animations.splice(o, 1);
                  break;
                }
            }),
            (e._runFrames = function () {
              var e = {},
                n = this.animations,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d;
              for (i = 0; i < n.length; i++)
                if (
                  ((r = n[i]),
                  (o = r.layers),
                  (a = r.func),
                  r._updateFrameObject(t()),
                  (s = o.length),
                  a ? (d = a.call(r, r.frame) !== !1) : (d = !0),
                  !!d)
                )
                  for (l = 0; l < s; l++)
                    ((u = o[l]), u._id !== void 0 && (e[u._id] = u));
              for (c in e) e.hasOwnProperty(c) && e[c].draw();
            }),
            (e._animationLoop = function () {
              var t = e;
              t.animations.length
                ? (t._runFrames(), requestAnimationFrame(t._animationLoop))
                : (t.animRunning = !1);
            }),
            (e._handleAnimation = function () {
              this.animRunning ||
                ((this.animRunning = !0),
                requestAnimationFrame(this._animationLoop));
            }),
            (e.animations = []),
            (e.animIdCounter = 0),
            (e.animRunning = !1),
            e
          );
        })();
      Ie.Animation = n;
    }
    var xe = !1;
    function $e() {
      return (xe || ((xe = !0), De()), Te.exports);
    }
    var Pe = {},
      Ne = { exports: Pe };
    function Me() {
      (Object.defineProperty(Pe, "__esModule", { value: !0 }),
        (Pe.Easings = Pe.Tween = void 0));
      var e = f(),
        t = $e(),
        n = G(),
        r = c(),
        o = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
        a = 1,
        i = 2,
        l = 3,
        s = 0,
        u = ["fill", "stroke", "shadowColor"],
        d = (function () {
          function e(e, t, n, r, o, a, i) {
            ((this.prop = e),
              (this.propFunc = t),
              (this.begin = r),
              (this._pos = r),
              (this.duration = a),
              (this._change = 0),
              (this.prevPos = 0),
              (this.yoyo = i),
              (this._time = 0),
              (this._position = 0),
              (this._startTime = 0),
              (this._finish = 0),
              (this.func = n),
              (this._change = o - this.begin),
              this.pause());
          }
          return (
            (e.prototype.fire = function (e) {
              var t = this[e];
              t && t();
            }),
            (e.prototype.setTime = function (e) {
              e > this.duration
                ? this.yoyo
                  ? ((this._time = this.duration), this.reverse())
                  : this.finish()
                : e < 0
                  ? this.yoyo
                    ? ((this._time = 0), this.play())
                    : this.reset()
                  : ((this._time = e), this.update());
            }),
            (e.prototype.getTime = function () {
              return this._time;
            }),
            (e.prototype.setPosition = function (e) {
              ((this.prevPos = this._pos), this.propFunc(e), (this._pos = e));
            }),
            (e.prototype.getPosition = function (e) {
              return (
                e === void 0 && (e = this._time),
                this.func(e, this.begin, this._change, this.duration)
              );
            }),
            (e.prototype.play = function () {
              ((this.state = i),
                (this._startTime = this.getTimer() - this._time),
                this.onEnterFrame(),
                this.fire("onPlay"));
            }),
            (e.prototype.reverse = function () {
              ((this.state = l),
                (this._time = this.duration - this._time),
                (this._startTime = this.getTimer() - this._time),
                this.onEnterFrame(),
                this.fire("onReverse"));
            }),
            (e.prototype.seek = function (e) {
              (this.pause(),
                (this._time = e),
                this.update(),
                this.fire("onSeek"));
            }),
            (e.prototype.reset = function () {
              (this.pause(),
                (this._time = 0),
                this.update(),
                this.fire("onReset"));
            }),
            (e.prototype.finish = function () {
              (this.pause(),
                (this._time = this.duration),
                this.update(),
                this.fire("onFinish"));
            }),
            (e.prototype.update = function () {
              (this.setPosition(this.getPosition(this._time)),
                this.fire("onUpdate"));
            }),
            (e.prototype.onEnterFrame = function () {
              var e = this.getTimer() - this._startTime;
              this.state === i
                ? this.setTime(e)
                : this.state === l && this.setTime(this.duration - e);
            }),
            (e.prototype.pause = function () {
              ((this.state = a), this.fire("onPause"));
            }),
            (e.prototype.getTimer = function () {
              return new Date().getTime();
            }),
            e
          );
        })(),
        m = (function () {
          function n(a) {
            var i = this,
              l = a.node,
              u = l._id,
              c,
              m = a.easing || Pe.Easings.Linear,
              p = !!a.yoyo,
              _;
            (typeof a.duration == "undefined"
              ? (c = 0.3)
              : a.duration === 0
                ? (c = 0.001)
                : (c = a.duration),
              (this.node = l),
              (this._id = s++));
            var f =
              l.getLayer() ||
              (l instanceof r.Konva.Stage ? l.getLayers() : null);
            (f ||
              e.Util.error(
                "Tween constructor have `node` that is not in a layer. Please add node into layer first.",
              ),
              (this.anim = new t.Animation(function () {
                i.tween.onEnterFrame();
              }, f)),
              (this.tween = new d(
                _,
                function (e) {
                  i._tweenFunc(e);
                },
                m,
                0,
                1,
                c * 1e3,
                p,
              )),
              this._addListeners(),
              n.attrs[u] || (n.attrs[u] = {}),
              n.attrs[u][this._id] || (n.attrs[u][this._id] = {}),
              n.tweens[u] || (n.tweens[u] = {}));
            for (_ in a) o[_] === void 0 && this._addAttr(_, a[_]);
            (this.reset(),
              (this.onFinish = a.onFinish),
              (this.onReset = a.onReset),
              (this.onUpdate = a.onUpdate));
          }
          return (
            (n.prototype._addAttr = function (t, r) {
              var o = this.node,
                a = o._id,
                i,
                l,
                s,
                c,
                d,
                m,
                p,
                _;
              if (
                ((s = n.tweens[a][t]),
                s && delete n.attrs[a][s][t],
                (i = o.getAttr(t)),
                e.Util._isArray(r))
              )
                if (
                  ((l = []),
                  (d = Math.max(r.length, i.length)),
                  t === "points" &&
                    r.length !== i.length &&
                    (r.length > i.length
                      ? ((p = i),
                        (i = e.Util._prepareArrayForTween(i, r, o.closed())))
                      : ((m = r),
                        (r = e.Util._prepareArrayForTween(r, i, o.closed())))),
                  t.indexOf("fill") === 0)
                )
                  for (c = 0; c < d; c++)
                    if (c % 2 === 0) l.push(r[c] - i[c]);
                    else {
                      var f = e.Util.colorToRGBA(i[c]);
                      ((_ = e.Util.colorToRGBA(r[c])),
                        (i[c] = f),
                        l.push({
                          r: _.r - f.r,
                          g: _.g - f.g,
                          b: _.b - f.b,
                          a: _.a - f.a,
                        }));
                    }
                else for (c = 0; c < d; c++) l.push(r[c] - i[c]);
              else
                u.indexOf(t) !== -1
                  ? ((i = e.Util.colorToRGBA(i)),
                    (_ = e.Util.colorToRGBA(r)),
                    (l = {
                      r: _.r - i.r,
                      g: _.g - i.g,
                      b: _.b - i.b,
                      a: _.a - i.a,
                    }))
                  : (l = r - i);
              ((n.attrs[a][this._id][t] = {
                start: i,
                diff: l,
                end: r,
                trueEnd: m,
                trueStart: p,
              }),
                (n.tweens[a][t] = this._id));
            }),
            (n.prototype._tweenFunc = function (t) {
              var r = this.node,
                o = n.attrs[r._id][this._id],
                a,
                i,
                l,
                s,
                c,
                d,
                m,
                p;
              for (a in o) {
                if (
                  ((i = o[a]),
                  (l = i.start),
                  (s = i.diff),
                  (p = i.end),
                  e.Util._isArray(l))
                )
                  if (
                    ((c = []),
                    (m = Math.max(l.length, p.length)),
                    a.indexOf("fill") === 0)
                  )
                    for (d = 0; d < m; d++)
                      d % 2 === 0
                        ? c.push((l[d] || 0) + s[d] * t)
                        : c.push(
                            "rgba(" +
                              Math.round(l[d].r + s[d].r * t) +
                              "," +
                              Math.round(l[d].g + s[d].g * t) +
                              "," +
                              Math.round(l[d].b + s[d].b * t) +
                              "," +
                              (l[d].a + s[d].a * t) +
                              ")",
                          );
                  else for (d = 0; d < m; d++) c.push((l[d] || 0) + s[d] * t);
                else
                  u.indexOf(a) !== -1
                    ? (c =
                        "rgba(" +
                        Math.round(l.r + s.r * t) +
                        "," +
                        Math.round(l.g + s.g * t) +
                        "," +
                        Math.round(l.b + s.b * t) +
                        "," +
                        (l.a + s.a * t) +
                        ")")
                    : (c = l + s * t);
                r.setAttr(a, c);
              }
            }),
            (n.prototype._addListeners = function () {
              var e = this;
              ((this.tween.onPlay = function () {
                e.anim.start();
              }),
                (this.tween.onReverse = function () {
                  e.anim.start();
                }),
                (this.tween.onPause = function () {
                  e.anim.stop();
                }),
                (this.tween.onFinish = function () {
                  var t = e.node,
                    r = n.attrs[t._id][e._id];
                  (r.points &&
                    r.points.trueEnd &&
                    t.setAttr("points", r.points.trueEnd),
                    e.onFinish && e.onFinish.call(e));
                }),
                (this.tween.onReset = function () {
                  var t = e.node,
                    r = n.attrs[t._id][e._id];
                  (r.points &&
                    r.points.trueStart &&
                    t.points(r.points.trueStart),
                    e.onReset && e.onReset());
                }),
                (this.tween.onUpdate = function () {
                  e.onUpdate && e.onUpdate.call(e);
                }));
            }),
            (n.prototype.play = function () {
              return (this.tween.play(), this);
            }),
            (n.prototype.reverse = function () {
              return (this.tween.reverse(), this);
            }),
            (n.prototype.reset = function () {
              return (this.tween.reset(), this);
            }),
            (n.prototype.seek = function (e) {
              return (this.tween.seek(e * 1e3), this);
            }),
            (n.prototype.pause = function () {
              return (this.tween.pause(), this);
            }),
            (n.prototype.finish = function () {
              return (this.tween.finish(), this);
            }),
            (n.prototype.destroy = function () {
              var e = this.node._id,
                t = this._id,
                r = n.tweens[e],
                o;
              this.pause();
              for (o in r) delete n.tweens[e][o];
              delete n.attrs[e][t];
            }),
            (n.attrs = {}),
            (n.tweens = {}),
            n
          );
        })();
      ((Pe.Tween = m),
        (n.Node.prototype.to = function (e) {
          var t = e.onFinish;
          ((e.node = this),
            (e.onFinish = function () {
              (this.destroy(), t && t());
            }));
          var n = new m(e);
          n.play();
        }),
        (Pe.Easings = {
          BackEaseIn: function (e, t, n, r) {
            var o = 1.70158;
            return n * (e /= r) * e * ((o + 1) * e - o) + t;
          },
          BackEaseOut: function (e, t, n, r) {
            var o = 1.70158;
            return n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + t;
          },
          BackEaseInOut: function (e, t, n, r) {
            var o = 1.70158;
            return (e /= r / 2) < 1
              ? (n / 2) * (e * e * (((o *= 1.525) + 1) * e - o)) + t
              : (n / 2) * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + t;
          },
          ElasticEaseIn: function (e, t, n, r, o, a) {
            var i = 0;
            return e === 0
              ? t
              : (e /= r) === 1
                ? t + n
                : (a || (a = r * 0.3),
                  !o || o < Math.abs(n)
                    ? ((o = n), (i = a / 4))
                    : (i = (a / (2 * Math.PI)) * Math.asin(n / o)),
                  -(
                    o *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e * r - i) * (2 * Math.PI)) / a)
                  ) + t);
          },
          ElasticEaseOut: function (e, t, n, r, o, a) {
            var i = 0;
            return e === 0
              ? t
              : (e /= r) === 1
                ? t + n
                : (a || (a = r * 0.3),
                  !o || o < Math.abs(n)
                    ? ((o = n), (i = a / 4))
                    : (i = (a / (2 * Math.PI)) * Math.asin(n / o)),
                  o *
                    Math.pow(2, -10 * e) *
                    Math.sin(((e * r - i) * (2 * Math.PI)) / a) +
                    n +
                    t);
          },
          ElasticEaseInOut: function (e, t, n, r, o, a) {
            var i = 0;
            return e === 0
              ? t
              : (e /= r / 2) === 2
                ? t + n
                : (a || (a = r * (0.3 * 1.5)),
                  !o || o < Math.abs(n)
                    ? ((o = n), (i = a / 4))
                    : (i = (a / (2 * Math.PI)) * Math.asin(n / o)),
                  e < 1
                    ? -0.5 *
                        (o *
                          Math.pow(2, 10 * (e -= 1)) *
                          Math.sin(((e * r - i) * (2 * Math.PI)) / a)) +
                      t
                    : o *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e * r - i) * (2 * Math.PI)) / a) *
                        0.5 +
                      n +
                      t);
          },
          BounceEaseOut: function (e, t, n, r) {
            return (e /= r) < 1 / 2.75
              ? n * (7.5625 * e * e) + t
              : e < 2 / 2.75
                ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
                : e < 2.5 / 2.75
                  ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                  : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
          },
          BounceEaseIn: function (e, t, n, r) {
            return n - Pe.Easings.BounceEaseOut(r - e, 0, n, r) + t;
          },
          BounceEaseInOut: function (e, t, n, r) {
            return e < r / 2
              ? Pe.Easings.BounceEaseIn(e * 2, 0, n, r) * 0.5 + t
              : Pe.Easings.BounceEaseOut(e * 2 - r, 0, n, r) * 0.5 +
                  n * 0.5 +
                  t;
          },
          EaseIn: function (e, t, n, r) {
            return n * (e /= r) * e + t;
          },
          EaseOut: function (e, t, n, r) {
            return -n * (e /= r) * (e - 2) + t;
          },
          EaseInOut: function (e, t, n, r) {
            return (e /= r / 2) < 1
              ? (n / 2) * e * e + t
              : (-n / 2) * (--e * (e - 2) - 1) + t;
          },
          StrongEaseIn: function (e, t, n, r) {
            return n * (e /= r) * e * e * e * e + t;
          },
          StrongEaseOut: function (e, t, n, r) {
            return n * ((e = e / r - 1) * e * e * e * e + 1) + t;
          },
          StrongEaseInOut: function (e, t, n, r) {
            return (e /= r / 2) < 1
              ? (n / 2) * e * e * e * e * e + t
              : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
          },
          Linear: function (e, t, n, r) {
            return (n * e) / r + t;
          },
        }));
    }
    var we = !1;
    function Ae() {
      return (we || ((we = !0), Me()), Ne.exports);
    }
    var Fe = {},
      Oe = { exports: Fe };
    function Be() {
      (Object.defineProperty(Fe, "__esModule", { value: !0 }),
        (Fe.Konva = void 0));
      var e = c(),
        t = f(),
        n = G(),
        r = X(),
        o = ie(),
        a = ge(),
        i = ve(),
        l = ke(),
        s = W(),
        u = de(),
        d = $e(),
        m = Ae(),
        p = x(),
        _ = w();
      Fe.Konva = t.Util._assign(e.Konva, {
        Collection: t.Collection,
        Util: t.Util,
        Transform: t.Transform,
        Node: n.Node,
        ids: n.ids,
        names: n.names,
        Container: r.Container,
        Stage: o.Stage,
        stages: o.stages,
        Layer: a.Layer,
        FastLayer: i.FastLayer,
        Group: l.Group,
        DD: s.DD,
        Shape: u.Shape,
        shapes: u.shapes,
        Animation: d.Animation,
        Tween: m.Tween,
        Easings: m.Easings,
        Context: p.Context,
        Canvas: _.Canvas,
      });
    }
    var We = !1;
    function qe() {
      return (We || ((We = !0), Be()), Oe.exports);
    }
    var Ue = {},
      Ve = { exports: Ue };
    function He() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Ue, "__esModule", { value: !0 }),
        (Ue.Arc = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = c(),
        a = b(),
        i = c(),
        l = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = o.Konva.getAngle(this.angle()),
                n = this.clockwise();
              (e.beginPath(),
                e.arc(0, 0, this.outerRadius(), 0, t, n),
                e.arc(0, 0, this.innerRadius(), t, 0, !n),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.outerRadius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.outerRadius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((Ue.Arc = l),
        (l.prototype._centroid = !0),
        (l.prototype.className = "Arc"),
        (l.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        i._registerNode(l),
        n.Factory.addGetterSetter(l, "innerRadius", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "outerRadius", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "angle", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "clockwise", !1, a.getBooleanValidator()),
        t.Collection.mapMethods(l));
    }
    var Ge = !1;
    function ze() {
      return (Ge || ((Ge = !0), He()), Ve.exports);
    }
    var je = {},
      Ke = { exports: je };
    function Qe() {
      var e =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              e(t, n);
              function r() {
                this.constructor = t;
              }
              t.prototype =
                n === null
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r());
            };
          })(),
        t =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length;
            for (var r = Array(e), o = 0, t = 0; t < n; t++)
              for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++)
                r[o] = a[i];
            return r;
          };
      (Object.defineProperty(je, "__esModule", { value: !0 }),
        (je.Line = void 0));
      var n = f(),
        r = E(),
        o = de(),
        a = b(),
        i = c(),
        l = (function (r) {
          e(o, r);
          function o(e) {
            var t = r.call(this, e) || this;
            return (
              t.on(
                "pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",
                function () {
                  this._clearCache("tensionPoints");
                },
              ),
              t
            );
          }
          return (
            (o.prototype._sceneFunc = function (e) {
              var t = this.points(),
                n = t.length,
                r = this.tension(),
                o = this.closed(),
                a = this.bezier(),
                i,
                l,
                s;
              if (n) {
                if ((e.beginPath(), e.moveTo(t[0], t[1]), r !== 0 && n > 4)) {
                  for (
                    i = this.getTensionPoints(),
                      l = i.length,
                      s = o ? 0 : 4,
                      o || e.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                    s < l - 2;
                  )
                    e.bezierCurveTo(
                      i[s++],
                      i[s++],
                      i[s++],
                      i[s++],
                      i[s++],
                      i[s++],
                    );
                  o ||
                    e.quadraticCurveTo(i[l - 2], i[l - 1], t[n - 2], t[n - 1]);
                } else if (a)
                  for (s = 2; s < n; )
                    e.bezierCurveTo(
                      t[s++],
                      t[s++],
                      t[s++],
                      t[s++],
                      t[s++],
                      t[s++],
                    );
                else for (s = 2; s < n; s += 2) e.lineTo(t[s], t[s + 1]);
                o
                  ? (e.closePath(), e.fillStrokeShape(this))
                  : e.strokeShape(this);
              }
            }),
            (o.prototype.getTensionPoints = function () {
              return this._getCache("tensionPoints", this._getTensionPoints);
            }),
            (o.prototype._getTensionPoints = function () {
              return this.closed()
                ? this._getTensionPointsClosed()
                : n.Util._expandPoints(this.points(), this.tension());
            }),
            (o.prototype._getTensionPointsClosed = function () {
              var e = this.points(),
                t = e.length,
                r = this.tension(),
                o = n.Util._getControlPoints(
                  e[t - 2],
                  e[t - 1],
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  r,
                ),
                a = n.Util._getControlPoints(
                  e[t - 4],
                  e[t - 3],
                  e[t - 2],
                  e[t - 1],
                  e[0],
                  e[1],
                  r,
                ),
                i = n.Util._expandPoints(e, r),
                l = [o[2], o[3]]
                  .concat(i)
                  .concat([
                    a[0],
                    a[1],
                    e[t - 2],
                    e[t - 1],
                    a[2],
                    a[3],
                    o[0],
                    o[1],
                    e[0],
                    e[1],
                  ]);
              return l;
            }),
            (o.prototype.getWidth = function () {
              return this.getSelfRect().width;
            }),
            (o.prototype.getHeight = function () {
              return this.getSelfRect().height;
            }),
            (o.prototype.getSelfRect = function () {
              var e = this.points();
              if (e.length < 4)
                return { x: e[0] || 0, y: e[1] || 0, width: 0, height: 0 };
              this.tension() !== 0
                ? (e = t([e[0], e[1]], this._getTensionPoints(), [
                    e[e.length - 2],
                    e[e.length - 1],
                  ]))
                : (e = this.points());
              for (
                var n = e[0], r = e[0], o = e[1], a = e[1], i, l, s = 0;
                s < e.length / 2;
                s++
              )
                ((i = e[s * 2]),
                  (l = e[s * 2 + 1]),
                  (n = Math.min(n, i)),
                  (r = Math.max(r, i)),
                  (o = Math.min(o, l)),
                  (a = Math.max(a, l)));
              return { x: n, y: o, width: r - n, height: a - o };
            }),
            o
          );
        })(o.Shape);
      ((je.Line = l),
        (l.prototype.className = "Line"),
        (l.prototype._attrsAffectingSize = ["points", "bezier", "tension"]),
        i._registerNode(l),
        r.Factory.addGetterSetter(l, "closed", !1),
        r.Factory.addGetterSetter(l, "bezier", !1),
        r.Factory.addGetterSetter(l, "tension", 0, a.getNumberValidator()),
        r.Factory.addGetterSetter(l, "points", [], a.getNumberArrayValidator()),
        n.Collection.mapMethods(l));
    }
    var Xe = !1;
    function Ye() {
      return (Xe || ((Xe = !0), Qe()), Ke.exports);
    }
    var Je = {},
      Ze = { exports: Je };
    function et() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Je, "__esModule", { value: !0 }),
        (Je.Arrow = void 0));
      var t = f(),
        n = E(),
        r = Ye(),
        o = b(),
        a = c(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              t.prototype._sceneFunc.call(this, e);
              var n = Math.PI * 2,
                r = this.points(),
                o = r,
                a = this.tension() !== 0 && r.length > 4;
              a && (o = this.getTensionPoints());
              var i = r.length,
                l,
                s;
              a
                ? ((l = r[i - 2] - (o[o.length - 2] + o[o.length - 4]) / 2),
                  (s = r[i - 1] - (o[o.length - 1] + o[o.length - 3]) / 2))
                : ((l = r[i - 2] - r[i - 4]), (s = r[i - 1] - r[i - 3]));
              var u = (Math.atan2(s, l) + n) % n,
                c = this.pointerLength(),
                d = this.pointerWidth();
              (e.save(),
                e.beginPath(),
                e.translate(r[i - 2], r[i - 1]),
                e.rotate(u),
                e.moveTo(0, 0),
                e.lineTo(-c, d / 2),
                e.lineTo(-c, -d / 2),
                e.closePath(),
                e.restore(),
                this.pointerAtBeginning() &&
                  (e.save(),
                  e.translate(r[0], r[1]),
                  a
                    ? ((l = (o[0] + o[2]) / 2 - r[0]),
                      (s = (o[1] + o[3]) / 2 - r[1]))
                    : ((l = r[2] - r[0]), (s = r[3] - r[1])),
                  e.rotate((Math.atan2(-s, -l) + n) % n),
                  e.moveTo(0, 0),
                  e.lineTo(-c, d / 2),
                  e.lineTo(-c, -d / 2),
                  e.closePath(),
                  e.restore()));
              var m = this.dashEnabled();
              (m && ((this.attrs.dashEnabled = !1), e.setLineDash([])),
                e.fillStrokeShape(this),
                m && (this.attrs.dashEnabled = !0));
            }),
            (n.prototype.getSelfRect = function () {
              var e = t.prototype.getSelfRect.call(this),
                n = this.pointerWidth() / 2;
              return {
                x: e.x - n,
                y: e.y - n,
                width: e.width + n * 2,
                height: e.height + n * 2,
              };
            }),
            n
          );
        })(r.Line);
      ((Je.Arrow = i),
        (i.prototype.className = "Arrow"),
        a._registerNode(i),
        n.Factory.addGetterSetter(
          i,
          "pointerLength",
          10,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          i,
          "pointerWidth",
          10,
          o.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(i, "pointerAtBeginning", !1),
        t.Collection.mapMethods(i));
    }
    var tt = !1;
    function nt() {
      return (tt || ((tt = !0), et()), Ze.exports);
    }
    var rt = {},
      ot = { exports: rt };
    function at() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(rt, "__esModule", { value: !0 }),
        (rt.Circle = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              (e.beginPath(),
                e.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.radius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.radius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.radius() !== e / 2 && this.radius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.radius() !== e / 2 && this.radius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((rt.Circle = i),
        (i.prototype._centroid = !0),
        (i.prototype.className = "Circle"),
        (i.prototype._attrsAffectingSize = ["radius"]),
        a._registerNode(i),
        n.Factory.addGetterSetter(i, "radius", 0, o.getNumberValidator()),
        t.Collection.mapMethods(i));
    }
    var it = !1;
    function lt() {
      return (it || ((it = !0), at()), ot.exports);
    }
    var st = {},
      ut = { exports: st };
    function ct() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(st, "__esModule", { value: !0 }),
        (st.Ellipse = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this.radiusX(),
                n = this.radiusY();
              (e.beginPath(),
                e.save(),
                t !== n && e.scale(1, n / t),
                e.arc(0, 0, t, 0, Math.PI * 2, !1),
                e.restore(),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.radiusX() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.radiusY() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.radiusX(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.radiusY(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((st.Ellipse = i),
        (i.prototype.className = "Ellipse"),
        (i.prototype._centroid = !0),
        (i.prototype._attrsAffectingSize = ["radiusX", "radiusY"]),
        a._registerNode(i),
        n.Factory.addComponentsGetterSetter(i, "radius", ["x", "y"]),
        n.Factory.addGetterSetter(i, "radiusX", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "radiusY", 0, o.getNumberValidator()),
        t.Collection.mapMethods(i));
    }
    var dt = !1;
    function mt() {
      return (dt || ((dt = !0), ct()), ut.exports);
    }
    var pt = {},
      _t = { exports: pt };
    function ft() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(pt, "__esModule", { value: !0 }),
        (pt.Image = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = (function (n) {
          e(r, n);
          function r() {
            return (n !== null && n.apply(this, arguments)) || this;
          }
          return (
            (r.prototype._useBufferCanvas = function () {
              return n.prototype._useBufferCanvas.call(this, !0);
            }),
            (r.prototype._sceneFunc = function (e) {
              var t = this.getWidth(),
                n = this.getHeight(),
                r = this.attrs.image,
                o;
              if (r) {
                var a = this.attrs.cropWidth,
                  i = this.attrs.cropHeight;
                a && i
                  ? (o = [r, this.cropX(), this.cropY(), a, i, 0, 0, t, n])
                  : (o = [r, 0, 0, t, n]);
              }
              ((this.hasFill() || this.hasStroke()) &&
                (e.beginPath(),
                e.rect(0, 0, t, n),
                e.closePath(),
                e.fillStrokeShape(this)),
                r && e.drawImage.apply(e, o));
            }),
            (r.prototype._hitFunc = function (e) {
              var t = this.width(),
                n = this.height();
              (e.beginPath(),
                e.rect(0, 0, t, n),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (r.prototype.getWidth = function () {
              var e, t;
              return (e = this.attrs.width) !== null && e !== void 0
                ? e
                : ((t = this.image()) === null || t === void 0
                    ? void 0
                    : t.width) || 0;
            }),
            (r.prototype.getHeight = function () {
              var e, t;
              return (e = this.attrs.height) !== null && e !== void 0
                ? e
                : ((t = this.image()) === null || t === void 0
                    ? void 0
                    : t.height) || 0;
            }),
            (r.fromURL = function (e, n) {
              var o = t.Util.createImageElement();
              ((o.onload = function () {
                var e = new r({ image: o });
                n(e);
              }),
                (o.crossOrigin = "Anonymous"),
                (o.src = e));
            }),
            r
          );
        })(r.Shape);
      ((pt.Image = i),
        (i.prototype.className = "Image"),
        a._registerNode(i),
        n.Factory.addGetterSetter(i, "image"),
        n.Factory.addComponentsGetterSetter(i, "crop", [
          "x",
          "y",
          "width",
          "height",
        ]),
        n.Factory.addGetterSetter(i, "cropX", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "cropY", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "cropWidth", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "cropHeight", 0, o.getNumberValidator()),
        t.Collection.mapMethods(i));
    }
    var gt = !1;
    function ht() {
      return (gt || ((gt = !0), ft()), _t.exports);
    }
    var yt = {},
      Ct = { exports: yt };
    function bt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(yt, "__esModule", { value: !0 }),
        (yt.Tag = yt.Label = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = ke(),
        a = b(),
        i = c(),
        l = [
          "fontFamily",
          "fontSize",
          "fontStyle",
          "padding",
          "lineHeight",
          "text",
          "width",
          "height",
        ],
        s = "Change.konva",
        u = "none",
        d = "up",
        m = "right",
        p = "down",
        _ = "left",
        g = l.length,
        h = (function (t) {
          e(n, t);
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              n.on("add.konva", function (e) {
                (this._addListeners(e.child), this._sync());
              }),
              n
            );
          }
          return (
            (n.prototype.getText = function () {
              return this.find("Text")[0];
            }),
            (n.prototype.getTag = function () {
              return this.find("Tag")[0];
            }),
            (n.prototype._addListeners = function (e) {
              var t = this,
                n,
                r = function () {
                  t._sync();
                };
              for (n = 0; n < g; n++) e.on(l[n] + s, r);
            }),
            (n.prototype.getWidth = function () {
              return this.getText().width();
            }),
            (n.prototype.getHeight = function () {
              return this.getText().height();
            }),
            (n.prototype._sync = function () {
              var e = this.getText(),
                t = this.getTag(),
                n,
                r,
                o,
                a,
                i,
                l,
                s;
              if (e && t) {
                switch (
                  ((n = e.width()),
                  (r = e.height()),
                  (o = t.pointerDirection()),
                  (a = t.pointerWidth()),
                  (s = t.pointerHeight()),
                  (i = 0),
                  (l = 0),
                  o)
                ) {
                  case d:
                    ((i = n / 2), (l = -1 * s));
                    break;
                  case m:
                    ((i = n + a), (l = r / 2));
                    break;
                  case p:
                    ((i = n / 2), (l = r + s));
                    break;
                  case _:
                    ((i = -1 * a), (l = r / 2));
                    break;
                }
                (t.setAttrs({ x: -1 * i, y: -1 * l, width: n, height: r }),
                  e.setAttrs({ x: -1 * i, y: -1 * l }));
              }
            }),
            n
          );
        })(o.Group);
      ((yt.Label = h),
        (h.prototype.className = "Label"),
        i._registerNode(h),
        t.Collection.mapMethods(h));
      var y = (function (t) {
        e(n, t);
        function n() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          (n.prototype._sceneFunc = function (e) {
            var t = this.width(),
              n = this.height(),
              r = this.pointerDirection(),
              o = this.pointerWidth(),
              a = this.pointerHeight(),
              i = this.cornerRadius(),
              l = 0,
              s = 0,
              u = 0,
              c = 0;
            (typeof i == "number"
              ? (l = s = u = c = Math.min(i, t / 2, n / 2))
              : ((l = Math.min(i[0] || 0, t / 2, n / 2)),
                (s = Math.min(i[1] || 0, t / 2, n / 2)),
                (c = Math.min(i[2] || 0, t / 2, n / 2)),
                (u = Math.min(i[3] || 0, t / 2, n / 2))),
              e.beginPath(),
              e.moveTo(l, 0),
              r === d &&
                (e.lineTo((t - o) / 2, 0),
                e.lineTo(t / 2, -1 * a),
                e.lineTo((t + o) / 2, 0)),
              e.lineTo(t - s, 0),
              e.arc(t - s, s, s, (Math.PI * 3) / 2, 0, !1),
              r === m &&
                (e.lineTo(t, (n - a) / 2),
                e.lineTo(t + o, n / 2),
                e.lineTo(t, (n + a) / 2)),
              e.lineTo(t, n - c),
              e.arc(t - c, n - c, c, 0, Math.PI / 2, !1),
              r === p &&
                (e.lineTo((t + o) / 2, n),
                e.lineTo(t / 2, n + a),
                e.lineTo((t - o) / 2, n)),
              e.lineTo(u, n),
              e.arc(u, n - u, u, Math.PI / 2, Math.PI, !1),
              r === _ &&
                (e.lineTo(0, (n + a) / 2),
                e.lineTo(-1 * o, n / 2),
                e.lineTo(0, (n - a) / 2)),
              e.lineTo(0, l),
              e.arc(l, l, l, Math.PI, (Math.PI * 3) / 2, !1),
              e.closePath(),
              e.fillStrokeShape(this));
          }),
          (n.prototype.getSelfRect = function () {
            var e = 0,
              t = 0,
              n = this.pointerWidth(),
              r = this.pointerHeight(),
              o = this.pointerDirection(),
              a = this.width(),
              i = this.height();
            return (
              o === d
                ? ((t -= r), (i += r))
                : o === p
                  ? (i += r)
                  : o === _
                    ? ((e -= n * 1.5), (a += n))
                    : o === m && (a += n * 1.5),
              { x: e, y: t, width: a, height: i }
            );
          }),
          n
        );
      })(r.Shape);
      ((yt.Tag = y),
        (y.prototype.className = "Tag"),
        i._registerNode(y),
        n.Factory.addGetterSetter(y, "pointerDirection", u),
        n.Factory.addGetterSetter(y, "pointerWidth", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(
          y,
          "pointerHeight",
          0,
          a.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(
          y,
          "cornerRadius",
          0,
          a.getNumberOrArrayOfNumbersValidator(4),
        ),
        t.Collection.mapMethods(y));
    }
    var vt = !1;
    function St() {
      return (vt || ((vt = !0), bt()), Ct.exports);
    }
    var Rt = {},
      Lt = { exports: Rt };
    function Et() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Rt, "__esModule", { value: !0 }),
        (Rt.Path = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = c(),
        a = (function (t) {
          e(n, t);
          function n(e) {
            var r = t.call(this, e) || this;
            ((r.dataArray = []),
              (r.pathLength = 0),
              (r.dataArray = n.parsePathData(r.data())),
              (r.pathLength = 0));
            for (var o = 0; o < r.dataArray.length; ++o)
              r.pathLength += r.dataArray[o].pathLength;
            return (
              r.on("dataChange.konva", function () {
                ((this.dataArray = n.parsePathData(this.data())),
                  (this.pathLength = 0));
                for (var e = 0; e < this.dataArray.length; ++e)
                  this.pathLength += this.dataArray[e].pathLength;
              }),
              r
            );
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this.dataArray;
              e.beginPath();
              for (var n = !1, r = 0; r < t.length; r++) {
                var o = t[r].command,
                  a = t[r].points;
                switch (o) {
                  case "L":
                    e.lineTo(a[0], a[1]);
                    break;
                  case "M":
                    e.moveTo(a[0], a[1]);
                    break;
                  case "C":
                    e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                    break;
                  case "Q":
                    e.quadraticCurveTo(a[0], a[1], a[2], a[3]);
                    break;
                  case "A":
                    var i = a[0],
                      l = a[1],
                      s = a[2],
                      u = a[3],
                      c = a[4],
                      d = a[5],
                      m = a[6],
                      p = a[7],
                      _ = s > u ? s : u,
                      f = s > u ? 1 : s / u,
                      g = s > u ? u / s : 1;
                    (e.translate(i, l),
                      e.rotate(m),
                      e.scale(f, g),
                      e.arc(0, 0, _, c, c + d, 1 - p),
                      e.scale(1 / f, 1 / g),
                      e.rotate(-m),
                      e.translate(-i, -l));
                    break;
                  case "z":
                    ((n = !0), e.closePath());
                    break;
                }
              }
              !n && !this.hasFill()
                ? e.strokeShape(this)
                : e.fillStrokeShape(this);
            }),
            (n.prototype.getSelfRect = function () {
              var e = [];
              this.dataArray.forEach(function (t) {
                if (t.command === "A") {
                  var r = t.points[4],
                    o = t.points[5],
                    a = t.points[4] + o,
                    i = Math.PI / 180;
                  if ((Math.abs(r - a) < i && (i = Math.abs(r - a)), o < 0))
                    for (var l = r - i; l > a; l -= i) {
                      var s = n.getPointOnEllipticalArc(
                        t.points[0],
                        t.points[1],
                        t.points[2],
                        t.points[3],
                        l,
                        0,
                      );
                      e.push(s.x, s.y);
                    }
                  else
                    for (var l = r + i; l < a; l += i) {
                      var s = n.getPointOnEllipticalArc(
                        t.points[0],
                        t.points[1],
                        t.points[2],
                        t.points[3],
                        l,
                        0,
                      );
                      e.push(s.x, s.y);
                    }
                } else if (t.command === "C")
                  for (var l = 0; l <= 1; l += 0.01) {
                    var s = n.getPointOnCubicBezier(
                      l,
                      t.start.x,
                      t.start.y,
                      t.points[0],
                      t.points[1],
                      t.points[2],
                      t.points[3],
                      t.points[4],
                      t.points[5],
                    );
                    e.push(s.x, s.y);
                  }
                else e = e.concat(t.points);
              });
              for (
                var t = e[0], r = e[0], o = e[1], a = e[1], i, l, s = 0;
                s < e.length / 2;
                s++
              )
                ((i = e[s * 2]),
                  (l = e[s * 2 + 1]),
                  isNaN(i) || ((t = Math.min(t, i)), (r = Math.max(r, i))),
                  isNaN(l) || ((o = Math.min(o, l)), (a = Math.max(a, l))));
              return {
                x: Math.round(t),
                y: Math.round(o),
                width: Math.round(r - t),
                height: Math.round(a - o),
              };
            }),
            (n.prototype.getLength = function () {
              return this.pathLength;
            }),
            (n.prototype.getPointAtLength = function (e) {
              var t,
                r = 0,
                o = this.dataArray.length;
              if (!o) return null;
              for (; r < o && e > this.dataArray[r].pathLength; )
                ((e -= this.dataArray[r].pathLength), ++r);
              if (r === o)
                return (
                  (t = this.dataArray[r - 1].points.slice(-2)),
                  { x: t[0], y: t[1] }
                );
              if (e < 0.01)
                return (
                  (t = this.dataArray[r].points.slice(0, 2)),
                  { x: t[0], y: t[1] }
                );
              var a = this.dataArray[r],
                i = a.points;
              switch (a.command) {
                case "L":
                  return n.getPointOnLine(e, a.start.x, a.start.y, i[0], i[1]);
                case "C":
                  return n.getPointOnCubicBezier(
                    e / a.pathLength,
                    a.start.x,
                    a.start.y,
                    i[0],
                    i[1],
                    i[2],
                    i[3],
                    i[4],
                    i[5],
                  );
                case "Q":
                  return n.getPointOnQuadraticBezier(
                    e / a.pathLength,
                    a.start.x,
                    a.start.y,
                    i[0],
                    i[1],
                    i[2],
                    i[3],
                  );
                case "A":
                  var l = i[0],
                    s = i[1],
                    u = i[2],
                    c = i[3],
                    d = i[4],
                    m = i[5],
                    p = i[6];
                  return (
                    (d += (m * e) / a.pathLength),
                    n.getPointOnEllipticalArc(l, s, u, c, d, p)
                  );
              }
              return null;
            }),
            (n.getLineLength = function (e, t, n, r) {
              return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
            }),
            (n.getPointOnLine = function (e, t, n, r, o, a, i) {
              (a === void 0 && (a = t), i === void 0 && (i = n));
              var l = (o - n) / (r - t + 1e-8),
                s = Math.sqrt((e * e) / (1 + l * l));
              r < t && (s *= -1);
              var u = l * s,
                c;
              if (r === t) c = { x: a, y: i + u };
              else if ((i - n) / (a - t + 1e-8) === l)
                c = { x: a + s, y: i + u };
              else {
                var d,
                  m,
                  p = this.getLineLength(t, n, r, o),
                  _ = (a - t) * (r - t) + (i - n) * (o - n);
                ((_ = _ / (p * p)),
                  (d = t + _ * (r - t)),
                  (m = n + _ * (o - n)));
                var f = this.getLineLength(a, i, d, m),
                  g = Math.sqrt(e * e - f * f);
                ((s = Math.sqrt((g * g) / (1 + l * l))),
                  r < t && (s *= -1),
                  (u = l * s),
                  (c = { x: d + s, y: m + u }));
              }
              return c;
            }),
            (n.getPointOnCubicBezier = function (e, t, n, r, o, a, i, l, s) {
              function u(e) {
                return e * e * e;
              }
              function c(e) {
                return 3 * e * e * (1 - e);
              }
              function d(e) {
                return 3 * e * (1 - e) * (1 - e);
              }
              function m(e) {
                return (1 - e) * (1 - e) * (1 - e);
              }
              var p = l * u(e) + a * c(e) + r * d(e) + t * m(e),
                _ = s * u(e) + i * c(e) + o * d(e) + n * m(e);
              return { x: p, y: _ };
            }),
            (n.getPointOnQuadraticBezier = function (e, t, n, r, o, a, i) {
              function l(e) {
                return e * e;
              }
              function s(e) {
                return 2 * e * (1 - e);
              }
              function u(e) {
                return (1 - e) * (1 - e);
              }
              var c = a * l(e) + r * s(e) + t * u(e),
                d = i * l(e) + o * s(e) + n * u(e);
              return { x: c, y: d };
            }),
            (n.getPointOnEllipticalArc = function (e, t, n, r, o, a) {
              var i = Math.cos(a),
                l = Math.sin(a),
                s = { x: n * Math.cos(o), y: r * Math.sin(o) };
              return { x: e + (s.x * i - s.y * l), y: t + (s.x * l + s.y * i) };
            }),
            (n.parsePathData = function (e) {
              if (!e) return [];
              var t = e,
                n = [
                  "m",
                  "M",
                  "l",
                  "L",
                  "v",
                  "V",
                  "h",
                  "H",
                  "z",
                  "Z",
                  "c",
                  "C",
                  "q",
                  "Q",
                  "t",
                  "T",
                  "s",
                  "S",
                  "a",
                  "A",
                ];
              t = t.replace(new RegExp(" ", "g"), ",");
              for (var r = 0; r < n.length; r++)
                t = t.replace(new RegExp(n[r], "g"), "|" + n[r]);
              var o = t.split("|"),
                a = [],
                i = [],
                l = 0,
                s = 0,
                u = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,
                c;
              for (r = 1; r < o.length; r++) {
                var d = o[r],
                  m = d.charAt(0);
                for (d = d.slice(1), i.length = 0; (c = u.exec(d)); )
                  i.push(c[0]);
                for (var p = [], _ = 0, f = i.length; _ < f; _++) {
                  var g = parseFloat(i[_]);
                  isNaN(g) ? p.push(0) : p.push(g);
                }
                for (; p.length > 0 && !isNaN(p[0]); ) {
                  var h = null,
                    y = [],
                    C = l,
                    b = s,
                    v,
                    S,
                    R,
                    L,
                    E,
                    k,
                    I,
                    T,
                    D,
                    x;
                  switch (m) {
                    case "l":
                      ((l += p.shift()),
                        (s += p.shift()),
                        (h = "L"),
                        y.push(l, s));
                      break;
                    case "L":
                      ((l = p.shift()), (s = p.shift()), y.push(l, s));
                      break;
                    case "m":
                      var $ = p.shift(),
                        P = p.shift();
                      if (
                        ((l += $),
                        (s += P),
                        (h = "M"),
                        a.length > 2 && a[a.length - 1].command === "z")
                      ) {
                        for (var N = a.length - 2; N >= 0; N--)
                          if (a[N].command === "M") {
                            ((l = a[N].points[0] + $),
                              (s = a[N].points[1] + P));
                            break;
                          }
                      }
                      (y.push(l, s), (m = "l"));
                      break;
                    case "M":
                      ((l = p.shift()),
                        (s = p.shift()),
                        (h = "M"),
                        y.push(l, s),
                        (m = "L"));
                      break;
                    case "h":
                      ((l += p.shift()), (h = "L"), y.push(l, s));
                      break;
                    case "H":
                      ((l = p.shift()), (h = "L"), y.push(l, s));
                      break;
                    case "v":
                      ((s += p.shift()), (h = "L"), y.push(l, s));
                      break;
                    case "V":
                      ((s = p.shift()), (h = "L"), y.push(l, s));
                      break;
                    case "C":
                      (y.push(p.shift(), p.shift(), p.shift(), p.shift()),
                        (l = p.shift()),
                        (s = p.shift()),
                        y.push(l, s));
                      break;
                    case "c":
                      (y.push(
                        l + p.shift(),
                        s + p.shift(),
                        l + p.shift(),
                        s + p.shift(),
                      ),
                        (l += p.shift()),
                        (s += p.shift()),
                        (h = "C"),
                        y.push(l, s));
                      break;
                    case "S":
                      ((S = l),
                        (R = s),
                        (v = a[a.length - 1]),
                        v.command === "C" &&
                          ((S = l + (l - v.points[2])),
                          (R = s + (s - v.points[3]))),
                        y.push(S, R, p.shift(), p.shift()),
                        (l = p.shift()),
                        (s = p.shift()),
                        (h = "C"),
                        y.push(l, s));
                      break;
                    case "s":
                      ((S = l),
                        (R = s),
                        (v = a[a.length - 1]),
                        v.command === "C" &&
                          ((S = l + (l - v.points[2])),
                          (R = s + (s - v.points[3]))),
                        y.push(S, R, l + p.shift(), s + p.shift()),
                        (l += p.shift()),
                        (s += p.shift()),
                        (h = "C"),
                        y.push(l, s));
                      break;
                    case "Q":
                      (y.push(p.shift(), p.shift()),
                        (l = p.shift()),
                        (s = p.shift()),
                        y.push(l, s));
                      break;
                    case "q":
                      (y.push(l + p.shift(), s + p.shift()),
                        (l += p.shift()),
                        (s += p.shift()),
                        (h = "Q"),
                        y.push(l, s));
                      break;
                    case "T":
                      ((S = l),
                        (R = s),
                        (v = a[a.length - 1]),
                        v.command === "Q" &&
                          ((S = l + (l - v.points[0])),
                          (R = s + (s - v.points[1]))),
                        (l = p.shift()),
                        (s = p.shift()),
                        (h = "Q"),
                        y.push(S, R, l, s));
                      break;
                    case "t":
                      ((S = l),
                        (R = s),
                        (v = a[a.length - 1]),
                        v.command === "Q" &&
                          ((S = l + (l - v.points[0])),
                          (R = s + (s - v.points[1]))),
                        (l += p.shift()),
                        (s += p.shift()),
                        (h = "Q"),
                        y.push(S, R, l, s));
                      break;
                    case "A":
                      ((L = p.shift()),
                        (E = p.shift()),
                        (k = p.shift()),
                        (I = p.shift()),
                        (T = p.shift()),
                        (D = l),
                        (x = s),
                        (l = p.shift()),
                        (s = p.shift()),
                        (h = "A"),
                        (y = this.convertEndpointToCenterParameterization(
                          D,
                          x,
                          l,
                          s,
                          I,
                          T,
                          L,
                          E,
                          k,
                        )));
                      break;
                    case "a":
                      ((L = p.shift()),
                        (E = p.shift()),
                        (k = p.shift()),
                        (I = p.shift()),
                        (T = p.shift()),
                        (D = l),
                        (x = s),
                        (l += p.shift()),
                        (s += p.shift()),
                        (h = "A"),
                        (y = this.convertEndpointToCenterParameterization(
                          D,
                          x,
                          l,
                          s,
                          I,
                          T,
                          L,
                          E,
                          k,
                        )));
                      break;
                  }
                  a.push({
                    command: h || m,
                    points: y,
                    start: { x: C, y: b },
                    pathLength: this.calcLength(C, b, h || m, y),
                  });
                }
                (m === "z" || m === "Z") &&
                  a.push({
                    command: "z",
                    points: [],
                    start: void 0,
                    pathLength: 0,
                  });
              }
              return a;
            }),
            (n.calcLength = function (e, t, r, o) {
              var a,
                i,
                l,
                s,
                u = n;
              switch (r) {
                case "L":
                  return u.getLineLength(e, t, o[0], o[1]);
                case "C":
                  for (
                    a = 0,
                      i = u.getPointOnCubicBezier(
                        0,
                        e,
                        t,
                        o[0],
                        o[1],
                        o[2],
                        o[3],
                        o[4],
                        o[5],
                      ),
                      s = 0.01;
                    s <= 1;
                    s += 0.01
                  )
                    ((l = u.getPointOnCubicBezier(
                      s,
                      e,
                      t,
                      o[0],
                      o[1],
                      o[2],
                      o[3],
                      o[4],
                      o[5],
                    )),
                      (a += u.getLineLength(i.x, i.y, l.x, l.y)),
                      (i = l));
                  return a;
                case "Q":
                  for (
                    a = 0,
                      i = u.getPointOnQuadraticBezier(
                        0,
                        e,
                        t,
                        o[0],
                        o[1],
                        o[2],
                        o[3],
                      ),
                      s = 0.01;
                    s <= 1;
                    s += 0.01
                  )
                    ((l = u.getPointOnQuadraticBezier(
                      s,
                      e,
                      t,
                      o[0],
                      o[1],
                      o[2],
                      o[3],
                    )),
                      (a += u.getLineLength(i.x, i.y, l.x, l.y)),
                      (i = l));
                  return a;
                case "A":
                  a = 0;
                  var c = o[4],
                    d = o[5],
                    m = o[4] + d,
                    p = Math.PI / 180;
                  if (
                    (Math.abs(c - m) < p && (p = Math.abs(c - m)),
                    (i = u.getPointOnEllipticalArc(
                      o[0],
                      o[1],
                      o[2],
                      o[3],
                      c,
                      0,
                    )),
                    d < 0)
                  )
                    for (s = c - p; s > m; s -= p)
                      ((l = u.getPointOnEllipticalArc(
                        o[0],
                        o[1],
                        o[2],
                        o[3],
                        s,
                        0,
                      )),
                        (a += u.getLineLength(i.x, i.y, l.x, l.y)),
                        (i = l));
                  else
                    for (s = c + p; s < m; s += p)
                      ((l = u.getPointOnEllipticalArc(
                        o[0],
                        o[1],
                        o[2],
                        o[3],
                        s,
                        0,
                      )),
                        (a += u.getLineLength(i.x, i.y, l.x, l.y)),
                        (i = l));
                  return (
                    (l = u.getPointOnEllipticalArc(
                      o[0],
                      o[1],
                      o[2],
                      o[3],
                      m,
                      0,
                    )),
                    (a += u.getLineLength(i.x, i.y, l.x, l.y)),
                    a
                  );
              }
              return 0;
            }),
            (n.convertEndpointToCenterParameterization = function (
              e,
              t,
              n,
              r,
              o,
              a,
              i,
              l,
              s,
            ) {
              var u = s * (Math.PI / 180),
                c = (Math.cos(u) * (e - n)) / 2 + (Math.sin(u) * (t - r)) / 2,
                d =
                  (-1 * Math.sin(u) * (e - n)) / 2 +
                  (Math.cos(u) * (t - r)) / 2,
                m = (c * c) / (i * i) + (d * d) / (l * l);
              m > 1 && ((i *= Math.sqrt(m)), (l *= Math.sqrt(m)));
              var p = Math.sqrt(
                (i * i * (l * l) - i * i * (d * d) - l * l * (c * c)) /
                  (i * i * (d * d) + l * l * (c * c)),
              );
              (o === a && (p *= -1), isNaN(p) && (p = 0));
              var _ = (p * i * d) / l,
                f = (p * -l * c) / i,
                g = (e + n) / 2 + Math.cos(u) * _ - Math.sin(u) * f,
                h = (t + r) / 2 + Math.sin(u) * _ + Math.cos(u) * f,
                y = function (e) {
                  return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
                },
                C = function (e, t) {
                  return (e[0] * t[0] + e[1] * t[1]) / (y(e) * y(t));
                },
                b = function (e, t) {
                  return (
                    (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(C(e, t))
                  );
                },
                v = b([1, 0], [(c - _) / i, (d - f) / l]),
                S = [(c - _) / i, (d - f) / l],
                R = [(-1 * c - _) / i, (-1 * d - f) / l],
                L = b(S, R);
              return (
                C(S, R) <= -1 && (L = Math.PI),
                C(S, R) >= 1 && (L = 0),
                a === 0 && L > 0 && (L = L - 2 * Math.PI),
                a === 1 && L < 0 && (L = L + 2 * Math.PI),
                [g, h, i, l, v, L, u, a]
              );
            }),
            n
          );
        })(r.Shape);
      ((Rt.Path = a),
        (a.prototype.className = "Path"),
        (a.prototype._attrsAffectingSize = ["data"]),
        o._registerNode(a),
        n.Factory.addGetterSetter(a, "data"),
        t.Collection.mapMethods(a));
    }
    var kt = !1;
    function It() {
      return (kt || ((kt = !0), Et()), Lt.exports);
    }
    var Tt = {},
      Dt = { exports: Tt };
    function xt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Tt, "__esModule", { value: !0 }),
        (Tt.Rect = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = c(),
        a = b(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this.cornerRadius(),
                n = this.width(),
                r = this.height();
              if ((e.beginPath(), !t)) e.rect(0, 0, n, r);
              else {
                var o = 0,
                  a = 0,
                  i = 0,
                  l = 0;
                (typeof t == "number"
                  ? (o = a = i = l = Math.min(t, n / 2, r / 2))
                  : ((o = Math.min(t[0] || 0, n / 2, r / 2)),
                    (a = Math.min(t[1] || 0, n / 2, r / 2)),
                    (l = Math.min(t[2] || 0, n / 2, r / 2)),
                    (i = Math.min(t[3] || 0, n / 2, r / 2))),
                  e.moveTo(o, 0),
                  e.lineTo(n - a, 0),
                  e.arc(n - a, a, a, (Math.PI * 3) / 2, 0, !1),
                  e.lineTo(n, r - l),
                  e.arc(n - l, r - l, l, 0, Math.PI / 2, !1),
                  e.lineTo(i, r),
                  e.arc(i, r - i, i, Math.PI / 2, Math.PI, !1),
                  e.lineTo(0, o),
                  e.arc(o, o, o, Math.PI, (Math.PI * 3) / 2, !1));
              }
              (e.closePath(), e.fillStrokeShape(this));
            }),
            n
          );
        })(r.Shape);
      ((Tt.Rect = i),
        (i.prototype.className = "Rect"),
        o._registerNode(i),
        n.Factory.addGetterSetter(
          i,
          "cornerRadius",
          0,
          a.getNumberOrArrayOfNumbersValidator(4),
        ),
        t.Collection.mapMethods(i));
    }
    var $t = !1;
    function Pt() {
      return ($t || (($t = !0), xt()), Dt.exports);
    }
    var Nt = {},
      Mt = { exports: Nt };
    function wt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Nt, "__esModule", { value: !0 }),
        (Nt.RegularPolygon = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this._getPoints();
              (e.beginPath(), e.moveTo(t[0].x, t[0].y));
              for (var n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
              (e.closePath(), e.fillStrokeShape(this));
            }),
            (n.prototype._getPoints = function () {
              for (
                var e = this.attrs.sides,
                  t = this.attrs.radius || 0,
                  n = [],
                  r = 0;
                r < e;
                r++
              )
                n.push({
                  x: t * Math.sin((r * 2 * Math.PI) / e),
                  y: -1 * t * Math.cos((r * 2 * Math.PI) / e),
                });
              return n;
            }),
            (n.prototype.getSelfRect = function () {
              var e = this._getPoints(),
                t = e[0].x,
                n = e[0].y,
                r = e[0].x,
                o = e[0].y;
              return (
                e.forEach(function (e) {
                  ((t = Math.min(t, e.x)),
                    (n = Math.max(n, e.x)),
                    (r = Math.min(r, e.y)),
                    (o = Math.max(o, e.y)));
                }),
                { x: t, y: r, width: n - t, height: o - r }
              );
            }),
            (n.prototype.getWidth = function () {
              return this.radius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.radius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.radius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.radius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((Nt.RegularPolygon = i),
        (i.prototype.className = "RegularPolygon"),
        (i.prototype._centroid = !0),
        (i.prototype._attrsAffectingSize = ["radius"]),
        a._registerNode(i),
        n.Factory.addGetterSetter(i, "radius", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "sides", 0, o.getNumberValidator()),
        t.Collection.mapMethods(i));
    }
    var At = !1;
    function Ft() {
      return (At || ((At = !0), wt()), Mt.exports);
    }
    var Ot = {},
      Bt = { exports: Ot };
    function Wt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Ot, "__esModule", { value: !0 }),
        (Ot.Ring = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = Math.PI * 2,
        l = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              (e.beginPath(),
                e.arc(0, 0, this.innerRadius(), 0, i, !1),
                e.moveTo(this.outerRadius(), 0),
                e.arc(0, 0, this.outerRadius(), i, 0, !0),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.outerRadius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.outerRadius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((Ot.Ring = l),
        (l.prototype.className = "Ring"),
        (l.prototype._centroid = !0),
        (l.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        a._registerNode(l),
        n.Factory.addGetterSetter(l, "innerRadius", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(l, "outerRadius", 0, o.getNumberValidator()),
        t.Collection.mapMethods(l));
    }
    var qt = !1;
    function Ut() {
      return (qt || ((qt = !0), Wt()), Bt.exports);
    }
    var Vt = {},
      Ht = { exports: Vt };
    function Gt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Vt, "__esModule", { value: !0 }),
        (Vt.Sprite = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = $e(),
        a = b(),
        i = c(),
        l = (function (t) {
          e(n, t);
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n._updated = !0),
              (n.anim = new o.Animation(function () {
                var e = n._updated;
                return ((n._updated = !1), e);
              })),
              n.on("animationChange.konva", function () {
                this.frameIndex(0);
              }),
              n.on("frameIndexChange.konva", function () {
                this._updated = !0;
              }),
              n.on("frameRateChange.konva", function () {
                this.anim.isRunning() &&
                  (clearInterval(this.interval), this._setInterval());
              }),
              n
            );
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this.animation(),
                n = this.frameIndex(),
                r = n * 4,
                o = this.animations()[t],
                a = this.frameOffsets(),
                i = o[r + 0],
                l = o[r + 1],
                s = o[r + 2],
                u = o[r + 3],
                c = this.image();
              if (
                ((this.hasFill() || this.hasStroke()) &&
                  (e.beginPath(),
                  e.rect(0, 0, s, u),
                  e.closePath(),
                  e.fillStrokeShape(this)),
                c)
              )
                if (a) {
                  var d = a[t],
                    m = n * 2;
                  e.drawImage(c, i, l, s, u, d[m + 0], d[m + 1], s, u);
                } else e.drawImage(c, i, l, s, u, 0, 0, s, u);
            }),
            (n.prototype._hitFunc = function (e) {
              var t = this.animation(),
                n = this.frameIndex(),
                r = n * 4,
                o = this.animations()[t],
                a = this.frameOffsets(),
                i = o[r + 2],
                l = o[r + 3];
              if ((e.beginPath(), a)) {
                var s = a[t],
                  u = n * 2;
                e.rect(s[u + 0], s[u + 1], i, l);
              } else e.rect(0, 0, i, l);
              (e.closePath(), e.fillShape(this));
            }),
            (n.prototype._useBufferCanvas = function () {
              return t.prototype._useBufferCanvas.call(this, !0);
            }),
            (n.prototype._setInterval = function () {
              var e = this;
              this.interval = setInterval(function () {
                e._updateIndex();
              }, 1e3 / this.frameRate());
            }),
            (n.prototype.start = function () {
              if (!this.isRunning()) {
                var e = this.getLayer();
                (this.anim.setLayers(e),
                  this._setInterval(),
                  this.anim.start());
              }
            }),
            (n.prototype.stop = function () {
              (this.anim.stop(), clearInterval(this.interval));
            }),
            (n.prototype.isRunning = function () {
              return this.anim.isRunning();
            }),
            (n.prototype._updateIndex = function () {
              var e = this.frameIndex(),
                t = this.animation(),
                n = this.animations(),
                r = n[t],
                o = r.length / 4;
              e < o - 1 ? this.frameIndex(e + 1) : this.frameIndex(0);
            }),
            n
          );
        })(r.Shape);
      ((Vt.Sprite = l),
        (l.prototype.className = "Sprite"),
        i._registerNode(l),
        n.Factory.addGetterSetter(l, "animation"),
        n.Factory.addGetterSetter(l, "animations"),
        n.Factory.addGetterSetter(l, "frameOffsets"),
        n.Factory.addGetterSetter(l, "image"),
        n.Factory.addGetterSetter(l, "frameIndex", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "frameRate", 17, a.getNumberValidator()),
        n.Factory.backCompat(l, {
          index: "frameIndex",
          getIndex: "getFrameIndex",
          setIndex: "setFrameIndex",
        }),
        t.Collection.mapMethods(l));
    }
    var zt = !1;
    function jt() {
      return (zt || ((zt = !0), Gt()), Ht.exports);
    }
    var Kt = {},
      Qt = { exports: Kt };
    function Xt() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Kt, "__esModule", { value: !0 }),
        (Kt.Star = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = b(),
        a = c(),
        i = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              var t = this.innerRadius(),
                n = this.outerRadius(),
                r = this.numPoints();
              (e.beginPath(), e.moveTo(0, 0 - n));
              for (var o = 1; o < r * 2; o++) {
                var a = o % 2 === 0 ? n : t,
                  i = a * Math.sin((o * Math.PI) / r),
                  l = -1 * a * Math.cos((o * Math.PI) / r);
                e.lineTo(i, l);
              }
              (e.closePath(), e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.outerRadius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.outerRadius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.outerRadius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((Kt.Star = i),
        (i.prototype.className = "Star"),
        (i.prototype._centroid = !0),
        (i.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
        a._registerNode(i),
        n.Factory.addGetterSetter(i, "numPoints", 5, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "innerRadius", 0, o.getNumberValidator()),
        n.Factory.addGetterSetter(i, "outerRadius", 0, o.getNumberValidator()),
        t.Collection.mapMethods(i));
    }
    var Yt = !1;
    function Jt() {
      return (Yt || ((Yt = !0), Xt()), Qt.exports);
    }
    var Zt = {},
      en = { exports: Zt };
    function tn() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(Zt, "__esModule", { value: !0 }),
        (Zt.Text = Zt.stringToArray = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = c(),
        a = b(),
        i = c();
      function l(e) {
        return Array.from(e);
      }
      Zt.stringToArray = l;
      var s = "auto",
        u = "center",
        d = "justify",
        m = "Change.konva",
        p = "2d",
        _ = "-",
        g = "left",
        h = "text",
        y = "Text",
        C = "top",
        v = "bottom",
        S = "middle",
        R = "normal",
        L = "px ",
        k = " ",
        I = "right",
        T = "word",
        D = "char",
        x = "none",
        $ = "\u2026",
        P = [
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontVariant",
          "padding",
          "align",
          "verticalAlign",
          "lineHeight",
          "text",
          "width",
          "height",
          "wrap",
          "ellipsis",
          "letterSpacing",
        ],
        N = P.length;
      function M(e) {
        return e
          .split(",")
          .map(function (e) {
            e = e.trim();
            var t = e.indexOf(" ") >= 0,
              n = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
            return (t && !n && (e = '"' + e + '"'), e);
          })
          .join(", ");
      }
      var w;
      function A() {
        return w || ((w = t.Util.createCanvasElement().getContext(p)), w);
      }
      function F(e) {
        e.fillText(this._partialText, this._partialTextX, this._partialTextY);
      }
      function O(e) {
        e.strokeText(this._partialText, this._partialTextX, this._partialTextY);
      }
      function B(e) {
        return (
          (e = e || {}),
          !e.fillLinearGradientColorStops &&
            !e.fillRadialGradientColorStops &&
            !e.fillPatternImage &&
            (e.fill = e.fill || "black"),
          e
        );
      }
      var W = (function (n) {
        e(r, n);
        function r(e) {
          var t = n.call(this, B(e)) || this;
          ((t._partialTextX = 0), (t._partialTextY = 0));
          for (var r = 0; r < N; r++) t.on(P[r] + m, t._setTextData);
          return (t._setTextData(), t);
        }
        return (
          (r.prototype._sceneFunc = function (e) {
            var t = this.textArr,
              n = t.length;
            if (this.text()) {
              var r = this.padding(),
                o = this.fontSize(),
                a = this.lineHeight() * o,
                i = this.verticalAlign(),
                s = 0,
                c = this.align(),
                m = this.getWidth(),
                p = this.letterSpacing(),
                _ = this.fill(),
                f = this.textDecoration(),
                h = f.indexOf("underline") !== -1,
                y = f.indexOf("line-through") !== -1,
                C,
                b = 0,
                b = a / 2,
                R = 0,
                L = 0;
              for (
                e.setAttr("font", this._getContextFont()),
                  e.setAttr("textBaseline", S),
                  e.setAttr("textAlign", g),
                  i === S
                    ? (s = (this.getHeight() - n * a - r * 2) / 2)
                    : i === v && (s = this.getHeight() - n * a - r * 2),
                  e.translate(r, s + r),
                  C = 0;
                C < n;
                C++
              ) {
                var R = 0,
                  L = 0,
                  E = t[C],
                  k = E.text,
                  T = E.width,
                  D = C !== n - 1,
                  x,
                  $,
                  P;
                if (
                  (e.save(),
                  c === I
                    ? (R += m - T - r * 2)
                    : c === u && (R += (m - T - r * 2) / 2),
                  h &&
                    (e.save(),
                    e.beginPath(),
                    e.moveTo(R, b + L + Math.round(o / 2)),
                    (x = k.split(" ").length - 1),
                    ($ = x === 0),
                    (P = c === d && D && !$ ? m - r * 2 : T),
                    e.lineTo(R + Math.round(P), b + L + Math.round(o / 2)),
                    (e.lineWidth = o / 15),
                    (e.strokeStyle = _),
                    e.stroke(),
                    e.restore()),
                  y &&
                    (e.save(),
                    e.beginPath(),
                    e.moveTo(R, b + L),
                    (x = k.split(" ").length - 1),
                    ($ = x === 0),
                    (P = c === d && D && !$ ? m - r * 2 : T),
                    e.lineTo(R + Math.round(P), b + L),
                    (e.lineWidth = o / 15),
                    (e.strokeStyle = _),
                    e.stroke(),
                    e.restore()),
                  p !== 0 || c === d)
                ) {
                  x = k.split(" ").length - 1;
                  for (var N = l(k), M = 0; M < N.length; M++) {
                    var w = N[M];
                    (w === " " &&
                      C !== n - 1 &&
                      c === d &&
                      (R += (m - r * 2 - T) / x),
                      (this._partialTextX = R),
                      (this._partialTextY = b + L),
                      (this._partialText = w),
                      e.fillStrokeShape(this),
                      (R += this.measureSize(w).width + p));
                  }
                } else
                  ((this._partialTextX = R),
                    (this._partialTextY = b + L),
                    (this._partialText = k),
                    e.fillStrokeShape(this));
                (e.restore(), n > 1 && (b += a));
              }
            }
          }),
          (r.prototype._hitFunc = function (e) {
            var t = this.getWidth(),
              n = this.getHeight();
            (e.beginPath(),
              e.rect(0, 0, t, n),
              e.closePath(),
              e.fillStrokeShape(this));
          }),
          (r.prototype.setText = function (e) {
            var n = t.Util._isString(e) ? e : e == null ? "" : e + "";
            return (this._setAttr(h, n), this);
          }),
          (r.prototype.getWidth = function () {
            var e = this.attrs.width === s || this.attrs.width === void 0;
            return e
              ? this.getTextWidth() + this.padding() * 2
              : this.attrs.width;
          }),
          (r.prototype.getHeight = function () {
            var e = this.attrs.height === s || this.attrs.height === void 0;
            return e
              ? this.fontSize() * this.textArr.length * this.lineHeight() +
                  this.padding() * 2
              : this.attrs.height;
          }),
          (r.prototype.getTextWidth = function () {
            return this.textWidth;
          }),
          (r.prototype.getTextHeight = function () {
            return (
              t.Util.warn(
                "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.",
              ),
              this.textHeight
            );
          }),
          (r.prototype.measureSize = function (e) {
            var t = A(),
              n = this.fontSize(),
              r;
            return (
              t.save(),
              (t.font = this._getContextFont()),
              (r = t.measureText(e)),
              t.restore(),
              { width: r.width, height: n }
            );
          }),
          (r.prototype._getContextFont = function () {
            return o.Konva.UA.isIE
              ? this.fontStyle() + k + this.fontSize() + L + this.fontFamily()
              : this.fontStyle() +
                  k +
                  this.fontVariant() +
                  k +
                  (this.fontSize() + L) +
                  M(this.fontFamily());
          }),
          (r.prototype._addTextLine = function (e) {
            this.align() === d && (e = e.trim());
            var t = this._getTextWidth(e);
            return this.textArr.push({ text: e, width: t });
          }),
          (r.prototype._getTextWidth = function (e) {
            var t = this.letterSpacing(),
              n = e.length;
            return A().measureText(e).width + (n ? t * (n - 1) : 0);
          }),
          (r.prototype._setTextData = function () {
            var e = this.text().split("\n"),
              t = +this.fontSize(),
              n = 0,
              r = this.lineHeight() * t,
              o = this.attrs.width,
              a = this.attrs.height,
              i = o !== s && o !== void 0,
              l = a !== s && a !== void 0,
              u = this.padding(),
              c = o - u * 2,
              d = a - u * 2,
              m = 0,
              p = this.wrap(),
              f = p !== x,
              g = p !== D && f,
              h = this.ellipsis();
            ((this.textArr = []), (A().font = this._getContextFont()));
            for (
              var y = h ? this._getTextWidth($) : 0, C = 0, b = e.length;
              C < b;
              ++C
            ) {
              var v = e[C],
                S = this._getTextWidth(v);
              if (i && S > c)
                for (; v.length > 0; ) {
                  for (var R = 0, L = v.length, E = "", I = 0; R < L; ) {
                    var T = (R + L) >>> 1,
                      P = v.slice(0, T + 1),
                      N = this._getTextWidth(P) + y;
                    N <= c ? ((R = T + 1), (E = P), (I = N)) : (L = T);
                  }
                  if (E) {
                    if (g) {
                      var M,
                        w = v[E.length],
                        F = w === k || w === _;
                      (F && I <= c
                        ? (M = E.length)
                        : (M =
                            Math.max(E.lastIndexOf(k), E.lastIndexOf(_)) + 1),
                        M > 0 &&
                          ((R = M),
                          (E = E.slice(0, R)),
                          (I = this._getTextWidth(E))));
                    }
                    if (
                      ((E = E.trimRight()),
                      this._addTextLine(E),
                      (n = Math.max(n, I)),
                      (m += r),
                      !f || (l && m + r > d))
                    ) {
                      var O = this.textArr[this.textArr.length - 1];
                      if (O && h) {
                        var B = this._getTextWidth(O.text + $) < c;
                        (B || (O.text = O.text.slice(0, O.text.length - 3)),
                          this.textArr.splice(this.textArr.length - 1, 1),
                          this._addTextLine(O.text + $));
                      }
                      break;
                    }
                    if (
                      ((v = v.slice(R)),
                      (v = v.trimLeft()),
                      v.length > 0 && ((S = this._getTextWidth(v)), S <= c))
                    ) {
                      (this._addTextLine(v), (m += r), (n = Math.max(n, S)));
                      break;
                    }
                  } else break;
                }
              else (this._addTextLine(v), (m += r), (n = Math.max(n, S)));
              if (l && m + r > d) break;
            }
            ((this.textHeight = t), (this.textWidth = n));
          }),
          (r.prototype.getStrokeScaleEnabled = function () {
            return !0;
          }),
          r
        );
      })(r.Shape);
      ((Zt.Text = W),
        (W.prototype._fillFunc = F),
        (W.prototype._strokeFunc = O),
        (W.prototype.className = y),
        (W.prototype._attrsAffectingSize = [
          "text",
          "fontSize",
          "padding",
          "wrap",
          "lineHeight",
        ]),
        i._registerNode(W),
        n.Factory.overWriteSetter(W, "width", a.getNumberOrAutoValidator()),
        n.Factory.overWriteSetter(W, "height", a.getNumberOrAutoValidator()),
        n.Factory.addGetterSetter(W, "fontFamily", "Arial"),
        n.Factory.addGetterSetter(W, "fontSize", 12, a.getNumberValidator()),
        n.Factory.addGetterSetter(W, "fontStyle", R),
        n.Factory.addGetterSetter(W, "fontVariant", R),
        n.Factory.addGetterSetter(W, "padding", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(W, "align", g),
        n.Factory.addGetterSetter(W, "verticalAlign", C),
        n.Factory.addGetterSetter(W, "lineHeight", 1, a.getNumberValidator()),
        n.Factory.addGetterSetter(W, "wrap", T),
        n.Factory.addGetterSetter(W, "ellipsis", !1, a.getBooleanValidator()),
        n.Factory.addGetterSetter(
          W,
          "letterSpacing",
          0,
          a.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(W, "text", "", a.getStringValidator()),
        n.Factory.addGetterSetter(W, "textDecoration", ""),
        t.Collection.mapMethods(W));
    }
    var nn = !1;
    function rn() {
      return (nn || ((nn = !0), tn()), en.exports);
    }
    var on = {},
      an = { exports: on };
    function ln() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(on, "__esModule", { value: !0 }),
        (on.TextPath = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = It(),
        a = rn(),
        i = b(),
        l = c(),
        s = "",
        u = "normal";
      function d(e) {
        e.fillText(this.partialText, 0, 0);
      }
      function m(e) {
        e.strokeText(this.partialText, 0, 0);
      }
      var p = (function (n) {
        e(r, n);
        function r(e) {
          var r = n.call(this, e) || this;
          return (
            (r.dummyCanvas = t.Util.createCanvasElement()),
            (r.dataArray = []),
            (r.dataArray = o.Path.parsePathData(r.attrs.data)),
            r.on("dataChange.konva", function () {
              ((this.dataArray = o.Path.parsePathData(this.attrs.data)),
                this._setTextData());
            }),
            r.on(
              "textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva",
              r._setTextData,
            ),
            e &&
              e.getKerning &&
              (t.Util.warn(
                'getKerning TextPath API is deprecated. Please use "kerningFunc" instead.',
              ),
              r.kerningFunc(e.getKerning)),
            r._setTextData(),
            r
          );
        }
        return (
          (r.prototype._sceneFunc = function (e) {
            (e.setAttr("font", this._getContextFont()),
              e.setAttr("textBaseline", this.textBaseline()),
              e.setAttr("textAlign", "left"),
              e.save());
            var t = this.textDecoration(),
              n = this.fill(),
              r = this.fontSize(),
              o = this.glyphInfo;
            t === "underline" && e.beginPath();
            for (var a = 0; a < o.length; a++) {
              e.save();
              var i = o[a].p0;
              (e.translate(i.x, i.y),
                e.rotate(o[a].rotation),
                (this.partialText = o[a].text),
                e.fillStrokeShape(this),
                t === "underline" &&
                  (a === 0 && e.moveTo(0, r / 2 + 1), e.lineTo(r, r / 2 + 1)),
                e.restore());
            }
            (t === "underline" &&
              ((e.strokeStyle = n), (e.lineWidth = r / 20), e.stroke()),
              e.restore());
          }),
          (r.prototype._hitFunc = function (e) {
            e.beginPath();
            var t = this.glyphInfo;
            if (t.length >= 1) {
              var n = t[0].p0;
              e.moveTo(n.x, n.y);
            }
            for (var r = 0; r < t.length; r++) {
              var o = t[r].p1;
              e.lineTo(o.x, o.y);
            }
            (e.setAttr("lineWidth", this.fontSize()),
              e.setAttr("strokeStyle", this.colorKey),
              e.stroke());
          }),
          (r.prototype.getTextWidth = function () {
            return this.textWidth;
          }),
          (r.prototype.getTextHeight = function () {
            return (
              t.Util.warn(
                "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.",
              ),
              this.textHeight
            );
          }),
          (r.prototype.setText = function (e) {
            return a.Text.prototype.setText.call(this, e);
          }),
          (r.prototype._getContextFont = function () {
            return a.Text.prototype._getContextFont.call(this);
          }),
          (r.prototype._getTextSize = function (e) {
            var t = this.dummyCanvas,
              n = t.getContext("2d");
            (n.save(), (n.font = this._getContextFont()));
            var r = n.measureText(e);
            return (
              n.restore(),
              { width: r.width, height: parseInt(this.attrs.fontSize, 10) }
            );
          }),
          (r.prototype._setTextData = function () {
            var e = this,
              t = this._getTextSize(this.attrs.text),
              n = this.letterSpacing(),
              r = this.align(),
              i = this.kerningFunc();
            ((this.textWidth = t.width), (this.textHeight = t.height));
            var l = Math.max(
              this.textWidth + ((this.attrs.text || "").length - 1) * n,
              0,
            );
            this.glyphInfo = [];
            for (var s = 0, u = 0; u < e.dataArray.length; u++)
              e.dataArray[u].pathLength > 0 && (s += e.dataArray[u].pathLength);
            var c = 0;
            (r === "center" && (c = Math.max(0, s / 2 - l / 2)),
              r === "right" && (c = Math.max(0, s - l)));
            for (
              var d = a.stringToArray(this.text()),
                m = this.text().split(" ").length - 1,
                p,
                _,
                f,
                g = -1,
                h = 0,
                y = function () {
                  h = 0;
                  for (var t = e.dataArray, n = g + 1; n < t.length; n++) {
                    if (t[n].pathLength > 0) return ((g = n), t[n]);
                    t[n].command === "M" &&
                      (p = { x: t[n].points[0], y: t[n].points[1] });
                  }
                  return {};
                },
                C = function (t) {
                  var a = e._getTextSize(t).width + n;
                  t === " " && r === "justify" && (a += (s - l) / m);
                  var i = 0,
                    u = 0;
                  for (_ = void 0; Math.abs(a - i) / a > 0.01 && u < 20; ) {
                    u++;
                    for (var c = i; f === void 0; )
                      ((f = y()),
                        f &&
                          c + f.pathLength < a &&
                          ((c += f.pathLength), (f = void 0)));
                    if (f === {} || p === void 0) return;
                    var d = !1;
                    switch (f.command) {
                      case "L":
                        o.Path.getLineLength(
                          p.x,
                          p.y,
                          f.points[0],
                          f.points[1],
                        ) > a
                          ? (_ = o.Path.getPointOnLine(
                              a,
                              p.x,
                              p.y,
                              f.points[0],
                              f.points[1],
                              p.x,
                              p.y,
                            ))
                          : (f = void 0);
                        break;
                      case "A":
                        var g = f.points[4],
                          C = f.points[5],
                          b = f.points[4] + C;
                        (h === 0
                          ? (h = g + 1e-8)
                          : a > i
                            ? (h += ((Math.PI / 180) * C) / Math.abs(C))
                            : (h -= ((Math.PI / 360) * C) / Math.abs(C)),
                          ((C < 0 && h < b) || (C >= 0 && h > b)) &&
                            ((h = b), (d = !0)),
                          (_ = o.Path.getPointOnEllipticalArc(
                            f.points[0],
                            f.points[1],
                            f.points[2],
                            f.points[3],
                            h,
                            f.points[6],
                          )));
                        break;
                      case "C":
                        (h === 0
                          ? a > f.pathLength
                            ? (h = 1e-8)
                            : (h = a / f.pathLength)
                          : a > i
                            ? (h += (a - i) / f.pathLength / 2)
                            : (h = Math.max(h - (i - a) / f.pathLength / 2, 0)),
                          h > 1 && ((h = 1), (d = !0)),
                          (_ = o.Path.getPointOnCubicBezier(
                            h,
                            f.start.x,
                            f.start.y,
                            f.points[0],
                            f.points[1],
                            f.points[2],
                            f.points[3],
                            f.points[4],
                            f.points[5],
                          )));
                        break;
                      case "Q":
                        (h === 0
                          ? (h = a / f.pathLength)
                          : a > i
                            ? (h += (a - i) / f.pathLength)
                            : (h -= (i - a) / f.pathLength),
                          h > 1 && ((h = 1), (d = !0)),
                          (_ = o.Path.getPointOnQuadraticBezier(
                            h,
                            f.start.x,
                            f.start.y,
                            f.points[0],
                            f.points[1],
                            f.points[2],
                            f.points[3],
                          )));
                        break;
                    }
                    (_ !== void 0 &&
                      (i = o.Path.getLineLength(p.x, p.y, _.x, _.y)),
                      d && ((d = !1), (f = void 0)));
                  }
                },
                b = "C",
                v = e._getTextSize(b).width + n,
                S = c / v - 1,
                R = 0;
              R < S && (C(b), !(p === void 0 || _ === void 0));
              R++
            )
              p = _;
            for (
              var L = 0;
              L < d.length && (C(d[L]), !(p === void 0 || _ === void 0));
              L++
            ) {
              var E = o.Path.getLineLength(p.x, p.y, _.x, _.y),
                k = 0;
              if (i)
                try {
                  k = i(d[L - 1], d[L]) * this.fontSize();
                } catch (e) {
                  k = 0;
                }
              ((p.x += k), (_.x += k), (this.textWidth += k));
              var I = o.Path.getPointOnLine(k + E / 2, p.x, p.y, _.x, _.y),
                T = Math.atan2(_.y - p.y, _.x - p.x);
              (this.glyphInfo.push({
                transposeX: I.x,
                transposeY: I.y,
                text: d[L],
                rotation: T,
                p0: p,
                p1: _,
              }),
                (p = _));
            }
          }),
          (r.prototype.getSelfRect = function () {
            if (!this.glyphInfo.length)
              return { x: 0, y: 0, width: 0, height: 0 };
            var e = [];
            this.glyphInfo.forEach(function (t) {
              (e.push(t.p0.x), e.push(t.p0.y), e.push(t.p1.x), e.push(t.p1.y));
            });
            for (
              var t = e[0] || 0,
                n = e[0] || 0,
                r = e[1] || 0,
                o = e[1] || 0,
                a,
                i,
                l = 0;
              l < e.length / 2;
              l++
            )
              ((a = e[l * 2]),
                (i = e[l * 2 + 1]),
                (t = Math.min(t, a)),
                (n = Math.max(n, a)),
                (r = Math.min(r, i)),
                (o = Math.max(o, i)));
            var s = this.fontSize();
            return {
              x: t - s / 2,
              y: r - s / 2,
              width: n - t + s,
              height: o - r + s,
            };
          }),
          r
        );
      })(r.Shape);
      ((on.TextPath = p),
        (p.prototype._fillFunc = d),
        (p.prototype._strokeFunc = m),
        (p.prototype._fillFuncHit = d),
        (p.prototype._strokeFuncHit = m),
        (p.prototype.className = "TextPath"),
        (p.prototype._attrsAffectingSize = ["text", "fontSize", "data"]),
        l._registerNode(p),
        n.Factory.addGetterSetter(p, "data"),
        n.Factory.addGetterSetter(p, "fontFamily", "Arial"),
        n.Factory.addGetterSetter(p, "fontSize", 12, i.getNumberValidator()),
        n.Factory.addGetterSetter(p, "fontStyle", u),
        n.Factory.addGetterSetter(p, "align", "left"),
        n.Factory.addGetterSetter(
          p,
          "letterSpacing",
          0,
          i.getNumberValidator(),
        ),
        n.Factory.addGetterSetter(p, "textBaseline", "middle"),
        n.Factory.addGetterSetter(p, "fontVariant", u),
        n.Factory.addGetterSetter(p, "text", s),
        n.Factory.addGetterSetter(p, "textDecoration", null),
        n.Factory.addGetterSetter(p, "kerningFunc", null),
        t.Collection.mapMethods(p));
    }
    var sn = !1;
    function un() {
      return (sn || ((sn = !0), ln()), an.exports);
    }
    var cn = {},
      dn = { exports: cn };
    function mn() {
      var e =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              e(t, n);
              function r() {
                this.constructor = t;
              }
              t.prototype =
                n === null
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r());
            };
          })(),
        t =
          (this && this.__assign) ||
          function () {
            return (
              (t =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
              t.apply(this, arguments)
            );
          };
      (Object.defineProperty(cn, "__esModule", { value: !0 }),
        (cn.Transformer = void 0));
      var n = f(),
        r = E(),
        o = G(),
        a = de(),
        i = Pt(),
        l = ke(),
        s = c(),
        u = b(),
        d = c(),
        m = "tr-konva",
        p = [
          "resizeEnabledChange",
          "rotateAnchorOffsetChange",
          "rotateEnabledChange",
          "enabledAnchorsChange",
          "anchorSizeChange",
          "borderEnabledChange",
          "borderStrokeChange",
          "borderStrokeWidthChange",
          "borderDashChange",
          "anchorStrokeChange",
          "anchorStrokeWidthChange",
          "anchorFillChange",
          "anchorCornerRadiusChange",
          "ignoreStrokeChange",
        ]
          .map(function (e) {
            return e + ("." + m);
          })
          .join(" "),
        _ = "nodesRect",
        g = [
          "widthChange",
          "heightChange",
          "scaleXChange",
          "scaleYChange",
          "skewXChange",
          "skewYChange",
          "rotationChange",
          "offsetXChange",
          "offsetYChange",
          "transformsEnabledChange",
          "strokeWidthChange",
        ]
          .map(function (e) {
            return e + ("." + m);
          })
          .join(" "),
        h = {
          "top-left": -45,
          "top-center": 0,
          "top-right": 45,
          "middle-right": -90,
          "middle-left": 90,
          "bottom-left": -135,
          "bottom-center": 180,
          "bottom-right": 135,
        },
        y = "ontouchstart" in s.Konva._global;
      function C(e, t) {
        if (e === "rotater") return "crosshair";
        t += n.Util._degToRad(h[e] || 0);
        var r = ((n.Util._radToDeg(t) % 360) + 360) % 360;
        return n.Util._inRange(r, 315 + 22.5, 360) ||
          n.Util._inRange(r, 0, 22.5)
          ? "ns-resize"
          : n.Util._inRange(r, 45 - 22.5, 45 + 22.5)
            ? "nesw-resize"
            : n.Util._inRange(r, 90 - 22.5, 90 + 22.5)
              ? "ew-resize"
              : n.Util._inRange(r, 135 - 22.5, 135 + 22.5)
                ? "nwse-resize"
                : n.Util._inRange(r, 180 - 22.5, 180 + 22.5)
                  ? "ns-resize"
                  : n.Util._inRange(r, 225 - 22.5, 225 + 22.5)
                    ? "nesw-resize"
                    : n.Util._inRange(r, 270 - 22.5, 270 + 22.5)
                      ? "ew-resize"
                      : n.Util._inRange(r, 315 - 22.5, 315 + 22.5)
                        ? "nwse-resize"
                        : (n.Util.error(
                            "Transformer has unknown angle for cursor detection: " +
                              r,
                          ),
                          "pointer");
      }
      var v = [
          "top-left",
          "top-center",
          "top-right",
          "middle-right",
          "middle-left",
          "bottom-left",
          "bottom-center",
          "bottom-right",
        ],
        S = 1e8;
      function R(e) {
        return {
          x:
            e.x +
            (e.width / 2) * Math.cos(e.rotation) +
            (e.height / 2) * Math.sin(-e.rotation),
          y:
            e.y +
            (e.height / 2) * Math.cos(e.rotation) +
            (e.width / 2) * Math.sin(e.rotation),
        };
      }
      function L(e, n, r) {
        var o = r.x + (e.x - r.x) * Math.cos(n) - (e.y - r.y) * Math.sin(n),
          a = r.y + (e.x - r.x) * Math.sin(n) + (e.y - r.y) * Math.cos(n);
        return t(t({}, e), { rotation: e.rotation + n, x: o, y: a });
      }
      function k(e, t) {
        var n = R(e);
        return L(e, t, n);
      }
      function I(e, t, n) {
        for (var r = t, o = 0; o < e.length; o++) {
          var a = s.Konva.getAngle(e[o]),
            i = Math.abs(a - t) % (Math.PI * 2),
            l = Math.min(i, Math.PI * 2 - i);
          l < n && (r = a);
        }
        return r;
      }
      var T = (function (t) {
        e(r, t);
        function r(e) {
          var n = t.call(this, e) || this;
          return (
            (n._transforming = !1),
            n._createElements(),
            (n._handleMouseMove = n._handleMouseMove.bind(n)),
            (n._handleMouseUp = n._handleMouseUp.bind(n)),
            (n.update = n.update.bind(n)),
            n.on(p, n.update),
            n.getNode() && n.update(),
            n
          );
        }
        return (
          (r.prototype.attachTo = function (e) {
            return (this.setNode(e), this);
          }),
          (r.prototype.setNode = function (e) {
            return (
              n.Util.warn(
                "tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.",
              ),
              this.setNodes([e])
            );
          }),
          (r.prototype.getNode = function () {
            return this._nodes && this._nodes[0];
          }),
          (r.prototype.setNodes = function (e) {
            var t = this;
            (e === void 0 && (e = []),
              this._nodes && this._nodes.length && this.detach(),
              (this._nodes = e),
              e.length === 1
                ? this.rotation(e[0].getAbsoluteRotation())
                : this.rotation(0),
              this._nodes.forEach(function (e) {
                var n = e._attrsAffectingSize
                    .map(function (e) {
                      return e + "Change." + m;
                    })
                    .join(" "),
                  r = function () {
                    (t.nodes().length === 1 &&
                      t.rotation(t.nodes()[0].getAbsoluteRotation()),
                      t._resetTransformCache(),
                      !t._transforming && !t.isDragging() && t.update());
                  };
                (e.on(n, r),
                  e.on(g, r),
                  e.on("_clearTransformCache." + m, r),
                  e.on("xChange." + m + " yChange." + m, r),
                  t._proxyDrag(e));
              }),
              this._resetTransformCache());
            var n = !!this.findOne(".top-left");
            return (n && this.update(), this);
          }),
          (r.prototype._proxyDrag = function (e) {
            var t = this,
              n;
            (e.on("dragstart." + m, function (r) {
              ((n = e.getAbsolutePosition()),
                !t.isDragging() &&
                  e !== t.findOne(".back") &&
                  t.startDrag(r, !1));
            }),
              e.on("dragmove." + m, function (r) {
                if (n) {
                  var o = e.getAbsolutePosition(),
                    a = o.x - n.x,
                    i = o.y - n.y;
                  (t.nodes().forEach(function (t) {
                    if (t !== e && !t.isDragging()) {
                      var n = t.getAbsolutePosition();
                      (t.setAbsolutePosition({ x: n.x + a, y: n.y + i }),
                        t.startDrag(r));
                    }
                  }),
                    (n = null));
                }
              }));
          }),
          (r.prototype.getNodes = function () {
            return this._nodes || [];
          }),
          (r.prototype.getActiveAnchor = function () {
            return this._movingAnchorName;
          }),
          (r.prototype.detach = function () {
            (this._nodes &&
              this._nodes.forEach(function (e) {
                e.off("." + m);
              }),
              (this._nodes = []),
              this._resetTransformCache());
          }),
          (r.prototype._resetTransformCache = function () {
            (this._clearCache(_),
              this._clearCache("transform"),
              this._clearSelfAndDescendantCache("absoluteTransform"));
          }),
          (r.prototype._getNodeRect = function () {
            return this._getCache(_, this.__getNodeRect);
          }),
          (r.prototype.__getNodeShape = function (e, t, n) {
            t === void 0 && (t = this.rotation());
            var r = e.getClientRect({
                skipTransform: !0,
                skipShadow: !0,
                skipStroke: this.ignoreStroke(),
              }),
              o = e.getAbsoluteScale(n),
              a = e.getAbsolutePosition(n),
              i = r.x * o.x - e.offsetX() * o.x,
              l = r.y * o.y - e.offsetY() * o.y,
              u =
                (s.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) %
                (Math.PI * 2),
              c = {
                x: a.x + i * Math.cos(u) + l * Math.sin(-u),
                y: a.y + l * Math.cos(u) + i * Math.sin(u),
                width: r.width * o.x,
                height: r.height * o.y,
                rotation: u,
              };
            return L(c, -s.Konva.getAngle(t), { x: 0, y: 0 });
          }),
          (r.prototype.__getNodeRect = function () {
            var e = this,
              t = this.getNode();
            if (!t) return { x: -S, y: -S, width: 0, height: 0, rotation: 0 };
            var r = [];
            this.nodes().map(function (t) {
              var n = t.getClientRect({
                  skipTransform: !0,
                  skipShadow: !0,
                  skipStroke: e.ignoreStroke(),
                }),
                o = [
                  { x: n.x, y: n.y },
                  { x: n.x + n.width, y: n.y },
                  { x: n.x + n.width, y: n.y + n.height },
                  { x: n.x, y: n.y + n.height },
                ],
                a = t.getAbsoluteTransform();
              o.forEach(function (e) {
                var t = a.point(e);
                r.push(t);
              });
            });
            var o = new n.Transform();
            o.rotate(-s.Konva.getAngle(this.rotation()));
            var a, i, l, u;
            (r.forEach(function (e) {
              var t = o.point(e);
              (a === void 0 && ((a = l = t.x), (i = u = t.y)),
                (a = Math.min(a, t.x)),
                (i = Math.min(i, t.y)),
                (l = Math.max(l, t.x)),
                (u = Math.max(u, t.y)));
            }),
              o.invert());
            var c = o.point({ x: a, y: i });
            return {
              x: c.x,
              y: c.y,
              width: l - a,
              height: u - i,
              rotation: s.Konva.getAngle(this.rotation()),
            };
          }),
          (r.prototype.getX = function () {
            return this._getNodeRect().x;
          }),
          (r.prototype.getY = function () {
            return this._getNodeRect().y;
          }),
          (r.prototype.getWidth = function () {
            return this._getNodeRect().width;
          }),
          (r.prototype.getHeight = function () {
            return this._getNodeRect().height;
          }),
          (r.prototype._createElements = function () {
            (this._createBack(),
              v.forEach(
                function (e) {
                  this._createAnchor(e);
                }.bind(this),
              ),
              this._createAnchor("rotater"));
          }),
          (r.prototype._createAnchor = function (e) {
            var t = this,
              n = new i.Rect({
                stroke: "rgb(0, 161, 255)",
                fill: "white",
                strokeWidth: 1,
                name: e + " _anchor",
                dragDistance: 0,
                draggable: !0,
                hitStrokeWidth: y ? 10 : "auto",
              }),
              r = this;
            (n.on("mousedown touchstart", function (e) {
              r._handleMouseDown(e);
            }),
              n.on("dragstart", function (e) {
                (n.stopDrag(), (e.cancelBubble = !0));
              }),
              n.on("dragend", function (e) {
                e.cancelBubble = !0;
              }),
              n.on("mouseenter", function () {
                var r = s.Konva.getAngle(t.rotation()),
                  o = C(e, r);
                ((n.getStage().content.style.cursor = o),
                  (t._cursorChange = !0));
              }),
              n.on("mouseout", function () {
                ((n.getStage().content.style.cursor = ""),
                  (t._cursorChange = !1));
              }),
              this.add(n));
          }),
          (r.prototype._createBack = function () {
            var e = this,
              t = new a.Shape({
                name: "back",
                width: 0,
                height: 0,
                draggable: !0,
                sceneFunc: function (e) {
                  var t = this.getParent(),
                    r = t.padding();
                  (e.beginPath(),
                    e.rect(-r, -r, this.width() + r * 2, this.height() + r * 2),
                    e.moveTo(this.width() / 2, -r),
                    t.rotateEnabled() &&
                      e.lineTo(
                        this.width() / 2,
                        -t.rotateAnchorOffset() * n.Util._sign(this.height()) -
                          r,
                      ),
                    e.fillStrokeShape(this));
                },
                hitFunc: function (t, n) {
                  if (e.shouldOverdrawWholeArea()) {
                    var r = e.padding();
                    (t.beginPath(),
                      t.rect(-r, -r, n.width() + r * 2, n.height() + r * 2),
                      t.fillStrokeShape(n));
                  }
                },
              });
            (this.add(t),
              this._proxyDrag(t),
              t.on("dragstart", function (e) {
                e.cancelBubble = !0;
              }),
              t.on("dragmove", function (e) {
                e.cancelBubble = !0;
              }),
              t.on("dragend", function (e) {
                e.cancelBubble = !0;
              }));
          }),
          (r.prototype._handleMouseDown = function (e) {
            this._movingAnchorName = e.target.name().split(" ")[0];
            var t = this._getNodeRect(),
              n = t.width,
              r = t.height,
              o = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
            ((this.sin = Math.abs(r / o)),
              (this.cos = Math.abs(n / o)),
              window.addEventListener("mousemove", this._handleMouseMove),
              window.addEventListener("touchmove", this._handleMouseMove),
              window.addEventListener("mouseup", this._handleMouseUp, !0),
              window.addEventListener("touchend", this._handleMouseUp, !0),
              (this._transforming = !0));
            var a = e.target.getAbsolutePosition(),
              i = e.target.getStage().getPointerPosition();
            ((this._anchorDragOffset = { x: i.x - a.x, y: i.y - a.y }),
              this._fire("transformstart", { evt: e, target: this.getNode() }),
              this._nodes.forEach(function (t) {
                t._fire("transformstart", { evt: e, target: t });
              }));
          }),
          (r.prototype._handleMouseMove = function (e) {
            var t,
              n,
              r,
              o = this.findOne("." + this._movingAnchorName),
              a = o.getStage();
            a.setPointersPositions(e);
            var i = a.getPointerPosition(),
              l = {
                x: i.x - this._anchorDragOffset.x,
                y: i.y - this._anchorDragOffset.y,
              },
              u = o.getAbsolutePosition();
            o.setAbsolutePosition(l);
            var c = o.getAbsolutePosition();
            if (!(u.x === c.x && u.y === c.y)) {
              if (this._movingAnchorName === "rotater") {
                var d = this._getNodeRect();
                ((t = o.x() - d.width / 2), (n = -o.y() + d.height / 2));
                var m = Math.atan2(-n, t) + Math.PI / 2;
                d.height < 0 && (m -= Math.PI);
                var p = s.Konva.getAngle(this.rotation()),
                  _ = p + m,
                  f = s.Konva.getAngle(this.rotationSnapTolerance()),
                  g = I(this.rotationSnaps(), _, f),
                  h = g - d.rotation,
                  y = k(d, h);
                this._fitNodesInto(y, e);
                return;
              }
              var C = this.keepRatio() || e.shiftKey,
                L = this.centeredScaling() || e.altKey;
              if (this._movingAnchorName === "top-left") {
                if (C) {
                  var b = L
                    ? { x: this.width() / 2, y: this.height() / 2 }
                    : {
                        x: this.findOne(".bottom-right").x(),
                        y: this.findOne(".bottom-right").y(),
                      };
                  r = Math.sqrt(
                    Math.pow(b.x - o.x(), 2) + Math.pow(b.y - o.y(), 2),
                  );
                  var v = this.findOne(".top-left").x() > b.x ? -1 : 1,
                    S = this.findOne(".top-left").y() > b.y ? -1 : 1;
                  ((t = r * this.cos * v),
                    (n = r * this.sin * S),
                    this.findOne(".top-left").x(b.x - t),
                    this.findOne(".top-left").y(b.y - n));
                }
              } else if (this._movingAnchorName === "top-center")
                this.findOne(".top-left").y(o.y());
              else if (this._movingAnchorName === "top-right") {
                if (C) {
                  var b = L
                    ? { x: this.width() / 2, y: this.height() / 2 }
                    : {
                        x: this.findOne(".bottom-left").x(),
                        y: this.findOne(".bottom-left").y(),
                      };
                  r = Math.sqrt(
                    Math.pow(o.x() - b.x, 2) + Math.pow(b.y - o.y(), 2),
                  );
                  var v = this.findOne(".top-right").x() < b.x ? -1 : 1,
                    S = this.findOne(".top-right").y() > b.y ? -1 : 1;
                  ((t = r * this.cos * v),
                    (n = r * this.sin * S),
                    this.findOne(".top-right").x(b.x + t),
                    this.findOne(".top-right").y(b.y - n));
                }
                var R = o.position();
                (this.findOne(".top-left").y(R.y),
                  this.findOne(".bottom-right").x(R.x));
              } else if (this._movingAnchorName === "middle-left")
                this.findOne(".top-left").x(o.x());
              else if (this._movingAnchorName === "middle-right")
                this.findOne(".bottom-right").x(o.x());
              else if (this._movingAnchorName === "bottom-left") {
                if (C) {
                  var b = L
                    ? { x: this.width() / 2, y: this.height() / 2 }
                    : {
                        x: this.findOne(".top-right").x(),
                        y: this.findOne(".top-right").y(),
                      };
                  r = Math.sqrt(
                    Math.pow(b.x - o.x(), 2) + Math.pow(o.y() - b.y, 2),
                  );
                  var v = b.x < o.x() ? -1 : 1,
                    S = o.y() < b.y ? -1 : 1;
                  ((t = r * this.cos * v),
                    (n = r * this.sin * S),
                    o.x(b.x - t),
                    o.y(b.y + n));
                }
                ((R = o.position()),
                  this.findOne(".top-left").x(R.x),
                  this.findOne(".bottom-right").y(R.y));
              } else if (this._movingAnchorName === "bottom-center")
                this.findOne(".bottom-right").y(o.y());
              else if (this._movingAnchorName === "bottom-right") {
                if (C) {
                  var b = L
                    ? { x: this.width() / 2, y: this.height() / 2 }
                    : {
                        x: this.findOne(".top-left").x(),
                        y: this.findOne(".top-left").y(),
                      };
                  r = Math.sqrt(
                    Math.pow(o.x() - b.x, 2) + Math.pow(o.y() - b.y, 2),
                  );
                  var v = (this.findOne(".bottom-right").x() < b.x, 1),
                    S = (this.findOne(".bottom-right").y() < b.y, 1);
                  ((t = r * this.cos * v),
                    (n = r * this.sin * S),
                    this.findOne(".bottom-right").x(b.x + t),
                    this.findOne(".bottom-right").y(b.y + n));
                }
              } else
                new Error(
                  "Wrong position argument of selection resizer: " +
                    this._movingAnchorName,
                );
              var L = this.centeredScaling() || e.altKey;
              if (L) {
                var E = this.findOne(".top-left"),
                  T = this.findOne(".bottom-right"),
                  D = E.x(),
                  x = E.y(),
                  $ = this.getWidth() - T.x(),
                  P = this.getHeight() - T.y();
                (T.move({ x: -D, y: -x }), E.move({ x: $, y: P }));
              }
              var N = this.findOne(".top-left").getAbsolutePosition();
              ((t = N.x), (n = N.y));
              var M =
                  this.findOne(".bottom-right").x() -
                  this.findOne(".top-left").x(),
                w =
                  this.findOne(".bottom-right").y() -
                  this.findOne(".top-left").y();
              this._fitNodesInto(
                {
                  x: t,
                  y: n,
                  width: M,
                  height: w,
                  rotation: s.Konva.getAngle(this.rotation()),
                },
                e,
              );
            }
          }),
          (r.prototype._handleMouseUp = function (e) {
            this._removeEvents(e);
          }),
          (r.prototype.getAbsoluteTransform = function () {
            return this.getTransform();
          }),
          (r.prototype._removeEvents = function (e) {
            if (this._transforming) {
              ((this._transforming = !1),
                window.removeEventListener("mousemove", this._handleMouseMove),
                window.removeEventListener("touchmove", this._handleMouseMove),
                window.removeEventListener("mouseup", this._handleMouseUp, !0),
                window.removeEventListener(
                  "touchend",
                  this._handleMouseUp,
                  !0,
                ));
              var t = this.getNode();
              (this._fire("transformend", { evt: e, target: t }),
                t &&
                  this._nodes.forEach(function (t) {
                    t._fire("transformend", { evt: e, target: t });
                  }),
                (this._movingAnchorName = null));
            }
          }),
          (r.prototype._fitNodesInto = function (e, t) {
            var r = this,
              o = this._getNodeRect(),
              a = 1;
            if (n.Util._inRange(e.width, -this.padding() * 2 - a, a)) {
              this.update();
              return;
            }
            if (n.Util._inRange(e.height, -this.padding() * 2 - a, a)) {
              this.update();
              return;
            }
            var i = new n.Transform();
            if (
              (i.rotate(s.Konva.getAngle(this.rotation())),
              this._movingAnchorName &&
                e.width < 0 &&
                this._movingAnchorName.indexOf("left") >= 0)
            ) {
              var l = i.point({ x: -this.padding() * 2, y: 0 });
              ((e.x += l.x),
                (e.y += l.y),
                (e.width += this.padding() * 2),
                (this._movingAnchorName = this._movingAnchorName.replace(
                  "left",
                  "right",
                )),
                (this._anchorDragOffset.x -= l.x),
                (this._anchorDragOffset.y -= l.y));
            } else if (
              this._movingAnchorName &&
              e.width < 0 &&
              this._movingAnchorName.indexOf("right") >= 0
            ) {
              var l = i.point({ x: this.padding() * 2, y: 0 });
              ((this._movingAnchorName = this._movingAnchorName.replace(
                "right",
                "left",
              )),
                (this._anchorDragOffset.x -= l.x),
                (this._anchorDragOffset.y -= l.y),
                (e.width += this.padding() * 2));
            }
            if (
              this._movingAnchorName &&
              e.height < 0 &&
              this._movingAnchorName.indexOf("top") >= 0
            ) {
              var l = i.point({ x: 0, y: -this.padding() * 2 });
              ((e.x += l.x),
                (e.y += l.y),
                (this._movingAnchorName = this._movingAnchorName.replace(
                  "top",
                  "bottom",
                )),
                (this._anchorDragOffset.x -= l.x),
                (this._anchorDragOffset.y -= l.y),
                (e.height += this.padding() * 2));
            } else if (
              this._movingAnchorName &&
              e.height < 0 &&
              this._movingAnchorName.indexOf("bottom") >= 0
            ) {
              var l = i.point({ x: 0, y: this.padding() * 2 });
              ((this._movingAnchorName = this._movingAnchorName.replace(
                "bottom",
                "top",
              )),
                (this._anchorDragOffset.x -= l.x),
                (this._anchorDragOffset.y -= l.y),
                (e.height += this.padding() * 2));
            }
            if (this.boundBoxFunc()) {
              var u = this.boundBoxFunc()(o, e);
              u
                ? (e = u)
                : n.Util.warn(
                    "boundBoxFunc returned falsy. You should return new bound rect from it!",
                  );
            }
            var c = 1e7,
              d = new n.Transform();
            (d.translate(o.x, o.y),
              d.rotate(o.rotation),
              d.scale(o.width / c, o.height / c));
            var m = new n.Transform();
            (m.translate(e.x, e.y),
              m.rotate(e.rotation),
              m.scale(e.width / c, e.height / c));
            var p = m.multiply(d.invert());
            (this._nodes.forEach(function (e) {
              var o,
                a = e.getParent().getAbsoluteTransform(),
                i = e.getTransform().copy();
              i.translate(e.offsetX(), e.offsetY());
              var l = new n.Transform();
              l.multiply(a.copy().invert()).multiply(p).multiply(a).multiply(i);
              var s = l.decompose();
              (e.setAttrs(s),
                r._fire("transform", { evt: t, target: e }),
                e._fire("transform", { evt: t, target: e }),
                (o = e.getLayer()) === null || o === void 0 || o.batchDraw());
            }),
              this.rotation(n.Util._getRotation(e.rotation)),
              this._resetTransformCache(),
              this.update(),
              this.getLayer().batchDraw());
          }),
          (r.prototype.forceUpdate = function () {
            (this._resetTransformCache(), this.update());
          }),
          (r.prototype._batchChangeChild = function (e, t) {
            var n = this.findOne(e);
            n.setAttrs(t);
          }),
          (r.prototype.update = function () {
            var e = this,
              t,
              r = this._getNodeRect();
            this.rotation(n.Util._getRotation(r.rotation));
            var o = r.width,
              a = r.height,
              i = this.enabledAnchors(),
              l = this.resizeEnabled(),
              s = this.padding(),
              u = this.anchorSize();
            (this.find("._anchor").each(function (t) {
              t.setAttrs({
                width: u,
                height: u,
                offsetX: u / 2,
                offsetY: u / 2,
                stroke: e.anchorStroke(),
                strokeWidth: e.anchorStrokeWidth(),
                fill: e.anchorFill(),
                cornerRadius: e.anchorCornerRadius(),
              });
            }),
              this._batchChangeChild(".top-left", {
                x: 0,
                y: 0,
                offsetX: u / 2 + s,
                offsetY: u / 2 + s,
                visible: l && i.indexOf("top-left") >= 0,
              }),
              this._batchChangeChild(".top-center", {
                x: o / 2,
                y: 0,
                offsetY: u / 2 + s,
                visible: l && i.indexOf("top-center") >= 0,
              }),
              this._batchChangeChild(".top-right", {
                x: o,
                y: 0,
                offsetX: u / 2 - s,
                offsetY: u / 2 + s,
                visible: l && i.indexOf("top-right") >= 0,
              }),
              this._batchChangeChild(".middle-left", {
                x: 0,
                y: a / 2,
                offsetX: u / 2 + s,
                visible: l && i.indexOf("middle-left") >= 0,
              }),
              this._batchChangeChild(".middle-right", {
                x: o,
                y: a / 2,
                offsetX: u / 2 - s,
                visible: l && i.indexOf("middle-right") >= 0,
              }),
              this._batchChangeChild(".bottom-left", {
                x: 0,
                y: a,
                offsetX: u / 2 + s,
                offsetY: u / 2 - s,
                visible: l && i.indexOf("bottom-left") >= 0,
              }),
              this._batchChangeChild(".bottom-center", {
                x: o / 2,
                y: a,
                offsetY: u / 2 - s,
                visible: l && i.indexOf("bottom-center") >= 0,
              }),
              this._batchChangeChild(".bottom-right", {
                x: o,
                y: a,
                offsetX: u / 2 - s,
                offsetY: u / 2 - s,
                visible: l && i.indexOf("bottom-right") >= 0,
              }),
              this._batchChangeChild(".rotater", {
                x: o / 2,
                y: -this.rotateAnchorOffset() * n.Util._sign(a) - s,
                visible: this.rotateEnabled(),
              }),
              this._batchChangeChild(".back", {
                width: o,
                height: a,
                visible: this.borderEnabled(),
                stroke: this.borderStroke(),
                strokeWidth: this.borderStrokeWidth(),
                dash: this.borderDash(),
                x: 0,
                y: 0,
              }),
              (t = this.getLayer()) === null || t === void 0 || t.batchDraw());
          }),
          (r.prototype.isTransforming = function () {
            return this._transforming;
          }),
          (r.prototype.stopTransform = function () {
            if (this._transforming) {
              this._removeEvents();
              var e = this.findOne("." + this._movingAnchorName);
              e && e.stopDrag();
            }
          }),
          (r.prototype.destroy = function () {
            return (
              this.getStage() &&
                this._cursorChange &&
                (this.getStage().content.style.cursor = ""),
              l.Group.prototype.destroy.call(this),
              this.detach(),
              this._removeEvents(),
              this
            );
          }),
          (r.prototype.toObject = function () {
            return o.Node.prototype.toObject.call(this);
          }),
          r
        );
      })(l.Group);
      cn.Transformer = T;
      function D(e) {
        return (
          e instanceof Array ||
            n.Util.warn("enabledAnchors value should be an array"),
          e instanceof Array &&
            e.forEach(function (e) {
              v.indexOf(e) === -1 &&
                n.Util.warn(
                  "Unknown anchor name: " +
                    e +
                    ". Available names are: " +
                    v.join(", "),
                );
            }),
          e || []
        );
      }
      ((T.prototype.className = "Transformer"),
        d._registerNode(T),
        r.Factory.addGetterSetter(T, "enabledAnchors", v, D),
        r.Factory.addGetterSetter(T, "resizeEnabled", !0),
        r.Factory.addGetterSetter(T, "anchorSize", 10, u.getNumberValidator()),
        r.Factory.addGetterSetter(T, "rotateEnabled", !0),
        r.Factory.addGetterSetter(T, "rotationSnaps", []),
        r.Factory.addGetterSetter(
          T,
          "rotateAnchorOffset",
          50,
          u.getNumberValidator(),
        ),
        r.Factory.addGetterSetter(
          T,
          "rotationSnapTolerance",
          5,
          u.getNumberValidator(),
        ),
        r.Factory.addGetterSetter(T, "borderEnabled", !0),
        r.Factory.addGetterSetter(T, "anchorStroke", "rgb(0, 161, 255)"),
        r.Factory.addGetterSetter(
          T,
          "anchorStrokeWidth",
          1,
          u.getNumberValidator(),
        ),
        r.Factory.addGetterSetter(T, "anchorFill", "white"),
        r.Factory.addGetterSetter(
          T,
          "anchorCornerRadius",
          0,
          u.getNumberValidator(),
        ),
        r.Factory.addGetterSetter(T, "borderStroke", "rgb(0, 161, 255)"),
        r.Factory.addGetterSetter(
          T,
          "borderStrokeWidth",
          1,
          u.getNumberValidator(),
        ),
        r.Factory.addGetterSetter(T, "borderDash"),
        r.Factory.addGetterSetter(T, "keepRatio", !0),
        r.Factory.addGetterSetter(T, "centeredScaling", !1),
        r.Factory.addGetterSetter(T, "ignoreStroke", !1),
        r.Factory.addGetterSetter(T, "padding", 0, u.getNumberValidator()),
        r.Factory.addGetterSetter(T, "node"),
        r.Factory.addGetterSetter(T, "nodes"),
        r.Factory.addGetterSetter(T, "boundBoxFunc"),
        r.Factory.addGetterSetter(T, "shouldOverdrawWholeArea", !1),
        r.Factory.backCompat(T, {
          lineEnabled: "borderEnabled",
          rotateHandlerOffset: "rotateAnchorOffset",
          enabledHandlers: "enabledAnchors",
        }),
        n.Collection.mapMethods(T));
    }
    var pn = !1;
    function _n() {
      return (pn || ((pn = !0), mn()), dn.exports);
    }
    var fn = {},
      gn = { exports: fn };
    function hn() {
      var e =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r());
          };
        })();
      (Object.defineProperty(fn, "__esModule", { value: !0 }),
        (fn.Wedge = void 0));
      var t = f(),
        n = E(),
        r = de(),
        o = c(),
        a = b(),
        i = c(),
        l = (function (t) {
          e(n, t);
          function n() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return (
            (n.prototype._sceneFunc = function (e) {
              (e.beginPath(),
                e.arc(
                  0,
                  0,
                  this.radius(),
                  0,
                  o.Konva.getAngle(this.angle()),
                  this.clockwise(),
                ),
                e.lineTo(0, 0),
                e.closePath(),
                e.fillStrokeShape(this));
            }),
            (n.prototype.getWidth = function () {
              return this.radius() * 2;
            }),
            (n.prototype.getHeight = function () {
              return this.radius() * 2;
            }),
            (n.prototype.setWidth = function (e) {
              this.radius(e / 2);
            }),
            (n.prototype.setHeight = function (e) {
              this.radius(e / 2);
            }),
            n
          );
        })(r.Shape);
      ((fn.Wedge = l),
        (l.prototype.className = "Wedge"),
        (l.prototype._centroid = !0),
        (l.prototype._attrsAffectingSize = ["radius"]),
        i._registerNode(l),
        n.Factory.addGetterSetter(l, "radius", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "angle", 0, a.getNumberValidator()),
        n.Factory.addGetterSetter(l, "clockwise", !1),
        n.Factory.backCompat(l, {
          angleDeg: "angle",
          getAngleDeg: "getAngle",
          setAngleDeg: "setAngle",
        }),
        t.Collection.mapMethods(l));
    }
    var yn = !1;
    function Cn() {
      return (yn || ((yn = !0), hn()), gn.exports);
    }
    var bn = {},
      vn = { exports: bn };
    function Sn() {
      (Object.defineProperty(bn, "__esModule", { value: !0 }),
        (bn.Blur = void 0));
      var e = E(),
        t = G(),
        n = b();
      function r() {
        ((this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null));
      }
      var o = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        a = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function i(e, t) {
        var n = e.data,
          i = e.width,
          l = e.height,
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
          T,
          D,
          x,
          $,
          P = t + t + 1,
          N = i - 1,
          M = l - 1,
          w = t + 1,
          A = (w * (w + 1)) / 2,
          F = new r(),
          O = null,
          B = F,
          W = null,
          q = null,
          U = o[t],
          V = a[t];
        for (c = 1; c < P; c++) ((B = B.next = new r()), c === w && (O = B));
        for (B.next = F, _ = p = 0, u = 0; u < l; u++) {
          for (
            R = L = E = k = f = g = h = y = 0,
              C = w * (I = n[p]),
              b = w * (T = n[p + 1]),
              v = w * (D = n[p + 2]),
              S = w * (x = n[p + 3]),
              f += A * I,
              g += A * T,
              h += A * D,
              y += A * x,
              B = F,
              c = 0;
            c < w;
            c++
          )
            ((B.r = I), (B.g = T), (B.b = D), (B.a = x), (B = B.next));
          for (c = 1; c < w; c++)
            ((d = p + ((N < c ? N : c) << 2)),
              (f += (B.r = I = n[d]) * ($ = w - c)),
              (g += (B.g = T = n[d + 1]) * $),
              (h += (B.b = D = n[d + 2]) * $),
              (y += (B.a = x = n[d + 3]) * $),
              (R += I),
              (L += T),
              (E += D),
              (k += x),
              (B = B.next));
          for (W = F, q = O, s = 0; s < i; s++)
            ((n[p + 3] = x = (y * U) >> V),
              x !== 0
                ? ((x = 255 / x),
                  (n[p] = ((f * U) >> V) * x),
                  (n[p + 1] = ((g * U) >> V) * x),
                  (n[p + 2] = ((h * U) >> V) * x))
                : (n[p] = n[p + 1] = n[p + 2] = 0),
              (f -= C),
              (g -= b),
              (h -= v),
              (y -= S),
              (C -= W.r),
              (b -= W.g),
              (v -= W.b),
              (S -= W.a),
              (d = (_ + ((d = s + t + 1) < N ? d : N)) << 2),
              (R += W.r = n[d]),
              (L += W.g = n[d + 1]),
              (E += W.b = n[d + 2]),
              (k += W.a = n[d + 3]),
              (f += R),
              (g += L),
              (h += E),
              (y += k),
              (W = W.next),
              (C += I = q.r),
              (b += T = q.g),
              (v += D = q.b),
              (S += x = q.a),
              (R -= I),
              (L -= T),
              (E -= D),
              (k -= x),
              (q = q.next),
              (p += 4));
          _ += i;
        }
        for (s = 0; s < i; s++) {
          for (
            L = E = k = R = g = h = y = f = 0,
              p = s << 2,
              C = w * (I = n[p]),
              b = w * (T = n[p + 1]),
              v = w * (D = n[p + 2]),
              S = w * (x = n[p + 3]),
              f += A * I,
              g += A * T,
              h += A * D,
              y += A * x,
              B = F,
              c = 0;
            c < w;
            c++
          )
            ((B.r = I), (B.g = T), (B.b = D), (B.a = x), (B = B.next));
          for (m = i, c = 1; c <= t; c++)
            ((p = (m + s) << 2),
              (f += (B.r = I = n[p]) * ($ = w - c)),
              (g += (B.g = T = n[p + 1]) * $),
              (h += (B.b = D = n[p + 2]) * $),
              (y += (B.a = x = n[p + 3]) * $),
              (R += I),
              (L += T),
              (E += D),
              (k += x),
              (B = B.next),
              c < M && (m += i));
          for (p = s, W = F, q = O, u = 0; u < l; u++)
            ((d = p << 2),
              (n[d + 3] = x = (y * U) >> V),
              x > 0
                ? ((x = 255 / x),
                  (n[d] = ((f * U) >> V) * x),
                  (n[d + 1] = ((g * U) >> V) * x),
                  (n[d + 2] = ((h * U) >> V) * x))
                : (n[d] = n[d + 1] = n[d + 2] = 0),
              (f -= C),
              (g -= b),
              (h -= v),
              (y -= S),
              (C -= W.r),
              (b -= W.g),
              (v -= W.b),
              (S -= W.a),
              (d = (s + ((d = u + w) < M ? d : M) * i) << 2),
              (f += R += W.r = n[d]),
              (g += L += W.g = n[d + 1]),
              (h += E += W.b = n[d + 2]),
              (y += k += W.a = n[d + 3]),
              (W = W.next),
              (C += I = q.r),
              (b += T = q.g),
              (v += D = q.b),
              (S += x = q.a),
              (R -= I),
              (L -= T),
              (E -= D),
              (k -= x),
              (q = q.next),
              (p += i));
        }
      }
      var l = function (t) {
        var e = Math.round(this.blurRadius());
        e > 0 && i(t, e);
      };
      ((bn.Blur = l),
        e.Factory.addGetterSetter(
          t.Node,
          "blurRadius",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Rn = !1;
    function Ln() {
      return (Rn || ((Rn = !0), Sn()), vn.exports);
    }
    var En = {},
      kn = { exports: En };
    function In() {
      (Object.defineProperty(En, "__esModule", { value: !0 }),
        (En.Brighten = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = this.brightness() * 255,
            n = e.data,
            r = n.length,
            o;
          for (o = 0; o < r; o += 4)
            ((n[o] += t), (n[o + 1] += t), (n[o + 2] += t));
        };
      ((En.Brighten = r),
        e.Factory.addGetterSetter(
          t.Node,
          "brightness",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Tn = !1;
    function Dn() {
      return (Tn || ((Tn = !0), In()), kn.exports);
    }
    var xn = {},
      $n = { exports: xn };
    function Pn() {
      (Object.defineProperty(xn, "__esModule", { value: !0 }),
        (xn.Contrast = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = Math.pow((this.contrast() + 100) / 100, 2),
            n = e.data,
            r = n.length,
            o = 150,
            a = 150,
            i = 150,
            l;
          for (l = 0; l < r; l += 4)
            ((o = n[l]),
              (a = n[l + 1]),
              (i = n[l + 2]),
              (o /= 255),
              (o -= 0.5),
              (o *= t),
              (o += 0.5),
              (o *= 255),
              (a /= 255),
              (a -= 0.5),
              (a *= t),
              (a += 0.5),
              (a *= 255),
              (i /= 255),
              (i -= 0.5),
              (i *= t),
              (i += 0.5),
              (i *= 255),
              (o = o < 0 ? 0 : o > 255 ? 255 : o),
              (a = a < 0 ? 0 : a > 255 ? 255 : a),
              (i = i < 0 ? 0 : i > 255 ? 255 : i),
              (n[l] = o),
              (n[l + 1] = a),
              (n[l + 2] = i));
        };
      ((xn.Contrast = r),
        e.Factory.addGetterSetter(
          t.Node,
          "contrast",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Nn = !1;
    function Mn() {
      return (Nn || ((Nn = !0), Pn()), $n.exports);
    }
    var wn = {},
      An = { exports: wn };
    function Fn() {
      (Object.defineProperty(wn, "__esModule", { value: !0 }),
        (wn.Emboss = void 0));
      var e = E(),
        t = G(),
        n = f(),
        r = b(),
        o = function (e) {
          var t = this.embossStrength() * 10,
            r = this.embossWhiteLevel() * 255,
            o = this.embossDirection(),
            a = this.embossBlend(),
            i = 0,
            l = 0,
            s = e.data,
            u = e.width,
            c = e.height,
            d = u * 4,
            m = c;
          switch (o) {
            case "top-left":
              ((i = -1), (l = -1));
              break;
            case "top":
              ((i = -1), (l = 0));
              break;
            case "top-right":
              ((i = -1), (l = 1));
              break;
            case "right":
              ((i = 0), (l = 1));
              break;
            case "bottom-right":
              ((i = 1), (l = 1));
              break;
            case "bottom":
              ((i = 1), (l = 0));
              break;
            case "bottom-left":
              ((i = 1), (l = -1));
              break;
            case "left":
              ((i = 0), (l = -1));
              break;
            default:
              n.Util.error("Unknown emboss direction: " + o);
          }
          do {
            var p = (m - 1) * d,
              _ = i;
            (m + _ < 1 && (_ = 0), m + _ > c && (_ = 0));
            var f = (m - 1 + _) * u * 4,
              g = u;
            do {
              var h = p + (g - 1) * 4,
                y = l;
              (g + y < 1 && (y = 0), g + y > u && (y = 0));
              var C = f + (g - 1 + y) * 4,
                b = s[h] - s[C],
                v = s[h + 1] - s[C + 1],
                S = s[h + 2] - s[C + 2],
                R = b,
                L = R > 0 ? R : -R,
                E = v > 0 ? v : -v,
                k = S > 0 ? S : -S;
              if ((E > L && (R = v), k > L && (R = S), (R *= t), a)) {
                var I = s[h] + R,
                  T = s[h + 1] + R,
                  D = s[h + 2] + R;
                ((s[h] = I > 255 ? 255 : I < 0 ? 0 : I),
                  (s[h + 1] = T > 255 ? 255 : T < 0 ? 0 : T),
                  (s[h + 2] = D > 255 ? 255 : D < 0 ? 0 : D));
              } else {
                var x = r - R;
                (x < 0 ? (x = 0) : x > 255 && (x = 255),
                  (s[h] = s[h + 1] = s[h + 2] = x));
              }
            } while (--g);
          } while (--m);
        };
      ((wn.Emboss = o),
        e.Factory.addGetterSetter(
          t.Node,
          "embossStrength",
          0.5,
          r.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "embossWhiteLevel",
          0.5,
          r.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "embossDirection",
          "top-left",
          null,
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "embossBlend",
          !1,
          null,
          e.Factory.afterSetFilter,
        ));
    }
    var On = !1;
    function Bn() {
      return (On || ((On = !0), Fn()), An.exports);
    }
    var Wn = {},
      qn = { exports: Wn };
    function Un() {
      (Object.defineProperty(Wn, "__esModule", { value: !0 }),
        (Wn.Enhance = void 0));
      var e = E(),
        t = G(),
        n = b();
      function r(e, t, n, r, o) {
        var a = n - t,
          i = o - r,
          l;
        return a === 0
          ? r + i / 2
          : i === 0
            ? r
            : ((l = (e - t) / a), (l = i * l + r), l);
      }
      var o = function (e) {
        var t = e.data,
          n = t.length,
          o = t[0],
          a = o,
          i,
          l = t[1],
          s = l,
          u,
          c = t[2],
          d = c,
          m,
          p,
          _ = this.enhance();
        if (_ !== 0) {
          for (p = 0; p < n; p += 4)
            ((i = t[p + 0]),
              i < o ? (o = i) : i > a && (a = i),
              (u = t[p + 1]),
              u < l ? (l = u) : u > s && (s = u),
              (m = t[p + 2]),
              m < c ? (c = m) : m > d && (d = m));
          (a === o && ((a = 255), (o = 0)),
            s === l && ((s = 255), (l = 0)),
            d === c && ((d = 255), (c = 0)));
          var f, g, h, y, C, b, v, S, R;
          for (
            _ > 0
              ? ((g = a + _ * (255 - a)),
                (h = o - _ * (o - 0)),
                (C = s + _ * (255 - s)),
                (b = l - _ * (l - 0)),
                (S = d + _ * (255 - d)),
                (R = c - _ * (c - 0)))
              : ((f = (a + o) * 0.5),
                (g = a + _ * (a - f)),
                (h = o + _ * (o - f)),
                (y = (s + l) * 0.5),
                (C = s + _ * (s - y)),
                (b = l + _ * (l - y)),
                (v = (d + c) * 0.5),
                (S = d + _ * (d - v)),
                (R = c + _ * (c - v))),
              p = 0;
            p < n;
            p += 4
          )
            ((t[p + 0] = r(t[p + 0], o, a, h, g)),
              (t[p + 1] = r(t[p + 1], l, s, b, C)),
              (t[p + 2] = r(t[p + 2], c, d, R, S)));
        }
      };
      ((Wn.Enhance = o),
        e.Factory.addGetterSetter(
          t.Node,
          "enhance",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Vn = !1;
    function Hn() {
      return (Vn || ((Vn = !0), Un()), qn.exports);
    }
    var Gn = {},
      zn = { exports: Gn };
    function jn() {
      (Object.defineProperty(Gn, "__esModule", { value: !0 }),
        (Gn.Grayscale = void 0));
      var e = function (e) {
        var t = e.data,
          n = t.length,
          r,
          o;
        for (r = 0; r < n; r += 4)
          ((o = 0.34 * t[r] + 0.5 * t[r + 1] + 0.16 * t[r + 2]),
            (t[r] = o),
            (t[r + 1] = o),
            (t[r + 2] = o));
      };
      Gn.Grayscale = e;
    }
    var Kn = !1;
    function Qn() {
      return (Kn || ((Kn = !0), jn()), zn.exports);
    }
    var Xn = {},
      Yn = { exports: Xn };
    function Jn() {
      (Object.defineProperty(Xn, "__esModule", { value: !0 }),
        (Xn.HSL = void 0));
      var e = E(),
        t = G(),
        n = b();
      (e.Factory.addGetterSetter(
        t.Node,
        "hue",
        0,
        n.getNumberValidator(),
        e.Factory.afterSetFilter,
      ),
        e.Factory.addGetterSetter(
          t.Node,
          "saturation",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "luminance",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
      var r = function (e) {
        var t = e.data,
          n = t.length,
          r = 1,
          o = Math.pow(2, this.saturation()),
          a = Math.abs(this.hue() + 360) % 360,
          i = this.luminance() * 127,
          l,
          s = r * o * Math.cos((a * Math.PI) / 180),
          u = r * o * Math.sin((a * Math.PI) / 180),
          c = 0.299 * r + 0.701 * s + 0.167 * u,
          d = 0.587 * r - 0.587 * s + 0.33 * u,
          m = 0.114 * r - 0.114 * s - 0.497 * u,
          p = 0.299 * r - 0.299 * s - 0.328 * u,
          _ = 0.587 * r + 0.413 * s + 0.035 * u,
          f = 0.114 * r - 0.114 * s + 0.293 * u,
          g = 0.299 * r - 0.3 * s + 1.25 * u,
          h = 0.587 * r - 0.586 * s - 1.05 * u,
          y = 0.114 * r + 0.886 * s - 0.2 * u,
          C,
          b,
          v,
          S;
        for (l = 0; l < n; l += 4)
          ((C = t[l + 0]),
            (b = t[l + 1]),
            (v = t[l + 2]),
            (S = t[l + 3]),
            (t[l + 0] = c * C + d * b + m * v + i),
            (t[l + 1] = p * C + _ * b + f * v + i),
            (t[l + 2] = g * C + h * b + y * v + i),
            (t[l + 3] = S));
      };
      Xn.HSL = r;
    }
    var Zn = !1;
    function er() {
      return (Zn || ((Zn = !0), Jn()), Yn.exports);
    }
    var tr = {},
      nr = { exports: tr };
    function rr() {
      (Object.defineProperty(tr, "__esModule", { value: !0 }),
        (tr.HSV = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = e.data,
            n = t.length,
            r = Math.pow(2, this.value()),
            o = Math.pow(2, this.saturation()),
            a = Math.abs(this.hue() + 360) % 360,
            i,
            l = r * o * Math.cos((a * Math.PI) / 180),
            s = r * o * Math.sin((a * Math.PI) / 180),
            u = 0.299 * r + 0.701 * l + 0.167 * s,
            c = 0.587 * r - 0.587 * l + 0.33 * s,
            d = 0.114 * r - 0.114 * l - 0.497 * s,
            m = 0.299 * r - 0.299 * l - 0.328 * s,
            p = 0.587 * r + 0.413 * l + 0.035 * s,
            _ = 0.114 * r - 0.114 * l + 0.293 * s,
            f = 0.299 * r - 0.3 * l + 1.25 * s,
            g = 0.587 * r - 0.586 * l - 1.05 * s,
            h = 0.114 * r + 0.886 * l - 0.2 * s,
            y,
            C,
            b,
            v;
          for (i = 0; i < n; i += 4)
            ((y = t[i + 0]),
              (C = t[i + 1]),
              (b = t[i + 2]),
              (v = t[i + 3]),
              (t[i + 0] = u * y + c * C + d * b),
              (t[i + 1] = m * y + p * C + _ * b),
              (t[i + 2] = f * y + g * C + h * b),
              (t[i + 3] = v));
        };
      ((tr.HSV = r),
        e.Factory.addGetterSetter(
          t.Node,
          "hue",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "saturation",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "value",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var or = !1;
    function ar() {
      return (or || ((or = !0), rr()), nr.exports);
    }
    var ir = {},
      lr = { exports: ir };
    function sr() {
      (Object.defineProperty(ir, "__esModule", { value: !0 }),
        (ir.Invert = void 0));
      var e = function (e) {
        var t = e.data,
          n = t.length,
          r;
        for (r = 0; r < n; r += 4)
          ((t[r] = 255 - t[r]),
            (t[r + 1] = 255 - t[r + 1]),
            (t[r + 2] = 255 - t[r + 2]));
      };
      ir.Invert = e;
    }
    var ur = !1;
    function cr() {
      return (ur || ((ur = !0), sr()), lr.exports);
    }
    var dr = {},
      mr = { exports: dr };
    function pr() {
      (Object.defineProperty(dr, "__esModule", { value: !0 }),
        (dr.Kaleidoscope = void 0));
      var e = E(),
        t = G(),
        n = f(),
        r = b(),
        o = function (e, t, n) {
          var r = e.data,
            o = t.data,
            a = e.width,
            i = e.height,
            l = n.polarCenterX || a / 2,
            s = n.polarCenterY || i / 2,
            u,
            c,
            d,
            m = 0,
            p = 0,
            _ = 0,
            f = 0,
            g,
            h = Math.sqrt(l * l + s * s);
          ((c = a - l),
            (d = i - s),
            (g = Math.sqrt(c * c + d * d)),
            (h = g > h ? g : h));
          var y = i,
            C = a,
            b,
            v,
            S = ((360 / C) * Math.PI) / 180,
            R,
            L;
          for (v = 0; v < C; v += 1)
            for (R = Math.sin(v * S), L = Math.cos(v * S), b = 0; b < y; b += 1)
              ((c = Math.floor(l + ((h * b) / y) * L)),
                (d = Math.floor(s + ((h * b) / y) * R)),
                (u = (d * a + c) * 4),
                (m = r[u + 0]),
                (p = r[u + 1]),
                (_ = r[u + 2]),
                (f = r[u + 3]),
                (u = (v + b * a) * 4),
                (o[u + 0] = m),
                (o[u + 1] = p),
                (o[u + 2] = _),
                (o[u + 3] = f));
        },
        a = function (e, t, n) {
          var r = e.data,
            o = t.data,
            a = e.width,
            i = e.height,
            l = n.polarCenterX || a / 2,
            s = n.polarCenterY || i / 2,
            u,
            c,
            d,
            m,
            p,
            _ = 0,
            f = 0,
            g = 0,
            h = 0,
            y,
            C = Math.sqrt(l * l + s * s);
          ((c = a - l),
            (d = i - s),
            (y = Math.sqrt(c * c + d * d)),
            (C = y > C ? y : C));
          var b = i,
            v = a,
            S,
            R,
            L = n.polarRotation || 0,
            E,
            k;
          for (c = 0; c < a; c += 1)
            for (d = 0; d < i; d += 1)
              ((m = c - l),
                (p = d - s),
                (S = (Math.sqrt(m * m + p * p) * b) / C),
                (R = ((Math.atan2(p, m) * 180) / Math.PI + 360 + L) % 360),
                (R = (R * v) / 360),
                (E = Math.floor(R)),
                (k = Math.floor(S)),
                (u = (k * a + E) * 4),
                (_ = r[u + 0]),
                (f = r[u + 1]),
                (g = r[u + 2]),
                (h = r[u + 3]),
                (u = (d * a + c) * 4),
                (o[u + 0] = _),
                (o[u + 1] = f),
                (o[u + 2] = g),
                (o[u + 3] = h));
        },
        i = function (e) {
          var t = e.width,
            r = e.height,
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
            g = Math.round(this.kaleidoscopePower()),
            h = Math.round(this.kaleidoscopeAngle()),
            y = Math.floor((t * (h % 360)) / 360);
          if (!(g < 1)) {
            var C = n.Util.createCanvasElement();
            ((C.width = t), (C.height = r));
            var b = C.getContext("2d").getImageData(0, 0, t, r);
            o(e, b, { polarCenterX: t / 2, polarCenterY: r / 2 });
            for (var v = t / Math.pow(2, g); v <= 8; ) ((v = v * 2), (g -= 1));
            v = Math.ceil(v);
            var S = v,
              R = 0,
              L = S,
              E = 1;
            for (
              y + v > t && ((R = S), (L = 0), (E = -1)), l = 0;
              l < r;
              l += 1
            )
              for (i = R; i !== L; i += E)
                ((s = Math.round(i + y) % t),
                  (_ = (t * l + s) * 4),
                  (c = b.data[_ + 0]),
                  (d = b.data[_ + 1]),
                  (m = b.data[_ + 2]),
                  (p = b.data[_ + 3]),
                  (f = (t * l + i) * 4),
                  (b.data[f + 0] = c),
                  (b.data[f + 1] = d),
                  (b.data[f + 2] = m),
                  (b.data[f + 3] = p));
            for (l = 0; l < r; l += 1)
              for (S = Math.floor(v), u = 0; u < g; u += 1) {
                for (i = 0; i < S + 1; i += 1)
                  ((_ = (t * l + i) * 4),
                    (c = b.data[_ + 0]),
                    (d = b.data[_ + 1]),
                    (m = b.data[_ + 2]),
                    (p = b.data[_ + 3]),
                    (f = (t * l + S * 2 - i - 1) * 4),
                    (b.data[f + 0] = c),
                    (b.data[f + 1] = d),
                    (b.data[f + 2] = m),
                    (b.data[f + 3] = p));
                S *= 2;
              }
            a(b, e, { polarRotation: 0 });
          }
        };
      ((dr.Kaleidoscope = i),
        e.Factory.addGetterSetter(
          t.Node,
          "kaleidoscopePower",
          2,
          r.getNumberValidator(),
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(
          t.Node,
          "kaleidoscopeAngle",
          0,
          r.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var _r = !1;
    function fr() {
      return (_r || ((_r = !0), pr()), mr.exports);
    }
    var gr = {},
      hr = { exports: gr };
    function yr() {
      (Object.defineProperty(gr, "__esModule", { value: !0 }),
        (gr.Mask = void 0));
      var e = E(),
        t = G(),
        n = b();
      function r(e, t, n) {
        var r = (n * e.width + t) * 4,
          o = [];
        return (o.push(e.data[r++], e.data[r++], e.data[r++], e.data[r++]), o);
      }
      function o(e, t) {
        return Math.sqrt(
          Math.pow(e[0] - t[0], 2) +
            Math.pow(e[1] - t[1], 2) +
            Math.pow(e[2] - t[2], 2),
        );
      }
      function a(e) {
        for (var t = [0, 0, 0], n = 0; n < e.length; n++)
          ((t[0] += e[n][0]), (t[1] += e[n][1]), (t[2] += e[n][2]));
        return ((t[0] /= e.length), (t[1] /= e.length), (t[2] /= e.length), t);
      }
      function i(e, t) {
        var n = r(e, 0, 0),
          i = r(e, e.width - 1, 0),
          l = r(e, 0, e.height - 1),
          s = r(e, e.width - 1, e.height - 1),
          u = t || 10;
        if (o(n, i) < u && o(i, s) < u && o(s, l) < u && o(l, n) < u) {
          for (
            var c = a([i, n, s, l]), d = [], m = 0;
            m < e.width * e.height;
            m++
          ) {
            var p = o(c, [e.data[m * 4], e.data[m * 4 + 1], e.data[m * 4 + 2]]);
            d[m] = p < u ? 0 : 255;
          }
          return d;
        }
      }
      function l(e, t) {
        for (var n = 0; n < e.width * e.height; n++) e.data[4 * n + 3] = t[n];
      }
      function s(e, t, n) {
        for (
          var r = [1, 1, 1, 1, 0, 1, 1, 1, 1],
            o = Math.round(Math.sqrt(r.length)),
            a = Math.floor(o / 2),
            i = [],
            l = 0;
          l < n;
          l++
        )
          for (var s = 0; s < t; s++) {
            for (var u = l * t + s, c = 0, d = 0; d < o; d++)
              for (var m = 0; m < o; m++) {
                var p = l + d - a,
                  _ = s + m - a;
                if (p >= 0 && p < n && _ >= 0 && _ < t) {
                  var f = p * t + _,
                    g = r[d * o + m];
                  c += e[f] * g;
                }
              }
            i[u] = c === 2040 ? 255 : 0;
          }
        return i;
      }
      function u(e, t, n) {
        for (
          var r = [1, 1, 1, 1, 1, 1, 1, 1, 1],
            o = Math.round(Math.sqrt(r.length)),
            a = Math.floor(o / 2),
            i = [],
            l = 0;
          l < n;
          l++
        )
          for (var s = 0; s < t; s++) {
            for (var u = l * t + s, c = 0, d = 0; d < o; d++)
              for (var m = 0; m < o; m++) {
                var p = l + d - a,
                  _ = s + m - a;
                if (p >= 0 && p < n && _ >= 0 && _ < t) {
                  var f = p * t + _,
                    g = r[d * o + m];
                  c += e[f] * g;
                }
              }
            i[u] = c >= 1020 ? 255 : 0;
          }
        return i;
      }
      function c(e, t, n) {
        for (
          var r = [
              0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
              0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
              0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
            ],
            o = Math.round(Math.sqrt(r.length)),
            a = Math.floor(o / 2),
            i = [],
            l = 0;
          l < n;
          l++
        )
          for (var s = 0; s < t; s++) {
            for (var u = l * t + s, c = 0, d = 0; d < o; d++)
              for (var m = 0; m < o; m++) {
                var p = l + d - a,
                  _ = s + m - a;
                if (p >= 0 && p < n && _ >= 0 && _ < t) {
                  var f = p * t + _,
                    g = r[d * o + m];
                  c += e[f] * g;
                }
              }
            i[u] = c;
          }
        return i;
      }
      var d = function (e) {
        var t = this.threshold(),
          n = i(e, t);
        return (
          n &&
            ((n = s(n, e.width, e.height)),
            (n = u(n, e.width, e.height)),
            (n = c(n, e.width, e.height)),
            l(e, n)),
          e
        );
      };
      ((gr.Mask = d),
        e.Factory.addGetterSetter(
          t.Node,
          "threshold",
          0,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Cr = !1;
    function br() {
      return (Cr || ((Cr = !0), yr()), hr.exports);
    }
    var vr = {},
      Sr = { exports: vr };
    function Rr() {
      (Object.defineProperty(vr, "__esModule", { value: !0 }),
        (vr.Noise = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = this.noise() * 255,
            n = e.data,
            r = n.length,
            o = t / 2,
            a;
          for (a = 0; a < r; a += 4)
            ((n[a + 0] += o - 2 * o * Math.random()),
              (n[a + 1] += o - 2 * o * Math.random()),
              (n[a + 2] += o - 2 * o * Math.random()));
        };
      ((vr.Noise = r),
        e.Factory.addGetterSetter(
          t.Node,
          "noise",
          0.2,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Lr = !1;
    function Er() {
      return (Lr || ((Lr = !0), Rr()), Sr.exports);
    }
    var kr = {},
      Ir = { exports: kr };
    function Tr() {
      (Object.defineProperty(kr, "__esModule", { value: !0 }),
        (kr.Pixelate = void 0));
      var e = E(),
        t = f(),
        n = G(),
        r = b(),
        o = function (e) {
          var n = Math.ceil(this.pixelSize()),
            r = e.width,
            o = e.height,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m = Math.ceil(r / n),
            p = Math.ceil(o / n),
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v = e.data;
          if (n <= 0) {
            t.Util.error("pixelSize value can not be <= 0");
            return;
          }
          for (y = 0; y < m; y += 1)
            for (C = 0; C < p; C += 1) {
              for (
                s = 0,
                  u = 0,
                  c = 0,
                  d = 0,
                  _ = y * n,
                  f = _ + n,
                  g = C * n,
                  h = g + n,
                  b = 0,
                  a = _;
                a < f;
                a += 1
              )
                if (!(a >= r))
                  for (i = g; i < h; i += 1)
                    i >= o ||
                      ((l = (r * i + a) * 4),
                      (s += v[l + 0]),
                      (u += v[l + 1]),
                      (c += v[l + 2]),
                      (d += v[l + 3]),
                      (b += 1));
              for (
                s = s / b, u = u / b, c = c / b, d = d / b, a = _;
                a < f;
                a += 1
              )
                if (!(a >= r))
                  for (i = g; i < h; i += 1)
                    i >= o ||
                      ((l = (r * i + a) * 4),
                      (v[l + 0] = s),
                      (v[l + 1] = u),
                      (v[l + 2] = c),
                      (v[l + 3] = d));
            }
        };
      ((kr.Pixelate = o),
        e.Factory.addGetterSetter(
          n.Node,
          "pixelSize",
          8,
          r.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Dr = !1;
    function xr() {
      return (Dr || ((Dr = !0), Tr()), Ir.exports);
    }
    var $r = {},
      Pr = { exports: $r };
    function Nr() {
      (Object.defineProperty($r, "__esModule", { value: !0 }),
        ($r.Posterize = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = Math.round(this.levels() * 254) + 1,
            n = e.data,
            r = n.length,
            o = 255 / t,
            a;
          for (a = 0; a < r; a += 1) n[a] = Math.floor(n[a] / o) * o;
        };
      (($r.Posterize = r),
        e.Factory.addGetterSetter(
          t.Node,
          "levels",
          0.5,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var Mr = !1;
    function wr() {
      return (Mr || ((Mr = !0), Nr()), Pr.exports);
    }
    var Ar = {},
      Fr = { exports: Ar };
    function Or() {
      (Object.defineProperty(Ar, "__esModule", { value: !0 }),
        (Ar.RGB = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = e.data,
            n = t.length,
            r = this.red(),
            o = this.green(),
            a = this.blue(),
            i,
            l;
          for (i = 0; i < n; i += 4)
            ((l = (0.34 * t[i] + 0.5 * t[i + 1] + 0.16 * t[i + 2]) / 255),
              (t[i] = l * r),
              (t[i + 1] = l * o),
              (t[i + 2] = l * a),
              (t[i + 3] = t[i + 3]));
        };
      ((Ar.RGB = r),
        e.Factory.addGetterSetter(t.Node, "red", 0, function (e) {
          return (
            (this._filterUpToDate = !1),
            e > 255 ? 255 : e < 0 ? 0 : Math.round(e)
          );
        }),
        e.Factory.addGetterSetter(t.Node, "green", 0, function (e) {
          return (
            (this._filterUpToDate = !1),
            e > 255 ? 255 : e < 0 ? 0 : Math.round(e)
          );
        }),
        e.Factory.addGetterSetter(
          t.Node,
          "blue",
          0,
          n.RGBComponent,
          e.Factory.afterSetFilter,
        ));
    }
    var Br = !1;
    function Wr() {
      return (Br || ((Br = !0), Or()), Fr.exports);
    }
    var qr = {},
      Ur = { exports: qr };
    function Vr() {
      (Object.defineProperty(qr, "__esModule", { value: !0 }),
        (qr.RGBA = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = e.data,
            n = t.length,
            r = this.red(),
            o = this.green(),
            a = this.blue(),
            i = this.alpha(),
            l,
            s;
          for (l = 0; l < n; l += 4)
            ((s = 1 - i),
              (t[l] = r * i + t[l] * s),
              (t[l + 1] = o * i + t[l + 1] * s),
              (t[l + 2] = a * i + t[l + 2] * s));
        };
      ((qr.RGBA = r),
        e.Factory.addGetterSetter(t.Node, "red", 0, function (e) {
          return (
            (this._filterUpToDate = !1),
            e > 255 ? 255 : e < 0 ? 0 : Math.round(e)
          );
        }),
        e.Factory.addGetterSetter(t.Node, "green", 0, function (e) {
          return (
            (this._filterUpToDate = !1),
            e > 255 ? 255 : e < 0 ? 0 : Math.round(e)
          );
        }),
        e.Factory.addGetterSetter(
          t.Node,
          "blue",
          0,
          n.RGBComponent,
          e.Factory.afterSetFilter,
        ),
        e.Factory.addGetterSetter(t.Node, "alpha", 1, function (e) {
          return ((this._filterUpToDate = !1), e > 1 ? 1 : e < 0 ? 0 : e);
        }));
    }
    var Hr = !1;
    function Gr() {
      return (Hr || ((Hr = !0), Vr()), Ur.exports);
    }
    var zr = {},
      jr = { exports: zr };
    function Kr() {
      (Object.defineProperty(zr, "__esModule", { value: !0 }),
        (zr.Sepia = void 0));
      var e = function (e) {
        var t = e.data,
          n = t.length,
          r,
          o,
          a,
          i;
        for (r = 0; r < n; r += 4)
          ((o = t[r + 0]),
            (a = t[r + 1]),
            (i = t[r + 2]),
            (t[r + 0] = Math.min(255, o * 0.393 + a * 0.769 + i * 0.189)),
            (t[r + 1] = Math.min(255, o * 0.349 + a * 0.686 + i * 0.168)),
            (t[r + 2] = Math.min(255, o * 0.272 + a * 0.534 + i * 0.131)));
      };
      zr.Sepia = e;
    }
    var Qr = !1;
    function Xr() {
      return (Qr || ((Qr = !0), Kr()), jr.exports);
    }
    var Yr = {},
      Jr = { exports: Yr };
    function Zr() {
      (Object.defineProperty(Yr, "__esModule", { value: !0 }),
        (Yr.Solarize = void 0));
      var e = function (e) {
        var t = e.data,
          n = e.width,
          r = e.height,
          o = n * 4,
          a = r;
        do {
          var i = (a - 1) * o,
            l = n;
          do {
            var s = i + (l - 1) * 4,
              u = t[s],
              c = t[s + 1],
              d = t[s + 2];
            (u > 127 && (u = 255 - u),
              c > 127 && (c = 255 - c),
              d > 127 && (d = 255 - d),
              (t[s] = u),
              (t[s + 1] = c),
              (t[s + 2] = d));
          } while (--l);
        } while (--a);
      };
      Yr.Solarize = e;
    }
    var eo = !1;
    function to() {
      return (eo || ((eo = !0), Zr()), Jr.exports);
    }
    var no = {},
      ro = { exports: no };
    function oo() {
      (Object.defineProperty(no, "__esModule", { value: !0 }),
        (no.Threshold = void 0));
      var e = E(),
        t = G(),
        n = b(),
        r = function (e) {
          var t = this.threshold() * 255,
            n = e.data,
            r = n.length,
            o;
          for (o = 0; o < r; o += 1) n[o] = n[o] < t ? 0 : 255;
        };
      ((no.Threshold = r),
        e.Factory.addGetterSetter(
          t.Node,
          "threshold",
          0.5,
          n.getNumberValidator(),
          e.Factory.afterSetFilter,
        ));
    }
    var ao = !1;
    function io() {
      return (ao || ((ao = !0), oo()), ro.exports);
    }
    var lo = {},
      so = { exports: lo };
    function uo() {
      (Object.defineProperty(lo, "__esModule", { value: !0 }),
        (lo.Konva = void 0));
      var e = qe(),
        t = ze(),
        n = nt(),
        r = lt(),
        o = mt(),
        a = ht(),
        i = St(),
        l = Ye(),
        s = It(),
        u = Pt(),
        c = Ft(),
        d = Ut(),
        m = jt(),
        p = Jt(),
        _ = rn(),
        f = un(),
        g = _n(),
        h = Cn(),
        y = Ln(),
        C = Dn(),
        b = Mn(),
        v = Bn(),
        S = Hn(),
        R = Qn(),
        L = er(),
        E = ar(),
        k = cr(),
        I = fr(),
        T = br(),
        D = Er(),
        x = xr(),
        $ = wr(),
        P = Wr(),
        N = Gr(),
        M = Xr(),
        w = to(),
        A = io();
      lo.Konva = e.Konva.Util._assign(e.Konva, {
        Arc: t.Arc,
        Arrow: n.Arrow,
        Circle: r.Circle,
        Ellipse: o.Ellipse,
        Image: a.Image,
        Label: i.Label,
        Tag: i.Tag,
        Line: l.Line,
        Path: s.Path,
        Rect: u.Rect,
        RegularPolygon: c.RegularPolygon,
        Ring: d.Ring,
        Sprite: m.Sprite,
        Star: p.Star,
        Text: _.Text,
        TextPath: f.TextPath,
        Transformer: g.Transformer,
        Wedge: h.Wedge,
        Filters: {
          Blur: y.Blur,
          Brighten: C.Brighten,
          Contrast: b.Contrast,
          Emboss: v.Emboss,
          Enhance: S.Enhance,
          Grayscale: R.Grayscale,
          HSL: L.HSL,
          HSV: E.HSV,
          Invert: k.Invert,
          Kaleidoscope: I.Kaleidoscope,
          Mask: T.Mask,
          Noise: D.Noise,
          Pixelate: x.Pixelate,
          Posterize: $.Posterize,
          RGB: P.RGB,
          RGBA: N.RGBA,
          Sepia: M.Sepia,
          Solarize: w.Solarize,
          Threshold: A.Threshold,
        },
      });
    }
    var co = !1;
    function mo() {
      return (co || ((co = !0), uo()), so.exports);
    }
    var po = {},
      _o = { exports: po };
    function fo() {
      var e = mo().Konva;
      (e._injectGlobal(e), (po.default = e), (_o.exports = po.default));
    }
    var go = !1;
    function ho() {
      return (go || ((go = !0), fo()), _o.exports);
    }
    var yo = {},
      Co = { exports: yo };
    function bo() {
      var e = qe().Konva;
      (e._injectGlobal(e),
        (yo.default = e),
        (e.default = e),
        (Co.exports = yo.default));
    }
    var vo = !1;
    function So() {
      return (vo || ((vo = !0), bo()), Co.exports);
    }
    function Ro(e) {
      switch (e) {
        case void 0:
          return ho();
        case "/lib/Core":
          return So();
        case "/lib/Core.js":
          return So();
        case "/lib/Global":
          return c();
        case "/lib/Global.js":
          return c();
      }
    }
    a.exports = Ro;
  },
  null,
);
