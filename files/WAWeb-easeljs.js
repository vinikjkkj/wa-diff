__d(
  "WAWeb-easeljs",
  [],
  function (t, n, r, o, a, i) {
    var e = e || {};
    ((e.extend = function (e, t) {
      "use strict";
      function n() {
        this.constructor = e;
      }
      return ((n.prototype = t.prototype), (e.prototype = new n()));
    }),
      (e = e || {}),
      (e.promote = function (e, t) {
        "use strict";
        var n = e.prototype,
          r =
            (Object.getPrototypeOf && Object.getPrototypeOf(n)) || n.__proto__;
        if (r) {
          n[(t += "_") + "constructor"] = r.constructor;
          for (var o in r)
            n.hasOwnProperty(o) &&
              typeof r[o] == "function" &&
              (n[t + o] = r[o]);
        }
        return e;
      }),
      (e = e || {}),
      (e.indexOf = function (e, t) {
        "use strict";
        for (var n = 0, r = e.length; r > n; n++) if (t === e[n]) return n;
        return -1;
      }),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n) {
          ((this.type = e),
            (this.target = null),
            (this.currentTarget = null),
            (this.eventPhase = 0),
            (this.bubbles = !!t),
            (this.cancelable = !!n),
            (this.timeStamp = new Date().getTime()),
            (this.defaultPrevented = !1),
            (this.propagationStopped = !1),
            (this.immediatePropagationStopped = !1),
            (this.removed = !1));
        }
        var n = t.prototype;
        ((n.preventDefault = function () {
          this.defaultPrevented = this.cancelable && !0;
        }),
          (n.stopPropagation = function () {
            this.propagationStopped = !0;
          }),
          (n.stopImmediatePropagation = function () {
            this.immediatePropagationStopped = this.propagationStopped = !0;
          }),
          (n.remove = function () {
            this.removed = !0;
          }),
          (n.clone = function () {
            return new t(this.type, this.bubbles, this.cancelable);
          }),
          (n.set = function (e) {
            for (var t in e) this[t] = e[t];
            return this;
          }),
          (n.toString = function () {
            return "[Event (type=" + this.type + ")]";
          }),
          (e.Event = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          ((this._listeners = null), (this._captureListeners = null));
        }
        var n = t.prototype;
        ((t.initialize = function (e) {
          ((e.addEventListener = n.addEventListener),
            (e.on = n.on),
            (e.removeEventListener = e.off = n.removeEventListener),
            (e.removeAllEventListeners = n.removeAllEventListeners),
            (e.hasEventListener = n.hasEventListener),
            (e.dispatchEvent = n.dispatchEvent),
            (e._dispatchEvent = n._dispatchEvent),
            (e.willTrigger = n.willTrigger));
        }),
          (n.addEventListener = function (e, t, n) {
            var r;
            r = n
              ? (this._captureListeners = this._captureListeners || {})
              : (this._listeners = this._listeners || {});
            var o = r[e];
            return (
              o && this.removeEventListener(e, t, n),
              (o = r[e]),
              o ? o.push(t) : (r[e] = [t]),
              t
            );
          }),
          (n.on = function (e, t, n, r, o, a) {
            return (
              t.handleEvent && ((n = n || t), (t = t.handleEvent)),
              (n = n || this),
              this.addEventListener(
                e,
                function (e) {
                  (t.call(n, e, o), r && e.remove());
                },
                a,
              )
            );
          }),
          (n.removeEventListener = function (e, t, n) {
            var r = n ? this._captureListeners : this._listeners;
            if (r) {
              var o = r[e];
              if (o) {
                for (var a = 0, i = o.length; i > a; a++)
                  if (o[a] == t) {
                    i == 1 ? delete r[e] : o.splice(a, 1);
                    break;
                  }
              }
            }
          }),
          (n.off = n.removeEventListener),
          (n.removeAllEventListeners = function (e) {
            e
              ? (this._listeners && delete this._listeners[e],
                this._captureListeners && delete this._captureListeners[e])
              : (this._listeners = this._captureListeners = null);
          }),
          (n.dispatchEvent = function (t, n, r) {
            if (typeof t == "string") {
              var o = this._listeners;
              if (!(n || (o && o[t]))) return !0;
              t = new e.Event(t, n, r);
            } else t.target && t.clone && (t = t.clone());
            try {
              t.target = this;
            } catch (e) {}
            if (t.bubbles && this.parent) {
              for (var a = this, i = [a]; a.parent; ) i.push((a = a.parent));
              var l,
                s = i.length;
              for (l = s - 1; l >= 0 && !t.propagationStopped; l--)
                i[l]._dispatchEvent(t, 1 + (l == 0));
              for (l = 1; s > l && !t.propagationStopped; l++)
                i[l]._dispatchEvent(t, 3);
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented;
          }),
          (n.hasEventListener = function (e) {
            var t = this._listeners,
              n = this._captureListeners;
            return !!((t && t[e]) || (n && n[e]));
          }),
          (n.willTrigger = function (e) {
            for (var t = this; t; ) {
              if (t.hasEventListener(e)) return !0;
              t = t.parent;
            }
            return !1;
          }),
          (n.toString = function () {
            return "[EventDispatcher]";
          }),
          (n._dispatchEvent = function (e, t) {
            var n,
              r = t == 1 ? this._captureListeners : this._listeners;
            if (e && r) {
              var o = r[e.type];
              if (!o || !(n = o.length)) return;
              try {
                e.currentTarget = this;
              } catch (e) {}
              try {
                e.eventPhase = t;
              } catch (e) {}
              ((e.removed = !1), (o = o.slice()));
              for (var a = 0; n > a && !e.immediatePropagationStopped; a++) {
                var i = o[a];
                (i.handleEvent ? i.handleEvent(e) : i(e),
                  e.removed && (this.off(e.type, i, t == 1), (e.removed = !1)));
              }
            }
          }),
          (e.EventDispatcher = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          throw "Ticker cannot be instantiated.";
        }
        ((t.RAF_SYNCHED = "synched"),
          (t.RAF = "raf"),
          (t.TIMEOUT = "timeout"),
          (t.useRAF = !1),
          (t.timingMode = null),
          (t.maxDelta = 0),
          (t.paused = !1),
          (t.removeEventListener = null),
          (t.removeAllEventListeners = null),
          (t.dispatchEvent = null),
          (t.hasEventListener = null),
          (t._listeners = null),
          e.EventDispatcher.initialize(t),
          (t._addEventListener = t.addEventListener),
          (t.addEventListener = function () {
            return (
              !t._inited && t.init(),
              t._addEventListener.apply(t, arguments)
            );
          }),
          (t._inited = !1),
          (t._startTime = 0),
          (t._pausedTime = 0),
          (t._ticks = 0),
          (t._pausedTicks = 0),
          (t._interval = 50),
          (t._lastTime = 0),
          (t._times = null),
          (t._tickTimes = null),
          (t._timerId = null),
          (t._raf = !0),
          (t.setInterval = function (e) {
            ((t._interval = e), t._inited && t._setupTick());
          }),
          (t.getInterval = function () {
            return t._interval;
          }),
          (t.setFPS = function (e) {
            t.setInterval(1e3 / e);
          }),
          (t.getFPS = function () {
            return 1e3 / t._interval;
          }));
        try {
          Object.defineProperties(t, {
            interval: { get: t.getInterval, set: t.setInterval },
            framerate: { get: t.getFPS, set: t.setFPS },
          });
        } catch (e) {}
        ((t.init = function () {
          t._inited ||
            ((t._inited = !0),
            (t._times = []),
            (t._tickTimes = []),
            (t._startTime = t._getTime()),
            t._times.push((t._lastTime = 0)),
            (t.interval = t._interval));
        }),
          (t.reset = function () {
            if (t._raf) {
              var e =
                window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.oCancelAnimationFrame ||
                window.msCancelAnimationFrame;
              e && e(t._timerId);
            } else clearTimeout(t._timerId);
            (t.removeAllEventListeners("tick"),
              (t._timerId = t._times = t._tickTimes = null),
              (t._startTime = t._lastTime = t._ticks = 0),
              (t._inited = !1));
          }),
          (t.getMeasuredTickTime = function (e) {
            var n = 0,
              r = t._tickTimes;
            if (!r || r.length < 1) return -1;
            e = Math.min(r.length, e || 0 | t.getFPS());
            for (var o = 0; e > o; o++) n += r[o];
            return n / e;
          }),
          (t.getMeasuredFPS = function (e) {
            var n = t._times;
            return !n || n.length < 2
              ? -1
              : ((e = Math.min(n.length - 1, e || 0 | t.getFPS())),
                1e3 / ((n[0] - n[e]) / e));
          }),
          (t.setPaused = function (e) {
            t.paused = e;
          }),
          (t.getPaused = function () {
            return t.paused;
          }),
          (t.getTime = function (e) {
            return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1;
          }),
          (t.getEventTime = function (e) {
            return t._startTime
              ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0)
              : -1;
          }),
          (t.getTicks = function (e) {
            return t._ticks - (e ? t._pausedTicks : 0);
          }),
          (t._handleSynch = function () {
            ((t._timerId = null),
              t._setupTick(),
              t._getTime() - t._lastTime >= 0.97 * (t._interval - 1) &&
                t._tick());
          }),
          (t._handleRAF = function () {
            ((t._timerId = null), t._setupTick(), t._tick());
          }),
          (t._handleTimeout = function () {
            ((t._timerId = null), t._setupTick(), t._tick());
          }),
          (t._setupTick = function () {
            if (t._timerId == null) {
              var e = t.timingMode || (t.useRAF && t.RAF_SYNCHED);
              if (e == t.RAF_SYNCHED || e == t.RAF) {
                var n =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame;
                if (n)
                  return (
                    (t._timerId = n(
                      e == t.RAF ? t._handleRAF : t._handleSynch,
                    )),
                    void (t._raf = !0)
                  );
              }
              ((t._raf = !1),
                (t._timerId = setTimeout(t._handleTimeout, t._interval)));
            }
          }),
          (t._tick = function () {
            var n = t.paused,
              r = t._getTime(),
              o = r - t._lastTime;
            if (
              ((t._lastTime = r),
              t._ticks++,
              n && (t._pausedTicks++, (t._pausedTime += o)),
              t.hasEventListener("tick"))
            ) {
              var a = new e.Event("tick"),
                i = t.maxDelta;
              ((a.delta = i && o > i ? i : o),
                (a.paused = n),
                (a.time = r),
                (a.runTime = r - t._pausedTime),
                t.dispatchEvent(a));
            }
            for (
              t._tickTimes.unshift(t._getTime() - r);
              t._tickTimes.length > 100;
            )
              t._tickTimes.pop();
            for (t._times.unshift(r); t._times.length > 100; ) t._times.pop();
          }));
        var n =
          window.performance &&
          (performance.now ||
            performance.mozNow ||
            performance.msNow ||
            performance.oNow ||
            performance.webkitNow);
        ((t._getTime = function () {
          return (
            ((n && n.call(performance)) || new Date().getTime()) - t._startTime
          );
        }),
          (e.Ticker = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          throw "UID cannot be instantiated";
        }
        ((t._nextID = 0),
          (t.get = function () {
            return t._nextID++;
          }),
          (e.UID = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r, o, a, i, l, s, u, c) {
          (this.Event_constructor(e, t, n),
            (this.stageX = r),
            (this.stageY = o),
            (this.rawX = s == null ? r : s),
            (this.rawY = u == null ? o : u),
            (this.nativeEvent = a),
            (this.pointerID = i),
            (this.primary = !!l),
            (this.relatedTarget = c));
        }
        var n = e.extend(t, e.Event);
        ((n._get_localX = function () {
          return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
        }),
          (n._get_localY = function () {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
          }),
          (n._get_isTouch = function () {
            return this.pointerID !== -1;
          }));
        try {
          Object.defineProperties(n, {
            localX: { get: n._get_localX },
            localY: { get: n._get_localY },
            isTouch: { get: n._get_isTouch },
          });
        } catch (e) {}
        ((n.clone = function () {
          return new t(
            this.type,
            this.bubbles,
            this.cancelable,
            this.stageX,
            this.stageY,
            this.nativeEvent,
            this.pointerID,
            this.primary,
            this.rawX,
            this.rawY,
          );
        }),
          (n.toString = function () {
            return (
              "[MouseEvent (type=" +
              this.type +
              " stageX=" +
              this.stageX +
              " stageY=" +
              this.stageY +
              ")]"
            );
          }),
          (e.MouseEvent = e.promote(t, "Event")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r, o, a) {
          this.setValues(e, t, n, r, o, a);
        }
        var n = t.prototype;
        ((t.DEG_TO_RAD = Math.PI / 180),
          (t.identity = null),
          (n.setValues = function (e, t, n, r, o, a) {
            return (
              (this.a = e == null ? 1 : e),
              (this.b = t || 0),
              (this.c = n || 0),
              (this.d = r == null ? 1 : r),
              (this.tx = o || 0),
              (this.ty = a || 0),
              this
            );
          }),
          (n.append = function (e, t, n, r, o, a) {
            var i = this.a,
              l = this.b,
              s = this.c,
              u = this.d;
            return (
              (e != 1 || t != 0 || n != 0 || r != 1) &&
                ((this.a = i * e + s * t),
                (this.b = l * e + u * t),
                (this.c = i * n + s * r),
                (this.d = l * n + u * r)),
              (this.tx = i * o + s * a + this.tx),
              (this.ty = l * o + u * a + this.ty),
              this
            );
          }),
          (n.prepend = function (e, t, n, r, o, a) {
            var i = this.a,
              l = this.c,
              s = this.tx;
            return (
              (this.a = e * i + n * this.b),
              (this.b = t * i + r * this.b),
              (this.c = e * l + n * this.d),
              (this.d = t * l + r * this.d),
              (this.tx = e * s + n * this.ty + o),
              (this.ty = t * s + r * this.ty + a),
              this
            );
          }),
          (n.appendMatrix = function (e) {
            return this.append(e.a, e.b, e.c, e.d, e.tx, e.ty);
          }),
          (n.prependMatrix = function (e) {
            return this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty);
          }),
          (n.appendTransform = function (e, n, r, o, a, i, l, s, u) {
            if (a % 360)
              var c = a * t.DEG_TO_RAD,
                d = Math.cos(c),
                m = Math.sin(c);
            else ((d = 1), (m = 0));
            return (
              i || l
                ? ((i *= t.DEG_TO_RAD),
                  (l *= t.DEG_TO_RAD),
                  this.append(
                    Math.cos(l),
                    Math.sin(l),
                    -Math.sin(i),
                    Math.cos(i),
                    e,
                    n,
                  ),
                  this.append(d * r, m * r, -m * o, d * o, 0, 0))
                : this.append(d * r, m * r, -m * o, d * o, e, n),
              (s || u) &&
                ((this.tx -= s * this.a + u * this.c),
                (this.ty -= s * this.b + u * this.d)),
              this
            );
          }),
          (n.prependTransform = function (e, n, r, o, a, i, l, s, u) {
            if (a % 360)
              var c = a * t.DEG_TO_RAD,
                d = Math.cos(c),
                m = Math.sin(c);
            else ((d = 1), (m = 0));
            return (
              (s || u) && ((this.tx -= s), (this.ty -= u)),
              i || l
                ? ((i *= t.DEG_TO_RAD),
                  (l *= t.DEG_TO_RAD),
                  this.prepend(d * r, m * r, -m * o, d * o, 0, 0),
                  this.prepend(
                    Math.cos(l),
                    Math.sin(l),
                    -Math.sin(i),
                    Math.cos(i),
                    e,
                    n,
                  ))
                : this.prepend(d * r, m * r, -m * o, d * o, e, n),
              this
            );
          }),
          (n.rotate = function (e) {
            e *= t.DEG_TO_RAD;
            var n = Math.cos(e),
              r = Math.sin(e),
              o = this.a,
              a = this.b;
            return (
              (this.a = o * n + this.c * r),
              (this.b = a * n + this.d * r),
              (this.c = -o * r + this.c * n),
              (this.d = -a * r + this.d * n),
              this
            );
          }),
          (n.skew = function (e, n) {
            return (
              (e *= t.DEG_TO_RAD),
              (n *= t.DEG_TO_RAD),
              this.append(
                Math.cos(n),
                Math.sin(n),
                -Math.sin(e),
                Math.cos(e),
                0,
                0,
              ),
              this
            );
          }),
          (n.scale = function (e, t) {
            return (
              (this.a *= e),
              (this.b *= e),
              (this.c *= t),
              (this.d *= t),
              this
            );
          }),
          (n.translate = function (e, t) {
            return (
              (this.tx += this.a * e + this.c * t),
              (this.ty += this.b * e + this.d * t),
              this
            );
          }),
          (n.identity = function () {
            return (
              (this.a = this.d = 1),
              (this.b = this.c = this.tx = this.ty = 0),
              this
            );
          }),
          (n.invert = function () {
            var e = this.a,
              t = this.b,
              n = this.c,
              r = this.d,
              o = this.tx,
              a = e * r - t * n;
            return (
              (this.a = r / a),
              (this.b = -t / a),
              (this.c = -n / a),
              (this.d = e / a),
              (this.tx = (n * this.ty - r * o) / a),
              (this.ty = -(e * this.ty - t * o) / a),
              this
            );
          }),
          (n.isIdentity = function () {
            return (
              this.tx === 0 &&
              this.ty === 0 &&
              this.a === 1 &&
              this.b === 0 &&
              this.c === 0 &&
              this.d === 1
            );
          }),
          (n.equals = function (e) {
            return (
              this.tx === e.tx &&
              this.ty === e.ty &&
              this.a === e.a &&
              this.b === e.b &&
              this.c === e.c &&
              this.d === e.d
            );
          }),
          (n.transformPoint = function (e, t, n) {
            return (
              (n = n || {}),
              (n.x = e * this.a + t * this.c + this.tx),
              (n.y = e * this.b + t * this.d + this.ty),
              n
            );
          }),
          (n.decompose = function (e) {
            (e == null && (e = {}),
              (e.x = this.tx),
              (e.y = this.ty),
              (e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b)),
              (e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d)));
            var n = Math.atan2(-this.c, this.d),
              r = Math.atan2(this.b, this.a),
              o = Math.abs(1 - n / r);
            return (
              1e-5 > o
                ? ((e.rotation = r / t.DEG_TO_RAD),
                  this.a < 0 &&
                    this.d >= 0 &&
                    (e.rotation += e.rotation <= 0 ? 180 : -180),
                  (e.skewX = e.skewY = 0))
                : ((e.skewX = n / t.DEG_TO_RAD), (e.skewY = r / t.DEG_TO_RAD)),
              e
            );
          }),
          (n.copy = function (e) {
            return this.setValues(e.a, e.b, e.c, e.d, e.tx, e.ty);
          }),
          (n.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.tx, this.ty);
          }),
          (n.toString = function () {
            return (
              "[Matrix2D (a=" +
              this.a +
              " b=" +
              this.b +
              " c=" +
              this.c +
              " d=" +
              this.d +
              " tx=" +
              this.tx +
              " ty=" +
              this.ty +
              ")]"
            );
          }),
          (t.identity = new t()),
          (e.Matrix2D = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r, o) {
          this.setValues(e, t, n, r, o);
        }
        var n = t.prototype;
        ((n.setValues = function (t, n, r, o, a) {
          return (
            (this.visible = t == null ? !0 : !!t),
            (this.alpha = n == null ? 1 : n),
            (this.shadow = r),
            (this.compositeOperation = o),
            (this.matrix =
              a || (this.matrix && this.matrix.identity()) || new e.Matrix2D()),
            this
          );
        }),
          (n.append = function (e, t, n, r, o) {
            return (
              (this.alpha *= t),
              (this.shadow = n || this.shadow),
              (this.compositeOperation = r || this.compositeOperation),
              (this.visible = this.visible && e),
              o && this.matrix.appendMatrix(o),
              this
            );
          }),
          (n.prepend = function (e, t, n, r, o) {
            return (
              (this.alpha *= t),
              (this.shadow = this.shadow || n),
              (this.compositeOperation = this.compositeOperation || r),
              (this.visible = this.visible && e),
              o && this.matrix.prependMatrix(o),
              this
            );
          }),
          (n.identity = function () {
            return (
              (this.visible = !0),
              (this.alpha = 1),
              (this.shadow = this.compositeOperation = null),
              this.matrix.identity(),
              this
            );
          }),
          (n.clone = function () {
            return new t(
              this.alpha,
              this.shadow,
              this.compositeOperation,
              this.visible,
              this.matrix.clone(),
            );
          }),
          (e.DisplayProps = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t) {
          this.setValues(e, t);
        }
        var n = t.prototype;
        ((n.setValues = function (e, t) {
          return ((this.x = e || 0), (this.y = t || 0), this);
        }),
          (n.copy = function (e) {
            return ((this.x = e.x), (this.y = e.y), this);
          }),
          (n.clone = function () {
            return new t(this.x, this.y);
          }),
          (n.toString = function () {
            return "[Point (x=" + this.x + " y=" + this.y + ")]";
          }),
          (e.Point = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r) {
          this.setValues(e, t, n, r);
        }
        var n = t.prototype;
        ((n.setValues = function (e, t, n, r) {
          return (
            (this.x = e || 0),
            (this.y = t || 0),
            (this.width = n || 0),
            (this.height = r || 0),
            this
          );
        }),
          (n.extend = function (e, t, n, r) {
            return (
              (n = n || 0),
              (r = r || 0),
              e + n > this.x + this.width && (this.width = e + n - this.x),
              t + r > this.y + this.height && (this.height = t + r - this.y),
              e < this.x && ((this.width += this.x - e), (this.x = e)),
              t < this.y && ((this.height += this.y - t), (this.y = t)),
              this
            );
          }),
          (n.pad = function (e, t, n, r) {
            return (
              (this.x -= t),
              (this.y -= e),
              (this.width += t + r),
              (this.height += e + n),
              this
            );
          }),
          (n.copy = function (e) {
            return this.setValues(e.x, e.y, e.width, e.height);
          }),
          (n.contains = function (e, t, n, r) {
            return (
              (n = n || 0),
              (r = r || 0),
              e >= this.x &&
                e + n <= this.x + this.width &&
                t >= this.y &&
                t + r <= this.y + this.height
            );
          }),
          (n.union = function (e) {
            return this.clone().extend(e.x, e.y, e.width, e.height);
          }),
          (n.intersection = function (e) {
            var n = e.x,
              r = e.y,
              o = n + e.width,
              a = r + e.height;
            return (
              this.x > n && (n = this.x),
              this.y > r && (r = this.y),
              this.x + this.width < o && (o = this.x + this.width),
              this.y + this.height < a && (a = this.y + this.height),
              n >= o || r >= a ? null : new t(n, r, o - n, a - r)
            );
          }),
          (n.intersects = function (e) {
            return (
              e.x <= this.x + this.width &&
              this.x <= e.x + e.width &&
              e.y <= this.y + this.height &&
              this.y <= e.y + e.height
            );
          }),
          (n.isEmpty = function () {
            return this.width <= 0 || this.height <= 0;
          }),
          (n.clone = function () {
            return new t(this.x, this.y, this.width, this.height);
          }),
          (n.toString = function () {
            return (
              "[Rectangle (x=" +
              this.x +
              " y=" +
              this.y +
              " width=" +
              this.width +
              " height=" +
              this.height +
              ")]"
            );
          }),
          (e.Rectangle = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r, o, a, i) {
          e.addEventListener &&
            ((this.target = e),
            (this.overLabel = n == null ? "over" : n),
            (this.outLabel = t == null ? "out" : t),
            (this.downLabel = r == null ? "down" : r),
            (this.play = o),
            (this._isPressed = !1),
            (this._isOver = !1),
            (this._enabled = !1),
            (e.mouseChildren = !1),
            (this.enabled = !0),
            this.handleEvent({}),
            a &&
              (i &&
                ((a.actionsEnabled = !1), a.gotoAndStop && a.gotoAndStop(i)),
              (e.hitArea = a)));
        }
        var n = t.prototype;
        ((n.setEnabled = function (e) {
          if (e != this._enabled) {
            var t = this.target;
            ((this._enabled = e),
              e
                ? ((t.cursor = "pointer"),
                  t.addEventListener("rollover", this),
                  t.addEventListener("rollout", this),
                  t.addEventListener("mousedown", this),
                  t.addEventListener("pressup", this),
                  t._reset &&
                    ((t.__reset = t._reset), (t._reset = this._reset)))
                : ((t.cursor = null),
                  t.removeEventListener("rollover", this),
                  t.removeEventListener("rollout", this),
                  t.removeEventListener("mousedown", this),
                  t.removeEventListener("pressup", this),
                  t.__reset && ((t._reset = t.__reset), delete t.__reset)));
          }
        }),
          (n.getEnabled = function () {
            return this._enabled;
          }));
        try {
          Object.defineProperties(n, {
            enabled: { get: n.getEnabled, set: n.setEnabled },
          });
        } catch (e) {}
        ((n.toString = function () {
          return "[ButtonHelper]";
        }),
          (n.handleEvent = function (e) {
            var t,
              n = this.target,
              r = e.type;
            (r == "mousedown"
              ? ((this._isPressed = !0), (t = this.downLabel))
              : r == "pressup"
                ? ((this._isPressed = !1),
                  (t = this._isOver ? this.overLabel : this.outLabel))
                : r == "rollover"
                  ? ((this._isOver = !0),
                    (t = this._isPressed ? this.downLabel : this.overLabel))
                  : ((this._isOver = !1),
                    (t = this._isPressed ? this.overLabel : this.outLabel)),
              this.play
                ? n.gotoAndPlay && n.gotoAndPlay(t)
                : n.gotoAndStop && n.gotoAndStop(t));
          }),
          (n._reset = function () {
            var e = this.paused;
            (this.__reset(), (this.paused = e));
          }),
          (e.ButtonHelper = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r) {
          ((this.color = e || "black"),
            (this.offsetX = t || 0),
            (this.offsetY = n || 0),
            (this.blur = r || 0));
        }
        var n = t.prototype;
        ((t.identity = new t("transparent", 0, 0, 0)),
          (n.toString = function () {
            return "[Shadow]";
          }),
          (n.clone = function () {
            return new t(this.color, this.offsetX, this.offsetY, this.blur);
          }),
          (e.Shadow = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          (this.EventDispatcher_constructor(),
            (this.complete = !0),
            (this.framerate = 0),
            (this._animations = null),
            (this._frames = null),
            (this._images = null),
            (this._data = null),
            (this._loadCount = 0),
            (this._frameHeight = 0),
            (this._frameWidth = 0),
            (this._numFrames = 0),
            (this._regX = 0),
            (this._regY = 0),
            (this._spacing = 0),
            (this._margin = 0),
            this._parseData(e));
        }
        var n = e.extend(t, e.EventDispatcher);
        n.getAnimations = function () {
          return this._animations.slice();
        };
        try {
          Object.defineProperties(n, { animations: { get: n.getAnimations } });
        } catch (e) {}
        ((n.getNumFrames = function (e) {
          if (e == null)
            return this._frames ? this._frames.length : this._numFrames || 0;
          var t = this._data[e];
          return t == null ? 0 : t.frames.length;
        }),
          (n.getAnimation = function (e) {
            return this._data[e];
          }),
          (n.getFrame = function (e) {
            var t;
            return this._frames && (t = this._frames[e]) ? t : null;
          }),
          (n.getFrameBounds = function (t, n) {
            var r = this.getFrame(t);
            return r
              ? (n || new e.Rectangle()).setValues(
                  -r.regX,
                  -r.regY,
                  r.rect.width,
                  r.rect.height,
                )
              : null;
          }),
          (n.toString = function () {
            return "[SpriteSheet]";
          }),
          (n.clone = function () {
            throw "SpriteSheet cannot be cloned.";
          }),
          (n._parseData = function (t) {
            var n, r, o, a;
            if (t != null) {
              if (
                ((this.framerate = t.framerate || 0),
                t.images && (r = t.images.length) > 0)
              )
                for (a = this._images = [], n = 0; r > n; n++) {
                  var i = t.images[n];
                  if (typeof i == "string") {
                    var l = i;
                    ((i = document.createElement("img")), (i.src = l));
                  }
                  (a.push(i),
                    i.getContext ||
                      i.naturalWidth ||
                      (this._loadCount++,
                      (this.complete = !1),
                      (function (e, t) {
                        i.onload = function () {
                          e._handleImageLoad(t);
                        };
                      })(this, l),
                      (function (e, t) {
                        i.onerror = function () {
                          e._handleImageError(t);
                        };
                      })(this, l)));
                }
              if (t.frames != null)
                if (Array.isArray(t.frames))
                  for (
                    this._frames = [], a = t.frames, n = 0, r = a.length;
                    r > n;
                    n++
                  ) {
                    var s = a[n];
                    this._frames.push({
                      image: this._images[s[4] ? s[4] : 0],
                      rect: new e.Rectangle(s[0], s[1], s[2], s[3]),
                      regX: s[5] || 0,
                      regY: s[6] || 0,
                    });
                  }
                else
                  ((o = t.frames),
                    (this._frameWidth = o.width),
                    (this._frameHeight = o.height),
                    (this._regX = o.regX || 0),
                    (this._regY = o.regY || 0),
                    (this._spacing = o.spacing || 0),
                    (this._margin = o.margin || 0),
                    (this._numFrames = o.count),
                    this._loadCount == 0 && this._calculateFrames());
              if (((this._animations = []), (o = t.animations) != null)) {
                this._data = {};
                var u;
                for (u in o) {
                  var c = { name: u },
                    d = o[u];
                  if (typeof d == "number") a = c.frames = [d];
                  else if (Array.isArray(d))
                    if (d.length == 1) c.frames = [d[0]];
                    else
                      for (
                        c.speed = d[3],
                          c.next = d[2],
                          a = c.frames = [],
                          n = d[0];
                        n <= d[1];
                        n++
                      )
                        a.push(n);
                  else {
                    ((c.speed = d.speed), (c.next = d.next));
                    var m = d.frames;
                    a = c.frames = typeof m == "number" ? [m] : m.slice(0);
                  }
                  ((c.next === !0 || c.next === void 0) && (c.next = u),
                    (c.next === !1 || (a.length < 2 && c.next == u)) &&
                      (c.next = null),
                    c.speed || (c.speed = 1),
                    this._animations.push(u),
                    (this._data[u] = c));
                }
              }
            }
          }),
          (n._handleImageLoad = function () {
            --this._loadCount == 0 &&
              (this._calculateFrames(),
              (this.complete = !0),
              this.dispatchEvent("complete"));
          }),
          (n._handleImageError = function (t) {
            var n = new e.Event("error");
            ((n.src = t),
              this.dispatchEvent(n),
              --this._loadCount == 0 && this.dispatchEvent("complete"));
          }),
          (n._calculateFrames = function () {
            if (!this._frames && this._frameWidth != 0) {
              this._frames = [];
              var t = this._numFrames || 1e5,
                n = 0,
                r = this._frameWidth,
                o = this._frameHeight,
                a = this._spacing,
                i = this._margin;
              e: for (var l = 0, s = this._images; l < s.length; l++)
                for (
                  var u = s[l], c = u.width, d = u.height, m = i;
                  d - i - o >= m;
                ) {
                  for (var p = i; c - i - r >= p; ) {
                    if (n >= t) break e;
                    (n++,
                      this._frames.push({
                        image: u,
                        rect: new e.Rectangle(p, m, r, o),
                        regX: this._regX,
                        regY: this._regY,
                      }),
                      (p += r + a));
                  }
                  m += o + a;
                }
              this._numFrames = n;
            }
          }),
          (e.SpriteSheet = e.promote(t, "EventDispatcher")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          ((this.command = null),
            (this._stroke = null),
            (this._strokeStyle = null),
            (this._oldStrokeStyle = null),
            (this._strokeDash = null),
            (this._oldStrokeDash = null),
            (this._strokeIgnoreScale = !1),
            (this._fill = null),
            (this._instructions = []),
            (this._commitIndex = 0),
            (this._activeInstructions = []),
            (this._dirty = !1),
            (this._storeIndex = 0),
            this.clear());
        }
        var n = t.prototype,
          r = t;
        ((t.getRGB = function (e, t, n, r) {
          return (
            e != null &&
              n == null &&
              ((r = t),
              (n = 255 & e),
              (t = (e >> 8) & 255),
              (e = (e >> 16) & 255)),
            r == null
              ? "rgb(" + e + "," + t + "," + n + ")"
              : "rgba(" + e + "," + t + "," + n + "," + r + ")"
          );
        }),
          (t.getHSL = function (e, t, n, r) {
            return r == null
              ? "hsl(" + (e % 360) + "," + t + "%," + n + "%)"
              : "hsla(" + (e % 360) + "," + t + "%," + n + "%," + r + ")";
          }),
          (t.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63,
          }),
          (t.STROKE_CAPS_MAP = ["butt", "round", "square"]),
          (t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"]));
        var o = e.createCanvas
          ? e.createCanvas()
          : document.createElement("canvas");
        (o.getContext &&
          ((t._ctx = o.getContext("2d")), (o.width = o.height = 1)),
          (n.getInstructions = function () {
            return (this._updateInstructions(), this._instructions);
          }));
        try {
          Object.defineProperties(n, {
            instructions: { get: n.getInstructions },
          });
        } catch (e) {}
        ((n.isEmpty = function () {
          return !(
            this._instructions.length || this._activeInstructions.length
          );
        }),
          (n.draw = function (e, t) {
            this._updateInstructions();
            for (
              var n = this._instructions, r = this._storeIndex, o = n.length;
              o > r;
              r++
            )
              n[r].exec(e, t);
          }),
          (n.drawAsPath = function (e) {
            this._updateInstructions();
            for (
              var t, n = this._instructions, r = this._storeIndex, o = n.length;
              o > r;
              r++
            )
              (t = n[r]).path !== !1 && t.exec(e);
          }),
          (n.moveTo = function (e, t) {
            return this.append(new r.MoveTo(e, t), !0);
          }),
          (n.lineTo = function (e, t) {
            return this.append(new r.LineTo(e, t));
          }),
          (n.arcTo = function (e, t, n, o, a) {
            return this.append(new r.ArcTo(e, t, n, o, a));
          }),
          (n.arc = function (e, t, n, o, a, i) {
            return this.append(new r.Arc(e, t, n, o, a, i));
          }),
          (n.quadraticCurveTo = function (e, t, n, o) {
            return this.append(new r.QuadraticCurveTo(e, t, n, o));
          }),
          (n.bezierCurveTo = function (e, t, n, o, a, i) {
            return this.append(new r.BezierCurveTo(e, t, n, o, a, i));
          }),
          (n.rect = function (e, t, n, o) {
            return this.append(new r.Rect(e, t, n, o));
          }),
          (n.closePath = function () {
            return this._activeInstructions.length
              ? this.append(new r.ClosePath())
              : this;
          }),
          (n.clear = function () {
            return (
              (this._instructions.length =
                this._activeInstructions.length =
                this._commitIndex =
                  0),
              (this._strokeStyle =
                this._oldStrokeStyle =
                this._stroke =
                this._fill =
                this._strokeDash =
                this._oldStrokeDash =
                  null),
              (this._dirty = this._strokeIgnoreScale = !1),
              this
            );
          }),
          (n.beginFill = function (e) {
            return this._setFill(e ? new r.Fill(e) : null);
          }),
          (n.beginLinearGradientFill = function (e, t, n, o, a, i) {
            return this._setFill(new r.Fill().linearGradient(e, t, n, o, a, i));
          }),
          (n.beginRadialGradientFill = function (e, t, n, o, a, i, l, s) {
            return this._setFill(
              new r.Fill().radialGradient(e, t, n, o, a, i, l, s),
            );
          }),
          (n.beginBitmapFill = function (e, t, n) {
            return this._setFill(new r.Fill(null, n).bitmap(e, t));
          }),
          (n.endFill = function () {
            return this.beginFill();
          }),
          (n.setStrokeStyle = function (e, t, n, o, a) {
            return (
              this._updateInstructions(!0),
              (this._strokeStyle = this.command =
                new r.StrokeStyle(e, t, n, o, a)),
              this._stroke && (this._stroke.ignoreScale = a),
              (this._strokeIgnoreScale = a),
              this
            );
          }),
          (n.setStrokeDash = function (e, t) {
            return (
              this._updateInstructions(!0),
              (this._strokeDash = this.command = new r.StrokeDash(e, t)),
              this
            );
          }),
          (n.beginStroke = function (e) {
            return this._setStroke(e ? new r.Stroke(e) : null);
          }),
          (n.beginLinearGradientStroke = function (e, t, n, o, a, i) {
            return this._setStroke(
              new r.Stroke().linearGradient(e, t, n, o, a, i),
            );
          }),
          (n.beginRadialGradientStroke = function (e, t, n, o, a, i, l, s) {
            return this._setStroke(
              new r.Stroke().radialGradient(e, t, n, o, a, i, l, s),
            );
          }),
          (n.beginBitmapStroke = function (e, t) {
            return this._setStroke(new r.Stroke().bitmap(e, t));
          }),
          (n.endStroke = function () {
            return this.beginStroke();
          }),
          (n.curveTo = n.quadraticCurveTo),
          (n.drawRect = n.rect),
          (n.drawRoundRect = function (e, t, n, r, o) {
            return this.drawRoundRectComplex(e, t, n, r, o, o, o, o);
          }),
          (n.drawRoundRectComplex = function (e, t, n, o, a, i, l, s) {
            return this.append(new r.RoundRect(e, t, n, o, a, i, l, s));
          }),
          (n.drawCircle = function (e, t, n) {
            return this.append(new r.Circle(e, t, n));
          }),
          (n.drawEllipse = function (e, t, n, o) {
            return this.append(new r.Ellipse(e, t, n, o));
          }),
          (n.drawPolyStar = function (e, t, n, o, a, i) {
            return this.append(new r.PolyStar(e, t, n, o, a, i));
          }),
          (n.append = function (e, t) {
            return (
              this._activeInstructions.push(e),
              (this.command = e),
              t || (this._dirty = !0),
              this
            );
          }),
          (n.decodePath = function (e) {
            for (
              var n = [
                  this.moveTo,
                  this.lineTo,
                  this.quadraticCurveTo,
                  this.bezierCurveTo,
                  this.closePath,
                ],
                r = [2, 2, 4, 6, 0],
                o = 0,
                a = e.length,
                i = [],
                l = 0,
                s = 0,
                u = t.BASE_64;
              a > o;
            ) {
              var c = e.charAt(o),
                d = u[c],
                m = d >> 3,
                p = n[m];
              if (!p || 3 & d) throw "bad path data (@" + o + "): " + c;
              var _ = r[m];
              (m || (l = s = 0), (i.length = 0), o++);
              for (var f = ((d >> 2) & 1) + 2, g = 0; _ > g; g++) {
                var h = u[e.charAt(o)],
                  y = h >> 5 ? -1 : 1;
                ((h = ((31 & h) << 6) | u[e.charAt(o + 1)]),
                  f == 3 && (h = (h << 6) | u[e.charAt(o + 2)]),
                  (h = (y * h) / 10),
                  g % 2 ? (l = h += l) : (s = h += s),
                  (i[g] = h),
                  (o += f));
              }
              p.apply(this, i);
            }
            return this;
          }),
          (n.store = function () {
            return (
              this._updateInstructions(!0),
              (this._storeIndex = this._instructions.length),
              this
            );
          }),
          (n.unstore = function () {
            return ((this._storeIndex = 0), this);
          }),
          (n.clone = function () {
            var e = new t();
            return (
              (e.command = this.command),
              (e._stroke = this._stroke),
              (e._strokeStyle = this._strokeStyle),
              (e._strokeDash = this._strokeDash),
              (e._strokeIgnoreScale = this._strokeIgnoreScale),
              (e._fill = this._fill),
              (e._instructions = this._instructions.slice()),
              (e._commitIndex = this._commitIndex),
              (e._activeInstructions = this._activeInstructions.slice()),
              (e._dirty = this._dirty),
              (e._storeIndex = this._storeIndex),
              e
            );
          }),
          (n.toString = function () {
            return "[Graphics]";
          }),
          (n.mt = n.moveTo),
          (n.lt = n.lineTo),
          (n.at = n.arcTo),
          (n.bt = n.bezierCurveTo),
          (n.qt = n.quadraticCurveTo),
          (n.a = n.arc),
          (n.r = n.rect),
          (n.cp = n.closePath),
          (n.c = n.clear),
          (n.f = n.beginFill),
          (n.lf = n.beginLinearGradientFill),
          (n.rf = n.beginRadialGradientFill),
          (n.bf = n.beginBitmapFill),
          (n.ef = n.endFill),
          (n.ss = n.setStrokeStyle),
          (n.sd = n.setStrokeDash),
          (n.s = n.beginStroke),
          (n.ls = n.beginLinearGradientStroke),
          (n.rs = n.beginRadialGradientStroke),
          (n.bs = n.beginBitmapStroke),
          (n.es = n.endStroke),
          (n.dr = n.drawRect),
          (n.rr = n.drawRoundRect),
          (n.rc = n.drawRoundRectComplex),
          (n.dc = n.drawCircle),
          (n.de = n.drawEllipse),
          (n.dp = n.drawPolyStar),
          (n.p = n.decodePath),
          (n._updateInstructions = function (e) {
            var n = this._instructions,
              r = this._activeInstructions,
              o = this._commitIndex;
            if (this._dirty && r.length) {
              ((n.length = o), n.push(t.beginCmd));
              var a = r.length,
                i = n.length;
              n.length = i + a;
              for (var l = 0; a > l; l++) n[l + i] = r[l];
              (this._fill && n.push(this._fill),
                this._stroke &&
                  (this._strokeDash !== this._oldStrokeDash &&
                    ((this._oldStrokeDash = this._strokeDash),
                    n.push(this._strokeDash)),
                  this._strokeStyle !== this._oldStrokeStyle &&
                    ((this._oldStrokeStyle = this._strokeStyle),
                    n.push(this._strokeStyle)),
                  n.push(this._stroke)),
                (this._dirty = !1));
            }
            e && ((r.length = 0), (this._commitIndex = n.length));
          }),
          (n._setFill = function (e) {
            return (
              this._updateInstructions(!0),
              (this.command = this._fill = e),
              this
            );
          }),
          (n._setStroke = function (e) {
            return (
              this._updateInstructions(!0),
              (this.command = this._stroke = e) &&
                (e.ignoreScale = this._strokeIgnoreScale),
              this
            );
          }),
          ((r.LineTo = function (e, t) {
            ((this.x = e), (this.y = t));
          }).prototype.exec = function (e) {
            e.lineTo(this.x, this.y);
          }),
          ((r.MoveTo = function (e, t) {
            ((this.x = e), (this.y = t));
          }).prototype.exec = function (e) {
            e.moveTo(this.x, this.y);
          }),
          ((r.ArcTo = function (e, t, n, r, o) {
            ((this.x1 = e),
              (this.y1 = t),
              (this.x2 = n),
              (this.y2 = r),
              (this.radius = o));
          }).prototype.exec = function (e) {
            e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
          }),
          ((r.Arc = function (e, t, n, r, o, a) {
            ((this.x = e),
              (this.y = t),
              (this.radius = n),
              (this.startAngle = r),
              (this.endAngle = o),
              (this.anticlockwise = !!a));
          }).prototype.exec = function (e) {
            e.arc(
              this.x,
              this.y,
              this.radius,
              this.startAngle,
              this.endAngle,
              this.anticlockwise,
            );
          }),
          ((r.QuadraticCurveTo = function (e, t, n, r) {
            ((this.cpx = e), (this.cpy = t), (this.x = n), (this.y = r));
          }).prototype.exec = function (e) {
            e.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
          }),
          ((r.BezierCurveTo = function (e, t, n, r, o, a) {
            ((this.cp1x = e),
              (this.cp1y = t),
              (this.cp2x = n),
              (this.cp2y = r),
              (this.x = o),
              (this.y = a));
          }).prototype.exec = function (e) {
            e.bezierCurveTo(
              this.cp1x,
              this.cp1y,
              this.cp2x,
              this.cp2y,
              this.x,
              this.y,
            );
          }),
          ((r.Rect = function (e, t, n, r) {
            ((this.x = e), (this.y = t), (this.w = n), (this.h = r));
          }).prototype.exec = function (e) {
            e.rect(this.x, this.y, this.w, this.h);
          }),
          ((r.ClosePath = function () {}).prototype.exec = function (e) {
            e.closePath();
          }),
          ((r.BeginPath = function () {}).prototype.exec = function (e) {
            e.beginPath();
          }),
          (n = (r.Fill = function (e, t) {
            ((this.style = e), (this.matrix = t));
          }).prototype),
          (n.exec = function (e) {
            if (this.style) {
              e.fillStyle = this.style;
              var t = this.matrix;
              (t && (e.save(), e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)),
                e.fill(),
                t && e.restore());
            }
          }),
          (n.linearGradient = function (e, n, r, o, a, i) {
            for (
              var l = (this.style = t._ctx.createLinearGradient(r, o, a, i)),
                s = 0,
                u = e.length;
              u > s;
              s++
            )
              l.addColorStop(n[s], e[s]);
            return (
              (l.props = {
                colors: e,
                ratios: n,
                x0: r,
                y0: o,
                x1: a,
                y1: i,
                type: "linear",
              }),
              this
            );
          }),
          (n.radialGradient = function (e, n, r, o, a, i, l, s) {
            for (
              var u = (this.style = t._ctx.createRadialGradient(
                  r,
                  o,
                  a,
                  i,
                  l,
                  s,
                )),
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              u.addColorStop(n[c], e[c]);
            return (
              (u.props = {
                colors: e,
                ratios: n,
                x0: r,
                y0: o,
                r0: a,
                x1: i,
                y1: l,
                r1: s,
                type: "radial",
              }),
              this
            );
          }),
          (n.bitmap = function (e, n) {
            if (e.naturalWidth || e.getContext || e.readyState >= 2) {
              var r = (this.style = t._ctx.createPattern(e, n || ""));
              r.props = { image: e, repetition: n, type: "bitmap" };
            }
            return this;
          }),
          (n.path = !1),
          (n = (r.Stroke = function (e, t) {
            ((this.style = e), (this.ignoreScale = t));
          }).prototype),
          (n.exec = function (e) {
            this.style &&
              ((e.strokeStyle = this.style),
              this.ignoreScale && (e.save(), e.setTransform(1, 0, 0, 1, 0, 0)),
              e.stroke(),
              this.ignoreScale && e.restore());
          }),
          (n.linearGradient = r.Fill.prototype.linearGradient),
          (n.radialGradient = r.Fill.prototype.radialGradient),
          (n.bitmap = r.Fill.prototype.bitmap),
          (n.path = !1),
          (n = (r.StrokeStyle = function (e, t, n, r, o) {
            ((this.width = e),
              (this.caps = t),
              (this.joints = n),
              (this.miterLimit = r),
              (this.ignoreScale = o));
          }).prototype),
          (n.exec = function (e) {
            ((e.lineWidth = this.width == null ? "1" : this.width),
              (e.lineCap =
                this.caps == null
                  ? "butt"
                  : isNaN(this.caps)
                    ? this.caps
                    : t.STROKE_CAPS_MAP[this.caps]),
              (e.lineJoin =
                this.joints == null
                  ? "miter"
                  : isNaN(this.joints)
                    ? this.joints
                    : t.STROKE_JOINTS_MAP[this.joints]),
              (e.miterLimit = this.miterLimit == null ? "10" : this.miterLimit),
              (e.ignoreScale =
                this.ignoreScale == null ? !1 : this.ignoreScale));
          }),
          (n.path = !1),
          ((r.StrokeDash = function (e, t) {
            ((this.segments = e), (this.offset = t || 0));
          }).prototype.exec = function (e) {
            e.setLineDash &&
              (e.setLineDash(this.segments || r.StrokeDash.EMPTY_SEGMENTS),
              (e.lineDashOffset = this.offset || 0));
          }),
          (r.StrokeDash.EMPTY_SEGMENTS = []),
          ((r.RoundRect = function (e, t, n, r, o, a, i, l) {
            ((this.x = e),
              (this.y = t),
              (this.w = n),
              (this.h = r),
              (this.radiusTL = o),
              (this.radiusTR = a),
              (this.radiusBR = i),
              (this.radiusBL = l));
          }).prototype.exec = function (e) {
            var t = (u > s ? s : u) / 2,
              n = 0,
              r = 0,
              o = 0,
              a = 0,
              i = this.x,
              l = this.y,
              s = this.w,
              u = this.h,
              c = this.radiusTL,
              d = this.radiusTR,
              m = this.radiusBR,
              p = this.radiusBL;
            (0 > c && (c *= n = -1),
              c > t && (c = t),
              0 > d && (d *= r = -1),
              d > t && (d = t),
              0 > m && (m *= o = -1),
              m > t && (m = t),
              0 > p && (p *= a = -1),
              p > t && (p = t),
              e.moveTo(i + s - d, l),
              e.arcTo(i + s + d * r, l - d * r, i + s, l + d, d),
              e.lineTo(i + s, l + u - m),
              e.arcTo(i + s + m * o, l + u + m * o, i + s - m, l + u, m),
              e.lineTo(i + p, l + u),
              e.arcTo(i - p * a, l + u + p * a, i, l + u - p, p),
              e.lineTo(i, l + c),
              e.arcTo(i - c * n, l - c * n, i + c, l, c),
              e.closePath());
          }),
          ((r.Circle = function (e, t, n) {
            ((this.x = e), (this.y = t), (this.radius = n));
          }).prototype.exec = function (e) {
            e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          }),
          ((r.Ellipse = function (e, t, n, r) {
            ((this.x = e), (this.y = t), (this.w = n), (this.h = r));
          }).prototype.exec = function (e) {
            var t = this.x,
              n = this.y,
              r = this.w,
              o = this.h,
              a = 0.5522848,
              i = (r / 2) * a,
              l = (o / 2) * a,
              s = t + r,
              u = n + o,
              c = t + r / 2,
              d = n + o / 2;
            (e.moveTo(t, d),
              e.bezierCurveTo(t, d - l, c - i, n, c, n),
              e.bezierCurveTo(c + i, n, s, d - l, s, d),
              e.bezierCurveTo(s, d + l, c + i, u, c, u),
              e.bezierCurveTo(c - i, u, t, d + l, t, d));
          }),
          ((r.PolyStar = function (e, t, n, r, o, a) {
            ((this.x = e),
              (this.y = t),
              (this.radius = n),
              (this.sides = r),
              (this.pointSize = o),
              (this.angle = a));
          }).prototype.exec = function (e) {
            var t = this.x,
              n = this.y,
              r = this.radius,
              o = ((this.angle || 0) / 180) * Math.PI,
              a = this.sides,
              i = 1 - (this.pointSize || 0),
              l = Math.PI / a;
            e.moveTo(t + Math.cos(o) * r, n + Math.sin(o) * r);
            for (var s = 0; a > s; s++)
              ((o += l),
                i != 1 &&
                  e.lineTo(t + Math.cos(o) * r * i, n + Math.sin(o) * r * i),
                (o += l),
                e.lineTo(t + Math.cos(o) * r, n + Math.sin(o) * r));
            e.closePath();
          }),
          (t.beginCmd = new r.BeginPath()),
          (e.Graphics = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          (this.EventDispatcher_constructor(),
            (this.alpha = 1),
            (this.cacheCanvas = null),
            (this.cacheID = 0),
            (this.id = e.UID.get()),
            (this.mouseEnabled = !0),
            (this.tickEnabled = !0),
            (this.name = null),
            (this.parent = null),
            (this.regX = 0),
            (this.regY = 0),
            (this.rotation = 0),
            (this.scaleX = 1),
            (this.scaleY = 1),
            (this.skewX = 0),
            (this.skewY = 0),
            (this.shadow = null),
            (this.visible = !0),
            (this.x = 0),
            (this.y = 0),
            (this.transformMatrix = null),
            (this.compositeOperation = null),
            (this.snapToPixel = !0),
            (this.filters = null),
            (this.mask = null),
            (this.hitArea = null),
            (this.cursor = null),
            (this._cacheOffsetX = 0),
            (this._cacheOffsetY = 0),
            (this._filterOffsetX = 0),
            (this._filterOffsetY = 0),
            (this._cacheScale = 1),
            (this._cacheDataURLID = 0),
            (this._cacheDataURL = null),
            (this._props = new e.DisplayProps()),
            (this._rectangle = new e.Rectangle()),
            (this._bounds = null));
        }
        var n = e.extend(t, e.EventDispatcher);
        ((t._MOUSE_EVENTS = [
          "click",
          "dblclick",
          "mousedown",
          "mouseout",
          "mouseover",
          "pressmove",
          "pressup",
          "rollout",
          "rollover",
        ]),
          (t.suppressCrossDomainErrors = !1),
          (t._snapToPixelEnabled = !1));
        var r = e.createCanvas
          ? e.createCanvas()
          : document.createElement("canvas");
        (r.getContext &&
          ((t._hitTestCanvas = r),
          (t._hitTestContext = r.getContext("2d")),
          (r.width = r.height = 1)),
          (t._nextCacheID = 1),
          (n.getStage = function () {
            for (var t = this, n = e.Stage; t.parent; ) t = t.parent;
            return t instanceof n ? t : null;
          }));
        try {
          Object.defineProperties(n, { stage: { get: n.getStage } });
        } catch (e) {}
        ((n.isVisible = function () {
          return !!(
            this.visible &&
            this.alpha > 0 &&
            this.scaleX != 0 &&
            this.scaleY != 0
          );
        }),
          (n.draw = function (e, t) {
            var n = this.cacheCanvas;
            if (t || !n) return !1;
            var r = this._cacheScale;
            return (
              e.drawImage(
                n,
                this._cacheOffsetX + this._filterOffsetX,
                this._cacheOffsetY + this._filterOffsetY,
                n.width / r,
                n.height / r,
              ),
              !0
            );
          }),
          (n.updateContext = function (e) {
            var n = this,
              r = n.mask,
              o = n._props.matrix;
            (r &&
              r.graphics &&
              !r.graphics.isEmpty() &&
              (r.getMatrix(o),
              e.transform(o.a, o.b, o.c, o.d, o.tx, o.ty),
              r.graphics.drawAsPath(e),
              e.clip(),
              o.invert(),
              e.transform(o.a, o.b, o.c, o.d, o.tx, o.ty)),
              this.getMatrix(o));
            var a = o.tx,
              i = o.ty;
            (t._snapToPixelEnabled &&
              n.snapToPixel &&
              ((a = (a + (0 > a ? -0.5 : 0.5)) | 0),
              (i = (i + (0 > i ? -0.5 : 0.5)) | 0)),
              e.transform(o.a, o.b, o.c, o.d, a, i),
              (e.globalAlpha *= n.alpha),
              n.compositeOperation &&
                (e.globalCompositeOperation = n.compositeOperation),
              n.shadow && this._applyShadow(e, n.shadow));
          }),
          (n.cache = function (t, n, r, o, a) {
            ((a = a || 1),
              this.cacheCanvas ||
                (this.cacheCanvas = e.createCanvas
                  ? e.createCanvas()
                  : document.createElement("canvas")),
              (this._cacheWidth = r),
              (this._cacheHeight = o),
              (this._cacheOffsetX = t),
              (this._cacheOffsetY = n),
              (this._cacheScale = a),
              this.updateCache());
          }),
          (n.updateCache = function (e) {
            var n = this.cacheCanvas;
            if (!n) throw "cache() must be called before updateCache()";
            var r = this._cacheScale,
              o = this._cacheOffsetX * r,
              a = this._cacheOffsetY * r,
              i = this._cacheWidth,
              l = this._cacheHeight,
              s = n.getContext("2d"),
              u = this._getFilterBounds();
            ((o += this._filterOffsetX = u.x),
              (a += this._filterOffsetY = u.y),
              (i = Math.ceil(i * r) + u.width),
              (l = Math.ceil(l * r) + u.height),
              i != n.width || l != n.height
                ? ((n.width = i), (n.height = l))
                : e || s.clearRect(0, 0, i + 1, l + 1),
              s.save(),
              (s.globalCompositeOperation = e),
              s.setTransform(r, 0, 0, r, -o, -a),
              this.draw(s, !0),
              this._applyFilters(),
              s.restore(),
              (this.cacheID = t._nextCacheID++));
          }),
          (n.uncache = function () {
            ((this._cacheDataURL = this.cacheCanvas = null),
              (this.cacheID =
                this._cacheOffsetX =
                this._cacheOffsetY =
                this._filterOffsetX =
                this._filterOffsetY =
                  0),
              (this._cacheScale = 1));
          }),
          (n.getCacheDataURL = function () {
            return this.cacheCanvas
              ? (this.cacheID != this._cacheDataURLID &&
                  (this._cacheDataURL = this.cacheCanvas.toDataURL()),
                this._cacheDataURL)
              : null;
          }),
          (n.localToGlobal = function (t, n, r) {
            return this.getConcatenatedMatrix(
              this._props.matrix,
            ).transformPoint(t, n, r || new e.Point());
          }),
          (n.globalToLocal = function (t, n, r) {
            return this.getConcatenatedMatrix(this._props.matrix)
              .invert()
              .transformPoint(t, n, r || new e.Point());
          }),
          (n.localToLocal = function (e, t, n, r) {
            return (
              (r = this.localToGlobal(e, t, r)),
              n.globalToLocal(r.x, r.y, r)
            );
          }),
          (n.setTransform = function (e, t, n, r, o, a, i, l, s) {
            return (
              (this.x = e || 0),
              (this.y = t || 0),
              (this.scaleX = n == null ? 1 : n),
              (this.scaleY = r == null ? 1 : r),
              (this.rotation = o || 0),
              (this.skewX = a || 0),
              (this.skewY = i || 0),
              (this.regX = l || 0),
              (this.regY = s || 0),
              this
            );
          }),
          (n.getMatrix = function (t) {
            var n = this,
              r = (t && t.identity()) || new e.Matrix2D();
            return n.transformMatrix
              ? r.copy(n.transformMatrix)
              : r.appendTransform(
                  n.x,
                  n.y,
                  n.scaleX,
                  n.scaleY,
                  n.rotation,
                  n.skewX,
                  n.skewY,
                  n.regX,
                  n.regY,
                );
          }),
          (n.getConcatenatedMatrix = function (e) {
            for (var t = this, n = this.getMatrix(e); (t = t.parent); )
              n.prependMatrix(t.getMatrix(t._props.matrix));
            return n;
          }),
          (n.getConcatenatedDisplayProps = function (t) {
            t = t ? t.identity() : new e.DisplayProps();
            var n = this,
              r = n.getMatrix(t.matrix);
            do
              (t.prepend(n.visible, n.alpha, n.shadow, n.compositeOperation),
                n != this && r.prependMatrix(n.getMatrix(n._props.matrix)));
            while ((n = n.parent));
            return t;
          }),
          (n.hitTest = function (e, n) {
            var r = t._hitTestContext;
            (r.setTransform(1, 0, 0, 1, -e, -n), this.draw(r));
            var o = this._testHit(r);
            return (
              r.setTransform(1, 0, 0, 1, 0, 0),
              r.clearRect(0, 0, 2, 2),
              o
            );
          }),
          (n.set = function (e) {
            for (var t in e) this[t] = e[t];
            return this;
          }),
          (n.getBounds = function () {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var e = this.cacheCanvas;
            if (e) {
              var t = this._cacheScale;
              return this._rectangle.setValues(
                this._cacheOffsetX,
                this._cacheOffsetY,
                e.width / t,
                e.height / t,
              );
            }
            return null;
          }),
          (n.getTransformedBounds = function () {
            return this._getBounds();
          }),
          (n.setBounds = function (t, n, r, o) {
            (t == null && (this._bounds = t),
              (this._bounds = (this._bounds || new e.Rectangle()).setValues(
                t,
                n,
                r,
                o,
              )));
          }),
          (n.clone = function () {
            return this._cloneProps(new t());
          }),
          (n.toString = function () {
            return "[DisplayObject (name=" + this.name + ")]";
          }),
          (n._cloneProps = function (e) {
            return (
              (e.alpha = this.alpha),
              (e.mouseEnabled = this.mouseEnabled),
              (e.tickEnabled = this.tickEnabled),
              (e.name = this.name),
              (e.regX = this.regX),
              (e.regY = this.regY),
              (e.rotation = this.rotation),
              (e.scaleX = this.scaleX),
              (e.scaleY = this.scaleY),
              (e.shadow = this.shadow),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              (e.visible = this.visible),
              (e.x = this.x),
              (e.y = this.y),
              (e.compositeOperation = this.compositeOperation),
              (e.snapToPixel = this.snapToPixel),
              (e.filters = this.filters == null ? null : this.filters.slice(0)),
              (e.mask = this.mask),
              (e.hitArea = this.hitArea),
              (e.cursor = this.cursor),
              (e._bounds = this._bounds),
              e
            );
          }),
          (n._applyShadow = function (e, t) {
            ((t = t || Shadow.identity),
              (e.shadowColor = t.color),
              (e.shadowOffsetX = t.offsetX),
              (e.shadowOffsetY = t.offsetY),
              (e.shadowBlur = t.blur));
          }),
          (n._tick = function (e) {
            var t = this._listeners;
            t &&
              t.tick &&
              ((e.target = null),
              (e.propagationStopped = e.immediatePropagationStopped = !1),
              this.dispatchEvent(e));
          }),
          (n._testHit = function (e) {
            try {
              var n = e.getImageData(0, 0, 1, 1).data[3] > 1;
            } catch (e) {
              if (!t.suppressCrossDomainErrors)
                throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
            }
            return n;
          }),
          (n._applyFilters = function () {
            if (this.filters && this.filters.length != 0 && this.cacheCanvas)
              for (
                var e = this.filters.length,
                  t = this.cacheCanvas.getContext("2d"),
                  n = this.cacheCanvas.width,
                  r = this.cacheCanvas.height,
                  o = 0;
                e > o;
                o++
              )
                this.filters[o].applyFilter(t, 0, 0, n, r);
          }),
          (n._getFilterBounds = function () {
            var e,
              t = this.filters,
              n = this._rectangle.setValues(0, 0, 0, 0);
            if (!t || !(e = t.length)) return n;
            for (var r = 0; e > r; r++) {
              var o = this.filters[r];
              o.getBounds && o.getBounds(n);
            }
            return n;
          }),
          (n._getBounds = function (e, t) {
            return this._transformBounds(this.getBounds(), e, t);
          }),
          (n._transformBounds = function (e, t, n) {
            if (!e) return e;
            var r = e.x,
              o = e.y,
              a = e.width,
              i = e.height,
              l = this._props.matrix;
            ((l = n ? l.identity() : this.getMatrix(l)),
              (r || o) && l.appendTransform(0, 0, 1, 1, 0, 0, 0, -r, -o),
              t && l.prependMatrix(t));
            var s = a * l.a,
              u = a * l.b,
              c = i * l.c,
              d = i * l.d,
              m = l.tx,
              p = l.ty,
              _ = m,
              f = m,
              g = p,
              h = p;
            return (
              (r = s + m) < _ ? (_ = r) : r > f && (f = r),
              (r = s + c + m) < _ ? (_ = r) : r > f && (f = r),
              (r = c + m) < _ ? (_ = r) : r > f && (f = r),
              (o = u + p) < g ? (g = o) : o > h && (h = o),
              (o = u + d + p) < g ? (g = o) : o > h && (h = o),
              (o = d + p) < g ? (g = o) : o > h && (h = o),
              e.setValues(_, g, f - _, h - g)
            );
          }),
          (n._hasMouseEventListener = function () {
            for (var e = t._MOUSE_EVENTS, n = 0, r = e.length; r > n; n++)
              if (this.hasEventListener(e[n])) return !0;
            return !!this.cursor;
          }),
          (e.DisplayObject = e.promote(t, "EventDispatcher")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          (this.DisplayObject_constructor(),
            (this.children = []),
            (this.mouseChildren = !0),
            (this.tickChildren = !0));
        }
        var n = e.extend(t, e.DisplayObject);
        n.getNumChildren = function () {
          return this.children.length;
        };
        try {
          Object.defineProperties(n, {
            numChildren: { get: n.getNumChildren },
          });
        } catch (e) {}
        ((n.initialize = t),
          (n.isVisible = function () {
            var e = this.cacheCanvas || this.children.length;
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX != 0 &&
              this.scaleY != 0 &&
              e
            );
          }),
          (n.draw = function (e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            for (
              var n = this.children.slice(), r = 0, o = n.length;
              o > r;
              r++
            ) {
              var a = n[r];
              a.isVisible() &&
                (e.save(), a.updateContext(e), a.draw(e), e.restore());
            }
            return !0;
          }),
          (n.addChild = function (e) {
            if (e == null) return e;
            var t = arguments.length;
            if (t > 1) {
              for (var n = 0; t > n; n++) this.addChild(arguments[n]);
              return arguments[t - 1];
            }
            return (
              e.parent && e.parent.removeChild(e),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent("added"),
              e
            );
          }),
          (n.addChildAt = function (e, t) {
            var n = arguments.length,
              r = arguments[n - 1];
            if (0 > r || r > this.children.length) return arguments[n - 2];
            if (n > 2) {
              for (var o = 0; n - 1 > o; o++)
                this.addChildAt(arguments[o], r + o);
              return arguments[n - 2];
            }
            return (
              e.parent && e.parent.removeChild(e),
              (e.parent = this),
              this.children.splice(t, 0, e),
              e.dispatchEvent("added"),
              e
            );
          }),
          (n.removeChild = function (t) {
            var n = arguments.length;
            if (n > 1) {
              for (var r = !0, o = 0; n > o; o++)
                r = r && this.removeChild(arguments[o]);
              return r;
            }
            return this.removeChildAt(e.indexOf(this.children, t));
          }),
          (n.removeChildAt = function (e) {
            var t = arguments.length;
            if (t > 1) {
              for (var n = [], r = 0; t > r; r++) n[r] = arguments[r];
              n.sort(function (e, t) {
                return t - e;
              });
              for (var o = !0, r = 0; t > r; r++)
                o = o && this.removeChildAt(n[r]);
              return o;
            }
            if (0 > e || e > this.children.length - 1) return !1;
            var a = this.children[e];
            return (
              a && (a.parent = null),
              this.children.splice(e, 1),
              a.dispatchEvent("removed"),
              !0
            );
          }),
          (n.removeAllChildren = function () {
            for (var e = this.children; e.length; ) this.removeChildAt(0);
          }),
          (n.getChildAt = function (e) {
            return this.children[e];
          }),
          (n.getChildByName = function (e) {
            for (var t = this.children, n = 0, r = t.length; r > n; n++)
              if (t[n].name == e) return t[n];
            return null;
          }),
          (n.sortChildren = function (e) {
            this.children.sort(e);
          }),
          (n.getChildIndex = function (t) {
            return e.indexOf(this.children, t);
          }),
          (n.swapChildrenAt = function (e, t) {
            var n = this.children,
              r = n[e],
              o = n[t];
            r && o && ((n[e] = o), (n[t] = r));
          }),
          (n.swapChildren = function (e, t) {
            for (
              var n, r, o = this.children, a = 0, i = o.length;
              i > a &&
              (o[a] == e && (n = a),
              o[a] == t && (r = a),
              n == null || r == null);
              a++
            );
            a != i && ((o[n] = t), (o[r] = e));
          }),
          (n.setChildIndex = function (e, t) {
            var n = this.children,
              r = n.length;
            if (!(e.parent != this || 0 > t || t >= r)) {
              for (var o = 0; r > o && n[o] != e; o++);
              o != r && o != t && (n.splice(o, 1), n.splice(t, 0, e));
            }
          }),
          (n.contains = function (e) {
            for (; e; ) {
              if (e == this) return !0;
              e = e.parent;
            }
            return !1;
          }),
          (n.hitTest = function (e, t) {
            return this.getObjectUnderPoint(e, t) != null;
          }),
          (n.getObjectsUnderPoint = function (e, t, n) {
            var r = [],
              o = this.localToGlobal(e, t);
            return (this._getObjectsUnderPoint(o.x, o.y, r, n > 0, n == 1), r);
          }),
          (n.getObjectUnderPoint = function (e, t, n) {
            var r = this.localToGlobal(e, t);
            return this._getObjectsUnderPoint(r.x, r.y, null, n > 0, n == 1);
          }),
          (n.getBounds = function () {
            return this._getBounds(null, !0);
          }),
          (n.getTransformedBounds = function () {
            return this._getBounds();
          }),
          (n.clone = function (e) {
            var n = this._cloneProps(new t());
            return (e && this._cloneChildren(n), n);
          }),
          (n.toString = function () {
            return "[Container (name=" + this.name + ")]";
          }),
          (n._tick = function (e) {
            if (this.tickChildren)
              for (var t = this.children.length - 1; t >= 0; t--) {
                var n = this.children[t];
                n.tickEnabled && n._tick && n._tick(e);
              }
            this.DisplayObject__tick(e);
          }),
          (n._cloneChildren = function (e) {
            e.children.length && e.removeAllChildren();
            for (
              var t = e.children, n = 0, r = this.children.length;
              r > n;
              n++
            ) {
              var o = this.children[n].clone(!0);
              ((o.parent = e), t.push(o));
            }
          }),
          (n._getObjectsUnderPoint = function (n, r, o, a, i, l) {
            if (((l = l || 0), !l && !this._testMask(this, n, r))) return null;
            var s,
              u = e.DisplayObject._hitTestContext;
            i = i || (a && this._hasMouseEventListener());
            for (var c = this.children, d = c.length, m = d - 1; m >= 0; m--) {
              var p = c[m],
                _ = p.hitArea;
              if (
                p.visible &&
                (_ || p.isVisible()) &&
                (!a || p.mouseEnabled) &&
                (_ || this._testMask(p, n, r))
              )
                if (!_ && p instanceof t) {
                  var f = p._getObjectsUnderPoint(n, r, o, a, i, l + 1);
                  if (!o && f) return a && !this.mouseChildren ? this : f;
                } else {
                  if (a && !i && !p._hasMouseEventListener()) continue;
                  var g = p.getConcatenatedDisplayProps(p._props);
                  if (
                    ((s = g.matrix),
                    _ &&
                      (s.appendMatrix(_.getMatrix(_._props.matrix)),
                      (g.alpha = _.alpha)),
                    (u.globalAlpha = g.alpha),
                    u.setTransform(s.a, s.b, s.c, s.d, s.tx - n, s.ty - r),
                    (_ || p).draw(u),
                    !this._testHit(u))
                  )
                    continue;
                  if (
                    (u.setTransform(1, 0, 0, 1, 0, 0),
                    u.clearRect(0, 0, 2, 2),
                    !o)
                  )
                    return a && !this.mouseChildren ? this : p;
                  o.push(p);
                }
            }
            return null;
          }),
          (n._testMask = function (t, n, r) {
            var o = t.mask;
            if (!o || !o.graphics || o.graphics.isEmpty()) return !0;
            var a = this._props.matrix,
              i = t.parent;
            ((a = i ? i.getConcatenatedMatrix(a) : a.identity()),
              (a = o.getMatrix(o._props.matrix).prependMatrix(a)));
            var l = e.DisplayObject._hitTestContext;
            return (
              l.setTransform(a.a, a.b, a.c, a.d, a.tx - n, a.ty - r),
              o.graphics.drawAsPath(l),
              (l.fillStyle = "#000"),
              l.fill(),
              this._testHit(l)
                ? (l.setTransform(1, 0, 0, 1, 0, 0),
                  l.clearRect(0, 0, 2, 2),
                  !0)
                : !1
            );
          }),
          (n._getBounds = function (e, t) {
            var n = this.DisplayObject_getBounds();
            if (n) return this._transformBounds(n, e, t);
            var r = this._props.matrix;
            ((r = t ? r.identity() : this.getMatrix(r)),
              e && r.prependMatrix(e));
            for (var o = this.children.length, a = null, i = 0; o > i; i++) {
              var l = this.children[i];
              l.visible &&
                (n = l._getBounds(r)) &&
                (a ? a.extend(n.x, n.y, n.width, n.height) : (a = n.clone()));
            }
            return a;
          }),
          (e.Container = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          (this.Container_constructor(),
            (this.autoClear = !0),
            (this.canvas =
              typeof e == "string" ? document.getElementById(e) : e),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.drawRect = null),
            (this.snapToPixelEnabled = !1),
            (this.mouseInBounds = !1),
            (this.tickOnUpdate = !0),
            (this.mouseMoveOutside = !1),
            (this.preventSelection = !0),
            (this._pointerData = {}),
            (this._pointerCount = 0),
            (this._primaryPointerID = null),
            (this._mouseOverIntervalID = null),
            (this._nextStage = null),
            (this._prevStage = null),
            this.enableDOMEvents(!0));
        }
        var n = e.extend(t, e.Container);
        ((n._get_nextStage = function () {
          return this._nextStage;
        }),
          (n._set_nextStage = function (e) {
            (this._nextStage && (this._nextStage._prevStage = null),
              e && (e._prevStage = this),
              (this._nextStage = e));
          }));
        try {
          Object.defineProperties(n, {
            nextStage: { get: n._get_nextStage, set: n._set_nextStage },
          });
        } catch (e) {}
        ((n.update = function (t) {
          if (
            this.canvas &&
            (this.tickOnUpdate && this.tick(t),
            this.dispatchEvent("drawstart", !1, !0) !== !1)
          ) {
            e.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
            var n = this.drawRect,
              r = this.canvas.getContext("2d");
            (r.setTransform(1, 0, 0, 1, 0, 0),
              this.autoClear &&
                (n
                  ? r.clearRect(n.x, n.y, n.width, n.height)
                  : r.clearRect(
                      0,
                      0,
                      this.canvas.width + 1,
                      this.canvas.height + 1,
                    )),
              r.save(),
              this.drawRect &&
                (r.beginPath(), r.rect(n.x, n.y, n.width, n.height), r.clip()),
              this.updateContext(r),
              this.draw(r, !1),
              r.restore(),
              this.dispatchEvent("drawend"));
          }
        }),
          (n.tick = function (t) {
            if (
              this.tickEnabled &&
              this.dispatchEvent("tickstart", !1, !0) !== !1
            ) {
              var n = new e.Event("tick");
              if (t) for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
              (this._tick(n), this.dispatchEvent("tickend"));
            }
          }),
          (n.handleEvent = function (e) {
            e.type == "tick" && this.update(e);
          }),
          (n.clear = function () {
            if (this.canvas) {
              var e = this.canvas.getContext("2d");
              (e.setTransform(1, 0, 0, 1, 0, 0),
                e.clearRect(
                  0,
                  0,
                  this.canvas.width + 1,
                  this.canvas.height + 1,
                ));
            }
          }),
          (n.toDataURL = function (e, t) {
            var n,
              r = this.canvas.getContext("2d"),
              o = this.canvas.width,
              a = this.canvas.height;
            if (e) {
              n = r.getImageData(0, 0, o, a);
              var i = r.globalCompositeOperation;
              ((r.globalCompositeOperation = "destination-over"),
                (r.fillStyle = e),
                r.fillRect(0, 0, o, a));
            }
            var l = this.canvas.toDataURL(t || "image/png");
            return (
              e && (r.putImageData(n, 0, 0), (r.globalCompositeOperation = i)),
              l
            );
          }),
          (n.enableMouseOver = function (e) {
            if (
              (this._mouseOverIntervalID &&
                (clearInterval(this._mouseOverIntervalID),
                (this._mouseOverIntervalID = null),
                e == 0 && this._testMouseOver(!0)),
              e == null)
            )
              e = 20;
            else if (0 >= e) return;
            var t = this;
            this._mouseOverIntervalID = setInterval(
              function () {
                t._testMouseOver();
              },
              1e3 / Math.min(50, e),
            );
          }),
          (n.enableDOMEvents = function (e) {
            e == null && (e = !0);
            var t,
              n,
              r = this._eventListeners;
            if (!e && r) {
              for (t in r) ((n = r[t]), n.t.removeEventListener(t, n.f, !1));
              this._eventListeners = null;
            } else if (e && !r && this.canvas) {
              var o = window.addEventListener ? window : document,
                a = this;
              ((r = this._eventListeners = {}),
                (r.mouseup = {
                  t: o,
                  f: function (e) {
                    a._handleMouseUp(e);
                  },
                }),
                (r.mousemove = {
                  t: o,
                  f: function (e) {
                    a._handleMouseMove(e);
                  },
                }),
                (r.dblclick = {
                  t: this.canvas,
                  f: function (e) {
                    a._handleDoubleClick(e);
                  },
                }),
                (r.mousedown = {
                  t: this.canvas,
                  f: function (e) {
                    a._handleMouseDown(e);
                  },
                }));
              for (t in r) ((n = r[t]), n.t.addEventListener(t, n.f, !1));
            }
          }),
          (n.clone = function () {
            throw "Stage cannot be cloned.";
          }),
          (n.toString = function () {
            return "[Stage (name=" + this.name + ")]";
          }),
          (n._getElementRect = function (e) {
            var t;
            try {
              t = e.getBoundingClientRect();
            } catch (n) {
              t = {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight,
              };
            }
            var n =
                (window.pageXOffset || document.scrollLeft || 0) -
                (document.clientLeft || document.body.clientLeft || 0),
              r =
                (window.pageYOffset || document.scrollTop || 0) -
                (document.clientTop || document.body.clientTop || 0),
              o = window.getComputedStyle
                ? getComputedStyle(e, null)
                : e.currentStyle,
              a = parseInt(o.paddingLeft) + parseInt(o.borderLeftWidth),
              i = parseInt(o.paddingTop) + parseInt(o.borderTopWidth),
              l = parseInt(o.paddingRight) + parseInt(o.borderRightWidth),
              s = parseInt(o.paddingBottom) + parseInt(o.borderBottomWidth);
            return {
              left: t.left + n + a,
              right: t.right + n - l,
              top: t.top + r + i,
              bottom: t.bottom + r - s,
            };
          }),
          (n._getPointerData = function (e) {
            var t = this._pointerData[e];
            return (t || (t = this._pointerData[e] = { x: 0, y: 0 }), t);
          }),
          (n._handleMouseMove = function (e) {
            (e || (e = window.event),
              this._handlePointerMove(-1, e, e.pageX, e.pageY));
          }),
          (n._handlePointerMove = function (e, t, n, r, o) {
            if ((!this._prevStage || o !== void 0) && this.canvas) {
              var a = this._nextStage,
                i = this._getPointerData(e),
                l = i.inBounds;
              (this._updatePointerPosition(e, t, n, r),
                (l || i.inBounds || this.mouseMoveOutside) &&
                  (e === -1 &&
                    i.inBounds == !l &&
                    this._dispatchMouseEvent(
                      this,
                      l ? "mouseleave" : "mouseenter",
                      !1,
                      e,
                      i,
                      t,
                    ),
                  this._dispatchMouseEvent(this, "stagemousemove", !1, e, i, t),
                  this._dispatchMouseEvent(i.target, "pressmove", !0, e, i, t)),
                a && a._handlePointerMove(e, t, n, r, null));
            }
          }),
          (n._updatePointerPosition = function (e, t, n, r) {
            var o = this._getElementRect(this.canvas);
            ((n -= o.left), (r -= o.top));
            var a = this.canvas.width,
              i = this.canvas.height;
            ((n /= (o.right - o.left) / a), (r /= (o.bottom - o.top) / i));
            var l = this._getPointerData(e);
            ((l.inBounds = n >= 0 && r >= 0 && a - 1 >= n && i - 1 >= r)
              ? ((l.x = n), (l.y = r))
              : this.mouseMoveOutside &&
                ((l.x = 0 > n ? 0 : n > a - 1 ? a - 1 : n),
                (l.y = 0 > r ? 0 : r > i - 1 ? i - 1 : r)),
              (l.posEvtObj = t),
              (l.rawX = n),
              (l.rawY = r),
              (e === this._primaryPointerID || e === -1) &&
                ((this.mouseX = l.x),
                (this.mouseY = l.y),
                (this.mouseInBounds = l.inBounds)));
          }),
          (n._handleMouseUp = function (e) {
            this._handlePointerUp(-1, e, !1);
          }),
          (n._handlePointerUp = function (e, t, n, r) {
            var o = this._nextStage,
              a = this._getPointerData(e);
            if (!this._prevStage || r !== void 0) {
              var i = null,
                l = a.target;
              (r ||
                (!l && !o) ||
                (i = this._getObjectsUnderPoint(a.x, a.y, null, !0)),
                a.down &&
                  (this._dispatchMouseEvent(
                    this,
                    "stagemouseup",
                    !1,
                    e,
                    a,
                    t,
                    i,
                  ),
                  (a.down = !1)),
                i == l && this._dispatchMouseEvent(l, "click", !0, e, a, t),
                this._dispatchMouseEvent(l, "pressup", !0, e, a, t),
                n
                  ? (e == this._primaryPointerID &&
                      (this._primaryPointerID = null),
                    delete this._pointerData[e])
                  : (a.target = null),
                o && o._handlePointerUp(e, t, n, r || (i && this)));
            }
          }),
          (n._handleMouseDown = function (e) {
            this._handlePointerDown(-1, e, e.pageX, e.pageY);
          }),
          (n._handlePointerDown = function (e, t, n, r, o) {
            (this.preventSelection && t.preventDefault(),
              (this._primaryPointerID == null || e === -1) &&
                (this._primaryPointerID = e),
              r != null && this._updatePointerPosition(e, t, n, r));
            var a = null,
              i = this._nextStage,
              l = this._getPointerData(e);
            (o ||
              (a = l.target = this._getObjectsUnderPoint(l.x, l.y, null, !0)),
              l.inBounds &&
                (this._dispatchMouseEvent(
                  this,
                  "stagemousedown",
                  !1,
                  e,
                  l,
                  t,
                  a,
                ),
                (l.down = !0)),
              this._dispatchMouseEvent(a, "mousedown", !0, e, l, t),
              i && i._handlePointerDown(e, t, n, r, o || (a && this)));
          }),
          (n._testMouseOver = function (e, t, n) {
            if (!this._prevStage || t !== void 0) {
              var r = this._nextStage;
              if (!this._mouseOverIntervalID)
                return void (r && r._testMouseOver(e, t, n));
              var o = this._getPointerData(-1);
              if (
                o &&
                (e ||
                  this.mouseX != this._mouseOverX ||
                  this.mouseY != this._mouseOverY ||
                  !this.mouseInBounds)
              ) {
                var a,
                  i,
                  l,
                  s = o.posEvtObj,
                  u = n || (s && s.target == this.canvas),
                  c = null,
                  d = -1,
                  m = "";
                !t &&
                  (e || (this.mouseInBounds && u)) &&
                  ((c = this._getObjectsUnderPoint(
                    this.mouseX,
                    this.mouseY,
                    null,
                    !0,
                  )),
                  (this._mouseOverX = this.mouseX),
                  (this._mouseOverY = this.mouseY));
                var p = this._mouseOverTarget || [],
                  _ = p[p.length - 1],
                  f = (this._mouseOverTarget = []);
                for (a = c; a; )
                  (f.unshift(a), m || (m = a.cursor), (a = a.parent));
                for (
                  this.canvas.style.cursor = m,
                    !t && n && (n.canvas.style.cursor = m),
                    i = 0,
                    l = f.length;
                  l > i && f[i] == p[i];
                  i++
                )
                  d = i;
                for (
                  _ != c &&
                    this._dispatchMouseEvent(_, "mouseout", !0, -1, o, s, c),
                    i = p.length - 1;
                  i > d;
                  i--
                )
                  this._dispatchMouseEvent(p[i], "rollout", !1, -1, o, s, c);
                for (i = f.length - 1; i > d; i--)
                  this._dispatchMouseEvent(f[i], "rollover", !1, -1, o, s, _);
                (_ != c &&
                  this._dispatchMouseEvent(c, "mouseover", !0, -1, o, s, _),
                  r && r._testMouseOver(e, t || (c && this), n || (u && this)));
              }
            }
          }),
          (n._handleDoubleClick = function (e, t) {
            var n = null,
              r = this._nextStage,
              o = this._getPointerData(-1);
            (t ||
              ((n = this._getObjectsUnderPoint(o.x, o.y, null, !0)),
              this._dispatchMouseEvent(n, "dblclick", !0, -1, o, e)),
              r && r._handleDoubleClick(e, t || (n && this)));
          }),
          (n._dispatchMouseEvent = function (t, n, r, o, a, i, l) {
            if (t && (r || t.hasEventListener(n))) {
              var s = new e.MouseEvent(
                n,
                r,
                !1,
                a.x,
                a.y,
                i,
                o,
                o === this._primaryPointerID || o === -1,
                a.rawX,
                a.rawY,
                l,
              );
              t.dispatchEvent(s);
            }
          }),
          (e.Stage = e.promote(t, "Container")));
      })(),
      (e = e || {}),
      (function () {
        function t(e) {
          (this.DisplayObject_constructor(),
            typeof e == "string"
              ? ((this.image = document.createElement("img")),
                (this.image.src = e))
              : (this.image = e),
            (this.sourceRect = null));
        }
        var n = e.extend(t, e.DisplayObject);
        ((n.initialize = t),
          (n.isVisible = function () {
            var e = this.image,
              t =
                this.cacheCanvas ||
                (e && (e.naturalWidth || e.getContext || e.readyState >= 2));
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX != 0 &&
              this.scaleY != 0 &&
              t
            );
          }),
          (n.draw = function (e, t) {
            if (this.DisplayObject_draw(e, t) || !this.image) return !0;
            var n = this.image,
              r = this.sourceRect;
            if (r) {
              var o = r.x,
                a = r.y,
                i = o + r.width,
                l = a + r.height,
                s = 0,
                u = 0,
                c = n.width,
                d = n.height;
              (0 > o && ((s -= o), (o = 0)),
                i > c && (i = c),
                0 > a && ((u -= a), (a = 0)),
                l > d && (l = d),
                e.drawImage(n, o, a, i - o, l - a, s, u, i - o, l - a));
            } else e.drawImage(n, 0, 0);
            return !0;
          }),
          (n.getBounds = function () {
            var e = this.DisplayObject_getBounds();
            if (e) return e;
            var t = this.image,
              n = this.sourceRect || t,
              r = t && (t.naturalWidth || t.getContext || t.readyState >= 2);
            return r
              ? this._rectangle.setValues(0, 0, n.width, n.height)
              : null;
          }),
          (n.clone = function () {
            var e = new t(this.image);
            return (
              this.sourceRect && (e.sourceRect = this.sourceRect.clone()),
              this._cloneProps(e),
              e
            );
          }),
          (n.toString = function () {
            return "[Bitmap (name=" + this.name + ")]";
          }),
          (e.Bitmap = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t) {
          (this.DisplayObject_constructor(),
            (this.currentFrame = 0),
            (this.currentAnimation = null),
            (this.paused = !0),
            (this.spriteSheet = e),
            (this.currentAnimationFrame = 0),
            (this.framerate = 0),
            (this._animation = null),
            (this._currentFrame = null),
            (this._skipAdvance = !1),
            t != null && this.gotoAndPlay(t));
        }
        var n = e.extend(t, e.DisplayObject);
        ((n.initialize = t),
          (n.isVisible = function () {
            var e = this.cacheCanvas || this.spriteSheet.complete;
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX != 0 &&
              this.scaleY != 0 &&
              e
            );
          }),
          (n.draw = function (e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            this._normalizeFrame();
            var n = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!n) return !1;
            var r = n.rect;
            return (
              r.width &&
                r.height &&
                e.drawImage(
                  n.image,
                  r.x,
                  r.y,
                  r.width,
                  r.height,
                  -n.regX,
                  -n.regY,
                  r.width,
                  r.height,
                ),
              !0
            );
          }),
          (n.play = function () {
            this.paused = !1;
          }),
          (n.stop = function () {
            this.paused = !0;
          }),
          (n.gotoAndPlay = function (e) {
            ((this.paused = !1), (this._skipAdvance = !0), this._goto(e));
          }),
          (n.gotoAndStop = function (e) {
            ((this.paused = !0), this._goto(e));
          }),
          (n.advance = function (e) {
            var t = this.framerate || this.spriteSheet.framerate,
              n = t && e != null ? e / (1e3 / t) : 1;
            this._normalizeFrame(n);
          }),
          (n.getBounds = function () {
            return (
              this.DisplayObject_getBounds() ||
              this.spriteSheet.getFrameBounds(
                this.currentFrame,
                this._rectangle,
              )
            );
          }),
          (n.clone = function () {
            return this._cloneProps(new t(this.spriteSheet));
          }),
          (n.toString = function () {
            return "[Sprite (name=" + this.name + ")]";
          }),
          (n._cloneProps = function (e) {
            return (
              this.DisplayObject__cloneProps(e),
              (e.currentFrame = this.currentFrame),
              (e.currentAnimation = this.currentAnimation),
              (e.paused = this.paused),
              (e.currentAnimationFrame = this.currentAnimationFrame),
              (e.framerate = this.framerate),
              (e._animation = this._animation),
              (e._currentFrame = this._currentFrame),
              (e._skipAdvance = this._skipAdvance),
              e
            );
          }),
          (n._tick = function (e) {
            (this.paused ||
              (this._skipAdvance || this.advance(e && e.delta),
              (this._skipAdvance = !1)),
              this.DisplayObject__tick(e));
          }),
          (n._normalizeFrame = function (e) {
            e = e || 0;
            var t,
              n = this._animation,
              r = this.paused,
              o = this._currentFrame;
            if (n) {
              var a = n.speed || 1,
                i = this.currentAnimationFrame;
              if (((t = n.frames.length), i + e * a >= t)) {
                var l = n.next;
                if (this._dispatchAnimationEnd(n, o, r, l, t - 1)) return;
                if (l) return this._goto(l, e - (t - i) / a);
                ((this.paused = !0), (i = n.frames.length - 1));
              } else i += e * a;
              ((this.currentAnimationFrame = i),
                (this._currentFrame = n.frames[0 | i]));
            } else if (
              ((o = this._currentFrame += e),
              (t = this.spriteSheet.getNumFrames()),
              o >= t &&
                t > 0 &&
                !this._dispatchAnimationEnd(n, o, r, t - 1) &&
                (this._currentFrame -= t) >= t)
            )
              return this._normalizeFrame();
            ((o = 0 | this._currentFrame),
              this.currentFrame != o &&
                ((this.currentFrame = o), this.dispatchEvent("change")));
          }),
          (n._dispatchAnimationEnd = function (t, n, r, o, a) {
            var i = t ? t.name : null;
            if (this.hasEventListener("animationend")) {
              var l = new e.Event("animationend");
              ((l.name = i), (l.next = o), this.dispatchEvent(l));
            }
            var s = this._animation != t || this._currentFrame != n;
            return (
              s ||
                r ||
                !this.paused ||
                ((this.currentAnimationFrame = a), (s = !0)),
              s
            );
          }),
          (n._goto = function (e, t) {
            if (((this.currentAnimationFrame = 0), isNaN(e))) {
              var n = this.spriteSheet.getAnimation(e);
              n &&
                ((this._animation = n),
                (this.currentAnimation = e),
                this._normalizeFrame(t));
            } else
              ((this.currentAnimation = this._animation = null),
                (this._currentFrame = e),
                this._normalizeFrame());
          }),
          (e.Sprite = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(t) {
          (this.DisplayObject_constructor(),
            (this.graphics = t || new e.Graphics()));
        }
        var n = e.extend(t, e.DisplayObject);
        ((n.isVisible = function () {
          var e =
            this.cacheCanvas || (this.graphics && !this.graphics.isEmpty());
          return !!(
            this.visible &&
            this.alpha > 0 &&
            this.scaleX != 0 &&
            this.scaleY != 0 &&
            e
          );
        }),
          (n.draw = function (e, t) {
            return (
              this.DisplayObject_draw(e, t) || this.graphics.draw(e, this),
              !0
            );
          }),
          (n.clone = function (e) {
            var n = e && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new t(n));
          }),
          (n.toString = function () {
            return "[Shape (name=" + this.name + ")]";
          }),
          (e.Shape = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n) {
          (this.DisplayObject_constructor(),
            (this.text = e),
            (this.font = t),
            (this.color = n),
            (this.textAlign = "left"),
            (this.textBaseline = "top"),
            (this.maxWidth = null),
            (this.outline = 0),
            (this.lineHeight = 0),
            (this.lineWidth = null));
        }
        var n = e.extend(t, e.DisplayObject),
          r = e.createCanvas
            ? e.createCanvas()
            : document.createElement("canvas");
        (r.getContext &&
          ((t._workingContext = r.getContext("2d")), (r.width = r.height = 1)),
          (t.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -0.5,
            end: -1,
            right: -1,
          }),
          (t.V_OFFSETS = {
            top: 0,
            hanging: -0.01,
            middle: -0.4,
            alphabetic: -0.8,
            ideographic: -0.85,
            bottom: -1,
          }),
          (n.isVisible = function () {
            var e = this.cacheCanvas || (this.text != null && this.text !== "");
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX != 0 &&
              this.scaleY != 0 &&
              e
            );
          }),
          (n.draw = function (e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            var n = this.color || "#000";
            return (
              this.outline
                ? ((e.strokeStyle = n), (e.lineWidth = 1 * this.outline))
                : (e.fillStyle = n),
              this._drawText(this._prepContext(e)),
              !0
            );
          }),
          (n.getMeasuredWidth = function () {
            return this._getMeasuredWidth(this.text);
          }),
          (n.getMeasuredLineHeight = function () {
            return 1.2 * this._getMeasuredWidth("M");
          }),
          (n.getMeasuredHeight = function () {
            return this._drawText(null, {}).height;
          }),
          (n.getBounds = function () {
            var e = this.DisplayObject_getBounds();
            if (e) return e;
            if (this.text == null || this.text === "") return null;
            var n = this._drawText(null, {}),
              r =
                this.maxWidth && this.maxWidth < n.width
                  ? this.maxWidth
                  : n.width,
              o = r * t.H_OFFSETS[this.textAlign || "left"],
              a = this.lineHeight || this.getMeasuredLineHeight(),
              i = a * t.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(o, i, r, n.height);
          }),
          (n.getMetrics = function () {
            var e = { lines: [] };
            return (
              (e.lineHeight = this.lineHeight || this.getMeasuredLineHeight()),
              (e.vOffset =
                e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"]),
              this._drawText(null, e, e.lines)
            );
          }),
          (n.clone = function () {
            return this._cloneProps(new t(this.text, this.font, this.color));
          }),
          (n.toString = function () {
            return (
              "[Text (text=" +
              (this.text.length > 20
                ? this.text.substr(0, 17) + "..."
                : this.text) +
              ")]"
            );
          }),
          (n._cloneProps = function (e) {
            return (
              this.DisplayObject__cloneProps(e),
              (e.textAlign = this.textAlign),
              (e.textBaseline = this.textBaseline),
              (e.maxWidth = this.maxWidth),
              (e.outline = this.outline),
              (e.lineHeight = this.lineHeight),
              (e.lineWidth = this.lineWidth),
              e
            );
          }),
          (n._prepContext = function (e) {
            return (
              (e.font = this.font || "10px sans-serif"),
              (e.textAlign = this.textAlign || "left"),
              (e.textBaseline = this.textBaseline || "top"),
              e
            );
          }),
          (n._drawText = function (e, n, r) {
            var o = !!e;
            o || ((e = t._workingContext), e.save(), this._prepContext(e));
            for (
              var a = this.lineHeight || this.getMeasuredLineHeight(),
                i = 0,
                l = 0,
                s = String(this.text).split(/(?:\r\n|\r|\n)/),
                u = 0,
                c = s.length;
              c > u;
              u++
            ) {
              var d = s[u],
                m = null;
              if (
                this.lineWidth != null &&
                (m = e.measureText(d).width) > this.lineWidth
              ) {
                var p = d.split(/(\s)/);
                ((d = p[0]), (m = e.measureText(d).width));
                for (var _ = 1, f = p.length; f > _; _ += 2) {
                  var g = e.measureText(p[_] + p[_ + 1]).width;
                  m + g > this.lineWidth
                    ? (o && this._drawTextLine(e, d, l * a),
                      r && r.push(d),
                      m > i && (i = m),
                      (d = p[_ + 1]),
                      (m = e.measureText(d).width),
                      l++)
                    : ((d += p[_] + p[_ + 1]), (m += g));
                }
              }
              (o && this._drawTextLine(e, d, l * a),
                r && r.push(d),
                n && m == null && (m = e.measureText(d).width),
                m > i && (i = m),
                l++);
            }
            return (
              n && ((n.width = i), (n.height = l * a)),
              o || e.restore(),
              n
            );
          }),
          (n._drawTextLine = function (e, t, n) {
            this.outline
              ? e.strokeText(t, 0, n, this.maxWidth || 65535)
              : e.fillText(t, 0, n, this.maxWidth || 65535);
          }),
          (n._getMeasuredWidth = function (e) {
            var n = t._workingContext;
            n.save();
            var r = this._prepContext(n).measureText(e).width;
            return (n.restore(), r);
          }),
          (e.Text = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t) {
          (this.Container_constructor(),
            (this.text = e || ""),
            (this.spriteSheet = t),
            (this.lineHeight = 0),
            (this.letterSpacing = 0),
            (this.spaceWidth = 0),
            (this._oldProps = {
              text: 0,
              spriteSheet: 0,
              lineHeight: 0,
              letterSpacing: 0,
              spaceWidth: 0,
            }));
        }
        var n = e.extend(t, e.Container);
        ((t.maxPoolSize = 100),
          (t._spritePool = []),
          (n.draw = function (e, t) {
            this.DisplayObject_draw(e, t) ||
              (this._updateText(), this.Container_draw(e, t));
          }),
          (n.getBounds = function () {
            return (this._updateText(), this.Container_getBounds());
          }),
          (n.isVisible = function () {
            var e =
              this.cacheCanvas ||
              (this.spriteSheet && this.spriteSheet.complete && this.text);
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX !== 0 &&
              this.scaleY !== 0 &&
              e
            );
          }),
          (n.clone = function () {
            return this._cloneProps(new t(this.text, this.spriteSheet));
          }),
          (n.addChild =
            n.addChildAt =
            n.removeChild =
            n.removeChildAt =
            n.removeAllChildren =
              function () {}),
          (n._cloneProps = function (e) {
            return (
              this.Container__cloneProps(e),
              (e.lineHeight = this.lineHeight),
              (e.letterSpacing = this.letterSpacing),
              (e.spaceWidth = this.spaceWidth),
              e
            );
          }),
          (n._getFrameIndex = function (e, t) {
            var n,
              r = t.getAnimation(e);
            return (
              r ||
                (e != (n = e.toUpperCase()) ||
                  e != (n = e.toLowerCase()) ||
                  (n = null),
                n && (r = t.getAnimation(n))),
              r && r.frames[0]
            );
          }),
          (n._getFrame = function (e, t) {
            var n = this._getFrameIndex(e, t);
            return n == null ? n : t.getFrame(n);
          }),
          (n._getLineHeight = function (e) {
            var t =
              this._getFrame("1", e) ||
              this._getFrame("T", e) ||
              this._getFrame("L", e) ||
              e.getFrame(0);
            return t ? t.rect.height : 1;
          }),
          (n._getSpaceWidth = function (e) {
            var t =
              this._getFrame("1", e) ||
              this._getFrame("l", e) ||
              this._getFrame("e", e) ||
              this._getFrame("a", e) ||
              e.getFrame(0);
            return t ? t.rect.width : 1;
          }),
          (n._updateText = function () {
            var n,
              r = 0,
              o = 0,
              a = this._oldProps,
              i = !1,
              l = this.spaceWidth,
              s = this.lineHeight,
              u = this.spriteSheet,
              c = t._spritePool,
              d = this.children,
              m = 0,
              p = d.length;
            for (var _ in a) a[_] != this[_] && ((a[_] = this[_]), (i = !0));
            if (i) {
              var f = !!this._getFrame(" ", u);
              (f || l || (l = this._getSpaceWidth(u)),
                s || (s = this._getLineHeight(u)));
              for (var g = 0, h = this.text.length; h > g; g++) {
                var y = this.text.charAt(g);
                if (y != " " || f)
                  if (y != "\n" && y != "\r") {
                    var C = this._getFrameIndex(y, u);
                    C != null &&
                      (p > m
                        ? (n = d[m])
                        : (d.push((n = c.length ? c.pop() : new e.Sprite())),
                          (n.parent = this),
                          p++),
                      (n.spriteSheet = u),
                      n.gotoAndStop(C),
                      (n.x = r),
                      (n.y = o),
                      m++,
                      (r += n.getBounds().width + this.letterSpacing));
                  } else
                    (y == "\r" && this.text.charAt(g + 1) == "\n" && g++,
                      (r = 0),
                      (o += s));
                else r += l;
              }
              for (; p > m; ) (c.push((n = d.pop())), (n.parent = null), p--);
              c.length > t.maxPoolSize && (c.length = t.maxPoolSize);
            }
          }),
          (e.BitmapText = e.promote(t, "Container")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(n, r, o, a) {
          (this.Container_constructor(),
            !t.inited && t.init(),
            (this.mode = n || t.INDEPENDENT),
            (this.startPosition = r || 0),
            (this.loop = o),
            (this.currentFrame = 0),
            (this.timeline = new e.Timeline(null, a, {
              paused: !0,
              position: r,
              useTicks: !0,
            })),
            (this.paused = !1),
            (this.actionsEnabled = !0),
            (this.autoReset = !0),
            (this.frameBounds = this.frameBounds || null),
            (this.framerate = null),
            (this._synchOffset = 0),
            (this._prevPos = -1),
            (this._prevPosition = 0),
            (this._t = 0),
            (this._managed = {}));
        }
        function n() {
          throw "MovieClipPlugin cannot be instantiated.";
        }
        var r = e.extend(t, e.Container);
        ((t.INDEPENDENT = "independent"),
          (t.SINGLE_FRAME = "single"),
          (t.SYNCHED = "synched"),
          (t.inited = !1),
          (t.init = function () {
            t.inited || (n.install(), (t.inited = !0));
          }),
          (r.getLabels = function () {
            return this.timeline.getLabels();
          }),
          (r.getCurrentLabel = function () {
            return (this._updateTimeline(), this.timeline.getCurrentLabel());
          }),
          (r.getDuration = function () {
            return this.timeline.duration;
          }));
        try {
          Object.defineProperties(r, {
            labels: { get: r.getLabels },
            currentLabel: { get: r.getCurrentLabel },
            totalFrames: { get: r.getDuration },
            duration: { get: r.getDuration },
          });
        } catch (e) {}
        ((r.initialize = t),
          (r.isVisible = function () {
            return !!(
              this.visible &&
              this.alpha > 0 &&
              this.scaleX != 0 &&
              this.scaleY != 0
            );
          }),
          (r.draw = function (e, t) {
            return (
              this.DisplayObject_draw(e, t) ||
                (this._updateTimeline(), this.Container_draw(e, t)),
              !0
            );
          }),
          (r.play = function () {
            this.paused = !1;
          }),
          (r.stop = function () {
            this.paused = !0;
          }),
          (r.gotoAndPlay = function (e) {
            ((this.paused = !1), this._goto(e));
          }),
          (r.gotoAndStop = function (e) {
            ((this.paused = !0), this._goto(e));
          }),
          (r.advance = function (e) {
            var n = t.INDEPENDENT;
            if (this.mode == n) {
              for (var r = this, o = r.framerate; (r = r.parent) && o == null; )
                r.mode == n && (o = r._framerate);
              this._framerate = o;
              var a =
                  o != null && o != -1 && e != null
                    ? e / (1e3 / o) + this._t
                    : 1,
                i = 0 | a;
              for (this._t = a - i; !this.paused && i--; )
                ((this._prevPosition =
                  this._prevPos < 0 ? 0 : this._prevPosition + 1),
                  this._updateTimeline());
            }
          }),
          (r.clone = function () {
            throw "MovieClip cannot be cloned.";
          }),
          (r.toString = function () {
            return "[MovieClip (name=" + this.name + ")]";
          }),
          (r._tick = function (e) {
            (this.advance(e && e.delta), this.Container__tick(e));
          }),
          (r._goto = function (e) {
            var t = this.timeline.resolve(e);
            t != null &&
              (this._prevPos == -1 && (this._prevPos = NaN),
              (this._prevPosition = t),
              (this._t = 0),
              this._updateTimeline());
          }),
          (r._reset = function () {
            ((this._prevPos = -1),
              (this._t = this.currentFrame = 0),
              (this.paused = !1));
          }),
          (r._updateTimeline = function () {
            var n = this.timeline,
              r = this.mode != t.INDEPENDENT;
            n.loop = this.loop == null ? !0 : this.loop;
            var o = r
                ? this.startPosition +
                  (this.mode == t.SINGLE_FRAME ? 0 : this._synchOffset)
                : this._prevPos < 0
                  ? 0
                  : this._prevPosition,
              a = r || !this.actionsEnabled ? e.Tween.NONE : null;
            if (
              ((this.currentFrame = n._calcPosition(o)),
              n.setPosition(o, a),
              (this._prevPosition = n._prevPosition),
              this._prevPos != n._prevPos)
            ) {
              this.currentFrame = this._prevPos = n._prevPos;
              for (var i in this._managed) this._managed[i] = 1;
              for (var l = n._tweens, s = 0, u = l.length; u > s; s++) {
                var c = l[s],
                  d = c._target;
                if (d != this && !c.passive) {
                  var m = c._stepPosition;
                  d instanceof e.DisplayObject
                    ? this._addManagedChild(d, m)
                    : this._setState(d.state, m);
                }
              }
              var p = this.children;
              for (s = p.length - 1; s >= 0; s--) {
                var _ = p[s].id;
                this._managed[_] == 1 &&
                  (this.removeChildAt(s), delete this._managed[_]);
              }
            }
          }),
          (r._setState = function (e, t) {
            if (e)
              for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n],
                  o = r.t,
                  a = r.p;
                for (var i in a) o[i] = a[i];
                this._addManagedChild(o, t);
              }
          }),
          (r._addManagedChild = function (e, n) {
            e._off ||
              (this.addChildAt(e, 0),
              e instanceof t &&
                ((e._synchOffset = n),
                e.mode == t.INDEPENDENT &&
                  e.autoReset &&
                  !this._managed[e.id] &&
                  e._reset()),
              (this._managed[e.id] = 2));
          }),
          (r._getBounds = function (e, t) {
            var n = this.DisplayObject_getBounds();
            return (
              n ||
                (this._updateTimeline(),
                this.frameBounds &&
                  (n = this._rectangle.copy(
                    this.frameBounds[this.currentFrame],
                  ))),
              n
                ? this._transformBounds(n, e, t)
                : this.Container__getBounds(e, t)
            );
          }),
          (e.MovieClip = e.promote(t, "Container")),
          (n.priority = 100),
          (n.install = function () {
            e.Tween.installPlugin(n, ["startPosition"]);
          }),
          (n.init = function (e, t, n) {
            return n;
          }),
          (n.step = function () {}),
          (n.tween = function (e, n, r, o, a, i) {
            return e.target instanceof t ? (i == 1 ? a[n] : o[n]) : r;
          }));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          throw "SpriteSheetUtils cannot be instantiated";
        }
        var n = e.createCanvas
          ? e.createCanvas()
          : document.createElement("canvas");
        (n.getContext &&
          ((t._workingCanvas = n),
          (t._workingContext = n.getContext("2d")),
          (n.width = n.height = 1)),
          (t.addFlippedFrames = function (e, n, r, o) {
            if (n || r || o) {
              var a = 0;
              (n && t._flip(e, ++a, !0, !1),
                r && t._flip(e, ++a, !1, !0),
                o && t._flip(e, ++a, !0, !0));
            }
          }),
          (t.extractFrame = function (e, n) {
            isNaN(n) && (n = e.getAnimation(n).frames[0]);
            var r = e.getFrame(n);
            if (!r) return null;
            var o = r.rect,
              a = t._workingCanvas;
            ((a.width = o.width),
              (a.height = o.height),
              t._workingContext.drawImage(
                r.image,
                o.x,
                o.y,
                o.width,
                o.height,
                0,
                0,
                o.width,
                o.height,
              ));
            var i = document.createElement("img");
            return ((i.src = a.toDataURL("image/png")), i);
          }),
          (t.mergeAlpha = function (t, n, r) {
            (r ||
              (r = e.createCanvas
                ? e.createCanvas()
                : document.createElement("canvas")),
              (r.width = Math.max(n.width, t.width)),
              (r.height = Math.max(n.height, t.height)));
            var o = r.getContext("2d");
            return (
              o.save(),
              o.drawImage(t, 0, 0),
              (o.globalCompositeOperation = "destination-in"),
              o.drawImage(n, 0, 0),
              o.restore(),
              r
            );
          }),
          (t._flip = function (e, n, r, o) {
            for (
              var a = e._images,
                i = t._workingCanvas,
                l = t._workingContext,
                s = a.length / n,
                u = 0;
              s > u;
              u++
            ) {
              var c = a[u];
              ((c.__tmp = u),
                l.setTransform(1, 0, 0, 1, 0, 0),
                l.clearRect(0, 0, i.width + 1, i.height + 1),
                (i.width = c.width),
                (i.height = c.height),
                l.setTransform(
                  r ? -1 : 1,
                  0,
                  0,
                  o ? -1 : 1,
                  r ? c.width : 0,
                  o ? c.height : 0,
                ),
                l.drawImage(c, 0, 0));
              var d = document.createElement("img");
              ((d.src = i.toDataURL("image/png")),
                (d.width = c.width),
                (d.height = c.height),
                a.push(d));
            }
            var m = e._frames,
              p = m.length / n;
            for (u = 0; p > u; u++) {
              c = m[u];
              var _ = c.rect.clone();
              d = a[c.image.__tmp + s * n];
              var f = { image: d, rect: _, regX: c.regX, regY: c.regY };
              (r &&
                ((_.x = d.width - _.x - _.width), (f.regX = _.width - c.regX)),
                o &&
                  ((_.y = d.height - _.y - _.height),
                  (f.regY = _.height - c.regY)),
                m.push(f));
            }
            var g = "_" + (r ? "h" : "") + (o ? "v" : ""),
              h = e._animations,
              y = e._data,
              C = h.length / n;
            for (u = 0; C > u; u++) {
              var b = h[u];
              c = y[b];
              var v = { name: b + g, speed: c.speed, next: c.next, frames: [] };
              (c.next && (v.next += g), (m = c.frames));
              for (var S = 0, R = m.length; R > S; S++)
                v.frames.push(m[S] + p * n);
              ((y[v.name] = v), h.push(v.name));
            }
          }),
          (e.SpriteSheetUtils = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          (this.EventDispatcher_constructor(),
            (this.maxWidth = 2048),
            (this.maxHeight = 2048),
            (this.spriteSheet = null),
            (this.scale = 1),
            (this.padding = 1),
            (this.timeSlice = 0.3),
            (this.progress = -1),
            (this.framerate = e || 0),
            (this._frames = []),
            (this._animations = {}),
            (this._data = null),
            (this._nextFrameIndex = 0),
            (this._index = 0),
            (this._timerID = null),
            (this._scale = 1));
        }
        var n = e.extend(t, e.EventDispatcher);
        ((t.ERR_DIMENSIONS =
          "frame dimensions exceed max spritesheet dimensions"),
          (t.ERR_RUNNING = "a build is already running"),
          (n.addFrame = function (e, n, r, o, a) {
            if (this._data) throw t.ERR_RUNNING;
            var i = n || e.bounds || e.nominalBounds;
            return (
              !i && e.getBounds && (i = e.getBounds()),
              i
                ? ((r = r || 1),
                  this._frames.push({
                    source: e,
                    sourceRect: i,
                    scale: r,
                    funct: o,
                    data: a,
                    index: this._frames.length,
                    height: i.height * r,
                  }) - 1)
                : null
            );
          }),
          (n.addAnimation = function (e, n, r, o) {
            if (this._data) throw t.ERR_RUNNING;
            this._animations[e] = { frames: n, next: r, speed: o };
          }),
          (n.addMovieClip = function (e, n, r, o, a, i) {
            if (this._data) throw t.ERR_RUNNING;
            var l = e.frameBounds,
              s = n || e.bounds || e.nominalBounds;
            if ((!s && e.getBounds && (s = e.getBounds()), s || l)) {
              var u,
                c,
                d = this._frames.length,
                m = e.timeline.duration;
              for (u = 0; m > u; u++) {
                var p = l && l[u] ? l[u] : s;
                this.addFrame(e, p, r, this._setupMovieClipFrame, {
                  i: u,
                  f: o,
                  d: a,
                });
              }
              var _ = e.timeline._labels,
                f = [];
              for (var g in _) f.push({ index: _[g], label: g });
              if (f.length)
                for (
                  f.sort(function (e, t) {
                    return e.index - t.index;
                  }),
                    u = 0,
                    c = f.length;
                  c > u;
                  u++
                ) {
                  for (
                    var h = f[u].label,
                      y = d + f[u].index,
                      C = d + (u == c - 1 ? m : f[u + 1].index),
                      b = [],
                      v = y;
                    C > v;
                    v++
                  )
                    b.push(v);
                  (!i || (h = i(h, e, y, C))) && this.addAnimation(h, b, !0);
                }
            }
          }),
          (n.build = function () {
            if (this._data) throw t.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(); );
            return (this._endBuild(), this.spriteSheet);
          }),
          (n.buildAsync = function (e) {
            if (this._data) throw t.ERR_RUNNING;
            ((this.timeSlice = e), this._startBuild());
            var n = this;
            this._timerID = setTimeout(
              function () {
                n._run();
              },
              50 - 50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)),
            );
          }),
          (n.stopAsync = function () {
            (clearTimeout(this._timerID), (this._data = null));
          }),
          (n.clone = function () {
            throw "SpriteSheetBuilder cannot be cloned.";
          }),
          (n.toString = function () {
            return "[SpriteSheetBuilder]";
          }),
          (n._startBuild = function () {
            var n = this.padding || 0;
            ((this.progress = 0),
              (this.spriteSheet = null),
              (this._index = 0),
              (this._scale = this.scale));
            var r = [];
            this._data = {
              images: [],
              frames: r,
              framerate: this.framerate,
              animations: this._animations,
            };
            var o = this._frames.slice();
            if (
              (o.sort(function (e, t) {
                return e.height <= t.height ? -1 : 1;
              }),
              o[o.length - 1].height + 2 * n > this.maxHeight)
            )
              throw t.ERR_DIMENSIONS;
            for (var a = 0, i = 0, l = 0; o.length; ) {
              var s = this._fillRow(o, a, l, r, n);
              if ((s.w > i && (i = s.w), (a += s.h), !s.h || !o.length)) {
                var u = e.createCanvas
                  ? e.createCanvas()
                  : document.createElement("canvas");
                ((u.width = this._getSize(i, this.maxWidth)),
                  (u.height = this._getSize(a, this.maxHeight)),
                  (this._data.images[l] = u),
                  s.h || ((i = a = 0), l++));
              }
            }
          }),
          (n._setupMovieClipFrame = function (e, t) {
            var n = e.actionsEnabled;
            ((e.actionsEnabled = !1),
              e.gotoAndStop(t.i),
              (e.actionsEnabled = n),
              t.f && t.f(e, t.d, t.i));
          }),
          (n._getSize = function (e, t) {
            for (var n = 4; Math.pow(2, ++n) < e; );
            return Math.min(t, Math.pow(2, n));
          }),
          (n._fillRow = function (n, r, o, a, i) {
            var l = this.maxWidth,
              s = this.maxHeight;
            r += i;
            for (var u = s - r, c = i, d = 0, m = n.length - 1; m >= 0; m--) {
              var p = n[m],
                _ = this._scale * p.scale,
                f = p.sourceRect,
                g = p.source,
                h = Math.floor(_ * f.x - i),
                y = Math.floor(_ * f.y - i),
                C = Math.ceil(_ * f.height + 2 * i),
                b = Math.ceil(_ * f.width + 2 * i);
              if (b > l) throw t.ERR_DIMENSIONS;
              C > u ||
                c + b > l ||
                ((p.img = o),
                (p.rect = new e.Rectangle(c, r, b, C)),
                (d = d || C),
                n.splice(m, 1),
                (a[p.index] = [
                  c,
                  r,
                  b,
                  C,
                  o,
                  Math.round(-h + _ * g.regX - i),
                  Math.round(-y + _ * g.regY - i),
                ]),
                (c += b));
            }
            return { w: c, h: d };
          }),
          (n._endBuild = function () {
            ((this.spriteSheet = new e.SpriteSheet(this._data)),
              (this._data = null),
              (this.progress = 1),
              this.dispatchEvent("complete"));
          }),
          (n._run = function () {
            for (
              var t =
                  50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)),
                n = new Date().getTime() + t,
                r = !1;
              n > new Date().getTime();
            )
              if (!this._drawNext()) {
                r = !0;
                break;
              }
            if (r) this._endBuild();
            else {
              var o = this;
              this._timerID = setTimeout(function () {
                o._run();
              }, 50 - t);
            }
            var a = (this.progress = this._index / this._frames.length);
            if (this.hasEventListener("progress")) {
              var i = new e.Event("progress");
              ((i.progress = a), this.dispatchEvent(i));
            }
          }),
          (n._drawNext = function () {
            var e = this._frames[this._index],
              t = e.scale * this._scale,
              n = e.rect,
              r = e.sourceRect,
              o = this._data.images[e.img],
              a = o.getContext("2d");
            return (
              e.funct && e.funct(e.source, e.data),
              a.save(),
              a.beginPath(),
              a.rect(n.x, n.y, n.width, n.height),
              a.clip(),
              a.translate(Math.ceil(n.x - r.x * t), Math.ceil(n.y - r.y * t)),
              a.scale(t, t),
              e.source.draw(a),
              a.restore(),
              ++this._index < this._frames.length
            );
          }),
          (e.SpriteSheetBuilder = e.promote(t, "EventDispatcher")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          (this.DisplayObject_constructor(),
            typeof e == "string" && (e = document.getElementById(e)),
            (this.mouseEnabled = !1));
          var t = e.style;
          ((t.position = "absolute"),
            (t.transformOrigin =
              t.WebkitTransformOrigin =
              t.msTransformOrigin =
              t.MozTransformOrigin =
              t.OTransformOrigin =
                "0% 0%"),
            (this.htmlElement = e),
            (this._oldProps = null));
        }
        var n = e.extend(t, e.DisplayObject);
        ((n.isVisible = function () {
          return this.htmlElement != null;
        }),
          (n.draw = function () {
            return !0;
          }),
          (n.cache = function () {}),
          (n.uncache = function () {}),
          (n.updateCache = function () {}),
          (n.hitTest = function () {}),
          (n.localToGlobal = function () {}),
          (n.globalToLocal = function () {}),
          (n.localToLocal = function () {}),
          (n.clone = function () {
            throw "DOMElement cannot be cloned.";
          }),
          (n.toString = function () {
            return "[DOMElement (name=" + this.name + ")]";
          }),
          (n._tick = function (e) {
            var t = this.getStage();
            (t && t.on("drawend", this._handleDrawEnd, this, !0),
              this.DisplayObject__tick(e));
          }),
          (n._handleDrawEnd = function () {
            var t = this.htmlElement;
            if (t) {
              var n = t.style,
                r = this.getConcatenatedDisplayProps(this._props),
                o = r.matrix,
                a = r.visible ? "visible" : "hidden";
              if ((a != n.visibility && (n.visibility = a), r.visible)) {
                var i = this._oldProps,
                  l = i && i.matrix,
                  s = 1e4;
                if (!l || !l.equals(o)) {
                  var u =
                    "matrix(" +
                    ((o.a * s) | 0) / s +
                    "," +
                    ((o.b * s) | 0) / s +
                    "," +
                    ((o.c * s) | 0) / s +
                    "," +
                    ((o.d * s) | 0) / s +
                    "," +
                    ((o.tx + 0.5) | 0);
                  ((n.transform =
                    n.WebkitTransform =
                    n.OTransform =
                    n.msTransform =
                      u + "," + ((o.ty + 0.5) | 0) + ")"),
                    (n.MozTransform = u + "px," + ((o.ty + 0.5) | 0) + "px)"),
                    i || (i = this._oldProps = new e.DisplayProps(!0, NaN)),
                    i.matrix.copy(o));
                }
                i.alpha != r.alpha &&
                  ((n.opacity = "" + ((r.alpha * s) | 0) / s),
                  (i.alpha = r.alpha));
              }
            }
          }),
          (e.DOMElement = e.promote(t, "DisplayObject")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {}
        var n = t.prototype;
        ((n.getBounds = function (e) {
          return e;
        }),
          (n.applyFilter = function (e, t, n, r, o, a, i, l) {
            ((a = a || e), i == null && (i = t), l == null && (l = n));
            try {
              var s = e.getImageData(t, n, r, o);
            } catch (e) {
              return !1;
            }
            return this._applyFilter(s) ? (a.putImageData(s, i, l), !0) : !1;
          }),
          (n.toString = function () {
            return "[Filter]";
          }),
          (n.clone = function () {
            return new t();
          }),
          (n._applyFilter = function () {
            return !0;
          }),
          (e.Filter = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n) {
          ((isNaN(e) || 0 > e) && (e = 0),
            (isNaN(t) || 0 > t) && (t = 0),
            (isNaN(n) || 1 > n) && (n = 1),
            (this.blurX = 0 | e),
            (this.blurY = 0 | t),
            (this.quality = 0 | n));
        }
        var n = e.extend(t, e.Filter);
        ((t.MUL_TABLE = [
          1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283,
          265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9,
          278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193,
          377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145,
          285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465,
          459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3,
          379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165,
          327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287,
          71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507,
          503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457,
          227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417,
          207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383,
          95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11,
          175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327,
          163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153,
          305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287,
          143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135,
          269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1,
        ]),
          (t.SHG_TABLE = [
            0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14,
            14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15,
            14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15,
            15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16,
            14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10,
            16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16,
            14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17,
            17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17,
            17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17,
            17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16,
            15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17,
            17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14,
            17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17,
            16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17,
            9,
          ]),
          (n.getBounds = function (t) {
            var n = 0 | this.blurX,
              r = 0 | this.blurY;
            if (0 >= n && 0 >= r) return t;
            var o = Math.pow(this.quality, 0.2);
            return (t || new e.Rectangle()).pad(
              n * o + 1,
              r * o + 1,
              n * o + 1,
              r * o + 1,
            );
          }),
          (n.clone = function () {
            return new t(this.blurX, this.blurY, this.quality);
          }),
          (n.toString = function () {
            return "[BlurFilter]";
          }),
          (n._applyFilter = function (e) {
            var n = this.blurX >> 1;
            if (isNaN(n) || 0 > n) return !1;
            var r = this.blurY >> 1;
            if (isNaN(r) || 0 > r || (n == 0 && r == 0)) return !1;
            var o = this.quality;
            ((isNaN(o) || 1 > o) && (o = 1),
              (o |= 0),
              o > 3 && (o = 3),
              1 > o && (o = 1));
            var a = e.data,
              i = 0,
              l = 0,
              s = 0,
              u = 0,
              c = 0,
              d = 0,
              m = 0,
              p = 0,
              _ = 0,
              f = 0,
              g = 0,
              h = 0,
              y = 0,
              C = 0,
              b = 0,
              v = (n + n + 1) | 0,
              S = (r + r + 1) | 0,
              R = 0 | e.width,
              L = 0 | e.height,
              E = (R - 1) | 0,
              k = (L - 1) | 0,
              I = (n + 1) | 0,
              T = (r + 1) | 0,
              D = { r: 0, b: 0, g: 0, a: 0 },
              x = D;
            for (s = 1; v > s; s++) x = x.n = { r: 0, b: 0, g: 0, a: 0 };
            x.n = D;
            var $ = { r: 0, b: 0, g: 0, a: 0 },
              P = $;
            for (s = 1; S > s; s++) P = P.n = { r: 0, b: 0, g: 0, a: 0 };
            P.n = $;
            for (
              var N = null,
                M = 0 | t.MUL_TABLE[n],
                w = 0 | t.SHG_TABLE[n],
                A = 0 | t.MUL_TABLE[r],
                F = 0 | t.SHG_TABLE[r];
              o-- > 0;
            ) {
              m = d = 0;
              var O = M,
                B = w;
              for (l = L; --l > -1; ) {
                for (
                  p = I * (h = a[0 | d]),
                    _ = I * (y = a[(d + 1) | 0]),
                    f = I * (C = a[(d + 2) | 0]),
                    g = I * (b = a[(d + 3) | 0]),
                    x = D,
                    s = I;
                  --s > -1;
                )
                  ((x.r = h), (x.g = y), (x.b = C), (x.a = b), (x = x.n));
                for (s = 1; I > s; s++)
                  ((u = (d + ((s > E ? E : s) << 2)) | 0),
                    (p += x.r = a[u]),
                    (_ += x.g = a[u + 1]),
                    (f += x.b = a[u + 2]),
                    (g += x.a = a[u + 3]),
                    (x = x.n));
                for (N = D, i = 0; R > i; i++)
                  ((a[d++] = (p * O) >>> B),
                    (a[d++] = (_ * O) >>> B),
                    (a[d++] = (f * O) >>> B),
                    (a[d++] = (g * O) >>> B),
                    (u = (m + ((u = i + n + 1) < E ? u : E)) << 2),
                    (p -= N.r - (N.r = a[u])),
                    (_ -= N.g - (N.g = a[u + 1])),
                    (f -= N.b - (N.b = a[u + 2])),
                    (g -= N.a - (N.a = a[u + 3])),
                    (N = N.n));
                m += R;
              }
              for (O = A, B = F, i = 0; R > i; i++) {
                for (
                  d = (i << 2) | 0,
                    p = (T * (h = a[d])) | 0,
                    _ = (T * (y = a[(d + 1) | 0])) | 0,
                    f = (T * (C = a[(d + 2) | 0])) | 0,
                    g = (T * (b = a[(d + 3) | 0])) | 0,
                    P = $,
                    s = 0;
                  T > s;
                  s++
                )
                  ((P.r = h), (P.g = y), (P.b = C), (P.a = b), (P = P.n));
                for (c = R, s = 1; r >= s; s++)
                  ((d = (c + i) << 2),
                    (p += P.r = a[d]),
                    (_ += P.g = a[d + 1]),
                    (f += P.b = a[d + 2]),
                    (g += P.a = a[d + 3]),
                    (P = P.n),
                    k > s && (c += R));
                if (((d = i), (N = $), o > 0))
                  for (l = 0; L > l; l++)
                    ((u = d << 2),
                      (a[u + 3] = b = (g * O) >>> B),
                      b > 0
                        ? ((a[u] = (p * O) >>> B),
                          (a[u + 1] = (_ * O) >>> B),
                          (a[u + 2] = (f * O) >>> B))
                        : (a[u] = a[u + 1] = a[u + 2] = 0),
                      (u = (i + ((u = l + T) < k ? u : k) * R) << 2),
                      (p -= N.r - (N.r = a[u])),
                      (_ -= N.g - (N.g = a[u + 1])),
                      (f -= N.b - (N.b = a[u + 2])),
                      (g -= N.a - (N.a = a[u + 3])),
                      (N = N.n),
                      (d += R));
                else
                  for (l = 0; L > l; l++)
                    ((u = d << 2),
                      (a[u + 3] = b = (g * O) >>> B),
                      b > 0
                        ? ((b = 255 / b),
                          (a[u] = ((p * O) >>> B) * b),
                          (a[u + 1] = ((_ * O) >>> B) * b),
                          (a[u + 2] = ((f * O) >>> B) * b))
                        : (a[u] = a[u + 1] = a[u + 2] = 0),
                      (u = (i + ((u = l + T) < k ? u : k) * R) << 2),
                      (p -= N.r - (N.r = a[u])),
                      (_ -= N.g - (N.g = a[u + 1])),
                      (f -= N.b - (N.b = a[u + 2])),
                      (g -= N.a - (N.a = a[u + 3])),
                      (N = N.n),
                      (d += R));
              }
            }
            return !0;
          }),
          (e.BlurFilter = e.promote(t, "Filter")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          ((this.alphaMap = e),
            (this._alphaMap = null),
            (this._mapData = null));
        }
        var n = e.extend(t, e.Filter);
        ((n.clone = function () {
          var e = new t(this.alphaMap);
          return (
            (e._alphaMap = this._alphaMap),
            (e._mapData = this._mapData),
            e
          );
        }),
          (n.toString = function () {
            return "[AlphaMapFilter]";
          }),
          (n._applyFilter = function (e) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (
              var t = e.data, n = this._mapData, r = 0, o = t.length;
              o > r;
              r += 4
            )
              t[r + 3] = n[r] || 0;
            return !0;
          }),
          (n._prepAlphaMap = function () {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var t,
              n = (this._alphaMap = this.alphaMap),
              r = n;
            n instanceof HTMLCanvasElement
              ? (t = r.getContext("2d"))
              : ((r = e.createCanvas
                  ? e.createCanvas()
                  : document.createElement("canvas")),
                (r.width = n.width),
                (r.height = n.height),
                (t = r.getContext("2d")),
                t.drawImage(n, 0, 0));
            try {
              var o = t.getImageData(0, 0, n.width, n.height);
            } catch (e) {
              return !1;
            }
            return ((this._mapData = o.data), !0);
          }),
          (e.AlphaMapFilter = e.promote(t, "Filter")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          this.mask = e;
        }
        var n = e.extend(t, e.Filter);
        ((n.applyFilter = function (e, t, n, r, o, a, i, l) {
          return this.mask
            ? ((a = a || e),
              i == null && (i = t),
              l == null && (l = n),
              a.save(),
              e != a
                ? !1
                : ((a.globalCompositeOperation = "destination-in"),
                  a.drawImage(this.mask, i, l),
                  a.restore(),
                  !0))
            : !0;
        }),
          (n.clone = function () {
            return new t(this.mask);
          }),
          (n.toString = function () {
            return "[AlphaMaskFilter]";
          }),
          (e.AlphaMaskFilter = e.promote(t, "Filter")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r, o, a, i, l) {
          ((this.redMultiplier = e != null ? e : 1),
            (this.greenMultiplier = t != null ? t : 1),
            (this.blueMultiplier = n != null ? n : 1),
            (this.alphaMultiplier = r != null ? r : 1),
            (this.redOffset = o || 0),
            (this.greenOffset = a || 0),
            (this.blueOffset = i || 0),
            (this.alphaOffset = l || 0));
        }
        var n = e.extend(t, e.Filter);
        ((n.toString = function () {
          return "[ColorFilter]";
        }),
          (n.clone = function () {
            return new t(
              this.redMultiplier,
              this.greenMultiplier,
              this.blueMultiplier,
              this.alphaMultiplier,
              this.redOffset,
              this.greenOffset,
              this.blueOffset,
              this.alphaOffset,
            );
          }),
          (n._applyFilter = function (e) {
            for (var t = e.data, n = t.length, r = 0; n > r; r += 4)
              ((t[r] = t[r] * this.redMultiplier + this.redOffset),
                (t[r + 1] = t[r + 1] * this.greenMultiplier + this.greenOffset),
                (t[r + 2] = t[r + 2] * this.blueMultiplier + this.blueOffset),
                (t[r + 3] =
                  t[r + 3] * this.alphaMultiplier + this.alphaOffset));
            return !0;
          }),
          (e.ColorFilter = e.promote(t, "Filter")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e, t, n, r) {
          this.setColor(e, t, n, r);
        }
        var n = t.prototype;
        ((t.DELTA_INDEX = [
          0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14,
          0.15, 0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.28, 0.3,
          0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56,
          0.59, 0.62, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92,
          0.95, 0.98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54,
          1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5,
          2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6,
          6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10,
        ]),
          (t.IDENTITY_MATRIX = [
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
            0, 1,
          ]),
          (t.LENGTH = t.IDENTITY_MATRIX.length),
          (n.setColor = function (e, t, n, r) {
            return this.reset().adjustColor(e, t, n, r);
          }),
          (n.reset = function () {
            return this.copy(t.IDENTITY_MATRIX);
          }),
          (n.adjustColor = function (e, t, n, r) {
            return (
              this.adjustHue(r),
              this.adjustContrast(t),
              this.adjustBrightness(e),
              this.adjustSaturation(n)
            );
          }),
          (n.adjustBrightness = function (e) {
            return e == 0 || isNaN(e)
              ? this
              : ((e = this._cleanValue(e, 255)),
                this._multiplyMatrix([
                  1,
                  0,
                  0,
                  0,
                  e,
                  0,
                  1,
                  0,
                  0,
                  e,
                  0,
                  0,
                  1,
                  0,
                  e,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ]),
                this);
          }),
          (n.adjustContrast = function (e) {
            if (e == 0 || isNaN(e)) return this;
            e = this._cleanValue(e, 100);
            var n;
            return (
              0 > e
                ? (n = 127 + (e / 100) * 127)
                : ((n = e % 1),
                  (n =
                    n == 0
                      ? t.DELTA_INDEX[e]
                      : t.DELTA_INDEX[e << 0] * (1 - n) +
                        t.DELTA_INDEX[(e << 0) + 1] * n),
                  (n = 127 * n + 127)),
              this._multiplyMatrix([
                n / 127,
                0,
                0,
                0,
                0.5 * (127 - n),
                0,
                n / 127,
                0,
                0,
                0.5 * (127 - n),
                0,
                0,
                n / 127,
                0,
                0.5 * (127 - n),
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ]),
              this
            );
          }),
          (n.adjustSaturation = function (e) {
            if (e == 0 || isNaN(e)) return this;
            e = this._cleanValue(e, 100);
            var t = 1 + (e > 0 ? (3 * e) / 100 : e / 100),
              n = 0.3086,
              r = 0.6094,
              o = 0.082;
            return (
              this._multiplyMatrix([
                n * (1 - t) + t,
                r * (1 - t),
                o * (1 - t),
                0,
                0,
                n * (1 - t),
                r * (1 - t) + t,
                o * (1 - t),
                0,
                0,
                n * (1 - t),
                r * (1 - t),
                o * (1 - t) + t,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ]),
              this
            );
          }),
          (n.adjustHue = function (e) {
            if (e == 0 || isNaN(e)) return this;
            e = (this._cleanValue(e, 180) / 180) * Math.PI;
            var t = Math.cos(e),
              n = Math.sin(e),
              r = 0.213,
              o = 0.715,
              a = 0.072;
            return (
              this._multiplyMatrix([
                r + t * (1 - r) + n * -r,
                o + t * -o + n * -o,
                a + t * -a + n * (1 - a),
                0,
                0,
                r + t * -r + 0.143 * n,
                o + t * (1 - o) + 0.14 * n,
                a + t * -a + n * -0.283,
                0,
                0,
                r + t * -r + n * -(1 - r),
                o + t * -o + n * o,
                a + t * (1 - a) + n * a,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ]),
              this
            );
          }),
          (n.concat = function (e) {
            return (
              (e = this._fixMatrix(e)),
              e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
            );
          }),
          (n.clone = function () {
            return new t().copy(this);
          }),
          (n.toArray = function () {
            for (var e = [], n = 0, r = t.LENGTH; r > n; n++) e[n] = this[n];
            return e;
          }),
          (n.copy = function (e) {
            for (var n = t.LENGTH, r = 0; n > r; r++) this[r] = e[r];
            return this;
          }),
          (n.toString = function () {
            return "[ColorMatrix]";
          }),
          (n._multiplyMatrix = function (e) {
            var t,
              n,
              r,
              o = [];
            for (t = 0; 5 > t; t++) {
              for (n = 0; 5 > n; n++) o[n] = this[n + 5 * t];
              for (n = 0; 5 > n; n++) {
                var a = 0;
                for (r = 0; 5 > r; r++) a += e[n + 5 * r] * o[r];
                this[n + 5 * t] = a;
              }
            }
          }),
          (n._cleanValue = function (e, t) {
            return Math.min(t, Math.max(-t, e));
          }),
          (n._fixMatrix = function (e) {
            return (
              e instanceof t && (e = e.toArray()),
              e.length < t.LENGTH
                ? (e = e
                    .slice(0, e.length)
                    .concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)))
                : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)),
              e
            );
          }),
          (e.ColorMatrix = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t(e) {
          this.matrix = e;
        }
        var n = e.extend(t, e.Filter);
        ((n.toString = function () {
          return "[ColorMatrixFilter]";
        }),
          (n.clone = function () {
            return new t(this.matrix);
          }),
          (n._applyFilter = function (e) {
            for (
              var t,
                n,
                r,
                o,
                a = e.data,
                i = a.length,
                l = this.matrix,
                s = l[0],
                u = l[1],
                c = l[2],
                d = l[3],
                m = l[4],
                p = l[5],
                _ = l[6],
                f = l[7],
                g = l[8],
                h = l[9],
                y = l[10],
                C = l[11],
                b = l[12],
                v = l[13],
                S = l[14],
                R = l[15],
                L = l[16],
                E = l[17],
                k = l[18],
                I = l[19],
                T = 0;
              i > T;
              T += 4
            )
              ((t = a[T]),
                (n = a[T + 1]),
                (r = a[T + 2]),
                (o = a[T + 3]),
                (a[T] = t * s + n * u + r * c + o * d + m),
                (a[T + 1] = t * p + n * _ + r * f + o * g + h),
                (a[T + 2] = t * y + n * C + r * b + o * v + S),
                (a[T + 3] = t * R + n * L + r * E + o * k + I));
            return !0;
          }),
          (e.ColorMatrixFilter = e.promote(t, "Filter")));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        function t() {
          throw "Touch cannot be instantiated";
        }
        ((t.isSupported = function () {
          return !!(
            "ontouchstart" in window ||
            (window.navigator.msPointerEnabled &&
              window.navigator.msMaxTouchPoints > 0) ||
            (window.navigator.pointerEnabled &&
              window.navigator.maxTouchPoints > 0)
          );
        }),
          (t.enable = function (e, n, r) {
            return e && e.canvas && t.isSupported()
              ? (e.__touch ||
                  ((e.__touch = {
                    pointers: {},
                    multitouch: !n,
                    preventDefault: !r,
                    count: 0,
                  }),
                  "ontouchstart" in window
                    ? t._IOS_enable(e)
                    : (window.navigator.msPointerEnabled ||
                        window.navigator.pointerEnabled) &&
                      t._IE_enable(e)),
                !0)
              : !1;
          }),
          (t.disable = function (e) {
            e &&
              ("ontouchstart" in window
                ? t._IOS_disable(e)
                : (window.navigator.msPointerEnabled ||
                    window.navigator.pointerEnabled) &&
                  t._IE_disable(e),
              delete e.__touch);
          }),
          (t._IOS_enable = function (e) {
            var n = e.canvas,
              r = (e.__touch.f = function (n) {
                t._IOS_handleEvent(e, n);
              });
            (n.addEventListener("touchstart", r, !1),
              n.addEventListener("touchmove", r, !1),
              n.addEventListener("touchend", r, !1),
              n.addEventListener("touchcancel", r, !1));
          }),
          (t._IOS_disable = function (e) {
            var t = e.canvas;
            if (t) {
              var n = e.__touch.f;
              (t.removeEventListener("touchstart", n, !1),
                t.removeEventListener("touchmove", n, !1),
                t.removeEventListener("touchend", n, !1),
                t.removeEventListener("touchcancel", n, !1));
            }
          }),
          (t._IOS_handleEvent = function (e, t) {
            if (e) {
              e.__touch.preventDefault &&
                t.preventDefault &&
                t.preventDefault();
              for (
                var n = t.changedTouches, r = t.type, o = 0, a = n.length;
                a > o;
                o++
              ) {
                var i = n[o],
                  l = i.identifier;
                i.target == e.canvas &&
                  (r == "touchstart"
                    ? this._handleStart(e, l, t, i.pageX, i.pageY)
                    : r == "touchmove"
                      ? this._handleMove(e, l, t, i.pageX, i.pageY)
                      : (r == "touchend" || r == "touchcancel") &&
                        this._handleEnd(e, l, t));
              }
            }
          }),
          (t._IE_enable = function (e) {
            var n = e.canvas,
              r = (e.__touch.f = function (n) {
                t._IE_handleEvent(e, n);
              });
            (window.navigator.pointerEnabled === void 0
              ? (n.addEventListener("MSPointerDown", r, !1),
                window.addEventListener("MSPointerMove", r, !1),
                window.addEventListener("MSPointerUp", r, !1),
                window.addEventListener("MSPointerCancel", r, !1),
                e.__touch.preventDefault && (n.style.msTouchAction = "none"))
              : (n.addEventListener("pointerdown", r, !1),
                window.addEventListener("pointermove", r, !1),
                window.addEventListener("pointerup", r, !1),
                window.addEventListener("pointercancel", r, !1),
                e.__touch.preventDefault && (n.style.touchAction = "none")),
              (e.__touch.activeIDs = {}));
          }),
          (t._IE_disable = function (e) {
            var t = e.__touch.f;
            window.navigator.pointerEnabled === void 0
              ? (window.removeEventListener("MSPointerMove", t, !1),
                window.removeEventListener("MSPointerUp", t, !1),
                window.removeEventListener("MSPointerCancel", t, !1),
                e.canvas &&
                  e.canvas.removeEventListener("MSPointerDown", t, !1))
              : (window.removeEventListener("pointermove", t, !1),
                window.removeEventListener("pointerup", t, !1),
                window.removeEventListener("pointercancel", t, !1),
                e.canvas && e.canvas.removeEventListener("pointerdown", t, !1));
          }),
          (t._IE_handleEvent = function (e, t) {
            if (e) {
              e.__touch.preventDefault &&
                t.preventDefault &&
                t.preventDefault();
              var n = t.type,
                r = t.pointerId,
                o = e.__touch.activeIDs;
              if (n == "MSPointerDown" || n == "pointerdown") {
                if (t.srcElement != e.canvas) return;
                ((o[r] = !0), this._handleStart(e, r, t, t.pageX, t.pageY));
              } else
                o[r] &&
                  (n == "MSPointerMove" || n == "pointermove"
                    ? this._handleMove(e, r, t, t.pageX, t.pageY)
                    : (n == "MSPointerUp" ||
                        n == "MSPointerCancel" ||
                        n == "pointerup" ||
                        n == "pointercancel") &&
                      (delete o[r], this._handleEnd(e, r, t)));
            }
          }),
          (t._handleStart = function (e, t, n, r, o) {
            var a = e.__touch;
            if (a.multitouch || !a.count) {
              var i = a.pointers;
              i[t] ||
                ((i[t] = !0), a.count++, e._handlePointerDown(t, n, r, o));
            }
          }),
          (t._handleMove = function (e, t, n, r, o) {
            e.__touch.pointers[t] && e._handlePointerMove(t, n, r, o);
          }),
          (t._handleEnd = function (e, t, n) {
            var r = e.__touch,
              o = r.pointers;
            o[t] && (r.count--, e._handlePointerUp(t, n, !0), delete o[t]);
          }),
          (e.Touch = t));
      })(),
      (e = e || {}),
      (function () {
        "use strict";
        var t = (e.EaselJS = e.EaselJS || {});
        ((t.version = "0.8.2"),
          (t.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"));
      })(),
      (i.Easel = e));
  },
  null,
);
