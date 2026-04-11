__d(
  "WAWebMultiSelection",
  [
    "$InternalEnum",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebEventEmitter",
    "WAWebMuteGetters",
    "isEmptyIterable",
    "isEmptyObject",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Boolean", "Number"]),
      s = (function (t) {
        function n(n, r, o) {
          var a;
          return (
            o === void 0 && (o = e.Boolean),
            (a = t.call(this) || this),
            (a.list = n),
            (a.selected = n.reduce(function (t, n, r) {
              return ((t[r] = o === e.Number ? 0 : !1), t);
            }, {})),
            (a.getter = r),
            (a.selectedDataType = o),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.init = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = []), !r("isEmptyObject")(this.selected))
            ) {
              if (r("isEmptyIterable")(t)) {
                this.unsetAll();
                return;
              }
              ((this.selected = t.reduce(function (t, n, r) {
                var o = e.list.indexOf(n);
                return ((t[r] = o > -1 && e.selected[o]), t);
              }, {})),
                (this.list = t));
            }
          }),
          (a.unsetAll = function () {
            var t = this;
            r("lodash").forOwn(this.selected, function (n, r) {
              n && t.set(r, t.selectedDataType === e.Number ? 0 : !1);
            });
          }),
          (a.reset = function (t) {
            var e = this;
            (t === void 0 && (t = !0),
              r("lodash").forOwn(this.selected, function (n, r) {
                n &&
                  (e.trigger(e.getter(e.list[r]), !0, !0, t),
                  e.trigger("all", !0, !0, t));
              }));
          }),
          (a.set = function (t, n, r) {
            if (
              (n === void 0 && (n = !0),
              r === void 0 && (r = !0),
              !!this.list.length)
            ) {
              var e = Math.min(Math.max(t, -1), this.list.length - 1),
                o = e > -1 ? this.list[e] : void 0;
              o &&
                (this.selected[e] !== n &&
                  ((this.selected[e] = n), this.trigger(this.getter(o), n, r)),
                this.isUnreadChat(o) && this.trigger("unread_chat", n ? 1 : -1),
                this.isMutedChat(o) || this.trigger("unmuted_chat", n ? 1 : -1),
                this.trigger("all", n, r));
            }
          }),
          (a.setVal = function (t, n, r) {
            (n === void 0 && (n = !0), r === void 0 && (r = !0));
            var e = this.list.indexOf(t);
            (e === -1 &&
              ((e = this.list.length),
              this.list.push(t),
              (this.selected[e] = typeof n == "number" ? 0 : !1)),
              this.set(e, n, r));
          }),
          (a.getVal = function (t) {
            return this.selected[this.list.indexOf(t)];
          }),
          (a.setFirst = function (n) {
            (n === void 0 && (n = !0),
              !r("isEmptyIterable")(this.list) &&
                this.set(0, this.selectedDataType === e.Number ? 1 : !0, n));
          }),
          (a.setLast = function (n) {
            (n === void 0 && (n = !0),
              !r("isEmptyIterable")(this.list) &&
                this.set(
                  this.list.length - 1,
                  this.selectedDataType === e.Number ? 1 : !0,
                  n,
                ));
          }),
          (a.getSelected = function () {
            var e = this;
            return this.list.reduce(function (t, n, r) {
              return (e.selected[r] && t.push(n), t);
            }, []);
          }),
          (a.isSelected = function (t) {
            return !!this.getVal(t);
          }),
          (a.isUnreadChat = function (t) {
            return t instanceof o("WAWebChatModel").Chat
              ? o("WAWebChatGetters").getHasUnread(t)
              : !1;
          }),
          (a.isMutedChat = function (t) {
            return t instanceof o("WAWebChatModel").Chat
              ? o("WAWebMuteGetters").getIsMuted(t.mute)
              : !1;
          }),
          (a.isInList = function (t) {
            return this.list.includes(t);
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.default = s;
  },
  98,
);
