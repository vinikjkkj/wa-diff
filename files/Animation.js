__d(
  "Animation",
  [
    "BrowserSupport",
    "Style",
    "clearInterval",
    "clearTimeout",
    "cr:6108",
    "cr:6114",
    "cr:6669",
    "getVendorPrefixedName",
    "requestAnimationFrame",
    "setIntervalAcrossTransitions",
    "setTimeoutAcrossTransitions",
    "shallowArrayEqual",
    "shield",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s;
    function u(e) {
      if (t == this) return new u(e);
      ((this.obj = e),
        this._reset_state(),
        (this.queue = []),
        (this.last_attr = null),
        (this.unit = "px"),
        (this.behaviorOverrides = { ignoreUserScroll: !1 }));
    }
    function c(e) {
      return o("BrowserSupport").hasCSS3DTransforms() ? p(e) : m(e);
    }
    function d(e) {
      return e.toFixed(8);
    }
    function m(e) {
      return (
        (e = [e[0], e[4], e[1], e[5], e[12], e[13]]),
        "matrix(" + e.map(d).join(",") + ")"
      );
    }
    function p(e) {
      return "matrix3d(" + e.map(d).join(",") + ")";
    }
    function _(e, t) {
      e || (e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      for (var n = [], r = 0; r < 4; r++)
        for (var o = 0; o < 4; o++) {
          for (var a = 0, i = 0; i < 4; i++) a += e[r * 4 + i] * t[i * 4 + o];
          n[r * 4 + o] = a;
        }
      return n;
    }
    function f(e, t) {
      return !(e instanceof u) || !(t instanceof u)
        ? !1
        : e.obj === t.obj &&
            r("shallowArrayEqual")(
              Object.keys(e.state.attrs),
              Object.keys(t.state.attrs),
            );
    }
    var g = 0;
    ((u.prototype._reset_state = function () {
      this.state = { attrs: {}, duration: 500 };
    }),
      (u.prototype.stop = function () {
        return (this._reset_state(), (this.queue = []), this);
      }),
      (u.prototype._build_container = function () {
        if (this.container_div) {
          this._refresh_container();
          return;
        }
        if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
          ((this.container_div = this.obj.firstChild),
            this.container_div.__animation_refs++,
            this._refresh_container());
          return;
        }
        var e = document.createElement("div");
        ((e.style.padding = "0px"),
          (e.style.margin = "0px"),
          (e.style.border = "0px"),
          (e.__animation_refs = 1));
        for (var t = this.obj.childNodes; t.length; ) e.appendChild(t[0]);
        (this.obj.appendChild(e),
          (this._orig_overflow = this.obj.style.overflow),
          (this.obj.style.overflow = "hidden"),
          (this.container_div = e),
          this._refresh_container());
      }),
      (u.prototype._refresh_container = function () {
        ((this.container_div.style.height = "auto"),
          (this.container_div.style.width = "auto"),
          (this.container_div.style.height =
            this.container_div.offsetHeight + this.unit),
          (this.container_div.style.width =
            this.container_div.offsetWidth + this.unit));
      }),
      (u.prototype._destroy_container = function () {
        if (this.container_div) {
          if (!--this.container_div.__animation_refs) {
            for (var e = this.container_div.childNodes; e.length; )
              this.obj.appendChild(e[0]);
            this.obj.removeChild(this.container_div);
          }
          ((this.container_div = null),
            (this.obj.style.overflow = this._orig_overflow));
        }
      }));
    var h = 1,
      y = 2,
      C = 3;
    u.prototype._attr = function (e, t, n) {
      e = e.replace(/-[a-z]/gi, function (e) {
        return e.substring(1).toUpperCase();
      });
      var r = !1;
      switch (e) {
        case "background":
          return (this._attr("backgroundColor", t, n), this);
        case "backgroundColor":
        case "borderColor":
        case "color":
          t = R(t);
          break;
        case "opacity":
          t = parseFloat(t, 10);
          break;
        case "height":
        case "width":
          t == "auto" ? (r = !0) : (t = parseInt(t, 10));
          break;
        case "borderWidth":
        case "lineHeight":
        case "fontSize":
        case "margin":
        case "marginBottom":
        case "marginLeft":
        case "marginRight":
        case "marginTop":
        case "padding":
        case "paddingBottom":
        case "paddingLeft":
        case "paddingRight":
        case "paddingTop":
        case "bottom":
        case "left":
        case "right":
        case "top":
        case "scrollTop":
        case "scrollLeft":
          t = parseInt(t, 10);
          break;
        case "rotateX":
        case "rotateY":
        case "rotateZ":
          t = (parseInt(t, 10) * Math.PI) / 180;
          break;
        case "translateX":
        case "translateY":
        case "translateZ":
        case "scaleX":
        case "scaleY":
        case "scaleZ":
          t = parseFloat(t, 10);
          break;
        case "rotate3d":
          return (
            this._attr("rotateX", t[0], n),
            this._attr("rotateY", t[1], n),
            this._attr("rotateZ", t[2], n),
            this
          );
        case "rotate":
          return (this._attr("rotateZ", t, n), this);
        case "scale3d":
          this._attr("scaleZ", t[2], n);
        case "scale":
          return (
            this._attr("scaleX", t[0], n),
            this._attr("scaleY", t[1], n),
            this
          );
        case "translate3d":
          this._attr("translateZ", t[2], n);
        case "translate":
          return (
            this._attr("translateX", t[0], n),
            this._attr("translateY", t[1], n),
            this
          );
        default: {
          var o = new Error(e + " is not a supported attribute!");
          throw (o.stack, o);
        }
      }
      switch (
        (this.state.attrs[e] === void 0 && (this.state.attrs[e] = {}),
        r && (this.state.attrs[e].auto = !0),
        n)
      ) {
        case C:
          this.state.attrs[e].start = t;
          break;
        case y:
          this.state.attrs[e].by = !0;
        case h:
          this.state.attrs[e].value = t;
          break;
      }
    };
    function b(e) {
      var t,
        n = parseInt((t = r("Style")).get(e, "paddingLeft"), 10),
        o = parseInt(t.get(e, "paddingRight"), 10),
        a = parseInt(t.get(e, "borderLeftWidth"), 10),
        i = parseInt(t.get(e, "borderRightWidth"), 10);
      return e.offsetWidth - (n || 0) - (o || 0) - (a || 0) - (i || 0);
    }
    function v(e) {
      var t,
        n = parseInt((t = r("Style")).get(e, "paddingTop"), 10),
        o = parseInt(t.get(e, "paddingBottom"), 10),
        a = parseInt(t.get(e, "borderTopWidth"), 10),
        i = parseInt(t.get(e, "borderBottomWidth"), 10);
      return e.offsetHeight - (n || 0) - (o || 0) - (a || 0) - (i || 0);
    }
    ((u.prototype.setUnit = function (e) {
      return ((this.unit = e), this);
    }),
      (u.prototype.to = function (e, t) {
        return (
          t === void 0
            ? this._attr(this.last_attr, e, h)
            : (this._attr(e, t, h), (this.last_attr = e)),
          this
        );
      }),
      (u.prototype.by = function (e, t) {
        return (
          t === void 0
            ? this._attr(this.last_attr, e, y)
            : (this._attr(e, t, y), (this.last_attr = e)),
          this
        );
      }),
      (u.prototype.from = function (e, t) {
        return (
          t === void 0
            ? this._attr(this.last_attr, e, C)
            : (this._attr(e, t, C), (this.last_attr = e)),
          this
        );
      }),
      (u.prototype.duration = function (e) {
        return ((this.state.duration = e || 0), this);
      }),
      (u.prototype.checkpoint = function (e, t) {
        return (
          e === void 0 && (e = 1),
          (this.state.checkpoint = e),
          this.queue.push(this.state),
          this._reset_state(),
          (this.state.checkpointcb = t),
          this
        );
      }),
      (u.prototype.blind = function () {
        return ((this.state.blind = !0), this);
      }),
      (u.prototype.hide = function () {
        return ((this.state.hide = !0), this);
      }),
      (u.prototype.show = function () {
        return ((this.state.show = !0), this);
      }),
      (u.prototype.ease = function (e) {
        return ((this.state.ease = e), this);
      }),
      (u.prototype.CSSAnimation = function (e) {
        var t = { duration: this.state.duration };
        (this.state.ondone && (t.callback = this.state.ondone), e(this.obj, t));
      }),
      (u.prototype.go = function () {
        var e = Date.now();
        this.queue.push(this.state);
        for (var t = 0; t < this.queue.length; t++)
          ((this.queue[t].start = e - g),
            this.queue[t].checkpoint &&
              (e += this.queue[t].checkpoint * this.queue[t].duration));
        return (L(this), this);
      }),
      (u.prototype.goAndStopOthers = function () {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          f(n, this) && (n.stop(), e.splice(t--, 1));
        }
        return this.go();
      }),
      (u.prototype._show = function () {
        n("cr:6108").show(this.obj);
      }),
      (u.prototype._hide = function () {
        n("cr:6108").hide(this.obj);
      }),
      (u.prototype.overrideBehavior = function (e) {
        return (
          (this.behaviorOverrides = babelHelpers.extends(
            {},
            this.behaviorOverrides,
            e,
          )),
          this
        );
      }),
      (u.prototype._frame = function (e) {
        var o = !0,
          a = !1,
          i;
        function l(e) {
          return document.documentElement[e] || document.body[e];
        }
        function s(e, t) {
          return e === document.body ? l(t) : e[t];
        }
        function u(e, t) {
          return (
            (t.lastScrollTop !== void 0 &&
              t.lastScrollTop !== s(e.obj, "scrollTop")) ||
            (t.lastScrollLeft !== void 0 &&
              t.lastScrollLeft !== s(e.obj, "scrollLeft"))
          );
        }
        function d(e, t) {
          ((t.lastScrollTop = s(e.obj, "scrollTop")),
            (t.lastScrollLeft = s(e.obj, "scrollLeft")));
        }
        for (var m = 0; m < this.queue.length; m++) {
          var p = this.queue[m];
          if (p.start > e) {
            o = !1;
            continue;
          }
          if (
            (p.checkpointcb &&
              (this._callback(p.checkpointcb, e - p.start),
              (p.checkpointcb = null)),
            p.started === void 0)
          ) {
            p.show && this._show();
            for (var f in p.attrs)
              if (p.attrs[f].start === void 0) {
                switch (f) {
                  case "backgroundColor":
                  case "borderColor":
                  case "color":
                    ((i = R(
                      r("Style").get(
                        this.obj,
                        f == "borderColor" ? "borderLeftColor" : f,
                      ),
                    )),
                      p.attrs[f].by &&
                        ((p.attrs[f].value[0] = Math.min(
                          255,
                          Math.max(0, p.attrs[f].value[0] + i[0]),
                        )),
                        (p.attrs[f].value[1] = Math.min(
                          255,
                          Math.max(0, p.attrs[f].value[1] + i[1]),
                        )),
                        (p.attrs[f].value[2] = Math.min(
                          255,
                          Math.max(0, p.attrs[f].value[2] + i[2]),
                        ))));
                    break;
                  case "opacity":
                    ((i = r("Style").getOpacity(this.obj)),
                      p.attrs[f].by &&
                        (p.attrs[f].value = Math.min(
                          1,
                          Math.max(0, p.attrs[f].value + i),
                        )));
                    break;
                  case "height":
                    ((i = v(this.obj)),
                      p.attrs[f].by && (p.attrs[f].value += i));
                    break;
                  case "width":
                    ((i = b(this.obj)),
                      p.attrs[f].by && (p.attrs[f].value += i));
                    break;
                  case "scrollLeft":
                  case "scrollTop":
                    ((i = s(this.obj, f)),
                      p.attrs[f].by && (p.attrs[f].value += i),
                      d(this, p));
                    break;
                  case "rotateX":
                  case "rotateY":
                  case "rotateZ":
                  case "translateX":
                  case "translateY":
                  case "translateZ":
                    ((i = n("cr:6669").get(this.obj, f, 0)),
                      p.attrs[f].by && (p.attrs[f].value += i));
                    break;
                  case "scaleX":
                  case "scaleY":
                  case "scaleZ":
                    ((i = n("cr:6669").get(this.obj, f, 1)),
                      p.attrs[f].by && (p.attrs[f].value += i));
                    break;
                  default:
                    ((i = parseInt(r("Style").get(this.obj, f), 10) || 0),
                      p.attrs[f].by && (p.attrs[f].value += i));
                    break;
                }
                p.attrs[f].start = i;
              }
            if (
              (p.attrs.height && p.attrs.height.auto) ||
              (p.attrs.width && p.attrs.width.auto)
            ) {
              this._destroy_container();
              for (var g in {
                height: 1,
                width: 1,
                fontSize: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingLeft: 1,
                paddingRight: 1,
                paddingTop: 1,
                paddingBottom: 1,
              })
                p.attrs[g] &&
                  (this.obj.style[g] =
                    p.attrs[g].value +
                    (typeof p.attrs[g].value == "number" ? this.unit : ""));
              (p.attrs.height &&
                p.attrs.height.auto &&
                (p.attrs.height.value = v(this.obj)),
                p.attrs.width &&
                  p.attrs.width.auto &&
                  (p.attrs.width.value = b(this.obj)));
            }
            ((p.started = !0), p.blind && this._build_container());
          }
          var h = (e - p.start) / p.duration;
          h >= 1 ? ((h = 1), p.hide && this._hide()) : (o = !1);
          var y = p.ease ? p.ease(h) : h;
          !a && h != 1 && p.blind && (a = !0);
          for (var C in p.attrs)
            switch (C) {
              case "backgroundColor":
              case "borderColor":
              case "color":
                p.attrs[C].start[3] != p.attrs[C].value[3]
                  ? (this.obj.style[C] =
                      "rgba(" +
                      S(y, p.attrs[C].start[0], p.attrs[C].value[0], !0) +
                      "," +
                      S(y, p.attrs[C].start[1], p.attrs[C].value[1], !0) +
                      "," +
                      S(y, p.attrs[C].start[2], p.attrs[C].value[2], !0) +
                      "," +
                      S(y, p.attrs[C].start[3], p.attrs[C].value[3], !1) +
                      ")")
                  : (this.obj.style[C] =
                      "rgb(" +
                      S(y, p.attrs[C].start[0], p.attrs[C].value[0], !0) +
                      "," +
                      S(y, p.attrs[C].start[1], p.attrs[C].value[1], !0) +
                      "," +
                      S(y, p.attrs[C].start[2], p.attrs[C].value[2], !0) +
                      ")");
                break;
              case "opacity":
                r("Style").set(
                  this.obj,
                  "opacity",
                  S(y, p.attrs[C].start, p.attrs[C].value),
                );
                break;
              case "height":
              case "width":
                this.obj.style[C] =
                  y == 1 && p.attrs[C].auto
                    ? "auto"
                    : S(y, p.attrs[C].start, p.attrs[C].value, !0) + this.unit;
                break;
              case "scrollLeft":
              case "scrollTop":
                var L = this.obj === document.body;
                if (!this.behaviorOverrides.ignoreUserScroll && u(this, p))
                  (delete p.attrs.scrollTop, delete p.attrs.scrollLeft);
                else {
                  var E = S(y, p.attrs[C].start, p.attrs[C].value, !0);
                  (L
                    ? C == "scrollLeft"
                      ? t.scrollTo(E, l("scrollTop"))
                      : t.scrollTo(l("scrollLeft"), E)
                    : (this.obj[C] = E),
                    d(this, p));
                }
                break;
              case "translateX":
              case "translateY":
              case "translateZ":
              case "rotateX":
              case "rotateY":
              case "rotateZ":
              case "scaleX":
              case "scaleY":
              case "scaleZ":
                n("cr:6669").set(
                  this.obj,
                  C,
                  S(y, p.attrs[C].start, p.attrs[C].value, !1),
                );
                break;
              default:
                this.obj.style[C] =
                  S(y, p.attrs[C].start, p.attrs[C].value, !0) + this.unit;
                break;
            }
          var k = null,
            I = n("cr:6669").get(this.obj, "translateX", 0),
            T = n("cr:6669").get(this.obj, "translateY", 0),
            D = n("cr:6669").get(this.obj, "translateZ", 0);
          ((typeof I == "number" && I !== 0) ||
            (typeof T == "number" && T !== 0) ||
            (typeof D == "number" && D !== 0)) &&
            (k = _(k, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, I, T, D, 1]));
          var x = n("cr:6669").get(this.obj, "scaleX", 1),
            $ = n("cr:6669").get(this.obj, "scaleY", 1),
            P = n("cr:6669").get(this.obj, "scaleZ", 1);
          (x - 1 || $ - 1 || P - 1) &&
            (k = _(k, [x, 0, 0, 0, 0, $, 0, 0, 0, 0, P, 0, 0, 0, 0, 1]));
          var N = n("cr:6669").get(this.obj, "rotateX", 0);
          typeof N == "number" &&
            N !== 0 &&
            (k = _(k, [
              1,
              0,
              0,
              0,
              0,
              Math.cos(N),
              Math.sin(-N),
              0,
              0,
              Math.sin(N),
              Math.cos(N),
              0,
              0,
              0,
              0,
              1,
            ]));
          var M = n("cr:6669").get(this.obj, "rotateY", 0);
          typeof M == "number" &&
            M !== 0 &&
            (k = _(k, [
              Math.cos(M),
              0,
              Math.sin(M),
              0,
              0,
              1,
              0,
              0,
              Math.sin(-M),
              0,
              Math.cos(M),
              0,
              0,
              0,
              0,
              1,
            ]));
          var w = n("cr:6669").get(this.obj, "rotateZ", 0);
          typeof w == "number" &&
            w !== 0 &&
            (k = _(k, [
              Math.cos(w),
              Math.sin(-w),
              0,
              0,
              Math.sin(w),
              Math.cos(w),
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ]));
          var A = r("getVendorPrefixedName")("transform");
          if (A)
            if (k) {
              var F = c(k);
              r("Style").set(this.obj, A, F);
            } else o && r("Style").set(this.obj, A, null);
          h == 1 &&
            (this.queue.splice(m--, 1),
            this._callback(p.ondone, e - p.start - p.duration));
        }
        return (!a && this.container_div && this._destroy_container(), !o);
      }),
      (u.prototype.ondone = function (e) {
        return ((this.state.ondone = e), this);
      }),
      (u.prototype._callback = function (e, t) {
        e && ((g = t), e.call(this), (g = 0));
      }));
    function S(e, t, n, r) {
      return (r ? parseInt : parseFloat)((n - t) * e + t, 10);
    }
    function R(e) {
      var t = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(e);
      if (t)
        return [
          parseInt(t[1].length == 1 ? t[1] + t[1] : t[1], 16),
          parseInt(t[2].length == 1 ? t[2] + t[2] : t[2], 16),
          parseInt(t[3].length == 1 ? t[3] + t[3] : t[3], 16),
          1,
        ];
      var n =
        /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(e);
      if (n)
        return [
          parseInt(n[1], 10),
          parseInt(n[2], 10),
          parseInt(n[3], 10),
          n[4] ? parseFloat(n[4]) : 1,
        ];
      if (e == "transparent") return [255, 255, 255, 0];
      var r = new Error("Named color attributes are not supported.");
      throw (r.stack, r);
    }
    function L(t) {
      (e.push(t),
        e.length === 1 &&
          (r("requestAnimationFrame")
            ? r("requestAnimationFrame")(k)
            : (s = r("setIntervalAcrossTransitions")(k, 20))),
        r("requestAnimationFrame") && E(),
        k(Date.now(), !0));
    }
    function E() {
      if (!r("requestAnimationFrame")) {
        var t = new Error("Ending timer only valid with requestAnimationFrame");
        throw (t.stack, t);
      }
      for (var n = 0, o = 0; o < e.length; o++)
        for (var a = e[o], i = 0; i < a.queue.length; i++) {
          var l = a.queue[i].start + a.queue[i].duration;
          l > n && (n = l);
        }
      s && (r("clearTimeout")(s), (s = null));
      var u = Date.now();
      n > u && (s = r("setTimeoutAcrossTransitions")(r("shield")(k), n - u));
    }
    function k(t, n) {
      for (
        var o = Date.now(), a = n === !0 ? e.length - 1 : 0;
        a < e.length;
        a++
      )
        try {
          e[a]._frame(o) || e.splice(a--, 1);
        } catch (t) {
          e.splice(a--, 1);
        }
      e.length === 0
        ? s &&
          (r("requestAnimationFrame")
            ? r("clearTimeout")(s)
            : r("clearInterval")(s),
          (s = null))
        : r("requestAnimationFrame") && r("requestAnimationFrame")(k);
    }
    ((u.ease = {}),
      (u.ease.begin = function (e) {
        return Math.sin((Math.PI / 2) * (e - 1)) + 1;
      }),
      (u.ease.end = function (e) {
        return Math.sin(0.5 * Math.PI * e);
      }),
      (u.ease.both = function (e) {
        return 0.5 * Math.sin(Math.PI * (e - 0.5)) + 0.5;
      }),
      (u.prependInsert = function (e, t) {
        u.insert(e, t, n("cr:6114").prependContent);
      }),
      (u.appendInsert = function (e, t) {
        u.insert(e, t, n("cr:6114").appendContent);
      }),
      (u.insert = function (e, t, n) {
        (r("Style").set(t, "opacity", 0),
          n(e, t),
          new u(t).from("opacity", 0).to("opacity", 1).duration(400).go());
      }),
      (i.exports = u));
  },
  34,
);
