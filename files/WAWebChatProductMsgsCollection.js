__d(
  "WAWebChatProductMsgsCollection",
  [
    "Promise",
    "WAWebBaseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.hasProductBefore = !0),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.delete = function () {
            (t.prototype.delete.call(this), this.stopListening(), this.reset());
          }),
          (a.queryProducts = function (r, a) {
            var t = r.msgs;
            this.hasProductBefore = !1;
            var i = t.filter(function (e) {
              return o("WAWebFrontendMsgGetters").getAsProduct(e) != null;
            });
            return (
              i.length === 0
                ? this.trigger("products_loaded")
                : this.add(i, { at: 0 }),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          r
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebMsgModel").Msg),
      (s.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = s));
  },
  98,
);
