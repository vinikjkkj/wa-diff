__d(
  "SubscriptionList",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.$1 = []), (this.$2 = e), (this.$3 = t));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          var e = this,
            n = { callback: t };
          return (
            this.$1.push(n),
            this.$2 && this.$1.length === 1 && this.$2(),
            {
              remove: function () {
                var t = e.$1.indexOf(n);
                if (t === -1) {
                  r("FBLogger")("SubscriptionList").mustfix(
                    "SubscriptionList: Callback already removed.",
                  );
                  return;
                }
                (e.$1.splice(t, 1), e.$3 && e.$1.length === 0 && e.$3());
              },
            }
          );
        }),
        (t.getCallbacks = function () {
          return this.$1.map(function (e) {
            return e.callback;
          });
        }),
        (t.fireCallbacks = function (t) {
          this.getCallbacks().forEach(function (e) {
            e(t);
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
