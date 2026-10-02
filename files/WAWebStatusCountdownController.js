__d(
  "WAWebStatusCountdownController",
  ["WALogger", "WAWebStatusEventHandlersMap"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {}
    var c = function (n) {
      var t = this;
      ((this.addListeners = function (e) {
        t.$4.bulkSet(e);
      }),
        (this.removeListener = function (e, n) {
          t.$4.remove(e, n);
        }),
        (this.removeListeners = function () {
          t.$4.clear();
        }),
        (this.play = function () {
          if (t.$1 != null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Duplicate timer start",
                ])),
            );
            return;
          }
          ((t.$1 = self.setTimeout(t.$5, t.$2)),
            (t.$3 = Date.now()),
            t.$4.execute(
              o("WAWebStatusEventHandlersMap").MediaEvents.OnPlay,
              t.$2,
              t.duration,
            ),
            t.$4.execute(
              o("WAWebStatusEventHandlersMap").MediaEvents.OnLoad,
              !1,
              !0,
            ));
        }),
        (this.stop = function () {
          if (t.$1 != null) {
            (self.clearTimeout(t.$1), (t.$1 = null));
            var e = Date.now();
            ((t.$2 -= e - t.$3),
              t.$4.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnPause,
              ));
          } else
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Timer stop called on stopped timer",
                ])),
            );
        }),
        (this.resume = function () {
          t.play();
        }),
        (this.pause = function () {
          t.stop();
        }),
        (this.$5 = function () {
          t.$4.execute(o("WAWebStatusEventHandlersMap").MediaEvents.OnEnd);
        }),
        (this.mute = u),
        (this.unmute = u),
        (this.duration = n),
        (this.$2 = this.duration),
        (this.$3 = 0),
        (this.$4 = o("WAWebStatusEventHandlersMap").createHandlersMap()));
    };
    l.default = c;
  },
  98,
);
