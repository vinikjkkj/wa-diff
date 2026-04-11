__d(
  "WAWeb-lottie-light-canvas",
  [],
  function (t, n, r, o, a, i) {
    typeof navigator != "undefined" &&
      (function (e, t) {
        a.exports = t();
      })(this, function () {
        "use strict";
        var e = "http://www.w3.org/2000/svg",
          t = "",
          n = !1,
          r = -999999,
          o = function (t) {
            n = !!t;
          },
          l = function () {
            return n;
          },
          s = function (n) {
            t = n;
          },
          u = function () {
            return t;
          };
        function c(e) {
          return document.createElement(e);
        }
        function d(e, t) {
          var n,
            r = e.length,
            o;
          for (n = 0; n < r; n += 1) {
            o = e[n].prototype;
            for (var a in o)
              Object.prototype.hasOwnProperty.call(o, a) &&
                (t.prototype[a] = o[a]);
          }
        }
        function m(e, t) {
          return Object.getOwnPropertyDescriptor(e, t);
        }
        function p(e) {
          function t() {}
          return ((t.prototype = e), t);
        }
        var _ = (function () {
            function e(e) {
              ((this.audios = []),
                (this.audioFactory = e),
                (this._volume = 1),
                (this._isMuted = !1));
            }
            return (
              (e.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var e,
                    t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].pause();
                },
                resume: function () {
                  var e,
                    t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].resume();
                },
                setRate: function (t) {
                  var e,
                    n = this.audios.length;
                  for (e = 0; e < n; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : window.Howl
                      ? new window.Howl({ src: [t] })
                      : {
                          isPlaying: !1,
                          play: function () {
                            this.isPlaying = !0;
                          },
                          seek: function () {
                            this.isPlaying = !1;
                          },
                          playing: function () {},
                          rate: function () {},
                          setVolume: function () {},
                        };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  ((this._volume = t), this._updateVolume());
                },
                mute: function () {
                  ((this._isMuted = !0), this._updateVolume());
                },
                unmute: function () {
                  ((this._isMuted = !1), this._updateVolume());
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var e,
                    t = this.audios.length;
                  for (e = 0; e < t; e += 1)
                    this.audios[e].volume(
                      this._volume * (this._isMuted ? 0 : 1),
                    );
                },
              }),
              function () {
                return new e();
              }
            );
          })(),
          f = (function () {
            function e(e, t) {
              var n = 0,
                r = [],
                o;
              switch (e) {
                case "int16":
                case "uint8c":
                  o = 1;
                  break;
                default:
                  o = 1.1;
                  break;
              }
              for (n = 0; n < t; n += 1) r.push(o);
              return r;
            }
            function t(t, n) {
              return t === "float32"
                ? new Float32Array(n)
                : t === "int16"
                  ? new Int16Array(n)
                  : t === "uint8c"
                    ? new Uint8ClampedArray(n)
                    : e(t, n);
            }
            return typeof Uint8ClampedArray == "function" &&
              typeof Float32Array == "function"
              ? t
              : e;
          })();
        function g(e) {
          return Array.apply(null, { length: e });
        }
        function h(e) {
          "@babel/helpers - typeof";
          return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? (h = function (t) {
                  return typeof t;
                })
              : (h = function (t) {
                  return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
            h(e)
          );
        }
        var y = !0,
          C = null,
          b = null,
          v = "",
          S = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          R = !1,
          L = Math.pow,
          E = Math.sqrt,
          k = Math.floor,
          I = Math.max,
          T = Math.min,
          D = {};
        (function () {
          var e = [
              "abs",
              "acos",
              "acosh",
              "asin",
              "asinh",
              "atan",
              "atanh",
              "atan2",
              "ceil",
              "cbrt",
              "expm1",
              "clz32",
              "cos",
              "cosh",
              "exp",
              "floor",
              "fround",
              "hypot",
              "imul",
              "log",
              "log1p",
              "log2",
              "log10",
              "max",
              "min",
              "pow",
              "random",
              "round",
              "sign",
              "sin",
              "sinh",
              "sqrt",
              "tan",
              "tanh",
              "trunc",
              "E",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "PI",
              "SQRT1_2",
              "SQRT2",
            ],
            t,
            n = e.length;
          for (t = 0; t < n; t += 1) D[e[t]] = Math[e[t]];
        })();
        function x() {
          return {};
        }
        ((D.random = Math.random),
          (D.abs = function (e) {
            var t = h(e);
            if (t === "object" && e.length) {
              var n = g(e.length),
                r,
                o = e.length;
              for (r = 0; r < o; r += 1) n[r] = Math.abs(e[r]);
              return n;
            }
            return Math.abs(e);
          }));
        var $ = 150,
          P = Math.PI / 180,
          N = 0.5519;
        function M(e) {
          R = !!e;
        }
        function w(e) {
          return R ? Math.round(e) : e;
        }
        function A(e) {
          ((e.style.position = "absolute"),
            (e.style.top = 0),
            (e.style.left = 0),
            (e.style.display = "block"),
            (e.style.transformOrigin = "0 0"),
            (e.style.webkitTransformOrigin = "0 0"),
            (e.style.backfaceVisibility = "visible"),
            (e.style.webkitBackfaceVisibility = "visible"),
            (e.style.transformStyle = "preserve-3d"),
            (e.style.webkitTransformStyle = "preserve-3d"),
            (e.style.mozTransformStyle = "preserve-3d"));
        }
        function F(e, t, n, r) {
          ((this.type = e),
            (this.currentTime = t),
            (this.totalTime = n),
            (this.direction = r < 0 ? -1 : 1));
        }
        function O(e, t) {
          ((this.type = e), (this.direction = t < 0 ? -1 : 1));
        }
        function B(e, t, n, r) {
          ((this.type = e),
            (this.currentLoop = n),
            (this.totalLoops = t),
            (this.direction = r < 0 ? -1 : 1));
        }
        function W(e, t, n) {
          ((this.type = e), (this.firstFrame = t), (this.totalFrames = n));
        }
        function q(e, t) {
          ((this.type = e), (this.target = t));
        }
        function U(e, t) {
          ((this.type = "renderFrameError"),
            (this.nativeError = e),
            (this.currentTime = t));
        }
        function V(e) {
          ((this.type = "configError"), (this.nativeError = e));
        }
        function H(e, t) {
          ((this.type = e), (this.nativeError = t));
        }
        var G = (function () {
          var e = 0;
          return function () {
            return ((e += 1), v + "__lottie_element_" + e);
          };
        })();
        function z(e, t, n) {
          var r, o, a, i, l, s, u, c;
          switch (
            ((i = Math.floor(e * 6)),
            (l = e * 6 - i),
            (s = n * (1 - t)),
            (u = n * (1 - l * t)),
            (c = n * (1 - (1 - l) * t)),
            i % 6)
          ) {
            case 0:
              ((r = n), (o = c), (a = s));
              break;
            case 1:
              ((r = u), (o = n), (a = s));
              break;
            case 2:
              ((r = s), (o = n), (a = c));
              break;
            case 3:
              ((r = s), (o = u), (a = n));
              break;
            case 4:
              ((r = c), (o = s), (a = n));
              break;
            case 5:
              ((r = n), (o = s), (a = u));
              break;
            default:
              break;
          }
          return [r, o, a];
        }
        function j(e, t, n) {
          var r = Math.max(e, t, n),
            o = Math.min(e, t, n),
            a = r - o,
            i,
            l = r === 0 ? 0 : a / r,
            s = r / 255;
          switch (r) {
            case o:
              i = 0;
              break;
            case e:
              ((i = t - n + a * (t < n ? 6 : 0)), (i /= 6 * a));
              break;
            case t:
              ((i = n - e + a * 2), (i /= 6 * a));
              break;
            case n:
              ((i = e - t + a * 4), (i /= 6 * a));
              break;
            default:
              break;
          }
          return [i, l, s];
        }
        function K(e, t) {
          var n = j(e[0] * 255, e[1] * 255, e[2] * 255);
          return (
            (n[1] += t),
            n[1] > 1 ? (n[1] = 1) : n[1] <= 0 && (n[1] = 0),
            z(n[0], n[1], n[2])
          );
        }
        function Q(e, t) {
          var n = j(e[0] * 255, e[1] * 255, e[2] * 255);
          return (
            (n[2] += t),
            n[2] > 1 ? (n[2] = 1) : n[2] < 0 && (n[2] = 0),
            z(n[0], n[1], n[2])
          );
        }
        function X(e, t) {
          var n = j(e[0] * 255, e[1] * 255, e[2] * 255);
          return (
            (n[0] += t / 360),
            n[0] > 1 ? (n[0] -= 1) : n[0] < 0 && (n[0] += 1),
            z(n[0], n[1], n[2])
          );
        }
        var Y = (function () {
            var e = [],
              t,
              n;
            for (t = 0; t < 256; t += 1)
              ((n = t.toString(16)), (e[t] = n.length === 1 ? "0" + n : n));
            return function (t, n, r) {
              return (
                t < 0 && (t = 0),
                n < 0 && (n = 0),
                r < 0 && (r = 0),
                "#" + e[t] + e[n] + e[r]
              );
            };
          })(),
          J = function (t) {
            y = !!t;
          },
          Z = function () {
            return y;
          },
          ee = function (t) {
            C = t;
          },
          te = function () {
            return C;
          },
          ne = function (t) {
            b = t;
          },
          re = function () {
            return b;
          },
          oe = function (t) {
            $ = t;
          },
          ae = function () {
            return $;
          },
          ie = function (t) {
            v = t;
          },
          le = function () {
            return v;
          };
        function se(t) {
          return document.createElementNS(e, t);
        }
        function ue(e) {
          "@babel/helpers - typeof";
          return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? (ue = function (t) {
                  return typeof t;
                })
              : (ue = function (t) {
                  return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
            ue(e)
          );
        }
        var ce = (function () {
            var e = 1,
              t = [],
              n,
              r,
              o = {
                onmessage: function () {},
                postMessage: function (t) {
                  n({ data: t });
                },
              },
              a = {
                postMessage: function (t) {
                  o.onmessage({ data: t });
                },
              };
            function i(e) {
              if (window.Worker && window.Blob && l()) {
                var t = new Blob(
                    ["var _workerSelf = self; self.onmessage = ", e.toString()],
                    { type: "text/javascript" },
                  ),
                  r = URL.createObjectURL(t);
                return new Worker(r);
              }
              return ((n = e), o);
            }
            function s() {
              r ||
                ((r = i(function (t) {
                  function e() {
                    function e(t, n) {
                      var i,
                        l,
                        s = t.length,
                        u,
                        c,
                        d,
                        m;
                      for (l = 0; l < s; l += 1)
                        if (((i = t[l]), "ks" in i && !i.completed)) {
                          if (((i.completed = !0), i.hasMask)) {
                            var _ = i.masksProperties;
                            for (c = _.length, u = 0; u < c; u += 1)
                              if (_[u].pt.k.i) a(_[u].pt.k);
                              else
                                for (m = _[u].pt.k.length, d = 0; d < m; d += 1)
                                  (_[u].pt.k[d].s && a(_[u].pt.k[d].s[0]),
                                    _[u].pt.k[d].e && a(_[u].pt.k[d].e[0]));
                          }
                          i.ty === 0
                            ? ((i.layers = r(i.refId, n)), e(i.layers, n))
                            : i.ty === 4
                              ? o(i.shapes)
                              : i.ty === 5 && p(i);
                        }
                    }
                    function t(t, n) {
                      if (t) {
                        var o = 0,
                          a = t.length;
                        for (o = 0; o < a; o += 1)
                          t[o].t === 1 &&
                            ((t[o].data.layers = r(t[o].data.refId, n)),
                            e(t[o].data.layers, n));
                      }
                    }
                    function n(e, t) {
                      for (var n = 0, r = t.length; n < r; ) {
                        if (t[n].id === e) return t[n];
                        n += 1;
                      }
                      return null;
                    }
                    function r(e, t) {
                      var r = n(e, t);
                      return r
                        ? r.layers.__used
                          ? JSON.parse(JSON.stringify(r.layers))
                          : ((r.layers.__used = !0), r.layers)
                        : null;
                    }
                    function o(e) {
                      var t,
                        n = e.length,
                        r,
                        i;
                      for (t = n - 1; t >= 0; t -= 1)
                        if (e[t].ty === "sh")
                          if (e[t].ks.k.i) a(e[t].ks.k);
                          else
                            for (i = e[t].ks.k.length, r = 0; r < i; r += 1)
                              (e[t].ks.k[r].s && a(e[t].ks.k[r].s[0]),
                                e[t].ks.k[r].e && a(e[t].ks.k[r].e[0]));
                        else e[t].ty === "gr" && o(e[t].it);
                    }
                    function a(e) {
                      var t,
                        n = e.i.length;
                      for (t = 0; t < n; t += 1)
                        ((e.i[t][0] += e.v[t][0]),
                          (e.i[t][1] += e.v[t][1]),
                          (e.o[t][0] += e.v[t][0]),
                          (e.o[t][1] += e.v[t][1]));
                    }
                    function i(e, t) {
                      var n = t ? t.split(".") : [100, 100, 100];
                      return e[0] > n[0]
                        ? !0
                        : n[0] > e[0]
                          ? !1
                          : e[1] > n[1]
                            ? !0
                            : n[1] > e[1]
                              ? !1
                              : e[2] > n[2]
                                ? !0
                                : n[2] > e[2]
                                  ? !1
                                  : null;
                    }
                    var l = (function () {
                        var e = [4, 4, 14];
                        function t(e) {
                          var t = e.t.d;
                          e.t.d = { k: [{ s: t, t: 0 }] };
                        }
                        function n(e) {
                          var n,
                            r = e.length;
                          for (n = 0; n < r; n += 1) e[n].ty === 5 && t(e[n]);
                        }
                        return function (t) {
                          if (i(e, t.v) && (n(t.layers), t.assets)) {
                            var r,
                              o = t.assets.length;
                            for (r = 0; r < o; r += 1)
                              t.assets[r].layers && n(t.assets[r].layers);
                          }
                        };
                      })(),
                      s = (function () {
                        var e = [4, 7, 99];
                        return function (t) {
                          if (t.chars && !i(e, t.v)) {
                            var n,
                              r = t.chars.length;
                            for (n = 0; n < r; n += 1) {
                              var a = t.chars[n];
                              a.data &&
                                a.data.shapes &&
                                (o(a.data.shapes),
                                (a.data.ip = 0),
                                (a.data.op = 99999),
                                (a.data.st = 0),
                                (a.data.sr = 1),
                                (a.data.ks = {
                                  p: { k: [0, 0], a: 0 },
                                  s: { k: [100, 100], a: 0 },
                                  a: { k: [0, 0], a: 0 },
                                  r: { k: 0, a: 0 },
                                  o: { k: 100, a: 0 },
                                }),
                                t.chars[n].t ||
                                  (a.data.shapes.push({ ty: "no" }),
                                  a.data.shapes[0].it.push({
                                    p: { k: [0, 0], a: 0 },
                                    s: { k: [100, 100], a: 0 },
                                    a: { k: [0, 0], a: 0 },
                                    r: { k: 0, a: 0 },
                                    o: { k: 100, a: 0 },
                                    sk: { k: 0, a: 0 },
                                    sa: { k: 0, a: 0 },
                                    ty: "tr",
                                  })));
                            }
                          }
                        };
                      })(),
                      u = (function () {
                        var e = [5, 7, 15];
                        function t(e) {
                          var t = e.t.p;
                          (typeof t.a == "number" && (t.a = { a: 0, k: t.a }),
                            typeof t.p == "number" && (t.p = { a: 0, k: t.p }),
                            typeof t.r == "number" && (t.r = { a: 0, k: t.r }));
                        }
                        function n(e) {
                          var n,
                            r = e.length;
                          for (n = 0; n < r; n += 1) e[n].ty === 5 && t(e[n]);
                        }
                        return function (t) {
                          if (i(e, t.v) && (n(t.layers), t.assets)) {
                            var r,
                              o = t.assets.length;
                            for (r = 0; r < o; r += 1)
                              t.assets[r].layers && n(t.assets[r].layers);
                          }
                        };
                      })(),
                      c = (function () {
                        var e = [4, 1, 9];
                        function t(e) {
                          var n,
                            r = e.length,
                            o,
                            a;
                          for (n = 0; n < r; n += 1)
                            if (e[n].ty === "gr") t(e[n].it);
                            else if (e[n].ty === "fl" || e[n].ty === "st")
                              if (e[n].c.k && e[n].c.k[0].i)
                                for (a = e[n].c.k.length, o = 0; o < a; o += 1)
                                  (e[n].c.k[o].s &&
                                    ((e[n].c.k[o].s[0] /= 255),
                                    (e[n].c.k[o].s[1] /= 255),
                                    (e[n].c.k[o].s[2] /= 255),
                                    (e[n].c.k[o].s[3] /= 255)),
                                    e[n].c.k[o].e &&
                                      ((e[n].c.k[o].e[0] /= 255),
                                      (e[n].c.k[o].e[1] /= 255),
                                      (e[n].c.k[o].e[2] /= 255),
                                      (e[n].c.k[o].e[3] /= 255)));
                              else
                                ((e[n].c.k[0] /= 255),
                                  (e[n].c.k[1] /= 255),
                                  (e[n].c.k[2] /= 255),
                                  (e[n].c.k[3] /= 255));
                        }
                        function n(e) {
                          var n,
                            r = e.length;
                          for (n = 0; n < r; n += 1)
                            e[n].ty === 4 && t(e[n].shapes);
                        }
                        return function (t) {
                          if (i(e, t.v) && (n(t.layers), t.assets)) {
                            var r,
                              o = t.assets.length;
                            for (r = 0; r < o; r += 1)
                              t.assets[r].layers && n(t.assets[r].layers);
                          }
                        };
                      })(),
                      d = (function () {
                        var e = [4, 4, 18];
                        function t(e) {
                          var n,
                            r = e.length,
                            o,
                            a;
                          for (n = r - 1; n >= 0; n -= 1)
                            if (e[n].ty === "sh")
                              if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                              else
                                for (a = e[n].ks.k.length, o = 0; o < a; o += 1)
                                  (e[n].ks.k[o].s &&
                                    (e[n].ks.k[o].s[0].c = e[n].closed),
                                    e[n].ks.k[o].e &&
                                      (e[n].ks.k[o].e[0].c = e[n].closed));
                            else e[n].ty === "gr" && t(e[n].it);
                        }
                        function n(e) {
                          var n,
                            r,
                            o = e.length,
                            a,
                            i,
                            l,
                            s;
                          for (r = 0; r < o; r += 1) {
                            if (((n = e[r]), n.hasMask)) {
                              var u = n.masksProperties;
                              for (i = u.length, a = 0; a < i; a += 1)
                                if (u[a].pt.k.i) u[a].pt.k.c = u[a].cl;
                                else
                                  for (
                                    s = u[a].pt.k.length, l = 0;
                                    l < s;
                                    l += 1
                                  )
                                    (u[a].pt.k[l].s &&
                                      (u[a].pt.k[l].s[0].c = u[a].cl),
                                      u[a].pt.k[l].e &&
                                        (u[a].pt.k[l].e[0].c = u[a].cl));
                            }
                            n.ty === 4 && t(n.shapes);
                          }
                        }
                        return function (t) {
                          if (i(e, t.v) && (n(t.layers), t.assets)) {
                            var r,
                              o = t.assets.length;
                            for (r = 0; r < o; r += 1)
                              t.assets[r].layers && n(t.assets[r].layers);
                          }
                        };
                      })();
                    function m(n) {
                      n.__complete ||
                        (c(n),
                        l(n),
                        s(n),
                        u(n),
                        d(n),
                        e(n.layers, n.assets),
                        t(n.chars, n.assets),
                        (n.__complete = !0));
                    }
                    function p(e) {
                      e.t.a.length === 0 && "m" in e.t.p;
                    }
                    var _ = {};
                    return (
                      (_.completeData = m),
                      (_.checkColors = c),
                      (_.checkChars = s),
                      (_.checkPathProperties = u),
                      (_.checkShapes = d),
                      (_.completeLayers = e),
                      _
                    );
                  }
                  if (
                    (a.dataManager || (a.dataManager = e()),
                    a.assetLoader ||
                      (a.assetLoader = (function () {
                        function e(e) {
                          var t = e.getResponseHeader("content-type");
                          return (t &&
                            e.responseType === "json" &&
                            t.indexOf("json") !== -1) ||
                            (e.response && ue(e.response) === "object")
                            ? e.response
                            : e.response && typeof e.response == "string"
                              ? JSON.parse(e.response)
                              : e.responseText
                                ? JSON.parse(e.responseText)
                                : null;
                        }
                        function t(t, n, r, o) {
                          var a,
                            i = new XMLHttpRequest();
                          try {
                            i.responseType = "json";
                          } catch (e) {}
                          i.onreadystatechange = function () {
                            if (i.readyState === 4)
                              if (i.status === 200) ((a = e(i)), r(a));
                              else
                                try {
                                  ((a = e(i)), r(a));
                                } catch (e) {
                                  o && o(e);
                                }
                          };
                          try {
                            i.open(["G", "E", "T"].join(""), t, !0);
                          } catch (e) {
                            i.open(["G", "E", "T"].join(""), n + "/" + t, !0);
                          }
                          i.send();
                        }
                        return { load: t };
                      })()),
                    t.data.type === "loadAnimation")
                  )
                    a.assetLoader.load(
                      t.data.path,
                      t.data.fullPath,
                      function (e) {
                        (a.dataManager.completeData(e),
                          a.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          }));
                      },
                      function () {
                        a.postMessage({ id: t.data.id, status: "error" });
                      },
                    );
                  else if (t.data.type === "complete") {
                    var n = t.data.animation;
                    (a.dataManager.completeData(n),
                      a.postMessage({
                        id: t.data.id,
                        payload: n,
                        status: "success",
                      }));
                  } else
                    t.data.type === "loadData" &&
                      a.assetLoader.load(
                        t.data.path,
                        t.data.fullPath,
                        function (e) {
                          a.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                        },
                        function () {
                          a.postMessage({ id: t.data.id, status: "error" });
                        },
                      );
                })),
                (r.onmessage = function (e) {
                  var n = e.data,
                    r = n.id,
                    o = t[r];
                  ((t[r] = null),
                    n.status === "success"
                      ? o.onComplete(n.payload)
                      : o.onError && o.onError());
                }));
            }
            function u(n, r) {
              e += 1;
              var o = "processId_" + e;
              return ((t[o] = { onComplete: n, onError: r }), o);
            }
            function c(e, t, n) {
              s();
              var o = u(t, n);
              r.postMessage({
                type: "loadAnimation",
                path: e,
                fullPath: window.location.origin + window.location.pathname,
                id: o,
              });
            }
            function d(e, t, n) {
              s();
              var o = u(t, n);
              r.postMessage({
                type: "loadData",
                path: e,
                fullPath: window.location.origin + window.location.pathname,
                id: o,
              });
            }
            function m(e, t, n) {
              s();
              var o = u(t, n);
              r.postMessage({ type: "complete", animation: e, id: o });
            }
            return { loadAnimation: c, loadData: d, completeAnimation: m };
          })(),
          de = (function () {
            var e = (function () {
              var e = c("canvas");
              ((e.width = 1), (e.height = 1));
              var t = e.getContext("2d");
              return (
                (t.fillStyle = "rgba(0,0,0,0)"),
                t.fillRect(0, 0, 1, 1),
                e
              );
            })();
            function t() {
              ((this.loadedAssets += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null));
            }
            function n() {
              ((this.loadedFootagesCount += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null));
            }
            function r(e, t, n) {
              var r = "";
              if (e.e) r = e.p;
              else if (t) {
                var o = e.p;
                (o.indexOf("images/") !== -1 && (o = o.split("/")[1]),
                  (r = t + o));
              } else ((r = n), (r += e.u ? e.u : ""), (r += e.p));
              return r;
            }
            function o(e) {
              var t = 0,
                n = setInterval(
                  function () {
                    var r = e.getBBox();
                    ((r.width || t > 500) &&
                      (this._imageLoaded(), clearInterval(n)),
                      (t += 1));
                  }.bind(this),
                  50,
                );
            }
            function a(t) {
              var n = r(t, this.assetsPath, this.path),
                o = se("image");
              (S
                ? this.testImageLoaded(o)
                : o.addEventListener("load", this._imageLoaded, !1),
                o.addEventListener(
                  "error",
                  function () {
                    ((a.img = e), this._imageLoaded());
                  }.bind(this),
                  !1,
                ),
                o.setAttributeNS("http://www.w3.org/1999/xlink", "href", n),
                this._elementHelper.append
                  ? this._elementHelper.append(o)
                  : this._elementHelper.appendChild(o));
              var a = { img: o, assetData: t };
              return a;
            }
            function i(t) {
              var n = r(t, this.assetsPath, this.path),
                o = c("img");
              ((o.crossOrigin = "anonymous"),
                o.addEventListener("load", this._imageLoaded, !1),
                o.addEventListener(
                  "error",
                  function () {
                    ((a.img = e), this._imageLoaded());
                  }.bind(this),
                  !1,
                ),
                (o.src = n));
              var a = { img: o, assetData: t };
              return a;
            }
            function l(e) {
              var t = { assetData: e },
                n = r(e, this.assetsPath, this.path);
              return (
                ce.loadData(
                  n,
                  function (e) {
                    ((t.img = e), this._footageLoaded());
                  }.bind(this),
                  function () {
                    ((t.img = {}), this._footageLoaded());
                  }.bind(this),
                ),
                t
              );
            }
            function s(e, t) {
              this.imagesLoadedCb = t;
              var n,
                r = e.length;
              for (n = 0; n < r; n += 1)
                e[n].layers ||
                  (!e[n].t || e[n].t === "seq"
                    ? ((this.totalImages += 1),
                      this.images.push(this._createImageData(e[n])))
                    : e[n].t === 3 &&
                      ((this.totalFootages += 1),
                      this.images.push(this.createFootageData(e[n]))));
            }
            function u(e) {
              this.path = e || "";
            }
            function d(e) {
              this.assetsPath = e || "";
            }
            function m(e) {
              for (var t = 0, n = this.images.length; t < n; ) {
                if (this.images[t].assetData === e) return this.images[t].img;
                t += 1;
              }
              return null;
            }
            function p() {
              ((this.imagesLoadedCb = null), (this.images.length = 0));
            }
            function _() {
              return this.totalImages === this.loadedAssets;
            }
            function f() {
              return this.totalFootages === this.loadedFootagesCount;
            }
            function g(e, t) {
              e === "svg"
                ? ((this._elementHelper = t),
                  (this._createImageData = this.createImageData.bind(this)))
                : (this._createImageData = this.createImgData.bind(this));
            }
            function h() {
              ((this._imageLoaded = t.bind(this)),
                (this._footageLoaded = n.bind(this)),
                (this.testImageLoaded = o.bind(this)),
                (this.createFootageData = l.bind(this)),
                (this.assetsPath = ""),
                (this.path = ""),
                (this.totalImages = 0),
                (this.totalFootages = 0),
                (this.loadedAssets = 0),
                (this.loadedFootagesCount = 0),
                (this.imagesLoadedCb = null),
                (this.images = []));
            }
            return (
              (h.prototype = {
                loadAssets: s,
                setAssetsPath: d,
                setPath: u,
                loadedImages: _,
                loadedFootages: f,
                destroy: p,
                getAsset: m,
                createImgData: i,
                createImageData: a,
                imageLoaded: t,
                footageLoaded: n,
                setCacheType: g,
              }),
              h
            );
          })();
        function me() {}
        me.prototype = {
          triggerEvent: function (t, n) {
            if (this._cbs[t])
              for (var e = this._cbs[t], r = 0; r < e.length; r += 1) e[r](n);
          },
          addEventListener: function (t, n) {
            return (
              this._cbs[t] || (this._cbs[t] = []),
              this._cbs[t].push(n),
              function () {
                this.removeEventListener(t, n);
              }.bind(this)
            );
          },
          removeEventListener: function (t, n) {
            if (!n) this._cbs[t] = null;
            else if (this._cbs[t]) {
              for (var e = 0, r = this._cbs[t].length; e < r; )
                (this._cbs[t][e] === n &&
                  (this._cbs[t].splice(e, 1), (e -= 1), (r -= 1)),
                  (e += 1));
              this._cbs[t].length || (this._cbs[t] = null);
            }
          },
        };
        var pe = (function () {
            function e(e) {
              for (
                var t = e.split("\r\n"), n = {}, r, o = 0, a = 0;
                a < t.length;
                a += 1
              )
                ((r = t[a].split(":")),
                  r.length === 2 && ((n[r[0]] = r[1].trim()), (o += 1)));
              if (o === 0) throw new Error();
              return n;
            }
            return function (t) {
              for (var n = [], r = 0; r < t.length; r += 1) {
                var o = t[r],
                  a = { time: o.tm, duration: o.dr };
                try {
                  a.payload = JSON.parse(t[r].cm);
                } catch (n) {
                  try {
                    a.payload = e(t[r].cm);
                  } catch (e) {
                    a.payload = { name: t[r].cm };
                  }
                }
                n.push(a);
              }
              return n;
            };
          })(),
          _e = (function () {
            function e(e) {
              this.compositions.push(e);
            }
            return function () {
              function t(e) {
                for (var t = 0, n = this.compositions.length; t < n; ) {
                  if (
                    this.compositions[t].data &&
                    this.compositions[t].data.nm === e
                  )
                    return (
                      this.compositions[t].prepareFrame &&
                        this.compositions[t].data.xt &&
                        this.compositions[t].prepareFrame(this.currentFrame),
                      this.compositions[t].compInterface
                    );
                  t += 1;
                }
                return null;
              }
              return (
                (t.compositions = []),
                (t.currentFrame = 0),
                (t.registerComposition = e),
                t
              );
            };
          })(),
          fe = {},
          ge = function (t, n) {
            fe[t] = n;
          };
        function he(e) {
          return fe[e];
        }
        function ye() {
          if (fe.canvas) return "canvas";
          for (var e in fe) if (fe[e]) return e;
          return "";
        }
        function Ce(e) {
          "@babel/helpers - typeof";
          return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? (Ce = function (t) {
                  return typeof t;
                })
              : (Ce = function (t) {
                  return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
            Ce(e)
          );
        }
        var be = function () {
          ((this._cbs = []),
            (this.name = ""),
            (this.path = ""),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.firstFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = G()),
            (this.assetsPath = ""),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.isSubframeEnabled = Z()),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = _e()),
            (this.imagePreloader = new de()),
            (this.audioController = _()),
            (this.markers = []),
            (this.configAnimation = this.configAnimation.bind(this)),
            (this.onSetupError = this.onSetupError.bind(this)),
            (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
            (this.drawnFrameEvent = new F("drawnFrame", 0, 0, 0)),
            (this.expressionsPlugin = te()));
        };
        (d([me], be),
          (be.prototype.setParams = function (e) {
            (e.wrapper || e.container) &&
              (this.wrapper = e.wrapper || e.container);
            var t = "svg";
            e.animType ? (t = e.animType) : e.renderer && (t = e.renderer);
            var n = he(t);
            ((this.renderer = new n(this, e.rendererSettings)),
              this.imagePreloader.setCacheType(
                t,
                this.renderer.globalData.defs,
              ),
              this.renderer.setProjectInterface(this.projectInterface),
              (this.animType = t),
              e.loop === "" ||
              e.loop === null ||
              e.loop === void 0 ||
              e.loop === !0
                ? (this.loop = !0)
                : e.loop === !1
                  ? (this.loop = !1)
                  : (this.loop = parseInt(e.loop, 10)),
              (this.autoplay = "autoplay" in e ? e.autoplay : !0),
              (this.name = e.name ? e.name : ""),
              (this.autoloadSegments = Object.prototype.hasOwnProperty.call(
                e,
                "autoloadSegments",
              )
                ? e.autoloadSegments
                : !0),
              (this.assetsPath = e.assetsPath),
              (this.initialSegment = e.initialSegment),
              e.audioFactory &&
                this.audioController.setAudioFactory(e.audioFactory),
              e.animationData
                ? this.setupAnimation(e.animationData)
                : e.path &&
                  (e.path.lastIndexOf("\\") !== -1
                    ? (this.path = e.path.substr(
                        0,
                        e.path.lastIndexOf("\\") + 1,
                      ))
                    : (this.path = e.path.substr(
                        0,
                        e.path.lastIndexOf("/") + 1,
                      )),
                  (this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1)),
                  (this.fileName = this.fileName.substr(
                    0,
                    this.fileName.lastIndexOf(".json"),
                  )),
                  ce.loadAnimation(
                    e.path,
                    this.configAnimation,
                    this.onSetupError,
                  )));
          }),
          (be.prototype.onSetupError = function () {
            this.trigger("data_failed");
          }),
          (be.prototype.setupAnimation = function (e) {
            ce.completeAnimation(e, this.configAnimation);
          }),
          (be.prototype.setData = function (e, t) {
            t && Ce(t) !== "object" && (t = JSON.parse(t));
            var n = { wrapper: e, animationData: t },
              r = e.attributes;
            ((n.path = r.getNamedItem("data-animation-path")
              ? r.getNamedItem("data-animation-path").value
              : r.getNamedItem("data-bm-path")
                ? r.getNamedItem("data-bm-path").value
                : r.getNamedItem("bm-path")
                  ? r.getNamedItem("bm-path").value
                  : ""),
              (n.animType = r.getNamedItem("data-anim-type")
                ? r.getNamedItem("data-anim-type").value
                : r.getNamedItem("data-bm-type")
                  ? r.getNamedItem("data-bm-type").value
                  : r.getNamedItem("bm-type")
                    ? r.getNamedItem("bm-type").value
                    : r.getNamedItem("data-bm-renderer")
                      ? r.getNamedItem("data-bm-renderer").value
                      : r.getNamedItem("bm-renderer")
                        ? r.getNamedItem("bm-renderer").value
                        : ye() || "canvas"));
            var o = r.getNamedItem("data-anim-loop")
              ? r.getNamedItem("data-anim-loop").value
              : r.getNamedItem("data-bm-loop")
                ? r.getNamedItem("data-bm-loop").value
                : r.getNamedItem("bm-loop")
                  ? r.getNamedItem("bm-loop").value
                  : "";
            o === "false"
              ? (n.loop = !1)
              : o === "true"
                ? (n.loop = !0)
                : o !== "" && (n.loop = parseInt(o, 10));
            var a = r.getNamedItem("data-anim-autoplay")
              ? r.getNamedItem("data-anim-autoplay").value
              : r.getNamedItem("data-bm-autoplay")
                ? r.getNamedItem("data-bm-autoplay").value
                : r.getNamedItem("bm-autoplay")
                  ? r.getNamedItem("bm-autoplay").value
                  : !0;
            ((n.autoplay = a !== "false"),
              (n.name = r.getNamedItem("data-name")
                ? r.getNamedItem("data-name").value
                : r.getNamedItem("data-bm-name")
                  ? r.getNamedItem("data-bm-name").value
                  : r.getNamedItem("bm-name")
                    ? r.getNamedItem("bm-name").value
                    : ""));
            var i = r.getNamedItem("data-anim-prerender")
              ? r.getNamedItem("data-anim-prerender").value
              : r.getNamedItem("data-bm-prerender")
                ? r.getNamedItem("data-bm-prerender").value
                : r.getNamedItem("bm-prerender")
                  ? r.getNamedItem("bm-prerender").value
                  : "";
            (i === "false" && (n.prerender = !1),
              n.path ? this.setParams(n) : this.trigger("destroy"));
          }),
          (be.prototype.includeLayers = function (e) {
            e.op > this.animationData.op &&
              ((this.animationData.op = e.op),
              (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
            var t = this.animationData.layers,
              n,
              r = t.length,
              o = e.layers,
              a,
              i = o.length;
            for (a = 0; a < i; a += 1)
              for (n = 0; n < r; ) {
                if (t[n].id === o[a].id) {
                  t[n] = o[a];
                  break;
                }
                n += 1;
              }
            if (
              ((e.chars || e.fonts) &&
                (this.renderer.globalData.fontManager.addChars(e.chars),
                this.renderer.globalData.fontManager.addFonts(
                  e.fonts,
                  this.renderer.globalData.defs,
                )),
              e.assets)
            )
              for (r = e.assets.length, n = 0; n < r; n += 1)
                this.animationData.assets.push(e.assets[n]);
            ((this.animationData.__complete = !1),
              ce.completeAnimation(this.animationData, this.onSegmentComplete));
          }),
          (be.prototype.onSegmentComplete = function (e) {
            this.animationData = e;
            var t = te();
            (t && t.initExpressions(this), this.loadNextSegment());
          }),
          (be.prototype.loadNextSegment = function () {
            var e = this.animationData.segments;
            if (!e || e.length === 0 || !this.autoloadSegments) {
              (this.trigger("data_ready"),
                (this.timeCompleted = this.totalFrames));
              return;
            }
            var t = e.shift();
            this.timeCompleted = t.time * this.frameRate;
            var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
            ((this.segmentPos += 1),
              ce.loadData(
                n,
                this.includeLayers.bind(this),
                function () {
                  this.trigger("data_failed");
                }.bind(this),
              ));
          }),
          (be.prototype.loadSegments = function () {
            var e = this.animationData.segments;
            (e || (this.timeCompleted = this.totalFrames),
              this.loadNextSegment());
          }),
          (be.prototype.imagesLoaded = function () {
            (this.trigger("loaded_images"), this.checkLoaded());
          }),
          (be.prototype.preloadImages = function () {
            (this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(
                this.animationData.assets,
                this.imagesLoaded.bind(this),
              ));
          }),
          (be.prototype.configAnimation = function (e) {
            if (this.renderer)
              try {
                ((this.animationData = e),
                  this.initialSegment
                    ? ((this.totalFrames = Math.floor(
                        this.initialSegment[1] - this.initialSegment[0],
                      )),
                      (this.firstFrame = Math.round(this.initialSegment[0])))
                    : ((this.totalFrames = Math.floor(
                        this.animationData.op - this.animationData.ip,
                      )),
                      (this.firstFrame = Math.round(this.animationData.ip))),
                  this.renderer.configAnimation(e),
                  e.assets || (e.assets = []),
                  (this.assets = this.animationData.assets),
                  (this.frameRate = this.animationData.fr),
                  (this.frameMult = this.animationData.fr / 1e3),
                  this.renderer.searchExtraCompositions(e.assets),
                  (this.markers = pe(e.markers || [])),
                  this.trigger("config_ready"),
                  this.preloadImages(),
                  this.loadSegments(),
                  this.updaFrameModifier(),
                  this.waitForFontsLoaded(),
                  this.isPaused && this.audioController.pause());
              } catch (e) {
                this.triggerConfigError(e);
              }
          }),
          (be.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }),
          (be.prototype.checkLoaded = function () {
            if (
              !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() ||
                this.renderer.rendererType !== "canvas") &&
              this.imagePreloader.loadedFootages()
            ) {
              this.isLoaded = !0;
              var e = te();
              (e && e.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0,
                ),
                this.gotoFrame(),
                this.autoplay && this.play());
            }
          }),
          (be.prototype.resize = function (e, t) {
            var n = typeof e == "number" ? e : void 0,
              r = typeof t == "number" ? t : void 0;
            this.renderer.updateContainerSize(n, r);
          }),
          (be.prototype.setSubframe = function (e) {
            this.isSubframeEnabled = !!e;
          }),
          (be.prototype.gotoFrame = function () {
            ((this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame),
              this.timeCompleted !== this.totalFrames &&
                this.currentFrame > this.timeCompleted &&
                (this.currentFrame = this.timeCompleted),
              this.trigger("enterFrame"),
              this.renderFrame(),
              this.trigger("drawnFrame"));
          }),
          (be.prototype.renderFrame = function () {
            if (!(this.isLoaded === !1 || !this.renderer))
              try {
                (this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                  this.renderer.renderFrame(
                    this.currentFrame + this.firstFrame,
                  ));
              } catch (e) {
                this.triggerRenderFrameError(e);
              }
          }),
          (be.prototype.play = function (e) {
            (e && this.name !== e) ||
              (this.isPaused === !0 &&
                ((this.isPaused = !1),
                this.trigger("_play"),
                this.audioController.resume(),
                this._idle && ((this._idle = !1), this.trigger("_active"))));
          }),
          (be.prototype.pause = function (e) {
            (e && this.name !== e) ||
              (this.isPaused === !1 &&
                ((this.isPaused = !0),
                this.trigger("_pause"),
                (this._idle = !0),
                this.trigger("_idle"),
                this.audioController.pause()));
          }),
          (be.prototype.togglePause = function (e) {
            (e && this.name !== e) ||
              (this.isPaused === !0 ? this.play() : this.pause());
          }),
          (be.prototype.stop = function (e) {
            (e && this.name !== e) ||
              (this.pause(),
              (this.playCount = 0),
              (this._completedLoop = !1),
              this.setCurrentRawFrameValue(0));
          }),
          (be.prototype.getMarkerData = function (e) {
            for (var t, n = 0; n < this.markers.length; n += 1)
              if (((t = this.markers[n]), t.payload && t.payload.name === e))
                return t;
            return null;
          }),
          (be.prototype.goToAndStop = function (e, t, n) {
            if (!(n && this.name !== n)) {
              var r = Number(e);
              if (isNaN(r)) {
                var o = this.getMarkerData(e);
                o && this.goToAndStop(o.time, !0);
              } else
                t
                  ? this.setCurrentRawFrameValue(e)
                  : this.setCurrentRawFrameValue(e * this.frameModifier);
              this.pause();
            }
          }),
          (be.prototype.goToAndPlay = function (e, t, n) {
            if (!(n && this.name !== n)) {
              var r = Number(e);
              if (isNaN(r)) {
                var o = this.getMarkerData(e);
                o &&
                  (o.duration
                    ? this.playSegments([o.time, o.time + o.duration], !0)
                    : this.goToAndStop(o.time, !0));
              } else this.goToAndStop(r, t, n);
              this.play();
            }
          }),
          (be.prototype.advanceTime = function (e) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
              var t = this.currentRawFrame + e * this.frameModifier,
                n = !1;
              (t >= this.totalFrames - 1 && this.frameModifier > 0
                ? !this.loop || this.playCount === this.loop
                  ? this.checkSegments(
                      t > this.totalFrames ? t % this.totalFrames : 0,
                    ) || ((n = !0), (t = this.totalFrames - 1))
                  : t >= this.totalFrames
                    ? ((this.playCount += 1),
                      this.checkSegments(t % this.totalFrames) ||
                        (this.setCurrentRawFrameValue(t % this.totalFrames),
                        (this._completedLoop = !0),
                        this.trigger("loopComplete")))
                    : this.setCurrentRawFrameValue(t)
                : t < 0
                  ? this.checkSegments(t % this.totalFrames) ||
                    (this.loop && !(this.playCount-- <= 0 && this.loop !== !0)
                      ? (this.setCurrentRawFrameValue(
                          this.totalFrames + (t % this.totalFrames),
                        ),
                        this._completedLoop
                          ? this.trigger("loopComplete")
                          : (this._completedLoop = !0))
                      : ((n = !0), (t = 0)))
                  : this.setCurrentRawFrameValue(t),
                n &&
                  (this.setCurrentRawFrameValue(t),
                  this.pause(),
                  this.trigger("complete")));
            }
          }),
          (be.prototype.adjustSegment = function (e, t) {
            ((this.playCount = 0),
              e[1] < e[0]
                ? (this.frameModifier > 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(-1)),
                  (this.totalFrames = e[0] - e[1]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = e[1]),
                  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t))
                : e[1] > e[0] &&
                  (this.frameModifier < 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(1)),
                  (this.totalFrames = e[1] - e[0]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = e[0]),
                  this.setCurrentRawFrameValue(0.001 + t)),
              this.trigger("segmentStart"));
          }),
          (be.prototype.setSegment = function (e, t) {
            var n = -1;
            (this.isPaused &&
              (this.currentRawFrame + this.firstFrame < e
                ? (n = e)
                : this.currentRawFrame + this.firstFrame > t && (n = t - e)),
              (this.firstFrame = e),
              (this.totalFrames = t - e),
              (this.timeCompleted = this.totalFrames),
              n !== -1 && this.goToAndStop(n, !0));
          }),
          (be.prototype.playSegments = function (e, t) {
            if ((t && (this.segments.length = 0), Ce(e[0]) === "object")) {
              var n,
                r = e.length;
              for (n = 0; n < r; n += 1) this.segments.push(e[n]);
            } else this.segments.push(e);
            (this.segments.length &&
              t &&
              this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play());
          }),
          (be.prototype.resetSegments = function (e) {
            ((this.segments.length = 0),
              this.segments.push([
                this.animationData.ip,
                this.animationData.op,
              ]),
              e && this.checkSegments(0));
          }),
          (be.prototype.checkSegments = function (e) {
            return this.segments.length
              ? (this.adjustSegment(this.segments.shift(), e), !0)
              : !1;
          }),
          (be.prototype.destroy = function (e) {
            (e && this.name !== e) ||
              !this.renderer ||
              (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger("destroy"),
              (this._cbs = null),
              (this.onEnterFrame = null),
              (this.onLoopComplete = null),
              (this.onComplete = null),
              (this.onSegmentStart = null),
              (this.onDestroy = null),
              (this.renderer = null),
              (this.expressionsPlugin = null),
              (this.imagePreloader = null),
              (this.projectInterface = null));
          }),
          (be.prototype.setCurrentRawFrameValue = function (e) {
            ((this.currentRawFrame = e), this.gotoFrame());
          }),
          (be.prototype.setSpeed = function (e) {
            ((this.playSpeed = e), this.updaFrameModifier());
          }),
          (be.prototype.setDirection = function (e) {
            ((this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier());
          }),
          (be.prototype.setLoop = function (e) {
            this.loop = e;
          }),
          (be.prototype.setVolume = function (e, t) {
            (t && this.name !== t) || this.audioController.setVolume(e);
          }),
          (be.prototype.getVolume = function () {
            return this.audioController.getVolume();
          }),
          (be.prototype.mute = function (e) {
            (e && this.name !== e) || this.audioController.mute();
          }),
          (be.prototype.unmute = function (e) {
            (e && this.name !== e) || this.audioController.unmute();
          }),
          (be.prototype.updaFrameModifier = function () {
            ((this.frameModifier =
              this.frameMult * this.playSpeed * this.playDirection),
              this.audioController.setRate(
                this.playSpeed * this.playDirection,
              ));
          }),
          (be.prototype.getPath = function () {
            return this.path;
          }),
          (be.prototype.getAssetsPath = function (e) {
            var t = "";
            if (e.e) t = e.p;
            else if (this.assetsPath) {
              var n = e.p;
              (n.indexOf("images/") !== -1 && (n = n.split("/")[1]),
                (t = this.assetsPath + n));
            } else ((t = this.path), (t += e.u ? e.u : ""), (t += e.p));
            return t;
          }),
          (be.prototype.getAssetData = function (e) {
            for (var t = 0, n = this.assets.length; t < n; ) {
              if (e === this.assets[t].id) return this.assets[t];
              t += 1;
            }
            return null;
          }),
          (be.prototype.hide = function () {
            this.renderer.hide();
          }),
          (be.prototype.show = function () {
            this.renderer.show();
          }),
          (be.prototype.getDuration = function (e) {
            return e ? this.totalFrames : this.totalFrames / this.frameRate;
          }),
          (be.prototype.updateDocumentData = function (e, t, n) {
            try {
              var r = this.renderer.getElementByPath(e);
              r.updateDocumentData(t, n);
            } catch (e) {}
          }),
          (be.prototype.trigger = function (e) {
            if (this._cbs && this._cbs[e])
              switch (e) {
                case "enterFrame":
                  this.triggerEvent(
                    e,
                    new F(
                      e,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier,
                    ),
                  );
                  break;
                case "drawnFrame":
                  ((this.drawnFrameEvent.currentTime = this.currentFrame),
                    (this.drawnFrameEvent.totalTime = this.totalFrames),
                    (this.drawnFrameEvent.direction = this.frameModifier),
                    this.triggerEvent(e, this.drawnFrameEvent));
                  break;
                case "loopComplete":
                  this.triggerEvent(
                    e,
                    new B(e, this.loop, this.playCount, this.frameMult),
                  );
                  break;
                case "complete":
                  this.triggerEvent(e, new O(e, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(
                    e,
                    new W(e, this.firstFrame, this.totalFrames),
                  );
                  break;
                case "destroy":
                  this.triggerEvent(e, new q(e, this));
                  break;
                default:
                  this.triggerEvent(e);
              }
            (e === "enterFrame" &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new F(e, this.currentFrame, this.totalFrames, this.frameMult),
              ),
              e === "loopComplete" &&
                this.onLoopComplete &&
                this.onLoopComplete.call(
                  this,
                  new B(e, this.loop, this.playCount, this.frameMult),
                ),
              e === "complete" &&
                this.onComplete &&
                this.onComplete.call(this, new O(e, this.frameMult)),
              e === "segmentStart" &&
                this.onSegmentStart &&
                this.onSegmentStart.call(
                  this,
                  new W(e, this.firstFrame, this.totalFrames),
                ),
              e === "destroy" &&
                this.onDestroy &&
                this.onDestroy.call(this, new q(e, this)));
          }),
          (be.prototype.triggerRenderFrameError = function (e) {
            var t = new U(e, this.currentFrame);
            (this.triggerEvent("error", t),
              this.onError && this.onError.call(this, t));
          }),
          (be.prototype.triggerConfigError = function (e) {
            var t = new V(e, this.currentFrame);
            (this.triggerEvent("error", t),
              this.onError && this.onError.call(this, t));
          }));
        var ve = (function () {
            var e = {},
              t = [],
              n = 0,
              r = 0,
              o = 0,
              a = !0,
              i = !1;
            function l(e) {
              for (var n = 0, o = e.target; n < r; )
                (t[n].animation === o &&
                  (t.splice(n, 1), (n -= 1), (r -= 1), o.isPaused || m()),
                  (n += 1));
            }
            function s(e, n) {
              if (!e) return null;
              for (var o = 0; o < r; ) {
                if (t[o].elem === e && t[o].elem !== null)
                  return t[o].animation;
                o += 1;
              }
              var a = new be();
              return (p(a, e), a.setData(e, n), a);
            }
            function u() {
              var e,
                n = t.length,
                r = [];
              for (e = 0; e < n; e += 1) r.push(t[e].animation);
              return r;
            }
            function d() {
              ((o += 1), I());
            }
            function m() {
              o -= 1;
            }
            function p(e, n) {
              (e.addEventListener("destroy", l),
                e.addEventListener("_active", d),
                e.addEventListener("_idle", m),
                t.push({ elem: n, animation: e }),
                (r += 1));
            }
            function _(e) {
              var t = new be();
              return (p(t, null), t.setParams(e), t);
            }
            function f(e, n) {
              var o;
              for (o = 0; o < r; o += 1) t[o].animation.setSpeed(e, n);
            }
            function g(e, n) {
              var o;
              for (o = 0; o < r; o += 1) t[o].animation.setDirection(e, n);
            }
            function h(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.play(e);
            }
            function y(e) {
              var l = e - n,
                s;
              for (s = 0; s < r; s += 1) t[s].animation.advanceTime(l);
              ((n = e), o && !i ? window.requestAnimationFrame(y) : (a = !0));
            }
            function C(e) {
              ((n = e), window.requestAnimationFrame(y));
            }
            function b(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.pause(e);
            }
            function v(e, n, o) {
              var a;
              for (a = 0; a < r; a += 1) t[a].animation.goToAndStop(e, n, o);
            }
            function S(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.stop(e);
            }
            function R(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.togglePause(e);
            }
            function L(e) {
              var n;
              for (n = r - 1; n >= 0; n -= 1) t[n].animation.destroy(e);
            }
            function E(e, t, n) {
              var r = [].concat(
                  [].slice.call(document.getElementsByClassName("lottie")),
                  [].slice.call(document.getElementsByClassName("bodymovin")),
                ),
                o,
                a = r.length;
              for (o = 0; o < a; o += 1)
                (n && r[o].setAttribute("data-bm-type", n), s(r[o], e));
              if (t && a === 0) {
                n || (n = "svg");
                var i = document.getElementsByTagName("body")[0];
                i.innerText = "";
                var l = c("div");
                ((l.style.width = "100%"),
                  (l.style.height = "100%"),
                  l.setAttribute("data-bm-type", n),
                  i.appendChild(l),
                  s(l, e));
              }
            }
            function k() {
              var e;
              for (e = 0; e < r; e += 1) t[e].animation.resize();
            }
            function I() {
              !i && o && a && (window.requestAnimationFrame(C), (a = !1));
            }
            function T() {
              i = !0;
            }
            function D() {
              ((i = !1), I());
            }
            function x(e, n) {
              var o;
              for (o = 0; o < r; o += 1) t[o].animation.setVolume(e, n);
            }
            function $(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.mute(e);
            }
            function P(e) {
              var n;
              for (n = 0; n < r; n += 1) t[n].animation.unmute(e);
            }
            return (
              (e.registerAnimation = s),
              (e.loadAnimation = _),
              (e.setSpeed = f),
              (e.setDirection = g),
              (e.play = h),
              (e.pause = b),
              (e.stop = S),
              (e.togglePause = R),
              (e.searchAnimations = E),
              (e.resize = k),
              (e.goToAndStop = v),
              (e.destroy = L),
              (e.freeze = T),
              (e.unfreeze = D),
              (e.setVolume = x),
              (e.mute = $),
              (e.unmute = P),
              (e.getRegisteredAnimations = u),
              e
            );
          })(),
          Se = (function () {
            var e = {};
            e.getBezierEasing = n;
            var t = {};
            function n(e, n, r, o, a) {
              var i =
                a ||
                ("bez_" + e + "_" + n + "_" + r + "_" + o).replace(/\./g, "p");
              if (t[i]) return t[i];
              var l = new h([e, n, r, o]);
              return ((t[i] = l), l);
            }
            var r = 4,
              o = 0.001,
              a = 1e-7,
              i = 10,
              l = 11,
              s = 1 / (l - 1),
              u = typeof Float32Array == "function";
            function c(e, t) {
              return 1 - 3 * t + 3 * e;
            }
            function d(e, t) {
              return 3 * t - 6 * e;
            }
            function m(e) {
              return 3 * e;
            }
            function p(e, t, n) {
              return ((c(t, n) * e + d(t, n)) * e + m(t)) * e;
            }
            function _(e, t, n) {
              return 3 * c(t, n) * e * e + 2 * d(t, n) * e + m(t);
            }
            function f(e, t, n, r, o) {
              var l,
                s,
                u = 0;
              do
                ((s = t + (n - t) / 2),
                  (l = p(s, r, o) - e),
                  l > 0 ? (n = s) : (t = s));
              while (Math.abs(l) > a && ++u < i);
              return s;
            }
            function g(e, t, n, o) {
              for (var a = 0; a < r; ++a) {
                var i = _(t, n, o);
                if (i === 0) return t;
                var l = p(t, n, o) - e;
                t -= l / i;
              }
              return t;
            }
            function h(e) {
              ((this._p = e),
                (this._mSampleValues = u ? new Float32Array(l) : new Array(l)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this)));
            }
            return (
              (h.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    n = this._p[1],
                    r = this._p[2],
                    o = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === n && r === o
                      ? t
                      : t === 0
                        ? 0
                        : t === 1
                          ? 1
                          : p(this._getTForX(t), n, o)
                  );
                },
                _precompute: function () {
                  var e = this._p[0],
                    t = this._p[1],
                    n = this._p[2],
                    r = this._p[3];
                  ((this._precomputed = !0),
                    (e !== t || n !== r) && this._calcSampleValues());
                },
                _calcSampleValues: function () {
                  for (var e = this._p[0], t = this._p[2], n = 0; n < l; ++n)
                    this._mSampleValues[n] = p(n * s, e, t);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      n = this._p[2],
                      r = this._mSampleValues,
                      a = 0,
                      i = 1,
                      u = l - 1;
                    i !== u && r[i] <= t;
                    ++i
                  )
                    a += s;
                  --i;
                  var c = (t - r[i]) / (r[i + 1] - r[i]),
                    d = a + c * s,
                    m = _(d, e, n);
                  return m >= o
                    ? g(t, d, e, n)
                    : m === 0
                      ? d
                      : f(t, a, a + s, e, n);
                },
              }),
              e
            );
          })(),
          Re = (function () {
            function e(e) {
              return e.concat(g(e.length));
            }
            return { double: e };
          })(),
          Le = (function () {
            return function (e, t, n) {
              var r = 0,
                o = e,
                a = g(o),
                i = { newElement: l, release: s };
              function l() {
                var e;
                return (r ? ((r -= 1), (e = a[r])) : (e = t()), e);
              }
              function s(e) {
                (r === o && ((a = Re.double(a)), (o *= 2)),
                  n && n(e),
                  (a[r] = e),
                  (r += 1));
              }
              return i;
            };
          })(),
          Ee = (function () {
            function e() {
              return {
                addedLength: 0,
                percents: f("float32", ae()),
                lengths: f("float32", ae()),
              };
            }
            return Le(8, e);
          })(),
          ke = (function () {
            function e() {
              return { lengths: [], totalLength: 0 };
            }
            function t(e) {
              var t,
                n = e.lengths.length;
              for (t = 0; t < n; t += 1) Ee.release(e.lengths[t]);
              e.lengths.length = 0;
            }
            return Le(8, e, t);
          })();
        function Ie() {
          var e = Math;
          function t(e, t, n, r, o, a) {
            var i = e * r + t * o + n * a - o * r - a * e - n * t;
            return i > -0.001 && i < 0.001;
          }
          function n(n, r, o, a, i, l, s, u, c) {
            if (o === 0 && l === 0 && c === 0) return t(n, r, a, i, s, u);
            var d = e.sqrt(e.pow(a - n, 2) + e.pow(i - r, 2) + e.pow(l - o, 2)),
              m = e.sqrt(e.pow(s - n, 2) + e.pow(u - r, 2) + e.pow(c - o, 2)),
              p = e.sqrt(e.pow(s - a, 2) + e.pow(u - i, 2) + e.pow(c - l, 2)),
              _;
            return (
              d > m
                ? d > p
                  ? (_ = d - m - p)
                  : (_ = p - m - d)
                : p > m
                  ? (_ = p - m - d)
                  : (_ = m - d - p),
              _ > -1e-4 && _ < 1e-4
            );
          }
          var r = (function () {
            return function (e, t, n, r) {
              var o = ae(),
                a,
                i,
                l,
                s,
                u,
                c = 0,
                d,
                m = [],
                p = [],
                _ = Ee.newElement();
              for (l = n.length, a = 0; a < o; a += 1) {
                for (u = a / (o - 1), d = 0, i = 0; i < l; i += 1)
                  ((s =
                    L(1 - u, 3) * e[i] +
                    3 * L(1 - u, 2) * u * n[i] +
                    3 * (1 - u) * L(u, 2) * r[i] +
                    L(u, 3) * t[i]),
                    (m[i] = s),
                    p[i] !== null && (d += L(m[i] - p[i], 2)),
                    (p[i] = m[i]));
                (d && ((d = E(d)), (c += d)),
                  (_.percents[a] = u),
                  (_.lengths[a] = c));
              }
              return ((_.addedLength = c), _);
            };
          })();
          function o(e) {
            var t = ke.newElement(),
              n = e.c,
              o = e.v,
              a = e.o,
              i = e.i,
              l,
              s = e._length,
              u = t.lengths,
              c = 0;
            for (l = 0; l < s - 1; l += 1)
              ((u[l] = r(o[l], o[l + 1], a[l], i[l + 1])),
                (c += u[l].addedLength));
            return (
              n &&
                s &&
                ((u[l] = r(o[l], o[0], a[l], i[0])), (c += u[l].addedLength)),
              (t.totalLength = c),
              t
            );
          }
          function a(e) {
            ((this.segmentLength = 0), (this.points = new Array(e)));
          }
          function i(e, t) {
            ((this.partialLength = e), (this.point = t));
          }
          var l = (function () {
            var e = {};
            return function (n, r, o, l) {
              var s = (
                n[0] +
                "_" +
                n[1] +
                "_" +
                r[0] +
                "_" +
                r[1] +
                "_" +
                o[0] +
                "_" +
                o[1] +
                "_" +
                l[0] +
                "_" +
                l[1]
              ).replace(/\./g, "p");
              if (!e[s]) {
                var u = ae(),
                  c,
                  d,
                  m,
                  p,
                  _,
                  f = 0,
                  h,
                  y,
                  C = null;
                n.length === 2 &&
                  (n[0] !== r[0] || n[1] !== r[1]) &&
                  t(n[0], n[1], r[0], r[1], n[0] + o[0], n[1] + o[1]) &&
                  t(n[0], n[1], r[0], r[1], r[0] + l[0], r[1] + l[1]) &&
                  (u = 2);
                var b = new a(u);
                for (m = o.length, c = 0; c < u; c += 1) {
                  for (y = g(m), _ = c / (u - 1), h = 0, d = 0; d < m; d += 1)
                    ((p =
                      L(1 - _, 3) * n[d] +
                      3 * L(1 - _, 2) * _ * (n[d] + o[d]) +
                      3 * (1 - _) * L(_, 2) * (r[d] + l[d]) +
                      L(_, 3) * r[d]),
                      (y[d] = p),
                      C !== null && (h += L(y[d] - C[d], 2)));
                  ((h = E(h)), (f += h), (b.points[c] = new i(h, y)), (C = y));
                }
                ((b.segmentLength = f), (e[s] = b));
              }
              return e[s];
            };
          })();
          function s(e, t) {
            var n = t.percents,
              r = t.lengths,
              o = n.length,
              a = k((o - 1) * e),
              i = e * t.addedLength,
              l = 0;
            if (a === o - 1 || a === 0 || i === r[a]) return n[a];
            for (var s = r[a] > i ? -1 : 1, u = !0; u; )
              if (
                (r[a] <= i && r[a + 1] > i
                  ? ((l = (i - r[a]) / (r[a + 1] - r[a])), (u = !1))
                  : (a += s),
                a < 0 || a >= o - 1)
              ) {
                if (a === o - 1) return n[a];
                u = !1;
              }
            return n[a] + (n[a + 1] - n[a]) * l;
          }
          function u(t, n, r, o, a, i) {
            var l = s(a, i),
              u = 1 - l,
              c =
                e.round(
                  (u * u * u * t[0] +
                    (l * u * u + u * l * u + u * u * l) * r[0] +
                    (l * l * u + u * l * l + l * u * l) * o[0] +
                    l * l * l * n[0]) *
                    1e3,
                ) / 1e3,
              d =
                e.round(
                  (u * u * u * t[1] +
                    (l * u * u + u * l * u + u * u * l) * r[1] +
                    (l * l * u + u * l * l + l * u * l) * o[1] +
                    l * l * l * n[1]) *
                    1e3,
                ) / 1e3;
            return [c, d];
          }
          var c = f("float32", 8);
          function d(t, n, r, o, a, i, l) {
            a < 0 ? (a = 0) : a > 1 && (a = 1);
            var u = s(a, l);
            i = i > 1 ? 1 : i;
            var d = s(i, l),
              m,
              p = t.length,
              _ = 1 - u,
              f = 1 - d,
              g = _ * _ * _,
              h = u * _ * _ * 3,
              y = u * u * _ * 3,
              C = u * u * u,
              b = _ * _ * f,
              v = u * _ * f + _ * u * f + _ * _ * d,
              S = u * u * f + _ * u * d + u * _ * d,
              R = u * u * d,
              L = _ * f * f,
              E = u * f * f + _ * d * f + _ * f * d,
              k = u * d * f + _ * d * d + u * f * d,
              I = u * d * d,
              T = f * f * f,
              D = d * f * f + f * d * f + f * f * d,
              x = d * d * f + f * d * d + d * f * d,
              $ = d * d * d;
            for (m = 0; m < p; m += 1)
              ((c[m * 4] =
                e.round((g * t[m] + h * r[m] + y * o[m] + C * n[m]) * 1e3) /
                1e3),
                (c[m * 4 + 1] =
                  e.round((b * t[m] + v * r[m] + S * o[m] + R * n[m]) * 1e3) /
                  1e3),
                (c[m * 4 + 2] =
                  e.round((L * t[m] + E * r[m] + k * o[m] + I * n[m]) * 1e3) /
                  1e3),
                (c[m * 4 + 3] =
                  e.round((T * t[m] + D * r[m] + x * o[m] + $ * n[m]) * 1e3) /
                  1e3));
            return c;
          }
          return {
            getSegmentsLength: o,
            getNewSegment: d,
            getPointInSegment: u,
            buildBezierData: l,
            pointOnLine2D: t,
            pointOnLine3D: n,
          };
        }
        var Te = Ie(),
          De = r,
          xe = Math.abs;
        function $e(e, t) {
          var n = this.offsetTime,
            r;
          this.propType === "multidimensional" &&
            (r = f("float32", this.pv.length));
          for (
            var o = t.lastIndex,
              a = o,
              i = this.keyframes.length - 1,
              l = !0,
              s,
              u,
              c;
            l;
          ) {
            if (
              ((s = this.keyframes[a]),
              (u = this.keyframes[a + 1]),
              a === i - 1 && e >= u.t - n)
            ) {
              (s.h && (s = u), (o = 0));
              break;
            }
            if (u.t - n > e) {
              o = a;
              break;
            }
            a < i - 1 ? (a += 1) : ((o = 0), (l = !1));
          }
          c = this.keyframesMetadata[a] || {};
          var d,
            m,
            p,
            _,
            g,
            h,
            y = u.t - n,
            C = s.t - n,
            b;
          if (s.to) {
            c.bezierData ||
              (c.bezierData = Te.buildBezierData(s.s, u.s || s.e, s.to, s.ti));
            var v = c.bezierData;
            if (e >= y || e < C) {
              var S = e >= y ? v.points.length - 1 : 0;
              for (m = v.points[S].point.length, d = 0; d < m; d += 1)
                r[d] = v.points[S].point[d];
            } else {
              (c.__fnct
                ? (h = c.__fnct)
                : ((h = Se.getBezierEasing(
                    s.o.x,
                    s.o.y,
                    s.i.x,
                    s.i.y,
                    s.n,
                  ).get),
                  (c.__fnct = h)),
                (p = h((e - C) / (y - C))));
              var R = v.segmentLength * p,
                L,
                E =
                  t.lastFrame < e && t._lastKeyframeIndex === a
                    ? t._lastAddedLength
                    : 0;
              for (
                g =
                  t.lastFrame < e && t._lastKeyframeIndex === a
                    ? t._lastPoint
                    : 0,
                  l = !0,
                  _ = v.points.length;
                l;
              ) {
                if (
                  ((E += v.points[g].partialLength),
                  R === 0 || p === 0 || g === v.points.length - 1)
                ) {
                  for (m = v.points[g].point.length, d = 0; d < m; d += 1)
                    r[d] = v.points[g].point[d];
                  break;
                } else if (R >= E && R < E + v.points[g + 1].partialLength) {
                  for (
                    L = (R - E) / v.points[g + 1].partialLength,
                      m = v.points[g].point.length,
                      d = 0;
                    d < m;
                    d += 1
                  )
                    r[d] =
                      v.points[g].point[d] +
                      (v.points[g + 1].point[d] - v.points[g].point[d]) * L;
                  break;
                }
                g < _ - 1 ? (g += 1) : (l = !1);
              }
              ((t._lastPoint = g),
                (t._lastAddedLength = E - v.points[g].partialLength),
                (t._lastKeyframeIndex = a));
            }
          } else {
            var k, I, T, D, x;
            if (((i = s.s.length), (b = u.s || s.e), this.sh && s.h !== 1))
              if (e >= y) ((r[0] = b[0]), (r[1] = b[1]), (r[2] = b[2]));
              else if (e <= C)
                ((r[0] = s.s[0]), (r[1] = s.s[1]), (r[2] = s.s[2]));
              else {
                var $ = Me(s.s),
                  P = Me(b),
                  N = (e - C) / (y - C);
                Ne(r, Pe($, P, N));
              }
            else
              for (a = 0; a < i; a += 1)
                (s.h !== 1 &&
                  (e >= y
                    ? (p = 1)
                    : e < C
                      ? (p = 0)
                      : (s.o.x.constructor === Array
                          ? (c.__fnct || (c.__fnct = []),
                            c.__fnct[a]
                              ? (h = c.__fnct[a])
                              : ((k =
                                  s.o.x[a] === void 0 ? s.o.x[0] : s.o.x[a]),
                                (I = s.o.y[a] === void 0 ? s.o.y[0] : s.o.y[a]),
                                (T = s.i.x[a] === void 0 ? s.i.x[0] : s.i.x[a]),
                                (D = s.i.y[a] === void 0 ? s.i.y[0] : s.i.y[a]),
                                (h = Se.getBezierEasing(k, I, T, D).get),
                                (c.__fnct[a] = h)))
                          : c.__fnct
                            ? (h = c.__fnct)
                            : ((k = s.o.x),
                              (I = s.o.y),
                              (T = s.i.x),
                              (D = s.i.y),
                              (h = Se.getBezierEasing(k, I, T, D).get),
                              (s.keyframeMetadata = h)),
                        (p = h((e - C) / (y - C))))),
                  (b = u.s || s.e),
                  (x = s.h === 1 ? s.s[a] : s.s[a] + (b[a] - s.s[a]) * p),
                  this.propType === "multidimensional" ? (r[a] = x) : (r = x));
          }
          return ((t.lastIndex = o), r);
        }
        function Pe(e, t, n) {
          var r = [],
            o = e[0],
            a = e[1],
            i = e[2],
            l = e[3],
            s = t[0],
            u = t[1],
            c = t[2],
            d = t[3],
            m,
            p,
            _,
            f,
            g;
          return (
            (p = o * s + a * u + i * c + l * d),
            p < 0 && ((p = -p), (s = -s), (u = -u), (c = -c), (d = -d)),
            1 - p > 1e-6
              ? ((m = Math.acos(p)),
                (_ = Math.sin(m)),
                (f = Math.sin((1 - n) * m) / _),
                (g = Math.sin(n * m) / _))
              : ((f = 1 - n), (g = n)),
            (r[0] = f * o + g * s),
            (r[1] = f * a + g * u),
            (r[2] = f * i + g * c),
            (r[3] = f * l + g * d),
            r
          );
        }
        function Ne(e, t) {
          var n = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            i = Math.atan2(2 * r * a - 2 * n * o, 1 - 2 * r * r - 2 * o * o),
            l = Math.asin(2 * n * r + 2 * o * a),
            s = Math.atan2(2 * n * a - 2 * r * o, 1 - 2 * n * n - 2 * o * o);
          ((e[0] = i / P), (e[1] = l / P), (e[2] = s / P));
        }
        function Me(e) {
          var t = e[0] * P,
            n = e[1] * P,
            r = e[2] * P,
            o = Math.cos(t / 2),
            a = Math.cos(n / 2),
            i = Math.cos(r / 2),
            l = Math.sin(t / 2),
            s = Math.sin(n / 2),
            u = Math.sin(r / 2),
            c = o * a * i - l * s * u,
            d = l * s * i + o * a * u,
            m = l * a * i + o * s * u,
            p = o * s * i - l * a * u;
          return [d, m, p, c];
        }
        function we() {
          var e = this.comp.renderedFrame - this.offsetTime,
            t = this.keyframes[0].t - this.offsetTime,
            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (
            !(
              e === this._caching.lastFrame ||
              (this._caching.lastFrame !== De &&
                ((this._caching.lastFrame >= n && e >= n) ||
                  (this._caching.lastFrame < t && e < t)))
            )
          ) {
            this._caching.lastFrame >= e &&
              ((this._caching._lastKeyframeIndex = -1),
              (this._caching.lastIndex = 0));
            var r = this.interpolateValue(e, this._caching);
            this.pv = r;
          }
          return ((this._caching.lastFrame = e), this.pv);
        }
        function Ae(e) {
          var t;
          if (this.propType === "unidimensional")
            ((t = e * this.mult),
              xe(this.v - t) > 1e-5 && ((this.v = t), (this._mdf = !0)));
          else
            for (var n = 0, r = this.v.length; n < r; )
              ((t = e[n] * this.mult),
                xe(this.v[n] - t) > 1e-5 && ((this.v[n] = t), (this._mdf = !0)),
                (n += 1));
        }
        function Fe() {
          if (
            !(
              this.elem.globalData.frameId === this.frameId ||
              !this.effectsSequence.length
            )
          ) {
            if (this.lock) {
              this.setVValue(this.pv);
              return;
            }
            ((this.lock = !0), (this._mdf = this._isFirstFrame));
            var e,
              t = this.effectsSequence.length,
              n = this.kf ? this.pv : this.data.k;
            for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
            (this.setVValue(n),
              (this._isFirstFrame = !1),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId));
          }
        }
        function Oe(e) {
          (this.effectsSequence.push(e),
            this.container.addDynamicProperty(this));
        }
        function Be(e, t, n, r) {
          ((this.propType = "unidimensional"),
            (this.mult = n || 1),
            (this.data = t),
            (this.v = n ? t.k * n : t.k),
            (this.pv = t.k),
            (this._mdf = !1),
            (this.elem = e),
            (this.container = r),
            (this.comp = e.comp),
            (this.k = !1),
            (this.kf = !1),
            (this.vel = 0),
            (this.effectsSequence = []),
            (this._isFirstFrame = !0),
            (this.getValue = Fe),
            (this.setVValue = Ae),
            (this.addEffect = Oe));
        }
        function We(e, t, n, r) {
          ((this.propType = "multidimensional"),
            (this.mult = n || 1),
            (this.data = t),
            (this._mdf = !1),
            (this.elem = e),
            (this.container = r),
            (this.comp = e.comp),
            (this.k = !1),
            (this.kf = !1),
            (this.frameId = -1));
          var o,
            a = t.k.length;
          for (
            this.v = f("float32", a),
              this.pv = f("float32", a),
              this.vel = f("float32", a),
              o = 0;
            o < a;
            o += 1
          )
            ((this.v[o] = t.k[o] * this.mult), (this.pv[o] = t.k[o]));
          ((this._isFirstFrame = !0),
            (this.effectsSequence = []),
            (this.getValue = Fe),
            (this.setVValue = Ae),
            (this.addEffect = Oe));
        }
        function qe(e, t, n, r) {
          ((this.propType = "unidimensional"),
            (this.keyframes = t.k),
            (this.keyframesMetadata = []),
            (this.offsetTime = e.data.st),
            (this.frameId = -1),
            (this._caching = {
              lastFrame: De,
              lastIndex: 0,
              value: 0,
              _lastKeyframeIndex: -1,
            }),
            (this.k = !0),
            (this.kf = !0),
            (this.data = t),
            (this.mult = n || 1),
            (this.elem = e),
            (this.container = r),
            (this.comp = e.comp),
            (this.v = De),
            (this.pv = De),
            (this._isFirstFrame = !0),
            (this.getValue = Fe),
            (this.setVValue = Ae),
            (this.interpolateValue = $e),
            (this.effectsSequence = [we.bind(this)]),
            (this.addEffect = Oe));
        }
        function Ue(e, t, n, r) {
          this.propType = "multidimensional";
          var o,
            a = t.k.length,
            i,
            l,
            s,
            u;
          for (o = 0; o < a - 1; o += 1)
            t.k[o].to &&
              t.k[o].s &&
              t.k[o + 1] &&
              t.k[o + 1].s &&
              ((i = t.k[o].s),
              (l = t.k[o + 1].s),
              (s = t.k[o].to),
              (u = t.k[o].ti),
              ((i.length === 2 &&
                !(i[0] === l[0] && i[1] === l[1]) &&
                Te.pointOnLine2D(
                  i[0],
                  i[1],
                  l[0],
                  l[1],
                  i[0] + s[0],
                  i[1] + s[1],
                ) &&
                Te.pointOnLine2D(
                  i[0],
                  i[1],
                  l[0],
                  l[1],
                  l[0] + u[0],
                  l[1] + u[1],
                )) ||
                (i.length === 3 &&
                  !(i[0] === l[0] && i[1] === l[1] && i[2] === l[2]) &&
                  Te.pointOnLine3D(
                    i[0],
                    i[1],
                    i[2],
                    l[0],
                    l[1],
                    l[2],
                    i[0] + s[0],
                    i[1] + s[1],
                    i[2] + s[2],
                  ) &&
                  Te.pointOnLine3D(
                    i[0],
                    i[1],
                    i[2],
                    l[0],
                    l[1],
                    l[2],
                    l[0] + u[0],
                    l[1] + u[1],
                    l[2] + u[2],
                  ))) &&
                ((t.k[o].to = null), (t.k[o].ti = null)),
              i[0] === l[0] &&
                i[1] === l[1] &&
                s[0] === 0 &&
                s[1] === 0 &&
                u[0] === 0 &&
                u[1] === 0 &&
                (i.length === 2 ||
                  (i[2] === l[2] && s[2] === 0 && u[2] === 0)) &&
                ((t.k[o].to = null), (t.k[o].ti = null)));
          ((this.effectsSequence = [we.bind(this)]),
            (this.data = t),
            (this.keyframes = t.k),
            (this.keyframesMetadata = []),
            (this.offsetTime = e.data.st),
            (this.k = !0),
            (this.kf = !0),
            (this._isFirstFrame = !0),
            (this.mult = n || 1),
            (this.elem = e),
            (this.container = r),
            (this.comp = e.comp),
            (this.getValue = Fe),
            (this.setVValue = Ae),
            (this.interpolateValue = $e),
            (this.frameId = -1));
          var c = t.k[0].s.length;
          for (
            this.v = f("float32", c), this.pv = f("float32", c), o = 0;
            o < c;
            o += 1
          )
            ((this.v[o] = De), (this.pv[o] = De));
          ((this._caching = {
            lastFrame: De,
            lastIndex: 0,
            value: f("float32", c),
          }),
            (this.addEffect = Oe));
        }
        var Ve = (function () {
          function e(e, t, n, r, o) {
            t.sid && (t = e.globalData.slotManager.getProp(t));
            var a;
            if (!t.k.length) a = new Be(e, t, r, o);
            else if (typeof t.k[0] == "number") a = new We(e, t, r, o);
            else
              switch (n) {
                case 0:
                  a = new qe(e, t, r, o);
                  break;
                case 1:
                  a = new Ue(e, t, r, o);
                  break;
                default:
                  break;
              }
            return (a.effectsSequence.length && o.addDynamicProperty(a), a);
          }
          var t = { getProp: e };
          return t;
        })();
        function He() {}
        He.prototype = {
          addDynamicProperty: function (t) {
            this.dynamicProperties.indexOf(t) === -1 &&
              (this.dynamicProperties.push(t),
              this.container.addDynamicProperty(this),
              (this._isAnimated = !0));
          },
          iterateDynamicProperties: function () {
            this._mdf = !1;
            var e,
              t = this.dynamicProperties.length;
            for (e = 0; e < t; e += 1)
              (this.dynamicProperties[e].getValue(),
                this.dynamicProperties[e]._mdf && (this._mdf = !0));
          },
          initDynamicPropertyContainer: function (t) {
            ((this.container = t),
              (this.dynamicProperties = []),
              (this._mdf = !1),
              (this._isAnimated = !1));
          },
        };
        var Ge = (function () {
          function e() {
            return f("float32", 2);
          }
          return Le(8, e);
        })();
        function ze() {
          ((this.c = !1),
            (this._length = 0),
            (this._maxLength = 8),
            (this.v = g(this._maxLength)),
            (this.o = g(this._maxLength)),
            (this.i = g(this._maxLength)));
        }
        ((ze.prototype.setPathData = function (e, t) {
          ((this.c = e), this.setLength(t));
          for (var n = 0; n < t; )
            ((this.v[n] = Ge.newElement()),
              (this.o[n] = Ge.newElement()),
              (this.i[n] = Ge.newElement()),
              (n += 1));
        }),
          (ze.prototype.setLength = function (e) {
            for (; this._maxLength < e; ) this.doubleArrayLength();
            this._length = e;
          }),
          (ze.prototype.doubleArrayLength = function () {
            ((this.v = this.v.concat(g(this._maxLength))),
              (this.i = this.i.concat(g(this._maxLength))),
              (this.o = this.o.concat(g(this._maxLength))),
              (this._maxLength *= 2));
          }),
          (ze.prototype.setXYAt = function (e, t, n, r, o) {
            var a;
            switch (
              ((this._length = Math.max(this._length, r + 1)),
              this._length >= this._maxLength && this.doubleArrayLength(),
              n)
            ) {
              case "v":
                a = this.v;
                break;
              case "i":
                a = this.i;
                break;
              case "o":
                a = this.o;
                break;
              default:
                a = [];
                break;
            }
            ((!a[r] || (a[r] && !o)) && (a[r] = Ge.newElement()),
              (a[r][0] = e),
              (a[r][1] = t));
          }),
          (ze.prototype.setTripleAt = function (e, t, n, r, o, a, i, l) {
            (this.setXYAt(e, t, "v", i, l),
              this.setXYAt(n, r, "o", i, l),
              this.setXYAt(o, a, "i", i, l));
          }),
          (ze.prototype.reverse = function () {
            var e = new ze();
            e.setPathData(this.c, this._length);
            var t = this.v,
              n = this.o,
              r = this.i,
              o = 0;
            this.c &&
              (e.setTripleAt(
                t[0][0],
                t[0][1],
                r[0][0],
                r[0][1],
                n[0][0],
                n[0][1],
                0,
                !1,
              ),
              (o = 1));
            var a = this._length - 1,
              i = this._length,
              l;
            for (l = o; l < i; l += 1)
              (e.setTripleAt(
                t[a][0],
                t[a][1],
                r[a][0],
                r[a][1],
                n[a][0],
                n[a][1],
                l,
                !1,
              ),
                (a -= 1));
            return e;
          }),
          (ze.prototype.length = function () {
            return this._length;
          }));
        var je = (function () {
          function e() {
            return new ze();
          }
          function t(e) {
            var t = e._length,
              n;
            for (n = 0; n < t; n += 1)
              (Ge.release(e.v[n]),
                Ge.release(e.i[n]),
                Ge.release(e.o[n]),
                (e.v[n] = null),
                (e.i[n] = null),
                (e.o[n] = null));
            ((e._length = 0), (e.c = !1));
          }
          function n(e) {
            var t = r.newElement(),
              n,
              o = e._length === void 0 ? e.v.length : e._length;
            for (t.setLength(o), t.c = e.c, n = 0; n < o; n += 1)
              t.setTripleAt(
                e.v[n][0],
                e.v[n][1],
                e.o[n][0],
                e.o[n][1],
                e.i[n][0],
                e.i[n][1],
                n,
              );
            return t;
          }
          var r = Le(4, e, t);
          return ((r.clone = n), r);
        })();
        function Ke() {
          ((this._length = 0),
            (this._maxLength = 4),
            (this.shapes = g(this._maxLength)));
        }
        ((Ke.prototype.addShape = function (e) {
          (this._length === this._maxLength &&
            ((this.shapes = this.shapes.concat(g(this._maxLength))),
            (this._maxLength *= 2)),
            (this.shapes[this._length] = e),
            (this._length += 1));
        }),
          (Ke.prototype.releaseShapes = function () {
            var e;
            for (e = 0; e < this._length; e += 1) je.release(this.shapes[e]);
            this._length = 0;
          }));
        var Qe = (function () {
            var e = { newShapeCollection: o, release: a },
              t = 0,
              n = 4,
              r = g(n);
            function o() {
              var e;
              return (t ? ((t -= 1), (e = r[t])) : (e = new Ke()), e);
            }
            function a(e) {
              var o,
                a = e._length;
              for (o = 0; o < a; o += 1) je.release(e.shapes[o]);
              ((e._length = 0),
                t === n && ((r = Re.double(r)), (n *= 2)),
                (r[t] = e),
                (t += 1));
            }
            return e;
          })(),
          Xe = (function () {
            var e = -999999;
            function t(e, t, n) {
              var r = n.lastIndex,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p = this.keyframes;
              if (e < p[0].t - this.offsetTime)
                ((o = p[0].s[0]), (i = !0), (r = 0));
              else if (e >= p[p.length - 1].t - this.offsetTime)
                ((o = p[p.length - 1].s
                  ? p[p.length - 1].s[0]
                  : p[p.length - 2].e[0]),
                  (i = !0));
              else {
                for (
                  var _ = r, f = p.length - 1, g = !0, h, y, C;
                  g &&
                  ((h = p[_]), (y = p[_ + 1]), !(y.t - this.offsetTime > e));
                )
                  _ < f - 1 ? (_ += 1) : (g = !1);
                if (
                  ((C = this.keyframesMetadata[_] || {}),
                  (i = h.h === 1),
                  (r = _),
                  !i)
                ) {
                  if (e >= y.t - this.offsetTime) d = 1;
                  else if (e < h.t - this.offsetTime) d = 0;
                  else {
                    var b;
                    (C.__fnct
                      ? (b = C.__fnct)
                      : ((b = Se.getBezierEasing(
                          h.o.x,
                          h.o.y,
                          h.i.x,
                          h.i.y,
                        ).get),
                        (C.__fnct = b)),
                      (d = b(
                        (e - (h.t - this.offsetTime)) /
                          (y.t - this.offsetTime - (h.t - this.offsetTime)),
                      )));
                  }
                  a = y.s ? y.s[0] : h.e[0];
                }
                o = h.s[0];
              }
              for (
                u = t._length, c = o.i[0].length, n.lastIndex = r, l = 0;
                l < u;
                l += 1
              )
                for (s = 0; s < c; s += 1)
                  ((m = i
                    ? o.i[l][s]
                    : o.i[l][s] + (a.i[l][s] - o.i[l][s]) * d),
                    (t.i[l][s] = m),
                    (m = i
                      ? o.o[l][s]
                      : o.o[l][s] + (a.o[l][s] - o.o[l][s]) * d),
                    (t.o[l][s] = m),
                    (m = i
                      ? o.v[l][s]
                      : o.v[l][s] + (a.v[l][s] - o.v[l][s]) * d),
                    (t.v[l][s] = m));
            }
            function n() {
              var t = this.comp.renderedFrame - this.offsetTime,
                n = this.keyframes[0].t - this.offsetTime,
                r =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                o = this._caching.lastFrame;
              return (
                (o !== e && ((o < n && t < n) || (o > r && t > r))) ||
                  ((this._caching.lastIndex =
                    o < t ? this._caching.lastIndex : 0),
                  this.interpolateShape(t, this.pv, this._caching)),
                (this._caching.lastFrame = t),
                this.pv
              );
            }
            function r() {
              this.paths = this.localShapeCollection;
            }
            function o(e, t) {
              if (e._length !== t._length || e.c !== t.c) return !1;
              var n,
                r = e._length;
              for (n = 0; n < r; n += 1)
                if (
                  e.v[n][0] !== t.v[n][0] ||
                  e.v[n][1] !== t.v[n][1] ||
                  e.o[n][0] !== t.o[n][0] ||
                  e.o[n][1] !== t.o[n][1] ||
                  e.i[n][0] !== t.i[n][0] ||
                  e.i[n][1] !== t.i[n][1]
                )
                  return !1;
              return !0;
            }
            function a(e) {
              o(this.v, e) ||
                ((this.v = je.clone(e)),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                (this._mdf = !0),
                (this.paths = this.localShapeCollection));
            }
            function i() {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (!this.effectsSequence.length) {
                  this._mdf = !1;
                  return;
                }
                if (this.lock) {
                  this.setVValue(this.pv);
                  return;
                }
                ((this.lock = !0), (this._mdf = !1));
                var e;
                this.kf
                  ? (e = this.pv)
                  : this.data.ks
                    ? (e = this.data.ks.k)
                    : (e = this.data.pt.k);
                var t,
                  n = this.effectsSequence.length;
                for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
                (this.setVValue(e),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId));
              }
            }
            function l(e, t, n) {
              ((this.propType = "shape"),
                (this.comp = e.comp),
                (this.container = e),
                (this.elem = e),
                (this.data = t),
                (this.k = !1),
                (this.kf = !1),
                (this._mdf = !1));
              var o = n === 3 ? t.pt.k : t.ks.k;
              ((this.v = je.clone(o)),
                (this.pv = je.clone(this.v)),
                (this.localShapeCollection = Qe.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.reset = r),
                (this.effectsSequence = []));
            }
            function s(e) {
              (this.effectsSequence.push(e),
                this.container.addDynamicProperty(this));
            }
            ((l.prototype.interpolateShape = t),
              (l.prototype.getValue = i),
              (l.prototype.setVValue = a),
              (l.prototype.addEffect = s));
            function u(t, o, a) {
              ((this.propType = "shape"),
                (this.comp = t.comp),
                (this.elem = t),
                (this.container = t),
                (this.offsetTime = t.data.st),
                (this.keyframes = a === 3 ? o.pt.k : o.ks.k),
                (this.keyframesMetadata = []),
                (this.k = !0),
                (this.kf = !0));
              var i = this.keyframes[0].s[0].i.length;
              ((this.v = je.newElement()),
                this.v.setPathData(this.keyframes[0].s[0].c, i),
                (this.pv = je.clone(this.v)),
                (this.localShapeCollection = Qe.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.lastFrame = e),
                (this.reset = r),
                (this._caching = { lastFrame: e, lastIndex: 0 }),
                (this.effectsSequence = [n.bind(this)]));
            }
            ((u.prototype.getValue = i),
              (u.prototype.interpolateShape = t),
              (u.prototype.setVValue = a),
              (u.prototype.addEffect = s));
            var c = (function () {
                var e = N;
                function t(e, t) {
                  ((this.v = je.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection = Qe.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = t.d),
                    (this.elem = e),
                    (this.comp = e.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(e),
                    (this.p = Ve.getProp(e, t.p, 1, 0, this)),
                    (this.s = Ve.getProp(e, t.s, 1, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertEllToPath()));
                }
                return (
                  (t.prototype = {
                    reset: r,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var t = this.p.v[0],
                        n = this.p.v[1],
                        r = this.s.v[0] / 2,
                        o = this.s.v[1] / 2,
                        a = this.d !== 3,
                        i = this.v;
                      ((i.v[0][0] = t),
                        (i.v[0][1] = n - o),
                        (i.v[1][0] = a ? t + r : t - r),
                        (i.v[1][1] = n),
                        (i.v[2][0] = t),
                        (i.v[2][1] = n + o),
                        (i.v[3][0] = a ? t - r : t + r),
                        (i.v[3][1] = n),
                        (i.i[0][0] = a ? t - r * e : t + r * e),
                        (i.i[0][1] = n - o),
                        (i.i[1][0] = a ? t + r : t - r),
                        (i.i[1][1] = n - o * e),
                        (i.i[2][0] = a ? t + r * e : t - r * e),
                        (i.i[2][1] = n + o),
                        (i.i[3][0] = a ? t - r : t + r),
                        (i.i[3][1] = n + o * e),
                        (i.o[0][0] = a ? t + r * e : t - r * e),
                        (i.o[0][1] = n - o),
                        (i.o[1][0] = a ? t + r : t - r),
                        (i.o[1][1] = n + o * e),
                        (i.o[2][0] = a ? t - r * e : t + r * e),
                        (i.o[2][1] = n + o),
                        (i.o[3][0] = a ? t - r : t + r),
                        (i.o[3][1] = n - o * e));
                    },
                  }),
                  d([He], t),
                  t
                );
              })(),
              m = (function () {
                function e(e, t) {
                  ((this.v = je.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = e),
                    (this.comp = e.comp),
                    (this.data = t),
                    (this.frameId = -1),
                    (this.d = t.d),
                    this.initDynamicPropertyContainer(e),
                    t.sy === 1
                      ? ((this.ir = Ve.getProp(e, t.ir, 0, 0, this)),
                        (this.is = Ve.getProp(e, t.is, 0, 0.01, this)),
                        (this.convertToPath = this.convertStarToPath))
                      : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = Ve.getProp(e, t.pt, 0, 0, this)),
                    (this.p = Ve.getProp(e, t.p, 1, 0, this)),
                    (this.r = Ve.getProp(e, t.r, 0, P, this)),
                    (this.or = Ve.getProp(e, t.or, 0, 0, this)),
                    (this.os = Ve.getProp(e, t.os, 0, 0.01, this)),
                    (this.localShapeCollection = Qe.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertToPath()));
                }
                return (
                  (e.prototype = {
                    reset: r,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var e = Math.floor(this.pt.v) * 2,
                        t = (Math.PI * 2) / e,
                        n = !0,
                        r = this.or.v,
                        o = this.ir.v,
                        a = this.os.v,
                        i = this.is.v,
                        l = (2 * Math.PI * r) / (e * 2),
                        s = (2 * Math.PI * o) / (e * 2),
                        u,
                        c,
                        d,
                        m,
                        p = -Math.PI / 2;
                      p += this.r.v;
                      var _ = this.data.d === 3 ? -1 : 1;
                      for (this.v._length = 0, u = 0; u < e; u += 1) {
                        ((c = n ? r : o), (d = n ? a : i), (m = n ? l : s));
                        var f = c * Math.cos(p),
                          g = c * Math.sin(p),
                          h =
                            f === 0 && g === 0
                              ? 0
                              : g / Math.sqrt(f * f + g * g),
                          y =
                            f === 0 && g === 0
                              ? 0
                              : -f / Math.sqrt(f * f + g * g);
                        ((f += +this.p.v[0]),
                          (g += +this.p.v[1]),
                          this.v.setTripleAt(
                            f,
                            g,
                            f - h * m * d * _,
                            g - y * m * d * _,
                            f + h * m * d * _,
                            g + y * m * d * _,
                            u,
                            !0,
                          ),
                          (n = !n),
                          (p += t * _));
                      }
                    },
                    convertPolygonToPath: function () {
                      var e = Math.floor(this.pt.v),
                        t = (Math.PI * 2) / e,
                        n = this.or.v,
                        r = this.os.v,
                        o = (2 * Math.PI * n) / (e * 4),
                        a,
                        i = -Math.PI * 0.5,
                        l = this.data.d === 3 ? -1 : 1;
                      for (
                        i += this.r.v, this.v._length = 0, a = 0;
                        a < e;
                        a += 1
                      ) {
                        var s = n * Math.cos(i),
                          u = n * Math.sin(i),
                          c =
                            s === 0 && u === 0
                              ? 0
                              : u / Math.sqrt(s * s + u * u),
                          d =
                            s === 0 && u === 0
                              ? 0
                              : -s / Math.sqrt(s * s + u * u);
                        ((s += +this.p.v[0]),
                          (u += +this.p.v[1]),
                          this.v.setTripleAt(
                            s,
                            u,
                            s - c * o * r * l,
                            u - d * o * r * l,
                            s + c * o * r * l,
                            u + d * o * r * l,
                            a,
                            !0,
                          ),
                          (i += t * l));
                      }
                      ((this.paths.length = 0), (this.paths[0] = this.v));
                    },
                  }),
                  d([He], e),
                  e
                );
              })(),
              p = (function () {
                function e(e, t) {
                  ((this.v = je.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection = Qe.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = e),
                    (this.comp = e.comp),
                    (this.frameId = -1),
                    (this.d = t.d),
                    this.initDynamicPropertyContainer(e),
                    (this.p = Ve.getProp(e, t.p, 1, 0, this)),
                    (this.s = Ve.getProp(e, t.s, 1, 0, this)),
                    (this.r = Ve.getProp(e, t.r, 0, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertRectToPath()));
                }
                return (
                  (e.prototype = {
                    convertRectToPath: function () {
                      var e = this.p.v[0],
                        t = this.p.v[1],
                        n = this.s.v[0] / 2,
                        r = this.s.v[1] / 2,
                        o = T(n, r, this.r.v),
                        a = o * (1 - N);
                      ((this.v._length = 0),
                        this.d === 2 || this.d === 1
                          ? (this.v.setTripleAt(
                              e + n,
                              t - r + o,
                              e + n,
                              t - r + o,
                              e + n,
                              t - r + a,
                              0,
                              !0,
                            ),
                            this.v.setTripleAt(
                              e + n,
                              t + r - o,
                              e + n,
                              t + r - a,
                              e + n,
                              t + r - o,
                              1,
                              !0,
                            ),
                            o !== 0
                              ? (this.v.setTripleAt(
                                  e + n - o,
                                  t + r,
                                  e + n - o,
                                  t + r,
                                  e + n - a,
                                  t + r,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n + o,
                                  t + r,
                                  e - n + a,
                                  t + r,
                                  e - n + o,
                                  t + r,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t + r - o,
                                  e - n,
                                  t + r - o,
                                  e - n,
                                  t + r - a,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t - r + o,
                                  e - n,
                                  t - r + a,
                                  e - n,
                                  t - r + o,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n + o,
                                  t - r,
                                  e - n + o,
                                  t - r,
                                  e - n + a,
                                  t - r,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e + n - o,
                                  t - r,
                                  e + n - a,
                                  t - r,
                                  e + n - o,
                                  t - r,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  e - n,
                                  t + r,
                                  e - n + a,
                                  t + r,
                                  e - n,
                                  t + r,
                                  2,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t - r,
                                  e - n,
                                  t - r + a,
                                  e - n,
                                  t - r,
                                  3,
                                )))
                          : (this.v.setTripleAt(
                              e + n,
                              t - r + o,
                              e + n,
                              t - r + a,
                              e + n,
                              t - r + o,
                              0,
                              !0,
                            ),
                            o !== 0
                              ? (this.v.setTripleAt(
                                  e + n - o,
                                  t - r,
                                  e + n - o,
                                  t - r,
                                  e + n - a,
                                  t - r,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n + o,
                                  t - r,
                                  e - n + a,
                                  t - r,
                                  e - n + o,
                                  t - r,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t - r + o,
                                  e - n,
                                  t - r + o,
                                  e - n,
                                  t - r + a,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t + r - o,
                                  e - n,
                                  t + r - a,
                                  e - n,
                                  t + r - o,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n + o,
                                  t + r,
                                  e - n + o,
                                  t + r,
                                  e - n + a,
                                  t + r,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e + n - o,
                                  t + r,
                                  e + n - a,
                                  t + r,
                                  e + n - o,
                                  t + r,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e + n,
                                  t + r - o,
                                  e + n,
                                  t + r - o,
                                  e + n,
                                  t + r - a,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  e - n,
                                  t - r,
                                  e - n + a,
                                  t - r,
                                  e - n,
                                  t - r,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e - n,
                                  t + r,
                                  e - n,
                                  t + r - a,
                                  e - n,
                                  t + r,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  e + n,
                                  t + r,
                                  e + n - a,
                                  t + r,
                                  e + n,
                                  t + r,
                                  3,
                                  !0,
                                ))));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: r,
                  }),
                  d([He], e),
                  e
                );
              })();
            function _(e, t, n) {
              var r;
              if (n === 3 || n === 4) {
                var o = n === 3 ? t.pt : t.ks,
                  a = o.k;
                a.length ? (r = new u(e, t, n)) : (r = new l(e, t, n));
              } else
                n === 5
                  ? (r = new p(e, t))
                  : n === 6
                    ? (r = new c(e, t))
                    : n === 7 && (r = new m(e, t));
              return (r.k && e.addDynamicProperty(r), r);
            }
            function f() {
              return l;
            }
            function g() {
              return u;
            }
            var h = {};
            return (
              (h.getShapeProp = _),
              (h.getConstructorFunction = f),
              (h.getKeyframedConstructorFunction = g),
              h
            );
          })();
        var Ye = (function () {
          var e = Math.cos,
            t = Math.sin,
            n = Math.tan,
            r = Math.round;
          function o() {
            return (
              (this.props[0] = 1),
              (this.props[1] = 0),
              (this.props[2] = 0),
              (this.props[3] = 0),
              (this.props[4] = 0),
              (this.props[5] = 1),
              (this.props[6] = 0),
              (this.props[7] = 0),
              (this.props[8] = 0),
              (this.props[9] = 0),
              (this.props[10] = 1),
              (this.props[11] = 0),
              (this.props[12] = 0),
              (this.props[13] = 0),
              (this.props[14] = 0),
              (this.props[15] = 1),
              this
            );
          }
          function a(n) {
            if (n === 0) return this;
            var r = e(n),
              o = t(n);
            return this._t(r, -o, 0, 0, o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function i(n) {
            if (n === 0) return this;
            var r = e(n),
              o = t(n);
            return this._t(1, 0, 0, 0, 0, r, -o, 0, 0, o, r, 0, 0, 0, 0, 1);
          }
          function l(n) {
            if (n === 0) return this;
            var r = e(n),
              o = t(n);
            return this._t(r, 0, o, 0, 0, 1, 0, 0, -o, 0, r, 0, 0, 0, 0, 1);
          }
          function s(n) {
            if (n === 0) return this;
            var r = e(n),
              o = t(n);
            return this._t(r, -o, 0, 0, o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function u(e, t) {
            return this._t(1, t, e, 1, 0, 0);
          }
          function c(e, t) {
            return this.shear(n(e), n(t));
          }
          function d(r, o) {
            var a = e(o),
              i = t(o);
            return this._t(a, i, 0, 0, -i, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(a, -i, 0, 0, i, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function m(e, t, n) {
            return (
              !n && n !== 0 && (n = 1),
              e === 1 && t === 1 && n === 1
                ? this
                : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
            );
          }
          function p(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            return (
              (this.props[0] = e),
              (this.props[1] = t),
              (this.props[2] = n),
              (this.props[3] = r),
              (this.props[4] = o),
              (this.props[5] = a),
              (this.props[6] = i),
              (this.props[7] = l),
              (this.props[8] = s),
              (this.props[9] = u),
              (this.props[10] = c),
              (this.props[11] = d),
              (this.props[12] = m),
              (this.props[13] = p),
              (this.props[14] = _),
              (this.props[15] = f),
              this
            );
          }
          function _(e, t, n) {
            return (
              (n = n || 0),
              e !== 0 || t !== 0 || n !== 0
                ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1)
                : this
            );
          }
          function g(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
            var g = this.props;
            if (
              e === 1 &&
              t === 0 &&
              n === 0 &&
              r === 0 &&
              o === 0 &&
              a === 1 &&
              i === 0 &&
              l === 0 &&
              s === 0 &&
              u === 0 &&
              c === 1 &&
              d === 0
            )
              return (
                (g[12] = g[12] * e + g[15] * m),
                (g[13] = g[13] * a + g[15] * p),
                (g[14] = g[14] * c + g[15] * _),
                (g[15] *= f),
                (this._identityCalculated = !1),
                this
              );
            var h = g[0],
              y = g[1],
              C = g[2],
              b = g[3],
              v = g[4],
              S = g[5],
              R = g[6],
              L = g[7],
              E = g[8],
              k = g[9],
              I = g[10],
              T = g[11],
              D = g[12],
              x = g[13],
              $ = g[14],
              P = g[15];
            return (
              (g[0] = h * e + y * o + C * s + b * m),
              (g[1] = h * t + y * a + C * u + b * p),
              (g[2] = h * n + y * i + C * c + b * _),
              (g[3] = h * r + y * l + C * d + b * f),
              (g[4] = v * e + S * o + R * s + L * m),
              (g[5] = v * t + S * a + R * u + L * p),
              (g[6] = v * n + S * i + R * c + L * _),
              (g[7] = v * r + S * l + R * d + L * f),
              (g[8] = E * e + k * o + I * s + T * m),
              (g[9] = E * t + k * a + I * u + T * p),
              (g[10] = E * n + k * i + I * c + T * _),
              (g[11] = E * r + k * l + I * d + T * f),
              (g[12] = D * e + x * o + $ * s + P * m),
              (g[13] = D * t + x * a + $ * u + P * p),
              (g[14] = D * n + x * i + $ * c + P * _),
              (g[15] = D * r + x * l + $ * d + P * f),
              (this._identityCalculated = !1),
              this
            );
          }
          function h(e) {
            var t = e.props;
            return this.transform(
              t[0],
              t[1],
              t[2],
              t[3],
              t[4],
              t[5],
              t[6],
              t[7],
              t[8],
              t[9],
              t[10],
              t[11],
              t[12],
              t[13],
              t[14],
              t[15],
            );
          }
          function y() {
            return (
              this._identityCalculated ||
                ((this._identity = !(
                  this.props[0] !== 1 ||
                  this.props[1] !== 0 ||
                  this.props[2] !== 0 ||
                  this.props[3] !== 0 ||
                  this.props[4] !== 0 ||
                  this.props[5] !== 1 ||
                  this.props[6] !== 0 ||
                  this.props[7] !== 0 ||
                  this.props[8] !== 0 ||
                  this.props[9] !== 0 ||
                  this.props[10] !== 1 ||
                  this.props[11] !== 0 ||
                  this.props[12] !== 0 ||
                  this.props[13] !== 0 ||
                  this.props[14] !== 0 ||
                  this.props[15] !== 1
                )),
                (this._identityCalculated = !0)),
              this._identity
            );
          }
          function C(e) {
            for (var t = 0; t < 16; ) {
              if (e.props[t] !== this.props[t]) return !1;
              t += 1;
            }
            return !0;
          }
          function b(e) {
            var t;
            for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
            return e;
          }
          function v(e) {
            var t;
            for (t = 0; t < 16; t += 1) this.props[t] = e[t];
          }
          function S(e, t, n) {
            return {
              x:
                e * this.props[0] +
                t * this.props[4] +
                n * this.props[8] +
                this.props[12],
              y:
                e * this.props[1] +
                t * this.props[5] +
                n * this.props[9] +
                this.props[13],
              z:
                e * this.props[2] +
                t * this.props[6] +
                n * this.props[10] +
                this.props[14],
            };
          }
          function R(e, t, n) {
            return (
              e * this.props[0] +
              t * this.props[4] +
              n * this.props[8] +
              this.props[12]
            );
          }
          function L(e, t, n) {
            return (
              e * this.props[1] +
              t * this.props[5] +
              n * this.props[9] +
              this.props[13]
            );
          }
          function E(e, t, n) {
            return (
              e * this.props[2] +
              t * this.props[6] +
              n * this.props[10] +
              this.props[14]
            );
          }
          function k() {
            var e =
                this.props[0] * this.props[5] - this.props[1] * this.props[4],
              t = this.props[5] / e,
              n = -this.props[1] / e,
              r = -this.props[4] / e,
              o = this.props[0] / e,
              a =
                (this.props[4] * this.props[13] -
                  this.props[5] * this.props[12]) /
                e,
              i =
                -(
                  this.props[0] * this.props[13] -
                  this.props[1] * this.props[12]
                ) / e,
              l = new Ye();
            return (
              (l.props[0] = t),
              (l.props[1] = n),
              (l.props[4] = r),
              (l.props[5] = o),
              (l.props[12] = a),
              (l.props[13] = i),
              l
            );
          }
          function I(e) {
            var t = this.getInverseMatrix();
            return t.applyToPointArray(e[0], e[1], e[2] || 0);
          }
          function T(e) {
            var t,
              n = e.length,
              r = [];
            for (t = 0; t < n; t += 1) r[t] = I(e[t]);
            return r;
          }
          function D(e, t, n) {
            var r = f("float32", 6);
            if (this.isIdentity())
              ((r[0] = e[0]),
                (r[1] = e[1]),
                (r[2] = t[0]),
                (r[3] = t[1]),
                (r[4] = n[0]),
                (r[5] = n[1]));
            else {
              var o = this.props[0],
                a = this.props[1],
                i = this.props[4],
                l = this.props[5],
                s = this.props[12],
                u = this.props[13];
              ((r[0] = e[0] * o + e[1] * i + s),
                (r[1] = e[0] * a + e[1] * l + u),
                (r[2] = t[0] * o + t[1] * i + s),
                (r[3] = t[0] * a + t[1] * l + u),
                (r[4] = n[0] * o + n[1] * i + s),
                (r[5] = n[0] * a + n[1] * l + u));
            }
            return r;
          }
          function x(e, t, n) {
            var r;
            return (
              this.isIdentity()
                ? (r = [e, t, n])
                : (r = [
                    e * this.props[0] +
                      t * this.props[4] +
                      n * this.props[8] +
                      this.props[12],
                    e * this.props[1] +
                      t * this.props[5] +
                      n * this.props[9] +
                      this.props[13],
                    e * this.props[2] +
                      t * this.props[6] +
                      n * this.props[10] +
                      this.props[14],
                  ]),
              r
            );
          }
          function $(e, t) {
            if (this.isIdentity()) return e + "," + t;
            var n = this.props;
            return (
              Math.round((e * n[0] + t * n[4] + n[12]) * 100) / 100 +
              "," +
              Math.round((e * n[1] + t * n[5] + n[13]) * 100) / 100
            );
          }
          function P() {
            for (var e = 0, t = this.props, n = "matrix3d(", o = 1e4; e < 16; )
              ((n += r(t[e] * o) / o), (n += e === 15 ? ")" : ","), (e += 1));
            return n;
          }
          function N(e) {
            var t = 1e4;
            return (e < 1e-6 && e > 0) || (e > -1e-6 && e < 0)
              ? r(e * t) / t
              : e;
          }
          function M() {
            var e = this.props,
              t = N(e[0]),
              n = N(e[1]),
              r = N(e[4]),
              o = N(e[5]),
              a = N(e[12]),
              i = N(e[13]);
            return (
              "matrix(" +
              t +
              "," +
              n +
              "," +
              r +
              "," +
              o +
              "," +
              a +
              "," +
              i +
              ")"
            );
          }
          return function () {
            ((this.reset = o),
              (this.rotate = a),
              (this.rotateX = i),
              (this.rotateY = l),
              (this.rotateZ = s),
              (this.skew = c),
              (this.skewFromAxis = d),
              (this.shear = u),
              (this.scale = m),
              (this.setTransform = p),
              (this.translate = _),
              (this.transform = g),
              (this.multiply = h),
              (this.applyToPoint = S),
              (this.applyToX = R),
              (this.applyToY = L),
              (this.applyToZ = E),
              (this.applyToPointArray = x),
              (this.applyToTriplePoints = D),
              (this.applyToPointStringified = $),
              (this.toCSS = P),
              (this.to2dCSS = M),
              (this.clone = b),
              (this.cloneFromProps = v),
              (this.equals = C),
              (this.inversePoints = T),
              (this.inversePoint = I),
              (this.getInverseMatrix = k),
              (this._t = this.transform),
              (this.isIdentity = y),
              (this._identity = !0),
              (this._identityCalculated = !1),
              (this.props = f("float32", 16)),
              this.reset());
          };
        })();
        function Je(e) {
          "@babel/helpers - typeof";
          return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? (Je = function (t) {
                  return typeof t;
                })
              : (Je = function (t) {
                  return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
            Je(e)
          );
        }
        var Ze = {},
          et = "__[STANDALONE]__",
          tt = "__[ANIMATIONDATA]__",
          nt = "";
        function rt(e) {
          s(e);
        }
        function ot() {
          et === !0 ? ve.searchAnimations(tt, et, nt) : ve.searchAnimations();
        }
        function at(e) {
          J(e);
        }
        function it(e) {
          ie(e);
        }
        function lt(e) {
          return (
            et === !0 && (e.animationData = JSON.parse(tt)),
            ve.loadAnimation(e)
          );
        }
        function st(e) {
          if (typeof e == "string")
            switch (e) {
              case "high":
                oe(200);
                break;
              default:
              case "medium":
                oe(50);
                break;
              case "low":
                oe(10);
                break;
            }
          else !isNaN(e) && e > 1 && oe(e);
          ae() >= 50 ? M(!1) : M(!0);
        }
        function ut() {
          return typeof navigator != "undefined";
        }
        function ct(e, t) {
          e === "expressions" && ee(t);
        }
        function dt(e) {
          switch (e) {
            case "propertyFactory":
              return Ve;
            case "shapePropertyFactory":
              return Xe;
            case "matrix":
              return Ye;
            default:
              return null;
          }
        }
        ((Ze.play = ve.play),
          (Ze.pause = ve.pause),
          (Ze.setLocationHref = rt),
          (Ze.togglePause = ve.togglePause),
          (Ze.setSpeed = ve.setSpeed),
          (Ze.setDirection = ve.setDirection),
          (Ze.stop = ve.stop),
          (Ze.searchAnimations = ot),
          (Ze.registerAnimation = ve.registerAnimation),
          (Ze.loadAnimation = lt),
          (Ze.setSubframeRendering = at),
          (Ze.resize = ve.resize),
          (Ze.goToAndStop = ve.goToAndStop),
          (Ze.destroy = ve.destroy),
          (Ze.setQuality = st),
          (Ze.inBrowser = ut),
          (Ze.installPlugin = ct),
          (Ze.freeze = ve.freeze),
          (Ze.unfreeze = ve.unfreeze),
          (Ze.setVolume = ve.setVolume),
          (Ze.mute = ve.mute),
          (Ze.unmute = ve.unmute),
          (Ze.getRegisteredAnimations = ve.getRegisteredAnimations),
          (Ze.useWebWorker = o),
          (Ze.setIDPrefix = it),
          (Ze.__getFactory = dt),
          (Ze.version = "5.12.2"));
        function mt() {
          document.readyState === "complete" && (clearInterval(yt), ot());
        }
        function pt(e) {
          for (var t = _t.split("&"), n = 0; n < t.length; n += 1) {
            var r = t[n].split("=");
            if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1]);
          }
          return null;
        }
        var _t = "";
        if (et) {
          var ft = document.getElementsByTagName("script"),
            gt = ft.length - 1,
            ht = ft[gt] || { src: "" };
          ((_t = ht.src ? ht.src.replace(/^[^\?]+\??/, "") : ""),
            (nt = pt("renderer")));
        }
        var yt = setInterval(mt, 100);
        try {
          !(
            (typeof i == "undefined" ? "undefined" : Je(i)) === "object" &&
            typeof a != "undefined"
          ) &&
            !(typeof define == "function" && define.amd) &&
            (window.bodymovin = Ze);
        } catch (e) {}
        var Ct = (function () {
          var e = {},
            t = {};
          ((e.registerModifier = n), (e.getModifier = r));
          function n(e, n) {
            t[e] || (t[e] = n);
          }
          function r(e, n, r) {
            return new t[e](n, r);
          }
          return e;
        })();
        function bt() {}
        ((bt.prototype.initModifierProperties = function () {}),
          (bt.prototype.addShapeToModifier = function () {}),
          (bt.prototype.addShape = function (e) {
            if (!this.closed) {
              e.sh.container.addDynamicProperty(e.sh);
              var t = {
                shape: e.sh,
                data: e,
                localShapeCollection: Qe.newShapeCollection(),
              };
              (this.shapes.push(t),
                this.addShapeToModifier(t),
                this._isAnimated && e.setAsAnimated());
            }
          }),
          (bt.prototype.init = function (e, t) {
            ((this.shapes = []),
              (this.elem = e),
              this.initDynamicPropertyContainer(e),
              this.initModifierProperties(e, t),
              (this.frameId = r),
              (this.closed = !1),
              (this.k = !1),
              this.dynamicProperties.length
                ? (this.k = !0)
                : this.getValue(!0));
          }),
          (bt.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          d([He], bt));
        function vt() {}
        (d([bt], vt),
          (vt.prototype.initModifierProperties = function (e, t) {
            ((this.s = Ve.getProp(e, t.s, 0, 0.01, this)),
              (this.e = Ve.getProp(e, t.e, 0, 0.01, this)),
              (this.o = Ve.getProp(e, t.o, 0, 0, this)),
              (this.sValue = 0),
              (this.eValue = 0),
              (this.getValue = this.processKeys),
              (this.m = t.m),
              (this._isAnimated =
                !!this.s.effectsSequence.length ||
                !!this.e.effectsSequence.length ||
                !!this.o.effectsSequence.length));
          }),
          (vt.prototype.addShapeToModifier = function (e) {
            e.pathsData = [];
          }),
          (vt.prototype.calculateShapeEdges = function (e, t, n, r, o) {
            var a = [];
            t <= 1
              ? a.push({ s: e, e: t })
              : e >= 1
                ? a.push({ s: e - 1, e: t - 1 })
                : (a.push({ s: e, e: 1 }), a.push({ s: 0, e: t - 1 }));
            var i = [],
              l,
              s = a.length,
              u;
            for (l = 0; l < s; l += 1)
              if (((u = a[l]), !(u.e * o < r || u.s * o > r + n))) {
                var c, d;
                (u.s * o <= r ? (c = 0) : (c = (u.s * o - r) / n),
                  u.e * o >= r + n ? (d = 1) : (d = (u.e * o - r) / n),
                  i.push([c, d]));
              }
            return (i.length || i.push([0, 0]), i);
          }),
          (vt.prototype.releasePathsData = function (e) {
            var t,
              n = e.length;
            for (t = 0; t < n; t += 1) ke.release(e[t]);
            return ((e.length = 0), e);
          }),
          (vt.prototype.processShapes = function (e) {
            var t, n;
            if (this._mdf || e) {
              var r = (this.o.v % 360) / 360;
              if (
                (r < 0 && (r += 1),
                this.s.v > 1
                  ? (t = 1 + r)
                  : this.s.v < 0
                    ? (t = 0 + r)
                    : (t = this.s.v + r),
                this.e.v > 1
                  ? (n = 1 + r)
                  : this.e.v < 0
                    ? (n = 0 + r)
                    : (n = this.e.v + r),
                t > n)
              ) {
                var o = t;
                ((t = n), (n = o));
              }
              ((t = Math.round(t * 1e4) * 1e-4),
                (n = Math.round(n * 1e4) * 1e-4),
                (this.sValue = t),
                (this.eValue = n));
            } else ((t = this.sValue), (n = this.eValue));
            var a,
              i,
              l = this.shapes.length,
              s,
              u,
              c,
              d,
              m,
              p = 0;
            if (n === t)
              for (i = 0; i < l; i += 1)
                (this.shapes[i].localShapeCollection.releaseShapes(),
                  (this.shapes[i].shape._mdf = !0),
                  (this.shapes[i].shape.paths =
                    this.shapes[i].localShapeCollection),
                  this._mdf && (this.shapes[i].pathsData.length = 0));
            else if ((n === 1 && t === 0) || (n === 0 && t === 1)) {
              if (this._mdf)
                for (i = 0; i < l; i += 1)
                  ((this.shapes[i].pathsData.length = 0),
                    (this.shapes[i].shape._mdf = !0));
            } else {
              var _ = [],
                f,
                g;
              for (i = 0; i < l; i += 1)
                if (
                  ((f = this.shapes[i]),
                  !f.shape._mdf && !this._mdf && !e && this.m !== 2)
                )
                  f.shape.paths = f.localShapeCollection;
                else {
                  if (
                    ((a = f.shape.paths),
                    (u = a._length),
                    (m = 0),
                    !f.shape._mdf && f.pathsData.length)
                  )
                    m = f.totalShapeLength;
                  else {
                    for (
                      c = this.releasePathsData(f.pathsData), s = 0;
                      s < u;
                      s += 1
                    )
                      ((d = Te.getSegmentsLength(a.shapes[s])),
                        c.push(d),
                        (m += d.totalLength));
                    ((f.totalShapeLength = m), (f.pathsData = c));
                  }
                  ((p += m), (f.shape._mdf = !0));
                }
              var h = t,
                y = n,
                C = 0,
                b;
              for (i = l - 1; i >= 0; i -= 1)
                if (((f = this.shapes[i]), f.shape._mdf)) {
                  for (
                    g = f.localShapeCollection,
                      g.releaseShapes(),
                      this.m === 2 && l > 1
                        ? ((b = this.calculateShapeEdges(
                            t,
                            n,
                            f.totalShapeLength,
                            C,
                            p,
                          )),
                          (C += f.totalShapeLength))
                        : (b = [[h, y]]),
                      u = b.length,
                      s = 0;
                    s < u;
                    s += 1
                  ) {
                    ((h = b[s][0]),
                      (y = b[s][1]),
                      (_.length = 0),
                      y <= 1
                        ? _.push({
                            s: f.totalShapeLength * h,
                            e: f.totalShapeLength * y,
                          })
                        : h >= 1
                          ? _.push({
                              s: f.totalShapeLength * (h - 1),
                              e: f.totalShapeLength * (y - 1),
                            })
                          : (_.push({
                              s: f.totalShapeLength * h,
                              e: f.totalShapeLength,
                            }),
                            _.push({ s: 0, e: f.totalShapeLength * (y - 1) })));
                    var v = this.addShapes(f, _[0]);
                    if (_[0].s !== _[0].e) {
                      if (_.length > 1) {
                        var S = f.shape.paths.shapes[f.shape.paths._length - 1];
                        if (S.c) {
                          var R = v.pop();
                          (this.addPaths(v, g),
                            (v = this.addShapes(f, _[1], R)));
                        } else
                          (this.addPaths(v, g), (v = this.addShapes(f, _[1])));
                      }
                      this.addPaths(v, g);
                    }
                  }
                  f.shape.paths = g;
                }
            }
          }),
          (vt.prototype.addPaths = function (e, t) {
            var n,
              r = e.length;
            for (n = 0; n < r; n += 1) t.addShape(e[n]);
          }),
          (vt.prototype.addSegment = function (e, t, n, r, o, a, i) {
            (o.setXYAt(t[0], t[1], "o", a),
              o.setXYAt(n[0], n[1], "i", a + 1),
              i && o.setXYAt(e[0], e[1], "v", a),
              o.setXYAt(r[0], r[1], "v", a + 1));
          }),
          (vt.prototype.addSegmentFromArray = function (e, t, n, r) {
            (t.setXYAt(e[1], e[5], "o", n),
              t.setXYAt(e[2], e[6], "i", n + 1),
              r && t.setXYAt(e[0], e[4], "v", n),
              t.setXYAt(e[3], e[7], "v", n + 1));
          }),
          (vt.prototype.addShapes = function (e, t, n) {
            var r = e.pathsData,
              o = e.shape.paths.shapes,
              a,
              i = e.shape.paths._length,
              l,
              s,
              u = 0,
              c,
              d,
              m,
              p,
              _ = [],
              f,
              g = !0;
            for (
              n
                ? ((d = n._length), (f = n._length))
                : ((n = je.newElement()), (d = 0), (f = 0)),
                _.push(n),
                a = 0;
              a < i;
              a += 1
            ) {
              for (
                m = r[a].lengths,
                  n.c = o[a].c,
                  s = o[a].c ? m.length : m.length + 1,
                  l = 1;
                l < s;
                l += 1
              )
                if (((c = m[l - 1]), u + c.addedLength < t.s))
                  ((u += c.addedLength), (n.c = !1));
                else if (u > t.e) {
                  n.c = !1;
                  break;
                } else
                  (t.s <= u && t.e >= u + c.addedLength
                    ? (this.addSegment(
                        o[a].v[l - 1],
                        o[a].o[l - 1],
                        o[a].i[l],
                        o[a].v[l],
                        n,
                        d,
                        g,
                      ),
                      (g = !1))
                    : ((p = Te.getNewSegment(
                        o[a].v[l - 1],
                        o[a].v[l],
                        o[a].o[l - 1],
                        o[a].i[l],
                        (t.s - u) / c.addedLength,
                        (t.e - u) / c.addedLength,
                        m[l - 1],
                      )),
                      this.addSegmentFromArray(p, n, d, g),
                      (g = !1),
                      (n.c = !1)),
                    (u += c.addedLength),
                    (d += 1));
              if (o[a].c && m.length) {
                if (((c = m[l - 1]), u <= t.e)) {
                  var h = m[l - 1].addedLength;
                  t.s <= u && t.e >= u + h
                    ? (this.addSegment(
                        o[a].v[l - 1],
                        o[a].o[l - 1],
                        o[a].i[0],
                        o[a].v[0],
                        n,
                        d,
                        g,
                      ),
                      (g = !1))
                    : ((p = Te.getNewSegment(
                        o[a].v[l - 1],
                        o[a].v[0],
                        o[a].o[l - 1],
                        o[a].i[0],
                        (t.s - u) / h,
                        (t.e - u) / h,
                        m[l - 1],
                      )),
                      this.addSegmentFromArray(p, n, d, g),
                      (g = !1),
                      (n.c = !1));
                } else n.c = !1;
                ((u += c.addedLength), (d += 1));
              }
              if (
                (n._length &&
                  (n.setXYAt(n.v[f][0], n.v[f][1], "i", f),
                  n.setXYAt(
                    n.v[n._length - 1][0],
                    n.v[n._length - 1][1],
                    "o",
                    n._length - 1,
                  )),
                u > t.e)
              )
                break;
              a < i - 1 &&
                ((n = je.newElement()), (g = !0), _.push(n), (d = 0));
            }
            return _;
          }));
        function St() {}
        (d([bt], St),
          (St.prototype.initModifierProperties = function (e, t) {
            ((this.getValue = this.processKeys),
              (this.amount = Ve.getProp(e, t.a, 0, null, this)),
              (this._isAnimated = !!this.amount.effectsSequence.length));
          }),
          (St.prototype.processPath = function (e, t) {
            var n = t / 100,
              r = [0, 0],
              o = e._length,
              a = 0;
            for (a = 0; a < o; a += 1)
              ((r[0] += e.v[a][0]), (r[1] += e.v[a][1]));
            ((r[0] /= o), (r[1] /= o));
            var i = je.newElement();
            i.c = e.c;
            var l, s, u, c, d, m;
            for (a = 0; a < o; a += 1)
              ((l = e.v[a][0] + (r[0] - e.v[a][0]) * n),
                (s = e.v[a][1] + (r[1] - e.v[a][1]) * n),
                (u = e.o[a][0] + (r[0] - e.o[a][0]) * -n),
                (c = e.o[a][1] + (r[1] - e.o[a][1]) * -n),
                (d = e.i[a][0] + (r[0] - e.i[a][0]) * -n),
                (m = e.i[a][1] + (r[1] - e.i[a][1]) * -n),
                i.setTripleAt(l, s, u, c, d, m, a));
            return i;
          }),
          (St.prototype.processShapes = function (e) {
            var t,
              n,
              r = this.shapes.length,
              o,
              a,
              i = this.amount.v;
            if (i !== 0) {
              var l, s;
              for (n = 0; n < r; n += 1) {
                if (
                  ((l = this.shapes[n]),
                  (s = l.localShapeCollection),
                  !(!l.shape._mdf && !this._mdf && !e))
                )
                  for (
                    s.releaseShapes(),
                      l.shape._mdf = !0,
                      t = l.shape.paths.shapes,
                      a = l.shape.paths._length,
                      o = 0;
                    o < a;
                    o += 1
                  )
                    s.addShape(this.processPath(t[o], i));
                l.shape.paths = l.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          }));
        var Rt = (function () {
          var e = [0, 0];
          function t(e) {
            var t = this._mdf;
            (this.iterateDynamicProperties(),
              (this._mdf = this._mdf || t),
              this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
              this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              this.sk && e.skewFromAxis(-this.sk.v, this.sa.v),
              this.r
                ? e.rotate(-this.r.v)
                : e
                    .rotateZ(-this.rz.v)
                    .rotateY(this.ry.v)
                    .rotateX(this.rx.v)
                    .rotateZ(-this.or.v[2])
                    .rotateY(this.or.v[1])
                    .rotateX(this.or.v[0]),
              this.data.p.s
                ? this.data.p.z
                  ? e.translate(this.px.v, this.py.v, -this.pz.v)
                  : e.translate(this.px.v, this.py.v, 0)
                : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]));
          }
          function n(t) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (
                (this._isDirty &&
                  (this.precalculateMatrix(), (this._isDirty = !1)),
                this.iterateDynamicProperties(),
                this._mdf || t)
              ) {
                var n;
                if (
                  (this.v.cloneFromProps(this.pre.props),
                  this.appliedTransformations < 1 &&
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  this.appliedTransformations < 2 &&
                    this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  this.sk &&
                    this.appliedTransformations < 3 &&
                    this.v.skewFromAxis(-this.sk.v, this.sa.v),
                  this.r && this.appliedTransformations < 4
                    ? this.v.rotate(-this.r.v)
                    : !this.r &&
                      this.appliedTransformations < 4 &&
                      this.v
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                  this.autoOriented)
                ) {
                  var r, o;
                  if (
                    ((n = this.elem.globalData.frameRate),
                    this.p && this.p.keyframes && this.p.getValueAtTime)
                  )
                    this.p._caching.lastFrame + this.p.offsetTime <=
                    this.p.keyframes[0].t
                      ? ((r = this.p.getValueAtTime(
                          (this.p.keyframes[0].t + 0.01) / n,
                          0,
                        )),
                        (o = this.p.getValueAtTime(
                          this.p.keyframes[0].t / n,
                          0,
                        )))
                      : this.p._caching.lastFrame + this.p.offsetTime >=
                          this.p.keyframes[this.p.keyframes.length - 1].t
                        ? ((r = this.p.getValueAtTime(
                            this.p.keyframes[this.p.keyframes.length - 1].t / n,
                            0,
                          )),
                          (o = this.p.getValueAtTime(
                            (this.p.keyframes[this.p.keyframes.length - 1].t -
                              0.05) /
                              n,
                            0,
                          )))
                        : ((r = this.p.pv),
                          (o = this.p.getValueAtTime(
                            (this.p._caching.lastFrame +
                              this.p.offsetTime -
                              0.01) /
                              n,
                            this.p.offsetTime,
                          )));
                  else if (
                    this.px &&
                    this.px.keyframes &&
                    this.py.keyframes &&
                    this.px.getValueAtTime &&
                    this.py.getValueAtTime
                  ) {
                    ((r = []), (o = []));
                    var a = this.px,
                      i = this.py;
                    a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t
                      ? ((r[0] = a.getValueAtTime(
                          (a.keyframes[0].t + 0.01) / n,
                          0,
                        )),
                        (r[1] = i.getValueAtTime(
                          (i.keyframes[0].t + 0.01) / n,
                          0,
                        )),
                        (o[0] = a.getValueAtTime(a.keyframes[0].t / n, 0)),
                        (o[1] = i.getValueAtTime(i.keyframes[0].t / n, 0)))
                      : a._caching.lastFrame + a.offsetTime >=
                          a.keyframes[a.keyframes.length - 1].t
                        ? ((r[0] = a.getValueAtTime(
                            a.keyframes[a.keyframes.length - 1].t / n,
                            0,
                          )),
                          (r[1] = i.getValueAtTime(
                            i.keyframes[i.keyframes.length - 1].t / n,
                            0,
                          )),
                          (o[0] = a.getValueAtTime(
                            (a.keyframes[a.keyframes.length - 1].t - 0.01) / n,
                            0,
                          )),
                          (o[1] = i.getValueAtTime(
                            (i.keyframes[i.keyframes.length - 1].t - 0.01) / n,
                            0,
                          )))
                        : ((r = [a.pv, i.pv]),
                          (o[0] = a.getValueAtTime(
                            (a._caching.lastFrame + a.offsetTime - 0.01) / n,
                            a.offsetTime,
                          )),
                          (o[1] = i.getValueAtTime(
                            (i._caching.lastFrame + i.offsetTime - 0.01) / n,
                            i.offsetTime,
                          )));
                  } else ((o = e), (r = o));
                  this.v.rotate(-Math.atan2(r[1] - o[1], r[0] - o[0]));
                }
                this.data.p && this.data.p.s
                  ? this.data.p.z
                    ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                    : this.v.translate(this.px.v, this.py.v, 0)
                  : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
              this.frameId = this.elem.globalData.frameId;
            }
          }
          function r() {
            if (
              ((this.appliedTransformations = 0),
              this.pre.reset(),
              !this.a.effectsSequence.length)
            )
              (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                (this.appliedTransformations = 1));
            else return;
            if (!this.s.effectsSequence.length)
              (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                (this.appliedTransformations = 2));
            else return;
            if (this.sk)
              if (
                !this.sk.effectsSequence.length &&
                !this.sa.effectsSequence.length
              )
                (this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                  (this.appliedTransformations = 3));
              else return;
            this.r
              ? this.r.effectsSequence.length ||
                (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
              : !this.rz.effectsSequence.length &&
                !this.ry.effectsSequence.length &&
                !this.rx.effectsSequence.length &&
                !this.or.effectsSequence.length &&
                (this.pre
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
                (this.appliedTransformations = 4));
          }
          function o() {}
          function a(e) {
            (this._addDynamicProperty(e),
              this.elem.addDynamicProperty(e),
              (this._isDirty = !0));
          }
          function i(e, t, n) {
            if (
              ((this.elem = e),
              (this.frameId = -1),
              (this.propType = "transform"),
              (this.data = t),
              (this.v = new Ye()),
              (this.pre = new Ye()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(n || e),
              t.p && t.p.s
                ? ((this.px = Ve.getProp(e, t.p.x, 0, 0, this)),
                  (this.py = Ve.getProp(e, t.p.y, 0, 0, this)),
                  t.p.z && (this.pz = Ve.getProp(e, t.p.z, 0, 0, this)))
                : (this.p = Ve.getProp(e, t.p || { k: [0, 0, 0] }, 1, 0, this)),
              t.rx)
            ) {
              if (
                ((this.rx = Ve.getProp(e, t.rx, 0, P, this)),
                (this.ry = Ve.getProp(e, t.ry, 0, P, this)),
                (this.rz = Ve.getProp(e, t.rz, 0, P, this)),
                t.or.k[0].ti)
              ) {
                var r,
                  o = t.or.k.length;
                for (r = 0; r < o; r += 1)
                  ((t.or.k[r].to = null), (t.or.k[r].ti = null));
              }
              ((this.or = Ve.getProp(e, t.or, 1, P, this)), (this.or.sh = !0));
            } else this.r = Ve.getProp(e, t.r || { k: 0 }, 0, P, this);
            (t.sk &&
              ((this.sk = Ve.getProp(e, t.sk, 0, P, this)),
              (this.sa = Ve.getProp(e, t.sa, 0, P, this))),
              (this.a = Ve.getProp(e, t.a || { k: [0, 0, 0] }, 1, 0, this)),
              (this.s = Ve.getProp(
                e,
                t.s || { k: [100, 100, 100] },
                1,
                0.01,
                this,
              )),
              t.o
                ? (this.o = Ve.getProp(e, t.o, 0, 0.01, e))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0));
          }
          ((i.prototype = {
            applyToMatrix: t,
            getValue: n,
            precalculateMatrix: r,
            autoOrient: o,
          }),
            d([He], i),
            (i.prototype.addDynamicProperty = a),
            (i.prototype._addDynamicProperty =
              He.prototype.addDynamicProperty));
          function l(e, t, n) {
            return new i(e, t, n);
          }
          return { getTransformProperty: l };
        })();
        function Lt() {}
        (d([bt], Lt),
          (Lt.prototype.initModifierProperties = function (e, t) {
            ((this.getValue = this.processKeys),
              (this.c = Ve.getProp(e, t.c, 0, null, this)),
              (this.o = Ve.getProp(e, t.o, 0, null, this)),
              (this.tr = Rt.getTransformProperty(e, t.tr, this)),
              (this.so = Ve.getProp(e, t.tr.so, 0, 0.01, this)),
              (this.eo = Ve.getProp(e, t.tr.eo, 0, 0.01, this)),
              (this.data = t),
              this.dynamicProperties.length || this.getValue(!0),
              (this._isAnimated = !!this.dynamicProperties.length),
              (this.pMatrix = new Ye()),
              (this.rMatrix = new Ye()),
              (this.sMatrix = new Ye()),
              (this.tMatrix = new Ye()),
              (this.matrix = new Ye()));
          }),
          (Lt.prototype.applyTransforms = function (e, t, n, r, o, a) {
            var i = a ? -1 : 1,
              l = r.s.v[0] + (1 - r.s.v[0]) * (1 - o),
              s = r.s.v[1] + (1 - r.s.v[1]) * (1 - o);
            (e.translate(r.p.v[0] * i * o, r.p.v[1] * i * o, r.p.v[2]),
              t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
              t.rotate(-r.r.v * i * o),
              t.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
              n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
              n.scale(a ? 1 / l : l, a ? 1 / s : s),
              n.translate(r.a.v[0], r.a.v[1], r.a.v[2]));
          }),
          (Lt.prototype.init = function (e, t, n, r) {
            for (
              this.elem = e,
                this.arr = t,
                this.pos = n,
                this.elemsData = r,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(e),
                this.initModifierProperties(e, t[n]);
              n > 0;
            )
              ((n -= 1), this._elements.unshift(t[n]));
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (Lt.prototype.resetElements = function (e) {
            var t,
              n = e.length;
            for (t = 0; t < n; t += 1)
              ((e[t]._processed = !1),
                e[t].ty === "gr" && this.resetElements(e[t].it));
          }),
          (Lt.prototype.cloneElements = function (e) {
            var t = JSON.parse(JSON.stringify(e));
            return (this.resetElements(t), t);
          }),
          (Lt.prototype.changeGroupRender = function (e, t) {
            var n,
              r = e.length;
            for (n = 0; n < r; n += 1)
              ((e[n]._render = t),
                e[n].ty === "gr" && this.changeGroupRender(e[n].it, t));
          }),
          (Lt.prototype.processShapes = function (e) {
            var t,
              n,
              r,
              o,
              a,
              i = !1;
            if (this._mdf || e) {
              var l = Math.ceil(this.c.v);
              if (this._groups.length < l) {
                for (; this._groups.length < l; ) {
                  var s = { it: this.cloneElements(this._elements), ty: "gr" };
                  (s.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: "Transform",
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: "tr",
                  }),
                    this.arr.splice(0, 0, s),
                    this._groups.splice(0, 0, s),
                    (this._currentCopies += 1));
                }
                (this.elem.reloadShapes(), (i = !0));
              }
              a = 0;
              var u;
              for (r = 0; r <= this._groups.length - 1; r += 1) {
                if (
                  ((u = a < l),
                  (this._groups[r]._render = u),
                  this.changeGroupRender(this._groups[r].it, u),
                  !u)
                ) {
                  var c = this.elemsData[r].it,
                    d = c[c.length - 1];
                  d.transform.op.v !== 0
                    ? ((d.transform.op._mdf = !0), (d.transform.op.v = 0))
                    : (d.transform.op._mdf = !1);
                }
                a += 1;
              }
              this._currentCopies = l;
              var m = this.o.v,
                p = m % 1,
                _ = m > 0 ? Math.floor(m) : Math.ceil(m),
                f = this.pMatrix.props,
                g = this.rMatrix.props,
                h = this.sMatrix.props;
              (this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset());
              var y = 0;
              if (m > 0) {
                for (; y < _; )
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1,
                  ),
                    (y += 1));
                p &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    p,
                    !1,
                  ),
                  (y += p));
              } else if (m < 0) {
                for (; y > _; )
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !0,
                  ),
                    (y -= 1));
                p &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    -p,
                    !0,
                  ),
                  (y -= p));
              }
              ((r = this.data.m === 1 ? 0 : this._currentCopies - 1),
                (o = this.data.m === 1 ? 1 : -1),
                (a = this._currentCopies));
              for (var C, b; a; ) {
                if (
                  ((t = this.elemsData[r].it),
                  (n = t[t.length - 1].transform.mProps.v.props),
                  (b = n.length),
                  (t[t.length - 1].transform.mProps._mdf = !0),
                  (t[t.length - 1].transform.op._mdf = !0),
                  (t[t.length - 1].transform.op.v =
                    this._currentCopies === 1
                      ? this.so.v
                      : this.so.v +
                        (this.eo.v - this.so.v) *
                          (r / (this._currentCopies - 1))),
                  y !== 0)
                ) {
                  for (
                    ((r !== 0 && o === 1) ||
                      (r !== this._currentCopies - 1 && o === -1)) &&
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1,
                      ),
                      this.matrix.transform(
                        g[0],
                        g[1],
                        g[2],
                        g[3],
                        g[4],
                        g[5],
                        g[6],
                        g[7],
                        g[8],
                        g[9],
                        g[10],
                        g[11],
                        g[12],
                        g[13],
                        g[14],
                        g[15],
                      ),
                      this.matrix.transform(
                        h[0],
                        h[1],
                        h[2],
                        h[3],
                        h[4],
                        h[5],
                        h[6],
                        h[7],
                        h[8],
                        h[9],
                        h[10],
                        h[11],
                        h[12],
                        h[13],
                        h[14],
                        h[15],
                      ),
                      this.matrix.transform(
                        f[0],
                        f[1],
                        f[2],
                        f[3],
                        f[4],
                        f[5],
                        f[6],
                        f[7],
                        f[8],
                        f[9],
                        f[10],
                        f[11],
                        f[12],
                        f[13],
                        f[14],
                        f[15],
                      ),
                      C = 0;
                    C < b;
                    C += 1
                  )
                    n[C] = this.matrix.props[C];
                  this.matrix.reset();
                } else
                  for (this.matrix.reset(), C = 0; C < b; C += 1)
                    n[C] = this.matrix.props[C];
                ((y += 1), (a -= 1), (r += o));
              }
            } else
              for (a = this._currentCopies, r = 0, o = 1; a; )
                ((t = this.elemsData[r].it),
                  (n = t[t.length - 1].transform.mProps.v.props),
                  (t[t.length - 1].transform.mProps._mdf = !1),
                  (t[t.length - 1].transform.op._mdf = !1),
                  (a -= 1),
                  (r += o));
            return i;
          }),
          (Lt.prototype.addShape = function () {}));
        function Et() {}
        (d([bt], Et),
          (Et.prototype.initModifierProperties = function (e, t) {
            ((this.getValue = this.processKeys),
              (this.rd = Ve.getProp(e, t.r, 0, null, this)),
              (this._isAnimated = !!this.rd.effectsSequence.length));
          }),
          (Et.prototype.processPath = function (e, t) {
            var n = je.newElement();
            n.c = e.c;
            var r,
              o = e._length,
              a,
              i,
              l,
              s,
              u,
              c,
              d = 0,
              m,
              p,
              _,
              f,
              g,
              h;
            for (r = 0; r < o; r += 1)
              ((a = e.v[r]),
                (l = e.o[r]),
                (i = e.i[r]),
                a[0] === l[0] && a[1] === l[1] && a[0] === i[0] && a[1] === i[1]
                  ? (r === 0 || r === o - 1) && !e.c
                    ? (n.setTripleAt(a[0], a[1], l[0], l[1], i[0], i[1], d),
                      (d += 1))
                    : (r === 0 ? (s = e.v[o - 1]) : (s = e.v[r - 1]),
                      (u = Math.sqrt(
                        Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2),
                      )),
                      (c = u ? Math.min(u / 2, t) / u : 0),
                      (g = a[0] + (s[0] - a[0]) * c),
                      (m = g),
                      (h = a[1] - (a[1] - s[1]) * c),
                      (p = h),
                      (_ = m - (m - a[0]) * N),
                      (f = p - (p - a[1]) * N),
                      n.setTripleAt(m, p, _, f, g, h, d),
                      (d += 1),
                      r === o - 1 ? (s = e.v[0]) : (s = e.v[r + 1]),
                      (u = Math.sqrt(
                        Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2),
                      )),
                      (c = u ? Math.min(u / 2, t) / u : 0),
                      (_ = a[0] + (s[0] - a[0]) * c),
                      (m = _),
                      (f = a[1] + (s[1] - a[1]) * c),
                      (p = f),
                      (g = m - (m - a[0]) * N),
                      (h = p - (p - a[1]) * N),
                      n.setTripleAt(m, p, _, f, g, h, d),
                      (d += 1))
                  : (n.setTripleAt(
                      e.v[r][0],
                      e.v[r][1],
                      e.o[r][0],
                      e.o[r][1],
                      e.i[r][0],
                      e.i[r][1],
                      d,
                    ),
                    (d += 1)));
            return n;
          }),
          (Et.prototype.processShapes = function (e) {
            var t,
              n,
              r = this.shapes.length,
              o,
              a,
              i = this.rd.v;
            if (i !== 0) {
              var l, s;
              for (n = 0; n < r; n += 1) {
                if (
                  ((l = this.shapes[n]),
                  (s = l.localShapeCollection),
                  !(!l.shape._mdf && !this._mdf && !e))
                )
                  for (
                    s.releaseShapes(),
                      l.shape._mdf = !0,
                      t = l.shape.paths.shapes,
                      a = l.shape.paths._length,
                      o = 0;
                    o < a;
                    o += 1
                  )
                    s.addShape(this.processPath(t[o], i));
                l.shape.paths = l.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          }));
        function kt(e, t) {
          return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t));
        }
        function It(e) {
          return Math.abs(e) <= 1e-5;
        }
        function Tt(e, t, n) {
          return e * (1 - n) + t * n;
        }
        function Dt(e, t, n) {
          return [Tt(e[0], t[0], n), Tt(e[1], t[1], n)];
        }
        function xt(e, t, n) {
          if (e === 0) return [];
          var r = t * t - 4 * e * n;
          if (r < 0) return [];
          var o = -t / (2 * e);
          if (r === 0) return [o];
          var a = Math.sqrt(r) / (2 * e);
          return [o - a, o + a];
        }
        function $t(e, t, n, r) {
          return [
            -e + 3 * t - 3 * n + r,
            3 * e - 6 * t + 3 * n,
            -3 * e + 3 * t,
            e,
          ];
        }
        function Pt(e) {
          return new Nt(e, e, e, e, !1);
        }
        function Nt(e, t, n, r, o) {
          (o && Vt(e, t) && (t = Dt(e, r, 1 / 3)),
            o && Vt(n, r) && (n = Dt(e, r, 2 / 3)));
          var a = $t(e[0], t[0], n[0], r[0]),
            i = $t(e[1], t[1], n[1], r[1]);
          ((this.a = [a[0], i[0]]),
            (this.b = [a[1], i[1]]),
            (this.c = [a[2], i[2]]),
            (this.d = [a[3], i[3]]),
            (this.points = [e, t, n, r]));
        }
        ((Nt.prototype.point = function (e) {
          return [
            ((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0],
            ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1],
          ];
        }),
          (Nt.prototype.derivative = function (e) {
            return [
              (3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0],
              (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1],
            ];
          }),
          (Nt.prototype.tangentAngle = function (e) {
            var t = this.derivative(e);
            return Math.atan2(t[1], t[0]);
          }),
          (Nt.prototype.normalAngle = function (e) {
            var t = this.derivative(e);
            return Math.atan2(t[0], t[1]);
          }),
          (Nt.prototype.inflectionPoints = function () {
            var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (It(e)) return [];
            var t =
                (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
              n =
                t * t -
                ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
            if (n < 0) return [];
            var r = Math.sqrt(n);
            return It(r)
              ? r > 0 && r < 1
                ? [t]
                : []
              : [t - r, t + r].filter(function (e) {
                  return e > 0 && e < 1;
                });
          }),
          (Nt.prototype.split = function (e) {
            if (e <= 0) return [Pt(this.points[0]), this];
            if (e >= 1) return [this, Pt(this.points[this.points.length - 1])];
            var t = Dt(this.points[0], this.points[1], e),
              n = Dt(this.points[1], this.points[2], e),
              r = Dt(this.points[2], this.points[3], e),
              o = Dt(t, n, e),
              a = Dt(n, r, e),
              i = Dt(o, a, e);
            return [
              new Nt(this.points[0], t, o, i, !0),
              new Nt(i, a, r, this.points[3], !0),
            ];
          }));
        function Mt(e, t) {
          var n = e.points[0][t],
            r = e.points[e.points.length - 1][t];
          if (n > r) {
            var o = r;
            ((r = n), (n = o));
          }
          for (
            var a = xt(3 * e.a[t], 2 * e.b[t], e.c[t]), i = 0;
            i < a.length;
            i += 1
          )
            if (a[i] > 0 && a[i] < 1) {
              var l = e.point(a[i])[t];
              l < n ? (n = l) : l > r && (r = l);
            }
          return { min: n, max: r };
        }
        ((Nt.prototype.bounds = function () {
          return { x: Mt(this, 0), y: Mt(this, 1) };
        }),
          (Nt.prototype.boundingBox = function () {
            var e = this.bounds();
            return {
              left: e.x.min,
              right: e.x.max,
              top: e.y.min,
              bottom: e.y.max,
              width: e.x.max - e.x.min,
              height: e.y.max - e.y.min,
              cx: (e.x.max + e.x.min) / 2,
              cy: (e.y.max + e.y.min) / 2,
            };
          }));
        function wt(e, t, n) {
          var r = e.boundingBox();
          return {
            cx: r.cx,
            cy: r.cy,
            width: r.width,
            height: r.height,
            bez: e,
            t: (t + n) / 2,
            t1: t,
            t2: n,
          };
        }
        function At(e) {
          var t = e.bez.split(0.5);
          return [wt(t[0], e.t1, e.t), wt(t[1], e.t, e.t2)];
        }
        function Ft(e, t) {
          return (
            Math.abs(e.cx - t.cx) * 2 < e.width + t.width &&
            Math.abs(e.cy - t.cy) * 2 < e.height + t.height
          );
        }
        function Ot(e, t, n, r, o, a) {
          if (Ft(e, t)) {
            if (
              n >= a ||
              (e.width <= r && e.height <= r && t.width <= r && t.height <= r)
            ) {
              o.push([e.t, t.t]);
              return;
            }
            var i = At(e),
              l = At(t);
            (Ot(i[0], l[0], n + 1, r, o, a),
              Ot(i[0], l[1], n + 1, r, o, a),
              Ot(i[1], l[0], n + 1, r, o, a),
              Ot(i[1], l[1], n + 1, r, o, a));
          }
        }
        ((Nt.prototype.intersections = function (e, t, n) {
          (t === void 0 && (t = 2), n === void 0 && (n = 7));
          var r = [];
          return (Ot(wt(this, 0, 1), wt(e, 0, 1), 0, t, r, n), r);
        }),
          (Nt.shapeSegment = function (e, t) {
            var n = (t + 1) % e.length();
            return new Nt(e.v[t], e.o[t], e.i[n], e.v[n], !0);
          }),
          (Nt.shapeSegmentInverted = function (e, t) {
            var n = (t + 1) % e.length();
            return new Nt(e.v[n], e.i[n], e.o[t], e.v[t], !0);
          }));
        function Bt(e, t) {
          return [
            e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0],
          ];
        }
        function Wt(e, t, n, r) {
          var o = [e[0], e[1], 1],
            a = [t[0], t[1], 1],
            i = [n[0], n[1], 1],
            l = [r[0], r[1], 1],
            s = Bt(Bt(o, a), Bt(i, l));
          return It(s[2]) ? null : [s[0] / s[2], s[1] / s[2]];
        }
        function qt(e, t, n) {
          return [e[0] + Math.cos(t) * n, e[1] - Math.sin(t) * n];
        }
        function Ut(e, t) {
          return Math.hypot(e[0] - t[0], e[1] - t[1]);
        }
        function Vt(e, t) {
          return kt(e[0], t[0]) && kt(e[1], t[1]);
        }
        function Ht() {}
        (d([bt], Ht),
          (Ht.prototype.initModifierProperties = function (e, t) {
            ((this.getValue = this.processKeys),
              (this.amplitude = Ve.getProp(e, t.s, 0, null, this)),
              (this.frequency = Ve.getProp(e, t.r, 0, null, this)),
              (this.pointsType = Ve.getProp(e, t.pt, 0, null, this)),
              (this._isAnimated =
                this.amplitude.effectsSequence.length !== 0 ||
                this.frequency.effectsSequence.length !== 0 ||
                this.pointsType.effectsSequence.length !== 0));
          }));
        function Gt(e, t, n, r, o, a, i) {
          var l = n - Math.PI / 2,
            s = n + Math.PI / 2,
            u = t[0] + Math.cos(n) * r * o,
            c = t[1] - Math.sin(n) * r * o;
          e.setTripleAt(
            u,
            c,
            u + Math.cos(l) * a,
            c - Math.sin(l) * a,
            u + Math.cos(s) * i,
            c - Math.sin(s) * i,
            e.length(),
          );
        }
        function zt(e, t) {
          var n = [t[0] - e[0], t[1] - e[1]],
            r = -Math.PI * 0.5,
            o = [
              Math.cos(r) * n[0] - Math.sin(r) * n[1],
              Math.sin(r) * n[0] + Math.cos(r) * n[1],
            ];
          return o;
        }
        function jt(e, t) {
          var n = t === 0 ? e.length() - 1 : t - 1,
            r = (t + 1) % e.length(),
            o = e.v[n],
            a = e.v[r],
            i = zt(o, a);
          return Math.atan2(0, 1) - Math.atan2(i[1], i[0]);
        }
        function Kt(e, t, n, r, o, a, i) {
          var l = jt(t, n),
            s = t.v[n % t._length],
            u = t.v[n === 0 ? t._length - 1 : n - 1],
            c = t.v[(n + 1) % t._length],
            d =
              a === 2
                ? Math.sqrt(Math.pow(s[0] - u[0], 2) + Math.pow(s[1] - u[1], 2))
                : 0,
            m =
              a === 2
                ? Math.sqrt(Math.pow(s[0] - c[0], 2) + Math.pow(s[1] - c[1], 2))
                : 0;
          Gt(
            e,
            t.v[n % t._length],
            l,
            i,
            r,
            m / ((o + 1) * 2),
            d / ((o + 1) * 2),
            a,
          );
        }
        function Qt(e, t, n, r, o, a) {
          for (var i = 0; i < r; i += 1) {
            var l = (i + 1) / (r + 1),
              s =
                o === 2
                  ? Math.sqrt(
                      Math.pow(t.points[3][0] - t.points[0][0], 2) +
                        Math.pow(t.points[3][1] - t.points[0][1], 2),
                    )
                  : 0,
              u = t.normalAngle(l),
              c = t.point(l);
            (Gt(e, c, u, a, n, s / ((r + 1) * 2), s / ((r + 1) * 2), o),
              (a = -a));
          }
          return a;
        }
        ((Ht.prototype.processPath = function (e, t, n, r) {
          var o = e._length,
            a = je.newElement();
          if (((a.c = e.c), e.c || (o -= 1), o === 0)) return a;
          var i = -1,
            l = Nt.shapeSegment(e, 0);
          Kt(a, e, 0, t, n, r, i);
          for (var s = 0; s < o; s += 1)
            ((i = Qt(a, l, t, n, r, -i)),
              s === o - 1 && !e.c
                ? (l = null)
                : (l = Nt.shapeSegment(e, (s + 1) % o)),
              Kt(a, e, s + 1, t, n, r, i));
          return a;
        }),
          (Ht.prototype.processShapes = function (e) {
            var t,
              n,
              r = this.shapes.length,
              o,
              a,
              i = this.amplitude.v,
              l = Math.max(0, Math.round(this.frequency.v)),
              s = this.pointsType.v;
            if (i !== 0) {
              var u, c;
              for (n = 0; n < r; n += 1) {
                if (
                  ((u = this.shapes[n]),
                  (c = u.localShapeCollection),
                  !(!u.shape._mdf && !this._mdf && !e))
                )
                  for (
                    c.releaseShapes(),
                      u.shape._mdf = !0,
                      t = u.shape.paths.shapes,
                      a = u.shape.paths._length,
                      o = 0;
                    o < a;
                    o += 1
                  )
                    c.addShape(this.processPath(t[o], i, l, s));
                u.shape.paths = u.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          }));
        function Xt(e, t, n) {
          var r = Math.atan2(t[0] - e[0], t[1] - e[1]);
          return [qt(e, r, n), qt(t, r, n)];
        }
        function Yt(e, t) {
          var n, r, o, a, i, l, s;
          ((s = Xt(e.points[0], e.points[1], t)),
            (n = s[0]),
            (r = s[1]),
            (s = Xt(e.points[1], e.points[2], t)),
            (o = s[0]),
            (a = s[1]),
            (s = Xt(e.points[2], e.points[3], t)),
            (i = s[0]),
            (l = s[1]));
          var u = Wt(n, r, o, a);
          u === null && (u = r);
          var c = Wt(i, l, o, a);
          return (c === null && (c = i), new Nt(n, u, c, l));
        }
        function Jt(e, t, n, r, o) {
          var a = t.points[3],
            i = n.points[0];
          if (r === 3 || Vt(a, i)) return a;
          if (r === 2) {
            var l = -t.tangentAngle(1),
              s = -n.tangentAngle(0) + Math.PI,
              u = Wt(
                a,
                qt(a, l + Math.PI / 2, 100),
                i,
                qt(i, l + Math.PI / 2, 100),
              ),
              c = u ? Ut(u, a) : Ut(a, i) / 2,
              d = qt(a, l, 2 * c * N);
            return (
              e.setXYAt(d[0], d[1], "o", e.length() - 1),
              (d = qt(i, s, 2 * c * N)),
              e.setTripleAt(i[0], i[1], i[0], i[1], d[0], d[1], e.length()),
              i
            );
          }
          var m = Vt(a, t.points[2]) ? t.points[0] : t.points[2],
            p = Vt(i, n.points[1]) ? n.points[3] : n.points[1],
            _ = Wt(m, a, i, p);
          return _ && Ut(_, a) < o
            ? (e.setTripleAt(_[0], _[1], _[0], _[1], _[0], _[1], e.length()), _)
            : a;
        }
        function Zt(e, t) {
          var n = e.intersections(t);
          return (
            n.length && kt(n[0][0], 1) && n.shift(),
            n.length ? n[0] : null
          );
        }
        function en(e, t) {
          var n = e.slice(),
            r = t.slice(),
            o = Zt(e[e.length - 1], t[0]);
          return (
            o &&
              ((n[e.length - 1] = e[e.length - 1].split(o[0])[0]),
              (r[0] = t[0].split(o[1])[1])),
            e.length > 1 && t.length > 1 && ((o = Zt(e[0], t[t.length - 1])), o)
              ? [[e[0].split(o[0])[0]], [t[t.length - 1].split(o[1])[1]]]
              : [n, r]
          );
        }
        function tn(e) {
          for (var t, n = 1; n < e.length; n += 1)
            ((t = en(e[n - 1], e[n])), (e[n - 1] = t[0]), (e[n] = t[1]));
          return (
            e.length > 1 &&
              ((t = en(e[e.length - 1], e[0])),
              (e[e.length - 1] = t[0]),
              (e[0] = t[1])),
            e
          );
        }
        function nn(e, t) {
          var n = e.inflectionPoints(),
            r,
            o,
            a,
            i;
          if (n.length === 0) return [Yt(e, t)];
          if (n.length === 1 || kt(n[1], 1))
            return (
              (a = e.split(n[0])),
              (r = a[0]),
              (o = a[1]),
              [Yt(r, t), Yt(o, t)]
            );
          ((a = e.split(n[0])), (r = a[0]));
          var l = (n[1] - n[0]) / (1 - n[0]);
          return (
            (a = a[1].split(l)),
            (i = a[0]),
            (o = a[1]),
            [Yt(r, t), Yt(i, t), Yt(o, t)]
          );
        }
        function rn() {}
        (d([bt], rn),
          (rn.prototype.initModifierProperties = function (e, t) {
            ((this.getValue = this.processKeys),
              (this.amount = Ve.getProp(e, t.a, 0, null, this)),
              (this.miterLimit = Ve.getProp(e, t.ml, 0, null, this)),
              (this.lineJoin = t.lj),
              (this._isAnimated = this.amount.effectsSequence.length !== 0));
          }),
          (rn.prototype.processPath = function (e, t, n, r) {
            var o = je.newElement();
            o.c = e.c;
            var a = e.length();
            e.c || (a -= 1);
            var i,
              l,
              s,
              u = [];
            for (i = 0; i < a; i += 1)
              ((s = Nt.shapeSegment(e, i)), u.push(nn(s, t)));
            if (!e.c)
              for (i = a - 1; i >= 0; i -= 1)
                ((s = Nt.shapeSegmentInverted(e, i)), u.push(nn(s, t)));
            u = tn(u);
            var c = null,
              d = null;
            for (i = 0; i < u.length; i += 1) {
              var m = u[i];
              for (
                d && (c = Jt(o, d, m[0], n, r)), d = m[m.length - 1], l = 0;
                l < m.length;
                l += 1
              )
                ((s = m[l]),
                  c && Vt(s.points[0], c)
                    ? o.setXYAt(
                        s.points[1][0],
                        s.points[1][1],
                        "o",
                        o.length() - 1,
                      )
                    : o.setTripleAt(
                        s.points[0][0],
                        s.points[0][1],
                        s.points[1][0],
                        s.points[1][1],
                        s.points[0][0],
                        s.points[0][1],
                        o.length(),
                      ),
                  o.setTripleAt(
                    s.points[3][0],
                    s.points[3][1],
                    s.points[3][0],
                    s.points[3][1],
                    s.points[2][0],
                    s.points[2][1],
                    o.length(),
                  ),
                  (c = s.points[3]));
            }
            return (u.length && Jt(o, d, u[0][0], n, r), o);
          }),
          (rn.prototype.processShapes = function (e) {
            var t,
              n,
              r = this.shapes.length,
              o,
              a,
              i = this.amount.v,
              l = this.miterLimit.v,
              s = this.lineJoin;
            if (i !== 0) {
              var u, c;
              for (n = 0; n < r; n += 1) {
                if (
                  ((u = this.shapes[n]),
                  (c = u.localShapeCollection),
                  !(!u.shape._mdf && !this._mdf && !e))
                )
                  for (
                    c.releaseShapes(),
                      u.shape._mdf = !0,
                      t = u.shape.paths.shapes,
                      a = u.shape.paths._length,
                      o = 0;
                    o < a;
                    o += 1
                  )
                    c.addShape(this.processPath(t[o], i, s, l));
                u.shape.paths = u.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          }));
        function on(e) {
          for (
            var t = e.fStyle ? e.fStyle.split(" ") : [],
              n = "normal",
              r = "normal",
              o = t.length,
              a,
              i = 0;
            i < o;
            i += 1
          )
            switch (((a = t[i].toLowerCase()), a)) {
              case "italic":
                r = "italic";
                break;
              case "bold":
                n = "700";
                break;
              case "black":
                n = "900";
                break;
              case "medium":
                n = "500";
                break;
              case "regular":
              case "normal":
                n = "400";
                break;
              case "light":
              case "thin":
                n = "200";
                break;
              default:
                break;
            }
          return { style: r, weight: e.fWeight || n };
        }
        var an = (function () {
          var e = 5e3,
            t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
            n = [];
          n = n.concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ]);
          var r = 127988,
            o = 917631,
            a = 917601,
            i = 917626,
            l = 65039,
            s = 8205,
            u = 127462,
            d = 127487,
            m = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
          function p(e) {
            var t = e.split(","),
              n,
              r = t.length,
              o = [];
            for (n = 0; n < r; n += 1)
              t[n] !== "sans-serif" && t[n] !== "monospace" && o.push(t[n]);
            return o.join(",");
          }
          function _(e, t) {
            var n = c("span");
            (n.setAttribute("aria-hidden", !0), (n.style.fontFamily = t));
            var r = c("span");
            ((r.innerText = "giItT1WQy@!-/#"),
              (n.style.position = "absolute"),
              (n.style.left = "-10000px"),
              (n.style.top = "-10000px"),
              (n.style.fontSize = "300px"),
              (n.style.fontVariant = "normal"),
              (n.style.fontStyle = "normal"),
              (n.style.fontWeight = "normal"),
              (n.style.letterSpacing = "0"),
              n.appendChild(r),
              document.body.appendChild(n));
            var o = r.offsetWidth;
            return (
              (r.style.fontFamily = p(e) + ", " + t),
              { node: r, w: o, parent: n }
            );
          }
          function f() {
            var t,
              n = this.fonts.length,
              r,
              o,
              a = n;
            for (t = 0; t < n; t += 1)
              this.fonts[t].loaded
                ? (a -= 1)
                : this.fonts[t].fOrigin === "n" || this.fonts[t].origin === 0
                  ? (this.fonts[t].loaded = !0)
                  : ((r = this.fonts[t].monoCase.node),
                    (o = this.fonts[t].monoCase.w),
                    r.offsetWidth !== o
                      ? ((a -= 1), (this.fonts[t].loaded = !0))
                      : ((r = this.fonts[t].sansCase.node),
                        (o = this.fonts[t].sansCase.w),
                        r.offsetWidth !== o &&
                          ((a -= 1), (this.fonts[t].loaded = !0))),
                    this.fonts[t].loaded &&
                      (this.fonts[t].sansCase.parent.parentNode.removeChild(
                        this.fonts[t].sansCase.parent,
                      ),
                      this.fonts[t].monoCase.parent.parentNode.removeChild(
                        this.fonts[t].monoCase.parent,
                      )));
            a !== 0 && Date.now() - this.initTime < e
              ? setTimeout(this.checkLoadedFontsBinded, 20)
              : setTimeout(this.setIsLoadedBinded, 10);
          }
          function g(e, t) {
            var n = document.body && t ? "svg" : "canvas",
              r,
              o = on(e);
            if (n === "svg") {
              var a = se("text");
              ((a.style.fontSize = "100px"),
                a.setAttribute("font-family", e.fFamily),
                a.setAttribute("font-style", o.style),
                a.setAttribute("font-weight", o.weight),
                (a.textContent = "1"),
                e.fClass
                  ? ((a.style.fontFamily = "inherit"),
                    a.setAttribute("class", e.fClass))
                  : (a.style.fontFamily = e.fFamily),
                t.appendChild(a),
                (r = a));
            } else {
              var i = new OffscreenCanvas(500, 500).getContext("2d");
              ((i.font = o.style + " " + o.weight + " 100px " + e.fFamily),
                (r = i));
            }
            function l(e) {
              return n === "svg"
                ? ((r.textContent = e), r.getComputedTextLength())
                : r.measureText(e).width;
            }
            return { measureText: l };
          }
          function h(e, t) {
            if (!e) {
              this.isLoaded = !0;
              return;
            }
            if (this.chars) {
              ((this.isLoaded = !0), (this.fonts = e.list));
              return;
            }
            if (!document.body) {
              ((this.isLoaded = !0),
                e.list.forEach(function (e) {
                  ((e.helper = g(e)), (e.cache = {}));
                }),
                (this.fonts = e.list));
              return;
            }
            var n = e.list,
              r,
              o = n.length,
              a = o;
            for (r = 0; r < o; r += 1) {
              var i = !0,
                l,
                s;
              if (
                ((n[r].loaded = !1),
                (n[r].monoCase = _(n[r].fFamily, "monospace")),
                (n[r].sansCase = _(n[r].fFamily, "sans-serif")),
                !n[r].fPath)
              )
                ((n[r].loaded = !0), (a -= 1));
              else if (n[r].fOrigin === "p" || n[r].origin === 3) {
                if (
                  ((l = document.querySelectorAll(
                    'style[f-forigin="p"][f-family="' +
                      n[r].fFamily +
                      '"], style[f-origin="3"][f-family="' +
                      n[r].fFamily +
                      '"]',
                  )),
                  l.length > 0 && (i = !1),
                  i)
                ) {
                  var u = c("style");
                  (u.setAttribute("f-forigin", n[r].fOrigin),
                    u.setAttribute("f-origin", n[r].origin),
                    u.setAttribute("f-family", n[r].fFamily),
                    (u.type = "text/css"),
                    (u.innerText =
                      "@font-face {font-family: " +
                      n[r].fFamily +
                      "; font-style: normal; src: url('" +
                      n[r].fPath +
                      "');}"),
                    t.appendChild(u));
                }
              } else if (n[r].fOrigin === "g" || n[r].origin === 1) {
                for (
                  l = document.querySelectorAll(
                    'link[f-forigin="g"], link[f-origin="1"]',
                  ),
                    s = 0;
                  s < l.length;
                  s += 1
                )
                  l[s].href.indexOf(n[r].fPath) !== -1 && (i = !1);
                if (i) {
                  var d = c("link");
                  (d.setAttribute("f-forigin", n[r].fOrigin),
                    d.setAttribute("f-origin", n[r].origin),
                    (d.type = "text/css"),
                    (d.rel = "stylesheet"),
                    (d.href = n[r].fPath),
                    document.body.appendChild(d));
                }
              } else if (n[r].fOrigin === "t" || n[r].origin === 2) {
                for (
                  l = document.querySelectorAll(
                    'script[f-forigin="t"], script[f-origin="2"]',
                  ),
                    s = 0;
                  s < l.length;
                  s += 1
                )
                  n[r].fPath === l[s].src && (i = !1);
                if (i) {
                  var m = c("link");
                  (m.setAttribute("f-forigin", n[r].fOrigin),
                    m.setAttribute("f-origin", n[r].origin),
                    m.setAttribute("rel", "stylesheet"),
                    m.setAttribute("href", n[r].fPath),
                    t.appendChild(m));
                }
              }
              ((n[r].helper = g(n[r], t)),
                (n[r].cache = {}),
                this.fonts.push(n[r]));
            }
            a === 0
              ? (this.isLoaded = !0)
              : setTimeout(this.checkLoadedFonts.bind(this), 100);
          }
          function y(e) {
            if (e) {
              this.chars || (this.chars = []);
              var t,
                n = e.length,
                r,
                o = this.chars.length,
                a;
              for (t = 0; t < n; t += 1) {
                for (r = 0, a = !1; r < o; )
                  (this.chars[r].style === e[t].style &&
                    this.chars[r].fFamily === e[t].fFamily &&
                    this.chars[r].ch === e[t].ch &&
                    (a = !0),
                    (r += 1));
                a || (this.chars.push(e[t]), (o += 1));
              }
            }
          }
          function C(e, n, r) {
            for (var o = 0, a = this.chars.length; o < a; ) {
              if (
                this.chars[o].ch === e &&
                this.chars[o].style === n &&
                this.chars[o].fFamily === r
              )
                return this.chars[o];
              o += 1;
            }
            return (
              ((typeof e == "string" && e.charCodeAt(0) !== 13) || !e) &&
                console &&
                console.warn &&
                !this._warned &&
                (this._warned = !0),
              t
            );
          }
          function b(e, t, n) {
            var r = this.getFontByName(t),
              o = e;
            if (!r.cache[o]) {
              var a = r.helper;
              if (e === " ") {
                var i = a.measureText("|" + e + "|"),
                  l = a.measureText("||");
                r.cache[o] = (i - l) / 100;
              } else r.cache[o] = a.measureText(e) / 100;
            }
            return r.cache[o] * n;
          }
          function v(e) {
            for (var t = 0, n = this.fonts.length; t < n; ) {
              if (this.fonts[t].fName === e) return this.fonts[t];
              t += 1;
            }
            return this.fonts[0];
          }
          function S(e) {
            var t = 0,
              n = e.charCodeAt(0);
            if (n >= 55296 && n <= 56319) {
              var r = e.charCodeAt(1);
              r >= 56320 &&
                r <= 57343 &&
                (t = (n - 55296) * 1024 + r - 56320 + 65536);
            }
            return t;
          }
          function R(e, t) {
            var n = e.toString(16) + t.toString(16);
            return m.indexOf(n) !== -1;
          }
          function L(e) {
            return e === s;
          }
          function E(e) {
            return e === l;
          }
          function k(e) {
            var t = S(e);
            return t >= u && t <= d;
          }
          function I(e) {
            return k(e.substr(0, 2)) && k(e.substr(2, 2));
          }
          function T(e) {
            return n.indexOf(e) !== -1;
          }
          function D(e, t) {
            var n = S(e.substr(t, 2));
            if (n !== r) return !1;
            var l = 0;
            for (t += 2; l < 5; ) {
              if (((n = S(e.substr(t, 2))), n < a || n > i)) return !1;
              ((l += 1), (t += 2));
            }
            return S(e.substr(t, 2)) === o;
          }
          function x() {
            this.isLoaded = !0;
          }
          var $ = function () {
            ((this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)));
          };
          (($.isModifier = R),
            ($.isZeroWidthJoiner = L),
            ($.isFlagEmoji = I),
            ($.isRegionalCode = k),
            ($.isCombinedCharacter = T),
            ($.isRegionalFlag = D),
            ($.isVariationSelector = E),
            ($.BLACK_FLAG_CODE_POINT = r));
          var P = {
            addChars: y,
            addFonts: h,
            getCharData: C,
            getFontByName: v,
            measureText: b,
            checkLoadedFonts: f,
            setIsLoaded: x,
          };
          return (($.prototype = P), $);
        })();
        function ln(e) {
          this.animationData = e;
        }
        ln.prototype.getProp = function (e) {
          return this.animationData.slots && this.animationData.slots[e.sid]
            ? Object.assign(e, this.animationData.slots[e.sid].p)
            : e;
        };
        function sn(e) {
          return new ln(e);
        }
        function un() {}
        un.prototype = {
          initRenderable: function () {
            ((this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []));
          },
          addRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) === -1 &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) !== -1 &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1,
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? this.isInRange !== !0 &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : this.isInRange !== !1 &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            var e,
              t = this.renderableComponents.length;
            for (e = 0; e < t; e += 1)
              this.renderableComponents[e].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return this.data.ty === 5
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        };
        var cn = (function () {
          var e = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity",
          };
          return function (t) {
            return e[t] || "";
          };
        })();
        function dn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 0, 0, n);
        }
        function mn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 0, 0, n);
        }
        function pn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 1, 0, n);
        }
        function _n(e, t, n) {
          this.p = Ve.getProp(t, e.v, 1, 0, n);
        }
        function fn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 0, 0, n);
        }
        function gn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 0, 0, n);
        }
        function hn(e, t, n) {
          this.p = Ve.getProp(t, e.v, 0, 0, n);
        }
        function yn() {
          this.p = {};
        }
        function Cn(e, t) {
          var n = e.ef || [];
          this.effectElements = [];
          var r,
            o = n.length,
            a;
          for (r = 0; r < o; r += 1)
            ((a = new bn(n[r], t)), this.effectElements.push(a));
        }
        function bn(e, t) {
          this.init(e, t);
        }
        (d([He], bn),
          (bn.prototype.getValue = bn.prototype.iterateDynamicProperties),
          (bn.prototype.init = function (e, t) {
            ((this.data = e),
              (this.effectElements = []),
              this.initDynamicPropertyContainer(t));
            var n,
              r = this.data.ef.length,
              o,
              a = this.data.ef;
            for (n = 0; n < r; n += 1) {
              switch (((o = null), a[n].ty)) {
                case 0:
                  o = new dn(a[n], t, this);
                  break;
                case 1:
                  o = new mn(a[n], t, this);
                  break;
                case 2:
                  o = new pn(a[n], t, this);
                  break;
                case 3:
                  o = new _n(a[n], t, this);
                  break;
                case 4:
                case 7:
                  o = new hn(a[n], t, this);
                  break;
                case 10:
                  o = new fn(a[n], t, this);
                  break;
                case 11:
                  o = new gn(a[n], t, this);
                  break;
                case 5:
                  o = new Cn(a[n], t, this);
                  break;
                default:
                  o = new yn(a[n], t, this);
                  break;
              }
              o && this.effectElements.push(o);
            }
          }));
        function vn() {}
        vn.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) return !1;
            for (var e = 0, t = this.data.masksProperties.length; e < t; ) {
              if (
                this.data.masksProperties[e].mode !== "n" &&
                this.data.masksProperties[e].cl !== !1
              )
                return !0;
              e += 1;
            }
            return !1;
          },
          initExpressions: function () {
            var e = re();
            if (e) {
              var t = e("layer"),
                n = e("effects"),
                r = e("shape"),
                o = e("text"),
                a = e("comp");
              ((this.layerInterface = t(this)),
                this.data.hasMask &&
                  this.maskManager &&
                  this.layerInterface.registerMaskInterface(this.maskManager));
              var i = n.createEffectsInterface(this, this.layerInterface);
              (this.layerInterface.registerEffectsInterface(i),
                this.data.ty === 0 || this.data.xt
                  ? (this.compInterface = a(this))
                  : this.data.ty === 4
                    ? ((this.layerInterface.shapeInterface = r(
                        this.shapesData,
                        this.itemsData,
                        this.layerInterface,
                      )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : this.data.ty === 5 &&
                      ((this.layerInterface.textInterface = o(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface)));
            }
          },
          setBlendMode: function () {
            var e = cn(this.data.bm),
              t = this.baseElement || this.layerElement;
            t.style["mix-blend-mode"] = e;
          },
          initBaseData: function (t, n, r) {
            ((this.globalData = n),
              (this.comp = r),
              (this.data = t),
              (this.layerId = G()),
              this.data.sr || (this.data.sr = 1),
              (this.effectsManager = new Cn(
                this.data,
                this,
                this.dynamicProperties,
              )));
          },
          getType: function () {
            return this.type;
          },
          sourceRectAtTime: function () {},
        };
        function Sn() {}
        Sn.prototype = {
          initFrame: function () {
            ((this._isFirstFrame = !1),
              (this.dynamicProperties = []),
              (this._mdf = !1));
          },
          prepareProperties: function (t, n) {
            var e,
              r = this.dynamicProperties.length;
            for (e = 0; e < r; e += 1)
              (n ||
                (this._isParent &&
                  this.dynamicProperties[e].propType === "transform")) &&
                (this.dynamicProperties[e].getValue(),
                this.dynamicProperties[e]._mdf &&
                  ((this.globalData._mdf = !0), (this._mdf = !0)));
          },
          addDynamicProperty: function (t) {
            this.dynamicProperties.indexOf(t) === -1 &&
              this.dynamicProperties.push(t);
          },
        };
        function Rn(e, t, n) {
          (this.initFrame(),
            this.initRenderable(),
            (this.assetData = t.getAssetData(e.refId)),
            (this.footageData = t.imageLoader.getAsset(this.assetData)),
            this.initBaseData(e, t, n));
        }
        ((Rn.prototype.prepareFrame = function () {}),
          d([un, vn, Sn], Rn),
          (Rn.prototype.getBaseElement = function () {
            return null;
          }),
          (Rn.prototype.renderFrame = function () {}),
          (Rn.prototype.destroy = function () {}),
          (Rn.prototype.initExpressions = function () {
            var e = re();
            if (e) {
              var t = e("footage");
              this.layerInterface = t(this);
            }
          }),
          (Rn.prototype.getFootageData = function () {
            return this.footageData;
          }));
        function Ln(e, t, n) {
          (this.initFrame(),
            this.initRenderable(),
            (this.assetData = t.getAssetData(e.refId)),
            this.initBaseData(e, t, n),
            (this._isPlaying = !1),
            (this._canPlay = !1));
          var r = this.globalData.getAssetsPath(this.assetData);
          ((this.audio = this.globalData.audioController.createAudio(r)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this._volumeMultiplier = 1),
            (this._volume = 1),
            (this._previousVolume = null),
            (this.tm = e.tm
              ? Ve.getProp(this, e.tm, 0, t.frameRate, this)
              : { _placeholder: !0 }),
            (this.lv = Ve.getProp(
              this,
              e.au && e.au.lv ? e.au.lv : { k: [100] },
              1,
              0.01,
              this,
            )));
        }
        ((Ln.prototype.prepareFrame = function (e) {
          if (
            (this.prepareRenderableFrame(e, !0),
            this.prepareProperties(e, !0),
            this.tm._placeholder)
          )
            this._currentTime = e / this.data.sr;
          else {
            var t = this.tm.v;
            this._currentTime = t;
          }
          this._volume = this.lv.v[0];
          var n = this._volume * this._volumeMultiplier;
          this._previousVolume !== n &&
            ((this._previousVolume = n), this.audio.volume(n));
        }),
          d([un, vn, Sn], Ln),
          (Ln.prototype.renderFrame = function () {
            this.isInRange &&
              this._canPlay &&
              (this._isPlaying
                ? (!this.audio.playing() ||
                    Math.abs(
                      this._currentTime / this.globalData.frameRate -
                        this.audio.seek(),
                    ) > 0.1) &&
                  this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(),
                  this.audio.seek(
                    this._currentTime / this.globalData.frameRate,
                  ),
                  (this._isPlaying = !0)));
          }),
          (Ln.prototype.show = function () {}),
          (Ln.prototype.hide = function () {
            (this.audio.pause(), (this._isPlaying = !1));
          }),
          (Ln.prototype.pause = function () {
            (this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1));
          }),
          (Ln.prototype.resume = function () {
            this._canPlay = !0;
          }),
          (Ln.prototype.setRate = function (e) {
            this.audio.rate(e);
          }),
          (Ln.prototype.volume = function (e) {
            ((this._volumeMultiplier = e),
              (this._previousVolume = e * this._volume),
              this.audio.volume(this._previousVolume));
          }),
          (Ln.prototype.getBaseElement = function () {
            return null;
          }),
          (Ln.prototype.destroy = function () {}),
          (Ln.prototype.sourceRectAtTime = function () {}),
          (Ln.prototype.initExpressions = function () {}));
        function En() {}
        ((En.prototype.checkLayers = function (e) {
          var t,
            n = this.layers.length,
            r;
          for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1)
            (this.elements[t] ||
              ((r = this.layers[t]),
              r.ip - r.st <= e - this.layers[t].st &&
                r.op - r.st > e - this.layers[t].st &&
                this.buildItem(t)),
              (this.completeLayers = this.elements[t]
                ? this.completeLayers
                : !1));
          this.checkPendingElements();
        }),
          (En.prototype.createItem = function (e) {
            switch (e.ty) {
              case 2:
                return this.createImage(e);
              case 0:
                return this.createComp(e);
              case 1:
                return this.createSolid(e);
              case 3:
                return this.createNull(e);
              case 4:
                return this.createShape(e);
              case 5:
                return this.createText(e);
              case 6:
                return this.createAudio(e);
              case 13:
                return this.createCamera(e);
              case 15:
                return this.createFootage(e);
              default:
                return this.createNull(e);
            }
          }),
          (En.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }),
          (En.prototype.createAudio = function (e) {
            return new Ln(e, this.globalData, this);
          }),
          (En.prototype.createFootage = function (e) {
            return new Rn(e, this.globalData, this);
          }),
          (En.prototype.buildAllItems = function () {
            var e,
              t = this.layers.length;
            for (e = 0; e < t; e += 1) this.buildItem(e);
            this.checkPendingElements();
          }),
          (En.prototype.includeLayers = function (e) {
            this.completeLayers = !1;
            var t,
              n = e.length,
              r,
              o = this.layers.length;
            for (t = 0; t < n; t += 1)
              for (r = 0; r < o; ) {
                if (this.layers[r].id === e[t].id) {
                  this.layers[r] = e[t];
                  break;
                }
                r += 1;
              }
          }),
          (En.prototype.setProjectInterface = function (e) {
            this.globalData.projectInterface = e;
          }),
          (En.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          }),
          (En.prototype.buildElementParenting = function (e, t, n) {
            for (
              var r = this.elements, o = this.layers, a = 0, i = o.length;
              a < i;
            )
              (o[a].ind == t &&
                (!r[a] || r[a] === !0
                  ? (this.buildItem(a), this.addPendingElement(e))
                  : (n.push(r[a]),
                    r[a].setAsParent(),
                    o[a].parent !== void 0
                      ? this.buildElementParenting(e, o[a].parent, n)
                      : e.setHierarchy(n))),
                (a += 1));
          }),
          (En.prototype.addPendingElement = function (e) {
            this.pendingElements.push(e);
          }),
          (En.prototype.searchExtraCompositions = function (e) {
            var t,
              n = e.length;
            for (t = 0; t < n; t += 1)
              if (e[t].xt) {
                var r = this.createComp(e[t]);
                (r.initExpressions(),
                  this.globalData.projectInterface.registerComposition(r));
              }
          }),
          (En.prototype.getElementById = function (e) {
            var t,
              n = this.elements.length;
            for (t = 0; t < n; t += 1)
              if (this.elements[t].data.ind === e) return this.elements[t];
            return null;
          }),
          (En.prototype.getElementByPath = function (e) {
            var t = e.shift(),
              n;
            if (typeof t == "number") n = this.elements[t];
            else {
              var r,
                o = this.elements.length;
              for (r = 0; r < o; r += 1)
                if (this.elements[r].data.nm === t) {
                  n = this.elements[r];
                  break;
                }
            }
            return e.length === 0 ? n : n.getElementByPath(e);
          }),
          (En.prototype.setupGlobalData = function (e, t) {
            ((this.globalData.fontManager = new an()),
              (this.globalData.slotManager = sn(e)),
              this.globalData.fontManager.addChars(e.chars),
              this.globalData.fontManager.addFonts(e.fonts, t),
              (this.globalData.getAssetData =
                this.animationItem.getAssetData.bind(this.animationItem)),
              (this.globalData.getAssetsPath =
                this.animationItem.getAssetsPath.bind(this.animationItem)),
              (this.globalData.imageLoader = this.animationItem.imagePreloader),
              (this.globalData.audioController =
                this.animationItem.audioController),
              (this.globalData.frameId = 0),
              (this.globalData.frameRate = e.fr),
              (this.globalData.nm = e.nm),
              (this.globalData.compSize = { w: e.w, h: e.h }));
          }));
        var kn = { TRANSFORM_EFFECT: "transformEFfect" };
        function In() {}
        In.prototype = {
          initTransform: function () {
            var e = new Ye();
            ((this.finalTransform = {
              mProp: this.data.ks
                ? Rt.getTransformProperty(this, this.data.ks, this)
                : { o: 0 },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: e,
              localMat: e,
              localOpacity: 1,
            }),
              this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
              this.data.ty);
          },
          renderTransform: function () {
            if (
              ((this.finalTransform._opMdf =
                this.finalTransform.mProp.o._mdf || this._isFirstFrame),
              (this.finalTransform._matMdf =
                this.finalTransform.mProp._mdf || this._isFirstFrame),
              this.hierarchy)
            ) {
              var e,
                t = this.finalTransform.mat,
                n = 0,
                r = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; n < r; ) {
                  if (this.hierarchy[n].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break;
                  }
                  n += 1;
                }
              if (this.finalTransform._matMdf)
                for (
                  e = this.finalTransform.mProp.v.props,
                    t.cloneFromProps(e),
                    n = 0;
                  n < r;
                  n += 1
                )
                  t.multiply(this.hierarchy[n].finalTransform.mProp.v);
            }
            (this.finalTransform._matMdf &&
              (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
              this.finalTransform._opMdf &&
                (this.finalTransform.localOpacity =
                  this.finalTransform.mProp.o.v));
          },
          renderLocalTransform: function () {
            if (this.localTransforms) {
              var e = 0,
                t = this.localTransforms.length;
              if (
                ((this.finalTransform._localMatMdf =
                  this.finalTransform._matMdf),
                !this.finalTransform._localMatMdf ||
                  !this.finalTransform._opMdf)
              )
                for (; e < t; )
                  (this.localTransforms[e]._mdf &&
                    (this.finalTransform._localMatMdf = !0),
                    this.localTransforms[e]._opMdf &&
                      !this.finalTransform._opMdf &&
                      ((this.finalTransform.localOpacity =
                        this.finalTransform.mProp.o.v),
                      (this.finalTransform._opMdf = !0)),
                    (e += 1));
              if (this.finalTransform._localMatMdf) {
                var n = this.finalTransform.localMat;
                for (
                  this.localTransforms[0].matrix.clone(n), e = 1;
                  e < t;
                  e += 1
                ) {
                  var r = this.localTransforms[e].matrix;
                  n.multiply(r);
                }
                n.multiply(this.finalTransform.mat);
              }
              if (this.finalTransform._opMdf) {
                var o = this.finalTransform.localOpacity;
                for (e = 0; e < t; e += 1)
                  o *= this.localTransforms[e].opacity * 0.01;
                this.finalTransform.localOpacity = o;
              }
            }
          },
          searchEffectTransforms: function () {
            if (this.renderableEffectsManager) {
              var e = this.renderableEffectsManager.getEffects(
                kn.TRANSFORM_EFFECT,
              );
              if (e.length) {
                ((this.localTransforms = []),
                  (this.finalTransform.localMat = new Ye()));
                var t = 0,
                  n = e.length;
                for (t = 0; t < n; t += 1) this.localTransforms.push(e[t]);
              }
            }
          },
          globalToLocal: function (t) {
            var e = [];
            e.push(this.finalTransform);
            for (var n = !0, r = this.comp; n; )
              r.finalTransform
                ? (r.data.hasMask && e.splice(0, 0, r.finalTransform),
                  (r = r.comp))
                : (n = !1);
            var o,
              a = e.length,
              i;
            for (o = 0; o < a; o += 1)
              ((i = e[o].mat.applyToPointArray(0, 0, 0)),
                (t = [t[0] - i[0], t[1] - i[1], 0]));
            return t;
          },
          mHelper: new Ye(),
        };
        function Tn(e, t, n) {
          ((this.data = e),
            (this.element = t),
            (this.globalData = n),
            (this.storedData = []),
            (this.masksProperties = this.data.masksProperties || []),
            (this.maskElement = null));
          var r = this.globalData.defs,
            o,
            a = this.masksProperties ? this.masksProperties.length : 0;
          ((this.viewData = g(a)), (this.solidPath = ""));
          var i,
            l = this.masksProperties,
            s = 0,
            c = [],
            d,
            m,
            p = G(),
            _,
            f,
            h,
            y,
            C = "clipPath",
            b = "clip-path";
          for (o = 0; o < a; o += 1)
            if (
              (((l[o].mode !== "a" && l[o].mode !== "n") ||
                l[o].inv ||
                l[o].o.k !== 100 ||
                l[o].o.x) &&
                ((C = "mask"), (b = "mask")),
              (l[o].mode === "s" || l[o].mode === "i") && s === 0
                ? ((_ = se("rect")),
                  _.setAttribute("fill", "#ffffff"),
                  _.setAttribute("width", this.element.comp.data.w || 0),
                  _.setAttribute("height", this.element.comp.data.h || 0),
                  c.push(_))
                : (_ = null),
              (i = se("path")),
              l[o].mode === "n")
            )
              ((this.viewData[o] = {
                op: Ve.getProp(this.element, l[o].o, 0, 0.01, this.element),
                prop: Xe.getShapeProp(this.element, l[o], 3),
                elem: i,
                lastPath: "",
              }),
                r.appendChild(i));
            else {
              ((s += 1),
                i.setAttribute(
                  "fill",
                  l[o].mode === "s" ? "#000000" : "#ffffff",
                ),
                i.setAttribute("clip-rule", "nonzero"));
              var v;
              if (
                (l[o].x.k !== 0
                  ? ((C = "mask"),
                    (b = "mask"),
                    (y = Ve.getProp(
                      this.element,
                      l[o].x,
                      0,
                      null,
                      this.element,
                    )),
                    (v = G()),
                    (f = se("filter")),
                    f.setAttribute("id", v),
                    (h = se("feMorphology")),
                    h.setAttribute("operator", "erode"),
                    h.setAttribute("in", "SourceGraphic"),
                    h.setAttribute("radius", "0"),
                    f.appendChild(h),
                    r.appendChild(f),
                    i.setAttribute(
                      "stroke",
                      l[o].mode === "s" ? "#000000" : "#ffffff",
                    ))
                  : ((h = null), (y = null)),
                (this.storedData[o] = {
                  elem: i,
                  x: y,
                  expan: h,
                  lastPath: "",
                  lastOperator: "",
                  filterId: v,
                  lastRadius: 0,
                }),
                l[o].mode === "i")
              ) {
                m = c.length;
                var S = se("g");
                for (d = 0; d < m; d += 1) S.appendChild(c[d]);
                var R = se("mask");
                (R.setAttribute("mask-type", "alpha"),
                  R.setAttribute("id", p + "_" + s),
                  R.appendChild(i),
                  r.appendChild(R),
                  S.setAttribute(
                    "mask",
                    "url(" + u() + "#" + p + "_" + s + ")",
                  ),
                  (c.length = 0),
                  c.push(S));
              } else c.push(i);
              (l[o].inv &&
                !this.solidPath &&
                (this.solidPath = this.createLayerSolidPath()),
                (this.viewData[o] = {
                  elem: i,
                  lastPath: "",
                  op: Ve.getProp(this.element, l[o].o, 0, 0.01, this.element),
                  prop: Xe.getShapeProp(this.element, l[o], 3),
                  invRect: _,
                }),
                this.viewData[o].prop.k ||
                  this.drawPath(
                    l[o],
                    this.viewData[o].prop.v,
                    this.viewData[o],
                  ));
            }
          for (this.maskElement = se(C), a = c.length, o = 0; o < a; o += 1)
            this.maskElement.appendChild(c[o]);
          (s > 0 &&
            (this.maskElement.setAttribute("id", p),
            this.element.maskedElement.setAttribute(
              b,
              "url(" + u() + "#" + p + ")",
            ),
            r.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this));
        }
        ((Tn.prototype.getMaskProperty = function (e) {
          return this.viewData[e].prop;
        }),
          (Tn.prototype.renderFrame = function (e) {
            var t = this.element.finalTransform.mat,
              n,
              r = this.masksProperties.length;
            for (n = 0; n < r; n += 1)
              if (
                ((this.viewData[n].prop._mdf || e) &&
                  this.drawPath(
                    this.masksProperties[n],
                    this.viewData[n].prop.v,
                    this.viewData[n],
                  ),
                (this.viewData[n].op._mdf || e) &&
                  this.viewData[n].elem.setAttribute(
                    "fill-opacity",
                    this.viewData[n].op.v,
                  ),
                this.masksProperties[n].mode !== "n" &&
                  (this.viewData[n].invRect &&
                    (this.element.finalTransform.mProp._mdf || e) &&
                    this.viewData[n].invRect.setAttribute(
                      "transform",
                      t.getInverseMatrix().to2dCSS(),
                    ),
                  this.storedData[n].x && (this.storedData[n].x._mdf || e)))
              ) {
                var o = this.storedData[n].expan;
                this.storedData[n].x.v < 0
                  ? (this.storedData[n].lastOperator !== "erode" &&
                      ((this.storedData[n].lastOperator = "erode"),
                      this.storedData[n].elem.setAttribute(
                        "filter",
                        "url(" + u() + "#" + this.storedData[n].filterId + ")",
                      )),
                    o.setAttribute("radius", -this.storedData[n].x.v))
                  : (this.storedData[n].lastOperator !== "dilate" &&
                      ((this.storedData[n].lastOperator = "dilate"),
                      this.storedData[n].elem.setAttribute("filter", null)),
                    this.storedData[n].elem.setAttribute(
                      "stroke-width",
                      this.storedData[n].x.v * 2,
                    ));
              }
          }),
          (Tn.prototype.getMaskelement = function () {
            return this.maskElement;
          }),
          (Tn.prototype.createLayerSolidPath = function () {
            var e = "M0,0 ";
            return (
              (e += " h" + this.globalData.compSize.w),
              (e += " v" + this.globalData.compSize.h),
              (e += " h-" + this.globalData.compSize.w),
              (e += " v-" + this.globalData.compSize.h + " "),
              e
            );
          }),
          (Tn.prototype.drawPath = function (e, t, n) {
            var r = " M" + t.v[0][0] + "," + t.v[0][1],
              o,
              a;
            for (a = t._length, o = 1; o < a; o += 1)
              r +=
                " C" +
                t.o[o - 1][0] +
                "," +
                t.o[o - 1][1] +
                " " +
                t.i[o][0] +
                "," +
                t.i[o][1] +
                " " +
                t.v[o][0] +
                "," +
                t.v[o][1];
            if (
              (t.c &&
                a > 1 &&
                (r +=
                  " C" +
                  t.o[o - 1][0] +
                  "," +
                  t.o[o - 1][1] +
                  " " +
                  t.i[0][0] +
                  "," +
                  t.i[0][1] +
                  " " +
                  t.v[0][0] +
                  "," +
                  t.v[0][1]),
              n.lastPath !== r)
            ) {
              var i = "";
              (n.elem &&
                (t.c && (i = e.inv ? this.solidPath + r : r),
                n.elem.setAttribute("d", i)),
                (n.lastPath = r));
            }
          }),
          (Tn.prototype.destroy = function () {
            ((this.element = null),
              (this.globalData = null),
              (this.maskElement = null),
              (this.data = null),
              (this.masksProperties = null));
          }));
        var Dn = (function () {
            var e = {};
            ((e.createFilter = t), (e.createAlphaToLuminanceFilter = n));
            function t(e, t) {
              var n = se("filter");
              return (
                n.setAttribute("id", e),
                t !== !0 &&
                  (n.setAttribute("filterUnits", "objectBoundingBox"),
                  n.setAttribute("x", "0%"),
                  n.setAttribute("y", "0%"),
                  n.setAttribute("width", "100%"),
                  n.setAttribute("height", "100%")),
                n
              );
            }
            function n() {
              var e = se("feColorMatrix");
              return (
                e.setAttribute("type", "matrix"),
                e.setAttribute("color-interpolation-filters", "sRGB"),
                e.setAttribute(
                  "values",
                  "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1",
                ),
                e
              );
            }
            return e;
          })(),
          xn = (function () {
            var e = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: typeof OffscreenCanvas != "undefined",
            };
            return (
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (e.maskType = !1),
              /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1),
              e
            );
          })(),
          $n = {},
          Pn = "filter_result_";
        function Nn(e) {
          var t,
            n = "SourceGraphic",
            r = e.data.ef ? e.data.ef.length : 0,
            o = G(),
            a = Dn.createFilter(o, !0),
            i = 0;
          this.filters = [];
          var l;
          for (t = 0; t < r; t += 1) {
            l = null;
            var s = e.data.ef[t].ty;
            if ($n[s]) {
              var c = $n[s].effect;
              ((l = new c(a, e.effectsManager.effectElements[t], e, Pn + i, n)),
                (n = Pn + i),
                $n[s].countsAsEffect && (i += 1));
            }
            l && this.filters.push(l);
          }
          (i &&
            (e.globalData.defs.appendChild(a),
            e.layerElement.setAttribute(
              "filter",
              "url(" + u() + "#" + o + ")",
            )),
            this.filters.length && e.addRenderableComponent(this));
        }
        ((Nn.prototype.renderFrame = function (e) {
          var t,
            n = this.filters.length;
          for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
          (Nn.prototype.getEffects = function (e) {
            var t,
              n = this.filters.length,
              r = [];
            for (t = 0; t < n; t += 1)
              this.filters[t].type === e && r.push(this.filters[t]);
            return r;
          }));
        function Mn(e, t, n) {
          $n[e] = { effect: t, countsAsEffect: n };
        }
        function wn() {}
        wn.prototype = {
          initRendererElement: function () {
            this.layerElement = se("g");
          },
          createContainerElements: function () {
            ((this.matteElement = se("g")),
              (this.transformedElement = this.layerElement),
              (this.maskedElement = this.layerElement),
              (this._sizeChanged = !1));
            var e = null;
            if (this.data.td) {
              this.matteMasks = {};
              var t = se("g");
              (t.setAttribute("id", this.layerId),
                t.appendChild(this.layerElement),
                (e = t),
                this.globalData.defs.appendChild(t));
            } else
              this.data.tt
                ? (this.matteElement.appendChild(this.layerElement),
                  (e = this.matteElement),
                  (this.baseElement = this.matteElement))
                : (this.baseElement = this.layerElement);
            if (
              (this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl),
              this.data.ty === 0 && !this.data.hd)
            ) {
              var n = se("clipPath"),
                r = se("path");
              r.setAttribute(
                "d",
                "M0,0 L" +
                  this.data.w +
                  ",0 L" +
                  this.data.w +
                  "," +
                  this.data.h +
                  " L0," +
                  this.data.h +
                  "z",
              );
              var o = G();
              if (
                (n.setAttribute("id", o),
                n.appendChild(r),
                this.globalData.defs.appendChild(n),
                this.checkMasks())
              ) {
                var a = se("g");
                (a.setAttribute("clip-path", "url(" + u() + "#" + o + ")"),
                  a.appendChild(this.layerElement),
                  (this.transformedElement = a),
                  e
                    ? e.appendChild(this.transformedElement)
                    : (this.baseElement = this.transformedElement));
              } else
                this.layerElement.setAttribute(
                  "clip-path",
                  "url(" + u() + "#" + o + ")",
                );
            }
            this.data.bm !== 0 && this.setBlendMode();
          },
          renderElement: function () {
            (this.finalTransform._localMatMdf &&
              this.transformedElement.setAttribute(
                "transform",
                this.finalTransform.localMat.to2dCSS(),
              ),
              this.finalTransform._opMdf &&
                this.transformedElement.setAttribute(
                  "opacity",
                  this.finalTransform.localOpacity,
                ));
          },
          destroyBaseElement: function () {
            ((this.layerElement = null),
              (this.matteElement = null),
              this.maskManager.destroy());
          },
          getBaseElement: function () {
            return this.data.hd ? null : this.baseElement;
          },
          createRenderableComponents: function () {
            ((this.maskManager = new Tn(this.data, this, this.globalData)),
              (this.renderableEffectsManager = new Nn(this)),
              this.searchEffectTransforms());
          },
          getMatte: function (t) {
            if (
              (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t])
            ) {
              var e = this.layerId + "_" + t,
                n,
                r,
                o,
                a;
              if (t === 1 || t === 3) {
                var i = se("mask");
                (i.setAttribute("id", e),
                  i.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"),
                  (o = se("use")),
                  o.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    "#" + this.layerId,
                  ),
                  i.appendChild(o),
                  this.globalData.defs.appendChild(i),
                  !xn.maskType &&
                    t === 1 &&
                    (i.setAttribute("mask-type", "luminance"),
                    (n = G()),
                    (r = Dn.createFilter(n)),
                    this.globalData.defs.appendChild(r),
                    r.appendChild(Dn.createAlphaToLuminanceFilter()),
                    (a = se("g")),
                    a.appendChild(o),
                    i.appendChild(a),
                    a.setAttribute("filter", "url(" + u() + "#" + n + ")")));
              } else if (t === 2) {
                var l = se("mask");
                (l.setAttribute("id", e), l.setAttribute("mask-type", "alpha"));
                var s = se("g");
                (l.appendChild(s), (n = G()), (r = Dn.createFilter(n)));
                var c = se("feComponentTransfer");
                (c.setAttribute("in", "SourceGraphic"), r.appendChild(c));
                var d = se("feFuncA");
                (d.setAttribute("type", "table"),
                  d.setAttribute("tableValues", "1.0 0.0"),
                  c.appendChild(d),
                  this.globalData.defs.appendChild(r));
                var m = se("rect");
                (m.setAttribute("width", this.comp.data.w),
                  m.setAttribute("height", this.comp.data.h),
                  m.setAttribute("x", "0"),
                  m.setAttribute("y", "0"),
                  m.setAttribute("fill", "#ffffff"),
                  m.setAttribute("opacity", "0"),
                  s.setAttribute("filter", "url(" + u() + "#" + n + ")"),
                  s.appendChild(m),
                  (o = se("use")),
                  o.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    "#" + this.layerId,
                  ),
                  s.appendChild(o),
                  xn.maskType ||
                    (l.setAttribute("mask-type", "luminance"),
                    r.appendChild(Dn.createAlphaToLuminanceFilter()),
                    (a = se("g")),
                    s.appendChild(m),
                    a.appendChild(this.layerElement),
                    s.appendChild(a)),
                  this.globalData.defs.appendChild(l));
              }
              this.matteMasks[t] = e;
            }
            return this.matteMasks[t];
          },
          setMatte: function (t) {
            this.matteElement &&
              this.matteElement.setAttribute(
                "mask",
                "url(" + u() + "#" + t + ")",
              );
          },
        };
        function An() {}
        An.prototype = {
          initHierarchy: function () {
            ((this.hierarchy = []),
              (this._isParent = !1),
              this.checkParenting());
          },
          setHierarchy: function (t) {
            this.hierarchy = t;
          },
          setAsParent: function () {
            this._isParent = !0;
          },
          checkParenting: function () {
            this.data.parent !== void 0 &&
              this.comp.buildElementParenting(this, this.data.parent, []);
          },
        };
        function Fn() {}
        (function () {
          var e = {
            initElement: function (t, n, r) {
              (this.initFrame(),
                this.initBaseData(t, n, r),
                this.initTransform(t, n, r),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide());
            },
            hide: function () {
              if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                var e = this.baseElement || this.layerElement;
                ((e.style.display = "none"), (this.hidden = !0));
              }
            },
            show: function () {
              if (this.isInRange && !this.isTransparent) {
                if (!this.data.hd) {
                  var e = this.baseElement || this.layerElement;
                  e.style.display = "block";
                }
                ((this.hidden = !1), (this._isFirstFrame = !0));
              }
            },
            renderFrame: function () {
              this.data.hd ||
                this.hidden ||
                (this.renderTransform(),
                this.renderRenderable(),
                this.renderLocalTransform(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1));
            },
            renderInnerContent: function () {},
            prepareFrame: function (t) {
              ((this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.checkTransparency());
            },
            destroy: function () {
              ((this.innerElem = null), this.destroyBaseElement());
            },
          };
          d([un, p(e)], Fn);
        })();
        function On(e, t, n) {
          ((this.assetData = t.getAssetData(e.refId)),
            this.assetData &&
              this.assetData.sid &&
              (this.assetData = t.slotManager.getProp(this.assetData)),
            this.initElement(e, t, n),
            (this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            }));
        }
        (d([vn, In, wn, An, Sn, Fn], On),
          (On.prototype.createContent = function () {
            var e = this.globalData.getAssetsPath(this.assetData);
            ((this.innerElem = se("image")),
              this.innerElem.setAttribute("width", this.assetData.w + "px"),
              this.innerElem.setAttribute("height", this.assetData.h + "px"),
              this.innerElem.setAttribute(
                "preserveAspectRatio",
                this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio,
              ),
              this.innerElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                e,
              ),
              this.layerElement.appendChild(this.innerElem));
          }),
          (On.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          }));
        function Bn(e, t) {
          ((this.elem = e), (this.pos = t));
        }
        function Wn() {}
        Wn.prototype = {
          addShapeToModifiers: function (t) {
            var e,
              n = this.shapeModifiers.length;
            for (e = 0; e < n; e += 1) this.shapeModifiers[e].addShape(t);
          },
          isShapeInAnimatedModifiers: function (t) {
            for (var e = 0, n = this.shapeModifiers.length; e < n; )
              if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
            return !1;
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              var e,
                t = this.shapes.length;
              for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
              t = this.shapeModifiers.length;
              var n;
              for (
                e = t - 1;
                e >= 0 &&
                ((n = this.shapeModifiers[e].processShapes(this._isFirstFrame)),
                !n);
                e -= 1
              );
            }
          },
          searchProcessedElement: function (t) {
            for (var e = this.processedElements, n = 0, r = e.length; n < r; ) {
              if (e[n].elem === t) return e[n].pos;
              n += 1;
            }
            return 0;
          },
          addProcessedElement: function (t, n) {
            for (var e = this.processedElements, r = e.length; r; )
              if (((r -= 1), e[r].elem === t)) {
                e[r].pos = n;
                return;
              }
            e.push(new Bn(t, n));
          },
          prepareFrame: function (t) {
            (this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange));
          },
        };
        var qn = { 1: "butt", 2: "round", 3: "square" },
          Un = { 1: "miter", 2: "round", 3: "bevel" };
        function Vn(e, t, n) {
          ((this.caches = []),
            (this.styles = []),
            (this.transformers = e),
            (this.lStr = ""),
            (this.sh = n),
            (this.lvl = t),
            (this._isAnimated = !!n.k));
          for (var r = 0, o = e.length; r < o; ) {
            if (e[r].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break;
            }
            r += 1;
          }
        }
        Vn.prototype.setAsAnimated = function () {
          this._isAnimated = !0;
        };
        function Hn(e, t) {
          ((this.data = e),
            (this.type = e.ty),
            (this.d = ""),
            (this.lvl = t),
            (this._mdf = !1),
            (this.closed = e.hd === !0),
            (this.pElem = se("path")),
            (this.msElem = null));
        }
        Hn.prototype.reset = function () {
          ((this.d = ""), (this._mdf = !1));
        };
        function Gn(e, t, n, r) {
          ((this.elem = e),
            (this.frameId = -1),
            (this.dataProps = g(t.length)),
            (this.renderer = n),
            (this.k = !1),
            (this.dashStr = ""),
            (this.dashArray = f("float32", t.length ? t.length - 1 : 0)),
            (this.dashoffset = f("float32", 1)),
            this.initDynamicPropertyContainer(r));
          var o,
            a = t.length || 0,
            i;
          for (o = 0; o < a; o += 1)
            ((i = Ve.getProp(e, t[o].v, 0, 0, this)),
              (this.k = i.k || this.k),
              (this.dataProps[o] = { n: t[o].n, p: i }));
          (this.k || this.getValue(!0), (this._isAnimated = this.k));
        }
        ((Gn.prototype.getValue = function (e) {
          if (
            !(this.elem.globalData.frameId === this.frameId && !e) &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties(),
            (this._mdf = this._mdf || e),
            this._mdf)
          ) {
            var t = 0,
              n = this.dataProps.length;
            for (
              this.renderer === "svg" && (this.dashStr = ""), t = 0;
              t < n;
              t += 1
            )
              this.dataProps[t].n !== "o"
                ? this.renderer === "svg"
                  ? (this.dashStr += " " + this.dataProps[t].p.v)
                  : (this.dashArray[t] = this.dataProps[t].p.v)
                : (this.dashoffset[0] = this.dataProps[t].p.v);
          }
        }),
          d([He], Gn));
        function zn(e, t, n) {
          (this.initDynamicPropertyContainer(e),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = Ve.getProp(e, t.o, 0, 0.01, this)),
            (this.w = Ve.getProp(e, t.w, 0, null, this)),
            (this.d = new Gn(e, t.d || {}, "svg", this)),
            (this.c = Ve.getProp(e, t.c, 1, 255, this)),
            (this.style = n),
            (this._isAnimated = !!this._isAnimated));
        }
        d([He], zn);
        function jn(e, t, n) {
          (this.initDynamicPropertyContainer(e),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = Ve.getProp(e, t.o, 0, 0.01, this)),
            (this.c = Ve.getProp(e, t.c, 1, 255, this)),
            (this.style = n));
        }
        d([He], jn);
        function Kn(e, t, n) {
          (this.initDynamicPropertyContainer(e),
            (this.getValue = this.iterateDynamicProperties),
            (this.style = n));
        }
        d([He], Kn);
        function Qn(e, t, n) {
          ((this.data = t), (this.c = f("uint8c", t.p * 4)));
          var r = t.k.k[0].s
            ? t.k.k[0].s.length - t.p * 4
            : t.k.k.length - t.p * 4;
          ((this.o = f("float32", r)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = r),
            this.initDynamicPropertyContainer(n),
            (this.prop = Ve.getProp(e, t.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0));
        }
        ((Qn.prototype.comparePoints = function (e, t) {
          for (var n = 0, r = this.o.length / 2, o; n < r; ) {
            if (((o = Math.abs(e[n * 4] - e[t * 4 + n * 2])), o > 0.01))
              return !1;
            n += 1;
          }
          return !0;
        }),
          (Qn.prototype.checkCollapsable = function () {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var e = 0, t = this.data.k.k.length; e < t; ) {
                if (!this.comparePoints(this.data.k.k[e].s, this.data.p))
                  return !1;
                e += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          }),
          (Qn.prototype.getValue = function (e) {
            if (
              (this.prop.getValue(),
              (this._mdf = !1),
              (this._cmdf = !1),
              (this._omdf = !1),
              this.prop._mdf || e)
            ) {
              var t,
                n = this.data.p * 4,
                r,
                o;
              for (t = 0; t < n; t += 1)
                ((r = t % 4 === 0 ? 100 : 255),
                  (o = Math.round(this.prop.v[t] * r)),
                  this.c[t] !== o && ((this.c[t] = o), (this._cmdf = !e)));
              if (this.o.length)
                for (n = this.prop.v.length, t = this.data.p * 4; t < n; t += 1)
                  ((r = t % 2 === 0 ? 100 : 1),
                    (o =
                      t % 2 === 0
                        ? Math.round(this.prop.v[t] * 100)
                        : this.prop.v[t]),
                    this.o[t - this.data.p * 4] !== o &&
                      ((this.o[t - this.data.p * 4] = o), (this._omdf = !e)));
              this._mdf = !e;
            }
          }),
          d([He], Qn));
        function Xn(e, t, n) {
          (this.initDynamicPropertyContainer(e),
            (this.getValue = this.iterateDynamicProperties),
            this.initGradientData(e, t, n));
        }
        ((Xn.prototype.initGradientData = function (e, t, n) {
          ((this.o = Ve.getProp(e, t.o, 0, 0.01, this)),
            (this.s = Ve.getProp(e, t.s, 1, null, this)),
            (this.e = Ve.getProp(e, t.e, 1, null, this)),
            (this.h = Ve.getProp(e, t.h || { k: 0 }, 0, 0.01, this)),
            (this.a = Ve.getProp(e, t.a || { k: 0 }, 0, P, this)),
            (this.g = new Qn(e, t.g, this)),
            (this.style = n),
            (this.stops = []),
            this.setGradientData(n.pElem, t),
            this.setGradientOpacity(t, n),
            (this._isAnimated = !!this._isAnimated));
        }),
          (Xn.prototype.setGradientData = function (e, t) {
            var n = G(),
              r = se(t.t === 1 ? "linearGradient" : "radialGradient");
            (r.setAttribute("id", n),
              r.setAttribute("spreadMethod", "pad"),
              r.setAttribute("gradientUnits", "userSpaceOnUse"));
            var o = [],
              a,
              i,
              l;
            for (l = t.g.p * 4, i = 0; i < l; i += 4)
              ((a = se("stop")), r.appendChild(a), o.push(a));
            (e.setAttribute(
              t.ty === "gf" ? "fill" : "stroke",
              "url(" + u() + "#" + n + ")",
            ),
              (this.gf = r),
              (this.cst = o));
          }),
          (Xn.prototype.setGradientOpacity = function (e, t) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var n,
                r,
                o,
                a = se("mask"),
                i = se("path");
              a.appendChild(i);
              var l = G(),
                s = G();
              a.setAttribute("id", s);
              var c = se(e.t === 1 ? "linearGradient" : "radialGradient");
              (c.setAttribute("id", l),
                c.setAttribute("spreadMethod", "pad"),
                c.setAttribute("gradientUnits", "userSpaceOnUse"),
                (o = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length));
              var d = this.stops;
              for (r = e.g.p * 4; r < o; r += 2)
                ((n = se("stop")),
                  n.setAttribute("stop-color", "rgb(255,255,255)"),
                  c.appendChild(n),
                  d.push(n));
              (i.setAttribute(
                e.ty === "gf" ? "fill" : "stroke",
                "url(" + u() + "#" + l + ")",
              ),
                e.ty === "gs" &&
                  (i.setAttribute("stroke-linecap", qn[e.lc || 2]),
                  i.setAttribute("stroke-linejoin", Un[e.lj || 2]),
                  e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)),
                (this.of = c),
                (this.ms = a),
                (this.ost = d),
                (this.maskId = s),
                (t.msElem = i));
            }
          }),
          d([He], Xn));
        function Yn(e, t, n) {
          (this.initDynamicPropertyContainer(e),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = Ve.getProp(e, t.w, 0, null, this)),
            (this.d = new Gn(e, t.d || {}, "svg", this)),
            this.initGradientData(e, t, n),
            (this._isAnimated = !!this._isAnimated));
        }
        d([Xn, He], Yn);
        function Jn() {
          ((this.it = []), (this.prevViewData = []), (this.gr = se("g")));
        }
        function Zn(e, t, n) {
          ((this.transform = { mProps: e, op: t, container: n }),
            (this.elements = []),
            (this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length));
        }
        var er = function (t, n, r, o) {
            if (n === 0) return "";
            var e = t.o,
              a = t.i,
              i = t.v,
              l,
              s = " M" + o.applyToPointStringified(i[0][0], i[0][1]);
            for (l = 1; l < n; l += 1)
              s +=
                " C" +
                o.applyToPointStringified(e[l - 1][0], e[l - 1][1]) +
                " " +
                o.applyToPointStringified(a[l][0], a[l][1]) +
                " " +
                o.applyToPointStringified(i[l][0], i[l][1]);
            return (
              r &&
                n &&
                ((s +=
                  " C" +
                  o.applyToPointStringified(e[l - 1][0], e[l - 1][1]) +
                  " " +
                  o.applyToPointStringified(a[0][0], a[0][1]) +
                  " " +
                  o.applyToPointStringified(i[0][0], i[0][1])),
                (s += "z")),
              s
            );
          },
          tr = (function () {
            var e = new Ye(),
              t = new Ye(),
              n = { createRenderFunction: r };
            function r(e) {
              switch (e.ty) {
                case "fl":
                  return l;
                case "gf":
                  return u;
                case "gs":
                  return s;
                case "st":
                  return c;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return i;
                case "tr":
                  return o;
                case "no":
                  return a;
                default:
                  return null;
              }
            }
            function o(e, t, n) {
              ((n || t.transform.op._mdf) &&
                t.transform.container.setAttribute("opacity", t.transform.op.v),
                (n || t.transform.mProps._mdf) &&
                  t.transform.container.setAttribute(
                    "transform",
                    t.transform.mProps.v.to2dCSS(),
                  ));
            }
            function a() {}
            function i(n, r, o) {
              var a,
                i,
                l,
                s,
                u,
                c,
                d = r.styles.length,
                m = r.lvl,
                p,
                _,
                f,
                g;
              for (c = 0; c < d; c += 1) {
                if (((s = r.sh._mdf || o), r.styles[c].lvl < m)) {
                  for (
                    _ = t.reset(),
                      f = m - r.styles[c].lvl,
                      g = r.transformers.length - 1;
                    !s && f > 0;
                  )
                    ((s = r.transformers[g].mProps._mdf || s),
                      (f -= 1),
                      (g -= 1));
                  if (s)
                    for (
                      f = m - r.styles[c].lvl, g = r.transformers.length - 1;
                      f > 0;
                    )
                      (_.multiply(r.transformers[g].mProps.v),
                        (f -= 1),
                        (g -= 1));
                } else _ = e;
                if (((p = r.sh.paths), (i = p._length), s)) {
                  for (l = "", a = 0; a < i; a += 1)
                    ((u = p.shapes[a]),
                      u && u._length && (l += er(u, u._length, u.c, _)));
                  r.caches[c] = l;
                } else l = r.caches[c];
                ((r.styles[c].d += n.hd === !0 ? "" : l),
                  (r.styles[c]._mdf = s || r.styles[c]._mdf));
              }
            }
            function l(e, t, n) {
              var r = t.style;
              ((t.c._mdf || n) &&
                r.pElem.setAttribute(
                  "fill",
                  "rgb(" +
                    k(t.c.v[0]) +
                    "," +
                    k(t.c.v[1]) +
                    "," +
                    k(t.c.v[2]) +
                    ")",
                ),
                (t.o._mdf || n) && r.pElem.setAttribute("fill-opacity", t.o.v));
            }
            function s(e, t, n) {
              (u(e, t, n), c(e, t, n));
            }
            function u(e, t, n) {
              var r = t.gf,
                o = t.g._hasOpacity,
                a = t.s.v,
                i = t.e.v;
              if (t.o._mdf || n) {
                var l = e.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                t.style.pElem.setAttribute(l, t.o.v);
              }
              if (t.s._mdf || n) {
                var s = e.t === 1 ? "x1" : "cx",
                  u = s === "x1" ? "y1" : "cy";
                (r.setAttribute(s, a[0]),
                  r.setAttribute(u, a[1]),
                  o &&
                    !t.g._collapsable &&
                    (t.of.setAttribute(s, a[0]), t.of.setAttribute(u, a[1])));
              }
              var c, d, m, p;
              if (t.g._cmdf || n) {
                c = t.cst;
                var _ = t.g.c;
                for (m = c.length, d = 0; d < m; d += 1)
                  ((p = c[d]),
                    p.setAttribute("offset", _[d * 4] + "%"),
                    p.setAttribute(
                      "stop-color",
                      "rgb(" +
                        _[d * 4 + 1] +
                        "," +
                        _[d * 4 + 2] +
                        "," +
                        _[d * 4 + 3] +
                        ")",
                    ));
              }
              if (o && (t.g._omdf || n)) {
                var f = t.g.o;
                for (
                  t.g._collapsable ? (c = t.cst) : (c = t.ost),
                    m = c.length,
                    d = 0;
                  d < m;
                  d += 1
                )
                  ((p = c[d]),
                    t.g._collapsable ||
                      p.setAttribute("offset", f[d * 2] + "%"),
                    p.setAttribute("stop-opacity", f[d * 2 + 1]));
              }
              if (e.t === 1)
                (t.e._mdf || n) &&
                  (r.setAttribute("x2", i[0]),
                  r.setAttribute("y2", i[1]),
                  o &&
                    !t.g._collapsable &&
                    (t.of.setAttribute("x2", i[0]),
                    t.of.setAttribute("y2", i[1])));
              else {
                var g;
                if (
                  ((t.s._mdf || t.e._mdf || n) &&
                    ((g = Math.sqrt(
                      Math.pow(a[0] - i[0], 2) + Math.pow(a[1] - i[1], 2),
                    )),
                    r.setAttribute("r", g),
                    o && !t.g._collapsable && t.of.setAttribute("r", g)),
                  t.e._mdf || t.h._mdf || t.a._mdf || n)
                ) {
                  g ||
                    (g = Math.sqrt(
                      Math.pow(a[0] - i[0], 2) + Math.pow(a[1] - i[1], 2),
                    ));
                  var h = Math.atan2(i[1] - a[1], i[0] - a[0]),
                    y = t.h.v;
                  y >= 1 ? (y = 0.99) : y <= -1 && (y = -0.99);
                  var C = g * y,
                    b = Math.cos(h + t.a.v) * C + a[0],
                    v = Math.sin(h + t.a.v) * C + a[1];
                  (r.setAttribute("fx", b),
                    r.setAttribute("fy", v),
                    o &&
                      !t.g._collapsable &&
                      (t.of.setAttribute("fx", b), t.of.setAttribute("fy", v)));
                }
              }
            }
            function c(e, t, n) {
              var r = t.style,
                o = t.d;
              (o &&
                (o._mdf || n) &&
                o.dashStr &&
                (r.pElem.setAttribute("stroke-dasharray", o.dashStr),
                r.pElem.setAttribute("stroke-dashoffset", o.dashoffset[0])),
                t.c &&
                  (t.c._mdf || n) &&
                  r.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      k(t.c.v[0]) +
                      "," +
                      k(t.c.v[1]) +
                      "," +
                      k(t.c.v[2]) +
                      ")",
                  ),
                (t.o._mdf || n) &&
                  r.pElem.setAttribute("stroke-opacity", t.o.v),
                (t.w._mdf || n) &&
                  (r.pElem.setAttribute("stroke-width", t.w.v),
                  r.msElem && r.msElem.setAttribute("stroke-width", t.w.v)));
            }
            return n;
          })();
        function nr(e, t, n) {
          ((this.shapes = []),
            (this.shapesData = e.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(e, t, n),
            (this.prevViewData = []));
        }
        (d([vn, In, wn, Wn, An, Sn, Fn], nr),
          (nr.prototype.initSecondaryElement = function () {}),
          (nr.prototype.identityMatrix = new Ye()),
          (nr.prototype.buildExpressionInterface = function () {}),
          (nr.prototype.createContent = function () {
            (this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0,
            ),
              this.filterUniqueShapes());
          }),
          (nr.prototype.filterUniqueShapes = function () {
            var e,
              t = this.shapes.length,
              n,
              r,
              o = this.stylesList.length,
              a,
              i = [],
              l = !1;
            for (r = 0; r < o; r += 1) {
              for (
                a = this.stylesList[r], l = !1, i.length = 0, e = 0;
                e < t;
                e += 1
              )
                ((n = this.shapes[e]),
                  n.styles.indexOf(a) !== -1 &&
                    (i.push(n), (l = n._isAnimated || l)));
              i.length > 1 && l && this.setShapesAsAnimated(i);
            }
          }),
          (nr.prototype.setShapesAsAnimated = function (e) {
            var t,
              n = e.length;
            for (t = 0; t < n; t += 1) e[t].setAsAnimated();
          }),
          (nr.prototype.createStyleElement = function (e, t) {
            var n,
              r = new Hn(e, t),
              o = r.pElem;
            if (e.ty === "st") n = new zn(this, e, r);
            else if (e.ty === "fl") n = new jn(this, e, r);
            else if (e.ty === "gf" || e.ty === "gs") {
              var a = e.ty === "gf" ? Xn : Yn;
              ((n = new a(this, e, r)),
                this.globalData.defs.appendChild(n.gf),
                n.maskId &&
                  (this.globalData.defs.appendChild(n.ms),
                  this.globalData.defs.appendChild(n.of),
                  o.setAttribute("mask", "url(" + u() + "#" + n.maskId + ")")));
            } else e.ty === "no" && (n = new Kn(this, e, r));
            return (
              (e.ty === "st" || e.ty === "gs") &&
                (o.setAttribute("stroke-linecap", qn[e.lc || 2]),
                o.setAttribute("stroke-linejoin", Un[e.lj || 2]),
                o.setAttribute("fill-opacity", "0"),
                e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)),
              e.r === 2 && o.setAttribute("fill-rule", "evenodd"),
              e.ln && o.setAttribute("id", e.ln),
              e.cl && o.setAttribute("class", e.cl),
              e.bm && (o.style["mix-blend-mode"] = cn(e.bm)),
              this.stylesList.push(r),
              this.addToAnimatedContents(e, n),
              n
            );
          }),
          (nr.prototype.createGroupElement = function (e) {
            var t = new Jn();
            return (
              e.ln && t.gr.setAttribute("id", e.ln),
              e.cl && t.gr.setAttribute("class", e.cl),
              e.bm && (t.gr.style["mix-blend-mode"] = cn(e.bm)),
              t
            );
          }),
          (nr.prototype.createTransformElement = function (e, t) {
            var n = Rt.getTransformProperty(this, e, this),
              r = new Zn(n, n.o, t);
            return (this.addToAnimatedContents(e, r), r);
          }),
          (nr.prototype.createShapeElement = function (e, t, n) {
            var r = 4;
            e.ty === "rc"
              ? (r = 5)
              : e.ty === "el"
                ? (r = 6)
                : e.ty === "sr" && (r = 7);
            var o = Xe.getShapeProp(this, e, r, this),
              a = new Vn(t, n, o);
            return (
              this.shapes.push(a),
              this.addShapeToModifiers(a),
              this.addToAnimatedContents(e, a),
              a
            );
          }),
          (nr.prototype.addToAnimatedContents = function (e, t) {
            for (var n = 0, r = this.animatedContents.length; n < r; ) {
              if (this.animatedContents[n].element === t) return;
              n += 1;
            }
            this.animatedContents.push({
              fn: tr.createRenderFunction(e),
              element: t,
              data: e,
            });
          }),
          (nr.prototype.setElementStyles = function (e) {
            var t = e.styles,
              n,
              r = this.stylesList.length;
            for (n = 0; n < r; n += 1)
              this.stylesList[n].closed || t.push(this.stylesList[n]);
          }),
          (nr.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var e,
              t = this.itemsData.length;
            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0,
              ),
                this.filterUniqueShapes(),
                t = this.dynamicProperties.length,
                e = 0;
              e < t;
              e += 1
            )
              this.dynamicProperties[e].getValue();
            this.renderModifiers();
          }),
          (nr.prototype.searchShapes = function (e, t, n, r, o, a, i) {
            var l = [].concat(a),
              s,
              u = e.length - 1,
              c,
              d,
              m = [],
              p = [],
              _,
              f,
              g;
            for (s = u; s >= 0; s -= 1) {
              if (
                ((g = this.searchProcessedElement(e[s])),
                g ? (t[s] = n[g - 1]) : (e[s]._render = i),
                e[s].ty === "fl" ||
                  e[s].ty === "st" ||
                  e[s].ty === "gf" ||
                  e[s].ty === "gs" ||
                  e[s].ty === "no")
              )
                (g
                  ? (t[s].style.closed = !1)
                  : (t[s] = this.createStyleElement(e[s], o)),
                  e[s]._render &&
                    t[s].style.pElem.parentNode !== r &&
                    r.appendChild(t[s].style.pElem),
                  m.push(t[s].style));
              else if (e[s].ty === "gr") {
                if (!g) t[s] = this.createGroupElement(e[s]);
                else
                  for (d = t[s].it.length, c = 0; c < d; c += 1)
                    t[s].prevViewData[c] = t[s].it[c];
                (this.searchShapes(
                  e[s].it,
                  t[s].it,
                  t[s].prevViewData,
                  t[s].gr,
                  o + 1,
                  l,
                  i,
                ),
                  e[s]._render &&
                    t[s].gr.parentNode !== r &&
                    r.appendChild(t[s].gr));
              } else
                e[s].ty === "tr"
                  ? (g || (t[s] = this.createTransformElement(e[s], r)),
                    (_ = t[s].transform),
                    l.push(_))
                  : e[s].ty === "sh" ||
                      e[s].ty === "rc" ||
                      e[s].ty === "el" ||
                      e[s].ty === "sr"
                    ? (g || (t[s] = this.createShapeElement(e[s], l, o)),
                      this.setElementStyles(t[s]))
                    : e[s].ty === "tm" ||
                        e[s].ty === "rd" ||
                        e[s].ty === "ms" ||
                        e[s].ty === "pb" ||
                        e[s].ty === "zz" ||
                        e[s].ty === "op"
                      ? (g
                          ? ((f = t[s]), (f.closed = !1))
                          : ((f = Ct.getModifier(e[s].ty)),
                            f.init(this, e[s]),
                            (t[s] = f),
                            this.shapeModifiers.push(f)),
                        p.push(f))
                      : e[s].ty === "rp" &&
                        (g
                          ? ((f = t[s]), (f.closed = !0))
                          : ((f = Ct.getModifier(e[s].ty)),
                            (t[s] = f),
                            f.init(this, e, s, t),
                            this.shapeModifiers.push(f),
                            (i = !1)),
                        p.push(f));
              this.addProcessedElement(e[s], s + 1);
            }
            for (u = m.length, s = 0; s < u; s += 1) m[s].closed = !0;
            for (u = p.length, s = 0; s < u; s += 1) p[s].closed = !0;
          }),
          (nr.prototype.renderInnerContent = function () {
            this.renderModifiers();
            var e,
              t = this.stylesList.length;
            for (e = 0; e < t; e += 1) this.stylesList[e].reset();
            for (this.renderShape(), e = 0; e < t; e += 1)
              (this.stylesList[e]._mdf || this._isFirstFrame) &&
                (this.stylesList[e].msElem &&
                  (this.stylesList[e].msElem.setAttribute(
                    "d",
                    this.stylesList[e].d,
                  ),
                  (this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
                this.stylesList[e].pElem.setAttribute(
                  "d",
                  this.stylesList[e].d || "M0 0",
                ));
          }),
          (nr.prototype.renderShape = function () {
            var e,
              t = this.animatedContents.length,
              n;
            for (e = 0; e < t; e += 1)
              ((n = this.animatedContents[e]),
                (this._isFirstFrame || n.element._isAnimated) &&
                  n.data !== !0 &&
                  n.fn(n.data, n.element, this._isFirstFrame));
          }),
          (nr.prototype.destroy = function () {
            (this.destroyBaseElement(),
              (this.shapesData = null),
              (this.itemsData = null));
          }));
        function rr(e, t, n, r, o, a) {
          ((this.o = e),
            (this.sw = t),
            (this.sc = n),
            (this.fc = r),
            (this.m = o),
            (this.p = a),
            (this._mdf = { o: !0, sw: !!t, sc: !!n, fc: !!r, m: !0, p: !0 }));
        }
        rr.prototype.update = function (e, t, n, r, o, a) {
          ((this._mdf.o = !1),
            (this._mdf.sw = !1),
            (this._mdf.sc = !1),
            (this._mdf.fc = !1),
            (this._mdf.m = !1),
            (this._mdf.p = !1));
          var i = !1;
          return (
            this.o !== e && ((this.o = e), (this._mdf.o = !0), (i = !0)),
            this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (i = !0)),
            this.sc !== n && ((this.sc = n), (this._mdf.sc = !0), (i = !0)),
            this.fc !== r && ((this.fc = r), (this._mdf.fc = !0), (i = !0)),
            this.m !== o && ((this.m = o), (this._mdf.m = !0), (i = !0)),
            a.length &&
              (this.p[0] !== a[0] ||
                this.p[1] !== a[1] ||
                this.p[4] !== a[4] ||
                this.p[5] !== a[5] ||
                this.p[12] !== a[12] ||
                this.p[13] !== a[13]) &&
              ((this.p = a), (this._mdf.p = !0), (i = !0)),
            i
          );
        };
        function or(e, t) {
          ((this._frameId = r),
            (this.pv = ""),
            (this.v = ""),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
            t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)),
            (this.data = t),
            (this.elem = e),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: "",
              fStyle: "",
              fWeight: "",
              fc: "",
              j: "",
              justifyOffset: "",
              l: [],
              lh: 0,
              lineWidths: [],
              ls: "",
              of: "",
              s: "",
              sc: "",
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData));
        }
        ((or.prototype.defaultBoxWidth = [0, 0]),
          (or.prototype.copyData = function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
          (or.prototype.setCurrentData = function (e) {
            (e.__complete || this.completeTextData(e),
              (this.currentData = e),
              (this.currentData.boxWidth =
                this.currentData.boxWidth || this.defaultBoxWidth),
              (this._mdf = !0));
          }),
          (or.prototype.searchProperty = function () {
            return this.searchKeyframes();
          }),
          (or.prototype.searchKeyframes = function () {
            return (
              (this.kf = this.data.d.k.length > 1),
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
            );
          }),
          (or.prototype.addEffect = function (e) {
            (this.effectsSequence.push(e), this.elem.addDynamicProperty(this));
          }),
          (or.prototype.getValue = function (e) {
            if (
              !(
                (this.elem.globalData.frameId === this.frameId ||
                  !this.effectsSequence.length) &&
                !e
              )
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var t = this.currentData,
                n = this.keysIndex;
              if (this.lock) {
                this.setCurrentData(this.currentData);
                return;
              }
              ((this.lock = !0), (this._mdf = !1));
              var r,
                o = this.effectsSequence.length,
                a = e || this.data.d.k[this.keysIndex].s;
              for (r = 0; r < o; r += 1)
                n !== this.keysIndex
                  ? (a = this.effectsSequence[r](a, a.t))
                  : (a = this.effectsSequence[r](this.currentData, a.t));
              (t !== a && this.setCurrentData(a),
                (this.v = this.currentData),
                (this.pv = this.v),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId));
            }
          }),
          (or.prototype.getKeyframeValue = function () {
            for (
              var e = this.data.d.k,
                t = this.elem.comp.renderedFrame,
                n = 0,
                r = e.length;
              n <= r - 1 && !(n === r - 1 || e[n + 1].t > t);
            )
              n += 1;
            return (
              this.keysIndex !== n && (this.keysIndex = n),
              this.data.d.k[this.keysIndex].s
            );
          }),
          (or.prototype.buildFinalText = function (e) {
            for (
              var t = [], n = 0, r = e.length, o, a, i = !1, l = !1, s = "";
              n < r;
            )
              ((i = l),
                (l = !1),
                (o = e.charCodeAt(n)),
                (s = e.charAt(n)),
                an.isCombinedCharacter(o)
                  ? (i = !0)
                  : o >= 55296 && o <= 56319
                    ? an.isRegionalFlag(e, n)
                      ? (s = e.substr(n, 14))
                      : ((a = e.charCodeAt(n + 1)),
                        a >= 56320 &&
                          a <= 57343 &&
                          (an.isModifier(o, a)
                            ? ((s = e.substr(n, 2)), (i = !0))
                            : an.isFlagEmoji(e.substr(n, 4))
                              ? (s = e.substr(n, 4))
                              : (s = e.substr(n, 2))))
                    : o > 56319
                      ? ((a = e.charCodeAt(n + 1)),
                        an.isVariationSelector(o) && (i = !0))
                      : an.isZeroWidthJoiner(o) && ((i = !0), (l = !0)),
                i ? ((t[t.length - 1] += s), (i = !1)) : t.push(s),
                (n += s.length));
            return t;
          }),
          (or.prototype.completeTextData = function (e) {
            e.__complete = !0;
            var t = this.elem.globalData.fontManager,
              n = this.data,
              r = [],
              o,
              a,
              i,
              l = 0,
              s,
              u = n.m.g,
              c = 0,
              d = 0,
              m = 0,
              p = [],
              _ = 0,
              f = 0,
              g,
              h,
              y = t.getFontByName(e.f),
              C,
              b = 0,
              v = on(y);
            ((e.fWeight = v.weight),
              (e.fStyle = v.style),
              (e.finalSize = e.s),
              (e.finalText = this.buildFinalText(e.t)),
              (a = e.finalText.length),
              (e.finalLineHeight = e.lh));
            var S = (e.tr / 1e3) * e.finalSize,
              R;
            if (e.sz)
              for (var L = !0, E = e.sz[0], k = e.sz[1], I, T; L; ) {
                ((T = this.buildFinalText(e.t)),
                  (I = 0),
                  (_ = 0),
                  (a = T.length),
                  (S = (e.tr / 1e3) * e.finalSize));
                var D = -1;
                for (o = 0; o < a; o += 1)
                  ((R = T[o].charCodeAt(0)),
                    (i = !1),
                    T[o] === " "
                      ? (D = o)
                      : (R === 13 || R === 3) &&
                        ((_ = 0),
                        (i = !0),
                        (I += e.finalLineHeight || e.finalSize * 1.2)),
                    t.chars
                      ? ((C = t.getCharData(T[o], y.fStyle, y.fFamily)),
                        (b = i ? 0 : (C.w * e.finalSize) / 100))
                      : (b = t.measureText(T[o], e.f, e.finalSize)),
                    _ + b > E && T[o] !== " "
                      ? (D === -1 ? (a += 1) : (o = D),
                        (I += e.finalLineHeight || e.finalSize * 1.2),
                        T.splice(o, D === o ? 1 : 0, "\r"),
                        (D = -1),
                        (_ = 0))
                      : ((_ += b), (_ += S)));
                ((I += (y.ascent * e.finalSize) / 100),
                  this.canResize && e.finalSize > this.minimumFontSize && k < I
                    ? ((e.finalSize -= 1),
                      (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                    : ((e.finalText = T), (a = e.finalText.length), (L = !1)));
              }
            ((_ = -S), (b = 0));
            var x = 0,
              $;
            for (o = 0; o < a; o += 1)
              if (
                ((i = !1),
                ($ = e.finalText[o]),
                (R = $.charCodeAt(0)),
                R === 13 || R === 3
                  ? ((x = 0),
                    p.push(_),
                    (f = _ > f ? _ : f),
                    (_ = -2 * S),
                    (s = ""),
                    (i = !0),
                    (m += 1))
                  : (s = $),
                t.chars
                  ? ((C = t.getCharData(
                      $,
                      y.fStyle,
                      t.getFontByName(e.f).fFamily,
                    )),
                    (b = i ? 0 : (C.w * e.finalSize) / 100))
                  : (b = t.measureText(s, e.f, e.finalSize)),
                $ === " " ? (x += b + S) : ((_ += b + S + x), (x = 0)),
                r.push({
                  l: b,
                  an: b,
                  add: c,
                  n: i,
                  anIndexes: [],
                  val: s,
                  line: m,
                  animatorJustifyOffset: 0,
                }),
                u == 2)
              ) {
                if (((c += b), s === "" || s === " " || o === a - 1)) {
                  for ((s === "" || s === " ") && (c -= b); d <= o; )
                    ((r[d].an = c), (r[d].ind = l), (r[d].extra = b), (d += 1));
                  ((l += 1), (c = 0));
                }
              } else if (u == 3) {
                if (((c += b), s === "" || o === a - 1)) {
                  for (s === "" && (c -= b); d <= o; )
                    ((r[d].an = c), (r[d].ind = l), (r[d].extra = b), (d += 1));
                  ((c = 0), (l += 1));
                }
              } else ((r[l].ind = l), (r[l].extra = 0), (l += 1));
            if (((e.l = r), (f = _ > f ? _ : f), p.push(_), e.sz))
              ((e.boxWidth = e.sz[0]), (e.justifyOffset = 0));
            else
              switch (((e.boxWidth = f), e.j)) {
                case 1:
                  e.justifyOffset = -e.boxWidth;
                  break;
                case 2:
                  e.justifyOffset = -e.boxWidth / 2;
                  break;
                default:
                  e.justifyOffset = 0;
              }
            e.lineWidths = p;
            var P = n.a,
              N,
              M;
            h = P.length;
            var w,
              A,
              F = [];
            for (g = 0; g < h; g += 1) {
              for (
                N = P[g],
                  N.a.sc && (e.strokeColorAnim = !0),
                  N.a.sw && (e.strokeWidthAnim = !0),
                  (N.a.fc || N.a.fh || N.a.fs || N.a.fb) &&
                    (e.fillColorAnim = !0),
                  A = 0,
                  w = N.s.b,
                  o = 0;
                o < a;
                o += 1
              )
                ((M = r[o]),
                  (M.anIndexes[g] = A),
                  ((w == 1 && M.val !== "") ||
                    (w == 2 && M.val !== "" && M.val !== " ") ||
                    (w == 3 && (M.n || M.val == " " || o == a - 1)) ||
                    (w == 4 && (M.n || o == a - 1))) &&
                    (N.s.rn === 1 && F.push(A), (A += 1)));
              n.a[g].s.totalChars = A;
              var O = -1,
                B;
              if (N.s.rn === 1)
                for (o = 0; o < a; o += 1)
                  ((M = r[o]),
                    O != M.anIndexes[g] &&
                      ((O = M.anIndexes[g]),
                      (B = F.splice(
                        Math.floor(Math.random() * F.length),
                        1,
                      )[0])),
                    (M.anIndexes[g] = B));
            }
            ((e.yOffset = e.finalLineHeight || e.finalSize * 1.2),
              (e.ls = e.ls || 0),
              (e.ascent = (y.ascent * e.finalSize) / 100));
          }),
          (or.prototype.updateDocumentData = function (e, t) {
            t = t === void 0 ? this.keysIndex : t;
            var n = this.copyData({}, this.data.d.k[t].s);
            ((n = this.copyData(n, e)),
              (this.data.d.k[t].s = n),
              this.recalculate(t),
              this.setCurrentData(n),
              this.elem.addDynamicProperty(this));
          }),
          (or.prototype.recalculate = function (e) {
            var t = this.data.d.k[e].s;
            ((t.__complete = !1),
              (this.keysIndex = 0),
              (this._isFirstFrame = !0),
              this.getValue(t));
          }),
          (or.prototype.canResizeFont = function (e) {
            ((this.canResize = e),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this));
          }),
          (or.prototype.setMinimumFontSize = function (e) {
            ((this.minimumFontSize = Math.floor(e) || 1),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this));
          }));
        var ar = (function () {
          var e = Math.max,
            t = Math.min,
            n = Math.floor;
          function r(e, t) {
            ((this._currentTextLength = -1),
              (this.k = !1),
              (this.data = t),
              (this.elem = e),
              (this.comp = e.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(e),
              (this.s = Ve.getProp(e, t.s || { k: 0 }, 0, 0, this)),
              "e" in t
                ? (this.e = Ve.getProp(e, t.e, 0, 0, this))
                : (this.e = { v: 100 }),
              (this.o = Ve.getProp(e, t.o || { k: 0 }, 0, 0, this)),
              (this.xe = Ve.getProp(e, t.xe || { k: 0 }, 0, 0, this)),
              (this.ne = Ve.getProp(e, t.ne || { k: 0 }, 0, 0, this)),
              (this.sm = Ve.getProp(e, t.sm || { k: 100 }, 0, 0, this)),
              (this.a = Ve.getProp(e, t.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue());
          }
          ((r.prototype = {
            getMult: function (o) {
              this._currentTextLength !==
                this.elem.textProperty.currentData.l.length && this.getValue();
              var r = 0,
                a = 0,
                i = 1,
                l = 1;
              (this.ne.v > 0 ? (r = this.ne.v / 100) : (a = -this.ne.v / 100),
                this.xe.v > 0
                  ? (i = 1 - this.xe.v / 100)
                  : (l = 1 + this.xe.v / 100));
              var s = Se.getBezierEasing(r, a, i, l).get,
                u = 0,
                c = this.finalS,
                d = this.finalE,
                m = this.data.sh;
              if (m === 2)
                (d === c
                  ? (u = o >= d ? 1 : 0)
                  : (u = e(0, t(0.5 / (d - c) + (o - c) / (d - c), 1))),
                  (u = s(u)));
              else if (m === 3)
                (d === c
                  ? (u = o >= d ? 0 : 1)
                  : (u = 1 - e(0, t(0.5 / (d - c) + (o - c) / (d - c), 1))),
                  (u = s(u)));
              else if (m === 4)
                (d === c
                  ? (u = 0)
                  : ((u = e(0, t(0.5 / (d - c) + (o - c) / (d - c), 1))),
                    u < 0.5 ? (u *= 2) : (u = 1 - 2 * (u - 0.5))),
                  (u = s(u)));
              else if (m === 5) {
                if (d === c) u = 0;
                else {
                  var p = d - c;
                  o = t(e(0, o + 0.5 - c), d - c);
                  var _ = -p / 2 + o,
                    f = p / 2;
                  u = Math.sqrt(1 - (_ * _) / (f * f));
                }
                u = s(u);
              } else
                m === 6
                  ? (d === c
                      ? (u = 0)
                      : ((o = t(e(0, o + 0.5 - c), d - c)),
                        (u =
                          (1 +
                            Math.cos(Math.PI + (Math.PI * 2 * o) / (d - c))) /
                          2)),
                    (u = s(u)))
                  : (o >= n(c) &&
                      (o - c < 0
                        ? (u = e(0, t(t(d, 1) - (c - o), 1)))
                        : (u = e(0, t(d - o, 1)))),
                    (u = s(u)));
              if (this.sm.v !== 100) {
                var g = this.sm.v * 0.01;
                g === 0 && (g = 1e-8);
                var h = 0.5 - g * 0.5;
                u < h ? (u = 0) : ((u = (u - h) / g), u > 1 && (u = 1));
              }
              return u * this.a.v;
            },
            getValue: function (t) {
              (this.iterateDynamicProperties(),
                (this._mdf = t || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                t && this.data.r === 2 && (this.e.v = this._currentTextLength));
              var e = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                n = this.o.v / e,
                r = this.s.v / e + n,
                o = this.e.v / e + n;
              if (r > o) {
                var a = r;
                ((r = o), (o = a));
              }
              ((this.finalS = r), (this.finalE = o));
            },
          }),
            d([He], r));
          function o(e, t, n) {
            return new r(e, t, n);
          }
          return { getTextSelectorProp: o };
        })();
        function ir(e, t, n) {
          var r = { propType: !1 },
            o = Ve.getProp,
            a = t.a;
          ((this.a = {
            r: a.r ? o(e, a.r, 0, P, n) : r,
            rx: a.rx ? o(e, a.rx, 0, P, n) : r,
            ry: a.ry ? o(e, a.ry, 0, P, n) : r,
            sk: a.sk ? o(e, a.sk, 0, P, n) : r,
            sa: a.sa ? o(e, a.sa, 0, P, n) : r,
            s: a.s ? o(e, a.s, 1, 0.01, n) : r,
            a: a.a ? o(e, a.a, 1, 0, n) : r,
            o: a.o ? o(e, a.o, 0, 0.01, n) : r,
            p: a.p ? o(e, a.p, 1, 0, n) : r,
            sw: a.sw ? o(e, a.sw, 0, 0, n) : r,
            sc: a.sc ? o(e, a.sc, 1, 0, n) : r,
            fc: a.fc ? o(e, a.fc, 1, 0, n) : r,
            fh: a.fh ? o(e, a.fh, 0, 0, n) : r,
            fs: a.fs ? o(e, a.fs, 0, 0.01, n) : r,
            fb: a.fb ? o(e, a.fb, 0, 0.01, n) : r,
            t: a.t ? o(e, a.t, 0, 0, n) : r,
          }),
            (this.s = ar.getTextSelectorProp(e, t.s, n)),
            (this.s.t = t.s.t));
        }
        function lr(e, t, n) {
          ((this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = e),
            (this._renderType = t),
            (this._elem = n),
            (this._animatorsData = g(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = { alignment: {} }),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(n));
        }
        ((lr.prototype.searchProperties = function () {
          var e,
            t = this._textData.a.length,
            n,
            r = Ve.getProp;
          for (e = 0; e < t; e += 1)
            ((n = this._textData.a[e]),
              (this._animatorsData[e] = new ir(this._elem, n, this)));
          (this._textData.p && "m" in this._textData.p
            ? ((this._pathData = {
                a: r(this._elem, this._textData.p.a, 0, 0, this),
                f: r(this._elem, this._textData.p.f, 0, 0, this),
                l: r(this._elem, this._textData.p.l, 0, 0, this),
                r: r(this._elem, this._textData.p.r, 0, 0, this),
                p: r(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              }),
              (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = r(
              this._elem,
              this._textData.m.a,
              1,
              0,
              this,
            )));
        }),
          (lr.prototype.getMeasures = function (e, t) {
            if (
              ((this.lettersChangedFlag = t),
              !(
                !this._mdf &&
                !this._isFirstFrame &&
                !t &&
                (!this._hasMaskedPath || !this._pathData.m._mdf)
              ))
            ) {
              this._isFirstFrame = !1;
              var n = this._moreOptions.alignment.v,
                r = this._animatorsData,
                o = this._textData,
                a = this.mHelper,
                i = this._renderType,
                l = this.renderedLetters.length,
                s,
                u,
                c,
                d,
                m = e.l,
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
                I;
              if (this._hasMaskedPath) {
                if (
                  ((I = this._pathData.m),
                  !this._pathData.n || this._pathData._mdf)
                ) {
                  var T = I.v;
                  (this._pathData.r.v && (T = T.reverse()),
                    (p = { tLength: 0, segments: [] }),
                    (d = T._length - 1));
                  var D;
                  for (L = 0, c = 0; c < d; c += 1)
                    ((D = Te.buildBezierData(
                      T.v[c],
                      T.v[c + 1],
                      [T.o[c][0] - T.v[c][0], T.o[c][1] - T.v[c][1]],
                      [
                        T.i[c + 1][0] - T.v[c + 1][0],
                        T.i[c + 1][1] - T.v[c + 1][1],
                      ],
                    )),
                      (p.tLength += D.segmentLength),
                      p.segments.push(D),
                      (L += D.segmentLength));
                  ((c = d),
                    I.v.c &&
                      ((D = Te.buildBezierData(
                        T.v[c],
                        T.v[0],
                        [T.o[c][0] - T.v[c][0], T.o[c][1] - T.v[c][1]],
                        [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]],
                      )),
                      (p.tLength += D.segmentLength),
                      p.segments.push(D),
                      (L += D.segmentLength)),
                    (this._pathData.pi = p));
                }
                if (
                  ((p = this._pathData.pi),
                  (_ = this._pathData.f.v),
                  (C = 0),
                  (y = 1),
                  (g = 0),
                  (h = !0),
                  (S = p.segments),
                  _ < 0 && I.v.c)
                )
                  for (
                    p.tLength < Math.abs(_) && (_ = -Math.abs(_) % p.tLength),
                      C = S.length - 1,
                      v = S[C].points,
                      y = v.length - 1;
                    _ < 0;
                  )
                    ((_ += v[y].partialLength),
                      (y -= 1),
                      y < 0 &&
                        ((C -= 1), (v = S[C].points), (y = v.length - 1)));
                ((v = S[C].points),
                  (b = v[y - 1]),
                  (f = v[y]),
                  (R = f.partialLength));
              }
              ((d = m.length), (s = 0), (u = 0));
              var x = e.finalSize * 1.2 * 0.714,
                $ = !0,
                P,
                N,
                M,
                w,
                A;
              w = r.length;
              var F,
                O = -1,
                B,
                W,
                q,
                U = _,
                V = C,
                H = y,
                G = -1,
                z,
                j,
                Y,
                J,
                Z,
                ee,
                te,
                ne,
                re = "",
                oe = this.defaultPropsArray,
                ae;
              if (e.j === 2 || e.j === 1) {
                var ie = 0,
                  le = 0,
                  se = e.j === 2 ? -0.5 : -1,
                  ue = 0,
                  ce = !0;
                for (c = 0; c < d; c += 1)
                  if (m[c].n) {
                    for (ie && (ie += le); ue < c; )
                      ((m[ue].animatorJustifyOffset = ie), (ue += 1));
                    ((ie = 0), (ce = !0));
                  } else {
                    for (M = 0; M < w; M += 1)
                      ((P = r[M].a),
                        P.t.propType &&
                          (ce && e.j === 2 && (le += P.t.v * se),
                          (N = r[M].s),
                          (F = N.getMult(
                            m[c].anIndexes[M],
                            o.a[M].s.totalChars,
                          )),
                          F.length
                            ? (ie += P.t.v * F[0] * se)
                            : (ie += P.t.v * F * se)));
                    ce = !1;
                  }
                for (ie && (ie += le); ue < c; )
                  ((m[ue].animatorJustifyOffset = ie), (ue += 1));
              }
              for (c = 0; c < d; c += 1) {
                if ((a.reset(), (z = 1), m[c].n))
                  ((s = 0),
                    (u += e.yOffset),
                    (u += $ ? 1 : 0),
                    (_ = U),
                    ($ = !1),
                    this._hasMaskedPath &&
                      ((C = V),
                      (y = H),
                      (v = S[C].points),
                      (b = v[y - 1]),
                      (f = v[y]),
                      (R = f.partialLength),
                      (g = 0)),
                    (re = ""),
                    (ne = ""),
                    (ee = ""),
                    (ae = ""),
                    (oe = this.defaultPropsArray));
                else {
                  if (this._hasMaskedPath) {
                    if (G !== m[c].line) {
                      switch (e.j) {
                        case 1:
                          _ += L - e.lineWidths[m[c].line];
                          break;
                        case 2:
                          _ += (L - e.lineWidths[m[c].line]) / 2;
                          break;
                        default:
                          break;
                      }
                      G = m[c].line;
                    }
                    (O !== m[c].ind &&
                      (m[O] && (_ += m[O].extra),
                      (_ += m[c].an / 2),
                      (O = m[c].ind)),
                      (_ += n[0] * m[c].an * 0.005));
                    var de = 0;
                    for (M = 0; M < w; M += 1)
                      ((P = r[M].a),
                        P.p.propType &&
                          ((N = r[M].s),
                          (F = N.getMult(
                            m[c].anIndexes[M],
                            o.a[M].s.totalChars,
                          )),
                          F.length
                            ? (de += P.p.v[0] * F[0])
                            : (de += P.p.v[0] * F)),
                        P.a.propType &&
                          ((N = r[M].s),
                          (F = N.getMult(
                            m[c].anIndexes[M],
                            o.a[M].s.totalChars,
                          )),
                          F.length
                            ? (de += P.a.v[0] * F[0])
                            : (de += P.a.v[0] * F)));
                    for (
                      h = !0,
                        this._pathData.a.v &&
                          ((_ =
                            m[0].an * 0.5 +
                            ((L -
                              this._pathData.f.v -
                              m[0].an * 0.5 -
                              m[m.length - 1].an * 0.5) *
                              O) /
                              (d - 1)),
                          (_ += this._pathData.f.v));
                      h;
                    )
                      g + R >= _ + de || !v
                        ? ((E = (_ + de - g) / f.partialLength),
                          (W = b.point[0] + (f.point[0] - b.point[0]) * E),
                          (q = b.point[1] + (f.point[1] - b.point[1]) * E),
                          a.translate(
                            -n[0] * m[c].an * 0.005,
                            -(n[1] * x) * 0.01,
                          ),
                          (h = !1))
                        : v &&
                          ((g += f.partialLength),
                          (y += 1),
                          y >= v.length &&
                            ((y = 0),
                            (C += 1),
                            S[C]
                              ? (v = S[C].points)
                              : I.v.c
                                ? ((y = 0), (C = 0), (v = S[C].points))
                                : ((g -= f.partialLength), (v = null))),
                          v && ((b = f), (f = v[y]), (R = f.partialLength)));
                    ((B = m[c].an / 2 - m[c].add), a.translate(-B, 0, 0));
                  } else
                    ((B = m[c].an / 2 - m[c].add),
                      a.translate(-B, 0, 0),
                      a.translate(
                        -n[0] * m[c].an * 0.005,
                        -n[1] * x * 0.01,
                        0,
                      ));
                  for (M = 0; M < w; M += 1)
                    ((P = r[M].a),
                      P.t.propType &&
                        ((N = r[M].s),
                        (F = N.getMult(m[c].anIndexes[M], o.a[M].s.totalChars)),
                        (s !== 0 || e.j !== 0) &&
                          (this._hasMaskedPath
                            ? F.length
                              ? (_ += P.t.v * F[0])
                              : (_ += P.t.v * F)
                            : F.length
                              ? (s += P.t.v * F[0])
                              : (s += P.t.v * F))));
                  for (
                    e.strokeWidthAnim && (Y = e.sw || 0),
                      e.strokeColorAnim &&
                        (e.sc
                          ? (j = [e.sc[0], e.sc[1], e.sc[2]])
                          : (j = [0, 0, 0])),
                      e.fillColorAnim &&
                        e.fc &&
                        (J = [e.fc[0], e.fc[1], e.fc[2]]),
                      M = 0;
                    M < w;
                    M += 1
                  )
                    ((P = r[M].a),
                      P.a.propType &&
                        ((N = r[M].s),
                        (F = N.getMult(m[c].anIndexes[M], o.a[M].s.totalChars)),
                        F.length
                          ? a.translate(
                              -P.a.v[0] * F[0],
                              -P.a.v[1] * F[1],
                              P.a.v[2] * F[2],
                            )
                          : a.translate(
                              -P.a.v[0] * F,
                              -P.a.v[1] * F,
                              P.a.v[2] * F,
                            )));
                  for (M = 0; M < w; M += 1)
                    ((P = r[M].a),
                      P.s.propType &&
                        ((N = r[M].s),
                        (F = N.getMult(m[c].anIndexes[M], o.a[M].s.totalChars)),
                        F.length
                          ? a.scale(
                              1 + (P.s.v[0] - 1) * F[0],
                              1 + (P.s.v[1] - 1) * F[1],
                              1,
                            )
                          : a.scale(
                              1 + (P.s.v[0] - 1) * F,
                              1 + (P.s.v[1] - 1) * F,
                              1,
                            )));
                  for (M = 0; M < w; M += 1) {
                    if (
                      ((P = r[M].a),
                      (N = r[M].s),
                      (F = N.getMult(m[c].anIndexes[M], o.a[M].s.totalChars)),
                      P.sk.propType &&
                        (F.length
                          ? a.skewFromAxis(-P.sk.v * F[0], P.sa.v * F[1])
                          : a.skewFromAxis(-P.sk.v * F, P.sa.v * F)),
                      P.r.propType &&
                        (F.length
                          ? a.rotateZ(-P.r.v * F[2])
                          : a.rotateZ(-P.r.v * F)),
                      P.ry.propType &&
                        (F.length
                          ? a.rotateY(P.ry.v * F[1])
                          : a.rotateY(P.ry.v * F)),
                      P.rx.propType &&
                        (F.length
                          ? a.rotateX(P.rx.v * F[0])
                          : a.rotateX(P.rx.v * F)),
                      P.o.propType &&
                        (F.length
                          ? (z += (P.o.v * F[0] - z) * F[0])
                          : (z += (P.o.v * F - z) * F)),
                      e.strokeWidthAnim &&
                        P.sw.propType &&
                        (F.length ? (Y += P.sw.v * F[0]) : (Y += P.sw.v * F)),
                      e.strokeColorAnim && P.sc.propType)
                    )
                      for (Z = 0; Z < 3; Z += 1)
                        F.length
                          ? (j[Z] += (P.sc.v[Z] - j[Z]) * F[0])
                          : (j[Z] += (P.sc.v[Z] - j[Z]) * F);
                    if (e.fillColorAnim && e.fc) {
                      if (P.fc.propType)
                        for (Z = 0; Z < 3; Z += 1)
                          F.length
                            ? (J[Z] += (P.fc.v[Z] - J[Z]) * F[0])
                            : (J[Z] += (P.fc.v[Z] - J[Z]) * F);
                      (P.fh.propType &&
                        (F.length
                          ? (J = X(J, P.fh.v * F[0]))
                          : (J = X(J, P.fh.v * F))),
                        P.fs.propType &&
                          (F.length
                            ? (J = K(J, P.fs.v * F[0]))
                            : (J = K(J, P.fs.v * F))),
                        P.fb.propType &&
                          (F.length
                            ? (J = Q(J, P.fb.v * F[0]))
                            : (J = Q(J, P.fb.v * F))));
                    }
                  }
                  for (M = 0; M < w; M += 1)
                    ((P = r[M].a),
                      P.p.propType &&
                        ((N = r[M].s),
                        (F = N.getMult(m[c].anIndexes[M], o.a[M].s.totalChars)),
                        this._hasMaskedPath
                          ? F.length
                            ? a.translate(0, P.p.v[1] * F[0], -P.p.v[2] * F[1])
                            : a.translate(0, P.p.v[1] * F, -P.p.v[2] * F)
                          : F.length
                            ? a.translate(
                                P.p.v[0] * F[0],
                                P.p.v[1] * F[1],
                                -P.p.v[2] * F[2],
                              )
                            : a.translate(
                                P.p.v[0] * F,
                                P.p.v[1] * F,
                                -P.p.v[2] * F,
                              )));
                  if (
                    (e.strokeWidthAnim && (ee = Y < 0 ? 0 : Y),
                    e.strokeColorAnim &&
                      (te =
                        "rgb(" +
                        Math.round(j[0] * 255) +
                        "," +
                        Math.round(j[1] * 255) +
                        "," +
                        Math.round(j[2] * 255) +
                        ")"),
                    e.fillColorAnim &&
                      e.fc &&
                      (ne =
                        "rgb(" +
                        Math.round(J[0] * 255) +
                        "," +
                        Math.round(J[1] * 255) +
                        "," +
                        Math.round(J[2] * 255) +
                        ")"),
                    this._hasMaskedPath)
                  ) {
                    if (
                      (a.translate(0, -e.ls),
                      a.translate(0, n[1] * x * 0.01 + u, 0),
                      this._pathData.p.v)
                    ) {
                      k = (f.point[1] - b.point[1]) / (f.point[0] - b.point[0]);
                      var me = (Math.atan(k) * 180) / Math.PI;
                      (f.point[0] < b.point[0] && (me += 180),
                        a.rotate((-me * Math.PI) / 180));
                    }
                    (a.translate(W, q, 0),
                      (_ -= n[0] * m[c].an * 0.005),
                      m[c + 1] &&
                        O !== m[c + 1].ind &&
                        ((_ += m[c].an / 2),
                        (_ += e.tr * 0.001 * e.finalSize)));
                  } else {
                    switch (
                      (a.translate(s, u, 0),
                      e.ps && a.translate(e.ps[0], e.ps[1] + e.ascent, 0),
                      e.j)
                    ) {
                      case 1:
                        a.translate(
                          m[c].animatorJustifyOffset +
                            e.justifyOffset +
                            (e.boxWidth - e.lineWidths[m[c].line]),
                          0,
                          0,
                        );
                        break;
                      case 2:
                        a.translate(
                          m[c].animatorJustifyOffset +
                            e.justifyOffset +
                            (e.boxWidth - e.lineWidths[m[c].line]) / 2,
                          0,
                          0,
                        );
                        break;
                      default:
                        break;
                    }
                    (a.translate(0, -e.ls),
                      a.translate(B, 0, 0),
                      a.translate(n[0] * m[c].an * 0.005, n[1] * x * 0.01, 0),
                      (s += m[c].l + e.tr * 0.001 * e.finalSize));
                  }
                  (i === "html"
                    ? (re = a.toCSS())
                    : i === "svg"
                      ? (re = a.to2dCSS())
                      : (oe = [
                          a.props[0],
                          a.props[1],
                          a.props[2],
                          a.props[3],
                          a.props[4],
                          a.props[5],
                          a.props[6],
                          a.props[7],
                          a.props[8],
                          a.props[9],
                          a.props[10],
                          a.props[11],
                          a.props[12],
                          a.props[13],
                          a.props[14],
                          a.props[15],
                        ]),
                    (ae = z));
                }
                l <= c
                  ? ((A = new rr(ae, ee, te, ne, re, oe)),
                    this.renderedLetters.push(A),
                    (l += 1),
                    (this.lettersChangedFlag = !0))
                  : ((A = this.renderedLetters[c]),
                    (this.lettersChangedFlag =
                      A.update(ae, ee, te, ne, re, oe) ||
                      this.lettersChangedFlag));
              }
            }
          }),
          (lr.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId &&
              ((this._frameId = this._elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          (lr.prototype.mHelper = new Ye()),
          (lr.prototype.defaultPropsArray = []),
          d([He], lr));
        function sr() {}
        ((sr.prototype.initElement = function (e, t, n) {
          ((this.lettersChangedFlag = !0),
            this.initFrame(),
            this.initBaseData(e, t, n),
            (this.textProperty = new or(this, e.t, this.dynamicProperties)),
            (this.textAnimator = new lr(e.t, this.renderType, this)),
            this.initTransform(e, t, n),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties));
        }),
          (sr.prototype.prepareFrame = function (e) {
            ((this._mdf = !1),
              this.prepareRenderableFrame(e),
              this.prepareProperties(e, this.isInRange));
          }),
          (sr.prototype.createPathShape = function (e, t) {
            var n,
              r = t.length,
              o,
              a = "";
            for (n = 0; n < r; n += 1)
              t[n].ty === "sh" &&
                ((o = t[n].ks.k), (a += er(o, o.i.length, !0, e)));
            return a;
          }),
          (sr.prototype.updateDocumentData = function (e, t) {
            this.textProperty.updateDocumentData(e, t);
          }),
          (sr.prototype.canResizeFont = function (e) {
            this.textProperty.canResizeFont(e);
          }),
          (sr.prototype.setMinimumFontSize = function (e) {
            this.textProperty.setMinimumFontSize(e);
          }),
          (sr.prototype.applyTextPropertiesToMatrix = function (e, t, n, r, o) {
            switch (
              (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0),
              t.translate(0, -e.ls, 0),
              e.j)
            ) {
              case 1:
                t.translate(
                  e.justifyOffset + (e.boxWidth - e.lineWidths[n]),
                  0,
                  0,
                );
                break;
              case 2:
                t.translate(
                  e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2,
                  0,
                  0,
                );
                break;
              default:
                break;
            }
            t.translate(r, o, 0);
          }),
          (sr.prototype.buildColor = function (e) {
            return (
              "rgb(" +
              Math.round(e[0] * 255) +
              "," +
              Math.round(e[1] * 255) +
              "," +
              Math.round(e[2] * 255) +
              ")"
            );
          }),
          (sr.prototype.emptyProp = new rr()),
          (sr.prototype.destroy = function () {}),
          (sr.prototype.validateText = function () {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
              (this.buildNewText(),
              (this.textProperty._isFirstFrame = !1),
              (this.textProperty._mdf = !1));
          }));
        var ur = { shapes: [] };
        function cr(e, t, n) {
          ((this.textSpans = []),
            (this.renderType = "svg"),
            this.initElement(e, t, n));
        }
        (d([vn, In, wn, An, Sn, Fn, sr], cr),
          (cr.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = se("text"));
          }),
          (cr.prototype.buildTextContents = function (e) {
            for (var t = 0, n = e.length, r = [], o = ""; t < n; )
              (e[t] === "\r" || e[t] === ""
                ? (r.push(o), (o = ""))
                : (o += e[t]),
                (t += 1));
            return (r.push(o), r);
          }),
          (cr.prototype.buildShapeData = function (e, t) {
            if (e.shapes && e.shapes.length) {
              var n = e.shapes[0];
              if (n.it) {
                var r = n.it[n.it.length - 1];
                r.s && ((r.s.k[0] = t), (r.s.k[1] = t));
              }
            }
            return e;
          }),
          (cr.prototype.buildNewText = function () {
            this.addDynamicProperty(this);
            var e,
              t,
              n = this.textProperty.currentData;
            ((this.renderedLetters = g(n ? n.l.length : 0)),
              n.fc
                ? this.layerElement.setAttribute("fill", this.buildColor(n.fc))
                : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
              n.sc &&
                (this.layerElement.setAttribute(
                  "stroke",
                  this.buildColor(n.sc),
                ),
                this.layerElement.setAttribute("stroke-width", n.sw)),
              this.layerElement.setAttribute("font-size", n.finalSize));
            var r = this.globalData.fontManager.getFontByName(n.f);
            if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
            else {
              this.layerElement.setAttribute("font-family", r.fFamily);
              var o = n.fWeight,
                a = n.fStyle;
              (this.layerElement.setAttribute("font-style", a),
                this.layerElement.setAttribute("font-weight", o));
            }
            this.layerElement.setAttribute("aria-label", n.t);
            var i = n.l || [],
              l = !!this.globalData.fontManager.chars;
            t = i.length;
            var s,
              u = this.mHelper,
              c = "",
              d = this.data.singleShape,
              m = 0,
              p = 0,
              _ = !0,
              f = n.tr * 0.001 * n.finalSize;
            if (d && !l && !n.sz) {
              var h = this.textContainer,
                y = "start";
              switch (n.j) {
                case 1:
                  y = "end";
                  break;
                case 2:
                  y = "middle";
                  break;
                default:
                  y = "start";
                  break;
              }
              (h.setAttribute("text-anchor", y),
                h.setAttribute("letter-spacing", f));
              var C = this.buildTextContents(n.finalText);
              for (
                t = C.length, p = n.ps ? n.ps[1] + n.ascent : 0, e = 0;
                e < t;
                e += 1
              )
                ((s = this.textSpans[e].span || se("tspan")),
                  (s.textContent = C[e]),
                  s.setAttribute("x", 0),
                  s.setAttribute("y", p),
                  (s.style.display = "inherit"),
                  h.appendChild(s),
                  this.textSpans[e] ||
                    (this.textSpans[e] = { span: null, glyph: null }),
                  (this.textSpans[e].span = s),
                  (p += n.finalLineHeight));
              this.layerElement.appendChild(h);
            } else {
              var b = this.textSpans.length,
                v;
              for (e = 0; e < t; e += 1) {
                if (
                  (this.textSpans[e] ||
                    (this.textSpans[e] = {
                      span: null,
                      childSpan: null,
                      glyph: null,
                    }),
                  !l || !d || e === 0)
                ) {
                  if (
                    ((s =
                      b > e ? this.textSpans[e].span : se(l ? "g" : "text")),
                    b <= e)
                  ) {
                    if (
                      (s.setAttribute("stroke-linecap", "butt"),
                      s.setAttribute("stroke-linejoin", "round"),
                      s.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[e].span = s),
                      l)
                    ) {
                      var S = se("g");
                      (s.appendChild(S), (this.textSpans[e].childSpan = S));
                    }
                    ((this.textSpans[e].span = s),
                      this.layerElement.appendChild(s));
                  }
                  s.style.display = "inherit";
                }
                if (
                  (u.reset(),
                  d &&
                    (i[e].n &&
                      ((m = -f), (p += n.yOffset), (p += _ ? 1 : 0), (_ = !1)),
                    this.applyTextPropertiesToMatrix(n, u, i[e].line, m, p),
                    (m += i[e].l || 0),
                    (m += f)),
                  l)
                ) {
                  v = this.globalData.fontManager.getCharData(
                    n.finalText[e],
                    r.fStyle,
                    this.globalData.fontManager.getFontByName(n.f).fFamily,
                  );
                  var R;
                  if (v.t === 1) R = new fr(v.data, this.globalData, this);
                  else {
                    var L = ur;
                    (v.data &&
                      v.data.shapes &&
                      (L = this.buildShapeData(v.data, n.finalSize)),
                      (R = new nr(L, this.globalData, this)));
                  }
                  if (this.textSpans[e].glyph) {
                    var E = this.textSpans[e].glyph;
                    (this.textSpans[e].childSpan.removeChild(E.layerElement),
                      E.destroy());
                  }
                  ((this.textSpans[e].glyph = R),
                    (R._debug = !0),
                    R.prepareFrame(0),
                    R.renderFrame(),
                    this.textSpans[e].childSpan.appendChild(R.layerElement),
                    v.t === 1 &&
                      this.textSpans[e].childSpan.setAttribute(
                        "transform",
                        "scale(" +
                          n.finalSize / 100 +
                          "," +
                          n.finalSize / 100 +
                          ")",
                      ));
                } else
                  (d &&
                    s.setAttribute(
                      "transform",
                      "translate(" + u.props[12] + "," + u.props[13] + ")",
                    ),
                    (s.textContent = i[e].val),
                    s.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve",
                    ));
              }
              d && s && s.setAttribute("d", c);
            }
            for (; e < this.textSpans.length; )
              ((this.textSpans[e].span.style.display = "none"), (e += 1));
            this._sizeChanged = !0;
          }),
          (cr.prototype.sourceRectAtTime = function () {
            if (
              (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged)
            ) {
              this._sizeChanged = !1;
              var e = this.layerElement.getBBox();
              this.bbox = {
                top: e.y,
                left: e.x,
                width: e.width,
                height: e.height,
              };
            }
            return this.bbox;
          }),
          (cr.prototype.getValue = function () {
            var e,
              t = this.textSpans.length,
              n;
            for (
              this.renderedFrame = this.comp.renderedFrame, e = 0;
              e < t;
              e += 1
            )
              ((n = this.textSpans[e].glyph),
                n &&
                  (n.prepareFrame(this.comp.renderedFrame - this.data.st),
                  n._mdf && (this._mdf = !0)));
          }),
          (cr.prototype.renderInnerContent = function () {
            if (
              (this.validateText(),
              (!this.data.singleShape || this._mdf) &&
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag,
                ),
                this.lettersChangedFlag ||
                  this.textAnimator.lettersChangedFlag))
            ) {
              this._sizeChanged = !0;
              var e,
                t,
                n = this.textAnimator.renderedLetters,
                r = this.textProperty.currentData.l;
              t = r.length;
              var o, a, i;
              for (e = 0; e < t; e += 1)
                r[e].n ||
                  ((o = n[e]),
                  (a = this.textSpans[e].span),
                  (i = this.textSpans[e].glyph),
                  i && i.renderFrame(),
                  o._mdf.m && a.setAttribute("transform", o.m),
                  o._mdf.o && a.setAttribute("opacity", o.o),
                  o._mdf.sw && a.setAttribute("stroke-width", o.sw),
                  o._mdf.sc && a.setAttribute("stroke", o.sc),
                  o._mdf.fc && a.setAttribute("fill", o.fc));
            }
          }));
        function dr(e, t, n) {
          this.initElement(e, t, n);
        }
        (d([On], dr),
          (dr.prototype.createContent = function () {
            var e = se("rect");
            (e.setAttribute("width", this.data.sw),
              e.setAttribute("height", this.data.sh),
              e.setAttribute("fill", this.data.sc),
              this.layerElement.appendChild(e));
          }));
        function mr(e, t, n) {
          (this.initFrame(),
            this.initBaseData(e, t, n),
            this.initFrame(),
            this.initTransform(e, t, n),
            this.initHierarchy());
        }
        ((mr.prototype.prepareFrame = function (e) {
          this.prepareProperties(e, !0);
        }),
          (mr.prototype.renderFrame = function () {}),
          (mr.prototype.getBaseElement = function () {
            return null;
          }),
          (mr.prototype.destroy = function () {}),
          (mr.prototype.sourceRectAtTime = function () {}),
          (mr.prototype.hide = function () {}),
          d([vn, In, An, Sn], mr));
        function pr() {}
        (d([En], pr),
          (pr.prototype.createNull = function (e) {
            return new mr(e, this.globalData, this);
          }),
          (pr.prototype.createShape = function (e) {
            return new nr(e, this.globalData, this);
          }),
          (pr.prototype.createText = function (e) {
            return new cr(e, this.globalData, this);
          }),
          (pr.prototype.createImage = function (e) {
            return new On(e, this.globalData, this);
          }),
          (pr.prototype.createSolid = function (e) {
            return new dr(e, this.globalData, this);
          }),
          (pr.prototype.configAnimation = function (e) {
            (this.svgElement.setAttribute(
              "xmlns",
              "http://www.w3.org/2000/svg",
            ),
              this.svgElement.setAttribute(
                "xmlns:xlink",
                "http://www.w3.org/1999/xlink",
              ),
              this.renderConfig.viewBoxSize
                ? this.svgElement.setAttribute(
                    "viewBox",
                    this.renderConfig.viewBoxSize,
                  )
                : this.svgElement.setAttribute(
                    "viewBox",
                    "0 0 " + e.w + " " + e.h,
                  ),
              this.renderConfig.viewBoxOnly ||
                (this.svgElement.setAttribute("width", e.w),
                this.svgElement.setAttribute("height", e.h),
                (this.svgElement.style.width = "100%"),
                (this.svgElement.style.height = "100%"),
                (this.svgElement.style.transform = "translate3d(0,0,0)"),
                (this.svgElement.style.contentVisibility =
                  this.renderConfig.contentVisibility)),
              this.renderConfig.width &&
                this.svgElement.setAttribute("width", this.renderConfig.width),
              this.renderConfig.height &&
                this.svgElement.setAttribute(
                  "height",
                  this.renderConfig.height,
                ),
              this.renderConfig.className &&
                this.svgElement.setAttribute(
                  "class",
                  this.renderConfig.className,
                ),
              this.renderConfig.id &&
                this.svgElement.setAttribute("id", this.renderConfig.id),
              this.renderConfig.focusable !== void 0 &&
                this.svgElement.setAttribute(
                  "focusable",
                  this.renderConfig.focusable,
                ),
              this.svgElement.setAttribute(
                "preserveAspectRatio",
                this.renderConfig.preserveAspectRatio,
              ),
              this.animationItem.wrapper.appendChild(this.svgElement));
            var t = this.globalData.defs;
            (this.setupGlobalData(e, t),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.data = e));
            var n = se("clipPath"),
              r = se("rect");
            (r.setAttribute("width", e.w),
              r.setAttribute("height", e.h),
              r.setAttribute("x", 0),
              r.setAttribute("y", 0));
            var o = G();
            (n.setAttribute("id", o),
              n.appendChild(r),
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + u() + "#" + o + ")",
              ),
              t.appendChild(n),
              (this.layers = e.layers),
              (this.elements = g(e.layers.length)));
          }),
          (pr.prototype.destroy = function () {
            (this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.layerElement = null),
              (this.globalData.defs = null));
            var e,
              t = this.layers ? this.layers.length : 0;
            for (e = 0; e < t; e += 1)
              this.elements[e] &&
                this.elements[e].destroy &&
                this.elements[e].destroy();
            ((this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null));
          }),
          (pr.prototype.updateContainerSize = function () {}),
          (pr.prototype.findIndexByInd = function (e) {
            var t = 0,
              n = this.layers.length;
            for (t = 0; t < n; t += 1) if (this.layers[t].ind === e) return t;
            return -1;
          }),
          (pr.prototype.buildItem = function (e) {
            var t = this.elements;
            if (!(t[e] || this.layers[e].ty === 99)) {
              t[e] = !0;
              var n = this.createItem(this.layers[e]);
              if (
                ((t[e] = n),
                te() &&
                  (this.layers[e].ty === 0 &&
                    this.globalData.projectInterface.registerComposition(n),
                  n.initExpressions()),
                this.appendElementInPos(n, e),
                this.layers[e].tt)
              ) {
                var r =
                  "tp" in this.layers[e]
                    ? this.findIndexByInd(this.layers[e].tp)
                    : e - 1;
                if (r === -1) return;
                if (!this.elements[r] || this.elements[r] === !0)
                  (this.buildItem(r), this.addPendingElement(n));
                else {
                  var o = t[r],
                    a = o.getMatte(this.layers[e].tt);
                  n.setMatte(a);
                }
              }
            }
          }),
          (pr.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var e = this.pendingElements.pop();
              if ((e.checkParenting(), e.data.tt))
                for (var t = 0, n = this.elements.length; t < n; ) {
                  if (this.elements[t] === e) {
                    var r =
                        "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                      o = this.elements[r],
                      a = o.getMatte(this.layers[t].tt);
                    e.setMatte(a);
                    break;
                  }
                  t += 1;
                }
            }
          }),
          (pr.prototype.renderFrame = function (e) {
            if (!(this.renderedFrame === e || this.destroyed)) {
              (e === null ? (e = this.renderedFrame) : (this.renderedFrame = e),
                (this.globalData.frameNum = e),
                (this.globalData.frameId += 1),
                (this.globalData.projectInterface.currentFrame = e),
                (this.globalData._mdf = !1));
              var t,
                n = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(e), t = n - 1;
                t >= 0;
                t -= 1
              )
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].prepareFrame(e - this.layers[t].st);
              if (this.globalData._mdf)
                for (t = 0; t < n; t += 1)
                  (this.completeLayers || this.elements[t]) &&
                    this.elements[t].renderFrame();
            }
          }),
          (pr.prototype.appendElementInPos = function (e, t) {
            var n = e.getBaseElement();
            if (n) {
              for (var r = 0, o; r < t; )
                (this.elements[r] &&
                  this.elements[r] !== !0 &&
                  this.elements[r].getBaseElement() &&
                  (o = this.elements[r].getBaseElement()),
                  (r += 1));
              o
                ? this.layerElement.insertBefore(n, o)
                : this.layerElement.appendChild(n);
            }
          }),
          (pr.prototype.hide = function () {
            this.layerElement.style.display = "none";
          }),
          (pr.prototype.show = function () {
            this.layerElement.style.display = "block";
          }));
        function _r() {}
        (d([vn, In, An, Sn, Fn], _r),
          (_r.prototype.initElement = function (e, t, n) {
            (this.initFrame(),
              this.initBaseData(e, t, n),
              this.initTransform(e, t, n),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              (this.data.xt || !t.progressiveLoad) && this.buildAllItems(),
              this.hide());
          }),
          (_r.prototype.prepareFrame = function (e) {
            if (
              ((this._mdf = !1),
              this.prepareRenderableFrame(e),
              this.prepareProperties(e, this.isInRange),
              !(!this.isInRange && !this.data.xt))
            ) {
              if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
              else {
                var t = this.tm.v;
                (t === this.data.op && (t = this.data.op - 1),
                  (this.renderedFrame = t));
              }
              var n,
                r = this.elements.length;
              for (
                this.completeLayers || this.checkLayers(this.renderedFrame),
                  n = r - 1;
                n >= 0;
                n -= 1
              )
                (this.completeLayers || this.elements[n]) &&
                  (this.elements[n].prepareFrame(
                    this.renderedFrame - this.layers[n].st,
                  ),
                  this.elements[n]._mdf && (this._mdf = !0));
            }
          }),
          (_r.prototype.renderInnerContent = function () {
            var e,
              t = this.layers.length;
            for (e = 0; e < t; e += 1)
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].renderFrame();
          }),
          (_r.prototype.setElements = function (e) {
            this.elements = e;
          }),
          (_r.prototype.getElements = function () {
            return this.elements;
          }),
          (_r.prototype.destroyElements = function () {
            var e,
              t = this.layers.length;
            for (e = 0; e < t; e += 1)
              this.elements[e] && this.elements[e].destroy();
          }),
          (_r.prototype.destroy = function () {
            (this.destroyElements(), this.destroyBaseElement());
          }));
        function fr(e, t, n) {
          ((this.layers = e.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers ? g(this.layers.length) : []),
            this.initElement(e, t, n),
            (this.tm = e.tm
              ? Ve.getProp(this, e.tm, 0, t.frameRate, this)
              : { _placeholder: !0 }));
        }
        (d([pr, _r, wn], fr),
          (fr.prototype.createComp = function (e) {
            return new fr(e, this.globalData, this);
          }));
        function gr(e, t) {
          ((this.animationItem = e),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.svgElement = se("svg")));
          var n = "";
          if (t && t.title) {
            var r = se("title"),
              o = G();
            (r.setAttribute("id", o),
              (r.textContent = t.title),
              this.svgElement.appendChild(r),
              (n += o));
          }
          if (t && t.description) {
            var a = se("desc"),
              i = G();
            (a.setAttribute("id", i),
              (a.textContent = t.description),
              this.svgElement.appendChild(a),
              (n += " " + i));
          }
          n && this.svgElement.setAttribute("aria-labelledby", n);
          var l = se("defs");
          this.svgElement.appendChild(l);
          var s = se("g");
          (this.svgElement.appendChild(s),
            (this.layerElement = s),
            (this.renderConfig = {
              preserveAspectRatio:
                (t && t.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (t && t.contentVisibility) || "visible",
              progressiveLoad: (t && t.progressiveLoad) || !1,
              hideOnTransparent: !(t && t.hideOnTransparent === !1),
              viewBoxOnly: (t && t.viewBoxOnly) || !1,
              viewBoxSize: (t && t.viewBoxSize) || !1,
              className: (t && t.className) || "",
              id: (t && t.id) || "",
              focusable: t && t.focusable,
              filterSize: {
                width: (t && t.filterSize && t.filterSize.width) || "100%",
                height: (t && t.filterSize && t.filterSize.height) || "100%",
                x: (t && t.filterSize && t.filterSize.x) || "0%",
                y: (t && t.filterSize && t.filterSize.y) || "0%",
              },
              width: t && t.width,
              height: t && t.height,
              runExpressions:
                !t || t.runExpressions === void 0 || t.runExpressions,
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: l,
              renderConfig: this.renderConfig,
            }),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = "svg"));
        }
        (d([pr], gr),
          (gr.prototype.createComp = function (e) {
            return new fr(e, this.globalData, this);
          }));
        function hr() {
          ((this.sequences = {}),
            (this.sequenceList = []),
            (this.transform_key_count = 0));
        }
        hr.prototype = {
          addTransformSequence: function (t) {
            var e,
              n = t.length,
              r = "_";
            for (e = 0; e < n; e += 1) r += t[e].transform.key + "_";
            var o = this.sequences[r];
            return (
              o ||
                ((o = {
                  transforms: [].concat(t),
                  finalTransform: new Ye(),
                  _mdf: !1,
                }),
                (this.sequences[r] = o),
                this.sequenceList.push(o)),
              o
            );
          },
          processSequence: function (t, n) {
            for (var e = 0, r = t.transforms.length, o = n; e < r && !n; ) {
              if (t.transforms[e].transform.mProps._mdf) {
                o = !0;
                break;
              }
              e += 1;
            }
            if (o)
              for (t.finalTransform.reset(), e = r - 1; e >= 0; e -= 1)
                t.finalTransform.multiply(t.transforms[e].transform.mProps.v);
            t._mdf = o;
          },
          processSequences: function (t) {
            var e,
              n = this.sequenceList.length;
            for (e = 0; e < n; e += 1)
              this.processSequence(this.sequenceList[e], t);
          },
          getNewKey: function () {
            return (
              (this.transform_key_count += 1),
              "_" + this.transform_key_count
            );
          },
        };
        var yr = function () {
          var e = "__lottie_element_luma_buffer",
            t = null,
            n = null,
            r = null;
          function o() {
            var t = se("svg"),
              n = se("filter"),
              r = se("feColorMatrix");
            return (
              n.setAttribute("id", e),
              r.setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "sRGB"),
              r.setAttribute(
                "values",
                "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0",
              ),
              n.appendChild(r),
              t.appendChild(n),
              t.setAttribute("id", e + "_svg"),
              xn.svgLumaHidden && (t.style.display = "none"),
              t
            );
          }
          function a() {
            t ||
              ((r = o()),
              document.body.appendChild(r),
              (t = c("canvas")),
              (n = t.getContext("2d")),
              (n.filter = "url(#" + e + ")"),
              (n.fillStyle = "rgba(0,0,0,0)"),
              n.fillRect(0, 0, 1, 1));
          }
          function i(r) {
            return (
              t || a(),
              (t.width = r.width),
              (t.height = r.height),
              (n.filter = "url(#" + e + ")"),
              t
            );
          }
          return { load: a, get: i };
        };
        function Cr(e, t) {
          if (xn.offscreenCanvas) return new OffscreenCanvas(e, t);
          var n = c("canvas");
          return ((n.width = e), (n.height = t), n);
        }
        var br = (function () {
            return {
              loadLumaCanvas: yr.load,
              getLumaCanvas: yr.get,
              createCanvas: Cr,
            };
          })(),
          vr = {};
        function Sr(e) {
          var t,
            n = e.data.ef ? e.data.ef.length : 0;
          this.filters = [];
          var r;
          for (t = 0; t < n; t += 1) {
            r = null;
            var o = e.data.ef[t].ty;
            if (vr[o]) {
              var a = vr[o].effect;
              r = new a(e.effectsManager.effectElements[t], e);
            }
            r && this.filters.push(r);
          }
          this.filters.length && e.addRenderableComponent(this);
        }
        ((Sr.prototype.renderFrame = function (e) {
          var t,
            n = this.filters.length;
          for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
          (Sr.prototype.getEffects = function (e) {
            var t,
              n = this.filters.length,
              r = [];
            for (t = 0; t < n; t += 1)
              this.filters[t].type === e && r.push(this.filters[t]);
            return r;
          }));
        function Rr(e, t) {
          vr[e] = { effect: t };
        }
        function Lr(e, t) {
          ((this.data = e),
            (this.element = t),
            (this.masksProperties = this.data.masksProperties || []),
            (this.viewData = g(this.masksProperties.length)));
          var n,
            r = this.masksProperties.length,
            o = !1;
          for (n = 0; n < r; n += 1)
            (this.masksProperties[n].mode !== "n" && (o = !0),
              (this.viewData[n] = Xe.getShapeProp(
                this.element,
                this.masksProperties[n],
                3,
              )));
          ((this.hasMasks = o), o && this.element.addRenderableComponent(this));
        }
        ((Lr.prototype.renderFrame = function () {
          if (this.hasMasks) {
            var e = this.element.finalTransform.mat,
              t = this.element.canvasContext,
              n,
              r = this.masksProperties.length,
              o,
              a,
              i;
            for (t.beginPath(), n = 0; n < r; n += 1)
              if (this.masksProperties[n].mode !== "n") {
                (this.masksProperties[n].inv &&
                  (t.moveTo(0, 0),
                  t.lineTo(this.element.globalData.compSize.w, 0),
                  t.lineTo(
                    this.element.globalData.compSize.w,
                    this.element.globalData.compSize.h,
                  ),
                  t.lineTo(0, this.element.globalData.compSize.h),
                  t.lineTo(0, 0)),
                  (i = this.viewData[n].v),
                  (o = e.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                  t.moveTo(o[0], o[1]));
                var l,
                  s = i._length;
                for (l = 1; l < s; l += 1)
                  ((a = e.applyToTriplePoints(i.o[l - 1], i.i[l], i.v[l])),
                    t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]));
                ((a = e.applyToTriplePoints(i.o[l - 1], i.i[0], i.v[0])),
                  t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]));
              }
            (this.element.globalData.renderer.save(!0), t.clip());
          }
        }),
          (Lr.prototype.getMaskProperty = Tn.prototype.getMaskProperty),
          (Lr.prototype.destroy = function () {
            this.element = null;
          }));
        function Er() {}
        var kr = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out",
        };
        ((Er.prototype = {
          createElements: function () {},
          initRendererElement: function () {},
          createContainerElements: function () {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var e = this.globalData.canvasContext,
                t = br.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(t);
              var n = br.createCanvas(e.canvas.width, e.canvas.height);
              (this.buffers.push(n),
                this.data.tt >= 3 && !document._isProxy && br.loadLumaCanvas());
            }
            ((this.canvasContext = this.globalData.canvasContext),
              (this.transformCanvas = this.globalData.transformCanvas),
              (this.renderableEffectsManager = new Sr(this)),
              this.searchEffectTransforms());
          },
          createContent: function () {},
          setBlendMode: function () {
            var e = this.globalData;
            if (e.blendMode !== this.data.bm) {
              e.blendMode = this.data.bm;
              var t = cn(this.data.bm);
              e.canvasContext.globalCompositeOperation = t;
            }
          },
          createRenderableComponents: function () {
            ((this.maskManager = new Lr(this.data, this)),
              (this.transformEffects = this.renderableEffectsManager.getEffects(
                kn.TRANSFORM_EFFECT,
              )));
          },
          hideElement: function () {
            !this.hidden &&
              (!this.isInRange || this.isTransparent) &&
              (this.hidden = !0);
          },
          showElement: function () {
            this.isInRange &&
              !this.isTransparent &&
              ((this.hidden = !1),
              (this._isFirstFrame = !0),
              (this.maskManager._isFirstFrame = !0));
          },
          clearCanvas: function (t) {
            t.clearRect(
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              this.transformCanvas.w * this.transformCanvas.sx,
              this.transformCanvas.h * this.transformCanvas.sy,
            );
          },
          prepareLayer: function () {
            if (this.data.tt >= 1) {
              var e = this.buffers[0],
                t = e.getContext("2d");
              (this.clearCanvas(t),
                t.drawImage(this.canvasContext.canvas, 0, 0),
                (this.currentTransform = this.canvasContext.getTransform()),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.setTransform(this.currentTransform));
            }
          },
          exitLayer: function () {
            if (this.data.tt >= 1) {
              var e = this.buffers[1],
                t = e.getContext("2d");
              (this.clearCanvas(t),
                t.drawImage(this.canvasContext.canvas, 0, 0),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.setTransform(this.currentTransform));
              var n = this.comp.getElementById(
                "tp" in this.data ? this.data.tp : this.data.ind - 1,
              );
              if (
                (n.renderFrame(!0),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                this.data.tt >= 3 && !document._isProxy)
              ) {
                var r = br.getLumaCanvas(this.canvasContext.canvas),
                  o = r.getContext("2d");
                (o.drawImage(this.canvasContext.canvas, 0, 0),
                  this.clearCanvas(this.canvasContext),
                  this.canvasContext.drawImage(r, 0, 0));
              }
              ((this.canvasContext.globalCompositeOperation = kr[this.data.tt]),
                this.canvasContext.drawImage(e, 0, 0),
                (this.canvasContext.globalCompositeOperation =
                  "destination-over"),
                this.canvasContext.drawImage(this.buffers[0], 0, 0),
                this.canvasContext.setTransform(this.currentTransform),
                (this.canvasContext.globalCompositeOperation = "source-over"));
            }
          },
          renderFrame: function (t) {
            if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
              (this.renderTransform(),
                this.renderRenderable(),
                this.renderLocalTransform(),
                this.setBlendMode());
              var e = this.data.ty === 0;
              (this.prepareLayer(),
                this.globalData.renderer.save(e),
                this.globalData.renderer.ctxTransform(
                  this.finalTransform.localMat.props,
                ),
                this.globalData.renderer.ctxOpacity(
                  this.finalTransform.localOpacity,
                ),
                this.renderInnerContent(),
                this.globalData.renderer.restore(e),
                this.exitLayer(),
                this.maskManager.hasMasks &&
                  this.globalData.renderer.restore(!0),
                this._isFirstFrame && (this._isFirstFrame = !1));
            }
          },
          destroy: function () {
            ((this.canvasContext = null),
              (this.data = null),
              (this.globalData = null),
              this.maskManager.destroy());
          },
          mHelper: new Ye(),
        }),
          (Er.prototype.hide = Er.prototype.hideElement),
          (Er.prototype.show = Er.prototype.showElement));
        function Ir(e, t, n, r) {
          ((this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]));
          var o = 4;
          (t.ty === "rc"
            ? (o = 5)
            : t.ty === "el"
              ? (o = 6)
              : t.ty === "sr" && (o = 7),
            (this.sh = Xe.getShapeProp(e, t, o, e)));
          var a,
            i = n.length,
            l;
          for (a = 0; a < i; a += 1)
            n[a].closed ||
              ((l = {
                transforms: r.addTransformSequence(n[a].transforms),
                trNodes: [],
              }),
              this.styledShapes.push(l),
              n[a].elements.push(l));
        }
        Ir.prototype.setAsAnimated = Vn.prototype.setAsAnimated;
        function Tr(e, t, n) {
          ((this.shapes = []),
            (this.shapesData = e.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new hr()),
            this.initElement(e, t, n));
        }
        (d([vn, In, Er, Wn, An, Sn, un], Tr),
          (Tr.prototype.initElement = Fn.prototype.initElement),
          (Tr.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
          (Tr.prototype.dashResetter = []),
          (Tr.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              [],
            );
          }),
          (Tr.prototype.createStyleElement = function (e, t) {
            var n = {
                data: e,
                type: e.ty,
                preTransforms: this.transformsManager.addTransformSequence(t),
                transforms: [],
                elements: [],
                closed: e.hd === !0,
              },
              r = {};
            if (
              (e.ty === "fl" || e.ty === "st"
                ? ((r.c = Ve.getProp(this, e.c, 1, 255, this)),
                  r.c.k ||
                    (n.co =
                      "rgb(" +
                      k(r.c.v[0]) +
                      "," +
                      k(r.c.v[1]) +
                      "," +
                      k(r.c.v[2]) +
                      ")"))
                : (e.ty === "gf" || e.ty === "gs") &&
                  ((r.s = Ve.getProp(this, e.s, 1, null, this)),
                  (r.e = Ve.getProp(this, e.e, 1, null, this)),
                  (r.h = Ve.getProp(this, e.h || { k: 0 }, 0, 0.01, this)),
                  (r.a = Ve.getProp(this, e.a || { k: 0 }, 0, P, this)),
                  (r.g = new Qn(this, e.g, this))),
              (r.o = Ve.getProp(this, e.o, 0, 0.01, this)),
              e.ty === "st" || e.ty === "gs")
            ) {
              if (
                ((n.lc = qn[e.lc || 2]),
                (n.lj = Un[e.lj || 2]),
                e.lj == 1 && (n.ml = e.ml),
                (r.w = Ve.getProp(this, e.w, 0, null, this)),
                r.w.k || (n.wi = r.w.v),
                e.d)
              ) {
                var o = new Gn(this, e.d, "canvas", this);
                ((r.d = o),
                  r.d.k ||
                    ((n.da = r.d.dashArray), (n.do = r.d.dashoffset[0])));
              }
            } else n.r = e.r === 2 ? "evenodd" : "nonzero";
            return (this.stylesList.push(n), (r.style = n), r);
          }),
          (Tr.prototype.createGroupElement = function () {
            var e = { it: [], prevViewData: [] };
            return e;
          }),
          (Tr.prototype.createTransformElement = function (e) {
            var t = {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: Ve.getProp(this, e.o, 0, 0.01, this),
                mProps: Rt.getTransformProperty(this, e, this),
              },
            };
            return t;
          }),
          (Tr.prototype.createShapeElement = function (e) {
            var t = new Ir(this, e, this.stylesList, this.transformsManager);
            return (this.shapes.push(t), this.addShapeToModifiers(t), t);
          }),
          (Tr.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var e,
              t = this.itemsData.length;
            for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                [],
              ),
                t = this.dynamicProperties.length,
                e = 0;
              e < t;
              e += 1
            )
              this.dynamicProperties[e].getValue();
            (this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame));
          }),
          (Tr.prototype.addTransformToStyleList = function (e) {
            var t,
              n = this.stylesList.length;
            for (t = 0; t < n; t += 1)
              this.stylesList[t].closed ||
                this.stylesList[t].transforms.push(e);
          }),
          (Tr.prototype.removeTransformFromStyleList = function () {
            var e,
              t = this.stylesList.length;
            for (e = 0; e < t; e += 1)
              this.stylesList[e].closed || this.stylesList[e].transforms.pop();
          }),
          (Tr.prototype.closeStyles = function (e) {
            var t,
              n = e.length;
            for (t = 0; t < n; t += 1) e[t].closed = !0;
          }),
          (Tr.prototype.searchShapes = function (e, t, n, r, o) {
            var a,
              i = e.length - 1,
              l,
              s,
              u = [],
              c = [],
              d,
              m,
              p,
              _ = [].concat(o);
            for (a = i; a >= 0; a -= 1) {
              if (
                ((d = this.searchProcessedElement(e[a])),
                d ? (t[a] = n[d - 1]) : (e[a]._shouldRender = r),
                e[a].ty === "fl" ||
                  e[a].ty === "st" ||
                  e[a].ty === "gf" ||
                  e[a].ty === "gs")
              )
                (d
                  ? (t[a].style.closed = !1)
                  : (t[a] = this.createStyleElement(e[a], _)),
                  u.push(t[a].style));
              else if (e[a].ty === "gr") {
                if (!d) t[a] = this.createGroupElement(e[a]);
                else
                  for (s = t[a].it.length, l = 0; l < s; l += 1)
                    t[a].prevViewData[l] = t[a].it[l];
                this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, r, _);
              } else
                e[a].ty === "tr"
                  ? (d || ((p = this.createTransformElement(e[a])), (t[a] = p)),
                    _.push(t[a]),
                    this.addTransformToStyleList(t[a]))
                  : e[a].ty === "sh" ||
                      e[a].ty === "rc" ||
                      e[a].ty === "el" ||
                      e[a].ty === "sr"
                    ? d || (t[a] = this.createShapeElement(e[a]))
                    : e[a].ty === "tm" ||
                        e[a].ty === "rd" ||
                        e[a].ty === "pb" ||
                        e[a].ty === "zz" ||
                        e[a].ty === "op"
                      ? (d
                          ? ((m = t[a]), (m.closed = !1))
                          : ((m = Ct.getModifier(e[a].ty)),
                            m.init(this, e[a]),
                            (t[a] = m),
                            this.shapeModifiers.push(m)),
                        c.push(m))
                      : e[a].ty === "rp" &&
                        (d
                          ? ((m = t[a]), (m.closed = !0))
                          : ((m = Ct.getModifier(e[a].ty)),
                            (t[a] = m),
                            m.init(this, e, a, t),
                            this.shapeModifiers.push(m),
                            (r = !1)),
                        c.push(m));
              this.addProcessedElement(e[a], a + 1);
            }
            for (
              this.removeTransformFromStyleList(),
                this.closeStyles(u),
                i = c.length,
                a = 0;
              a < i;
              a += 1
            )
              c[a].closed = !0;
          }),
          (Tr.prototype.renderInnerContent = function () {
            ((this.transformHelper.opacity = 1),
              (this.transformHelper._opMdf = !1),
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(
                this.transformHelper,
                this.shapesData,
                this.itemsData,
                !0,
              ));
          }),
          (Tr.prototype.renderShapeTransform = function (e, t) {
            (e._opMdf || t.op._mdf || this._isFirstFrame) &&
              ((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opMdf = !0));
          }),
          (Tr.prototype.drawLayer = function () {
            var e,
              t = this.stylesList.length,
              n,
              r,
              o,
              a,
              i,
              l,
              s = this.globalData.renderer,
              u = this.globalData.canvasContext,
              c,
              d;
            for (e = 0; e < t; e += 1)
              if (
                ((d = this.stylesList[e]),
                (c = d.type),
                !(
                  ((c === "st" || c === "gs") && d.wi === 0) ||
                  !d.data._shouldRender ||
                  d.coOp === 0 ||
                  this.globalData.currentGlobalAlpha === 0
                ))
              ) {
                for (
                  s.save(),
                    i = d.elements,
                    c === "st" || c === "gs"
                      ? (s.ctxStrokeStyle(c === "st" ? d.co : d.grd),
                        s.ctxLineWidth(d.wi),
                        s.ctxLineCap(d.lc),
                        s.ctxLineJoin(d.lj),
                        s.ctxMiterLimit(d.ml || 0))
                      : s.ctxFillStyle(c === "fl" ? d.co : d.grd),
                    s.ctxOpacity(d.coOp),
                    c !== "st" && c !== "gs" && u.beginPath(),
                    s.ctxTransform(d.preTransforms.finalTransform.props),
                    r = i.length,
                    n = 0;
                  n < r;
                  n += 1
                ) {
                  for (
                    (c === "st" || c === "gs") &&
                      (u.beginPath(),
                      d.da && (u.setLineDash(d.da), (u.lineDashOffset = d.do))),
                      l = i[n].trNodes,
                      a = l.length,
                      o = 0;
                    o < a;
                    o += 1
                  )
                    l[o].t === "m"
                      ? u.moveTo(l[o].p[0], l[o].p[1])
                      : l[o].t === "c"
                        ? u.bezierCurveTo(
                            l[o].pts[0],
                            l[o].pts[1],
                            l[o].pts[2],
                            l[o].pts[3],
                            l[o].pts[4],
                            l[o].pts[5],
                          )
                        : u.closePath();
                  (c === "st" || c === "gs") &&
                    (s.ctxStroke(), d.da && u.setLineDash(this.dashResetter));
                }
                (c !== "st" &&
                  c !== "gs" &&
                  this.globalData.renderer.ctxFill(d.r),
                  s.restore());
              }
          }),
          (Tr.prototype.renderShape = function (e, t, n, r) {
            var o,
              a = t.length - 1,
              i;
            for (i = e, o = a; o >= 0; o -= 1)
              t[o].ty === "tr"
                ? ((i = n[o].transform), this.renderShapeTransform(e, i))
                : t[o].ty === "sh" ||
                    t[o].ty === "el" ||
                    t[o].ty === "rc" ||
                    t[o].ty === "sr"
                  ? this.renderPath(t[o], n[o])
                  : t[o].ty === "fl"
                    ? this.renderFill(t[o], n[o], i)
                    : t[o].ty === "st"
                      ? this.renderStroke(t[o], n[o], i)
                      : t[o].ty === "gf" || t[o].ty === "gs"
                        ? this.renderGradientFill(t[o], n[o], i)
                        : t[o].ty === "gr"
                          ? this.renderShape(i, t[o].it, n[o].it)
                          : t[o].ty;
            r && this.drawLayer();
          }),
          (Tr.prototype.renderStyledShape = function (e, t) {
            if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
              var n = e.trNodes,
                r = t.paths,
                o,
                a,
                i,
                l = r._length;
              n.length = 0;
              var s = e.transforms.finalTransform;
              for (i = 0; i < l; i += 1) {
                var u = r.shapes[i];
                if (u && u.v) {
                  for (a = u._length, o = 1; o < a; o += 1)
                    (o === 1 &&
                      n.push({
                        t: "m",
                        p: s.applyToPointArray(u.v[0][0], u.v[0][1], 0),
                      }),
                      n.push({
                        t: "c",
                        pts: s.applyToTriplePoints(u.o[o - 1], u.i[o], u.v[o]),
                      }));
                  (a === 1 &&
                    n.push({
                      t: "m",
                      p: s.applyToPointArray(u.v[0][0], u.v[0][1], 0),
                    }),
                    u.c &&
                      a &&
                      (n.push({
                        t: "c",
                        pts: s.applyToTriplePoints(u.o[o - 1], u.i[0], u.v[0]),
                      }),
                      n.push({ t: "z" })));
                }
              }
              e.trNodes = n;
            }
          }),
          (Tr.prototype.renderPath = function (e, t) {
            if (e.hd !== !0 && e._shouldRender) {
              var n,
                r = t.styledShapes.length;
              for (n = 0; n < r; n += 1)
                this.renderStyledShape(t.styledShapes[n], t.sh);
            }
          }),
          (Tr.prototype.renderFill = function (e, t, n) {
            var r = t.style;
            ((t.c._mdf || this._isFirstFrame) &&
              (r.co =
                "rgb(" +
                k(t.c.v[0]) +
                "," +
                k(t.c.v[1]) +
                "," +
                k(t.c.v[2]) +
                ")"),
              (t.o._mdf || n._opMdf || this._isFirstFrame) &&
                (r.coOp = t.o.v * n.opacity));
          }),
          (Tr.prototype.renderGradientFill = function (e, t, n) {
            var r = t.style,
              o;
            if (
              !r.grd ||
              t.g._mdf ||
              t.s._mdf ||
              t.e._mdf ||
              (e.t !== 1 && (t.h._mdf || t.a._mdf))
            ) {
              var a = this.globalData.canvasContext,
                i = t.s.v,
                l = t.e.v;
              if (e.t === 1) o = a.createLinearGradient(i[0], i[1], l[0], l[1]);
              else {
                var s = Math.sqrt(
                    Math.pow(i[0] - l[0], 2) + Math.pow(i[1] - l[1], 2),
                  ),
                  u = Math.atan2(l[1] - i[1], l[0] - i[0]),
                  c = t.h.v;
                c >= 1 ? (c = 0.99) : c <= -1 && (c = -0.99);
                var d = s * c,
                  m = Math.cos(u + t.a.v) * d + i[0],
                  p = Math.sin(u + t.a.v) * d + i[1];
                o = a.createRadialGradient(m, p, 0, i[0], i[1], s);
              }
              var _,
                f = e.g.p,
                g = t.g.c,
                h = 1;
              for (_ = 0; _ < f; _ += 1)
                (t.g._hasOpacity && t.g._collapsable && (h = t.g.o[_ * 2 + 1]),
                  o.addColorStop(
                    g[_ * 4] / 100,
                    "rgba(" +
                      g[_ * 4 + 1] +
                      "," +
                      g[_ * 4 + 2] +
                      "," +
                      g[_ * 4 + 3] +
                      "," +
                      h +
                      ")",
                  ));
              r.grd = o;
            }
            r.coOp = t.o.v * n.opacity;
          }),
          (Tr.prototype.renderStroke = function (e, t, n) {
            var r = t.style,
              o = t.d;
            (o &&
              (o._mdf || this._isFirstFrame) &&
              ((r.da = o.dashArray), (r.do = o.dashoffset[0])),
              (t.c._mdf || this._isFirstFrame) &&
                (r.co =
                  "rgb(" +
                  k(t.c.v[0]) +
                  "," +
                  k(t.c.v[1]) +
                  "," +
                  k(t.c.v[2]) +
                  ")"),
              (t.o._mdf || n._opMdf || this._isFirstFrame) &&
                (r.coOp = t.o.v * n.opacity),
              (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v));
          }),
          (Tr.prototype.destroy = function () {
            ((this.shapesData = null),
              (this.globalData = null),
              (this.canvasContext = null),
              (this.stylesList.length = 0),
              (this.itemsData.length = 0));
          }));
        function Dr(e, t, n) {
          ((this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = "canvas"),
            (this.values = {
              fill: "rgba(0,0,0,0)",
              stroke: "rgba(0,0,0,0)",
              sWidth: 0,
              fValue: "",
            }),
            this.initElement(e, t, n));
        }
        (d([vn, In, Er, An, Sn, un, sr], Dr),
          (Dr.prototype.tHelper = c("canvas").getContext("2d")),
          (Dr.prototype.buildNewText = function () {
            var e = this.textProperty.currentData;
            this.renderedLetters = g(e.l ? e.l.length : 0);
            var t = !1;
            (e.fc
              ? ((t = !0), (this.values.fill = this.buildColor(e.fc)))
              : (this.values.fill = "rgba(0,0,0,0)"),
              (this.fill = t));
            var n = !1;
            e.sc &&
              ((n = !0),
              (this.values.stroke = this.buildColor(e.sc)),
              (this.values.sWidth = e.sw));
            var r = this.globalData.fontManager.getFontByName(e.f),
              o,
              a,
              i = e.l,
              l = this.mHelper;
            ((this.stroke = n),
              (this.values.fValue =
                e.finalSize +
                "px " +
                this.globalData.fontManager.getFontByName(e.f).fFamily),
              (a = e.finalText.length));
            var s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              h,
              y,
              C = this.data.singleShape,
              b = e.tr * 0.001 * e.finalSize,
              v = 0,
              S = 0,
              R = !0,
              L = 0;
            for (o = 0; o < a; o += 1) {
              ((s = this.globalData.fontManager.getCharData(
                e.finalText[o],
                r.fStyle,
                this.globalData.fontManager.getFontByName(e.f).fFamily,
              )),
                (u = (s && s.data) || {}),
                l.reset(),
                C &&
                  i[o].n &&
                  ((v = -b), (S += e.yOffset), (S += R ? 1 : 0), (R = !1)),
                (m = u.shapes ? u.shapes[0].it : []),
                (_ = m.length),
                l.scale(e.finalSize / 100, e.finalSize / 100),
                C && this.applyTextPropertiesToMatrix(e, l, i[o].line, v, S),
                (h = g(_ - 1)));
              var E = 0;
              for (p = 0; p < _; p += 1)
                if (m[p].ty === "sh") {
                  for (
                    d = m[p].ks.k.i.length, f = m[p].ks.k, y = [], c = 1;
                    c < d;
                    c += 1
                  )
                    (c === 1 &&
                      y.push(
                        l.applyToX(f.v[0][0], f.v[0][1], 0),
                        l.applyToY(f.v[0][0], f.v[0][1], 0),
                      ),
                      y.push(
                        l.applyToX(f.o[c - 1][0], f.o[c - 1][1], 0),
                        l.applyToY(f.o[c - 1][0], f.o[c - 1][1], 0),
                        l.applyToX(f.i[c][0], f.i[c][1], 0),
                        l.applyToY(f.i[c][0], f.i[c][1], 0),
                        l.applyToX(f.v[c][0], f.v[c][1], 0),
                        l.applyToY(f.v[c][0], f.v[c][1], 0),
                      ));
                  (y.push(
                    l.applyToX(f.o[c - 1][0], f.o[c - 1][1], 0),
                    l.applyToY(f.o[c - 1][0], f.o[c - 1][1], 0),
                    l.applyToX(f.i[0][0], f.i[0][1], 0),
                    l.applyToY(f.i[0][0], f.i[0][1], 0),
                    l.applyToX(f.v[0][0], f.v[0][1], 0),
                    l.applyToY(f.v[0][0], f.v[0][1], 0),
                  ),
                    (h[E] = y),
                    (E += 1));
                }
              (C && ((v += i[o].l), (v += b)),
                this.textSpans[L]
                  ? (this.textSpans[L].elem = h)
                  : (this.textSpans[L] = { elem: h }),
                (L += 1));
            }
          }),
          (Dr.prototype.renderInnerContent = function () {
            this.validateText();
            var e = this.canvasContext;
            ((e.font = this.values.fValue),
              this.globalData.renderer.ctxLineCap("butt"),
              this.globalData.renderer.ctxLineJoin("miter"),
              this.globalData.renderer.ctxMiterLimit(4),
              this.data.singleShape ||
                this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag,
                ));
            var t,
              n,
              r,
              o,
              a,
              i,
              l = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            n = s.length;
            var u,
              c = null,
              d = null,
              m = null,
              p,
              _,
              f = this.globalData.renderer;
            for (t = 0; t < n; t += 1)
              if (!s[t].n) {
                if (
                  ((u = l[t]),
                  u && (f.save(), f.ctxTransform(u.p), f.ctxOpacity(u.o)),
                  this.fill)
                ) {
                  for (
                    u && u.fc
                      ? c !== u.fc && (f.ctxFillStyle(u.fc), (c = u.fc))
                      : c !== this.values.fill &&
                        ((c = this.values.fill),
                        f.ctxFillStyle(this.values.fill)),
                      p = this.textSpans[t].elem,
                      o = p.length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < o;
                    r += 1
                  )
                    for (
                      _ = p[r],
                        i = _.length,
                        this.globalData.canvasContext.moveTo(_[0], _[1]),
                        a = 2;
                      a < i;
                      a += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        _[a],
                        _[a + 1],
                        _[a + 2],
                        _[a + 3],
                        _[a + 4],
                        _[a + 5],
                      );
                  (this.globalData.canvasContext.closePath(), f.ctxFill());
                }
                if (this.stroke) {
                  for (
                    u && u.sw
                      ? m !== u.sw && ((m = u.sw), f.ctxLineWidth(u.sw))
                      : m !== this.values.sWidth &&
                        ((m = this.values.sWidth),
                        f.ctxLineWidth(this.values.sWidth)),
                      u && u.sc
                        ? d !== u.sc && ((d = u.sc), f.ctxStrokeStyle(u.sc))
                        : d !== this.values.stroke &&
                          ((d = this.values.stroke),
                          f.ctxStrokeStyle(this.values.stroke)),
                      p = this.textSpans[t].elem,
                      o = p.length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < o;
                    r += 1
                  )
                    for (
                      _ = p[r],
                        i = _.length,
                        this.globalData.canvasContext.moveTo(_[0], _[1]),
                        a = 2;
                      a < i;
                      a += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        _[a],
                        _[a + 1],
                        _[a + 2],
                        _[a + 3],
                        _[a + 4],
                        _[a + 5],
                      );
                  (this.globalData.canvasContext.closePath(), f.ctxStroke());
                }
                u && this.globalData.renderer.restore();
              }
          }));
        function xr(e, t, n) {
          ((this.assetData = t.getAssetData(e.refId)),
            (this.img = t.imageLoader.getAsset(this.assetData)),
            this.initElement(e, t, n));
        }
        (d([vn, In, Er, An, Sn, un], xr),
          (xr.prototype.initElement = nr.prototype.initElement),
          (xr.prototype.prepareFrame = On.prototype.prepareFrame),
          (xr.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width ||
                this.assetData.h !== this.img.height)
            ) {
              var e = c("canvas");
              ((e.width = this.assetData.w), (e.height = this.assetData.h));
              var t = e.getContext("2d"),
                n = this.img.width,
                r = this.img.height,
                o = n / r,
                a = this.assetData.w / this.assetData.h,
                i,
                l,
                s =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio;
              ((o > a && s === "xMidYMid slice") ||
              (o < a && s !== "xMidYMid slice")
                ? ((l = r), (i = l * a))
                : ((i = n), (l = i / a)),
                t.drawImage(
                  this.img,
                  (n - i) / 2,
                  (r - l) / 2,
                  i,
                  l,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h,
                ),
                (this.img = e));
            }
          }),
          (xr.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          }),
          (xr.prototype.destroy = function () {
            this.img = null;
          }));
        function $r(e, t, n) {
          this.initElement(e, t, n);
        }
        (d([vn, In, Er, An, Sn, un], $r),
          ($r.prototype.initElement = nr.prototype.initElement),
          ($r.prototype.prepareFrame = On.prototype.prepareFrame),
          ($r.prototype.renderInnerContent = function () {
            (this.globalData.renderer.ctxFillStyle(this.data.sc),
              this.globalData.renderer.ctxFillRect(
                0,
                0,
                this.data.sw,
                this.data.sh,
              ));
          }));
        function Pr() {}
        (d([En], Pr),
          (Pr.prototype.createShape = function (e) {
            return new Tr(e, this.globalData, this);
          }),
          (Pr.prototype.createText = function (e) {
            return new Dr(e, this.globalData, this);
          }),
          (Pr.prototype.createImage = function (e) {
            return new xr(e, this.globalData, this);
          }),
          (Pr.prototype.createSolid = function (e) {
            return new $r(e, this.globalData, this);
          }),
          (Pr.prototype.createNull = gr.prototype.createNull),
          (Pr.prototype.ctxTransform = function (e) {
            (e[0] === 1 &&
              e[1] === 0 &&
              e[4] === 0 &&
              e[5] === 1 &&
              e[12] === 0 &&
              e[13] === 0) ||
              this.canvasContext.transform(
                e[0],
                e[1],
                e[4],
                e[5],
                e[12],
                e[13],
              );
          }),
          (Pr.prototype.ctxOpacity = function (e) {
            this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
          }),
          (Pr.prototype.ctxFillStyle = function (e) {
            this.canvasContext.fillStyle = e;
          }),
          (Pr.prototype.ctxStrokeStyle = function (e) {
            this.canvasContext.strokeStyle = e;
          }),
          (Pr.prototype.ctxLineWidth = function (e) {
            this.canvasContext.lineWidth = e;
          }),
          (Pr.prototype.ctxLineCap = function (e) {
            this.canvasContext.lineCap = e;
          }),
          (Pr.prototype.ctxLineJoin = function (e) {
            this.canvasContext.lineJoin = e;
          }),
          (Pr.prototype.ctxMiterLimit = function (e) {
            this.canvasContext.miterLimit = e;
          }),
          (Pr.prototype.ctxFill = function (e) {
            this.canvasContext.fill(e);
          }),
          (Pr.prototype.ctxFillRect = function (e, t, n, r) {
            this.canvasContext.fillRect(e, t, n, r);
          }),
          (Pr.prototype.ctxStroke = function () {
            this.canvasContext.stroke();
          }),
          (Pr.prototype.reset = function () {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.restore();
              return;
            }
            this.contextData.reset();
          }),
          (Pr.prototype.save = function () {
            this.canvasContext.save();
          }),
          (Pr.prototype.restore = function (e) {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.restore();
              return;
            }
            (e && (this.globalData.blendMode = "source-over"),
              this.contextData.restore(e));
          }),
          (Pr.prototype.configAnimation = function (e) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = c("canvas");
              var t = this.animationItem.container.style;
              ((t.width = "100%"), (t.height = "100%"));
              var n = "0px 0px 0px";
              ((t.transformOrigin = n),
                (t.mozTransformOrigin = n),
                (t.webkitTransformOrigin = n),
                (t["-webkit-transform"] = n),
                (t.contentVisibility = this.renderConfig.contentVisibility),
                this.animationItem.wrapper.appendChild(
                  this.animationItem.container,
                ),
                (this.canvasContext =
                  this.animationItem.container.getContext("2d")),
                this.renderConfig.className &&
                  this.animationItem.container.setAttribute(
                    "class",
                    this.renderConfig.className,
                  ),
                this.renderConfig.id &&
                  this.animationItem.container.setAttribute(
                    "id",
                    this.renderConfig.id,
                  ));
            } else this.canvasContext = this.renderConfig.context;
            (this.contextData.setContext(this.canvasContext),
              (this.data = e),
              (this.layers = e.layers),
              (this.transformCanvas = {
                w: e.w,
                h: e.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0,
              }),
              this.setupGlobalData(e, document.body),
              (this.globalData.canvasContext = this.canvasContext),
              (this.globalData.renderer = this),
              (this.globalData.isDashed = !1),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.globalData.transformCanvas = this.transformCanvas),
              (this.elements = g(e.layers.length)),
              this.updateContainerSize());
          }),
          (Pr.prototype.updateContainerSize = function (e, t) {
            this.reset();
            var n, r;
            e
              ? ((n = e),
                (r = t),
                (this.canvasContext.canvas.width = n),
                (this.canvasContext.canvas.height = r))
              : (this.animationItem.wrapper && this.animationItem.container
                  ? ((n = this.animationItem.wrapper.offsetWidth),
                    (r = this.animationItem.wrapper.offsetHeight))
                  : ((n = this.canvasContext.canvas.width),
                    (r = this.canvasContext.canvas.height)),
                (this.canvasContext.canvas.width = n * this.renderConfig.dpr),
                (this.canvasContext.canvas.height = r * this.renderConfig.dpr));
            var o, a;
            if (
              this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
              this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1
            ) {
              var i = this.renderConfig.preserveAspectRatio.split(" "),
                l = i[1] || "meet",
                s = i[0] || "xMidYMid",
                u = s.substr(0, 4),
                c = s.substr(4);
              ((o = n / r),
                (a = this.transformCanvas.w / this.transformCanvas.h),
                (a > o && l === "meet") || (a < o && l === "slice")
                  ? ((this.transformCanvas.sx =
                      n / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      n / (this.transformCanvas.w / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx =
                      r / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      r / (this.transformCanvas.h / this.renderConfig.dpr))),
                u === "xMid" &&
                ((a < o && l === "meet") || (a > o && l === "slice"))
                  ? (this.transformCanvas.tx =
                      ((n -
                        this.transformCanvas.w * (r / this.transformCanvas.h)) /
                        2) *
                      this.renderConfig.dpr)
                  : u === "xMax" &&
                      ((a < o && l === "meet") || (a > o && l === "slice"))
                    ? (this.transformCanvas.tx =
                        (n -
                          this.transformCanvas.w *
                            (r / this.transformCanvas.h)) *
                        this.renderConfig.dpr)
                    : (this.transformCanvas.tx = 0),
                c === "YMid" &&
                ((a > o && l === "meet") || (a < o && l === "slice"))
                  ? (this.transformCanvas.ty =
                      ((r -
                        this.transformCanvas.h * (n / this.transformCanvas.w)) /
                        2) *
                      this.renderConfig.dpr)
                  : c === "YMax" &&
                      ((a > o && l === "meet") || (a < o && l === "slice"))
                    ? (this.transformCanvas.ty =
                        (r -
                          this.transformCanvas.h *
                            (n / this.transformCanvas.w)) *
                        this.renderConfig.dpr)
                    : (this.transformCanvas.ty = 0));
            } else
              this.renderConfig.preserveAspectRatio === "none"
                ? ((this.transformCanvas.sx =
                    n / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    r / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0))
                : ((this.transformCanvas.sx = this.renderConfig.dpr),
                  (this.transformCanvas.sy = this.renderConfig.dpr),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0));
            ((this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ]),
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(
                0,
                0,
                this.transformCanvas.w,
                this.transformCanvas.h,
              ),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0));
          }),
          (Pr.prototype.destroy = function () {
            this.renderConfig.clearCanvas &&
              this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = "");
            var e,
              t = this.layers ? this.layers.length : 0;
            for (e = t - 1; e >= 0; e -= 1)
              this.elements[e] &&
                this.elements[e].destroy &&
                this.elements[e].destroy();
            ((this.elements.length = 0),
              (this.globalData.canvasContext = null),
              (this.animationItem.container = null),
              (this.destroyed = !0));
          }),
          (Pr.prototype.renderFrame = function (e, t) {
            if (
              !(
                (this.renderedFrame === e &&
                  this.renderConfig.clearCanvas === !0 &&
                  !t) ||
                this.destroyed ||
                e === -1
              )
            ) {
              ((this.renderedFrame = e),
                (this.globalData.frameNum =
                  e - this.animationItem._isFirstFrame),
                (this.globalData.frameId += 1),
                (this.globalData._mdf = !this.renderConfig.clearCanvas || t),
                (this.globalData.projectInterface.currentFrame = e));
              var n,
                r = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(e), n = r - 1;
                n >= 0;
                n -= 1
              )
                (this.completeLayers || this.elements[n]) &&
                  this.elements[n].prepareFrame(e - this.layers[n].st);
              if (this.globalData._mdf) {
                for (
                  this.renderConfig.clearCanvas === !0
                    ? this.canvasContext.clearRect(
                        0,
                        0,
                        this.transformCanvas.w,
                        this.transformCanvas.h,
                      )
                    : this.save(),
                    n = r - 1;
                  n >= 0;
                  n -= 1
                )
                  (this.completeLayers || this.elements[n]) &&
                    this.elements[n].renderFrame();
                this.renderConfig.clearCanvas !== !0 && this.restore();
              }
            }
          }),
          (Pr.prototype.buildItem = function (e) {
            var t = this.elements;
            if (!(t[e] || this.layers[e].ty === 99)) {
              var n = this.createItem(this.layers[e], this, this.globalData);
              ((t[e] = n), n.initExpressions());
            }
          }),
          (Pr.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var e = this.pendingElements.pop();
              e.checkParenting();
            }
          }),
          (Pr.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
          }),
          (Pr.prototype.show = function () {
            this.animationItem.container.style.display = "block";
          }));
        function Nr() {
          ((this.opacity = -1),
            (this.transform = f("float32", 16)),
            (this.fillStyle = ""),
            (this.strokeStyle = ""),
            (this.lineWidth = ""),
            (this.lineCap = ""),
            (this.lineJoin = ""),
            (this.miterLimit = ""),
            (this.id = Math.random()));
        }
        function Mr() {
          ((this.stack = []), (this.cArrPos = 0), (this.cTr = new Ye()));
          var e,
            t = 15;
          for (e = 0; e < t; e += 1) {
            var n = new Nr();
            this.stack[e] = n;
          }
          ((this._length = t),
            (this.nativeContext = null),
            (this.transformMat = new Ye()),
            (this.currentOpacity = 1),
            (this.currentFillStyle = ""),
            (this.appliedFillStyle = ""),
            (this.currentStrokeStyle = ""),
            (this.appliedStrokeStyle = ""),
            (this.currentLineWidth = ""),
            (this.appliedLineWidth = ""),
            (this.currentLineCap = ""),
            (this.appliedLineCap = ""),
            (this.currentLineJoin = ""),
            (this.appliedLineJoin = ""),
            (this.appliedMiterLimit = ""),
            (this.currentMiterLimit = ""));
        }
        ((Mr.prototype.duplicate = function () {
          var e = this._length * 2,
            t = 0;
          for (t = this._length; t < e; t += 1) this.stack[t] = new Nr();
          this._length = e;
        }),
          (Mr.prototype.reset = function () {
            ((this.cArrPos = 0),
              this.cTr.reset(),
              (this.stack[this.cArrPos].opacity = 1));
          }),
          (Mr.prototype.restore = function (e) {
            this.cArrPos -= 1;
            var t = this.stack[this.cArrPos],
              n = t.transform,
              r,
              o = this.cTr.props;
            for (r = 0; r < 16; r += 1) o[r] = n[r];
            if (e) {
              this.nativeContext.restore();
              var a = this.stack[this.cArrPos + 1];
              ((this.appliedFillStyle = a.fillStyle),
                (this.appliedStrokeStyle = a.strokeStyle),
                (this.appliedLineWidth = a.lineWidth),
                (this.appliedLineCap = a.lineCap),
                (this.appliedLineJoin = a.lineJoin),
                (this.appliedMiterLimit = a.miterLimit));
            }
            (this.nativeContext.setTransform(
              n[0],
              n[1],
              n[4],
              n[5],
              n[12],
              n[13],
            ),
              (e || (t.opacity !== -1 && this.currentOpacity !== t.opacity)) &&
                ((this.nativeContext.globalAlpha = t.opacity),
                (this.currentOpacity = t.opacity)),
              (this.currentFillStyle = t.fillStyle),
              (this.currentStrokeStyle = t.strokeStyle),
              (this.currentLineWidth = t.lineWidth),
              (this.currentLineCap = t.lineCap),
              (this.currentLineJoin = t.lineJoin),
              (this.currentMiterLimit = t.miterLimit));
          }),
          (Mr.prototype.save = function (e) {
            e && this.nativeContext.save();
            var t = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var n = this.stack[this.cArrPos],
              r;
            for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
            this.cArrPos += 1;
            var o = this.stack[this.cArrPos];
            ((o.opacity = n.opacity),
              (o.fillStyle = n.fillStyle),
              (o.strokeStyle = n.strokeStyle),
              (o.lineWidth = n.lineWidth),
              (o.lineCap = n.lineCap),
              (o.lineJoin = n.lineJoin),
              (o.miterLimit = n.miterLimit));
          }),
          (Mr.prototype.setOpacity = function (e) {
            this.stack[this.cArrPos].opacity = e;
          }),
          (Mr.prototype.setContext = function (e) {
            this.nativeContext = e;
          }),
          (Mr.prototype.fillStyle = function (e) {
            this.stack[this.cArrPos].fillStyle !== e &&
              ((this.currentFillStyle = e),
              (this.stack[this.cArrPos].fillStyle = e));
          }),
          (Mr.prototype.strokeStyle = function (e) {
            this.stack[this.cArrPos].strokeStyle !== e &&
              ((this.currentStrokeStyle = e),
              (this.stack[this.cArrPos].strokeStyle = e));
          }),
          (Mr.prototype.lineWidth = function (e) {
            this.stack[this.cArrPos].lineWidth !== e &&
              ((this.currentLineWidth = e),
              (this.stack[this.cArrPos].lineWidth = e));
          }),
          (Mr.prototype.lineCap = function (e) {
            this.stack[this.cArrPos].lineCap !== e &&
              ((this.currentLineCap = e),
              (this.stack[this.cArrPos].lineCap = e));
          }),
          (Mr.prototype.lineJoin = function (e) {
            this.stack[this.cArrPos].lineJoin !== e &&
              ((this.currentLineJoin = e),
              (this.stack[this.cArrPos].lineJoin = e));
          }),
          (Mr.prototype.miterLimit = function (e) {
            this.stack[this.cArrPos].miterLimit !== e &&
              ((this.currentMiterLimit = e),
              (this.stack[this.cArrPos].miterLimit = e));
          }),
          (Mr.prototype.transform = function (e) {
            this.transformMat.cloneFromProps(e);
            var t = this.cTr;
            (this.transformMat.multiply(t),
              t.cloneFromProps(this.transformMat.props));
            var n = t.props;
            this.nativeContext.setTransform(
              n[0],
              n[1],
              n[4],
              n[5],
              n[12],
              n[13],
            );
          }),
          (Mr.prototype.opacity = function (e) {
            var t = this.stack[this.cArrPos].opacity;
            ((t *= e < 0 ? 0 : e),
              this.stack[this.cArrPos].opacity !== t &&
                (this.currentOpacity !== e &&
                  ((this.nativeContext.globalAlpha = e),
                  (this.currentOpacity = e)),
                (this.stack[this.cArrPos].opacity = t)));
          }),
          (Mr.prototype.fill = function (e) {
            (this.appliedFillStyle !== this.currentFillStyle &&
              ((this.appliedFillStyle = this.currentFillStyle),
              (this.nativeContext.fillStyle = this.appliedFillStyle)),
              this.nativeContext.fill(e));
          }),
          (Mr.prototype.fillRect = function (e, t, n, r) {
            (this.appliedFillStyle !== this.currentFillStyle &&
              ((this.appliedFillStyle = this.currentFillStyle),
              (this.nativeContext.fillStyle = this.appliedFillStyle)),
              this.nativeContext.fillRect(e, t, n, r));
          }),
          (Mr.prototype.stroke = function () {
            (this.appliedStrokeStyle !== this.currentStrokeStyle &&
              ((this.appliedStrokeStyle = this.currentStrokeStyle),
              (this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
              this.appliedLineWidth !== this.currentLineWidth &&
                ((this.appliedLineWidth = this.currentLineWidth),
                (this.nativeContext.lineWidth = this.appliedLineWidth)),
              this.appliedLineCap !== this.currentLineCap &&
                ((this.appliedLineCap = this.currentLineCap),
                (this.nativeContext.lineCap = this.appliedLineCap)),
              this.appliedLineJoin !== this.currentLineJoin &&
                ((this.appliedLineJoin = this.currentLineJoin),
                (this.nativeContext.lineJoin = this.appliedLineJoin)),
              this.appliedMiterLimit !== this.currentMiterLimit &&
                ((this.appliedMiterLimit = this.currentMiterLimit),
                (this.nativeContext.miterLimit = this.appliedMiterLimit)),
              this.nativeContext.stroke());
          }));
        function wr(e, t, n) {
          ((this.completeLayers = !1),
            (this.layers = e.layers),
            (this.pendingElements = []),
            (this.elements = g(this.layers.length)),
            this.initElement(e, t, n),
            (this.tm = e.tm
              ? Ve.getProp(this, e.tm, 0, t.frameRate, this)
              : { _placeholder: !0 }));
        }
        (d([Pr, _r, Er], wr),
          (wr.prototype.renderInnerContent = function () {
            var e = this.canvasContext;
            (e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(this.data.w, 0),
              e.lineTo(this.data.w, this.data.h),
              e.lineTo(0, this.data.h),
              e.lineTo(0, 0),
              e.clip());
            var t,
              n = this.layers.length;
            for (t = n - 1; t >= 0; t -= 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (wr.prototype.destroy = function () {
            var e,
              t = this.layers.length;
            for (e = t - 1; e >= 0; e -= 1)
              this.elements[e] && this.elements[e].destroy();
            ((this.layers = null), (this.elements = null));
          }),
          (wr.prototype.createComp = function (e) {
            return new wr(e, this.globalData, this);
          }));
        function Ar(e, t) {
          ((this.animationItem = e),
            (this.renderConfig = {
              clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
              context: (t && t.context) || null,
              progressiveLoad: (t && t.progressiveLoad) || !1,
              preserveAspectRatio:
                (t && t.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (t && t.contentVisibility) || "visible",
              className: (t && t.className) || "",
              id: (t && t.id) || "",
              runExpressions:
                !t || t.runExpressions === void 0 || t.runExpressions,
            }),
            (this.renderConfig.dpr = (t && t.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (t && t.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new Mr()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Ye()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas"),
            this.renderConfig.clearCanvas &&
              ((this.ctxTransform = this.contextData.transform.bind(
                this.contextData,
              )),
              (this.ctxOpacity = this.contextData.opacity.bind(
                this.contextData,
              )),
              (this.ctxFillStyle = this.contextData.fillStyle.bind(
                this.contextData,
              )),
              (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(
                this.contextData,
              )),
              (this.ctxLineWidth = this.contextData.lineWidth.bind(
                this.contextData,
              )),
              (this.ctxLineCap = this.contextData.lineCap.bind(
                this.contextData,
              )),
              (this.ctxLineJoin = this.contextData.lineJoin.bind(
                this.contextData,
              )),
              (this.ctxMiterLimit = this.contextData.miterLimit.bind(
                this.contextData,
              )),
              (this.ctxFill = this.contextData.fill.bind(this.contextData)),
              (this.ctxFillRect = this.contextData.fillRect.bind(
                this.contextData,
              )),
              (this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
              (this.save = this.contextData.save.bind(this.contextData))));
        }
        return (
          d([Pr], Ar),
          (Ar.prototype.createComp = function (e) {
            return new wr(e, this.globalData, this);
          }),
          ge("canvas", Ar),
          Ct.registerModifier("tm", vt),
          Ct.registerModifier("pb", St),
          Ct.registerModifier("rp", Lt),
          Ct.registerModifier("rd", Et),
          Ct.registerModifier("zz", Ht),
          Ct.registerModifier("op", rn),
          Ze
        );
      });
  },
  null,
);
