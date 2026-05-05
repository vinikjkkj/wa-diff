__d(
  "WAWebJumpToQuotedMsgContextStack",
  ["WAWebEventEmitter", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "change",
      s = 500;
    function u() {
      return r("justknobx")._("4542");
    }
    var c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$JumpToQuotedMsgContextStackImpl$p_1 = new Map()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.push = function (n, r) {
            var t,
              o =
                (t = this.$JumpToQuotedMsgContextStackImpl$p_1.get(n)) != null
                  ? t
                  : [];
            (o.push(r),
              this.$JumpToQuotedMsgContextStackImpl$p_1.set(n, o),
              this.trigger(e, n));
          }),
          (r.pop = function (n) {
            var t = this.$JumpToQuotedMsgContextStackImpl$p_1.get(n);
            if (t == null || t.length === 0) return null;
            var r = t.pop();
            return (
              t.length === 0 &&
                this.$JumpToQuotedMsgContextStackImpl$p_1.delete(n),
              this.trigger(e, n),
              r
            );
          }),
          (r.peek = function (t) {
            var e = this.$JumpToQuotedMsgContextStackImpl$p_1.get(t);
            return e == null || e.length === 0 ? null : e[e.length - 1];
          }),
          (r.hasReturnPoint = function (t) {
            return this.peek(t) != null;
          }),
          (r.size = function (t) {
            var e, n;
            return (e =
              (n = this.$JumpToQuotedMsgContextStackImpl$p_1.get(t)) == null
                ? void 0
                : n.length) != null
              ? e
              : 0;
          }),
          (r.clear = function (n) {
            this.$JumpToQuotedMsgContextStackImpl$p_1.delete(n) &&
              this.trigger(e, n);
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      d = new c();
    ((l.JUMP_TO_QUOTED_MSG_CONTEXT_CHANGE = e),
      (l.RETURN_POINT_INVALIDATION_SCROLL_PX = s),
      (l.isJumpBackToQuotedMsgContextEnabled = u),
      (l.JumpToQuotedMsgContextStack = d));
  },
  98,
);
