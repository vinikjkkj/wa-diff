__d(
  "WAWebStatusCountdownController",
  ["WALogger", "WAWebStatusEventHandlersMap"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = function () {},
      c = (function () {
        function t(t) {
          var n = this;
          ((this.addListeners = function (e) {
            n.$5.bulkSet(e);
          }),
            (this.removeListener = function (e, t) {
              n.$5.remove(e, t);
            }),
            (this.removeListeners = function () {
              n.$5.clear();
            }),
            (this.play = function () {
              if (n.$2) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Duplicate timer start",
                    ])),
                );
                return;
              }
              ((n.$2 = self.setTimeout(n.$6, n.$3)),
                (n.$4 = new Date().getTime()),
                n.$5.execute(
                  o("WAWebStatusEventHandlersMap").MediaEvents.OnPlay,
                  n.$3,
                  n.$1,
                ),
                n.$5.execute(
                  o("WAWebStatusEventHandlersMap").MediaEvents.OnLoad,
                  !1,
                  !0,
                ));
            }),
            (this.stop = function () {
              if (n.$2) {
                (self.clearTimeout(n.$2), (n.$2 = null));
                var e = new Date().getTime();
                ((n.$3 -= e - n.$4),
                  n.$5.execute(
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
              n.play();
            }),
            (this.pause = function () {
              n.stop();
            }),
            (this.$6 = function () {
              n.$5.execute(o("WAWebStatusEventHandlersMap").MediaEvents.OnEnd);
            }),
            (this.mute = u),
            (this.unmute = u),
            (this.$1 = t),
            (this.$3 = this.$1),
            (this.$4 = 0),
            (this.$5 = o("WAWebStatusEventHandlersMap").createHandlersMap()));
        }
        return babelHelpers.createClass(t, [
          {
            key: "duration",
            get: function () {
              return this.$1;
            },
          },
        ]);
      })();
    l.default = c;
  },
  98,
);
