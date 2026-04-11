__d(
  "WAWebSingleSelection",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          t === void 0 && (t = []),
          r === void 0 && (r = "next"),
          (o = e.call(this) || this),
          (o.list = t),
          (o.index = -1),
          (o.value = void 0),
          (o.getter = n),
          (o.deleteDir = r),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.init = function (t, n) {
          (t === void 0 && (t = []), n === void 0 && (n = !1));
          var e = n,
            r,
            o;
          if (((this.list = t), this.value != null)) {
            if (t.length === 0) {
              this.unset();
              return;
            }
            if (((r = t.indexOf(this.value)), r > -1)) {
              if (r === this.index) return;
              ((o = !0), (e = !1));
            } else if (!e || this.index < 0) r = -1;
            else {
              var a = this.deleteDir === "prev" ? -1 : 0;
              ((r = this.index + a),
                (r = Math.max(r, 0)),
                (r = Math.min(r, t.length - 1)),
                (o = r > -1));
            }
            this.set(r, e, o);
          }
        }),
        (n.unset = function () {
          var e = this.value;
          ((this.value = void 0),
            (this.index = -1),
            e != null &&
              (this.$SingleSelection$p_1(e, !1), this.trigger("unset")));
        }),
        (n.reset = function (t, n) {
          (t === void 0 && (t = !0),
            n === void 0 && (n = !0),
            !(this.index < 0) &&
              this.value != null &&
              this.$SingleSelection$p_1(
                this.value,
                n === !0 ? "focus" : "select",
                t,
              ));
        }),
        (n.set = function (t, n, r) {
          if (
            (n === void 0 && (n = !0),
            r === void 0 && (r = !0),
            !!this.list.length)
          ) {
            var e = Math.min(Math.max(t, -1), this.list.length - 1),
              o = this.value,
              a = e > -1 ? this.list[e] : void 0;
            (a != null
              ? ((this.value = a),
                this.$SingleSelection$p_1(a, n === !0 ? "focus" : "select"))
              : r === !0 && (this.value = void 0),
              r === !0 &&
                o != null &&
                o !== a &&
                this.$SingleSelection$p_1(o, !1),
              this.trigger("change", { current: this.value, previous: o }),
              (this.index = e));
          }
        }),
        (n.getVal = function () {
          return this.value;
        }),
        (n.setVal = function (t, n) {
          n === void 0 && (n = !0);
          var e = this.list.indexOf(t);
          e > -1 ? this.set(e, n) : (this.unset(), (this.value = t));
        }),
        (n.setFirst = function (t) {
          (t === void 0 && (t = !0),
            this.list.length !== 0 && this.set(0, t, !0));
        }),
        (n.setLast = function (t) {
          (t === void 0 && (t = !0),
            this.list.length !== 0 && this.set(this.list.length - 1, t, !0));
        }),
        (n.setPrev = function (t, n) {
          (t === void 0 && (t = !0),
            n === void 0 && (n = !1),
            this.list.length !== 0 && this.set(this.prev(n), t, !0));
        }),
        (n.setNext = function (t, n) {
          (t === void 0 && (t = !0),
            n === void 0 && (n = !1),
            this.list.length !== 0 && this.set(this.next(n), t, !0));
        }),
        (n.prev = function (t) {
          return (
            t === void 0 && (t = !1),
            this.list.length === 0
              ? -1
              : t
                ? this.index - 1 < 0
                  ? this.list.length - 1
                  : this.index - 1
                : this.index === -1
                  ? -1
                  : this.index - 1
          );
        }),
        (n.next = function (t) {
          return (
            t === void 0 && (t = !1),
            this.list.length === 0
              ? -1
              : t
                ? this.index + 1 > this.list.length - 1
                  ? 0
                  : this.index + 1
                : Math.min(this.index + 1, this.list.length - 1)
          );
        }),
        (n.$SingleSelection$p_1 = function (t) {
          if (this.getter != null) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            this.trigger.apply(this, [this.getter(t)].concat(n));
          }
        }),
        (n.getList = function () {
          return this.list;
        }),
        (n.setIndex = function (t) {
          this.set(t);
        }),
        (n.setItemKey = function (t) {
          var e = this;
          if (this.getter != null) {
            var n = this.list.findIndex(function (n) {
              return (e.getter == null ? void 0 : e.getter(n)) === t;
            });
            n > -1 ? this.set(n) : this.unset();
          }
        }),
        t
      );
    })(r("WAWebEventEmitter"));
    l.default = e;
  },
  98,
);
