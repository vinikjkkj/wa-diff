__d(
  "Event",
  [
    "$",
    "Arbiter",
    "DOMEvent",
    "DOMEventListener",
    "DOMQuery",
    "DataStore",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "Parent",
    "Scroll",
    "TimeSlice",
    "UserAgent",
    "dedupString",
    "fb-error",
    "getDocumentScrollElement",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s = n("fb-error").TAAL,
      u = "Event.listeners";
    Event.prototype || (Event.prototype = {});
    function c(e) {
      (e.type === "click" || e.type === "mouseover" || e.type === "keydown") &&
        n("Arbiter").inform("Event/stop", { event: e });
    }
    var d = (function () {
      "use strict";
      function e(e, t, n) {
        ((this.cancelBubble = !1),
          (this.target = e),
          (this.type = t),
          (this.data = n));
      }
      var t = e.prototype;
      return (
        (t.getData = function () {
          return ((this.data = this.data || {}), this.data);
        }),
        (t.stop = function () {
          return Event.stop(this);
        }),
        (t.prevent = function () {
          return Event.prevent(this);
        }),
        (t.isDefaultPrevented = function () {
          return Event.isDefaultPrevented(this);
        }),
        (t.kill = function () {
          return Event.kill(this);
        }),
        (t.getTarget = function () {
          return new (n("DOMEvent"))(this).target || null;
        }),
        e
      );
    })();
    function m(e) {
      if (e instanceof d) return e;
      if (
        (e ||
          (!window.addEventListener && document.createEventObject
            ? (e = window.event ? document.createEventObject(window.event) : {})
            : (e = {})),
        !e._inherits_from_prototype)
      )
        for (var t in Event.prototype)
          try {
            e[t] = Event.prototype[t];
          } catch (e) {}
      return e;
    }
    Object.assign(
      Event.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var e =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return e && e.nodeType ? e : null;
        },
        getModifiers: function () {
          var e = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          return (
            (e.access = n("UserAgent").isPlatform("Mac OS X")
              ? e.control
              : e.alt),
            (e.any = e.control || e.shift || e.alt || e.meta),
            e
          );
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      d.prototype,
    );
    var p = {
      listen: function (r, o, a, i, l) {
        if (
          (typeof a == "function" &&
            (a = n("TimeSlice").guard(
              a,
              n("dedupString")("Event.js " + o + " handler"),
            )),
          !l || typeof l == "boolean"
            ? (l = { passive: !1 })
            : (l = { passive: l.passive || !1 }),
          !(e || (e = n("ExecutionEnvironment"))).canUseDOM)
        )
          return new R(r, a, null, o, i, null, l);
        if (
          (typeof r == "string" && (r = n("$")(r)),
          typeof i == "undefined" && (i = Event.Priority.NORMAL),
          typeof o == "object")
        ) {
          var t = {};
          for (var c in o) t[c] = Event.listen(r, c, o[c], i, l);
          return t;
        }
        if (o.match(/^on/i))
          throw new TypeError(
            "Bad event name `" + o + "': use `click', not `onclick'.",
          );
        if (!r) {
          var d = s.blameToPreviousFrame(
            new Error("Cannot listen to an undefined element."),
          );
          throw (
            n("FBLogger")("event")
              .catching(d)
              .mustfix("Tried to listen to element of type %s", o),
            d
          );
        }
        if (r.nodeName == "LABEL" && o == "click") {
          var m = r.getElementsByTagName("input");
          r = m.length === 1 ? m[0] : r;
        } else if (r === window && o === "scroll") {
          var p = n("getDocumentScrollElement")();
          p !== document.documentElement && p !== document.body && (r = p);
        }
        var _ = n("DataStore").get(r, u, {}),
          f = g[o];
        (f && ((o = f.base), f.wrap && (a = f.wrap(a))), C(r, _, o, l));
        var h = _[o];
        i in h || (h[i] = []);
        var b = h[i].length,
          v = new R(r, a, _, o, i, b, l);
        return (
          (h[i][b] = v),
          h.numHandlers++,
          l.passive || (h.numNonPassiveHandlers++, y(r, _[o], o)),
          v
        );
      },
      stop: function (t) {
        var e = new (n("DOMEvent"))(t).stopPropagation();
        return (c(e.event), t);
      },
      prevent: function (t) {
        return (new (n("DOMEvent"))(t).preventDefault(), t);
      },
      isDefaultPrevented: function (t) {
        return new (n("DOMEvent"))(t).isDefaultPrevented(t);
      },
      kill: function (t) {
        var e = new (n("DOMEvent"))(t).kill();
        return (c(e.event), !1);
      },
      getKeyCode: function (t) {
        if (((t = new (n("DOMEvent"))(t).event), !t)) return !1;
        switch (t.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (t.shiftKey)
          switch (t.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return t.keyCode;
      },
      getPriorities: function () {
        if (!_) {
          var e = n("getObjectValues")(Event.Priority);
          (e.sort(function (e, t) {
            return e - t;
          }),
            (_ = e));
        }
        return _;
      },
      fire: function (t, n, r) {
        var e = new d(t, n, r),
          o;
        do {
          var a = Event.__getHandler(t, n);
          (a && (o = a(e)), (t = t.parentNode));
        } while (t && o !== !1 && !e.cancelBubble);
        return o !== !1;
      },
      __fire: function (t, n, r) {
        var e = Event.__getHandler(t, n);
        if (e) return e(m(r));
      },
      __getHandler: function (t, r) {
        var e = n("DataStore").get(t, u);
        return e && e[r] ? e[r].domHandler : t["on" + r];
      },
      getPosition: function (t) {
        t = new (n("DOMEvent"))(t).event;
        var e = n("getDocumentScrollElement")(),
          r = t.clientX + n("Scroll").getLeft(e),
          o = t.clientY + n("Scroll").getTop(e);
        return { x: r, y: o };
      },
    };
    Object.assign(Event, p);
    var _ = null,
      f = function (t) {
        return function (e) {
          if (!n("DOMQuery").contains(this, e.getRelatedTarget()))
            return t.call(this, e);
        };
      },
      g;
    if (
      (window.navigator.msPointerEnabled
        ? (g = {
            mousedown: { base: "MSPointerDown" },
            mousemove: { base: "MSPointerMove" },
            mouseup: { base: "MSPointerUp" },
            mouseover: { base: "MSPointerOver" },
            mouseout: { base: "MSPointerOut" },
            mouseenter: { base: "MSPointerOver", wrap: f },
            mouseleave: { base: "MSPointerOut", wrap: f },
          })
        : (g = {
            mouseenter: { base: "mouseover", wrap: f },
            mouseleave: { base: "mouseout", wrap: f },
          }),
      n("UserAgent").isBrowser("Firefox < 52"))
    ) {
      var h = function (t, n) {
        n = m(n);
        for (var e = n.getTarget(); e; )
          (Event.__fire(e, t, n), (e = e.parentNode));
      };
      (document.documentElement.addEventListener(
        "focus",
        h.bind(null, "focusin"),
        !0,
      ),
        document.documentElement.addEventListener(
          "blur",
          h.bind(null, "focusout"),
          !0,
        ));
    }
    var y = function (t, r, o) {
        var e = r.numNonPassiveHandlers == 0;
        e != r.options.passive &&
          (r.domHandlerRemover.remove(),
          (r.options.passive = e),
          (r.domHandlerRemover = n("DOMEventListener").add(t, o, r.domHandler, {
            passive: e,
          })));
      },
      C = function (t, r, o, a) {
        if (!(o in r)) {
          var e = n("TimeSlice").guard(
            S.bind(t, o),
            n("dedupString")("Event listenHandler " + o),
          );
          r[o] = {
            numHandlers: 0,
            numNonPassiveHandlers: 0,
            domHandlerRemover: n("DOMEventListener").add(t, o, e, a),
            domHandler: e,
            options: a,
          };
          var i = "on" + o;
          if (t[i]) {
            var l =
                t === document.documentElement
                  ? Event.Priority._BUBBLE
                  : Event.Priority.TRADITIONAL,
              s = t[i];
            ((t[i] = null), Event.listen(t, o, s, l, a));
          }
        }
      };
    function b(e) {
      return e.href.endsWith("#")
        ? e.href === document.location.href ||
            e.href === document.location.href + "#"
        : !1;
    }
    function v(e, t) {
      return e.nodeName === "INPUT" && e.type === t;
    }
    var S = function (t, r) {
      var e = m(r);
      if (!n("DataStore").get(this, u))
        throw new Error("Bad listenHandler context.");
      var o = n("DataStore").get(this, u)[t];
      if (!o) throw new Error("No registered handlers for `" + t + "'.");
      if (
        t == "click" ||
        t == "contextmenu" ||
        (t == "mousedown" && e.which == 2)
      ) {
        var a = e.getTarget(),
          i = n("Parent").byTag(a, "a");
        i instanceof HTMLAnchorElement &&
          i.href &&
          b(i) &&
          !v(a, "file") &&
          !v(a, "submit") &&
          e.prevent();
      }
      for (var l = Event.getPriorities(), s = 0; s < l.length; s++) {
        var c = l[s];
        if (c in o) {
          for (var d = o[c], p = 0; p < d.length; p++)
            if (d[p]) {
              var _ = d[p].fire(this, e);
              if (_ === !1) return e.kill();
              e.cancelBubble && e.stop();
            }
        }
      }
      return e.returnValue;
    };
    Event.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    var R = (function () {
      "use strict";
      function t(e, t, n, r, o, a, i) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$7 = r),
          (this.$6 = o),
          (this.$4 = a),
          (this.$5 = i));
      }
      var r = t.prototype;
      return (
        (r.isRemoved = function () {
          return !this.$3;
        }),
        (r.remove = function () {
          if ((e || (e = n("ExecutionEnvironment"))).canUseDOM) {
            if (this.isRemoved()) {
              n("FBLogger")("Event").warn(
                "Event handler has already been removed",
              );
              return;
            }
            var t = this.$3[this.$7];
            (t.numHandlers <= 1
              ? (t.domHandlerRemover.remove(), delete this.$3[this.$7])
              : (delete t[this.$6][this.$4],
                t.numHandlers--,
                this.$5.passive ||
                  (t.numNonPassiveHandlers--,
                  y(this.$1, this.$3[this.$7], this.$7))),
              (this.$3 = null));
          }
        }),
        (r.fire = function (r, o) {
          return (e || (e = n("ExecutionEnvironment"))).canUseDOM
            ? (l || (l = n("ErrorGuard"))).applyWithGuard(this.$2, r, [o], {
                name:
                  "eventhandler:" +
                  o.type +
                  ":" +
                  (typeof r.name == "string" ? r.name : r.id),
              })
            : !0;
        }),
        t
      );
    })();
    ((t.$E = Event.$E = m), (a.exports = Event));
  },
  null,
);
