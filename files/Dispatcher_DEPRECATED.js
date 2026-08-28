__d(
  "Dispatcher_DEPRECATED",
  ["invariant", "FBLogger", "err", "monitorCodeUse"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "ID_",
      u = (function () {
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = !1),
            (this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$5 = 1));
        }
        var n = t.prototype;
        return (
          (n.register = function (t, n) {
            var e = this.__genID(n);
            return (this.$1.set(e, t), e);
          }),
          (n.unregister = function (t) {
            (this.$1.get(t) || s(0, 1331, t), this.$1.delete(t));
          }),
          (n.waitFor = function (t) {
            this.$2 || s(0, 1332);
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (this.$4.get(n)) {
                this.$3.get(n) || s(0, 2380, n);
                continue;
              }
              (this.$1.get(n) || s(0, 2381, n), this.$7(n));
            }
          }),
          (n.dispatch = function (t) {
            var e,
              n = this;
            (d(this.$2, (e = this.$6) == null ? void 0 : e.payload, t),
              this.$8(t));
            try {
              this.$1.forEach(function (e, t) {
                n.$4.get(t) || n.$7(t);
              });
            } finally {
              this.$9();
            }
          }),
          (n.isDispatching = function () {
            return this.$2;
          }),
          (n.$7 = function (t) {
            this.$4.set(t, !0);
            var e = this.$1.get(t),
              n = this.$6;
            (e && n != null && this.__invokeCallback(t, e, n.payload),
              this.$3.set(t, !0));
          }),
          (n.__invokeCallback = function (t, n, r) {
            n(r);
          }),
          (n.$8 = function (t) {
            for (var e of this.$1.keys())
              (this.$4.set(e, !1), this.$3.set(e, !1));
            ((this.$6 = { payload: t }), (this.$2 = !0));
          }),
          (n.$9 = function () {
            ((this.$6 = void 0), (this.$2 = !1));
          }),
          (n.__genID = function (n) {
            for (
              var t = n != null && n !== "" ? n + "_" : e,
                r = n != null && n !== "" ? n : t + this.$5++;
              this.$1.get(r);
            )
              r = t + this.$5++;
            return r;
          }),
          t
        );
      })();
    function c(e) {
      var t = "<unknown>";
      if (e == null || typeof e != "object") return t;
      if (typeof e.type == "string") return e.type;
      if (typeof e.actionType == "string") return e.actionType;
      var n = e.action;
      return n == null || typeof n != "object"
        ? t
        : typeof n.type == "string"
          ? n.type
          : typeof n.actionType == "string"
            ? n.actionType
            : t;
    }
    function d(e, t, n) {
      if (e) {
        var o = r("err")("Cannot dispatch in the middle of a dispatch");
        throw (
          r("FBLogger")("flux_dispatcher")
            .catching(o)
            .mustfix(
              "Tried to dispatch action %s while already dispatching %s",
              c(n),
              c(t),
            ),
          o
        );
      }
    }
    l.default = u;
  },
  98,
);
