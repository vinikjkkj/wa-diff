__d(
  "ObservableMixin",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      this.__observableEvents = {};
    }
    ((e.prototype = {
      inform: function (t) {
        for (
          var e = this,
            n = Array.prototype.slice.call(arguments, 1),
            r = Array.prototype.slice.call(this.getSubscribers(t)),
            o = function () {
              if (r[a] === null) return 1;
              try {
                r[a].apply(e, n);
              } catch (e) {
                window.setTimeout(function () {
                  throw e;
                }, 0);
              }
            },
            a = 0;
          a < r.length;
          a++
        )
          o();
        return this;
      },
      getSubscribers: function (t) {
        return this.__observableEvents[t] || (this.__observableEvents[t] = []);
      },
      clearSubscribers: function (t) {
        return (t && (this.__observableEvents[t] = []), this);
      },
      subscribe: function (t, n) {
        var e = this.getSubscribers(t);
        return (e.push(n), this);
      },
      unsubscribe: function (t, n) {
        for (var e = this.getSubscribers(t), r = 0; r < e.length; r++)
          if (e[r] === n) {
            e.splice(r, 1);
            break;
          }
        return this;
      },
    }),
      (i.default = e));
  },
  66,
);
