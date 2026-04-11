__d(
  "WAWebUiIdleEventBus",
  ["invariant", "WALogger", "WAWebDebounce", "WAWebEventEmitter", "WAWebNoop"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      var t = function () {
        e();
      };
      return ((t.cancel = r("WAWebNoop")), t);
    }
    var c = { UI_IDLE: "ui_idle" },
      d = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.uiBusy = 0),
            (n.$UiIdleEventBusImpl$p_1 = u),
            (n.$UiIdleEventBusImpl$p_2 = null),
            (n.$UiIdleEventBusImpl$p_3 = r("WAWebDebounce")(
              function () {
                n.uiBusy &&
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "UiIdleEventBus:clearUIBusy uibusy timeout",
                      ])),
                  ),
                  (n.uiBusy = 0),
                  n.$UiIdleEventBusImpl$p_4());
              },
              1e3,
              { maxWait: 5e3 },
            )),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.setDeferUntilDocumentFlushed = function (t) {
            ((this.$UiIdleEventBusImpl$p_1 = t),
              (this.$UiIdleEventBusImpl$p_2 = null));
          }),
          (a.$UiIdleEventBusImpl$p_5 = function () {
            var e = this;
            return (
              this.$UiIdleEventBusImpl$p_2 == null &&
                (this.$UiIdleEventBusImpl$p_2 = this.$UiIdleEventBusImpl$p_1(
                  function () {
                    (e.uiBusy === 0 || s(0, 75716, e.uiBusy),
                      e.uiBusy === 0 &&
                        (e.$UiIdleEventBusImpl$p_3.cancel(),
                        e.trigger(c.UI_IDLE)));
                  },
                )),
              this.$UiIdleEventBusImpl$p_2
            );
          }),
          (a.$UiIdleEventBusImpl$p_4 = function () {
            this.$UiIdleEventBusImpl$p_5()();
          }),
          (a.setUiBusy = function (t) {
            var e = this.uiBusy || 0;
            if (t) {
              var n;
              (++e,
                this.$UiIdleEventBusImpl$p_3(),
                (n = this.$UiIdleEventBusImpl$p_2) == null || n.cancel());
            } else --e;
            (e < 0 && (e = 0),
              (this.uiBusy = e),
              e === 0 &&
                (this.$UiIdleEventBusImpl$p_3.cancel(),
                this.$UiIdleEventBusImpl$p_4()));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      m = new d();
    l.UiIdleEventBus = m;
  },
  98,
);
